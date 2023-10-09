import "./Container.css";
import Header from "./Header";

const Container = ({ children }) => (
  <div class="Container">
    <Header />
    {children}
  </div>
);

export default Container;
