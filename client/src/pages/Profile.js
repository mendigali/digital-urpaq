import React, { useContext, useState } from 'react';
import { ButtonGroup, Card, CardContent, CardHeader, makeStyles, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QuestionCard from '../components/QuestionCard';
import { Context } from '../App';
import Footer from '../components/Footer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link as RouterLink } from 'react-router-dom';
import PostCard from '../components/PostCard';
import VacancyCardSmall from '../components/VacancyCardSmall';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  card: {
    borderRadius: 0,
    borderBottomLeftRadius: '.5rem',
    borderBottomRightRadius: '.5rem',
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

/*TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};*/

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Profile = () => {
  const { questionStore, userStore, newsStore, vacancyStore } = useContext(Context);
  const [value, setValue] = useState(0);

  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const buttonProps = {
    orientation: isSmallScreen ? "vertical" : "horizontal",
    size: isSmallScreen ? "small" : "medium"
  };

  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <>
      <Container maxWidth={'lg'}>
        <Card classes={{ root: classes.card }} elevation={2}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {userStore.user.personal?.first_name ? userStore.user.personal?.first_name[0].toUpperCase() : 'A'}
              </Avatar>
            }
            action={
              /*<IconButton aria-label="settings">
                <EditIcon/>
              </IconButton>*/
              <ButtonGroup {...buttonProps}>
                {userStore.user.personal ?
                  <Button startIcon={<EditIcon/>} component={RouterLink} to={`/profile/update/${userStore.user.id}`}>
                    Edit profile
                  </Button>
                  :
                  <Button startIcon={<EditIcon/>} component={RouterLink} to="/profile/create">
                  Add profile info
                  </Button>
                }
                <Button endIcon={<ExitToAppIcon/>} onClick={logout}>
                  Logout
                </Button>
              </ButtonGroup>
            }
            title={`${userStore.user.personal?.first_name ? userStore.user.personal?.first_name + " " + userStore.user.personal?.second_name : 'Anonymous'}`}
            subheader={`Registered ${new Date(userStore.user.created_at).toDateString()}`}
          />
          <CardContent>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="scrollable" scrollButtons="auto">
              <Tab label="Your questions" {...a11yProps(0)} />
              <Tab label="Your news" {...a11yProps(1)} />
              <Tab label="Your vacancies" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              {questionStore.questions.length > 0 ? '' : 'You didn\'t ask any questions yet.'}
              {
                questionStore.questions
                  .filter(({ user_id }) => user_id === userStore.user.id)
                  .map(({
                          id,
                          title,
                          created_at,
                          difficulty,
                          amountOfAnswers
                        }) => (
                    <QuestionCard
                      key={id}
                      id={id}
                      title={title}
                      date={created_at}
                      rating={difficulty}
                      amountOfAnswers={amountOfAnswers}
                    />
                  ))
              }
            </TabPanel>
            <TabPanel value={value} index={1}>
              {newsStore.posts.length > 0 ? '' : 'You didn\'t make any posts.'}
              {
                newsStore.posts
                  .filter(({ author_id }) => author_id === userStore.user.id)
                  .map(({ id, title, created_at }) => (
                    <PostCard
                      key={id}
                      id={id}
                      title={title}
                      date={created_at}
                    />
                  ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {vacancyStore.vacancies.length > 0 ? '' : 'You didn\'t add any vacancies.'}
              {
                vacancyStore.vacancies
                  .filter(({ user_id }) => user_id === userStore.user.id)
                  .map(({
                          id,
                          title,
                          date,
                          salary_min,
                          salary_max,
                          location,
                          is_remote,
                          is_fulltime,
                          description
                        }) => (
                    <VacancyCardSmall
                      key={id}
                      id={id}
                      title={title}
                      date={date}
                      salary_min={salary_min}
                      salary_max={salary_max}
                      is_remote={is_remote}
                      is_fulltime={is_fulltime}
                      location={location}
                      description={description}
                    />
                  ))
              }
            </TabPanel>
          </CardContent>
        </Card>
      </Container>
      <Footer/>
    </>
  );
};

export default Profile;