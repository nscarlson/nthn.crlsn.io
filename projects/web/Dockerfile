FROM node:15.13-alpine

WORKDIR /web

COPY . ./

RUN yarn
RUN yarn next build

EXPOSE 3000

CMD ["yarn", "next", "start"]
