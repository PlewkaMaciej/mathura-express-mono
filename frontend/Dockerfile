# syntax=docker.io/docker/dockerfile:1

FROM node:22-bullseye AS base
WORKDIR /app

# =========================
# SYSTEM DEPS (lightningcss fix)
# =========================
RUN apt-get update && apt-get install -y \
    libc6 \
    build-essential \
    python3 \
    make \
    g++

# =========================
# DEPS
# =========================
FROM base AS deps

COPY package.json package-lock.json ./

RUN npm install


# =========================
# BUILDER
# =========================
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 🔥 ważne dla Next 15 + lightningcss
ENV NEXT_DISABLE_LIGHTNINGCSS=1

# 🔥 naprawa binarki lightningcss
RUN npm rebuild lightningcss

# jeśli masz Prismę
RUN npx prisma generate

RUN npm run build

# =========================
# RUNNER
# =========================
FROM node:22-bullseye AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_DISABLE_LIGHTNINGCSS=1

RUN groupadd -r nextjs && useradd -r -g nextjs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Prisma runtime
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
