# NodeJs Assignment

## Setup

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rishabhk02/Snake-Game.git

1. **Navigate to Backend Folder:**
   ```bash
   cd ./Backend
2. **Install the required packages:**
   ```bash
   npm install
3. **Create .env file and paste**
   ```bash
   MONGO_URL=<your-mongodb-url>
   PORT=<your-port-number>
   ```
4. **Start Backend Server:**
   ```bash
   npm run dev

The backend should now be running on `http://localhost:5000`.

## Usage
1. **Add Material API: http://localhost:5000/materials**
   ```bash
   Body: {
    "name": "Testing",
    "technology": "Latest Technology Testing",
    "colors": ["Blue","Red","Green"],
    "pricePerGram": 100,
    "image": file
   }
   
 ```bash
    Response: {
      "newMaterial": {
          "name": "Testing",
          "technology": "Latest Technology Testing",
          "colors": [
              "Blue",
              "Red",
              "Green"
          ],
          "pricePerGram": 100,
          "imageUrl": "image_1719330584264.jpg",
          "_id": "667ae718be3ef2e7d88b3f6b",
          "createdAt": "2024-06-25T15:49:44.289Z",
          "updatedAt": "2024-06-25T15:49:44.289Z",
          "__v": 0
      }
  }
```

2. **Get All Material API: http://localhost:5000/materials**
   ```bash
   Response: {
    "materials": [
        {
            "_id": "667ad981bb2921ecddebe0b2",
            "name": "Nota=",
            "technology": "Latest",
            "colors": [
                "Indigo",
                "Violet",
                "Purple"
            ],
            "pricePerGram": 100,
            "createdAt": "2024-06-25T14:51:45.813Z",
            "updatedAt": "2024-06-25T15:10:13.806Z",
            "__v": 0
        },
        {
            "_id": "667ada6ebb2921ecddebe0b4",
            "name": "Nylon",
            "technology": "Latest Technology",
            "colors": [
                "Blue",
                "Red",
                "Green"
            ],
            "pricePerGram": 100,
            "createdAt": "2024-06-25T14:55:42.609Z",
            "updatedAt": "2024-06-25T14:55:42.609Z",
            "__v": 0
        },
        {
            "_id": "667adf1ba5278d96ad749ca6",
            "name": "Nylon",
            "technology": "Latest Technology",
            "colors": [
                "Blue",
                "Red",
                "Green"
            ],
            "pricePerGram": 100,
            "createdAt": "2024-06-25T15:15:39.117Z",
            "updatedAt": "2024-06-25T15:15:39.117Z",
            "__v": 0
        }
    ]}

3. **Get Material By Id API: http://localhost:5000/materials/:id**
   ```bash
   Response: {
    "material": {
        "_id": "667ae718be3ef2e7d88b3f6b",
        "name": "Testing",
        "technology": "Latest Technology Testing",
        "colors": [
            "Blue",
            "Red",
            "Green"
        ],
        "pricePerGram": 100,
        "imageUrl": "image_1719330584264.jpg",
        "createdAt": "2024-06-25T15:49:44.289Z",
        "updatedAt": "2024-06-25T15:49:44.289Z",
        "__v": 0
    },
    "imageUrl": "http://localhost:5000/get-image?fileName=image_1719330584264.jpg"
   }

 4. **Get Image From URL: http://localhost:5000/get-image?fileName=image_1719330584264.jpg**
    
 5. **Update Material By Id API: http://localhost:5000/materials/:id**
     ```bash
     Body: {
      "name": "Testing",
      "technology": "Latest Technology Testing",
      "colors": ["Blue","Red","Green"],
      "pricePerGram": 100,
      "image": file
     }
   
 ```bash
    Response: {
    "updatedMaterial": {
        "_id": "667ad981bb2921ecddebe0b2",
        "name": "Nota=",
        "technology": "Latest",
        "colors": [
            "Indigo",
            "Violet",
            "Purple"
        ],
        "pricePerGram": 100,
        "imageUrl": "image_1719328199332.avif",
        "createdAt": "2024-06-25T14:51:45.813Z",
        "updatedAt": "2024-06-25T15:10:13.806Z",
        "__v": 0
    }
}
```

6. **Delete Material By Id API: http://localhost:5000/materials/:id**
   ```bash
   {
    "message": "Material deleted successfully"
   }
   
  
