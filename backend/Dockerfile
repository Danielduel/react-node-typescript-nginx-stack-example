FROM types AS types

FROM node:12-alpine AS build

WORKDIR /srv
COPY package*.json /srv/
COPY --from=types /types /types
RUN npm ci
COPY tsconfig.json /srv/
COPY src /srv/src/
RUN npx tsc
RUN npm ci --production

FROM alpine:3
RUN apk add nodejs --no-cache
WORKDIR /srv
COPY --from=build /srv/node_modules /srv/node_modules
COPY --from=build /srv/dist /srv/dist
CMD node /srv/dist/index.js
