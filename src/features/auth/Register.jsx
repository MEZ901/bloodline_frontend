import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { Logo } from "../../assets";
import { registerSchema } from "../../schemas";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  Button,
  Autocomplete,
  Checkbox,
  Typography,
  FormHelperText,
} from "@mui/material";
import {
  selectAllCities,
  getCitiesStatus,
  fetchCities
} from "../cities";
import {
  selectAllBloodTypes,
  getBloodTypesStatus,
  fetchBloodTypes
} from "../bloodTypes";
import { LoadingSpinner } from "../../components/common";

const Register = () => {
  const dispatch = useDispatch();

  const cities = useSelector(selectAllCities);
  const citiesStatus = useSelector(getCitiesStatus);

  const bloodTypes = useSelector(selectAllBloodTypes);
  const bloodTypesStatus = useSelector(getBloodTypesStatus);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirmation = () => setShowPasswordConfirmation((show) => !show);

  useEffect(() => {
    if (citiesStatus === "idle" || bloodTypesStatus === "idle") {
      Promise.all([dispatch(fetchCities()), dispatch(fetchBloodTypes())]);
    }
  }, [citiesStatus, bloodTypesStatus, dispatch]);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      bloodType: {
        id: "",
        name: "",
      },
      cin: "",
      city: {
        id: "",
        name: "",
      },
      email: "",
      password: "",
      passwordConfirmation: "",
      terms: false,
    },
    validationSchema: registerSchema,
    onSubmit: ({
      firstName,
      lastName,
      age,
      bloodType,
      cin,
      city,
      email,
      password,
      passwordConfirmation,
    }) => {
      const raw = {
        first_name: firstName,
        last_name: lastName,
        age: age,
        blood_type_id: bloodType.id,
        CIN: cin,
        city_id: city.id,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }
      console.log(raw);
      // the code goes here ...
    },
  });

  if (citiesStatus === "loading" || bloodTypesStatus === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img className="w-16 h-16" src={Logo} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow my-2 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create new account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                <TextField
                  error={errors.firstName && touched.firstName}
                  helperText={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : null
                  }
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  error={errors.lastName && touched.lastName}
                  helperText={
                    errors.lastName && touched.lastName ? errors.lastName : null
                  }
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                <TextField
                  error={errors.age && touched.age}
                  helperText={errors.age && touched.age ? errors.age : null}
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="age"
                  name="age"
                  label="age"
                  variant="outlined"
                  type="number"
                  fullWidth
                />
                <Autocomplete
                  disablePortal
                  id="bloodType"
                  name="bloodType"
                  options={bloodTypes}
                  getOptionLabel={(option) => option.name || ""}
                  fullWidth
                  value={values.bloodType}
                  onChange={(event, newValue) => {
                    setFieldValue("bloodType", newValue);
                    handleChange(event);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Blood Types"
                      error={errors.bloodType && touched.bloodType}
                      helperText={
                        errors.bloodType && touched.bloodType
                          ? errors.bloodType
                          : null
                      }
                      onBlur={handleBlur}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                <TextField
                  error={errors.cin && touched.cin}
                  helperText={errors.cin && touched.cin ? errors.cin : null}
                  value={values.cin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="cin"
                  name="cin"
                  label="CIN"
                  variant="outlined"
                  fullWidth
                />
                <Autocomplete
                  disablePortal
                  id="city"
                  name="city"
                  options={cities}
                  getOptionLabel={(option) => option.name || ""}
                  fullWidth
                  value={values.city}
                  onChange={(event, newValue) => {
                    setFieldValue("city", newValue);
                    handleChange(event);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="City"
                      error={errors.city && touched.city}
                      helperText={
                        errors.city && touched.city ? errors.city : null
                      }
                      onBlur={handleBlur}
                    />
                  )}
                />
              </div>
              <div>
                <TextField
                  error={errors.email && touched.email}
                  helperText={
                    errors.email && touched.email ? errors.email : null
                  }
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div>
                <FormControl
                  fullWidth
                  variant="outlined"
                  error={errors.password && touched.password}
                >
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>
                    {errors.password && touched.password
                      ? errors.password
                      : null}
                  </FormHelperText>
                </FormControl>
              </div>
              <div>
                <FormControl
                  fullWidth
                  variant="outlined"
                  error={
                    errors.passwordConfirmation && touched.passwordConfirmation
                  }
                >
                  <InputLabel htmlFor="passwordConfirmation">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    label="Confirm Password"
                    type={showPasswordConfirmation ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordConfirmation}
                          edge="end"
                        >
                          {showPasswordConfirmation ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>
                    {errors.passwordConfirmation && touched.passwordConfirmation
                      ? errors.passwordConfirmation
                      : null}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-start relative ${
                    errors.terms && touched.terms ? "pb-5" : null
                  }`}
                >
                  <div className="flex items-center h-5">
                    <Checkbox
                      value={values.terms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="terms"
                      name="terms"
                      aria-describedby="terms"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="text-gray-500 cursor-pointer"
                    >
                      I accept the{" "}
                      <Link
                        to="#"
                        className="font-medium text-primary hover:underline"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                  {errors.terms && touched.terms ? (
                    <Typography
                      variant="caption"
                      color="error"
                      className="absolute -bottom-3 sm:-bottom-1 left-5 "
                    >
                      {errors.terms}
                    </Typography>
                  ) : null}
                </div>
              </div>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#FF1C23" }}
                fullWidth
              >
                Sign up
              </Button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
