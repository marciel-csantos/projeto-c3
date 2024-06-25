FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./
COPY .env ./

RUN npm install --production --silent

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]
