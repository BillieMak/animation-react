import { Stack } from "@mui/system";
import { Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "./Button/Button";

export const NavApp = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      bgcolor="#300D50"
      padding={2}
      height="75px"
      spacing={20}
    >
      <motion.img
        src="https://kinforce.net/cripto/wp-content/uploads/2021/07/elements-gravitate-letter-g-logo-template-TD5X6QY.png"
        alt="Logo"
        width="144"
        height="48"
        initial={{
          marginTop: "-500px",
        }}
        animate={{
          marginTop: "0",
        }}
        transition={{
          duration: "1.1",
          type: "spring",
        }}
      />
      <motion.div
        initial={{
          marginTop: "-500px",
        }}
        animate={{
          marginTop: "0",
        }}
        transition={{
          duration: "1.1",
          type: "spring",
        }}
      >
        <Link
          underline="none"
          bgcolor="transparent"
          sx={{
            color: "white",
            ":hover": { color: "#e702bf" },
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: ".25px",
            cursor: "pointer",
            display: "inline-block",
            padding: "12px  15px",
            display:{ xs : "none", lg: "inline-flex"}
          }}
        >
          Home
        </Link>
        <Link
          underline="none"
          bgcolor="transparent"
          sx={{
            color: "white",
            ":hover": { color: "#e702bf" },
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: ".25px",
            cursor: "pointer",
            display: "inline-block",
            padding: "12px  15px",
            display:{ xs : "none", lg: "inline-flex"}
          }}
        >
          About
        </Link>
        <Link
          underline="none"
          bgcolor="transparent"
          sx={{
            color: "white",
            ":hover": { color: "#e702bf" },
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: ".25px",
            cursor: "pointer",
            padding: "12px  15px",
            display:{ xs : "none", lg: "inline-flex"}
          }}
        >
          token sale
        </Link>
        <Link
          underline="none"
          bgcolor="transparent"
          sx={{
            color: "white",
            ":hover": { color: "#e702bf" },
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: ".25px",
            cursor: "pointer",
            padding: "12px  15px",
            display:{ xs : "none", lg: "inline-flex"}
          }}
        >
          road map
        </Link>
        <Link
          underline="none"
          bgcolor="transparent"
          sx={{
            color: "white",
            ":hover": { color: "#e702bf" },
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: ".25px",
            cursor: "pointer",
            padding: "12px  15px",
            display:{ xs : "none", lg: "inline-flex"}
          }}
        >
          Pages
        </Link>
        <Link
          underline="none"
          bgcolor="transparent"
          sx={{
            color: "white",
            ":hover": { color: "#e702bf" },
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: ".25px",
            cursor: "pointer",
            padding: "12px  15px",
            display:{ xs : "none", lg: "inline-flex"}
          }}
        >
          blog
        </Link>
        <Link
          underline="none"
          bgcolor="transparent"
          sx={{
            color: "white",
            ":hover": { color: "#e702bf" },
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: ".25px",
            cursor: "pointer",
            padding: "12px  15px",
            display:{ xs : "none", lg: "inline-flex"}
          }}
        >
          Contact
        </Link>

        <Button
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            ml: "50px"
          }}
        >
          Buy Token
        </Button>
      </motion.div>
    </Stack>
  );
};
