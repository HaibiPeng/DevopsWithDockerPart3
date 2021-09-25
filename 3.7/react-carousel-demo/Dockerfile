FROM node:alpine AS build-env

WORKDIR /usr/src/app
COPY ./ ./

RUN npm install

FROM node:14-alpine

EXPOSE 3000

WORKDIR /usr/src/app
COPY --from=build-env /usr/src/app/ /usr/src/app/

RUN adduser -D appuser

USER appuser

CMD ["npm", "start"]
