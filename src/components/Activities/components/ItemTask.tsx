import { useState } from "react";
import { IconButton, Typography, TextField, Tooltip, Box } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

import { Task } from "../types";

interface ItemTaskProps {
  item: Task;
  onChangeComplete(complete: boolean): void;
  onDelete(): void;
  onEdit(item: Task): void;
}
export function ItemTask({
  item,
  onChangeComplete,
  onDelete,
  onEdit,
}: ItemTaskProps) {
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(item.name);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <ListItem
        secondaryAction={
          <>
            <Tooltip title={item.completed ? "Pendiente" : "Completar"} arrow>
              <IconButton
                edge="end"
                aria-label="check"
                onClick={() => onChangeComplete(!item.completed)}
              >
                {!item.completed && <CheckCircleOutlineIcon color="success" />}
                {item.completed && <CancelIcon color="action" />}
              </IconButton>
            </Tooltip>

            {!edit && (
              <Tooltip title="Editar" arrow>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  color="primary"
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            )}
            {edit && (
              <Tooltip title="Guardar" arrow>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  color="primary"
                  onClick={() => {
                    onEdit({ ...item, name: newName });
                    setEdit(false);
                  }}
                >
                  <SaveIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Eliminar" arrow>
              <IconButton
                edge="end"
                aria-label="delete"
                color="error"
                onClick={() => {
                  onDelete();
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        }
      >
        <ListItemText
          primary={
            <>
              {!edit && (
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.name}
                </Typography>
              )}
              {edit && (
                <TextField
                  value={newName}
                  size="medium"
                  sx={{
                    m: "0 !important",
                  }}
                  onChange={(e) => {
                    setNewName(e.target.value);
                  }}
                />
              )}
            </>
          }
        />
      </ListItem>
    </Box>
  );
}
