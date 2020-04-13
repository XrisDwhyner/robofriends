import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
//import ErrorBoundary from './ErrorBoundary'
import scroll from './scroll';
//import ErrorBoundary from './Errorboundary';


class App extends Component {
    constructor(){
        super()
        this.state={robots:[],
                  searchfield:''
                }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>this.setState({robots:users}));
    }

    onSearchChange=(events)=>{
        this.setState({searchfield: events.target.value })
    }


    render(){
        const filteredRobots=this.state.robots.filter(robots=>{
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
            return <h1>Loading...</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <scroll>
                            <CardList robots ={filteredRobots}/>
                    </scroll>
                </div>
            );
        }
    }
    
}

export default App;