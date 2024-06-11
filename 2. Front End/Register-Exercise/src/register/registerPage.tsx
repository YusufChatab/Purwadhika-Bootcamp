import { Formik, Form, Field, FormikProps, FormikProvider } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .min(6, "Name must be at least 6 Characters")
    .required(),
  email: Yup.string()
    .email("Invalid Email Address Format")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters at minimum")
    .required("Password is Required"),
});

interface IRegister {
  username: string;
  email: string;
  password: string;
}

function Register() {
  const initialValues: IRegister = { username: "", email: "", password: "" };

  const register = async (values: IRegister) => {
    await axios.post("http://localhost:3000/users", {
      username: values.username,
      email: values.email,
      password: values.email,
    });
  };

  return (
    <>
      <div>
        <h1>Register Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props: FormikProps<IRegister>) => {
            const { values, errors, touched, handleChange } = props;
            return (
              <Form>
                <div>
                  <label htmlFor="email">Username </label>
                  <Field
                    type="username"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                  />
                </div>
                {touched.username && touched.username ? (
                  <div>{errors.username}</div>
                ) : null}
                <div>
                  <label htmlFor="email">Email: </label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                {touched.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <div>
                  <label htmlFor="password">Password: </label>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                1
                {touched.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <button onClick={() => register(props.values)} type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default Register;
