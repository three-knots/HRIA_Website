# HRIA Website

## Overview

HRIA Website is a containerized web application for a mosque, built using Svelte, SvelteKit, PostgreSQL, and Jekyll as a CMS. The project aims to provide a lightweight, modular, and easily extendable website solution.

## Features

- Lightweight and resource-efficient
- Modular architecture for easy feature extension
- Basic CMS functionality using Jekyll
- Google Calendar and iCal integration
- Prayer time calculator with admin adjustments

## Tech Stack

- Frontend: Svelte with SvelteKit
- Backend: SvelteKit for server-side rendering and API routes
- Database: PostgreSQL
- CMS: Jekyll
- Containerization: Docker and Docker Compose

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

## Project Structure

```

HRIA_Website/
├── web/ # SvelteKit application and Jekyll CMS
├── db/ # Database-related files and scripts
└── docker-compose.yml # Docker Compose configuration
```

## Setup and Installation

1. Clone the repository:

   ```
   git clone https://github.com/three-knots/HRIA_Website.git
   cd HRIA_Website
   ```

2. Create a `.env` file in the root directory with the following content:

   ```
   env
   DATABASE_URL=postgres://hria_user:your_secure_password@db:5432/hria_db
   ADMIN_TOKEN=your_secure_admin_token # Only if you implemented admin authentication
   ALADHAN_API_KEY=your_aladhan_api_key # If required
   ```

- Replace `your_secure_password` with a strong password.
- Replace `your_secure_admin_token` with a secure token for admin authentication.
- Replace `your_aladhan_api_key` with your AlAdhan API key if necessary.

3. Open the `docker-compose.yml` file and update the following sections with the same password you set in the `.env` file:

   - In the `web` service section, update the `DATABASE_URL` environment variable:

     ```yaml
     web:
       ...
       environment:
         - DATABASE_URL=postgres://hria_user:your_secure_password@db:5432/hria_db
     ```

   - In the `db` service section, update the `POSTGRES_PASSWORD`:

     ```yaml
     db:
       ...
       environment:
         POSTGRES_PASSWORD: your_secure_password
     ```

   Make sure to replace `your_secure_password` with the actual password you chose in step 2.

4. Build and run the containers:

   ```
   docker-compose up --build
   ```

5. Access the website at `http://localhost:3000`

## Development

# Development

The project uses npm for dependency management and scripts. The `package.json` file in the `web/` directory contains all necessary dependencies and scripts.

### Running in Development Mode

1. **Start the Containers:**

   ```bash
   docker-compose up --build
   ```

2. **Access the Website:**

   Navigate to [http://localhost:3000](http://localhost:3000).

### Adding New Dependencies

1. **Add the Dependency:**

   Inside the `web/` directory, install the new package:

   ```bash
   cd web
   npm install your-new-package
   ```

2. **Update `package.json`:**

   The `package.json` should automatically update with the new dependency.

3. **Rebuild the Containers:**

   ```bash
   cd ..
   docker-compose up --build
   ```

### Local Testing

We use Docker for local testing. Follow these steps:

1. Ensure you're in the project root directory.

2. Build and start the containers:

   ```
   docker-compose up --build
   ```

3. Once the containers are running, you can access the web application at `http://localhost:3000`.

4. For development with hot-reloading, use:

   ```
   docker-compose exec web npm run dev
   ```

5. To stop the containers, use Ctrl+C in the terminal where docker-compose is running, or run:
   ```
   docker-compose down
   ```

Remember to rebuild the containers if you make changes to the Dockerfile or add new dependencies:

```
docker-compose down
docker-compose up --build
```

## Contributing

Contributions are welcome! Please follow our [branching strategy](project_documentation/branching-strategy.md) when contributing.

## Project Structure

- `web/`: Contains the SvelteKit application and Jekyll CMS.
  - `src/`: Source files for the application.
    - `lib/`: Libraries and utilities.
    - `routes/`: Application routes.
      - `api/`: API routes.
        - `admin/masjid/`: API route for managing masjid information.
        - `masjid/`: API route for fetching masjid information.
      - `prayer-times/`: Pages related to prayer times.
        - `month/`: Monthly prayer times page.
        - `+page.svelte`: Daily prayer times page.
      - `admin/`: Admin page for updating masjid information.
  - `package.json`: Defines project dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration.
  - `vite.config.ts`: Configuration for Vite.
- `db/`: Contains database initialization scripts.
  - `init.sql`: SQL script to set up the database schema.
- `docker-compose.yml`: Defines the services, networks, and volumes for Docker.

---

## Database

The PostgreSQL database is initialized with tables defined in `db/init.sql`. If you need to make changes to the database schema:

1. **Update the `init.sql` File:**

   Modify or add new tables as needed.

2. **Rebuild and Restart the Containers:**

   ```bash
   docker-compose down
   docker-compose up --build
   ```

---

## Troubleshooting

If you encounter issues:

1. **Ensure Docker is Running:**

   Verify that Docker and Docker Compose are installed and running.

2. **Check Console Output:**

   Review the terminal output for any error messages.

3. **Verify `.env` File:**

   Ensure that the `.env` file is correctly set up with all necessary environment variables.

4. **Rebuild Containers:**

   ```bash
   docker-compose down
   docker system prune -a
   docker volume prune
   docker-compose up --build
   ```

5. **Check API Endpoints:**

   Ensure that the AlAdhan API endpoints are accessible and that any required API keys are correctly set.

## License

GNU General Public License

## Contact

For issues or questions, please use our [GitHub Issues page](https://github.com/three-knots/HRIA_Website/issues).

## Additional Notes

- **Security:** Ensure that sensitive information like `ADMIN_TOKEN` and API keys are securely managed and not exposed publicly.
- **Validation:** Implement proper validation on the admin forms to prevent invalid data entries.
- **Styling:** Adjust the styling of your components as needed to match your website's theme.

---

## References

- [AlAdhan Prayer Times API](https://aladhan.com/prayer-times-api)
- [AlAdhan API OpenAPI Specification](https://raw.githubusercontent.com/islamic-network/openapi/master/aladhan-api/combined.yaml)
- [Zippopotam.us API for Geocoding](http://www.zippopotam.us/)
