

const FGR_Vidly_API_data = {

  vidlyAuthenticationAuthorization: {
    title: "Vidly Authentication and Authorization",
    endpoints: [
      {
        title: "/api/auth",
        endpoint: "/api/auth",
        multiroute: false,
        key: 2,
        url: `https://boiling-meadow-22539.herokuapp.com/api/auth`,
        methodType: "POST",
        hasIdInput: false,
        hasLogin: false,
        hasPayload: true,
        header: "The Login Path",
        description: `This endpoint is for users who are logging in to pass their email and password to the server.`,
        response: {
          info: `Json Web Token: The JWT can be used by the client to tell the server they are authenticated. To logout the client simply deletes the JWT.`,
          example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJfaWQiOiI1YzdjMjE1MmMwOGZhZjAwMT dmNTU0YjQiLCJpYXQiOjE1NTIx MDM5Mzl9.0GQWbRjQ7b8g2Hqh-AdS6DQPey-V_Fan-pn_3aBoZ_Q`
        },
        payload: {
          schema: [
            { key: "email", type: "String", optional: false },
            { key: "password", type: "String", optional: false }
          ],
          example: `{ "email":"b@b.com", "password":"bbbb" }`,
          exampleNote: `Copy and paste these credientials into the payload textbox and then call /api/auth below to login!`
        }
      },
      {
        title: "/api/users",
        endpoint: "/api/users",
        multiroute: false,
        key: 24,
        url: `https://boiling-meadow-22539.herokuapp.com/api/users`,
        methodType: "POST",
        hasIdInput: false,
        hasLogin: false,
        hasPayload: true,
        header: "The Register New User Path",
        description: `This endpoint is for registering new users and saving them to the database.`,
        response: {
          info: `New user object with id, name and email is sent back to the client to confirm user registration. NOTE: The example credientials have already registered a user, the response will prompt the client to use a different email if the one sent as already been taken.`,
          example: `{ "_id": "5c7cbd904d6acc0017dc5ff8", "name": "Cam Clover", "email": "c@c.com" }`
        },
        payload: {
          schema: [
            { key: "name", type: "String", optional: false },
            { key: "email", type: "String", optional: false },
            { key: "password", type: "String", optional: false }
          ],
          example: `{ "name":"Cam Clover", "email":"c@c.com", "password":"cccc" }`,
          exampleNote: `Copy and paste these credientials into the payload textbox and then call /api/users below to login!`
        }
      },
      {
        title: "/api/users/me",
        endpoint: "/api/users/me",
        multiroute: false,
        key: 23,
        url: `https://boiling-meadow-22539.herokuapp.com/api/users/me`,
        methodType: "GET",
        hasIdInput: false,
        hasLogin: true,
        hasPayload: false,
        header: "Get current logged in user",
        description: `This endpoint is for receiving the info of the currently logged in user without displaying their password or password hash.`,
        response: {
          info: `Currently logged in user id, name, email, and a Mongoose specifc version key property.`,
          example: `{ "_id": "5c7cbd904d6acc0017dc5ff8", "name": "Cam Clover", "email": "c@c.com", "__v": 0 }`
        },
      }
    ]
  },
  Vidlygenres:{
    title:"Vidly genres",
    endpoints:[
      {
        endpoint:"/api/genres",
        multiroute:true,
        key:22,
        endpoints:[
          {
            title:"/api/genres",
            endpoint:"/api/genres",
            key:21,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/genres`,
            methodType: "GET",
            hasIdInput: false,
            hasLogin: false,
            hasPayload: false,
            header: "Get all genres",
            description: `This endpoint is for getting a list of all the genres in the database.`,
            response: {
              info: `All genres have an id, name, and a Mongoose specifc version key property.`,
              example: `[ { "_id": "5c7d4f95c8217500179b7626", "name": "Suspense", "__v": 0 }, { "_id": "5c7d4f30c8217500179b7624", "name": "Horror", "__v": 0 }]`
            }
          },
          {
            title:"/api/genres",
            endpoint:"/api/genres",
            key:20,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/genres`,
            methodType: "POST",
            hasIdInput: false,
            hasLogin: true,
            hasPayload: true,
            header: "Add a genre to the database",
            description: `This endpoint is for adding a genre and saving it to the database.`,
            response: {
              info: `Genres have an id, a name, and a Mongoose specifc version key property.`,
              example: `{ "_id": "5c7d4f30c8217500179b7624", "name": "Horror", "__v": 0 }`
            },
            payload: {
              schema: [
                { key: "name ", type: "String", optional: false }
          
              ],
              example: `{ "name":"Action" }`,
              exampleNote: `Add your payload and call /api/genres to add a new genre!`
            },
          }
          
        ]
      },
      {
        endpoint:"/api/genres:id",
        multiroute:true,
        key:19,
        endpoints:[
          {
            title:"/api/genres:id",
            endpoint:"/api/genres:id",
            key:18,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/genres`,
            methodType: "GET",
            hasIdInput: true,
            hasLogin: false,
            hasPayload: false,
            header: "Get a genre by id",
            description: `This endpoint is for getting a specifc genre by id from the database.`,
            response: {
              info: `Genres have an id, a name, and a Mongoose specifc version key property.`,
              example: `{ "_id": "5c7d4f30c8217500179b7624", "name": "Horror", "__v": 0 }`
            },
            exampleId:"5c7d4f30c8217500179b7624",
            idNote:`Add your id and call /api/genres/:id to get back a genre.  NOTE: If you do not supply an id or do not change your input after calling other endpoints you will be making a GET request to /api/genres which will send back the list of genres.`
          },
          {
            title:"/api/genres:id",
            endpoint:"/api/genres:id",
            key:17,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/genres`,
            methodType: "PUT",
            hasIdInput: true,
            hasLogin: true,
            hasPayload: true,
            header: "Edit a genre by id",
            description: `This endpoint is for editing a specifc genre by id from the database.`,
            response: {
              info: `Genres have an id, a name, and a Mongoose specifc version key property.`,
              example: `{ "_id": "5c7d4f30c8217500179b7624", "name": "Horror", "__v": 0 }`
            },
            payload: {
              schema: [
                { key: "name ", type: "String", optional: false },
              ],
              example: `{ "name":"EditedGenre" }`,
              exampleNote: ``
            },
            exampleId:"5c7d4f30c8217500179b7624",
            idNote:`Add your id and call /api/genres/:id to edit an existing genre.  NOTE: If you do not supply an id or do not change your input after calling other endpoints the id value will default to 1 which is always an invalid id.`
          }
          
        ]
      }
    ]
  },
  VidlyCustomers:{
    title:"Vidly Customers",
    endpoints:[
      {
        endpoint:"/api/customers",
        multiroute:true,
        key:16,
        endpoints:[
          {
            title:"/api/customers",
            endpoint:"/api/customers",
            key:15,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/customers`,
            methodType: "GET",
            hasIdInput: false,
            hasLogin: false,
            hasPayload: false,
            header: "Get all customers",
            description: `This endpoint is for getting a list of all the customers in the database.`,
            response: {
              info: `All customers have an id, name, phone number, a property representing gold status, and a Mongoose specifc version key property.`,
              example: `[ { "isGold": false, "_id": "5c7d95b4c8217500179b762e", "name": "Bobby", "phone": "1234567890", "__v": 0 }, { "isGold": false, "_id": "5c7d95b4c8217500179b762e", "name": "Samatha", "phone": "3131234567", "__v": 0 }]`
            }
          },
          {
            title:"/api/customers",
            endpoint:"/api/customers",
            key:14,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/customers`,
            methodType: "POST",
            hasIdInput: false,
            hasLogin: true,
            hasPayload: true,
            header: "Add a customer to the database",
            description: `This endpoint is for adding a customer and saving them to the database.`,
            response: {
              info: `All customers have an id, name, phone number, a property representing gold status, and a Mongoose specifc version key property.`,
              example: `[ { "isGold": false, "_id": "5c7d95b4c8217500179b762e", "name": "Bobby", "phone": "1234567890", "__v": 0 }]`
            },
            payload: {
              schema: [
                { key: "name ", type: "String", optional: false },
                { key: "phone ", type: "String", optional: false },
                { key: "isGold  ", type: "Bool", optional: true }
              ],
              example: `{"name":"bobby", "phone": "1234567890", "isGold": true}`,
              exampleNote: `Add your payload and call /api/customers to add a new customer!`
            },
          }
          
        ]
      },
      {
        endpoint:"/api/customers:id",
        multiroute:true,
        key:13,
        endpoints:[
          {
            title:"/api/customers:id",
            endpoint:"/api/customers:id",
            key:12,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/customers`,
            methodType: "GET",
            hasIdInput: true,
            hasLogin: false,
            hasPayload: false,
            header: "Get a customer by id",
            description: `This endpoint is for getting a specifc customer by id from the database.`,
            response: {
              info: `All customers have an id, name, phone number, a property representing gold status, and a Mongoose specifc version key property.`,
              example: `[ { "isGold": false, "_id": "5c7d95b4c8217500179b762e", "name": "Bobby", "phone": "1234567890", "__v": 0 }]`
            },
            exampleId:"5c7d95b4c8217500179b762e",
            idNote:`Add your id and call /api/customers/:id to get back a customer.  NOTE: If you do not supply an id or do not change your input after calling other endpoints you will be making a GET request to /api/customers which will send back the list of customers.`
          },
          {
            title:"/api/customers:id",
            endpoint:"/api/customers:id",
            key:11,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/customers`,
            methodType: "PUT",
            hasIdInput: true,
            hasLogin: true,
            hasPayload: true,
            header: "Edit a customer by id",
            description: `This endpoint is for editing a specifc customer by id from the database.`,
            response: {
              info: `All customers have an id, name, phone number, a property representing gold status, and a Mongoose specifc version key property.`,
              example: `[ { "isGold": false, "_id": "5c7d95b4c8217500179b762e", "name": "Bobby", "phone": "1234567890", "__v": 0 }]`
            },
            payload: {
              schema: [
                { key: "name ", type: "String", optional: false },
                { key: "phone ", type: "String", optional: false },
                { key: "isGold  ", type: "Bool", optional: true }
              ],
              example: `{"name":"bobby", "phone": "1234567890", "isGold": true}`,
              exampleNote: ``
            },
            exampleId:"5c7d95b4c8217500179b762e",
            idNote:`Add your id and call /api/customers/:id to edit an existing customer.  NOTE: If you do not supply an id or do not change your input after calling other endpoints the id value will default to 1 which is always an invalid id.`
          }
          
        ]
      }
    ]
  },
  VidlyMovies:{
    title:"Vidly Movies",
    endpoints:[
      {
        endpoint:"/api/movies",
        multiroute:true,
        key:5,
        endpoints:[
          {
            title:"/api/movies",
            endpoint:"/api/movies",
            key:6,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/movies`,
            methodType: "GET",
            hasIdInput: false,
            hasLogin: false,
            hasPayload: false,
            header: "Get all movies",
            description: `This endpoint is for getting a list of all the movies in the database.`,
            response: {
              info: `All movies have an id, title, number in stock, daily rental rate, a genre, and a Mongoose specifc version key property.`,
              example: `[ { "_id": "5c7da1ebc8217500179b7631", "title": "Starwars The Empire Strikes Back", "numberInStock": 25, "dailyRentalRate": 3, "genre": { "_id": "5c7d52b0c8217500179b7627", "name": "SciFi" }, "__v": 0 }, ...]`
            }
          },
          {
            title:"/api/movies",
            endpoint:"/api/movies",
            key:7,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/movies`,
            methodType: "POST",
            hasIdInput: false,
            hasLogin: true,
            hasPayload: true,
            header: "Add a movie to the database",
            description: `This endpoint is for adding a movie and saving it to the database.`,
            response: {
              info: `All movies have an id, title, number in stock, daily rental rate, a genre, and a Mongoose specifc version key property.`,
              example: `{ "_id": "5c7da1ebc8217500179b7631", "title": "Starwars The Empire Strikes Back", "numberInStock": 25, "dailyRentalRate": 3, "genre": { "_id": "5c7d52b0c8217500179b7627", "name": "SciFi" }, "__v": 0 }`
            },
            payload: {
              schema: [
                { key: "title ", type: "String", optional: false },
                { key: "dailyRentalRate ", type: "Number", optional: false },
                { key: "numberInStock  ", type: "Number", optional: false },
                { key: "genreId ", type: "GenreObjectId", optional: false }
              ],
              example: `{"title":"Starwars The Empire Strikes Back", "dailyRentalRate":3, "numberInStock":25, "genreId":"5c7d52b0c8217500179b7627"}`,
              exampleNote: `Add your payload and call /api/movies to add a new movie!`
            },
          }
          
        ]
      },
      {
        endpoint:"/api/movies:id",
        multiroute:true,
        key:8,
        endpoints:[
          {
            title:"/api/movies:id",
            endpoint:"/api/movies:id",
            key:9,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/movies`,
            methodType: "GET",
            hasIdInput: true,
            hasLogin: false,
            hasPayload: false,
            header: "Get all movies",
            description: `This endpoint is for getting a list of all the movies in the database.`,
            response: {
              info: `All movies have an id, title, number in stock, daily rental rate, a genre, and a Mongoose specifc version key property.`,
              example: `[ { "_id": "5c7da1ebc8217500179b7631", "title": "Starwars The Empire Strikes Back", "numberInStock": 25, "dailyRentalRate": 3, "genre": { "_id": "5c7d52b0c8217500179b7627", "name": "SciFi" }, "__v": 0 }, ...]`
            },
            exampleId:"5c7da1ebc8217500179b7631",
            idNote:`Add your id and call /api/movies/:id to get back a movie.  NOTE: If you do not supply an id or do not change your input after calling other endpoints you will be making a GET request to /api/movies which will send back the list of movies.`
          },
          {
            title:"/api/movies:id",
            endpoint:"/api/movies:id",
            key:10,
            multiroute:false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/movies`,
            methodType: "PUT",
            hasIdInput: true,
            hasLogin: true,
            hasPayload: true,
            header: "Add a movie to the database",
            description: `This endpoint is for adding a movie and saving it to the database.`,
            response: {
              info: `All movies have an id, title, number in stock, daily rental rate, a genre, and a Mongoose specifc version key property.`,
              example: `{ "_id": "5c7da1ebc8217500179b7631", "title": "Starwars The Empire Strikes Back", "numberInStock": 25, "dailyRentalRate": 3, "genre": { "_id": "5c7d52b0c8217500179b7627", "name": "SciFi" }, "__v": 0 }`
            },
            payload: {
              schema: [
                { key: "title ", type: "String", optional: false },
                { key: "dailyRentalRate ", type: "Number", optional: false },
                { key: "numberInStock  ", type: "Number", optional: false },
                { key: "genreId ", type: "GenreObjectId", optional: false }
              ],
              example: `{"title":"Starwars The Empire Strikes Back", "dailyRentalRate":3, "numberInStock":25, "genreId":"5c7d52b0c8217500179b7627"}`,
              exampleNote: ``
            },
            exampleId:"5c7da1ebc8217500179b7631",
            idNote:`Add your id and call /api/movies/:id to edit an existing movie.  NOTE: If you do not supply an id or do not change your input after calling other endpoints the id value will default to 1 which is always an invalid id.`
          }
          
        ]
      }
    ]
  },
  vidlyRentalReturns: {
    title: "Vidly Rentals and Returns",
    endpoints: [
      {
        endpoint: "/api/rentals",
        multiroute: true,
        key: 1,
        endpoints: [
          {
            title: "/api/rentals",
            endpoint: "/api/rentals",
            key: 3,
            multiroute: false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/rentals`,
            methodType: "GET",
            hasIdInput: false,
            hasLogin: false,
            hasPayload: false,
            header: "Get all rentals",
            description: `This endpoint is for getting a list of all the rentals in the database.`,
            response: {
              info: `All rentals have an id, a customer, a movie, and the date the movie was rented.`,
              example: `[{ "_id": "5c7dab16c8217500179b763d", "customer": 
              { "isGold": false, "_id": "5c7d9848c8217500179b7630", "name": "bobby", "phone": "1234567890" },
               "movie": { "_id": "5c7da1ebc8217500179b7631", "title": "Starwars The Empire Strikes Back", "dailyRentalRate": 3 },
              "dateRented": "2019-03-04T22:47:50.289Z" }, ...]`
            }
          },
          {
            title: "/api/rentals",
            endpoint: "/api/rentals",
            key: 4,
            multiroute: false,
            url: `https://boiling-meadow-22539.herokuapp.com/api/rentals`,
            methodType: "POST",
            hasIdInput: false,
            hasLogin: true,
            hasPayload: true,
            header: "Add a rental to the database",
            description: `This endpoint is for adding a rental and saving it to the database.`,
            response: {
              info: `All rentals have an id, a customer, a movie, and then the date the movie was rented.`,
              example: `{ "_id": "5c7dab16c8217500179b763d", "customer": 
              { "isGold": false, "_id": "5c7d9848c8217500179b7630", "name": "bobby", "phone": "1234567890" },
              "movie": { "_id": "5c7da1ebc8217500179b7631", "title": "Starwars The Empire Strikes Back", "dailyRentalRate": 3 },
               "dateRented": "2019-03-04T22:47:50.289Z" }`
            },
            payload: {
              schema: [
                { key: "movieId", type: "MovieObjectId", optional: false },
                { key: "customerId", type: "CustomerObjectId", optional: false }
              ],
              example: `{"movieId":"5c7da354c8217500179b7633", "customerId":"5c7d9848c8217500179b7630"}`,
              exampleNote: `Add your payload and call /api/rentals to add a new rental!`
            }
          }
        ]
      },
      {
        title: "/api/returns",
        endpoint: "/api/returns",
        multiroute: false,
        key: 2,
        url: `https://boiling-meadow-22539.herokuapp.com/api/returns`,
        methodType: "POST",
        hasIdInput: false,
        hasLogin: true,
        hasPayload: true,
        header: "Return a rental",
        description: `This endpoint is for returning a rental and saving it to the database.`,
        response: {
          info: `Returns have their own id, the name and email of who returned it, 
            then the customer who rented it, the movie, 
            and the date rented. Returns also have a dateReturned and a rental fee property.`,
          example: `{ "_id": "5c7cbd904d6acc0017dc5ff8", "name": "Cam Clover", "email": "c@c.com" { "_id": "5c7dacedc8217500179b764a", "customer": { "isGold": false, "_id": "5c7d9848c8217500179b7630", "name": "bobby", "phone": "1234567890" }, "movie": { "_id": "5c7da354c8217500179b7633", "title": "Starwars a New Hope", "dailyRentalRate": 2 }, "dateRented": "2019-03-04T22:55:41.720Z", "dateReturned": "2019-03-04T23:04:35.445Z", "rentalFee": 0 }`
        },
        payload: {
          schema: [
            { key: "movieId", type: "MovieObjectId", optional: false },
            { key: "customerId", type: "CustomerObjectId", optional: false }
          ],
          example: `{"movieId":"5c7da354c8217500179b7633", "customerId":"5c7d9848c8217500179b7630"}`,
          exampleNote: `Add your payload and call /api/returns to return your rental, and add a new return.`
        }
      }
    ]
  }
};

export default FGR_Vidly_API_data;
