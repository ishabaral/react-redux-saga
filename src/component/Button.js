import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions";

function Button({ getUsers }) {
  return (
    <div>
      <button onClick={getUsers}>Click to see users</button>
    </div>
  );
}

const mapDispatchToProps = {
  getUsers: getUsers,
};

export default connect(null, mapDispatchToProps)(Button);
