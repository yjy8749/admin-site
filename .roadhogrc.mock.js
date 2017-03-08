
export default {
	'GET /api/users': { users: [1,2] },
	'POST /api/users': { users: [1,2,3] },
	'GET /api/users/1': (req, res) => {
		res.end('OK'); 
	}
};
