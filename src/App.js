import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './fonts/font-awesome.css';

var todos = [
  {
    todoTitle: 'Voice-based E-mail for the Blind',
    todoResponsible:'Aishwarya',
    todoDescription: 'This e-mail system can be used by any user of any age group with ease of access. It has feature of speech to text as well as text to speech with speech reader which makes designed system to be handled by visually impaired person as well as blind person.',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'EMO-MUSIC(Emotion based music player)',
    todoResponsible: 'Aishwarya',
    todoDescription: 'Detect a face on the webcam and pre-process the image of the face,grab some images of your face and dynamically update the model over time,detect the emotion on your face; pick a random song linked to that emotion and play it.',
    todoPriority: 'high'
  },
  {
    todoTitle: 'Smart city',
    todoResponsible: 'Aishwarya',
    todoDescription: 'A smart city is an urban area that uses different types of electronic methods and sensors to collect data. Insights gained from that data are used to manage assets, resources and services efficiently; in return, that data is used to improve the operations across the city. This includes data collected from citizens, devices, buildings and assets that is then processed and analyzed to monitor and manage traffic and transportation systems, power plants, utilities, water supply networks, waste, crime detection, information systems, schools, libraries, hospitals, and other community services.',
    todoPriority: 'High'
  }
  
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    })
  }

  handleAddTodo(todo) {
  this.setState({todos: [...this.state.todos, todo]});
}

  render() {
    return (
      <div className="container">
          <nav className="navbar fixed-top navbar-dark bg-dark">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="topic" style={{color:"#DAF7A6"}}>TODO LIST</h2>
          <h1 className="navbar-brand">
            Project Count: <span className="badge badge-pill badge-primary">{this.state.todos.length}</span>
          </h1>
        </nav>
        <div className="row mt-5">
            <br/>
            <TodoInput onAddTodo={this.handleAddTodo}/>
            <hr/>
          </div>
          <div className="row mt-5">
            <div className="col">
              <ul className="list-group">
                { this.state.todos.map((todo, index) =>
                    <li className="list-group-item" key={index}>
                      <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="badge badge-secondary">{todo.todoPriority}</span></small></h4>
                      <p><i className="fa fa-user-circle-o" aria-hidden="true"></i> {todo.todoResponsible}</p>
                      <p className="text-justify">{todo.todoDescription}</p>
                      <button className="btn btn-danger btn-sm float-right" onClick={this.handleRemoveTodo.bind(this, index)}><span><i className="fa fa-trash-o" aria-hidden="true"></i></span>&nbsp;&nbsp; Delete</button>
                    </li>
                )}
              </ul>
            </div>
            {/* col */}
        </div>
        {/* row */}
      </div>
    );
  }

 }

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'low'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleInputChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       [name]: value
     })
   }

   handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'low'
    });
  }

  render() {
    return (
      <div className="col">
        <br/><br/><br/>
        <h4 style={{color:"#95250C ",fontFamily:"Arial"}}>Add New Project</h4><br/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input  name="todoTitle"
                    type="text"
                    className="form-control"
                    id="inputTodoTitle"
                    value={this.state.todoTitle}
                    onChange={this.handleInputChange}
                    aria-describedby="Todo Title"
                    placeholder="Enter Title"></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoDescription" className="control-label text-muted"><small style={{color:"darkcyan"}}>Description</small></label>
              <textarea   name="todoDescription"
                          type="text"
                          className="form-control"
                          id="inputTodoDescription"
                          value={this.state.todoDescription}
                          onChange={this.handleInputChange}
                          aria-describedby="Todo Description"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoPriority" className="control-label text-muted"><small style={{color:"darkcyan"}}>Priority</small></label>
              <select   name="todoPriority"
                        type="text"
                        className="form-control"
                        id="inputTodoPriority"
                        value={this.state.todoPriority}
                        onChange={this.handleInputChange}
                        aria-describedby="Todo Priority">
                <option>low</option>
                <option>medium</option>
                <option>high</option>
                
              </select><br/>
            </div>
            
            <div className="form-group">
              <label htmlFor="inputTodoResponsible" className="control-label text-muted"><small style={{color:"darkcyan"}}>Responsible</small></label>
              <select   name="todoResponsible"
                        type="text"
                        className="form-control"
                        id="inputTodoResponsible"
                        value={this.state.todoResponsible}
                        onChange={this.handleInputChange}
                        aria-describedby="Todo Responsible">
              </select><br/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary float-right">Add Project</button>
            </div>
        </form>
      </div>
    )
  }
}

export default App;
