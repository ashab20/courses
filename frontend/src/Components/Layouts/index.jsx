import Footer from "../Footer";
import { Header } from "./Header";

function Layouts({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layouts;
