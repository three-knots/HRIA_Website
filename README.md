# Highlands Ranch Islamic Association Website

Welcome to the Highlands Ranch Islamic Association (HRIA) website project! This repository contains the source code for the HRIA website, built with SvelteKit and Supabase. Follow the instructions below to set up the project locally for development.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Development Server](#running-the-development-server)
- [Additional Resources](#additional-resources)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your machine:

- [Supabase CLI](https://supabase.com/docs/guides/cli)
- [Bun](https://bun.sh/) (Alternatively, you can use `npm` or `yarn`)
- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (if not using Bun)

## Installation

### Clone the Repository

```
bash
git clone https://github.com/three-knots/HRIA_website.git
cd HRIA_website

```

### Install Dependencies

Using Bun:

```bash
bun install
```

Or using npm:

```bash
npm install
```

## Configuration

### Set Up Environment Variables

_Create a `.env` file in the root directory. (we will fill in values in next steps)_

```env
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
DATABASE_URL=your_database_url
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Create a GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers).
2. Create a new OAuth App for this project.
3. Add the `Client ID` and `Client Secret` to your `.env` file as shown above.

### Initialize Supabase

```bash
supabase init
supabase status
```

- Use the output from `supabase status` to fill in the remaining environment variables in your `.env` file.

## Running the Development Server

Start the development server with:

Using Bun (recommended):

```bash
bun run dev
```

Or using npm:

```bash
npm run dev
```

- The application will be accessible at `http://localhost:5173`.

## Running the Database Server

View Supabase status with:

```bash
supabase status
```

The main console for Supabase is called Supabase Studio, and can be accessed through the `STUDIO URL` link from the status output.

## Additional Resources

- **Frontend Development**

  - Tailwind CSS documentation: [ShadCN Svelte](https://www.shadcn-svelte.com/docs)
  - Forms handling with Zod: [zod-form-data](https://www.npmjs.com/package/zod-form-data)

- **Tutorials**
  - [Drizzle with Supabase Tutorial](https://orm.drizzle.team/learn/tutorials/drizzle-with-supabase)
  - [SvelteKit Supabase Auth Guide](https://supabase.com/docs/guides/auth/server-side/sveltekit)
  - [Main Tutorial Video from initial setup](https://youtu.be/lEWghUOta-4?si=ksLuVTZ8BQ0DL2_4)

## Troubleshooting

### Common Issues

- If something breaks and you're unsure why, try deleting the `.svelte-kit` and `node_modules` directories, then reinstall dependencies and restart the development server:

  ```bash
  rm -rf .svelte-kit node_modules
  bun install
  bun run dev
  ```

### Environment Variables

- Ensure all required environment variables are correctly set in the `.env` file.
- Verify that GitHub OAuth credentials are correctly added.

### Supabase Issues

- Check Supabase status with `supabase status`.
- Ensure Docker is running if Supabase requires it.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

## Acknowledgments

[Ben Davis](https://www.youtube.com/@bmdavis419) for his tutorial that inspired me to change to supabase integration for the db, and the wonderful tutorial to set it up initially.

[shadcdn](https://www.shadcn-svelte.com/) For the component library they graciously offer.

[Sveltekit](https://kit.svelte.dev/docs/introduction), [Supabase](https://supabase.com/docs), [Tailwind](https://tailwindcss.com/docs/installation), [Drizzle](https://orm.drizzle.team/docs/overview), [Zod-form-data](https://www.npmjs.com/package/zod-form-data), and [Rich Harris](https://x.com/Rich_Harris) - Thank you all for providing amazing free products with fantastic documentation to help get things running properly!

---

Feel free to contribute to the project by submitting issues or pull requests. For more detailed information, refer to the project's documentation and resources.

Payload for CMS:
    https://payloadcms.com/blog/setting-up-payload-with-supabase-for-your-nextjs-app-a-step-by-step-guide
    