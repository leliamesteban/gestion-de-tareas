FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 3001

CMD ["sh", "-c", "npm run server & npm run dev"]
