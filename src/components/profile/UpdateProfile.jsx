import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { registerSchema } from "../../schemas";
import { TextField, InputAdornment, Button, Autocomplete } from "@mui/material";
import { useEffect } from "react";

const UpdateProfile = ({ firstName, lastName, age, bloodType, city, cin, phone, email, cities, bloodTypes }) => {
  const { enqueueSnackbar } = useSnackbar();

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
      firstName: firstName,
      lastName: lastName,
      age: age,
      bloodType: null,
      cin: cin,
      city: null,
      phone: phone.substring(1),
      email: email,
    },
    validationSchema: registerSchema,
    onSubmit: async ({
      firstName,
      lastName,
      age,
      bloodType,
      cin,
      city,
      phone,
      email,
    }) => {
      console.log("object");

      const raw = {
        first_name: firstName,
        last_name: lastName,
        age: age,
        blood_type_id: bloodType?.id || null,
        cin: cin,
        city_id: city.id,
        phone: `0${phone}`,
        email: email,
      };
      try {
        console.log("hhh");
        console.log(raw);
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

  useEffect(() => {
    setFieldValue(
      "bloodType",
      bloodTypes?.data?.find((option) => option.name === bloodType) || null
    );
    setFieldValue(
      "city",
      cities?.data?.find((option) => option.name === city) || null
    );
  }, [bloodTypes, cities]);
    
  return (
    <div className="p-5 flex flex-col gap-5">
      <h3 className="text-2xl font-bold text-center">Update profile</h3>
      <form className="space-y-4 md:space-y-6" onSubmit={(handleSubmit)}>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
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
            fullWidth
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
            fullWidth
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

export default UpdateProfile;
