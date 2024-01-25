# Build and Run the Blogs Application

This script automates building your Angular 14 application with all CRUD capabilities for blogs. It will also run a Docker container to host the app. Follow these steps:

1. Ensure you have installed Docker on your system, if not install it from https://www.docker.com/products/community-edition.
2. Clone or download this repository containing all required files and directories for the Blogs application.
3. Navigate to the project root directory: `cd <project_root>`
4. Build your Angular 14 app using the following command: `ng build --prod` (This will generate a production-ready bundle in the 'dist' folder)
5. Create a Docker image for your application by running this command from within the project root directory: `docker build -t <image_name>:<tag> .` (Replace '<image_name>' and '<tag>' with appropriate values, e.g., "blogsapp:latest")
6. Run the built Docker image using the following command: `docker run --rm -p 4200:80 <image_name>:<tag>` (Replace '<image_name>', '<tag>', and '4200' with your values)
7. Open a web browser, navigate to http://localhost:4200/, and start using the Blogs application!

Remember that you can always modify this script according to your specific needs or requirements.