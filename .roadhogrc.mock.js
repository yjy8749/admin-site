const MOCK_CONTEXT = {
	lastLoginTime:null,
	session:null,
	isLoginSuccess:()=>{
		return MOCK_CONTEXT.lastLoginTime && MOCK_CONTEXT.lastLoginTime + 10 * 60 * 1000 > Date.now();
	}
};

function successResp(res, data) {
	res.writeHeader(200, {
		"Content-Type": "application/json;charset=UTF-8"
	});
	res.end(JSON.stringify({
		code: 1000,
		message: null,
		data: data
	}));
};

function errorResp(res, code = 1024, message = "") {
	res.writeHeader(200, {
		"Content-Type": "application/json;charset=UTF-8"
	});
	res.end(JSON.stringify({
		code: code,
		message: message,
		data: null
	}));
};

export default {
	'GET /api/session': (req, res) => {
		if (MOCK_CONTEXT.isLoginSuccess()) {
			successResp(res,MOCK_CONTEXT.session);
		} else {
			errorResp(res,3000,"sessiont time out");
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
		
		successResp(res,MOCK_CONTEXT.session);
	},
	'DELETE /api/session': (req, res) => {
		MOCK_CONTEXT.lastLoginTime = null;
		MOCK_CONTEXT.session = null;
		successResp(res,null);
	}
};