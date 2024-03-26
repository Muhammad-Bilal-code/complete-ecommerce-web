/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children, abc }) => {
  return (
    <div>
      <Navbar />
      <div className="main-content min-h-screen">
        {children}
        {abc}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
