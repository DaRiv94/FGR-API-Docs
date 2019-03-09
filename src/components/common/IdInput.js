import React, { Component } from "react";

export class IdInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };

    // this.inputfield=this.inputfield.bind(this);
  }

  componentWillMount() {
    this.setState({
      inputValue: this.props.id
    });
  }

//   inputfield(updateId, id){
// return <input onChange={updateId} value={id} placeholder=":id">
// {this.state.inputValue}
// </input>
//   }



  render() {
    const { updateId, id ,exampleId ,idNote } = this.props;

    return (
      <> 
        <p><b>Example Id</b></p>

        <code>{exampleId}</code>
        <p>{idNote}</p>

        {/* <>{this.inputfield(updateId, id)}</> */}
       <input className="idInput" onChange={updateId} value={id} placeholder=":id" />
        
      </>
     
    );
  }
}

export default IdInput;
