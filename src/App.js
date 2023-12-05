import React, { useState } from "react";
import { Container, Button, Grid, Paper } from "@mui/material";

const websites = [
  {
    name: "Historical TCMA Land Use",
    url: "https://storymaps.arcgis.com/stories/433ade03ef65457fb1fb6e9febde8e5e",
  },
  {
    name: "Mapping Prejudice",
    url: "https://mappingprejudice.umn.edu/racial-covenants/maps-data",
  },
  {
    name: "UMN Campus History",
    url: "https://apps.lib.umn.edu/campushistory/",
  },
  {
    name: "Lost Waters",
    url: "https://umn.maps.arcgis.com/apps/View/index.html?appid=49a00eab2f4e45f0ab8228c85ef6cbe7",
  },
  {
    name: "Historical Aerial Photos",
    url: "https://apps.lib.umn.edu/mhapo/",
  },
];

const App = () => {
  const [selectedWebsite, setSelectedWebsite] = useState(websites[0]);

  const handleButtonClick = (website) => {
    setSelectedWebsite(website);
  };

  return (
    <Container
      maxWidth="false"
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        padding: 0,
        margin: 0,
      }}
    >
      <Grid container style={{ height: "100%" }}>
        <Grid
          item
          xs={2}
          style={{
            height: "100%",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper
            style={{
              padding: "16px",
              height: "100%",
              width: "100%",
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
                  width: "150px",
                  height: "150px",
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
        <Grid
          item
          xs={10}
          style={{ height: "100%", width: "100vw", overflow: "hidden" }}
        >
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
