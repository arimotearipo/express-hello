FROM node:16-alpine
WORKDIR /express-hello
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]