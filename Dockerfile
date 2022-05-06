FROM node:17-alpine

WORKDIR /application

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5051

CMD [ "npm", "run", "serve" ]