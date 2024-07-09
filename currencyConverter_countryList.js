const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

let initialResult=async()=>{
    let res=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`);
    let data=await res.json();
    console.log(data);
    let exchangeRate=data["usd"]["inr"];                            //here data["usd"]["inr"] needs to be used as we know the keyNames directly, it is not dynamic & hence not stored in some other variable(as in the casebof onchange())
    let printResult=document.querySelector("#printedResult");
    printResult.innerText=`1 USD = ${exchangeRate} INR`;
}
initialResult();

for(let i in countryList){                                                  //for accessing the keys of an object, for-in loop should used
    if(i==="USD"){
        let fromCountry=document.querySelector("#from");
        fromCountry.innerHTML+=`<option selected>${i}</option>`;            //selected keyword makes the option selected by default
    }
    if(i==="INR"){
        let toCountry=document.querySelector("#to");
        toCountry.innerHTML+=`<option selected>${i}</option>`;
    }
    let fromCountry=document.querySelector("#from");
    let toCountry=document.querySelector("#to");
    fromCountry.innerHTML+=`<option>${i}</option>`;
    toCountry.innerHTML+=`<option>${i}</option>`;
}

let selectFromCountry=document.querySelector("#from");
selectFromCountry.onchange=()=>{                                 
    let newValue=selectFromCountry.value;                   //submitted value can be accessed through .value
    let countryCode=countryList[newValue];       
    let fromFlag=document.querySelector("#fromImgDiv");
    fromFlag.innerHTML=`<img src="https://flagsapi.com/${countryCode}/flat/64.png" height="30px" width="30px">`
}

let selectToCountry=document.querySelector("#to");
selectToCountry.onchange=()=>{                                 
    let newValue=selectToCountry.value;                   //submitted value can be accessed through .value
    let countryCode=countryList[newValue];       
    let toFlag=document.querySelector("#toImgDiv");
    toFlag.innerHTML=`<img src="https://flagsapi.com/${countryCode}/flat/64.png" height="30px" width="30px">`
}

let final=document.querySelector("#lastDiv");
final.onclick=()=>{
    let amount=document.querySelector("#amount").value;                 //the value entered by the user in the form can be accessed through inputId.value
    let printedResult=document.querySelector("#printedResult");
    if(amount==="" || amount<0){
        printedResult.innerText="Invalid input!";
        return;
    }
    let fromCountryVal=selectFromCountry.value.toLowerCase();
    console.log(fromCountryVal);
    let toCountryVal=selectToCountry.value.toLowerCase();
    let finalRes=async()=>{
        let res=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCountryVal}.json`);
        let data= await res.json();
        let exchangeRate=data[fromCountryVal][toCountryVal];                //if propertyName is dynamic(determined at runtime or based on user input) objectName[keyName](without "") should be used & dot property or objectName["keyName"] should be used when the property name is known at development time
        printedResult.innerText=`${amount} ${selectFromCountry.value} = ${exchangeRate*amount} ${selectToCountry.value}`;
    }
    finalRes();
}