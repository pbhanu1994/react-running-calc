import React from 'react';
import {Grid, Typography} from '@material-ui/core';

export default function NotFound() {
  return (
     <Grid container direction="column" justify="center" alignItems="center" spacing={4} style={{ position: "absolute", top: "40%" }}>
          <Typography variant="h1" color="primary" style={{ fontWeight: "bold" }}>
              404
          </Typography>
          <Typography variant="h2" color="primary">
              Page not found
          </Typography>
      </Grid>
  );
}