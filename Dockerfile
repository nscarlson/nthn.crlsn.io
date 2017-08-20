FROM node:boron
MAINTAINER Nathan Carlson <nathan@ambidextrous.io>

RUN mkdir -p /crlsn

WORKDIR /crlsn

COPY ./dist /crlsn/dist
COPY ./node_modules /crlsn/node_modules
COPY ./package.json /crlsn/package.json
COPY ./private /crlsn/private
COPY ./public /crlsn/public
COPY ./webpack-assets.json /crlsn/webpack-assets.json

EXPOSE 3000

CMD [ "npm", "start" ]
