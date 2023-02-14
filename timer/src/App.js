import React from 'react';
import './App.css';
import 'h8k-components';
import Timer from './components/timer';
const title = "Timer Component";

const App = ({initial}) => {
    return (
        <div className="App">
			<h8k-navbar header={title}>
                {/* <h1 className="app-title" data-testid="app-title">{title}</h1> */}
            </h8k-navbar>
            <h1 className="app-title" data-testid="app-title">{title}</h1>
			<Timer initial={initial} />
        </div>
    );
}

export default App;
