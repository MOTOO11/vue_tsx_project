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

export class PositivesLocalAchievement {
    positives: Positive[] = [];
    lastAccessDate: Date = new Date();
    name: string = ""
    constructor(name: string, positives: Positive[]) {
        this.name = name;
        this.positives = positives;
        this.lastAccessDate = new Date();
    }

    //新規取得が必要か判定
    public compare(): boolean {
        return this.lastAccessDate.getMilliseconds() < new Date().getMilliseconds();
    }
}

export class Positive {
    code!: string;
    announcement_date!: string;
    src!: string;
    prefecture!: string;
    residence_prefecture!: string;
    age!: string;
    gender!: string;
    attribute!: string;
    prefecture_number!: string;
    travel_or_contact!: string;
    detail!: string;
    id!: string;
    diagnosis_date!: string;
    onset!: string;
    symptom!: string;
    death_or_discharge_date!: string;
    comment!: string;
    outcome!: string;
    outcome_src!: string;
}