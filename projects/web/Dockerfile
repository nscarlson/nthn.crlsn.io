FROM node:16.6-alpine

WORKDIR /web

COPY . ./

RUN yarn
RUN yarn next build

EXPOSE 3000

CMD ["yarn", "next", "start"]
