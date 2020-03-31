import { readFromJson } from './utils/readFromJson';
import { Tree } from './tree/Tree';
import { TypesGenerator } from './generator/TypesGenerator';
import { StringNode } from './tree/Node';
import { writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Parse json dict and creates types for passed dict.
 */
export default class DictionaryParser {

    private src: Object;
    private tree: Tree;
    private p: string[] = [];

    public constructor(private jsonPath: string){
        this.readJson();
        this.srcToTree();
        // this.saveTypesFromTree();
        this.getPathesFromGraph(this.tree);
        this.saveTypesFromTree();
    }

    /**
     * Creates Tree from json data.
     */
    private srcToTree(){
        this.tree = new Tree();
        this.tree.build(this.src);
        // console.log(JSON.stringify(this.tree, null, 2));
        
    }

    public walkByChildren(node: StringNode, path: string) {
        const newPath = path.length > 0 ? path + '.' + node.data : node.data;
        if (node.children.length > 0) {
            node.children.forEach(n => {
                this.walkByChildren(n, newPath);
            });
        } else {
            this.p.push(newPath.slice(5));
        }
    }

    public getPathesFromGraph(tree: Tree) {
        const root = tree.root;
        this.walkByChildren(root, '');
    }

    /**
     * Generates types .d.ts file from Tree data.
     */
    private saveTypesFromTree(){
        const template = (key) => {
            return `(key:${JSON.stringify(key)}):void;`
        }
        const base = (keys: string[]) => {
            return `interface func {${keys.join('')}};`
        }
        let type: string = base(this.p.map(path => template(path)));
        type += `declare getKey:func;`;
        writeFileSync(join(__dirname, 'finaltypes.d.ts'), type);
    }

    /**
     * Reads json content and parse it to object.
     */
    private readJson(){
        this.src = JSON.parse(
            readFromJson(this.jsonPath)
        );
    };
}
