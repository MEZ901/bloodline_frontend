import { GuideCard } from ".";
import { guideSteps } from "../../constants";

const Guide = () => {
  return (
    <div className="text-center mt-5">
      <h3 className="text-xl font-bold">How it works?</h3>
      <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 my-5">
        {guideSteps.map((step, index) => (
          <div key={step.id} className="flex justify-center">
            <div className="w-24 sm:w-32 md:w-48 lg:w-60">
              <GuideCard title={step.title} cover={step.cover} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Guide