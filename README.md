# Wearables E-Commerce Project

# Description

This is a group e-commerce shop where you can shop for sports items. This fully responsive project has been built on **React**, **Node.js**, and styled with **styled-components**.

## Contributers

**Stefany Laforest**: https://github.com/stefanylaforest/

**Junhwan Im (Jun)**: https://github.com/junhwanim

**Hamid Keshmiri**: https://github.com/hamidkd

<img width="1423" alt="homepage" src="https://user-images.githubusercontent.com/66086002/120538310-40aa7100-c3de-11eb-81a9-f8185363103b.png">


## Setup instructions

Fork the repository then clone the repository into your code editor.

Open a terminal and change directories into server by typing `cd server` hit enter, then run `yarn install` to install dependencies. Run `yarn start` to start the back-end.

Open another terminal and change directories into client by typing `cd client` hit enter, then run `yarn install` to install dependencies. Run `yarn start` to start the front-end.

Head over to https://localhost:3000 to view the project.

## Endpoints

**Endpoints have been documented in [server/README.md](https://github.com/stefanylaforest/ecommerce-shop-group/blob/main/server/README.md)s**

## What has been implemented in this project

### Home
- Dropdown menus for the users to shop by categories, brands or body location.
- Animated watch on mouse location. 
- User can shop by popular categories
- User can shop by popular brands
- A footer which contains a smooth scroll to top if the user clicks on the logo.

### Collection page

The collection page renders dependant on what the user query'ed. 

For example, if the user hovers on the Shop By Brand dropdown menu and clicks "Casio": 

`/products?brand=Casio`

The collection page will render all the products by Casio.

Other features of the collection page includes: 
-Sort by Price: low to high, high to low. 
-Sort by Name: A-Z, Z-A
-Option to select on products currently in stock
-Filters to multiple select: Categories, Brands, Body Location. 
-Option to add to cart from the collection page.

### Product / Item Details

- Add to cart
- Select up to the amount that is currently in stock
- Icons of modes of payment accepted on the store.
- Product Name, Price, Image
- Shipping details

### Cart

The cart is a "drawer" style cart which slides out on click of the cart icon in the header.

- Displays the total price of the selected items on the checkout button.
- Ability to remove the item
- Ability to select a different quantity
- Product price, image and product name. 

### Checkout 
- Placeholders move to Labels on top of the input once input is active. 
- Product price, image and product name and selected quantity displayed.
- Shipping, subtotal, taxes and total price displayed.

### Confirmation 

- Ability to see all the order details mentioned in the checkout without item photos as well as confirmation, order number and date.

## Track order

- With the order number from the confirmation you have the ability to "track your order" at the track your order in the header menu. 
- Date of arrival of items. 
- Order status
- Order Number


## Dependencies used in the front-end:

```json
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "moment": "^2.29.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-icons": "^4.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1",
    "styled-components": "^5.3.0",
    "uuidv4": "^6.2.8"
  },
```

## Dependencies used in the back-end:

```json
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "file-system": "^2.2.2",
    "moment": "^2.29.1",
    "morgan": "^1.10.0",
    "uuidv4": "^6.2.8"
  },
```

---

## Screenshots



## Guidelines from Concordia Bootcamp below:

[See the list of TEAMS](__documentation/TEAMS.md)

You will make use of _everything_ that you have learned thus far in the bootcamp to build an e-commerce app that will showcase all of the provided _wearables_ items.

The stack is React.Js, Node.Js, and styled-components.

Your node server should be RESTful and follow REST principles, at least to the extent we learned during the bootcamp.

---

**✋ You CANNOT use any external UI libraries, including, but not limited to, Material UI, Bootstrap.**

---

## Getting Started

<img src="./server/assets/software-dev-path.jpg" style="width: 100%;" />

You have your assignment and your team. What should you do first? This will vary for every team, and even every team member.

**The important thing is to NOT just jump in and start coding!**

There probably shouldn't be any coding until very near the end of the first day.

## Meet your Product Manager!

Each team has been assigned a product manager. This person is in charge of answering questions, guiding you and basically preventing everything from falling apart!

This person should be present for some of your team meetings, but not all. PMs are super busy people and have multiple projects, people to manage. 😉

## Planning

1. You will break into 3 groups (with your assigned PM.)
2. Your PM will answer any initial questions, and give you more information, as required.
3. Breakout into a separate meeting with just your team. _Your PM will bounce from team to team to make sure you're on track._
4. Time to use the [Kickoff Meeting Agenda](__documentation/KICKOFF_MEETING_AGENDA.md)

### First team meeting

It could also be a good/fun idea to give yourselves an original team name. :)

Your first team meeting should start with the [Kickoff Meeting Agenda](__documentation/KICKOFF_MEETING_AGENDa.md).

[Successful Software Project Delivery in 10 Steps](https://www.appnovation.com/blog/successful-software-project-delivery-10-steps).

💡 How a project starts is indicative of how it will end.

## Teamwork

The most important aspect of this project is the ability to work in a team. No matter your contribution to the project, you should understand the **FULL** codebase. This will require that you

- **review** each other's code
- **ask** questions when you don't understand
- **comment** your code extensively. _Always go for clarity over brevity._

## GitHub

see the [GITHUB Document](__documentation/GITHUB.md)

---
