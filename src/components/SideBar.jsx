import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("auth/login");
  };
  return (
    <div>
      <ul className="list-unstyled sidebar">
        <li>
          {" "}
          <NavLink className="m-3" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="m-3" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          {" "}
          <Button className="m-3" onClick={logout}>
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
