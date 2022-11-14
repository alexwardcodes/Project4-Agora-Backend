# Project 4 - Agora

## Description

This project was assigned in the final week of General Assembly’s 3-month SEI (Software Engineering Immersive) course, which teaches the fundamentals of software engineering for career changers. The aim of this project was to design an app using the MERN tech stack (MongoDB/Mongoose, Express, React and Node). I completed this project along with three other students from the course.

## Deployment link

[You can find Agora deployed on this link](https://sei66project4agora.herokuapp.com/). Create an account to browse products or sign up as a seller to sell your own!

![Screenshot 2022-11-09 at 12 09 57](https://media.git.generalassemb.ly/user/44781/files/4c3fd2df-9523-439f-8bc3-cfdbc0a98de0)

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

We built this app using React for our frontend and Node.js in Express for the backend of the app. We also used Cloudinary for image uploads, Mongo Atlas for database storage and retrieval, as well as implementing Axios calls for API functionality.

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

![Screenshot 2022-11-07 at 16 47 48](https://user-images.githubusercontent.com/97313222/200367067-66f14a67-e398-401e-a75d-9ad835e584e4.png)

## Build/Code Process

Our project followed the steps laid out below.  

### Stage 1: Pick an idea  

We had several ideas for this project and started by checking out the various free-for-use APIs that are available. We initially contemplated creating a project management tool, but we decided to be a bit more ambitious and go for a marketplace app that would allow users to upload and sell items. We realised this would cover all of the CRUD operations we needed to achieve our minimum viable product for this project, and would give us plenty of freedom to display what we have learned over the course.

### Stage 2: Create ERDs and wireframes 

#### ERD

Having settled on the type of app we wanted to create, we started by drawing up an ERD to map out the relations between all of the models and functionalities we wanted to include. We wanted users to have an account, with the option to sign up as a seller when they initially register with the site. We also wanted to include a shopping cart that would store the items selected for purchase, as well as transaction handling and payment functionality.  

![Screenshot 2022-11-10 at 15 06 20](https://user-images.githubusercontent.com/97313222/201130750-d91a83e7-148c-4c2f-929d-27cc305e85ec.png)

#### Wireframes

We then got to work on wireframing our site page by page.
<p float="left">
<img src="https://media.git.generalassemb.ly/user/44781/files/3a1e490b-9a8d-4785-a770-d008ef2a4954" height="400" width="500">
<img src="https://media.git.generalassemb.ly/user/44781/files/509d85fb-e326-456a-917e-9e4073f6b1fd" height="400" width="500">
<img src="https://media.git.generalassemb.ly/user/44781/files/8c6b3e84-07a9-4a9b-a7e6-8dab2366c51d" height="400" width="500">
<img src="https://media.git.generalassemb.ly/user/44781/files/cdb053a4-6ae3-4bce-9759-9e110384b87a" height="400" width="500">
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

![Screenshot 2022-11-10 at 15 35 00](https://media.git.generalassemb.ly/user/44781/files/838eabb9-62a8-4d6c-a116-dfd21ca3900c)
![Screenshot 2022-11-10 at 15 36 07](https://media.git.generalassemb.ly/user/44781/files/b46985a7-9df3-4e55-ba71-4a074f801a2c)
![Screenshot 2022-11-10 at 15 36 26](https://media.git.generalassemb.ly/user/44781/files/95e984ff-5e11-433c-8c6c-7e860d1d18aa)

We knew that our models would need to reference other models, e.g. I made the Cart model reference the User and Product models in order to later identify and populate details for products along with the information for the user purchasing them, so using our ERD, we made sure models were referencing each other correctly.

Next, we began working on our controllers and routes. We needed controllers and routes for: authorisation; users; cart; index; products; reviews; search. I agreed to write the controllers for cart, index, products and review. I started with **index.js**:

![Screenshot 2022-11-10 at 16 25 35](https://media.git.generalassemb.ly/user/44781/files/d162e4c2-5495-48fd-8cc9-c3d401f89177)

This simply renders the index page and requires no additional code for a response. I then started working on **products.js**:

![Screenshot 2022-11-10 at 16 16 54](https://media.git.generalassemb.ly/user/44781/files/2201354c-286f-4255-a9a8-79e729cfe8ba)

As an example, the **product_create_post** is called when the seller chooses to add a product on the frontend. The form captures all of the necessary details and submits this to the backend as a request. A new product is created according to the Product schema, then the ID of the seller - which is included in the request - is added into the product information before the product is then saved. The ID of the new product is then added to that unique seller in our database and the updated seller information is then saved. Once this is complete, the information about the new product is passed back to the frontend as a response in JSON format.

We made sure that our APIs were sending JSON responses to make them RESTful, and included this in our routes by inserting **router.use(express.json());**

![Screenshot 2022-11-10 at 16 31 32](https://media.git.generalassemb.ly/user/44781/files/8696ee01-c7fe-4bb8-8645-e6a71709b6ee)

Before making Axios API calls on the frontend, I tested all of my APIs to ensure they were sending JSON with the right information. For more on testing, see **Stage 6: Testing** below.

Once we were sure the APIs we had written were sending the correct responses, our teammates were able to start using these in the components they had begun writing on the frontend. For example, the main list of all products is called on our top level component **App.js**:

![Screenshot 2022-11-10 at 16 40 58](https://media.git.generalassemb.ly/user/44781/files/bc0992be-0dbb-4e41-9355-949f1b440417)

This **loadProductList()** function makes an API call that sends a request to the backend, which in turn provides a JSON response containing the information for all of the products in our database. This updates the **useState() hook** to then display all of the products to the user in the **ProductList** component:

![Screenshot 2022-11-10 at 16 50 02](https://media.git.generalassemb.ly/user/44781/files/4a7e5701-7378-4857-a5c7-fd86fae6b83d)

Additionally, this is also passed down as a prop to several other components where it can then be filtered and mapped, as in the **MyProductList** component:

![Screenshot 2022-11-10 at 16 52 53](https://media.git.generalassemb.ly/user/44781/files/ad6551b1-99f3-4d50-9968-ba26ffb47b69)

Here you can also see an example of how we have used React hooks to set state. We have a form that allows a seller to add a product. The state of **showAddProductForm** is initially set to _false_. The product create form is located in a ternary statement, and since the starting condition requires **showAddProductForm** to be true in order to display the form, the form is initially hidden from the seller:

![Screenshot 2022-11-10 at 16 55 40](https://media.git.generalassemb.ly/user/44781/files/a9424f0b-9c79-4843-8c28-0ce76026c6dd)

Once the seller clicks on the 'Add a product' button, this state is updated to _true_ and the form is then displayed to the seller. Once the seller has entered the appropriate product information and clicked submit, the product information is sent as a request to the backend and the state is again set to _false_, which hides the form.

### Favourite functions

#### addItemToCart API

My favourite function has to be the API I wrote for our shopping cart. The API receives the request from the frontend with the user's ID as a query parameter:

![Screenshot 2022-11-10 at 17 16 08](https://media.git.generalassemb.ly/user/44781/files/63c26b90-95e1-4350-8fff-407e051b3e78)

It checks the database to see if a user exists with this ID: if not, it returns an error, otherwise the function continues. Next, it takes the product ID - also passed into the request as a query parameter - to check if a product exists with this ID. It then checks to see if a shopping cart exists in the database for the user; if so, it checks to see if the product is already in the cart. If there is an index that matches the product ID, the quantity of the product is increased by 1, if there is no index found with this ID, the product is not in the cart, so the entire product object is then added to the cart with the **cart.products.push** method. The cart is then saved, and the updated cart object is sent as a JSON response to the frontend.

The **else** part of this function ensures that if no cart exists for this user, a new instance of cart is created, and populated with the user ID and the products selected for purchase. The cart object is then sent as a JSON response to the frontend.

![Screenshot 2022-11-14 at 16 39 10](https://media.git.generalassemb.ly/user/44781/files/4fcf3522-41f8-4980-b71d-a1566f761d4c)

#### Search API

My other top favourite function is our search API. On the frontend we have the functional components **Search.js** and **SearchResults.js**:
<p float="left">
<img src="https://media.git.generalassemb.ly/user/44781/files/0720141a-d1c3-42a3-80ef-594520182bbb" height="650" width="370">
<img src="https://media.git.generalassemb.ly/user/44781/files/929c0f2d-540c-4bab-a2ac-53f6c7970752" height="650" width="630">
</p>

**Search.js** is the component that represents the search bar visible to the user. Here, the **search** variable is used to set the state to an empty string. The user can then enter a query - or none - into the search bar and their query, captured as the value entered into the search bar, is used to set state and then send a request to the search API. If no text is entered and the user presses Enter, the value "all" is sent in the request:

![Screenshot 2022-11-10 at 19 02 52](https://media.git.generalassemb.ly/user/44781/files/250bf572-5b2c-4724-a22b-f74614679de1)

On the backend, the API handles the request by setting a const variable **q** equal to the value of the query, i.e. the text value sent by the frontend. If the user entered no text and simply hit enter, this value will be "all", so the API finds all products in the database, populates the seller key - which references the Seller model - and returns all products to the frontend as a JSON object. If the user has clicked on one of the Categories buttons on the homepage, this also sends a request to the search API with the value of the category selected. The database is then searched for products that match the category and are returned to the frontend in JSON format. If the user has entered text, this text value is used to search for all products with a **title** value matching the search request, and then sent to the frontend in JSON format to display for the user.

![empty-search](https://media.git.generalassemb.ly/user/44781/files/87160127-78c0-4b96-a38f-1edb40dbf249)
![search](https://media.git.generalassemb.ly/user/44781/files/0214a248-0a60-4ee0-8403-86bfb9f5e069)

### Stage 6: Testing  

Testing functions along the way is how we managed to stay on track for delivery and ensure we minimised the risk of bugs. We used a lot of console.logs to capture the information we were generating and see what extra code was needed to achieve the functionality we wanted. We also got the other members of our team to test our code and look through it to make sure we didn't miss anything critical.

When building the backend APIs, I first wrote the structure of my APIs and then used Postman to test whether they were generating the right response:

![Screenshot 2022-11-09 at 12 52 20](https://media.git.generalassemb.ly/user/44781/files/6225c86f-689b-478b-a2df-da73ff8d5596)

Our APIs are RESTful, meaning that instead of rendering a page, they pass a JSON object to the frontend, where this is mapped and/or filtered to display individual pieces of information such as the user ID, or product title. Having used Postman together with console.logs on the backend, I was able to pinpoint any issues in sending the correct information via our API calls.

### Stage 7: Styling  

The style of our site is inspired by comparable marketplace sites like Amazon, eBay, Etsy, etc. We display our products on the main page as "cards" that users can click on to see individual product details. We opted for a white/blue/black theme to keep the site clean, simple and bright to appeal to users:

![Screenshot 2022-11-14 at 18 09 00](https://media.git.generalassemb.ly/user/44781/files/acd71bcc-870c-4181-a3b8-1dfe70b9ff2f)

The product carousel on our home page is external code and separates the products into individual divs that can be adjusted and slid left or right via arrow buttons:

![Screenshot 2022-11-14 at 18 13 52](https://media.git.generalassemb.ly/user/44781/files/4eea7686-2cac-404e-90fc-aee4fa54eff0)
![carousel (1)](https://user-images.githubusercontent.com/97313222/201743314-6cd26b9d-d50e-4bce-b9a1-edd95b76e9f8.gif)

Here you can see the code for our search bar. It's a simple div that contains a form field with several elements, including a button and a text input field. Each of these is styled and nested within the parent container:

<p float="left">
<img src="https://media.git.generalassemb.ly/user/44781/files/dfacceae-1a55-44c6-9901-0f27796fc05f" height="550" width="625">
<img src="https://media.git.generalassemb.ly/user/44781/files/4ad6e2b2-8758-426f-b097-7b02aa86ca7a" height="550" width="375">
</p>

### Stage 8: Bonus features  

Due to the time constraints, we did not end up with sufficient time to add bonus functionalities such as reviews, favourites or a list of previous transactions. These would be included in future iterations (see below).

## Challenges

On the frontend, we learned over the course of the project that the scope of our project required a lot of different components. The following were particular challenges for us: the cart, Stripe and image upload.

We knew that our project was ambitious for a capstone project - producing a fully functional marketplace app requires a lot of components on the frontend and backend - and one of the most challenging was the cart. We had to be able to create a cart, add items to it, be able to remove them and update the cart each time. This required a two-part schema, which proved a little tricky to work with. This also meant we had to revise our initial Cart Schema to accommodate an individual Item schema. The API to remove an item was initially removing only the last item in the cart, but by comparing it to the add item functionality and essentially reverse engineering that, we were able to get the functionality we wanted:

<img src="https://media.git.generalassemb.ly/user/44781/files/cc1cac3b-beb9-4da5-a798-476b5e1f714a" height="500" width="600">

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
