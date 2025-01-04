import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function DoctorCard({ item }) {
    const { expertise, name, image, _id } = item;
    console.log(item);

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                height="200"
                image={image}
                title={name}
                component='img'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Expertise: {expertise.join(', ')} {["Cardiology", "Internal Medicine"]}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" as={Link} to={`/form/${_id}`} >
                    Appointment
                </Button>
            </CardActions>
        </Card>
    );
}
