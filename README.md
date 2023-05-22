## Title: 
Node.js Express Application Development Assignment
## Steps followed:
Set up the basic server: I installed Node.js , Express and nodemon framework and created a basic server that listens on a specified port.

## Requirement
1. Use Node.js and Express framework to build a web application.
2. Set up a basic server that listens on a specified port.
Implement at least three different routes:
a. a. Route 1: Handle GET requests for the root URL ("/") and display a welcome
message.
b. b. Route 2: Handle POST requests to "/api/users" and save user information to a
JSON file.
3. c. Route Handle GET requests to "/api/users" and retrieve user information from the
JSON file.
4. Use middleware to handle common tasks such as logging and error handling.
5. Implement error handling for invalid routes and server errors.
6. Use appropriate HTTP methods (GET, POST, etc.) for each route based on their
intended functionality.
7. Use appropriate status codes (200, 404, etc.) in the HTTP responses.
8. Use appropriate JSON structure for request/response payloads.

## Deployed Link

Visit : https://wellneysassignment.onrender.com/


## Languages Used

<ul dir="auto">
 <ol dir="auto">◉ Nodejs: </ol>
 <ol dir="auto">◉ Express : </ol>
 </ul>
 
 ## Things To Follows

We imported the necessary modules: express for the web application framework and fs for file system operations.
We created an instance of the Express application and set the desired port to listen on.
We implemented a middleware that logs the HTTP method and URL for each incoming request.
We defined three routes:

a. Route 1: A GET request to the root URL ("/") that responds with a welcome message.
b. Route 2: A POST request to "/api/users" that saves user information to a JSON file named "users.json". We parsed the JSON request body and appended the user data to the existing users array stored in the file.
c. Route 3: A GET request to "/api/users" that retrieves user information from the "users.json" file and responds with a JSON array of users.
We implemented a middleware to handle invalid routes and respond with a 404 status code.
We implemented another middleware to handle server errors and respond with a 500 status code.
Finally, we started the server and listened on the specified port.

## Challenges faced during the assignment:

One challenge could be handling errors during file operations, such as reading from and writing to the JSON file. It's important to handle these errors gracefully and provide appropriate error responses to the client.

challenge could be ensuring the proper structure of the JSON file. In this example, we assume that the JSON file "users.json" contains an array of user objects. If the file doesn't exist or has an invalid structure, appropriate error handling should be implemented to avoid crashes and provide meaningful feedback to the client.
 
 
## Lessons learned during the assignment:

Using middleware in Express allows for modularizing and reusing code. In this example, we used middleware for logging, handling invalid routes, and server errors. This promotes code organization and makes it easier to add and modify functionality.
Handling asynchronous operations, such as reading and writing files, requires careful attention. Proper error handling and using callbacks or promises to ensure the order of operations is essential.
Choosing appropriate HTTP methods and status codes is important for RESTful API design. GET requests are used for retrieving data, POST requests for creating data, and appropriate status codes (e.g., 200 for success, 404 for not found, 500 for server error) help communicate the outcome of the request to the client.


## Contributers

 Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

- [x] Sukanta Pramanik - [GitHub Profile](https://github.com/sukanta255)


THANK YOU 💕












