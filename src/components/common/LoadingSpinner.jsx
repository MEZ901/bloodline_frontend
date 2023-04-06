import { BounceLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      <BounceLoader color="#FF1C23" />
    </div>
  )
}

export default LoadingSpinner