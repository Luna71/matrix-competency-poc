import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  List,
  Paper,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Competencies from "data/EngineerCompetencies.json";
import Competency from "components/Competency";
import {
  useCreateSubmissionMutation,
  useGetConfirmedSubmissionQuery,
  useGetSubmissionQuery,
} from "api/submissionSlice";
import { useNavigate } from "react-router";

const redColor = "#ff000080";
const greenColor = "#2cff0080";
const yellowColor = "#ffd700d6";

function getCheckColor(num) {
  return num == 0 ? redColor : num == 1 ? yellowColor : greenColor;
}

function Create() {
  const competency = useMemo(() => {
    return Competencies["Software Engineer (P2)"];
  }, []);

  const [createSubmission] = useCreateSubmissionMutation();
  const navigate = useNavigate();

  const submission = useGetConfirmedSubmissionQuery();
  const { data, isLoading, isSuccess } = submission;

  const [competencyValues, setCompetencyValues] = useState(
    competency.map((category) => {
      return category[1].map((competencyCategory) => [0, ""]);
    })
  );

  const setCompetencyState = useCallback(
    (categoryIndex, competencyIndex, number, comment) => {
      setCompetencyValues((prev) => {
        const newCompetencyValues = structuredClone(prev);
        newCompetencyValues[categoryIndex][competencyIndex] = [number, comment];
        return newCompetencyValues;
      });
    },
    [setCompetencyValues]
  );

  useEffect(() => {
    if (!isLoading && isSuccess && data) {
      setCompetencyValues(data);
    }
  }, [data, isLoading, isSuccess]);

  return (
    <Box width="100%" height="100vh">
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
            <Typography variant="h4">Create skills matrix</Typography>
            <Divider sx={{ margin: "10px" }} />
            <Typography variant="h5" marginBottom="10px">
              Software Engineer (P2)
            </Typography>

            {competency.map((category, categoryIndex) => {
              const title = category[0];
              const values = category[1];

              const sum = competencyValues[categoryIndex]
                .flatMap((value) => value[0])
                .reduce((accumulator, current) => accumulator + current, 0);
              const allGreen = sum === values.length * 2;
              const allRed = sum === 0;

              return (
                <Box textAlign="left" key={title}>
                  <Accordion>
                    <AccordionSummary
                      sx={{
                        backgroundColor: allGreen
                          ? greenColor
                          : allRed
                          ? redColor
                          : yellowColor,
                      }}
                    >
                      <Typography variant="body1">{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List>
                        {values.map((competencyText, competencyIndex) => {
                          const getCompetencyState = () => {
                            return competencyValues[categoryIndex][
                              competencyIndex
                            ];
                          };

                          return (
                            <Box marginBottom="5px" key={competencyText}>
                              <Competency
                                text={competencyText}
                                setState={setCompetencyState}
                                indexes={[categoryIndex, competencyIndex]}
                                getState={getCompetencyState}
                              />
                            </Box>
                          );
                        })}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                  <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
                </Box>
              );
            })}

            <Button
              variant="contained"
              onClick={() => {
                createSubmission(competencyValues);
                submission.refetch();
                navigate("/profile");
              }}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
        <Grid item md={1} lg={2} />
      </Grid>
    </Box>
  );
}

export default Create;
