import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

const AuthErrors = (props) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {props.errors.join('\n')}
    </Alert>
  );
};

export default AuthErrors;