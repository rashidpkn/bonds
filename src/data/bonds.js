import { Link } from "react-router-dom";

let Ukbonds = [
    {
        issuerName: "Barclays Bank",
        annualCouponRate: 5.75,
        isin: "XS0134886067",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "14th September 2001",
        maturityDate: "14th September 2026"
    },
    {
        issuerName: "CO-OPERATIVE GROUP LTD",
        annualCouponRate: 11.00,
        isin: "GB00BFXW0630",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "18th December 2013",
        maturityDate: "22nd December 2025"
    },
    {
        issuerName: "HSBC",
        annualCouponRate: 6.75,
        isin: "XS0387079907",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "11th September 2008",
        maturityDate: "11th September 2028"
    },
    {
        issuerName: "Lloyds Bank",
        annualCouponRate: 7.625,
        isin: "XS0503834821",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "20th April 2010",
        maturityDate: "22nd April 2025"
    },
    {
        issuerName: "National Grid",
        annualCouponRate: 8.75,
        isin: "XS0058343251",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "27th June 1995",
        maturityDate: "27th June 2025"
    },
    // {
    //     issuerName: "Provident Financial Ltd",
    //     annualCouponRate: 5.125,
    //     isin: "XS1209091856",
    //     frequency: "Semi-Annual",
    //     type:"Fixed",
    //     issueDate: "9th April 2015",
    //     maturityDate: ""
    // },
    // {
    //     issuerName: "The Bankers Investment Trust",
    //     annualCouponRate: 8.00,
    //     isin: "GB0000871771",
    //     frequency: "Semi-Annual",
    //     type:"Fixed",
    //     issueDate: "28th June 2002",
    //     maturityDate: ""
    // },
    {
        issuerName: "UK Treasury",
        annualCouponRate: 6.00,
        isin: "GB0002404191",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "13th December 2004",
        maturityDate: "7th December 2028"
    },
    {
        issuerName: "UK Treasury",
        annualCouponRate: 5.00,
        isin: "GB0030880693",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "13th December 2004",
        maturityDate: "7th March 2025"
    },
    {
        issuerName: "United Utilities Group",
        annualCouponRate: 5.625,
        isin: "XS0159728236",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "20th December 2002",
        maturityDate: "20th December 2027"
    },
    {
        issuerName: "Vodafone Group",
        annualCouponRate: 5.625,
        isin: "XS0181816652",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "4th December 2003",
        maturityDate: "4th December 2025"
    },
    {
        issuerName: "Yorkshire Building Society",
        annualCouponRate: 13.5,
        isin: "XS0498549194",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "1st April 2010",
        maturityDate: "1st April 2025"
    }
];


let australianBonds = [
    {
        issuerName: "Australia & New Zealand Banking Group Ltd",
        annualCouponRate: 4.100,
        isin: "AU3CB0243525",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "28th March 2017",
        maturityDate: "28th September 2027"
    },
    {
        issuerName: "Australia Government Bond",
        annualCouponRate: 4.750,
        isin: "AU3TB0000135",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "20th October 2011",
        maturityDate: "21st April 2027"
    },
    {
        issuerName: "Australia Government Bond",
        annualCouponRate: 4.250,
        isin: "AU000XCLWAI8",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "12th March 2014",
        maturityDate: "21st April 2026"
    },
    {
        issuerName: "Australia Government Bond",
        annualCouponRate: 4.500,
        isin: "AU000XCLWAG2",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "19th November 2013",
        maturityDate: "21st April 2033"
    },
    {
        issuerName: "Barclays",
        annualCouponRate: 5.244,
        isin: "AU3CB0253789",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "15th June 2018",
        maturityDate: "15th June 2028"
    },
    {
        issuerName: "Commonwealth Bank of Australia",
        annualCouponRate: 4.200,
        isin: "XS1706939227",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "11th December 2015",
        maturityDate: "11th June 2026"
    },
    {
        issuerName: "Goldman Sachs",
        annualCouponRate: 9.000,
        isin: "XS2470182473",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "19th May 2012",
        maturityDate: "19th May 2042"
    },
    {
        issuerName: "ING Bank [Australia] Ltd.",
        annualCouponRate: 4.500,
        isin: "AU3CB0289551",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "26th May 2022",
        maturityDate: "26th May 2029"
    },
    {
        issuerName: "Lloyds Banking Group",
        annualCouponRate: 5.391,
        isin: "AU3CB0290096",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "10th December 2022",
        maturityDate: "10th June 2027"
    },
    {
        issuerName: "Lloyds Banking Group",
        annualCouponRate: 4.750,
        isin: "AU3CB0253227",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "23rd May 2018",
        maturityDate: "23rd May 2028"
    },
    // {
    //     issuerName: "National Australia Bank Ltd",
    //     annualCouponRate: 3.250,
    //     isin: "XS1732146185",
    //     frequency: "Annually",
    //     type:"Fixed",
    //     issueDate: "11th December 2017",
    //     maturityDate: ""
    // },
    // {
    //     issuerName: "Next Generation Clubs Australia Pty Ltd",
    //     annualCouponRate: 7.900,
    //     isin: "AU3CB0253243",
    //     frequency: "Quarterly",
    //     type:"Fixed",
    //     issueDate: "22nd June 2018",
    //     maturityDate: ""
    // },
    {
        issuerName: "Qantas Airways",
        annualCouponRate: 5.250,
        isin: "AU3CB0274280",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "9th September 2020",
        maturityDate: "9th September 2030"
    },
    {
        issuerName: "Queensland Treasury Corporation",
        annualCouponRate: 6.500,
        isin: "AU0000XQLQI5",
        frequency: "Bi-Annually",
        type: "Fixed",
        issueDate: "14th March 2008",
        maturityDate: "14th March 2033"
    },
    // {
    //     issuerName: "Virgin Australia Holdings Ltd",
    //     annualCouponRate: 8.250,
    //     isin: "AU3CB0253367",
    //     frequency: "Semi-Annual",
    //     type:"Fixed",
    //     issueDate: "30th May 2018",
    //     maturityDate: ""
    // },
    // {
    //     issuerName: "Westpac Banking Corporation",
    //     annualCouponRate: 5.250,
    //     isin: "AU3CB0216240",
    //     frequency: "Annually",
    //     type:"Fixed",
    //     issueDate: "21st November 2013",
    //     maturityDate: ""
    // }
]

let canadianBonds = [
    {
        issuerName: "Canada Life",
        annualCouponRate: 7.529,
        isin: "CA135110AB00",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "14th March 2002",
        maturityDate: "30th June 2032"
    },
    {
        issuerName: "Canada Life Assurance",
        annualCouponRate: 6.400,
        isin: "CA134917AE39",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "11th December 1999",
        maturityDate: "10th December 2028"
    },
    {
        issuerName: "Canadian Imperial Bank of Commerce",
        annualCouponRate: 10.8,
        isin: "CA136069AU55",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "15th May 1991",
        maturityDate: "15th May 2031"
    },
    // {
    //     issuerName: "Canadian Pacific Railway Co",
    //     annualCouponRate: 6.910,
    //     isin: "CA13645RAA29",
    //     frequency: "Semi-Annual",
    //     type:"Fixed",
    //     issueDate: "1st October 1999",
    //     maturityDate: ""
    // },
    {
        issuerName: "Dais Holdings",
        annualCouponRate: 12.0,
        isin: "CA23404LAA58",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "3rd June 2019",
        maturityDate: "3rd June 2029"
    },
    {
        issuerName: "Enbridge Inc.",
        annualCouponRate: 7.600,
        isin: "CA21053ZAK09",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "29th October 1996",
        maturityDate: "29th October 2026"
    },
    {
        issuerName: "Energir Inc.",
        annualCouponRate: 7.050,
        isin: "CA368271AU66",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "26th October 2000",
        maturityDate: "30th October 2030"
    },
    {
        issuerName: "Epcor Utilities Inc.",
        annualCouponRate: 6.800,
        isin: "CA294105AB77",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "28th June 1999",
        maturityDate: "28th June 2029"
    },
    {
        issuerName: "Government of Canada",
        annualCouponRate: 8.000,
        isin: "CA135087VW17",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "5th January 1996",
        maturityDate: "6th January 2027"
    },
    {
        issuerName: "Government of Canada",
        annualCouponRate: 9.000,
        isin: "CA135087VH40",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "8th February 1994",
        maturityDate: "6th January 2025"
    },
    {
        issuerName: "Government of Canada",
        annualCouponRate: 5.750,
        isin: "CA135087XG49",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "15th October 2001",
        maturityDate: "1st June 2033"
    },
    {
        issuerName: "IGM FINANCIAL INC",
        annualCouponRate: 7.450,
        isin: "CA46152HAD31",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "5th November 2001",
        maturityDate: "5th November 2031"
    },
    {
        issuerName: "Power Corporation of Canada",
        annualCouponRate: 8.570,
        isin: "CA739239AC53",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "20th April 2009",
        maturityDate: "22nd April 2039"
    },
    // {
    //     issuerName: "Royal Bank of Canada",
    //     annualCouponRate: 9.300,
    //     isin: "CA780087BF80",
    //     frequency: "Semi-Annual",
    //     type:"Fixed",
    //     issueDate: "8th June 1993",
    //     maturityDate: ""
    // },
    {
        issuerName: "Toronto-Dominion Bank",
        annualCouponRate: 9.150,
        isin: "CA891160EW99",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "4th December 2000",
        maturityDate: "26th May 2025"
    },
    {
        issuerName: "Transcanada Pipelines",
        annualCouponRate: 8.230,
        isin: "CA89353ZAR97",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "28th May 1996",
        maturityDate: "16th January 2031"
    },
    {
        issuerName: "Westcoast Energy Inc",
        annualCouponRate: 8.850,
        isin: "CA95751DAK87",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "21st July 1995",
        maturityDate: "21st July 2025"
    }
]


let europeanBonds = [
    {
        issuerName: "Barclays",
        annualCouponRate: 7.5,
        isin: "IT0006712142",
        frequency: "Quarterly",
        type: "Fixed",
        issueDate: "29th January 2010",
        maturityDate: "29th January 2025"
    },
    {
        issuerName: "BNP Paribas",
        annualCouponRate: 6.25,
        isin: "FR0010239368",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "17th October 2005",
        maturityDate: "N/A"
    },
    {
        issuerName: "Deutsche Bank",
        annualCouponRate: 10.0,
        isin: "DE000A30VT97",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "14th November 2022",
        maturityDate: "N/A"
    },
    {
        issuerName: "European Investment Bank (EIB)",
        annualCouponRate: 9.25,
        isin: "XS2436920321",
        frequency: "Semi-Annual",
        type: "Fixed",
        issueDate: "28th January 2022",
        maturityDate: "29th September 2027"
    },
    {
        issuerName: "France FRGOVT",
        annualCouponRate: 6.25,
        isin: "FR0000571150",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "25th February 1994",
        maturityDate: "25th October 2025"
    },
    {
        issuerName: "Gaz Capital SA",
        annualCouponRate: 8.625,
        isin: "XS0191754729",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "30th April 2023",
        maturityDate: "30th April 2034"
    },
    {
        issuerName: "Germany DEGOVT",
        annualCouponRate: 6.5,
        isin: "DE0001135044",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "4th July 1997",
        maturityDate: "4th July 2027"
    },
    {
        issuerName: "International Bank for Reconstruction and Development",
        annualCouponRate: 8.25,
        isin: "XS184434857",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "2nd July 2018",
        maturityDate: "21st December 2026"
    },
    {
        issuerName: "Jaguar Land Rover Automotive",
        annualCouponRate: 6.875,
        isin: "XS2010037682",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "26th November 2019",
        maturityDate: "15th November 2026"
    },
    {
        issuerName: "Republic of Ireland IREGOVT",
        annualCouponRate: 5.4,
        isin: "IE00B4TVOD44",
        frequency: "Annually",
        type: "Fixed",
        issueDate: "13th October 2009",
        maturityDate: "13th March 2025"
    },
    {
        issuerName: "Santander",
        annualCouponRate: 8.25,
        isin: "XS1925004357",
        frequency: "Quarterly",
        type: "Fixed",
        issueDate: "20th December 2018",
        maturityDate: "N/A"
    },


    {
        issuerName: "Spanish Government",
        annualCouponRate: 5.15,
        isin: "ES00000127E4",
        frequency: "Annual",
        type: "Fixed",
        issueDate: "February 10, 2015",
        maturityDate: "February 10, 2026"
    },

    {
        issuerName: "French Government",
        annualCouponRate: 6.00,
        isin: "FR0000571150",
        frequency: "Annual",
        type: "Fixed",
        issueDate: "October 25, 1993",
        maturityDate: "October 25, 2025"
    },

    {
        issuerName: "German Government",
        annualCouponRate: 6.25,
        isin: "DE0001135044",
        frequency: "Annual",
        type: "Fixed",
        issueDate: "June 1, 2000",
        maturityDate: "January 4, 2030"
    },

    {
        issuerName: "Ireland Government",
        annualCouponRate: 5.72,
        isin: "IE00B7XWNN51",
        frequency: "Annual",
        type: "Fixed",
        issueDate: "July 20, 2017",
        maturityDate: "July 20, 2027"
    },
    {
        issuerName: "Italy Government",
        annualCouponRate: 5.75,
        isin: "IT0005170839",
        frequency: "Annual",
        type: "Fixed",
        issueDate: "February 1, 2019",
        maturityDate: "February 1, 2029"
    },
    {
        issuerName: "Portugal Government",
        annualCouponRate: 5.65,
        isin: "PTOTEWOE0003",
        frequency: "Annual",
        type: "Fixed",
        issueDate: "October 15, 2015",
        maturityDate: "October 15, 2025"
    },
]

const nationalBonds = [

]

const bonds = [...Ukbonds, ...australianBonds, ...canadianBonds, ...europeanBonds, ...nationalBonds]



export { Ukbonds, australianBonds, canadianBonds, europeanBonds, nationalBonds }

export default bonds