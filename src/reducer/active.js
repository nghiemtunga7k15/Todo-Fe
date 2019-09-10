const detail = 100;
const detailTodo = (state = detail , action)=>{
   	if(action.type == 'DETAIL' ){
   		state = action.task;
  		return state;

   	}
   		return state ;
}

module.exports = {
    detailTodo
}