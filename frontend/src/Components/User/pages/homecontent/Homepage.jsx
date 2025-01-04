import React from "react";
import Screen from "./Slider";
import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import Departments from "./Departments";
import h1_hero from '../../assets/h1_hero.png';
import Image from 'mui-image';
import { Box } from "@mui/system";
import Gallery from "./Gallery";

const Homepage = () => {
  const theme = useTheme();

  const departments = [
    { name: "Anesthesiology And Critical Care" },
    { name: "Clinical Biochemistry" },
    { name: "Department of Dermatology" },
    { name: "Microbiology" },
    { name: "Ophthalmology" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        {/* Slider Section */}
        <Grid item xs={12} sx={{ marginBottom: { xs: "40px", sm: "60px" } }}>
          <Screen />
        </Grid>

        {/* Hero Section */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { xs: "20px", sm: "60px" },
            borderRadius: "40px",
            gap: "10px",
          }}
        >
          <Grid container item xs={12} sx={{ minHeight: '80vh' }}>
            {/* Hero Image Section */}
            <Grid item xs={12} md={5}>
  <Image
    src={h1_hero}
    shift="top"
    distance="2rem"
    shiftDuration={320}
    fit="cover"
    sx={{
      width: '100%',  // Make the image fill the width of its container
      height: 'auto', // Keep aspect ratio intact
      objectFit: 'cover', // Ensures the image covers the area without distortion
      maxHeight: { xs: '300px', sm: '400px', md: '500px' },  // Max height for different screen sizes
    }}
  />
</Grid>


            {/* Text Section */}
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 6,
                backgroundColor: "#ccff99",
                padding: theme.spacing(2),
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography
                  sx={{
                    width: { xs: "90%", sm: "70%", md: "500px" },
                    marginTop: "50px",
                    fontSize: { xs: "18px", sm: "24px", md: "30px" },
                    fontStyle: "italic",
                    textAlign: "center",
                  }}
                >
                  “I am at an age where I just want to be fit and healthy. Our bodies are our responsibility! So start caring for your body, and it will care for you. Eat clean, and it will care for your heart.”
                </Typography>

                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56, marginTop: 2 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Gallery Section */}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginTop: { xs: "20px", sm: "30px" } }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "24px", sm: "30px" },
              fontWeight: "bold",
            }}
          >
            Gallery
          </Typography>
        </Grid>

        {/* Gallery Grid */}
        <Grid container item xs={12} sx={{ padding: { xs: "0 10px", sm: "0 30px" } }}>
          <Gallery />
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
