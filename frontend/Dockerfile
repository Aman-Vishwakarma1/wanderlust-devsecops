FROM node:alpine
WORKDIR /usr/src/wanderlust
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]