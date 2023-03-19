# Elearning-WebApp

### Our Project Folder Structure


![Untitled Diagram drawio (1)](https://user-images.githubusercontent.com/73175071/226164635-15eeeb88-e838-4798-bb8c-cf833f024aed.png)


- We Used Handle bars to handle our html , css pages .
- It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.
- To Handle User Registration and sign in we used MYSQL DataBase with values , <br>
Table: users<br>
Columns:<br>
ID int AI PK <br>
NAME varchar(100) <br>
EMAIL varchar(100) <br>
PASS varchar(200)<br>

- To run the file App we need following modules as mentioned in package.json
- "dependencies": {
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "hbs": "^4.2.0",
    "jsonwebtoken": "^9.0.0",
    "mysql": "^2.18.1",
    "nodemon": "^2.0.21"
  }
