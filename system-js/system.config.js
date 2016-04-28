//configure system loader
System.config({
	map: {
		'rxjs': 'node_modules/rxjs',
		'@igorminar': 'node_modules/@igorminar',
		'app': 'dist'
	},
	packages: {
		'app': {
			main: 'main.js',
			defaultExtension: 'js'
		},
		'@igorminar/core': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@igorminar/compiler': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@igorminar/common': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@igorminar/platform-browser': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@igorminar/platform-browser-dynamic': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'rxjs': {
			defaultExtension: 'js'
		}
	}
})
