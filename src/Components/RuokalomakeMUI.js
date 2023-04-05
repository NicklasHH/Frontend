import { useState } from "react";
import backgroundb from '../Media/backgroundb.png'
import CreateIcon from '@mui/icons-material/Create';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import {Box, Grid, Paper, TextField, Button, Typography, Rating} from '@mui/material';

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

function RuokalomakeMUI() {
    const [values, setValues] = useState({
        nimi: '',
        pvm: '',
        aika: '',
        lisatietoja: '',
        tahdet: 0,
    });
    const [viesti, setViesti] = useState('');

    // Funktio painikkeen painallukselle
    const lisaaRuoka = (e) => {
        e.preventDefault();
        setViesti('Ruoka lisätty');
        setValues({
            nimi: '',
            pvm: '',
            aika: '',
            lisatietoja: '',
            tahdet: 0,
        });
    }

    const handleTahdetChange = (e, newValue) => {
        setValues({
            ...values,
            tahdet: newValue
        });
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{marginTop: 5}}
        >
            <Paper sx={styles.root}>
                <Box
                    component='form'
                    sx={{ '& .MuiTextField-root': { marginBottom: 2, width: 250 } }}
                >
                    <TextField label='Ruoan nimi: ' name='nimi' required /> 
                    <TextField label='Päivämäärä: ' name='pvm' /> 
                    <TextField label='Aika: ' name='aika' /> 
                    <TextField label='Lisätietoja: ' name='lisatietoja' /> 

                    <Box sx={{ border: 1, borderRadius: '4px', padding: '15px', display: 'flex', borderColor: '#565957' }}>
                        <Typography sx={{ marginRight: '10px' }}>Tähdet:</Typography>
                        <Rating name="tahdet" value={values.tahdet} onChange={handleTahdetChange} />
                    </Box>


                    <Box sx={{ mt: 2,textAlign: 'left' }}>
                        <Button onClick={(e) => lisaaRuoka(e)} variant='contained' sx={{ marginRight: 3, fontSize: "13px" }} startIcon={<CreateIcon />}>Lisää</Button>
                        <Button color='secondary' variant='contained' component={ Link } to='/ruoka' sx={{ marginLeft: 3, fontSize: "13px" }} startIcon={<CloseIcon />}>Poistu</Button>
                    </Box>
                </Box>
                <Typography sx={{ marginTop: 3 }}>{viesti}</Typography>
            </Paper>
        </Grid>
    );
}

export default RuokalomakeMUI;
