FROM node:14
ENV NODE_ENV development

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apk add git
# RUN yarn install --production --silent && mv node_modules ../
COPY . .

EXPOSE 3000
# CMD yarn start