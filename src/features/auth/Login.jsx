import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { Logo } from "../../assets";
import { loginSchema } from "../../schemas";
import { useLoginMutation } from "../../app/api";
import { useDispatch } from "react-redux";
import { setCredentials, setCredentialsAndStoreCookie } from "./authSlice";
import { CircularProgress } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSnackbar } from "notistack";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  Button,
  FormHelperText,
} from "@mui/material";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const { enqueueSnackbar } = useSnackbar();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur
  } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        try {
          const { data } = await login(values).unwrap();
          // dispatch(setCredentialsAndStoreCookie(data));
          dispatch(setCredentials(data));
          navigate("/home");
        } catch (error) {
          enqueueSnackbar(error?.data?.message || "Something went wrong", { variant: 'error' })
        }
      },
    });
  return (
    <section className="bg-gray-50 min-h-screen">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress sx={{ color: '#FF1C23' }} />
      </Backdrop>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img className="w-16 h-16" src={Logo} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 cursor-pointer"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#FF1C23" }}
                fullWidth
              >
                Sign in
              </Button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
