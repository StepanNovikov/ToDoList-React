import React, {Component} from "react";
import "./ToDoList.css";
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
            ],
            filter: "all"
        }
    }

    clearCompleted() {
        this.setState({
            tasks: this.state.tasks.filter(t => !t.isDone)
        })
    }

    putTaskToState(task){
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
            if (t.id === task.id){
                t.isDone = task.isDone;
                return;
            }
        });

        this.setState({
            tasks: newTasksList
        })
    }

    changeFilter(filterValue) {
        this.setState({
            filter:filterValue
        });
    }

    render() {
        var {tasks, filter} = this.state;

        var filteredTasks = [];
        if(filter === 'all') {
            filteredTasks = tasks;
        }
        if(filter === 'active') {
            filteredTasks = tasks.filter(t => !t.isDone);
        }
        if(filter === 'completed') {
            filteredTasks = tasks.filter(t => t.isDone);
        }


        return(
            <div className="todolist">

                <ToDoListTaskCreator onCreate={this.putTaskToState.bind(this)} />

                <TasksList  tasks={filteredTasks}
                            onDelete={this.deleteTask.bind(this)}
                            onUpdate = {this.updateTask.bind(this)}/>

                <ToDoListFooter tasks = {tasks}
                                filter={filter}
                                onFilterChanged={this.changeFilter.bind(this)}
                                clearcompleted = {this.clearCompleted.bind(this)}
                />
            </div>
        );
    }
}

export default ToDoList
