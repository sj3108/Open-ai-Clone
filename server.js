const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");

const dotenv = require("dotenv");
const connectDB = require("./config/db");
const handleError = require("./middleware/errorMiddleware");

const authRoutes = require("./routes/authRoutes");
const openaiRoutes = require("./routes/openAiRoute");

dotenv.config();

connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/api/V1/auth", authRoutes);
app.use("/api/v1/openai", openaiRoutes);
app.use(handleError);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan
      .white
  );
});
