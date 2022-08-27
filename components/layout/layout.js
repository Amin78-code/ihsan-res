import Navigation from "./navigation";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
