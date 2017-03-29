export const changeSiderCollapsed = (siderCollapsed) => {
	return {type:'app/changeSiderCollapsed',siderCollapsed:siderCollapsed};	
}

export const createSessionInfo = (values) => {
	return {type:'app/createSessionInfo',values:values};	
}