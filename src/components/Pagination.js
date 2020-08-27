import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ["r", "o", "h", "i", "t", "a", "g", "g", "a", "r", "w", "a", "l"],
      currentPage: 1,
      issueperPage: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(this);
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { data, currentPage, issueperPage } = this.state;

    const indexofLastIssue = currentPage * issueperPage;
    const indexofFirstIssue = indexofLastIssue - issueperPage;
    const currentdata = data.slice(indexofFirstIssue, indexofLastIssue);

    const renderdata = currentdata.map((todo, index) => {
      return <ListGroup.Item key={index}>{todo}</ListGroup.Item>;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / issueperPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <ListGroup.Item key={number} id={number} onClick={this.handleClick}>
          {number}
        </ListGroup.Item>
      );
    });

    return (
      <div>
        <ul className="mt-4">{renderdata}</ul>
        <ul>{renderPageNumbers}</ul>
      </div>
    );
  }
}

export default Pagination;
