import React, {useEffect, useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {withStyles} from '@material-ui/core/styles'
import {Link, Redirect} from 'react-router-dom'
import {QuestionAPI} from '../http';
import { Link as RouterLink } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  card: {
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    maxWidth: 500,
    paddingBottom: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle,
    fontSize: '1.2em'
  },
  error: {
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 'auto'
  },
  input: {
    display: 'none'
  },
  filename:{
    marginLeft:'10px'
  }
}))

export default function EditQuestion({match}) {
  const classes = useStyles()
  const [values, setValues] = useState({
      title: '',
      text: '',
      difficulty: '',
      redirect: false,
      error: ''
    })
  
    const [question, setQuestion,setUpdate] = useState({});
    const getQuestion = async () => {
        const questionFound = await QuestionAPI.getOne(match.id);
        setQuestion(questionFound.data);
      };
    const updateQuestion = async () => {
      const questionFound = await QuestionAPI.update(match.id);
      setUpdate(questionFound.data);
    };

  const clickSubmit = () => {
    let questionData = new FormData()
    values.title && questionData.append('title', values.title)
    values.text && questionData.append('text', values.text)
    values.difficulty && questionData.append('difficulty', values.difficulty)
  
  
    updateQuestion({
      questionId: match.id
    }, questionData).then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, 'redirect': true})
      }
    })
  }
  const handleChange = title => event => {
    const value = title === 'image'
      ? event.target.files[0]
      : event.target.value
    setValues({...values,  [title]: value })
  }
    if (values.redirect) {
      return (<Redirect to={`/questions/${match.id}`}/>)
    }
    return (<div>
      <Card className={classes.card}>
        <CardContent>

          <Typography type="headline" component="h2" className={classes.title}>
            Edit Question
          </Typography><br/>
          <TextField id="difficulty" label="difficulty" className={classes.textField} value={values.difficulty} onChange={handleChange('difficulty')} margin="normal"/><br/>
          <TextField id="title" label="Title" className={classes.textField} value={values.title} onChange={handleChange('title')} margin="normal"/><br/>
          <TextField
            id="text"
            label="Description"
            multiline
            rows="3"
            value={values.text}
            onChange={handleChange('text')}
            className={classes.textField}
            margin="normal"
          /><br/>
          
          {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Update</Button>
          <Button variant="contained" component={RouterLink} to={`/questions`} className={classes.submit}>Cancel</Button>
        </CardActions>
      </Card>
    </div>)
}