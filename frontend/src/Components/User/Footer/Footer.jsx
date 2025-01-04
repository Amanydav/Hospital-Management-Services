import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Stack,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { blue, grey } from '@mui/material/colors';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <footer>
      <Box sx={{ bgcolor: '#eaf4f4', py: 4, color: grey[800] }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {/* Contact Information */}
            <Grid item xs={12} sm={4} textAlign={isMobile ? 'center' : 'left'}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: grey[900], fontSize: isMobile ? '1rem' : '1.25rem' }}
              >
                Contact Us
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack
                direction={isMobile ? 'column' : 'row'}
                alignItems="center"
                spacing={1}
              >
                <Avatar sx={{ bgcolor: blue[500] }}>
                  <LocationOnIcon />
                </Avatar>
                <Typography sx={{ color: grey[800] }}>Gujarat, Rajkot</Typography>
              </Stack>
              <Stack
                direction={isMobile ? 'column' : 'row'}
                alignItems="center"
                spacing={1}
                sx={{ mt: 2 }}
              >
                <Avatar sx={{ bgcolor: blue[500] }}>
                  <EmailIcon />
                </Avatar>
                <a
                  href="mailto:info@hospital.com"
                  style={{ textDecoration: 'none', color: grey[700] }}
                >
                  admin@hospital.com
                </a>
              </Stack>
              <Stack
                direction={isMobile ? 'column' : 'row'}
                alignItems="center"
                spacing={1}
                sx={{ mt: 2 }}
              >
                <Avatar sx={{ bgcolor: blue[500] }}>
                  <CallIcon />
                </Avatar>
                <a
                  href="tel:+91-1234567890"
                  style={{ textDecoration: 'none', color: grey[700] }}
                >
                  +91-1234567890
                </a>
              </Stack>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={4} textAlign={isMobile ? 'center' : 'left'}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: grey[900], fontSize: isMobile ? '1rem' : '1.25rem' }}
              >
                Quick Links
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={1}>
                <Button
                  href="/doctor"
                  variant="text"
                  sx={{ color: blue[700], fontSize: isMobile ? '0.875rem' : '1rem' }}
                >
                  Find a Doctor
                </Button>
                <Button
                  href="/services"
                  variant="text"
                  sx={{ color: blue[700], fontSize: isMobile ? '0.875rem' : '1rem' }}
                >
                  Our Services
                </Button>
                <Button
                  href="/appointment"
                  variant="text"
                  sx={{ color: blue[700], fontSize: isMobile ? '0.875rem' : '1rem' }}
                >
                  Make an Appointment
                </Button>
                <Button
                  href="/contact"
                  variant="text"
                  sx={{ color: blue[700], fontSize: isMobile ? '0.875rem' : '1rem' }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Grid>

            {/* Social Media Links */}
            {/* Social Media Links */}
<Grid item xs={12} sm={4} textAlign={isMobile ? 'center' : 'left'}>
  <Typography
    variant="h6"
    gutterBottom
    sx={{ color: grey[900], fontSize: isMobile ? '1rem' : '1.25rem' }}
  >
    Follow Us
  </Typography>
  <Divider sx={{ mb: 2 }} />
  <Stack
    direction={isMobile ? 'column' : 'row'}
    spacing={isMobile ? 1 : 2}
    alignItems="center"
    justifyContent={isMobile ? 'center' : 'flex-start'}
  >
    <IconButton
      href="https://facebook.com"
      target="_blank"
      sx={{ color: blue[800] }}
      aria-label="Facebook"
    >
      <FacebookIcon fontSize={isMobile ? 'small' : 'medium'} />
    </IconButton>
    <IconButton
      href="https://linkedin.com"
      target="_blank"
      sx={{ color: blue[800] }}
      aria-label="LinkedIn"
    >
      <LinkedInIcon fontSize={isMobile ? 'small' : 'medium'} />
    </IconButton>
    <IconButton
      href="https://twitter.com"
      target="_blank"
      sx={{ color: blue[500] }}
      aria-label="Twitter"
    >
      <TwitterIcon fontSize={isMobile ? 'small' : 'medium'} />
    </IconButton>
  </Stack>
</Grid>

          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Copyright Section */}
          <Typography
            variant="body2"
            color={grey[700]}
            align="center"
            sx={{ mt: 2, fontSize: isMobile ? '0.75rem' : '0.875rem' }}
          >
            © {new Date().getFullYear()} Health Haven Hospital. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
