export class StringNode {
    constructor(
        public data: string,
        public children: Array<StringNode> = []
    ){}

    add(data: string) {
        this.children.push(
            new StringNode(data)
        );
    }
}
