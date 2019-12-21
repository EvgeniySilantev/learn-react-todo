import React,{Component} from "react";

import './app-header.css'

class AppHeader extends Component{

    render() {
        return (
            <div className="app-header d-flex">
                <h1>Todo List</h1>
                <h2>Total tasks 4</h2>
            </div>
        );
    }

}

export default AppHeader