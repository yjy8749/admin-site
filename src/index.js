import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
	onError(error,dispatch){
		// 全局错误处理
		switch(error.message){
			case 'Forbidden':{
				dispatch({type:'app/createSessionInfo'});
			}break;
			default:{
				console.log(error.stack);
			}
		}
	},
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
app.model(require("./models/app"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
