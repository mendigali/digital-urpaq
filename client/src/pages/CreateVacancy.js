import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, InputLabel, OutlinedInput } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import VacancySimpleEditor from '../components/VacancySimpleEditor';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),

        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
    
    }},
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    
}));
export default function AddressForm() {
    const classes = useStyles();
    const [employmentType, setEmploymentType] = React.useState(1);
    const [workType, setWorkType] = React.useState(1);
    const handleChange = (event) => {
    setEmploymentType(event.target.value);}
    const handleChange1 = (event) => {
        setWorkType(event.target.value);};
        
  return (
    <React.Fragment>
        <main className={classes.layout}>
        <Card className={classes.paper}>
        <CardContent> 
      <Typography variant="h6" align="center" gutterBottom>
       Create Vacancy
      </Typography>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <TextField
            id="Title"
            name="Title"
            label="Title"
            fullWidth
            autoComplete="Title"
          />
        </Grid>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Type of employment
                </InputLabel>
                <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={employmentType}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                >
                    <MenuItem value={1}>Full Time</MenuItem>
                    <MenuItem value={2}>Part Time</MenuItem>
                </Select>
            <FormHelperText>Please,choose type of your employment</FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Type of work
                </InputLabel>
                <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={workType}
                onChange={handleChange1}
                displayEmpty
                className={classes.selectEmpty}
                >
                    <MenuItem value={1}>In the office</MenuItem>
                    <MenuItem value={2}>Remotely</MenuItem>
                </Select>
            <FormHelperText>Please,choose type of your work</FormHelperText>
            </FormControl>
        </Grid>
        

        <Typography variant="h7" style={{marginLeft:10}} gutterBottom>
            Salary
        </Typography>

        <Grid container style={{marginLeft:10, marginBottom: 30}}>
            <Grid item xs={12} sm={6} >
          <TextField
            id="salary"
            name="salary"
            label="from"
            
            autoComplete=""
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="salary"
            name="salary"
            label="to"
            
            autoComplete=""
          />
        </Grid>
        </Grid>

</Grid>

<VacancySimpleEditor />


        </CardContent>
        </Card>
        </main>
      </React.Fragment>
    );
  }