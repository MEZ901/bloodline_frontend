import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

const HospitalCardSkeleton = ({count = 4}) => {
  let cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <Card sx={{ width: '60vw', minWidth: 200, maxWidth: 300, m: 2 }} key={i}>
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        <CardContent>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
          <Skeleton animation="wave" height={30} width={60} />
        </CardContent>
      </Card>
    );
  }
  return (
    <div className='flex justify-center'>
      {cards}
    </div>
  );
};

export default HospitalCardSkeleton;