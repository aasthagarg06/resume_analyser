import { jdService } from "../services/jdService.js";

export const matchJobDescription = async (req, res) => {

    try {

        console.log("========== JD MATCH STARTED ==========");

        console.log(req.file);

        console.log(req.body);

        const result = await jdService(

            req.file,

            req.body.jobDescription

        );

        res.json({

            success: true,

            result

        });

    }

    catch (error) {

        console.error("🔥 JD MATCH ERROR");

        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message,

            stack: error.stack

        });

    }

};