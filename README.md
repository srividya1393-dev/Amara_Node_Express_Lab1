Lab 1: Node.js and Express Server
 Name: Amara Sri Vidya
 Registration Number: 252U1R9007
 Section: GEN AI - 2A
 Course: Backend Development Fundamentals
 Lab Number: 01
Deployment URL: [amara-node-express-lab1.vercel.app](https://amara-node-express-lab1.vercel.app/)  
GitHub Link: https://github.com/srividya1393-dev/Amara_Node_Express_Lab1
To set up a Node.js project, create a basic HTTP server using the built-in http module, and build an Express server with multiple routes and appropriate HTTP status codes.
- Node.js
- Express.js
- JavaScript
- npm
- Visual Studio Code
lab-01/
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── not-found.png
├── server-http.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

```
- Node.js and npm installed
- Visual Studio Code or another code editor
1. Clone the repository or download the project.
2. Open the lab-01 folder in the terminal.
3. Install the dependencies:
   ```bash
   npm install
   
   ```
4. Start the Express server:
   ```bash
   node server.js
   
   ```
5. Open the following URL in your browser:
   http://localhost:3000
To run the server implemented using Node.js's built-in HTTP module:
```bash
node server-http.js

```
Stop the running server with Ctrl + C before starting another server on the same port.
The /anything path is an example of an unknown route. Other undefined paths should also return a 404 response.
Displays the welcome message.
[Home route response](Screenshots/home.png)
Displays the student's name and section in JSON format.
[About route response](Screenshots/about.png)
Displays the current date and time.
[Time route response](Screenshots/time.png)
Displays the 404 Page Not Found response.
[404 route response](Screenshots/not-found.png)
- 200 OK: The request was successful.
- 404 Not Found: The requested route does not exist.
package.json stores project metadata, scripts, and dependency information. node_modules contains the installed packages required by the project.
app.listen() starts the Express server and makes it listen for incoming requests on a specified port.
request contains information about the incoming HTTP request. response is used to send data and status codes back to the client.
Document the actual problems encountered while completing the lab and how they were solved.
Example: If a port was already in use, stop the other server before starting the Express server on the same port.
- The .gitignore file excludes node_modules/ and .env.
- The node_modules/ directory must not be committed.
- Screenshots are stored in the screenshots/ directory.
- The project is submitted through the course GitHub repository. NEN EDHI CHANGE CHESTHUNA NA README FILE LO