import React from "react";
import { Card, CardContent, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
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
  body: {
    padding: 20
  },
  answersAmount: {
    marginTop: 30,
    marginBottom: 10
  },
  vacancyBody: {
    marginBottom: 30
  },
  userStyle:{
    paddingLeft: 20
  }
}));

export default function VacancyCardSmall(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={props.id}>
      <CardContent>
       
        <div className={classes.header}>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
        </div>

        <div className={classes.header}>
          <Typography className={classes.userStyle} color="textSecondary"  gutterBottom>
            {props.username}
            </Typography>
           
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.date}
          </Typography>
        </div>

        <div className={classes.header}>
          <Typography className={classes.userStyle} color="textSecondary" gutterBottom>
            {props.salary}
          </Typography>
        </div>
        
        <div className={classes.body}>
          <Typography paragraph className={classes.vacancyBody}>
            {props.body}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};