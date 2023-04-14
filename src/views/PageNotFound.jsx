import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 tracking-tight font-extrabold text-9xl text-primary">
            4<BloodtypeIcon sx={{ fontSize: "7rem" }} />4
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: "#FF1C23" }}
            onClick={() => navigate("/")}
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
