Install supabase cli, bun, docker

create OAuth app on github for this project and add ClientID to .env under GITHUB_CLIENT_ID=
also create client secret on same page and put in .env under GITHUB_CLIENT_SECRET=

`supabase status` gets you all the variables you need to fill out next step of .env
DATABASE_URL=<DB URL>
PUBLIC_SUPABASE_URL=<API URL>
PUBLIC_SUPABASE_ANON_KEY=<anon key>

https://orm.drizzle.team/learn/tutorials/drizzle-with-supabase

https://orm.drizzle.team/kit-docs/overview

https://orm.drizzle.team/docs/overview

https://supabase.com/docs/guides/auth/server-side/creating-a-client

supabase server side rendering setup https://supabase.com/docs/guides/auth/server-side/sveltekit

\*\* main tutorial at https://youtu.be/lEWghUOta-4?si=ksLuVTZ8BQ0DL2_4

Apparently if something breaks and you aren't sure why, you should delete .svelte-kit and node-modules directories and repopulate them with bun i and then bun run dev.

Tailwind from https://www.shadcn-svelte.com/docs

Forms from https://www.npmjs.com/package/zod-form-data

## View DB:

supabase status to list supabase info, then click 'STUDIO URL' to pull up db visual display

## View Site:

bun run dev to start sveltekit, will give you link to 'localhost:5173'
