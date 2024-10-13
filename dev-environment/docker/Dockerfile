# Use the official Node.js 18 Alpine image as the base
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache libc6-compat bash curl

# Stage for installing dependencies
FROM base AS deps

# Copy package files
COPY package-lock.json* ./

# Install dependencies based on the available lockfile
RUN \
   npm ci; \
   corepack enable pnpm && pnpm install --frozen-lockfile; \
# Stage for building the application
FROM base AS builder

# Set the working directory
WORKDIR /app

# Copy installed dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Build the application
RUN \
  npm run build; 
# Production stage
FROM base AS runner

# Set the working directory
WORKDIR /app

# Set environment to production
ENV NODE_ENV production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the built application from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.svelte-kit ./.svelte-kit
COPY --from=builder /app/node_modules ./node_modules

# Copy the entrypoint script
COPY --from=base /app/dev-environment/docker/entrypoint.sh /app/dev-environment/docker/entrypoint.sh
RUN chmod +x /app/dev-environment/docker/entrypoint.sh

# Change ownership to the non-root user
RUN chown -R nextjs:nodejs .svelte-kit public node_modules dev-environment/docker/entrypoint.sh

# Switch to the non-root user
USER nextjs

# Expose the application port
EXPOSE 5173

# Use the entrypoint script
ENTRYPOINT ["/app/dev-environment/docker/entrypoint.sh"]