import { Tree } from '../tree/Tree';


export class TypesGenerator {
    private types: string;

    public constructor(public data: Tree){
        this.initWithInterface();
    }

    private initWithInterface(){
        this.types = `interface DICT{`;
    }

    public generate(): string {
        const node = this.data.root;
        const keys: string[] = [];
        while (node.children.length > 0) {
            
        }

        this.data.traverseDF(node => {
            // TODO: impl correct traversing
            let key: string = node.data;
            console.log('KEY', key);

            this.types += key;
        });

        this.types += '};';
        return this.types;
    }

}