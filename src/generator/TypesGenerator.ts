import { Tree } from '../tree/Tree';
import { StringNode } from '../tree/Node';


export class TypesGenerator {
    private types: string;

    public constructor(public data: Tree){}

    public generate(): string {

        const keys: string[] = [];

        while (!this.data.isEveryNodeVisited) {

            keys.push(
                this.rootToLeafPath(this.data.root);
            )

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