import React from "react"
import { TextField, Button } from "@material-ui/core"
import { Formik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
})

function App() {
  return (
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <h1>Formik form</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        validateOnBlur={false}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              name="email"
              type="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <Button type="submit" variant="outlined" color="primary">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default App
