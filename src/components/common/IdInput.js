import React, { Component } from "react";

export class IdInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  componentWillMount() {
    this.setState({
      inputValue: this.props.id
    });
  }

  

  render() {
    const { updateTargetID, id } = this.props;

    return (
      <input onChange={updateTargetID} value={id} placeholder=":id">
        {this.state.inputValue}
      </input>
    );
  }
}

export default IdInput;
