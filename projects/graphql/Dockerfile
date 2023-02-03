FROM node:19.6-alpine

WORKDIR /graphql

COPY ./ ./

RUN yarn
RUN yarn build

CMD ["node", "./build/index.js"]
