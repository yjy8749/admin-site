import SessionService from '../services/SessionService';

export default {
  namespace: 'app',
  state: {
  	authenticated:false,
  	session:null,
    siderCollapsed:false,
    currentMenuKey:"item7",
    openMenuKeys:["sub2"]
  },
  reducers: {
  	authSucceed(state,{ session }){
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
  	},
    changeSiderCollapsed(state,{ siderCollapsed }){
      return {
        ...state,
        siderCollapsed:siderCollapsed
      }
    },
    currentMenuKeyChange(state,{ currentMenuKey }){
      return {
        ...state,
        currentMenuKey:currentMenuKey
      }
    },
    openMenuKeysChange(state,{ openMenuKeys }){
      return {
        ...state,
        openMenuKeys:openMenuKeys
      }
    }
  },
  effects: {
  	*fetchSessionInfo(args, {call, put}){
  		let resp = yield SessionService.fetchSessionInfo();
  		yield put({
          type : 'authSucceed',
          session : resp.data
        })
  	},
  	*createSessionInfo(args,{call, put}){
  		let resp = yield SessionService.createSessionInfo(args.values);
  		yield put({
          type : 'authSucceed',
          session : resp.data
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
      history.listen(location => {
        let index = location.pathname.lastIndexOf("/");
        dispatch({type:'currentMenuKeyChange',currentMenuKey:location.pathname});
        dispatch({type:'openMenuKeysChange',openMenuKeys:[location.pathname.substr(0,index)]});
      });
  	}
  },
};
