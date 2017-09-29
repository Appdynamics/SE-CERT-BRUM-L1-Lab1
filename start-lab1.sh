#!/bin/bash
# Ubuntu startup script for the lab

LAB_NAME="SE-CERT-BRUM-L1-Lab1"
LAB_DIR="/home/ubuntu/$LAB_NAME/"

cd $LAB_DIR

echo "Updating lab source from git"
git pull

echo "Installing/updating packages"
npm install

echo "Starting the lab"
nohup npm start &

exit 0
