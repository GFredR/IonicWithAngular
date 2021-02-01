export interface FinanceData {
    financeData: FinanceItem;
}
export interface FinanceItem {
    item: Finance[];
}
export interface Finance {
    chg: string;
    code: string;
    current: string;
    increment: string;
    name: string;
    percent: string;
    type: string;
    value: string;
}
export class FinanceData {
    constructor(financeData: FinanceItem) {
        this.financeData = financeData;
    }
}
export class FinanceItem {
    constructor(item: Finance[]) {
        this.item = item;
    }
}
export class Finance {
    constructor(chg: string, code: string, current: string,
                increment: string, name: string, percent: string,
                type: string, value: string) {
        this.chg = chg;
        this.code = code;
        this.current = current;
        this.increment = increment;
        this.name = name;
        this.percent = percent;
        this.type = type;
        this.value = value;
    }
}
