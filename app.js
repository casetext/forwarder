var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
	target: process.env.TARGET,
	secure: false
});

proxy.on('error', function(err) {
	console.error(err);
});

proxy.listen(process.env.PORT || 30033);
