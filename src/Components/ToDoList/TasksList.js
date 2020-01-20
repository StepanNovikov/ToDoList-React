import React, {Component} from "react";
import Task from "./Task";


class ToDoList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
                <div className="tasks">
                    {
                        this.props.tasks.map((task, index) => {
                            return <Task task = {task}
                                         deleteCallback={this.props.onDelete}
                                         updateCallback = {this.props.onUpdate}
                                         key={task.id}/>
                        })
                    }

                </div>
        );
    }
}

export default ToDoList
