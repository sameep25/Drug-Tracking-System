import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { MdArrowUpward as ArrowUpwardIcon, MdOutlinePeople as PeopleIcon } from 'react-icons/md';
import { green, orange } from '@mui/material/colors';

const PatientPrescribed = (props) => (
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
            14,000
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 42,
              width: 42
            }}
          >
            <PeopleIcon />
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
        <ArrowUpwardIcon sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          7%
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

export default PatientPrescribed;
