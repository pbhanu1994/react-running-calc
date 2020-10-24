import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Time() {
    const [kilometers, setKilometers] = useState(0);
    const [paceMinutes, setPaceMinutes] = useState(0);
    const [paceSeconds, setPaceSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [showTime, setShowTime] = useState(false);

    function calculateTime(e) {
        e.preventDefault();

        let paceToSeconds = paceMinutes * 60 + paceSeconds;
        let timeInSeconds = paceToSeconds * kilometers;

        setHours(Math.floor(timeInSeconds / 60 / 60));
        setMinutes(Math.floor(timeInSeconds / 60) - hours * 60);
        setSeconds(timeInSeconds % 60);
        setShowTime(true);
    }

    return (
        <Grid container justify="center" spacing={3} style={{ marginTop: 20}}>
            <form onSubmit={calculateTime}>
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
                            Pace:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" type="number" label="Minutes" variant="outlined" onChange={e => setPaceMinutes(parseFloat(e.currentTarget.value))} required/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" style={{ lineHeight: 1.5 }}>
                            :
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" type="number" label="Seconds" variant="outlined" onChange={e => setPaceSeconds(parseFloat(e.currentTarget.value))} required/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" style={{ lineHeight: 2.5 }}>
                            /km
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" item spacing={4}>
                    <Grid item>
                        <Button variant="contained" size="large" color="primary" type="submit">
                            Calculate
                        </Button>
                    </Grid>
                </Grid>
                {showTime && <Grid container justify="center" item spacing={4}>
                    <Grid item>
                        <Card>
                            <CardContent style={{ background: 'lavender' }}>
                                <Typography variant="h4" color="primary">
                                    {`Your time running is ${hours} : ${minutes} : ${seconds}`}
                                </Typography>
                            </CardContent>
                         </Card>
                    </Grid>
                </Grid>}
            </form>
      </Grid>
  );
}