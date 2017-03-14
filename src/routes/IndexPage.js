import React from 'react';
import { connect } from 'dva';
import AuthenticationComponent from '../support/AuthenticationComponent';
import LoginPage from '../components/page/LoginPage';

class IndexPage extends AuthenticationComponent {

	constructor(props) {
		super(props);
	}


	render() {
		return <div>
			{ 
				this.props.authenticated?
				<h1>OK</h1>:
				<LoginPage onOk={(values)=>{ this.props.dispatch({type:'app/createSessionInfo',values:values})}}/> 
			}
	    </div>
	}
}

function mapStateToProps({ app },props){
	return { authenticated: app.authenticated };
}

export default connect(mapStateToProps)(IndexPage);