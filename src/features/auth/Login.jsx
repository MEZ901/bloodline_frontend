import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, InputAdornment, IconButton, FormControl, OutlinedInput, InputLabel, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Logo } from "../../assets";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-16 h-16" src={Logo} alt="logo" />
            </Link>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
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
                        </FormControl>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 cursor-pointer" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500 cursor-pointer">Remember me</label>
                                </div>
                            </div>
                            <Link to="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</Link>
                        </div>
                        <Button type="submit" variant="contained" style={{ backgroundColor: '#FF1C23' }} fullWidth>Sign in</Button>
                        <p className="text-sm font-light text-gray-500">
                            Don’t have an account yet? <Link to="/register" className="font-medium text-primary hover:underline">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Login;