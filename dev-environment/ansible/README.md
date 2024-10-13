# HRIA Website Development Environment Setup

## Introduction

This repository contains an Ansible playbook designed to automate the setup of the development environment for the HRIA Website project. The playbook handles the installation of necessary dependencies, cloning of the project repository, configuration of environment variables, initialization of Git for version control, and validation of the environment setup. This setup aims to streamline the onboarding process for new developers, ensuring a consistent and efficient development environment.

## Prerequisites

Before running the Ansible playbook, ensure that the following tools are installed on your machine:

- **Git**: Version control system. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **Docker**: Platform for developing, shipping, and running applications. [Install Docker](https://docs.docker.com/engine/install/)
- **Bun**: Fast JavaScript runtime. [Install Bun](https://bun.sh/docs/installation)
- **Ansible**: Automation tool for configuration management. [Install Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
- **Supabase CLI**: Command-line interface for Supabase. [Install Supabase CLI](https://supabase.com/docs/guides/cli/getting-started)
- **GitHub CLI (Optional)**: For automated retrieval of GitHub credentials. [Install GitHub CLI](https://cli.github.com/manual/installation)

> **Note**: It's assumed that these prerequisites are already installed as per the project requirements.

## Directory Structure

Organize your Ansible files as follows:

```
dev-environment/
└── ansible/
    ├── playbook.yml
    ├── hosts.ini
    ├── README.md
    └── templates/
        └── env.j2
```

## Usage

### 1. Navigate to the Ansible Directory

Open your terminal and navigate to the `ansible` directory within your development environment.

```bash
cd dev-environment/ansible
```

### 2. Run the Ansible Playbook

Execute the Ansible playbook to set up the project environment. This playbook will automate tasks such as cloning the repository, installing dependencies, initializing and starting Supabase, configuring Git, and validating the environment.

```bash
ansible-playbook -i hosts.ini playbook.yml
```

### 3. Provide Required Inputs

During the execution of the playbook, you will be prompted to enter the following inputs:

- **Git Repository URL**: Defaults to `https://github.com/three-knots/HRIA_Website.git`
- **Installation Directory**: Defaults to `~/dev-environment/HRIA_Website`

#### GitHub Credentials Handling

The playbook attempts to retrieve `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` from your environment variables. If these are not set, placeholders will be inserted into the `.env` file, and you will need to manually update them.

**Options to Provide GitHub Credentials:**

1. **Set Environment Variables Before Running the Playbook**

   - **Linux/macOS:**
     ```bash
     export GITHUB_CLIENT_ID=your_actual_github_client_id
     export GITHUB_CLIENT_SECRET=your_actual_github_client_secret
     ```

   - **Windows (Command Prompt):**
     ```cmd
     set GITHUB_CLIENT_ID=your_actual_github_client_id
     set GITHUB_CLIENT_SECRET=your_actual_github_client_secret
     ```

   - **Windows (PowerShell):**
     ```powershell
     $env:GITHUB_CLIENT_ID="your_actual_github_client_id"
     $env:GITHUB_CLIENT_SECRET="your_actual_github_client_secret"
     ```

2. **Manually Update the `.env` File After Playbook Execution**

   If the environment variables are not set, the playbook will insert placeholder values into the `.env` file. You should navigate to the `.env` file and replace these placeholders with your actual credentials.

   ```bash
   cd ~/dev-environment/HRIA_Website
   nano .env
   ```

   Update the following lines with actual values:

   ```env
   GITHUB_CLIENT_ID=your_actual_github_client_id
   GITHUB_CLIENT_SECRET=your_actual_github_client_secret
   ```

   Save and close the file.

> **Security Tip**: Ensure that sensitive information like `GITHUB_CLIENT_SECRET` and `PUBLIC_SUPABASE_ANON_KEY` are kept secure and are **not** committed to version control.

### 4. Post-Setup Steps

After the playbook completes successfully:

1. **Navigate to the Installation Directory**:

    ```bash
    cd ~/dev-environment/HRIA_Website
    ```

2. **Start the Development Server**:

    ```bash
    bun run dev
    ```

    The application should now be accessible at [http://localhost:5173](http://localhost:5173).

## Environment Validation Checks

To ensure that your development environment is set up correctly, the playbook includes validation checks. These checks verify that all necessary tools are installed, environment variables are correctly configured, and services like Supabase are running as expected.

### Included Validation Checks

1. **Check Required Tools and Versions**
    - Ensures that `git`, `docker`, `bun`, and `ansible` are installed.
    - Verifies that the installed versions meet the project's requirements.

2. **Validate Environment Variables**
    - Confirms that all necessary environment variables are set in the `.env` file.
    - Ensures that no placeholder values remain in critical environment variables.

3. **Verify Supabase Initialization**
    - Checks that Supabase is initialized and running correctly.

4. **Confirm Dependency Installation**
    - Ensures that all project dependencies are installed without issues.

### Handling Validation Failures

If any validation step fails, the playbook will provide a clear error message indicating what went wrong, allowing you to address the issue promptly.

## Environment Variables

Sensitive information is managed through environment variables. The playbook generates a `.env` file from the `env.j2` template, populated with your provided credentials and automatically fetched Supabase credentials.

### `.env.example`

An `.env.example` file should be present in the project root to serve as a template for developers. It outlines the required environment variables without exposing sensitive values.

```env
# .env.example

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
DATABASE_URL=your_database_url
PUBLIC_SUPABASE_URL=your_supabase_api_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Add any other environment variables your project requires
```

Developers can copy this template to a `.env` file:

```bash
cp .env.example .env
```

Ensure that the `.env` file is added to `.gitignore` to prevent accidental commits of sensitive information.

### `.gitignore`

```gitignore
# .gitignore

.env
.env.local
.env.*.local
node_modules/
dist/
```

## Git Configuration

The playbook initializes a Git repository and sets the Git user name and email based on your local system's user.

### Setting Git User Name and Email

- **Git User Name**: Derived from your system's `USER` environment variable.
- **Git User Email**: Set to `USER@localhost` by default.

Ensure that these configurations are correct for accurate commit history.

## Handling Supabase Credentials

Each developer should have their own set of Supabase credentials to maintain isolation and security.

### Steps to Manage Supabase Credentials

1. **Initialize and Start Supabase**: The playbook runs `supabase init` and `supabase start` to set up the local Supabase environment.
2. **Fetch Credentials Automatically**: The playbook retrieves the `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` from the local Supabase setup without user input.
3. **Environment Variables**: These credentials are injected into the `.env` file for secure access within the application.

> **Best Practices**:
> - Do not share your Supabase credentials.
> - Use environment variables to manage sensitive information securely.

## Error Handling

The playbook includes error handling for various tasks, including environment validation. If any task fails:

- **Review Output**: Check the terminal output for error messages.
- **Address Issues**: Resolve any missing dependencies or configuration errors based on the provided messages.
- **Re-run Playbook**: After fixing issues, re-execute the playbook to continue the setup.

## Customization

Feel free to modify the `env.j2` template or extend the playbook with additional tasks as your project evolves. This flexibility allows you to adapt the setup process to meet changing requirements.

## Summary of Steps for Developers

1. **Run Ansible Playbook**:

    ```bash
    cd dev-environment/ansible
    ansible-playbook -i hosts.ini playbook.yml
    ```

2. **Provide GitHub Credentials**:
    - **Option 1**: Set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` as environment variables before running the playbook.
    - **Option 2**: If environment variables are not set, the playbook will insert placeholders into the `.env` file. After the playbook completes, manually update these placeholders with your actual credentials.

3. **Clone the Repository**: The playbook clones the repository into the specified installation directory.

4. **Install Dependencies**: Dependencies like SvelteKit, Supabase, Tailwind, Shadcn-Svelte, Drizzle, and Zod-Form-Data are installed automatically.

5. **Initialize and Start Supabase Locally**: The playbook runs `supabase init` and `supabase start`, setting up the local Supabase environment and fetching necessary credentials.

6. **Configure Environment Variables**: A `.env` file is generated from the template with your provided and automatically fetched credentials.

7. **Run the Development Server**:

    ```bash
    cd ~/dev-environment/HRIA_Website
    bun run dev
    ```

    Access the application at [http://localhost:5173](http://localhost:5173).

## Additional Recommendations

- **Version Control for Migrations**: Ensure all database migrations are tracked in version control to maintain consistency across environments.
- **Secure Storage for Secrets**: For enhanced security, consider using secret management tools like [Vault](https://www.vaultproject.io/) or services like [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).
- **Comprehensive Documentation**: Maintain clear and up-to-date documentation to guide developers through the setup and contribute effectively.
- **Environment Validation**: Implemented through the Ansible playbook to catch missing or incorrect configurations early in the development process.

By following these guidelines, you ensure a secure, scalable, and developer-friendly setup that accommodates individual configurations without compromising the project's integrity or security.