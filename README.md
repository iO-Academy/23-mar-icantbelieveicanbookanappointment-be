## API documentation

### Return all doctors

* **URL**

  /doctors

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  There are no required URL params


  **Optional:**
  
  There are no optional URL params


* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

```json
{
    "message": "Successfully found doctors.",
    "data": [
        {
            "id": 1,
            "last_name": "Login"
        },
        {
            "id": 2,
            "last_name": "Input"
        },
        {
            "id": 3,
            "last_name": "Jones"
        },
        {
            "id": 4,
            "last_name": "Domain"
        },
        {
            "id": 5,
            "last_name": "Component"
        }
    ]
}
```

* **Error Response:**

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{"message": "Unexpected error"}`
    

### Get a patient ID by email

* **URL**

  /patient

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  There are no required URL params


  **Optional:**
  
  There are no optional URL params
  

* **Body Data**

  Must be sent as JSON with the correct headers

  **Required:**

    ```json
    {
       "email" : "string"
    }
    ```
    
* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

```json
{
    "message": "Successfully found patient.",
    "data": 1
}
```

* **Error Response:**
  
  * **Code:** 400 <br />
    **Content:** ```
    {
        "message": "This patient does not exist",
        "data": 0
    }```

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{"message": "Unexpected error"}`
    
### Add an appointment 

* **URL**

  /appointment

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

* **Body Data**

  Must be sent as JSON with the correct headers

  **Required:**

    ```json
    {
      "patientId": "String",
      "doctorId": "String",
      "time": "Int",
      "date": "YYYY-MM-DD",
      "reason": "String"
    }
    ```
    
* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

```json
{
  "success" = "true"
}
```

* **Error Response:**

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Failed to add appointment."}`

### Return appointments by date and doctor

* **URL**

  /getAppointments/:date/:doctorId

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

  **Example:**

  `/getAppointments/2023-06-23/3`

* **Success Response:**

  * **Message:** "Successfully found appointments <br />
    **Data:** <br />

```json
{
    "message": "Successfully found appointments.",
    "data": [
        {
            "patientId": 46,
            "time": 15,
            "reason": "implement one-to-one infomediaries"
        }
    ]
}
```

* **Error Response:**

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{"message": "Unexpected error"}`

### Login as a Doctor

* **URL**

  /login

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

* **Body Data**

  Must be sent as JSON with the correct headers

  **Required:**

    ```json
    {
      "email": "String",
      "password": "String"
    }
    ```

* **Success Response:**
Session created using Express Session

  ```json
  {"success": "true"}
  ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{"message": "Invalid song data", "data": []}`

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error", "data": []}`


### Logout a Doctor

* **URL**

  /logout

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

* **Success Response:**

Destroys session

* **Error Response:**

