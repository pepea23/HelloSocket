FROM node:10.15-alpine

WORKDIR /app

RUN apk add --update-cache python make g++ curl

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY .eslintrc.js .
COPY next.config.js .
COPY ./components ./components
COPY ./config ./config
COPY ./pages ./pages
COPY ./service ./service
COPY ./static ./static
COPY ./utils ./utils

RUN yarn build

EXPOSE 3000

HEALTHCHECK --start-period=5s --timeout=3s CMD curl -f http://localhost:3000/ || exit 1

CMD ["yarn", "start"]
