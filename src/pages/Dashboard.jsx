import { Stack } from "@mui/material";
import React from "react";
import { Sidebar } from "../components";

const Dashboard = () => {
  return (
    <Stack direction="row" gap={4} sx={{ width: "100%" }}>
      <Sidebar />
      <div>sss</div>
    </Stack>
  );
};

export default Dashboard;
