FROM node:20.1-alpine

WORKDIR /graphql

COPY ./ ./

RUN yarn
RUN yarn build

CMD ["node", "./build/index.js"]
