FROM node:14
WORKDIR /app
COPY package*.json ./

RUN apt-get update
RUN yarn install
COPY . ./
RUN yarn build
RUN cd .next
COPY . .

EXPOSE 2310 2310 
CMD [ "yarn", "start" ]
