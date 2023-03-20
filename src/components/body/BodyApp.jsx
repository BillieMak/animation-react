import { Container, Grid, Stack, Typography } from "@mui/material";
import { Button } from "../Button/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { SectionBannerStyle } from "./Bodystyle";
import { color, delay, motion } from "framer-motion";
import { Card } from "../card/Card";

export const BodyApp = () => {
  return (
   <>
    <SectionBannerStyle component="section">
      <Container > 
        <Grid container >
          <Grid item xs={12} lg={5} >
            <Typography variant="h2" mb={2} component="h1">
              Buy and Sell Digital Currency
            </Typography>

            <Typography variant="h5" mb={2} color="#2DE4C1" fontWeight="bold">
              Trade crypto like it's meant to be
            </Typography>

            <Typography paragraph mb={2}>
              Cras et ligula ac risus interdum congue, fusce odio efficitur,
              libero nec mollis scelerisque, arcu.
            </Typography>

            <Stack direction="row">
              <Button
                size="large"
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ rotate: 270 }}
                animate={{ rotate: 0 }}
                transition={{
                  duration: "1.1",
                }}
              >
                start trading now
              </Button>
              <Button
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                sx={{
                  ml: "10px",
                  width: "10px",
                  borderRadius: "50%",
                  minWidth: "auto",
                }}
                initial= {{ boxShadow : "0 0 12px 2px cyan"}}
                animate= {{ boxShadow : "0 0 12px 2px white"}}
                transition={{
                  delay:".2",
                  repeat: Infinity,
                  repeatDelay: 1 
                }}
              >
                <PlayCircleOutlineIcon />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionBannerStyle>

    <SectionBannerStyle component="section" sx={{backgroundImage: "none", backgroundColor: "#300D50"}}>
    <Container sx={{outline:"2px solid cyan"}} >
    <Card />
    </Container>
    </SectionBannerStyle>
   </>
  );
};
// #
