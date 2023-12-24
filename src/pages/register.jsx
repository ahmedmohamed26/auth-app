import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const loginSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      reigsterUser(values);
    },
    validationSchema: loginSchema,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {}, []);

  const reigsterUser = async (userData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/register`,
        userData
      );
      localStorage.setItem("userToken", data.accessToken);
      toast.success("register success");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <Container>
      <Row>
        <Form className="p-5" onSubmit={formik.handleSubmit}>
          <Col md={12}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <div>
                {formik.errors.name && formik.touched.name ? (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                ) : null}
              </div>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <div>
                {formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null}
              </div>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <div>
                {formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : null}
              </div>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Link to={"/auth/login"}>Login</Link>
          </Col>
          <Col md={12} className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="w-50">
              Submit
            </Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default register;
