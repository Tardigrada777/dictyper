import { Tree } from '../tree/Tree';
import { StringNode } from '../tree/Node';


export class TypesGenerator {
    private types: string;

    public constructor(public data: Tree){}

    public generate() {

        const keys: string[] = [];

        while (!this.data.isEveryNodeVisited) {

            keys.push(
                this.rootToLeafPath(this.data.root) as string
            );

        }

        console.log('KEYS', keys)

    }

    private rootToLeafPath(node: StringNode, path: string = '') {

        if (node.noChildren) {
            return path;
        }

        let key: string = `${path}.${node.data}`;
        this.rootToLeafPath(node.firstUnvisitedChild, key);

    }

}