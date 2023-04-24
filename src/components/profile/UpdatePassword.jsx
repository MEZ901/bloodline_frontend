import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

const UpdatePassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
  const handleClickShowPasswordConfirmation = () =>
    setShowPasswordConfirmation((show) => !show);
  return (
    <div className="p-5 flex flex-col gap-5">
      <form className="space-y-4 md:space-y-6">
        <h3 className="text-2xl font-bold text-center">Update Password</h3>
        <div>
          <FormControl
            fullWidth
            variant="outlined"
            //   error={errors.password && touched.password}
          >
            <InputLabel htmlFor="password">Old Password *</InputLabel>
            <OutlinedInput
              // value={values.password}
              // onChange={handleChange}
              // onBlur={handleBlur}
              id="oldPassword"
              name="oldPassword"
              label="Old Password"
              type={showOldPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowOldPassword}
                    edge="end"
                  >
                    {showOldPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              {/* {errors.password && touched.password ? errors.password : null} */}
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl
            fullWidth
            variant="outlined"
            //   error={errors.password && touched.password}
          >
            <InputLabel htmlFor="password">New Password *</InputLabel>
            <OutlinedInput
              // value={values.password}
              // onChange={handleChange}
              // onBlur={handleBlur}
              id="NewPassword"
              name="NewPassword"
              label="New Password"
              type={showNewPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              {/* {errors.password && touched.password ? errors.password : null} */}
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl
            fullWidth
            variant="outlined"
            //   error={errors.passwordConfirmation && touched.passwordConfirmation}
          >
            <InputLabel htmlFor="passwordConfirmation">
              Confirm Password *
            </InputLabel>
            <OutlinedInput
              // value={values.passwordConfirmation}
              // onChange={handleChange}
              // onBlur={handleBlur}
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
              {/* {errors.passwordConfirmation && touched.passwordConfirmation
              ? errors.passwordConfirmation
              : null} */}
            </FormHelperText>
          </FormControl>
        </div>
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: "#FF1C23", float: "right" }}
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdatePassword;
