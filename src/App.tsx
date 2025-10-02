import { useEffect, useState } from "react";
// import { navBasePath, navPageNames } from "./components/navigation/constants";
import { navBasePath } from "./components/navigation/constants";
import { isHomePage } from './components/navigation/helpers';
import { NavigationBar } from "./components/navigation/NavigationBar";
import { HomePage } from "./pages/home/HomePage";
import { TraveloguePage } from "./pages/travelogue/TraveloguePage";
// import { NotFoundPage } from "./pages/not-found/NotFoundPage";
import { Routes, Route } from "react-router";
import NotFoundPage from "./pages/not-found/NotFoundPage";

const getPageFromPath = () => {
    const path = window.location.pathname;
    let pagePath = '';
    if (path.startsWith(navBasePath)) {
        pagePath = path.substring(navBasePath.length);
    } else {
        pagePath = path;
    }

    // remove leading slash
    pagePath = pagePath.startsWith('/') ? pagePath.substring(1) : pagePath;

    return pagePath;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath());

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage(getPageFromPath());
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // When currentPage changes, scroll to the top of the page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case navPageNames.Travelogue:
  //       return <TraveloguePage />;
  //     case "":
  //       return <HomePage />;
  //     default:
  //       return <NotFoundPage />;
  //   }
  // };

  return (
    <>
      <NavigationBar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className={isHomePage(currentPage) ? "" : "pt-20"}>
        {/* {renderPage()} */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/travelogue" element={<TraveloguePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
