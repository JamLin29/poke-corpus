const e={name:"Rot",short:"Rot"},n={name:"Grün",short:"Grün"},t={name:"Blau",short:"Blau"},o={name:"Gelb",short:"Gelb"},a={name:"Gold",short:"Gold"},s={name:"Silber",short:"Silber"},r={name:"Kristall",short:"Kristall"},l={name:"Rubin/Saphir",short:"RS"},c={name:"Feuerrot/Blattgrün",short:"FRBG"},i={name:"Smaragd",short:"Smaragd"},h={name:"Diamant/Perl",short:"DP"},m={name:"Platin",short:"PT"},u={name:"HeartGold/SoulSilver",short:"HGSS"},d={name:"Schwarz/Weiß",short:"SW"},g={name:"Schwarz 2/Weiß 2",short:"S2W2"},S={name:"X/Y",short:"XY"},b={name:"Omega Rubin/Alpha Saphir",short:"ORAS"},p={name:"Sonne/Mond",short:"SM"},P={name:"Ultrasonne/Ultramond",short:"USUM"},G={name:"Let's Go, Pikachu!/Let's Go, Evoli!",short:"LGPE"},R={name:"Schwert/Schild",short:"SWSH"},k={name:"Strahlender Diamant/Leuchtende Perle",short:"SDLP"},f={name:"Pokémon-Legenden: Arceus",short:"PLA"},B={name:"Karmesin/Purpur",short:"KAPU"},E={name:"Colosseum",short:"COL"},v={name:"XD",short:"XD"},w={name:"Battle Revolution",short:"PBR"},A={name:"Box Rubin & Saphir",short:"Box"},y={name:"My Pokémon Ranch",short:"Ranch"},H={name:"Bank",short:"Bank"},z={name:"HOME",short:"HOME"},ue={Red:e,Green:n,Blue:t,Yellow:o,Gold:a,Silver:s,Crystal:r,RubySapphire:l,FireRedLeafGreen:c,Emerald:i,DiamondPearl:h,Platinum:m,HeartGoldSoulSilver:u,BlackWhite:d,Black2White2:g,XY:S,OmegaRubyAlphaSapphire:b,SunMoon:p,UltraSunUltraMoon:P,LetsGoPikachuLetsGoEevee:G,SwordShield:R,BrilliantDiamondShiningPearl:k,LegendsArceus:f,ScarletViolet:B,Colosseum:E,XD:v,BattleRevolution:w,Box:A,Ranch:y,Bank:H,HOME:z},Se=Object.freeze(Object.defineProperty({__proto__:null,Bank:H,BattleRevolution:w,Black2White2:g,BlackWhite:d,Blue:t,Box:A,BrilliantDiamondShiningPearl:k,Colosseum:E,Crystal:r,DiamondPearl:h,Emerald:i,FireRedLeafGreen:c,Gold:a,Green:n,HOME:z,HeartGoldSoulSilver:u,LegendsArceus:f,LetsGoPikachuLetsGoEevee:G,OmegaRubyAlphaSapphire:b,Platinum:m,Ranch:y,Red:e,RubySapphire:l,ScarletViolet:B,Silver:s,SunMoon:p,SwordShield:R,UltraSunUltraMoon:P,XD:v,XY:S,Yellow:o,default:ue},Symbol.toStringTag,{value:"Module"})),C={name:"Message-ID",code:"ID"},D={name:"Japanisch (Kanji)",code:"JPN (Kanji)"},_={name:"Englisch",code:"ENG"},L={name:"Französisch",code:"FRA"},M={name:"Italienisch",code:"ITA"},K={name:"Deutsch",code:"DEU"},O={name:"Spanisch (Spanien)",code:"SP-EU"},j={name:"Koreanisch",code:"KOR"},de={qid:C,"ja-Hrkt":{name:"Japanisch (Kana)",code:"JPN (Kana)"},ja:D,en:_,"en-GB":{name:"Englisch (VK)",code:"ENG (VK)"},fr:L,it:M,de:K,es:O,ko:j,"zh-Hans":{name:"Chinesisch (vereinfacht)",code:"CHV"},"zh-Hans-CN":{name:"Chinesisch (vereinfacht, China)",code:"CHS"},"zh-Hant":{name:"Chinesisch (traditionell)",code:"CHT"}},be=Object.freeze(Object.defineProperty({__proto__:null,de:K,default:de,en:_,es:O,fr:L,it:M,ja:D,ko:j,qid:C},Symbol.toStringTag,{value:"Module"})),x="Pokékorpus {{version}}",U={options:"Einstellungen",language:"Sprache:",mode:"Farbschema:",modes:{system:"System",light:"Hell",dark:"Dunkel"},close:"Schließen"},T="Abfrage:",W="Regex",F="Groß-/Kleinschreibung nicht beachten",V="Suche",X="Abbrechen",I="Gemeinsam",N="Skript",Y="Filter",q="Cache löschen",J="Alle auswählen",$="Alle abwählen",Z={initial:"Klicken Sie auf „Suche“.",waiting:"Bitte warten...",loading:"Lädt...",processing:"Verarbeitet...",collecting:"Sammelt...",rendering:"Rendert...",done:"Fertig!",error:"Es ist ein Fehler aufgetreten",network:"Netzwerkfehler",regex:"Ungültige Regex",noMatch:"Keine passenden Dateien gefunden"},Q="Wechseln zu...",ee="Teilen",ne="{{collection}} {{file}}",te="{{count, number}} Ergebnis nicht angezeigt",oe="{{count, number}} Ergebnisse nicht angezeigt",ae={long_one:"{{start, number}} bis {{end, number}} von {{count, number}} Ergebnis wird angezeigt",long_other:"{{start, number}} bis {{end, number}} von {{count, number}} Ergebnisse werden angezeigt",short:"{{start, number}}–{{end, number}} von {{count, number}}"},se="Variablen anzeigen",re="Alle Zeichen anzeigen",le="Grammatikalisches Geschlecht ändern",ce="Singular und Plural ändern",ie="Ein Werkzeug zur Abfrage des Pokémon-Korpus",he="Erstellt von abcboy",me="GitHub",ge={title:x,options:U,query:T,regex:W,caseInsensitive:F,search:V,cancel:X,common:I,script:N,filters:Y,clearCache:q,selectAll:J,deselectAll:$,status:Z,jumpTo:Q,share:ee,tableHeader:ne,tablePartial_one:te,tablePartial_other:oe,displayedRange:ae,showVariables:se,showAllCharacters:re,showGender:le,showPlural:ce,tagline:ie,footerText:he,github:me},pe=Object.freeze(Object.defineProperty({__proto__:null,cancel:X,caseInsensitive:F,clearCache:q,common:I,default:ge,deselectAll:$,displayedRange:ae,filters:Y,footerText:he,github:me,jumpTo:Q,options:U,query:T,regex:W,script:N,search:V,selectAll:J,share:ee,showAllCharacters:re,showGender:le,showPlural:ce,showVariables:se,status:Z,tableHeader:ne,tablePartial_one:te,tablePartial_other:oe,tagline:ie,title:x},Symbol.toStringTag,{value:"Module"}));export{Se as c,be as l,pe as t};
