import { GraphQLEnumType } from 'graphql';
import { pick } from 'lodash';

export const IBANCurrencyValues = {
  AED: { description: 'UAE Dirham' },
  AFN: { description: 'Afghani' },
  ALL: { description: 'Lek' },
  AMD: { description: 'Armenian Dram' },
  ANG: { description: 'Netherlands Antillean Guilder' },
  AOA: { description: 'Kwanza' },
  ARS: { description: 'Argentine Peso' },
  AUD: { description: 'Australian Dollar' },
  AWG: { description: 'Aruban Florin' },
  AZN: { description: 'Azerbaijanian Manat' },
  BAM: { description: 'Convertible Mark' },
  BBD: { description: 'Barbados Dollar' },
  BDT: { description: 'Taka' },
  BGN: { description: 'Bulgarian Lev' },
  BHD: { description: 'Bahraini Dinar' },
  BIF: { description: 'Burundi Franc' },
  BMD: { description: 'Bermudian Dollar' },
  BND: { description: 'Brunei Dollar' },
  BOB: { description: 'Boliviano' },
  BOV: { description: 'Mvdol' },
  BRL: { description: 'Brazilian Real' },
  BSD: { description: 'Bahamian Dollar' },
  BTN: { description: 'Ngultrum' },
  BWP: { description: 'Pula' },
  BYN: { description: 'Belarussian Ruble' },
  BZD: { description: 'Belize Dollar' },
  CAD: { description: 'Canadian Dollar' },
  CDF: { description: 'Congolese Franc' },
  CHE: { description: 'WIR Euro' },
  CHF: { description: 'Swiss Franc' },
  CHW: { description: 'WIR Franc' },
  CLF: { description: 'Unidad de Fomento' },
  CLP: { description: 'Chilean Peso' },
  CNY: { description: 'Yuan Renminbi' },
  COP: { description: 'Colombian Peso' },
  COU: { description: 'Unidad de Valor Real' },
  CRC: { description: 'Costa Rican Colon' },
  CUC: { description: 'Peso Convertible' },
  CUP: { description: 'Cuban Peso' },
  CVE: { description: 'Cabo Verde Escudo' },
  CZK: { description: 'Czech Koruna' },
  DJF: { description: 'Djibouti Franc' },
  DKK: { description: 'Danish Krone' },
  DOP: { description: 'Dominican Peso' },
  DZD: { description: 'Algerian Dinar' },
  EGP: { description: 'Egyptian Pound' },
  ERN: { description: 'Nakfa' },
  ETB: { description: 'Ethiopian Birr' },
  EUR: { description: 'Euro' },
  FJD: { description: 'Fiji Dollar' },
  FKP: { description: 'Falkland Islands Pound' },
  GBP: { description: 'Pound Sterling' },
  GEL: { description: 'Lari' },
  GHS: { description: 'Ghana Cedi' },
  GIP: { description: 'Gibraltar Pound' },
  GMD: { description: 'Dalasi' },
  GNF: { description: 'Guinea Franc' },
  GTQ: { description: 'Quetzal' },
  GYD: { description: 'Guyana Dollar' },
  HKD: { description: 'Hong Kong Dollar' },
  HNL: { description: 'Lempira' },
  HRK: { description: 'Kuna' },
  HTG: { description: 'Gourde' },
  HUF: { description: 'Forint' },
  IDR: { description: 'Rupiah' },
  ILS: { description: 'New Israeli Sheqel' },
  INR: { description: 'Indian Rupee' },
  IQD: { description: 'Iraqi Dinar' },
  IRR: { description: 'Iranian Rial' },
  ISK: { description: 'Iceland Krona' },
  JMD: { description: 'Jamaican Dollar' },
  JOD: { description: 'Jordanian Dinar' },
  JPY: { description: 'Yen' },
  KES: { description: 'Kenyan Shilling' },
  KGS: { description: 'Som' },
  KHR: { description: 'Riel' },
  KMF: { description: 'Comoro Franc' },
  KPW: { description: 'North Korean Won' },
  KRW: { description: 'Won' },
  KWD: { description: 'Kuwaiti Dinar' },
  KYD: { description: 'Cayman Islands Dollar' },
  KZT: { description: 'Tenge' },
  LAK: { description: 'Kip' },
  LBP: { description: 'Lebanese Pound' },
  LKR: { description: 'Sri Lanka Rupee' },
  LRD: { description: 'Liberian Dollar' },
  LSL: { description: 'Loti' },
  LYD: { description: 'Libyan Dinar' },
  MAD: { description: 'Moroccan Dirham' },
  MDL: { description: 'Moldovan Leu' },
  MGA: { description: 'Malagasy Ariary' },
  MKD: { description: 'Denar' },
  MMK: { description: 'Kyat' },
  MNT: { description: 'Tugrik' },
  MOP: { description: 'Pataca' },
  MRU: { description: 'Ouguiya' },
  MUR: { description: 'Mauritius Rupee' },
  MVR: { description: 'Rufiyaa' },
  MWK: { description: 'Kwacha' },
  MXN: { description: 'Mexican Peso' },
  MXV: { description: 'Mexican Unidad de Inversion (UDI)' },
  MYR: { description: 'Malaysian Ringgit' },
  MZN: { description: 'Mozambique Metical' },
  NAD: { description: 'Namibia Dollar' },
  NGN: { description: 'Naira' },
  NIO: { description: 'Cordoba Oro' },
  NOK: { description: 'Norwegian Krone' },
  NPR: { description: 'Nepalese Rupee' },
  NZD: { description: 'New Zealand Dollar' },
  OMR: { description: 'Rial Omani' },
  PAB: { description: 'Balboa' },
  PEN: { description: 'Nuevo Sol' },
  PGK: { description: 'Kina' },
  PHP: { description: 'Philippine Peso' },
  PKR: { description: 'Pakistan Rupee' },
  PLN: { description: 'Zloty' },
  PYG: { description: 'Guarani' },
  QAR: { description: 'Qatari Rial' },
  RON: { description: 'Romanian Leu' },
  RSD: { description: 'Serbian Dinar' },
  RUB: { description: 'Russian Ruble' },
  RWF: { description: 'Rwanda Franc' },
  SAR: { description: 'Saudi Riyal' },
  SBD: { description: 'Solomon Islands Dollar' },
  SCR: { description: 'Seychelles Rupee' },
  SDG: { description: 'Sudanese Pound' },
  SEK: { description: 'Swedish Krona' },
  SGD: { description: 'Singapore Dollar' },
  SHP: { description: 'Saint Helena Pound' },
  SLL: { description: 'Leone' },
  SOS: { description: 'Somali Shilling' },
  SRD: { description: 'Surinam Dollar' },
  SSP: { description: 'South Sudanese Pound' },
  STN: { description: 'Dobra' },
  SVC: { description: 'El Salvador Colon' },
  SYP: { description: 'Syrian Pound' },
  SZL: { description: 'Lilangeni' },
  THB: { description: 'Baht' },
  TJS: { description: 'Somoni' },
  TMT: { description: 'Turkmenistan New Manat' },
  TND: { description: 'Tunisian Dinar' },
  TOP: { description: 'Pa’anga' },
  TRY: { description: 'Turkish Lira' },
  TTD: { description: 'Trinidad and Tobago Dollar' },
  TWD: { description: 'New Taiwan Dollar' },
  TZS: { description: 'Tanzanian Shilling' },
  UAH: { description: 'Hryvnia' },
  UGX: { description: 'Uganda Shilling' },
  USD: { description: 'US Dollar' },
  USN: { description: 'US Dollar (Next day)' },
  UYI: { description: 'Uruguay Peso en Unidades Indexadas (URUIURUI)' },
  UYU: { description: 'Peso Uruguayo' },
  UZS: { description: 'Uzbekistan Sum' },
  VEF: { description: 'Bolivar' },
  VND: { description: 'Dong' },
  VUV: { description: 'Vatu' },
  WST: { description: 'Tala' },
  XAF: { description: 'CFA Franc BEAC' },
  XCD: { description: 'East Caribbean Dollar' },
  XDR: { description: 'SDR (Special Drawing Right)' },
  XOF: { description: 'CFA Franc BCEAO' },
  XPF: { description: 'CFP Franc' },
  XSU: { description: 'Sucre' },
  XUA: { description: 'ADB Unit of Account' },
  YER: { description: 'Yemeni Rial' },
  ZAR: { description: 'Rand' },
  ZMW: { description: 'Zambian Kwacha' },
  ZWL: { description: 'Zimbabwe Dollar' },
};

export const Currency = new GraphQLEnumType({
  name: 'Currency',
  description: 'All supported currencies',
  values: pick(IBANCurrencyValues, [
    'USD',
    'EUR',
    'GBP',
    'MXN',
    'CAD',
    'CHF',
    'UYU',
    'AUD',
    'INR',
    'JPY',
    'NZD',
    'NGN',
    'CZK',
    'BRL',
  ]),
});

export const TransferWiseCurrency = new GraphQLEnumType({
  name: 'TransferWiseCurrency',
  description: 'All currencies supported by TransferWise',
  values: pick(IBANCurrencyValues, [
    'EUR',
    'GBP',
    'INR',
    'USD',
    'AED',
    'ARS',
    'AUD',
    'BDT',
    'BGN',
    'BRL',
    'BWP',
    'CAD',
    'CHF',
    'CLP',
    'CNY',
    'CRC',
    'CZK',
    'DKK',
    'EGP',
    'GEL',
    'GHS',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'ILS',
    'JPY',
    'KES',
    'KRW',
    'LKR',
    'MAD',
    'MXN',
    'MYR',
    'NGN',
    'NOK',
    'NPR',
    'NZD',
    'PEN',
    'PHP',
    'PKR',
    'PLN',
    'RON',
    'RUB',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'TZS',
    'UAH',
    'UGX',
    'UYU',
    'VND',
    'XOF',
    'ZAR',
    'ZMW',
  ]),
});
