import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useGetSubmissionQuery } from "api/submissionSlice";
import React from "react";
import { useNavigate } from "react-router";

const card = (title, role, navigate) => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {role}
      </Typography>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      <Button size="small" variant="contained" onClick={navigate}>
        View submission
      </Button>
    </CardActions>
  </Card>
);

function Review() {
  const submission = useGetSubmissionQuery();
  const navigate = useNavigate();
  return (
    <Box margin="50px">
      <Grid spacing={8} container>
        <Grid item md={3}>
          {submission.data &&
            card("Lewis Wood", "Software Engineer (P2)", () =>
              navigate("submission")
            )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Review;
