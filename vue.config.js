module.exports = {
	pluginOptions: {
		i18n: {
			locale: 'en',
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: true
		}
	},
	devServer: {
		port: 8102,
		https: false,
		watchOptions: {
			poll: true
		}
	}
}
