# rest-api-playlist

A simple rest api project using NodeJS and MongoDB

## REST API Endpoints

| HTTP method  | URI path | Description |
| ------------- | ------------- |  ------------- |
| POST  | /api/users  | Create a user in db |
| GET  | /api/users  | Get the full list of users |
| GET  | /api/users/{id} | Get a user with a specified id |
| PUT  | /api/users/{id} | Update a user with a specified id |
| DELETE  | /api/users/{id} | Delete a user with a specified id  |

## How to run

Install MongoDB and NodeJS

```
mongod
npm install
nodemon index
```

To create a user

```
curl -X POST \
  http://localhost:4000/api/users \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 00ea3dec-ce35-5b05-94da-f705ed4bdc89' \
  -d '{
	"name" : "rest-api",
	"age" : 22,
	"gender" : false
}'
```

## Reference

[The Net Ninja - REST API Tutorial](https://www.youtube.com/watch?v=BRdcRFvuqsE&list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8)
