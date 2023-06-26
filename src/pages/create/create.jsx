import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Table, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Form } from "react-router-dom/dist";
import Competencies from "data/EngineerCompetencies.json"
import { CheckBox, CommentOutlined } from "@mui/icons-material";

const redColor = "#ff000080"
const greenColor = "#2cff0080"
const yellowColor = "#ffd700d6"
function getRandomColor() {
  const num = Math.ceil(Math.random() * 3);
  return num == 1 ? redColor : num == 2 ? greenColor : yellowColor;
}

function Create() {
  const competency = Competencies["Software Engineer (P2)"];

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

            {Object.keys(competency).map((key) => {
              return (
              <Box textAlign="left" >
                <Accordion>
                  <AccordionSummary sx={{backgroundColor: redColor}}>
                    <Typography variant="body1" key={key}>{key}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                    {competency[key].map((competencyText) => {
                      return <ListItem key={competencyText}>
                        <ListItemButton>
                        <ListItemText primary={competencyText}/>

                        <Tooltip title="Evidence">
                          <ListItemIcon sx={{marginLeft: "10px"}}>
                            <CommentOutlined />
                          </ListItemIcon>
                        </Tooltip>

                        <Tooltip title="Progress">
                          <ListItemIcon>
                            <CheckBox 
                              checked={true}
                              sx={{color: getRandomColor() }}
                            />
                          </ListItemIcon> 
                        </Tooltip>
                        </ListItemButton>
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
