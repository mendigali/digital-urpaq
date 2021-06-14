import React, { useContext, useState } from 'react';
import { Box, Card, CardActions, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Moment from 'react-moment';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { VacancyAPI } from '../http';
import { Context } from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    marginTop: 20
  },
  vacancyInfo: {
    marginTop: 10,
    display: 'flex',
    flexWrap: 'wrap'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const VacancyCardSmall = ({
                            id,
                            title,
                            date,
                            salary_min,
                            salary_max,
                            is_fulltime,
                            description,
                            is_remote,
                            location,
                            experience
                          }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const { userStore, vacancyStore } = useContext(Context);

  const deleteVacancy = async () => {
    const vacancyFound = await VacancyAPI.delete(id);
    vacancyStore.setVacancies(vacancyStore.vacancies.filter(v => v.id !== id));
    if (vacancyFound.error) {
      console.log(vacancyFound.error);
    } else {
      setOpen(false);
    }
  };
  const handleRequestClose = () => {
    setOpen(false);
  };
  const clickButton = () => {
    setOpen(true);
  };

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
        <Typography className={classes.vacancyInfo} variant={'body1'} color="textPrimary">
          <Box mr={5} display={'inline-block'}>{`₸${salary_min}-${salary_max}`}</Box>
          <Box mr={5} display={'inline-block'}>{is_remote ? 'Remote' : 'Office'}</Box>
          <Box mr={5} display={'inline-block'}>{is_fulltime ? 'Full time' : 'Part time'}</Box>
          {is_remote ? '' : <Box display={'inline-block'}>{location}</Box>}
        </Typography>
      </CardContent>
      {userStore.isAuth && (<>
        <CardActions className={classes.actions}>
          <IconButton
            component={RouterLink}
            to={`/vacancy/update/${id}`}
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
        </CardActions>
        <Dialog open={open} onClose={handleRequestClose}>
          <DialogTitle>{'Delete ' + title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Confirm to delete your vacancy "{title}".
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={deleteVacancy} color="secondary" autoFocus="autoFocus">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>)}
    </Card>
  );
};

export default VacancyCardSmall;