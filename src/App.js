// App component, to hold list of ideas
// Form component, create new ideas, add ideas to App's list
// Card component to display ideas
// Ideas component to hold the cards

import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = newIdea => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  deleteIdea = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas: filteredIdeas });
  }

  render = () => (
    <main className='App'>
      <h1>IdeaBox</h1>
      { !this.state.ideas.length && <h2>No ideas yet -- add some!</h2> }
      <Form addIdea={this.addIdea} />
      <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
    </main>
  )
}

export default App;
