
```sh
npm i express
npm i -D typescript ts-node-dev nodemon @types/express

tsc --init
```
Dockerfile:
```dockerfile
FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm","start"]
```

.dockerignore:
```
node_modules
```

```sh
docker build -t microservices-ticketing/auth:0.0.1 .
```