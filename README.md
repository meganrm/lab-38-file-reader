401 JS --  Lab 38 photo uploads
===

This allows you to upload image. It keeps track of who uploaded them. You can also change the fields, or change the image.

#### running locally
.env file:
- PORT=5000
- DB_URL=mongodb://localhost:27017/visual_files_dev
- APP_SECRET=thisissupersecret
- NODE_ENV=dev
- API_URL=http://localhost:5000/api/v1
- AUTH_URL=http://localhost:5000/api/v1
- CORS_ORIGINS=http://localhost:8080
- IMAGECLOUD_SECRET=[some totally secrett hing]
- AWS_BUCKET=[bucket name]
- AWS_ACCESS_KEY_ID=[access key]
- AWS_SECRET_ACCESS_KEY=[secret access key]
===
- in /server, run `npm run dev`, `npm run mongo`
- in /client, run `npm run watch`
- connect to localhost:8080
