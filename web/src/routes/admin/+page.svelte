<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    let name: string = '';
    let address: string = '';
    let adminEmail: string = '';
    let contactMethod: string = '';
    let donationLinks: string = ''; // JSON string
    let iqamaTimes: string = ''; // JSON string
    let message: string = '';
  
    const submitAdminInfo = async () => {
      try {
        const response = await fetch('/api/admin/masjid', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_ADMIN_TOKEN}`
          },
          body: JSON.stringify({
            name,
            address,
            admin_email: adminEmail,
            contact_method: contactMethod,
            donation_links: JSON.parse(donationLinks),
            iqama_times: JSON.parse(iqamaTimes)
          })
        });
        const data = await response.json();
        if (response.ok) {
          message = 'Masjid information updated successfully.';
        } else {
          message = data.error || 'Failed to update masjid information.';
        }
      } catch (err: any) {
        message = err.message || 'An error occurred.';
      }
    };
  </script>
  
  <main>
    <h1>Admin Panel - Update Masjid Information</h1>
    <form on:submit|preventDefault={submitAdminInfo}>
      <div>
        <label for="name">Masjid Name:</label>
        <input type="text" id="name" bind:value={name} required />
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" bind:value={address} required />
      </div>
      <div>
        <label for="adminEmail">Admin Email:</label>
        <input type="email" id="adminEmail" bind:value={adminEmail} required />
      </div>
      <div>
        <label for="contactMethod">Best Contact Method:</label>
        <input type="text" id="contactMethod" bind:value={contactMethod} required />
      </div>
      <div>
        <label for="donationLinks">Donation Links (JSON):</label>
        <textarea id="donationLinks" bind:value={donationLinks} placeholder='{"paypal": "https://paypal.me/yourmasjid"}' required></textarea>
      </div>
      <div>
        <label for="iqamaTimes">Iqama Times (JSON):</label>
        <textarea id="iqamaTimes" bind:value={iqamaTimes} placeholder='{"Fajr": "05:00", "Dhuhr": "12:30"}' required></textarea>
      </div>
      <button type="submit">Update Information</button>
    </form>
  
    {#if message}
      <p>{message}</p>
    {/if}
  </main>
  
  <style>
    main {
      padding: 2rem;
      max-width: 600px;
      margin: auto;
      font-family: Arial, sans-serif;
    }
    form div {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }
    input, textarea {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
    }
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
    }
    p {
      margin-top: 1rem;
      font-weight: bold;
    }
  </style>