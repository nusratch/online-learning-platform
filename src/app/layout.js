import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

       
        <Navbar />

    
        <main className="flex-grow flex items-center justify-center px-4">
          {children}
        </main>


        <Footer />

      </body>
    </html>
  );
}