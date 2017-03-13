export default {
	OnErrorHandler(error, dispatch) {
		// 全局错误处理
		switch (error.message) {
			case 'Forbidden':
				{
					dispatch({
						type: 'app/authFailed'
					});
				}
				break;
			default:
				{
					console.log(error.stack);
				}
		}
	}
}