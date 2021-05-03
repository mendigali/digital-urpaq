import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import Box from "@material-ui/core/Box";

export default function Footer() {
  return (
    <Box mt={5} mb={5}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Digital Urpaq
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}