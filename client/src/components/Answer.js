import React from 'react';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, darcula, solarizedlight, coldarkCold, duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  answer: {
    marginTop: 20
  },
  body: {
    fontSize: '1rem',
    borderRadius: '20px'
  }
});

const Answer = props => {
  const classes = useStyles();

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div"
                           children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props} />
      );
    }
  };

  return (
    <div className={classes.answer} key={props.key}>
      <div className={classes.header}>
        <Typography variant="h6">
          {props.username}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Moment format="HH:mm DD/MM/YYYY">
            {props.date}
          </Moment>
        </Typography>
      </div>
      <ReactMarkdown className={classes.body} components={components} children={props.body}/>
    </div>
  );
};

export default Answer;