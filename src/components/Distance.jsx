import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Distance() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [paceMinutes, setPaceMinutes] = useState(0);
    const [paceSeconds, setPaceSeconds] = useState(0);
    const [finalDistance, setFinalDistance] = useState(0);

    function calculateDistance(e) {
        e.preventDefault();

        let paceToSeconds = paceMinutes * 60 + paceSeconds,
            timeToSeconds = hours * 3600 + minutes * 60 + seconds;

        setFinalDistance(parseFloat((timeToSeconds / paceToSeconds).toFixed(2)));
    }

    return (
        <Grid container justify="center" spacing={3} style={{ marginTop: 20}}>
            <form onSubmit={calculateDistance}>
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
                {finalDistance > 0 && <Grid container justify="center" item spacing={4}>
                    <Grid item>
                        <Card>
                            <CardContent style={{ background: 'lavender' }}>
                                <Typography variant="h4" color="primary">
                                    {`Your running distance is ${finalDistance} kilometers`}
                                </Typography>
                            </CardContent>
                         </Card>
                    </Grid>
                </Grid>}
                
            </form>
      </Grid>
  );
}