import React from 'react';

class AuthenticationComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	checkPermission(permission){

		let app = this.context.getState().app;
		let permissions = app.session?app.session.permission:[];

		return permissions.indexOf(permission)>=0

	}

	checkAndReturn(permission,returnValue,defaultValue = ''){
		return this.checkPermission(permission)?returnValue:defaultValue;
	}

}

AuthenticationComponent.contextTypes = {
	store: React.PropTypes.object
};

export default AuthenticationComponent;