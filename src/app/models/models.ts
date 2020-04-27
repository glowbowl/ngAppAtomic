export interface UserSignUp {
    uid: string;
    firstName: string;
    lastName: string;
    nickname: string;
    phone: string;
    email: string;
    addressType: string;
    address: string;
    country: string;
    postalCode: string;
}

export interface CreateUserModel {
    uid: string;
    firstName: string;
    lastName: string;
    nickname: string;
    phone: string;
    email: string;
    password: string;
    addressType: string;
    address: string;
    country: string;
    postalCode: string;
}

export interface UserSignIn {
    uid: string;
    email: string;
}

export interface LoginModel {
    email: string;
    password: string;
}

export interface UserUpdate {
    firstName: string;
    lastName: string;
    nickname: string;
    phone: string;
}

export interface UserAdditionalUpdate {
    addressType: string;
    address: string;
    country: string;
    postalCode: string;
}

// export namespace CountriesNamespace{
//     export interface country{
//         name: string;
//         alpha2code: string;
//     }
// }
export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}

export interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
}

export interface Country {
    name: string;
}

export interface Countries {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area?: number;
    gini?: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flag: string;
    regionalBlocs: RegionalBloc[];
    cioc: string;
}