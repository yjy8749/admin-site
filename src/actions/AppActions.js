export const changeSiderCollapsed = (siderCollapsed) => {
	return {type:'app/changeSiderCollapsed',siderCollapsed:siderCollapsed};	
}

export const createSessionInfo = (values) => {
	return {type:'app/createSessionInfo',values:values};	
}

export const deleteSessionInfo = (values) => {
	return {type:'app/deleteSessionInfo'};	
}

export const currentMenuKeyChange = (currentMenuKey) => {
	return {type:'app/currentMenuKeyChange',currentMenuKey:currentMenuKey}
}

export const openMenuKeysChange = (openMenuKeys) => {
	return {type:'app/openMenuKeysChange',openMenuKeys:openMenuKeys}
}