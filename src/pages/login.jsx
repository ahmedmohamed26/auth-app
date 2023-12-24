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
import { Link, useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  password: Yup.string().min(6, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      loginUser(values);
    },
    validationSchema: loginSchema,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("HOST:", import.meta.env);
  }, []);

  const loginUser = async (userData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        userData
      );
      localStorage.setItem("userToken", data.accessToken);
      toast.success("login success", {
        duration: 6000,
      });
      navigate("/home", { replace: true });
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <Container>
      <Row>
        <Form className="p-5" onSubmit={formik.handleSubmit}>
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
                {formik.errors.email && formik.touched.email ? (
                  <span style={{ color: "red" }}>{formik.errors.email}</span>
                ) : null}
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
            <Link to={"/auth/register"}>Create new account</Link>
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

export default login;
