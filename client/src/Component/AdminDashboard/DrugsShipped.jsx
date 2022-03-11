import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { MdArrowDownward as ArrowDownwardIcon } from 'react-icons/md';
import { FaShippingFast as ShippingIcon } from 'react-icons/fa';
import { red } from '@mui/material/colors';

const DrugsShipped = (props) => (
  <Card
    sx={{ height: '100%' }}
    variant="outlined"
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            {props.title}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            24,000
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 42,
              width: 42
            }}
          >
            <ShippingIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default DrugsShipped;
