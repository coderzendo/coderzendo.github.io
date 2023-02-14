
import { createBasePost, insertFrontMatter } from "./utils.js";

async function run() {
    const { fileName, firstLine, frontMatter } = await createBasePost("test");
    insertFrontMatter(fileName, frontMatter)
}

await run();