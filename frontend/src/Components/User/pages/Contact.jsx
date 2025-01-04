import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
      contact,
    };
    const response = await axios.post('http://localhost:8080/patient/patientmessage', data);
    if (response.status === 200) {
      toast.success(response.data.message);
      navigate("/");
    } else {
      toast.error(response.data.message);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");

  return (
    <Box py={4} sx={{ backgroundColor: '#ced3db' }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: 'black' }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Email sx={{ mr: 1, color: 'black' }} />
              <Typography variant="body1" sx={{ color: 'black' }}>
                Email: admin@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Phone sx={{ mr: 1, color: 'black' }} />
              <Typography variant="body1" sx={{ color: 'black' }}>
                Phone: +91-1234567890
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
            Address
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1, color: 'black' }} />
                <Typography variant="body1" sx={{ color: 'black' }}>
                  Gujarat
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1, color: 'black' }} />
                <Typography variant="body1" sx={{ color: 'black' }}>
                  Rajkot
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
            Map
          </Typography>
          <Box height={400} mt={2}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9760192242194!2d70.7988016!3d22.3038629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9f81ab2b1af%3A0x498025747ee75779!2sCivil%20Hospital%2C%20Rajkot!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </Box>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
            Contact Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputLabelProps={{ style: { color: 'black' } }}
                  inputProps={{ style: { color: 'black' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{ style: { color: 'black' } }}
                  inputProps={{ style: { color: 'black' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Number"
                  variant="outlined"
                  fullWidth
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  InputLabelProps={{ style: { color: 'black' } }}
                  inputProps={{ style: { color: 'black' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  InputLabelProps={{ style: { color: 'black' } }}
                  inputProps={{ style: { color: 'black' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
