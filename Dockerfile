FROM node:7.7.2-alpine

# Usage
# docker build -t NAME . --force-rm --no-cache
# docker run -p 3000:3000 NAME

WORKDIR /app
COPY package.json /app
RUN npm install --silent

COPY . /app

CMD npm start
EXPOSE 3000
