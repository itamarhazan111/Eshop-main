import express from "express";
import seedData from "../controllers/seedData.js";



const seedRouter=express.Router();

seedRouter.get('/',seedData);

export default seedRouter;