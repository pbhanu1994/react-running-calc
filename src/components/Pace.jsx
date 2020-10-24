import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Pace() {
    const [kilometers, setKilometers] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [paceMinutes, setPaceMinutes] = useState(0);
    const [paceSeconds, setPaceSeconds] = useState(0);

    function calculatePace(e) {
        e.preventDefault();

        let totalMinutes = hours * 60 + minutes + seconds / 60,
            pace = totalMinutes / kilometers,
            paceMinutes = Math.floor(pace),
            paceSeconds = Math.round((pace - paceMinutes) * 60);

        if (paceSeconds < 10) {
            paceSeconds = "0" + paceSeconds;
        }
        setPaceMinutes(paceMinutes);
        setPaceSeconds(paceSeconds);
    }

    return (
        <Grid container justify="center" spacing={3} style={{ marginTop: 20}}>
            <form onSubmit={calculatePace}>
                <Grid container justify="center" item spacing={4}>
                    <Grid item>
                        <Typography variant="h4" color="primary">
                            Distance:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" type="number" label="Kilometers" variant="outlined" onChange={e => setKilometers(parseFloat(e.currentTarget.value))} required/>
                    </Grid>
                </Grid>
                <Grid container justify="center" item spacing={4}>
                    <Grid item>
                        <Typography variant="h4" color="primary">
                            Time:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" type="number" label="Hours" variant="outlined" color="primary" onChange={e => setHours(parseFloat(e.currentTarget.value))} required/>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" type="number" label="Minutes" variant="outlined" onChange={e => setMinutes(parseFloat(e.currentTarget.value))} required/>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" type="number" label="Seconds" variant="outlined" onChange={e => setSeconds(parseFloat(e.currentTarget.value))} required/>
                    </Grid>
                </Grid>
                <Grid container justify="center" item spacing={4}>
                    <Grid item>
                        <Button variant="contained" size="large" color="primary" type="submit">
                            Calculate
                        </Button>
                    </Grid>
                </Grid>
                {paceMinutes > 0 && paceSeconds > 0 && <Grid container justify="center" item spacing={4}>
                    <Grid item>
                        <Card>
                            <CardContent style={{ background: 'lavender' }}>
                                <Typography variant="h4" color="primary">
                                    {`You need to run ${paceMinutes}:${paceSeconds} minutes /km`}
                                </Typography>
                            </CardContent>
                         </Card>
                    </Grid>
                </Grid>}
                
            </form>
      </Grid>
  );
}