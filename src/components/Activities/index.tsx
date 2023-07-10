import { useMemo, useState } from "react";
import { Container, Grid, Paper, List, Typography } from "@mui/material";

import { AddTask } from "./components/AddTask";
import { ActionsTask } from "./components/ActionsTask";
import { Task } from "./types";

export const Activities = () => {
  const [data, setData] = useState<Task[]>([]);

  const typeTasks = useMemo(
    () => [
      {
        title: "Tareas creadas",
        tasks: data.filter((item) => !item.completed),
      },
      {
        title: "Tareas completadas",
        tasks: data.filter((item) => item.completed),
      },
    ],
    [data]
  );

  return (
    <Container>
      <Grid container spacing={2} justifyContent={"center"} mt={2}>
        <Grid item xs={12} md={6}>
          <AddTask
            onAddTask={(task) =>
              setData((prev) => [...prev, { name: task, completed: false }])
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {typeTasks.map((item, i) => (
              <Grid key={i} item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 2,
                  }}
                >
                  <Typography variant="h6">{item.title}</Typography>
                  <List>
                    <ActionsTask data={item.tasks} setData={setData} />
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Activities;
