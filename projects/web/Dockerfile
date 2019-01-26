FROM node:boron
MAINTAINER Nathan Carlson <nathan.s.carlson@gmail.com>

RUN mkdir -p /nthn.crlsn

WORKDIR /nthn.crlsn

COPY ./dist /nthn.crlsn/dist
COPY ./node_modules /nthn.crlsn/node_modules
COPY ./package.json /nthn.crlsn/package.json
COPY ./private /nthn.crlsn/private
COPY ./webpack-assets.json /nthn.crlsn/webpack-assets.json

EXPOSE 3000

CMD [ "npm", "start" ]
