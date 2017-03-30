import { connect } from 'dva';
import Menus from './Menus';
import AppConfig from '../../app.config';
import styles from './Sider.less';

const Sider = (props) => {

	 return (
	 	<div>
	 		<div className={styles.logo}>
	 			<img src={AppConfig.logoSrc} />
	 			<span>{props.siderCollapsed?'':AppConfig.logoText}</span>
	 		</div>
	 		<Menus />
	 	</div>
	 );

}

function mapStateToProps({ app },props){
	return { siderCollapsed: app.siderCollapsed };
}

export default connect(mapStateToProps)(Sider);