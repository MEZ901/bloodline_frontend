import { Signup } from "../../assets";

const GuideCard = () => {
  return (
    <div>
        <div className="w-60 h-60 bg-secondary rounded">
            <img src={Signup} alt="Sign up" />
        </div>
        <div className="text-center">
            <h3 className="text-xl">Sign up for free</h3>
        </div>
    </div>
  )
}

export default GuideCard