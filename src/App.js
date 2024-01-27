import React, { useState } from "react";
import useStyles from "./web.styled";
import image from "./socialImage.jpeg";
import socialImage from "./payment.jpeg";
import mainBanner from "./mainBanner.jpeg";
import banner from "./banner.jpeg";
import card from "./card.jpeg";
import { Button } from "@material-ui/core";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import styled from "@emotion/styled";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 10px;
`;
const Cards = () => {
  const classes = useStyles();
  const cardData = [
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5",
    "Item6",
    "Item7",
    "Item8",
  ];
  const promotions = [
    "Same Day Shipping",
    "T-Shirts 2 Pack",
    "Syzmik 3 Packs",
    "Deal of the Month - King Gee",
    "Deal of the Month - Hardyakka",
    "Clearance",
    "Free Shipping",
  ];
  const brands = [
    "Aussie Pacific   ",
    "Bata",
    "Bisley Workwear",
    "Biz Care",
    "Biz Collection",
    "Biz Corporates",
    "Blundstone",
    "Bolle Safety",
    "DNC Workwear",
    "Dickies",
    "Hard Yakka",
    "JBs Wear",
    "King Gee",
    "Mongrel",
    "NNT Uniforms",
    "New Balance",
    "Pro Choice",
    "Puma Safety",
    "RedBack",
    "Steel Blue",
    "Syzmik",
    "Winning Spirit",
    "Wonderwink",
    "Workit Workwear",
  ];

  const [value, setValue] = useState("one");
  return (
    <div>
      <div className={classes.header}>
        <img src={image} style={{ width: 616 }} alt="description_of_image" />
      </div>
      <div
        style={{
          backgroundColor: "#fc7c20",
          textAlign: "center",
          heigh: "30px",
        }}
      >
        To be done!
      </div>
      <div>
        <img
          src={mainBanner}
          style={{ width: "100%", width: "100%", marginTop: 20, height: 90, marginLeft: 60 }}
          alt="description_of_image"
        />
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <div style={{ width: "25%" }}>
          <Button
            style={{
              backgroundColor: "#fc7c20",
              color: "#fff",
              padding: "15px, 3px",
              width: 270,
              justifyContent: "center",
              marginTop: 20,
              height: 54,
            }}
          >
            Shop All Brands
          </Button>
          <div
            style={{
              color: "#01204e",
              fontSize: "1em",
              fontFamily: "PT Sans, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: 1.4,
              marginTop: 10,
              width: 270,
            }}
          >
            Current Promotions
          </div>
          <div>
            {promotions.map((promotion, index) => (
              <div
                style={{
                  display: "grid",
                  borderBottom: "1px solid black",
                  width: 270,
                  paddingBottom: 8,
                  fontWeight: 300,
                  fontStyle: "normal",
                  lineHeight: 1.6,
                }}
                key={index}
              >
                {promotion}
              </div>
            ))}
          </div>
          <div
            style={{
              color: "#01204e",
              fontSize: "1em",
              fontFamily: "PT Sans, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: 1.4,
              marginTop: 30,
              width: 270,
            }}
          >
            Current Promotions
          </div>
          <div>
            {brands.map((brand, index) => (
              <div
                style={{
                  display: "grid",
                  borderBottom: "1px solid black",
                  width: 270,
                  paddingBottom: 8,
                  fontWeight: 300,
                  fontStyle: "normal",
                  lineHeight: 1.6,
                }}
                key={index}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
        <div2 style={{ width: "75%" }}>
          <div
            style={{
              // paddingRight: 36,
              // paddingLeft: 36,
              // display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={socialImage}
              style={{ width: 1000, marginTop: 20, height: 90, marginLeft: 60 }}
              alt="description_of_image"
            />
            <img
              src={banner}
              style={{ width: 616, marginTop: 20, marginLeft: 300 }}
              alt="description_of_image"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tabs
                value={value}
                // onChange={handleChange}
              >
                <Tab value="one" label="Bisley 3 Packs" />
                <Tab value="two" label="Syzmick 3 Packs" />
                <Tab value="three" label="Deal of the month" />
              </Tabs>
            </div>
            <>
              <GridContainer>
                {cardData?.map((val) => {
                  return (
                    <Card
                      className={classes.cardContainer}
                      sx={{ height: 250, width: 200 }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="240px"
                          image={card}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {val}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  );
                })}
              </GridContainer>
            </>
          </div>
        </div2>
      </div>
    </div>
  );
};

export default Cards;
