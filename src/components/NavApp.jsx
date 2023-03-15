import { Stack } from "@mui/system";
import { Button, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const NavApp = () => {
  return (
    <Stack
      spacing={4}
      justifyContent="center"
      alignItems="center"
      bgcolor="#300D50"
      padding={2}
      height="70px"
    >
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
          }}
        >
          Contact
        </Link>
        <Button
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            borderRadius: "30px",
            color: "white",
            fontWeight: "bold",
            marginLeft: "12px",
            padding: "12px 30px",
            ":hover": {
              backgroundImage:
                "linear-gradient(90deg, #e702bf 0%, #ec5046 100%)",
            },
          }}
        >
          Buy Token
        </Button>
      </motion.div>
    </Stack>
  );
};
