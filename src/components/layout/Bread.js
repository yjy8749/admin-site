import { Breadcrumb, Icon } from 'antd';

const Bread = (props) => {

	return (
		<div style={{padding:"24px"}}>
			<Breadcrumb>
			    <Breadcrumb.Item href="">
			      	<Icon type="home" />
			    </Breadcrumb.Item>
	    		<Breadcrumb.Item href="">
	      			<Icon type="user" />
	      			<span>Application List</span>
	    		</Breadcrumb.Item>
	    		<Breadcrumb.Item>
	     			Application
	    		</Breadcrumb.Item>
  			</Breadcrumb>
		</div>
	);

}

export default Bread;