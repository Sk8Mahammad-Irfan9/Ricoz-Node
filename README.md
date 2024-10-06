# Node.js API Application

## Description
This is a Node.js application that implements a RESTful API to manage items. It utilizes MongoDB for data storage, Mongoose for data modeling, and follows the MVC architecture.

## Installation

1. Clone the repository:
   ```bash
   https://github.com/Sk8Mahammad-Irfan9/Ricoz-Node.git
2. Install dependencies:
   ```bash
   npm install
3. Create .env to the root directory and add enviroment variables
     ```bash
     PORT=5000
     MONGO_URL=your_mongo_connection_string
     ```


## Usage
Start the server:
  ```bash
    npm run dev
```
You can now access to the http://localhost:5000

## Open Postman
  # API Endpoints:
  1. GET All Items
      <ul>
       <li>URL: /api/item</li>
       <li>Method: GET</li>
       <li>Description: Get all items</li>
     </ul>
  2. Create an Item
      <ul>
       <li>URL: /api/item/create-item</li>
       <li>Method: POST</li>
       <li>Description: Create a new item</li>
       <li>Request Body: 
         json
         {"text":"Test item 5"}
</li>
     </ul>
  3. Update an Item
      <ul>
       <li>URL: /api/item/update-item/:id</li>
       <li>Method: PUT</li>
       <li>Description: Updates an existing item by ID</li>
       <li>Request Body: 
         json
         {"text":"Test item 6"}
</li>
     </ul>

