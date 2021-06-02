# Setup and ports

Open a terminal and change directory to server `cd server` then run `yarn install` to install dependencies. Run `yarn start` to start the server.

The server runs on port **4000**, so you can access the server at `http://localhost:4000/`. As a test, you can go to `http://localhost:4000/api/categories`. You should see a JSON object shown in the browser:

```json
{
  "status": 200,
  "message": "success",
  "data": [
    "Fitness",
    "Medical",
    "Lifestyle",
    "Entertainment",
    "Industrial",
    "Pets and Animals",
    "Gaming"
  ]
}
```

Add a `proxy` to the server in `client/package.json`. This will allow you to use relative paths in your `fetch` requests to the server.

```json
"proxy": "http://localhost:4000"
```

---

# Endpoints

## GET /api/products

This endpoint fetches all the products from ./server/data/items.json.

Should come in this structure:

```json
    {
      "name": "Belkin GS5 Sport Fit Armband, Black F8M918B1C00",
      "price": "$24.99",
      "body_location": "Arms",
      "category": "Fitness",
      "_id": 6544,
      "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgAB...",
      "numInStock": 9,
      "companyId": 16384
    },
```

## GET /api/brands

Fetches all the brands from ./server/data/companies.json

The structure:

```json
    {
      "name": "Barska",
      "url": "http://www.barska.com/",
      "country": "United States",
      "_id": 19962
    },

```

## GET /api/wearables

This endpoint fetches all body location types.

```json
{
  "status": 200,
  "message": "success",
  "data": [
    "Wrist",
    "Arms",
    "Head",
    "Waist",
    "Chest",
    "Hands",
    "Neck",
    "Feet",
    "Torso"
  ]
}
```

## GET /api/products/:productId

This endpoint fetches a single product by the product's \_id.

```json
{
  "status": 200,
  "message": "success",
  "data": {
    "name": "Cogito Pop - Black Panther",
    "price": "$129.95",
    "body_location": "Wrist",
    "category": "Lifestyle",
    "_id": 6645,
    "imageSrc": "data:image/jpeg;base64,/9j/4AAQS...",
    "numInStock": 0,
    "companyId": 14939
  }
}
```

## GET /api/brands/:brandName

This endpoint fetches all products in the store by the brand name.

```json
"data": [

    {
      "name": "Casio G Shock Watch Solar Atom (gwm500a-1)",
      "price": "$67.62",
      "body_location": "Wrist",
      "category": "Lifestyle",
      "_id": 6546,
      "imageSrc": "data:image/jpeg;base64,/9j/4A...",
      "numInStock": 0,
      "companyId": 13334
    },
        {
      "name": "Casio G Shock Watch Solar Atom (gwm500a-1)",
      "price": "$67.62",
      "body_location": "Wrist",
      "category": "Lifestyle",
      "_id": 6546,
      "imageSrc": "data:image/jpeg;base64,/9j/4A...",
      "numInStock": 0,
      "companyId": 13334
    },
    // ...

```

If the brand does not exist you should see a 404 error like this:

```json
{
  "status": 404,
  "message": "sorry, we do not hold flaads in our store 😔"
}
```

## GET /api/categories

This endpoint gets all the different categories of products.

{
"status": 200,
"message": "success",
"data": [
"Fitness",
"Medical",
"Lifestyle",
"Entertainment",
"Industrial",
"Pets and Animals",
"Gaming"
]
}

## POST /api/order

This endpoint creates an order by the user in the form format. This is the endpoint you'll want to hit when the user is at checkout.

You'll need to send a JSON body in the following format:

```json
{
  "firstName": "your first name",
  "lastName": "your last name",
  "email": "youremail@email.com",
  "address": "1428 overdale ave",
  "city": "montreal",
  "province": "qc",
  "country": "canada",
  "creditCardNum": "1234567812344678",
  "expirationDate": "03/22",
  "phoneNumber": "514-000-0000"
}
```

It will collect the data in this form:

```json
{
  "status": "success",
  "error": "",
  "data": {
    "firstName": "your first name",
    "lastName": "your last name",
    "email": "youremail@email.com",
    "address": "1428 overdale ave",
    "city": "montreal",
    "province": "qc",
    "country": "canada",
    "itemsPurchased": [
      "6695 Garmin fenix 2 - Hiking, running GPS watch - 1.2 monochrome - 70 x 70 $399.99 1"
    ],
    "creditCardNum": "1234567812344678",
    "expirationDate": "03/22",
    "phoneNumber": "514-000-0000",
    "orderNum": "d8f47fdf-8f99-486b-9cb3-dbfb3eeee883"
  }
}
```

## PATCH /api/products/:productId/update

Once the user creates an order, this endpoint is used to update the inventory.

```json
{
  "selectedQuantityNum": 1
}
```

If the item is out of stock it will return:

```json
{
  "status": 404,
  "message": "Out of stock",
  "data": null
}
```

If the purchase is a success with the new number of inventory in stock,

```json
{
  "status": 200,
  "message": "success",
  "data": {
    "name": "Casio Shock G100-1bv Black Rubber Strap Digital Analog 20 Bar 200m",
    "price": "$99.99",
    "body_location": "Wrist",
    "category": "Lifestyle",
    "_id": 6635,
    "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQA...",
    "numInStock": 7,
    "companyId": 13334
  }
}
```
