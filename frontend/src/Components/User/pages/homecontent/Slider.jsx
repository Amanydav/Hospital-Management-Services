import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import img from "../../assets/h1_hero.png";

const StyledSliderArea = styled("div")`
  margin: 0;
  position: relative;
  background-image: url(${img});
  background-size: cover; /* Ensures the image covers the entire area */
  background-position: center; /* Keeps the image centered */
  background-repeat: no-repeat; /* Prevents image repetition */
  display: flex;
  align-items: center;
  opacity: 0.8;
  height: 100vh; /* Full height */
  width: 100%; /* Full width */

  @media (max-width: 768px) {
    background-size: contain; /* For smaller screens, ensure the image fits */
    background-position: center center; /* Center the image for better view */
  }
`;

const AnimatedSpan = styled("span")`
  animation: fade-in 2s ease-in-out infinite;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const StyledSingleSlider = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledHeroCaption = styled("div")`
  text-align: left;
  padding-left: 20px;
  color: white;
  max-width: 600px; /* Restrict text width */
  width: 100%;
  
  @media (max-width: 768px) {
    padding-left: 10px; /* Adjust padding for smaller screens */
  }
`;

const Screen = () => {
  const words = ["health", "sushi", "steak"];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentword = words[currentIndex];

  return (
    <StyledSliderArea>
      <StyledSingleSlider>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={9} md={8} lg={6} xl={6}>
              <StyledHeroCaption>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "white",
                    fontSize: { xs: "24px", sm: "28px", md: "32px" }, // Responsive font size
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Committed to success
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontSize: { xs: "36px", sm: "40px", md: "48px", lg: "56px" },
                    fontWeight: "bold",
                    lineHeight: "1.2",
                  }}
                >
                  We care about your{" "}
                  <strong className="cd-words-wrapper">
                    <AnimatedSpan>{currentword}</AnimatedSpan>
                  </strong>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    marginTop: "20px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Efficient hospital management system streamlining
                  operations, enhancing patient care, and optimizing resource
                  allocation
                </Typography>
              </StyledHeroCaption>
            </Grid>
          </Grid>
        </Container>
      </StyledSingleSlider>
    </StyledSliderArea>
  );
};

export default Screen;
