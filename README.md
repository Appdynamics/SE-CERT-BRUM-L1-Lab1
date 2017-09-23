# Summary
Simple application to illustrate the usage of and troubleshooting with AppDynamics Browser RUM (BRUM).

There are performance problems built into this app so that someone can learn to use BRUM.

# Usage
Pick the startup flavor that's easiest for you:

## npm
Requires NPM and Node.js.

Install the dependencies: `npm install`

Start the app: `npm start`

## docker
Build the image: `docker build -t lab1 .`

Run the container: `docker run -p 3000:3000 lab1`

## docker-compose
Build and start: `docker-compose up`
