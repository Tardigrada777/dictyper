export class StringNode {
    constructor(
        public data: string,
        public children: Array<StringNode> = []
    ){}

    public add(node: StringNode) {
        this.children.push(node);
    }
}
