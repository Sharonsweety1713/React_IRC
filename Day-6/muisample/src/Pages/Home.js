import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            C++
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="data:image/png;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Java
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://cdn0.iconfinder.com/data/icons/big-data-77/49/67_Normalization_Dbms_rdbms_database_table_modern_technology_data_connection_data_storage_centralized_network_server-512.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            RDBMS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Python
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
       
      </Grid>
    </Box>
  );
}
