FROM node:18
WORKDIR ./
COPY . ./
COPY package*.json /app/
RUN npm install -g npm@9.6.5
RUN npm start
EXPOSE 8080
CMD ["npm", "start"]
