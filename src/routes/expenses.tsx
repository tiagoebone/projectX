import { Button, Typography } from "@material-ui/core";
import React from "react";

export default function Expenses() {
  const [resposta, setResposta] = React.useState("");

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <Button variant="outlined" onClick={() => setResposta("Opa, bão sim")}>
        <Typography variant="h6">Opa bão?</Typography>
      </Button>
      <h3>{resposta}</h3>
    </main>
  );
}
