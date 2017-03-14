import { Modal } from 'antd';

export default {
	OnErrorHandler(error, dispatch) {
		// 全局错误处理
		// switch (error.message) {
		// 	case 'Forbidden':
		// 		{
		// 			Modal.warning({
		// 				content: '没有相应的权限或登录超时',
		// 				onOk: () => {
		// 					dispatch({
		// 						type: 'app/authFailed'
		// 					});
		// 				}
		// 			});
		// 		}
		// 		break;
		// 	default:
		// 		{
		// 			Modal.error({
		// 				content: '未知错误:'+error.message
		// 			});
		// 		}
		// }
	}
}