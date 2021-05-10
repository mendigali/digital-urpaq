import React from 'react';
import { InputLabel, OutlinedInput } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginBottom: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(50),
  },
  textField: {
    width: '25ch',
  },
}));

export default function VacancySimpleEditor() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    text: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <form noValidate autoComplete="off">
      {/*<TextField id="standard-basic" label="Your answer" />*/}
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.text}
          multiline
          rows={8}
          onChange={handleChange('amount')}
          labelWidth={80}
        />
      </FormControl>
      <Button variant="contained" color="primary" style={{float: "right"}}>
        Add vacancy
      </Button>
    </form>
  );
}