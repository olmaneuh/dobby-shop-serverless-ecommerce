#!/bin/bash

printf "Building and deploying products service...\n"

# Setup env varibles
printf "Setting up env variables...\n"
export REGION="us-east1"
export GOOGLE_CLOUD_PROJECT=$(gcloud config get-value project)
export SERVICE_SRC="../services/products"
export SERVICE_NAME="products"
printf "Completed.\n"

# Enable APIs
printf "Enabling Cloud Build API...\n"
gcloud services enable cloudbuild.googleapis.com
printf "Completed.\n"
printf "Enabling Cloud Run API...\n"
gcloud services enable run.googleapis.com
printf "Completed.\n"

# Setup default project values
printf "Setting up default project values...\n"
gcloud config set run/region ${REGION}
gcloud config set run/platform managed
printf "Completed.\n"

# Build microservice
printf "Building orders service...\n"
gcloud builds submit \
    ${SERVICE_SRC} \
    --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/${SERVICE_NAME}
printf "Completed.\n"

# Deploy microservice
printf "Deploying orders service...\n"
gcloud run deploy ${SERVICE_NAME} \
    --image gcr.io/${GOOGLE_CLOUD_PROJECT}/${SERVICE_NAME} \
    --no-allow-unauthenticated
printf "Completed.\n"

# Unset Env Varibles
printf "Unsetting env variables...\n"
unset REGION
unset GOOGLE_CLOUD_PROJECT
unset SERVICE_SRC
unset SERVICE_NAME
printf "Completed.\n"