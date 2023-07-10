import { useState } from "react";
import { Box, Grid, Paper, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

export function AddTask({ onAddTask }: { onAddTask: (task: string) => void }) {
  const [newTask, setNewTask] = useState<string>("");

  return (
    <Paper>
      <Grid container alignItems={"center"}>
        <Grid item xs>
          <Box sx={{ p: 2 }}>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <TextField
                id="outlined-basic"
                label="Nombre de la tarea"
                variant="standard"
                fullWidth
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs="auto">
          <IconButton
            color="primary"
            size="large"
            onClick={() => {
              onAddTask(newTask);
              setNewTask("");
            }}
            disabled={!newTask || newTask.length < 6}
          >
            <AddCircleOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
