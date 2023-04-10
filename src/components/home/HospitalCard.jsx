import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Chip, Tooltip } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { WrapText } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const HospitalCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '60vw', maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.maroc24.com/wp-content/uploads/2022/05/%D8%AF%D9%88%D8%B1-%D8%A7%D9%84%D9%87%D9%84%D8%A7%D9%84-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A.jpg"
        alt="Paella dish"
        className='cursor-pointer'
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
            Clinique Hilal Ahmar
        </Typography>
        <Chip label="Tétouan" className='mt-2' />
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Schedule appointment">
            <IconButton aria-label="Schedule appointment">
            <CalendarMonthIcon />
            </IconButton>
        </Tooltip>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Location:</Typography>
          <Typography paragraph>
            AV abdelkrim el khattabi, Tétouan, Morocco
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default HospitalCard;
