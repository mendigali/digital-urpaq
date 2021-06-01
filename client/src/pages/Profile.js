import React, { useContext, useState } from 'react';
import { ButtonGroup, Card, CardContent, CardHeader, makeStyles, Tab, Tabs } from '@material-ui/core';
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
    backgroundColor: red[500],
  },
  card: {
    borderRadius: 0,
    borderBottomLeftRadius: '.5rem',
    borderBottomRightRadius: '.5rem',
  }
}));

const user = {
  id: 11,
  username: 'nosely',
  email: 'nosely@mail.ru',
  password: 'nosely123',
  created_at: '2021-05-08T10:48:06.856Z',
  updated_at: '2021-05-08T10:48:06.856Z',
  user_type_id: 2,
  first_name: 'Temir',
  second_name: 'Mendigali',
  middle_name: 'Kairatuly',
  date_of_birth: '2002-09-13',
  works_at_id: 1,
  photo: 'img'
};

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
        <Box p={3}>
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
  const { questionStore, userStore } = useContext(Context);
  const [value, setValue] = useState(0);

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
                {user.first_name[0]}
              </Avatar>
            }
            action={
              /*<IconButton aria-label="settings">
                <EditIcon/>
              </IconButton>*/
              <ButtonGroup>
                <Button startIcon={<EditIcon/>}>
                  Edit profile
                </Button>
                <Button endIcon={<ExitToAppIcon/>} onClick={logout}>
                  Logout
                </Button>
              </ButtonGroup>
            }
            title={`${user.first_name} ${user.second_name}`}
            subheader={`Registered ${new Date(user.created_at).toDateString()}`}
          />
          <CardContent>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Your questions" {...a11yProps(0)} />
              <Tab label="Your answers" {...a11yProps(1)} />
              <Tab label="Vacancies you applied for" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
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
              Answers
            </TabPanel>
            <TabPanel value={value} index={2}>
              Vacancies
            </TabPanel>
          </CardContent>
        </Card>
      </Container>
      <Footer/>
    </>
  );
};

export default Profile;