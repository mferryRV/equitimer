import "./Container.css";
import Header from "./Header";

const Container = ({ children }) => (
  <div className="Container">
    <Header />
    {children}
  </div>
);

export default Container;
