import { readFileSync, openSync, writeSync, close, copyFileSync } from 'node:fs';
// import testFirstLine from './testFirstLine.js';
import { readOneDirectory } from 'walk-directories';

const { fileName, firstLine, frontMatter } = await createFileTest();



if (firstLine != '---') {
    insertFrontMatter(fileName, frontMatter);

    async function runIsit322() {
        const isit322Path = `${process.env.HOME}/Git/github.io/Isit322/`;

        var dir = await readOneDirectory(isit322Path);

        for (let file of dir) {
            if (file.endsWith('.md') && file != 'Summary.md' && file != 'master-list.md') {

                console.log(file);
                const { fileName, frontMatter } = await createPostDateFileName(file, false);
                const src = isit322Path + file;
                const dest = `${process.env.HOME}/Git/github.io/_posts/isit322/` + fileName;
                copyFileSync(src, dest);
                insertFrontMatter(dest, frontMatter);
            }
        }
    }

    runIsit322();
}



