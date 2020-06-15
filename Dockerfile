# FROM node:10

# # Setting working directory. All the path will be relative to WORKDIR
# WORKDIR /usr/src/app

# # Installing dependencies
# COPY package*.json ./
# RUN npm install

# # Copying source files
# COPY . .

# # Building app
# RUN npm run build

# # Running the app
# CMD [ "npm", "start" ]

FROM node:10
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

CMD ["npm", "start"]