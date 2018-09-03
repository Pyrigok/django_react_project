import React, { Component } from 'react';
/*import logo from './logo.svg';
import './App.css';

const list =[
  {
    'id': 1,
    'title': '1st item',
    'description': 'some description'
  },
  {
    'id':3,
    'title': '2st item',
    'description': 'another some description'
  },
  {
    'id':3,
    'title': '3st item',
    'description': 'third description'
  },
];

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {list};
  }

  render() {
    return (
        <div>
          {this.state.list.map(item => (
              <div>
                <h1>{item.title}</h1>
                <span>{item.description}</span>
              </div>
            )
            )} 
        </div>
          );
    }
  }


export default App;*/
class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render () {
    return (
        <div>
          {this.state.todos.map(item => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      );
  }
}

export default App;