FROM node:16.17.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm i @toast-ui/react-editor --save --legacy-peer-deps
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf
