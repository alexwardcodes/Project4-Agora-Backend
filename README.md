# Project 4 - Agora

## Description

This project was assigned in the final week of General Assembly’s 3-month SEI (Software Engineering Immersive) course, which teaches the fundamentals of software engineering for career changers. The aim of this project was to design an app using the MERN tech stack (MongoDB/Mongoose, Express, React and Node). I completed this project along with three other students from the course.

## Deployment link

[You can find Agora deployed on this link](https://agora-8009009f3244.herokuapp.com/). Create an account to browse products or sign up as a seller to sell your own!

<img width="1766" height="1002" alt="Image" src="https://github.com/user-attachments/assets/aa79a96c-58b1-4049-9877-73903f6304ac" />

## Getting Started/Code Installation

### Instructions

#### Deployed app

This app requires no installation when used in the browser.

#### Local installation

If running the app on a local installation, execute the following command in your local version of the backend repo followed by the command **nodemon server.js**:

```npm i axios bcrypt body-parser cjs cloudinary connect-flash cors dotenv ejs express ejs-express-layouts express-session jquery json-web-token method-override moment mongoose mongodb multer nodemon passport passport-local path stripe @stripe/react-stripe-js @stripe/stripe-js```

and the following command in your local version of the frontend repo followed by the command **npm start**:

```npm i axios bootstrap cloudinary font-awesome jet-decode multer react-bootstrap react-dom react-dotenv react-router-dom @stripe/react-stripe-js @stripe/stripe-js```

## Timeframe & Working Team

We were given a week to complete this project and split the project evenly between two people on the frontend and two people on the backend.

## Technologies Used

We built this app using React for our frontend and Node.js in Express for the backend of the app. We also used Cloudinary for image uploads, Mongo Atlas for database storage and retrieval, as well as implementing Axios calls for API functionality and testing these with Postman. We deployed our app on Heroku.

## Brief

Our brief for this project was to build a single-page app from scratch using the MERN tech stack. Our frontend was to be created using the React library, with Node.js in an Express framework for the backend, linked to a database on Mongo, and then to deploy this app on Heroku. Our criteria were as follows:

- Deliver a working full-stack, single application hosted on Heroku
- Incorporate the technologies of the MERN stack
- Have a well-styled, interactive front-end
- Communicate with the Express backend via AJAX
- Implement token-based authentication
- Have a well-scoped feature set

Best practices to follow included:

- Consistent code style
- Communication with the backend via AJAX
- RESTful API routing for CRUD operations
- Clearly name variables and functions
- Write well-formatted JS and CSS
- Comment code where it makes sense to do so

## Planning  

### Development Overview  

We worked as a team to split the workload fairly and evenly between the frontend and backend. I worked on the backend of the app, coding in Node.js using the Express framework, along with another teammate. Our two other teammates split the work required for the frontend between them. Towards the end of the project, as I had more time, I began assisting on the frontend to complete our React functionalities.

Our development flow was as follows:

1. Pick an idea
2. Create ERDs and wireframes
3. Setup of initial repos and file structure
4. Task assignment
5. Build phase
6. Testing
7. Styling
8. Bonus features

### Task management  

We found that Trello worked brilliantly for compiling and managing tasks in the past, and so decided to create another Trello board so we could track and manage the development of our app. We split tasks depending on whether they related to the frontend and backend, and further separated these by feature, such as Cart or Transaction, so that we were all working on separate features, contributing equally to the project.

<img width="1658" height="868" alt="Image" src="https://github.com/user-attachments/assets/27a34108-f726-4735-bd77-80f74cb39d22" />

## Build/Code Process

Our project followed the steps laid out below.  

### Stage 1: Pick an idea  

We had several ideas for this project and started by checking out the various free-for-use APIs that are available. We initially contemplated creating a project management tool, but we decided to be a bit more ambitious and go for a marketplace app that would allow users to upload and sell items. We realised this would cover all of the CRUD operations we needed to achieve our minimum viable product for this project, and would give us plenty of freedom to display what we have learned over the course.

### Stage 2: Create ERDs and wireframes 

#### ERD

Having settled on the type of app we wanted to create, we started by drawing up an ERD using Figma to map out the relations between all of the models and functionalities we wanted to include. We wanted users to have an account, with the option to sign up as a seller when they initially register with the site. We also wanted to include a shopping cart that would store the items selected for purchase, as well as transaction handling and payment functionality.  

<img width="705" height="622" alt="Image" src="https://github.com/user-attachments/assets/9bc46737-eef3-43ab-b9b7-325b5b090752" />

#### Wireframes

We then got to work on wireframing our site page by page, also using Figma.
<p float="left">
<img width="500" height="400" alt="Image" src="https://github.com/user-attachments/assets/3cb08202-3b07-402f-b4c6-4e3815cf2395" />
<img width="500" height="400" alt="Image" src="https://github.com/user-attachments/assets/8d2cbed0-2e46-42c9-92ae-903d5a2b90f0" />
<img width="500" height="400" alt="Image" src="https://github.com/user-attachments/assets/2a73b9f4-525c-4d4a-bcbc-a42fc2868bd9" />
<img width="500" height="400" alt="Image" src="https://github.com/user-attachments/assets/f265885e-06ed-4993-8e81-f1cc241c97d5" />
</p>

#### User Stories

We took time to think about the features and functionalities we wanted our users to have, and set out the following user stories:

- As an unregistered user, I want a function to sign up to the site  
- As an unregistered user, I want to know what the site is about  
- As a an unregistered user, I want to be able to sign up as a buyer or seller  
- As a user of the site, I want to be able to see a list of products  
- As a user, I want to be able to see details about those products
- As a user, I want to be able to see the products I wish to buy in a cart 
- As a user, I want to be able to pay for my products
- As a seller, I want to be able to list new products for sale
- As a seller, I want to be able to edit the details of my listed products
- BONUS: As a registered user, I want to be able to leave reviews for products I've purchased   
- BONUS: As a user, I want to see my past transactions 

### Stage 3: Setting up GitHub repos and starting files  

Our team leader set up the initial frontend and backend repos on GitHub and the basic file structure for us to work with. I forked from this repo, then cloned it in my local directories, making sure to always work in the dev branch rather than master. Since it was important to ensure the backend and frontend were communicating properly via the APIs on the backend, it was important to keep both repos up-to-date.

### Stage 4: Task assignment  

Using Trello meant we had a good overview of the tasks we needed to accomplish as we went through the development of the app. We started out with splitting the workload between the frontend and backend:

- One teammate would work on the backend APIs for user sign-up, sign-in, authorisation, transactions  
- I would work on the backend APIs for the cart, products and reviews
- Our team leader would work on image upload, our search functionality and React 
- Another teammate would work on the React components for displaying products, the user/seller dashboard, and user registration/sign-in

### Stage 5: Build phase  

My teammate and I started work on the backend of the project by building the models we would use to create, update and structure data in our database. We have 7 models, of which I wrote 4 (Cart, Product, Review, Favourite) and my teammate wrote the other 3 (Seller, User, Transaction):

<img width="404" height="544" alt="Image" src="https://github.com/user-attachments/assets/2b79e30e-ea12-4497-b8be-ed33f0bb7c71" />
<img width="445" height="649" alt="Image" src="https://github.com/user-attachments/assets/91c96b34-26fd-4073-8874-401ae94b29e1" />
<img width="508" height="253" alt="Image" src="https://github.com/user-attachments/assets/7f17ef34-caeb-41ba-964b-f46b73c9a93b" />

We knew that our models would need to reference other models, e.g. I made the Cart model reference the User and Product models in order to later identify and populate details for products along with the information for the user purchasing them, so using our ERD, we made sure models were referencing each other correctly.

Next, we began working on our controllers and routes. We needed controllers and routes for: authorisation; users; cart; index; products; reviews; search. I agreed to write the controllers for cart, index, products and review. I started with **index.js**:

<img width="315" height="75" alt="Image" src="https://github.com/user-attachments/assets/9cc45590-cf36-4b1a-91fa-309165d1237b" />

This simply renders the index page and requires no additional code for a response. I then started working on **products.js**:

<img width="505" height="753" alt="Image" src="https://github.com/user-attachments/assets/f6a27c1f-8701-4577-8c3d-98b324bc4f60" />

As an example, the **product_create_post** is called when the seller chooses to add a product on the frontend. The form captures all of the necessary details and submits this to the backend as a request. A new product is created according to the Product schema, then the ID of the seller - which is included in the request - is added into the product information before the product is then saved. The ID of the new product is then added to that unique seller in our database and the updated seller information is then saved. Once this is complete, the information about the new product is passed back to the frontend as a response in JSON format.

We made sure that our APIs were sending JSON responses to make them RESTful, and included this in our routes by inserting **router.use(express.json());**

<img width="541" height="364" alt="Image" src="https://github.com/user-attachments/assets/32849061-dd1a-42bb-82ba-2d180f32f4da" />

Before making Axios API calls on the frontend, I tested all of my APIs to ensure they were sending JSON with the right information. For more on testing, see **Stage 6: Testing** below.

Once we were sure the APIs we had written were sending the correct responses, our teammates were able to start using these in the components they had begun writing on the frontend. For example, the main list of all products is called on our top level component **App.js**:

<img width="383" height="161" alt="Image" src="https://github.com/user-attachments/assets/d6cf5e5d-a18f-4866-8e8a-e569b7701898" />

This **loadProductList()** function makes an API call that sends a request to the backend, which in turn provides a JSON response containing the information for all of the products in our database. This updates the **useState() hook** to then display all of the products to the user in the **ProductList** component:

<img width="623" height="630" alt="Image" src="https://github.com/user-attachments/assets/8db547e1-3d78-4220-8b92-14657afd6f0d" />

Additionally, this is also passed down as a prop to several other components where it can then be filtered and mapped, as in the **MyProductList** component:

<img width="589" height="498" alt="Image" src="https://github.com/user-attachments/assets/1a581a8b-7700-4289-a93c-3d8a13c30f6f" />

Here you can also see an example of how we have used React hooks to set state. We have a form that allows a seller to add a product. The state of **showAddProductForm** is initially set to _false_. The product create form is located in a ternary statement, and since the starting condition requires **showAddProductForm** to be true in order to display the form, the form is initially hidden from the seller:

<img width="760" height="828" alt="Image" src="https://github.com/user-attachments/assets/0e071ee0-035b-45a9-ab5b-6bd729fe07f4" />

Once the seller clicks on the 'Add a product' button, this state is updated to _true_ and the form is then displayed to the seller. Once the seller has entered the appropriate product information and clicked submit, the product information is sent as a request to the backend and the state is again set to _false_, which hides the form.

### Favourite functions

#### addItemToCart API

My favourite function has to be the API I wrote for our shopping cart. The API receives the request from the frontend with the user's ID as a query parameter:

<img width="635" height="738" alt="Image" src="https://github.com/user-attachments/assets/d7559030-3d44-4230-9209-cdf69fa1dd2f" />

It checks the database to see if a user exists with this ID: if not, it returns an error, otherwise the function continues. Next, it takes the product ID - also passed into the request as a query parameter - to check if a product exists with this ID. It then checks to see if a shopping cart exists in the database for the user; if so, it checks to see if the product is already in the cart. If there is an index that matches the product ID, the quantity of the product is increased by 1, if there is no index found with this ID, the product is not in the cart, so the entire product object is then added to the cart with the **cart.products.push** method. The cart is then saved, and the updated cart object is sent as a JSON response to the frontend.

The **else** part of this function ensures that if no cart exists for this user, a new instance of cart is created, and populated with the user ID and the products selected for purchase. The cart object is then sent as a JSON response to the frontend.

<img width="1029" height="407" alt="Image" src="https://github.com/user-attachments/assets/37dc4e09-e47d-4ceb-9dcc-a4fbcd678190" />

#### Search API

My other top favourite function is our search API. On the frontend we have the functional components **Search.js** and **SearchResults.js**:
<p float="left">
<img width="370" height="650" alt="Image" src="https://github.com/user-attachments/assets/b92de0e2-f7f5-47ea-9efc-e64405b8dd23" />
<img width="630" height="650" alt="Image" src="https://github.com/user-attachments/assets/b8016507-98e5-416f-a1c4-f546893a8a41" />
</p>

**Search.js** is the component that represents the search bar visible to the user. Here, the **search** variable is used to set the state to an empty string. The user can then enter a query - or none - into the search bar and their query, captured as the value entered into the search bar, is used to set state and then send a request to the search API. If no text is entered and the user presses Enter, the value "all" is sent in the request:

<img width="1140" height="667" alt="Image" src="https://github.com/user-attachments/assets/5f1fa8ff-22d3-44cc-8ce3-a06b8ce1855e" />

On the backend, the API handles the request by setting a const variable **q** equal to the value of the query, i.e. the text value sent by the frontend. If the user entered no text and simply hit enter, this value will be "all", so the API finds all products in the database, populates the seller key - which references the Seller model - and returns all products to the frontend as a JSON object. If the user has clicked on one of the Categories buttons on the homepage, this also sends a request to the search API with the value of the category selected. The database is then searched for products that match the category and are returned to the frontend in JSON format. If the user has entered text, this text value is used to search for all products with a **title** value matching the search request, and then sent to the frontend in JSON format to display for the user.

![Image](https://github.com/user-attachments/assets/1b9353c5-1ea7-49fb-91ce-e207c4a962dd)
![Image](https://github.com/user-attachments/assets/048a24aa-ea32-4bdb-ba9a-4e1471a33f92)

### Stage 6: Testing  

Testing functions along the way is how we managed to stay on track for delivery and ensure we minimised the risk of bugs. We used a lot of console.logs to capture the information we were generating and see what extra code was needed to achieve the functionality we wanted. We also got the other members of our team to test our code and look through it to make sure we didn't miss anything critical.

When building the backend APIs, I first wrote the structure of my APIs and then used Postman to test whether they were generating the right response:

<img width="1917" height="890" alt="Image" src="https://github.com/user-attachments/assets/f2144ecc-4130-421f-97c4-c6db2ea9ca48" />

Our APIs are RESTful, meaning that instead of rendering a page, they pass a JSON object to the frontend, where this is mapped and/or filtered to display individual pieces of information such as the user ID, or product title. Having used Postman together with console.logs on the backend, I was able to pinpoint any issues in sending the correct information via our API calls.

### Stage 7: Styling  

The style of our site is inspired by comparable marketplace sites like Amazon, eBay, Etsy, etc. We display our products on the main page as "cards" that users can click on to see individual product details. We opted for a white/blue/black theme to keep the site clean, simple and bright to appeal to users:

<img width="1292" height="876" alt="Image" src="https://github.com/user-attachments/assets/b381577e-709a-4320-a32b-b2ed6c434a9d" />

The product carousel on our home page is external code and separates the products into individual divs that can be adjusted and slid left or right via arrow buttons:

<img width="473" height="674" alt="Image" src="https://github.com/user-attachments/assets/28393435-f232-4cfd-9550-d98bf8a9c305" />

![Image](https://github.com/user-attachments/assets/7f574090-47a0-4f67-ada7-0d8241d09ac4)

Here you can see the code for our search bar. It's a simple div that contains a form field with several elements, including a button and a text input field. Each of these is styled and nested within the parent container:

<p float="left">
<img width="625" height="550" alt="Image" src="https://github.com/user-attachments/assets/31c1c729-0869-492e-a424-4d25c8d262b7" />
<img width="375" height="550" alt="Image" src="https://github.com/user-attachments/assets/7d001eb3-fe34-4c85-8b2d-1c8e73f290b8" />
</p>

### Stage 8: Bonus features  

Due to the time constraints, we did not end up with sufficient time to add bonus functionalities such as reviews, favourites or a list of previous transactions. These would be included in future iterations (see below).

## Challenges

On the frontend, we learned over the course of the project that the scope of our project required a lot of different components. The following were particular challenges for us: the cart, Stripe and image upload.

We knew that our project was ambitious for a capstone project - producing a fully functional marketplace app requires a lot of components on the frontend and backend - and one of the most challenging was the cart. We had to be able to create a cart, add items to it, be able to remove them and update the cart each time. This required a two-part schema, which proved a little tricky to work with. This also meant we had to revise our initial Cart Schema to accommodate an individual Item schema. The API to remove an item was initially removing only the last item in the cart, but by comparing it to the add item functionality and essentially reverse engineering that, we were able to get the functionality we wanted:

<img width="660" height="500" alt="Image" src="https://github.com/user-attachments/assets/2a2ffbc4-df5b-4e99-9164-0165168d5ee2" />

Using Stripe for our transaction processing was also a big undertaking; in hindsight, we needed to have given this a bit more time to implement. My teammate worked very hard on getting this element up and running, and I'm happy to say that this functionality works well.

Image upload was probably our particular challenge. Heroku, which we have used to deploy previous projects, deleted images after a certain time and over a certain size. Since our site is image-heavy so users can see products and details, we chose to use the Cloudinary service instead. This ended up being tricky to tie into our user signup and product creation forms, with my teammate experiencing severe issues getting our database to save the image url string required to retrieve the image from Cloudinary's server. With a little help from our instructor and a lot of hard work, however, we were able to get this critical functionality up and running.

### Problem-solving  

We communicated brilliantly as a team when it came to resolving errors. We wasted no time hunting down bugs, instead sharing screens and communicating over Slack whenever we encountered issues. This meant we were all aware of any issues as they arose, and these weren't able to unduly influence the development process. Postman in particular was invaluable in tracking down any issues with JSON responses and API calls.

## Wins

Making our project totally functional was a big win for us given the scope of it. We started the project knowing that making a marketplace app with functional cart and payment processing was not going to be easy to do, but working hard as a team and constantly communicating, with a very evenly distributed workload, we managed to pull it off.

I am especially proud of the fact that we got our cart to work. I worked hard on ensuring we had a Cart schema and the APIs to be able to perform all of the CRUD functions with our cart. Coupled with my teammates' excellent work on making this work in React, we have a cart system that feels to users just like any other marketplace app.

Finally, I feel it's a big win that all of our APIs work as they are intended to. We wrote a lot of them and did a lot of troubleshooting to make sure we got the functionality and data we had set out to achieve.

Overall, though our initial ERD ended up being slightly modified to adapt to the shifting needs of our models, APIs and user functionalities, we delivered a great product that I'm proud to have contributed to. 

## Key Learnings & Takeaways

I learned an awful lot in a very short amount of time on this project. I initially expected to work solely on the backend of the project, but ended up working on both the backend and frontend after just a few days into the project in order to support my teammates. I realised my confidence and understanding in writing backend APIs has grown immensely over the duration of the SEI course, and I am confident working with RESTful APIs and checking JSON responses to make it clear what data I'm actually generating and receiving.

Having only used React on the final project, it became clear to us halfway through the project that we could have structured the components and how they are nested in a much simpler, more understandable way. Since I wasn't involved with the frontend from the start, once I moved to assisting on the frontend, I did my best to help make sure it was working properly, with props being passed down in the right way and making correct use of hooks to change state. I became more comfortable with React and state in the process, and quite enjoyed this particular aspect of the project! I understand React components and state much better now.

## Bugs

Knowing that Heroku periodically deletes images, we opted to use Cloudinary for image storage. Images must currently be under 100kB or else these will not be displayed.

## Future Improvements

In future iterations, I want to add a larger variety of products and allow users to be able to leave reviews on products they have purchased. We did not have time during the course of the project to implement this feature. The architecture for leaving reviews already exists on the backend, however, so this just needs to be implemented on the frontend.
