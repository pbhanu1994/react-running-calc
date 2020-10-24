import React from 'react';
import {Grid, Typography, Divider} from '@material-ui/core';

export default function Footer() {
  return (
      <Grid container justify="center" style={{ position: "absolute", bottom: 0 }}>
            <Grid item>
                <Divider />
                <Typography variant="h4" style={{ color: "grey" }}>
                    Running Calculator
                </Typography>
            </Grid>
      </Grid>
  );
}