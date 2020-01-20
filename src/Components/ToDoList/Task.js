import React, {Component} from "react";
import "./Task.css";

class Task extends Component {
    constructor(props) {
        super(props);

        this.parentDeleteCallback = props.deleteCallback;
        this.parentUpdateCallback = props.updateCallback;
    }

    deleteTask(event){
        this.parentDeleteCallback(this.props.task.id);
    }

    toggleTaskStatus( event){
        var task = {
            ...this.props.task
        };

        task.isDone = !task.isDone

        this.parentUpdateCallback(task);
    }

    render() {
        return(
        <div className={this.props.task.isDone? 'task done':'task'}>
            <input type="checkbox"
                   checked={this.props.isDone}
                   onClick={this.toggleTaskStatus.bind(this)}/>
            {this.props.task.title}
            <span className="delete"
                  onClick={this.deleteTask.bind(this)}>x</span>
        </div>
        );
    }
}

export default Task
