FROM node:15.10-alpine

WORKDIR /graphql

COPY ./ ./

RUN yarn
RUN yarn build

CMD ["node", "./build/index.js"]
