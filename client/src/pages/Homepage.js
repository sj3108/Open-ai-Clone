import React from "react";
import { Box, Typography, Card, Stack, collapseClasses } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatBubble from "@mui/icons-material/ChatBubble";
import Code from "@mui/icons-material/Code";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
        <Box p={2}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            Text Generation
          </Typography>
          <Card
            onClick={() => {
              navigate("/summary");
            }}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 0.5, ml: 2 }}
            />
            <Stack p={3} pt="0">
              <Typography fontWeight="bold" variant="h6">
                Text Summary
              </Typography>
              <Typography fontSize={15}>
                Summarize long text into short sentences
              </Typography>
            </Stack>
          </Card>
        </Box>

        <Box p={2}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => {
              navigate("/paragraph");
            }}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 0.5, ml: 2 }}
            />
            <Stack p={2} pt="0">
              <Typography fontWeight="bold" variant="h6">
                Paragraph Generation
              </Typography>
              <Typography fontSize={15} pt={2}>
                Generate Paragraph with words
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            AI ChatBot
          </Typography>
          <Card
            onClick={() => {
              navigate("/chatbot");
            }}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatBubble
              sx={{ fontSize: 80, color: "primary.main", mt: 0.5, ml: 5 }}
            />
            <Stack p={5} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                AI ChatBot
              </Typography>
              <Typography fontSize={15} pt={2}>
                Talk To Yoda!
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            JavaScript Convertor
          </Typography>
          <Card
            onClick={() => {
              navigate("/jsconvertor");
            }}
            sx={{
              width: 220,
              height: 190,
              boxShadow: 2,
              borderRadius: 5,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <Code
              sx={{ fontSize: 80, color: "primary.main", mt: 0.5, ml: 5 }}
            />
            <Stack p={5} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                JSconvertor
              </Typography>
              <Typography fontSize={15} pt={1}>
                Translate English to JavaScript
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h5" mb={2} fontWeight="bold">
            Image Generator
          </Typography>
          <Card
            onClick={() => {
              navigate("/imagegenerator");
            }}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 240,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <PhotoCamera
              sx={{ fontSize: 80, color: "primary.main", mt: 0.5, ml: 5 }}
            />
            <Stack p={5} pt={0}>
              <Typography fontWeight="bold" variant="h6">
                Image-Generator
              </Typography>
              <Typography fontSize={15} pt={2}>
                Text to Sci-fi image
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
