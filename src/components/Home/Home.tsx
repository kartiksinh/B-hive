import { useSelector } from "react-redux";

import { ReactComponent as Video } from "../../assests/images/Coworking.svg";
import header from "../../assests/images/Header.png";
import vectorImg from "../../assests/images/Vector 6.png";
import backgroundImage1 from "../../assests/images/backg2.png";
import backgroundImage2 from "../../assests/images/background2.png";
import communityEvents1 from "../../assests/images/communiyt.png";
import communityEvents2 from "../../assests/images/community1.png";
import gymIcon from "../../assests/images/Gym.png";
import wifiIcon from "../../assests/images/wiFi.png";
import cafeIcon from "../../assests/images/cafe.png";
import affordableIcon from "../../assests/images/affordable.png";
import loungesIcon from "../../assests/images/lounges.png";
import bookingIcon from "../../assests/images/booking.png";
import sportsIcon from "../../assests/images/sports.png";
import space1 from "../../assests/images/img1.jpg";
import space2 from "../../assests/images/img2.jpg";
import space3 from "../../assests/images/img3.jpg";
import space4 from "../../assests/images/img4.jpg";
import space5 from "../../assests/images/img5.jpg";
import directionIcon from "../../assests/images/6km.png";
import arrow1Icon from "../../assests/images/arrow1.png";
import arrow2Icon from "../../assests/images/arrow2.png";
import arrow3Icon from "../../assests/images/arrow3.png";
import mobileIcon from "../../assests/images/bhive1.png";
import googlePlayIcon from "../../assests/images/gplay.png";
import appStoreIcon from "../../assests/images/appstore.png";

import mobileIcon2 from "../../assests/images/bhive2.png";

import { Container, Grid, Typography } from "@mui/material";
import { useMediaQuery } from "@material-ui/core";

const Home = () => {
  const workingSpaces = useSelector((state: any) => state.workingSpaces);
  const imageArray = [space1, space2, space3, space4, space5];
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Grid mb={4}>
        <img src={header} alt="header" style={{ width: "100%", zIndex: 999 }} />
      </Grid>
      <Container className="container">
        <Grid container spacing={5} alignItems="center">
          <Grid
            item
            width={929}
            height={525}
            md={8}
            display="flex"
            direction="column"
            justify-center
            sx={{
              // backgroundImage: `url(${backgroundImage1})`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // color: "#f9f9f9",
              position: "relative",
            }}
          >
            <Grid
              className="back-img"
              md={12}
              width={929}
              height={525}
              sx={{
                backgroundImage: `url(${backgroundImage1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#f9f9f9",
                // position: "relative",
              }}
            ></Grid>

            <Typography
              fontSize={isMobile ? 20 : 58}
              fontWeight={isMobile ? 600 : 700}
              width={isMobile ? 322 : 806}
              height={isMobile ? 62 : 254}
              align="center"
              style={{
                color: "#000",
                lineHeight: "70px",
                top: "170px",
                position: "absolute",
              }}
            >
              Host your meeting with world-class amenities. Starting at{" "}
              <span style={{ color: "#ffcf4b" }}>₹199/-!</span>
            </Typography>
            <img
              className="hideInMobileView"
              src={vectorImg}
              alt="vector-img"
              style={{
                width: "90px",
                height: "101px",
                position: "absolute",
                top: "86px",
                left: "260px",
              }}
            />
          </Grid>

          <Grid item md={4}>
            <div
              style={{
                backgroundImage: `url(${backgroundImage2})`,
                backgroundSize: "cover",
                backgroundPosition: "90% 0%",
              }}
            >
              <Video
                height={isMobile ? 320 : 388}
                width={isMobile ? 320 : 388}
              />
            </div>
          </Grid>
        </Grid>

        <Grid mt={5} mb={15}>
          <Grid className="typography-2" mb={7}>
            Why Choose Us?
          </Grid>
          <Grid container mb={5}>
            <Grid item container pb={2}>
              <Grid item md={3} className="specifications" sm={6}>
                <Grid mr={2.5}>
                  <img
                    src={communityEvents1}
                    className="comm-events"
                    alt="community-events"
                  />
                  <img
                    src={communityEvents2}
                    className="comm-events2"
                    alt="community-events"
                  />
                </Grid>
                <Grid className="typography-3">Community Events</Grid>
              </Grid>
              <Grid item md={3} sm={6} className="specifications">
                <img src={gymIcon} className="gym-wifi" alt="gym" />
                <Grid className="typography-3">Gym Facilities</Grid>
              </Grid>
              <Grid item md={3} sm={6} className="specifications">
                <img src={wifiIcon} className="gym-wifi" alt="wi-fi" />
                <Grid className="typography-3">High Speed Wi-Fi</Grid>
              </Grid>
              <Grid item md={3} sm={6} className="specifications">
                <img src={cafeIcon} className="comm-events1" alt="cafe-img" />
                <Grid className="typography-3">Cafe & Tea Bar</Grid>
              </Grid>
            </Grid>
            <Grid item container pt={2}>
              <Grid item md={3} sm={6} className="specifications">
                <img
                  src={affordableIcon}
                  className="comm-events1"
                  alt="affordable-img"
                />
                <Grid className="typography-3">Affordable</Grid>
              </Grid>
              <Grid item md={3} sm={6} className="specifications">
                <img
                  src={loungesIcon}
                  className="comm-events1"
                  alt="lounges-img"
                />
                <Grid className="typography-3">Comfort Lounges</Grid>
              </Grid>
              <Grid item md={3} sm={6} className="specifications">
                <img
                  src={bookingIcon}
                  className="comm-events1"
                  alt="booking-img"
                />
                <Grid className="typography-3">Quick Booking</Grid>
              </Grid>
              <Grid item md={3} sm={6} className="specifications">
                <img
                  src={sportsIcon}
                  className="comm-events1"
                  alt="sports-img"
                />
                <Grid className="typography-3">Sports Area</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid mt={5}>
          <Grid className="typography-2" mb={8}>
            Our Space Overview
          </Grid>

          <Grid mb={5} container spacing={2}>
            {workingSpaces.map((space: any, index: number) => (
              <Grid className="space-box" md={4} item mb={4}>
                <Grid
                  mb={2}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Grid className="space-location">{space.name}</Grid>
                  <Grid>
                    <img src={directionIcon} alt="direction-img" />
                  </Grid>
                </Grid>

                <Grid>
                  <img
                    src={imageArray[index]}
                    alt="space-img"
                    className="space-img"
                  />
                </Grid>

                <Grid
                  mt={2}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Grid className="day-pass">
                    <Grid>
                      <Grid className="typography-4">Day Pass</Grid>
                      <Grid className="typography-5">
                        Rs 249<span className="typography-6">/Day</span>
                      </Grid>
                    </Grid>
                    <Grid>
                      <img src={arrow1Icon} alt="arrow-img" />
                      <img src={arrow3Icon} alt="arrow-img" />
                      <img src={arrow2Icon} alt="arrow-img" />
                    </Grid>
                  </Grid>
                  <Grid className="bulk-pass">
                    <Grid className="">
                      <Grid className="typography-4">Bulk Pass</Grid>
                      <Grid className="typography-5">
                        Rs 2400 <span className="typography-6">/10 Days</span>
                      </Grid>
                    </Grid>
                    <Grid>
                      <img src={arrow1Icon} alt="arrow-img" />
                      <img src={arrow3Icon} alt="arrow-img" />
                      <img src={arrow2Icon} alt="arrow-img" />
                    </Grid>
                    <Grid className="discount-box">
                      <Grid className="discount-text">20% Discount</Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid mt={10} className="download-box">
          <Grid className="download-app-text">Download our app now</Grid>
          <Grid mt={10} sx={{ display: "flex", zIndex: 111 }}>
            <Grid sx={{ display: "flex", position: "relative" }}>
              <img src={mobileIcon} alt="mobile-img" className="bhive-1" />
              <img src={mobileIcon2} alt="mobile-img" className="bhive-2" />
              <Grid className="main-section">
                <Grid>
                  <Grid className="bhive-text">
                    Boost your productivity with the BHIVE Workspace app.
                    Elevate your workspace, collaborate efficiently, and unlock
                    exclusive perks.
                  </Grid>
                  <Grid sx={{ display: "flex" }}>
                    <img
                      src={googlePlayIcon}
                      alt="mobile-img"
                      className="gplay"
                    />
                    <img
                      src={appStoreIcon}
                      alt="mobile-img"
                      className="app-store"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid className="footer" mt={5}>
        {" "}
        &copy; Copyright 2024. Bhive Private Limited
      </Grid>
    </div>
  );
};

export default Home;
