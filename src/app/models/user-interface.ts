export class RadioButtons {
    options: string[] = [];
    idxSelected: number = -1;

    constructor(opts: string[], defaultIdx?: number) {
        this.options = opts;
        if (opts.length) {
            this.idxSelected = defaultIdx ? defaultIdx : 0;
        }
    }
}

export class Button {
    key: string = '';
    text: string = '';
    showKey: boolean = false;
    showOnlyKey: boolean = false;
    disabled: boolean = false;
    visible: boolean = true;
    selected: boolean = false;

    constructor(key: string, text: string, showKey?: boolean, onlyKey?: boolean) {
        this.key = key;
        this.text = text;
        if (showKey) {
            this.showKey = true;
        }
        if (onlyKey) {
            this.showOnlyKey = onlyKey;
        }
    }

    hide() {
        this.disabled = true;
        this.visible = false;
    }

    show() {
        this.disabled = false;
        this.visible = true;
    }

    disable() {
        this.disabled = true;
    }

    enable() {
        this.disabled = false;
    }
}

