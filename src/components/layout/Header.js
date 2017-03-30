import { connect } from 'dva';
import { Menu, Icon } from 'antd';
import styles from './Header.less';
import { changeSiderCollapsed, deleteSessionInfo } from '../../actions/AppActions';

const Header = (props) => {

	const menuClick = (event) => {
		switch(event.key){
			case 'logout':{
				props.dispatch(deleteSessionInfo());
			}break;
		}
	}


	return (
	 	<div>
	 		<Icon
		 		className={styles.trigger}
		 		type={props.siderCollapsed ? 'menu-unfold' : 'menu-fold'}
		 		onClick={()=>{ props.dispatch(changeSiderCollapsed(!props.siderCollapsed)) }}
            />
	 		<Menu
	 			className={styles.userMenu}
	 			mode='horizontal'
	 			onClick={ menuClick }
	 		>
		        <Menu.SubMenu 
		        	style={{ float: 'right' }} 
		        	title={<span> <Icon type='user' /> {props.session.userInfo.realName} </span>}
		        >
		          	<Menu.Item key='logout'>
		            	<a>注销</a>
		          	</Menu.Item>
		        </Menu.SubMenu>
		    </Menu>
	 	</div>
	);

}

function mapStateToProps({ app },props){
	return { siderCollapsed: app.siderCollapsed, session:app.session };
}

export default connect(mapStateToProps)(Header)