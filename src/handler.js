import { Modal } from 'antd';

export default {
	OnErrorHandler(error, dispatch) {
		// 全局错误处理
		switch (error.code) {
			case 3000:
				{
					dispatch({
						type: 'app/authFailed'
					});
				}
				break;
			case 4000:
				{
					Modal.warning({
						content: "没有相应的权限"
					})
				}
			default:
				{
					Modal.error({
						content: '未知错误:' + error.message
					});
				}
				break;
		}
	}
}