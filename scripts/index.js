import { copyFileSync } from 'node:fs';
// import testFirstLine from './testFirstLine.js';
import { readOneDirectory } from 'walk-directories';
import { createBasePost, insertFrontMatter } from "./utils.js";
import { createPostDateFileName } from './create-post-date.js';

const {
    fileName,
    firstLine,
    frontMatter
} = await createBasePost('message');

if (firstLine != '---') {
    insertFrontMatter(fileName, frontMatter);
    const destDir = `${process.env.HOME}/Git/github.io/_posts/isit322/`;
    async function runIsit322() {
        console.log('starting isit function');

        const isit322Path = `${process.env.HOME}/Git/github.io/Isit322/`;

        var dir = await readOneDirectory(isit322Path);
        console.log('dir', dir);

        for (let file of dir) {
            console.log('found isit', file);

            if (file.endsWith('.md') && file != 'Summary.md' && file != 'master-list.md') {

                console.log(file);
                const { fileName, frontMatter } = await createPostDateFileName(file, false);
                const src = isit322Path + file;
                const dest = destDir + fileName;
                copyFileSync(src, dest);
                insertFrontMatter(dest, frontMatter);
            }
        }
    }

    await runIsit322();
    console.log('files were copied to', destDir);

}



