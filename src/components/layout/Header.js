import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './Header.less';

const Header = (props) => {

	 return (
	 	<div>
	 		<Icon
	 			className={styles.trigger}
	 			type={props.siderCollapsed ? 'menu-unfold' : 'menu-fold'}
	 			onClick={()=>{ props.dispatch({type:'app/changeSiderCollapsed',collapsed:!props.siderCollapsed})}}
            />
	 	</div>
	 );

}

function mapStateToProps({ app },props){
	return { siderCollapsed: app.siderCollapsed };
}

export default connect(mapStateToProps)(Header)