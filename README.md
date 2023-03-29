# REST API Web UI

## Introduction

This Web UI form was made with the help of Angular Framework which provided the libraries to perform [http requests](https://angular.io/guide/http) to the REST API that I had [made](https://github.com/AmitanshuRay/swagger-codegen-server).

Application if launched once all the necessary installation has been done goes live on http://localhost:4200

## Project Support

- User can add a server object to the list using the form provided.
- They can also search servers based on id or name
- All server objects will be displayed below the form by default or can be viewed by searching using an empty string.

## Installation Guide

- Download Java 9 from [here](https://www.oracle.com/in/java/technologies/javase/javase9-archive-downloads.html) and install it
- Also Install [mongodb](https://www.mongodb.com/try/download/community) on your machine
- Install node 18.10 and above
- Clone this repository and cd into the deploy folder

## Usage

- Start your mongodb server
- Then, execute **spring-boot-server.jar** file in the folder deploy, using the command:

        java -jar spring-boot-server.jar
    (Make sure you are using java 9 for this)
-  After you have ensured both are running, launch the angular app on a node server using:

        node app.js
    (Make sure you are using node 18.10 and above for this. Errors will most likely come from node libraries that aren't installed. Refer online guides for help)
- Go to http://localhost:4020 to use the app.

## Examples

Using screenshots to show examples of the app aren't neither easy to understand for the user nor easy to make for me.

So, here is a [youtube link](https://youtu.be/4EPvin5Cz7s) for my video that one can see instead.

Screenshots are still available in [**screenshots/**](https://github.com/AmitanshuRay/angular-api-frontend/tree/master/screenshots) folder of this repository.

[![Youtube Link Image](https://img.youtube.com/vi/4EPvin5Cz7s/maxresdefault.jpg)](https://youtu.be/4EPvin5Cz7s)

