
```sh
npm i express
npm i -D typescript ts-node-dev nodemon @types/express

tsc --init
```

Setting up Node.js on an Amazon EC2 instance
[nvm](https://github.com/nvm-sh/nvm/) allows you to quickly install and use different versions of node via the command line.
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
source ~/.bashrc
# nvm use 16
nvm install --lts
node -e "console.log('Running Node.js ' + process.version)"
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
Docker World (Building your image and test)
```sh
docker build -t <USER>/microservices-ticketing-auth:0.0.1 .
docker login
docker push <USER>/microservices-ticketing-auth:0.0.1
docker run -p 8180:3000 -d <USER>/microservices-ticketing-auth:0.0.1
docker ps
docker logs <container id>
docker exec -it <container id> /bin/bash
curl -i localhost:8180
docker kill <container id>
docker rmi <USER>/microservices-ticketing-auth:<Tag>
docker images | awk '/<USER>/ {print $3}'| xargs docker rmi -f
```
K8s world
```sh
#kubectl run <Name> --image=<Image>
kubectl apply -f <Config_File>
kubectl get pods
kubectl describe pod <Pod_Name>
kubectl exec -it <Pod_Name> <cmd>
kubectl logs <Pod_name>
```

