"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Container,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  let currentSection = 0;
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const newSection = Math.round(window.scrollY / window.innerHeight);

      if (newSection != currentSection) {
        currentSection = newSection;

        // console.log("changed", currentSection);
      }
    });
  }

  return (
    <main className={styles.main}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px auto 80px",
          height: "100vh",
        }}
      >
        <Typography
          className={styles.center}
          sx={{
            fontFamily: "Vesper Libre",
            fontSize: "6rem",
          }}
        >
          <a href="#">URVASHI SHARMA</a>
        </Typography>
        <Typography sx={{ fontFamily: "Vesper Libre", fontSize: "2rem" }}>
          SOFTWARE DEVELOPER
        </Typography>
      </Container>

      <Container sx={{ height: "100vh" }}>
        <Typography sx={{ fontFamily: "Vesper Libre", fontSize: "2rem" }}>
          Hi, I am an application developer and a comic addict from India.
        </Typography>
      </Container>

      <Container sx={{ margin: "40px auto", height: "100vh" }}>
        <Typography sx={{ fontFamily: "Vesper Libre", fontSize: "35px" }}>
          Experience
        </Typography>
        <Typography sx={{ fontFamily: "Vesper Libre", fontSize: "25px" }}>
          FULL STACK SOFTWARE ENGINEER
          <Typography
            className={styles.card}
            sx={{ fontFamily: "Vesper Libre", cursor: "pointer" }}
          >
            <a href="https://falabellaindia.com/">Falabella</a>
          </Typography>
        </Typography>
        <br />
        <br />
        <Typography sx={{ fontFamily: "Vesper Libre", fontSize: "25px" }}>
          FLUTTER ASSOCIATE INTERN
          <Typography
            className={styles.card}
            sx={{ fontFamily: "Vesper Libre", cursor: "pointer" }}
          >
            <a href="https://www.paynet.pro/">PayNet Systems</a>
          </Typography>
        </Typography>
      </Container>

      <Container sx={{ margin: "40px auto", height: "100vh" }}>
        <Typography sx={{ fontFamily: "Vesper Libre", fontSize: "3rem" }}>
          Projects
        </Typography>
        <Typography
          className={styles.card}
          sx={{ fontFamily: "Vesper Libre", fontSize: "2rem" }}
        >
          <a href="https://github.com/Ninfa-Jeon/threejs-water-pool">
            Three.js Water Pool{" "}
          </a>
        </Typography>
        <Typography
          className={styles.card}
          sx={{ fontFamily: "Vesper Libre", fontSize: "2rem" }}
        >
          <a href="https://github.com/Ninfa-Jeon/raging-sea-with-fog">
            Raging Sea with Fog
          </a>
        </Typography>
        <Typography
          className={styles.card}
          sx={{ fontFamily: "Vesper Libre", fontSize: "2rem" }}
        >
          <a href="https://github.com/Ninfa-Jeon/Banking-Application">
            Mock Banking Application
          </a>
        </Typography>
        <Typography
          className={styles.card}
          sx={{ fontFamily: "Vesper Libre", fontSize: "2rem" }}
        >
          <a href="https://github.com/Ninfa-Jeon/bmi-calculator-android">
            BMI-Calculator
          </a>
        </Typography>
      </Container>

      <Container sx={{ margin: "40px auto", height: "100vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Vesper Libre", fontSize: "3rem" }}>
              Contact
            </Typography>
          </Grid>
          <Grid item xs={1} className={styles.card}>
            <a href="https://www.linkedin.com/in/urvashi-sharma-7324561a2/">
              <svg
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>
          </Grid>
          <Grid item xs={1} className={styles.card}>
            <a href="https://github.com/Ninfa-Jeon/">
              <svg
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 30 30"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
          </Grid>
          <Grid item xs={1} className={styles.card}>
            <a href="mailto:bibbrosantos@gmail.com">
              <svg
                height="50"
                viewBox="0 0 1792 1792"
                width="50"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
              </svg>
            </a>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
