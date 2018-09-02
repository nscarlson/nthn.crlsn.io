FROM keymetrics/pm2:8-alpine AS development

# install global dependencies
RUN apk add --no-cache git python make gcc g++ bash

# Set up some configuration
ENV FORCE_COLOR=1
ENV NPM_CONFIG_LOGLEVEL warn
ENV YARN_CACHE_FOLDER /root/.yarn-cache/

WORKDIR /crlsn

# Copy in yarn offline mirror packages
COPY ./yarn-offline-mirror ./yarn-offline-mirror

# TODO: move to a script if possible
# Copy package manifests
# COPY packages/components/package.json ./packages/components/

# TODO: move to a script if possible
# Copy project manifests
COPY packages/crlsn-web/package.json ./packages/crlsn-web/

# Copy workspace manifest
COPY .yarnrc package.json yarn.lock ./

# initialize git to temporarily fix an issue with shared-git-hooks
RUN git init

# Install packages
RUN yarn --offline && rm -rf $YARN_CACHE_FOLDER

# # Add chamber CLI for secrets
# ADD https://github.com/segmentio/chamber/releases/download/v2.1.0/chamber-v2.1.0-linux-amd64 /usr/bin/chamber
# RUN chmod 0755 /usr/bin/chamber

# Copy source code
COPY ./ ./

CMD ["sh"]
