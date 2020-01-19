import React, {Component} from "react";
import "./ToDoList.css";
import Task from "./Task"

class ToDoList extends Component {
    constructor(props) {
        super();

        this.newIndex = 2;

        this.state = {
            tasks: [
                {
                    id:0,
                    title: "learn js",
                    isDone: false
                },
                {
                    id:1,
                    title: "learn react",
                    isDone: false
                }
            ]
        }
    }

    createNewTask(event){
        if(event.key === 'Enter'){
            this.setState({
                tasks: [...this.state.tasks, {id: this.newIndex, title: event.currentTarget.value, isDone: false}]
            });
            event.currentTarget.value = ''
            this.newIndex ++;
        }
    }

    deleteTask(taskId){
        this.setState({
            tasks: this.state.tasks.filter((t) => {
                return t.id !== taskId;
            })
        })
    }

    render() {
        return(
            <div className="todolist">
                <div className="header">
                    <input onKeyPress={this.createNewTask.bind(this)}/>
                </div>
                <div className="tasks">
                    {
                        this.state.tasks.map((task, index) => {
                            return <Task task = {task} deleteCallback={this.deleteTask.bind(this)} key={task.id}/>
                        })
                    }

                </div>
            </div>
        );
    }
}

export default ToDoList
