
import { GoogleGenerativeAI } from '@google/generative-ai'

import { GOOGLE_AI_API } from '$env/static/private';
import { json } from '@sveltejs/kit'


export async function PUT({ ...others }) {

    try {
        const data = await others.request.json()
        //console.log(data, others.request.locals)

        const res = await run(data.content, data.options)

        console.log(data)
        return json({
            susses: true,
            error: false,
            message: 'sussesfuly PING BACKEND',
            data: res
        })

    } catch (error) {
        //console.log(error);
        return json({
            susses: false,
            error: true,
            message: error.message,
            data: error
        })
    }
}



// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GOOGLE_AI_API);

async function run(content, options) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = ` give a more professional version of this text. ${content}, Do not add any extra text or content just the professional version of this text only.`

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);
    return text
}
