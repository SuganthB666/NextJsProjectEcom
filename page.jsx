'use client';

import { useEffect, useState,use } from "react";
import { useParams } from "next/navigation";

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';



import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';


export default function Products(props){
    
    const params = use(props.params); // <-- unwrap the Promise
    const id = params.id;

    const theme = useTheme();
    const isTabletOrLarger = useMediaQuery(theme.breakpoints.up('md'));

    console.log(isTabletOrLarger)
    const[data,setData]=useState([]);
    const [loading, setLoading] = useState(false)

    const fetchProduct=async()=>{
        try {
            setLoading(true)
            const res=await fetch(`https://dummyjson.com/products/${id}`)
            console.log(res)
            const productData=await res.json();
            console.log(productData)
            setData(productData)
            console.log(data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
            
        }

    useEffect(()=>{
        
        fetchProduct()
    },[])


    return(
        <>
             {/* <h1>Product {id}</h1> */}
             {loading ? <Typography>Loading...</Typography> : (
            <Grid container gap={"10px"}>
                <Grid item size={{ xs:12 , md:5}} p={2}>
                    {
                        isTabletOrLarger && (
                            
                            <Box sx={{textAlign:"center",position:"sticky",top:"10px"}}>
                                <Typography pr={6} sx={{textDecoration:"none",fontWeight:"bold"}}><Link href="/" style={{color:"black",textDecoration:"none"}}>Home</Link>{" | "} <Link href={`/products/${id}`}>{data.title}</Link></Typography>
                                <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                                    <Box sx={{border:"1px solid #e8e8e8ff",minWidth:"330px",padding:"40px"}} >
                                        <img src={data.thumbnail} alt="" width={"250px"}/>
                                    </Box>
                                </Box>
                                <Box sx={{display:"flex",justifyContent:"flex-end",gap:"145px",padding:"10px 0px"}}>
                                    <Button variant="contained" endIcon={<AddShoppingCartSharpIcon />} sx={{backgroundColor:"#eb9431ff",padding:"10px"}}>Add to Cart</Button>
                                    <Button variant="contained" endIcon={<AddShoppingCartSharpIcon />} sx={{backgroundColor:"#ed4c4cff"}}>Buy Now</Button>
                                </Box>
                            </Box>
                        )
                        
                    }
                    {
                        !isTabletOrLarger && (
                            
                            <Box sx={{width:"100%"}}>
                                <Typography><Link href="/">Home</Link>{" | "} <Link href={`/products/${id}`}>{data.title}</Link></Typography>
                                <Box sx={{display:"flex",justifyContent:"center",border:"1px solid #e8e8e8ff"}}>
                                    <img src={data.images} alt="" width={"400px"} height={"300px"}/>
                                </Box>
                                <Box sx={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
                                    <Button variant="contained" endIcon={<AddShoppingCartSharpIcon />} sx={{backgroundColor:"#eb9431ff"}}>Add to Cart</Button>
                                    <Button variant="contained" endIcon={<AddShoppingCartSharpIcon />} sx={{backgroundColor:"#ed4c4cff"}}>Buy Now</Button>
                                </Box>
                            </Box>
                        )
                    }
                </Grid>
                <Grid item size={{ xs: 12 ,md:6 }} p={2}>{/* sx={{border:"1px solid"}} */}
                    {
                        Object.keys(data).length !== 0 ?
                            <Box>
                                <Typography>{data.title}</Typography>
                                <Typography> <Typography component={"span"} sx={{backgroundColor:"#458d64ff",padding:"4px",borderRadius:"5px",color:"white"}}>{data.rating}</Typography> {data.reviews.length} Reviews</Typography>
                                <Typography sx={{color:"#077d3aff",padding:"4px 0px"}}>special Price</Typography>
                                <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>${(data.price-((data.discountPercentage)/100)*data.price).toFixed(2)} <Typography component={"del"} sx={{fontSize:"18px",color:"grey"}}>${data.price}</Typography> <Typography component={"span"} sx={{fontSize:"18px",color:"green"}}>${data.discountPercentage} % off</Typography></Typography>
                                <Typography  variant="h5">Available Offers</Typography>
                                <Typography sx={{fontSize:"14px",padding:"5px 0px"}}> <Typography sx={{fontWeight:"bold",fontSize:"inherit"}} component={"span"}>Bank Offer5%</Typography> cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter <Typography component={"span"} sx={{color:"#307df1ff"}}>T&C</Typography></Typography>
                                <Typography sx={{fontSize:"14px",padding:"5px 0px"}}> <Typography sx={{fontWeight:"bold",fontSize:"inherit"}} component={"span"}>Bank Offer10%</Typography> off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above <Typography component={"span"} sx={{color:"#307df1ff"}}>T&C</Typography></Typography>
                                <Typography sx={{fontSize:"14px",padding:"5px 0px"}}> <Typography sx={{fontWeight:"bold",fontSize:"inherit"}} component={"span"}>Bank Offer10%</Typography> off up to ₹1,250 on IDFC FIRST Bank Credit EMI Txns on orders of ₹5,000 and above <Typography component={"span"} sx={{color:"#307df1ff"}}>T&C</Typography></Typography>
                                <Typography sx={{fontSize:"14px",padding:"5px 0px"}}> <Typography sx={{fontWeight:"bold",fontSize:"inherit"}} component={"span"}>Special Price Get</Typography> extra 22% off (price inclusive of cashback/coupon) <Typography component={"span"} sx={{color:"#307df1ff"}}>T&C</Typography></Typography>
                                <Typography sx={{fontSize:"14px",padding:"5px 0px"}}> <Typography sx={{fontWeight:"bold",fontSize:"inherit"}} component={"span"}>No Cost</Typography> EMI on Bajaj Finserv EMI Card on cart value above ₹2999 <Typography component={"span"} sx={{color:"#307df1ff"}}>T&C</Typography></Typography>
                                <Typography sx={{fontSize:"14px",padding:"5px 0px"}}> <Typography sx={{fontWeight:"bold",fontSize:"inherit"}} component={"span"}>Bank Offer Flat</Typography> ₹10 Instant Cashback on Paytm UPI Trxns. Min Order Value ₹500. Valid once per Paytm account <Typography component={"span"} sx={{color:"#307df1ff"}}>T&C</Typography></Typography>

                                <Box>
                                    <table  style={{border:"1px solid #e8e8e8ff",font:"inherit",textAlign:"left",borderCollapse:"collapse"}} width={"100%"} cellPadding={"10px"}>
                                        <thead>
                                            <tr style={{border:"2px solid #e8e8e8ff"}}>
                                                {/* th style={{padding:"30px 10px"}}>Specifications</th> */}
                                                <Typography variant="h5" component={"th"} style={{padding:"30px 10px"}}>Specifications</Typography>
                                            </tr>
                                            
                                        </thead>
                                        <tbody>
                                            
                                            <Typography variant="h6" component={"p"} sx={{padding:"10px 10px",border:"none"}}>General</Typography>

                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Sales Package</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Smartwatch, Magnetic Charger, User Manual, Warranty Card</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Model Number</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>wrb-sw-colorfiticon2-std-blk_blk</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Model Name</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Colorfit Icon 2 1.8'' Display with Bluetooth Calling, AI Voice Assistant</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Dial Color</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Black</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Dial Shape</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Rectangle</Typography>
                                            </tr>
                                             <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Strap Color</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Black</Typography>
                                            </tr>
                                             <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Strap Material</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Silicone</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Size</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Regular</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Water Resistant</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Usage</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Fitness & Outdoor</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Dial Material</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Polycarbonate</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Ideal For</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Men & Women</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Compatible OS</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Android & iOS</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Brand Strap ColorUsage</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Brand Strap Color</Typography>
                                            </tr>
                                            <tr style={{borderTop:"2px solid #e8e8e8ff"}}>
                                                {/* th style={{padding:"30px 10px"}}>Specifications</th> */}
                                                <Typography variant="h6" component={"th"} style={{padding:"10px 10px"}}>Product Details</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Closure</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Buckle</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Sensor</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Heart Rate, SpO2</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Compatible Device</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>iPhone, Android Smartphones</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Notification</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Smart Notifications (Calls, Text, Email, Social Media App Alerts, Weather), Alarm Clock, Calendar Alerts</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Notification Type</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Vibration</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Charge Time</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>2 hours</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Battery Life</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Upto 7 daysVibration</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Rechargeable Battery</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Charger Type</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Magnetic Charger</Typography>
                                            </tr>
                                            <tr style={{borderTop:"2px solid #e8e8e8ff"}}>
                                                {/* th style={{padding:"30px 10px"}}>Specifications</th> */}
                                                <Typography variant="h6" component={"th"} style={{padding:"10px 10px"}}>ConnectivityFeatures</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Call Function</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Bluetooth</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Messaging Support</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Email Support</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Operating Range</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>10 m</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Call Features</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Reject Calls, Take Calls, Speed Dial</Typography>
                                            </tr>
                                            <tr style={{borderTop:"2px solid #e8e8e8ff"}}>
                                                {/* th style={{padding:"30px 10px"}}>Specifications</th> */}
                                                <Typography variant="h6" component={"th"} style={{padding:"10px 10px"}}>CameraAndDisplayFeatures</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Display Resolution</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>240 x 286 pixel</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Display Size</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>1.8 inch</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Scratch Resistant</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr style={{borderTop:"2px solid #e8e8e8ff"}}>
                                                {/* th style={{padding:"30px 10px"}}>Specifications</th> */}
                                                <Typography variant="h6" component={"th"} style={{padding:"10px 10px"}}>FitnessAndWatchFunctions</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Calorie Count</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Step Count</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Heart Rate Monitor</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Date & Time Display</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Calendar</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Alarm Clock</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr style={{borderTop:"2px solid #e8e8e8ff"}}>
                                                {/* th style={{padding:"30px 10px"}}>Specifications</th> */}
                                                <Typography variant="h6" component={"th"} style={{padding:"10px 10px"}}>AudioAndVideoFeatures</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Speaker</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Microphone</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Gesture Control</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Change Music, Answer Calls</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Voice Control</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Yes</Typography>
                                            </tr>
                                            <tr style={{borderTop:"2px solid #e8e8e8ff"}}>
                                                {/* th style={{padding:"30px 10px"}}>Specifications</th> */}
                                                <Typography variant="h6" component={"th"} style={{padding:"10px 10px"}}>Warranty</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Warranty Summary</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>1 Year Manufacturer Warranty</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Warranty Service Type</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Contact - productfeedback@nexxbase.com | support.gonoise.com | +91 8882132132</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Covered in Warranty</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Manufacturing Defects</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Not Covered in Warranty</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>Physical Damage</Typography>
                                            </tr>
                                            <tr>
                                                <Typography  component={"td"} sx={{color:"grey",fontSize:"14px"}}>Domestic Warranty</Typography>
                                                <Typography  component={"td"} sx={{fontSize:"14px"}}>1 Year</Typography>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Card sx={{padding:"10px",marginTop:"8px"}}>
                                        <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                                            <Typography component={"p"}>reviews</Typography>
                                            <ArrowDropUpIcon></ArrowDropUpIcon>
                                        </Box>
                                        <Box width={"100%"} className="review-container" sx={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",gap:"15px",alignItems:"center"}}>
                                            {
                                                data.reviews.length >=1?data.reviews.map((item)=>(
                                                    <Box sx={{width:"98%"}}>
                                                        <Card sx={{padding:"15px"}}>
                                                            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                                                <Typography variant="h6" component={"p"} color="rgb(51, 119, 255)">{item.reviewerName}</Typography>
                                                                {
                                                                    item.rating >= 4 ?
                                                                        <Stack spacing={1} >
                                                                            
                                                                            <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly sx={{color:"green"}}/>
                                                                        </Stack>
                                                                    :
                                                                    <Stack spacing={1}>      
                                                                            <Rating name="half-rating-read" value={parseFloat(item.rating)} precision={0.5} readOnly />
                                                                    </Stack>
                                                                }
                                                            </Box>
                                                            <Typography>{item.reviewerEmail}</Typography>
                                                            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                                                <Typography>{item.comment}</Typography>
                                                                <Typography sx={{fontSize:"14px",color:"grey"}}>{item.date}</Typography>
                                                            </Box>
                                                        </Card>
                                                    </Box>
                                                )):null
                                            }
                                            
                                            
                                        </Box>
                                    </Card>
                                    
                                </Box>
                            </Box>
                        
                        :""
                    }
                    
                </Grid>
            </Grid>
             )}
            

        </>
       
    )
}