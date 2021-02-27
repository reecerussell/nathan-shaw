FROM node:alpine AS base
WORKDIR /base

COPY package.json package-lock.json ./

RUN npm install

COPY . .

FROM base AS build
WORKDIR /build

COPY --from=base /base ./

ENV NODE_ENV=production
RUN npm run build

FROM node:alpine AS final
WORKDIR /app

COPY --from=build /build/dist ./dist
COPY --from=build /build/public ./public
COPY --from=base /base/server.js server.js
COPY --from=base /base/next.config.js next.config.js

ENV NODE_ENV=production
RUN npm install next express

EXPOSE 3000

USER node
CMD node server.js
