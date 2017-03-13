import SessionService from '../services/SessionService';

export default {
  namespace: 'app',
  state: {
  	
  },
  reducers: {

  },
  effects: {
  	*fetchSessionInfo(args, {call, put}){
  		let session = yield SessionService.fetchSessionInfo();
  	},
  	*createSessionInfo(args,{call, put}){
  		let session = yield SessionService.createSessionInfo();
  	}
  },
  subscriptions: {
  	setup ({ dispatch, history }) {
  		dispatch({type:'fetchSessionInfo'});
  	}
  },
};
