
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
npm-debug.log
```
Building your image and test
```sh
docker build -t <USER>/microservices-ticketing-auth:0.0.1 .
docker run -p 8180:3000 -d <USER>/microservices-ticketing-auth:0.0.1
docker ps
docker logs <container id>
docker exec -it <container id> /bin/bash
curl -i localhost:8180
docker kill <container id>
```