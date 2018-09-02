#!/bin/bash

# Install deps
yarn --prefer-offline

# Build the base image
docker build -t crlsn . || (echo "Could not build the base image" && exit 1)
