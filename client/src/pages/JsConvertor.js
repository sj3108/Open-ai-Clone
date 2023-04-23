import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Collapse,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const JsConvertor = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery("(min-width:1000px)");

  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/openai/jsconvertor",
        {
          text,
        }
      );
      setCode(data);
    } catch (err) {
      console.log(err);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <Box
        width={isNotMobile ? "40%" : " 80% "}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={5}
        sx={{ boxShadow: 5 }}
        backgroundColor={theme.palette.background.alt}
      >
        <Collapse in={error}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Collapse>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4">Generate JavaScript Code</Typography>
          <TextField
            placeholder="Add Your Instruction"
            type="text"
            multiline={true}
            required
            margin="normal"
            fullWidth
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ color: "white", mt: 2 }}
          >
            Convert
          </Button>

          <Typography mt={2}>
            Not this tool ? <Link to="/">Go back</Link>
          </Typography>
        </form>
        {code ? (
          <>
            <Card
              sx={{
                mt: 4,
                border: 1,
                boxShadow: 0,
                height: "500px",
                borderRadius: 5,
                borderColor: "natural.medium",
                bgcolor: "background.default",
              }}
            >
              <pre>
                <Typography p={2}>{code}</Typography>
              </pre>
            </Card>
          </>
        ) : (
          <>
            <Card
              sx={{
                mt: 4,
                border: 1,
                boxShadow: 0,
                height: "500px",
                borderRadius: 5,
                borderColor: "natural.medium",
                bgcolor: "background.default",
              }}
            >
              <Typography
                variant="h5"
                color="natural.main"
                sx={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  lineHeight: "450px",
                }}
              >
                JS Code will apear here
              </Typography>
            </Card>
          </>
        )}
      </Box>
    </>
  );
};

export default JsConvertor;
