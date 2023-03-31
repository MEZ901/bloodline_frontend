import React from "react";
import { GuideCard } from ".";
import { guideSteps } from "../../constants";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Guide = () => {
  return (
    <div className="text-center mt-5">
      <h3 className="text-xl font-bold">How it works?</h3>
      <div className="flex justify-evenly my-5">
        {guideSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex justify-between">
              <div className="w-24 sm:w-32 md:w-48 lg:w-60">
                <GuideCard title={step.title} cover={step.cover} index={index} />
              </div>
            </div>
            <div className="my-auto hidden md:flex">
              {index !== guideSteps.length - 1 && <NavigateNextIcon />}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Guide