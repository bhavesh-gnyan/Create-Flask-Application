FROM node:lts as base
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --silent
EXPOSE 3000
COPY ./.gitignore ./
COPY src/environments/* ./src/environments
COPY "src/**" "./src/" # Copy all files and directories from the source folder to the container's working directory.
RUN npm run build:prod # Build production version of your Angular app using ng build --prod command.
EXPOSE 4200 # Expose port for development server (optional)
CMD ["npm", "start"] # Run npm start script to launch the application in dev mode, which will use the development server on localhost:4200 by default. If you want to run production build, change CMD to ["node", "dist/main.js"].