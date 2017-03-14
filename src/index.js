import dva from 'dva';
import createLoading from 'dva-loading';
import { OnErrorHandler } from './handler';
// 1. Initialize
const app = dva({
	onError:OnErrorHandler
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
