import React, {Component} from "react";


class ToDoListTaskCreator extends Component {
    constructor(props) {
        super(props);

        this.newIndex = 2;
    }

    createNewTask(event){
        if(event.key === 'Enter'){
            const newTask = {
                title: event.currentTarget.value,
                isDone: false,
                id: this.newIndex
            };

            this.props.onCreate(newTask)

            event.currentTarget.value = ''
            this.newIndex++;


        }
    }


    render() {
        return(
                <div className="header">
                    <input onKeyPress={this.createNewTask.bind(this)}/>
                </div>

        );
    }
}

export default ToDoListTaskCreator
