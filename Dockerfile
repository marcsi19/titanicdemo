FROM node:10

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

CMD npm run start-dev
EXPOSE 8080
