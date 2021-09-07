import { connect } from "react-redux";
import "./App.css";
import Button from "./component/Button";
import Loading from "./component/Loading";
import Users from "./component/Users";

function App(props) {
  return (
    <div className="App">
      <h3>Users name</h3>
      <Button />
      <Loading />
      <Users />
    </div>
  );
}
export default App;
