const listTodo = [];


const todo = (state = listTodo , action)=>{
   	if(action.type == 'ADD_TASK' ){
  		state.push(action.task);
  		return state;

   	}
   		return [...state] ;
}

module.exports = {
    todo
}