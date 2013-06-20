# meteor-redis

a simple meteorite package, providing a wrapper for the [node-redis](https://github.com/mranney/node_redis) driver by [@mranney](https://github.com/mranney).

## How to install:
1. make sure you have [meteorite](https://github.com/oortcloud/meteorite) installed  
    `$ npm install -g meteorite`
2. inside your project, run:  
    `$ mrt add redis`

`meteor-redis` will install its dependencies and use the [hiredis](https://github.com/redis/hiredis) client if possible, as it is also listed as a dependency. 

## In your Meteor project:

Somewhere in your `server` code, have the app connect to Redis:  
`Meteor.startup(function() {  
  // connect to Redis  
  client = redis.createClient();  
});`

`meteor-redis` exposes the `redis` object, so its already available to you to implement wherever it makes sense to do so.

### Pull requests / issues
Please feel free to make pull requests and submit issues here. Thank you!

### TODO:
1. Add tests. If anyone would like to submit tests, please do!