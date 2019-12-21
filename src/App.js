import React, {Component} from 'react';
import AppHeader from "./app-header";
import TodoList from "./todo-list";

class App extends Component{
    

    state={
      todos:[

      ]
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <AppHeader></AppHeader>
                    </div>
                    <div className="col-sm-12">
                        <TodoList></TodoList>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
