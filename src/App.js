import React from "react";
import "./App.css";
import tbth from "./images/tbth.png";
import bg from "./images/bg.webp";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div
        className="bg-cover bg-no-repeat bg-center h-screen opacity-75"
        style={{
          boxShadow: "inset 0 0 500px black",
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: "50%", left: "50%" }}
      >
        <img src={tbth} alt="TBTH" />
        <center>
          <div className="text-4xl">
            <Button
              title={"Facebook"}
              color={"blue-500"}
              icon={"facebook"}
              link={"https://www.facebook.com/TheBoSsTH/"}
            />
            <Button
              title={"Instagram"}
              color={"pink-500"}
              icon={"instagram"}
              link={"https://www.instagram.com/thel3ossth/"}
            />
            <Button
              title={"Twitter"}
              color={"indigo-500"}
              icon={"twitter"}
              link={"https://twitter.com/Thel3ossTH"}
            />
            <Button
              title={"Github"}
              color={"white"}
              icon={"github"}
              link={"https://github.com/TheBossTH"}
            />
            <Button
              title={"Steam"}
              color={"purple-500"}
              icon={"steam"}
              link={"https://steamcommunity.com/id/TheBoSsTH"}
            />
          </div>
        </center>
      </div>
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{ bottom: "3%", right: "0%" }}
      >
        <label className="font-medium">Picture By : </label>
        <button className="font-bold transition duration-500 ease-in-out hover:text-white transform hover:translate-x-1 hover:scale-125 hover:opacity-100">
          <a href="https://www.pixiv.net/users/6657532">QuAn_</a>
        </button>
      </div>
    </div>
  );
}

export default App;
