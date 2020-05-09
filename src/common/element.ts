export const createElement = (name: string, attrs?: { [key:string]: string; }, parent?: HTMLElement):HTMLElement => {
    const d = document.createElement(name);
    if(attrs) {
        for (let val in attrs) {
            d.setAttribute(val, attrs[val]);
        }
    }
    if(parent) {
        parent.appendChild(d);
    }
    return d;
}
