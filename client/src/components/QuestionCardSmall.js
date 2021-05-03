import React from "react";
import { Card, CardActions, CardContent, Collapse } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

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
}));

export default function QuestionCardSmall(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} key={props.key}>
      <CardContent>
        <div className={classes.header}>
          <Rating name="size-small" defaultValue={props.rating} precision={0.5} size="small" readOnly/>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.date}
          </Typography>
        </div>
        <div className={classes.header}>
          <Link color="textPrimary" variant="h5" component={RouterLink} to={`/questions/${props.id}`}>{props.title}</Link>
          {/*<Typography variant="h5" component={RouterLink} to={`/questions/${props.id}`}>*/}
          {/*  {props.title}*/}
          {/*</Typography>*/}
          <div className="answers">
            <Typography variant="h5" align="center">
              {props.amountOfAnswers}
            </Typography>
            <Typography variant="body1" align="center">
              answers
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          Preview answers
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};