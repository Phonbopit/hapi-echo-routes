# hapi-echo-routes
:loudspeaker: Display all routes inspired by `rake routes` of Ruby on Rails

## Usage

Install dependencies

```
npm install @phonbopit/hapi-echo-routes

# with yarn
yarn add @phonbopit/hapi-echo-routes
```

Register plugin

```diff
const Hapi = require('hapi')
const server = Hapi.server({ port: 5555 })

+ const echoRoutes = require('@phonbopit/hapi-echo-routes')
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