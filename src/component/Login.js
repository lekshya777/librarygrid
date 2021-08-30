import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Login() {
    return (
        <Grid container>
<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>



</Grid>

<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

<Typography>LIBRARY APP</Typography>
<TextField 
type="text"
variant="outlined"
label="Book Title"
required
fullWidth
margin="normal"
/>
<TextField
type="text"
variant="outlined"
label="Description"
margin="normal"
required
fullWidth
/>
<TextField 
type="text"
label="Publisher name"
margin="normal"
required
fullWidth
variant="outlined"
/>
<TextField
type="text"
label="Author"
margin="normal"
required
fullWidth
variant="outlined"
/>
<TextField 
type="text"
label="Distributor name"
required
fullWidth
margin="normal"
variant="outlined"
/>
<Button
TYPE="submit"
margin="normal"
color="secondary"
fullWidth
variant="contained"


>SUBMIT</Button>
</Grid>
<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>



</Grid>


        </Grid>
    )
}

