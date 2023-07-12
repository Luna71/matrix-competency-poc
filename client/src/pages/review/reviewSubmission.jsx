import Submission from "components/Submission";
import React, { useMemo } from "react";
import Competencies from "data/EngineerCompetencies.json";
import { Grid, Paper } from "@mui/material";

function ReviewSubmission() {
  const competencyCategory = useMemo(() => {
    return Competencies["Software Engineer (P2)"];
  }, []);
  return (
    <Grid container spacing={8} alignItems="center">
      <Grid item md={1} lg={2} />
      <Grid item md={10} lg={8}>
        <Paper
          elevation={2}
          sx={{
            margin: "20px",
            padding: "20px",
          }}
        >
          <Submission competencyCategory={competencyCategory} />
        </Paper>
      </Grid>
      <Grid item md={1} lg={2} />
    </Grid>
  );
}

export default ReviewSubmission;
