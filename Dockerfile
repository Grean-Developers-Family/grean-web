FROM node:alpine
LABEL maintainer="ggwpp"

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install

CMD ["npm", "start"]
EXPOSE 3000