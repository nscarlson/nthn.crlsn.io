FROM node:11.15-alpine

WORKDIR /web

COPY . ./

RUN yarn
RUN yarn next build

CMD ["yarn", "next", "start"]
