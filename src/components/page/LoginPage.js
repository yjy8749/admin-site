import React, { PropTypes } from 'react';
import { Button, Row, Form, Input, Checkbox } from 'antd'
import styles from './LoginPage.less';
import config from '../../app.config';

const LoginPage = (props) => {

	const {getFieldDecorator,validateFieldsAndScroll} = props.form;
	const {onOk} = props;
	
	function handleSubmit(){
		validateFieldsAndScroll((errors,values)=>{
			if(errors){
				return;
			}
			onOk(values);
		})
	}


	return <div className={styles.form}>
		<div className={styles.logo}>
			<img src={config.logoSrc} />
			<span>{config.logoText}</span>
		</div>
		<form>
			<Form.Item hasFeedback>
				{
					getFieldDecorator("username",{
						rules:[
							{
								required:true,
								message: '请输入用户名'
							}
						]
					})(<Input size='large' placeholder='用户名' />)
				}
			</Form.Item>
			<Form.Item hasFeedback>
				{
					getFieldDecorator("password",{
						rules:[
							{
								required:true,
								message: '请输入密码'
							}
						]
					})(<Input size='large' type='password' placeholder='密码' />)
				}
			</Form.Item>
			<Form.Item>
				{
					getFieldDecorator("rememberMe")(<Checkbox>Remember Me</Checkbox>)
				}
			</Form.Item>
			<Row>
          		<Button type='primary' size='large' onClick={handleSubmit}>
            		登录
          		</Button>
        	</Row>
		</form>
	</div> 
}

LoginPage.propTypes = {
	onOk:PropTypes.func
}

export default Form.create()(LoginPage)