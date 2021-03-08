#!/bin/bash

printf "Building and deploying orders service...\n"

# Setup env varibles
printf "Setting up env variables..."
export REGION="us-east1"
export GOOGLE_CLOUD_PROJECT=$(gcloud config get-value project)
export SERVICE_SRC="../services/orders"
export SERVICE_NAME="orders"
printf "Completed.\n"

# Enable APIs
printf "Enabling Cloud Build API..."
gcloud services enable cloudbuild.googleapis.com
printf "Completed.\n"
printf "Enabling Cloud Run API..."
gcloud services enable run.googleapis.com
printf "Completed.\n"

# Setup default project values
printf "Setting up default project values..."
gcloud config set run/region ${REGION}
gcloud config set run/platform managed
printf "Completed.\n"

# Build microservice
printf "Building orders service..."
gcloud builds submits \
    ${SERVICE_SRC} \
    --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/${SERVICE_NAME}
printf "Completed.\n"

# Deploy microservice
printf "Deploying orders service..."
gcloud run deploy ${SERVICE_NAME} \
    --image gcr.io/${GOOGLE_CLOUD_PROJECT}/${SERVICE_NAME}
    --no-allow-unauthenticated
printf "Completed.\n"

# Unset Env Varibles
printf "Unsetting env variables..."
unset REGION
unset GOOGLE_CLOUD_PROJECT
unset SERVICE_SRC
unset SERVICE_NAME
printf "Completed.\n"