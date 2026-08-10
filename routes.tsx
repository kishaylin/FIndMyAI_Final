import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layouts/root-layout";
import { HomePage } from "./pages/home";
import { ExplorePage } from "./pages/explore";
import { ToolDetailPage } from "./pages/tool-detail";
import { AboutPage } from "./pages/about";
import { TermsPage } from "./pages/terms";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "explore", Component: ExplorePage },
      { path: "tool/:id", Component: ToolDetailPage },
      { path: "about", Component: AboutPage },
      { path: "terms", Component: TermsPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
