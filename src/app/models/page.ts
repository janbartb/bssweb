export class Page {
    index: number = 0;
    parentIdxs: number[] = [];
    indexes: number[] = [];
    title: string = '';
    topic: string | null = null;
    subPages: Page[] = [];
    idxSubPage: number = -1;

    constructor(name: string, topic?: string) {
        this.title = name;
        this.topic = topic ? topic.toLowerCase() : null;
    }

    addSubPage(name: string, topic?: string): Page {
        let page = new Page(name);
        page.topic = topic ? topic.toLowerCase() : null;
        page.index = this.subPages.length;
        page.parentIdxs.push(this.index);
        page.indexes.push(page.index);
        this.subPages.push(page);
        return page;
    }

}

export class SubTitleItem {
    tekst: string = '';
    indexes: number[] = [];

    constructor(name: string, idxs: number[]) {
        this.tekst = name;
        this.indexes = idxs;
    }
}
