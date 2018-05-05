# hapi-echo-routes [![Build Status](https://semaphoreci.com/api/v1/phonbopit/hapi-echo-routes/branches/master/badge.svg)](https://semaphoreci.com/phonbopit/hapi-echo-routes)

[![npm](https://img.shields.io/npm/dm/localeval.svg?style=for-the-badge)](https://www.npmjs.com/package/hapi-echo-routes)

:loudspeaker: Display all routes inspired by `rake routes` of Ruby on Rails

## Usage

Install dependencies

```
npm install hapi-echo-routes

# with yarn
yarn add hapi-echo-routes
```

Register plugin

```diff
const Hapi = require('hapi')
const server = Hapi.server({ port: 5555 })

+ const echoRoutes = require('hapi-echo-routes')
+ server.register(echoRoutes)
```

Then, routes will be available with `server.app.routes` :

```js
console.log(server.app.routes)

POST	/auth/login
POST	/auth/register
GET   /users
GET   /users/{user_id}
POST  /users/{user_id}
```

Or if you want to print to the console, just passed `{ debug: true}` options

```
server.register({
	plugin: echoRoutes,
	options: {
		debug: true
	}
})
```

That's it \m/\m/
