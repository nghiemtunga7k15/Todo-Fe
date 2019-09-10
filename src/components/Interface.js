import React , { Component }from 'react';
import './../App.css';
import { connect } from 'react-redux';

class Interface  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        demoBindding:10
      }
     
    }
    componentWillMount() {
        document.title = 'your title name'
    }
   
   handleKeyUp  =(event)=>{
    // let val = parseInt(event.target.value);
    this.setState({demoBindding : event.target.value});
   }
    render(){
      
      return (
        <div className="container">
              This is page Interface
              {this.state.demoBindding}
             <input type="text"  onKeyUp={this.handleKeyUp} />

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




export default connect(mapStateToProps , null)(Interface);