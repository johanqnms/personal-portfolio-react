######  BUILDER #####
#####################

# Oficial base image #
FROM node:16.14.0-alpine as builder

# Set working directory
WORKDIR /usr/src/app

# Add usr/src/app/node_modules/.bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

#Install and cache app dependencies
COPY package.json .
COPY package-lock.json . 
RUN npm ci

#Create Build
COPY . .
RUN npm run build

# Ending #
# Base image
FROM nginx:1.21.6-alpine

# Update NGNIX conf
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Copy static files
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run NGINX
CMD ["nginx", "-g", "daemon off;"]
