#!/bin/bash

CERTS_DIRECTORY=$(dirname $0)/../certs
SCRIPTS_DIRECTORY=$(dirname $0)

if [ ! -f $CERTS_DIRECTORY/certificate-authority.pem ]; then
    $SCRIPTS_DIRECTORY/generate-development-certificates.sh
fi
