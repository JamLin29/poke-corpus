const e={regex:"Expression rationnelle"},o={message:"Approximativement {{amount, number}} seront téléchargés pour exécuter cette requête. Continuer?"},t={regex:"Expression rationnelle invalide",done:"Terminé!"},n={regex:"L'expession rationnelle que vous recherchez est invalide. Vérifiez sa syntaxe et réessayez."},s={cacheAllModal:{message:"Êtes-vous sûr·e de mettre tous les fichiers en cache? (Taille : approximativement {{amount, number}})"},clearCacheModal:{message:"Êtes-vous sûr·e de vouloir vider le cache?"}},Ge={searchType:e,searchModal:o,status:t,statusModal:n,cache:s},Oe=Object.freeze(Object.defineProperty({__proto__:null,cache:s,default:Ge,searchModal:o,searchType:e,status:t,statusModal:n},Symbol.toStringTag,{value:"Module"})),a={name:"Rouge",short:"Rouge"},r={name:"Vert",short:"Vert"},l={name:"Bleu",short:"Bleu"},c={name:"Jaune",short:"Jaune"},i={name:"Or",short:"Or"},u={name:"Argent",short:"Argent"},h={name:"Cristal",short:"Cristal"},m={name:"Rubis",short:"Rubis"},d={name:"Saphir",short:"Saphir"},p={name:"Rouge Feu/Vert Feuille",short:"RFVF"},g={name:"Émeraude",short:"É"},b={name:"Diamant/Perle",short:"DP"},f={name:"Platine",short:"Pt"},S={name:"Or HeartGold/Argent SoulSilver",short:"HGSS"},v={name:"Noir/Blanc",short:"NB"},P={name:"Noir 2/Blanc 2",short:"N2B2"},A={name:"X/Y",short:"XY"},R={name:"Rubis Oméga/Saphir Alpha",short:"ROSA"},y={name:"Soleil/Lune",short:"SL"},x={name:"Ultra-Soleil/Ultra-Lune",short:"USUL"},C={name:"Let's Go, Pikachu/Let's Go, Évoli",short:"LGPÉ"},_={name:"Épée/Bouclier",short:"ÉB"},w={name:"Diamant Étincelant/Perle Scintillante",short:"DÉPS"},B={name:"Légendes Pokémon : Arceus",short:"LPA"},M={name:"Écarlate/Violet",short:"ÉV"},z={name:"Colosseum",short:"Colo"},G={name:"XD",short:"XD"},T={name:"Battle Revolution",short:"PBR"},k={name:"Box Rubis & Saphir",short:"Box"},I={name:"My Pokémon Ranch",short:"Ranch"},O={name:"Banque",short:"Banque"},L={name:"HOME",short:"HOME"},Te={Red:a,Green:r,Blue:l,Yellow:c,Gold:i,Silver:u,Crystal:h,Ruby:m,Sapphire:d,FireRedLeafGreen:p,Emerald:g,DiamondPearl:b,Platinum:f,HeartGoldSoulSilver:S,BlackWhite:v,Black2White2:P,XY:A,OmegaRubyAlphaSapphire:R,SunMoon:y,UltraSunUltraMoon:x,LetsGoPikachuLetsGoEevee:C,SwordShield:_,BrilliantDiamondShiningPearl:w,LegendsArceus:B,ScarletViolet:M,Colosseum:z,XD:G,BattleRevolution:T,Box:k,Ranch:I,Bank:O,HOME:L},Le=Object.freeze(Object.defineProperty({__proto__:null,Bank:O,BattleRevolution:T,Black2White2:P,BlackWhite:v,Blue:l,Box:k,BrilliantDiamondShiningPearl:w,Colosseum:z,Crystal:h,DiamondPearl:b,Emerald:g,FireRedLeafGreen:p,Gold:i,Green:r,HOME:L,HeartGoldSoulSilver:S,LegendsArceus:B,LetsGoPikachuLetsGoEevee:C,OmegaRubyAlphaSapphire:R,Platinum:f,Ranch:I,Red:a,Ruby:m,Sapphire:d,ScarletViolet:M,Silver:u,SunMoon:y,SwordShield:_,UltraSunUltraMoon:x,XD:G,XY:A,Yellow:c,default:Te},Symbol.toStringTag,{value:"Module"})),ke={"qid-ZZ":{name:"ID du message",code:"ID"},"ja-Hrkt-JP":{name:"Japonais (kana)",code:"JAP (kana)"},"ja-JP":{name:"Japonais (kanji)",code:"JAP (kanji)"},"en-US":{name:"Anglais",code:"ANG"},"en-GB":{name:"Anglais (RU)",code:"AN-RU"},"fr-FR":{name:"Français",code:"FRA"},"it-IT":{name:"Italien",code:"ITA"},"de-DE":{name:"Allemand",code:"ALL"},"es-ES":{name:"Espagnol (Espagne)",code:"ES-EU"},"ko-KR":{name:"Coréen",code:"COR"},"zh-CN":{name:"Chinois simplifié",code:"CHS"},"zh-TW":{name:"Chinois traditionnel",code:"CHT"}},Ve=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),V="Poké Corpus {{version}}",q="β",E={options:"Paramètres",language:"Langue :",mode:"Thème :",modes:{system:"Système",light:"Clair",dark:"Sombre"},network:"La langue sélectionnée n'a pas pu être chargée. Vérifiez votre connexion Internet et réessayez.",close:"Fermer"},D="Requête :",U={exact:"Phrase exacte",regex:"Expression régulière",boolean:"Booléen"},N="Insensible à la casse",F="Recherche",j="Annuler",H="Commun",$="Script",J="Filtres",X="Retourner à la recherche",Y="Gérer le cache",W="Tout mettre en cache",K="Vider le cache",Z="Tout sélectionner",Q="Tout désélectionner",ee={message:"Approximativement {{amount, number}} seront téléchargés pour exécuter cette requête. Continuer ?",checkboxDoNotShowAgain:"Ne plus montrer",buttons:{yes:"Oui",no:"Non"}},oe={initial:"Cliquez sur « Recherche » pour commencer.",waiting:"Veuillez patienter...",loading:"Chargement en cours...",processing:"Traitement en cours...",collecting:"Collecte en cours...",rendering:"Rendu en cours...",done:"Terminé !",error:"Une erreur s'est produite",network:"Erreur réseau",regex:"Expression régulière invalide",boolean:"Requête invalide",noMatch:"Aucun fichier correspondant"},te={error:"Une erreur s'est produite. Consultez la console de developpement de votre navigateur pour toute information complémentaire, ainsi que de nous faire remonter l'erreur sur GitHub.",network:"Un fichier ou plus n'ont pas pu être chargés et seuls des résultats partiels sont affichés. Vérifiez votre connexion Internet et réessayez.",regex:"L'expession régulière que vous recherchez est invalide. Vérifiez sa syntaxe et réessayez.",boolean:{parentheses:"Votre recheche Booléenne a des paranthèses manquantes ou en trop.",quote:"Votre recheche Booléenne a des guillemets manquants ou en trop.",operand:'Votre recheche Booléenne a un ou plusieurs arguments manquants. Si vous recherchez littéralement "NOT", "AND", ou "OR", placez-les entre guillemets.',empty:"Votre recheche Booléenne n'a aucun mot-clé de spécifié. Si vous recherchez littéralement ce texte, placez-le entre guillemets."},noMatch:"Aucun fichier ne correspond aux filtres sélectionnés. Assurez-vous que les jeux sélectionnés existent dans les langues choisies.",buttons:{ok:"OK"}},ne="Aller à...",se="Copier",ae="Partager",re="{{collection}} {{file}}",le="{{count, number}} résultat masqué",ce="{{count, number}} résultat masqué",ie="{{count, number}} résultats masqués",ue={long_zero:"{{start, number}} à {{end, number}} résultat affiché sur {{count, number}}",long_one:"{{start, number}} à {{end, number}} résultat affiché sur {{count, number}}",long_other:"{{start, number}} à {{end, number}} résultats affichés sur {{count, number}}",short:"{{start, number}}-{{end, number}} sur {{count, number}}"},he="←",me="→",de="Afficher les variables",pe="Afficher tous les caractères",ge="Affichier les furigana",be="Modifier le genre grammatical",fe="Modifier les singuliers et les pluriels",Se="[ ]",ve="abc",Pe="¶",Ae="♂",Re="♀",ye="⚥",xe="#",Ce="1",_e=">1",we={storageStatus:"État du cache : {{val}}",storageEnabled:"Activé",storageDisabled:"Désactivé",filesStored:'Nombre de fichiers stockés : $t(cache.files, {"count": {{count}} })',files:"{{count}} fichier",files_other:"{{count}} fichiers",storageUsed:"Poids total utilisé : {{amount, number}}",inProgress:"Mise en cache en cours...",headerCollection:"Collection",headerSize:"Taille",headerActions:"Actions",size:"{{amount, number}}",cacheAllModal:{message:"Êtes-vous sûr·e de mettre tous les fichiers en cache ? (Taille : approximativement {{amount, number}})",buttons:{yes:"Oui",no:"Non"}},cacheAllFailedModal:{message:"Un ou plusieurs fichiers n'ont pas pu être enregistrés dans le cache. Assurez-vous d'avoir suffisamment d'espace.",buttons:{ok:"OK"}},clearCacheModal:{message:"Êtes-vous sûr·e de vouloir vider le cache ?",buttons:{yes:"Oui",no:"Non"}}},Be="Un outil pour consulter le corpus Pokémon",Me="Créé par abcboy",ze="GitHub",Ie={title:V,version:q,options:E,query:D,searchType:U,caseInsensitive:N,search:F,cancel:j,common:H,script:$,filters:J,backToSearch:X,manageCache:Y,cacheAll:W,clearCache:K,selectAll:Z,deselectAll:Q,searchModal:ee,status:oe,statusModal:te,jumpTo:ne,copy:se,share:ae,tableHeader:re,tablePartial_zero:le,tablePartial_one:ce,tablePartial_other:ie,displayedRange:ue,loadPrev:he,loadNext:me,showVariables:de,showAllCharacters:pe,showFurigana:ge,showGender:be,showPlural:fe,showVariablesIcon:Se,showFuriganaIcon:ve,showAllCharactersIcon:Pe,showGenderIcon_0:Ae,showGenderIcon_1:Re,showGenderIcon_2:ye,showPluralIcon_0:xe,showPluralIcon_1:Ce,showPluralIcon_2:_e,cache:we,delete:"Effacer",tagline:Be,footerText:Me,github:ze},qe=Object.freeze(Object.defineProperty({__proto__:null,backToSearch:X,cache:we,cacheAll:W,cancel:j,caseInsensitive:N,clearCache:K,common:H,copy:se,default:Ie,deselectAll:Q,displayedRange:ue,filters:J,footerText:Me,github:ze,jumpTo:ne,loadNext:me,loadPrev:he,manageCache:Y,options:E,query:D,script:$,search:F,searchModal:ee,searchType:U,selectAll:Z,share:ae,showAllCharacters:pe,showAllCharactersIcon:Pe,showFurigana:ge,showFuriganaIcon:ve,showGender:be,showGenderIcon_0:Ae,showGenderIcon_1:Re,showGenderIcon_2:ye,showPlural:fe,showPluralIcon_0:xe,showPluralIcon_1:Ce,showPluralIcon_2:_e,showVariables:de,showVariablesIcon:Se,status:oe,statusModal:te,tableHeader:re,tablePartial_one:ce,tablePartial_other:ie,tablePartial_zero:le,tagline:Be,title:V,version:q},Symbol.toStringTag,{value:"Module"}));export{qe as a,Le as c,Ve as l,Oe as t};
