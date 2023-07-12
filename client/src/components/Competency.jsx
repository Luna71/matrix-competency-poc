import { CheckBox, CommentOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { useMemo } from "react";

const redColor = "#ff000080";
const greenColor = "#2cff0080";
const yellowColor = "#ffd700d6";

function getCheckColor(num) {
  return num === 0 ? redColor : num === 1 ? yellowColor : greenColor;
}

function Competency({ text, getState, setState, indexes }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [value, comment] = getState();
  const [categoryIndex, competencyIndex] = indexes;

  return useMemo(() => {
    return (
      <Accordion expanded={commentOpen}>
        <ListItem>
          <ListItemText primary={text} />

          <Tooltip title="Evidence">
            <ListItemIcon sx={{ marginLeft: "10px" }}>
              <ListItemButton onClick={() => setCommentOpen(!commentOpen)}>
                <CommentOutlined />
              </ListItemButton>
            </ListItemIcon>
          </Tooltip>

          <ListItemIcon>
            <ListItemButton
              onClick={() =>
                setState(
                  categoryIndex,
                  competencyIndex,
                  (value + 1) % 3,
                  comment
                )
              }
            >
              <CheckBox checked={true} sx={{ color: getCheckColor(value) }} />
            </ListItemButton>
          </ListItemIcon>
        </ListItem>
        <AccordionDetails>
          <TextField
            fullWidth
            multiline
            maxRows={7}
            onInput={(input) => {
              setState(
                categoryIndex,
                competencyIndex,
                value,
                input.target.value
              );
            }}
            value={comment}
          />
        </AccordionDetails>
      </Accordion>
    );
  }, [
    commentOpen,
    text,
    value,
    comment,
    setState,
    categoryIndex,
    competencyIndex,
  ]);
}

export default Competency;
