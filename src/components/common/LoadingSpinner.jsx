import { Backdrop, CircularProgress } from "@mui/material";

const LoadingSpinner = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress sx={{ color: "#FF1C23" }} />
    </Backdrop>
  );
};

export default LoadingSpinner;
