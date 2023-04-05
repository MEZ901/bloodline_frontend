import { Button } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  return (
    <section class="bg-white min-h-screen flex items-center">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 tracking-tight font-extrabold text-9xl text-primary">
            OOPS!
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Something went wrong.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500">
            {error.statusText || error.message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ErrorBoundary;
