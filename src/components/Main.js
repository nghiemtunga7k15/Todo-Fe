import React , { Component }from 'react';
import { connect } from 'react-redux';
import do_actions from './../action';
import './../App.css';
import API from './../API';
import axios from 'axios';
import { createStore } from 'redux';
import myReducer from './../reducer';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const store = createStore(myReducer);

class Main  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        listTodo:[],
        // detail:'',
      }
      this.keyPressed = this.keyPressed.bind(this);
    }
    
    componentWillMount() {
        this.initListTodo();
    }
    componentDidUpdate(){
        
    }   
    initListTodo(){
      this.setState({listTodo:this.props.todo})
    }
    getListTodo(){
          let self = this;
          let params = {
          }
          let ApiListTodo =  API('get' ,'http://localhost:3001/api/list' , params);
          ApiListTodo
          .then(suc=>{
                self.props.addTask(suc.data.data);
                self.setState({ listTodo :  suc.data.data });
          })
          .catch(err =>{
               return console.log(err);
          })

    }
    getListTodoByPromise(params){
      return new Promise((reslove,reject)=>{
          let ApiListTodo =  API('get' ,'http://localhost:3001/api/list' , params);
          ApiListTodo
          .then(suc=>{
                  return reslove(suc.data.data);
          })
          .catch(err =>{
               return reject(err);
          })
      })
    }
    keyPressed(event) {
       let self = this;
      if (event.key === "Enter") {
          let params = {
              name :event.target.value,
              status:true
          }
          let ApiAddTask =  API('post' ,'http://localhost:3001/create' , params);
          ApiAddTask
          .then(suc=>{
                self.setState({
                    listTodo:[]
                });
          })
          .catch(err =>{
              return console.log(err);
          })
      }
    }
    done(task){
       if(window.confirm("Are you sure") == true){
         let params = { 
      }
      let id = task._id;
      let ApiAddTask =  API('delete' ,`http://localhost:3001/api/delete/${id}` , params);
          ApiAddTask
            .then(suc=>{
              console.log('ok');
            })
            .catch(e =>{
              console.log('not ok')
            })
           }else{
              return false;
           }
    }
    renderListTodo = () => {
      return this.state.listTodo.map((obj,index)=>{
        return (
            <li onClick={() => this.props.detail(obj)} key={index}>
                    <span className="curron" onClick={() => this.done(obj)}>{obj.name}</span>
            </li>
        )
      })
    }
    renderList = () => {
       return  this.state.listTodo.map(function(player , index) {
        return (
            <li key={index} >{player.name}</li>
          )
        })
    }
    searchName = (event)=>{
      let val = event.target.value;
      let list = this.state.listTodo;
     let search =  list.filter(obj=>{

          let demo = obj.name.indexOf(val);
          if(demo != -1 && val !=''){
            return obj;
          }
      })
     console.log(search)
      if(search.length <= 0){
          search = list;
      } 
      // list.push({name:val,age:20});                                                                                                                                                                                                        
      let valueInput= event.target.value;
      this.setState({
        listTodo:search
      })
    }
    render(){
      
      return (
        <div className="container">
          {/* <h2 className="text">Todo-App</h2>
             <input className="input-todo" onKeyPress={this.keyPressed} ref={el => this.inputTitle = el} /> 
                 <nav>
                    <ul>
                        {this.renderListTodo()}
                    </ul>
                 </nav>   */}
                  <input type="text" onKeyUp={this.searchName} ref />
                  {this.renderList()}  
        </div>
      );
    }
}


const  mapStateToProps =  state => {
  const {todo , detailTodo} = state;
    return { 
        todo,
        detailTodo
    }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      addTask: (task) =>{
         dispatch(do_actions.addTask(task));
      },
      detail: (task) =>{
         dispatch(do_actions.detail(task));
      },
  }
}



export default connect(mapStateToProps , mapDispatchToProps)(Main);