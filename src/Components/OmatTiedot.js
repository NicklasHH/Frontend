import * as React from 'react';
import { munTiedot } from './Tiedot.js';
import {Card, CardHeader, CardContent, CardActions, Typography, Stack, Button,} from '@mui/material';


function OmatTiedot() {
  return (
    <Stack gap={5}>
      <Stack spacing={2} alignItems="center">
        <Card sx={{ width: 'auto', height: 'auto', margin: 5, }}>
          <CardHeader title={'Terve ' + munTiedot.tunnus.toUpperCase() + '!'} />
          <CardContent>
            <Typography>Etunimi: {munTiedot.enimi}</Typography>
            <Typography>Sukunimi: {munTiedot.snimi}</Typography>
            <Typography>sähköposti: {munTiedot.email}</Typography>
            <Typography>Puhelin: {munTiedot.puh}</Typography>
          </CardContent>
          <CardActions style={{justifyContent: 'center'}}>
            <Button variant="outlined">Muokkaa tietoja</Button>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  )
}
export default OmatTiedot;