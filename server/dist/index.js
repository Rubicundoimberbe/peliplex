"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const categories = [
    { name: "Terror", destination: "https://www.terror.com" },
    { name: "Suspenso", destination: "https://www.suspenso.com" },
    { name: "Ciencia Ficción", destination: "https://www.ciencia-ficcion.com" },
    { name: "Fantasía", destination: "https://www.fantasia.com" },
    { name: "Acción", destination: "https://www.accion.com" },
];
app.get("/categories", (req, res) => {
    res.status(200).json({
        data: categories,
    });
});
app.listen(3000, () => {
    console.log("server listening on PORT 3000");
});
//# sourceMappingURL=index.js.map