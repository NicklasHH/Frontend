import { Typography, Box, Grid, Paper, TextField, Button } from "@mui/material";
import { useState } from "react";

const styles = {
    root: {
        margin: '10px',
        width: '270px',
        height: '300px',
        textAlign: 'center'
    },
};

function Kirjaudu() {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const [viesti, setViesti] = useState('');

    // Funktio painikkeen painallukselle
    const kirjaudu = (e) => {
        setViesti('')
        e.preventDefault();
        const username = (values.username);
        const password = (values.password);

        // tarkista onko tyhjät
        if (username === '' && password === '') {
            setViesti('Syötä käyttäjätunnus ja salasana');
            return;
        }
        if (username === '') {
            setViesti('Syötä käyttäjätunnus');
            return;
        }
        if (password === '') {
            setViesti('Syötä salasana');
            return;
        }
    }

    return (
        <Grid
            container
            justifyContent="center"
        >
            <Paper sx={styles.root} >
                <h2>Kirjaudu sisään</h2>

                <Box component='form'
                    sx={{ '& .MuiTextField-root': { marginBottom: 2, width: 250 } }}
                >
                    <TextField label='Käyttäjätunnus' name='username' value={values.username} onChange={(e) => setValues({ ...values, username: e.target.value })} required /> <br />
                    <TextField label='Salasana' name='password' value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} required /> <br />

                    <Button onClick={(e) => kirjaudu(e)} variant='contained'>Kirjaudu</Button>
                </Box>
                <Typography sx={{ marginTop: 1, color: 'red' }}>{viesti}</Typography>
            </Paper>
        </Grid>
    );
}
export default Kirjaudu;
