import { StringNode } from './Node';
import { ROOT_NODE_VALUE } from '../globals';
import { isObject } from 'util';


export class Tree {
    public root: StringNode;

    constructor() {
        this.root = new StringNode(ROOT_NODE_VALUE);
    }

    public build(
        data: object,
        parent: StringNode = this.root
    ) {
        let nodes: string[] = Object.keys(data);
        nodes.map(node => {
            const newNode = new StringNode(node);
            if (isObject(data[node])) {
                parent.add(newNode)
                this.build(data[node], newNode);
            } else {
                parent.add(newNode);
            }
        });
    }

    public traverseDF(fn: (node: StringNode) => any) {
        // depth first
        const store = [this.root];
        while (store.length) {
            const node = store.shift();
            store.unshift(...node.children);
            fn(node);
        }
    }
}