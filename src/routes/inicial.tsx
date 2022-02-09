import { Button, Typography } from "@material-ui/core";
import React from "react";

const Inicial = () => {
  return (
    <div
      style={{
        backgroundColor: "#272732",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        width={500}
        src={
          "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Batata-Frita-PNG.png"
        }
      />
    </div>
  );
};

export default Inicial;
