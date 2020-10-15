# Mocked Backend
  NodeJS Backend mocked for tokens testing
# API

  - **POST** `/login` *password=username , check /list to get login data*
  
    Input
    ``` 
    {
        "username":"..."
        "password":"..."
    }
    ```
    Output
    ```
    {
        "access_token":"<token>",
        "exp":"<token_expiration_time>",
        "user":"
          {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        }
    }
    ```
  
  - **GET** `/profile`
  
    Headers:  

        Authorization: Bearer <token>

    Output:
    
    ```
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
          "street": "Ellsworth Summit",
          "suite": "Suite 729",
          "city": "Aliyaview",
          "zipcode": "45169",
          "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
          }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
          "name": "Abernathy Group",
          "catchPhrase": "Implemented secondary concept",
          "bs": "e-enable extensible e-tailers"
        }
      }
      ```
      
      
  - **GET** `/list` *no authorization needed*
      
      Output: `users[]`
