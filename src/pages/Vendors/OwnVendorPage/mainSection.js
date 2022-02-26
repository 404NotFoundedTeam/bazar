import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import RatingSIze from "../../../components/rating";
import ImageAvatars from "../../../components/Mini-components/Avatar";

export default function MediaCard({ obj }) {
  return (
    <Box mb={2} sx={{ position: "relative", minHeight: "200px" }}>
      <Box>
        <img src={obj.img} alt="image" />
      </Box>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Box
          mx={2}
          sx={{
            boxSizing: "border-box",
            transform: {
              lg: "translateY(-30%)",
              md: "translateY(-15%)",
              sm: "translateY(0)",
            },
            display: "flex",
            width: "100%",
            gap: 4,
          }}
        >
          <ImageAvatars width="120px" height="120px" />
          <Box sx={{ flex: "0.8" }}>
            <Box
              className="topActions"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained">{obj.vendorName}</Button>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                sx={{ boxShadow: "none !important" }}
              >
                <IconButton color="secondary">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary">
                  <InstagramIcon />
                </IconButton>
              </ButtonGroup>
            </Box>
            <Box
              className="bottomActions"
              mt={2}
              sx={{
                justifyContent: "space-between",
                display: "flex",
                p: 2,
                color: "rgb(43, 52, 69)",
              }}
            >
              <Box>
                <RatingSIze score={obj.rating} />{" "}
                <Typography sx={{ marginTop: 3 }}>
                  <LocationOnIcon sx={{ marginRight: 1 }} />
                  {obj.location}
                </Typography>
                <Typography sx={{ marginTop: 3 }}>
                  <PhoneIcon sx={{ marginRight: 1 }} />
                  {obj.phoneNumber}
                </Typography>
              </Box>
              <Box>
                <Button variant="outlined">Contact Vendor</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ` <Box>
//       <Card
//         sx={{
//           position: "relative",
//           "& .css-4ob670-MuiPaper-root-MuiCard-root": {
//             overflow: "visible !important",
//           },
//         }}
//       >
//         <CardMedia component="img" image={obj.img} alt="green iguana" />
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: "-75%",
//             display: "flex",
//             width: "100%",
//             justifyContent: "around",
//             left: 0,
//             "& .MuiPaper-elevation1 , .MuiPaper-elevation": {
//               overflow: "visible !important",
//             },
//           }}
//         >
//           <ImageAvatars width="120px" height="120px" />
//           <Box
//             sx={{
//               flex: 1,
//               minHeight: "200px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-around",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 width: "100%",
//               }}
//             >
//               <Button variant="contained">{obj.vendorName}</Button>
//               <ButtonGroup
//                 variant="contained"
//                 aria-label="outlined primary button group"
//                 sx={{ boxShadow: "none !important" }}
//               >
//                 <IconButton>
//                   <TwitterIcon />
//                 </IconButton>
//                 <IconButton>
//                   <FacebookIcon />
//                 </IconButton>
//                 <IconButton>
//                   <FacebookIcon />
//                 </IconButton>
//                 <IconButton>
//                   <InstagramIcon />
//                 </IconButton>
//               </ButtonGroup>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 backgroundColor: "blue",
//               }}
//             >
//               <Box>
//                 <RatingSIze score={obj.rating} />
//                 <Typography sx={{ marginTop: 3 }}>
//                   <LocationOnIcon sx={{ marginRight: 1 }} />
//                   {obj.location}
//                 </Typography>
//                 <Typography sx={{ marginTop: 3 }}>
//                   <PhoneIcon sx={{ marginRight: 1 }} />
//                   {obj.phoneNumber}
//                 </Typography>
//               </Box>
//               <Box>
//                 <Button variant="outlined">Contact Vendor</Button>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         {/* <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions> */}
//       </Card>
//     </Box>`
