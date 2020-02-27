extend (config, { isDev, isClient }) {
	　　　　if (isDev && process.client) {
	　　　　　　　　config.module.rules.push({
			　　　　enforce: 'pre',
			　　　　test: /\.(js|vue)$/,
			　　　　loader: 'eslint-loader',
			　　　　exclude: /(node_modules)/
		　　　　})
	　　　　}
	}