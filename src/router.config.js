module.exports = [
	{
		path: "/",
		name: "AppIndex",
		description: "首页",
		icon: 'home',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./routes/IndexPage'));
			})
		},
		childRoutes: [{
			path: "home",
			name: "AppHome",
			description: "首页",
			icon: 'home',
			getComponent(nextState, cb) {
				require.ensure([], (require) => {
					cb(null, require('./routes/IndexPage'));
				})
			}
		}]
	},
	{
		path: '*',
		name: 'NotFundPage',
		getComponent(nextState, cb) {
			require.ensure([], require => {
				cb(null, require('./routes/NotFundPage'))
			})
		}
	}
]