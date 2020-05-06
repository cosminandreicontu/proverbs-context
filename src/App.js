import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProverbsPage from './ProverbsPage';

import proverbs from './pretend-api/results-en.json'

class App extends Component {
    state = {
      currentLanguage: "en",
      proverbs: []
    }

    componentDidMount() {
      this.getResults();
    }
    componentDidUpdate() {
      this.getResults();
    }

    getResults = () => {
        const { currentLanguage } = this.state;
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(data => this.setState({proverbs: proverbs[currentLanguage] }));
    }

    render() {
        return (
          <>
            <select
                name="language"
                onChange={(e) => this.setState({currentLanguage: e.target.value})}
            >
                <option value="en">en</option>
                <option value="pt">pt</option>
            </select>
            <Switch>
                <Route path="/" exact component={ProverbsPage} />
            </Switch>
           </>
        );
    }
}

export default App;
