import backgroundb from '../Media/backgroundb.png'
import CreateIcon from '@mui/icons-material/Create';
import CloseIcon from '@mui/icons-material/Close';
import { unenlaatu } from '../Components/Tiedot.js';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Box, Paper, TextField, Button, Grid, Typography, MenuItem, } from '@mui/material'

const styles = {
    root: {
        backgroundImage: `url(${backgroundb})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '10px',
        margin: '10px',
        width: '270px'
    },
};

function UnilomakeMUI() {

    const [setValues] = useState({
        maara: '',
        pvm: '',
        laatu: '',
        lisatietoja: '',
    });

    const [viesti, setViesti] = useState('');

    // Funktio painikkeen painallukselle
    const lisaaUni = (e) => {
        e.preventDefault();
        setViesti('Uni lisätty');
        setValues({
            maara: '',
            pvm: '',
            laatu: '',
            lisatietoja: '',
        });
    }

    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: 5 }}
        >
            <Paper sx={styles.root}>
                <Box
                    component='form'
                    sx={{ '& .MuiTextField-root': { marginBottom: 2, width: 250 }, }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField label='Unen määrä: ' name='nimi' required />
                    <TextField label='Päivämäärä: ' name='pvm' />

                    <TextField defaultValue="" label="Unenlaatu:" name="unenlaatu" select >
                        {unenlaatu.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField label='Lisätietoja: ' name='lisatietoja' />

                    <Box sx={{ textAlign: 'left' }}>
                        <Button onClick={(e) => lisaaUni(e)} variant='contained' sx={{ marginRight: 3, fontSize: "13px" }} startIcon={<CreateIcon />}>Lisää</Button>
                        <Button color="secondary" variant='contained' component={Link} to='/uni' sx={{ marginLeft: 3, fontSize: "13px" }} startIcon={<CloseIcon />}>Poistu</Button>
                    </Box>
                </Box>

                <Typography sx={{ marginTop: 3 }}>{viesti}</Typography>
            </Paper>
        </Grid>
    );
}
export default UnilomakeMUI;