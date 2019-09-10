const listTodo = [
	{name:'Tung' , age:21},
	{name:'Duy' , age:21},
	{name:'Trong' , age:21},
	{name:'Son' , age:21},
	{name:'Hai' , age:21},
];


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
