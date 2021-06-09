import React from 'react';
import { Box, Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    marginTop: 20
  },
  vacancyInfo: {
    marginTop: 10,
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

const VacancyCardSmall = ({ id, title, date, salary_min, salary_max, is_fulltime, is_remote, location, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          <Moment format="DD/MM/YYYY">
            {date}
          </Moment>
        </Typography>
        <Link color="textPrimary" variant="h5" component={RouterLink} to={`/vacancy/${id}`}>
          {title}
        </Link>
        <Typography className={classes.vacancyInfo} variant={'body1'} color="textPrimary" gutterBottom>
          <Box mr={5} display={'inline-block'}>{`₸${salary_min}-${salary_max}`}</Box>
          <Box mr={5} display={'inline-block'}>{is_remote ? 'Remote' : 'Office'}</Box>
          <Box mr={5} display={'inline-block'}>{is_fulltime ? 'Full time' : 'Part time'}</Box>
          <Box display={'inline-block'}>{location}</Box>
        </Typography>
        {description && <Typography variant={'body1'} style={{marginTop: 10}}>{description}</Typography>}
      </CardContent>
    </Card>
  );
};

export default VacancyCardSmall;