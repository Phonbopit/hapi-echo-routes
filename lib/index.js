exports.plugin = {
	pkg: require('../package.json'),
	register: server => {
		server.app.routes2 = 'OK'
		server.app.routes = server.table().map(r => `${r.method.toUpperCase()}\t${r.path}`).join('\n')
	}
}
