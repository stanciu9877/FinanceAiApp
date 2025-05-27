import React from "react";
import { Grid, Column, Button } from "@carbon/react";

const MainContent = () => {
  return (
    <main style={{ padding: "2rem" }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h1>Welcome to FinAI</h1>
          <p>Your smart investment assistant powered by AI.</p>
          <Button kind="primary">Ask the AI</Button>
        </Column>
      </Grid>
    </main>
  );
};

export default MainContent;
