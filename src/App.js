import React, {Component} from 'react';
import AppHeader from "./app-header";
import TodoList from "./todo-list";

class App extends Component{


    createTodo = (label)=>{
        return {
            label,
            isImportant:false,
            isDone:false
        }
    };

    state={
      todos:[
          this.createTodo('Drink coffee'),
          this.createTodo('Buy book'),
          this.createTodo('Learn react')
      ],
      filter:'all'
    };



    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <AppHeader></AppHeader>
                    </div>
                    <div className="col-sm-12">
                        <TodoList to></TodoList>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
