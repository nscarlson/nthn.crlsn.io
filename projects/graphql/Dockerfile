FROM node:19.9-alpine

WORKDIR /graphql

COPY ./ ./

RUN yarn
RUN yarn build

CMD ["node", "./build/index.js"]
