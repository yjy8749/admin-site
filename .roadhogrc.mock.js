const MOCK_CONTEXT = {};
const CONTENT_TYPE = "application/json;charset=UTF-8"

export default {
	'GET /api/session': (req, res) => {
		if (MOCK_CONTEXT.lastLoginTime && MOCK_CONTEXT.lastLoginTime + 10 * 60 * 1000 > Date.now()) {
			res.writeHeader(200, {
				"Content-Type": CONTENT_TYPE
			})
			res.end(JSON.stringify(MOCK_CONTEXT.session));
		} else {
			res.writeHeader(403, {
				"Content-Type": CONTENT_TYPE
			})
			res.end();
		}
	},
	'POST /api/session': (req, res) => {
		MOCK_CONTEXT.lastLoginTime = Date.now();
		MOCK_CONTEXT.session = {
			userInfo: {
				userName: 'admin',
				realName: '管理员',
				portrait: 'http://172.16.57.62:48080/eif-omc-web/static/manage/img/logo_icon.png'
			},
			permission: [
				'*.*.*'
			]
		};
		res.writeHeader(200, {
			"Content-Type": CONTENT_TYPE
		})

		res.end(JSON.stringify(MOCK_CONTEXT.session));
	},
	'DELETE /api/session': (req, res) => {
		MOCK_CONTEXT.lastLoginTime = null;
		MOCK_CONTEXT.session = null;
		res.writeHeader(200, {
			"Content-Type": CONTENT_TYPE
		})
		res.end();
	}
};