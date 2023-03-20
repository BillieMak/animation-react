import { Grid, Typography, Button, Link } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { NavApp } from "../NavApp";

export const Card = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "#2B0C47", outline: "2px solid red" }}
    >
      <Grid item xs={4}>
        <img
          src="https://kinforce.net/cripto/wp-content/uploads/2021/08/elements-30-cryptocurrency-icons-flat-ZBZ8VZC_1.png"
          alt=""
        />
        <Typography variant="h3">Safe and Secure</Typography>
        <Typography paragraph>
          Vivamus risus purus, vulputate a sagittis, suscipit scelerisque massa
          at mattis odio vitae libero semper.
        </Typography>
      </Grid>
      <Grid item></Grid>

    </Grid>
  );
};
