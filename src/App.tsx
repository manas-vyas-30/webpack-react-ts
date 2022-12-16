import "./styles.css";
import img from "./house.jpg";
import logo from "./logo.svg";
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={img} alt="house" width="200" height="300" />
      <img src={logo} alt="logo" width="50" height="50" />
      <ClickCounter />
    </>
  );
};
