import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, InputLabel, LinearProgress } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { VacancyAPI } from '../http';
import { Context } from '../App';
import { Redirect, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),

    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),

    }
  },
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
    padding: 10,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

}));
const AddressForm = () => {
  const classes = useStyles();
  const {id} = useParams();
  const { control, handleSubmit, register } = useForm();
  const [locationHidden, setLocationHidden] = useState(false);
  const [vacancy, setVacancy] = useState({});
  const [vacancyUpdated, setVacancyUpdated] = useState(false);
  const [loading, setLoading] = useState(true);

  const { userStore } = useContext(Context);

  const updateVacancy = async (data) => {
    const newVacancy = await VacancyAPI.update(id, data);
    if (newVacancy.success) {
      setVacancyUpdated(true);
    }
  };

  const getVacancy = async () => {
    const vacancyFromDb = await VacancyAPI.getOne(id);
    setVacancy(vacancyFromDb.data);
    setLoading(false)
  };

  useEffect(getVacancy, []);

  if (vacancyUpdated) {
    return <Redirect to={`/vacancy/${id}`}/>;
  }

  return (loading ? <LinearProgress color="secondary"/> :
    <form noValidate onSubmit={handleSubmit(updateVacancy)} className={classes.layout}>
      <Card className={classes.paper}>
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            Update Vacancy
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Controller
                name="title"
                control={control}
                defaultValue={vacancy.title}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="Title"
                    label="Title"
                    value={value}
                    onChange={onChange}
                    fullWidth
                    autoComplete="Title"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={5} justify="space-between">
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel shrink>
                  Type of employment
                </InputLabel>
                <Controller
                  render={({ field: { onChange, value } }) => (
                    <Select value={value} onChange={onChange}>
                      <MenuItem value={true}>Full Time</MenuItem>
                      <MenuItem value={false}>Part Time</MenuItem>
                    </Select>
                  )}
                  name="is_fulltime"
                  control={control}
                  defaultValue={vacancy.is_fulltime}
                />
                <FormHelperText>Please, choose type of your employment</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel shrink>
                  Internship
                </InputLabel>
                <Controller
                  render={({ field: { onChange, value } }) => (
                    <Select value={value} onChange={onChange}>
                      <MenuItem value={true}>Internship</MenuItem>
                      <MenuItem value={false}>Regular job</MenuItem>
                    </Select>
                  )}
                  name="is_internship"
                  control={control}
                  defaultValue={vacancy.is_internship}
                />
                <FormHelperText>Please,choose type of your employment</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={5} justify="space-between">
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  Type of work
                </InputLabel>
                <Controller
                  name="is_remote"
                  defaultValue={vacancy.is_remote}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select value={value} onChange={onChange}>
                      <MenuItem value={false} onClick={() => setLocationHidden(false)}>In the office</MenuItem>
                      <MenuItem value={true} onClick={() => setLocationHidden(true)}>Remotely</MenuItem>
                    </Select>
                  )}
                />
                <FormHelperText>Please,choose type of your work</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display={locationHidden ? 'none' : 'inline-block'}>
                <FormControl>
                  <Controller
                    name="location"
                    control={control}
                    defaultValue={vacancy.location}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        label="Location"
                        value={value}
                        onChange={onChange}
                        fullWidth
                      />
                    )}
                  />
                  <FormHelperText>Please, select the location</FormHelperText>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <Controller
                  name="salary_min"
                  control={control}
                  defaultValue={vacancy.salary_min}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="salary_min"
                      label="From"
                      value={value}
                      onChange={onChange}
                      fullWidth
                    />
                  )}
                />
                <FormHelperText>Minimum salary</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <Controller
                  name="salary_max"
                  control={control}
                  defaultValue={vacancy.salary_max}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="salary_max"
                      label="To"
                      value={value}
                      onChange={onChange}
                      fullWidth
                    />
                  )}
                />
                <FormHelperText>Maximum salary</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel shrink>
                  Experience
                </InputLabel>
                <Controller
                  render={({ field: { onChange, value } }) => (
                    <Select value={value} onChange={onChange}>
                      <MenuItem value="No experience">No experience</MenuItem>
                      <MenuItem value="1-3 years">1-3 years</MenuItem>
                      <MenuItem value="3-6 years">3-6 years</MenuItem>
                      <MenuItem value="6+ years">6+ years</MenuItem>
                    </Select>
                  )}
                  name="experience"
                  control={control}
                  defaultValue={vacancy.experience}
                />
                <FormHelperText>Please, select your working experience</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Controller
            name="description"
            control={control}
            defaultValue={vacancy.description}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="text"
                label="Job description"
                style={{ marginBottom: 20, marginTop: 20 }}
                multiline
                rows={6}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Button variant="contained" color="primary" type="submit">
            Update vacancy
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default AddressForm;