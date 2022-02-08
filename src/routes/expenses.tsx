import { Button } from "@material-ui/core";

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <Button variant="outlined" onClick={() => alert("opa bão")}>
        Opa bão
      </Button>
    </main>
  );
}
