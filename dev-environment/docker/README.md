# Docker Development Environment

## READ FIRST

This section is still in progress and will probably be completely rewrote in the future.  I used generative AI to try to help make this quickly, but it made too many mistakes and will need to be redone from the ground up.  I am also changing the way that the app interacts with the database, and where we souce the database info from, so this is all going to have to be rethought.

entrypoint.sh is also just full of placeholder values at this point.


This directory contains all the necessary Docker configurations to set up the development environment for the HRIA Website project.

## Prerequisites

Ensure you have Docker and Docker Compose installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup Instructions

1. **Navigate to the Docker Directory**

   ```bash
   cd dev-environment/docker
   ```

2. **Configure Environment Variables**

   Before starting the Docker containers, ensure that the necessary environment variables are set. You can create a `.env` file in this directory or ensure they are defined in your system.

   ```env
   NODE_ENV=development
   DATABASE_URL=postgresql://supabase_user:supabase_pass@db:5432/supabase_db
   PUBLIC_SUPABASE_URL=http://supabase:54321
   PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

   > **Security Tip:** Do not commit the `.env` file with sensitive information to version control.

3. **Start the Docker Containers**

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images and start the services as defined in `docker-compose.yml`.

4. **Access the Application**

   Once the containers are up and running, you can access the HRIA Website development server at [http://localhost:5173](http://localhost:5173).

5. **Stopping the Containers**

   To stop the development environment, press `Ctrl+C` in the terminal where Docker Compose is running or run:

   ```bash
   docker-compose down
   ```

## Services Included

- **web:** The SvelteKit application running in development mode with hot-reloading enabled.
- **supabase:** Supabase services including PostgreSQL database. Accessible via ports `54321` (API) and `54322` (PostgreSQL).

## Notes

- **Volumes:**
  - The `web` service mounts the project directory to `/app` inside the container to facilitate live code editing.
  - `node_modules` are mounted as a separate volume to improve performance and avoid permission issues.
  - Supabase data is persisted in the `supabase_data` Docker volume.

- **Ports:**
  - `5173`: SvelteKit development server.
  - `54321`: Supabase API.
  - `54322`: Supabase PostgreSQL database.

- **Environment Variables:**
  - Ensure that `DATABASE_URL` points to the Supabase PostgreSQL service defined in `docker-compose.yml`.
  - Replace `your_supabase_anon_key`, `your_github_client_id`, and `your_github_client_secret` with your actual credentials.

## Troubleshooting

- **Lockfile Issues:**
  If you encounter lockfile-related errors, ensure that your `package.json` and lockfiles (`package-lock.json`) are consistent.

- **Supabase Initialization:**
  If Supabase fails to start, check the logs for more details:

  ```bash
  docker-compose logs supabase
  ```

- **Database Connection:**
  Ensure that the `DATABASE_URL` in your environment variables matches the credentials defined in `docker-compose.yml`.

## Contribution

Feel free to contribute to improving the Docker setup by submitting issues or pull requests.

For more detailed information, refer to the main project [README.md](../../README.md).
