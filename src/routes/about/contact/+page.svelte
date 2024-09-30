<script lang="ts">
    import type { PageData } from "./$types.js";
    import ContactForm from "./contact-form.svelte";
    export let data: PageData;
   </script>
    
   <ContactForm data={data.form} />