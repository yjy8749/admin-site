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
		childRoutes: [
			{
				path: "page_1",
				name: "page_1",
				description: "PAGE_1",
				icon: 'mail',
				getComponent(nextState, cb) {
					require.ensure([], (require) => {
						cb(null, require('./routes/Page_1'));
					})
				}
			},
			{
				path: "Page_2",
				name: "Page_2",
				description: "PAGE_2",
				icon: 'mail',
				getComponent(nextState, cb) {
					require.ensure([], (require) => {
						cb(null, require('./routes/Page_2'));
					})
				},
				childRoutes:[
					{
						path: "Page_2_1",
						name: "Page_2_1",
						description: "PAGE_2_1",
						icon: 'mail',
						getComponent(nextState, cb) {
							require.ensure([], (require) => {
								cb(null, require('./routes/Page_2_1'));
							})
						}
					}
				]
			},
			{
				path: "page_3",
				name: "page_3",
				description: "PAGE_3",
				icon: 'mail',
				getComponent(nextState, cb) {
					require.ensure([], (require) => {
						cb(null, require('./routes/Page_3'));
					})
				}
			}
		]
	},
	{
		path: '*',
		name: 'NotFundPage',
		hidden: true,
		getComponent(nextState, cb) {
			require.ensure([], require => {
				cb(null, require('./routes/NotFundPage'))
			})
		}
	}
]