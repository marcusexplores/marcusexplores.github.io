import { Routes, Route, useLocation } from "react-router";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";
import { HomePage } from "@/pages/home/HomePage";
import { TraveloguePage } from "@/pages/travelogue/TraveloguePage";
import { NavigationBar } from "@/components/navigation/NavigationBar";
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import { isHomePage } from "@/components/navigation/helpers";

export default function App() {
  const location = useLocation();

  return (
    <>
      <NavigationBar />
      <main className={isHomePage(location.pathname) ? "" : "pt-20"}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={NAVIGATION_KEY.TRAVELOGUE} element={<TraveloguePage />} />
          <Route path={NAVIGATION_KEY.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
