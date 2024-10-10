import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "DesignsHub - Professional Graphic Design Courses",
  description: "Join our professional graphic design courses where we provide you with the skills and knowledge to turn your ideas into stunning designs. Whether you're a beginner or a pro, we have something for everyone!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>
      <body className="bg-mainBg flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
