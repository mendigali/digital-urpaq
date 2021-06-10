import React ,{ useEffect, useState } from 'react';
import { Card, CardActions, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Moment from 'react-moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import { NewsAPI } from '../http';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
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
  button: {
    position: 'absolute', right: 280
  }
}));

const PostCard = ({ id, title, date }) => {
  const classes = useStyles();
  const [news, setNews] = useState({});
  const [open, setOpen] = useState(false)
  const deleteNews = async () => {
    const newsFound = await NewsAPI.deleteOneNews(id);
    if (newsFound.error) {
      console.log(newsFound.error)
    } else {
      setOpen(false)
      setNews(newsFound.data);
    }
  
  };
  const handleRequestClose = () => {
    setOpen(false)
  }
  const clickButton = () => {
    setOpen(true)
  }
  return (
    <Card className={classes.root} key={id}>
      <CardContent>
        <div className={classes.header}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <Moment format="HH:mm DD/MM/YYYY">
              {date}
            </Moment>
          </Typography>
        </div>
        <div className={classes.header}>
          <Link
            color="textPrimary"
            variant="h5"
            component={RouterLink}
            to={`/news/${id}`}
            children={title}
          />
        </div>
      </CardContent>
      <CardActions>
        <Button
          component={RouterLink}
          to={`/news/${id}`}
        >
          Read more
        </Button>
        <div className={classes.button}>

          <Button
            // component={RouterLink}
            // to={`/questions-edit/${props.id}`}
          >
            <EditIcon />
          </Button>

          <IconButton
            variant="contained"
            color="primary"
            style={{ textDecoration: 'none' }}
            onClick={clickButton}
          >
            <DeleteForeverIcon />
          </IconButton>
          <Dialog open={open} onClose={handleRequestClose}>
            <DialogTitle>{"Delete " + title}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Confirm to delete your post "{title}".
                 </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRequestClose} color="primary">
                Cancel
                </Button>
              <Button onClick={deleteNews} color="secondary" autoFocus="autoFocus">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </CardActions>
    </Card>
  );
};

export default PostCard;