import React from "react";
import { connect } from "react-redux";

function Users({ users }) {
  console.log(users);
  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Users);
