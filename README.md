# API Documentation

### Getting Star
*  clone project
*  Run following command to start project
```
    npm instll

    node index.js
```
* Sign Up to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
    * create cluster
    * create user
    * create connection string application
    * paste connection string into config.env "DATABASE", replace <user> and <password> with your own credential




## Employee endpoint
* Get all employee
```javascript
    http://localhost:5000/employee
```

* Get employee by id
```javascript
    http://localhost:5000/employee/id
```
* add new employee
```javascript
    http://localhost:5000/employee

    body: {
        "name": "Hamza",
        "age": 24
    }
```

* update employee by id
```javascript
    http://localhost:5000/employee/id

    body: {
        "age": 27
    }
```

* delete employee by id
```javascript
    http://localhost:5000/employee/id
```

---

## Checkup Venue Endpoint

* Get all checkup venue
```javascript
    http://localhost:5000/checkupVenu
```

* Get checkup venue by id
```javascript
    http://localhost:5000/checkupVenu/id
```
* add new checkup venue
```javascript
    http://localhost:5000/checkupVenu

    body: {
        "name": "mental health",
        "location": "deenConnect, Islamabad office"
    }
```

* update checkup venue by id
```javascript
    http://localhost:5000/checkupVenu/id

    body: {
        "location": "rawalpindi"
    }
```

* delete checkup venue by id
```javascript
    http://localhost:5000/checkupVenu/id
```

---

## Employee Slots endpoint
* Get all employee Slots
```javascript
    http://localhost:5000/employeeSlot
```

* Get employee Slot by id
```javascript
    http://localhost:5000/employeeSlot/id
```
* add new employee Slot
```javascript
    http://localhost:5000/employeeSlot

    body: {
        "employeeId":"68be192",
        "venueId":"638f09",
        "scheduleAt": "2022-12-12 19:23:45",
        "status":"allocated"
    }
```

* update employee Slot by id
```javascript
    http://localhost:5000/employeeSlot/id

    body: {
        body: {
        "status":"allocated completed"
    }
    }
```

* delete employee Slot by id
```javascript
    http://localhost:5000/employeeSlot/id
```
