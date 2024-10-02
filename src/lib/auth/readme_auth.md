# Readme for auth pages

The website initially needs auth for the admin portal only. Someone needs to be able to log in to update posts on Jekyll or whatever CMS we end up using. Also to change prayer times, contact numbers, donation links, etc.

## Adding the tool share pages and other additions

Once we implement these, we will need to have an auth provider that allows people to manage their listings, check out or sign up for things, and an admin role that can help to manage these accounts and listings.  
Github auth is currently set up, but we will need something more ubiquitous than that for normal people to use. Email auth is not ideal, perhaps use facebook or some other provider?

[supabase auth instructions](https://supabase.com/docs/guides/auth/social-login)
