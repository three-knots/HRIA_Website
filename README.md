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
   DATABASE_URL=postgres://hria_user:your_secure_password@db:5432/hria_db
   ```

   Replace `your_secure_password` with a strong password of your choice.

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

To add new features or modify existing ones:

1. Create a new branch for your feature
2. Make changes in the appropriate directory (`web/` for frontend/backend, `db/` for database changes)
3. Test your changes locally using the instructions in the "Local Testing" section
4. Create a pull request for review

### Local Testing

We use Docker for local testing. Follow these steps:

1. Ensure you're in the project root directory.

2. Build and start the containers:

   ```
   docker-compose up --build
   ```

3. Once the containers are running, you can access the web application at `http://localhost:3000`.

4. To run tests, open a new terminal window and execute:

   ```
   docker-compose exec web npm run test
   ```

5. For development with hot-reloading, use:

   ```
   docker-compose exec web npm run dev
   ```

6. To stop the containers, use Ctrl+C in the terminal where docker-compose is running, or run:
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

## Troubleshooting

If you encounter issues:

1. Ensure Docker is running
2. Check the console output for error messages
3. Verify that the `.env` file is correctly set up
4. Try stopping the containers, removing all containers and volumes, and then rebuilding:
   ```
   docker-compose down
   docker system prune -a
   docker volume prune
   docker-compose up --build
   ```

## License

GNU General Public License

## Contact

For issues or questions, please use our [GitHub Issues page](https://github.com/three-knots/HRIA_Website/issues).
