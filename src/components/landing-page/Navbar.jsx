import Logo from '../../assets/Logo.png';
import { Button, Divider } from '@mui/material';

const Navbar = () => {
  return (
    <div className='flex justify-between mt-5'>
      <div>
        <img src={Logo} alt="Logo" width="60" />
      </div>
      <div className='divide-x'>
        <button className='font-semibold text-[#FF1C23] mx-3'>LOGIN</button>
        <Button variant="contained" sx={{bgcolor: "#FF1C23"}}>SIGNUP</Button>
      </div>
    </div>
  )
}

export default Navbar