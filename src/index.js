import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Artist from './components/Artist';



const App = () => {
    return(
        
        <BrowserRouter>
        <div>
        <Route  exact  path ="/" component ={Home} ></Route>
        <Route path ="/artist/:artistId" component ={Artist}></Route>
        </div>
        </BrowserRouter>
        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));




/*
class App extends Component {
    render(){
        return(
            <h1>second app</h1>
        );
    }
}

ReactDOM.render(<BrowserRouter>
<div>
<Route path="/" Component ={App}></Route>
<Route path="/profile" Component ={Profile}></Route>
<Route path="/posts" Component ={Profile}></Route>
</div>
</BrowserRouter>, document.getElementById('root'));

*/