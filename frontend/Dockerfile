# ---- Base stage ----
FROM node:22-bullseye AS base

# Ustawienie katalogu roboczego
WORKDIR /app

# Skopiuj tylko pliki package.json i package-lock.json
COPY frontend/package.json frontend/package-lock.json ./

# ---- Dependencies stage ----
FROM base AS deps

# Zainstaluj zależności Node.js
RUN npm ci

# ---- Builder stage ----
FROM base AS builder

# Skopiuj zależności z etapu deps
COPY --from=deps /app/node_modules ./node_modules

# Skopiuj cały frontend
COPY frontend/ ./

# Skopiuj plik .env jeśli jest potrzebny do builda
COPY frontend/.env .env

# Zbuduj aplikację Next.js
RUN npm run build

# ---- Runtime stage ----
FROM node:22-bullseye AS runner

# Utwórz użytkownika do uruchomienia aplikacji
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

WORKDIR /app

# Skopiuj tylko niezbędne pliki z buildera
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Ustaw użytkownika
USER nextjs

# Port na którym będzie działał frontend
EXPOSE 3000

# Uruchom aplikację w trybie produkcyjnym
CMD ["npm", "start"]
