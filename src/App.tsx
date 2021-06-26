import React from 'react'

import { CounterList } from './components/counterList'

interface Props {

}

interface State {
  counters: Counter[]
}

interface Counter {
  id: number,
  value: number
}

class App extends React.Component<Props, State> {

  state: State = {
    counters: [
     { id: 1, value: 4 },
     { id: 2, value: 0 },
     { id: 3, value: 0 },
     { id: 4, value: 0 }
    ]
  };
  
  render() {
    return (
      <CounterList 
        counters = { this.state.counters }
        onIncrement = { this.handleIncrement }
        onReset = { this.handleReset }
        onDelete = { this.handleDelete }
      />
    );
  }

  handleIncrement = (counterId: number) => {
    const counters = [ ...this.state.counters ];
    for(let counter of counters) {
      if(counter.id === counterId) counter.value ++;
    }
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = [ ...this.state.counters ];
    for(let counter of counters) {
      counter.value = 0;
    }
    this.setState({ counters });
  }

  handleDelete = (counterId: number) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState( { counters } )
  }

}

export default App