FROM node:alpine
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

USER node
EXPOSE 3000
ENTRYPOINT [ "node", "src/index.ts" ]
