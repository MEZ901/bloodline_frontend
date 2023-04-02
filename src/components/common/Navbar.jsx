import { Button } from '@mui/material';
import { Logo } from '../../assets';

const Navbar = () => {
  return (
    <div className='flex justify-between mt-5'>
      <div>
        <img src={Logo} alt="Logo" width="60" />
      </div>
      <div>
        <Button variant="text" className='mx-3' style={{ color: '#FF1C23' }}>LOGIN</Button>
        <Button variant="contained" style={{ backgroundColor: '#FF1C23' }}>SIGNUP</Button>
      </div>
    </div>
  )
}

export default Navbar