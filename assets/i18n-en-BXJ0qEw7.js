const e="Poké Corpus {{version}}",o="β",n={options:"Options",language:"Language:",mode:"Colorscheme:",modes:{system:"System",light:"Light",dark:"Dark"},limit:"Results per page:",longURL:"Long URLs:",longURLs:{true:"Enabled",false:"Disabled"},network:"The selected language could not be loaded. Please check your internet connection and try again.",close:"Close"},a="Query:",t={searchType:"Search mode",exact:"Exact phrase",regex:"Regex",boolean:"Boolean"},s="Case insensitive",r="Search",l="Cancel",c="Common",i="Script",h="Filters",u="Back to Search",d="Manage cache",m="Cache All",g="Clear Cache",p="Select All",b="Deselect All",S={message:"Approximately {{amount, number}} of data will be downloaded to perform your query. Would you like to continue?",checkboxDoNotShowAgain:"Do not show again",buttons:{yes:"Yes",no:"No"}},y={initial:'Click "Search" to begin.',waiting:"Please wait...",loading:"Loading...",processing:"Processing...",collecting:"Collecting results...",rendering:"Rendering...",done:"Done!",error:"An error occurred",network:"Network error!",regex:"Invalid regex!",boolean:"Invalid query!",noMatch:"No matching files!"},w={error:"An error occurred. Check your browser's developer console for additional information, and please report the issue on GitHub.",network:"One or more files could not be loaded. Only partial results are shown. Please check your internet connection and try again.",regex:"The regular expression you entered was invalid. Check the syntax of your search query and try again.",boolean:{parentheses:"Your Boolean search query has missing or extra parentheses.",quote:"Your Boolean search query has missing or extra quotation marks.",operand:'Your Boolean search query is missing one or more operands. If you meant to search for "NOT", "AND", or "OR" literally, please enclose it in quotes.',empty:"Your Boolean search query has no search keywords. If you meant to search for this text literally, please enclose it in quotes."},noMatch:"No files match the filters you have selected. Ensure that the games you selected were released in the languages you selected.",buttons:{ok:"OK"}},f={title:"Progress",value:"{{amount, number}}"},P="Jump to...",k="Copy",C="Share",v="View Nearby Lines",G="View Speaker's Lines",_="{{collection}} {{file}}",B="{{count, number}} result not shown",R="{{count, number}} results not shown",A={long_one:"Displaying {{start, number}}–{{end, number}} of {{count, number}} result",long_other:"Displaying {{start, number}}–{{end, number}} of {{count, number}} results",short:"{{start, number}}–{{end, number}} of {{count, number}}"},I="Previous",M="Next",D="Show Variables",O="Show All Characters",x="Show Furigana",E="Change Grammatical Gender",L="Change Singular/Plural Forms",N="←",T="→",j="[ ]",H="abc",q="¶",U="♂",Y="♀",F="⚥",z="#",V="1",K=">1",W={storageStatus:"Cache storage status: {{val}}",storageEnabled:"Enabled",storageDisabled:"Disabled",filesStored:'Number of files stored: $t(cache.files, {"count": {{count}} })',files:"{{count}} file",files_other:"{{count}} files",storageUsed:"Total storage used: {{amount, number}}",loading:"{{message}} ({{loaded}}/{{total}})",inProgress:"Caching in progress...",headerCollection:"Collection",headerSize:"Size",headerActions:"Actions",size:"{{amount, number}}",cacheAllModal:{message:"Are you sure you want to cache all files? (Download size: about {{amount, number}})",buttons:{yes:"Yes",no:"No"}},cacheAllFailedModal:{message:"One or more files could not be saved to the cache. Please check your internet connection and ensure you have enough free space.",buttons:{ok:"OK"}},clearCacheModal:{message:"Are you sure you want to clear the cache?",buttons:{yes:"Yes",no:"No"}}},$="Update",X="A tool to query the Pokémon corpus",J="Created by abcboy",Q="GitHub",Fe={title:e,version:o,options:n,query:a,searchType:t,caseInsensitive:s,search:r,cancel:l,common:c,script:i,filters:h,backToSearch:u,manageCache:d,cacheAll:m,clearCache:g,selectAll:p,deselectAll:b,searchModal:S,status:y,statusModal:w,progressBar:f,jumpTo:P,copy:k,share:C,viewNearby:v,viewSpeaker:G,tableHeader:_,tablePartial_one:B,tablePartial_other:R,displayedRange:A,loadPrev:I,loadNext:M,showVariables:D,showAllCharacters:O,showFurigana:x,showGender:E,showPlural:L,loadPrevIcon:N,loadNextIcon:T,showVariablesIcon:j,showFuriganaIcon:H,showAllCharactersIcon:q,showGenderIcon_0:U,showGenderIcon_1:Y,showGenderIcon_2:F,showPluralIcon_0:z,showPluralIcon_1:V,showPluralIcon_2:K,cache:W,refresh:$,delete:"Delete",tagline:X,footerText:J,github:Q},$e=Object.freeze(Object.defineProperty({__proto__:null,backToSearch:u,cache:W,cacheAll:m,cancel:l,caseInsensitive:s,clearCache:g,common:c,copy:k,default:Fe,deselectAll:b,displayedRange:A,filters:h,footerText:J,github:Q,jumpTo:P,loadNext:M,loadNextIcon:T,loadPrev:I,loadPrevIcon:N,manageCache:d,options:n,progressBar:f,query:a,refresh:$,script:i,search:r,searchModal:S,searchType:t,selectAll:p,share:C,showAllCharacters:O,showAllCharactersIcon:q,showFurigana:x,showFuriganaIcon:H,showGender:E,showGenderIcon_0:U,showGenderIcon_1:Y,showGenderIcon_2:F,showPlural:L,showPluralIcon_0:z,showPluralIcon_1:V,showPluralIcon_2:K,showVariables:D,showVariablesIcon:j,status:y,statusModal:w,tableHeader:_,tablePartial_one:B,tablePartial_other:R,tagline:X,title:e,version:o,viewNearby:v,viewSpeaker:G},Symbol.toStringTag,{value:"Module"})),Z={name:"Red",short:"Red"},ee={name:"Green",short:"Green"},oe={name:"Blue",short:"Blue"},ne={name:"Yellow",short:"Yellow"},ae={name:"Gold",short:"Gold"},te={name:"Silver",short:"Silver"},se={name:"Crystal",short:"Crystal"},re={name:"Ruby/Sapphire",short:"RS"},le={name:"FireRed/LeafGreen",short:"FRLG"},ce={name:"Emerald",short:"Emerald"},ie={name:"Diamond/Pearl",short:"DP"},he={name:"Platinum",short:"Pt"},ue={name:"HeartGold/SoulSilver",short:"HGSS"},de={name:"Black/White",short:"BW"},me={name:"Black 2/White 2",short:"B2W2"},ge={name:"X/Y",short:"XY"},pe={name:"Omega Ruby/Alpha Sapphire",short:"ORAS"},be={name:"Sun/Moon",short:"SM"},Se={name:"Ultra Sun/Ultra Moon",short:"USUM"},ye={name:"Let's Go, Pikachu!/Let's Go, Eevee!",short:"LGPE"},we={name:"Sword/Shield",short:"SwSh"},fe={name:"Brilliant Diamond/Shining Pearl",short:"BDSP"},Pe={name:"Pokémon Legends: Arceus",short:"LA"},ke={name:"Scarlet/Violet",short:"SV"},Ce={name:"Colosseum",short:"Colo."},ve={name:"XD",short:"XD"},Ge={name:"Battle Revolution",short:"PBR"},_e={name:"Box Ruby & Sapphire",short:"Box"},Be={name:"My Pokémon Ranch",short:"Ranch"},Re={name:"Bank",short:"Bank"},Ae={name:"HOME",short:"HOME"},ze={Red:Z,Green:ee,Blue:oe,Yellow:ne,Gold:ae,Silver:te,Crystal:se,RubySapphire:re,FireRedLeafGreen:le,Emerald:ce,DiamondPearl:ie,Platinum:he,HeartGoldSoulSilver:ue,BlackWhite:de,Black2White2:me,XY:ge,OmegaRubyAlphaSapphire:pe,SunMoon:be,UltraSunUltraMoon:Se,LetsGoPikachuLetsGoEevee:ye,SwordShield:we,BrilliantDiamondShiningPearl:fe,LegendsArceus:Pe,ScarletViolet:ke,Colosseum:Ce,XD:ve,BattleRevolution:Ge,Box:_e,Ranch:Be,Bank:Re,HOME:Ae},Xe=Object.freeze(Object.defineProperty({__proto__:null,Bank:Re,BattleRevolution:Ge,Black2White2:me,BlackWhite:de,Blue:oe,Box:_e,BrilliantDiamondShiningPearl:fe,Colosseum:Ce,Crystal:se,DiamondPearl:ie,Emerald:ce,FireRedLeafGreen:le,Gold:ae,Green:ee,HOME:Ae,HeartGoldSoulSilver:ue,LegendsArceus:Pe,LetsGoPikachuLetsGoEevee:ye,OmegaRubyAlphaSapphire:pe,Platinum:he,Ranch:Be,Red:Z,RubySapphire:re,ScarletViolet:ke,Silver:te,SunMoon:be,SwordShield:we,UltraSunUltraMoon:Se,XD:ve,XY:ge,Yellow:ne,default:ze},Symbol.toStringTag,{value:"Module"})),Ie={name:"Message ID",code:"ID"},Me={name:"Japanese (Kanji)",code:"JPN (Kanji)"},De={name:"English",code:"ENG"},Oe={name:"French",code:"FRE"},xe={name:"Italian",code:"ITA"},Ee={name:"German",code:"GER"},Le={name:"Spanish (Spain)",code:"SP-EU"},Ne={name:"Korean",code:"KOR"},Ve={qid:Ie,"ja-Hrkt":{name:"Japanese (Kana)",code:"JPN (Kana)"},ja:Me,en:De,"en-GB":{name:"English (UK)",code:"EN-UK"},fr:Oe,it:xe,de:Ee,es:Le,ko:Ne,"zh-Hans":{name:"Chinese (Simplified)",code:"CHS"},"zh-Hant":{name:"Chinese (Traditional)",code:"CHT"}},Je=Object.freeze(Object.defineProperty({__proto__:null,de:Ee,default:Ve,en:De,es:Le,fr:Oe,it:xe,ja:Me,ko:Ne,qid:Ie},Symbol.toStringTag,{value:"Module"})),Te="data",je="msg",He="common",qe="script",Ue="message",Ke={data:Te,msg:je,common:He,script:qe,message:Ue},Qe=Object.freeze(Object.defineProperty({__proto__:null,common:He,data:Te,default:Ke,message:Ue,msg:je,script:qe},Symbol.toStringTag,{value:"Module"})),Ye={mode:"Colourscheme:"},We={options:Ye},Ze=Object.freeze(Object.defineProperty({__proto__:null,default:We,options:Ye},Symbol.toStringTag,{value:"Module"}));export{We as a,$e as b,ze as c,Xe as d,Je as e,Ke as f,Qe as g,Ze as h,Ve as l,Fe as t};
