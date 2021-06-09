import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginBottom: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const SimpleTextEditor = (props) => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();

  const submitAnswer = (data) => {

  };
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(submitAnswer)}>
      <Controller
        name="text"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            variant="outlined"
            required
            fullWidth
            id="text"
            label={props.label}
            style={{ marginBottom: 20, marginTop: 10 }}
            multiline
            rows={6}
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: `${props.label} cannot be empty!` }}
      />
      <Button variant="contained" color="primary">
        {props.button}
      </Button>
    </form>
  );
};

export default SimpleTextEditor;