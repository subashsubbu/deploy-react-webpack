import React from 'react'
import ReactDOM from 'react-dom'
import {ExperimentWindow} from 'jspsych-react';
import { timelineFactory } from './timeline';
import callbackImageKeyboardResponsePlugin from './callbackImageKeyboardResponsePlugin';
import image from './static/000001.jpg'

class App extends React.Component{
	
    render(){
	const callback = (targetID) => console.log(targetID);
	const timeline = timelineFactory(callback);

        return(
            <div>
		<img src={image} width='100' height='100' />
		<h1>Subash</h1>
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