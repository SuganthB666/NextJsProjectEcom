
// import Link from "next/link";
// import Stack from '@mui/material/Stack';
// import FlipImg from './assets/fkheaderlogo_exploreplus-44005d.ebdad7c0.svg'
// import NavComponent from "./NavBar";

// export default function HomePage(){
//     return(
//     <>
        
//     </>
//     ) 

// }

'use client';

import { useEffect, useState } from 'react';
import { useSearch } from './context/SearchContext';
import StarRating from './StarRating';
import Link from 'next/link';

import * as React from 'react';
import Card from '@mui/material/Card';
// import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


import { height, width } from '@mui/system';
import { LocalMallOutlined } from '@mui/icons-material';

export default function HomePage() {

const theme = useTheme();
const isTabletOrLarger = useMediaQuery(theme.breakpoints.up('md'));

  const { searchValue } = useSearch();

  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchDetails=async()=>{
        const res=await fetch("https://dummyjson.com/products");
        console.log(res)
        const resData=await res.json();
        console.log(resData)
        setData(resData.products)
    }

    fetchDetails();
  },[])


  const StyledButton1 = styled(Button)({
    color:"white",
    backgroundColor: "rgb(30, 201, 42)",
    "&:hover": {
      color: "black",
      backgroundColor: "rgba(6, 176, 17, 1)"
    },
    boxShadow: "none"
  });
  const StyledButton2 = styled(Button)({
    color:"white",
    backgroundColor: "rgba(62, 82, 228, 1)",
    "&:hover": {
      color: "black",
      backgroundColor: "rgba(107, 121, 223, 1)"
    },
    boxShadow: "none"
  });

  console.log(searchValue.length)
  console.log(isTabletOrLarger)

  return (

    // <div style={{ padding: '2rem' }}>
    //   <h2>Search Result:</h2>
    //   <p>{searchValue ? `You searched for: "${searchValue}"` : 'No search yet.'}</p>
    // </div>
    

    <section style={{overflowY:"scroll",height: "100vh",padding: "1rem",boxSizing: "border-box",}}>
        <Stack direction={"row"} justifyContent={"flex-start"} flexWrap={"wrap"} sx={{gap:"20px"}}>
             {data.length > 0 ? 
             (
                  (searchValue.length > 0 ? 
                    data.filter(item =>
                    item.title.toLowerCase().includes(searchValue.toLowerCase())
                    ) : data).map(item => (

                    isTabletOrLarger?(<Link href={`/products/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                        <Card
                            sx={{
                            borderRadius: 2,
                            boxShadow: 3,
                            maxWidth: 330,
                            minWidth: 330,
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: 6,
                                zIndex: 2,
                            },
                            }} >

                            <div style={{ position: 'relative' }}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                width="100%"
                                height="200px"
                            />
                            <Typography
                                component="p"
                                sx={{
                                p: '8px',
                                backgroundColor: 'orange',
                                width: 'max-content',
                                borderRadius: '50px',
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                }}
                            >
                                {item.discountPercentage.toFixed(2)}%
                            </Typography>
                            </div>

                            <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="p"
                                sx={{ color: 'green', textAlign: 'right' }}
                            >
                                ${(item.price-((item.discountPercentage)/100)*item.price).toFixed(2)}{' '}
                                <del style={{ color: 'grey', fontSize: '0.8em' }}>
                                ${item.price }
                                </del>
                            </Typography>

                            <Typography
                                gutterBottom
                                variant="h5"
                                component="p"
                                fontWeight="bold"
                                color="rgb(51, 119, 255)"
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                variant="p"
                                component="p"
                                fontWeight="bold"
                                fontFamily="sans-serif"
                                pb={1}
                            >
                                {item.brand}
                            </Typography>

                            <Typography
                                variant="p"
                                component="p"
                                fontWeight="bold"
                                fontFamily="sans-serif"
                                pb={1}
                            >
                                {item.category}
                            </Typography>

                            <Typography variant="h6" component="p" fontWeight="bold">
                                <StarRating value={item.rating} />
                            </Typography>
                            </CardContent>

                            <CardActions>
                            <Stack
                                width="100%"
                                direction="row"
                                justifyContent="space-between"
                            >
                                <StyledButton1
                                size="small"
                                variant="contained"
                                sx={{
                                    p: '8px',
                                    fontWeight: '900',
                                }}
                                endIcon={<AddShoppingCartIcon />}
                                >
                                ADD TO
                                </StyledButton1>
                                <StyledButton2
                                size="small"
                                variant="contained"
                                sx={{
                                    p: '8px',
                                    fontWeight: '900',
                                }}
                                endIcon={<LocalMallOutlined />}
                                >
                                BUY NOW
                                </StyledButton2>
                            </Stack>
                            </CardActions>
                        </Card>
                        </Link>):(
                    <Link href={`/products/${item.id}`} key={item.id} style={{ textDecoration: 'none',minWidth:"100%" }}>
                        <Card
                            sx={{
                            borderRadius: 2,
                            boxShadow: 3,
                            maxWidth: "100%",
                            minWidth: "100%",
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: 6,
                                zIndex: 2,
                            },
                            }} >

                            <div style={{ position: 'relative' }}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                width="100%"
                                height="200px"
                            />
                            <Typography
                                component="p"
                                sx={{
                                p: '8px',
                                backgroundColor: 'orange',
                                width: 'max-content',
                                borderRadius: '50px',
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                }}
                            >
                                {item.discountPercentage.toFixed(2)}%
                            </Typography>
                            </div>

                            <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="p"
                                sx={{ color: 'green', textAlign: 'right' }}
                            >
                                ${(item.price-((item.discountPercentage)/100)*item.price).toFixed(2)}{' '}
                                <del style={{ color: 'grey', fontSize: '0.8em' }}>
                                ${item.price }
                                </del>
                            </Typography>

                            <Typography
                                gutterBottom
                                variant="h5"
                                component="p"
                                fontWeight="bold"
                                color="rgb(51, 119, 255)"
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                variant="p"
                                component="p"
                                fontWeight="bold"
                                fontFamily="sans-serif"
                                pb={1}
                            >
                                {item.brand}
                            </Typography>

                            <Typography
                                variant="p"
                                component="p"
                                fontWeight="bold"
                                fontFamily="sans-serif"
                                pb={1}
                            >
                                {item.category}
                            </Typography>

                            <Typography variant="h6" component="p" fontWeight="bold">
                                <StarRating value={item.rating} />
                            </Typography>
                            </CardContent>

                            <CardActions>
                            <Stack
                                width="100%"
                                direction="row"
                                justifyContent="space-between"
                            >
                                <StyledButton1
                                size="small"
                                variant="contained"
                                sx={{
                                    p: '8px',
                                    fontWeight: '900',
                                }}
                                endIcon={<AddShoppingCartIcon />}
                                >
                                ADD TO
                                </StyledButton1>
                                <StyledButton2
                                size="small"
                                variant="contained"
                                sx={{
                                    p: '8px',
                                    fontWeight: '900',
                                }}
                                endIcon={<LocalMallOutlined />}
                                >
                                BUY NOW
                                </StyledButton2>
                            </Stack>
                            </CardActions>
                        </Card>
                        </Link>
                    ))

                    )
            ) : (
            <Typography>No Data</Typography>
            )}       
        </Stack>  
    </section>
  );
}
