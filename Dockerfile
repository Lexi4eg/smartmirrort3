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
ENV PORT=3000

EXPOSE $PORT


RUN npm run build
CMD ["npm", "start"]
