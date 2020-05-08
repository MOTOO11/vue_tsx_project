export interface LastUpdated {
    cases_date: number;
    deaths_date: number;
    pcr_date: number;
}

export interface RootObject {
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

