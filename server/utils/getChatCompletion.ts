import OpenAI from 'openai';

export async function getChatCompletion(
    messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[],
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
) {
    const response = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages,
    });

    return response.choices?.[0]?.message?.content ?? null;
}
