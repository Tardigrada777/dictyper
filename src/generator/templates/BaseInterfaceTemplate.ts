import { INTERFACE_NAME } from '../../globals';


export const baseInterfaceTemplate = (content: string) => {
    return `interface ${INTERFACE_NAME}{${content}}`;
};
