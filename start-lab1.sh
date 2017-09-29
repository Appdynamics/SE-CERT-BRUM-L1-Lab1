#!/bin/bash
# Ubuntu startup script for the lab

LAB_NAME="SE-CERT-BRUM-L1-Lab1"
LAB_DIR="/home/ubuntu/$LAB_NAME/"

if [ ! -d "$LAB_DIR" ]; then
  # Enter here if $LAB_DIR doesn't exist.
  echo "Cloning lab source from git"
  git clone git://github.com/Appdynamics/$LAB_NAME.git
fi

cd $LAB_DIR

echo "Updating lab source from git"
git pull

echo "Installing/updating packages"
npm install

echo "Starting the lab"
nohup npm start &
