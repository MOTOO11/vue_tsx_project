export interface LastUpdated {
    cases_date: number;
    deaths_date: number;
    pcr_date: number;
}

export interface Prefecture {
    id: number;
    name_ja: string;
    name_en: string;
    lat: number;
    lng: number;
    last_updated: LastUpdated;
    cases: number;
    deaths: number;
    pcr: number;
}
export class Total {
    date!: number;
    pcr!: number;
    positive!: number;
    symptom!: number;
    symptomless!: number;
    symtomConfirming!: number;
    hospitalize!: number;
    mild!: number;
    severe!: number;
    confirming!: number;
    waiting!: number;
    discharge!: number;
    death!: number;
}
