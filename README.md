# Submodule for microservices-ticketing
This project is Submodule for [microservices-ticketing](https://github.com/mehradi-github/microservices-ticketing)

- [Submodule for microservices-ticketing](#submodule-for-microservices-ticketing)
  - [Installing prerequisite](#installing-prerequisite)
  - [Setting up Node.js on an Amazon EC2 instance](#setting-up-nodejs-on-an-amazon-ec2-instance)
  - [Docker World (Building your image and test)](#docker-world-building-your-image-and-test)
  - [K8s world](#k8s-world)
  - [Configuring a project for ESLint, Prettier](#configuring-a-project-for-eslint-prettier)
  - [VSCode's shotrcuts: Multiple Cursors :](#vscodes-shotrcuts-multiple-cursors-)
  - [Ignore files that have already been committed to a Git repository](#ignore-files-that-have-already-been-committed-to-a-git-repository)

## Installing prerequisite
```sh
npm i express
npm i -D typescript ts-node-dev nodemon @types/express

tsc --init
```

## Setting up Node.js on an Amazon EC2 instance
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
## Docker World (Building your image and test)
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
## K8s world
```sh
#kubectl run <Name> --image=<Image>
kubectl apply -f <Config_File>
kubectl get pods
kubectl describe pod <Pod_Name>
kubectl exec -it <Pod_Name> <cmd>
kubectl logs <Pod_name>
```

## Configuring a project for ESLint, Prettier
Installing [eslint, prettier and configuring](https://github.com/mehradi-github/jest-rtl) them.

## VSCode's shotrcuts: Multiple Cursors :
Ctrl + D select the next occurrence.
Ctrl + K + Ctrl + D skip the next occurrence.
Ctrl + U undo one of the above.
Ctrl+Shift+L Select All Occurrences

## Ignore files that have already been committed to a Git repository
```git
git rm -r --cached .
git add .
git commit -m "Changing .gitignore"
```
