import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getservice } from "../slices/getService";
import Loading from "../Loading";
import Image from "mui-image";

const ServiceItem = ({ image, title, description, features }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleOpen} sx={{ marginBottom: 4 }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{
            objectFit: "cover", // Ensures the image covers the box without distorting its aspect ratio
            width: "100%", // Makes sure the image spans the full width of the card
            height: "200px", // Fixed height to ensure consistency
          }}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
          }}
        >
          <Image
            src={image}
            style={{
              objectFit: "contain", // Ensures the image fits within the modal box, preserving aspect ratio
              width: "100%", // Makes sure the image spans the full width of the modal
              height: "auto", // Maintains the aspect ratio
            }}
          />
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="h6" gutterBottom>
            Features:
          </Typography>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Box>
      </Modal>
    </>
  );
};

const OurServicesPage = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.service);
  const { service, isLoading, error } = datas;

  useEffect(() => {
    dispatch(getservice());
  }, [dispatch]);

  return (
    <>
      <Loading isloading={isLoading} />
      <Box py={4}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Our Services
          </Typography>

          <Grid container spacing={4}>
            {/* Adjust the number of items per row depending on the screen size */}
            {service?.user_service?.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}> {/* 12 for full width on mobile, 6 for 2 items per row on small screens, 4 for 3 items per row on medium screens */}
                <ServiceItem
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OurServicesPage;
