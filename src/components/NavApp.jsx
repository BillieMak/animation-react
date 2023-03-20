import { Grid, Link } from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "./Button/Button";

export const NavApp = () => {
  const items = ["David", "about", "token sale", "pages", "blog", "contact"];

  return (
    <Grid
      sx={{ padding: "12px  15px" }}
      container
      bgcolor="#300D50"
      spacing={8}
      alignItems="center"
      justifyContent="center"
      min-height="119"
    >
      <Grid
        item
        component={motion.div}
        initial={{
          position: "relative",
          top: "-100px",
        }}
        animate={{
          top: "0",
        }}
        transition={{
          duration: "1.1",
          type: "spring",
        }}
      >
        <img
          src="https://kinforce.net/cripto/wp-content/uploads/2021/07/elements-gravitate-letter-g-logo-template-TD5X6QY.png"
          alt="Logo"
          width="144"
          height="48"
        />
      </Grid>

      {items.map((el) => (
        <Grid
          item
          component={motion.div}
          initial={{
            position: "relative",
            top: "-100px",
          }}
          animate={{
            top: "0",
          }}
          transition={{
            duration: "1.1",
            type: "spring",
          }}
        >
          <Link
            underline="none"
            sx={{
              color: "white",
              textTransform: "uppercase",
              letterSpacing: ".25px",
              cursor: "pointer",
              fontWeight: "bold",
              ":hover": { color: "#e702bf" },
            }}
          >
            {el}
          </Link>
        </Grid>
      ))}

      <Grid
        item
        component={motion.div}
        initial={{
          position: "relative",
          top: "-100px",
        }}
        animate={{
          top: "0",
        }}
        transition={{
          duration: "1.1",
          type: "spring",
        }}
      >
        <Button
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            ml: "50px",
          }}
        >
          <Link
            underline="none"
            href="src/components/card/pdfs/grilla.xlsm"
            download="cvAlvaroGrilla.xlsm"
            sx={{color:"white"}}
          >
            Descargar
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};
