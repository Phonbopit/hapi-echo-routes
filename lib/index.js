const chalk = require('chalk')

const Methods = {
  GET: 'get',
  PUT: 'put',
  POST: 'post',
  PATCH: 'patch',
  DELETE: 'delete'
}

exports.plugin = {
  pkg: require('../package.json'),
  register: (server, { debug }) => {
    const routes = server
      .table()
      .map(({ method, path }) => format(method, path))
      .join('\n')

    if (debug) {
      console.log(routes)
    }

    server.app.routes = routes
  }
}

const getColors = method => {
  switch (method) {
    case Methods.GET:
      return '#33df40'
    case Methods.PUT:
      return '#d353f0'
    case Methods.POST:
      return '#fe72a9'
    case Methods.PATCH:
      return '#01c9e3'
    case Methods.DELETE:
      return '#ff1212'
    default:
      return '#fff'
  }
}

const format = (method, path) => {
  return `${chalk.hex(getColors(method))(method.toUpperCase())}\t${path}`
}
