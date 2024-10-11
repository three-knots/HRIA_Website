#!/bin/bash
set -e

# Function to wait for Supabase to be ready
wait_for_supabase() {
  echo "Waiting for Supabase to be ready..."
  while ! curl -s http://supabase:54321/health > /dev/null; do
    echo "Supabase is not ready yet..."
    sleep 5
  done
  echo "Supabase is up!"
}

# Function to retrieve Supabase credentials
retrieve_supabase_credentials() {
  # Replace the following commands with actual commands to retrieve your anon key
  # For example, using Supabase CLI or API endpoints if available

  # Example placeholder values
  SUPABASE_ANON_KEY="your_generated_anon_key"
  SUPABASE_URL="http://supabase:54321"

  # Write to the root .env file
  echo "DATABASE_URL=postgresql://supabase_user:supabase_pass@supabase:5432/supabase_db" > /app/.env
  echo "PUBLIC_SUPABASE_URL=${SUPABASE_URL}" >> /app/.env
  echo "PUBLIC_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}" >> /app/.env
}

# Wait for Supabase service to be healthy
wait_for_supabase

# Retrieve and set environment variables
retrieve_supabase_credentials

# Export the variables to be available in this shell
export $(grep -v '^#' /app/.env | xargs)

# Start the web application
exec npm run dev