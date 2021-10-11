FROM node:16.11-alpine

WORKDIR /web

COPY . ./

RUN yarn
RUN yarn next build

EXPOSE 3000

CMD ["yarn", "next", "start"]
