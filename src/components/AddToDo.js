import React from 'react';

class AddToDo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            inputState: ''
        };
    }

    changeInputState(e){
        this.setState({inputState: e.target.value})
    }

    render(){
        return (
            <form>
                <input id="input" type="text" placeholder="Add a todo!" onChange={(e) => {this.changeInputState(e)} }></input>
                <button type="submit" onClick ={(e) => {this.props.clickMethod(e, this.state.inputState)}}>Add</button>
            </form>
        );
    }
}

export default AddToDo;