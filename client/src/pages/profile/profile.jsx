import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const card = (title, score, navigate) => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Role
      </Typography>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ mt: 1.5 }} color="text.secondary">
        {score}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      <Button
        size="small"
        variant="contained"
        onClick={() => navigate("/create")}
      >
        View competencies
      </Button>
    </CardActions>
  </Card>
);

function Profile() {
  const navigate = useNavigate();
  return (
    <Box margin="50px">
      <Grid spacing={8} container>
        <Grid item md={3}>
          {card("Software Engineer (P1)", "100/100")}
        </Grid>
        <Grid item md={3}>
          {card("Software Engineer (P2)", "74/100", navigate)}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
