import { Outlet } from "react-router";
import { Header } from "../header";
import { Footer } from "../footer";
import { ScrollToTop } from "../scroll-to-top";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}