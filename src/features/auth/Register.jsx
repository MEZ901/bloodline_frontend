import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, InputAdornment, IconButton, FormControl, OutlinedInput, InputLabel, Button, Autocomplete, Checkbox, FormControlLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Logo } from "../../assets";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirmation = () => setShowPasswordConfirmation((show) => !show);
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'I don\'t know'];
  return (
    <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
            <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-16 h-16" src={Logo} alt="logo" />
            </Link>
            <div className="w-full bg-white rounded-lg shadow my-2 md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Create new account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div className="flex gap-2">
                            <TextField
                                id="first_name"
                                name="first_name"
                                label="First Name"
                                variant="outlined"
                            />
                            <TextField
                                id="last_name"
                                name="last_name"
                                label="Last Name"
                                variant="outlined"
                            />
                        </div>
                        <div className="flex gap-2">
                            <TextField
                                id="cin"
                                name="cin"
                                label="CIN"
                                variant="outlined"
                                fullWidth
                            />
                            <Autocomplete
                                disablePortal
                                id="bloodType"
                                name="bloodType"    
                                options={bloodTypes}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label="Blood Types" />}
                            />
                        </div>
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
                                <InputLabel htmlFor="password">Password</InputLabel>
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
                        <div>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="passwordConfirmation">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="passwordConfirmation"
                                    name="passwordConfirmation"
                                    label="Confirm Password"
                                    type={showPasswordConfirmation ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPasswordConfirmation}
                                                edge="end"
                                            >
                                            {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
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
                                    <label htmlFor="remember" className="text-gray-500 cursor-pointer">I accept the <Link to="#" className="font-medium text-primary hover:underline">Terms and Conditions</Link></label>
                                </div>
                            </div>
                        </div>
                        <Button type="submit" variant="contained" style={{ backgroundColor: '#FF1C23' }} fullWidth>Sign in</Button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account? <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Register;