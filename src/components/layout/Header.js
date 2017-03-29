import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './Header.less';
import { changeSiderCollapsed } from '../../actions/AppActions';

const Header = (props) => {

	 return (
	 	<div>
	 		<Icon
	 			className={styles.trigger}
	 			type={props.siderCollapsed ? 'menu-unfold' : 'menu-fold'}
	 			onClick={()=>{ props.dispatch(changeSiderCollapsed(!props.siderCollapsed)) }}
            />
	 	</div>
	 );

}

function mapStateToProps({ app },props){
	return { siderCollapsed: app.siderCollapsed };
}

export default connect(mapStateToProps)(Header)