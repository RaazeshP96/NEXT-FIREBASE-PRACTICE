FROM node:16.13-alpine
WORKDIR /code
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000
CMD yarn dev