const Hapi = require('hapi')
const test = require('tape')
const echoRoutes = require('../lib')

const server = Hapi.server({ port: 5555 })

// Mock server
server.route({
	method: 'GET',
	path: '/api/route1',
	handler: (req, h) => 'route 1'
})

server.route({
	method: 'GET',
	path: '/api/route2',
	handler: (req, h) => 'route 2'
})

server.route({
	method: 'POST',
	path: '/api/route3',
	handler: (req, h) => 'route 3'
})

server.register(echoRoutes)

const e = `GET\t/api/route1
GET\t/api/route2
POST\t/api/route3`

test('Display all routes', t => {
	t.plan(1)
	t.equal(server.app.routes, e)
})

