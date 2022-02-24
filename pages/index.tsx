import {
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import QRDisplay from "../components/qr_display";
import QRReader from "../components/qr_reader";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Stack spacing={3}>
        <Typography variant="h3">Leave Home Safe</Typography>
        <Stepper>
          <Step>
            <StepLabel>Use your smartphone to scan the label</StepLabel>
          </Step>
          <Step>
            <StepLabel>Scan your qr code to confirm your identity</StepLabel>
          </Step>
        </Stepper>
        <Grid container alignContent={"center"} alignItems={"center"}>
          <Grid item xs={6}>
            <QRDisplay />
          </Grid>
          <Grid item xs={6}>
            <QRReader />
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default Home;
