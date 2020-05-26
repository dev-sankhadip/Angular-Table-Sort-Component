export class Sort {

    private sort_order = 1;
    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base",
    });


    constructor() {
    }

    public dynamicsort(property, order, type = "") {
        if (order === "desc") {
            this.sort_order = -1;
        }
        return (a, b) => {
            if (type === "date") {
                return this.SortData(new Date(a[property]), new Date(b[property]));
            }
            else {
                return this.collator.compare(a[property], b[property]) * this.sort_order;
            }
        }
    }

    private SortData(a, b) {
        if (a < b) {
            return -1 * this.sort_order;
        } else if (a > b) {
            return 1 * this.sort_order;
        } else {
            return 0 * this.sort_order;
        }
    }
}


export class Search {

    constructor() {
    }

    public setData(data, property) {
        return (value, index, array) => {
            if (value[property].toString().toLowerCase().indexOf(data.toLowerCase()) > -1) {
                return true;
            }
        }
    }
}