import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

const HospitalCardSkeleton = () => {
  return (
    <Card sx={{ width: '50vw', maxWidth: 345, m: 2 }}>
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <CardContent>
        <>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
        <Skeleton animation="wave" height={30} width={60} />
        </>
      </CardContent>
    </Card>
  );
};

export default HospitalCardSkeleton;