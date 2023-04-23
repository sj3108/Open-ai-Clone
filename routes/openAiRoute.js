const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsConvertorController,
  imageGenerator,
} = require("../controllers/openAiController");
const router = express.Router();

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/jsconvertor", jsConvertorController);
router.post("/imagegenerator", imageGenerator);

module.exports = router;
