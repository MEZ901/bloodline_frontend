import { Hero } from "../../components/home";

const Home = () => {
  return (
    <div className="w-11/12 m-auto">
      {/* <div>
        <div className="w-2/3">
          <h1 className="text-3xl font-bold mt-5">Hospitals</h1>
          <p className="text-gray-500 mt-2">
            Discover the hospitals in your area
          </p>
        </div>
      </div> */}
      <Hero />
    </div>
  )
}

export default Home