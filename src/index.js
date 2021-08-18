import React from 'react'
import ReactDOM from 'react-dom'
import {ExperimentWindow} from 'jspsych-react';
import { timelineFactory } from './timeline';
import callbackImageKeyboardResponsePlugin from './callbackImageKeyboardResponsePlugin';

class App extends React.Component{
	
    render(){
	const callback = (targetID) => console.log(targetID);
	const timeline = timelineFactory(callback);

        return(
            <div>
                <ExperimentWindow
        		settings={{ timeline }}
        		plugins={{ callbackImageKeyboardResponsePlugin }}
      		/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App/>, document.getElementById("root"));