# Pack Admin Backend

## The PackAdmin

[packadmin.com](https://packadmin.com)

The PackAdmin, is free software for managing your Cub Scout Pack. Easily and securely store and retrieve all of your scout, parent, and leader information from anywhere and on any device. Track all of your scouts' accomplishments and have convientient access to this information for planning and purchasing for advancement ceremonies.

### The Tech

The backend is constructed in NodeJs, utilizing an Express server and MongoDB database. 

Authentication and authorization is handled through PassportJS. All API routes are protected through the use of JWT tokens. The client, server connection is secured with ssl enabled through Let's Encrypt.

The frontend is a single page React app, utilizing react router and redux. 