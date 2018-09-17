import React from 'react';
import ReactDOM from 'react-dom'
import QuestionTitle from './QuestionTitle';
import QuestionForm from './QuestionForm';

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
        <QuestionForm />
    </div>,
    document.getElementById('root')
)