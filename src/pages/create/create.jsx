import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Table, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Form } from "react-router-dom/dist";
import Competencies from "data/EngineerCompetencies.json"
import { CheckBox, CommentOutlined } from "@mui/icons-material";

const redColor = "#ff000080"
const greenColor = "#2cff0080"
const yellowColor = "#ffd700d6"

function getCheckColor(num) {
  return num == 0 ? redColor : num == 1 ? yellowColor : greenColor;
}

function Create() {
  const competency = useMemo(() => {
    return Competencies["Software Engineer (P2)"];
  }, []) ;

  const [competencyValues, setCompetencyValues] = useState(competency.map((category) => {
    return [category[0], category[1].map(competency => [competency, 0])];
  }))

  return ( 
    <Box width="100%" height="100vh">
      <Grid container 
      spacing={8}
      alignItems="center"
      >
        <Grid item md={1} lg={2} />
        <Grid item md={10} lg={8}>
          <Paper elevation={2} sx={{
            margin: "20px",
            padding: "20px"
          }}>
            <Typography variant="h4">Create skills matrix</Typography>
            <Divider sx={{margin: "10px"}} />
            <Typography variant="h5" marginBottom="10px">Software Engineer (P2)</Typography>
            
            {competencyValues.map((category, categoryIndex) => {
              const key = category[0];
              const values = category[1];
              
              const sum = values.flatMap(competency => competency[1]).reduce((accumulator, current) => accumulator + current, 0);
              const allGreen = sum == values.length * 2;
              const allRed = sum == 0;

              return (
              <Box textAlign="left" key={key}>
                <Accordion>
                  <AccordionSummary sx={{backgroundColor: allGreen ? greenColor : allRed ? redColor : yellowColor}}>
                    <Typography variant="body1">{key}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                    {values.map((competency, competencyIndex) => {
                      const competencyText = competency[0];
                      const competencyValue = competency[1];
                      return <ListItem key={competencyText}>
                        
                        <ListItemText primary={competencyText}/>

                        <Tooltip title="Evidence">
                            <ListItemIcon sx={{marginLeft: "10px"}}>
                              <ListItemButton>
                                <CommentOutlined />
                              </ListItemButton>
                            </ListItemIcon>
                        </Tooltip>

                          <ListItemIcon>
                            <ListItemButton
                              onClick={() => {
                                setCompetencyValues((prev) => {
                                  const newCompetencyValues = [...prev];
                                  newCompetencyValues[categoryIndex][1][competencyIndex][1] = (newCompetencyValues[categoryIndex][1][competencyIndex][1] + 1) % 3
                                  return newCompetencyValues;
                                })
                              }}>
                              <CheckBox 
                                checked={true}
                                sx={{color: getCheckColor(competencyValue) }}
                              />
                            </ListItemButton>
                          </ListItemIcon> 
                                                  
                      </ListItem>
                    })}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Divider sx={{marginTop: "10px", marginBottom: "10px"}}/>
              </Box>
              
                )
            })}

            <Button variant="contained">Submit</Button>
      
          </Paper>
        </Grid>
        <Grid item md={1} lg={2} />
      </Grid>
    </Box>
  )
}

export default Create;
