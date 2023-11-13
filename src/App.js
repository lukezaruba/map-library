import React, { useState } from "react";
import { Container, Button, Grid, Paper } from "@mui/material";

const websites = [
  {
    name: "TCMA Land Use, 1958",
    url: "https://umn.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=0565ed7e8c674f519b386e43ceeedac7",
  },
  { name: "Historical Aerial Photos", url: "https://apps.lib.umn.edu/mhapo/" },
  {
    name: "UMN Campus History",
    url: "https://apps.lib.umn.edu/campushistory/",
  },
  {
    name: "Purple Map",
    url: "https://umn.maps.arcgis.com/apps/MapSeries/index.html?appid=64891cc29420495ebb16fe18267f2acf",
  },
];

const App = () => {
  const [selectedWebsite, setSelectedWebsite] = useState(websites[0]);

  const handleButtonClick = (website) => {
    setSelectedWebsite(website);
  };

  return (
    <Container
      maxWidth="xl"
      style={{ height: "100vh", overflow: "hidden", padding: 0, margin: 0 }}
    >
      <Grid container style={{ height: "100%" }}>
        <Grid
          item
          xs={2}
          style={{
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper
            style={{
              padding: "16px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "auto",
              background: "#d5d6d2",
            }}
          >
            {websites.map((website, index) => (
              <Button
                key={index}
                variant="contained"
                style={{
                  margin: "8px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  backgroundColor: "#7a0019",
                }}
                onClick={() => handleButtonClick(website)}
              >
                {website.name}
              </Button>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={10} style={{ height: "100%", overflow: "hidden" }}>
          <iframe
            title="Website Viewer"
            src={selectedWebsite.url}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              overflow: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
