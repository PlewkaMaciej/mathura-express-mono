# syntax=docker.io/docker/dockerfile:1
FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

# 1. Kopiujemy package.json i package-lock.json z root repo
COPY package.json package-lock.json ./

# 2. Kopiujemy package.json z frontend
COPY frontend/package.json frontend/

#############################
# Instalacja deps          #
#############################
FROM base AS deps
WORKDIR /app
RUN npm ci

#############################
# Budowanie frontendu      #
#############################
FROM base AS builder
WORKDIR /app/frontend

# Kopiujemy zależności
COPY --from=deps /app/node_modules ./node_modules

# Kopiujemy kod frontendu
COPY frontend/ ./

# Kopiujemy zwykły .env do kontenera
COPY frontend/.env .env

ENV NODE_ENV=production

# Budujemy frontend
RUN npm run build

#############################
# Produkcyjny obraz        #
#############################
FROM node:22-alpine AS runner
WORKDIR /app/frontend

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Kopiujemy build i zależności
COPY --from=builder /app/frontend/public ./public
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/node_modules ./node_modules
COPY --from=builder /app/frontend/package.json ./
COPY --from=builder /app/frontend/.env .env

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
