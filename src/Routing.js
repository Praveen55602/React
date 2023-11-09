import React from "react";
import { useLocation, useParams } from "react-router-dom";

function QueryParams() {
  const location = useLocation();
  const queryParameter = new URLSearchParams(location.search);

  const username = queryParameter.get("username");
  const rollno = queryParameter.get("rollno");
  return (
    <div>
      <h1>This routing is done by the query parameters</h1>
      <h1>username of the person is {username}</h1>
      <h1>roll no of the person is {rollno}</h1>
    </div>
  );
}

export function RouteParams() {
  const { username, rollno } = useParams();
  return (
    <div>
      <h1>This routing is done by RouteParams/path variables</h1>
      <h1>username of the person is {username}</h1>
      <h1>roll no of the person is {rollno}</h1>
    </div>
  );
}

export default QueryParams;
