import * as React from 'react';
import { Grid, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Departments({ item }) {
  const theme = useTheme();

  // Using useMediaQuery to adjust layout based on screen size
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // For small screens (mobile)
  const isMd = useMediaQuery(theme.breakpoints.up('md'));  // For medium screens (tablet)
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));  // For large screens (desktop)

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ minWidth: 250, minHeight: 300, padding: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
            {item.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
