FROM bitnami/node
WORKDIR /app
COPY package*.json ./

RUN apt-get update && apt-get install -y libglu1 && apt-get install -y libjpeg-dev
RUN yarn install
COPY . ./
RUN yarn build

COPY . .

EXPOSE 2310 2310 465 465
CMD [ "yarn", "start" ]
