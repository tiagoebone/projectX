import { Button, Grid, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#343746",
        padding: "16px",
        boxShadow: "0px 3px 10px 2px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => navigate("/sobre")}
          >
            <Typography variant="h6">Sobre</Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => navigate("/inicial")}
          >
            <Typography variant="h6">Inicial</Typography>
          </Button>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
