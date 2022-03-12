import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    drugName: 'Morphine', potency: '600 mg', quantity: "1000", unit: 'Tablets'
  },
];

const addresses = ['Near  Kapil road, Bargi Nagar', 'Jabalpur', 'Madhya Pradesh', '99999', 'India'];

export default function Summary() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.drugName} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.drugName} secondary={product.potency} />
            <Typography variant="body2">{product.quantity} {product.unit}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>KVSHA Warehouse</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}