import React from 'react';
import ReactDOM from 'react-dom'
import QuestionTitle from './QuestionTitle';

// export default class App extends React.Component{
//     constructor(props){
//         super(props);

//     }
    
//     render(){
//         return(
//             <div className="App">
//                 <QuestionTitle />
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <div>
        Hello react
        <QuestionTitle />
    </div>,
    document.getElementById('root')
)