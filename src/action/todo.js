const addTask = (task) =>{
	return {
		type:'ADD_TASK',
		task:task
	}
}

const detail = (task) =>{
	return {
		type:'DETAIL',
		task:task
	}
}

module.exports = {
	addTask,
	detail
}