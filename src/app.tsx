import * as React from "react";
import { hot } from "react-hot-loader/root";
import LazyImage from "./lazyImage";
import "./app.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="place-holder">place holder</div>
      <LazyImage src="https://i.loli.net/2020/02/11/ut6yFXNiPADns9O.png" />
      <div className="gap" />
      <LazyImage src="https://i.loli.net/2020/02/11/pmCOISl9iEt2h7F.png" />
      <div className="gap" />
      <LazyImage src="https://i.loli.net/2020/02/11/5khW6xda4RMPpXE.png" />
      <div className="gap" />
      <LazyImage src="https://i.loli.net/2020/02/11/ZYT1iA7PjGxSDdm.png" />
      <div className="gap" />
      <LazyImage src="https://i.loli.net/2020/02/11/jSzcAxEQDpZ7Hby.png" />
      <div className="gap" />
      <LazyImage src="https://i.loli.net/2020/02/11/X3RKUPj157NzBls.png" />
      <div className="gap" />
      <LazyImage src="https://i.loli.net/2020/02/11/dnFwu2Uc87JfThS.png" />
    </div>
  );
};

export default hot(App);
