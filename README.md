# Jobly

A full-stack application for applying to jobs with a React frontend and RESTful API to retrieve data from the Express and Postgres backend. 

Backend built as a separate exercise - backend code in this repository provided by [Rithm School](https://www.rithmschool.com/). Frontend pair programmed with [Mara Greene](https://github.com/mrgjune).

## Installation

1. Clone this repository
2. cd into the "backend" directory, install required packages, create and seed database, and start the server

```
cd backend
npm install
createdb jobly
psql jobly < data.sql
nodemon server.js 
```
This will start the server on port 3001

3. cd into the "frontend" directory, install required packages, then start the app

```
cd frontend
npm install
npm start
```
This will run the app on http://localhost:3000

## Running Tests

```
createdb jobly-test
cd backend
jest

cd frontend
npm test
```

## Features

* Create a new user account and manage profile
* Search for jobs and apply to jobs
* Filter search results by company
* Get company details
* All routes require authentication

### Routes
|Path | Component |
| :--- | :--- |
| / | Home  |
| /register  | Login  |
| /login  | Login  |
| /companies  | Companies  |
| /companies/:handle  | Company  |
| /jobs  | Jobs |
| /profile | Profile  |


### Component Architecture
```
App
└─┬─ NavBar
  └┬ Routes
   ├── Homepage
   ├── Login
   └─┬ PrivateRoutes 
     ├─┬ Companies
     │ ├── SearchBar
     │ └── CompanyCard 
     ├─┬ Company
     │ └── JobCard 
     ├─┬ Jobs
     │ ├── SearchBar
     │ └── JobCard
     └── Profile
```
