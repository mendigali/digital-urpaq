import React, { useContext, useState } from 'react';
import { Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Moment from 'react-moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import { QuestionAPI } from '../http';
import Box from '@material-ui/core/Box';
import { Context } from '../App';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 200,
    marginTop: 20,
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
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
}));

const QuestionCard = props => {
  const classes = useStyles();
  // const [question, setQuestion] = useState({});
  const [open, setOpen] = useState(false);
  const { questionStore, userStore } = useContext(Context);
  const deleteQuestion = async () => {
    const questionFound = await QuestionAPI.deleteOneQuestion(props.id);
    questionStore.setQuestions(questionStore.questions.filter(q => q.id !== props.id));
    if (questionFound.error) {
      console.log(questionFound.error);
    } else {
      setOpen(false);
      // setQuestion(questionFound.data);
    }
  };
  const handleRequestClose = () => {
    setOpen(false);
  };
  const clickButton = () => {
    setOpen(true);
  };
  return (
    <Card className={classes.root} key={props.id}>
      <CardContent>
        <div className={classes.header}>
          <Rating name="size-small" defaultValue={props.rating} precision={0.5} size="small" readOnly/>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <Moment format="HH:mm DD/MM/YYYY">
              {props.date}
            </Moment>
          </Typography>
        </div>
        <div className={classes.header}>
          <Link color="textPrimary" variant="h5" component={RouterLink}
                to={`/questions/${props.id}`}>{props.title}</Link>
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
      <CardActions className={classes.buttons}>
        <Button
          component={RouterLink}
          to={`/questions/${props.id}`}
        >
          View answers
        </Button>
        {userStore.isAuth && (<>
          <Box display="flex">
            <IconButton
              component={RouterLink}
              to={`/question/update/${props.id}`}
            >
              <EditIcon/>
            </IconButton>
            <IconButton
              variant="contained"
              color="primary"
              onClick={clickButton}
            >
              <DeleteForeverIcon/>
            </IconButton>
          </Box>
          <Dialog open={open} onClose={handleRequestClose}>
            <DialogTitle>{'Delete ' + props.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Confirm to delete your question "{props.title}".
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRequestClose} color="primary">
                Cancel
              </Button>
              <Button onClick={deleteQuestion} color="secondary" autoFocus="autoFocus">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </>)}
      </CardActions>
    </Card>
  );
};

export default QuestionCard;