import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Coins from './components/Coins';

const queryClient = new QueryClient();

const useStyles = makeStyles((theme) => ({
  heading: {
    padding: '3rem 1rem',
    fontSize: '35px',
    letterSpacing: '2px'
  },
}));

const App = () => {
  const classes = useStyles()
  
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth='lg'>
        <Grid container justify='center' className='py-4'>
          <Typography variant='h4' className={classes.heading}>Cryptocurrency Tracker</Typography>
        </Grid>
        <Coins />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
