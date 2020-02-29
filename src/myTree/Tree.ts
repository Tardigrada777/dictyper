import { StringNode } from './Node';
import { ROOT_NODE_VALUE } from '../globals';


export class Tree {
    private root: StringNode;

    constructor() {
        this.root = new StringNode(ROOT_NODE_VALUE);
    }

    build(data: object) {
        // TODO: impl tree from json data.
    }

    traverseDF(fn: (node: StringNode) => any) {
        // depth first
        const store = [this.root];
        while (store.length) {
            const node = store.shift();
            store.unshift(...node.children);
            fn(node);
        }
    }
}