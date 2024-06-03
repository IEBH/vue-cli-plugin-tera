module.exports = function(api, options) {
	console.log('Loading Tera proxy');

	// Register a hook that runs when the dev server starts
	api.configureDevServer(app => {
		return Promise.resolve()
			.then(()=> import('@iebh/tera-fy/proxy')) // Load dynamically as this module is CJS and TeraFy is ESM
			.then(({TeraProxy}) => new TeraProxy(options))
	});

}
