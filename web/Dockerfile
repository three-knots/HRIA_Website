FROM alpine:latest

# Install Node.js, npm, and other necessary tools
RUN apk add --no-cache nodejs npm postgresql postgresql-contrib ruby ruby-dev build-base

# Install Jekyll and Bundler
RUN gem install jekyll bundler

# Set up PostgreSQL
RUN mkdir -p /run/postgresql && chown -R postgres:postgres /run/postgresql
USER postgres
RUN initdb -D /var/lib/postgresql/data
RUN pg_ctl start -D /var/lib/postgresql/data && \
    createdb mosque_db && \
    pg_ctl stop -D /var/lib/postgresql/data
USER root

# Set up working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install pg buffer

# Copy the rest of the application
COPY . .

# Set environment variable
ENV DATABASE_URL=postgres://hria_user:your_secure_password@db:5432/hria_db
#TODO: Add Secure Password
# Build the SvelteKit app
RUN npm run build

EXPOSE 3000

CMD ["node", "build"]