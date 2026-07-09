// import fs from "fs";
// import pdfParse from "pdf-parse";

// export async function parsePDF(filePath) {
//   try {
//     const dataBuffer = fs.readFileSync(filePath);
//     const data = await pdfParse(dataBuffer);
//     return data.text;
//   } catch (error) {
//     throw new Error("Unable to parse PDF");
//   }
// }



import fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

export async function parsePDF(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);

        const data = await pdfParse(dataBuffer);

        return data.text;

    } catch (error) {
        throw new Error("Unable to parse PDF");
    }
}