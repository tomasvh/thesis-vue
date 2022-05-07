FROM node:17-alpine AS vue-builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=vue-builder /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]