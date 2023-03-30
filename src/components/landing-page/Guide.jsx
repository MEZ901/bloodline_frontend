import { GuideCard } from ".";

const Guide = () => {
  return (
    <div className="text-center mt-5">
      <h3 className="text-xl font-bold">How it works?</h3>
      <div className="flex flex-col md:flex-row justify-center items-center my-5">
        <GuideCard />
      </div>
    </div>
  )
}

export default Guide