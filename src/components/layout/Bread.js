import { connect } from 'dva';
import { Breadcrumb, Icon } from 'antd';
import routers from '../../router.config'

const Bread = (props) => {

	let router = routers.find(value => value.path == '/');
	let paths = [];
	if(props.currentMenuKey!='/'){
		const keys = props.currentMenuKey.substr(1).split("/");
		paths = keys.map(key => {
			return router.childRoutes.find(value => {
				if(value.path == key){
					router = value;
					return true;
				}else{
					return false;
				}
			});
		});
	}

	let breadItems = paths.map((path,index) => {
		return <Breadcrumb.Item key={index}>{index<paths.length-1?<Icon type={path.icon} />:''}{ path.description }</Breadcrumb.Item>
	});

	return (
		<div style={{padding:"24px 0px"}}>
			<Breadcrumb>
			    <Breadcrumb.Item href="/">
			      	<Icon type="home" />
			    </Breadcrumb.Item>
			    { breadItems }
  			</Breadcrumb>
		</div>
	);

}

function mapStateToProps({ app },props){
	return {
		currentMenuKey: app.currentMenuKey, 
	};
}

export default connect(mapStateToProps)(Bread);