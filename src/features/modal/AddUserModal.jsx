import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { selectModal } from "./modalSelectors";
import { closeModal } from "./modalSlice";
import { addUserSchema } from "../../schemas";
import { LoadingSpinner } from "../../components/common";
import { Profile } from "../../assets";
import {
  useGetBloodTypesQuery,
  useGetCitiesQuery,
  useRegisterMutation,
} from "../../app/api";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  Button,
  Autocomplete,
  FormHelperText,
} from "@mui/material";

const AddUserModal = ({ refetchUsers }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirmation = () =>
    setShowPasswordConfirmation((show) => !show);
  const { enqueueSnackbar } = useSnackbar();
  const profileImg = useRef(null);
  const [src, setSrc] = useState(null);
  const addForm = useRef(null);
  const { isOpen, type } = useSelector(selectModal);
  const dispatch = useDispatch();

  const {
    data: cities,
    isLoading: isLoadingCities,
    isError: isErrorCities,
  } = useGetCitiesQuery();

  const {
    data: bloodTypes,
    isLoading: isLoadingBloodTypes,
    isError: isErrorBloodTypes,
  } = useGetBloodTypesQuery();
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleProfileClick = () => {
    profileImg.current.click();
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        enqueueSnackbar("Image size should be less than 10MB", {
          variant: "error",
        });
        return;
      }
      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/jpg"
      ) {
        enqueueSnackbar("Image format should be JPEG or PNG or JPG", {
          variant: "error",
        });
        return;
      }
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setSrc(reader.result);
      setFieldValue("profile", reader.result);
    };
    reader.readAsDataURL(file);
  };

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
      profile: null,
      age: "",
      bloodType: null,
      cin: "",
      city: null,
      phone: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    validationSchema: addUserSchema,
    onSubmit: async ({
      firstName,
      lastName,
      age,
      bloodType,
      cin,
      city,
      phone,
      email,
      password,
      passwordConfirmation,
    }) => {
      const raw = {
        first_name: firstName,
        last_name: lastName,
        profile: values.profile,
        age: age,
        blood_type_id: bloodType?.id || null,
        cin: cin,
        city_id: city.id,
        phone: `0${phone}`,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      };

      try {
        await register(raw).unwrap();
        dispatch(closeModal());
        refetchUsers();
        enqueueSnackbar("User has been added successfully!", {
          variant: "success",
        });
      } catch (error) {
        if (error?.data?.errors) {
          const errors = error.data.errors;
          for (const key in errors) {
            if (Object.hasOwnProperty.call(errors, key)) {
              const element = errors[key];
              enqueueSnackbar(element[0], { variant: "error" });
            }
          }
        } else {
          enqueueSnackbar(error?.data?.message || "Something went wrong", {
            variant: "error",
          });
        }
      }
    },
  });

  if (isLoadingCities || isLoadingBloodTypes) {
    return (
      <LoadingSpinner open={true} />
    );
  }

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleOk = () => {
    addForm.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  };
  return (
    <Modal
      title="Add user"
      style={{
        top: 20,
        bottom: 20,
      }}
      open={isOpen}
      onCancel={handleCancel}
      footer={[
        <Button variant="text" color="inherit" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleOk}
        >
          Add User
        </Button>,
      ]}
    >
      <LoadingSpinner open={isLoading} />
      <form
        className="space-y-4 md:space-y-6 py-2"
        onSubmit={handleSubmit}
        ref={addForm}
      >
        <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
          <div className="flex justify-center m-auto">
            <div
              className="cursor-pointer flex flex-col items-center relative w-[135px] h-[135px] overflow-hidden rounded-full"
              onClick={handleProfileClick}
              style={{
                backgroundImage: `url('${src || Profile}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-0 hover:opacity-60 transition-all z-10 rounded-full flex justify-center items-center gap-3">
                <EditIcon className="text-white" />
              </div>
              <input
                type="file"
                ref={profileImg}
                onChange={handleProfileChange}
                name="profile"
                hidden
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <TextField
              error={errors.firstName && touched.firstName}
              helperText={
                errors.firstName && touched.firstName ? errors.firstName : null
              }
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="firstName"
              name="firstName"
              label="First Name *"
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
              label="Last Name *"
              variant="outlined"
            />
          </div>
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
            label="age *"
            variant="outlined"
            type="number"
            fullWidth
          />
          <Autocomplete
            disablePortal
            id="bloodType"
            name="bloodType"
            options={bloodTypes.data}
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
                label="Blood Type"
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
            label="CIN *"
            variant="outlined"
            fullWidth
          />
          <Autocomplete
            disablePortal
            id="city"
            name="city"
            options={cities.data}
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
                label="City *"
                error={errors.city && touched.city}
                helperText={errors.city && touched.city ? errors.city : null}
                onBlur={handleBlur}
              />
            )}
          />
        </div>
        <div>
          <TextField
            error={errors.phone && touched.phone}
            helperText={errors.phone && touched.phone ? errors.phone : null}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            id="phone"
            name="phone"
            label="Phone Number *"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+212</InputAdornment>
              ),
            }}
            fullWidth
          />
        </div>
        <div>
          <TextField
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : null}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            name="email"
            label="Email *"
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
            <InputLabel htmlFor="password">Password *</InputLabel>
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
              {errors.password && touched.password ? errors.password : null}
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl
            fullWidth
            variant="outlined"
            error={errors.passwordConfirmation && touched.passwordConfirmation}
          >
            <InputLabel htmlFor="passwordConfirmation">
              Confirm Password *
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
      </form>
    </Modal>
  );
};

export default AddUserModal;
