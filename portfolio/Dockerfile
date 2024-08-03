# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

#Copy package.json and package-lock.json
COPY package*.json ./

# Install dependences
RUN npm install

#Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build 

# Serve the app
CMD ["npm", "start"]