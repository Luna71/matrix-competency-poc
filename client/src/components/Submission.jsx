import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  List,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Competency from "./Competency";
import {
  useCreateConfirmedSubmissionMutation,
  useGetSubmissionQuery,
} from "api/submissionSlice";
import { useNavigate } from "react-router";

const redColor = "#ff000080";
const greenColor = "#2cff0080";
const yellowColor = "#ffd700d6";

function Submission({ competencyCategory }) {
  const [createSubmission] = useCreateConfirmedSubmissionMutation();
  const submission = useGetSubmissionQuery();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = submission;

  const [competencyValues, setCompetencyValues] = useState(
    competencyCategory.map((category) => {
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
    <Box>
      <Typography variant="h5" marginBottom="10px">
        Software Engineer (P2)
      </Typography>

      {competencyCategory.map((category, categoryIndex) => {
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
                      return competencyValues[categoryIndex][competencyIndex];
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
    </Box>
  );
}

export default Submission;
