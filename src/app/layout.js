import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="colored"
        />

      </body>
    </html>
  );
}