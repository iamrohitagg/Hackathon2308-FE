import React from "react";
import IssueList from "./IssuesList";
import Filters from "./Filters";
import AddIssueBtn from "./AddIssueBtn";
import Pagination from "./Pagination";

//Sample structure to be consumed for issues array
//JSON from backend should be structured in following structure
const issues = [
  {
    id: 1,
    name: "npm-cache-issue-open",
    description: "The server seems to be having some cache issues",
    url: "https://api.github.com/repos/test-repo/issues/1",
    number: 1,
    labels: ["issue", "bug_report"],
    state: "open",
    locked: "false",
  },
  {
    id: 2,
    name: "npm-cache-issues-closed 2",
    description: "The server seems to be having some cache issues",
    url: "https://api.github.com/repos/test-repo/issues/1",
    number: 1,
    labels: ["issue4", "bug_report5"],
    state: "closed",
    locked: "false",
  },
];

const Issues = () => {
  return (
    <>
      <Filters filters={["all", "open", "closed"]} selectedFilter="all" />
      <AddIssueBtn />
      {/*Props Passed to issuesList is the array of issues and filter selected*/}
      <IssueList issues={issues} filter="all" />
      <Pagination />
    </>
  );
};

export default Issues;
