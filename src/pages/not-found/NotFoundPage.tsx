import { Link, useLocation } from "react-router";
import { Button } from "@/components/button/Button";
import { NAVIGATION_KEY } from "@/components/navigation/constants";

export const NotFoundPage = () => {
  const location = useLocation();
  const domainName = window.location.hostname;
  
  const redirectUrl = "https://" + domainName + location.pathname.replace(new RegExp("^\\/([^\\/]+)\\/(.*)$"), '/$1/#/$2')

  console.log("Path: " + location.pathname)
  console.log("Redirect: " + redirectUrl)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-gray-800 font-sans p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500 mb-4 animate-bounce">
          404 - Lost Your Way?
        </h1>
        <p className="text-lg md:text-xl mb-3">
          It seems like this destination isn't on our map yet.
        </p>
        <p className="text-md md:text-lg mb-6">
          Perhaps you took a wrong turn, or this page embarked on its own
          adventure!
        </p>
        <Button
          asChild
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          <Link to={NAVIGATION_KEY.HOME}>Take Me Home</Link>
        </Button>
        <Button
          asChild
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          {/* Redirect to GitHub Pages if it exist */}
          <a href={redirectUrl}>Redirect</a>
        </Button>
      </div>
      <div className="max-w-md w-full mt-8">{/* The image will go here */}</div>
    </div>
  );
};
