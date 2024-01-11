FROM ubuntu:latest
LABEL authors="felix"

ENTRYPOINT ["top", "-b"]

# Install dependencies

FROM node:latest
WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .



ENV NODE_ENV=production
ENV APP_PORT=3000
ENV SERVER_PORT=3001:3001



EXPOSE 3000:3000
EXPOSE $SERVER_PORT



RUN npm run build
CMD npm run start -- -p 3000 & node server.js -p 3001
