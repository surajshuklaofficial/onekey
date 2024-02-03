FROM node:21

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3000