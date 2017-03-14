import request from '../utils/request';

export default {
	fetchSessionInfo: function() {
		return request('/api/session', {
			method: 'GET'
		});
	},
	createSessionInfo: function(params) {
		return request('/api/session', {
			method: 'POST',
			body: JSON.stringify(params)
		});
	},
	deleteSessionInfo: function() {
		return request('/api/session', {
			method: 'DELETE'
		});
	}
}