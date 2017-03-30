import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import Sider from './Sider';
import Header from './Header';
import Bread from './Bread';

const Main = (props) => {
	return (
		<Layout>
			<Layout.Sider collapsible trigger={null} collapsed={props.siderCollapsed}>
					<Sider />
			</Layout.Sider>
			<Layout>
				<Layout.Header style={{ background: '#fff', padding:'0',height:'50px'}}> 
					<Header />
				</Layout.Header>
				<Layout.Content>
					<Bread />
					<div style={{padding:"0px 24px"}}>
						{props.children}	
					</div>
				</Layout.Content>
			</Layout>
		</Layout>
	)
}

function mapStateToProps({ app },props){
	return { siderCollapsed: app.siderCollapsed };
}

export default connect(mapStateToProps)(Main)