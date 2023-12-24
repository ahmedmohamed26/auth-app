import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const UserLayout = () => {
  return (
    <>
      <Row className="m-0">
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default UserLayout;
