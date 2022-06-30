import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = 3333;

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
