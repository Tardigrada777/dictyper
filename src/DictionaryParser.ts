import { readFromJson } from './utils/readFromJson';
import { Tree } from './tree/Tree';


/**
 * Parse json dict and creates types for passed dict.
 */
export default class DictionaryParser {

    private src: Object;
    private tree: Tree;

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
        console.log(JSON.stringify(this.tree, null, 2));
        
    }

    /**
     * Generates types .d.ts file from Tree data.
     */
    private saveTypesFromTree(){}

    /**
     * Reads json content and parse it to object.
     */
    private readJson(){
        this.src = JSON.parse(
            readFromJson(this.jsonPath)
        );
    };
}
