import { readFromJson } from './utils/readFromJson';


/**
 * Parse json dict and creates types for passed dict.
 */
export default class DictionaryParser {
    public constructor(private jsonPath: string){
        this.readJson();
    }
    private src: { key: string };
    private ast;
    private graph;
    private jsonToAst(){}
    private jsonToGraph(){}
    private saveTypesFromAst(){}
    private saveTypesFromGraph(){}

    /**
     * Reads json content and parse it to object.
     */
    private readJson(){
        this.src = JSON.parse(
            readFromJson(this.jsonPath)
        );
    };
}