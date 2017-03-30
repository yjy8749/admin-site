import { connect } from 'dva';
import { Menu, Icon } from 'antd';
import { currentMenuKeyChange, openMenuKeysChange } from '../../actions/AppActions';

const Menus = (props) => {

	const onClick = (event) => {
		props.dispatch(currentMenuKeyChange(event.key));
	}

	const onOpenChange = (openKeys) => {
		const latestOpenKey = openKeys.find(key => !(props.openMenuKeys.indexOf(key) > -1));
    	props.dispatch(openMenuKeysChange([latestOpenKey]));
	}
	
	return (
	 	<Menu
	 		theme="dark"
	 		mode="inline"
	 		onClick={onClick}
	 		openKeys={props.openMenuKeys}
	 		onOpenChange={onOpenChange}
	 		selectedKeys={[props.currentMenuKey]}
	 	>
	 		<Menu.SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
	 			<Menu.Item key="item1"> option 1</Menu.Item>
	 			<Menu.Item key="item2"> option 2</Menu.Item>
	 			<Menu.Item key="item3"> option 3</Menu.Item>
	 			<Menu.Item key="item4"> option 4</Menu.Item>
	 			<Menu.Item key="item5"> option 5</Menu.Item>
	 		</Menu.SubMenu>
	 		<Menu.SubMenu key="sub2" title={<span><Icon type="mail" /><span>Navigation Two</span></span>}>
	 			<Menu.Item key="item6"> option 6</Menu.Item>
	 			<Menu.Item key="item7"> option 7</Menu.Item>
	 			<Menu.Item key="item8"> option 8</Menu.Item>
	 			<Menu.Item key="item9"> option 9</Menu.Item>
	 			<Menu.Item key="item10"> option 10</Menu.Item>
	 		</Menu.SubMenu>
	 		<Menu.SubMenu key="sub3" title={<span><Icon type="mail" /><span>Navigation Two</span></span>}>
	 			<Menu.Item key="item11"> option 6</Menu.Item>
	 			<Menu.Item key="item12"> option 7</Menu.Item>
	 			<Menu.Item key="item13"> option 8</Menu.Item>
	 			<Menu.Item key="item14"> option 9</Menu.Item>
	 			<Menu.Item key="item15"> option 10</Menu.Item>
	 		</Menu.SubMenu>
	 	</Menu>
	);

}

function mapStateToProps({ app },props){
	return { currentMenuKey: app.currentMenuKey, openMenuKeys: app.openMenuKeys };
}

export default connect(mapStateToProps)(Menus);