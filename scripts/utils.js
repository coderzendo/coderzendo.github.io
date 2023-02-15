import { readFileSync, openSync, writeSync, close, writeFileSync } from 'node:fs';
import { getFirstLineFromFile } from './getFirstLine.js';
import { createPostDateFileName } from './create-post-date.js';

async function createBasePost(baseFileName) {
    const { fileName, frontMatter } = await createPostDateFileName(baseFileName, true);

    console.log('fileName', baseFileName);

    writeFileSync(baseFileName, '', 'utf8', 'a');
    const firstLine = await getFirstLineFromFile(baseFileName);
    return { fileName, firstLine, frontMatter }
}

function insertFrontMatter(fileName, frontMatter) {
    console.log('front matter:\n', frontMatter);

    const data = readFileSync(fileName);
    const fd = openSync(fileName, 'w+');
    const insert = Buffer.from(frontMatter);
    // console.log('buffer insert front matter\n', insert.length, insert);

    writeSync(fd, insert);
    // writeSync(fd, data, 0, data.length, insert.length);
    close(fd, (err) => {
        if (err)
            throw err;
    });
}
export { createBasePost, insertFrontMatter };