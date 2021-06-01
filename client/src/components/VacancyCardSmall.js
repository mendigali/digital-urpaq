import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    marginTop: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  answers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const VacancyCardSmall = props => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card className={classes.root} key={props.key}>
      <CardContent>

        <div className={classes.header}>
          <Link color="textPrimary" variant="h5" component={RouterLink} to={`/vacancy/${props.id}`}>{props.title}</Link>


        </div>

        <div className={classes.header}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.username}
          </Typography>
        </div>

        <div className={classes.header}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.date}
          </Typography>
        </div>
      </CardContent>


    </Card>

  );
};

export default VacancyCardSmall;