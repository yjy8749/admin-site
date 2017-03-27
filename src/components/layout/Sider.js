import AppConfig from '../../app.config'
import styles from './Sider.less'

const Sider = (props) => {

	 return (
	 	<div className={styles.logo}>
	 		<img src={AppConfig.logoSrc} />
	 		<span>{AppConfig.logoText}</span>
	 	</div>
	 );

}

export default Sider