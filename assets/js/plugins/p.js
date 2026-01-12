$ = jQuery.noConflict();
var haveAccount = Drupal.t("Have a Zoho Account?"),
    signuplogin = Drupal.t("SIGN IN");
var accessZoho = Drupal.t("Access Zoho"),
    zPrdSignupLinkText,
    ss = 0,
    android = location.href.match(/#android$/) || null != navigator.userAgent.match(/Android/i),
    getDomain = document.domain,
    splitUrl = getDomain.split("."),
    domainOne = splitUrl.pop();
$(".zw-global-header").append(
    '<div class="header"> <a class="logo" href="https://www.zoho.' +
        domainOne +
        '/"> ZOHO </a> <div class="signing"></div> </div> <div class="product-header-top"> <div class="content-wrap"> <div class="product-title"><a href="/' +
        $("body").attr("data-prdname") +
        '/">' +
        $("body").attr("data-prdname-display") +
        '</a></div> <div class="zgh-accounts"><a href="https://accounts.zoho.com/signin?servicename=Zohohome&amp;signupurl=https://www.zoho.' +
        domainOne +
        '/signup.html&amp;serviceurl=https://home.zoho.com" class="zgh-login" style="display: none;">SIGN IN</a><a href="/signup.html?src=index1" class="zgh-signup" style="display: inline-block;">' +
        Drupal.t("Get Started") +
        '</a></div> <div class="product-nav-links product-nav-links-new"></div> </div> </div>'
);
$(".login-text .login").addClass("zgh-login");
if ($(".z-product").length > 0) {
    if ($(".loggedin-userinfo").length < 1) {
        $(".z-product").after('<div class="loggedin-userinfo" style="display: none;"></div>');
    }
}
typeof CountryCode == "undefined" ? (CountryCode = "US") : "";
var allProduct = [
    "home",
    "CRM",
    "Campaigns",
    "ContactManager",
    "Forms",
    "Sites",
    "SalesIQ",
    "Survey",
    "Social",
    "Assist",
    "Support",
    "BugTracker",
    "Connect",
    "Docs",
    "Mail",
    "Meeting",
    "Projects",
    "ShowTime",
    "Vault",
    "Chat",
    "Books",
    "Invoice",
    "Subscriptions",
    "Expense",
    "Checkout",
    "People",
    "Recruit",
    "Creator",
    "Reports",
    "Motivator",
    "Accounts",
    "AppCreator",
    "mdm",
    "Seminar",
    "crmplus",
    "wiki",
    "Desk",
    "Cliq",
    "Developer",
    "SalesInbox",
    "Sign",
    "Calendar",
    "WorkPlace",
    "Events",
    "officeapi",
    "Sprints",
    "pagesense",
    "flow",
    "show",
    "sheet",
    "writer",
    "notebook",
    "one",
    "partnerstore",
    "backstage",
    "marketplace",
    "Commerce",
    "analytics-plus",
    "teamdrive",
    "officeplatform",
    "peopleplus",
    "inventory",
    "workerly",
    "zohoorchestly",
    "phonebridge",
    "knit",
    "analytics",
    "patchmanagerplus",
    "mail360",
    "marketingautomation",
    "workdrive",
    "contacts",
    "ziasearch",
    "bookings",
    "office",
    "deluge",
    "remoteaccessplus",
    "dataprep",
    "creatorplus",
    "wallet",
    "docscanner",
    "commerceplus",
    "fsm",
    "learn",
    "identity-management",
    "log360-cloud",
    "ink",
    "catalyst",
    "analyticsplusplugin",
    "it-analytics",
    "zohoscanner",
    "apptics",
    "Bigin",
    "annotator",
    "teaminbox",
    "lens",
    "Transmail",
    "it-management",
    "webinar",
    "remotely",
    "telephony",
    "covid",
    "partners",
    "classes",
    "toolkit",
    "ZohoPOS",
    "backtowork",
    "zia",
];
var allProductCRM = [
    "-",
    "CRM",
    "Campaigns",
    "-",
    "-",
    "-",
    "-",
    "Survey",
    "-",
    "Assist",
    "-",
    "BugTracker",
    "-",
    "Docs",
    "Mail",
    "Meeting",
    "Projects",
    "-",
    "-",
    "-",
    "Books",
    "Invoice",
    "Subscriptions",
    "Expense",
    "-",
    "People",
    "Recruit",
    "Creator",
    "Reports",
    "Motivator",
    "-",
    "AppCreator",
    "-",
    "-",
    "CRMPlus",
    "Wiki",
    "Desk",
    "-",
    "-",
    "-",
    "Sign",
    "-",
    "Workplace",
    "-",
    "-",
    "-",
    "PageSense",
    "Flow",
    "-",
    "-",
    "-",
    "-",
    "One",
    "-",
    "-",
    "-",
    "Commerce",
    "-",
    "TeamDrive",
    "-",
    "-",
    "Inventory",
    "Workerly",
    "Orchestly",
    "-",
    "-",
    "Analytics",
    "-",
    "-",
    "MarketingAutomation",
    "WorkDrive",
    "-",
    "-",
    "Bookings",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
];
var nameServices = [
    [
        "ZohoHome",
        "ZohoCRM",
        "ZohoCampaigns",
        "ZohoContactManager",
        "ZohoForms",
        "ZohoSites",
        "LiveDesk",
        "ZohoSurvey",
        "ZohoSocial",
        "ZohoAssist",
        "ZohoSupport",
        "ZohoBugTracker",
        "ZohoPulse",
        "ZohoPC",
        "VirtualOffice",
        "ZohoMeeting",
        "ZohoProjects",
        "ZohoShowtime",
        "ZohoVault",
        "ZohoChat",
        "ZohoBooks",
        "ZohoInvoice",
        "ZohoSubscriptions",
        "ZohoExpense",
        "ZohoCheckout",
        "zohopeople",
        "ZohoRecruit",
        "ZohoCreator",
        "ZohoReports",
        "ZohoMotivator",
        "",
        "",
        "",
        "",
        "CRMPlus",
        "ZohoWiki",
        "ZohoSupport",
        "ZohoChat",
        "ZohoCRM",
        "SalesInbox",
        "ZohoSign",
        "ZohoCalendar",
        "VirtualOffice",
        "",
        "OfficeAPI",
        "ZohoSprints",
        "PageSense",
        "ZohoFlow",
        "ZohoShow",
        "ZohoSheet",
        "ZohoWriter",
        "NoteBook",
        "ZohoOne",
        "",
        "ZohoBackStage",
        "ZohomarketPlace",
        "ZohoCommerce",
        "",
        "TeamDrive",
        "OfficeAPI",
        "Peopleplus",
        "",
        "ZohoWorkerly",
        "Orchestly",
        "phonebridge",
        "zohostreamline",
        "ZohoReports",
        "PatchManagerPlusCloud",
        "mail360",
        "zohomarketinghub",
        "TeamDrive",
        "zohoContacts",
        "ZohoSearch",
        "ZohoBookings",
        "office",
        "deluge",
        "",
        "ZohoDataprep",
        "ZohoCreatorPlus",
        "wallet",
        "docscanner",
        "ZohoCommerce",
        "",
        "ZohoLearn",
        "IDMPOD",
        "logs360cloud",
        "ZohoInk",
        "",
        "",
        "",
        "",
        "",
        "ZohoBigin",
        "",
        "",
        "ZohoLens",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
];
var oldUSDvalue = [
    "AI",
    "AG",
    "AR",
    "AW",
    "BS",
    "BB",
    "BZ",
    "BM",
    "BO",
    "BR",
    "KY",
    "CL",
    "CO",
    "CR",
    "CW",
    "DM",
    "DO",
    "EC",
    "SV",
    "FK",
    "GD",
    "GU",
    "GT",
    "GY",
    "HT",
    "HN",
    "JM",
    "JP",
    "MX",
    "KZ",
    "NI",
    "PA",
    "PY",
    "PE",
    "PR",
    "BL",
    "SH",
    "KN",
    "LC",
    "MF",
    "PM",
    "VC",
    "SX",
    "SR",
    "TT",
    "TC",
    "UY",
    "VE",
    "VG",
    "VI",
    "GP",
    "MQ",
    "GS",
];
var USDAfrica = [
    "TD",
    "DZ",
    "MG",
    "MW",
    "BQ",
    "AX",
    "CI",
    "GH",
    "PS",
    "CV",
    "CF",
    "ZW",
    "CG",
    "GW",
    "CD",
    "MR",
    "SS",
    "AO",
    "KM",
    "ML",
    "GN",
    "DJ",
    "PN",
    "GQ",
    "BJ",
    "ER",
    "TN",
    "TG",
    "TZ",
    "TK",
    "YT",
    "UG",
    "RW",
    "BV",
    "RE",
    "MU",
    "BW",
    "MZ",
    "NA",
    "SL",
    "SN",
    "MS",
    "ST",
    "MA",
    "ET",
    "SB",
    "YE",
    "ZM",
    "NE",
    "SO",
    "SD",
    "JO",
    "WF",
    "EH",
    "BI",
    "TF",
    "BF",
    "LS",
    "LY",
    "GA",
    "SZ",
    "CM",
    "LR",
    "GM",
    "SJ",
    "LB",
    "PF",
    "GF",
];
var oldUSDprds = [
    "analytics",
    "assist",
    "backstage",
    "bookings",
    "bugtracker",
    "campaigns",
    "commerce",
    "connect",
    "creator",
    "creatorplus",
    "desk",
    "flow",
    "forms",
    "lens",
    "marketingautomation",
    "officeplatform",
    "one",
    "people",
    "peopleplus",
    "recruit",
    "sign",
    "sites",
    "social",
    "sprints",
    "survey",
    "vault",
    "workdrive",
    "workerly",
    "crm",
    "crmplus",
    "startups",
];
var stateupdate = [];
var allProductlowerCase = [];
for (var i = 0; i < allProduct.length; i++) {
    allProductlowerCase[i] = allProduct[i].toLowerCase();
}
var Zdomain = splitUrl.pop();
var langsrc = "/";
var productName = "home";
"zohocorp" == Zdomain && (Zdomain = "zoho");
var getusername,
    zPrdSignupLink = "https://www.zoho." + domainOne + "/signup.html",
    zPrdLoginLink =
        "https://accounts.zoho.com/signin?servicename=ZohoHome&signupurl=https://www.zoho." +
        domainOne +
        "/signup.html",
    ZdomainName = "zoho",
    ZcheckDomain = "www.local" + "zoho.com",
    _globalAccess = "",
    userAgent = navigator.userAgent || navigator.vendor || window.opera,
    newFooter = "",
    currentUrlLang = "",
    localUrlLang = "",
    _com = "com",
    _eu = "eu",
    _lhref = window.location.href,
    isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
var onlycom = !1,
    _pathName = window.location.pathname,
    dcenabled = !0,
    nondc = !0,
    onlyin = !1;
var dcdomainOne = domainOne;
function nonUSDC() {
    if (window.location.pathname.includes("retailiq")) {
        dcdomainOne = "in";
        onlycom = false;
        onlyin = true;
    }
}
nonUSDC();
var dcVal = "0",
    myimagebool = 1,
    currentYear = "2025",
    creativeLang = "",
    knowprd = typeof document.getElementsByTagName("body")[0].getAttribute("data-prdname");
var _preZ = "p" + "r" + "e" + "z" + "o" + "h" + "o" + "w" + "e" + "b" + "." + "z" + "o" + "h" + "o" + ".com",
    _preZC = "p" + "r" + "e" + "z" + "o" + "h" + "o" + "w" + "e" + "b" + "." + "z" + "o" + "h" + "o" + "corp" + ".com",
    _zcmsZC = "z" + "c" + "m" + "s" + "w" + "e" + "b" + "." + "z" + "o" + "h" + "o" + "c" + "o" + "r" + "p" + ".com",
    _zcopr = "zoho" + "corp",
    _lz = "l" + "o" + "c" + "a" + "l" + "zoho",
    _preccms = "c" + "c" + "m" + "s" + "." + "z" + "o" + "h" + "o" + "c" + "o" + "r" + "p." + "c" + "o" + "m",
    _prewww = "p" + "r" + "e" + "w" + "w" + "w";
window.location.pathname.includes("index1") ? $("body").addClass("zwc-indexb") : "";
if (Zdomain == _zcopr) {
    Zdomain = "zoho";
}
if (Zdomain == "localbigin" || Zdomain == "localqntrl") {
    Zdomain = "local" + "zoho";
    ZdomainName = "local" + "zoho";
}
var ZUrlDomain = Zdomain;
var langArr = [
    "en",
    "es-xl",
    "pt-br",
    "de",
    "fr",
    "nl",
    "jp",
    "ar",
    "id",
    "th",
    "vi",
    "zh-hans",
    "fr-ca",
    "hi",
    "zh-hant",
    "hi-in",
    "he",
    "it",
    "ko",
    "es",
    "da",
];
var onlylocal = ["ru", "tr"];
var usedLanArr = ["fr", "de", "pt-br", "es-xl", "nl"];
var locallang = ["en-apac", "en-in", "en-br", "en-mea", "en-sg", "en-za", "en-au", "en-ke", "en-ch", "en-sa"];
if (_lhref.includes("/es-mx/sign/")) {
    langArr.push("es-mx");
}
var lancountry = {
    en: "English",
    fr: "FranÃ§ais",
    de: "Deutsch",
    "es-xl": "EspaÃ±ol",
    "pt-br": "PortuguÃªs (Brasil)",
    jp: "æ—¥æœ¬èªž",
    nl: "Nederlands",
    "zh-hans": "ç®€ä½“ä¸­æ–‡",
    id: "Bahasa Indonesia",
    th: "à¸ à¸²à¸©à¸²à¹„à¸—à¸¢",
    ar: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
    vi: "Tiáº¿ng Viá»‡t",
    ko: "í•œêµ­ì–´",
    it: "Italiano",
    ru: "Ð ÑƒÑÑÐºÐ¸Ð¹",
    tr: "TÃ¼rkÃ§e",
    he: "×¢×‘×¨×™×ª",
    "fr-ca": "FranÃ§ais (Canada)",
    "en-apac": "English",
    "en-in": "English (India)",
    "en-br": "English (Brasil)",
    "en-mea": "English (MEA)",
    "en-sg": "English (SG)",
    "en-za": "English (ZA)",
    "en-au": "English (AU)",
    "en-ke": "English (KE)",
    "en-ch": "English (CH)",
    "en-sa": "English (SA)",
    "es-mx": "EspaÃ±ol (MX)",
    "zh-hant": "ç¹ä½“ä¸­æ–‡",
    hi: "à¤¹à¤¿à¤¨à¥à¤¦à¥€",
    "hi-in": "à¤¹à¤¿à¤¨à¥à¤¦à¥€",
};
var bannertext = {
    en: "Hello ::: Now you can navigate",
    fr: "Bonjour ::: Vous pouvez maintenant naviguer en",
    de: "Wechseln ::: Diese Seite ist auch auf Deutsch verfÃ¼gbar",
    "es-xl": "Hola ::: Â¡Ahora puede navegar en",
    "pt-br": "OlÃ¡ ::: Agora vocÃª pode navegar em",
    jp: "ç§»å‹•ã™ã‚‹ ::: æ—¥æœ¬èªžã®å…¬å¼ã‚µã‚¤ãƒˆã‚’ã”åˆ©ç”¨ã„ãŸã ã‘ã¾ã™ã€‚",
    nl: "Klik hier ::: Navigeer nu in het",
    "zh-hans": "Hello ::: Now you can navigate",
    id: "Hello ::: Sekarang Anda bisa berselancar dalam",
    th: "à¸ªà¸§à¸±à¸ªà¸”à¸µ ::: à¸•à¸­à¸™à¸™à¸µà¹‰à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¸”à¸¹à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹€à¸›à¹‡à¸™à¸ à¸²à¸©à¸²à¹„à¸—à¸¢à¹„à¸”à¹‰à¹à¸¥à¹‰à¸§",
    ar: "ÙŠÙ…ÙƒÙ†ÙƒÙ… Ø§Ù„Ø¢Ù† Ø§Ù„ØªØµÙØ­ Ø¨Ø§Ù„Ù„ØºØ© ::: Ù…Ø±Ø­Ø¨Ø§Ù‹",
    vi: "Xin ChÃ o ::: BÃ¢y giá» báº¡n cÃ³ thá»ƒ xem trang nÃ y báº±ng",
    ko: "Hello ::: Now you can navigate",
    it: "Ciao ::: Ora puoi navigare",
    ru: "Hello ::: Now you can navigate",
    tr: "Hello ::: Now you can navigate",
    he: "Hello ::: Now you can navigate",
    "fr-ca": "Hello ::: Now you can navigate",
    "en-apac": "Hello ::: Now you can navigate",
    "en-in": "Hello ::: Now you can navigate",
    "en-br": "Hello ::: Now you can navigate",
    "en-mea": "Hello ::: Now you can navigate",
    "en-sg": "Hello ::: Now you can navigate",
    "zh-hant": "Hello ::: Now you can navigate",
    hi: "à¤¨à¤®à¤¸à¥à¤•à¤¾à¤° ::: à¤…à¤¬ à¤†à¤ª à¤¨à¥‡à¤µà¤¿à¤—à¥‡à¤Ÿ à¤•à¤° à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
    "hi-in": "à¤¨à¤®à¤¸à¥à¤•à¤¾à¤° ::: à¤…à¤¬ à¤†à¤ª à¤¨à¥‡à¤µà¤¿à¤—à¥‡à¤Ÿ à¤•à¤° à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
};
var localRedirectionlist = {
    "es-xl": "BZ,CR,SV,GT,HN,MX,NI,PA,AR,BO,BR,CL,CO,EC,GY,PY,PE,SR,UY,VE,CU,DO,HT,PR,BL,MF",
    fr: "FR",
    nl: "NL",
    ar: "SA,EG",
    "pt-br": "BR",
    id: "ID",
    de: "DE",
};
for (var i = 0; i < onlylocal.length; i++) {
    if (window.location.host == _preZ) {
        langArr.push(onlylocal[i]);
    }
}
var currentLang = (function () {
        var t = "";
        langArr.forEach(function (e) {
            if (t == "") {
                if (window.location.href.split("/").indexOf(e) > -1) {
                    t = e;
                }
            }
        });
        locallang.forEach(function (e) {
            if (window.location.href.split("/").indexOf(e) > -1) {
                localUrlLang = e;
            }
        });
        currentUrlLang = t;
        creativeLang = usedLanArr.indexOf(currentUrlLang) > -1;
        currentUrlLang != "" ? (langsrc = "/" + currentUrlLang + "/") : "";
        if (t == "es-xl" || t == "es-mx") {
            t = "es";
        } else if (t == "pt-br") {
            t = "pt";
        } else if (t == "jp") {
            t = "ja";
        } else if (t == "zh-hans") {
            t = "zh";
            domainOne = "com.cn";
        } else if (t == "zh-hant") {
            t = "zh_tw";
        } else if (t == "he") {
            t = "iw";
        } else if (t == "fr-ca") {
            t = "fr_ca";
        } else if (t == "hi-in") {
            t = "hi";
        }
        t == "in" ? ((t = ""), (currentUrlLang = "")) : "";
        t == "id" ? (t = "in") : "";
        return t;
    })(),
    addingLangRtlClass = (function () {
        if (["ar", "he"].includes(currentUrlLang)) {
            $("body").addClass("lang-rtl");
        }
    })(),
    selectEvents = (function () {
        if ("ontouchstart" in document.documentElement === true) return "touchstart";
        else return "click";
    })(),
    localredirectionval = "0",
    footer_ebable = true,
    currencyCodeArray = [
        "USD",
        "OLDUSD",
        "EUR",
        "INR",
        "GBP",
        "BRL",
        "JPY",
        "AUD",
        "NZD",
        "SGD",
        "AED",
        "SAR",
        "MXN",
        "CNY",
        "ZAR",
        "NGN",
        "KES",
        "EGP",
        "CAD",
        "THB",
        "EURTR",
        "IDR",
        "USDTZ",
        "USDUG",
        "MYR",
        "USDAFRICA",
        "DACEUR",
    ],
    currencySymbolArray = [
        "&#36;",
        "&#36;",
        "&#8364;",
        "&#8377;",
        "&#163;",
        "R&#36;",
        "&#165;",
        "A&#36;",
        "NZ&#36;",
        "S&#36;",
        "AED",
        "SAR",
        "Mex&#36;",
        "&#165;",
        "R",
        "&#8358;",
        "KES",
        "E&#163;",
        "C&#36;",
        "&#3647;",
        "&#8364;",
        "Rp",
        "$",
        "$",
        "RM",
        "$",
        "&#8364;",
    ],
    currencyCountryArray = [
        "ALL",
        "ALL",
        "EUlist",
        "IN",
        "GB",
        "BR",
        "JP",
        "AU",
        "NZ",
        "SG",
        "AE",
        "SA",
        "MX",
        "CN",
        "ZA",
        "NG",
        "KE",
        "EG",
        "CA",
        "TH",
        "TR",
        "ID",
        "TZ",
        "UG",
        "MY",
        "ALL",
        "DAClist",
    ];
let countryDAC = ["DE", "AT", "CH"];
if (Zdomain == "local" + "zoho" || domainOne == "com.cn") {
    dcenabled = false;
    nondc = false;
}
var predomain = window.location.hostname == _preZ || window.location.hostname == _preZC || Zdomain == _lz;
var customvar = {
    outproduct: ["zohoorchestly", "trainercentral", "community"],
    isMobile: /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent),
    cnavailablepage: false,
    cachedWidth: window.innerWidth,
    pathname: window.location.pathname,
    host: window.location.hostname,
    iphone: /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    ipad: navigator.userAgent.match(/iPad/i) != null,
    android: /Android/.test(navigator.userAgent) && !window.MSStream,
    host: window.location.hostname,
    numberOfCountries: "150",
    numberOfUsers: "130",
    numberOfUsersText: Drupal.t("hundred and twenty"),
    numberOfEmployees: "18",
    numberOfYears: "29",
    numberOfPartners: "2400",
    numberOfApps: "55",
    numberOfCustomers: "900",
    numberOfDataCenters: "16",
    absurl: window.location.origin + window.location.pathname,
    userelem: "",
    transCName: typeof CountryName != "undefined" ? CountryName : "",
    hostName: "www.zoho." + domainOne,
    sHostName: "l",
    servicename: "",
    mynewsignup: [],
    textparam: false,
    isBlogPage: $("body").attr("site") === "zohodblogs",
    showchangecountry: _lhref.indexOf("/r/signup.html") > 0 ? "true" : "false",
    zcCurrentDomain:
        global_getUrlParam("domainChange") != ""
            ? global_getUrlParam("domainChange")
            : window.location.host === _preZ
              ? "https://" + _preZ
              : window.location.host === "prewww" + ".zoho.com"
                ? "https://prewww" + ".zoho.com"
                : "https://www.zoho." + domainOne,
    videoDomain: predomain ? "https://workdrive.nimbuspop.com/zvideo/" : "https://workdrive.zohoexternal.com/zvideo/",
    IfStatementDomainForVideo: predomain ? "workdrive.nimbuspop.com" : "www.zoho.com/zvideo/",
    receiveMarketingText:
        Drupal.t("Yes, I would like to receive marketing communication regarding") +
        " " +
        Drupal.t("Zoho&rsquo;s") +
        " " +
        Drupal.t("products, services, and events from Zoho and its regional partners."),
    optinArr: [
        "AT",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "GR",
        "IT",
        "LT",
        "MT",
        "NL",
        "PL",
        "RO",
        "SK",
        "SI",
        "ES",
        "IS",
        "NO",
        "CH",
        "CA",
        "XK",
    ],
    optoutArr: ["EE", "FI", "FR", "HU", "IE", "LV", "LU", "PT", "SI", "SE", "GB", "ZA"],
    doubleoptinArr: ["DE", "AU", "TR"],
    domainArr: [["com", "in", "eu", "com.au", "jp"], [], ["zoho.com", "zoho.in", "zoho.eu", "zoho.com.au", "zoho.jp"]],
    zwcNewFooter: [
        "accounts",
        "bigin",
        "books",
        "billing",
        "expense",
        "inventory",
        "payments",
        "payroll",
        "careers",
        "checkout",
        "financeplus",
        "humans-of-zoho",
        "invoice",
        "marketplace",
        "spark",
        "zakya",
    ],
    pArr: [
        "accounts",
        "notebook",
        "mail",
        "analytics",
        "cliq",
        "creator",
        "meeting",
        "sheet",
        "show",
        "wiki",
        "writer",
        "people",
        "projects",
        "docs",
        "discussions",
        "invoice",
        "calendar",
        "zia search",
        "video",
        "contacts",
        "crm",
        "gadgets",
        "zoho store",
        "servicedesk plus",
        "recruit",
        "campaigns",
        "desk",
        "assist",
        "books",
        "sites",
        "zoho api",
        "zoho mobile",
        "bugtracker",
        "social",
        "contact manager",
        "task engine",
        "zoho mobile sync",
        "connect",
        "zohomailwatch",
        "survey",
        "salesiq",
        "forms",
        "vault",
        "logs",
        "zoho",
        "zoho mobile proxy",
        "jproxy",
        "subscriptions",
        "manage engine",
        "zoho home",
        "dbsearch",
        "mapsapi",
        "showtime",
        "site24x7",
        "alarmsone",
        "expense",
        "pdfgen",
        "motivator",
        "zohoappcreator",
        "transmail",
        "inventory",
        "deluge runtime",
        "zoho directory (zd)",
        "dlserver",
        "shortenurl",
        "ear",
        "iis",
        "maps-nomi",
        "mapstiles",
        "mobile device management",
        "plusloggerone",
        "crmplus",
        "salesinbox",
        "zmnotifications",
        "sheetapp",
        "zmindexing",
        "zohoplugin",
        "zohospotlight",
        "zmimageprocessing",
        "mi",
        "bugbounty",
        "zohoreceipts",
        "zohoquotes",
        "zoho payroll",
        "zohoparser",
        "soc",
        "zoho checkout",
        "zoho finance plus",
        "zoho backstage",
        "wms",
        "zmintegration",
        "zlabsml",
        "sign",
        "zoho one",
        "pagesense",
        "flow",
        "sprints",
        "zoho gst",
        "zohoasp",
        "nameserver",
        "zohocode",
        "hacksaw",
        "zoho marketplace",
        "zapps",
        "zohofinancerisk",
        "patch manager plus",
        "malware",
        "log360cloud",
        "zmmx",
        "startwith",
        "zmuploaddownload",
        "zoho commerce",
        "zohoarm",
        "zmparser",
        "zoho profile",
        "scrapy",
        "office integrator",
        "zohobills",
        "socialdata",
        "sastest",
        "cstore",
        "ziaplatform",
        "zlabsdl",
        "workdrive",
        "zmpop",
        "phonebridge",
        "orchestly",
        "zmsmtp",
        "zohotravel",
        "zmimap",
        "trends",
        "remote access",
        "zohostoreapi",
        "webanalytics",
        "zohodashboards",
        "zohomarketinghub",
        "zohoink",
        "zohoworkerly",
        "peopleplus",
        "zohomts",
        "bdaas admin",
        "cirrus",
        "zohofiles",
        "zoho presentation platform",
        "stratus",
        "socialanalytics",
        "ediscovery",
        "comply",
        "zmmigration",
        "bigin",
        "zohoediscovery",
        "zohocatalyst",
        "desktop central",
        "blockchain",
        "zmvaultsearch",
        "templates",
        "zohocloud",
        "zbsm",
        "zoho dataprep",
        "identity manager plus",
        "zohobookings",
        "zask",
        "zohocreatorplus",
        "zohopublish",
        "zoholearn",
        "mail360smtp",
        "mail360mx",
        "mail360indexing",
        "mail360notifications",
        "rarn",
        "murphy",
        "zohobetalens",
        "solution",
        "zmprotocols",
        "appsense",
        "mail360protocols",
        "apigateway",
        "zohovoice",
        "landingpage",
        "zohopos",
        "zmprocessors",
        "mailapps",
        "webstats",
        "mason",
        "connectcommunity",
        "remote access plus",
        "zmtask",
        "slate",
        "zohopilot",
        "marketingplus",
        "bluepencil",
        "zoho contracts",
        "zoho routeiq",
        "zoholens",
        "zohoim",
        "teaminbox",
        "zohooffice",
        "mail360processors",
        "statusiq",
        "cloudspend",
        "aidev",
        "zohofsm",
        "zohoposapi",
        "remotely",
        "zmspamgateway",
        "zohoshifts",
        "crm",
        "thrive",
        "wmspserver",
        "wmspsbserver",
        "zohorepository",
        "wmsacs",
        "zohocircuit",
        "zohogc",
        "zohointegrations",
        "nocmonitor",
        "writerautomation",
        "label",
        "trainercentral",
        "zoho domains",
        "whiteboard",
        "feedback center",
        "zohosignals",
        "ziapipelines",
        "ulaa",
        "mtacentral",
        "zohoqueue",
        "zohotables",
        "zohoiot",
        "caas",
        "quartz",
        "timeservice",
        "kmslite",
        "screenplay",
        "researchstudio",
        "rtcplatform",
        "ziahub",
        "nimbus",
        "accio",
        "one",
        "workplace",
        "catalyst",
        "backstage",
        "commerce",
        "bookings",
        "marketingautomation",
        "lens",
        "voice",
        "zeptomail",
        "learn",
        "workerly",
        "backtowork",
        "shifts",
        "mobiledevicemanagerplus",
        "patchmanagerplus",
        "remoteaccessplus",
        "log360-cloud",
        "identitymanagerplus",
        "desktopcentral",
        "officeplatform",
        "dataprep",
        "contracts",
        "developer",
        "it-management",
        "identity-management",
    ],
    pServiceNames: [
        "AaaServer",
        "NoteBook",
        "VirtualOffice",
        "ZohoReports",
        "ZohoChat",
        "ZohoCreator",
        "ZohoMeeting",
        "ZohoSheet",
        "ZohoShow",
        "ZohoWiki",
        "ZohoWriter",
        "zohopeople",
        "ZohoProjects",
        "ZohoPC",
        "ZohoDiscussions",
        "ZohoInvoice",
        "ZohoCalendar",
        "ZohoSearch",
        "ZohoVideo",
        "ZohoContacts",
        "ZohoCRM",
        "ZohoGadgets",
        "ZohoPayments",
        "SDPOnDemand",
        "ZohoRecruit",
        "ZohoCampaigns",
        "ZohoSupport",
        "ZohoAssist",
        "ZohoBooks",
        "ZohoSites",
        "ZohoAPI",
        "ZohoMobile",
        "ZohoBugTracker",
        "ZohoSocial",
        "ZohoContactManager",
        "TaskEngine",
        "MobileSync",
        "ZohoPulse",
        "ZohoMailWatch",
        "ZohoSurvey",
        "LiveDesk",
        "ZohoForms",
        "ZohoVault",
        "ZohoLogs",
        "Zoho",
        "ZohoMobileProxy",
        "JProxy",
        "ZohoSubscriptions",
        "ManageEngine",
        "ZohoHome",
        "ZohoDBSearch",
        "maps",
        "ZohoShowtime",
        "Site24x7",
        "AlarmsOne",
        "ZohoExpense",
        "PdfGen",
        "ZohoMotivator",
        "ZohoMCreator",
        "Transmail",
        "ZohoInventory",
        "DRE",
        "ZohoDirectory",
        "DLServer",
        "shortenurl",
        "EAR",
        "IIS",
        "mapsnomi",
        "mapstiles",
        "MDMOnDemand",
        "plusloggerone",
        "CRMPlus",
        "SalesInbox",
        "ZMNotifications",
        "sheetapp",
        "ZMIndexing",
        "ZohoPlugin",
        "ZohoSpotLight",
        "ZMImageProcessing",
        "MI",
        "BugBounty",
        "ZohoReceipts",
        "ZohoQuotes",
        "ZohoPayroll",
        "ZohoParser",
        "SOC",
        "ZohoCheckout",
        "ZohoFinancePlus",
        "zohobackstage",
        "WMS",
        "ZMIntegration",
        "ZLabsML",
        "ZohoSign",
        "ZohoOne",
        "PageSense",
        "ZohoFlow",
        "ZohoSprints",
        "ZohoTax",
        "ZohoASP",
        "NameServer",
        "ZohoCode",
        "HackSaw",
        "ZohoMarketplace",
        "ZApps",
        "ZohoFinanceRisk",
        "PatchManagerPlusCloud",
        "malware",
        "Logs360Cloud",
        "ZMMX",
        "Startwith",
        "ZMUploadDownload",
        "ZohoCommerce",
        "ZohoARM",
        "ZMParser",
        "ZohoProfile",
        "scrapy",
        "OfficeAPI",
        "ZohoBills",
        "SocialData",
        "SasTest",
        "cstore",
        "ZIAPlatform",
        "ZLabsdl",
        "TeamDrive",
        "ZMPOP",
        "PhoneBridge",
        "Orchestly",
        "ZMSMTP",
        "ZohoTravel",
        "ZMIMAP",
        "Trends",
        "ZohoRemoteAccess",
        "ZohoStoreAPI",
        "WebAnalytics",
        "ZohoDashboards",
        "ZohoMarketingHub",
        "ZohoInk",
        "ZohoWorkerly",
        "Peopleplus",
        "ZohoMTS",
        "BDaaSAdmin",
        "Cirrus",
        "ZohoFiles",
        "ZohoPresentationPlatform",
        "Stratus",
        "SocialAnalytics",
        "ZMVault",
        "Comply",
        "ZMMigration",
        "ZohoBigin",
        "ZohoEDiscovery",
        "ZOHOCATALYST",
        "DesktopCentralCloud",
        "Blockchain",
        "ZMVaultSearch",
        "Templates",
        "ZohoCloud",
        "ZBSM",
        "zohodataprep",
        "idmpod",
        "ZohoBookings",
        "ZAsk",
        "ZohoCreatorPlus",
        "ZohoPublish",
        "ZohoLearn",
        "Mail360SMTP",
        "Mail360MX",
        "Mail360Indexing",
        "Mail360Notifications",
        "ZohoRARN",
        "Murphy",
        "ZohoBetaLens",
        "Solution",
        "ZMProtocols",
        "AppSense",
        "Mail360Protocols",
        "APIGateway",
        "ZohoVoice",
        "landingpage",
        "ZohoPOS",
        "ZMProcessors",
        "MailApps",
        "WebStats",
        "Mason",
        "ConnectCommunity",
        "RemoteAccessPlusCloud",
        "ZMTASK",
        "Slate",
        "ZohoPilot",
        "MarketingPlus",
        "BluePencil",
        "contracts",
        "routeiq",
        "ZohoLens",
        "ZohoIM",
        "TeamInbox",
        "ZohoOffice",
        "Mail360Processors",
        "StatusPages",
        "CloudSpend",
        "AIDev",
        "ZohoFSM",
        "ZohoPOSAPI",
        "Remotely",
        "ZMSpamGateway",
        "ZohoShifts",
        "NewCRM",
        "Thrive",
        "wmspserver",
        "wmspsbserver",
        "ZohoRepository",
        "wmsacs",
        "ZohoCircuit",
        "ZohoGC",
        "ZohoIntegrations",
        "NocMon",
        "WriterAutomation",
        "Label",
        "TrainerCentral",
        "ZohoDomains",
        "Whiteboard",
        "FeedBackCenter",
        "ZohoSignals",
        "ZIAPipelines",
        "PrimeumWeb",
        "MTACentral",
        "ZohoQueue",
        "ZohoTables",
        "ZohoIOT",
        "CaaS",
        "Quartz",
        "TimeService",
        "KMSLite",
        "Screenplay",
        "Insights",
        "RTCPlatform",
        "ZiaHub",
        "Nimbus",
        "Accio",
        "ZohoOne",
        "VirtualOffice",
        "ZohoCatalyst",
        "ZohoBackstage",
        "ZohoCommerce",
        "ZohoBookings",
        "zohomarketinghub",
        "ZohoLens",
        "ZohoVoice",
        "transmail",
        "ZohoLearn",
        "ZohoWorkerly",
        "ZohoCreator",
        "ZohoShifts",
        "MDMOnDemand",
        "PatchManagerPlusCloud",
        "RemoteAccessPlusCloud",
        "logs360cloud",
        "IDMPOD",
        "DesktopCentralCloud",
        "OfficeAPI",
        "ZohoDataprep",
        "Contracts",
        "ZohoCRM",
        "alarmsone",
        "IDMPOD",
    ],
    countries: [
        [
            "Afghanistan",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bosnia and Herzegovina",
            "Botswana",
            "Brazil",
            "British Virgin Islands",
            "Brunei",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Cayman Islands",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Cook Islands",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "CÃ´te d'Ivoire",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Falkland Islands",
            "Faroe Islands",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "French Polynesia",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Greece",
            "Greenland",
            "Grenada",
            "Guadeloupe",
            "Guam",
            "Guatemala",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Honduras",
            "Hong Kong",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Kosovo",
            "Kuwait",
            "Kyrgyzstan",
            "Laos",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macao",
            "Macedonia",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Micronesia",
            "Moldova",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "Netherlands Antilles",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Niue",
            "North Korea",
            "Northern Mariana Islands",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Palestine",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Puerto Rico",
            "Qatar",
            "Reunion",
            "Romania",
            "Russia",
            "Rwanda",
            "Saint Helena",
            "Saint Kitts And Nevis",
            "Saint Lucia",
            "Saint Pierre And Miquelon",
            "Saint Vincent And The Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome And Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Korea",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syria",
            "Taiwan",
            "Tajikistan",
            "Tanzania",
            "Thailand",
            "The Democratic Republic Of Congo",
            "Timor-Leste",
            "Togo",
            "Tokelau",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Turks And Caicos Islands",
            "Tuvalu",
            "U.S. Virgin Islands",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United States",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Vatican",
            "Venezuela",
            "Vietnam",
            "Wallis And Futuna",
            "Yemen",
            "Zambia",
            "Zimbabwe",
            "Ã…land Islands",
        ],
        [
            "AF",
            "AL",
            "DZ",
            "AS",
            "AD",
            "AO",
            "AI",
            "AG",
            "AR",
            "AM",
            "AW",
            "AU",
            "AT",
            "AZ",
            "BS",
            "BH",
            "BD",
            "BB",
            "BY",
            "BE",
            "BZ",
            "BJ",
            "BM",
            "BT",
            "BO",
            "BA",
            "BW",
            "BR",
            "VG",
            "BN",
            "BG",
            "BF",
            "BI",
            "KH",
            "CM",
            "CA",
            "CV",
            "KY",
            "CF",
            "TD",
            "CL",
            "CN",
            "CO",
            "KM",
            "CG",
            "CK",
            "CR",
            "HR",
            "CU",
            "CY",
            "CZ",
            "CI",
            "DK",
            "DJ",
            "DM",
            "DO",
            "EC",
            "EG",
            "SV",
            "GQ",
            "ER",
            "EE",
            "ET",
            "FK",
            "FO",
            "FJ",
            "FI",
            "FR",
            "GF",
            "PF",
            "GA",
            "GM",
            "GE",
            "DE",
            "GH",
            "GI",
            "GR",
            "GL",
            "GD",
            "GP",
            "GU",
            "GT",
            "GN",
            "GW",
            "GY",
            "HT",
            "HN",
            "HK",
            "HU",
            "IS",
            "IN",
            "ID",
            "IR",
            "IQ",
            "IE",
            "IL",
            "IT",
            "JM",
            "JP",
            "JO",
            "KZ",
            "KE",
            "KI",
            "XK",
            "KW",
            "KG",
            "LA",
            "LV",
            "LB",
            "LS",
            "LR",
            "LY",
            "LI",
            "LT",
            "LU",
            "MO",
            "MK",
            "MG",
            "MW",
            "MY",
            "MV",
            "ML",
            "MT",
            "MH",
            "MQ",
            "MR",
            "MU",
            "MX",
            "FM",
            "MD",
            "MC",
            "MN",
            "ME",
            "MS",
            "MA",
            "MZ",
            "MM",
            "NA",
            "NR",
            "NP",
            "NL",
            "AN",
            "NC",
            "NZ",
            "NI",
            "NE",
            "NG",
            "NU",
            "KP",
            "MP",
            "NO",
            "OM",
            "PK",
            "PW",
            "PS",
            "PA",
            "PG",
            "PY",
            "PE",
            "PH",
            "PL",
            "PT",
            "PR",
            "QA",
            "RE",
            "RO",
            "RU",
            "RW",
            "SH",
            "KN",
            "LC",
            "PM",
            "VC",
            "WS",
            "SM",
            "ST",
            "SA",
            "SN",
            "RS",
            "SC",
            "SL",
            "SG",
            "SK",
            "SI",
            "SB",
            "SO",
            "ZA",
            "KR",
            "ES",
            "LK",
            "SD",
            "SR",
            "SZ",
            "SE",
            "CH",
            "SY",
            "TW",
            "TJ",
            "TZ",
            "TH",
            "CD",
            "TL",
            "TG",
            "TK",
            "TO",
            "TT",
            "TN",
            "TR",
            "TM",
            "TC",
            "TV",
            "VI",
            "UG",
            "UA",
            "AE",
            "GB",
            "US",
            "UY",
            "UZ",
            "VU",
            "VA",
            "VE",
            "VN",
            "WF",
            "YE",
            "ZM",
            "ZW",
            "AX",
        ],
        [
            "93",
            "355",
            "213",
            "1",
            "376",
            "244",
            "1",
            "1",
            "54",
            "374",
            "297",
            "61",
            "43",
            "994",
            "1",
            "973",
            "880",
            "1",
            "375",
            "32",
            "501",
            "229",
            "1",
            "975",
            "591",
            "387",
            "267",
            "55",
            "1",
            "673",
            "359",
            "226",
            "257",
            "855",
            "237",
            "1",
            "238",
            "1",
            "236",
            "235",
            "56",
            "86",
            "57",
            "269",
            "242",
            "682",
            "506",
            "385",
            "53",
            "357",
            "420",
            "225",
            "45",
            "253",
            "1",
            "1",
            "593",
            "20",
            "503",
            "240",
            "291",
            "372",
            "251",
            "500",
            "298",
            "679",
            "358",
            "33",
            "594",
            "689",
            "241",
            "220",
            "995",
            "49",
            "233",
            "350",
            "30",
            "299",
            "1",
            "590",
            "1",
            "502",
            "224",
            "245",
            "592",
            "509",
            "504",
            "852",
            "36",
            "354",
            "91",
            "62",
            "98",
            "964",
            "353",
            "972",
            "39",
            "1",
            "81",
            "962",
            "7",
            "254",
            "686",
            "383",
            "965",
            "996",
            "856",
            "371",
            "961",
            "266",
            "231",
            "218",
            "423",
            "370",
            "352",
            "853",
            "389",
            "261",
            "265",
            "60",
            "960",
            "223",
            "356",
            "692",
            "596",
            "222",
            "230",
            "52",
            "691",
            "373",
            "377",
            "976",
            "382",
            "1",
            "212",
            "258",
            "95",
            "264",
            "674",
            "977",
            "31",
            "599",
            "687",
            "64",
            "505",
            "227",
            "234",
            "683",
            "850",
            "1",
            "47",
            "968",
            "92",
            "680",
            "970",
            "507",
            "675",
            "595",
            "51",
            "63",
            "48",
            "351",
            "1",
            "974",
            "262",
            "40",
            "7",
            "250",
            "290",
            "1",
            "1",
            "508",
            "1",
            "685",
            "378",
            "239",
            "966",
            "221",
            "381",
            "248",
            "232",
            "65",
            "421",
            "386",
            "677",
            "252",
            "27",
            "82",
            "34",
            "94",
            "249",
            "597",
            "268",
            "46",
            "41",
            "963",
            "886",
            "992",
            "255",
            "66",
            "243",
            "670",
            "228",
            "690",
            "676",
            "1",
            "216",
            "90",
            "993",
            "1",
            "688",
            "1",
            "256",
            "380",
            "971",
            "44",
            "1",
            "598",
            "998",
            "678",
            "379",
            "58",
            "84",
            "681",
            "967",
            "260",
            "263",
            "672",
        ],
    ],
    countryEu: [
        "RS",
        "VA",
        "GB",
        "UA",
        "CH",
        "SE",
        "ES",
        "SI",
        "SK",
        "SM",
        "RO",
        "PT",
        "PL",
        "NO",
        "NL",
        "ME",
        "MC",
        "MD",
        "MT",
        "MK",
        "LU",
        "LT",
        "LI",
        "LV",
        "IT",
        "IE",
        "IS",
        "HU",
        "GR",
        "GI",
        "DE",
        "FR",
        "FI",
        "FO",
        "EE",
        "DK",
        "CZ",
        "CY",
        "HR",
        "BG",
        "BA",
        "BE",
        "BY",
        "AT",
        "AD",
        "AL",
        "AX",
        "XK",
        "TR",
        "GE",
        "NC",
    ],
    countryApac: [
        "AU",
        "BD",
        "BT",
        "IO",
        "BN",
        "KH",
        "CN",
        "FJ",
        "HK",
        "IN",
        "ID",
        "JP",
        "KP",
        "KR",
        "LA",
        "MO",
        "MY",
        "MV",
        "MN",
        "MM",
        "NP",
        "NZ",
        "PK",
        "PG",
        "PH",
        "SG",
        "LK",
        "TW",
        "TH",
        "TL",
        "VN",
    ],
    lAmerica: [
        "BZ",
        "CR",
        "SV",
        "GT",
        "HN",
        "MX",
        "NI",
        "PA",
        "AR",
        "BO",
        "BR",
        "CL",
        "CO",
        "EC",
        "GY",
        "PY",
        "PE",
        "SR",
        "UY",
        "VE",
        "CU",
        "DO",
        "HT",
        "PR",
        "BL",
        "MF",
    ],
    countryTranstasman: ["AU", "NZ"],
    countrySanctioned: ["RU"],
    meaList: ["TR", "IQ", "SA", "YE", "SY", "AE", "IL", "JO", "PS", "LB", "OM", "KW", "QA", "BH", "IR", "EG"],
    usstates: [
        "",
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "U.S. Virgin Islands",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "Washington, D.C",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
    ],
    cnavail: [
        "forms",
        "cliq",
        "connect",
        "workdrive",
        "vault",
        "sheet",
        "wiki",
        "showtime",
        "flow",
        "survey",
        "meeting",
        "workplace",
        "mail",
        "projects",
        "creator",
        "crm",
        "assist",
        "sprints",
        "people",
        "recruit",
        "analytics",
        "one",
        "crmplus",
        "desk",
        "campaigns",
        "salesiq",
        "sites",
        "bigin",
        "books",
        "bookings",
        "expense",
        "orchestly",
        "lens",
        "remotely",
        "maketinghub",
        "pagesense",
        "inventory",
        "notebook",
        "docs",
        "writer",
        "show",
    ],
    instates: [
        "Select State",
        "Andaman and Nicobar Islands",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
    ],
    castates: [
        "",
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon",
    ],
    noteuinarr: [
        [
            "kanaa",
            "contactmanager",
            "identity-management",
            "iot",
            "log360-cloud",
            "it-management",
            "shifts",
            "voice",
            "pilot",
            "qengine",
            "developer",
            "commandcenter",
            "zakya",
            "eprotect",
            "start",
            "kepto",
        ],
        [
            "kanaa",
            "identity-management",
            "it-management",
            "pilot",
            "qengine",
            "commandcenter",
            "thrive",
            "eprotect",
            "start",
            "tables",
            "kepto",
            "publish",
            "rpa",
        ],
        [
            "kanaa",
            "contactmanager",
            "identity-management",
            "iot",
            "log360-cloud",
            "it-management",
            "voice",
            "pilot",
            "qengine",
            "commandcenter",
            "zakya",
            "eprotect",
            "start",
            "tables",
            "kepto",
            "rpa",
        ],
        [
            "kanaa",
            "shifts",
            "voice",
            "catalyst",
            "commandcenter",
            "iot",
            "zakya",
            "fsm",
            "thrive",
            "eprotect",
            "pilot",
            "qengine",
            "start",
            "tables",
            "kepto",
            "log360-cloud",
            "publish",
            "rpa",
        ],
        [],
        [],
        [],
    ],
    singaporeConsentproductList: [
        "notebook",
        "docscanner",
        "zohoscanner",
        "sheet",
        "mail",
        "vault",
        "calendar",
        "meeting",
        "assist",
        "sign",
        "workdrive",
        "show",
        "forms",
        "sites",
        "zillum",
        "annotator",
        "workplace",
    ],
    africaList: [
        "DZ",
        "AO",
        "BJ",
        "BW",
        "IO",
        "BF",
        "BI",
        "CV",
        "CM",
        "CF",
        "TD",
        "KM",
        "CG",
        "CD",
        "CI",
        "DJ",
        "EG",
        "GQ",
        "ER",
        "SZ",
        "ET",
        "TF",
        "GA",
        "GM",
        "GH",
        "GN",
        "GW",
        "KE",
        "LS",
        "LR",
        "LY",
        "MG",
        "MW",
        "ML",
        "MR",
        "MU",
        "YT",
        "MA",
        "MZ",
        "NA",
        "NE",
        "NG",
        "RE",
        "RW",
        "SH",
        "ST",
        "SN",
        "SC",
        "SL",
        "SO",
        "ZA",
        "SS",
        "SD",
        "TZ",
        "TG",
        "TN",
        "UG",
        "EH",
        "ZM",
        "ZW",
    ],
    middleEastList: [
        "CY",
        "BH",
        "IR",
        "IQ",
        "IL",
        "JO",
        "KW",
        "LB",
        "OM",
        "PS",
        "QA",
        "SA",
        "SY",
        "TR",
        "AE",
        "YE",
        "EG",
    ],
    africaRegList: [
        "Algeria",
        "Benin",
        "Angle",
        "Burundi",
        "Botswana",
        "Canary Islands",
        "Burkina Faso",
        "Cameroon",
        "Comoros",
        "Eswantini",
        "Ceuta",
        "Cape Verde",
        "Central African Republic",
        "Djibouti",
        "Lesotho",
        "Egypt",
        "Cote d Ivoire",
        "Chad",
        "Eritrea",
        "Madagascar",
        "Libya",
        "The Gambia",
        "Democratic Republic of the Congo",
        "Ethiopia",
        "Namibia",
        "Madeira",
        "Ghana",
        "Equatorial Guinea",
        "French Southern Territories",
        "South Africa",
        "Melilla",
        "Guinea",
        "Gabon",
        "Kenya",
        "Morocco",
        "Guinea Bissau",
        "Sao Tome and principe",
        "Malawi",
        "Sudan",
        "Liberia",
        "Mauritius",
        "Tunisia",
        "Mali",
        "Mayotte",
        "Western Sahara",
        "Mauritania",
        "Mozambique",
        "Niger",
        "Reunion",
        "Nigeria",
        "Rwanda",
        "Saint Helena",
        "Seychelles",
        "Senegal",
        "Somalia",
        "Sierra Leone",
        "South Sudan",
        "Togo",
        "Tanzania",
        "Uganda",
        "Zambia",
        "Zimbabwe",
    ],
    cnarr: [],
    privacystate: { california: "/en-us/ca/privacy.html" },
    privacycountry: { ZA: "/en-za/privacy.html", GB: "/en-uk/privacy.html" },
    productTermList: {
        campaigns: ["jp", "ar"],
        catalyst: [],
        cliq: [],
        creator: [],
        commerce: [],
        crm: ["jp", "ar"],
        expense: [],
        eprotect: [],
        developer: ["fr", "de", "pt-br", "es-xl", "nl", "ar", "it", "id", "th", "vi"],
        forms: [],
        one: ["fr", "de", "pt-br", "es-xl", "nl", "ar", "it", "id", "th", "vi", "jp"],
        pagesense: [],
        salesiq: ["jp", "ar"],
        sites: [],
        start: [],
        toolkit: [],
        transmail: [],
        voice: [],
        zeptomail: [],
        officeapi: "https://officeapi.zoho.com/jsp/terms.jsp",
        trainercentral: "https://www.trainercentral.com/terms.html",
        marketingautomation: "https://www.zoho." + domainOne + "/marketingautomation/terms-of-service.html",
        patchmanagerplus: "https://ondemand.manageengine.com/terms.html",
        endpointcentralmsp: "https://ondemand.manageengine.com/terms.html",
        zohobigin: "https://www.bigin.com/terms.html",
    },
    newFooterProducts: [
        "people",
        "rpa",
        "peopleplus",
        "bugtracker",
        "learn",
        "tables",
        "qengine",
        "bookings",
        "recruit",
        "eprotect",
        "deluge",
        "publish",
        "directory",
        "showtime",
        "mail360",
        "researchstudio",
        "docscanner",
        "zohoscanner",
        "officeplus",
        "workerly",
        "shifts",
        "remotely",
        "notebook",
        "solo",
        "start",
        "enterprise",
        "officesuite",
        "developer",
        "kanaa",
        "zillum",
        "officeplatform",
        "officeintegrator",
        "affiliate",
        "projects",
        "one",
        "cliq",
        "webinar",
        "zeptomail",
        "teaminbox",
        "marketingautomation",
        "flow",
        "contracts",
        "trident",
        "iot",
        "wallet",
        "thrive",
        "ziasearch",
        "patchmanagerplus",
        "log360-cloud",
        "endpoint-central",
        "endpointcentralmsp",
        "it-management",
        "remoteaccessplus",
        "creator",
        "catalyst",
        "workdrive",
        "startups",
        "phonebridge",
        "covid",
        "events",
        "wiki",
        "contacts",
        "classes",
        "todo",
        "calendar",
        "toolkit",
        "survey",
        "fsm",
        "writer",
        "sheet",
        "analytics",
        "dataprep",
        "backstage",
        "pagesense",
        "communityspaces",
        "sign",
        "lens",
        "connect",
        "meeting",
        "mail",
        "workplace",
        "sprints",
        "apptics",
        "routeiq",
        "partners",
        "forms",
        "trainercentral",
        "campaigns",
        "landingpage",
        "voice",
        "zoholics",
        "datagrid",
        "social",
        "community",
        "sites",
        "assist",
        "vault",
        "salesiq",
        "show",
        "arattai",
        "cliqtrix",
        "marketingplus",
        "translate",
        "pdfeditor",
        "crm",
        "desk",
        "googleworkspace",
        "canvas",
        "crmplus",
        "healthcare",
        "commandcenter",
        "annotator",
        "linkthread",
        "projectsplus",
        "serviceplus",
        "domains",
        "mcp",
    ],
    htmlencode: function (e) {
        var t = [];
        for (var a = e.length - 1; a >= 0; a--) {
            t.unshift(["&#", e[a].charCodeAt(), ";"].join(""));
        }
        return t.join("");
    },
    htmldecode: function (e) {
        return e.replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(t);
        });
    },
    zDomainHandling: function () {
        (getDomain = document.domain),
            (splitUrl = getDomain.split(".")),
            (domainOne = splitUrl.pop()),
            (Zdomain = splitUrl.pop());
        if (Zdomain == _zcopr) {
            Zdomain = "zoho";
        }
        if (Zdomain == "localbigin" || Zdomain == "localqntrl") {
            Zdomain = "local" + "zoho";
        }
        Zdomain =
            dcdomainOne == "ca" ? "zohocloud" : customvar.outproduct.includes(customvar.productName) ? "zoho" : Zdomain;
        if (window.location.hostname.includes("local")) {
            Zdomain = _lz;
            dcdomainOne = "com";
        }
    },
    pagesListData: "",
    currentLangcheck: function (e, t = customvar.absurl) {
        if (e === "default" || e == "pages-loaded") {
            let a = "",
                o = "";
            if (e == "pages-loaded") {
                customvar.pagesListData = t;
            }
            $("body a").each((e, t) => {
                o = a = $(t).attr("href")?.split("?")[0];
                if (o?.endsWith("/")) {
                    a = o + "index.html";
                }
                if (
                    o?.startsWith("/") &&
                    o !== "/" &&
                    customvar.pagesListData.includes(a) &&
                    !o.includes("/" + currentUrlLang + "/")
                ) {
                    $(t).attr("href", "/" + currentUrlLang + $(t).attr("href"));
                } else if (
                    o?.startsWith("/" + currentUrlLang + "/") &&
                    !customvar.pagesListData?.includes(a?.split("/" + currentUrlLang)[1])
                ) {
                    $(t).attr(
                        "href",
                        $(t)
                            .attr("href")
                            .split("/" + currentUrlLang)[1]
                    );
                }
            });
        } else if (e.toLowerCase() == "url") {
            let a = [];
            t.forEach((e, t) => {
                a[t] = customvar.pagesListData.search(e) > -1;
            });
            return a;
        } else if (e.toLowerCase() == "element") {
            t.forEach((e, t) => {
                $(e).each(function (e, t) {
                    var a = $(t)?.attr("href");
                    if (a != "" && typeof a != "undefined") {
                        if (a.endsWith("/")) {
                            a = $(t)?.attr("href") + "index.html";
                        }
                        if (customvar.pagesListData.search(a) > -1 && !a.includes("/" + currentUrlLang + "/")) {
                            $(t).attr("href", "/" + currentUrlLang + $(t).attr("href"));
                        }
                    }
                });
            });
        }
        customvar.currentLangAdded?.();
    },
    langPagesListFetch: (function () {
        if (currentUrlLang != "" && global_getUrlParam("pages-list") != "") {
            let e =
                window.location.host == _preZ
                    ? "https://" + _preZ + "/" + currentUrlLang + "/pages-list.txt"
                    : "/" + currentUrlLang + "/pages-list.txt";
            fetch(e)
                .then((e) => e.text())
                .then((e) => {
                    customvar.currentLangcheck("pages-loaded", e);
                })
                .catch((e) => {
                    console.error("Error fetching the data:", e);
                });
        }
    })(),
    privacypolicylink: function (e) {
        if (customvar.productName != "start") {
            var t = customvar.getLink(customvar.productName);
            if (e) {
                if ($(".signup-box .zrlink").length > 0) {
                    $(".signup-box .zrlink").attr("href", t.signupPrivacyLink);
                    if (currentUrlLang && !t.signupPrivacyLink.includes(currentUrlLang)) {
                        $(".signup-box .zrlink").attr("target", "_blank");
                    }
                }
            } else {
                if ($(".footer-privacy a").length > 0) {
                    $(".footer-privacy a").attr("href", t.footerPrivacyLink);
                    if (currentUrlLang && !t.footerPrivacyLink.includes(currentUrlLang)) {
                        $(".footer-privacy a").attr("target", "_blank");
                    }
                }
                if ($(".zwc-running-privacy").length > 0) {
                    $(".zwc-running-privacy").attr("href", t.footerPrivacyLink);
                    if (currentUrlLang && !t.footerPrivacyLink.includes(currentUrlLang)) {
                        $(".zwc-running-privacy").attr("target", "_blank");
                    }
                }
            }
        }
        if (typeof useOfPolicy != "undefined") {
            useOfPolicy();
        }
    },
    updatePrivacyLink: function (e, t, a) {
        if (a) {
            var o = customvar.getLink(null, null, e, t);
            if (e && o.crmPrivacyLink) {
                $(a).attr("href", o.crmPrivacyLink);
            }
            if (t && o.crmPrivacyLink) {
                $(a).attr("href", o.crmPrivacyLink);
            }
        }
    },
    getPrivacyLink: function (e, t, a, o) {
        var n = e.domain;
        var i = e.globalPrivacy;
        var r = e.globalPrivacyLang;
        var s = e.privacyCountry;
        var l = e.privacyState;
        var c = e.privacyLang;
        var u = customvar.setLangCode(n + i, 1, r);
        var d = customvar.setLangCode(n + i, 1, r);
        var m = customvar.setLangCode(n + i, 1, r);
        if (CountryCode && s[CountryCode]) {
            u = n + s[CountryCode];
        }
        if (typeof RegionName != "undefined" && RegionName) {
            var p = RegionName.toLowerCase();
            if (l[p]) {
                u = n + l[p];
            }
        }
        if ($(".globalcountrycode-signup").length > 0) {
            var h = $(".globalcountrycode-signup").val();
            if (h && s[h]) {
                d = n + s[h];
            }
        }
        if ($(".za-globalstate-signup").length > 0) {
            var f = $(".za-globalstate-signup").val();
            var g = "";
            if (f) {
                g = f.toLowerCase();
            }
            if (g && l[g]) {
                d = n + l[g];
            }
        }
        if ($(".globalcountrycode").length > 0 || t) {
            var v = $(".globalcountrycode").val();
            if (t) {
                v = $(t).val();
            }
            if (v) {
                var b = customvar.getCountryDetails(v);
                if (b.countryCode) {
                    v = b.countryCode;
                } else {
                    v = $(".globalcountrycode").val();
                    b = customvar.getCountryDetails(v);
                    v = b.countryCode;
                }
            }
            if (v && s[v]) {
                m = n + s[v];
            }
        }
        if ($(".globalstatecode").length > 0 || t) {
            var y = $(".globalstatecode").val();
            var w = "";
            if (t) {
                y = $(t).val();
            }
            if (y) {
                if (!customvar.usstates.includes(y) || !customvar.instates.includes(y)) {
                    w = $(".globalstatecode").val();
                    if (w) {
                        w = w.toLowerCase();
                    }
                } else {
                    w = y.toLowerCase();
                }
            }
            if (w && l[w]) {
                m = n + l[w];
            }
        }
        if (a && s[a]) {
            m = n + s[a];
        }
        if (o && l[o]) {
            m = n + l[o];
        }
        if (Object.keys(c).includes(currentUrlLang)) {
            d = c[currentUrlLang];
            u = c[currentUrlLang];
            m = c[currentUrlLang];
        }
        return { footerPrivacyLink: u, signupPrivacyLink: d, crmPrivacyLink: m };
    },
    getTermLink: function (e) {
        var t = e.domain;
        var a = e.globalTerm;
        var o = e.globalTermLang;
        var n = e.productTerm;
        var i = e.productTermLang;
        var r = e.customTerm;
        var s = customvar.productName;
        var l = customvar.setLangCode(t + a, 1, o);
        if (n.includes(s)) {
            if (Object.keys(i).includes(s)) {
                l = customvar.setLangCode(t + "/" + s + a, 2, i[s]);
            } else {
                l = t + "/" + s + a;
            }
        }
        if (Object.keys(r).includes(s)) {
            l = r[s];
        }
        return l;
    },
    getCountryDetails: function (t) {
        var e = customvar.countries[0].findIndex(function (e) {
            return e == t;
        });
        var a = customvar.countries[1][e];
        var o = customvar.countries[2][e];
        return { country: t, countryCode: a, dialCode: o };
    },
    getLink: function (n, i, r, s) {
        var e = [
            {
                collectionName: "For all products(default)",
                products: "all",
                privacyCountry: { ZA: "/en-za/privacy.html", GB: "/en-uk/privacy.html" },
                privacyState: { california: "/en-us/ca/privacy.html" },
                privacyLang: { jp: "https://www.zoho.co.jp/privacy/" },
                globalPrivacy: "/privacy.html",
                globalPrivacyLang: ["de", "pt-br", "ar"],
                globalTerm: "/terms.html",
                globalTermLang: ["de", "pt-br", "jp", "ar"],
                productTerm: [
                    "campaigns",
                    "catalyst",
                    "cliq",
                    "creator",
                    "commerce",
                    "crm",
                    "expense",
                    "eprotect",
                    "developer",
                    "forms",
                    "one",
                    "pagesense",
                    "salesiq",
                    "sites",
                    "start",
                    "toolkit",
                    "transmail",
                    "voice",
                    "zeptomail",
                ],
                productTermLang: {
                    crm: ["jp", "ar"],
                    creator: ["ar"],
                    one: ["ar"],
                    cliq: ["ar"],
                    campaigns: ["ar"],
                    forms: ["ar"],
                    commerce: ["ar"],
                    sites: ["ar"],
                    zeptomail: ["ar"],
                    pagesense: ["ar"],
                    salesiq: ["ar"],
                },
                customTerm: {
                    officeapi: "https://officeapi.zoho.com/jsp/terms.jsp",
                    trainercentral: "https://www.trainercentral.com/terms.html",
                    marketingautomation: "https://www.zoho." + domainOne + "/marketingautomation/terms-of-service.html",
                    zohobigin: "https://www.bigin.com/terms.html",
                },
                domain: _livelink,
            },
            {
                collectionName: "manageEngine",
                products: [
                    "remoteaccessplus",
                    "patchmanagerplus",
                    "endpoint-central",
                    "it-management",
                    "endpointcentralmsp",
                    "log360-cloud",
                ],
                privacyCountry: { ZA: "/en-za/privacy.html", GB: "/en-uk/privacy.html" },
                privacyState: { california: "/us-ca/privacy.html" },
                privacyLang: {},
                globalPrivacy: "/privacy.html",
                globalPrivacyLang: [],
                globalTerm: "/terms.html",
                globalTermLang: [],
                productTerm: [],
                productTermLang: {},
                customTerm: {
                    remoteaccessplus: "https://ondemand.manageengine.com/terms.html",
                    patchmanagerplus: "https://ondemand.manageengine.com/terms.html",
                    "endpoint-central": "https://ondemand.manageengine.com/terms.html",
                    "it-management": "https://ondemand.manageengine.com/terms.html",
                    endpointcentralmsp: "https://ondemand.manageengine.com/terms.html",
                    "log360-cloud": "https://ondemand.manageengine.com/terms.html",
                },
                domain: "https://www.manageengine.com",
            },
        ];
        if (!n) {
            n = customvar.productName;
        }
        var l = null;
        var c = null;
        var u = null;
        var d = null;
        e.every(function (e, t) {
            var a = e.products;
            if (a == "all" || a.includes(n)) {
                var o = customvar.getPrivacyLink(e, i, r, s);
                u = customvar.getTermLink(e);
                l = o.footerPrivacyLink;
                c = o.signupPrivacyLink;
                d = o.crmPrivacyLink;
                if (t > 0) {
                    return false;
                }
            }
            return true;
        });
        if (customvar.zwProTerms) {
            u = customvar.zwProTerms;
        }
        return { footerPrivacyLink: l, signupPrivacyLink: c, crmPrivacyLink: d, termLink: u };
    },
    setLangCode: function (e, t, a) {
        var o = e.split("/");
        var n = o.length;
        var i = n - t;
        if (a.includes(currentUrlLang) && i >= 0 && i <= n) {
            o.splice(i, 0, currentUrlLang);
        }
        return o.join("/");
    },
    termslink: (function () {
        return (function () {
            var i = "https://www.zoho." + domainOne + "/jp/terms.html";
            var r = null;
            function e(e, t) {
                if (t && t.length && t.includes(currentUrlLang)) {
                    if (typeof e == "string") {
                        e = e.split(customvar.productName).join(currentUrlLang + "/" + customvar.productName);
                    }
                }
                if (Array.isArray(e)) {
                    const a = e.find(function (e) {
                        return e.includes(langsrc);
                    });
                    if (a) {
                        e = a;
                    } else {
                        e = e[0];
                    }
                }
                r = e;
                i = e;
                o("", true);
            }
            function t(e) {
                var t = customvar.getLink(customvar.productName);
                r = t.termLink;
                i = t.termLink;
                o(e);
            }
            function o(e, t) {
                var a = $(".footer-terms a");
                var o = $(".za-tos-container .czone-signup-term");
                var n = $(".stermslink");
                if (e) {
                    if (o.length) {
                        o.attr("href", r);
                        if (currentUrlLang && !r.includes(currentUrlLang)) {
                            o.attr("target", "_blank");
                        } else {
                            o.removeAttr("target");
                        }
                    }
                    if (n.length > 0) {
                        n.attr("href", i);
                        if (currentUrlLang && !i.includes(currentUrlLang)) {
                            n.attr("target", "_blank");
                        } else {
                            n.removeAttr("target");
                        }
                    }
                } else {
                    if (a.length) {
                        a.attr("href", r);
                        if (currentUrlLang && !r.includes(currentUrlLang)) {
                            a.attr("target", "_blank");
                        } else {
                            a.removeAttr("target");
                        }
                    }
                }
                if (t) {
                    if (o.length) {
                        o.attr("href", r);
                        if (currentUrlLang && !r.includes(currentUrlLang)) {
                            o.attr("target", "_blank");
                        } else {
                            o.removeAttr("target");
                        }
                    }
                    if (n.length > 0) {
                        n.attr("href", i);
                        if (currentUrlLang && !i.includes(currentUrlLang)) {
                            n.attr("target", "_blank");
                        } else {
                            n.removeAttr("target");
                        }
                    }
                }
            }
            return { setProductTerm: e, setDefaultTerm: t };
        })();
    })(),
    gdprshowhide: function () {
        var e = true,
            t = true;
        var a = arguments.length > 0 ? arguments[0] : CountryCode;
        if (
            customvar.optinArr.includes(a) ||
            customvar.optoutArr.includes(a) ||
            customvar.doubleoptinArr.includes(a) ||
            customvar.countryEu.includes(a)
        ) {
            (e = false), (t = false);
        }
        return { hide: e, check: t };
    },
    lsoinfo: function (e) {
        var t = localStorage.getItem("zglobal_Acookie_optOut");
        var a = ["-1", "1", "3"];
        var o = localStorage.getItem("czonecreativeinfo");
        var n = null;
        if (o) {
            try {
                n = JSON.parse(o);
            } catch (e) {
                if (typeof o == "string") {
                    var i = o.split(",");
                    n = {};
                    for (var r = 0; r < i.length; r++) {
                        if (r % 2 == 0) {
                            var s = i[r];
                            var l = i[r + 1];
                            if (l == null || l == undefined) {
                                l = "";
                            }
                            if (l.includes("-j-")) {
                                l = JSON.parse(l.split("-j-").join(","));
                            } else if (l.includes("-a-")) {
                                l = JSON.parse(l.split("-a-").join(","));
                            }
                            n[s] = l;
                        }
                    }
                } else {
                    n = {};
                }
            }
        }
        var c = arguments[0];
        var u = arguments[1];
        if (a && !a.includes(t)) {
            if (arguments.length == 2) {
                if (!n) {
                    n = {};
                }
                if (c != "delete") n[c] = u;
                if (c == "delete") delete n[u];
                n = JSON.stringify(n);
                try {
                    localStorage.setItem("czonecreativeinfo", n);
                } catch (e) {}
            }
            if (arguments.length == 1) {
                if (n && n[c]) {
                    return n[c];
                } else {
                    return "";
                }
            }
        } else {
            if (typeof lsonotset_callback != "undefined") {
                lsonotset_callback(e);
            }
            if (arguments.length == 1) {
                return "";
            }
        }
    },
    stateadd: function () {
        this._val = "select your state";
        var e =
            "US" == CountryCode
                ? customvar.usstates
                : "IN" == CountryCode
                  ? customvar.instates
                  : "CA" == CountryCode
                    ? customvar.castates
                    : "";
        if (arguments.length > 0) {
            if ("US" == arguments[0] || "United States" == arguments[0]) {
                e = customvar.usstates;
            } else if ("IN" == arguments[0] || "India" == arguments[0]) {
                e = customvar.instates;
            } else if ("CA" == arguments[0] || "Canada" == arguments[0]) {
                e = customvar.castates;
            }
        }
        if (e != "") {
            for (var t = 0; t < e.length; t++) {
                if (e.indexOf(customvar.instates[1] > -1) && t == 0) {
                    this._val += '<option value="select your state">' + e[t] + "</option>";
                } else {
                    this._val += '<option value="' + e[t].toLowerCase() + '">' + e[t] + "</option>";
                }
            }
            if (arguments.length > 0) {
                if (arguments[1] == "webform") {
                    $(".globalstatecode").html(this._val);
                } else {
                    $(".za-globalstate-signup").html(this._val);
                }
            }
            return this._val;
        }
    },
    countrypop: function (e) {
        this._data = "";
        this.arr = customvar.countries;
        for (var t = 0; t < customvar.countries[0].length; t++) {
            if (e == "dial") {
                this._data +=
                    '<option value="' +
                    this.arr[1][t] +
                    '" dialling_code="' +
                    this.arr[2][t] +
                    '">' +
                    this.arr[0][t] +
                    " (+" +
                    this.arr[2][t] +
                    ")</option>";
            } else {
                this._val = "0";
                customvar.optinArr.indexOf(this.arr[1][t]) > -1
                    ? (this._val = "2")
                    : customvar.optoutArr.indexOf(this.arr[1][t]) > -1
                      ? (this._val = "2")
                      : customvar.doubleoptinArr.indexOf(this.arr[1][t]) > -1
                        ? (this._val = "3")
                        : "";
                this._data +=
                    '<option value="' +
                    this.arr[1][t] +
                    '" newsletter_mode="' +
                    this._val +
                    '">' +
                    this.arr[0][t] +
                    "</option>";
            }
        }
        setTimeout(function () {
            if (typeof CountryCode != "undefined") {
                if ($(".globalcountrycode-signup").length > 0) {
                    $(".globalcountrycode-signup").val(CountryCode);
                }
            }
            var t = 0;
            var a = setInterval(function () {
                if ($(".dc-info").length > 0 && $(".za-state-container").length < 1) {
                    clearInterval(a);
                    if (stateupdate.indexOf(customvar.productName) > -1) {
                        $(".dc-info").after(
                            '<div class="za-state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' +
                                customvar.stateadd() +
                                "</select></div>"
                        );
                    } else {
                        this._val = "";
                        for (var e = 0; e < customvar.usstates.length; e++) {
                            this._val +=
                                '<option value="' +
                                customvar.usstates[e].toLowerCase() +
                                '">' +
                                customvar.usstates[e] +
                                "</option>";
                        }
                        $(".dc-info").after(
                            '<div class="za-state-container za-country_state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' +
                                this._val +
                                "</select></div>"
                        );
                    }
                    if (
                        CountryCode == "US" ||
                        CountryCode == "CA" ||
                        (CountryCode == "IN" && stateupdate.indexOf(customvar.productName) > -1)
                    ) {
                        if (customvar.showchangecountry == "true") {
                            $(".za-state-container").removeClass("zhide-common").addClass("zshow-common");
                        }
                        if (CountryCode == "US" || CountryCode == "CA") {
                            $(".za-globalstate-signup option").eq(0).remove();
                            $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val());
                        }
                    }
                    customvar.privacypolicylink(true);
                }
                if (t > 25) {
                    clearInterval(a);
                }
                t++;
            }, 1e3);
        }, 100);
        return this._data;
    },
    unique: function (e) {
        var a = [];
        $.each(e, function (e, t) {
            if ($.inArray(t, a) == -1) a.push(t);
        });
        return a;
    },
    mydevice: function () {
        return navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Mobile") > -1
            ? "Mobile - Android"
            : navigator.userAgent.indexOf("Android") > -1 && -1 === navigator.userAgent.indexOf("Mobile")
              ? "Tablet - Android"
              : navigator.userAgent.indexOf("iPad") > -1
                ? "Tablet - iPad"
                : navigator.userAgent.indexOf("iPhone") > -1
                  ? "Mobile - iPhone"
                  : /webOS|iPod|BlackBerry|IEMobile|MeeGo|Opera Mini/i.test(navigator.userAgent)
                    ? "Mobile"
                    : "Desktop";
    },
    dcreset: function () {
        var e = customvar.dcObj;
        customvar.noteuinarr = [];
        customvar.domainArr = [[], [], []];
        dcdomainOne = "com";
        if (Zdomain == "local" + "zoho") {
            onlycom = true;
        } else {
            for (var t in e) {
                customvar.domainArr[0].push(e[t].domain);
                customvar.domainArr[2].push(e[t].accountsDomain);
                customvar.noteuinarr.push(e[t].notavailable);
                if (typeof e[t].countries != "undefind") {
                    if (e[t].countries.indexOf(CountryCode) > -1) {
                        if (e[t].notavailable.indexOf(customvar.productName) > -1) {
                            dcdomainOne = domainOne;
                            onlycom = true;
                        } else {
                            dcdomainOne = e[t].domain;
                        }
                    }
                }
            }
            nonUSDC();
            customvar.zDomainHandling();
        }
    },
    dcselected: function (e) {
        if (e == "US" || (e == "IN" && stateupdate.indexOf(customvar.productName) > -1)) {
            if ($(".za-globalstate-signup").length > 0) {
                if (
                    $(".za-globalstate-signup option").eq(0).val() == "" ||
                    $(".za-globalstate-signup option").eq(0).val() == "select your state"
                ) {
                    if (e == "US") {
                        $(".za-globalstate-signup option").eq(0).remove();
                    }
                }
            }
            setTimeout(function () {
                if (typeof RegionName != "undefined") {
                    if ($(".za-globalstate-signup").length > 0) {
                        if (e == "US") {
                            $(".za-globalstate-signup").val(RegionName.toLowerCase());
                        }
                        if ($(".za-globalstate-signup").val() == null) {
                            $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val());
                        }
                    }
                }
                if (customvar.showchangecountry == "true") {
                    $(".za-state-container").removeClass("zhide-common").addClass("zshow-common");
                }
            }, 300);
        } else {
            if ($(".za-globalstate-signup").length > 0) {
                if ($(".za-globalstate-signup option").eq(0).val() != "") {
                    $(".za-globalstate-signup").prepend('<option value=""></option>');
                }
            }
            $(".za-state-container").removeClass("zshow-common").addClass("zhide-common");
        }
        if (productName == "analytics") {
            if ($(".globalcountrycode").length > 0) {
                var t = [];
                for (var a = 0; a < $(".globalcountrycode").length; a++) {
                    t[a] = $(".globalcountrycode").eq(a).val();
                }
                setTimeout(function () {
                    for (var e = 0; e < $(".globalcountrycode").length; e++) {
                        $(".globalcountrycode").eq(e).val(t[e]);
                    }
                }, 500);
            }
            if ($(".globalstatecode").length > 0) {
                var o = [];
                for (var a = 0; a < $(".globalstatecode").length; a++) {
                    o[a] = $(".globalstatecode").eq(a).val();
                }
                setTimeout(function () {
                    for (var e = 0; e < $(".globalstatecode").length; e++) {
                        $(".globalstatecode").eq(e).val(o[e]);
                    }
                }, 500);
            }
        }
        if ($(".za-globalstate-signup").length > 0) {
            if ($(".zrlink").length > 0 && e == "US") {
                if ($(".za-globalstate-signup").val().toLowerCase() == "california") {
                    if (
                        customvar.productName == "identity-management" ||
                        customvar.productName == "log360-cloud" ||
                        customvar.productName == "MobileDeviceManagement" ||
                        customvar.productName == "patchmanagerplus"
                    ) {
                        $(".zrlink").attr("href", "https://www.manageengine.com/us-ca/privacy.html");
                    } else {
                        $(".zrlink").attr("href", "https://www.zoho." + domainOne + "/us-ca/privacy.html");
                    }
                } else {
                    if (
                        customvar.productName == "identity-management" ||
                        customvar.productName == "log360-cloud" ||
                        customvar.productName == "MobileDeviceManagement" ||
                        customvar.productName == "patchmanagerplus"
                    ) {
                        $(".zrlink").attr("href", "https://ondemand.manageengine.com/privacy.html");
                    } else {
                        $(".zrlink").attr("href", "https://www.zoho." + domainOne + "/privacy.html");
                    }
                }
            }
        }
        if ($("body").hasClass("zcstrip")) {
            $("body").removeClass("zcstrip");
        }
        var n = customvar.dcObj;
        dcdomainOne = "com";
        for (var i in n) {
            if (typeof n[i].countries != "undefind") {
                if (n[i].countries.indexOf(e) > -1) {
                    if (n[i].notavailable.indexOf(customvar.productName) > -1) {
                        dcdomainOne = domainOne;
                        onlycom = true;
                    } else {
                        dcdomainOne = n[i].domain;
                    }
                }
            }
        }
        nonUSDC();
    },
    dctext: function () {
        var e = "US";
        var t = customvar.dcObj;
        for (var a in t) {
            if (typeof t[a].countries != "undefind") {
                if (t[a].countries.indexOf(CountryCode) > -1) {
                    e = t[a].dctext;
                }
            }
        }
        if (typeof dcenabled == "boolean") {
            if (!dcenabled) {
                e = dcdomainOne == "com" ? "US" : t[dcdomainOne].dctext;
            }
        }
        if (onlycom) {
            e = "US";
        } else if (onlyin) {
            e = "India";
        }
        return e;
    },
    dccountry: function () {
        var e = "US",
            t = customvar.alink.split("/register/script")[1];
        customvar.zDomainHandling();
        customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script" + t;
        if (customvar.outproduct.indexOf(customvar.productName) > -1) {
            customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script" + t;
        }
        e = dcdomainOne == "com" ? "US" : customvar.dcObj[dcdomainOne].dctext;
        return e;
    },
    getGlobalCookie: function (e) {
        try {
            for (var t = e + "=", a = decodeURIComponent(document.cookie).split(";"), o = 0; o < a.length; o++) {
                for (var n = a[o]; " " == n.charAt(0); ) n = n.substring(1);
                if (0 == n.indexOf(t)) return n.substring(t.length, n.length);
            }
            return "";
        } catch (e) {
            return "";
        }
    },
    removequots: function (e) {
        if (typeof e != "undefined") {
            if (e.split('"').length > 1) {
                return e.split('"')[1];
            } else {
                return e;
            }
        } else {
            return "";
        }
    },
    expiryDateCheck: function (e, t) {
        if (e.includes(":") && t.includes(":")) {
            const l = new Date();
            const c = (e) => {
                const [t, a] = e.split(" ");
                const [o, n, i] = t.split("/").map(Number);
                const [r, s, l] = a ? a.split(":").map(Number) : [0, 0, 0];
                return new Date(i, n - 1, o, r, s, l);
            };
            const u = c(e);
            const d = c(t);
            return l >= u && l <= d;
        } else {
            var a = new Date();
            var o = e.split("/").map(Number);
            var n = t.split("/").map(Number);
            var i = new Date(a.getFullYear(), a.getMonth(), a.getDate());
            var r = new Date(o[2], o[1] - 1, o[0]);
            var s = new Date(n[2], n[1] - 1, n[0]);
            return i >= r && i <= s;
        }
    },
    getddmmyyyy: function () {
        var e = new Date(),
            t = e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
        return t;
    },
    nextddmmyyyy: function (e) {
        var t = new Date(new Date().getTime() + e * 24 * 60 * 60 * 1e3),
            a = t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear();
        return a;
    },
    dynamicLinks: function (e) {
        for (b in e) {
            for (c in e[b]) {
                var t = e[b][c];
                t.indexOf("au.au") > 0 ? (t = t.split("au.au").join("au")) : "";
                b == "href" ? $(c).attr("href", t) : b == "html" ? $(c).html(t) : b == "val" ? $(c).val(t) : "";
                if (c.indexOf(".act-btn.cta-btn") > -1) {
                    if (b == "href") {
                        $(".zgh-userAccess a, .loggedin-userinfo .access-apps, .z-bottom-cta-menu  .loggedin").attr(
                            "href",
                            t
                        );
                    } else if (b == "html") {
                        $(".zgh-userAccess a, .loggedin-userinfo .access-apps, .z-bottom-cta-menu  .loggedin").html(t);
                    }
                }
                if (b == "href") {
                    if ($(".zwelcome-info .zlogin-apps").length > 0) {
                        if (c == ".zgh-login") {
                            $(".zwelcome-info .zlogin-apps").attr("href", t);
                        }
                    }
                }
            }
        }
        if (typeof hidelogin != "undefined") {
            if (hidelogin == "1") {
                $(".zgh-userPanel .zgh-userAccess").hide();
            }
        }
    },
    dcbasedimage: function () {
        if (myimagebool) {
            mybool = 0;
            if (dcdomainOne != "com") {
                if ($(".dc-image").length > 0) {
                    $(".dc-image").each(function () {
                        if (typeof $(this).attr("dc-source") != "undefined") {
                            var e = dcdomainOne;
                            e == "com.au" ? (e = "au") : "";
                            if ($(this).attr("dc-source").split(",").indexOf(e) > -1) {
                                var t = $(this)
                                    .attr("src")
                                    .split($(this).attr("fname"))
                                    .join($(this).attr("fname") + "-" + e);
                                $(this).attr("src", t);
                                if (typeof $(this).attr("srcset") != "undefined") {
                                    var a = $(this)
                                        .attr("srcset")
                                        .split($(this).attr("fname"))
                                        .join($(this).attr("fname") + "-" + e);
                                    $(this).attr("srcset", a);
                                }
                            }
                        }
                    });
                }
            }
        }
    },
    langsrcremove: function () {
        if (currentUrlLang) {
            $(".nonlang").each(function () {
                if (typeof currentUrlLang != "undefined") {
                    if (
                        $(this)
                            .attr("href")
                            .indexOf("/" + currentUrlLang + "/") > -1
                    ) {
                        var e = $(this)
                            .attr("href")
                            .split("/" + currentUrlLang + "/")
                            .join("/");
                        $(this).attr({ href: e, target: "_blank" });
                    }
                }
            });
        }
    },
    debouncer: function (a, o) {
        var n,
            o = o || 200;
        return function () {
            var e = this,
                t = arguments;
            clearTimeout(n);
            n = setTimeout(function () {
                a.apply(e, Array.prototype.slice.call(t));
            }, o);
        };
    },
    loadlangxml: function () {
        var e = new XMLHttpRequest(),
            t =
                customvar.productName == "home"
                    ? ""
                    : customvar.productName == "zohopartners"
                      ? "partners/"
                      : customvar.productName + "/";
        e.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var e = "https://www.zoho.com" + window.location.pathname;
                var t = [[], [], []];
                if (customvar.productName == "community") {
                    e = "https://community.zoho.com" + window.location.pathname;
                    if (window.location.pathname == "/community/" && window.location.host == _preZ) {
                        e = "https://community.zoho.com/";
                    }
                } else if (customvar.productName == "zohobigin") {
                    e = "https://www.bigin.com" + window.location.pathname;
                } else if (customvar.productName == "trainercentral") {
                    e = window.location.hostname + window.location.pathname;
                }
                if ((e.indexOf("index") > 0 && e.indexOf("index1") < 0) || e.indexOf("index1") > 0) {
                    e = e.split("index")[0];
                }
                if (this.responseText.split(e + "</loc>").length > 1) {
                    var a = this.responseText.split(e + "</loc>")[1].split("</url>")[0];
                    var o = "English";
                    currentUrlLang != "" ? (_val = lancountry[currentUrlLang]) : "";
                    a = a.split("<xhtml:link");
                    for (var n = 0; n < a.length; n++) {
                        if (typeof a[n].split('href="')[1] != "undefined") {
                            t[0].push(a[n].split('href="')[1].split('"')[0]);
                            var i = a[n].split('hreflang="')[1].split('"')[0];
                            "es-419" == i || "es" == i
                                ? t[1].push("es-xl")
                                : "en-au" == i
                                  ? t[1].push("en-au")
                                  : "x-default" == i
                                    ? t[1].push("en")
                                    : "ja" == i
                                      ? t[1].push("jp")
                                      : t[1].push(i);
                            o = lancountry[t[1][n - 1]];
                            t[2].push(o);
                        }
                    }
                }
                var r = [[], [], []];
                for (var n = 0; n < langArr.length; n++) {
                    var s = t[1].indexOf(langArr[n]);
                    if (s > -1) {
                        r[0].push(t[0][s]);
                        r[1].push(t[1][s]);
                        r[2].push(t[2][s]);
                    }
                }
                if (r[0].length > 0) {
                    if ($("body").hasClass("i18n-zh-hans") && r[1].indexOf("zh-hans") < 0) {
                        r[0].push(r[0][r[1].indexOf("en")].split(".com").join(".com.cn"));
                        r[1].push("zh-hans");
                        r[2].push(lancountry["zh-hans"]);
                    }
                }
                var l = location.search.indexOf("?") > -1 ? "&" : "?";
                var c =
                    location.search.indexOf("zredirect=f") < 0
                        ? location.search + l + "zredirect=f&zsrc=langdropdown"
                        : location.search;
                var u = localUrlLang != "" && t[1].indexOf(localUrlLang) > -1;
                if (u) {
                    if (typeof lancountry[localUrlLang] != "undefined") {
                        $(".zgh-localSelect").html(lancountry[localUrlLang]);
                        if (r[2].indexOf("English") > -1) {
                            r[2][r[2].indexOf("English")] = "English (Global)";
                        }
                    }
                }
                for (var n = 0; n < r[0].length; n++) {
                    if (customvar.productName == "home" && window.location.pathname == "/") {
                        var d = currentUrlLang == "" ? "en" : currentUrlLang;
                        var m = r[1][n] == "en" ? c + "&lb=" + currentUrlLang : c;
                        var p = window.location.origin + "/" + r[0][n].split("zoho.com/")[1] + m;
                        if (r[1][n] == "zh-hans") {
                            p = r[0][n] + m;
                        }
                        if (customvar.outproduct.indexOf(customvar.productName) > -1) {
                            if (window.location.host.includes("prewww")) {
                                p =
                                    window.location.origin +
                                    "/" +
                                    r[0][n].split(window.location.host.split("pre").join("") + "/")[1] +
                                    m;
                            } else {
                                p = window.location.origin + "/" + r[0][n].split(window.location.host + "/")[1] + m;
                            }
                        }
                        if (r[1][n] == d) {
                            $(".zgh-localBox ul").append(
                                '<li class="activeURL-lang languageDropdown-' +
                                    r[1][n] +
                                    '"><a class="nonlang-ld" data-lang="' +
                                    r[1][n] +
                                    '" href="' +
                                    p +
                                    '">' +
                                    r[2][n] +
                                    "</a></li>"
                            );
                        } else {
                            $(".zgh-localBox ul").append(
                                '<li class="languageDropdown-' +
                                    r[1][n] +
                                    '"><a class="nonlang-ld" data-lang="' +
                                    r[1][n] +
                                    '" href="' +
                                    p +
                                    '">' +
                                    r[2][n] +
                                    "</a></li>"
                            );
                        }
                    } else {
                        if (
                            ((currentUrlLang == "" && r[1][n] != "en") || u || currentUrlLang != "") &&
                            r[1][n] != currentUrlLang
                        ) {
                            var m = r[1][n] == "en" ? c + "&lb=" + currentUrlLang : c;
                            var p = window.location.origin + "/" + r[0][n].split("zoho.com/")[1] + m;
                            if (r[1][n] == "zh-hans") {
                                p = r[0][n] + m;
                            }
                            if (customvar.outproduct.indexOf(customvar.productName) > -1) {
                                if (window.location.host.includes("prewww")) {
                                    p =
                                        window.location.origin +
                                        "/" +
                                        r[0][n].split(window.location.host.split("pre").join("") + "/")[1] +
                                        m;
                                } else {
                                    p = window.location.origin + "/" + r[0][n].split(window.location.host + "/")[1] + m;
                                }
                            }
                            if (r[1][n] == "zh-hans") {
                                $(".zgh-localBox ul").append(
                                    '<li class="languageDropdown-' +
                                        r[1][n] +
                                        '"><a target="_blank" class="nonlang-ld" data-lang="' +
                                        r[1][n] +
                                        '" href="' +
                                        p +
                                        '">' +
                                        r[2][n] +
                                        "</a></li>"
                                );
                            } else {
                                $(".zgh-localBox ul").append(
                                    '<li class="languageDropdown-' +
                                        r[1][n] +
                                        '"><a class="nonlang-ld" data-lang="' +
                                        r[1][n] +
                                        '" href="' +
                                        p +
                                        '">' +
                                        r[2][n] +
                                        "</a></li>"
                                );
                            }
                        }
                    }
                }
                if (r[1].length < 1 || window.innerWidth < 1199) {
                    $(".zgh-localization").hide();
                } else {
                    $(".zgh-localization").show();
                }
                $(".header .zgh-localBox ul li").length == 1
                    ? $(".header .zgh-localBox").addClass("localBox-single")
                    : "";
                detectedLangNew = r[1];
                if (typeof CountryCode != "undefined") {
                    if (domainOne != "in") {
                        if (customvar.productName !== "startups") {
                            if (global_getUrlParam("zc_localredirection") === "") {
                                langStrip();
                            } else {
                                newLangStrip();
                            }
                        }
                    }
                    if (customvar.countryEu.indexOf(CountryCode) > -1) {
                    }
                }
            }
        };
        e.overrideMimeType("text/xml");
        var a = window.location.pathname.split("/help/").length > 1 ? "help/" : "";
        if (!(customvar.productName == "mail" || customvar.productName == "zeptomail")) {
            a = "";
        }
        if (window.location.host == _preZ) {
            if (customvar.productName == "community") {
                e.open("GET", "https://" + _preZ + "/" + t + a + "sitemap.xml", true);
            } else if (customvar.productName == "crmplus") {
                e.open("GET", window.location.origin + "/crm/" + t + a + "sitemap.xml", true);
            } else if (window.location.href.includes("desk/serviceplus/")) {
                e.open("GET", window.location.origin + "/desk/" + t + a + "sitemap.xml", true);
            } else {
                e.open("GET", "https://" + _preZ + "/" + t + a + "sitemap.xml", true);
            }
        } else if (window.location.href.includes("desk/serviceplus/")) {
            e.open("GET", window.location.origin + "/desk/" + t + a + "sitemap.xml", true);
        } else if (customvar.productName == "crmplus") {
            e.open("GET", window.location.origin + "/crm/" + t + a + "sitemap.xml", true);
        } else if (window.location.host.indexOf("zohoflow") > 0) {
            e.open("GET", window.location.origin + "/apps/sitemap.xml", true);
        } else if (
            customvar.outproduct.indexOf(customvar.productName) > -1 ||
            window.location.host == "catalyst.zoho.eu"
        ) {
            if (customvar.productName == "community" || customvar.productName == "zohobigin") {
                t = "";
            }
            if (window.location.origin.indexOf("orchestly") > 0 || window.location.origin.indexOf("catalyst") > 0) {
                e.open("GET", "https://www.zoho.com/" + t + a + "sitemap.xml", true);
            } else if (window.location.origin.indexOf("trainercentral") > 0) {
                e.open("GET", window.location.origin + "/" + a + "sitemap.xml", true);
            } else {
                e.open("GET", window.location.origin + "/" + t + a + "sitemap.xml", true);
            }
        } else {
            e.open("GET", window.location.origin + "/" + t + a + "sitemap.xml", true);
        }
        e.send();
    },
    vimovid: function () {
        var r = $(".zcpopup-controller, .popup-controller");
        if (CountryCode == "ID") {
            var e;
            if (window.location.hostname == _preZ) {
                e = "https://" + _preZ + "/sites/zweb/json/yv.json";
            } else {
                e = "https://www.zoho.com/sites/zweb/json/yv.json";
            }
            $.getScript(e, function (e) {
                for (var t = 0; t < r.length; t++) {
                    var a = r.eq(t);
                    if (typeof r.eq(t).attr("data-video") != "undefined") {
                        if (r.eq(t).attr("data-video").indexOf("vimeo") > -1) {
                            var o = a
                                .attr("data-video")
                                .split("/")
                                [a.attr("data-video").split("/").length - 1].split("?")[0];
                            var n = JSON.parse(e).find(function (e) {
                                if (e.v == o) {
                                    return e;
                                }
                            });
                            if (n && (n.i || n.y)) {
                                var i =
                                    "https://www." + "y" + "o" + "u" + "t" + "u" + "b" + "e" + "-nocookie.com/embed/";
                                if (n.i) {
                                    i = i + n.i;
                                } else if (n.y) {
                                    i = i + n.y;
                                }
                                a.attr("data-video", i);
                                a.addClass("nonvimvideo")
                                    .removeClass("vimvideo")
                                    .removeClass("zcpopup-controller")
                                    .removeClass("popup-controller");
                            } else {
                                a.addClass("vimvideo")
                                    .removeClass("zcpopup-controller")
                                    .removeClass("popup-controller");
                            }
                            a.attr("aria-haspopup", "dialog");
                            a.attr("aria-expanded", "false");
                            a.attr("tabindex", "0");
                        }
                    }
                }
            });
        } else {
            for (var t = 0; t < r.length; t++) {
                if (typeof r.eq(t).attr("data-video") != "undefined") {
                    if (r.eq(t).attr("data-video").indexOf("vimeo") > -1) {
                        r.eq(t).addClass("vimvideo").removeClass("zcpopup-controller").removeClass("popup-controller");
                    } else {
                        r.eq(t)
                            .addClass("nonvimvideo")
                            .removeClass("vimvideo")
                            .removeClass("zcpopup-controller")
                            .removeClass("popup-controller");
                    }
                }
            }
        }
    },
    refval: function () {
        return (
            "ref_value=" +
            encodeURIComponent(
                customvar.czms() +
                    "," +
                    customvar.czmr() +
                    "," +
                    customvar.cuid() +
                    "," +
                    customvar.mydevice() +
                    "," +
                    _lhref
            )
        );
    },
    tlscall: function () {
        var e = _lhref.indexOf("zgs=1") < 0;
        if (e) {
            $.getJSON("https://tlstest.zoho." + _com + "/api", function (e) {
                if (e.status != "200") {
                    $(".ztopstrip-container").prepend(
                        '<div class="tls-infostrip"> <p>' +
                            Drupal.t(
                                "Your browser is out of date and does not currently support TLS 1.2. For your security, please update your browser or operating system to the latest version to regain access to Zoho Services."
                            ) +
                            '<a target="_blank" href="https://www.zoho.' +
                            domainOne +
                            '/general/blog/end-of-support-for-older-tls-versions-in-zoho.html">More information</a></p> <span class="zclosestrip tlsClose">X</span></div>'
                    );
                    $(".zclosestrip.tlsClose").on("click", function () {
                        $(".tls-infostrip").remove();
                    });
                }
            });
        }
    },
    zChaSupIDByReg: function () {
        var e = [
            ["mail", "support@zohomail.com", "support@eu.zohomail.com"],
            ["workplace", "support@zohoworkplace.com", "support@eu.zohoworkplace.com"],
        ];
        for (var t = 0; t < e.length; t++) {
            if (e[t][0] == customvar.productName) {
                if (dcdomainOne == "eu") {
                    getZPrdSupportID = $('a[href="mailto:' + e[t][1] + '"]');
                    for (b = 0; b < getZPrdSupportID.length; b++) {
                        var a = $(getZPrdSupportID[b]);
                        if (a.attr("href") == "mailto:" + e[t][1] + "") {
                            a.attr("href", "mailto:" + e[t][2] + "");
                        }
                        if (a.text() == "" + e[t][1] + "") {
                            a.text(e[t][2]);
                        }
                    }
                }
            }
        }
    },
    findMailToReplace: function (e) {
        if ($('a[href="mailto:' + e.global + '"]').length > 0 && typeof e[dcdomainOne] != "undefined") {
            $('a[href="mailto:' + e.global + '"]').html(e[dcdomainOne]);
            $('a[href="mailto:' + e.global + '"]').attr("href", "mailto:" + e[dcdomainOne]);
        }
    },
    dcadded: function (a) {
        if (a) {
            const t = ["com.au"];
            for (var e = 0; e < customvar.domainArr[0].length; e++) {
                t.push(customvar.domainArr[0][e]);
            }
            t.push("au");
            const o = Array.from(new Set(t));
            const n = [
                "www.zoho.com",
                _preZ,
                _lz + ".com",
                _prewww + ".zoho.com",
                "catalyst.zoho.com",
                "catalyst.zoho.eu",
                "zoho.sprints",
            ];
            n.forEach(function (e, t) {
                a = a.replace(new RegExp(e.replace(/\./g, "\\."), "g"), "--ignore-domain--" + t);
            });
            if (dcdomainOne === "ca") {
                a = a.replace(new RegExp("zoho\\.", "g"), Zdomain + ".");
            } else {
                a = a.replace(new RegExp("zohocloud\\.", "g"), Zdomain + ".");
            }
            o.forEach(function (e) {
                a = a.replace(new RegExp(Zdomain + "." + e, "g"), Zdomain + "." + dcdomainOne);
            });
            n.forEach(function (e, t) {
                a = a.replace(new RegExp("--ignore-domain--" + t, "g"), e);
            });
            a = a.replace(new RegExp("\\.au\\.au", "g"), ".au");
            if (dcdomainOne !== "com.au") {
                a = a.replace(new RegExp("com\\.au", "g"), "com");
            }
            return a;
        }
        return a;
    },
    comp_disclaimer: function () {
        if ($(".zcomp-disclaimer").length > 0) {
            var e =
                Drupal.t(
                    "All third-party product name(s), trademark(s), and logo(s) are the property of their respective owner(s) and are used here solely for identification and comparison purposes. Their use does not imply any affiliation, sponsorship, or endorsement. Prices and features are drawn from publicly available information on each vendor&rsquo;s website(s) as on"
                ) +
                " " +
                $(".zcomp-disclaimer").attr("data-disclaimer-date") +
                ", " +
                Drupal.t(
                    'and the information is subject to change on those website(s) at any time without notice. The information contained in this webpage is for general information purposes only and should not be considered as authorized information from the vendors. Prices published here may not include applicable taxes or discounts offered, which may alter the final price payable by a customer. Zoho makes no representations or warranties, express or implied, including, without limitation, warranties of accuracy, completeness, merchantability, or fitness for a particular purpose, and accepts no liability for any loss or damage arising from reliance on the information. Please contact us at <a id="zf-legal-mailid" href="mailto:legal@zohocorp.com">legal@zohocorp.com</a> if you believe any information is inaccurate or outdated.'
                );
            $(".zcomp-disclaimer").html(e);
        }
    },
    browserversion: (function () {
        var e = navigator.userAgent,
            t,
            a = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(a[1])) {
            t = /\brv[ :]+(\d+)/g.exec(e) || [];
            return "IE " + (t[1] || "");
        }
        if (a[1] === "Chrome") {
            t = e.match(/\b(OPR|Edge)\/(\d+)/);
            if (t != null) return t.slice(1).join(" ").replace("OPR", "Opera");
        }
        a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"];
        if ((t = e.match(/version\/(\d+)/i)) != null) a.splice(1, 1, t[1]);
        return a.join(" ");
    })(),
    getOS: (navigator.sayswho = (function () {
        var e = window.navigator.userAgent,
            t = window.navigator.platform,
            a = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
            o = ["Win32", "Win64", "Windows", "WinCE"],
            n = ["iPhone", "iPad", "iPod"],
            i = null;
        if (a.indexOf(t) !== -1) {
            i = "Mac";
        } else if (n.indexOf(t) !== -1) {
            i = "iOS";
        } else if (o.indexOf(t) !== -1) {
            i = "Windows";
        } else if (/Android/.test(e)) {
            i = "Android";
        } else if (!i && /Linux/.test(t)) {
            i = "Linux";
        }
        return i;
    })()),
    menuParams: function (e, n) {
        const t = [
            "crm",
            "desk",
            "bigin",
            "canvas",
            "zohocrm",
            "crmplus",
            "marketingplus",
            "serviceplus",
            "toolkit",
            "calendar",
            "teaminbox",
            "zeptomail",
            "workplace",
            "mail",
            "zillum",
            "todo",
            "eProtect",
            "remotely",
            "deluge",
            "nonprofits",
            "domains",
        ];
        if (!t.includes(customvar.productName) && currentUrlLang != "jp") {
            const a = $(e);
            a.each((e, t) => {
                let a = $(t).attr("href");
                if (a && !a.includes("?")) {
                    const o = a + `?src=${n}`;
                    $(t).attr("href", o);
                }
            });
        }
    },
};
customvar.zwc_setnewFooter = function () {
    if (currentUrlLang == "jp") {
        if ($(".zw-support-mail-links").length > 0) {
            if (typeof customvar.supportId != "undefined") {
                $(".zw-support-mail-links").append(
                    '<span class="zf-support-mail-wrap"><a id="zf-support-mailid" href="mailto:' +
                        customvar.supportId() +
                        '">' +
                        customvar.supportId() +
                        "</a></span>"
                );
            } else {
                $(".zw-support-mail-links").append(
                    '<span class="zf-support-mail-wrap"><a id="zf-support-mailid" href="mailto:support@zoho.com">support@zoho.com</a></span>'
                );
            }
        }
    }
};
customvar.dcObj = {
    us: { domain: "com", accountsDomain: "zoho.com", countries: [], notavailable: ["retailiq"], dctext: "US" },
    in: {
        domain: "in",
        accountsDomain: "zoho.in",
        countries: ["IN"],
        notavailable: [
            "kanaa",
            "contactmanager",
            "identity-management",
            "log360-cloud",
            "it-management",
            "pilot",
            "commandcenter",
            "zakya",
            "start",
            "kepto",
            "classes",
        ],
        dctext: "India",
    },
    eu: {
        domain: "eu",
        accountsDomain: "zoho.eu",
        countries: customvar.countryEu,
        notavailable: [
            "kanaa",
            "identity-management",
            "it-management",
            "pilot",
            "commandcenter",
            "eprotect",
            "start",
            "tables",
            "kepto",
            "publish",
            "payments",
            "payroll",
            "classes",
            "payments",
            "retailiq",
        ],
        dctext: "EU",
    },
    "com.au": {
        domain: "com.au",
        accountsDomain: "zoho.com.au",
        countries: customvar.countryTranstasman,
        notavailable: [
            "kanaa",
            "contactmanager",
            "identity-management",
            "iot",
            "log360-cloud",
            "it-management",
            "voice",
            "pilot",
            "qengine",
            "commandcenter",
            "zakya",
            "eprotect",
            "start",
            "tables",
            "kepto",
            "payments",
            "payroll",
            "classes",
            "payments",
            "retailiq",
        ],
        dctext: "Australia",
    },
    jp: {
        domain: "jp",
        accountsDomain: "zoho.jp",
        countries: ["JP"],
        notavailable: [
            "kanaa",
            "shifts",
            "rpa",
            "voice",
            "iot",
            "catalyst",
            "commandcenter",
            "zakya",
            "fsm",
            "thrive",
            "eprotect",
            "pilot",
            "qengine",
            "start",
            "tables",
            "kepto",
            "log360-cloud",
            "publish",
            "payments",
            "payroll",
            "classes",
            "payments",
            "retailiq",
            "msp-central",
            "zohoscanner",
        ],
        dctext: "Japan",
    },
    ca: {
        domain: "ca",
        accountsDomain: "zohocloud.ca",
        countries: ["CA"],
        notavailable: [
            "voice",
            "remotely",
            "iot",
            "todo",
            "salesInbox",
            "commandcenter",
            "telephony",
            "classes",
            "it-management",
            "eprotect",
            "researchstudio",
            "officeplus",
            "repository",
            "qengine",
            "start",
            "translate",
            "rpa",
            "zillum",
            "zakya",
            "retailiq",
            "msp-central",
            "nonprofits",
        ],
        dctext: "Canada",
    },
};
(function () {
    if (customvar.absurl.includes("/r/signup.html")) {
        customvar.dcObj["sa"] = {
            domain: "sa",
            accountsDomain: "zoho.sa",
            countries: ["SA"],
            notavailable: [
                "backtowork",
                "kanaa",
                "trainercentral",
                "marketplace",
                "voice",
                "remotely",
                "contracts",
                "peopleplus",
                "iot",
                "log360-cloud",
                "trident",
                "officeplus",
                "qengine",
                "datagrid",
                "start",
                "tables",
                "catalyst",
                "rpa",
                "showtime",
                "zakya",
                "researchstudio",
                "zillum",
                "translate",
                "eprotect",
                "payments",
                "payroll",
                "classes",
                "payments",
                "retailiq",
            ],
            dctext: "Saudi Arabia",
        };
    }
})();
if (predomain) {
    customvar.dcObj["ca"]["notavailable"] = customvar.dcObj["ca"]["notavailable"].filter(function (e) {
        return e != "workerly";
    });
    customvar.dcObj["ca"]["notavailable"] = customvar.dcObj["ca"]["notavailable"].filter(function (e) {
        return e != "developer";
    });
}
customvar.browser = customvar.browserversion.split(" ")[0].toLowerCase();
customvar.bversion = customvar.browserversion.split(" ")[1].toLowerCase();
customvar.myOs = customvar.getOS.toLowerCase();
customvar.comp_disclaimer();
customvar.findproduct = (function () {
    if (knowprd) {
        customvar.productName = document.getElementsByTagName("body")[0].getAttribute("data-prdname").replace(/ /g, "");
        "zohogeneralpages" == customvar.productName
            ? (customvar.productName = "home")
            : "orchestly" == customvar.productName
              ? (customvar.productName = "zohoorchestly")
              : "itmanagement" == customvar.productName
                ? (customvar.productName = "it-management")
                : "log360cloud" == customvar.productName
                  ? (customvar.productName = "log360-cloud")
                  : "itanalytics" == customvar.productName
                    ? (customvar.productName = "it-analytics")
                    : "";
    }
    if (customvar.productName == "zoho_general_pages") {
        customvar.productName = "home";
    }
    window.location.host.indexOf("zoho") < 0 ||
    window.location.host.indexOf("catalyst") > -1 ||
    window.location.host.indexOf("zohoflow") > -1 ||
    window.location.host.indexOf("zohocrm") > -1 ||
    window.location.host.indexOf("community") > -1 ||
    window.location.host.indexOf("zohomea") > -1
        ? customvar.outproduct.push(customvar.productName)
        : "";
})();
customvar.copyRightsText =
    customvar.productName == "voice" && CountryCode == "IN" && predomain
        ? Drupal.t("Zoho Communications Private Limited. All Rights Reserved.")
        : Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.");
customvar.zwc_trapModalFocus = function (e, t) {
    const a = e.key === `Tab` || e.keyCode === 9;
    if (!a) {
        return;
    }
    const o = `button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])`;
    const n = document.getElementById(t);
    const i = n.querySelectorAll(o);
    const r = i[0];
    const s = i[i.length - 1];
    if (e.shiftKey) {
        if (document.activeElement === r) {
            s.focus();
            e.preventDefault();
        }
    } else if (document.activeElement === s) {
        r.focus();
        e.preventDefault();
    }
};
customvar.zwc_openModal = () => {
    if (typeof customvar.zwc_initTrapFocus == "function") {
        document.addEventListener(`keydown`, customvar.zwc_initTrapFocus);
    }
};
customvar.zwc_closeModal = () => {
    if (typeof customvar.zwc_initTrapFocus == "function") {
        document.removeEventListener(`keydown`, customvar.zwc_initTrapFocus);
    }
};
customvar.newFooterProducts = [...customvar.zwcNewFooter];
var _livelink = "";
if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
    _livelink = "https://www.zoho." + domainOne;
}
var refound =
    currentUrlLang == "jp"
        ? (refound =
              "<li><a href='//www.zoho." +
              domainOne +
              "/jp/refund.html'>&#12458;&#12531;&#12521;&#12452;&#12531;&#27770;&#28168;&#24460;&#12398;&#12461;&#12515;&#12531;&#12475;&#12523;&#12395;&#12388;&#12356;&#12390;</a></li>")
        : "";
if (currentUrlLang == "de") {
    refound = '<li><a href="' + _livelink + langsrc + 'impressum.html">Impressum</a></li>';
}
var czone_footer =
    '<div class="common-links"><ul class=ZPprivacy> <li><a href="' +
    _livelink +
    langsrc +
    '">' +
    Drupal.t("Zoho Home") +
    '</a></li><li><a href="' +
    _livelink +
    langsrc +
    'contactus.html">' +
    Drupal.t("Contact Us") +
    '</a></li><li><a href="' +
    _livelink +
    langsrc +
    'security.html">' +
    Drupal.t("Security") +
    '</a></li> <li><a class="footer-compliance" href="' +
    _livelink +
    langsrc +
    'compliance.html">' +
    Drupal.t("Compliance") +
    '</a></li><li><a href="' +
    _livelink +
    langsrc +
    'ipr-complaints.html">' +
    Drupal.t("IPR Complaints") +
    '</a></li><li><a href="' +
    _livelink +
    langsrc +
    'policy.html"> ' +
    Drupal.t("Anti-spam Policy") +
    '</a></li><li class="footer-terms"><a href="' +
    _livelink +
    langsrc +
    'terms.html">' +
    Drupal.t("Terms of Service") +
    '</a></li><li class="footer-privacy"><a href="' +
    _livelink +
    langsrc +
    'privacy.html">' +
    Drupal.t("Privacy Policy") +
    '</a></li><li class="cookie-policy"><a href="https://www.zoho.' +
    domainOne +
    langsrc +
    'privacy/cookie-policy.html">' +
    Drupal.t("Cookie Policy") +
    '</a></li><li><a href="' +
    _livelink +
    '/gdpr.html" class="gdprc">' +
    Drupal.t("GDPR Compliance") +
    '</a></li><li><a href="' +
    _livelink +
    langsrc +
    'abuse-policy/">' +
    Drupal.t("Abuse Policy") +
    "</a></li>" +
    refound +
    "</ul></div>";
if (currentUrlLang == "es-xl") {
    czone_footer =
        '<div class="common-links"><ul class=ZPprivacy> <li><a href="' +
        _livelink +
        langsrc +
        '">' +
        Drupal.t("Zoho Home") +
        '</a></li><li><a href="' +
        _livelink +
        langsrc +
        'contactus.html">' +
        Drupal.t("Contact Us") +
        '</a></li><li><a target="_blank" href="https://eu.zohorecruit.eu/jobs/Careers">Careers</a></li><li><a href="' +
        _livelink +
        langsrc +
        'security.html">' +
        Drupal.t("Security") +
        '</a></li> <li><a class="footer-compliance" href="' +
        _livelink +
        langsrc +
        'compliance.html">' +
        Drupal.t("Compliance") +
        '</a></li><li><a href="' +
        _livelink +
        langsrc +
        'ipr-complaints.html">' +
        Drupal.t("IPR Complaints") +
        '</a></li><li><a href="' +
        _livelink +
        langsrc +
        'policy.html"> ' +
        Drupal.t("Anti-spam Policy") +
        '</a></li><li class="footer-terms"><a href="' +
        _livelink +
        langsrc +
        'terms.html">' +
        Drupal.t("Terms of Service") +
        '</a></li><li class="footer-privacy"><a href="' +
        _livelink +
        langsrc +
        'privacy.html">' +
        Drupal.t("Privacy Policy") +
        '</a></li><li class="cookie-policy"><a href="https://www.zoho.' +
        domainOne +
        langsrc +
        'privacy/cookie-policy.html">' +
        Drupal.t("Cookie Policy") +
        '</a></li><li><a href="' +
        _livelink +
        '/gdpr.html" class="gdprc">' +
        Drupal.t("GDPR Compliance") +
        '</a></li><li><a href="' +
        _livelink +
        langsrc +
        'abuse-policy/">' +
        Drupal.t("Abuse Policy") +
        "</a></li>" +
        refound +
        "</ul></div>";
}
if (!customvar.newFooterProducts.includes(customvar.productName)) {
    czone_footer =
        '<div class="common-links"><div class="zw-footer-search-lang-block"></div><ul class=ZPprivacy> <li><a href="' +
        _livelink +
        langsrc +
        '">' +
        Drupal.t("Zoho Home") +
        '</a></li><li><a href="' +
        _livelink +
        langsrc +
        'contactus.html">' +
        Drupal.t("Contact Us") +
        '</a></li><li><a href="' +
        _livelink +
        langsrc +
        'security.html">' +
        Drupal.t("Security") +
        '</a></li> <li><a class="footer-compliance" href="' +
        _livelink +
        langsrc +
        'compliance.html">' +
        Drupal.t("Compliance") +
        '</a></li><li><a href="' +
        _livelink +
        langsrc +
        'ipr-complaints.html">' +
        Drupal.t("IPR Complaints") +
        '</a></li><li><a href="' +
        _livelink +
        langsrc +
        'policy.html"> ' +
        Drupal.t("Anti-spam Policy") +
        '</a></li><li class="footer-terms"><a href="' +
        _livelink +
        langsrc +
        'terms.html">' +
        Drupal.t("Terms of Service") +
        '</a></li><li class="footer-privacy"><a href="' +
        _livelink +
        langsrc +
        'privacy.html">' +
        Drupal.t("Privacy Policy") +
        '</a></li><li class="cookie-policy"><a href="https://www.zoho.' +
        domainOne +
        langsrc +
        'privacy/cookie-policy.html">' +
        Drupal.t("Cookie Policy") +
        '</a></li><li><a href="' +
        _livelink +
        '/gdpr.html" class="gdprc">' +
        Drupal.t("GDPR Compliance") +
        '</a></li><li><a href="' +
        _livelink +
        langsrc +
        'abuse-policy/">' +
        Drupal.t("Abuse Policy") +
        "</a></li>" +
        refound +
        "</ul></div>";
    if (currentUrlLang == "es-xl") {
        czone_footer =
            '<div class="common-links"><div class="zw-footer-search-lang-block"></div><ul class=ZPprivacy> <li><a href="' +
            _livelink +
            langsrc +
            '">' +
            Drupal.t("Zoho Home") +
            '</a></li><li><a href="' +
            _livelink +
            langsrc +
            'contactus.html">' +
            Drupal.t("Contact Us") +
            '</a></li><li><a target="_blank" href="https://eu.zohorecruit.eu/jobs/Careers">Careers</a></li><li><a href="' +
            _livelink +
            langsrc +
            'security.html">' +
            Drupal.t("Security") +
            '</a></li> <li><a class="footer-compliance" href="' +
            _livelink +
            langsrc +
            'compliance.html">' +
            Drupal.t("Compliance") +
            '</a></li><li><a href="' +
            _livelink +
            langsrc +
            'ipr-complaints.html">' +
            Drupal.t("IPR Complaints") +
            '</a></li><li><a href="' +
            _livelink +
            langsrc +
            'policy.html"> ' +
            Drupal.t("Anti-spam Policy") +
            '</a></li><li class="footer-terms"><a href="' +
            _livelink +
            langsrc +
            'terms.html">' +
            Drupal.t("Terms of Service") +
            '</a></li><li class="footer-privacy"><a href="' +
            _livelink +
            langsrc +
            'privacy.html">' +
            Drupal.t("Privacy Policy") +
            '</a></li><li class="cookie-policy"><a href="https://www.zoho.' +
            domainOne +
            langsrc +
            'privacy/cookie-policy.html">' +
            Drupal.t("Cookie Policy") +
            '</a></li><li><a href="' +
            _livelink +
            '/gdpr.html" class="gdprc">' +
            Drupal.t("GDPR Compliance") +
            '</a></li><li><a href="' +
            _livelink +
            langsrc +
            'abuse-policy/">' +
            Drupal.t("Abuse Policy") +
            "</a></li>" +
            refound +
            "</ul></div>";
    }
}
$(".zw-global-footer").html(czone_footer);
if (
    $("body").hasClass("r-g-f") &&
    customvar.absurl.indexOf("signup.html") < 0 &&
    customvar.absurl.indexOf("login.html") < 0 &&
    !$("body").hasClass("zw-template-zp_signup")
) {
    var czone_footer =
        '<div class="content-wrap"><ul class=ZPprivacy><li class="footer-terms"><a href="' +
        _livelink +
        langsrc +
        'terms.html">' +
        Drupal.t("Terms of Service") +
        '</a></li><li class="footer-privacy"><a href="' +
        _livelink +
        langsrc +
        'privacy.html">' +
        Drupal.t("Privacy Policy") +
        "</a></ul></div>";
    if (currentUrlLang == "de") {
        czone_footer =
            '<div class="content-wrap"><ul class=ZPprivacy><li class="footer-terms"><a href="' +
            _livelink +
            langsrc +
            'terms.html">' +
            Drupal.t("Terms of Service") +
            '</a></li><li class="footer-privacy"><a href="' +
            _livelink +
            langsrc +
            'privacy.html">' +
            Drupal.t("Privacy Policy") +
            '</a></li><li><a href="' +
            _livelink +
            langsrc +
            'impressum.html">Impressum</a></li></ul></div>';
    }
    $(".zw-only-copyright").prepend(czone_footer);
}
var myAccount = Drupal.t("My Account"),
    signOut = Drupal.t("Sign Out"),
    czonebusiness = Drupal.t("Business"),
    czoneindividual = Drupal.t("Individual");
var _txtIwould =
    '<span aria-hidden="true">' +
    Drupal.t("Yes, I would like to receive marketing communication regarding") +
    '</span> <a href="https://www.zohocorp.com/" name="zohos" target="_blank">' +
    Drupal.t("Zoho&rsquo;s") +
    '</a> <span aria-hidden="true">' +
    Drupal.t("products, services, and events from Zoho and its regional partners.") +
    "</span>";
if (currentUrlLang == "jp") {
    _txtIwould =
        '<span aria-hidden="true">' +
        Drupal.t("Yes, I would like to receive marketing communication regarding") +
        '</span> <a href="https://www.zohocorp.com/" target="_blank">' +
        Drupal.t("Zoho") +
        '</a> <span aria-hidden="true">' +
        Drupal.t("products, services, and events from Zoho and its regional partners.") +
        "</span>";
}
if (currentUrlLang == "fr") {
    _txtIwould =
        '<span aria-hidden="true">' +
        Drupal.t("Yes, I would like to receive marketing communication regarding") +
        '</span> <a href="https://www.zohocorp.com/" name="zohos" target="_blank">' +
        Drupal.t("Zoho") +
        '</a> <span aria-hidden="true">' +
        Drupal.t("products, services, and events from Zoho and its regional partners.") +
        "</span>";
}
(function (e) {
    (customvar.email = Drupal.t("Email")),
        (customvar.eEmail = Drupal.t("Please enter your email")),
        (customvar.password = Drupal.t("Password")),
        (customvar.epassword = Drupal.t("Please enter your password")),
        (customvar.fullName = Drupal.t("Full Name")),
        (customvar.eFullName = Drupal.t("Please enter your full name")),
        (customvar.companyName = Drupal.t("Company Name")),
        (customvar.eCompanyName = Drupal.t("Please enter your company name")),
        (customvar.phoneNumber = Drupal.t("Phone Number")),
        (customvar.ePhoneNumber = Drupal.t("Please enter your phone number")),
        (customvar.eValidPhoneNumber = Drupal.t("Please enter valid phone number")),
        (customvar.mobileNumber = Drupal.t("Mobile Number")),
        (customvar.eMobileNumber = Drupal.t("Please enter your mobile number")),
        (customvar.eValidMobileNumber = Drupal.t("Please enter valid mobile number")),
        (customvar.eReMobileNumber = Drupal.t("Please re-enter valid mobile number")),
        (customvar.portalName = Drupal.t("Portal Name")),
        (customvar.ePortalName = Drupal.t("Please enter your portal name")),
        (customvar.eUserName = Drupal.t("Please enter your user name")),
        (customvar.eFirstName = Drupal.t("Please enter your first name")),
        (customvar.eLastName = Drupal.t("Please enter your last name")),
        (customvar.vsignup = Drupal.t("Verify your sign-up")),
        (customvar.enterotpmobile = Drupal.t("Enter the one-time password sent to your mobile number.")),
        (customvar.enterotpemail = Drupal.t("Enter the one-time password sent to your email address.")),
        (customvar.change = Drupal.t("Change Country")),
        (customvar.changeme = Drupal.t("Change")),
        (customvar.verify = Drupal.t("VERIFY")),
        (customvar.enterOtp = Drupal.t("Enter OTP")),
        (customvar.resentotp = Drupal.t("Resend OTP")),
        (customvar.basedon = Drupal.t("based on your IP")),
        (customvar.basedonip = Drupal.t("It looks like you&lsquo;re in")),
        (customvar.datawillb = Drupal.t("Your data will be stored in the")),
        (customvar.datacenter = Drupal.t("data center")),
        (customvar.otpEle =
            '<span class="signupotpcontainer" style="display:none"> <div class="verifytitle">' +
            Drupal.t("Verify your sign-up") +
            '</div> <div class="verifyheader">' +
            Drupal.t("Enter the one-time password sent to your email address.") +
            '</div> <div class="otpmobile"> <span id="mobileotp"></span> <button type="button" class="change" aria-label="' +
            Drupal.t("Change") +
            " " +
            customvar.email +
            '" onclick="zwc_gobacktosignup()">' +
            Drupal.t("Change") +
            '</button> </div> <span class="za-otp-container" style="display: none;"> <input type="text" class="form-input" tabindex="1" name="otp" id="otpfield" aria-required="true" placeholder="' +
            Drupal.t("Enter OTP") +
            '" aria-label="' +
            customvar.enterotpmobile +
            '" disabled="disabled"> <button onclick="resendOTP()" aria-label="' +
            Drupal.t("Re-send OTP") +
            '" class="resendotp">' +
            Drupal.t("Resend OTP") +
            '</button> </span> <span class="za-submitbtn-otp"> <input type="button" tabindex="1" class="signupbtn" value="' +
            Drupal.t("VERIFY") +
            '" onclick="validateOTP()" name="otpfield"> <div class="loadingImg"></div> </span> </span>');
    customvar.eEmployeeCount = Drupal.t("Please enter your employee count");
    customvar.eCity = Drupal.t("Please enter your city");
    customvar.eDesignation = Drupal.t("Please enter your job title");
    customvar.eNumbersOnly = Drupal.t("Please enter valid number");
})(jQuery);
customvar.verify = Drupal.t("VERIFY");
customvar.verifying = Drupal.t("VERIFYING");
if (customvar.meaList.indexOf(CountryCode) > -1) {
    $("body").addClass("region-mea");
}
if (customvar.africaRegList.indexOf(customvar.countries[0][customvar.countries[1].indexOf(CountryCode)]) > -1) {
    $("body").addClass("region-africa");
}
customvar.isSanctioned = false;
if (customvar.countrySanctioned.includes(CountryCode)) {
    $("body").addClass("region-sanctioned");
    $("body").addClass("body-umain");
    $("body").addClass("umain");
    customvar.isSanctioned = true;
}
customvar.bodyclass = (function () {
    if (typeof CountryCode != "undefined") {
        if (customvar.countryEu.indexOf(CountryCode) > -1) {
            if (!$("body").hasClass("ccode-eucountries")) {
                var e = document.getElementsByTagName("body")[0];
                e.classList.add("ccode-eucountries");
            }
        }
    }
    if ((currentUrlLang != "" && currentUrlLang != "en") || domainOne == "com.cn") {
        if (!$("body").hasClass("other-lang")) {
            var e = document.getElementsByTagName("body")[0];
            e.classList.add("other-lang");
        }
        if (!$("body").hasClass("lang-" + currentUrlLang)) {
            var e = document.getElementsByTagName("body")[0];
            if (domainOne == "com.cn") {
                e.classList.add("lang-zh-hans");
            } else {
                e.classList.add("lang-" + currentUrlLang);
            }
        }
    } else {
        if (!$("body").hasClass("lang-en")) {
            var e = document.getElementsByTagName("body")[0];
            e.classList.add("lang-en");
        }
    }
    $("body")
        .addClass("zos-" + customvar.getOS.toLowerCase())
        .addClass("zb-" + customvar.browserversion.split(" ")[0].toLowerCase())
        .addClass(
            "zbv-" +
                customvar.browserversion.split(" ")[0].toLowerCase() +
                "-" +
                customvar.browserversion.split(" ")[1].toLowerCase()
        );
    _preZ == window.location.hostname
        ? (customvar.sHostName = "p")
        : _preZC == window.location.hostname
          ? (customvar.sHostName = "pz")
          : _zcmsZC == window.location.hostname && (customvar.sHostName = "z");
    if (
        _preZ == window.location.hostname ||
        _preZC == window.location.hostname ||
        _zcmsZC == window.location.hostname
    ) {
        customvar.hostName = window.location.hostname;
    }
    customvar.zmr = customvar.removequots(customvar.getGlobalCookie("ZohoMarkRef"));
    customvar.zms = customvar.removequots(customvar.getGlobalCookie("ZohoMarkSrc"));
    customvar.isEU = customvar.countryEu.includes(CountryCode);
    customvar.isAPAC = customvar.countryApac.includes(CountryCode);
    customvar.isANZ = customvar.countryTranstasman.includes(CountryCode);
    customvar.isCONEU = customvar.countryEu.includes(CountryCode);
    customvar.isLATAM = customvar.lAmerica.includes(CountryCode);
    customvar.isMEA = customvar.meaList.includes(CountryCode);
    customvar.isAPAC ? $("body").addClass("ccode-apaccountries") : "";
})();
customvar.vimcall = function () {
    if (currentUrlLang == "jp" && customvar.productName == "desk") {
        if ($(".zcpopup-controller").length > 0) {
            customvar.vimovid();
        }
    } else {
        if ($(".zcpopup-controller").length > 0 || $(".popup-controller").length > 0) {
            customvar.vimovid();
        }
    }
    const e = document.querySelectorAll(".vimvideo");
    e.forEach(function (e) {
        e.setAttribute("aria-haspopup", "dialog");
        e.setAttribute("aria-expanded", "false");
        e.setAttribute("tabindex", "0");
    });
    const t = document.querySelectorAll(".nonvimvideo");
    t.forEach(function (e) {
        e.setAttribute("aria-haspopup", "dialog");
        e.setAttribute("aria-expanded", "false");
        e.setAttribute("tabindex", "0");
    });
};
customvar.vimcall();
$(document).on("change", ".za-globalstate-signup", function () {
    customvar.privacypolicylink(true);
});
customvar.czmr = function (e) {
    var t = customvar.getGlobalCookie("ZohoMarkRef");
    if (t) {
        return customvar.removequots(t);
    } else {
        return "";
    }
};
customvar.czms = function (e) {
    var t = customvar.getGlobalCookie("ZohoMarkSrc");
    if (t) {
        return customvar.removequots(t);
    } else {
        return "";
    }
};
customvar.cuid = function (e) {
    var t = customvar.getGlobalCookie("cookie-uid");
    if (t) {
        return customvar.removequots(t);
    } else {
        return "";
    }
};
function global_getUrlParam(o) {
    var n = {},
        i = "";
    var e = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, t, a) {
        n[t] = a;
        if (t == o) {
            i = a;
        }
    });
    return i;
}
function global_getUrlParam_sheet(e) {
    var t = "";
    t = window.location.search.substring(1);
    var a = t.split("&"),
        o,
        n;
    for (n = 0; n < a.length; n++) {
        o = a[n].split("=");
        if (o[0] === e) {
            return o[1] === undefined ? true : o[1];
        }
    }
    return "";
}
if (global_getUrlParam("mobileappsignup") != "") {
    $("body").addClass("zhf-mobileapp-hide");
}
var countryEu = customvar.countryEu;
(function () {
    const e = customvar.pathname.includes("creator/developers/signup.html");
    const t = customvar.absurl.includes("creator/procurement");
    if (t || e) {
        const o = e ? ["us"] : ["us", "in"];
        Object.entries(customvar.dcObj).forEach(([e, t], a) => {
            if (!o.includes(e)) {
                customvar.noteuinarr[a].push("creator");
                t.notavailable.push("creator");
            }
        });
    }
})();
if (dcenabled) {
    customvar.dcreset();
}
if (currentUrlLang == "jp") {
    if (
        $("body").hasClass("r-g-f") &&
        customvar.absurl.indexOf("signup.html") < 0 &&
        customvar.absurl.indexOf("login.html") < 0 &&
        !customvar.absurl.endsWith("/signup/")
    ) {
        $(".zw-only-copyright .content-wrap").append(
            "<p>&copy; " + currentYear + ", " + Drupal.t("ZOHO Japan Corporation. All Rights Reserved.") + "</p>"
        );
    } else {
        $(".zw-only-copyright").append(
            "<p>&copy; " + currentYear + ", " + Drupal.t("ZOHO Japan Corporation. All Rights Reserved.") + "</p>"
        );
    }
} else {
    if (
        $("body").hasClass("r-g-f") &&
        customvar.absurl.indexOf("signup.html") < 0 &&
        customvar.absurl.indexOf("login.html") < 0 &&
        !$("body").hasClass("zw-template-zp_signup")
    ) {
        $(".zw-only-copyright .content-wrap").append(
            "<p>&copy; " + currentYear + ", " + customvar.copyRightsText + "</p>"
        );
    } else {
        $(".zw-only-copyright").append("<p>&copy; " + currentYear + ", " + customvar.copyRightsText + "</p>");
    }
}
if (customvar.cnarr.indexOf(customvar.productName) > -1) {
    customvar.domainArr[0].push("com.cn");
    customvar.domainArr[2].push("zoho.com.cn");
}
var detectedLangNew = "";
var loadxml = true;
var sitemapskip = ["arattai", "qengine", "endpointcentralmsp"];
if (typeof $("body").attr("site") != "undefined") {
    if ($("body").attr("site") == "zblogs") {
        loadxml = false;
    }
} else if (
    customvar.outproduct.indexOf(customvar.productName) > -1 ||
    window.location.host == "catalyst.zoho.eu" ||
    window.location.pathname.indexOf("signup.html") > 0 ||
    customvar.productName == "zakya"
) {
    loadxml = false;
}
if (
    customvar.productName == "community" ||
    customvar.productName == "zohobigin" ||
    customvar.productName == "trainercentral"
) {
    loadxml = true;
} else if (window.location.origin.indexOf("zcmsweb") > 0) {
    loadxml = false;
}
if (
    sitemapskip.includes(customvar.productName) ||
    (typeof $("body").attr("site") != "undefined" && $("body").attr("site") == "o-cms") ||
    customvar.isBlogPage
) {
    loadxml = false;
}
if (loadxml && domainOne == "com") {
    customvar.loadlangxml();
}
if (document.getElementsByClassName("header").length > 0) {
    document.getElementsByClassName("header")[0].innerHTML = "";
}
if (customvar.pathname.indexOf("crm/lp/") > 0) {
    $("body").addClass("crm-lp");
}
if ($(".zw-promo-top").length > 0) {
    $(".zw-promo-top").prepend('<div class="ztopstrip-container"></div>');
} else {
    $("body").prepend('<div class="ztopstrip-container"></div>');
}
if (getDomain == ZcheckDomain) {
    ZdomainName = "local" + "" + "zoho";
}
customvar.textparam = global_getUrlParam("creativetestparam") != "";
customvar.customclean = global_getUrlParam("customclean") != "";
if (window.location.hostname == _preZ) {
    if (global_getUrlParam("autoDomain") != "") {
        domainOne = global_getUrlParam("autoDomain");
    }
}
global_getUrlParam("hideglobalheader") != "" ? $("body").addClass("hideglobalheader") : "";
global_getUrlParam("hideproductheader") != "" ? $("body").addClass("hideproductheader") : "";
global_getUrlParam("hideglobalfooter") != "" ? $("body").addClass("hideglobalfooter") : "";
global_getUrlParam("hideproductfooter") != "" ? $("body").addClass("hideproductfooter") : "";
global_getUrlParam("hidebottomcta") != "" ? $("body").addClass("hidebottomcta") : "";
function encodeFun(t) {
    try {
        t = decodeURI(t);
    } catch (e) {
        t = t;
    }
    if (t.indexOf("#") > -1) {
        var e = t.split("#").length,
            a = "";
        for (var o = 1; o < e; o++) {
            a += "#" + t.split("#")[o];
        }
        t = t.split("#")[0] + "" + encodeURI(a);
    }
    if (t.indexOf("?") > -1) {
        var e = t.split("?").length,
            a = "";
        for (var o = 1; o < e; o++) {
            a += "?" + t.split("?")[o];
        }
        t = t.split("?")[0] + "" + encodeURI(a);
    }
    return t;
}
(function () {
    if (currentUrlLang != "jp") {
        var e = document.domain
            .split("")
            .splice(0, document.domain.split("").length - 1)
            .join("");
        if (document.domain.split("")[document.domain.length - 1] == ".") {
            var t = window.location.href.split(getDomain)[0] + "" + e + "" + window.location.href.split(getDomain)[1];
            window.location.href = encodeFun(t);
        }
        var a = ["nila", "qntrl", "vanihq"];
        if (!a.includes(customvar.productName)) {
            if (!customvar.isBlogPage) {
                if (_preZ == window.location.hostname) {
                    $.getScript("https://" + _preZ + "/sites/zweb/js/common/dynamicemail.js");
                } else {
                    $.getScript("https://www.zoho." + domainOne + "/sites/zweb/js/common/dynamicemail.js");
                }
            }
        }
    }
})();
function decodeHexString(e) {
    e = e.replace(/\\x([0-9A-Fa-f]{2})/g, function () {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
    e = e.replace(/\\u([\d\w]{4})/gi, function () {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
    return e;
}
var addDynamicScript = (function () {
    var i = {};
    var e = {
        download_plan_comp_pdf: "/sites/zweb/js/common/download_plan_comp_pdf.js",
        plan_features_filter: "/sites/zweb/js/common/plan_features_filter.js",
        "zc-crm-webform": "/sites/zweb/js/common/zc-crm-webform.js",
        "zc-validate": "/sites/zweb/js/common/zc-validate.js",
        "zc-opt-in-out": "/sites/zweb/js/common/zc-opt-in-out.js",
        "zc-select": "/sites/zweb/js/common/zc-select.js",
    };
    return function (o) {
        var n = "";
        if (e[o]) {
            n = e[o];
            if (window.location.host === _preZ || parent.document.location.host === _preZ) {
                o = "https://" + _preZ + e[o];
            } else {
                o = "https://www.zohowebstatic.com" + e[o];
            }
        } else {
            if (/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(o)) {
                n = new URL(o).pathname;
            } else {
                throw new Error("Invalid URL: " + o);
            }
        }
        if (!i[n]) {
            i[n] = { needToLoad: false, loadStatus: false, loadCount: 0, resolves: [] };
        }
        if (document.querySelectorAll('script[src*="' + n + '"]').length === 0 && !i[n].needToLoad) {
            i[n].needToLoad = true;
        }
        i[n].loadCount++;
        return new Promise(function (e, t) {
            if (i[n].needToLoad && i[n].loadCount === 1) {
                var a = document.createElement("script");
                a.onload = function () {
                    i[n].loadStatus = true;
                    i[n].resolves.forEach(function (e) {
                        e();
                    });
                    e();
                };
                a.onerror = function () {
                    t();
                };
                a.src = o;
                document.body.appendChild(a);
            } else {
                if (!i[n].needToLoad || i[n].loadStatus) {
                    e();
                } else {
                    i[n].resolves.push(e);
                }
            }
        });
    };
})();
customvar.transCName = customvar.transCName.split("_").join(" ");
customvar.transCName == "Viet Nam" ? (customvar.transCName = "Vietnam") : "";
var _conval = customvar.transCName.toLocaleLowerCase().split(" ").join("");
_conval.indexOf("unitedstates") > -1 ||
_conval.indexOf("unitedkingdom") > -1 ||
_conval.indexOf("unitedarabemirate") > -1 ||
_conval.indexOf("bahamas") > -1 ||
_conval.indexOf("caymanislands") > -1 ||
_conval.indexOf("centralafricanrepublic") > -1 ||
_conval.indexOf("channelislands") > -1 ||
_conval.indexOf("czechrepublic") > -1 ||
_conval.indexOf("dominicanrepublic") > -1 ||
_conval.indexOf("falklandislands") > -1 ||
_conval.indexOf("ivorycoast") > -1 ||
_conval.indexOf("leewardislands") > -1 ||
_conval.indexOf("maldives") > -1 ||
_conval.indexOf("marshall") > -1 ||
_conval.indexOf("netherlands") > -1 ||
_conval.indexOf("philippines") > -1 ||
_conval.indexOf("solomonislands") > -1 ||
_conval.indexOf("turksandcaicosislands") > -1 ||
_conval.indexOf("virginislands") > -1
    ? (customvar.basedonip = Drupal.t("It looks like you&lsquo;re in the"))
    : "";
customvar.clang = currentUrlLang == "" ? "" : "service_language=" + currentLang + "&";
customvar.newsignupArr = [
    "teaminbox",
    "recruit",
    "campaigns",
    "sites",
    "commerce",
    "desk",
    "pagesense",
    "people",
    "sign",
    "voice",
    "forms",
    "pilot",
    "dataprep",
    "learn",
    "crm",
    "crmplus",
    "bigin",
    "cliq",
    "directory",
    "creator",
    "calendar",
    "peopleplus",
    "contracts",
    "marketingautomation",
    "connect",
    "shifts",
    "marketingplus",
    "survey",
    "ziasearch",
    "backtowork",
    "backstage",
    "assist",
    "workerly",
    "projects",
    "one",
    "developer",
    "catalyst",
    "social",
    "lens",
    "vault",
    "sprints",
    "salesinbox",
    "commandcenter",
    "remotely",
    "salesiq",
    "bookings",
    "analytics",
    "sheet",
    "bugtracker",
    "workdrive",
    "trainercentral",
    "flow",
    "remoteaccessplus",
    "notebook",
    "patchmanagerplus",
    "mobiledevicemanagerplus",
    "MobileDeviceManagement",
    "desktopcentral",
    "zakya",
    "home",
    "meeting",
    "mail",
    "zeptomail",
];
customvar.oldsignupArr = [];
customvar.alink =
    "https://accounts." +
    Zdomain +
    "." +
    dcdomainOne +
    "/register/script?temp_redirect=true&" +
    customvar.clang +
    "load_country=false&";
if (customvar.outproduct.indexOf(customvar.productName) > -1) {
    customvar.alink =
        "https://accounts." +
        Zdomain +
        "." +
        dcdomainOne +
        "/register/script?temp_redirect=true&" +
        customvar.clang +
        "load_country=false&";
}
var _psubmitval = customvar.outproduct.indexOf(customvar.productName) > -1 ? "https://www.zoho." + domainOne : "";
var _txtBySubmit =
    Drupal.t("By submitting this form, you agree to the processing of personal data according to our") +
    ' <a href="' +
    _psubmitval +
    langsrc +
    'privacy.html" class="privacylink" target="_blank">' +
    Drupal.t("Privacy Policy") +
    ".</a>";
customvar.ocmsprelink = window.location.hostname.indexOf(_prewww) > -1 ? "https://" + _preZ : "";
if (currentLang == "ar") {
    var arCount = 0;
    for (var i = 0; i < $("link").length; i++) {
        if ($("link").eq(i).attr("href") != "undefined") {
            if ($("link").eq(i).attr("href").indexOf("/css/ar.css") > 0) {
                arCount++;
            }
        }
    }
    setTimeout(function () {
        if (arCount == 0) {
            var e = document.createElement("link");
            e.rel = "stylesheet";
            e.type = "text/css";
            if (predomain) {
                e.href = customvar.ocmsprelink + "/sites/zweb/css/language/ar.css";
            } else {
                e.href = "https://www.zohowebstatic.com/sites/zweb/css/language/ar.css";
            }
            document.getElementsByTagName("head")[0].appendChild(e);
        }
    }, 100);
}
function getGlobalCookie(e) {
    return customvar.getGlobalCookie(e);
}
var doc = $(document);
var wW = $(window).width();
var prdName = customvar.productName;
prdName == "one" ? (prdName = "zohoone") : "";
prdName == "officeplatform" ? (prdName = "officeintegrator") : "";
prdName == "zohoorchestly" ? (prdName = "orchestly") : "";
_lhref.indexOf("mdm-cloud.html") > 0 ? (prdName = "MobileDeviceManagement") : "";
_lhref.indexOf("online-service-desk-software.html") > 0 ? (prdName = "ServiceDesk Plus") : "";
var _zclang = langsrc;
customvar.outproduct.indexOf(customvar.productName) > -1 ||
window.location.host == "catalyst.zoho.eu" ||
domainOne == "com.cn"
    ? (_zclang = "https://www.zoho." + domainOne + "/")
    : "";
var zghBrand =
    ' <div class="zgh-brand"><span class="zgh-menu"><span class="hamburger-box"><span></span><span></span><span></span><span></span><span></span><span></span></span></span><a aria-label="Zoho.com" href="' +
    _zclang +
    '">Zoho.com</a></div>';
var zghNav;
if (prdName == "home") {
    var _suportlink = "https://help.zoho.com/portal/home";
    if (currentUrlLang == "jp") {
        _suportlink = "https://support.zoho.com/portal/jpzoho/home";
    }
    zghNav =
        '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' +
        Drupal.t("Products") +
        '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li><a href="https://www.zoho.' +
        domainOne +
        '/customers.html">' +
        Drupal.t("Customers") +
        '</a></li><li><a href="' +
        _suportlink +
        '" target="_blank">' +
        Drupal.t("Support") +
        '</a></li><li><a href="https://www.zoho.' +
        domainOne +
        langsrc +
        'aboutus.html">' +
        Drupal.t("About Us") +
        "</a></li></ul></div>";
    if (_lhref.indexOf("index-new") > 0) {
        zghNav =
            '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' +
            Drupal.t("Products") +
            '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li class="zgh-megaMenu zgh-solutions"> <a href="javascript:;">Solutions</a> <div class="zgh-megaMenuBox"> <div class="zgh-megaMenuInner"> <ul class="zgh-megaMenuCat"> <li><span>By Size</span> <ul> <li> <a href="javascript:;">Small</a> </li> <li> <a href="javascript:;">Medium</a> </li> <li> <a href="javascript:;">Enterprise</a> </li> </ul> </li> <li><span>By Role</span> <ul> <li> <a href="javascript:;">Sales</a> </li> <li> <a href="javascript:;">Marketing</a> </li> <li> <a href="javascript:;">Finance</a> </li> <li> <a href="javascript:;">Teams/Collaboration</a> </li> <li> <a href="javascript:;">IT</a> </li> <li> <a href="javascript:;">HR</a> </li> </ul> </li> <li><span>By Industry</span> <ul> <li> <a href="javascript:;">Education</a> </li> <li> <a href="javascript:;">Manufacturing</a> </li> <li> <a href="javascript:;">Non-profits</a> </li> <li> <a href="javascript:;">Logistics</a> </li> <li> <a href="javascript:;">Retail</a> </li> </ul> </li> </ul> </div> </div> </li><li><a href="customers.html">' +
            Drupal.t("Customers") +
            '</a></li><li><a href="https://help.zoho.com/portal/home" target="_blank">' +
            Drupal.t("Support") +
            "</a></li><li><a href=" +
            langsrc +
            '"aboutus.html">' +
            Drupal.t("About Us") +
            "</a></li></ul></div>";
    }
} else {
    zghNav =
        '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' +
        Drupal.t("All Products") +
        '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li></ul></div>';
}
if ($(".load-header").length <= 0) {
    zghNav = '<div class="zgh-nav"></div>';
}
var _val = "English";
if (customvar.productName == "home" && window.location.pathname == "/") {
    _val = "EN";
}
currentUrlLang != "" ? (_val = lancountry[currentUrlLang]) : "";
if (customvar.productName == "home" && window.location.pathname == "/") {
    currentUrlLang != "" ? (_val = currentUrlLang.toUpperCase()) : "";
}
var zghSearch =
    ' <div class="zgh-search"> <button class="zgh-search-icon" aria-label="Zoho Search" aria-haspopup="true"></button> <div class="zgh-search-container"> <div class="zgh-search-wrap"> <div class="zgh-search-box"> <form action="" id="zgh-search-action" name=""> <input class="zgh-search-field" aria-label="Search for product overviews, FAQs, and more..." id="zgh-search-query" autocomplete="off" name="query" placeholder="' +
    Drupal.t("Search for product overviews, FAQs, and more...") +
    '" type="text" aria-required="true"><button class="zgh-search-btn" aria-label="Search"></button> <span class="zgh-search-clear"></span></form></div></div><div class="zgh-search-overlay"></div></div></div>';
var zghLoc =
    '<div class="zgh-localization"><button class="zgh-localSelect" aria-haspopup="menu">' +
    _val +
    '</button><div class="zgh-localBox"><ul></ul></div></div>';
var getstart = Drupal.t("Get Started");
if (customvar.productName == "crm") {
    getstart = Drupal.t("Sign Up For Free");
}
if (customvar.productName == "home") {
    getstart = Drupal.t("Sign Up");
}
var zghAcc =
    '<div class="zgh-accounts"><a href="https://accounts.' +
    Zdomain +
    "." +
    dcdomainOne +
    "/signin?" +
    customvar.clang +
    "servicename=ZohoHome&signupurl=https://www." +
    ZUrlDomain +
    "." +
    domainOne +
    langsrc +
    'signup.html" class="zgh-login">' +
    Drupal.t("Sign In") +
    '</a><a href="https://www.' +
    ZUrlDomain +
    "." +
    domainOne +
    langsrc +
    'signup.html" class="zgh-signup">' +
    getstart +
    "</a></div>";
if ($(".login-text .login").length > 0) {
    $(".login-text .login").html(Drupal.t("SIGN IN"));
}
var zghUtil = '<div class="zgh-utilities">' + zghSearch + zghLoc + zghAcc + "</div>";
var zghAnnoucementDiv =
    '<div class="zgh-announcement"><button class="zgh-announcement-icon"><span class="zgh-announcement-indicator"><span class="zgh-announcement-indicate">&nbsp;</span><span class="zgh-announcement-indicate-border">&nbsp;</span></span></button><div class="zgh-announcement-container"></div></div>';
if (customvar.productName == "home") {
    zghUtil = '<div class="zgh-utilities">' + zghSearch + zghLoc + zghAcc + "</div>";
}
var zghPhone = '<div class="zgh-phone"><a href="tel:+18339573953">(+1 833-957-3953)</a></div>';
if ($("body").hasClass("lang-rtl")) {
    zghPhone = '<div class="zgh-phone"><a href="tel:+18339573953">&lrm;(+1 833-957-3953)</a></div>';
}
var zghPhonePages = ["one", "crm", "desk", "assist", "workplace", "creator"];
var zghPhonePagesPath = [`${langsrc}`, `${langsrc}all-products.html`, `${langsrc}customers.html`];
if (
    currentUrlLang !== "jp" &&
    CountryCode == "CA" &&
    !customvar.outproduct.includes(customvar.productName) &&
    (zghPhonePages.includes(customvar.productName) || zghPhonePagesPath.includes(customvar.pathname))
) {
    zghUtil = '<div class="zgh-utilities">' + zghPhone + zghSearch + zghLoc + zghAcc + "</div>";
    $("body").addClass("zwc-ca-dialcode");
    if (customvar.productName == "home") {
        zghUtil = '<div class="zgh-utilities">' + zghPhone + zghSearch + zghLoc + zghAcc + "</div>";
    }
}
var zghBlock = '<div class="zgh-headerWrap" id="header">' + zghBrand + zghNav + zghUtil + "</div>";
$(".zw-global-header .header").html("");
$(".zw-global-header .header").append(zghBlock);
$(".zgh-accounts .zgh-login").css("display", "inline-block");
if ($("#czone-home").length > 0) {
    $(".zgh-accounts .zgh-signup").hide();
}
$(".zgh-localization").hide();
(function () {
    $(".cookie-policy").css("display", "inline-block");
    function e() {
        if (typeof CountryCode != "undefined" && typeof RegionName != "undefined") {
            if (CountryCode == "US" && RegionName.toLowerCase() == "california") {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    if (!((customvar.getOS == "Mac" || customvar.getOS == "iOS") && global_getUrlParam("ismobilesignup") != "")) {
        if (global_getUrlParam("nocookie") != "True") {
            if (
                $.inArray(CountryCode, countryEu) !== -1 ||
                CountryCode == "BR" ||
                e() ||
                CountryCode == "JP" ||
                customvar.absurl.indexOf("cookie-policy") != -1
            ) {
                var t = ["crm", "crmplus"];
                var a = ["vanihq"];
                if (!a.includes(customvar.productName)) {
                    if (!(t.includes(customvar.productName) && currentUrlLang == "jp")) {
                        if (predomain || window.location.hostname.includes("ccms")) {
                            $("head").append(
                                '<link rel="stylesheet" href="https://' +
                                    _preZ +
                                    '/sites/zweb/css/common/zcp-common.css" type="text/css" />'
                            );
                            $("head").append(
                                '<script>(function(w,s){var e=document.createElement("script");e.src="https://' +
                                    _preZ +
                                    '/sites/zweb/js/common/zcp-common.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(e,x);})(window,"script");</script>'
                            );
                        } else {
                            $("head").append(
                                '<link rel="stylesheet" href="https://www.zohowebstatic.com/sites/zweb/css/common/zcp-common.css" type="text/css" /><script src="https://www.zohowebstatic.com/sites/zweb/js/common/zcp-common.js"></script>'
                            );
                        }
                    }
                }
            }
        }
    }
    if (_preZ == window.location.hostname) {
        $.getScript("https://" + _preZ + "/sites/zweb/js/common/precheck.js");
    }
    var o = ["tech-talk", "tech bizz"];
    if (
        ($(".zw-product-header").length > 0 || $(".zw-product-footer").length > 0) &&
        o.includes(customvar.productName) == false &&
        !customvar.isBlogPage
    ) {
        if ($("body").hasClass("zwc-creative-zmt-editor")) {
            $.getScript("https://" + _zcmsZC + "/sites/zweb/js/common/prod_menu.js");
        } else {
            if (
                _preZ == window.location.hostname ||
                _preccms == window.location.hostname ||
                customvar.textparam ||
                window.location.hostname.indexOf(_prewww) > -1
            ) {
                $.getScript("https://" + _preZ + "/sites/zweb/js/common/prod_menu.js");
            } else if (typeof $("body").attr("data-domain") != "undefined") {
                if ($("body").attr("data-domain") == "oweb") {
                    if (customvar.outproduct.indexOf(customvar.productName) > -1) {
                        $.getScript("https://www.zoho." + domainOne + "/sites/zweb/js/common/prod_menu.js");
                    } else {
                        $.getScript("https://" + _preZC + "/sites/zweb/js/common/prod_menu.js");
                    }
                }
            } else if (_preZC == window.location.hostname) {
                $.getScript("https://" + _preZC + "/sites/zweb/js/common/prod_menu.js");
            } else {
                $.getScript("https://www.zoho." + domainOne + "/sites/zweb/js/common/prod_menu.js");
            }
        }
    }
    if (!$("body").hasClass("domain-" + domainOne)) {
        var n = document.getElementsByTagName("body")[0];
        if (domainOne == "com.cn") {
            n.classList.add("domain-com");
        } else {
            n.classList.add("domain-" + domainOne);
        }
    }
})();
customvar.changeVideoToWorkdrive = function () {
    const e = document.querySelectorAll(".vimvideo");
    e.forEach(function (e) {
        const t = e.getAttribute("data-video")?.split("?")[0];
        if (t && t.includes("player.vimeo.com/video")) {
            const a = t.split("?")[0];
            const o = a.replace(
                /https:\/\/player\.vimeo\.com\/video\/|https:\/\/workdrive\.zohoexternal\.com\/zvideo\//,
                customvar.videoDomain
            );
            e.setAttribute("data-video", o);
        }
    });
};
customvar.changeiframeToWorkdrive = function () {
    const e = document.querySelectorAll("iframe");
    e.forEach(function (e) {
        const t = e.getAttribute("src");
        if (t?.includes("https://player.vimeo.com/video/")) {
            const o = t.split("?")[0];
            const n = o.replace(
                /https:\/\/player\.vimeo\.com\/video\/|https:\/\/workdrive\.zohoexternal\.com\/zvideo\//,
                customvar.videoDomain
            );
            e.setAttribute("src", n);
        }
        let a = e.getAttribute("src");
        if (a?.includes("workdrive.zohoexternal.com") || a?.includes("www.zoho.com/zvideo/")) {
            if (!e.getAttribute("allowfullscreen")) {
                e.setAttribute("allowfullscreen", "true");
            }
        }
        if (a?.includes("workdrive.zohoexternal.com/embed")) {
            if (a?.includes("?")) {
                if (!a.includes("toolbar=")) {
                    a += "&toolbar=false";
                }
            } else {
                if (a) {
                    a += "?toolbar=false";
                }
            }
        }
        if (a?.includes("workdrive.zohoexternal.com") || a?.includes(customvar.IfStatementDomainForVideo)) {
            e.setAttribute("src", a);
        }
    });
};
customvar.checkVimeoToWorkdrive = function (e) {
    if (!workdriveVideoExceptions.includes(customvar.productName) && currentUrlLang != "jp" && isWorkdriveException) {
        const t = e.getAttribute("data-video").split("?")[0];
        const a = t.split("?")[0];
        const o = a.replace(
            /https:\/\/player\.vimeo\.com\/video\/|https:\/\/workdrive\.zohoexternal\.com\/zvideo\//,
            customvar.videoDomain
        );
        e.setAttribute("data-video", o);
    }
};
const workdriveVideoExceptions = _preZ == window.location.hostname ? [] : ["zohobigin"];
const workdriveVideoExceptionsPages = ["com/customers.html", "com/search-results.html"];
const isWorkdriveException = !workdriveVideoExceptionsPages.some((e) => _lhref.includes(e));
jQuery(document).ready(function () {
    if (typeof customvar.nonlogged != "undefined") {
        customvar.nonlogged();
    }
    if (!workdriveVideoExceptions.includes(customvar.productName) && currentUrlLang != "jp" && isWorkdriveException) {
        customvar.changeVideoToWorkdrive();
        customvar.changeiframeToWorkdrive();
    }
    jQuery(".zoho-child-wrapper").toggle();
    jQuery("#back-top").hide();
    jQuery(
        ".service-links ul,.partners-info,.node-type-product-help .dropBox,.featured-news .views-row .hidden-news"
    ).toggle();
    jQuery(".service-links").click(function () {
        jQuery(".service-links ul").slideToggle("slow");
    });
    jQuery(".zoho-parent-toggle").click(function () {
        if (!/\/reports\/help\//.test(document.URL) && !/\/developer\/help\//.test(document.URL)) {
            jQuery(this).parent().find(".zoho-child-wrapper").slideToggle();
            if (jQuery(this).parent().hasClass("open")) {
                jQuery(this).parent().removeClass("open");
            } else {
                jQuery(this).parent().siblings().removeClass("open");
                jQuery(this).parent().siblings().find(".zoho-child-wrapper").slideUp("slow");
                jQuery(this).parent().addClass("open");
            }
        }
    });
    jQuery(".featured-news .views-row").click(function () {
        jQuery(this).find(".hidden-news").slideToggle("slow");
    });
    jQuery(".node-type-product-help #faq h4").click(function () {
        var e = jQuery(this).attr("class");
        if (e) {
            jQuery(this).next("div").slideToggle("slow");
            jQuery(this).removeClass(e);
        } else {
            if (jQuery(this).siblings().hasClass("open")) {
                if (jQuery(this).siblings(".open .hidden-news, .open + .ans.dropBox").is(":visible")) {
                    jQuery(this).addClass("open");
                    jQuery(this).next("div").slideToggle("slow");
                } else {
                    var t = jQuery(this).addClass("open").siblings().removeClass("open");
                    jQuery(".open .hidden-news, .open + .ans.dropBox").slideToggle("slow");
                }
            } else {
                var t = jQuery(this).addClass("open").siblings().removeClass("open");
                jQuery(".open .hidden-news, .open + .ans.dropBox").slideToggle("slow");
            }
        }
    });
    jQuery(".footer-wrapper a").each(function () {
        if (jQuery(this).hasClass("zoho-and")) {
            jQuery(this).parent().addClass("zoho-and-wrapper");
        }
    });
    jQuery(".zoho-child-wrapper li a").each(function () {
        if (/\/people\/help\//.test(document.URL)) {
            jQuery(".zoho-parent-toggle").remove();
        }
        if (/\/people\/help\//.test(document.URL) || jQuery(this).hasClass("active")) {
            jQuery(this).parent().parent().parent().addClass("open");
        }
    });
    jQuery(".zoho-child-wrapper").each(function () {
        if (/\/people\/help\//.test(document.URL) || jQuery(this).parent().hasClass("open")) {
            jQuery(this).css("display", "block");
        }
    });
    jQuery(".countries .names").click(function () {
        var e = jQuery(this).text();
        jQuery("." + e).show();
    });
    jQuery(".close").click(function () {
        var e = jQuery(this).attr("class").split(" ")[1].split("-")[0];
        jQuery("." + e).hide();
    });
    jQuery(".info").click(function () {
        var e = jQuery(this).attr("class").split("_")[2];
        jQuery(".expand_view_" + e).slideToggle("slow");
    });
    jQuery(".testimonial_addons").each(function () {
        jQuery(this).parent().parent().parent().addClass("testimonial-wrapper");
    });
    jQuery(".dynamic-width:contains('True')").addClass("tick");
    jQuery(".dynamic-width:contains('TRUE')").addClass("tick");
    jQuery(".dynamic-width:contains('False')").addClass("cross");
    jQuery(".dynamic-width:contains('FALSE')").addClass("cross");
    jQuery(".pricing-row-wrapper").each(function (e) {
        jQuery(this).children(":first").removeClass("dynamic-width");
        var t = jQuery(this).find(".dynamic-width").length;
        var a = 70 / t;
        jQuery(this)
            .find(".dynamic-width")
            .css("width", a + "%");
    });
    var o = 0;
    jQuery(".pricing-blocks .view-pricing .views-row").each(function (e, t) {
        var a = jQuery(this).outerWidth();
        o = o + a;
    });
    jQuery(".pricing-blocks .view-pricing .view-content").css("width", o + "px");
    jQuery("a[href='#top']").click(function () {
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    var e = jQuery("#block-panels-mini-products-header-dropdown-menu").innerHeight();
    jQuery(".look-down").click(function () {
        jQuery("body").animate({ scrollTop: jQuery(".catagory-mobapps-part").offset().top - e + 55 }, 1e3);
    });
    jQuery(".explore").click(function () {
        jQuery("body").animate({ scrollTop: jQuery(".zoho-timeline").offset().top - e + 55 }, 1e3);
    });
    var t = jQuery("#block-panels-mini-home-page-sliding-header").innerHeight();
    jQuery(".zoho-home-page .scroll-down .scrolldown-arrow").click(function () {
        jQuery("body").animate({ scrollTop: jQuery(".pane-home-page-view-panel-pane-1").offset().top - t + 55 }, 1e3);
    });
    jQuery(".view-home-page-view").each(function () {
        var e = 0;
        jQuery(".view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)").each(function () {
            if (jQuery(this).height() > e) e = jQuery(this).height();
        });
        jQuery(".view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)").height(e);
    });
    jQuery(".view-home-page-view").each(function () {
        var e = 0;
        jQuery(".view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)").each(function () {
            if (jQuery(this).height() > e) e = jQuery(this).height();
        });
        jQuery(".view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)").height(e);
    });
    jQuery(".pricing-view-content-wrapper .pricing-row-wrapper").each(function () {
        var e = 0;
        jQuery(this)
            .children(".dynamic-width")
            .each(function () {
                if (jQuery(this).height() > e) e = jQuery(this).height();
            });
        jQuery(this).children(".dynamic-width").height(e);
    });
    $('.zwc_zcounts[data-zcount-years="true"]').html(
        '<span class="zwc_zcounts_digits">' + customvar.numberOfYears + "</span>"
    );
    $('.zwc_zcounts[data-zcount-users="true"]').html(
        '<span class="zwc_zcounts_digits">' + customvar.numberOfUsers + "</span>"
    );
    $('.zwc_zcounts[data-zcount-employees="true"]').html(
        '<span class="zwc_zcounts_digits">' + customvar.numberOfEmployees + "</span>"
    );
    $('.zwc_zcounts[data-zcount-partners="true"]').html(
        '<span class="zwc_zcounts_digits">' + customvar.numberOfPartners + "</span>"
    );
    $('.zwc_zcounts[data-zcount-countries="true"]').html(
        '<span class="zwc_zcounts_digits">' + customvar.numberOfCountries + "</span>"
    );
    $('.zwc_zcounts[data-zcount-apps="true"]').html(
        '<span class="zwc_zcounts_digits">' + customvar.numberOfApps + "</span>"
    );
    $('.zwc_zcounts[data-zcount-datacenters="true"]').html(
        '<span class="zwc_zcounts_digits">' + customvar.numberOfDataCenters + "</span>"
    );
    $('.zwc_zcounts[data-zcount-customers="true"]').html(
        '<span class="zwc_zcounts_digits">' + customvar.numberOfCustomers + "</span>"
    );
    var a = "000";
    $('.zwc_zcounts[data-zcount-employees-alldigits="true"]').html(
        '<span class="zwc_zcounts_digits">' +
            new Intl.NumberFormat(CountryCode).format(customvar.numberOfEmployees + a) +
            "</span>"
    );
    $('.zwc_zcounts[data-zcount-partners-alldigits="true"]').html(
        '<span class="zwc_zcounts_digits">' +
            new Intl.NumberFormat(CountryCode).format(customvar.numberOfPartners + a) +
            "</span>"
    );
    if (dcdomainOne == "in") {
        $('.zwc_zcounts[data-zcount-employees-alldigits="true"]').html(
            '<span class="zwc_zcounts_digits">' +
                new Intl.NumberFormat("en-IN").format(customvar.numberOfEmployees + a) +
                "</span>"
        );
        $('.zwc_zcounts[data-zcount-partners-alldigits="true"]').html(
            '<span class="zwc_zcounts_digits">' +
                new Intl.NumberFormat("en-IN").format(customvar.numberOfPartners + a) +
                "</span>"
        );
    }
    $('.zwc_zcounts[data-zcount-plus="true"]').append('<span class="zwc_zcounts_type">+</span>');
    $('.zwc_zcounts[data-zcount-k="true"]').append('<span class="zwc_zcounts_type">K</span>');
    $('.zwc_zcounts[data-zcount-kplus="true"]').append('<span class="zwc_zcounts_type">K+</span>');
    $('.zwc_zcounts[data-zcount-million="true"]').append('<span class="zwc_zcounts_type">M</span>');
    $('.zwc_zcounts[data-zcount-millionplus="true"]').append('<span class="zwc_zcounts_type">M+</span>');
    $("#form-hockey_v1").on("submit", function (e) {
        e.preventDefault();
        var t = $("#hockey_v1-query").val().trim();
        var a = $("#form-hockey_v1").attr("action");
        window.location = a + "?query=" + encodeURIComponent(t);
    });
});
function showhide(e, t) {
    var a = document.getElementById(e);
    if (a.style.display == "none") {
        a.style.display = "block";
        document.getElementById(t).innerHTML = '<span class="up">Up</span>';
    } else {
        a.style.display = "none";
        document.getElementById(t).innerHTML = '<span class="down">Down</span>';
    }
}
function expcollps(e, t) {
    var a = t ? jQuery(e) : jQuery(e).parent().prev();
    var o = t ? jQuery(e).next() : jQuery(e).parent();
    if (t) {
        jQuery(".ldjs_cnt").slideUp(700, function () {
            jQuery(".ldjs_readmr").css("visibility", "visible");
        });
        o.slideDown(700, function () {
            a.css("visibility", "hidden");
        });
    } else {
        o.slideUp(700, function () {
            a.animate({ opacity: 1 }, 700).css("visibility", "visible");
        });
    }
}
function setSlidingMenuMobile() {
    if (langsrc == "/") {
        if (
            $("body").hasClass("node-type-features") ||
            $("body").hasClass("node-type-product-success-stories") ||
            $("body").hasClass("node-type-zoho-one-applications")
        ) {
            var e = JSON.parse(mobileSMjson);
            var a = '<div class="ztop-slide-mobile-menu"><div class="ztop-smm-inner">';
            var o = 0;
            $.each(e, function (e, t) {
                o++;
                a = a + '<a href="' + langsrc + t + '">' + Drupal.t(e) + "</a>";
            });
            a = a + "</div></div>";
            $(a).appendTo($(".main-container-wrapper"));
            if (o == 2) $(".ztop-smm-inner").addClass("z2menu");
        }
    }
}
var hidelogin = 0;
(function (oe) {
    oe(document).ready(function (U) {
        var e = document.createElement("script");
        var t = _lhref.indexOf("zgs=1") < 0;
        var a = ["arattai"];
        if (window.location.pathname == "/creator/developers/signup.html") {
            a.push("creator");
        }
        if (a.includes(customvar.productName)) {
            t = false;
        }
        if (t) {
            if (dcenabled && nondc) {
                var o = 0,
                    n = "";
                var Z = 0;
                customvar.domainList = customvar.domainArr;
                customvar.domainArr[0]?.push("sa"), customvar.domainArr[2]?.push("zoho.sa");
                for (var i = 0; i < customvar.domainList[0].length; i++) {
                    var e = document.createElement("script");
                    e.className = "infoload";
                    n = customvar.domainList[0][i] == "ca" ? "zohocloud" : ZdomainName;
                    e.src = "https://accounts." + n + "." + customvar.domainList[0][i] + "/u/info";
                    document.getElementsByTagName("head")[0].appendChild(e);
                    oe(e).on("load", function () {
                        o++;
                        if (typeof zohouser.DC_INFO != "undefined") {
                            customvar.zohouser = JSON.parse(JSON.stringify(zohouser));
                            if (zohouser.DC_INFO != "sa") {
                                customvar.domainList[1].push(
                                    customvar.dcObj[zohouser.DC_INFO == "au" ? "com.au" : zohouser.DC_INFO].domain
                                );
                                hidelogin =
                                    customvar.dcObj[
                                        zohouser.DC_INFO == "au" ? "com.au" : zohouser.DC_INFO
                                    ]?.notavailable.indexOf(customvar.productName) > -1
                                        ? 1
                                        : hidelogin;
                            } else {
                                customvar.domainList[1].push("sa");
                                hidelogin = [
                                    "backtowork",
                                    "kanaa",
                                    "trainercentral",
                                    "marketplace",
                                    "voice",
                                    "remotely",
                                    "contracts",
                                    "peopleplus",
                                    "iot",
                                    "log360-cloud",
                                    "trident",
                                    "officeplus",
                                    "qengine",
                                    "datagrid",
                                    "start",
                                    "tables",
                                    "catalyst",
                                    "rpa",
                                    "showtime",
                                    "zakya",
                                    "researchstudio",
                                    "zillum",
                                    "translate",
                                    "eprotect",
                                    "payments",
                                    "payroll",
                                    "classes",
                                    "payments",
                                    "retailiq",
                                ].includes(customvar.productName)
                                    ? 1
                                    : hidelogin;
                            }
                            if (customvar.domainList[0].length == oe(".infoload").length) {
                                oe("script.infoload").remove();
                                dcdomainOne = customvar.domainList[1][0];
                                var e = document.createElement("script");
                                e.className = "infoload";
                                n = dcdomainOne == "ca" ? "zohocloud" : ZdomainName;
                                e.src = "https://accounts." + n + "." + dcdomainOne + "/u/info";
                                document.getElementsByTagName("head")[0].appendChild(e);
                                e.onload = D;
                            }
                        }
                        if (o == oe(".infoload").length && customvar.domainList[1].length == 0) {
                            var t = customvar.dcObj;
                            dcdomainOne = "com";
                            for (var a in t) {
                                if (typeof t[a].countries != "undefind") {
                                    if (t[a].countries.indexOf(CountryCode) > -1) {
                                        if (t[a].notavailable.indexOf(customvar.productName) > -1) {
                                            dcdomainOne = "com";
                                            onlycom = true;
                                        } else {
                                            dcdomainOne = t[a].domain;
                                        }
                                    }
                                }
                            }
                            nonUSDC();
                            D();
                        }
                    });
                    oe(e).on("error", function () {
                        Z++;
                        D();
                    });
                }
            } else {
                if (window.location.hostname != "www.zohohelp.com") {
                    e.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info";
                    if (window.location.host == "www.zoho.com.cn") {
                        e.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info";
                    } else if (currentUrlLang == "zh-hans") {
                        e.src = "https://accounts." + ZdomainName + ".com/u/info";
                    }
                    document.getElementsByTagName("head")[0].appendChild(e);
                    oe(e).on("error", function () {
                        D();
                    });
                }
            }
        }
        if (customvar.productName == "arattai") {
            const E = document.createElement("script");
            E.className = "infoload";
            E.src = "https://accounts.arattai.in/u/info";
            document.getElementsByTagName("head")[0].appendChild(E);
            oe(E).on("load", function () {
                if (typeof zohouser.DC_INFO != "undefined") {
                    customvar.zohouser = JSON.parse(JSON.stringify(zohouser));
                    customvar.domainArr[1].push(customvar.dcObj["in"].domain);
                    hidelogin = customvar.dcObj["in"].notavailable.indexOf(customvar.productName) > -1 ? 1 : hidelogin;
                }
                if (customvar.domainArr[1].length == 0) {
                    var e = customvar.dcObj;
                    dcdomainOne = "com";
                    for (var t in e) {
                        if (typeof e[t].countries != "undefind") {
                            if (e[t].countries.indexOf(CountryCode) > -1) {
                                if (e[t].notavailable.indexOf(customvar.productName) > -1) {
                                    dcdomainOne = "com";
                                    onlycom = true;
                                } else {
                                    dcdomainOne = e[t].domain;
                                }
                            }
                        }
                    }
                    D();
                }
            });
            oe(E).on("error", function () {
                D();
            });
        }
        var r = "";
        var $ = "";
        var s = "";
        var l = "";
        var c = "/privacy.html ";
        var u = "";
        var d = "/policy.html ";
        var m = "";
        var T = "//www.facebook.com/zoho";
        var q = "//twitter.com/zoho";
        var M =
            "<a class='on-in' href='https://www.linkedin.com/company/38373' target='_blank' class='linkedin' title='LinkedIn'>'+Drupal.t('Linkedin')+'</a>";
        var p = ["/es/", "/fr/", "/it/"];
        var h = "";
        var I = "/jp/gdpr.html";
        var f = "";
        var g = 0;
        var v = "/contactus.html";
        if (currentUrlLang == "jp") {
            $ = "//www.zoho." + domainOne;
            s = "//www.zoho." + domainOne + "/jp";
            l = "ofservice";
            c = "//www.zoho." + domainOne + "/jp/PrivacyPolicy.html";
            u = "policy";
            d = "https://www.zoho." + domainOne + "/jp/policy.html";
            m =
                "<li><a href='//www.zoho." +
                domainOne +
                "/jp/refund.html'>&#12458;&#12531;&#12521;&#12452;&#12531;&#27770;&#28168;&#24460;&#12398;&#12461;&#12515;&#12531;&#12475;&#12523;&#12395;&#12388;&#12356;&#12390;</a></li>";
            T = "//www.facebook.com/zohoJapan";
            q = "//twitter.com/jpzoho";
            M = "";
            v = "https://www.zoho." + domainOne + "/jp/contactus.html";
        } else if (currentUrlLang == "de") {
            m = '<li><a href="' + langsrc + 'impressum.html">Impressum</a></li>';
        }
        if (dcenabled && nondc) {
        } else {
            e.onload = D;
        }
        var b = oe("#emailfield").val();
        if (b == "" || b == null) {
            oe("#emailfield").parent().removeClass("added-placeholder");
        } else {
            oe("#emailfield").parent().addClass("added-placeholder");
        }
        getWidth = 0;
        $gotoPage = "";
        productName = "";
        breaks = false;
        productName = customvar.productName;
        addString = "'" + productName + "'";
        for (var i = 0; i < p.length; i++) {
            if (window.location.href.indexOf(p[i]) > -1) {
                var R = window.location.pathname.split("/");
                if (R[2] == p[i].slice(1, -1)) {
                    var h = p[i];
                    h = h.slice(1);
                    f = "/" + h.slice(0, -1);
                } else {
                    var r = p[i];
                    var r = r.slice(0, -1);
                }
            }
        }
        var y = "";
        if (currentUrlLang == "jp") {
            y =
                '<ul class=ZPprivacy> <li><a href="' +
                s +
                '/">' +
                Drupal.t("Zoho Home") +
                '</a></li><li><a href="' +
                v +
                '">' +
                Drupal.t("Contact Us") +
                '</a></li><li><a href="' +
                s +
                r +
                f +
                "/security" +
                u +
                '.html">' +
                Drupal.t("Security") +
                '</a></li><li><a class="footer-compliance" href="/compliance.html">' +
                Drupal.t("Compliance") +
                '</a></li> <li><a href="' +
                s +
                r +
                f +
                '/ipr-complaints.html">' +
                Drupal.t("IPR Complaints") +
                '</a></li><li><a href="' +
                r +
                f +
                d +
                '"> ' +
                Drupal.t("Anti-spam Policy") +
                '</a></li><li class="footer-terms"><a href="' +
                s +
                r +
                f +
                "/terms" +
                l +
                '.html">' +
                Drupal.t("Terms of Service") +
                '</a></li><li class="footer-privacy"><a href="' +
                r +
                f +
                c +
                '">' +
                Drupal.t("Privacy Policy") +
                '</a></li><li class="cookie-policy"><a href="https://www.zoho.' +
                domainOne +
                '/privacy/cookie-policy.html">' +
                Drupal.t("Cookie Policy") +
                '</a></li><li><a href="' +
                I +
                '" class="gdprc">' +
                Drupal.t("GDPR Compliance") +
                "</a></li>" +
                m +
                "</ul><p>&copy; " +
                currentYear +
                ", " +
                customvar.copyRightsText +
                "</p>";
        } else {
            var w = langsrc + "security.html";
            if (productName == "mail") {
                w = langsrc + "mail/secure-email-hosting.html";
            }
            var z = "";
            if (
                customvar.outproduct.indexOf(customvar.productName) > -1 ||
                window.location.host == "catalyst.zoho.eu"
            ) {
                z = "https://www.zoho." + domainOne;
            }
            y =
                '<ul class=ZPprivacy> <li><a href="' +
                z +
                langsrc +
                '">' +
                Drupal.t("Zoho Home") +
                '</a></li><li><a href="' +
                z +
                langsrc +
                'contactus.html">' +
                Drupal.t("Contact Us") +
                '</a></li><li><a href="' +
                z +
                w +
                '">' +
                Drupal.t("Security") +
                '</a></li><li><a class="footer-compliance" href="' +
                z +
                '/compliance.html">' +
                Drupal.t("Compliance") +
                '</a></li> <li><a href="' +
                z +
                langsrc +
                'ipr-complaints.html">' +
                Drupal.t("IPR Complaints") +
                '</a></li><li><a href="' +
                z +
                langsrc +
                'policy.html"> ' +
                Drupal.t("Anti-spam Policy") +
                '</a></li><li class="footer-terms"><a href="' +
                z +
                langsrc +
                'terms.html">' +
                Drupal.t("Terms of Service") +
                '</a></li><li class="footer-privacy"><a href="' +
                z +
                langsrc +
                'privacy.html">' +
                Drupal.t("Privacy Policy") +
                '</a></li><li class="cookie-policy"><a href="https://www.zoho.' +
                domainOne +
                langsrc +
                'privacy/cookie-policy.html">' +
                Drupal.t("Cookie Policy") +
                '</a></li><li><a href="' +
                z +
                '/gdpr.html" class="gdprc">' +
                Drupal.t("GDPR Compliance") +
                '</a></li><li><a href="' +
                z +
                langsrc +
                'abuse-policy/">' +
                Drupal.t("Abuse Policy") +
                "</a></li>" +
                m +
                "</ul>";
        }
        var C =
            customvar.productName == "accounts" || customvar.productName == "contacts"
                ? "support@zohoaccounts.com"
                : "support@zoho.com";
        var B =
            '<div class="ZF-support"><div class="ZF-container"><div class="ZF-contact"><ul><li class="zf-support-mail"><a id="zf-support-mailid" href="mailto:' +
            C +
            '">' +
            C +
            '</a></li><li class="zglob-lang"><div class="ZF-dlsel"><div class="zdc-container"><span class="zdc-text">Select DC</span><div class="zdc-container-inner"><ul><li><a href="https://www.zoho.in/">IN DC</a></li><li><a href="https://www.zoho.' +
            domainOne +
            '/">US DC</a></li><li><a href="https://www.zoho.eu/">EU DC</a></li></ul></div></div></div></li></ul></div></div></div>' +
            y;
        var B = y;
        newFooter = y;
        ee();
        oe(".product-header-top").html(oe("#mini-panel-product_menu").html());
        if (domainOne == "in") {
            oe(".zcomtctmanager").hide();
            if (oe(".zp-apps.zp-contactmanager").length > 0) {
                oe(".zp-apps.zp-contactmanager").remove();
            }
        }
        var W = document.domain;
        if (W == "www.zoho.eu") {
            oe(".business-proc .no-border").remove();
            oe('.business-proc a[href="/appcreator/"]').parent().remove();
        }
        oe(window).scroll(function () {
            oe(".zlang-container-inner").hide();
            if (oe(".zlang-container").children(".zlang-container-inner").length > 0) {
                oe(".zlang-container").children(".zlang-container-inner").removeClass("show").addClass("hide");
            }
            Q();
        });
        Q();
        var k = false;
        var x = false;
        oe(".menu-icon").click(function () {
            if (window.innerWidth <= 550) {
                oe(".product-menu").hide();
            }
            if (x == false) {
                x = true;
                oe(".mask-holder").removeClass("hide");
                setTimeout(function () {
                    oe(".mobile-menu").css({ left: "0%" });
                    var e = parseInt(window.innerHeight) - parseInt(oe(".header").height());
                    oe(".mobile-menu").css({ height: e + "px" });
                }, 100);
                setTimeout(function () {
                    oe("html,body").css({ overflow: "hidden" });
                }, 0);
            } else {
                L();
            }
        });
        oe(".mask-holder").click(function (e) {
            if (e.delegateTarget.className == e.target.className) {
                L();
            }
        });
        var F = oe(".product-nav-links .menu").css("display");
        oe(".userinfo-container").css({ display: "block" });
        oe("body").on("touchstart click", function (e) {
            var t = oe(".zlang-container");
            if (!t.is(e.target) && t.has(e.target).length === 0) {
                oe(".zlang-container").children(".zlang-container-inner").removeClass("show").addClass("hide");
                oe(".zlang-container-inner").hide();
            }
        });
        oe("body").click(function (e) {
            var t = true;
            if (productName == "mail" && oe(".signup-box form").css("display") == "none") {
                t = false;
            } else if (_lhref.indexOf("/creator/apps/") > 0 || oe(e.target).hasClass("scrollstop")) {
                t = false;
            }
            var a = "",
                o = "",
                n = "";
            if (e.target.parentNode) {
                e.target.parentNode.parentNode != null ? (n = e.target.parentNode.parentNode.className) : "";
                e.target.parentNode.className != null ? (o = e.target.parentNode.className) : "";
            }
            e.target.className != null ? (a = e.target.className) : "";
            if (window.location.href.indexOf("crm/what-is-crm.html") < 0 && t) {
                if (
                    a == "signup" ||
                    o == "get-started" ||
                    (oe(e.target).hasClass("act-btn") &&
                        oe(e.target).hasClass("cta-btn") &&
                        !oe(e.target).hasClass("zwp-pricing-link")) ||
                    oe(e.target).hasClass("zgh-signup")
                ) {
                    if (window.innerWidth > 991) {
                        if (
                            oe(".signup-box .sgfrm").length != 0 &&
                            oe(".zp-home-right").css("display") != "none" &&
                            typeof getusername == "undefined"
                        ) {
                            e.preventDefault();
                            j();
                        }
                    }
                    if (oe(".signup-box #czone-wallet").length > 0 && oe(".form-wrap .creditelm").length > 0) {
                        e.preventDefault();
                        if (getusername) {
                            oe("html, body").animate(
                                { scrollTop: oe(".form-wrap .creditelm").offset().top - 200 },
                                1e3
                            );
                        } else {
                            j();
                        }
                    }
                }
            }
            if (e.target.className == "menu") {
            } else if (e.target.className == "mobile-menu-icon") {
                if (oe(".product-nav-links .menu").css("display") == "none") {
                    k = false;
                } else {
                    k = true;
                }
                oe(".product-nav-links .menu").css({
                    height: window.innerHeight - oe("#mini-panel-product_menu").outerHeight(),
                });
                if (k == false) {
                    oe(".zgh-accounts .zgh-signup").fadeOut(100);
                    oe(".menu").slideDown(300);
                    oe("body").css({ overflow: "hidden" });
                    oe(".product-nav-links .menu").css({ overflow: "scroll" });
                } else {
                    if (!oe(".main-container-wrapper").hasClass("umain")) {
                        oe(".zgh-accounts .zgh-signup").fadeIn(100);
                    }
                    oe(".product-nav-links .menu").slideUp(300);
                    oe("body").css({ overflow: "auto" });
                }
            } else {
                if (k == true) {
                    oe(".product-nav-links .menu").slideUp(300);
                    oe("html,body").css({ overflow: "auto" });
                }
            }
            if (n == "userinfo-details") {
                oe(".userinfo-details").addClass("zoho-expand");
                if (getWidth > 285) {
                    oe(".userinfo-details.zoho-expand").css({ width: getWidth + 10, height: "135px" });
                }
            } else {
                oe(".userinfo-details").removeClass("zoho-expand");
                if (getWidth > 285) {
                    oe(".userinfo-details").css({ width: "35px", height: "35px" });
                    oe(".product-header-top .userinfo-details, .product-header-top .userinfo-container").css({
                        height: "43px",
                    });
                }
            }
        });
        oe(document).on("keydown", function (e) {
            keys = e.which;
            if (keys == 27) {
                oe(".userinfo-details").removeClass("zoho-expand");
            }
        });
        jQuery(".get-started a,.posibilities-bot").click(function (e) {
            if (window.innerWidth > 767) {
                e.preventDefault();
                j();
            }
        });
        anchorN = oe("a");
        aa = [];
        for (i = 0; i < anchorN.length; i++) {
            aa[i] = oe(anchorN[i]).attr("href");
            if (aa[i] == "javascript:void(0);") {
                oe(anchorN[i]).css({ cursor: "text" });
            }
        }
        window.onscroll = function () {
            var e = jQuery(window).height();
            var t = jQuery(window).scrollTop();
            var a = jQuery(".footer-wrapper");
            if (typeof a !== "undefined") {
                var o = a.position();
                if (o && o.top && e + t > o.top) {
                    jQuery(".service-links").css("position", "absolute");
                } else {
                    jQuery(".service-links").css("position", "fixed");
                }
            }
            if (jQuery(this).scrollTop() > 200) {
                jQuery("#back-top").fadeIn();
                jQuery("#back-top a").css("position", "fixed");
            } else {
                jQuery("#back-top").fadeOut();
            }
            oe(".zgh-userPanel").removeClass("active");
        };
        var O;
        var _;
        var S;
        var G = true;
        var N = 200;
        oe(".dropdown-mask").css({ height: "200px" });
        oe(".header .menu >  li").hover(
            function (t) {
                $this = oe(this);
                var a = t.clientX;
                O = setTimeout(function () {
                    var e = t.clientX;
                    if (oe(".dropdown-mask").hasClass("showmaskCheck")) {
                        N = 0;
                        if (a == e) {
                            _ = $this.children()[1];
                            oe(_).addClass("addMe");
                            oe(".catagory-dropdown.addMe").children().addClass("showMe");
                        }
                    }
                }, N);
            },
            function () {
                clearTimeout(O);
                oe(_).removeClass("addMe");
                oe(".catagory-dropdown").children().removeClass("showMe");
            }
        );
        oe(".header .menu").hover(
            function () {
                if (oe(".dropdown-mask").hasClass("showmaskCheck")) {
                    N = 0;
                } else {
                    N = 200;
                }
                S = setTimeout(function () {
                    oe(".dropdown-mask").addClass("showmask");
                }, 100);
                oe(".dropdown-mask").addClass("showmaskCheck");
            },
            function () {
                clearTimeout(S);
                oe(".dropdown-mask").removeClass("showmaskCheck");
                oe(".dropdown-mask").removeClass("showmask");
                N = 200;
            }
        );
        function L() {
            x = false;
            oe(".mobile-menu").css({ left: "-100%" });
            setTimeout(function () {
                oe(".mask-holder").addClass("hide");
            }, 100);
            setTimeout(function () {
                oe("html,body").css({ overflow: "auto" });
            }, 400);
        }
        function Q(e) {
            oe(".userinfo-details").removeClass("zoho-expand");
            if (e > 285) {
                oe(".userinfo-details").css({ width: 35, height: 35 });
                oe(".product-header-top .userinfo-details, .product-header-top .userinfo-container").css({
                    height: "43px",
                });
            }
            if (oe(window).scrollTop() > 200) {
                oe(".product-header-top").addClass("slide-active");
            } else {
                oe(".product-header-top").removeClass("slide-active");
            }
        }
        oe(window).resize(function () {
            if (oe(".footer-search-input").length > 0) {
                if (window.innerWidth <= 767) {
                    oe(".footer-search-input").attr("placeholder", Drupal.t("Search") + " zoho." + domainOne);
                } else {
                    oe(".footer-search-input").attr(
                        "placeholder",
                        Drupal.t("Search for product overviews, FAQs, and more...")
                    );
                }
            }
            ee();
            V();
            if (oe(window).outerWidth() <= 767) {
                if (!oe(".mobile-menu-icon .hamburger-box").hasClass("active")) {
                    oe(".product-nav-links .menu").css({
                        height: window.innerHeight - oe("#mini-panel-product_menu").outerHeight(),
                        display: "none",
                    });
                }
                oe("#mini-panel-product_menu .goto-link").hide();
                oe(".product-nav-links .menu .featured-apps-part").css("display", "block");
                oe("#mini-panel-product_menu .zlang-container").show();
                if (
                    oe("#mini-panel-product_menu .zlang-container").length < 1 &&
                    oe(".header .zlang-container").length != 0
                ) {
                    var e = '<div class="zlang-container">' + oe(".header .zlang-container").html() + "</div>";
                    oe(".overMe, .zlang-container").on("mouseover", function () {
                        oe(this).children(".zlang-container-inner").show();
                    });
                    oe(".overMe, .zlang-container").on("mouseout", function () {
                        oe(this).children(".zlang-container-inner").hide();
                    });
                    oe(".zlang-container").on("click", function () {
                        oe(this).children(".zlang-container-inner").show();
                    });
                }
            } else {
                oe(".product-nav-links .menu").css({ height: "auto", top: "auto", display: "block" });
                oe(".product-header-inner .userinfo-container,.product-header-inner .goto-link").remove();
                oe(".product-nav-links .menu .featured-apps-part").css("display", "none");
                oe("#mini-panel-product_menu .zlang-container").remove();
            }
        });
        function V() {
            if (window.innerWidth < 768) {
                oe(".mobile-menu-icon").css({ display: "block" });
                if (!oe(".mobile-menu-icon .hamburger-box").hasClass("active")) {
                    oe("#header .menu").css({ display: "none" });
                }
            } else {
                oe(".mobile-menu-icon").css({ display: "none" });
                oe("#header .menu").css({ display: "block" });
            }
            if (window.innerWidth > 1140) {
                oe(".header .menu").css({ display: "block" });
            } else {
                oe(".header .menu").css({ display: "none" });
            }
        }
        function H() {
            if (jQuery("body").hasClass("og-context-node-3434")) {
                if (jQuery("body").hasClass("node-type-product-help")) {
                    jQuery(".menu-panel .zoho-parent-wrapper .hasChild ").each(function (e, t) {
                        if (e == 0) {
                            var a = jQuery(this).find(".zoho-child-wrapper li a").eq(1).text();
                            if (a == "Onboarding") {
                                jQuery(this).find(".zoho-child-wrapper li a").eq(1).hide();
                            }
                        }
                        if (e == 6) {
                            var o = jQuery(this).find(".zoho-child-wrapper li a").eq(0).text();
                            if (o == "Reports") {
                                jQuery(this).find(".zoho-child-wrapper li a").eq(0).hide();
                            }
                        }
                    });
                }
            }
        }
        function K() {
            var e = jQuery("body").hasClass("og-context-node-96");
            if (e) {
                var t = window.location.pathname.split("/");
                if (t.length == 3) {
                    jQuery(".bottom-promo .ct-action-btn").attr(
                        "href",
                        "/crm/lp/signup.html?plan=enterprise?src=" + t[2] + ""
                    );
                } else if (t.length > 3) {
                    jQuery(".bottom-promo .ct-action-btn").attr(
                        "href",
                        "/crm/lp/signup.html?plan=enterprise?src=" + t[2] + "/" + t[3] + ""
                    );
                }
            }
        }
        function Y() {
            var e = jQuery("#mini-panel-product_menu .product-title a").text();
            if (e == "DRE") {
                jQuery(" .product-title a").attr("href", "https://www.zoho." + domainOne + "/");
            }
            if (e == "CRM Plus") {
                var t = window.location.pathname.split("/");
                for (var a = 0; a < t.length; a++) {
                    if (t[1] != "crm") {
                        lang = t[1];
                        url = "/" + lang + "/crm/crmplus/";
                        jQuery(".product-title a").attr("href", url);
                        jQuery(".product-title a").attr("href", url);
                    } else if (t[1] == "crm" && t[2] == "crmplus") {
                        jQuery(".product-title a").attr("href", langsrc + "crm/crmplus/");
                        jQuery(".product-title a").attr("href", langsrc + "crm/crmplus/");
                    }
                }
            } else if (e == "Writer") {
                jQuery(".product-title a").attr("href", langsrc + "writer/");
                jQuery(".product-title a").attr("href", langsrc + "writer/");
            }
        }
        function J() {
            var e = zohouser.DISPLAY_NAME;
            if (e) {
                oe(".header").addClass("uheader");
                if (!oe("body").hasClass("body-umain")) {
                    oe("body").addClass("body-umain");
                }
                if (customvar.isSanctioned) {
                    oe("body").addClass("sanctioned-umain");
                }
                oe("body").addClass("umain");
                if (oe("body").find(".main")) {
                    oe(".main").addClass("umain");
                    oe(document).trigger("umain-trigger");
                }
                if (dcenabled) {
                    if (!oe(".umain").hasClass("zNewDcSetup")) {
                        oe(".umain").addClass("zNewDcSetup");
                    }
                }
                getusername = decodeHexString(zohouser.DISPLAY_NAME);
            }
        }
        function j() {
            getAllField = oe(".signup-box .sgfrm input");
            if (getAllField.length != 0) {
                oe(".signup-box form").eq(0).css({ opacity: "0" });
                setTimeout(function () {
                    oe(".signup-box form").eq(0).animate({ opacity: "1" });
                }, 1e3);
                if (oe(".signup-box").hasClass("buttomsignup")) {
                    oe("html, body").animate(
                        { scrollTop: oe(".signup-box form").offset().top - 300 },
                        1e3,
                        function () {
                            setTimeout(function () {
                                oe(".focusin").removeClass("focusin");
                            }, 500);
                        }
                    );
                } else {
                    oe("html, body").animate({ scrollTop: 0 }, 1e3, function () {
                        setTimeout(function () {
                            oe(".focusin").removeClass("focusin");
                        }, 500);
                    });
                }
                if (customvar.productName != "recruit") {
                    setTimeout(function () {
                        var e = oe(".signup-box .sgfrm").eq(0).find("input");
                        e.length > 1 ? e.eq(1).addClass("focusin").focus() : e.eq(0).addClass("focusin").focus();
                    }, 2e3);
                }
            }
        }
        function X() {
            var e =
                '<div class="mobile-menu-signup"><a href="' +
                zPrdSignupLink +
                '?src=mtry-hbm">' +
                zPrdSignupLinkText +
                '</a><a href="' +
                zPrdLoginLink +
                '">SIGN IN</a> <div class="mobile-menu-moreprd"><a href="https://www.zoho.' +
                domainOne +
                "/products.html?ref=m-" +
                productName +
                '">All Zoho Products</a></div></div>';
            oe(".product-nav-links .menu .featured-apps-part").html(e);
        }
        function ee() {
            var e;
            if (!getusername) {
                var t = nameServices[0][allProductlowerCase.indexOf(productName)];
                if (typeof t != "undefined" && typeof t != "") {
                    var a = "";
                    currentLang != "" ? (a = "service_language=" + currentLang + "&") : (a = "");
                    e =
                        '<a class="user-icon" href="https://accounts.zoho.com/login?' +
                        a +
                        "servicename=" +
                        t +
                        '">User Icon</a>';
                    _globalAccess = e;
                }
            }
            if (oe(".product-nav-links .menu .featured-apps-part").length < 1) {
                var o = Drupal.t("Related Products");
                if (productName == "home") {
                    o = Drupal.t("Our Products");
                }
                var n =
                    '<li class="featured-apps-part"><div class="mobile-menu-moreprd moreprd-nonloggedin"><a href="' +
                    langsrc +
                    '">' +
                    Drupal.t("All Zoho Products") +
                    "</a></div></li>";
                oe(".product-nav-links .menu").append(n);
            }
            if (window.outerWidth <= 767) {
                if (g == 0) {
                    g = 1;
                    oe(".ptmenu").addClass("sticky");
                    oe(".product-nav-links .menu").css({
                        height: window.innerHeight - oe("#mini-panel-product_menu").outerHeight(),
                    });
                }
            }
            var i = oe(".product-header-top .menu").children();
            oe(i[1]).addClass("selected");
            var r = oe(".view-content");
            var s = oe("body").find(r);
            if (s.length > 0) {
                var s = oe(r).children();
                if (s.length > 3) {
                    r.addClass("plane-four-column");
                }
            }
        }
        function D() {
            if (typeof customvar.userinfocallback != "undefined") {
                customvar.userinfocallback();
            }
            if (!customvar.customclean) {
                if (window.innerWidth > 992 && window.innerHeight < 800) {
                    if (oe(".testimonial-content").length > 0) {
                        var e = oe(".testimonial-content").innerHeight();
                        oe(".testimonial-content").css("margin-top", (window.innerHeight - 20 - e) / 2);
                    }
                }
                if (typeof zohouser != "undefined") {
                    getusername = zohouser.DISPLAY_NAME;
                    customvar.zDomainHandling();
                    J();
                }
                if (getusername) {
                    oe(".signing .signup, .signing .signin, .signup-box").hide();
                    if (oe(".zh-access").length > 0 && oe("body").hasClass("node-type-zoho-home")) {
                        oe(".zh-access").attr("href", "https://home." + Zdomain + "." + dcdomainOne + "/home");
                    }
                }
                if (!getusername) {
                    if (oe(".loggedin-userinfo").length > 0) {
                        oe(".loggedin-userinfo").hide();
                    }
                    if (onlycom) {
                        oe("body").addClass("newuser-product-notavail");
                    }
                    if (
                        window.location.href.indexOf("pricing-comparison.html") > 0 ||
                        window.location.href.indexOf("pricing.html") > 0
                    ) {
                        oe(".signing .signup").hide();
                    } else {
                        oe(".signing .signup").show();
                    }
                    if (window.innerWidth > 991) {
                        oe(".signup-box").show();
                    }
                    oe(".signing .signin").show();
                    oe(".try-now").addClass("signupbtn-hide").removeClass("signupbtn-show");
                    var t = "/" + productName + "/";
                    var a = Drupal.t("Sign Up Now");
                    var o = ["meeting", "workplace", "assist", "salesiq"];
                    var n = [
                        "signup.html?version=freetrial&service=meeting&src=topbar-try",
                        "pricing.html",
                        "signup.html?version=freetrial",
                        "signup.html?source=Website.Header",
                    ];
                    if (o.indexOf(productName) > -1) {
                        t += n[o.indexOf(productName)];
                        if (productName == "mail" || productName == "workplace") {
                            a = Drupal.t("Get Started");
                        } else if (productName == "docs") {
                            a = Drupal.t("Get Started Now");
                        }
                    } else {
                        t += "signup.html";
                    }
                    if (productName == "writer") {
                        a = Drupal.t("Get Started Now");
                    }
                    var i = ["show", "writer", "crmplus", "appcreator", "crm"];
                    $ = "";
                    currentLang != "" ? ($ = "/" + currentUrlLang) : ($ = $);
                    var r = $ + t;
                    var s = $ + "/" + productName;
                    var l = a;
                    if (i.indexOf(productName) < 0) {
                        var s = $ + "/" + productName + "/login.html";
                        productName == "home" ? (r = r.split("/home")[0] + r.split("/home")[1]) : "";
                        productName == "mail" ? (r = langsrc + "mail/zohomail-pricing.html") : "";
                    }
                    if (i.indexOf(productName) > -1) {
                        if (productName == "crmplus") {
                            if (window.location.host != "www.zoho.com.cn") {
                                r = langsrc + "crm/crmplus/signup.html";
                                s = "crm/crmplus/login.html";
                                l = Drupal.t("Sign Up");
                            }
                        } else if (productName == "crm") {
                            var c = window.location.pathname;
                            r = langsrc + "crm/signup.html";
                            s = "/crm/lp/login.html";
                            if (
                                c != "/crm/index.html" &&
                                c != "/crm/zohocrm-pricing.html" &&
                                c != "/crm/comparison.html"
                            ) {
                                l = Drupal.t("Get Started");
                            } else {
                                l = Drupal.t("Sign Up Now");
                            }
                        } else if (productName == "show") {
                            r = "https://docs.zoho." + domainOne + "/" + productName + "/signup";
                            s = "https://docs.zoho." + domainOne + "/" + productName + "/signup?signin=true";
                            l = Drupal.t("Get Started Now");
                        }
                    }
                    oe(".header .signing .signin").css({ opacity: 1 });
                    if (window.innerWidth <= 767) {
                        oe(".user-icon").css({ display: "block" });
                    }
                }
                if (getusername) {
                    if (!oe("body").hasClass("zb-firefox")) {
                        if (global_getUrlParam("zsrc") != "") {
                            if (global_getUrlParam("zsrc").indexOf("fromproduct-remove") > -1) {
                                if (global_getUrlParam("serviceurl") != "") {
                                    if (decodeURIComponent(global_getUrlParam("serviceurl")).indexOf("/") == 0) {
                                        window.location =
                                            "https://" +
                                            customvar.productName +
                                            "." +
                                            Zdomain +
                                            "." +
                                            dcdomainOne +
                                            encodeURIComponent(global_getUrlParam("serviceurl"));
                                    } else {
                                        window.location = encodeURIComponent(
                                            customvar.dcadded(global_getUrlParam("serviceurl"))
                                        );
                                    }
                                } else {
                                    window.location =
                                        "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne;
                                }
                            }
                        }
                    }
                    if (oe(".loggedin-userinfo").length > 0) {
                        oe(".loggedin-userinfo").show();
                        oe(".signup-form h3,.signup-box,.login-text").hide();
                        if (oe(".access-apps").length < 1) {
                            oe(".loggedin-userinfo").append(
                                " <span class='username'>" +
                                    Drupal.t("Welcome") +
                                    " <span>" +
                                    customvar.htmlencode(getusername) +
                                    "!</span></span> <a class='access-apps' href=" +
                                    $gotoPage +
                                    "></a>"
                            );
                            oe(".loggedin-userinfo .access-apps").html(accessZoho + " " + customvar.productName);
                        }
                    }
                    if (!hidelogin) {
                        oe(
                            ".getstartedbox .signup-btn.mobile-btn, .zp-home-left .act-btn.cta-btn, .content-wrap .act-btn.cta-btn, .non-temp .act-btn.cta-btn, .bot-cta-con .act-btn.cta-btn, .getstartedbox .signup-btn.mobile-btn"
                        ).css("display", "inline-block");
                        oe(".node-type-zoho-home .zh-access, .act-btn.cta-btn").css({
                            opacity: "1",
                            visibility: "visible",
                        });
                    }
                    var u = window.location.href;
                    if (customvar.servicename == "") {
                        if (
                            customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)] != null &&
                            customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)] != "undefined"
                        ) {
                            customvar.service =
                                "&servicename=" +
                                customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)];
                        } else {
                            customvar.service = "&servicename=ZohoHome";
                        }
                    } else {
                        customvar.service = "&servicename=" + customvar.servicename;
                    }
                    var d =
                        "https://accounts." +
                        Zdomain +
                        "." +
                        dcdomainOne +
                        "/logout?serviceurl=" +
                        encodeURI(u) +
                        customvar.service;
                    var m = "https://accounts." + Zdomain + "." + dcdomainOne + "/u/h#home";
                    if (
                        customvar.outproduct.indexOf(customvar.productName) > -1 ||
                        window.location.host == "catalyst.zoho.eu"
                    ) {
                        var p = dcdomainOne == "ca" ? "zohocloud" : "zoho";
                        d =
                            "https://accounts." +
                            p +
                            "." +
                            dcdomainOne +
                            "/logout?serviceurl=" +
                            encodeURI(u) +
                            customvar.service;
                        m = "https://accounts." + p + "." + dcdomainOne + "/u/h#home";
                    }
                    let e = "";
                    if (typeof zohouser != "undefined") {
                        if (typeof zohouser.ZUID != "undefined") {
                            e = "&ID=" + zohouser.ZUID;
                        }
                    }
                    $userAvator = "https://contacts." + Zdomain + "." + dcdomainOne + "/file?t=user&fs=thumb" + e;
                    var h =
                        '<div class="zgh-user-box"> <div class="zgh-userPanel"> <button class="zgh-userAvatar" aria-haspopup="menu" aria-label="Account menu"><img src=' +
                        $userAvator +
                        " alt=" +
                        customvar.htmlencode(getusername) +
                        '></button> <div class="zgh-userLink"> <ul> <li class="zgh-userImage"> <img src=' +
                        $userAvator +
                        " alt=" +
                        customvar.htmlencode(getusername) +
                        '> </li><li class="zgh-userName">' +
                        customvar.htmlencode(getusername) +
                        '</li><li class="zgh-userAccess"> <a href="https://home.' +
                        Zdomain +
                        "." +
                        dcdomainOne +
                        '">' +
                        accessZoho +
                        ' Home</a> </li><li class="zgh-userAccount"> <a href=' +
                        m +
                        ">" +
                        myAccount +
                        '</a> </li><li class="zgh-userLogout"><a href="' +
                        d +
                        '">' +
                        signOut +
                        "</a> </li></ul> </div></div></div>";
                    oe(".signing .goto-link").hide();
                    customvar.userelem = h;
                    oe(".zgh-accounts").html(h);
                    if (typeof customvar.logged != "undefined") {
                        customvar.logged();
                    }
                    if (typeof customvar.loggedupdate != "undefined") {
                        customvar.loggedupdate();
                    }
                    if (typeof customvar.globalHeaderLogged != "undefined") {
                        customvar.globalHeaderLogged();
                    }
                    if (typeof customvar.pricinglogged != "undefined") {
                        customvar.pricinglogged();
                    }
                    var f = 0;
                    var g = setInterval(function () {
                        if (oe(".zw-product-header .zgh-accounts").length > 0) {
                            oe(".zw-product-header .zgh-accounts").html(h);
                            oe(".zgh-userAccess a").attr("href", oe(".act-btn.cta-btn").attr("href"));
                            oe(".zgh-userAccess a").html(oe(".act-btn.cta-btn").html());
                            clearInterval(g);
                        }
                        if (f > 40) {
                            clearInterval(g);
                        }
                        f++;
                    }, 200);
                    if (hidelogin) {
                        oe("body").addClass("product-notavail");
                        var v = customvar.dccountry();
                        var b = oe("body").attr("data-prdname-display")
                            ? oe("body").attr("data-prdname-display")
                            : productName;
                        b = b.indexOf("zoho") > -1 ? b : "Zoho " + b;
                        if (typeof customvar.notavailProductName != "undefined") {
                            b = customvar.notavailProductName;
                        }
                        var y = oe(
                            ".act-btn.cta-btn, .zgh-userAccess, .access-apps, .trynow-plan, .zfeatures-btn .zcta, a.logged-out, a.logged-in, .zcta, .zcta-new, .zw-template-zp_pricing .login, .zw-template-zp_pricing .start-freetrail, .zw-template-zp_pricing .bottom-access, .zw-template-zp_pricing .try-now-btn, .zw-template-zp_pricing .trynow, .zw-template-zp_pricing .wp-trial-container a, .zw-template-zp_pricing .zpricing-link a, .zw-template-zp_pricing .ztry-now a, .ztrial-price a"
                        );
                        y.hide();
                        var w = ["th", "pt-br", "es-xl", "de", "fr", "nl", "ar", "id", "vi", "he", "it"];
                        if (!w.includes(currentUrlLang)) {
                            oe(".zw-promo-top").prepend(
                                '<div class="zDCnotif-container"><p><strong> ' +
                                    b +
                                    " </strong>" +
                                    Drupal.t("is not available in your region.") +
                                    '<a href="' +
                                    "https://www.zoho." +
                                    domainOne +
                                    "/" +
                                    "all-products.html" +
                                    '">' +
                                    Drupal.t("Explore other apps.") +
                                    "</a> </p></div>"
                            );
                        } else if (currentUrlLang) {
                            oe(".zw-promo-top").prepend(
                                '<div class="zDCnotif-container"><p><strong> ' +
                                    b +
                                    " </strong>" +
                                    Drupal.t("is not available in your region.") +
                                    '<a href="' +
                                    "https://www.zoho." +
                                    domainOne +
                                    "/" +
                                    currentUrlLang +
                                    "/all-products.html" +
                                    '">' +
                                    Drupal.t("Explore other apps.") +
                                    "</a> </p></div>"
                            );
                        } else {
                            oe(".zw-promo-top").prepend(
                                '<div class="zDCnotif-container"><p><strong> ' +
                                    b +
                                    " </strong>" +
                                    Drupal.t("is not available in your region.") +
                                    '<a href="' +
                                    "https://www.zoho." +
                                    domainOne +
                                    "/" +
                                    "all-products.html" +
                                    '">' +
                                    Drupal.t("Explore other apps.") +
                                    "</a> </p></div>"
                            );
                        }
                        var z = 0;
                        var C = setInterval(function () {
                            if (oe(".z-bottom-cta-menu").length > 0) {
                                clearInterval(C);
                                oe(".z-bottom-cta-menu").addClass("z-disabled");
                                oe(".loggedin").html("Not available");
                                y.hide();
                            }
                            if (z > 50) {
                                clearInterval(C);
                            }
                            z++;
                        }, 100);
                    }
                } else {
                    oe("body").addClass("non-umain");
                    if (customvar.isSanctioned) {
                        oe("body").addClass("sanctioned-non-umain");
                    }
                    if (typeof customvar.nonloggedupdate != "undefined") {
                        customvar.nonloggedupdate();
                    }
                    if (typeof customvar.pricingnonlogged != "undefined") {
                        customvar.pricingnonlogged();
                    }
                    if (typeof customvar.nonlogged != "undefined") {
                        customvar.nonlogged();
                        var f = 0;
                        var g = setInterval(function () {
                            if (oe(".zlogin-menu").length > 0) {
                                oe(".zlogin-menu a").attr("href", oe(".zgh-login").attr("href"));
                                clearInterval(g);
                            }
                            if (f > 20) {
                                clearInterval(g);
                            }
                            f++;
                        }, 200);
                    }
                    if (typeof customvar.nonlogged == "undefined" && oe(".product-header-top .zgh-signup").length) {
                        if (!oe(".product-header-top .zgh-signup").attr("href").includes(customvar.productName)) {
                            oe(".product-header-top .zgh-signup").attr("href", langsrc + "signup.html");
                        }
                    }
                    if (typeof customeCallWatchBtn != "undefined") {
                        customeCallWatchBtn();
                    }
                    oe(".product-header-top .zgh-accounts .zgh-signup, .zgh-accounts .zgh-login").css(
                        "display",
                        "inline-block"
                    );
                    oe(".act-btn.cta-btn, .node-type-zoho-home .zh-signup").css({
                        opacity: "1",
                        visibility: "visible",
                    });
                    oe(".product-header-top .zgh-accounts .zgh-login").css("display", "none");
                }
                oe('a[href*="mailto:abuse@zoho.com"]')
                    .html("abuse@" + _zcopr + ".com")
                    .attr("href", "mailto:abuse@zoho.com");
                if (dcdomainOne == "eu") {
                    oe('a[href*="mailto:abuse@zoho.com"]')
                        .html("abuse@eu." + _zcopr + ".com")
                        .attr("href", "mailto:abuse@zoho.com");
                    oe('a[href*="mailto:postmaster@zoho.com"]')
                        .html("postmaster@eu." + _zcopr + ".com")
                        .attr("href", "mailto:postmaster@zoho.com");
                }
                customvar.dcbasedimage();
            } else {
                if (typeof zohouser != "undefined") {
                    getusername = decodeHexString(zohouser.DISPLAY_NAME);
                    oe(".header").addClass("uheader");
                    oe("body").addClass("body-umain").addClass("umain");
                    if (customvar.isSanctioned) {
                        oe("body").addClass("sanctioned-umain");
                    }
                    if (oe("body").find(".main")) {
                        oe(".main").addClass("umain");
                        if (customvar.isSanctioned) {
                            oe(".main").addClass("sanctioned-umain");
                        }
                        oe(document).trigger("umain-trigger");
                    }
                    dcenabled ? oe(".umain").addClass("zNewDcSetup") : "";
                    if (!oe("body").hasClass("zb-firefox")) {
                        if (global_getUrlParam("zsrc") != "") {
                            if (global_getUrlParam("zsrc").indexOf("fromproduct-remove") > -1) {
                                if (global_getUrlParam("serviceurl") != "") {
                                    if (decodeURIComponent(global_getUrlParam("serviceurl")).indexOf("/") == 0) {
                                        window.location =
                                            "https://" +
                                            customvar.productName +
                                            "." +
                                            Zdomain +
                                            "." +
                                            dcdomainOne +
                                            encodeURIComponent(global_getUrlParam("serviceurl"));
                                    } else {
                                        window.location = encodeURIComponent(
                                            customvar.dcadded(global_getUrlParam("serviceurl"))
                                        );
                                    }
                                } else {
                                    window.location =
                                        "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne;
                                }
                            }
                        }
                    }
                    if (oe(".loggedin-userinfo").length > 0) {
                        oe(".loggedin-userinfo").show();
                        oe(".signup-form h3,.signup-box,.login-text").hide();
                        if (oe(".access-apps").length < 1) {
                            oe(".loggedin-userinfo").append(
                                " <span class='username'>" +
                                    Drupal.t("Welcome") +
                                    " <span>" +
                                    customvar.htmlencode(getusername) +
                                    "!</span></span> <a class='access-apps' href=" +
                                    $gotoPage +
                                    "></a>"
                            );
                            oe(".loggedin-userinfo .access-apps").html(accessZoho + " " + customvar.productName);
                        }
                    }
                } else {
                    oe(".loggedin-userinfo").hide();
                    window.location.href.indexOf("pricing-comparison.html") > 0 ||
                    window.location.href.indexOf("pricing.html") > 0
                        ? oe(".signing .signup").hide()
                        : oe(".signing .signup").show();
                    window.innerWidth > 991 ? oe(".signup-box").show() : "";
                    oe(".signing .signin").show();
                    oe(".try-now").addClass("signupbtn-hide").removeClass("signupbtn-show");
                }
            }
        }
        function te() {
            setTimeout(function () {
                if (oe(".signup-box").length > 0) {
                    for (var e = 0; e < oe(".sgfrm input").length; e++) {
                        if (
                            oe(".sgfrm input").eq(e).val() != "undefined" &&
                            oe(".signup-box").css("display") == "block"
                        ) {
                            if (oe(".sgfrm input").eq(e).val() != "") {
                                if (oe(".sgfrm input").eq(e).prev().hasClass("placeholder")) {
                                    oe(".sgfrm input").eq(e).parent().addClass("added-placeholder");
                                }
                            }
                        }
                    }
                }
            }, 500);
        }
        oe(document)
            .on("blur", "input", function () {
                var e = oe(this).val();
                if (e == "" || e == null) {
                    oe(this).parent().removeClass("added-placeholder");
                } else {
                    oe(this).parent().addClass("added-placeholder");
                }
            })
            .on("focus", "input", function () {
                var e = oe(this).val();
                if (e == "" || e == null) {
                    oe(this).parent().removeClass("").addClass("added-placeholder");
                } else {
                    oe(this).parent().addClass("added-placeholder");
                }
            })
            .on("change", "input", function () {
                te();
            });
        oe(".navbar-toggle").click(function (e) {
            e.stopPropagation();
            oe(".header-menu-2 ul.menu").slideToggle();
        });
        if (oe("#zohoiam").length > 0) {
            var ae = oe("#zohoiam")
                .attr("src")
                .split(".zoho.")
                .join("." + ZdomainName + ".");
            oe("#zohoiam").attr("src", ae);
        }
        setTimeout(function () {
            jQuery(".animation-wrap > div").each(function (e) {
                var t = jQuery(this);
                setTimeout(
                    function () {
                        t.addClass("animated");
                    },
                    (e + 1) * 100
                );
            });
        }, 100);
        var P = jQuery(".features-list").children();
        var A = [];
        for (var i = 0; i < P.length; i++) {
            A[i] = jQuery(P[i]).offset().top - window.innerHeight + jQuery(".features-list li").innerHeight();
        }
        jQuery(window).scroll(function () {
            var e = jQuery(window).scrollTop();
            for (var t = 0; t < P.length; t++) {
                if (e > A[t]) {
                    if (t % 2 == 1) {
                        jQuery(P[t]).addClass("from-right");
                    } else {
                        jQuery(P[t]).addClass("from-left");
                    }
                }
            }
            if (e > A[P.length - 1] + 150) {
                jQuery(".bottom-signup,.download-features a").css({ opacity: 1 });
            }
            jQuery(".product-header.sub-header").css({ top: -76 });
        });
        var k = false;
        var F = jQuery(".product-menu").css("display");
        jQuery("body").click(function (e) {
            if (e.target.className == "product-menu") {
            } else if (e.target.className == "sub-menu-icon") {
                if (k == false) {
                    k = true;
                    jQuery(".product-menu").slideDown(300);
                } else {
                    k = false;
                    jQuery(".product-menu").slideUp(300);
                }
            } else {
                if (k == true) {
                    k = false;
                    jQuery(".product-menu").slideUp(300);
                    jQuery("html,body").css({ overflow: "auto" });
                }
            }
        });
        jQuery(".product-menu li").click(function (e) {
            var t = jQuery(this).attr("class");
            var a = t.split("-");
            if (a[0] == "crmplus") {
                e.preventDefault();
                var o = jQuery("section[data=" + a[1] + "]").offset().top;
                jQuery("html, body").animate(
                    { scrollTop: o - jQuery(".sub-header").innerHeight() },
                    1e3,
                    "easeInOutQuad"
                );
            }
        });
        jQuery(".bottom-signup,.signing .signup").click(function (e) {
            if (productName == "crm") {
                return;
            }
            e.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, 1e3, "easeInOutQuad");
            setTimeout(function () {
                jQuery(".signup-box div:first-child input").focus();
            }, 1e3);
        });
    });
})(jQuery);
(function (c) {
    c.fn.visible = function (e) {
        var t = c(this),
            a = c(window),
            o = a.scrollTop() - 200,
            n = o + (a.height() + 300),
            i = t.length > 0 ? t.offset().top + 250 : 0,
            r = i + t.height(),
            s = e === true ? r : i,
            l = e === true ? i : r;
        return l <= n && s >= o;
    };
})(jQuery);
(function (i) {
    function e() {
        if ($(window).outerWidth() > 767) {
            i(".content-wrap:not(.animated)").each(function () {
                var e = i(this),
                    t = e.attr("data-delay") ? e.attr("data-delay") : 0;
                setTimeout(function () {
                    if (e.visible(true)) {
                        e.addClass(e.attr("data-animation"));
                        e.addClass("animated");
                    }
                }, t);
            });
        }
        i(".content-wrap:not(.bottom-animated)").each(function () {
            var e = i(this),
                t = i(window),
                a = t.scrollTop(),
                o = e.offset().top,
                n = t.height();
            if (a > o - n) {
                e.addClass("bottom-animated");
            }
        });
        i(".content-wrap:not(.top-animated)").each(function () {
            var e = i(this),
                t = i(window),
                a = t.scrollTop(),
                o = e.offset().top,
                n = t.height();
            if (a > o) {
                e.addClass("top-animated");
            }
        });
        i(".content-wrap:not(.middle-animated)").each(function () {
            var e = i(this),
                t = i(window),
                a = t.scrollTop(),
                o = e.offset().top,
                n = t.height();
            if (a > o - n / 2) {
                e.addClass("middle-animated");
            }
        });
    }
    i(document).ready(function () {
        e();
    });
    i(window).resize(function () {
        e();
    });
    i(window).scroll(function () {
        e();
    });
})(jQuery);
function zohoGASignupEvent() {}
function zohoFedClickEvent() {}
function zcTrackClick() {}
$(window).on("load", function () {
    customvar.termslink.setDefaultTerm();
    $(".ZPprivacy > li:hidden").attr("target", "-1");
    customvar.vimcall();
    var e = $(".zcpopup-controller, .popup-controller");
    if (customvar.productName != "crm") {
        for (var t = 0; t < e.length; t++) {
            if (typeof $(".zcpopup-controller, .popup-controller").eq(t).attr("data-video") != "undefined") {
                if (e.eq(t).attr("data-video").indexOf("vimeo") > -1) {
                    e.eq(t).addClass("vimvideo").removeClass("zcpopup-controller").removeClass("popup-controller");
                } else {
                    e.eq(t).addClass("nonvimvideo").removeClass("zcpopup-controller").removeClass("popup-controller");
                }
            }
        }
    }
    if (global_getUrlParam("pages-list") == "") {
        if (currentUrlLang != "") {
            var a = $(".add-lang");
            for (var t = 0; t < a.length; t++) {
                if (a.eq(t).hasClass("nonlang")) {
                } else {
                    if (typeof a.eq(t).attr("href") != "undefined") {
                        if (a.eq(t).attr("href").indexOf("/") == 0) {
                            var o = a.eq(t).attr("href");
                            a.eq(t).attr("href", "/" + currentUrlLang + o);
                        }
                    }
                }
            }
        }
    }
    var n = [
        "crm",
        "crmplus",
        "zohobigin",
        "marketingplus",
        "zakya",
        "canvas",
        "sprints",
        "zeptomail",
        "vanihq",
        "qntrl",
        "nila",
    ];
    if (n.indexOf(customvar.productName) < 0) {
        if (predomain) {
            $.getScript(customvar.ocmsprelink + "/sites/zweb/js/common/crmwebforms.js");
        } else {
            $.getScript("https://www.zohowebstatic.com/sites/zweb/js/common/crmwebforms.js");
        }
    }
    var i = 0;
    var r = setInterval(function () {
        if (_preZ == window.location.hostname && customvar.pathname == "/creator/footer-test.html") {
            if ($(".zw-footer-search-lang-block").length) {
                clearInterval(r);
                $(".zw-footer-search-lang-block").append(
                    '<div class="zlang-container"><span class="zlang-text">' +
                        $(".zgh-localSelect").html() +
                        '</span><div class="zlang-container-inner" style="display: none;"><ul>' +
                        '<li><a class="nonlang-ld" data-lang="es-xl" href="">EspaÃ±ol</a></li><li><a class="nonlang-ld" data-lang="pt-br" href="">PortuguÃªs (Brasil)</a></li><li><a class="nonlang-ld" data-lang="de" href="">Deutsch</a></li><li><a class="nonlang-ld" data-lang="fr" href="">FranÃ§ais</a></li>' +
                        "</ul></div></div>"
                );
                $(".zlang-text").show();
                $(".overMe, .zlang-container").on("mouseover", function () {
                    $(this).children(".zlang-container-inner").show();
                });
                $(".overMe, .zlang-container").on("mouseout", function () {
                    $(this).children(".zlang-container-inner").hide();
                });
                $(".zlang-container").on("click", function (e) {
                    if (!$(this).children(".zlang-container-inner").hasClass("show")) {
                        $(this).children(".zlang-container-inner").removeClass("hide").addClass("show");
                        $(this).children(".zlang-container-inner").show();
                    } else {
                        $(this).children(".zlang-container-inner").removeClass("show").addClass("hide");
                        $(this).children(".zlang-container-inner").hide();
                    }
                });
            }
        } else if (
            $(".ZF-dlsel").length > 0 ||
            ($(".zw-footer-search-lang-block").length > 0 &&
                !customvar.newFooterProducts.includes(customvar.productName))
        ) {
            clearInterval(r);
            if ($(".zgh-localBox ul").html() != "") {
                if ($(".zgh-localBox ul li").length > 0) {
                    if (!customvar.newFooterProducts.includes(customvar.productName)) {
                        $(".zw-footer-search-lang-block").append(
                            '<div class="zlang-container"><button aria-haspopup="menu" aria-expanded="false"  class="zlang-text">' +
                                $(".zgh-localSelect").html() +
                                '</button><div class="zlang-container-inner" style="display: none;"><ul>' +
                                $(".zgh-localBox ul").html() +
                                "</ul></div></div>"
                        );
                    } else {
                        $(".ZF-dlsel").append(
                            '<div class="zlang-container"><button aria-haspopup="menu" aria-expanded="false"  class="zlang-text">' +
                                $(".zgh-localSelect").html() +
                                '</button><div class="zlang-container-inner" style="display: none;"><ul>' +
                                $(".zgh-localBox ul").html() +
                                "</ul></div></div>"
                        );
                    }
                    if (window.innerWidth < 700 && isMobile && $(".ZF-dlsel .zlang-container").length) {
                        $(".ZF-dlsel .zlang-container").addClass("zwc-footer-lang-drop-safari");
                    }
                    $(".zlang-container-inner li a").on("blur", function (e) {
                        let t = $(".zlang-container-inner li > a:visible");
                        let a = t.length;
                        if ((t[a - 1] == e.target || t[0] == e.target) && ![...t].includes(e.relatedTarget)) {
                            $(".zlang-container-inner").removeClass("show").addClass("hide");
                            $(".zlang-container-inner").hide();
                            $("zlang-container").children(".zlang-text").attr("aria-expanded", false);
                        }
                    });
                    $(".zlang-text").show();
                    $(".zlang-container-inner ul li").length == 1
                        ? $(".zlang-container-inner").addClass("localBox-single")
                        : "";
                    $(".overMe, .zlang-container").on("mouseover", function () {
                        $(this).children(".zlang-container-inner").show();
                        $(this).children(".zlang-text").attr("aria-expanded", true);
                    });
                    $(".overMe, .zlang-container").on("mouseout", function () {
                        $(this).children(".zlang-container-inner").hide();
                        $(this).children(".zlang-text").attr("aria-expanded", false);
                    });
                    $(".zlang-container").on("click", function (e) {
                        if (!$(this).children(".zlang-container-inner").hasClass("show")) {
                            $(this).children(".zlang-container-inner").removeClass("hide").addClass("show");
                            $(this).children(".zlang-container-inner").show();
                        } else {
                            $(this).children(".zlang-container-inner").removeClass("show").addClass("hide");
                            $(this).children(".zlang-container-inner").hide();
                        }
                    });
                }
            } else {
                $(".zglob-lang").remove();
            }
            if (currentUrlLang == "jp") {
                if (typeof customvar.supportId != "undefined") {
                    $(".zf-support-mail a").eq(0).html(customvar.supportId());
                    $(".zf-support-mail a")
                        .eq(0)
                        .attr("href", "mailto:" + customvar.supportId());
                }
            }
            customvar.zChaSupIDByReg();
        }
        if (i > 100) {
            clearInterval(r);
        }
        i++;
    }, 100);
    if (window.innerWidth <= 767) {
        $(".footer-search-input").attr("placeholder", Drupal.t("Search") + " zoho." + domainOne);
    } else {
        $(".footer-search-input").attr("placeholder", Drupal.t("Search for product overviews, FAQs, and more..."));
    }
    if (_preZ == window.location.hostname && currentUrlLang != "jp") {
    } else {
        var s =
            customvar.productName == "accounts" || customvar.productName == "contacts"
                ? "support@zohoaccounts.com"
                : "support@zoho.com";
        var l =
            '<div class="ZF-support"><div class="ZF-container"><div class="ZF-contact"><ul><li class="zf-support-mail"><a id="zf-support-mailid" href="mailto:' +
            s +
            '">' +
            s +
            '</a></li><li class="zglob-lang"><div class="ZF-dlsel"><div class="zdc-container"><span class="zdc-text">Select DC</span><div class="zdc-container-inner"><ul><li><a href="https://www.zoho.in/">IN DC</a></li><li><a href="https://www.zoho.' +
            domainOne +
            '/">US DC</a></li><li><a href="https://www.zoho.eu/">EU DC</a></li></ul></div></div></div></li></ul></div></div></div>';
        if (!customvar.newFooterProducts.includes(customvar.productName)) {
            l = '<a id="zf-support-mailid" href="mailto:' + s + '">' + s + "</a>";
            if ($(".zwf-support-mail-links").length > 0) {
                $(".zwf-support-mail-links").append(l);
            }
        } else {
            if (currentUrlLang == "jp") {
                if ($(".common-links").length > 0) {
                    $(".common-links").prepend(l);
                }
            }
        }
    }
    if (!$("body").hasClass("r-g-f")) {
        if (!customvar.newFooterProducts.includes(customvar.productName)) {
            $(".zw-footer-search-lang-block").prepend(
                '<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' +
                    Drupal.t("Search for product overviews, FAQs, and more...") +
                    '" type="text"> <button class="footer-search-btn" aria-label="footer search button" type="submit" value="Submit"><span></span></button> </form></div>'
            );
        } else {
            $(".ZPprivacy").before(
                '<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' +
                    Drupal.t("Search for product overviews, FAQs, and more...") +
                    '" type="text"> <button class="footer-search-btn" aria-label="footer search button" type="submit" value="Submit"><span></span></button> </form></div>'
            );
        }
    }
    if (_preZ == window.location.hostname && customvar.pathname == "/creator/footer-test.html") {
        $(".zw-footer-search-lang-block").prepend(
            '<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' +
                Drupal.t("Search for product overviews, FAQs, and more...") +
                '" type="text"> <button class="footer-search-btn" aria-label="footer search button" type="submit" value="Submit"><span></span></button> </form></div>'
        );
        $(".zwf-support-mail-links").append(
            '<a id="zf-support-mailid" href="mailto:support@zohosites.com">support@zohosites.com</a>'
        );
    }
    if (currentUrlLang != "") {
        $(".gdprc").attr("target", "_blank");
    }
    $(document).on("submit", "#footer-search-action", function (e) {
        e.preventDefault();
        var t = $(".footer-search-input").val().trim();
        var a;
        if (currentUrlLang == "") {
            if (
                customvar.outproduct.indexOf(customvar.productName) > -1 ||
                window.location.host.indexOf("zohoflow") > 0
            ) {
                a = "https://www" + ".zoho" + ".com/search-results.html";
            } else {
                a = window.location.origin + "/search-results.html";
            }
        } else {
            a = window.location.origin + "/" + currentUrlLang + "/" + "search-results.html";
        }
        if (t != "") {
            window.location = a + "?query=" + encodeURIComponent(t);
        }
    });
    if ($(".footer-links-wrap .product-links").hasClass("four-column")) {
        $(".footer-sec-wrap.two-column").addClass("fourColList");
    }
    if ($("#ref_value").length < 1) {
        if ($(".signup-box form").length > 0) {
            var c = customvar.czmr();
            var u = _lhref;
            if (customvar.czmr().indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                c = customvar.czmr().split(".html")[0] + ".html";
            }
            if (u.indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                u = customvar.absurl;
            }
            u = u.length > 300 ? u.substring(0, 300) : u;
            $(".signup-box form").append(
                '<input id="ref_value" name="ref_value" type="hidden" value="' +
                    customvar.czms() +
                    "," +
                    c +
                    "," +
                    customvar.cuid() +
                    "," +
                    customvar.mydevice() +
                    "," +
                    u +
                    '">'
            );
        }
    }
    var d = $("body a");
    for (var t = 0; t < d.length; t++) {
        if (
            d.eq(t).attr("href") != "undefined" &&
            d.eq(t).attr("href") != null &&
            d.eq(t).attr("href") != "" &&
            d.eq(t).attr("data-noneedopener") != ""
        ) {
            if (typeof d.eq(t).attr("target") != "undefined") {
                if (d.eq(t).attr("target") == "_blank") {
                    d.eq(t).attr("rel", "noopener");
                    if (d.eq(t).hasClass("czone-nofollow")) {
                        d.eq(t).attr("rel", "noopener nofollow");
                    }
                }
            }
            if (d.eq(t).attr("href").indexOf("forums.zoho.com") > -1) {
                d.eq(t).attr(
                    "href",
                    d.eq(t).attr("href").split("forums.zoho.com").join("help.zoho.com/portal/en/community")
                );
            }
            if (currentUrlLang != "") {
                if (
                    d.eq(t).attr("href").indexOf("/security.html") > 0 ||
                    d.eq(t).attr("href").indexOf("/cookie-policy.html") > 0 ||
                    d.eq(t).attr("href").indexOf("/ipr-complaints.html") > 0 ||
                    d.eq(t).attr("href").indexOf("/compliance.html") > 0
                ) {
                    if (
                        currentUrlLang == "de" &&
                        (d.eq(t).attr("href").indexOf("/security.html") > 0 ||
                            d.eq(t).attr("href").indexOf("/privacy/cookie-policy.html") > 0)
                    ) {
                    } else if (
                        currentUrlLang == "pt-br" &&
                        (d.eq(t).attr("href").indexOf("/security.html") > 0 ||
                            d.eq(t).attr("href").indexOf("/privacy/cookie-policy.html") > 0 ||
                            d.eq(t).attr("href").indexOf("/compliance.html") > 0)
                    ) {
                    } else if (
                        currentUrlLang == "ar" &&
                        (d.eq(t).attr("href").indexOf("/compliance.html") > 0 ||
                            d.eq(t).attr("href").indexOf("/security.html") > 0)
                    ) {
                    } else if (currentUrlLang != "jp") {
                        d.eq(t).attr(
                            "href",
                            d
                                .eq(t)
                                .attr("href")
                                .split("/" + currentUrlLang + "/")
                                .join("/")
                        );
                        d.eq(t).attr({ target: "_blank" });
                    }
                }
            }
        }
    }
    $(".copy-right-year").html(currentYear);
    if (typeof customvar.footerloaded != "undefined") {
        customvar.footerloaded();
    }
});
$(document).on("blur", ".signup-box input", function () {
    const e = $(this).is(":visible");
    if ($(this).is(":visible") && !$(this).is("#country_code")) {
        if ($(this).parent().hasClass("field-error")) {
            $(this).attr("aria-invalid", true);
            $(this).parent().find(".field-msg > span").attr("aria-live", "polite");
        } else {
            $(this).attr("aria-invalid", false);
        }
    }
});
$(document).on("change", ".signup-box select", function () {
    const e = $(this).is(":visible");
    if ($(this).is(":visible") && !$(this).is("#country_code")) {
        if (!$(this).parent().hasClass("field-error")) {
            $(this).attr("aria-invalid", true);
            $(this).parent().find(".field-msg > span").attr("aria-live", "polite");
        } else {
            $(this).attr("aria-invalid", false);
        }
    }
});
function setValidationAttr() {
    $(".signup-box .field-error input, .signup-box .field-error select").each(function () {
        const e = $(this).is(":visible");
        if (e) {
            $(this).attr("aria-invalid", true);
        }
    });
    $(".signup-box .field-error").each(function () {
        const e = $(this).find("input:visible");
        const t = $(this).find("select:visible");
        if (e.length || t.length) {
            const a = e.attr("id") || t.attr("id");
            const o = $(this).find(".field-msg > span:visible").attr("id");
            if (o == `${a}-error`) {
                e.length && e.attr("aria-describedby", o);
                t.length && t.attr("aria-describedby", o);
            }
        }
    });
    $(".signup-box .field-error .field-msg > span").each(function () {
        const e = $(this).is(":visible");
        if (e) {
            $(this).attr("aria-live", "polite");
        }
    });
}
function zSignupPrevent() {
    setTimeout(() => {
        setValidationAttr();
    }, 100);
    var e = document.getElementsByClassName("disabled-z-signup").length;
    if (0 < e) {
        return false;
    }
}
jQuery(document).on("click", ".hide-links-btn", function () {
    jQuery(".quick-connect-links").animate({ left: 225 }, "1000");
    $(".quick-connect-links").attr("data-modal-open", "false").attr("inert", "true");
    $(".show-links-btn").attr("aria-expanded", "false");
    $(".show-links-btn").attr("tabindex", "0");
    $('.quick-connect-links [tabindex="0"]').each(function () {
        $(this).attr("tabindex", "-1");
    });
    jQuery(".quick-connect-links-wrap .show-links-btn").show();
    jQuery(".quick-connect-links-wrap .show-links-btn").animate({ right: 0 }, "1500");
});
jQuery(document).on("click", ".show-links-btn", function () {
    jQuery(".quick-connect-links").show();
    const e = document.querySelector(".zw-promo-bottom .quick-connect-links-wrap .quick-connect-links");
    zwc_modalFocusControl(e);
    $(".quick-connect-links").attr("data-modal-open", "true").removeAttr("inert");
    $(this).attr("aria-expanded", "true");
    $(this).attr("tabindex", "-1");
    $('.quick-connect-links [tabindex="-1"]').each(function () {
        $(this).attr("tabindex", "0");
    });
    jQuery(".quick-connect-links").animate({ left: 0 }, "1000");
    jQuery(".quick-connect-links-wrap .show-links-btn").show("slow");
    jQuery(".quick-connect-links-wrap .show-links-btn").animate({ right: -45 }, "1200");
});
jQuery(window).on("load", function () {
    jQuery(".quick-connect-links-wrap .show-links-btn").show();
});
$(window).on("load", function () {});
function langStrip() {
    if (
        window.location.host == "www.zoho.com" ||
        window.location.host == "pre" + "www.zoho.com" ||
        window.location.host == _preZ
    ) {
        if (window.location.href.indexOf("zredirect=f") > 0) {
            customvar.lsoinfo("latinNavigate", "1");
        }
        if (
            currentUrlLang == "es-xl" ||
            (currentUrlLang == "fr" && CountryCode == "FR") ||
            (currentUrlLang == "nl" && CountryCode == "NL") ||
            ((CountryCode == "SA" || CountryCode == "EG") && currentUrlLang == "ar") ||
            (currentUrlLang == "pt-br" && CountryCode == "BR") ||
            (currentUrlLang == "id" && CountryCode == "ID") ||
            (currentUrlLang == "de" && CountryCode == "DE")
        ) {
            if (
                customvar.lAmerica.indexOf(CountryCode) > -1 ||
                (currentUrlLang == "nl" && CountryCode == "NL") ||
                (currentUrlLang == "pt-br" && CountryCode == "BR") ||
                (currentUrlLang == "fr" && CountryCode == "FR") ||
                ((CountryCode == "SA" || CountryCode == "EG") && currentUrlLang == "ar") ||
                (currentUrlLang == "id" && CountryCode == "ID") ||
                (currentUrlLang == "de" && CountryCode == "DE")
            ) {
                if (customvar.lsoinfo("latinNavigate") == "") {
                    var t = window.location.href.split("/" + currentUrlLang + "/").join("/");
                    $(".ztopstrip-container").css("display", "block");
                    $(".ztopstrip-container").append(
                        '<div class="lbanner" style="display:block"> <span class="langTxt">' +
                            "Hello! Do you want to navigate in" +
                            " <span>English</span>" +
                            "?" +
                            '</span><button class="langClose">X</button> </div>'
                    );
                    localredirectionval = "1";
                    $(".lbanner .langTxt").on("click", function () {
                        var e = "?";
                        if (t.indexOf("?") > -1) {
                            e = "&";
                        }
                        customvar.lsoinfo("latinNavigate", "1");
                        if (t.indexOf("#") > 0) {
                            t = t.split("#")[0];
                        }
                        window.location = t + e + "zredirect=f&lb=" + currentUrlLang + "&zsrc=bheader";
                    });
                    $(".lbanner .langClose").on("click", function () {
                        try {
                            $zoho.salesiq.visitor.customaction(
                                '{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}'
                            );
                        } catch (e) {}
                        $(".lbanner").remove();
                        customvar.lsoinfo("latinNavigate", "1");
                    });
                }
            }
        }
    }
    var a = CountryCode.toLowerCase();
    CountryCode.toLowerCase() == "br" || CountryCode.toLowerCase() == "pt" ? (a = "pt-br") : "";
    CountryCode.toLowerCase() == "vn" ? (a = "vi") : "";
    CountryCode.toLowerCase() == "sa" ? (a = "ar") : "";
    CountryCode.toLowerCase() == "ja" ? (a = "jp") : "";
    var e = ["ES", "AR", "BO", "CL", "CO", "EC", "GF", "PY", "PE", "SR", "UY", "VE", "MX"];
    e.indexOf(CountryCode) > -1 ? (a = "es-xl") : "";
    if (customvar.lAmerica.indexOf(CountryCode) < 0) {
        if (CountryCode != "FR" && CountryCode != "BR") {
            if (CountryCode != "EG" || currentUrlLang != "ar") {
                if (CountryCode != "SA" || currentUrlLang != "ar") {
                    if (CountryCode != "NL" || currentUrlLang != "nl") {
                        if (CountryCode != "ID" && currentUrlLang != "id") {
                            if (CountryCode != "DE" && currentUrlLang != "de") {
                                var o = false;
                                if (typeof localRedirectionlist[currentUrlLang] != "undefined") {
                                    if (localRedirectionlist[currentUrlLang].split(",").indexOf(CountryCode) > -1) {
                                        o = true;
                                    }
                                }
                                if (detectedLangNew != "" && !o) {
                                    if (detectedLangNew == "") {
                                        detectedLangNew = document
                                            .getElementsByTagName("body")[0]
                                            .getAttribute("data-lang-list")
                                            .split(",");
                                    }
                                    var n = [];
                                    for (var i = 0; i < detectedLangNew.length; i++) {
                                        if (langArr.indexOf(detectedLangNew[i]) > -1) {
                                            var r = langArr[langArr.indexOf(detectedLangNew[i])];
                                            if (r != "en" && r != "jp") {
                                                n.push(langArr[langArr.indexOf(detectedLangNew[i])]);
                                            }
                                        }
                                    }
                                    var s = localStorage.getItem("zloaded") == "1";
                                    try {
                                    } catch (e) {
                                        s = true;
                                    }
                                    if (
                                        (n.indexOf(a) > -1 || a == "ae" || a == "sa") &&
                                        window.location.pathname.split("/")[1] != a &&
                                        !s
                                    ) {
                                        if (a != "ar" && typeof bannertext[a] != "undefined") {
                                            if (window.location.pathname.indexOf("/in/") < 0) {
                                                if (a == "de") {
                                                    $(".ztopstrip-container").append(
                                                        '<div class="langstrip"><span class="langTxt">' +
                                                            bannertext[a].split(" ::: ")[1] +
                                                            '!</span><button class="langBtn">' +
                                                            bannertext[a].split(" ::: ")[0] +
                                                            '</button><span class="langClose">X</span></div>'
                                                    );
                                                } else {
                                                    $(".ztopstrip-container").append(
                                                        '<div class="langstrip"><span class="langTxt">' +
                                                            bannertext[a].split(" ::: ")[1] +
                                                            " " +
                                                            lancountry[a] +
                                                            '!</span><button class="langBtn">' +
                                                            bannertext[a].split(" ::: ")[0] +
                                                            '</button><button class="langClose">X</button></div>'
                                                    );
                                                }
                                                $(".langstrip").css("display", "block");
                                                $(".ztopstrip-container").css("display", "block");
                                                $(".langstrip .langClose").on("click", function () {
                                                    try {
                                                        $zoho.salesiq.visitor.customaction(
                                                            '{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}'
                                                        );
                                                    } catch (e) {}
                                                    try {
                                                        localStorage.setItem("zloaded", "1");
                                                    } catch (e) {}
                                                    $(".langstrip").remove();
                                                });
                                                $(".langstrip .langBtn").on("click", function () {
                                                    var e = window.location.href;
                                                    if (a == "ae" || a == "sa") {
                                                        a = "ar";
                                                    }
                                                    if (currentUrlLang == "") {
                                                        e = e
                                                            .split(window.location.host)
                                                            .join(window.location.host + "/" + a);
                                                    } else {
                                                        e = e.split("/" + currentUrlLang + "/").join("/" + a + "/");
                                                    }
                                                    if (localUrlLang) {
                                                        e = e.split("/" + localUrlLang).join("");
                                                    }
                                                    var t = "?";
                                                    if (e.indexOf("?") > -1) {
                                                        t = "&";
                                                    }
                                                    window.location = encodeURI(e + t + "lb=" + a);
                                                    try {
                                                        localStorage.setItem("zloaded", "1");
                                                    } catch (e) {}
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function newLangStrip() {
    const e = ["startups"];
    if (e.includes(customvar.productName)) {
        return false;
    }
    let t = false;
    for (redirectcode in localRedirectionlist) {
        if (localRedirectionlist[redirectcode].includes(CountryCode)) {
            t = true;
            break;
        }
    }
    if (t) {
        if (
            window.location.host == "www.zoho.com" ||
            window.location.host == "pre" + "www.zoho.com" ||
            window.location.host == _preZ
        ) {
            if (window.location.href.indexOf("zredirect=f") > 0) {
                customvar.lsoinfo("latinNavigate", "1");
            }
            let e = customvar.lsoinfo("latinNavigate");
            if (e !== "") return;
            let t = document.querySelector(".ztopstrip-container");
            let a = document.createElement("div");
            a.setAttribute("class", "lbanner");
            a.setAttribute("style", "display:block");
            let o = document.createElement("span");
            o.setAttribute("class", "langTxt");
            o.textContent = "Hello! Do you want to navigate in English?";
            let n = document.createElement("button");
            n.setAttribute("class", "langClose");
            n.textContent = "X";
            a.appendChild(o);
            a.appendChild(n);
            t.appendChild(a);
            t.style.display = "block";
            let i = window.location.href;
            i = i.replace("/" + currentUrlLang + "/", "/");
            o.addEventListener("click", function () {
                customvar.lsoinfo("latinNavigate", "1");
                let e = i.includes("?") ? "&" : "?";
                if (i.includes("#")) {
                    i = i.substring(0, i.indexOf("#"));
                }
                window.location.href = encodeURI(i + e + "zredirect=f&lb=" + currentUrlLang + "&zsrc=bheader");
            });
            n.addEventListener("click", function () {
                try {
                    $zoho.salesiq.visitor.customaction(
                        '{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}'
                    );
                } catch (e) {}
                a.remove();
                customvar.lsoinfo("latinNavigate", "1");
            });
        }
    } else {
        if (Array.isArray(detectedLangNew)) {
            let a = CountryCode.toLowerCase();
            if (a == "ae" || a == "sa") {
                return false;
            }
            if (a === "br" || a === "pt") {
                a = "pt-br";
            } else if (a === "vn") {
                a = "vi";
            } else if (a === "ja") {
                a = "jp";
            }
            const o = detectedLangNew.filter(function (e) {
                return langArr.includes(e) && e !== "en" && e !== "jp";
            });
            let t = false;
            try {
                t = customvar.lsoinfo("zloaded") == "1";
            } catch (e) {
                t = true;
            }
            if (t || window.location.pathname.includes("/in/")) {
                return false;
            }
            if (currentUrlLang !== a && o.includes(a)) {
                if (bannertext[a]) {
                    const n = document.createElement("div");
                    n.setAttribute("class", "langstrip");
                    const i = document.createElement("span");
                    i.setAttribute("class", "langTxt");
                    i.textContent = bannertext[a].split(" ::: ")[1];
                    const r = document.createElement("button");
                    r.setAttribute("class", "langBtn");
                    r.textContent = bannertext[a].split(" ::: ")[0];
                    const s = document.createElement("span");
                    s.setAttribute("class", "langClose");
                    s.textContent = "X";
                    n.appendChild(i);
                    n.appendChild(r);
                    n.appendChild(s);
                    if (a === "de") {
                        i.textContent += "!";
                    } else {
                        i.textContent += " " + lancountry[a] + "!";
                    }
                    const l = document.querySelector(".ztopstrip-container");
                    l.appendChild(n);
                    n.style.display = "block";
                    l.style.display = "block";
                    s.addEventListener("click", function () {
                        try {
                            $zoho.salesiq.visitor.customaction(
                                '{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}'
                            );
                        } catch (e) {}
                        try {
                            customvar.lsoinfo("zloaded", "1");
                        } catch (e) {}
                        n.remove();
                    });
                    r.addEventListener("click", function () {
                        let e = window.location.href;
                        if (currentUrlLang === "") {
                            e = e.replace(window.location.host, window.location.host + "/" + a);
                        } else {
                            e = e.replace("/" + currentUrlLang + "/", "/" + a + "/");
                        }
                        if (localUrlLang) {
                            e = e.replace("/" + localUrlLang, "");
                        }
                        let t = e.includes("?") ? "&" : "?";
                        window.location.href = encodeURI(e + t + "zredirect=f&lb=" + a);
                        try {
                            customvar.lsoinfo("zloaded", "1");
                        } catch (e) {}
                    });
                }
            }
        }
    }
}
function coockieStrip() {
    if (
        (global_getUrlParam("ismobilesignup") == "" || productName != "campaigns") &&
        (global_getUrlParam("ismobilesignup") == "" || _lhref.indexOf("privacy.html") < 0)
    ) {
        if ($(".cookiestrip").length < 1) {
            var e = localStorage.getItem("coockiechecked") == "1";
            if (!e) {
                if (currentUrlLang == "") {
                    var t = Drupal.t("We use cookies to help us understand and serve you better.");
                    var a =
                        window.location.host == "catalyst.zoho.eu"
                            ? "https://www.zoho." + domainOne + "/privacy/cookie-policy.html"
                            : langsrc + "privacy/cookie-policy.html";
                    $("body").prepend(
                        '<div class="cookiestrip"><div><span class="cookieTxt">' +
                            t +
                            '</span><a class="cookieManage" href="' +
                            a +
                            '" target="_blank">' +
                            Drupal.t("View & Manage Cookies") +
                            '</a><span class="cookieClose">' +
                            Drupal.t("I Understand") +
                            "</span></div></div>"
                    );
                } else {
                    var t =
                        Drupal.t("We use cookies to help us understand and serve you better. Take a look at our ") +
                        '<a href="https://www.zoho.' +
                        domainOne +
                        langsrc +
                        'privacy/cookie-policy.html" target="_blank">' +
                        Drupal.t("Cookie Policy") +
                        ".</a>";
                    $("body").prepend(
                        '<div class="cookiestrip"><div><span class="cookieTxt">' +
                            t +
                            '</span><a class="cookieManage" href="' +
                            langsrc +
                            'privacy/cookie-policy.html?src=manage" target="_blank">' +
                            Drupal.t("Manage") +
                            '</a><span class="cookieClose">' +
                            Drupal.t("OK") +
                            "</span></div></div>"
                    );
                }
                $("body").addClass("zcstrip");
                $(".cookieClose").on("click", function () {
                    try {
                        localStorage.setItem("coockiechecked", "1");
                    } catch (e) {}
                    $("body").removeClass("zcstrip");
                    $(".cookiestrip").remove();
                });
            }
        }
    }
}
function testimonialHeight() {
    var e, t;
    e = 0;
    $(".z-testimonial-head").removeAttr("style");
    $(".z-testimonial-head")
        .find("h4")
        .each(function () {
            t = $(this).innerHeight();
            if (t > e) {
                e = t;
            }
        });
    $(".z-testimonial-head").height(e);
    $(".z-testimonial-head").find("h4").removeAttr("style");
    $(".z-testimonial-head").removeClass("active");
    $(".z-testimonial-head")
        .find("h4")
        .each(function () {
            $(this).height($(this).innerHeight());
        });
    $(".z-testimonial-head").addClass("active");
}
if ($(".z-testimonial-item").length > 1) {
    testimonialHeight();
}
$(document).ready(function (Z) {
    $(".signup-testimonial-wrap").attr("aria-hidden", "true");
    $(".header .logo, .header-part .logo").attr("href", langsrc);
    if (
        productName == "zohoorchestly" ||
        productName == "bigin" ||
        customvar.outproduct.indexOf(customvar.productName) > -1 ||
        window.location.host == "catalyst.zoho.eu"
    ) {
        $(".header .logo, .header-part .logo").attr("href", "https://www.zoho." + domainOne + langsrc);
    }
    customvar.privacypolicylink();
    if (langArr.indexOf(currentUrlLang) > -1 && global_getUrlParam("pages-list") == "") {
        var e = $("body a");
        var T = [
            "mail",
            "workplace",
            "calendar",
            "zeptomail",
            "teaminbox",
            "mail360",
            "toolkit",
            "tasks",
            "zillum",
            "eprotect",
            "recruit",
        ];
        for (var t = 0; t < e.length; t++) {
            if (
                e.eq(t).attr("href") != "undefined" &&
                e.eq(t).attr("href") != null &&
                e.eq(t).attr("href") != "" &&
                !e.eq(t).attr("href").includes("/terms.html") &&
                !e.eq(t).attr("href").includes("/privacy.html") &&
                !e.eq(t).hasClass("czone-signup-term") &&
                !e.eq(t).hasClass("zrlink") &&
                !e.eq(t).parent().hasClass("footer-privacy") &&
                !e.eq(t).parent().hasClass("footer-terms")
            ) {
                var a = e.eq(t).attr("href").split("/").indexOf("help") < 0,
                    o = e.eq(t).attr("href").split("/").indexOf("newhelp") < 0,
                    n = e.eq(t).attr("href").indexOf("/userguide/") < 0,
                    i = e.eq(t).attr("href").indexOf("/resources/") < 0,
                    r = e.eq(t).attr("href").indexOf("/resources.html") < 0,
                    s = e.eq(t).attr("href").indexOf("blog") < 0,
                    l =
                        "https://www.zoho." + domainOne + "/assist/lp/demo-registration.html?src=pricing-faq" !=
                        window.location.href,
                    c = e.eq(t).attr("href").indexOf(".pdf") < 0,
                    u = e.eq(t).attr("href").indexOf(".exe") < 0,
                    d = e.eq(t).attr("href").indexOf("/get-support-plugin.html") < 0,
                    m = e.eq(t).attr("href").indexOf("/demo-registration.html") < 0,
                    p = e.eq(t).attr("href").indexOf("/extension/zoho-assist.xpi") < 0,
                    h = e.eq(t).attr("href").indexOf("/books/") < 0,
                    f = e.eq(t).attr("href").indexOf("/expense/") < 0,
                    g = e.eq(t).attr("href").indexOf("/invoice/") < 0,
                    v = e.eq(t).attr("href").indexOf("/subscriptions/") < 0,
                    b = e.eq(t).attr("href").indexOf("/inventory/") < 0,
                    y = e.eq(t).attr("href").indexOf("/checkout/") < 0,
                    w = e.eq(t).attr("href").indexOf("/gst/") < 0,
                    z = e.eq(t).attr("href").indexOf("recruit/referrals.html") < 0,
                    C = e.eq(t).attr("href").indexOf(".deb") < 0,
                    k =
                        e
                            .eq(t)
                            .attr("href")
                            .indexOf("https://www.zoho." + domainOne + "/campaigns/contact-us.html") < 0,
                    x =
                        e
                            .eq(t)
                            .attr("href")
                            .indexOf("https://www.zoho." + domainOne + "/survey/education-discount.html") < 0,
                    O =
                        e
                            .eq(t)
                            .attr("href")
                            .indexOf("https://www.zoho." + domainOne + "/developer/signup.html") < 0,
                    _ = e.eq(t).attr("href").indexOf("reports/onpremise/eula.html") < 0,
                    S = e.eq(t).attr("href").indexOf("reports/onpremise/get-quote.html") < 0,
                    N = e.eq(t).attr("href").indexOf("cliq/developers/terms.html") < 0,
                    L = e.eq(t).attr("href").indexOf("/developer/") < 0,
                    j = e.eq(t).attr("href").indexOf("/creator/request-quote.html") < 0,
                    D = e.eq(t).attr("href").indexOf("/sprints/contact.html") < 0,
                    P = e.eq(t).attr("href").indexOf("/backstage/contact.html") < 0,
                    q =
                        e
                            .eq(t)
                            .attr("href")
                            .indexOf("https://www.zoho." + domainOne + "/teamdrive/contact.html") < 0,
                    M =
                        e
                            .eq(t)
                            .attr("href")
                            .indexOf("https://www.zoho." + domainOne + "/workdrive/contact.html") < 0,
                    I = e.eq(t).attr("href").indexOf("webinars.html") < 0,
                    R = e.eq(t).attr("href").indexOf("analytics/onpremise/get-quote.html") < 0,
                    B = e.eq(t).attr("href").indexOf("/workdrive/contact.html") < 0,
                    A = !0;
                "com.cn" == domainOne && (A = !1),
                    "crm" != productName ||
                        ("fr" != currentUrlLang &&
                            "de" != currentUrlLang &&
                            "pt-br" != currentUrlLang &&
                            "es-xl" != currentUrlLang) ||
                        ((a = !0), (i = !0), (L = !0));
                var W = e.eq(t).attr("href").indexOf(".zip") < 0,
                    F = e.eq(t).attr("href").indexOf("become-a-partner") < 0,
                    G = e.eq(t).attr("href").indexOf("creator/developers/find-a-developer.html") < 0,
                    Q = e.eq(t).attr("href").indexOf("campaigns/email-marketing-demo.html") < 0,
                    V = e.eq(t).attr("href").indexOf("marketingautomation/marketing-automation-demo.html") < 0,
                    H = e.eq(t).attr("href").indexOf("sign/legal-guide.html") < 0,
                    K = e.eq(t).attr("href").indexOf("marketingautomation/request-quote.html") < 0,
                    Y = e.eq(t).attr("href").indexOf(".rpm") < 0,
                    J = e.eq(t).attr("href").indexOf("schedule-your-instagram-posts-on-zoho-social.html") < 0,
                    X = e.eq(t).attr("href").indexOf("people/request-quote.html") < 0,
                    ee = e.eq(t).attr("href").indexOf("forms/integrations/zoho-campaigns.html") < 0,
                    te = !e.eq(t).hasClass("nonlang"),
                    ae = !e.eq(t).hasClass("nonlang-ld");
                $(".nonlang").each(function () {
                    $(this).attr({ target: "_blank" });
                });
                var E = true;
                if (typeof $("body").attr("site") != "undefined") {
                    if ($("body").attr("site") == "zblogs") {
                        E = false;
                    }
                }
                if (
                    a &&
                    o &&
                    n &&
                    i &&
                    r &&
                    s &&
                    l &&
                    c &&
                    u &&
                    d &&
                    m &&
                    p &&
                    h &&
                    f &&
                    g &&
                    v &&
                    b &&
                    y &&
                    w &&
                    z &&
                    C &&
                    k &&
                    x &&
                    O &&
                    _ &&
                    S &&
                    N &&
                    L &&
                    j &&
                    D &&
                    P &&
                    q &&
                    I &&
                    R &&
                    B &&
                    M &&
                    A &&
                    W &&
                    F &&
                    G &&
                    Q &&
                    V &&
                    H &&
                    K &&
                    Y &&
                    J &&
                    X &&
                    te &&
                    ee &&
                    E &&
                    ae
                ) {
                    if (e.eq(t).attr("href").split("/")[1] == productName) {
                        if (!e.eq(t).attr("href").includes("terms.html")) {
                            var U = encodeURI("/" + currentUrlLang + e.eq(t).attr("href"));
                            e.eq(t).attr("href", U);
                        }
                    } else if (e.eq(t).attr("href").split("/")[2] == "www.zoho.com") {
                        if (allProductlowerCase.indexOf(e.eq(t).attr("href").split("/")[3]) > -1) {
                            var U = encodeURI(
                                "https://www.zoho." +
                                    domainOne +
                                    "/" +
                                    currentUrlLang +
                                    e
                                        .eq(t)
                                        .attr("href")
                                        .split("www.zoho." + domainOne)[1]
                            );
                            e.eq(t).attr("href", U);
                        }
                    } else if (e.eq(t).attr("href").split("/")[2] == "www.zoho.com") {
                        if (allProductlowerCase.indexOf(e.eq(t).attr("href").split("/")[3]) > -1) {
                            var U = encodeURI(
                                "https://www.zoho." +
                                    domainOne +
                                    "/" +
                                    currentUrlLang +
                                    e
                                        .eq(t)
                                        .attr("href")
                                        .split("www.zoho." + domainOne)[1]
                            );
                            e.eq(t).attr("href", U);
                        }
                    } else if (
                        window.location.pathname == "/gdpr.html" ||
                        window.location.pathname == "/privacy.html" ||
                        window.location.pathname == "/terms.html" ||
                        window.location.pathname == "/policy.html" ||
                        window.location.pathname == "/ipr-complaints.html" ||
                        window.location.pathname == "/security.html"
                    ) {
                        var U = encodeURI(
                            "https://www.zoho." +
                                domainOne +
                                "/" +
                                currentUrlLang +
                                e
                                    .eq(t)
                                    .attr("href")
                                    .split("www.zoho." + domainOne)[1]
                        );
                        e.eq(t).attr("href", U);
                    } else if (e.eq(t).attr("href") == "/security.html") {
                        var U = encodeURI("/" + currentUrlLang + e.eq(t).attr("href"));
                        e.eq(t).attr("href", U);
                    } else if (currentUrlLang == "ar" && e.eq(t).attr("href") == "/compliance.html") {
                        var U = encodeURI("/" + currentUrlLang + e.eq(t).attr("href"));
                        e.eq(t).attr("href", U);
                    }
                }
                if (e.eq(t).attr("href").indexOf("help/") > -1 || e.eq(t).attr("href").indexOf("blog") > -1) {
                    if (currentUrlLang != "jp") {
                        e.eq(t).attr("target", "_blank");
                    }
                    if (
                        e
                            .eq(t)
                            .attr("href")
                            .split("/" + currentUrlLang + "/") > -1
                    ) {
                        var U = encodeURI(
                            e
                                .eq(t)
                                .attr("href")
                                .split.split("/" + currentUrlLang + "/")
                                .join("/")
                        );
                        e.eq(t).attr("href", U);
                    }
                }
            }
        }
    }
});
var intervalCount = 0;
function CheckelEment() {
    var t = setTimeout(function () {
        if ($(".zgdprform-countrylist-container").length > 0) {
            var e = document.createElement("script");
            e.type = "text/javascript";
            if (window.location.host == _preZ) {
                e.src = "https://" + _preZ + "/sites/zweb/js/common/gdprcompliance.js";
            } else {
                e.src = "https://www.zohowebstatic.com/sites/zweb/js/common/gdprcompliance.js";
            }
            document.getElementsByTagName("head")[0].appendChild(e);
            clearInterval(t);
        } else {
            intervalCount++;
            if (intervalCount < 50) {
                CheckelEment();
            }
        }
    }, 500);
}
var intervalSignupCount = 0;
$(document).on("focus", ".globalcountrycode-signup", function () {
    $(".za-country-container").addClass("added-placeholder");
});
$(document).on("blur", ".globalcountrycode-signup", function () {
    $(".za-country-container").removeClass("added-placeholder");
});
function CheckelEmentSignup() {
    var t = setTimeout(function () {
        if ($(".signup-box form").length > 0) {
            if ($(".za-captcha-container").length > 0) {
                if ($(".za-country-container").length < 1) {
                    $(".za-captcha-container").after(
                        '<div class="za-country-container za-country-container-arrow"> <select class="form-input countryCnt za-country-select globalcountrycode-signup" name="country" id="country" placeholder="Select Country" aria-invalid="false"></select> </div>'
                    );
                }
                if ($(".za-newsletter-container").length > 0) {
                    $(".za-newsletter-container").html(
                        '<label for="newsletter" class="news-signup sign_agree"> <input aria-label="' +
                            customvar.receiveMarketingText +
                            '" tabindex="1" class="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onclick="toggleNewsletterField()"> <span class="icon-medium" aria-hidden="true" id="signup-newsletter"></span> <span>' +
                            _txtIwould +
                            "</span> </label>"
                    );
                    $(".za-newsletter-container").css("display", "none");
                    if (window.location.href.indexOf("mdm-cloud.html") > 0 && window.location.host == _preZ) {
                        $(".za-newsletter-container").addClass("zshow");
                        $(".icon-medium").addClass("checked");
                        $("#signupform [name='newsletter']").attr("checked", "true");
                    }
                }
            }
            if ($(".za-country-container").length > 0) {
                if ($(".za-country-container .placeholder").length < 1) {
                    $(".za-country-container").prepend(
                        '<span class="placeholder" aria-hidden="true">' + Drupal.t("Country/Region") + "</span>"
                    );
                }
            }
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.src = "https://www.zohowebstatic.com/sites/zweb/js/common/gdpr-compliance-signup.js";
            if (window.location.host == _preZ) {
                e.src = "https://" + _preZ + "/sites/zweb/js/common/gdpr-compliance-signup.js";
            }
            document.getElementsByTagName("head")[0].appendChild(e);
            clearInterval(t);
        } else {
            intervalSignupCount++;
            if (intervalSignupCount < 500) {
                CheckelEmentSignup();
            }
        }
    }, 1);
}
$(document).ready(function () {
    if (typeof CheckelEment == "function") {
        CheckelEment();
    }
    if (customvar.mynewsignup.indexOf(customvar.productName) < 0) {
        if (typeof CheckelEmentSignup == "function") {
            if (currentUrlLang != "jp") {
                if (customvar.productName == "crm" || customvar.productName == "desk") {
                    CheckelEmentSignup();
                }
            }
        }
    }
});
$(document).on("click", ".umain .cta-btn.logged-in, .userinfo-details .userinfo-access", function (e) {
    if ($(this).attr("href").indexOf("_ga")) {
        e.preventDefault();
        window.location = $(this).attr("href").split("?_ga")[0];
    }
});
(function () {
    if (
        navigator.appName == "Microsoft Internet Explorer" ||
        !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) ||
        (typeof $.browser !== "undefined" && $.browser.msie == 1)
    ) {
        $("body").addClass("IE");
    }
})();
const vimeoPopup = (function () {
    "use strict";
    class e {
        constructor() {
            this.element = null;
            this.popupWrap = null;
            this.closeButton = null;
            this.iframeWrap = null;
            this.videoUrl = null;
            this.keyCloseFn = null;
        }
        play(e) {
            document.body.classList.add("vimactive");
            if (e.getAttribute("data-video").includes("https://player.vimeo.com/video/")) {
                customvar.checkVimeoToWorkdrive(e);
            }
            this.element = e;
            this.createWrap();
            this.appendVideoIframe();
            this.iframe.focus({ preventScroll: true });
            this.keyCloseFn = this.keyClose.bind(this);
            document.addEventListener("keydown", this.keyCloseFn);
        }
        createWrap() {
            this.popupWrap = document.createElement("div");
            this.popupWrap.className = "zg-vim-video-popup-wrap";
            this.popupWrap.setAttribute("role", "dialog");
            const e = document.createElement("div");
            e.className = "zg-vim-video-popup-inner";
            const t = document.createElement("div");
            t.className = "zg-vim-video-container";
            this.iframeWrap = document.createElement("div");
            this.iframeWrap.className = "zg-vim-video-iframe-wrap";
            this.iframeWrap.setAttribute("tabindex", "0");
            t.appendChild(this.iframeWrap);
            e.appendChild(t);
            this.closeButton = document.createElement("button");
            this.closeButton.className = "zg-vim-video-popup-close";
            this.closeButton.setAttribute("aria-label", "Close");
            this.closeButton.addEventListener("click", this.close.bind(this));
            if (window.innerWidth > 767) {
                this.popupWrap.addEventListener("click", this.close.bind(this));
            }
            e.appendChild(this.closeButton);
            this.popupWrap.appendChild(e);
            document.body.insertBefore(this.popupWrap, document.body.firstChild);
        }
        appendVideoIframe() {
            const e = this.element.getAttribute("data-video");
            let t = "";
            if (e.includes("workdrive.zohoexternal.com") || e.includes(customvar.IfStatementDomainForVideo)) {
                t += e.includes("?") ? "&" : "?";
                if (e.includes(customvar.IfStatementDomainForVideo)) {
                    t += !e.includes("autoplay=true") ? "autoplay=true&muted=true&" : "";
                } else {
                    t += !e.includes("autoplay=true") ? "autoplay=true&muted=false&" : "";
                }
            } else {
                t += e.includes("?") ? "&" : "?";
                t += !e.includes("autopause=1") ? "autopause=1&" : "";
                t += !e.includes("dnt=1") ? "dnt=1&" : "";
                t += !e.includes("autoplay=1") ? "autoplay=1&" : "";
                t += !e.includes("pip=0") ? "pip=0&" : "";
                t += !e.includes("title=false") ? "title=false" : "";
            }
            if (e.includes("workdrive.zohoexternal.com/embed")) {
                if (!e.includes("toolbar=")) {
                    t += "toolbar=false&";
                }
            }
            this.videoUrl = e + t;
            this.iframe = document.createElement("iframe");
            this.iframe.className = "zg-vim-video-iframe";
            this.iframe.width = "3840";
            this.iframe.height = "2160";
            this.iframe.allow = "autoplay; fullscreen";
            this.iframe.allowFullscreen = true;
            const a = this.element.getAttribute("data-title");
            const o = this.element.getAttribute("data-allowfullscreen");
            if (a) {
                this.iframe.title = this.element.getAttribute("data-title");
            }
            if (
                this.videoUrl.includes("workdrive.zohoexternal.com") ||
                this.videoUrl.includes(customvar.IfStatementDomainForVideo)
            ) {
                if (o) {
                    this.iframe.allowfullscreen = o;
                } else {
                    this.iframe.allowfullscreen = "true";
                }
            }
            this.iframe.src = this.videoUrl;
            this.iframe.setAttribute("data-ready", "true");
            this.iframe.addEventListener("load", () => {
                this.iframeWrap.classList.add("zg-vim-video-loaded");
            });
            this.iframeWrap.appendChild(this.iframe);
        }
        keyClose(t) {
            if (t.key === "Tab" || t.keyCode === 9) {
                let e = this.popupWrap.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
                const a = e[0];
                const o = e[e.length - 1];
                if (t.shiftKey) {
                    if (document.activeElement === a) {
                        t.preventDefault();
                        o.focus({ preventScroll: true });
                    }
                } else {
                    if (document.activeElement === o) {
                        t.preventDefault();
                        a.focus({ focusVisible: true });
                    }
                }
            }
            if (t.keyCode === 27) {
                this.close(t);
            }
        }
        close(e) {
            e.stopPropagation();
            document.body.classList.remove("vimactive");
            document.removeEventListener("keydown", this.keyCloseFn);
            this.element.setAttribute("aria-expanded", "false");
            this.popupWrap.remove();
            this.element.focus({ focusVisible: true });
            this.element = null;
            this.popupWrap = null;
            this.closeButton = null;
            this.iframeWrap = null;
            this.videoUrl = null;
            this.keyCloseFn = null;
        }
    }
    return new e();
})();
document.addEventListener("click", function (e) {
    const t = e.target.closest(".vimvideo");
    if (t) {
        t.setAttribute("aria-expanded", "true");
        vimeoPopup.play(t);
    }
});
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        const t = e.target.closest(".vimvideo");
        if (t) {
            t.setAttribute("aria-expanded", "true");
            vimeoPopup.play(t);
        }
    }
});
const iframePopup = (function () {
    "use strict";
    class e {
        constructor() {
            this.element = null;
            this.popupWrap = null;
            this.closeButton = null;
            this.iframeWrap = null;
            this.videoUrl = null;
            this.keyCloseFn = null;
        }
        play(e) {
            document.body.classList.add("zclock");
            this.element = e;
            this.createWrap();
            this.appendVideoIframe();
            this.iframe.focus({ preventScroll: true });
            this.keyCloseFn = this.keyClose.bind(this);
            document.addEventListener("keydown", this.keyCloseFn);
        }
        createWrap() {
            this.popupWrap = document.createElement("div");
            this.popupWrap.className = "zg-iframe-popup-wrap";
            this.popupWrap.setAttribute("role", "dialog");
            const e = document.createElement("div");
            e.className = "zg-iframe-popup-inner";
            const t = document.createElement("div");
            t.className = "zg-iframe-container";
            this.iframeWrap = document.createElement("div");
            this.iframeWrap.className = "zg-iframe-wrap";
            this.iframeWrap.setAttribute("tabindex", "0");
            t.appendChild(this.iframeWrap);
            e.appendChild(t);
            this.closeButton = document.createElement("button");
            this.closeButton.className = "zg-iframe-popup-close";
            this.closeButton.setAttribute("aria-label", "Close");
            this.closeButton.addEventListener("click", this.close.bind(this));
            this.popupWrap.addEventListener("click", this.close.bind(this));
            e.appendChild(this.closeButton);
            this.popupWrap.appendChild(e);
            document.body.insertBefore(this.popupWrap, document.body.firstChild);
        }
        appendVideoIframe() {
            this.videoUrl = this.element.getAttribute("data-video");
            this.iframe = document.createElement("iframe");
            this.iframe.className = "zg-iframe";
            this.iframe.src = this.videoUrl;
            this.iframe.addEventListener("load", () => {
                this.iframeWrap.classList.add("zg-iframe-loaded");
            });
            this.iframeWrap.appendChild(this.iframe);
        }
        keyClose(t) {
            if (t.key === "Tab" || t.keyCode === 9) {
                let e = this.popupWrap.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
                const a = e[0];
                const o = e[e.length - 1];
                if (t.shiftKey) {
                    if (document.activeElement === a) {
                        t.preventDefault();
                        o.focus({ preventScroll: true });
                    }
                } else {
                    if (document.activeElement === o) {
                        t.preventDefault();
                        a.focus({ focusVisible: true });
                    }
                }
            }
            if (t.keyCode === 27) {
                this.close(t);
            }
        }
        close(e) {
            e.stopPropagation();
            document.body.classList.remove("zclock");
            document.removeEventListener("keydown", this.keyCloseFn);
            this.element.setAttribute("aria-expanded", "false");
            this.popupWrap.remove();
            this.element.focus({ focusVisible: true });
            this.element = null;
            this.popupWrap = null;
            this.closeButton = null;
            this.iframeWrap = null;
            this.videoUrl = null;
            this.keyCloseFn = null;
        }
    }
    return new e();
})();
document.addEventListener("click", function (e) {
    const t = e.target.closest(".nonvimvideo");
    if (t) {
        t.setAttribute("aria-expanded", "true");
        vimeoPopup.play(t);
    }
});
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        const t = e.target.closest(".nonvimvideo");
        if (t) {
            t.setAttribute("aria-expanded", "true");
            vimeoPopup.play(t);
        }
    }
});
if (
    !$("body").hasClass("node-type-zoho-home") &&
    !$("body").hasClass("node-type-zoho-home-3-0") &&
    !customvar.isBlogPage
) {
    var excludeitarr = ["nila", "qntrl", "vanihq"];
    if (!excludeitarr.includes(customvar.productName)) {
        var excludearr = ["crm", "crmplus"];
        if (currentUrlLang != "jp") {
            var zchf = document.createElement("script");
            if ($(".load-header").length <= 0) {
                var newzchf = document.createElement("script");
                ["prewww.zohomea.com"].includes(window.location.host);
                if ($("body").hasClass("zwc-creative-zmt-editor")) {
                    newzchf.src = "/sites/zweb/js/common/zc-headerfooter-v2.js";
                } else {
                    if (predomain) {
                        if (window.location.hostname.includes(_prewww)) {
                            newzchf.src = "/sites/zweb/js/common/zc-headerfooter-v2.js";
                        } else {
                            if (global_getUrlParam("header-test")) {
                                newzchf.src = customvar.ocmsprelink + "/sites/zweb/js/common/zc-headerfooter-test.js";
                            } else {
                                newzchf.src = customvar.ocmsprelink + "/sites/zweb/js/common/zc-headerfooter-v2.js";
                            }
                        }
                    } else {
                        if (window.location.hostname == _preZ || $("body").hasClass("zwc-creative-zmt-editor")) {
                            newzchf.src = "/sites/zweb/js/common/zc-headerfooter-v2.js";
                        } else {
                            newzchf.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zc-headerfooter-v2.js";
                        }
                    }
                }
                document.getElementsByTagName("head")[0].appendChild(newzchf);
            }
        }
    }
}
if ($(".zoholics-global-container").length > 0) {
    var zoholics_global = document.createElement("script");
    if (predomain) {
        zoholics_global.src = customvar.ocmsprelink + "/sites/zweb/js/common/zoholics-banner.js";
    } else {
        zoholics_global.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zoholics-banner.js";
    }
    document.getElementsByTagName("head")[0].appendChild(zoholics_global);
}
if ($(".zpricegroup-common").length > 0 || $(".zpricegroup-common-sl").length > 0) {
    var zcprice = document.createElement("script");
    if (predomain) {
        zcprice.src = customvar.ocmsprelink + "/sites/zweb/js/common/zc-pricing.js";
    } else {
        zcprice.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zc-pricing.js";
    }
    document.getElementsByTagName("head")[0].appendChild(zcprice);
}
var zcScrExist = false;
function zcPriInit(e) {
    if (!document.getElementById("zc-script-pricing")) {
        var t = document.createElement("script");
        if (getDomain == _preZ || getDomain == _preZC || getDomain == _zcmsZC) {
            t.src = "/sites/zweb/js/common/zc-dynamic-pricing.js";
        } else {
            t.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zc-dynamic-pricing.js";
        }
        t.setAttribute("id", "zc-script-pricing");
        t.addEventListener("load", e);
        document.getElementsByTagName("head")[0].appendChild(t);
    } else {
        if (typeof zpSetPricingInfo !== "undefined" || typeof zpSetPricingInfo === "function") {
            e();
        } else {
            var a = setInterval(function () {
                if (typeof zpSetPricingInfo !== "undefined" || typeof zpSetPricingInfo === "function") {
                    clearInterval(a);
                    e();
                }
            }, 100);
        }
    }
}
if (currentUrlLang == "nl" || currentUrlLang == "fr" || currentUrlLang == "de") {
    var transjs = document.createElement("script");
    if (predomain) {
        transjs.src = customvar.ocmsprelink + "/sites/zweb/js/common/transfeedback.js";
    } else {
        transjs.src = "https://www.zohowebstatic.com/sites/zweb/js/common/transfeedback.js";
    }
    document.getElementsByTagName("head")[0].appendChild(transjs);
    var transcss = document.createElement("link");
    transcss.rel = "stylesheet";
    transcss.type = "text/css";
    if (predomain) {
        transcss.href = customvar.ocmsprelink + "/sites/zweb/css/common/transfeedback.css";
    } else {
        transcss.href = "https://www.zohowebstatic.com/sites/zweb/css/common/transfeedback.css";
    }
    document.getElementsByTagName("head")[0].appendChild(transcss);
}
customvar.singlescroll = false;
customvar.sscount = 0;
customvar.maxcount = 5;
if (window.location.hostname == _preZ) {
    $("body").on("mousewheel DOMMouseScroll", function (e) {
        if ($("body").attr("scrolled") != "1" && customvar.singlescroll) {
            if (typeof e.originalEvent.detail == "number" && e.originalEvent.detail !== 0) {
                if (e.originalEvent.detail > 0) {
                    customvar.sscount++;
                } else if (e.originalEvent.detail < 0) {
                    customvar.sscount--;
                }
            } else if (typeof e.originalEvent.wheelDelta == "number") {
                if (e.originalEvent.wheelDelta < 0) {
                    customvar.sscount++;
                } else if (e.originalEvent.wheelDelta > 0) {
                    customvar.sscount--;
                }
            }
            customvar.sscount < 0 ? (customvar.sscount = 0) : "";
            customvar.sscount > customvar.maxcount ? (customvar.sscount = customvar.maxcount) : "";
            $("body").attr("scrolled", "1");
            setTimeout(function () {
                $("body").attr("scrolled", "0");
            }, 2e3);
        }
    });
}
var fromSearch = global_getUrlParam("zgs");
jQuery(document).ready(function () {
    if (fromSearch != "" && fromSearch == 1 && $("body").hasClass("node-type-just-html")) {
        $("a[href]").attr({ target: "_blank", rel: "noopener" });
        var e = $("#block-system-main").clone();
        $("body").html(e);
    }
});
function getLazSrc(e, t, a, o, n, i) {
    if (typeof e.attr("data-screen") !== typeof undefined && e.attr("data-screen") !== false) {
        var r = e.attr("data-screen").split(",");
        if (r.length == 1) {
            if (t >= r[0]) {
                if (a == 1) {
                    setLazImgSrc(e, 1, o, n, i);
                } else if (a == 2) {
                    setLazVidSrc(e, i, 1);
                } else {
                    setLazImgSrc(e, 0, o, n, i);
                }
            }
        } else {
            if (t >= r[0] && t <= r[1]) {
                if (a == 1) {
                    setLazImgSrc(e, 1, o, n, i);
                } else if (a == 2) {
                    setLazVidSrc(e, i, 1);
                } else {
                    setLazImgSrc(e, 0, o, n, i);
                }
            }
        }
    } else {
        if (a == 1) {
            setLazImgSrc(e, 1, o, n, i);
        } else if (a == 2) {
            setLazVidSrc(e, i, 1);
        } else {
            setLazImgSrc(e, 0, o, n, i);
        }
    }
}
function setLazImgSrc(e, t, a, o, n) {
    if (t == 1) {
        for (g = 0; g < a.length; g++) {
            var i = $(a[g]);
            if (typeof i.attr("data-srcset") !== typeof undefined && i.attr("data-srcset") !== false) {
                i.attr("srcset", i.attr("data-srcset"));
                i.removeAttr("data-srcset");
            }
        }
    }
    if (typeof o !== typeof undefined && o !== false) {
        e.attr("srcset", o);
        e.removeAttr("data-srcset");
    }
    if (typeof n !== typeof undefined && n !== false) {
        e.attr("src", n);
        e.removeAttr("data-src");
        e.addClass("data-loaded");
    }
}
function setLazVidSrc(e, t, a) {
    if (typeof t !== typeof undefined && t !== false) {
        if (a == 1) {
            e.attr("poster", t);
        } else {
            e.attr("src", t);
        }
        e.removeAttr("data-src");
        e.addClass("data-loaded");
    }
}
function imgLazy(t, o, n, i) {
    var r = $("[data-lazy]");
    if (r.length) {
        for (a = 0; a < r.length; a++) {
            var s = $(r[a]);
            objIsHid = s.attr("data-lazy");
            thatObjOff = s.offset().top;
            if (thatObjOff >= 1 || objIsHid == "true" || objIsHid == "child") {
                if ((i == 1 && thatObjOff <= n.height() * 2) || (i == 0 && o + n.height() * 2 >= thatObjOff)) {
                    if (!s.hasClass("data-loaded")) {
                        if (objIsHid == "child") {
                            if (thatObjOff >= 1) {
                                var l = s.find("picture");
                                var u = s.find("img");
                                var m = s.find("video");
                                var p = s.find("iframe");
                                var h = s.find("[data-src]");
                                if (l.length) {
                                    for (b = 0; b < l.length; b++) {
                                        getLazSrc(
                                            $(l[b]),
                                            t,
                                            1,
                                            $(l[b]).children("source"),
                                            $(l[b]).attr("data-srcset"),
                                            $(l[b]).attr("data-src")
                                        );
                                    }
                                }
                                if (u.length) {
                                    for (c = 0; c < u.length; c++) {
                                        getLazSrc(
                                            $(u[c]),
                                            t,
                                            0,
                                            $(u[c]).children("source"),
                                            $(u[c]).attr("data-srcset"),
                                            $(u[c]).attr("data-src")
                                        );
                                    }
                                }
                                if (m.length) {
                                    for (d = 0; d < m.length; d++) {
                                        getLazSrc(
                                            $(m[d]),
                                            t,
                                            2,
                                            $(m[d]).children("source"),
                                            $(m[d]).attr("data-srcset"),
                                            $(m[d]).attr("data-src")
                                        );
                                    }
                                }
                                if (p.length) {
                                    for (e = 0; e < p.length; e++) {
                                        setLazVidSrc($(p[e]), $(p[e]).attr("data-src"), 0);
                                    }
                                }
                                if (h.length) {
                                    for (f = 0; f < h.length; f++) {
                                        if (
                                            !$(h[f]).is("picture") &&
                                            !$(h[f]).is("img") &&
                                            !$(h[f]).is("video") &&
                                            !$(h[f]).is("iframe")
                                        ) {
                                            if (
                                                typeof $(h[f]).attr("data-src") !== typeof undefined &&
                                                $(h[f]).attr("data-src") !== false
                                            ) {
                                                $(h[f]).css(
                                                    "background-image",
                                                    "url(" + $($(h[f])).attr("data-src") + ")"
                                                );
                                                $(h[f]).removeAttr("data-src");
                                                $(h[f]).addClass("data-loaded");
                                            }
                                        }
                                    }
                                }
                                s.addClass("data-loaded");
                            }
                        } else {
                            var g = s.closest("picture").find("source");
                            var v = s.attr("data-srcset");
                            var y = s.attr("data-src");
                            if (s.parent().is("picture")) {
                                getLazSrc(s, t, 1, g, v, y);
                            } else if (s.is("img")) {
                                getLazSrc(s, t, 0, g, v, y);
                            } else if (s.is("video")) {
                                getLazSrc(s, t, 2, g, v, y);
                            } else if (s.is("iframe")) {
                                setLazVidSrc(s, y, 0);
                            } else {
                                if (typeof y !== typeof undefined && y !== false) {
                                    s.css("background-image", "url(" + y + ")");
                                    s.removeAttr("data-src");
                                    s.addClass("data-loaded");
                                } else {
                                    s.addClass("data-loaded");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
zLzScW = $(window);
$(document).ready(function () {
    zLzScwW = zLzScW.outerWidth();
    imgLazy(zLzScwW, 0, zLzScW, 1);
});
zLzScW.resize(function () {
    zLzScwW = zLzScW.outerWidth();
    zLzScwS = zLzScW.scrollTop();
    imgLazy(zLzScwW, zLzScwS, zLzScW, 0);
});
zLzScW.scroll(function () {
    zLzScwW = zLzScW.outerWidth();
    zLzScwS = zLzScW.scrollTop();
    imgLazy(zLzScwW, zLzScwS, zLzScW, 0);
});
function zLazyOnTrigger() {
    zLzScwW = zLzScW.outerWidth();
    zLzScwS = zLzScW.scrollTop();
    imgLazy(zLzScwW, zLzScwS, zLzScW, 0);
}
if (currentUrlLang == "" || currentUrlLang == "jp") {
    if (customvar.browser == "ie" || customvar.browser == "IE") {
        var supportText = Drupal.t(
            "This browser is no longer supported and some functionality may not work. Switch to another browser for the best Zoho experience."
        );
        $("body").append(
            '<div class="br-ns-overlay"></div><div class="br-ns-outer"><div class="br-ns-contianer"><p>' +
                supportText +
                '</p><span class="br-ns-close"></span></div></div><div class="br-ns-fixed"><div class="br-ns-contianer"><p>' +
                supportText +
                '</p><span class="br-ns-close"></span></div></div>'
        );
        $(".br-ns-overlay, .br-ns-close").on("click", function () {
            $(".br-ns-overlay, .br-ns-outer").hide();
        });
    }
}
var defColLineCount = 10;
if (getDomain != "www.zoho.com" && getDomain != "www.zoho.com.cn") {
    if (window.location.search.indexOf("hrLines") > 0) {
        $(document).keydown(function (e) {
            var t = $(".zwe-hrLine-box");
            if (e.keyCode == 27) {
                if (t.is(":visible")) {
                    t.css("display", "none");
                } else {
                    t.css("display", "grid");
                }
            }
        });
        $("head").append(
            '<style type="text/css">.zwe-hrLine-box{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background:rgb(0,0,0,.4);z-index:9999;display:grid;pointer-events:none}.zwe-hrLine-inner{counter-reset:counter 0;display:grid}.zwe-hrLine-box span{display:grid;align-content:end;position:relative;border-style:solid;border-color:#fff;border-width:1px 1px 0 1px}.zwe-hrLine-box span:last-child{border-bottom-width:1px}.zwe-hrLine-box span:after{counter-increment:counter 1;content:counter(counter);display:inline-block;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;position:absolute;left:-1px;bottom:-8px;background:#000;width:25px;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-box span:first-child:before{content:"0";position:absolute;left:-1px;top:-8px;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;background:#000;width:25px;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-inner .zwe-hrLine-bottom,.zwe-hrLine-inner .zwe-hrLine-middle,.zwe-hrLine-inner .zwe-hrLine-static,.zwe-hrLine-inner .zwe-hrLine-top{position:absolute;right:0;min-height:1px;border-bottom:1px solid #fff;width:100%}.zwe-hrLine-inner .zwe-hrLine-bottom:before,.zwe-hrLine-inner .zwe-hrLine-middle:before,.zwe-hrLine-inner .zwe-hrLine-static:before,.zwe-hrLine-inner .zwe-hrLine-top:before{display:inline-block;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;position:absolute;top:-6px;right:0;background:#000;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-inner .zwe-hrLine-top:before{content:"Top";width:22px}.zwe-hrLine-inner .zwe-hrLine-middle:before{content:"Middle";width:38px}.zwe-hrLine-inner .zwe-hrLine-bottom:before{content:"Bottom";width:40px}.zwe-hrLine-inner .zwe-hrLine-static:before{content:"Position";width:43px;left:0;right:inherit;padding:0 0 0 2px}</style>'
        );
        $("body").append('<div class="zwe-hrLine-box"><div class="zwe-hrLine-inner"></div></div>');
        colLineCount = window.location.search.slice(9);
        if (colLineCount.split("/").length == 2) {
            if (colLineCount.split("/")[1] == "top" || colLineCount.split("/")[1] == "bottom") {
                $(".zwe-hrLine-inner").append('<div class="zwe-hrLine-static"></div>');
            }
        } else if (colLineCount >= 1 && colLineCount <= 100) {
            for (a = 1; a <= colLineCount; a++) {
                $(".zwe-hrLine-inner").append("<span></span>");
            }
        }
        $(".zwe-hrLine-inner").append(
            '<div class="zwe-hrLine-top"></div><div class="zwe-hrLine-middle"></div><div class="zwe-hrLine-bottom"></div>'
        );
    }
}
function zScrollOnPos(e, t) {
    if (e.is("video")) {
        if (!e.hasClass("zwe-op")) {
            if (typeof t !== typeof undefined && t !== false) {
                setTimeout(function () {
                    e.addClass("zwe-v-delay");
                    e.get(0).muted = true;
                    e.get(0).play();
                }, t);
            } else {
                e.get(0).muted = true;
                e.get(0).play();
            }
        }
    }
    e.addClass("zwe-op");
}
function zElmOnScroll(e, t, o, n) {
    if (getDomain != "www.zoho.com" && getDomain != "www.zoho.com.cn") {
        if (window.location.search.indexOf("hrLines") > 0) {
            colLineCount = window.location.search.slice(9);
            $(".zwe-hrLine-inner .zwe-hrLine-top").css("top", (t / 3 / 2) * 1);
            $(".zwe-hrLine-inner .zwe-hrLine-middle").css("top", (t / 3 / 2) * 3);
            $(".zwe-hrLine-inner .zwe-hrLine-bottom").css("top", (t / 3 / 2) * 5);
            if (colLineCount.split("/").length == 2) {
                if (colLineCount.split("/")[1] == "top") {
                    $(".zwe-hrLine-inner .zwe-hrLine-static").css("top", Number(colLineCount.split("/")[0]));
                } else if (colLineCount.split("/")[1] == "bottom") {
                    $(".zwe-hrLine-inner .zwe-hrLine-static").css("top", t - Number(colLineCount.split("/")[0]));
                }
            }
        }
    }
    if (zAnimElm.length) {
        var i = o + t;
        for (a = 0; a < zAnimElm.length; a++) {
            var r = $(zAnimElm[a]),
                s = r.attr("data-onscroll"),
                l = r.attr("data-delay"),
                c = r.height(),
                u = r.offset().top,
                d = u + c;
            if (u >= 1) {
                if ((n == 1 && d >= o - 50 && u <= i + 50) || (n == 0 && d >= o - 150 && u <= i + 50)) {
                    if (n == 1 || (n == 0 && o + (t / 3 / 2) * 1 >= u)) {
                        r.addClass("zwe-ot");
                    }
                    if (n == 1 || (n == 0 && o + (t / 3 / 2) * 3 >= u)) {
                        r.addClass("zwe-om");
                    }
                    if (n == 1 || (n == 0 && o + (t / 3 / 2) * 5 >= u)) {
                        r.addClass("zwe-ob");
                    }
                    if (s != "") {
                        if (s.length <= 2 && s <= defColLineCount) {
                            if (n == 1 || (n == 0 && o + (t / defColLineCount) * s >= u)) {
                                zScrollOnPos(r, l);
                            }
                        } else if (s.length >= 3 && (s.endsWith("top") || s.endsWith("bottom"))) {
                            zElmOffset = Number(s.split("/")[0]);
                            zElmOffsetPostion = s.split("/")[1];
                            if (zElmOffsetPostion == "top") {
                                if (n == 1 || (n == 0 && o + zElmOffset >= u)) {
                                    zScrollOnPos(r, l);
                                }
                            } else {
                                if (n == 1 || (n == 0 && i - zElmOffset >= u)) {
                                    zScrollOnPos(r, l);
                                }
                            }
                        } else if (
                            s.length >= 3 &&
                            !s.startsWith("{") &&
                            !s.endsWith("}") &&
                            !s.endsWith("top") &&
                            !s.endsWith("bottom")
                        ) {
                            zElmOffsetRow = Number(s.split("/")[0]);
                            zElmOffsetTotalRow = Number(s.split("/")[1]);
                            if (n == 1 || (n == 0 && o + (t / zElmOffsetTotalRow) * zElmOffsetRow >= u)) {
                                zScrollOnPos(r, l);
                            }
                        } else if (s.startsWith("{") && s.endsWith("}")) {
                            s = s.split("{").join("").split("}").join("");
                            for (b = 0; b < s.split(",").length; b++) {
                                zElmOffsetRes = s.split(",")[b].split(":")[0];
                                zElmOffsetRow = s.split(",")[b].split(":")[1];
                                if (zElmOffsetRow.split("/").length == 2) {
                                    zElmOffsetRows = Number(zElmOffsetRow.split("/")[0]);
                                    zElmOffsetTotalRows = zElmOffsetRow.split("/")[1];
                                    if (zElmOffsetRes.split("-").length == 1) {
                                        if (zElmOffsetTotalRows == "top" || zElmOffsetTotalRows == "bottom") {
                                            if (zElmOffsetTotalRows == "top") {
                                                if (
                                                    e >= zElmOffsetRes.split("-")[0] &&
                                                    (n == 1 || (n == 0 && o + zElmOffsetRows >= u))
                                                ) {
                                                    zScrollOnPos(r, l);
                                                }
                                            } else {
                                                if (
                                                    e >= zElmOffsetRes.split("-")[0] &&
                                                    (n == 1 || (n == 0 && i - zElmOffsetRows >= u))
                                                ) {
                                                    zScrollOnPos(r, l);
                                                }
                                            }
                                        } else {
                                            if (
                                                e >= zElmOffsetRes.split("-")[0] &&
                                                (n == 1 ||
                                                    (n == 0 &&
                                                        o + (t / Number(zElmOffsetTotalRows)) * zElmOffsetRows >= u))
                                            ) {
                                                zScrollOnPos(r, l);
                                            }
                                        }
                                    } else {
                                        if (zElmOffsetTotalRows == "top" || zElmOffsetTotalRows == "bottom") {
                                            if (zElmOffsetTotalRows == "top") {
                                                if (
                                                    e >= zElmOffsetRes.split("-")[0] &&
                                                    e <= zElmOffsetRes.split("-")[1] &&
                                                    (n == 1 || (n == 0 && o + zElmOffsetRows >= u))
                                                ) {
                                                    zScrollOnPos(r, l);
                                                }
                                            } else {
                                                if (
                                                    e >= zElmOffsetRes.split("-")[0] &&
                                                    e <= zElmOffsetRes.split("-")[1] &&
                                                    (n == 1 || (n == 0 && i - zElmOffsetRows >= u))
                                                ) {
                                                    zScrollOnPos(r, l);
                                                }
                                            }
                                        } else {
                                            if (
                                                e >= zElmOffsetRes.split("-")[0] &&
                                                e <= zElmOffsetRes.split("-")[1] &&
                                                (n == 1 ||
                                                    (n == 0 &&
                                                        o + (t / Number(zElmOffsetTotalRows)) * zElmOffsetRows >= u))
                                            ) {
                                                zScrollOnPos(r, l);
                                            }
                                        }
                                    }
                                } else {
                                    if (zElmOffsetRes.split("-").length == 1) {
                                        if (
                                            e >= zElmOffsetRes.split("-")[0] &&
                                            (n == 1 || (n == 0 && o + (t / defColLineCount) * zElmOffsetRow >= u))
                                        ) {
                                            zScrollOnPos(r, l);
                                        }
                                    } else {
                                        if (
                                            e >= zElmOffsetRes.split("-")[0] &&
                                            e <= zElmOffsetRes.split("-")[1] &&
                                            (n == 1 || (n == 0 && o + (t / defColLineCount) * zElmOffsetRow >= u))
                                        ) {
                                            zScrollOnPos(r, l);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
var zAnimElm = $("[data-onscroll]");
zElScW = $(window);
$(document).ready(function () {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 1);
});
zElScW.resize(function () {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 0);
});
zElScW.scroll(function () {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 0);
});
function zElmOnTrigger() {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 0);
}
$(document).on("click", ".za-tos", function () {
    if ($("#signup-termservice").attr("class") == "checked") {
        $("#password_status").text("");
        $(this).val(true);
    } else {
        $(this).val(false);
    }
});
customvar.scountrys = customvar.countries[1].indexOf(CountryCode) > -1 ? CountryCode : "US";
customvar.sstate = RegionName || "";
customvar.hiddenrmobileval = [];
customvar.counntrychangeed = 0;
customvar.nSignupArr = [[], [], [], [], []];
customvar.nSignupspanArr = [[], [], [], [], []];
customvar.nSignupdialArr = [[], [], [], [], []];
customvar.nSignupconfirmdialArr = [[], [], [], [], []];
customvar.visitedArry = [[], [], [], [], []];
customvar.validatetextArry = [[], [], [], [], []];
customvar.slectedradio = [];
customvar.creatingthePortal = Drupal.t("Creating Your Account...");
customvar.signupforFree = Drupal.t("Sign Up for Free");
customvar.onlyletters = Drupal.t("Only lower case letters and numbers are allowed here");
customvar.eOrgName = Drupal.t("Please enter your organization name");
customvar.eOrgRole = Drupal.t("Please enter your role in Organization");
customvar.eAboutYpurCompany = Drupal.t("Please enter about your company");
customvar.repasserr = Drupal.t("Password cannot be less than 8 characters");
customvar.repaswrongserr = Drupal.t("Wrong password confirmation");
customvar.teamNameTranslt = Drupal.t("Please enter the valid Team Name");
customvar.isValidTranslt = Drupal.t("Enter only a to z and 0 to 9");
customvar.isvalidName = Drupal.t("Only a to z and 0 to 9 are allowed");
customvar.isvalidNumberLength = Drupal.t("Please use 4-30 characters");
customvar.isvalidAgency = Drupal.t("Please enter the Agency name");
customvar.numcharspl = Drupal.t("Only letters, numbers, underscores (_), dots (.) are allowed");
customvar.eLastName = Drupal.t("Please enter your last name");
customvar.rephoneNumber = Drupal.t("Re-enter your Mobile Number");
customvar.empCount = Drupal.t("Please select no.of Employees");
customvar.locationCount = Drupal.t("Please select no.of locations");
customvar.selectindustry = Drupal.t("Please select your industry");
customvar.eselectEdition = Drupal.t("Please select a edition");
customvar.registernum = Drupal.t("Please enter your university register number");
customvar.usersrequire = Drupal.t("Please enter the number of users");
customvar.eFormationState = Drupal.t("Please select a formation state");
customvar.nOfSignup = 0;
customvar.whatsAppFormatBrazil = false;
customvar.singaporeConsentchecked = false;
if (
    global_getUrlParam("isDarkMode") &&
    ["true", "false"].includes(global_getUrlParam("isDarkMode").toLowerCase()) &&
    JSON.parse(global_getUrlParam("isDarkMode").toLowerCase())
) {
    $("body").addClass("zw-template-signup-dark");
}
customvar.redirectUrlLink;
customvar.websiteUrl, customvar.couponCode, (customvar.creditsInfo = "false");
customvar.couponCode = global_getUrlParam("cn");
customvar.edirectUrl = global_getUrlParam("redirectUrl");
customvar.dataWebsiteUrl = _lhref;
customvar.dataredirectUrl = $(".signup-box").attr("data-redirect");
customvar.creditsInfo = $(".signup-box").attr("creditsInfo") == undefined ? "false" : "true";
customvar.couponinputplaceholder = Drupal.t("Coupon");
customvar.couponCodeAvail = Drupal.t("You have availed this already");
customvar.couponError = Drupal.t("Invalid coupon");
customvar.redeemCreditsCta = Drupal.t("Proceed to redeem your credits");
customvar.zwProTerms = $(".signup-box").attr("data-zwProTerms");
customvar.zwProTerms = customvar.zwProTerms != undefined ? "/" + customvar.zwProTerms : "";
if (customvar.couponCode == "") {
    customvar.couponCode = $(".signup-box").attr("data-couponcode");
}
customvar.getWalletAttributes = function (e) {
    if (customvar.dataredirectUrl == "" || customvar.dataredirectUrl == undefined) {
        customvar.redirectUrlLink = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne;
    } else if (customvar.dataredirectUrl != "") {
        customvar.redirectUrlLink = customvar.dcadded(customvar.dataredirectUrl);
    } else {
        customvar.redirectUrlLink = customvar.redirectUrl;
    }
    if (customvar.dataWebsiteUrl == undefined || customvar.dataWebsiteUrl == "") {
        customvar.websiteUrl =
            "https://www." +
            Zdomain +
            "." +
            dcdomainOne +
            "/" +
            (customvar.productName == "home" ? "wallet" : customvar.productName) +
            "/";
    } else {
        customvar.websiteUrl = customvar.dcadded(customvar.dataWebsiteUrl);
    }
    if (typeof dynamic_redirectUrlLink == "function") {
        try {
            customvar.redirectUrlLink = dynamic_redirectUrlLink();
        } catch (e) {
            customvar.redirectUrlLink = customvar.dataredirectUrl;
        }
    }
};
$(window).on("load", function () {
    if ($(".creditelm #couponmail").length > 0) {
        customvar.showWalletForm();
    }
});
customvar.showWalletForm = function (e) {
    this.href = "https://home." + Zdomain + "." + dcdomainOne + "/";
    this.html = Drupal.t("Access Zoho") + " Home";
    var t = $("body").hasClass("body-umain") ? true : false;
    if (t) {
        if ($(".creditelm #couponmail").length > 0) {
            $(".creditelm #couponmail").val(getusername);
        }
        $(".creditelm").show();
        $(".zgh-userAccess a").attr("href", this.href).html(this.html);
    } else {
        $(".signup-box").show();
        $(".creditelm").hide();
    }
};
customvar.assignCredits = function (e) {
    if (typeof customvar.walletInit != "undefined") {
        if (!customvar.walletInit) {
            if (typeof customvar.walletInitcallBack != "undefined") {
                customvar.walletInitcallBack();
            }
            return false;
        }
    }
    customvar.getWalletAttributes();
    var t = $(".creditelm #couponname").val();
    if (t == "" && !$(".signup-box").hasClass("param_based_wallet")) {
        window.location.href = customvar.redirectUrlLink;
    } else {
        $(".existingUser").attr("disabled", "disabled").addClass("disabled-z-signup");
        $(".coupon-error").html("");
        $(".existingUser").html(Drupal.t("connecting..."));
        $.ajax({
            type: "GET",
            url: $(".signup-box").hasClass("param_based_wallet")
                ? `https://store.${Zdomain}.${dcdomainOne}/CreditsApi.do?hidMode=redeemCredits&id=${global_getUrlParam("id")}&program_name=${global_getUrlParam("program_name")}`
                : "https://store." +
                  Zdomain +
                  "." +
                  dcdomainOne +
                  "/CreditsApi.do?hidMode=redeemCredits&coupon_name=" +
                  t,
            dataType: "jsonp",
            jsonp: "callback",
            contentType: "application/json",
            jsonpCallback: "redeemCredits",
            cache: "true",
            async: true,
            xhrFields: { withCredentials: true },
            success: function (e) {
                if (e.code == 0) {
                    window.location.href = customvar.redirectUrlLink;
                } else if (e.code == 402) {
                    $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup");
                    $(".coupon-error").html(customvar.couponCodeAvail);
                } else if (e.code > 400) {
                    $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup");
                    $(".coupon-error").html(e.message);
                } else {
                    $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup");
                    $(".coupon-error").html(e.message);
                }
                $(".existingUser").html(customvar.redeemCreditsCta);
            },
            error: function () {
                $(".existingUser").html(customvar.redeemCreditsCta);
                $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup");
            },
            crossDomain: true,
        });
    }
};
customvar.walletcreditelm = function (e) {
    customvar.getWalletAttributes();
    $(".creditelm").remove();
    if ($(".signup-box").hasClass("param_based_wallet")) {
        $("body").addClass("couponLessWallet");
        $(".signup-box").after(
            '<div class="creditelm"> <div><input id="couponmail" class="sgnemail form-input" disabled="true" type="text" value="" placeholder="' +
                Drupal.t("Email Address") +
                '"> </div><span class="coupon-error note"></span><div><label class="note"><b> ' +
                Drupal.t("Note") +
                " : </b>" +
                Drupal.t("Please be informed that you will receive credits in the above mentioned Zoho account only.") +
                ' </label></div> <div><button class="existingUser" onclick="customvar.assignCredits();" id="existinguser">' +
                Drupal.t("Proceed to redeem your credits") +
                "</button></div> </div>"
        );
    } else {
        $(".form-wrap").append(
            '<div class="creditelm"> <div><input id="couponmail" class="sgnemail form-input" disabled="true" type="text" value="" placeholder="' +
                Drupal.t("Email Address") +
                '"> </div> <div><input id="couponname" class="sgnemail form-input" type="text" placeholder="' +
                Drupal.t("Coupon") +
                '" name="coupon" value=""></div><span class="coupon-error note"></span> <div><label class="note"><b> ' +
                Drupal.t("Note") +
                " : </b>" +
                Drupal.t("Please be informed that you will receive credits in the above mentioned Zoho account only.") +
                ' </label></div> <div><button class="existingUser" onclick="customvar.assignCredits();" id="existinguser">' +
                Drupal.t("Proceed to redeem your credits") +
                "</button></div> </div>"
        );
    }
    if ($(".form-wrap .signup-box .signupcontainer").length > 0) {
        if ($("#x_source").length < 1) {
            $(".form-wrap .signup-box .signupcontainer").append(
                '<input id="x_source" type="hidden" name="x_source" value="wallet" mandate="false"><input type="hidden" value="coupon_page" name="x_r_page_source" mandate="false">'
            );
        }
    }
    if (
        customvar.absurl.indexOf("notebook/notebook-for-samsung.html") > 0 &&
        $(".form-wrap .signup-box .signupcontainer").length > 0
    ) {
        $(".form-wrap .signup-box .signupcontainer").append("<input type='hidden' name='x_accountType' value='2'>");
    }
    $("#coupon").val(customvar.couponCode);
    $("#couponname").val(customvar.couponCode);
    customvar.showWalletForm();
    if (!customvar.redirectUrlLink) {
        customvar.redirectUrlLink = customvar.dcadded(customvar.signupObj.serviceurl);
    }
    var t =
        "https://store." +
        Zdomain +
        "." +
        dcdomainOne +
        "/CouponRedirect.do?creditsInfo=" +
        customvar.creditsInfo +
        "&redirectUrl=" +
        customvar.redirectUrlLink +
        "&websiteUrl=" +
        customvar.websiteUrl;
    if (
        !window.location.href.includes("recruit/lp/wallet-credits.html") &&
        !$(".signup-box").hasClass("param_based_wallet")
    ) {
        customvar.signupObj.serviceurl = encodeURIComponent(t);
    }
    var a =
        "https://accounts." +
        Zdomain +
        "." +
        dcdomainOne +
        "/signin?servicename=ZohoPayments&serviceurl=" +
        encodeURIComponent(t);
    $(".zw-login").attr("href", a);
};
customvar.OTP_based = function () {
    return dcdomainOne === "in" || dcdomainOne === "eu" || CountryCode === "MX";
};
customvar.mandatestart = function () {
    for (var e = 0; e <= $(".czone-dc input").length; e++) {
        if ($(".czone-dc .signupcontainer input").eq(e).attr("mandate") != "false") {
            if (
                $(".czone-dc .signupcontainer input").eq(e).attr("czone-asterix") &&
                $(".czone-dc .signupcontainer input").eq(e).attr("czone-asterix") === "false"
            ) {
                $(".czone-dc .signupcontainer input").eq(e).attr("aria-required", "true");
                return;
            }
            if ($("#czone-home").length > 0) {
                if (typeof $(".czone-dc .signupcontainer input").eq(e).attr("placeholder") != "undefined") {
                    var t = $(".czone-dc .signupcontainer input").eq(e).attr("placeholder");
                    if (t.indexOf("*") < 0) {
                        $(".czone-dc .signupcontainer input")
                            .eq(e)
                            .attr("placeholder", t + " *");
                        $(".czone-dc .signupcontainer input").eq(e).attr("aria-required", "true");
                    }
                }
            } else {
                if (typeof $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html() != "undefined") {
                    var t = $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html();
                    if (t.indexOf("*") < 0) {
                        $(".czone-dc .signupcontainer input")
                            .eq(e)
                            .siblings(".placeholder")
                            .html(t + " *");
                        $(".czone-dc .signupcontainer input").eq(e).attr("aria-required", "true");
                    }
                }
                if (typeof $(".czone-dc .signupcontainer input").eq(e).attr("placeholder") != "undefined") {
                    var t = $(".czone-dc .signupcontainer input").eq(e).attr("placeholder");
                    if (t != "") {
                        if (t.indexOf("*") < 0) {
                            $(".czone-dc .signupcontainer input")
                                .eq(e)
                                .attr("placeholder", t + " *");
                            $(".czone-dc .signupcontainer input").eq(e).attr("aria-required", "true");
                        }
                    }
                }
            }
        } else {
            if ($("#czone-home").length > 0) {
                if (typeof $(".czone-dc .signupcontainer input").eq(e).attr("placeholder") != "undefined") {
                    var t = $(".czone-dc .signupcontainer input").eq(e).attr("placeholder");
                    if (t.indexOf("*") > -1) {
                        $(".czone-dc .signupcontainer input").eq(e).attr("placeholder", t.split("*").join(""));
                        $(".czone-dc .signupcontainer input").eq(e).removeAttr("aria-required");
                    }
                }
            } else {
                if (typeof $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html() != "undefined") {
                    var t = $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html();
                    if (t.indexOf("*") > -1) {
                        $(".czone-dc .signupcontainer input")
                            .eq(e)
                            .siblings(".placeholder")
                            .html(t.split("*").join(""));
                        $(".czone-dc .signupcontainer input").eq(e).removeAttr("aria-required");
                    }
                }
            }
        }
    }
};
customvar.newsletterhandle = function () {
    if ($(".globalcountrycode-signup option:selected").attr("newsletter_mode") > 1) {
        $(".za-newsletter-container").addClass("zshow");
        $(".icon-medium").removeClass("checked").addClass("unchecked");
        $("#signupform [name='newsletter']").removeAttr("checked");
    } else {
        $(".za-newsletter-container").removeClass("zshow");
        $(".icon-medium").removeClass("unchecked").addClass("checked");
        $("#signupform [name='newsletter']").attr("checked", "true");
    }
    if ($(".globalcountrycode-signup option:selected").attr("newsletter_mode") >= 2) {
        $(".za-newsletter-container").removeAttr("style");
    }
    if (countryEu.indexOf(customvar.scountrys) > -1 || customvar.scountrys == "AU" || customvar.scountrys == "ZA") {
        $(".za-newsletter-container").addClass("zshow");
        $(".icon-medium").removeClass("checked").addClass("unchecked");
        $("#signupform [name='newsletter']").removeAttr("checked");
    }
    if (customvar.scountrys == "SG" && customvar.singaporeConsentproductList.includes(customvar.productName)) {
        if ($(".signup-box .get-signup-plan #business").prop("checked")) {
            $(".icon-medium").removeClass("unchecked").addClass("checked");
            $("#signupform [name='newsletter']").attr("checked", "true");
            $(".za-newsletter-container").removeClass("zshow").addClass("zhide");
        } else {
            if (
                $('.signupcontainer [name="signup_edition"]').length ||
                $('.signupcontainer [name="x_accountType"]').length
            ) {
                $(".icon-medium").removeClass("checked").addClass("unchecked");
                $("#signupform [name='newsletter']").removeAttr("checked");
                $(".za-newsletter-container").removeClass("zhide").addClass("zshow");
                if (customvar.singaporeConsentchecked) {
                    $(".icon-medium").removeClass("unchecked").addClass("checked");
                    $("#signupform [name='newsletter']").attr("checked", "true");
                }
            } else {
                $(".za-newsletter-container").removeClass("zshow").addClass("zhide");
                $(".icon-medium").removeClass("unchecked").addClass("checked");
                $("#signupform [name='newsletter']").attr("checked", "true");
            }
        }
    }
};
function global_getValParam(o, e) {
    var n = {},
        i = "";
    var t = e.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, t, a) {
        n[t] = a;
        if (t == o) {
            i = a;
        }
    });
    return i;
}
customvar.setcurrentCountry = function () {
    if (customvar.showchangecountry == "false") {
        if ($(".signup-box .globalcountrycode-signup").length > 0) {
            $(".signup-box .globalcountrycode-signup").val(CountryCode);
        }
    } else {
        $(".globalcountrycode-signup").val(customvar.scountrys);
    }
};
customvar.phoneValidationBrazil = function () {
    if ($(".phone_countrycode")?.val() == "+55") {
        $(".dialphone")
            .off("input")
            .on("input", function () {
                let e = $(this).val().replace(/\D/g, "");
                if (e != "") {
                    if (e.length <= 2) {
                        e = `(${e}`;
                    } else if (e.length <= 7) {
                        e = `(${e.slice(0, 2)}) ${e.slice(2)}`;
                    } else {
                        e = `(${e.slice(0, 2)}) ${e.slice(2, 7)}-${e.slice(7)}`;
                    }
                }
                e = e.length > 15 ? e.slice(0, 15) : e;
                $(this).val(e);
            });
    } else {
        $(".dialphone").off("input");
    }
};
var zr_script = "";
function z_add_account_script_common() {
    customvar.setcurrentCountry();
    customvar.zDomainHandling();
    if ($(".signup-box #czone-wallet").length > 0 || $(".signup-box").hasClass("param_based_wallet")) {
        if (
            (_lhref.indexOf("recruit/lp/wallet-credits.html") > 0 && predomain) ||
            $(".signup-box").hasClass("param_based_wallet")
        ) {
            customvar.walletcreditelm();
        }
        if (typeof customvar.signupObj.couponinput != "undefined") {
            if (
                typeof customvar.signupObj.couponinput.required == "undefined" ||
                customvar.signupObj.couponinput.required ||
                customvar.signupObj.couponinput.required == "true"
            ) {
                customvar.walletcreditelm();
            }
        }
    }
    $("script#z-account-script").remove();
    var e =
        global_getUrlParam("serviceurl") != ""
            ? (function () {
                  return customvar.dcadded(global_getUrlParam("serviceurl"));
              })()
            : typeof customvar.signupObj.serviceurl != "undefined"
              ? (function () {
                    return customvar.dcadded(customvar.signupObj.serviceurl);
                })()
              : customvar.outproduct.indexOf(customvar.productName) > -1
                ? "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne
                : "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne;
    var t = document.createElement("script");
    t.id = "z-account-script";
    if (customvar.outproduct.indexOf(customvar.productName) > -1) {
        t.src =
            "https://accounts." +
            (location.host.indexOf("localbigin") > 0 || location.host.indexOf("localqntrl") > 0 ? Zdomain : Zdomain) +
            "." +
            dcdomainOne +
            "/register/script?temp_redirect=true&" +
            customvar.clang +
            "load_country=false&servicename=" +
            ($(".signup-box #coupon.x_r_coupon").length > 0 ? "ZohoPayments" : customvar.signupObj.servicename) +
            "&loadcss=false" +
            (typeof customvar.signupObj.accountsparam != "undefined"
                ? customvar.dcadded(customvar.signupObj.accountsparam)
                : "") +
            (global_getUrlParam("ismobilesignup") != "" ? "&use_homeurl=true" : "") +
            "&serviceurl=" +
            e;
    } else {
        if (_lhref.indexOf("recruit/lp/wallet-credits.html") > 0 && predomain) {
            t.src =
                "https://accounts." +
                Zdomain +
                "." +
                dcdomainOne +
                "/register/script?temp_redirect=true&" +
                customvar.clang +
                "load_country=false&servicename=" +
                ($(".signup-box #coupon.x_r_coupon").length > 0 &&
                !window.location.href.includes("recruit/lp/wallet-credits.html")
                    ? "ZohoPayments"
                    : customvar.signupObj.servicename) +
                "&loadcss=false" +
                (typeof customvar.signupObj.accountsparam != "undefined"
                    ? customvar.dcadded(customvar.signupObj.accountsparam)
                    : "") +
                (global_getUrlParam("ismobilesignup") != "" ? "&use_homeurl=true" : "") +
                "&serviceurl=" +
                e;
        } else {
            t.src =
                "https://accounts." +
                Zdomain +
                "." +
                dcdomainOne +
                "/register/script?temp_redirect=true&" +
                customvar.clang +
                "load_country=false&servicename=" +
                ($(".signup-box #coupon.x_r_coupon").length > 0 ? "ZohoPayments" : customvar.signupObj.servicename) +
                "&loadcss=false" +
                (typeof customvar.signupObj.accountsparam != "undefined"
                    ? customvar.dcadded(customvar.signupObj.accountsparam)
                    : "") +
                (global_getUrlParam("ismobilesignup") != "" ? "&use_homeurl=true" : "") +
                "&serviceurl=" +
                e;
        }
    }
    if (t.src.indexOf("mode=20") < 0) {
        if (customvar.OTP_based()) {
            if ($(".signup-box .za-rmobile-container").length < 1) {
                if ($(".signup-box .mobile-container").length > 0) {
                    $(".signup-box .mobile-container").before(customvar.signupflow.rmobile);
                } else {
                    $(".signup-box .za-captcha-container").before(customvar.signupflow.rmobile);
                }
                if (typeof customvar.signupObj.rmobilelabel != "undefined") {
                    if ($(".signup-box .za-rmobile-container").length > 0) {
                        $(".signup-box .za-rmobile-container").prepend(customvar.signupObj.rmobilelabel);
                    }
                }
                if (typeof customvar.signupObj.rplaceholder != "undefined") {
                    if ($(".signup-box #rmobile").length > 0) {
                        $(".signup-box #rmobile").attr("placeholder", customvar.signupObj.rplaceholder);
                    }
                }
            }
            if ($(".za-password-container").length < 1) {
                $(".za-rmobile-container").before(customvar.signupflow.password);
            }
            if (typeof $(".czone-dc").attr("id") != "undefined") {
                if ($(".czone-dc").attr("id") == "czone-signup") {
                    $(".czone-dc input").not(".langinput").attr("placeholder", "");
                } else {
                    $(".czone-dc .placeholder").remove();
                }
                if ($("#rmobile").siblings(".placeholder").length > 0) {
                    $("#rmobile").siblings(".placeholder").html(customvar.phoneNumber);
                } else {
                    if ($("#rmobile").attr("placeholder").length > 0) {
                        $("#rmobile").attr("placeholder", customvar.phoneNumber);
                    }
                }
            }
            $(".za_country_code").val(CountryCode);
            $(".phone_countrycode").val(`+${$(".za_country_code option:selected").attr("dialling_code")}`);
            $(".ccodediv").html(`+${$(".za_country_code option:selected").attr("dialling_code")}`);
            setTimeout(function () {
                $(".za_country_code").val(CountryCode);
                $(".phone_countrycode").val(`+${$(".za_country_code option:selected").attr("dialling_code")}`);
                $(".ccodediv").html(`+${$(".za_country_code option:selected").attr("dialling_code")}`);
            }, 150);
            $(".mobile-container").addClass("zhide-common");
            if (global_getValParam("mode", t.src) == "") {
                t.src = t.src + "&mode=24";
            } else {
                if (global_getValParam("mode", t.src) != "24") {
                    t.src = t.src.split("mode=" + global_getValParam("mode", t.src)).join("mode=24");
                }
            }
        } else {
            $(".za-rmobile-container").hide();
            $(".mobile-container").removeClass("zhide-common");
        }
    }
    if (t.src.indexOf("mode=24") > -1) {
        if ($(".signup-box .za-rmobile-container").length > 0 && $(".mobile-container").length < 1) {
            if (
                $('.signup-box input[name="r_address/1.phone"]').length < 1 &&
                $('.signup-box input[name="r_address/2.phone"]').length < 1
            ) {
                $(".signup-box .za-rmobile-container").after(
                    '<div class="zhide-common"><input class="rmobilevalue" mandate="false" name="r_address/1.phone" placeholder="" type="hidden"></div>'
                );
            }
        }
    }
    customvar.whatsAppFormatBrazil = false;
    (function () {
        if (
            !$("#emailmoile").length &&
            !$("#rmobile").length &&
            !t.src.includes("mode=24") &&
            !t.src.includes("mode=20") &&
            CountryCode == "BR"
        ) {
            if (!$(".mobile-container #mobile").length) {
                $(".signupcontainer .za-captcha-container").before(customvar.signupflow["dialcodecontactnumber"]);
            } else {
                let e = $(".mobile-container #mobile").attr("name");
                $(".mobile-container").remove();
                $(".signupcontainer .za-captcha-container").before(customvar.signupflow["dialcodecontactnumber"]);
                $(".mobile-container #mobile").attr("name", e);
            }
            if ($(".czone-dc #password").attr("placeholder") == "" || $(".czone-dc #email").attr("placeholder") == "") {
                $(".mobile-container #mobile")?.attr("placeholder", "");
                $(".mobile-container .placeholder")?.html(customvar.phoneNumber + " *");
            } else {
                if (customvar.productName == "catalyst" && $(".czone-dc").attr("id") == "czone-signup") {
                } else {
                    $(".mobile-container .placeholder")?.html("");
                    $(".mobile-container #mobile")?.attr("placeholder", customvar.phoneNumber + " *");
                }
            }
            if ($(".czone-dc").attr("id") == "czone-signup") {
                $(".czone-dc #mobile").attr("placeholder", "");
            }
            customvar.whatsAppFormatBrazil = true;
        } else if ($("#rmobile").length && t.src.includes("mode=24")) {
            customvar.whatsAppFormatBrazil = false;
        }
    })();
    $('.signupcontainer input[type="hidden"]').attr("mandate", "false");
    if ($(".signupotpcontainer .signupbtn").length > 0) {
        $(".signupotpcontainer .signupbtn").val(customvar.verify);
    }
    if (currentUrlLang != "jp") {
        customvar.mandatestart();
    }
    $(".signupotpcontainer .signupbtn").off("click");
    $(".signupotpcontainer .signupbtn").on("click", function () {
        if ($(".signupotpcontainer .signupbtn").length > 0) {
            $(".signupotpcontainer .signupbtn").val(customvar.verifying + "...");
            if (typeof customvar.submitotp != "undefined") {
                customvar.submitotp();
            }
        }
    });
    document.getElementsByTagName("head")[0].appendChild(t);
    customvar.newsletterhandle();
    customvar.showdcode();
    var a = "Based on your IP, you are in",
        o = "Change",
        n = "Your data will be in",
        i = "data center",
        r = "based on your IP",
        s = "";
    if (typeof customvar.basedonip != "undefined") {
        a = customvar.basedonip;
    }
    if (typeof customvar.basedon != "undefined") {
        r = customvar.basedon;
    }
    if (typeof customvar.change != "undefined") {
        o = customvar.change;
    }
    if (typeof customvar.datawillb != "undefined") {
        n = customvar.datawillb;
    }
    if (typeof customvar.datacenter != "undefined") {
        i = customvar.datacenter;
    }
    if (typeof customvar.transCName != "undefined") {
        s = customvar.transCName;
    }
    if ($(".zcountry-info").length < 1) {
        if (customvar.showchangecountry == "true") {
            if (currentUrlLang == "jp") {
                $(".signup-box .signupcontainer .sgnbtnmn").before(
                    '<p class="zcountry-info zshow">' +
                        a +
                        '<span id="zip-countryname"> ' +
                        s +
                        ' </span><span class="dcset-jp"> ' +
                        r +
                        '</span><span tabindex="0" id="zip-countryname-change">' +
                        o +
                        "</span></p>"
                );
            } else {
                $(".signup-box .signupcontainer .sgnbtnmn").before(
                    '<p class="zcountry-info zshow">' +
                        a +
                        '<span id="zip-countryname"> ' +
                        s +
                        "</span><span> " +
                        r +
                        '</span>.<span id="zip-countryname-change">' +
                        o +
                        "</span></p>"
                );
            }
        }
    }
    if ($(".dc-info").length < 1) {
        var l = ".",
            c = "US";
        if (typeof customvar.nsdctext != "undefined") {
            c = customvar.nsdctext();
        }
        if (currentUrlLang == "jp") {
            $(".signup-box .signupcontainer .sgnbtnmn").before(
                '<p class="dc-info"><span class="accountstxt-jp">' +
                    n +
                    '</span><span class="dcset dcset-jp">' +
                    c +
                    '</span><span class="dcenter-jp">' +
                    i +
                    "</span></p>"
            );
        } else {
            if (customvar.scountrys == "ES" && currentUrlLang == "es-xl") {
                n = "Sus datos se almacenarÃ¡n en el centro de datos de";
                i = " ";
            } else if ((customvar.scountrys == "NL" || customvar.scountrys == "AN") && currentUrlLang == "nl") {
                n = "Uw gegevens worden in het datacenter in";
                i = "opgeslagen";
            }
            i == " " ? (i = "") : (c = c + " ");
            $(".signup-box .signupcontainer .sgnbtnmn").before(
                '<p class="dc-info">' + n + ' <span class="dcset">' + c + "</span>" + i + l + "</p>"
            );
        }
    }
    statehandling($(".globalcountrycode-signup").val());
    zr_script = t;
    $(".signup-box #czone-home input, .signup-box #czone-wallet input").each(function () {
        if (typeof $(this).attr("placeholder") != "undefined" && $(this).attr("placeholder") != "") {
            $(this).removeAttr("aria-label");
        }
    });
    if (customvar.whatsAppFormatBrazil) {
        customvar.phoneValidationBrazil();
    }
}
function statehandling(e) {
    var t = "";
    if (e == "CA") {
        for (var a = 0; a < customvar.castates.length; a++) {
            t += '<option value="' + customvar.castates[a].toLowerCase() + '">' + customvar.castates[a] + "</option>";
        }
    } else {
        for (var a = 0; a < customvar.usstates.length; a++) {
            t += '<option value="' + customvar.usstates[a].toLowerCase() + '">' + customvar.usstates[a] + "</option>";
        }
    }
    $(".signup-box .za-country-container").after(
        '<div class="sgfrm za-state-container za-country_state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' +
            t +
            "</select></div>"
    );
    if (e == "US" || e == "CA") {
        $(".za-globalstate-signup option").eq(0).remove();
        $(".za-state-container").removeClass("zhide-common").addClass("zshow-common");
        if (typeof RegionName != "undefined") {
            if ($(".za-globalstate-signup").length > 0) {
                if (e == "US" || e == "CA") {
                    $(".za-globalstate-signup").val(RegionName.toLowerCase());
                }
                if ($(".za-globalstate-signup").val() == null) {
                    $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val());
                }
            }
        }
    } else {
        $(".za-state-container").removeClass("zshow-common").addClass("zhide-common");
    }
    customvar.privacypolicylink(true);
}
$(document).on("change", ".signup-box #terms-check", function () {
    if ($(this).is(":checked") != false) {
        $(this).val(true);
        $(".tcheck").addClass("checked");
        $(this).closest(".terms-accept").find(".field-msg").remove();
    } else {
        $(".tcheck").removeClass("checked");
        $(this).val(false);
    }
});
$(document).on("click", "#zip-countryname-change", function () {
    $(".zcountry-info").addClass("zhide-common");
    $(".za-country-container").addClass("zshow");
    customvar.counntrychangeed = 1;
});
$(document).on("click", ".signup-box .showhide", function () {
    if ($(".signup-box #password").attr("type") == "text") {
        $(".signup-box #password").attr("type", "password");
        $(this).removeClass("active");
    } else {
        $(".signup-box #password").attr("type", "text");
        $(this).addClass("active");
    }
});
customvar.getsfield = function () {
    for (
        var e = 0;
        e < $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]').length;
        e++
    ) {
        if (
            $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]')
                .eq(e)
                .val() != ""
        ) {
            var t = $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]')
                .eq(e)
                .attr("id");
            customvar.nSignupArr[customvar.nOfSignup][e] =
                t +
                "::to::" +
                $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]')
                    .eq(e)
                    .val();
            customvar.validatetextArry[customvar.nOfSignup][e] = $("#" + t)
                .siblings(".placetxt")
                .attr("class");
        }
    }
    if ($("span.portal-input").length > 0) {
        customvar.nSignupspanArr[customvar.nOfSignup][0] = $("span.portal-input").html();
    }
    if ($(".za_country_code").length > 0) {
        customvar.nSignupdialArr[customvar.nOfSignup][0] = $(".za_country_code").val();
    }
    if ($(".za_confirm_country_code").length > 0) {
        customvar.nSignupconfirmdialArr[customvar.nOfSignup][0] = $(".za_confirm_country_code").val();
    }
    if ($(".signup-box .rmobilevalue").length > 0) {
        customvar.hiddenrmobileval[customvar.nOfSignup] = $(".signup-box .rmobilevalue").val();
    }
    customvar.visitedArry[customvar.nOfSignup][0] = "visited";
};
customvar.setsfield = function () {
    for (var e = 0; e < customvar.nSignupArr[customvar.nOfSignup].length; e++) {
        if (customvar.nSignupArr[customvar.nOfSignup][e] != "") {
            if (typeof customvar.nSignupArr[customvar.nOfSignup][e] != "undefined") {
                var t = customvar.nSignupArr[customvar.nOfSignup][e].split("::to::")[0];
                var a = customvar.nSignupArr[customvar.nOfSignup][e].split("::to::")[1];
                $("#" + t)
                    .parent()
                    .addClass("added-placeholder");
                $("#" + t).val(a);
                $("#" + t)
                    .siblings(".placetxt")
                    .addClass(customvar.validatetextArry[customvar.nOfSignup][e]);
            }
        }
    }
    if ($("span.portal-input").length > 0) {
        if (typeof customvar.nSignupspanArr[customvar.nOfSignup][0] != "undefined") {
            $("span.portal-input").html(customvar.nSignupspanArr[customvar.nOfSignup][0]);
        }
    }
    if ($(".signup-box .rmobilevalue").length > 0) {
        $(".signup-box .rmobilevalue").val(customvar.hiddenrmobileval[customvar.nOfSignup]);
    }
    if (customvar.slectedradio[0] != "") {
        if ($(".radiooptions").length > 0) {
            $(".radiooptions").prop("checked", false);
            $(".radiooptions").eq(customvar.slectedradio[0]).prop("checked", true);
        }
        if ($('.signup-box input[name="x_optioncheck"]').length > 0) {
            $('.signup-box input[name="x_optioncheck"]').val(customvar.slectedradio[1]);
        }
    }
    customvar.showdcode();
};
$(document).on("click", ".signup-box .radiogroup .radiooptions", function () {
    if ($('.signup-box input[name="x_optioncheck"]').length > 0) {
        $('.signup-box input[name="x_optioncheck"]').val("radiochecked");
    }
    customvar.slectedradio[0] = $(this).val();
    customvar.slectedradio[1] = "radiochecked";
});
customvar.getmadate = function (e) {
    if (e == "x_optioncheck") {
        if ($(".x_optioncheck").val() == "") {
            return false;
        }
        return true;
    }
    return typeof $("input[name='" + e + "']").attr("mandate") != "undefined"
        ? $("input[name='" + e + "']").attr("mandate") == "false"
            ? false
            : true
        : true;
};
customvar.getsplmadate = function (e) {
    if (customvar.productName == "mail") {
        return true;
    } else {
        return false;
    }
};
customvar.validateRemote = function (e) {
    if (customvar.productName == "mail") {
        return true;
    } else {
        return false;
    }
};
(customvar.nsdctext = function () {
    var e = "US";
    var t = customvar.dcObj;
    for (var a in t) {
        if (typeof t[a].countries != "undefind") {
            if (t[a].countries.indexOf(customvar.scountrys) > -1) {
                e = t[a].dctext;
            }
        }
    }
    if (onlycom) {
        e = "US";
    } else if (onlyin) {
        e = "India";
    }
    return e;
}),
    (customvar.nscountrypop = function (e) {
        this._data = "";
        this.arr = customvar.countries;
        for (var t = 0; t < customvar.countries[0].length; t++) {
            if (e == "dial") {
                this._data +=
                    '<option value="' +
                    this.arr[1][t] +
                    '" dialling_code="' +
                    this.arr[2][t] +
                    '">' +
                    this.arr[0][t] +
                    " (+" +
                    this.arr[2][t] +
                    ")</option>";
            } else {
                this._val = "0";
                customvar.optinArr.indexOf(this.arr[1][t]) > -1
                    ? (this._val = "2")
                    : customvar.optoutArr.indexOf(this.arr[1][t]) > -1
                      ? (this._val = "2")
                      : customvar.doubleoptinArr.indexOf(this.arr[1][t]) > -1
                        ? (this._val = "3")
                        : "";
                this._data +=
                    '<option value="' +
                    this.arr[1][t] +
                    '" newsletter_mode="' +
                    this._val +
                    '">' +
                    this.arr[0][t] +
                    "</option>";
            }
        }
        setTimeout(function () {
            $(".globalcountrycode-signup").val(customvar.scountrys);
            if (e == "dial") {
                $(".za_country_code, #confirm_country_code").val(customvar.scountrys);
                $(".ccodediv, .cccodediv").html("+" + $(".za_country_code option:selected").attr("dialling_code"));
                if ($(".confirm_ccodediv").length > 0) {
                    if ($(".confirm_phone_countrycode").length > 0 && $(".za_confirm_country_code").length > 0) {
                        $(".confirm_phone_countrycode").val(
                            "+" + $(".za_confirm_country_code option:selected").attr("dialling_code")
                        );
                    }
                    if ($(".confirm_phone_countrycode").length > 0 && $(".za_confirm_country_code").length > 0) {
                        $(".confirm_ccodediv").html(
                            "+" + $(".za_confirm_country_code option:selected").attr("dialling_code")
                        );
                    }
                }
            }
        }, 100);
        return this._data;
    });
function setcountryCode() {
    if (typeof customvar.scountrys != "undefined") {
        $(".za_country_code, #confirm_country_code").val(customvar.scountrys);
        changeCountrycode();
    }
}
function changeCountrycode(e) {
    if ($(".ccodediv").length > 0) {
        $(".phone_countrycode").val("+" + $(".za_country_code option:selected").attr("dialling_code"));
        $(".ccodediv").html("+" + $(".za_country_code option:selected").attr("dialling_code"));
    }
    if ($(".confirm_ccodediv").length > 0) {
        $(".confirm_phone_countrycode").val("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"));
        $(".confirm_ccodediv").html("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"));
    }
    if (customvar.whatsAppFormatBrazil) {
        customvar.phoneValidationBrazil();
    }
}
function passwordset() {
    var e = 16,
        t = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var a = "";
    for (var o = 0; o < e; o++) {
        var n = Math.floor(Math.random() * t.length);
        a += t.charAt(n);
    }
    $("#password, #testpw").val(a);
    $(".t-text").html(Drupal.t("Copy"));
    $("#password").parent().addClass("added-placeholder");
    $(".pgen.t-tip").addClass("pGen-active");
    $(".pcopy").removeClass("zhide-common");
    $(".pcopy").show();
    $(".gentext").removeClass("zhide-common");
    $(".gentext").css("display", "inline-block");
    var o = document.getElementById("password");
    o.type = "text";
    if ($(".zpassword-show.active").length < 1) {
        var i;
        clearInterval(i);
        i = setTimeout(function () {
            o.type = "password";
        }, 2e3);
    }
    window.pagesense = window.pagesense || [];
    window.pagesense.push(["trackEvent", "genpass"]);
}
function copyToClipboard() {
    $(".pcopy").show();
    var e = $("#password").val();
    var t = document.createElement("textarea");
    t.value = e;
    document.body.appendChild(t);
    t.select();
    $(".t-text").html(Drupal.t("Copied"));
    try {
        var a = document.execCommand("copy");
        var o = a ? "successful" : "unsuccessful";
    } catch (e) {}
    document.body.removeChild(t);
    var n = document.getElementById("password");
    n.select();
    $(".pcopy.t-tip").focus();
}
customvar.showdcode = function () {
    if ($("#emailmoile").length > 0) {
        if (/^\d+$/.test($("#emailmoile").val())) {
            if ($("#emailmoile").val().length > 2) {
                $("#emailmoile").siblings(".za-country_code-container").css("display", "block");
                $(".za-emailormobile-container").addClass("dialactive");
            } else {
                $("#emailmoile").siblings(".za-country_code-container").css("display", "none");
                $(".za-emailormobile-container").removeClass("dialactive");
            }
        } else {
            $("#emailmoile").siblings(".za-country_code-container").css("display", "none");
            $(".za-emailormobile-container").removeClass("dialactive");
        }
        if ($("#emailmoile").val().indexOf("@") > -1) {
            $("#emailmoile").siblings(".za-country_code-container").css("display", "none");
            $(".za-emailormobile-container").removeClass("dialactive");
        }
    }
};
$(document).on("keyup", "#emailmoile", function () {
    customvar.showdcode();
});
$(document).on("keyup", '.za-password-container [name="password"]', function (e) {
    $(".password-strengths").removeClass("zhide-common");
    var t = $(".za-password-container .strengths-bar span"),
        a = $(".za-password-container .weak-pass"),
        o = 8,
        n = $(".za-password-container .strong-pass"),
        i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225, 91];
    if (!i.includes(e.keyCode)) {
        if (!e.target.value.length) {
            t.css("width", "0%");
            a.css("display", "inline-block");
            n.css("display", "none");
        }
        if (e.target.value.length > 0 && e.target.value.length < o) {
            t.css("width", Math.round((e.target.value.length * 50) / o) + "%");
            t.removeClass("strong-bg");
            t.addClass("weak-bg");
            a.css("display", "inline-block");
            n.css("display", "none");
        }
        if (e.target.value.length >= o) {
            var r = 1;
            /[A-Z]/.test(e.target.value) && r++,
                /[a-z]/.test(e.target.value) && r++,
                /\d/.test(e.target.value) && r++,
                /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e.target.value) && r++;
            t.css("width", r * 8 + 60 + "%");
            t.removeClass("weak-bg");
            t.addClass("strong-bg");
            n.css("display", "inline-block");
            a.css("display", "none");
        }
    }
});
$(document).on("keyup", ".signup-box .za-rmobile-container #rmobile", function () {
    var e = $(this).val();
    if ($('.signup-box input[name="x_phone"]').length > 0) {
        $('.signup-box input[name="x_phone"]').val(e);
    }
    if ($('.signup-box input[name="x_contactnumber"]').length > 0) {
        $('.signup-box input[name="x_contactnumber"]').val(e);
    }
    if ($("#mobile").length > 0) {
        $("#mobile").val(e);
    }
    if ($(".signup-box .rmobilevalue").length > 0) {
        $(".signup-box .rmobilevalue").val(e);
    }
});
$(document).on("keyup", ".signup-box .za-remobile-container #confirmMobile", function () {
    if (typeof getValidMobileNumber === "function" && $("#confirmMobile").length) {
        getValidMobileNumber($("#confirmMobile"), CountryCode);
    }
});
$(document).on("keyup", ".signup-box .mobile-container #mobile", function () {
    var e = $(this).val();
    if ($('input[name="x_phone"]').length > 0) {
        $('input[name="x_phone"]').val(e);
    }
    if ($('input[name="x_contactnumber"]').length > 0) {
        $('input[name="x_contactnumber"]').val(e);
    }
});
$(document).on("click", ".signup-box .zpassword-show", function () {
    if ($(this).hasClass("active")) {
        $(".signup-box #password").attr("type", "password");
        $(this).removeClass("active");
        $("#password_status").text(Drupal.t("password hide"));
    } else {
        $(".signup-box #password").attr("type", "text");
        $(this).addClass("active");
        $("#password_status").text(Drupal.t("password show"));
    }
});
function gobacktosignuptemp() {
    if ($("#otpfield").length > 0) {
        $("#otpfield").val("");
    }
    $('.signupotpcontainer [tabindex="0"]').each(function (e, t) {
        $(t).attr("tabindex", "1");
    });
    $(".signupcontainer").show();
    $(".signupotpcontainer").hide();
    if (customvar.signupObj.btntext) {
        $("#signupbtn").val(customvar.signupObj.btntext);
    } else {
        $("#signupbtn").val(customvar.signupforFree);
    }
    $("#signupbtn").removeClass("disabled-z-signup");
    $("#signupbtn").removeClass("zwc_creating_account");
    $("body").removeClass("zw_signup_otp_visible");
    if ($(".signup-box").parent().hasClass("form")) {
        $(".signup-box").parent().removeAttr("submitted");
    }
}
function zwc_gobacktosignup() {
    if (typeof gobacktosignup == "function") {
        gobacktosignup();
    }
    gobacktosignuptemp();
}
function dispportalName() {
    if ($(".p_name").length > 0) {
        var e = $(".p_name").val();
        e = e.replace(/[^A-Za-z0-9 \s]/gi, "").replace(/[_\s]/g, "");
        e = e.toLowerCase();
        if ($("#r_account").length > 0) {
            $("#r_account").val(e);
        }
        try {
            $(".portal-input").val(e);
        } catch (e) {}
        try {
            $(".portal-input").html(e);
        } catch (e) {}
    }
}
$(document).keyup(function (e) {
    if (e.keyCode == 13) {
        if ($(".czone-dc form .signupotpcontainer input").is(":focus")) {
            $(".za-submitbtn-otp .signupbtn").trigger("click");
        }
    }
});
$(document).on("blur", ".signup-box input", function () {
    var e = $(this);
    setTimeout(function () {
        if (e.parent().hasClass("field-error") || e.val() == "") {
            e.siblings(".placetxt").removeClass("zcr-msg-active").addClass("zcr-msg-grey");
        } else {
            e.siblings(".placetxt").removeClass("zcr-msg-grey").addClass("zcr-msg-active");
        }
        if (window.location.host == _preZ) {
            if (e.val() == "" || e.parent().hasClass("field-error")) {
                e.removeClass("czone-field-valid").addClass("czone-field-error");
            } else {
                e.removeClass("czone-field-error").addClass("czone-field-valid");
            }
        }
    }, 1e3);
});
$(document).on("change", "#newsletter", function () {
    if ($(".icon-medium").hasClass("checked")) {
        $("#signupform [name='newsletter']").attr("checked", "true");
        customvar.singaporeConsentchecked = true;
    } else {
        $("#signupform [name='newsletter']").removeAttr("checked");
        customvar.singaporeConsentchecked = false;
    }
});
$(document).on("change", ".globalcountrycode-signup", function () {
    if (customvar.showchangecountry == "false") {
        if ($(".signup-box .globalcountrycode-signup").length > 0) {
            $(".signup-box .globalcountrycode-signup").val(CountryCode);
        }
    }
    onlycom = false;
    if (
        (customvar.productName == "crm" ||
            customvar.productName == "bigin" ||
            customvar.productName == "zohobigin" ||
            customvar.productName == "canvas" ||
            customvar.productName == "desk") &&
        currentUrlLang != "jp"
    ) {
    } else {
        var e = $(this).val();
        customvar.scountrys = e;
        var t = customvar.dcObj;
        dcdomainOne = "com";
        for (var a in t) {
            if (typeof t[a].countries != "undefind") {
                if (t[a].countries.indexOf(e) > -1) {
                    if (t[a].notavailable.indexOf(customvar.productName) > -1) {
                        dcdomainOne = "com";
                        onlycom = true;
                    } else {
                        dcdomainOne = t[a].domain;
                    }
                }
            }
        }
        customvar.zDomainHandling();
        addsignup(customvar.signupObj);
        if ($(".portName").length > 0) {
            $(".portName").html(customvar.dcadded($(".portName").html()));
        }
        $(".zcountry-info").addClass("zhide-common");
        $(".za-country-container").addClass("zshow");
    }
});
if (customvar.showchangecountry == "false") {
}
customvar.addRefValue = function () {
    if ($("#ref_value").length < 1) {
        if ($(".signup-box form").length > 0) {
            var e = customvar.czmr();
            var t = _lhref;
            if (customvar.czmr().indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                e = customvar.czmr().split(".html")[0] + ".html";
            }
            if (t.indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                t = customvar.absurl;
            }
            t = t.length > 300 ? t.substring(0, 300) : t;
            $(".signup-box form").append(
                '<input id="ref_value" name="ref_value" type="hidden" value="' +
                    customvar.czms() +
                    "," +
                    e +
                    "," +
                    customvar.cuid() +
                    "," +
                    customvar.mydevice() +
                    "," +
                    t +
                    '">'
            );
        }
    }
};
customvar.phonefieldremove = ["sites"];
function addsignup(e) {
    if (customvar.isSanctioned) return;
    customvar.signupObj = e;
    customvar.signupflow = {
        customelement: typeof customvar.signupObj.customelement != "undefined" ? customvar.signupObj.customelement : "",
        customelementone:
            typeof customvar.signupObj.customelementone != "undefined" ? customvar.signupObj.customelementone : "",
        customelementtwo:
            typeof customvar.signupObj.customelementtwo != "undefined" ? customvar.signupObj.customelementtwo : "",
        username:
            '<div class="username-container sgfrm" id="usernmediv"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            Drupal.t("Email Address") +
            '</span><input class="dummyclass" id="usernameid" name="username" placeholder="' +
            Drupal.t("Email Address") +
            '" aria-label="' +
            (customvar.absurl.includes("/mail/msignup.html") ? Drupal.t("Username") : Drupal.t("Email Address")) +
            '" type="text"><label class="defdomlabel" id="defdomdiv">@' +
            customvar.productName +
            "." +
            Zdomain +
            "." +
            dcdomainOne +
            "</label></div></div>",
        name:
            '<div class="sgfrm za-name-container"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            Drupal.t("Name") +
            '</span><input aria-label="' +
            Drupal.t("Name") +
            '" class="dummyclass" id="name" name="firstname" placeholder="' +
            Drupal.t("Name") +
            '" type="text"></div></div>',
        fullname:
            '<div class="sgfrm za-name-container"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            customvar.fullName +
            '</span><input aria-label="' +
            customvar.fullName +
            '" class="dummyclass" id="fullname" name="firstname" placeholder="' +
            customvar.fullName +
            '" type="text"></div></div>',
        email:
            '<div class="za-email-container sgfrm"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            customvar.email +
            '</span><input aria-label="' +
            customvar.email +
            '" class="dummyclass" id="email" name="email" placeholder="' +
            customvar.email +
            '" type="text"></div></div>',
        password:
            '<div class="za-password-container sgfrm"><div class="wrap-elm"><div id="password_status" aria-live="polite" style="position:absolute; left:0px; width:1px; height:1px; overflow:hidden;"></div><span class="placeholder" aria-hidden="true">' +
            customvar.password +
            '</span><input aria-label="' +
            customvar.password +
            '" class="dummyclass" id="password" name="password" placeholder="' +
            customvar.password +
            '" type="password"><button type="button" class="zpassword-show" aria-label="' +
            Drupal.t("Show and hide password") +
            '"></button>' +
            (typeof customvar.signupObj.password != "undefined"
                ? typeof customvar.signupObj.password.showpassword != "undefined"
                    ? customvar.signupObj.password.showpassword == true ||
                      customvar.signupObj.password.showpassword == "yes"
                        ? '<span class="showhide"></span>'
                        : ""
                    : ""
                : "") +
            (typeof customvar.signupObj.password != "undefined"
                ? typeof customvar.signupObj.password.passwordstrength != "undefined"
                    ? customvar.signupObj.password.passwordstrength == true ||
                      customvar.signupObj.password.passwordstrength == "yes"
                        ? '<div class="password-strengths zhide-common"> <p> Password Strength : <b class="weak-pass">Weak</b><b class="strong-pass">Strong</b></p> <div class="strengths-bar"> <span></span> </div> </div>'
                        : ""
                    : ""
                : "") +
            "</div></div>",
        repassword:
            '<div class="za-repassword-container sgfrm"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            Drupal.t("Confirm Password") +
            '</span><input aria-label="' +
            Drupal.t("Confirm Password") +
            '" class="dummyclass" id="repassword" name="repassword" placeholder="' +
            Drupal.t("Confirm Password") +
            '" type="password">' +
            (typeof customvar.signupObj.password != "undefined"
                ? typeof customvar.signupObj.password.showpassword != "undefined"
                    ? customvar.signupObj.password.showpassword == true ||
                      customvar.signupObj.password.showpassword == "yes"
                        ? '<span class="showhide"></span>'
                        : ""
                    : ""
                : "") +
            "</div></div>",
        companyname:
            '<div class="sgfrm za-company-container"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            customvar.companyName +
            '</span><input aria-label="' +
            customvar.companyName +
            '" class="dummyclass" id="companyname" name="x_companyname" placeholder="' +
            customvar.companyName +
            '" type="text"></div></div>',
        contactnumber:
            '<div class="sgfrm mobile-container"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            customvar.phoneNumber +
            '</span><input aria-label="' +
            customvar.phoneNumber +
            '" class="dummyclass" id="mobile" type="text" placeholder="' +
            customvar.phoneNumber +
            '" name="r_address/1.phone"></div></div>',
        custominput:
            '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            (typeof customvar.signupObj.custominput != "undefined"
                ? typeof customvar.signupObj.custominput.placeholder != "undefined"
                    ? customvar.signupObj.custominput.placeholder
                    : ""
                : "") +
            '</span><input id="custominput" class="dummyclass" type="' +
            (typeof customvar.signupObj.custominput != "undefined"
                ? typeof customvar.signupObj.custominput.type != "undefined"
                    ? customvar.signupObj.custominput.type
                    : "text"
                : "text") +
            '" placeholder="' +
            (typeof customvar.signupObj.custominput != "undefined"
                ? typeof customvar.signupObj.custominput.placeholder != "undefined"
                    ? customvar.signupObj.custominput.placeholder
                    : ""
                : "") +
            '" aria-label="' +
            (typeof customvar.signupObj.custominput != "undefined"
                ? typeof customvar.signupObj.custominput.placeholder != "undefined"
                    ? customvar.signupObj.custominput.placeholder
                    : ""
                : "") +
            '" name="' +
            (typeof customvar.signupObj.custominput != "undefined"
                ? typeof customvar.signupObj.custominput.name != "undefined"
                    ? customvar.signupObj.custominput.name
                    : ""
                : "") +
            '"></div></div>',
        custominputone:
            '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            (typeof customvar.signupObj.custominputone != "undefined"
                ? typeof customvar.signupObj.custominputone.placeholder != "undefined"
                    ? customvar.signupObj.custominputone.placeholder
                    : ""
                : "") +
            '</span><input id="custominputone" class="dummyclass" type="' +
            (typeof customvar.signupObj.custominputone != "undefined"
                ? typeof customvar.signupObj.custominputone.type != "undefined"
                    ? customvar.signupObj.custominputone.type
                    : "text"
                : "text") +
            '" placeholder="' +
            (typeof customvar.signupObj.custominputone != "undefined"
                ? typeof customvar.signupObj.custominputone.placeholder != "undefined"
                    ? customvar.signupObj.custominputone.placeholder
                    : ""
                : "") +
            '" aria-label ="' +
            (typeof customvar.signupObj.custominputone != "undefined"
                ? typeof customvar.signupObj.custominputone.placeholder != "undefined"
                    ? customvar.signupObj.custominputone.placeholder
                    : ""
                : "") +
            '" name="' +
            (typeof customvar.signupObj.custominputone != "undefined"
                ? typeof customvar.signupObj.custominputone.name != "undefined"
                    ? customvar.signupObj.custominputone.name
                    : ""
                : "") +
            '"></div></div>',
        couponinput:
            '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            (typeof customvar.signupObj.couponinput != "undefined"
                ? typeof customvar.signupObj.couponinput.placeholder != "undefined"
                    ? customvar.signupObj.couponinput.placeholder
                    : customvar.couponinputplaceholder
                : "") +
            '</span><input id="coupon" class="dummyclass" type="' +
            (typeof customvar.signupObj.couponinput != "undefined"
                ? typeof customvar.signupObj.couponinput.type != "undefined"
                    ? customvar.signupObj.couponinput.type
                    : "text"
                : "text") +
            '" placeholder="' +
            (typeof customvar.signupObj.couponinput != "undefined"
                ? typeof customvar.signupObj.couponinput.placeholder != "undefined"
                    ? customvar.signupObj.couponinput.placeholder
                    : customvar.couponinputplaceholder
                : "") +
            '" aria-label="' +
            (typeof customvar.signupObj.couponinput != "undefined"
                ? typeof customvar.signupObj.couponinput.placeholder != "undefined"
                    ? customvar.signupObj.couponinput.placeholder
                    : customvar.couponinputplaceholder
                : "") +
            '" name="' +
            (typeof customvar.signupObj.couponinput != "undefined"
                ? typeof customvar.signupObj.couponinput.name != "undefined"
                    ? customvar.signupObj.couponinput.name
                    : "x_r_coupon"
                : "") +
            '"></div></div>',
        custominputtwo:
            '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            (typeof customvar.signupObj.custominputtwo != "undefined"
                ? typeof customvar.signupObj.custominputtwo.placeholder != "undefined"
                    ? customvar.signupObj.custominputtwo.placeholder
                    : ""
                : "") +
            '</span><input id="custominputtwo" class="dummyclass" type="' +
            (typeof customvar.signupObj.custominputtwo != "undefined"
                ? typeof customvar.signupObj.custominputtwo.type != "undefined"
                    ? customvar.signupObj.custominputtwo.type
                    : "text"
                : "text") +
            '" placeholder="' +
            (typeof customvar.signupObj.custominputtwo != "undefined"
                ? typeof customvar.signupObj.custominputtwo.placeholder != "undefined"
                    ? customvar.signupObj.custominputtwo.placeholder
                    : ""
                : "") +
            '" aria-label="' +
            (typeof customvar.signupObj.custominputtwo != "undefined"
                ? typeof customvar.signupObj.custominputtwo.placeholder != "undefined"
                    ? customvar.signupObj.custominputtwo.placeholder
                    : ""
                : "") +
            '" name="' +
            (typeof customvar.signupObj.custominputtwo != "undefined"
                ? typeof customvar.signupObj.custominputtwo.name != "undefined"
                    ? customvar.signupObj.custominputtwo.name
                    : ""
                : "") +
            '"></div></div>',
        custominputthree:
            '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            (typeof customvar.signupObj.custominputthree != "undefined"
                ? typeof customvar.signupObj.custominputthree.placeholder != "undefined"
                    ? customvar.signupObj.custominputthree.placeholder
                    : ""
                : "") +
            '</span><input id="custominputthree" class="dummyclass" type="' +
            (typeof customvar.signupObj.custominputthree != "undefined"
                ? typeof customvar.signupObj.custominputthree.type != "undefined"
                    ? customvar.signupObj.custominputthree.type
                    : "text"
                : "text") +
            '" placeholder="' +
            (typeof customvar.signupObj.custominputthree != "undefined"
                ? typeof customvar.signupObj.custominputthree.placeholder != "undefined"
                    ? customvar.signupObj.custominputthree.placeholder
                    : ""
                : "") +
            '" aria-label="' +
            (typeof customvar.signupObj.custominputthree != "undefined"
                ? typeof customvar.signupObj.custominputthree.placeholder != "undefined"
                    ? customvar.signupObj.custominputthree.placeholder
                    : ""
                : "") +
            '" name="' +
            (typeof customvar.signupObj.custominputthree != "undefined"
                ? typeof customvar.signupObj.custominputthree.name != "undefined"
                    ? customvar.signupObj.custominputthree.name
                    : ""
                : "") +
            '"></div></div>',
        orgname:
            '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            Drupal.t("Organization Name") +
            '</span><input class="dummyclass" id="orgname" name="x_orgname" placeholder=' +
            Drupal.t("Organization Name") +
            ' aria-label="' +
            Drupal.t("Organization Name") +
            '" type="text"></div></div>',
        dialcodecontactnumber:
            '<div class="mobile-container sgfrm mobile-ccode"><div class="wrap-elm"><div align="left" class="za-country_code-container"> <select  class="za_country_code" id="country_code" onchange="changeCountrycode(this)" name="country_code">' +
            customvar.nscountrypop("dial") +
            '</select><input id="dialcodecontactnumber" class="phone_countrycode" name="x_phone_countrycode" type="hidden" value=""><div class="ccodelabel" id="countryCodeDiv"><div class="ccodediv" id="ccodediv"></div></div><span class="dialphonenum placeholder" aria-hidden="true">' +
            (typeof customvar.signupObj.dialcodecontactnumber != "undefined"
                ? typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined"
                    ? customvar.signupObj.dialcodecontactnumber.placeholder
                    : customvar.phoneNumber
                : customvar.phoneNumber) +
            '</span><input class="dummyclass dialphone" id="mobile" name="r_address/1.phone" placeholder="' +
            (typeof customvar.signupObj.dialcodecontactnumber != "undefined"
                ? typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined"
                    ? customvar.signupObj.dialcodecontactnumber.placeholder
                    : customvar.phoneNumber
                : customvar.phoneNumber) +
            '" aria-label="' +
            (typeof customvar.signupObj.dialcodecontactnumber != "undefined"
                ? typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined"
                    ? customvar.signupObj.dialcodecontactnumber.placeholder
                    : customvar.phoneNumber
                : customvar.phoneNumber) +
            '" spellcheck="false" type="text" /> </div></div></div>',
        redialcodecontactnumber:
            '<div class="za-remobile-container sgfrm mobile-ccode"><div class="wrap-elm"><div align="left" class="za-ccountry_code-container"> <select class="za_confirm_country_code" id="confirm_country_code" onchange="changeCountrycode(this)" name="confirm_country_code">' +
            customvar.nscountrypop("dial") +
            '</select><input id="redialcodecontactnumber" class="confirm_phone_countrycode" name="x_confirm_phone_countrycode" type="hidden" value=""><div class="ccodelabel" id="countryconfirmCodeDiv"><div class="confirm_ccodediv" id="ccodediv"></div></div><span class="placeholder dialphonenum" aria-hidden="true">' +
            (typeof customvar.signupObj.redialcodecontactnumber != "undefined"
                ? typeof customvar.signupObj.redialcodecontactnumber.placeholder != "undefined"
                    ? customvar.signupObj.redialcodecontactnumber.placeholder
                    : customvar.rephoneNumber
                : customvar.rephoneNumber) +
            '</span><input class="dummyclass dialphone" id="confirmMobile" name="confirmMobile" placeholder="' +
            (typeof customvar.signupObj.redialcodecontactnumber != "undefined"
                ? typeof customvar.signupObj.redialcodecontactnumber.placeholder != "undefined"
                    ? customvar.signupObj.redialcodecontactnumber.placeholder
                    : customvar.rephoneNumber
                : customvar.rephoneNumber) +
            '" aria-label="' +
            (typeof customvar.signupObj.redialcodecontactnumber != "undefined"
                ? typeof customvar.signupObj.redialcodecontactnumber.placeholder != "undefined"
                    ? customvar.signupObj.redialcodecontactnumber.placeholder
                    : customvar.rephoneNumber
                : customvar.rephoneNumber) +
            '" spellcheck="false" type="text" /> </div></div></div>',
        emailormobile:
            '<div class="sgfrm za-email-container" style="display:none"><span class="placeholder" aria-hidden="true">' +
            customvar.email +
            '</span><input type="text" id="email" name="email" placeholder="' +
            customvar.email +
            '" aria-label="' +
            customvar.email +
            '"></div> <div class="sgfrm za-emailormobile-container mobile-ccode"><div class="wrap-elm"><div align="left" class="za-country_code-container" style="display:none"><select data-zcqa="sgnp-mob-countryCode" class="za_country_code" id="country_code" name="country_code" aria-label="Enter your country code" onchange="changeCountrycode(this)">' +
            customvar.nscountrypop("dial") +
            '</select><div class="ccodelabel" aria-hidden="true" id="countryCodeDiv"><div class="ccodediv" id="ccodediv"></div></div></div><span class="placeholder" aria-hidden="true">' +
            Drupal.t("Email") +
            " / " +
            Drupal.t("Phone") +
            '</span><input type="text" name="emailormobile" class="dummyclass" id="emailmoile" axlength="100" placeholder="' +
            Drupal.t("Email") +
            " / " +
            Drupal.t("Phone") +
            '" aria-label="' +
            Drupal.t("Email") +
            " / " +
            Drupal.t("Phone") +
            '"> </div></div> <div class="sgfrm za-mobile-container" style="display:none"> <div> <div class="za-country_code-container"> <div> <div class="ccdivtext"><span class="ccdiv"></span></div> <select class="form-input1 countryCnt1 za-country-select-code" name="country_code" id="country-code"></select> </div> </div> <input type="text" name="mobile" id="phonenumber"> <label id="mobile_label">Phone Number</label> </div> </div>',
        rmobile:
            '<div class="za-rmobile-container sgfrm rmobiledisabled"><div class="wrap-elm"><div align="left" class="za-country_code-container "> <select class="za_country_code" id="country_code_rmobile" onchange="changeCountrycode()" name="country_code">' +
            customvar.nscountrypop("dial") +
            '</select><input class="phone_countrycode" name="x_phone_countrycode" type="hidden" value="+91"><div class="ccodelabel" id="countryCodeDiv"><div class="ccodediv" id="ccodediv">+91</div></div><span class="dialphonenum placeholder" aria-hidden="true">' +
            (typeof customvar.signupObj.rmobile != "undefined"
                ? typeof customvar.signupObj.rmobile.placeholder != "undefined"
                    ? customvar.signupObj.rmobile.placeholder
                    : customvar.phoneNumber
                : customvar.phoneNumber) +
            '</span><input id="rmobile" class="dialphone" name="rmobile" placeholder="' +
            (typeof customvar.signupObj.dialcodecontactnumber != "undefined"
                ? typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined"
                    ? customvar.signupObj.dialcodecontactnumber.placeholder
                    : customvar.phoneNumber
                : customvar.phoneNumber) +
            '" aria-label="' +
            (typeof customvar.signupObj.dialcodecontactnumber != "undefined"
                ? typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined"
                    ? customvar.signupObj.dialcodecontactnumber.placeholder
                    : customvar.phoneNumber
                : customvar.phoneNumber) +
            '" spellcheck="false" type="text" /> </div></div></div>' +
            (customvar.phonefieldremove.includes(customvar.productName)
                ? ""
                : '<input type="hidden" name="x_phone" value="">'),
        portalcompanyname:
            '<div class="sgfrm za-company-container"> <div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            customvar.companyName +
            '</span><input type="text" id="portalcompanyname" placeholder="' +
            customvar.companyName +
            '" aria-label="' +
            customvar.companyName +
            '" onkeyup="dispportalName()"  class="sgname sgnusrname p_name dummyclass" name="r_account.account_name" onblur="$(\'#x_portal\').trigger(\'blur\');"> </div></div>',
        portal:
            '<div class="sgfrm za-company-container"> <div class="wrap-elm"><div class="za-company-box"><span class="portal-id" id="sPortalInpId">' +
            "https://" +
            customvar.productName +
            "." +
            Zdomain +
            "." +
            dcdomainOne +
            '/portal/</span><input placeholder="' +
            customvar.portalName +
            '" class="portal-input dummyclass" id="portal" name="x_portal" aria-label="' +
            customvar.portalName +
            '" type="text"></div> </div></div>',
        companywithportal:
            '<div class="sgfrm za-company-container"><div class="wrap-elm"><span class="placeholder" aria-hidden="true">' +
            customvar.companyName +
            '</span><input id="r_account" name="r_account.account_name" type="hidden" value=""><input class="sgnemail p_name dummyclass" id="companywithportal" name="x_portal.portal_name" onkeyup="dispportalName()" placeholder="' +
            customvar.companyName +
            '" aria-label="' +
            customvar.companyName +
            '" type="text"><div class="portalName"><span class="portalink"><span class="portName">' +
            (typeof customvar.signupObj.portaltext != "undefined"
                ? customvar.signupObj.portaltext
                : "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne + "/") +
            '</span><span id="portal-input" class="portal-input"></div></div></div>',
        customselect:
            '<div class="sgfrm za-select-container"><div class="wrap-elm"><select id="customselect" class="dummyclass">' +
            (typeof customvar.signupObj.customselect != "undefined" ? customvar.signupObj.customselect.options : "") +
            "</select></div></div>",
        customselectone:
            '<div class="sgfrm za-select-container"><div class="wrap-elm"><select id="customselect" class="dummyclass">' +
            (typeof customvar.signupObj.customselectone != "undefined"
                ? customvar.signupObj.customselectone.options
                : "") +
            "</select></div></div>",
    };
    customvar.singleFieldSingupFlow = {
        email:
            '<div class="za-email-container sgfrm zwc_sfield"><div class="wrap-elm col"><span class="placeholder" aria-hidden="true">' +
            customvar.email +
            '</span><input class="dummyclass" id="email" name="email" placeholder="' +
            customvar.email +
            '" type="text"></div></div>',
    };
    customvar.getsfield();
    customvar.nOfSignup =
        typeof customvar.signupObj.nunmberofsignup != "undefined" ? customvar.signupObj.nunmberofsignup : 0;
    $("#czone-home, #czone-signup, #czone-wallet").addClass("czone-dc");
    if ($("#czone-wallet").length > 0) {
        $("body").addClass("czone-iswallet-page");
    }
    $(".czone-dc").html("");
    if (window.location.host.includes(_lz) && customvar.productName == "learn" && _lhref.includes("/signup.html")) {
        $(".czone-dc").append(
            '<form action="//accounts.zoho.com/accounts/register.ac" autocomplete="off" class="banner-signup" name="signupform" id="signupform" method="post" novalidate><input type="hidden" class="langinput" name="language" value="' +
                (currentUrlLang == "jp" ? "ja" : currentUrlLang == "zh-hant" ? "zh_tw" : currentUrlLang) +
                '"><div class="signupcontainer"></div></form>'
        );
    } else {
        $(".czone-dc").append(
            '<form action="//accounts.zoho.com/accounts/register.ac" autocomplete="off" class="banner-signup" name="signupform" id="signupform" method="post" novalidate><input type="hidden" class="langinput" name="language" value="' +
                (currentUrlLang == "jp" ? "ja" : currentUrlLang == "zh-hant" ? "zh_tw" : currentUrlLang) +
                '"><div class="signupcontainer"></div>' +
                customvar.otpEle +
                "</form>"
        );
    }
    for (var t in customvar.signupObj) {
        var a = t.replace(/ +/g, "").toLowerCase();
        var o =
            typeof customvar.signupObj[t].required != "undefined"
                ? customvar.signupObj[t].required == true
                    ? true
                    : false
                : true;
        if (["customelement", "customelementone", "customelementtwo"].includes(t) && customvar.signupObj[t] == "") {
            o = false;
        }
        if (typeof customvar.signupflow[a] != "undefined" && o) {
            if (a == "couponinput") {
                if (customvar.signupObj[t]["couponcode"]) {
                    customvar.couponCode = customvar.signupObj[t]["couponcode"];
                }
                if (customvar.signupObj[t]["redirecturl"]) {
                    customvar.dataredirectUrl = customvar.signupObj[t]["redirecturl"];
                }
                if (customvar.signupObj[t]["couponterms"]) {
                    customvar.zwProTerms = customvar.signupObj[t]["couponterms"];
                }
            }
            if (customvar?.signupObj?.singlefield && customvar?.singleFieldSingupFlow[a] && !customvar.OTP_based()) {
                $(".signupcontainer").append(customvar.singleFieldSingupFlow[a]);
            } else {
                $(".signupcontainer").append(customvar.signupflow[a]);
            }
            if (typeof customvar.signupObj[t].label != "undefined") {
                if ($(".dummyclass").length > 0) {
                    $(".dummyclass").before(customvar.signupObj[t].label);
                }
            }
            if (global_getUrlParam("ismobilesignup") != "") {
                if ($(".dummyclass").length > 0) {
                    $(".dummyclass").attr("autocapitalize", "none");
                }
            }
            for (var n in customvar.signupObj[t]) {
                var r = n.replace(/ +/g, "").toLowerCase();
                if (r == "nameattr") {
                    $(".dummyclass").attr("name", customvar.signupObj[t][n]);
                    $(".dummyclass").addClass(customvar.signupObj[t][n]);
                    if (customvar.signupObj[t][n] == "mobile" && customvar.productName == "mail") {
                        $(".dummyclass").parents().find(".mobile-container").addClass("za-mobile-container");
                        $(".dummyclass").parents().find(".za-mobile-container").removeClass("mobile-container");
                    }
                } else if (r == "placeholder") {
                    $(".dummyclass").siblings(".placeholder").html(customvar.signupObj[t][n]);
                    $(".dummyclass").attr("placeholder", customvar.signupObj[t][n]);
                } else if (r == "id") {
                    $(".dummyclass").attr("id", customvar.signupObj[t][n]);
                } else if (r == "class") {
                    $(".dummyclass").addClass(customvar.signupObj[t][n]);
                } else if (r == "type") {
                    $(".dummyclass").attr("type", customvar.signupObj[t][n]);
                } else if (r == "mandatory" || r == "mandatory-dc" || r == "mandatory-country") {
                    if (r == "mandatory-dc") {
                        if (customvar.signupObj[t][n].split(",").indexOf(dcdomainOne) > -1) {
                            $(".dummyclass").attr("mandate", true);
                        } else {
                            $(".dummyclass").attr("mandate", false);
                        }
                    } else if (r == "mandatory-country") {
                        if (customvar.signupObj[t][n].split(",").indexOf(customvar.scountrys.toLowerCase()) > -1) {
                            $(".dummyclass").attr("mandate", true);
                        } else {
                            $(".dummyclass").attr("mandate", false);
                        }
                    } else {
                        $(".dummyclass").attr("mandate", customvar.signupObj[t][n]);
                    }
                } else if (r == "validatetext") {
                    $(".dummyclass").after(
                        '<span class="placetxt zcr-msg-grey">' + customvar.signupObj[t][n] + "</span>"
                    );
                }
                if (r == "asterix") {
                    $(".dummyclass").attr("czone-asterix", customvar.signupObj[t][n]);
                }
            }
            $("input, select").removeClass("dummyclass");
        }
    }
    if (typeof $(".czone-dc").attr("id") != "undefined") {
        if ($(".czone-dc").attr("id") == "czone-signup") {
            $(".czone-dc input").not(".langinput").attr("placeholder", "");
        } else {
            $(".czone-dc .placeholder").remove();
        }
    }
    if (customvar?.signupObj?.singlefield && $("#czone-home").length > 0 && !customvar.OTP_based()) {
        $(".signup-box").addClass("zsingle-field-form");
    }
    customvar.signupcommonelm =
        '<div class="za-captcha-container zs-ml34 sgfrm" style="display:none;"><input class="zs-txtfldnew zs-txtfldwidth" maxlength="15" name="captcha" placeholder="Enter the word seen in the below image" type="text" disabled="disabled"><div><img alt="Captcha" class="za-captcha" src="https://accounts.zoho.com/accounts/images/spacer.gif"><span class="za-refresh-captcha" onclick="changeHip(document.signupform)"></span></div></div><div class="sgfrm za-country-container za-country-container-arrow"> <span class="placecountryregion">' +
        Drupal.t("Country/Region") +
        '</span><select class="form-input countryCnt za-country-select globalcountrycode-signup" disabled="disabled" autocomplete="off" name="country" id="country" placeholder="Select Country" aria-invalid="false">' +
        customvar.nscountrypop() +
        '</select> </div><div class="sgnbtnmn"><div class="za-newsletter-container snews-letter" style="display: block;"><label for="newsletter" class="news-signup sign_agree"> <input class="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onclick="toggleNewsletterField()" aria-label="' +
        Drupal.t("Yes, I would like to receive marketing communication regarding") +
        " " +
        Drupal.t("Zoho&rsquo;s") +
        " " +
        Drupal.t("products, services, and events from Zoho and its regional partners.") +
        '"> <span class="icon-medium" id="signup-newsletter" aria-hidden="true"></span> <span>' +
        _txtIwould +
        "</span> </label></div>";
    customvar.signupcommonelm +=
        typeof customvar.signupObj.additionalterms != "undefined"
            ? '<div class="terms-accept sgfrm"><label for="terms-check"><input class="validatefield" id="terms-check" mandate=' +
              (typeof customvar.signupObj.additionalterms.mandatory != "undefined"
                  ? customvar.signupObj.additionalterms.mandatory
                  : true) +
              ' name="' +
              (typeof customvar.signupObj.additionalterms.nameAttr != "undefined"
                  ? customvar.signupObj.additionalterms.nameAttr
                  : "x_I_agree_to_the") +
              '" type="checkbox" value="false"><span class="tcheck">&nbsp;</span>' +
              (typeof customvar.signupObj.additionalterms.text != "undefined"
                  ? customvar.signupObj.additionalterms.text
                  : "") +
              "</label></div>"
            : "";
    customvar.signupcommonelm +=
        '<div class="za-tos-container"><label class="sign_agree" id="btn-description" for="tos"><input class="za-tos" id="tos" name="tos" onclick="toggleTosField()"  type="checkbox" tabindex="0" value="false" aria-label="' +
        Drupal.t("I agree to the ") +
        Drupal.t("Terms of Service") +
        " " +
        Drupal.t("and") +
        " " +
        Drupal.t("Privacy Policy") +
        '"><span class="unchecked" id="signup-termservice" aria-hidden="true">&nbsp;</span>' +
        (currentUrlLang == "jp"
            ? '<a class="stermslink" name="terms" href="https://www.zoho.' +
              domainOne +
              '/jp/terms.html?src=crm-index" target="_blank" rel="noopener">ã‚µãƒ¼ãƒ“ã‚¹è¦ç´„</a>ãŠã‚ˆã³<a href="https://www.zoho.co.jp/privacy/" target="_blank" class="zrlink" rel="noopener">ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ãƒãƒªã‚·ãƒ¼</a>ã«åŒæ„ã—ã¾ã™ã€‚'
            : '<span aria-hidden="true">' +
              (typeof customvar.signupObj.globalagree != "undefined"
                  ? customvar.signupObj.globalagree
                  : Drupal.t("I agree to the ") +
                    ' </span><a name="terms" href="' +
                    ("https://www.zoho." + domainOne + langsrc + "terms.html") +
                    "" +
                    '" target="_blank" rel="noopener" tabindex="0" class="czone-signup-term">' +
                    Drupal.t("Terms of Service") +
                    '</a> <span aria-hidden="true">' +
                    Drupal.t("and") +
                    '</span> <a class="zrlink" name="privacy" tabindex="0" href="' +
                    (typeof customvar.signupObj.privacylink != "undefined"
                        ? customvar.signupObj.privacylink
                        : "https://www.zoho." + domainOne + langsrc + "privacy.html") +
                    "" +
                    (typeof customvar.signupObj.privacyparam != "undefined" ? customvar.signupObj.privacyparam : "") +
                    '" ' +
                    (customvar.productName != "notebook" ? 'target="_blank"' : "") +
                    ' rel="noopener">' +
                    Drupal.t("Privacy Policy") +
                    '</a><span aria-hidden="true">.</span>')) +
        "</label></div>";
    if ($(".signup-box").hasClass("zsingle-field-form")) {
        $(".zwc_sfield").append(
            '<div class="sgnbtn col"><input class="signupbtn disabled-z-signup" tabindex="0" onclick=" return zSignupPrevent();" id="signupbtn" type="submit" value="' +
                (typeof customvar.signupObj.btntext != "undefined"
                    ? customvar.signupObj.btntext
                    : Drupal.t("Sign Up for Free")) +
                '" style="opacity:0.3;"></div></div>'
        );
    } else {
        customvar.signupcommonelm +=
            '<div class="sgnbtn"><input class="signupbtn disabled-z-signup" tabindex="0" onclick=" return zSignupPrevent();" id="signupbtn" type="submit" value="' +
            (typeof customvar.signupObj.btntext != "undefined"
                ? customvar.signupObj.btntext
                : Drupal.t("Sign Up for Free")) +
            '" style="opacity:0.3;"></div></div>';
    }
    customvar.signupcommonelm +=
        '<div class="socl-signup" style="display:none;"> <p>' +
        (typeof customvar.signupObj.socialtxt != "undefined"
            ? customvar.signupObj.socialtxt == "true" || customvar.signupObj.socialtxt == true
                ? Drupal.t("or sign in using ")
                : ""
            : Drupal.t("or sign in using ")) +
        ' <button tabindex="0"  type="button" class="vi-apple zwc-socl-signup-btn sig-mac sicon" aria-hidden="true" onclick="FederatedSignIn.GO(\'APPLE\');zohoFedClickEvent(\'apple\');" title="apple"  style="display:none;">apple</button><button type="button" tabindex="0" class="vi-google zwc-socl-signup-btn sicon" aria-hidden="true" onclick="FederatedSignIn.GO(\'GOOGLE\');zohoFedClickEvent(\'Google\');" title="Google" style="display:none;">Google</button><button type="button" tabindex="0" class="vi-facebook zwc-socl-signup-btn sicon" aria-hidden="true" onclick="FederatedSignIn.GO(\'FACEBOOK\');zohoFedClickEvent(\'Facebook\');" title="Facebook" style="display:none;">Facebook</button><button type="button" tabindex="0" class="vi-linkedin zwc-socl-signup-btn sicon" aria-hidden="true" onclick="FederatedSignIn.GO(\'LINKEDIN\');zohoFedClickEvent(\'Linkedin\');" title="Linkedin" style="display:none;">Linkedin</button><button type="button" tabindex="0" class="vi-twitter zwc-socl-signup-btn sicon" aria-hidden="true" onclick="FederatedSignIn.GO(\'TWITTER\');zohoFedClickEvent(\'Twitter\');" title="Twitter" style="display:none;">Twitter</button><button type="button" tabindex="0" class="vi-office365 zwc-socl-signup-btn sicon" aria-hidden="true" onclick="FederatedSignIn.GO(\'AZURE\');zohoFedClickEvent(\'office365\');" title="Microsoft" style="display:none;">Office365</button><button type="button" tabindex="0" class="vi-apple zwc-socl-signup-btn sig-android sicon" aria-hidden="true" onclick="FederatedSignIn.GO(\'APPLE\');zohoFedClickEvent(\'apple\');" style="display:none;" title="apple">apple</button><button type="button" tabindex="0" class="vi-github zwc-socl-signup-btn sicon" aria-hidden="true" onclick="FederatedSignIn.GO(\'GITHUB\');zohoFedClickEvent(\'github\');" style="display:none;" title="github">github</button></p></div>';
    $(".signupcontainer").append(
        (typeof customvar.signupObj.additionalfield != "undefined" ? customvar.signupObj.additionalfield : "") +
            customvar.signupcommonelm
    );
    if (global_getUrlParam("ismobilesignup") == "") {
        $(".signupcontainer").append(
            '<input name="x_tempIpCountry" mandate="false" type="hidden" value="' +
                customvar.getGlobalCookie("zip") +
                '">'
        );
    }
    $(".zrlink").length > 0 &&
        "de" == currentUrlLang &&
        "Datenschutzrichtlinie" == $(".zrlink").html() &&
        $(".zrlink").after("<span> zu</span>");
    if (typeof customvar.signupObj.password != "undefined") {
        if (typeof customvar.signupObj.password.passwordgen != "undefined") {
            $("#password").after(
                '<button type="button" onclick="passwordset();" aria-label="' +
                    Drupal.t("Generate password") +
                    '" class="pgen t-tip"><span>' +
                    Drupal.t("Generate password") +
                    '</span></button><button onclick="copyToClipboard();" type="button" aria-label="' +
                    Drupal.t("Copy") +
                    '" class="pcopy t-tip zhide-common">' +
                    Drupal.t("Copy") +
                    '<span class="t-text">' +
                    Drupal.t("Copy") +
                    "</span></button>"
            );
            if (currentUrlLang != "" || typeof customvar.signupObj.btntext == "undefined") {
                $(".za-password-container .zpassword-show").after(
                    '<span class="gentext zhide-common">' +
                        Drupal.t("Powered by Zoho Vault's") +
                        " " +
                        '<a href="/vault/password-generator/" target="_blank">' +
                        Drupal.t("password generator.") +
                        "</a> " +
                        Drupal.t("The generated password will be copied when you click 'Sign up for free.'") +
                        "</span>"
                );
            } else {
                $(".za-password-container .zpassword-show").after(
                    '<span class="gentext zhide-common">' +
                        Drupal.t("Powered by Zoho Vault's") +
                        " " +
                        '<a href="/vault/password-generator/" target="_blank">' +
                        Drupal.t("password generator.") +
                        "</a> " +
                        Drupal.t(
                            "The generated password will be copied when you click '" +
                                customvar.signupObj?.btntext +
                                ".'"
                        ) +
                        "</span>"
                );
            }
            $(".t-tip")
                .on("mouseover", function () {
                    $(this).addClass("active");
                })
                .on("mouseout", function () {
                    $(this).removeClass("active");
                });
            $("#password").on("keyup", function () {
                if ($("#password").val() == "") {
                    $(".pcopy").hide();
                    $(".pcopy").addClass("zhide-common");
                    $(".pgen.t-tip").removeClass("pGen-active");
                }
            });
        }
    }
    if (typeof customvar.signupObj["social-icon"] != "undefined") {
        if (customvar.signupObj["social-icon"] != "") {
            $(".signup-box .socl-signup").show();
            var s = customvar.signupObj["social-icon"].split(",");
            for (i = 0; i <= s.length; i++) {
                $(".signup-box .socl-signup" + " ." + s[i]).show();
                $(".signup-box .socl-signup" + " ." + s[i]).removeAttr("aria-hidden");
                $(".signup-box .socl-signup" + " ." + s[i]).removeClass("sicon");
            }
            $(".signup-box .socl-signup button.sicon").remove();
            $(".signup-box .socl-signup button").removeAttr("tabindex");
        }
        if ($(".signup-box .socl-signup .vi-facebook").length > 0) {
            if (typeof $(".signup-box .socl-signup .vi-facebook").attr("style") != "undefined") {
                if ($(".signup-box .socl-signup .vi-facebook").attr("style").indexOf("display: inline") > -1) {
                    $(".signup-box .socl-signup .vi-facebook").hide();
                }
            }
        }
        $(".ccode-eucountries .czone-dc .vi-linkedin").hide();
    }
    $(".za-newsletter-container").css("display", "none");
    if (typeof customvar.signupformloaded != "undefined") {
        customvar.signupformloaded();
    }
    z_add_account_script_common();
    setcountryCode();
    if (customvar.counntrychangeed) {
        $(".zcountry-info").addClass("zhide-common");
        $(".za-country-container").addClass("zshow");
    }
    customvar.setsfield();
    customvar.privacypolicylink(true);
    customvar.termslink.setDefaultTerm(true);
}
customvar.signupEditionHandler = function (e, t) {
    if (e.target.id == "personal") {
        var a = $('.signupcontainer [name="signup_edition"]#personal').attr("checked");
        if (typeof customvar.personalsignup != "undefined" && !a) {
            customvar.personalsignup();
        }
    } else if (e.target.id == "business") {
        var o = $('.signupcontainer [name="signup_edition"]#business').attr("checked");
        if (typeof customvar.businesssignup != "undefined" && !o) {
            customvar.businesssignup();
        }
    } else if (e.target.id == "agencies") {
        var o = $('.signupcontainer [name="signup_edition"]#agencies').attr("checked");
        if (typeof customvar.agenciessiggnup != "undefined" && !o) {
            customvar.agenciessiggnup();
        }
    }
    if ($('.signup-box [name="signup_edition"]:checked').length) {
        $('[name="signup_edition"]:checked').focus();
    } else if ($('.signup-box .signupcontainer [name="x_accountType"]:checked').length) {
        if (typeof customvar.accounttypeoptions != "undefined") {
            customvar.accounttypeoptions(e.target.id);
        }
        $('.signup-box .signupcontainer [id="' + e.target.id + '"]:checked').focus();
    } else if ($('.signup-box .signupcontainer [name="x_accounttype"]:checked').length) {
        if (typeof customvar.accounttypeoptions != "undefined") {
            customvar.accounttypeoptions(e.target.id);
        }
        $('.signup-box .signupcontainer [id="' + e.target.id + '"]:checked').focus();
    }
    if ($(".socl-signup").length > 0) {
        $(".socl-signup p")
            .contents()
            .filter(function () {
                return this.nodeType === 3;
            })
            .wrap("<b/>");
    }
    customvar.newsletterhandle();
};
$(document).on(
    "click",
    '.signupcontainer [name="signup_edition"], .signupcontainer [name="x_accountType"], .signupcontainer [name="x_accounttype"]',
    customvar.signupEditionHandler
);
function onSignupReady() {
    var t = $("#signupbtn");
    $("#signupbtn, .za-tos-container").removeClass("disabled-z-signup");
    $(".globalcountrycode-signup, .za-tos, #signupbtn").removeAttr("disabled");
    t.css({ opacity: 1 });
    $(".signup-box").css({ opacity: "1", visibility: "visible" });
    if ($("body").hasClass("ismobileapp") && customvar.productName == "desk") {
        $(".signup-box #email").attr("type", "email");
    }
    if (global_getUrlParam("ismobilesignup") !== "") {
        $(".za-tos-container .czone-signup-term, .za-tos-container .zrlink").each(function () {
            let t = $(this).attr("href");
            if (!t.includes("mobileappsignup")) {
                let e = t.includes("?") ? "&" : "?";
                $(this).attr("href", t + e + "mobileappsignup=true");
            }
        });
    }
    customvar.addRefValue();
    if (
        window.location.host.includes(_lz) &&
        customvar.productName == "recruit" &&
        _lhref.includes("/recruit/lp/recruitment-software.html")
    ) {
        $.fn.zaSignUp.defaults.customResourcevalidation = true;
    }
    if (customvar.recruitBannedDomainsPages && customvar.recruitBannedDomainsPages.includes(window.location.pathname)) {
        $.validator.addMethod("email", function (t, e) {
            const a = customvar.recruitBannedDomains.some((e) => t.includes(e));
            if (a) {
                return Validator.setJQueryMessage(this, "Please enter a valid business email address", e);
            }
            if (!Validator.isEmail(t)) {
                return Validator.setJQueryMessage(this, "IAM.ERROR.EMAIL.INVALID", e);
            }
            return true;
        });
    }
    if (customvar?.signupObj?.email?.banneddomains) {
        $.validator.addMethod("email", function (t, e) {
            const a = customvar.signupObj.email.banneddomains.some((e) => t.includes(e));
            if (a) {
                return Validator.setJQueryMessage(
                    this,
                    customvar?.signupObj?.email?.bannederror
                        ? customvar?.signupObj?.email?.bannederror
                        : Drupal.t("Please enter a valid email address"),
                    e
                );
            }
            if (!Validator.isEmail(t)) {
                return Validator.setJQueryMessage(this, "IAM.ERROR.EMAIL.INVALID", e);
            }
            return true;
        });
    }
    $.validator.addMethod("isValidPhone", function (e, t) {
        var a = /^[0-9\s\(\)\+\-]+$/;
        const o = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
        var n = /^[\-\+]+$/;
        if (e != "") {
            if (!n.test(e)) {
                if ($(".phone_countrycode")?.val() == "+55" && customvar.whatsAppFormatBrazil) {
                    if (!o.test(e)) {
                        return false;
                    }
                } else if (!a.test(e)) {
                    return false;
                }
            }
            if ($("#mobile").hasClass("dialphone")) {
                if (e.indexOf("+") > -1) {
                    return false;
                }
            }
            if (e.length < 5) {
                return false;
            }
        }
        if (window.location.host == "www.zoho.com.cn" || window.location.href.indexOf("/zh-hans/") > -1) {
            var a = /^1[34578]\d{9}$/;
            var n = /^[\-\+]+$/;
            if (e != "") {
                if (!n.test(e)) {
                    if (!a.test(e)) {
                        this.settings.messages[t.name] =
                            "&#35831;&#36755;&#20837;&#26377;&#25928;&#30340;&#25163;&#26426;&#21495;";
                        return false;
                    }
                }
            }
        }
        return true;
    });
    $.validator.addMethod("isValidPortalName", function (e, t) {
        var a = /^[a-z0-9]+$/;
        if (!a.test(e)) {
            return false;
        } else {
            return true;
        }
    });
    $.validator.addMethod("isValidLength", function (e, t) {
        if ((e.length < 4 || e.length > 40) && customvar.productName == "social") {
            return false;
        }
        return true;
    });
    $.validator.addMethod("numbersOnly", function (e, t) {
        var a = /^[0-9]+$/;
        if (e) {
            if (!a.test(e)) {
                return false;
            } else {
                return customvar.productName == "one" && CountryCode == "CA" && e < 1 ? false : true;
            }
        } else {
            return customvar.productName == "one" && CountryCode == "CA" && e.length < 1 ? false : true;
        }
    });
    $.validator.addMethod("accountNamevalidate", function (e, t) {
        if (e.length < 6) {
            return false;
        }
        return true;
    });
    $.validator.addMethod("isValidlastname", function (e, t) {
        var a = /^[A-Za-z0-9_\-\ \.]+$/;
        if (!a.test(e)) {
            return false;
        }
        return true;
    });
    $.validator.addMethod("repasscheck", function (e, t) {
        if ($("#password").val() != $("#repassword").val()) {
            return false;
        }
        return true;
    });
    $.validator.addMethod("isValid", function (e, t) {
        var a = /^[A-Za-z0-9 ]+$/;
        if (!a.test(e)) {
            return false;
        } else {
            return true;
        }
    });
    $.validator.addMethod("isreValidPhone", function (e, t) {
        if ($("#mobile").val() != e || $("#country_code").val() != $("#confirm_country_code").val()) {
            return false;
        }
        return true;
    });
    $.validator.addMethod("seletcheck", function (e, t) {
        if (e == "") {
            return false;
        }
        return true;
    });
    $.validator.addMethod("x_optioncheck", function (e, t) {
        if (e == "") {
            return false;
        }
        return true;
    });
    $.validator.addMethod("isValidUser", function (e, t) {
        if (e != "") {
            if (!/^[0-9]{1,10}$/.test(e) || e < "1") {
                return false;
            }
        }
        return true;
    });
    if (typeof WalletSignUpError == "function") {
        WalletSignUpError();
    }
    $("#signupform").zaSignUp({
        validator: {
            rules: {
                firstname: {
                    required: customvar.getmadate("firstname"),
                    isValidlastname: customvar.getsplmadate("firstname"),
                },
                x_name: { required: customvar.getmadate("x_name") },
                lastname: {
                    required: customvar.getmadate("lastname"),
                    isValidlastname: customvar.getsplmadate("lastname"),
                },
                x_phone_number: {
                    required: customvar.getmadate("x_phone_number"),
                    isValidPhone: $("input[name='x_phone_number']").attr("type") == "hidden" ? false : true,
                },
                x_phone: {
                    required: customvar.getmadate("x_phone"),
                    isValidPhone: $("input[name='x_phone']").attr("type") == "hidden" ? false : true,
                },
                "r_address/1.phone": {
                    required: customvar.getmadate("r_address/1.phone"),
                    isValidPhone: $("input[name='r_address/1.phone']").attr("type") == "hidden" ? false : true,
                },
                "r_address/1.company_name": { required: customvar.getmadate("r_address/1.company_name") },
                x_contactnumber: {
                    required: customvar.getmadate("x_contactnumber"),
                    isValidPhone: $("input[name='x_contactnumber']").attr("type") == "hidden" ? false : true,
                },
                confirmMobile: { required: true, isreValidPhone: true },
                "r_address/2.phone": {
                    required: customvar.getmadate("r_address/2.phone"),
                    isValidPhone: $("input[name='r_address/2.phone']").attr("type") == "hidden" ? false : true,
                },
                "r_account.account_name": {
                    required: customvar.getmadate("r_account.account_name"),
                    validateRemote: {},
                },
                x_orgname: { required: customvar.getmadate("x_orgname") },
                Organization_Name: { required: customvar.getmadate("Organization_Name") },
                x_organization_name: { required: customvar.getmadate("x_organization_name") },
                Role_in_organization: { required: customvar.getmadate("Role_in_organization") },
                x_role_in_organization: { required: customvar.getmadate("x_role_in_organization") },
                x_developer_experience: { required: customvar.getmadate("x_developer_experience") },
                Developer_Experience: { required: customvar.getmadate("Developer_Experience") },
                x_company_name: { required: customvar.getmadate("x_company_name") },
                x_company: { required: customvar.getmadate("x_company") },
                x_companyname: { required: customvar.getmadate("x_companyname") },
                x_city: { required: customvar.getmadate("x_city") },
                x_designation: { required: customvar.getmadate("x_designation") },
                x_iamCompanyName: { required: customvar.getmadate("x_iamCompanyName") },
                x_portal: {
                    required: true,
                    isValidPortalName: true,
                    validateRemote: {
                        success: function (e) {
                            var t = e["error"];
                            if (typeof customvar.siggnupremotevalidate != "undefined") {
                                customvar.siggnupremotevalidate(t);
                            }
                        },
                    },
                },
                repassword: { required: true, repasscheck: true },
                x_r_coupon: { required: false, validateRemote: {} },
                x_employee_count: {
                    required: customvar.getmadate("x_employee_count"),
                    seletcheck:
                        (CountryCode == "GB" || customvar.isEU) &&
                        [_preZ, "www.zoho.com"].some(function (e) {
                            return window.location.href.startsWith("https://" + e + langsrc + "signup.html");
                        })
                            ? false
                            : true,
                    numbersOnly:
                        ((CountryCode == "GB" || customvar.isEU) &&
                            [_preZ, "www.zoho.com"].some(function (e) {
                                return window.location.href.startsWith("https://" + e + langsrc + "signup.html");
                            })) ||
                        (customvar.productName == "one" && CountryCode == "CA") ||
                        CountryCode == "BR"
                            ? true
                            : false,
                },
                x_location_count: { required: customvar.getmadate("x_location_count"), seletcheck: true },
                x_empCount: { required: customvar.getmadate("x_empCount"), seletcheck: true },
                x_industry: { required: customvar.getmadate("x_industry"), seletcheck: true },
                x_agteamname: {
                    required: true,
                    isValid: true,
                    validateRemote: {
                        success: function (e) {
                            var t = e.error;
                            if (typeof customvar.siggnupremotevalidate != "undefined") {
                                customvar.siggnupremotevalidate(t);
                            }
                        },
                    },
                },
                "x_portal.portal_name": {
                    required: true,
                    isValid: true,
                    isValidLength: true,
                    validateRemote: {
                        success: function (e) {
                            var t = e["error"];
                            if (typeof customvar.siggnupremotevalidate != "undefined") {
                                customvar.siggnupremotevalidate(t);
                            }
                        },
                    },
                },
                x_portal_name: { required: customvar.getmadate("x_portal_name"), isValid: true, validateRemote: {} },
                "x_portal.portal_agency_name": {
                    required: true,
                    isValid: true,
                    isValidLength: true,
                    validateRemote: {
                        success: function (e) {
                            var t = e["error"];
                            if (typeof customvar.siggnupremotevalidate != "undefined") {
                                customvar.siggnupremotevalidate(t);
                            }
                        },
                    },
                },
                x_I_agree_to_the: { required: customvar.getmadate("x_I_agree_to_the") },
                x_optioncheck: { required: customvar.getmadate("x_optioncheck") },
                x_offer_code: { validateRemote: true },
                x_register: { required: customvar.getmadate("x_register") },
                x_API_Users: { required: customvar.getmadate("x_API_Users"), isValidUser: true },
                x_formation_state: { required: customvar.getmadate("x_formation_state"), seletcheck: true },
            },
            messages: {
                firstname: {
                    required:
                        customvar.productName == "one" || customvar.productName == "publish"
                            ? customvar.eFullName
                            : customvar.eFirstName,
                    isValidlastname: customvar.numcharspl,
                },
                x_name: { required: customvar.eFullName },
                lastname: { required: customvar.eLastName, isValidlastname: customvar.numcharspl },
                x_phone_number: { required: customvar.eMobileNumber, isValidPhone: customvar.eValidPhoneNumber },
                x_phone: { required: customvar.eMobileNumber, isValidPhone: customvar.eValidPhoneNumber },
                "r_address/1.phone": { required: customvar.eMobileNumber, isValidPhone: customvar.eValidPhoneNumber },
                "r_address/1.company_name": { required: customvar.eOrgName },
                x_contactnumber: { required: customvar.eMobileNumber, isValidPhone: customvar.eValidPhoneNumber },
                confirmMobile: { required: customvar.eReMobileNumber, isreValidPhone: customvar.eValidPhoneNumber },
                "r_address/2.phone": { required: customvar.eMobileNumber, isValidPhone: customvar.eValidPhoneNumber },
                "r_account.account_name": { required: customvar.eCompanyName },
                x_orgname: { required: customvar.eOrgName },
                Organization_Name: { required: customvar.eOrgName },
                x_organization_name: { required: customvar.eOrgName },
                Role_in_organization: { required: customvar.eOrgRole },
                x_role_in_organization: { required: customvar.eOrgRole },
                x_developer_experience: { required: customvar.eAboutYpurCompany },
                Developer_Experience: { required: customvar.eAboutYpurCompany },
                x_company_name: { required: customvar.eCompanyName },
                x_company: { required: customvar.eCompanyName },
                x_companyname: { required: customvar.eCompanyName },
                x_city: { required: customvar.eCity },
                x_designation: { required: customvar.eDesignation },
                x_iamCompanyName: { required: customvar.eCompanyName },
                x_portal: {
                    required: customvar.ePortalName,
                    isValidPortalName: customvar.onlyletters,
                    validateRemote: "",
                },
                repassword: { required: customvar.repasserr, repasscheck: customvar.repaswrongserr },
                x_r_coupon: { required: "test", validateRemote: {} },
                x_employee_count: {
                    required: $('[name="x_employee_count"]').is("input")
                        ? customvar.eEmployeeCount
                        : customvar.empCount,
                    seletcheck: customvar.empCount,
                    numbersOnly: customvar.eNumbersOnly,
                },
                x_location_count: { required: customvar.locationCount, seletcheck: customvar.locationCount },
                x_empCount: { required: customvar.empCount, seletcheck: customvar.empCount },
                x_industry: { required: customvar.selectindustry, seletcheck: customvar.selectindustry },
                x_agteamname: {
                    required: customvar.teamNameTranslt,
                    isValid: customvar.isValidTranslt,
                    validateRemote: "",
                },
                "x_portal.portal_name": {
                    required: customvar.eCompanyName,
                    isValid: customvar.isvalidName,
                    isValidLength: customvar.isvalidNumberLength,
                    validateRemote: "",
                },
                x_portal_name: { required: customvar.eCompanyName, isValid: customvar.isvalidName },
                "x_portal.portal_agency_name": {
                    required: customvar.isvalidAgency,
                    isValid: customvar.isvalidName,
                    isValidLength: customvar.isvalidNumberLength,
                    validateRemote: "",
                },
                x_optioncheck: { required: customvar.eselectEdition },
                x_register: { required: customvar.registernum },
                x_formation_state: { required: customvar.eFormationState },
                x_API_Users: { required: customvar.usersrequire, isValidUser: customvar.usersrequire },
            },
        },
        onsubmit: function () {
            customvar.setcurrentCountry();
            t.val(customvar.creatingthePortal);
            $("#signupbtn").addClass("disabled-z-signup");
            $("#signupbtn").addClass("zwc_creating_account");
            if (CountryCode == "US") {
                if (typeof RegionName != "undefined") {
                    if ($(".signup-box .za-state-container").hasClass("zshow-common")) {
                        if ($(".signup-box .za-state-container .za-globalstate-signup").length > 0) {
                            try {
                                $zoho.salesiq.visitor.customaction(
                                    '{"eventCategory":"state_change_dd","eventAction":"' +
                                        RegionName.toLowerCase() +
                                        "-" +
                                        $(".signup-box .za-state-container .za-globalstate-signup").val() +
                                        '","eventLabel":"' +
                                        customvar.productName.toLowerCase() +
                                        '"}'
                                );
                            } catch (e) {}
                        }
                    }
                }
            }
            if (typeof customvar.signupObj.password != "undefined") {
                if (typeof customvar.signupObj.password.passwordgen != "undefined") {
                    copyToClipboard();
                    $(".pcopy.t-tip").addClass("active");
                    $(".t-text").html(Drupal.t("Password Copied"));
                    setTimeout(function () {
                        $(".pcopy.t-tip").removeClass("active");
                    }, 1e3);
                }
            }
            if (typeof customvar.signuphandleonsubmit != "undefined") {
                customvar.signuphandleonsubmit();
            }
        },
        handleConfirmation: function (e) {
            if (typeof customvar.signuphandleconfirm != "undefined") {
                customvar.signuphandleconfirm(e);
            }
            if (!_lhref.includes("creator/developers/signup.html")) {
                e.doAction();
            }
        },
        oncomplete: function (e) {
            if (e == $.fn.zaSignUp.SIGNUP_STATE.ERROR) {
                $("#signupbtn").removeClass("disabled-z-signup");
                $("#signupbtn").removeClass("zwc_creating_account");
                t.val(
                    typeof customvar.signupObj.btntext != "undefined"
                        ? customvar.signupObj.btntext
                        : customvar.signupforFree
                );
                if (typeof customvar.signupcompleteError != "undefined") {
                    customvar.signupcompleteError(e);
                }
            } else if (e == jQuery.fn.zaSignUp.SIGNUP_STATE.SIGNUP_COMPLETED) {
                zohoGASignupEvent();
                if (typeof customvar.signupcomplete != "undefined") {
                    customvar.signupcomplete(e);
                }
            }
            if (typeof customvar.signupJPConfirm != "undefined") {
                customvar.signupJPConfirm(e);
            }
            if (e == $.fn.zaSignUp.SIGNUP_STATE.OTP_INITIATED) {
                $('.signupotpcontainer [tabindex="1"]').each(function (e, t) {
                    $(t).attr("tabindex", "0");
                });
                if (typeof customvar.otp_initiated != "undefined") {
                    customvar.otp_initiated(e);
                }
                $("body").addClass("zw_signup_otp_visible");
            } else if (e == $.fn.zaSignUp.SIGNUP_STATE.OTP_ERROR) {
                $(".signupotpcontainer .field-error").each(function () {
                    const e = $(this).find("input:visible");
                    const t = e.attr("id");
                    e.length && e.attr("aria-describedby", `${t}-error`);
                    $(this).find(".field-msg > span:visible").attr("id", `${t}-error`);
                });
                setTimeout(function () {
                    if ($(".signupotpcontainer .signupbtn").length > 0) {
                        $(".signupotpcontainer .signupbtn").val(customvar.verify);
                    }
                    if (typeof customvar.otp_error != "undefined") {
                        customvar.otp_error(e);
                    }
                }, 300);
            }
            if ($("#mobileotp").length > 0) {
                if ($(".form-input.countryCnt.za-country-select.globalcountrycode-signup").val() != "IN") {
                    if ($("#emailmoile").length && zr_script.src.indexOf("mode=23")) {
                        $("#mobileotp").html($("#emailmoile").val());
                    }
                }
                if ($("#mobileotp").html().indexOf("@") > 0) {
                    $(".verifyheader").html(customvar.enterotpemail);
                    $(".signup-box .signupotpcontainer #otpfield").attr("aria-label", customvar.enterotpemail);
                    $(".otpmobile .change").attr("aria-label", customvar.changeme + " " + customvar.email);
                } else {
                    $(".verifyheader").html(customvar.enterotpmobile);
                    $(".signup-box .signupotpcontainer #otpfield").attr("aria-label", customvar.enterotpmobile);
                    $(".otpmobile .change").attr("aria-label", customvar.changeme + " " + customvar.phoneNumber);
                }
            }
        },
    });
    if (typeof webformevent === "function") {
        webformevent();
    }
    if (window.opener) {
        try {
            if (window.opener.origin !== window.origin) {
                window.opener.close();
            }
        } catch (e) {
            window.opener.close();
        }
        window.opener = null;
    }
}
$(window).on("load", function () {
    customvar.addRefValue();
    if (!workdriveVideoExceptions.includes(customvar.productName) && currentUrlLang != "jp" && isWorkdriveException) {
        customvar.changeVideoToWorkdrive();
        customvar.changeiframeToWorkdrive();
    }
});
$(window).on("load", () => {
    if (
        $("header > .zw-global-header > .header:visible").length &&
        $("header > .zw-global-header > .header").children().length
    ) {
        let e = $(
            `<a href="#zw-product-header-skip" tabindex="0" class="zwc_global_header_skip">${Drupal.t("Skip to product menu")}</a>`
        );
        if (
            $("header > .zw-product-header:visible").length &&
            $("header > .zw-product-header > div").children().length
        ) {
            $(".zw-global-header").prepend(e);
            $("header > .zw-product-header:visible").attr("id", "zw-product-header");
        } else {
            e.attr("href", "#zw-template-inner");
            e.text(Drupal.t("Skip to main content"));
            $(".zw-global-header").prepend(e);
        }
    }
    if ($(".zw-product-header:visible").length && $(".zw-product-header > div").children().length) {
        let e = $(
            `<a href="#zw-template-inner" id="zw-product-header-skip" tabindex="0" class="zwc_global_header_skip">${Drupal.t("Skip to main content")}</a>`
        );
        $(".zw-product-header").prepend(e);
    }
    $("main > .zw-template-inner").attr("id", "zw-template-inner");
});
function zwc_getModalFocusableElements(e) {
    return Array.from(
        e.querySelectorAll(
            'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
    ).filter((e) => {
        const t = window.getComputedStyle(e);
        return t.display !== "none" && t.visibility !== "hidden";
    });
}
const zwc_handleModalKeyDown = (e, t) => {
    const a = zwc_getModalFocusableElements(t);
    if (!a.length) return;
    const o = a[0];
    const n = a[a.length - 1];
    if (e.key === "Escape") {
        t.querySelector(".zc-modal-close-btn").click();
    }
    if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === o) {
            e.preventDefault();
            n.focus();
        } else if (!e.shiftKey && document.activeElement === n) {
            e.preventDefault();
            o.focus();
        }
    }
};
const zwc_focusModal = (e) => {
    const t = zwc_getModalFocusableElements(e);
    if (t.length) {
        t[0].focus();
    } else {
        e.focus();
    }
};
function zwc_modalFocusControl(a) {
    if (!(a instanceof HTMLElement)) return console.warn("Invalid modal element.");
    const e = { attributes: true };
    const t = a.querySelector(".zc-modal-close-btn");
    if (!t) return console.warn("Close button (.modal-close-btn) not found inside modal.");
    let o = document.activeElement;
    const n = new MutationObserver((e) => {
        e.forEach((e) => {
            if (e.type === "attributes" && e.attributeName === "data-modal-open") {
                const t = a.getAttribute("data-modal-open") === "true";
                if (t) {
                    zwc_focusModal(a);
                    a.addEventListener("keydown", (e) => {
                        zwc_handleModalKeyDown(e, a);
                    });
                } else {
                    a.removeEventListener("keydown", (e) => {
                        zwc_handleModalKeyDown(e, a);
                    });
                    if (o instanceof HTMLElement) {
                        o.focus();
                    } else {
                        document.body.focus();
                    }
                }
            }
        });
    });
    n.observe(a, e);
}
function zwc_ChangeFormsZohoPublic() {
    const t = "forms.zohopublic.com";
    const a = "forms.zohopublic.in";
    const e = document.querySelectorAll(
        `iframe[src^='https://${t}'], a[href^='https://${t}'], form[action^='https://${t}']`
    );
    e.forEach((e) => {
        zwc_UpdateDynamicLink(e, t, a);
    });
}
function zwc_UpdateDynamicLink(e, t, a) {
    const o = { IFRAME: "src", A: "href", FORM: "action" };
    let n = o[e.tagName];
    if (!n || !e.getAttribute(n).startsWith(`https://${t}`)) {
        if (e.hasAttribute("data-iframe")) {
            n = "data-iframe";
        } else if (e.hasAttribute("data-src")) {
            n = "data-src";
        }
    }
    if (n) {
        const i = e.getAttribute(n);
        if (i && i.includes(t)) {
            e.setAttribute(n, i.replace(t, a));
        }
    }
}
function zwc_ChangeBookingsFormLink() {
    const t = "assist.zohobookings.com";
    const a = "bookings.zohocorp.com";
    const e = document.querySelectorAll(`iframe[src^='https://${t}'], a[href^='https://${t}']`);
    e.forEach((e) => {
        zwc_UpdateDynamicLink(e, t, a);
    });
}
function zwc_ChangeSurveyFormLink() {
    const t = "survey.zohopublic.com";
    const a = "survey.zohopublic.in";
    const e = document.querySelectorAll(
        `iframe[src^='https://${t}'], a[href^='https://${t}'], iframe[data-src^='https://${t}'], li[data-iframe^='https://${t}'], div[data-iframe^='https://${t}']`
    );
    e.forEach((e) => {
        zwc_UpdateDynamicLink(e, t, a);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelectorAll("[data-modal-open]");
    if (e.length) {
        e.forEach((e) => {
            zwc_modalFocusControl(e);
        });
    }
    const t = [`www.zoho.${domainOne}`, _preZ, `catalyst.zoho.${domainOne}`, `community.zoho.${domainOne}`];
    if (t.includes(customvar.host)) {
        zwc_ChangeFormsZohoPublic();
        zwc_ChangeBookingsFormLink();
        zwc_ChangeSurveyFormLink();
    }
});
