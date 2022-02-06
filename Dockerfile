FROM node:14

WORKDIR /usr/src/app

COPY package*.json tsconfig*.json ./
RUN yarn install

COPY templates/ templates/
COPY fonts/ fonts/
COPY src/ src/

RUN yarn global add rimraf

RUN yarn build
RUN yarn global add pm2

RUN  rm -r src

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE 4000

CMD [ "pm2-runtime", "dist/main.js" ]
