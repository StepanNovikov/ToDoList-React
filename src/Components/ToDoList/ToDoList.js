import React, {Component} from "react";
import "./ToDoList.css";

class ToDoList extends Component {
    constructor(props) {
        super();

        this.state = {
            tasks: [
                {
                    title: "learn js",
                    isDone: false
                },
                {
                    title: "learn react",
                    isDone: false
                }
            ]
        }
    }

    createNewTask(event){
        if(event.key === 'Enter'){
            this.setState({
                tasks: [...this.state.tasks,{title: event.currentTarget.value, isDone: false}]
            })
            event.currentTarget.value = ''
        }
    }

    deleteTask(task, event){
        this.setState({
            tasks: this.state.tasks.filter((t) => {
                return t !== task;
            })
        })
    }

    toggleTaskStatus(task, event){
        task.isDone = !task.isDone;
        this.forceUpdate() //принудительно апдейтит
    }

    render() {
        return(
            <div className="todolist">
                <div className="header">
                    <input onKeyPress={this.createNewTask.bind(this)}/>
                </div>
                <div className="tasks">
                    {
                        this.state.tasks.map((task) => {
                            return <div className={task.isDone? 'task done':'task'}>
                                <input type="checkbox" onClick={this.toggleTaskStatus.bind(this, task)}/>
                                {task.title}
                            <span className="delete" onClick={this.deleteTask.bind(this, task)}>x</span>
                            </div>
                        })
                    }

                </div>
            </div>
        );
    }
}

export default ToDoList
