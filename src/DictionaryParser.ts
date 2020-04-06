import { join } from 'path';
import { writeFileSync } from 'fs';

import { readFromJson } from './utils/readFromJson';
import { Tree } from './tree/Tree';
import { StringNode } from './tree/Node';
import { INTERFACE_NAME, FUNCTION_NAME, FILE_NAME, DIR_NAME } from './globals';


/**
 * Parse json dict and creates types for passed dict.
 */
export default class DictionaryParser {

    /**
     * Parsed object from JSON dictionary.
     */
    private src: Object;

    /**
     * Tree generated from JSON dictionary.
     */
    private tree: Tree;

    /**
     * All paths to keys.
     */
    private paths: string[] = [];

    /**
     * Creates new instance of DictionaryParser.
     *
     * @param jsonPath   Path to JSON dictionary file.
     */
    public constructor(private jsonPath: string){
        this.readJson();
        this.srcToTree();
    }

    /**
     * Creates Tree from json data.
     */
    private srcToTree(){
        this.tree = new Tree();
        this.tree.build(this.src);
    }

    /**
     * Walks through every child for given node.
     *
     * @param node   Node to walking.
     * @param path   Acc path.
     */
    public walkByChildren(node: StringNode, path: string) {
        const newPath = path.length > 0 ? path + '.' + node.data : node.data;
        if (node.children.length > 0) {
            node.children.forEach(n => {
                this.walkByChildren(n, newPath);
            });
        } else {
            this.paths.push(newPath.slice(5));
        }
    }

    /**
     * Get paths from tree.
     *
     * @param tree   Tree from JSON dict.
     */
    public getPathsFromGraph(tree: Tree) {
        const root = tree.root;
        this.walkByChildren(root, '');
    }

    /**
     * Generates types .d.ts file from Tree data.
     */
    private saveTypesFromTree(destPath: string){
        const template = (key) => {
            return `(key:${JSON.stringify(key)}):void;`
        }
        const base = (keys: string[]) => {
            return `interface ${INTERFACE_NAME} {${keys.join('')}};`
        }
        let type: string = base(this.paths.map(path => template(path)));
        type += `declare ${FUNCTION_NAME}:${INTERFACE_NAME};`;
        writeFileSync(join(destPath, `${FILE_NAME}.d.ts`), type);
    }

    
    /**
     * Reads json content and parse it to object.
     */
    private readJson(){
        this.src = JSON.parse(
            readFromJson(this.jsonPath)
        );
    };

    /**
     * Generates final .d.ts file with typed dt function.
     */
    public generate(destPath: string) {
        this.getPathsFromGraph(this.tree);
        this.saveTypesFromTree(destPath);
    }

}
