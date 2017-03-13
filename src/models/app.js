import SessionService from '../services/SessionService';

export default {
  namespace: 'app',
  state: {
  	authenticated:false,
  	session:null
  },
  reducers: {
  	authSucceed(state,{ session }){
      console.log(session);
  		return {
  			...state,
  			authenticated:true,
  			session:session
  		}
  	},
  	authFailed(state){
  		return {
  			...state,
  			authenticated:false,
  			session:null
  		}
  	}
  },
  effects: {
  	*fetchSessionInfo(args, {call, put}){
  		let resp = yield SessionService.fetchSessionInfo();
  		yield put({
          type : 'authSucceed',
          session : resp
        })
  	},
  	*createSessionInfo(args,{call, put}){
  		let resp = yield SessionService.createSessionInfo();
  		yield put({
          type : 'authSucceed',
          session : resp
        })
  	},
    *deleteSessionInfo(args,{call, put}){
      let resp = yield SessionService.deleteSessionInfo();
      yield put({
          type : 'authFailed'
        })
    }
  },
  subscriptions: {
  	setup ({ dispatch, history }) {
  		dispatch({type:'fetchSessionInfo'});
  	}
  },
};
