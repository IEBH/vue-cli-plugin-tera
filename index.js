const chalk = require('chalk');

module.exports = function(api, options) {
	let settings = {
		onLog: (level, ...msg) => console.log(
			level == 'INFO' ? chalk.bgBlue.black(' INFO ')
			: chalk.bgYellow.black(' ' + level + ' '),
			...msg,
		),
		...options,
	};
	settings.onLog('INFO', 'Using Tera proxy');

	// Register a hook that runs when the dev server starts
	api.configureDevServer(app => {
		return Promise.resolve()
			.then(()=> import('@iebh/tera-fy/proxy')) // Load dynamically as this module is CJS and TeraFy is ESM
			.then(({TeraProxy}) => new TeraProxy(options))
	});

}
