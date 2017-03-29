import React from 'react'
import { Layout } from 'antd'
import { connect } from 'dva';
import Sider from './Sider'
import Header from './Header'
import Footer from './Footer'

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
						{props.children}
				</Layout.Content>
				<Layout.Footer style={{ background: '#fff'}}>
					<Footer />
				</Layout.Footer>
			</Layout>
		</Layout>
	)
}

function mapStateToProps({ app },props){
	return { siderCollapsed: app.siderCollapsed };
}

export default connect(mapStateToProps)(Main)