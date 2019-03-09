import React, { Component } from "react";

export class ParamInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };

    // this.inputfield=this.inputfield.bind(this);
  }

  componentWillMount() {
    this.setState({
      inputValue: this.props.param
    });
  }

//   inputfield(updateparam, param){
// return <input onChange={updateparam} value={param} placeholder=":param">
// {this.state.inputValue}
// </input>
//   }



  render() {
    const { updateParam, param ,exampleParam ,paramNote ,placeholder} = this.props;

    return (
      <> 
        <p><b>Example Param</b></p>

        <code>{exampleParam}</code>
        <p>{paramNote}</p>

        {/* <>{this.inputfield(updateParam, Param)}</> */}
       <input className="paramInput" onChange={updateParam} value={param} placeholder={placeholder} />
        
      </>
     
    );
  }
}

export default ParamInput;
