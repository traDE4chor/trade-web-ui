FROM node:8-alpine as builder

COPY package*.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN $(npm bin)/ng build --prod --build-optimizer

FROM nginx:1.13.3-alpine

LABEL maintainer "Michael Hahn <mhahn.dev@gmail.com>"

ARG DOCKERIZE_VERSION=v0.3.0

ENV TRADE_URL http://127.0.0.1:8081/api
ENV HDT_URL http://127.0.0.1:8080

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

ADD config/config.json.tpl /usr/share/nginx/html/config.properties.tpl

CMD ["dockerize", "-template", "/usr/share/nginx/html/config.properties.tpl:/usr/share/nginx/html/config.properties",
 "nginx", "-g", "daemon off;"]
