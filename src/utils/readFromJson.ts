import { join } from 'path';
import { readFileSync } from 'fs';

import { DIR_NAME } from '../globals';


export const readFromJson = (path: string) => {
    // const fullPath: string = join(DIR_NAME, path);
    const fileSource = readFileSync(path, { encoding: 'utf8' });
    return fileSource;
};