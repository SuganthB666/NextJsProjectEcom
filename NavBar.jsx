// 'use client';

// import { useState } from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import FlipImg from './assets/fkheaderlogo_exploreplus-44005d.ebdad7c0.svg';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import ClearIcon from '@mui/icons-material/Clear';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import styled from '@emotion/styled';

// // Icos
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import MenuIcon from '@mui/icons-material/Menu';
// // import PersonIcon from '@mui/icons-material/Person';

// export default function NavComponent() {
//   const [value, setValue] = useState('');
//   const theme = useTheme();
//   const isTabletOrLarger = useMediaQuery(theme.breakpoints.up('sm')); // sm = 600px+

//   const handleClear = () => {
//     setValue('');
//   };

//   const StyledButton = styled(Button)({
//     color:"black",
//     backgroundColor:"white",
//     "&:hover":{
//         color:"white",
//         backgroundColor:"#2a55e5"
//     },
//     boxShadow:"none"
//   })

//   return (
//     <nav className="nav-container" style={{ padding: '1rem', background: '#fff' }}>
//       <Stack direction="row" alignItems="center" justifyContent={"center"}sx={{ width: '100%' }} gap={2}>
//         {
//             !isTabletOrLarger && (
//                 <Box>
//                     <MenuIcon />
//                 </Box>
//             )
//         } 
//         <Box>
//             <img src="https://cute-hamster-8de478.netlify.app/_next/static/media/fkheaderlogo_exploreplus-44005d.ebdad7c0.svg" alt="Flipkart" width={150} height={40} />
//         </Box>
         
        
//             {isTabletOrLarger && (
//         <Box sx={{width:"40%",padding:"0px 100px"}}>
//             <TextField
                
//                 size="small"
//                 variant="outlined"
//                 placeholder="Search for Products, Brands and More"
//                 sx={{ width: '100%' ,backgroundColor:"#f0f0f0" ,outline:"none", border:"none",'& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         border: 'none', // ⬅️ removes the default border
//       },
//       '&:hover fieldset': {
//         border: 'none',
//       },
//       '&.Mui-focused fieldset': {
//         border: 'none',
//       },
//     },
//     '& .MuiInputBase-input': {
//       padding: '8px 8px 8px 28px',
      
//       fontSize: '1rem',
//     }, borderRadius:"6px",}}
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//                 InputProps={{
//                 endAdornment:(
//                     <InputAdornment position="end">
//                     <IconButton onClick={handleClear} edge="end">
//                         <ClearIcon />
//                     </IconButton>
//                     </InputAdornment>
//                 ),
//                 }}
//             />
//         </Box>
//             )}   
             
        

//         <Box><StyledButton variant="contained" startIcon={<AccountCircleIcon />}>Login</StyledButton></Box>
//         <Box><StyledButton variant="contained" startIcon={<ShoppingCartIcon />} >Cart</StyledButton></Box>
        
        
//       </Stack>
//     </nav>
//   );
// }


'use client';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import { useSearch } from './context/SearchContext';

export default function NavComponent() {
  const { searchValue, setSearchValue } = useSearch(); // ⬅️ Use shared context
  const theme = useTheme();

  
  const isTabletOrLarger = useMediaQuery(theme.breakpoints.up('sm'));

  const handleClear = () => setSearchValue('');

  const StyledButton = styled(Button)({
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#2a55e5"
    },
    boxShadow: "none"
  });

  return (
    <nav style={{ padding: '1rem', background: '#fff' }}>
      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: '100%' }} gap={2}>
        {!isTabletOrLarger && (
          <Box><MenuIcon /></Box>
        )}

        <Box>
          <img src="https://cute-hamster-8de478.netlify.app/_next/static/media/fkheaderlogo_exploreplus-44005d.ebdad7c0.svg" alt="Flipkart" width={150} height={40} />
        </Box>

        {isTabletOrLarger && (
          <Box sx={{ width: "40%", padding: "0px 100px" }}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search for Products, Brands and More"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{
                width: '100%',
                backgroundColor: "#f0f0f0",
                borderRadius: "6px",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
                '& .MuiInputBase-input': {
                  padding: '8px 8px 8px 28px',
                  fontSize: '1rem',
                }
              }}
              InputProps={{
                endAdornment:  (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClear} edge="end">
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>
        )}

        <Box><StyledButton variant="contained" startIcon={<AccountCircleIcon />}>Login</StyledButton></Box>
        <Box><StyledButton variant="contained" startIcon={<ShoppingCartIcon />}>Cart</StyledButton></Box>
      </Stack>
    </nav>
  );
}
