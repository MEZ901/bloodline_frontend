import { Link } from "react-router-dom";


const Benefits = () => {
  return (
    <div className="text-center mt-14">
      <h3 className="text-xl font-bold">why should I donate?</h3>
      <div className="w-full bg-secondary rounded flex justify-center items-center gap-1 mt-5 py-16 px-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DRcU8QVOsos" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p className="hidden lg:block flex-1">The moment you donate blood, you are helping to provide safe blood for all, <Link className="text-primary">MAKE A DATE TO GIVE.</Link> Donate blood. Save lives.</p>
      </div>
    </div>
  )
}

export default Benefits