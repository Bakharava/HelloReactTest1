import { useFormik } from 'formik';
import { validate } from '../../lib/formHelper';

const FormikLibExample = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          type="text"
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          type="text"
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" onChange={formik.handleChange} type="email" value={formik.values.email} />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikLibExample;
