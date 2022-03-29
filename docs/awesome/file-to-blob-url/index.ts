


class FileToBlobUrl {
    private VM: null|HTMLInputElement;
    constructor({ type }: Pick<HTMLInputElement, 'type'>) {
        this.VM = null;
        this.createVM();
        this.setContributes({ type, onchange });
        this.autoTrigger();
    }
    createVM() {
        this.VM = document.createElement("input");
    }

    setContributes(attrs: Partial<HTMLInputElement>) {
        const { type, onchange } = attrs || {};
        this.VM.type = type;
        this.VM.onchange = onchange;
    }

    autoTrigger() {
        this.VM?.click();
    }

    onChange(e: Event) {
        const data = (<HTMLInputElement>e.target).files[0];
        const reader = new FileReader();

        reader.readAsDataURL(data);

        reader.onload = function (e) {
            // URL.createObjectURL(e.target.result )
            return e.target.result;
        }
    }
}
