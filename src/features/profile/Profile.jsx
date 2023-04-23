import { ProfileCard } from "../../components/profile"

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row justify-around">
       <div className="bg-glass h-fit mt-5">
        <ProfileCard />
       </div>
       <div className="bg-glass h-fit">
        right
       </div>
    </div>
  )
}

export default Profile