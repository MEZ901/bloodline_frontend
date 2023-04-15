import { Profile } from "../../assets"

const ResponsibleCard = () => {
  return (
    <div className="flex justify-center">
        <div className="text-center bg-glass p-5 rounded transition-all">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Profile} alt="Bonnie Avatar" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Bonnie Green</a>
            </h3>
            <p>Responsible</p>
            <p>0631802520</p>
        </div>
    </div>
  )
}

export default ResponsibleCard