import React from 'react';
import { connect } from 'dva';
import { Button, Row, Form, Input, Checkbox } from 'antd'
import styles from './LoginForm.less';
import config from '../../app.config'; 
import { createSessionInfo } from '../../actions/AppActions';

const LoginForm = (props) => {

	const { getFieldDecorator, validateFieldsAndScroll } = props.form;

	function doLogin() {
		validateFieldsAndScroll((errors, values) => {
			if (errors) {
				return;
			}
			props.dispatch(createSessionInfo(values));
		});
	}


	return (
		<div className={styles.form}>
			<div className={styles.logo}>
				<img src={config.logoSrc} />
				<span>{config.logoText}</span>
			</div>
			<Form>
				<Form.Item hasFeedback>
					{
						getFieldDecorator("username", {
							rules: [
								{
									required: true,
									message: '请输入用户名'
								}
							]
						})(<Input size='large' placeholder='用户名' />)
					}
				</Form.Item>
				<Form.Item hasFeedback>
					{
						getFieldDecorator("password", {
							rules: [
								{
									required: true,
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
					<Button type='primary' size='large' onClick={doLogin}> 登录 </Button>
				</Row>
			</Form>
		</div>
	);
}

export default connect()(Form.create()(LoginForm))