import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters at minimum")
    .required("Password is Required"),
});

interface IRegister {
  email: string;
  password: string;
}

function Register() {
  const initialValues: IRegister = { email: "", password: "" };

  const register = async (values: IRegister) => {
    await axios.post("http://localhost:3000/users", {
      email: values.email,
      password: values.password,
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
