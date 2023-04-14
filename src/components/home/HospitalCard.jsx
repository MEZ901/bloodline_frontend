import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DefaultHospital } from "../../assets";
import {
  Chip,
  Tooltip,
  Typography,
  IconButton,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Box,
} from "@mui/material";

const HospitalCard = ({ hospital }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: "60vw", maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="194"
        image={hospital?.image || DefaultHospital}
        alt="Hospital image"
        className="cursor-pointer"
        onClick={() => navigate(`/hospital/${hospital.id}`)}
      />
      <CardContent>
        <Box className="flex justify-between items-center">
          <Typography fontWeight="semibold" color="text.primary">
            {hospital.name}
          </Typography>
          <Chip icon={<LocationOnIcon />} label={hospital.city} />
        </Box>
        <Typography variant="body2" color="text.secondary" className="pt-5 whitespace-pre-wrap">
          Address: {hospital.address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Schedule appointment">
          <IconButton aria-label="Schedule appointment">
            <CalendarMonthIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default HospitalCard;
