import React from 'react';
import { Router, Route } from 'dva/router';
import routes from './router.config';

/* module 按需加载的问题 https://github.com/dvajs/dva/issues/533 */
const cached = {};
function registerModel(app, model) {
	if (!cached[model.namespace]) {
		app.model(model);
		cached[model.namespace] = 1;
	}
}

function RouterConfig({history, app}) {
	
  return (
    <Router history={history} routes={routes} />
  );
  
}

export default RouterConfig;
