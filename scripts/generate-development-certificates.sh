#!/bin/bash

CERTS_DIRECTORY=$(dirname $0)/../certs

# generate CA key
echo 'Generating CA key'
openssl genrsa \
    -out $CERTS_DIRECTORY/certificate-authority.key \
    2048 \
    || exit 1

# self-sign the CA key
echo 'Generating CA cert'
openssl req -x509 -new -nodes \
    -config $CERTS_DIRECTORY/certificate-authority.conf \
    -key $CERTS_DIRECTORY/certificate-authority.key \
    -out $CERTS_DIRECTORY/certificate-authority.pem \
    -sha256 \
    -days 10000 \
    || exit 1

# generate key
echo 'Generating localhost key'
openssl genrsa \
    -out $CERTS_DIRECTORY/certificate.key \
    2048 \
    || exit 1

# generate csr
echo 'Generating localhost CSR'
openssl req -new \
    -key $CERTS_DIRECTORY/certificate.key \
    -out $CERTS_DIRECTORY/certificate.csr \
    -subj '/CN=localhost' \
    || exit 1

# generate cert
echo 'Generating localhost cert'
openssl x509 -req \
    -in $CERTS_DIRECTORY/certificate.csr \
    -out $CERTS_DIRECTORY/certificate.crt \
    -CA $CERTS_DIRECTORY/certificate-authority.pem \
    -CAkey $CERTS_DIRECTORY/certificate-authority.key \
    -extfile $CERTS_DIRECTORY/certificate.conf \
    -CAcreateserial \
    -days 10000 \
    -sha256 \
    || exit 1

echo 'Trusting CA certificate (you will need to enter your admin password)'
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain $CERTS_DIRECTORY/certificate-authority.pem || exit 1
