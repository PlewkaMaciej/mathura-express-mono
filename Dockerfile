FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app


COPY package.json package-lock.json ./

COPY frontend/package.json frontend/



FROM base AS deps
WORKDIR /app
RUN npm ci


FROM base AS builder
WORKDIR /app/frontend


COPY --from=deps /app/node_modules ./node_modules


COPY frontend/ ./

COPY frontend/.env .env

ENV NODE_ENV=production


RUN npm run build


FROM node:22-alpine AS runner
WORKDIR /app/frontend

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


COPY --from=builder /app/frontend/public ./public
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/node_modules ./node_modules
COPY --from=builder /app/frontend/package.json ./
COPY --from=builder /app/frontend/.env .env

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
