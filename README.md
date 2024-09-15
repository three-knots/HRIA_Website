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

## Project Structure

```
HRIA_Website/
├── web/                 # SvelteKit application and Jekyll CMS
├── db/                  # Database-related files and scripts
└── docker-compose.yml   # Docker Compose configuration
```

## Setup and Installation

1. Clone the repository:

```

git clone https://github.com/three-knots/HRIA_Website.git
cd HRIA_Website

```

2. Build and run the containers:

```

docker-compose up --build

```

3. Access the website at `http://localhost:3000`

## Development

To add new features or modify existing ones, follow these steps:

1. Create a new branch for your feature
2. Implement the feature in the appropriate directory (`web/` for frontend/backend, `db/` for database changes)
3. Update the `docker-compose.yml` file if necessary
4. Test your changes locally
5. Create a pull request for review

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

GNU General Public License

## Contact

https://github.com/three-knots/HRIA_Website/issues
