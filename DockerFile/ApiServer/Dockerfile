FROM node:11.1-alpine

# copy application code from host.
RUN mkdir server
WORKDIR /server/app
RUN npm install
RUN npm install -g yarn
RUN yarn install

# package.jsonの作成
RUN yarn init --yes

# mongoDB modules
RUN yarn add express cors body-parser mongoose
RUN yarn add --dev nodemon


