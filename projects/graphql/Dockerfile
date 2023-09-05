FROM node:20.6-alpine

WORKDIR /graphql

COPY ./ ./

RUN yarn
RUN yarn build

CMD ["node", "./build/index.js"]
