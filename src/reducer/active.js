const detail = {};
const detailTodo = (state = {} , action)=>{
   	if(action.type == 'DETAIL' ){
   		state = action.task;
  		return state;

   	}
   		return state ;
}

module.exports = {
    detailTodo
}