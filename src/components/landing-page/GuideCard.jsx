const GuideCard = ({ title, cover, index }) => {
  return (
    <>
      <div className="flex sm:gap-2 md:gap-4 relative">
        <div
          className="w-full h-24 sm:h-32 md:h-48 lg:h-60 bg-secondary rounded flex"
          style={{
            backgroundImage: `url(${cover})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></div>
      </div>
      <div className="text-center">
        <h3 className="text-sm lg:text-lg">{title}</h3>
      </div>
    </>
  );
};

export default GuideCard;
