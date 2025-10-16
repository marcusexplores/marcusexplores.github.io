import { Link, useLocation } from "react-router";
import { Button } from "@/components/button/Button";
import { NAVIGATION_KEY } from "@/components/navigation/constants";

const transformPath = (input: string) => {
  const pattern1 = /^\/#\/(.*?)\/(.*)$/;
  const match1 = pattern1.exec(input);
  if (match1) {
    return `/${match1[1]}/#/${match1[2]}`;
  }

  const pattern2 = /^\/#\/(.*)$/;
  const match2 = pattern2.exec(input);
  if (match2) {
    return `/${match2[1]}`;
  }

  return input;
}

export const NotFoundPage = () => {
  const location = useLocation();
  const redirectUrl = transformPath(location.pathname);

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
          <Link to={redirectUrl}>Redirect</Link>
        </Button>
      </div>
      <div className="max-w-md w-full mt-8">{/* The image will go here */}</div>
    </div>
  );
};
