import React from 'react';
import { connect } from 'dva';
import { Spin, Layout, Menu, Icon, Breadcrumb } from 'antd'
import AuthenticationComponent from '../support/AuthenticationComponent';
import LoginForm from '../components/layout/LoginForm';
import MainLayout from '../components/layout/Main'

class IndexPage extends AuthenticationComponent {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			this.props.authenticated ?<MainLayout> <p> content </p> </MainLayout>:<LoginForm />
		)
	}
}

function mapStateToProps({ app },props){
	return { authenticated: app.authenticated };
}

export default connect(mapStateToProps)(IndexPage);