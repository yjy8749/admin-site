import React from 'react';
import { connect } from 'dva';
import { Spin, Layout, Menu, Icon, Breadcrumb } from 'antd'
import AuthenticationComponent from '../support/AuthenticationComponent';
import LoginPage from '../components/page/LoginPage';
import MainLayout from '../components/layout/Main'

class IndexPage extends AuthenticationComponent {

	constructor(props) {
		super(props);
	}

	doLogin = (values) => {
		this.props.dispatch({type:'app/createSessionInfo',values:values});
	}

	render() {

		return (
			this.props.authenticated
			?<MainLayout> <p> content </p> </MainLayout>
			:<LoginPage onOk={this.doLogin} />
		)
	}
}

function mapStateToProps({ app },props){
	return { authenticated: app.authenticated };
}

export default connect(mapStateToProps)(IndexPage);