FROM node:14
WORKDIR /app
COPY package*.json ./

RUN apt-get update
RUN yarn install
COPY . ./
RUN yarn build

COPY . .

EXPOSE 2310 2310 465 465
CMD [ "yarn", "start" ]
