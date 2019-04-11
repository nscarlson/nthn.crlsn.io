FROM node:10

WORKDIR /web

COPY . ./

RUN yarn
RUN yarn next build

CMD ["yarn", "next", "start"]
