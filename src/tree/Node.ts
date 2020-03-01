export class StringNode {
    constructor(
        public data: string,
        public children: Array<StringNode> = []
    ){}

    public get noChildren(): boolean{
        return this.children.length === 0;
    }

    public add(node: StringNode) {
        this.children.push(node);
    }
}
