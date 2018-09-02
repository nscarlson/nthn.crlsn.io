#!/usr/bin/env bash

./scripts/initialize-development-certificates.sh

yarn --check-files --prefer-offline
