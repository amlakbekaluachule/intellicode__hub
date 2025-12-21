FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY . .

ENV PORT=5000
EXPOSE $PORT

CMD ["node", "src/server.js"]
