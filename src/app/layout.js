import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;