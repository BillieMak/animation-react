import {
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Button } from "../Button/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { SectionBannerStyle } from "./Bodystyle";

export const BodyApp = () => {
  return (
    <SectionBannerStyle
  component="section"
    >
      <Container>
        <Grid container>
          <Grid item xs={12} lg={5}>
            <Typography variant="h2" mb={2} component="h1">
              Buy and Sell Digital Currency
            </Typography>

            <Typography variant="h5" mb={2} color="#2DE4C1">
              Trade crypto like it's meant to be
            </Typography>

            <Typography paragraph mb={2}>
              Cras et ligula ac risus interdum congue, fusce odio efficitur,
              libero nec mollis scelerisque, arcu.
            </Typography>

            <Stack direction="row">
              <Button size="large">start trading now</Button>
              <Button
                sx={{
                  ml: "10px",
                  width: "10px",
                  borderRadius: "50%",
                  minWidth: "auto",
                }}
              >
                <PlayCircleOutlineIcon />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionBannerStyle>
  );
};
// #
