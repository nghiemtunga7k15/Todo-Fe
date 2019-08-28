import React , { Component }from 'react';
import { connect } from 'react-redux';
import do_actions from './../action';
import './../App.css';
import API from './../API';
import axios from 'axios';


class Main  extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listTodo:[],
        detail:{},
      }
      this.keyPressed = this.keyPressed.bind(this);

    }
   
    componentDidMount() {
    this.getListTodo();
    }
    componentWillUpdate(){
     // this.initDetail();
     this.getListTodo();
    }
    // initDetail(){
    //   let self = this;
    //   setTimeout(function(){
    //       self.setState({
    //           detail : self.props.detailTodo
    //       })
    //   },1000)
    // }        
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
    // demo(){
    //   let params = { 
    //   }
    //   let ApiAddTask =  API('delete' ,'http://localhost:3001/api/delete/126' , params);
    //   ApiAddTask
    //     .then(suc=>{
    //       console.log('ok');
    //     })
    //     .catch(e =>{
    //       console.log('not ok')
    //     })
    // }
    demoIfElse =() =>{
      return <h1>True</h1>
    } 
    demoIfElse2 =() =>{
      return <h1>False</h1>
    } 
    render(){
      let button = true;
      if(button == true){
          button = this.demoIfElse();
      }else{
        button = this.demoIfElse2()
      }
      return (
        <div className="container">
             <h2 className="text">Todo-App</h2>
             <input className="input-todo" onKeyPress={this.keyPressed} ref={el => this.inputTitle = el} /> 
                 <nav>
                    <ul>
                        {this.renderListTodo()}
                    </ul>
                 </nav>

             <div>
              {button}
                 
             </div>
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