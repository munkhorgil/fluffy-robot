FROM mhart/alpine-node:15.11.0
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN yarn install

COPY . .

EXPOSE 3500

CMD ["yarn", "start"]