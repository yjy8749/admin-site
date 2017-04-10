import { connect } from 'dva';
import { Link } from 'dva/router'
import { Menu, Icon } from 'antd';
import { currentMenuKeyChange, openMenuKeysChange } from '../../actions/AppActions';
import routers from '../../router.config'

const Menus = (props) => {

	const onClick = (event) => {
		props.dispatch(currentMenuKeyChange(event.key));
	}

	const onOpenChange = (openKeys) => {
		const latestOpenKey = openKeys.find(key => !(props.openMenuKeys.indexOf(key) > -1));
    	props.dispatch(openMenuKeysChange([latestOpenKey]));
	}

	const filterRouter = (arrays) => {
		return arrays.filter( v => !v.hidden );
	}

	const getMenuItems = (path,arrays) => {
		arrays = filterRouter(arrays);
		path = path?path:"";
		return arrays.map(router => {
			let keyAndPath = (path=='/'?path:path+'/')+router.path;
			if(router.childRoutes&&router.childRoutes.length){
				return (
					<Menu.SubMenu key={keyAndPath} title={<span><Icon type={router.icon} />{!props.siderCollapsed && router.description}</span>}>
						{getMenuItems(keyAndPath,router.childRoutes)}
					</Menu.SubMenu>
				)
			}else{
				return (
					<Menu.Item key={keyAndPath}>
						<Link to={keyAndPath}><span><Icon type={router.icon} />{!props.siderCollapsed && router.description}</span></Link>
					</Menu.Item>
				)
			}
		});
	}

	const menuItems = routers.map(router => {
		if(router.childRoutes&&router.childRoutes.length){
			return getMenuItems(router.path,router.childRoutes);
		}else{
			return getMenuItems(null,[router]);
		}
	});
	
	return (
	 	<Menu
	 		theme="dark"
	 		mode={props.siderCollapsed?"vertical":"inline"}
	 		onClick={onClick}
	 		openKeys={props.openMenuKeys}
	 		onOpenChange={onOpenChange} 
	 		selectedKeys={[props.currentMenuKey]}
	 	>
	 		<Menu.Item key="/"> <Link to="/"><Icon type="home" /> {!props.siderCollapsed && "首页"}</Link> </Menu.Item>
	 		{menuItems}
	 	</Menu>
	);

}

function mapStateToProps({ app },props){
	return {
		siderCollapsed: app.siderCollapsed,
		currentMenuKey: app.currentMenuKey, 
		openMenuKeys: app.openMenuKeys 
	};
}

export default connect(mapStateToProps)(Menus);