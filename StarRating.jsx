'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function StarRating({ value }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating
        name="user-rating"
        value={parseFloat(value)}
        precision={0.5} // Allows partial stars like 2.7
        readOnly
      />
      <Typography sx={{ ml: 1 }} variant='span' component={"span"}></Typography>
    </Box>
  );
}
