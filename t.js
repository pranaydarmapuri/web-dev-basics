
var http = require('https')

var options = {
  method: 'GET',
  hostname: 'api.collectapi.com',
  port: null,
  path: '/weather/getWeather?data.lang=en&data.city=hyderabad',
  headers: {
    'content-type': 'application/json',
    authorization: 'apikey 1Z9pj42UlZg4kOmu9FxQJi:4PuCd24tgrmYf2PBQ4hLZm'
  }
}

var req = http.request(options, function (res) {
  var chunks = []

  res.on('data', function (chunk) {
    chunks.push(chunk)
  })

  res.on('end', function () {
    var body = Buffer.concat(chunks)
    const fs = require('node:fs')

    fs.writeFileSync('foo.json', body.toString())
  })
})

req.end()
