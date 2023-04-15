import * as yup from "yup";

const emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRule = /^\d{9}$/;

const registerSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name is required"),
    lastName: yup
        .string()
        .required("Last name is required"),
    age: yup
        .number()
        .required("Age is required"),
    bloodType: yup
        .object()
        .nullable(),
    cin: yup
        .string()
        .required("CIN is required"),
    city: yup
        .object()
        .required("City is required"),
    phone: yup
        .string()
        .matches(phoneRule, "Please enter a valid phone number")
        .required("Phone is required"),
    email: yup
        .string()
        .matches(emailRule, "Please enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(6)
        .required("Password is required"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Password confirmation is required"),
    terms: yup
        .boolean()
        .oneOf([true], "You must accept the terms and conditions")
});

export default registerSchema;