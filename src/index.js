import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import BoardView from "./components/Board";
import Mdk from "@interlinklabs/mdk";
import "./main.scss";
import "./styles.scss";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLoginFailure = () => {
    console.error("Login failed");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Mdk
          appid="id__w1r26ojoh7f49hk8m30s"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        >
          {({ open }) => (
            <div className="centerContainer">
              <h2>2048</h2>
              <button
                className="resetButton"
                onClick={open}
                style={{ padding: "10px 20px", fontSize: "16px" }}
              >
                Sign In
              </button>
            </div>
          )}
        </Mdk>
      ) : (
        <>
          <h1>2048</h1>
          <BoardView />
        </>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
