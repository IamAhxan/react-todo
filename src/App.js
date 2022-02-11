
import './App.css';
import Navbar from './components/Navbar';
import Counters from './components/Counters';

import React, {Component} from 'react';
import react from 'react';
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },

      { id: 2, value: 6 },

      { id: 3, value: 10 },

      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("hello", counterId);
    
    const counters = this.state.counters.filter(c => c.id !== counterId )
    this.setState({counters})
  };

  handleIncrement = (counter) =>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value++
    this.setState({ counters })

  }

  handleDecrement = (counter) =>{

    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value--
    this.setState({counters})

  }

  handleReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index].value = 0;
    this.setState({counters})
  }

  handleResetAll= () =>{
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({counters})
  }

  render() { 
    return (
    <div>
      <react.Fragment>
      <Navbar 
      totalCounters = {this.state.counters.filter(c => c.value>0).length}
      />
      <main className='container'>
      <Counters 
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onReset={this.handleReset}
      onResetAll={this.handleResetAll}
      counters={this.state.counters}
      />
      </main>
      </react.Fragment>
    </div>
    );
  }
}
 
export default App;