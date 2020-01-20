import React, {Component} from "react";
import "./ToDoList.css";
import Task from "./Task"
import ToDoListFooter from "./ToDoListFooter";
import ToDoListTaskCreator from "./ToDoListTaskCreator";
import TasksList from "./TasksList"

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

    createNewTask(task){
        this.setState({
            tasks: [...this.state.tasks, task]

        });
    }

    deleteTask(taskId){
        this.setState({
            tasks: this.state.tasks.filter((t) => {
                return t.id !== taskId;
            })
        })
    }

    updateTask(task){
        const newTasksList = [...this.state.tasks];

        newTasksList.forEach((t) => {
            if(t.id === task.id){
                t.isDone = task.isDone;
                return;
            }
        });

        this.setState({
            tasks: newTasksList
        })
    }

    render() {
        return(
            <div className="todolist">

                <ToDoListTaskCreator onCreate={this.createNewTask.bind(this)} />

                <TasksList  tasks={this.state.tasks}
                            onDelete={this.deleteTask.bind(this)}
                            onUpdate = {this.updateTask.bind(this)}/>

                <ToDoListFooter/>
            </div>
        );
    }
}

export default ToDoList
