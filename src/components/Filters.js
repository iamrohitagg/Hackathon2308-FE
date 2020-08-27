import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class Filters extends React.Component {
  handlekeyPress(event) {
    if (event.key === "Enter") {
      alert("Hi");
    }
  }
  render() {
    return (
      <div>
        <InputGroup className="mb-3" onKeyPress={this.handlekeyPress}>
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="is:issue is:open " />
        </InputGroup>
      </div>
    );
  }
}

export default Filters;
