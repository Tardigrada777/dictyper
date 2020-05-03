import { readFileSync } from 'fs';


export const readFromJson = (path: string) => {
    const fileSource = readFileSync(path, { encoding: 'utf8' });
    return fileSource;
};
