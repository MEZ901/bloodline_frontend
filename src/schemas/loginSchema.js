import * as yup from 'yup';

const emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const loginSchema = yup.object().shape({
    email: yup
        .string()
        .matches(emailRule, "Please enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
});

export default loginSchema;