FROM node:17.2.0-alpine

RUN mkdir /app

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
