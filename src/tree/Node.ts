export class StringNode {
    public isVisited: boolean = false;

    constructor(
        public data: string,
        public children: Array<StringNode> = []
    ){}

    public get noChildren(): boolean{
        return this.children.length === 0;
    }

    public get firstUnvisitedChild(): StringNode {
        const unvisitedChildren = this.children.filter(node => !node.isVisited);
        return unvisitedChildren[0];
    }

    public add(node: StringNode) {
        this.children.push(node);
    }
}
