import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const Hero = () => {
  return (
    <section className="bg-white">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Save Lives by Donating Blood Today</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-8 xl:px-24">Find hospital or blood drive near you and make a difference in someone's life.</p>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-evenly gap-5 px-4 lg:px-12'>
            <div className='w-full sm:w-1/3 flex flex-col items-center'>
                <div className="flex justify-center items-center mb-4 w-28 h-28 rounded-full bg-gray-400 hover:bg-primary lg:h-32 lg:w-32 cursor-pointer">
                    <LocalHospitalIcon className="text-white" sx={{fontSize: '60px'}} />
                </div>
                <p className='text-center font-semibold'>Hospitals</p>
            </div>
            <div className='w-full sm:w-1/3 flex flex-col items-center'>
                <div className="flex justify-center items-center mb-4 w-28 h-28 rounded-full bg-gray-400 hover:bg-primary lg:h-32 lg:w-32 cursor-pointer">
                    <CampaignIcon className="text-white" sx={{fontSize: '60px'}} />
                </div>
                <p className='text-center font-semibold'>Blood drives</p>
            </div>
            <div className='w-full sm:w-1/3 flex flex-col items-center'>
                <div className="flex justify-center items-center mb-4 w-28 h-28 rounded-full bg-gray-400 hover:bg-primary lg:h-32 lg:w-32 cursor-pointer">
                    <LocalLibraryIcon className="text-white" sx={{fontSize: '60px'}} />
                </div>
                <p className='text-center font-semibold'>Articles</p>
            </div>
        </div>
    </section>
  )
}

export default Hero