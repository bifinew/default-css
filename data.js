var homes = [
//slider img
["1","bzyvhS2"],//movie img
["2","THzmxsX"],//web img
["3","6D195yp"],//films img
["4","xh3M9ZV"],//song img
["5","q13tmM5"],//kid img
//movies
["U7vBj2AGG3c","tPsGJxP"],
["lJ-fBdXSbhY","KGpDsXH"],
["ewtF1OBY0tI","6tgQYBn"],
["-Dys7E2TFRc","2NYpBrs"],
["MRoSmvxuo1c","J5k1Km4"],
["xHW6Dq6Pgp8","thT6nyx"],
//Short Films
["0krwKbsQscw","d0YLWcj"],
["AQR6cB1DXzY","hXHBXpL"],
["bmla4w17Flo","h74gcZR"],
["deMCcGkJsjc","0fnkTTn"],
["zMVpwc1nO2k","4R6KYbH"],
["bmla4w17Flo","7RsWxjS"],
//Music Video
["PuCQPmNo-aY","xgygFRZ"],
["ZIvNNe2FwHo","0Q65yq7"],
["FcFbQmJv7fU","NmGDjSf"],
["Q4PPAU6F4Cc","ngZDWzX"],
["qCYby9dc480","ynR8kBC"],
["BTRtfW-CjXU","hRFrydt"],
//kids
["fFHZoqns1ho","GkF83XG"],
["u21cCilpW04","6srVsw3"],
["X6WOxY4FGmo","ySnbBZF"],
["FyJqWC2CYwo","FHgrrZY"],
["zvu_htzr6Y0","2Pj4w7h"],
["wzoPFHghs-0","mqyB4SP"],
// web shows
["wwdJSvRl1ro","fCnkPLy","pd6GPm6=wwdJSvRl1ro&The%20Reunion=wwdJSvRl1ro&An%20Invite%20To%20The%20Past=20_2Q7hoKPk&Bourbon%20High%20Class%20of%202008=hc_NdTREyLs&Back%20To%20School=6i_sS-cy9Ko&The%20Flashbacks%20Begin=QHWoZ67ygW8&Lets%20Start%20A%20Fire=BMOQ_7go3eY&This%20Changes%20Everything=R2QCZ3Bk1Cs&Dont%20Panic=pmPd-AK-gWY&Talk%20To%20Me=Sb9p0YfQafo&We%20Got%20This=FSieNNItbw0&Keep%20Moving=knvwsd31zu4"],
["UTQbqJsx7EI","zRt1WQG","3Wg50yC=UTQbqJsx7EI&The%20Holiday=UTQbqJsx7EI&3%20Guys%20And%20A%20Girl=hw7fDTBj4hk&In%20Da%20Club=lVYV2EVcNIA&Ghast%20From%20The%20Past=1nf2lD0kwLM&Beach%20Please=xP6YBCvY-bU&Bachna%20Ae%20Casino=2jb7US0mbpM&The%20Big%20Bag%20Theory=jEKCEhsbDHc&Love%20Stuck=2MrG2FUsV50&Unfriended=yIEYMQckKBU&The%20Aftermath=TcObZQ73Z0Q&Four%20Two%20Ka%20One=zOdO4_qBz3g"],
["QYiyAxjChhE","qjMSKkQ","DpdQkBX=QYiyAxjChhE&Soulmates=QYiyAxjChhE&Shillong=4GG1FsvKdQ4&3%20a%20m%20Waali%20Batein=WuEg5yvQKeM&Impulsive%20Planning%20Disorder=Z8_pBYItlpo&Finding%20Tripti=D5ojl5p8f48&A%20Walk%20Down%20Memory%20Lane=2HEmM3Hj_CM&Garys%20Island=iMkcbu8p7gM&Fishing%20Off=Kpt5QB7Tw7E&Hide%20and%20Seek=LP7CH07-r28&Sab%20Cards%20Table%20Pe=yU6cv1zsXRQ&PriyAnshuls%20As%20Soulmates?=br1gEo7nMhc"],
["WL_BdNa4tEU","qJbP7CY","Qpd173w=WL_BdNa4tEU&Operation%20MBBS=WL_BdNa4tEU&Infection%20ft%20Ayush%20Mehra=aK-wgYKdBVE&Diagnosis%20ft%20Ayush%20Mehra=i2tZjJ6bxnI&Complications%20ft%20Ayush%20Mehra=lwCU3tuRnuU&Surgery%20ft%20Ayush%20Mehra=mZa-wKePntg&Recovery%20ft.%20Ayush%20Mehra=hr2CCO0qxDo"],
["JCE7XjTzjtU","3YnsKrw","ZmP3bvy=JCE7XjTzjtU&Home%20Sweet%20Office=JCE7XjTzjtU&Conflict%20Of%20Interest=i8P1ujR1irg&Internal%20Politics=VhxRGA22S9U&Poaching%20The%20Talent=AG6S0682aEU&Business%20Secrets=nwo85POqyeU&Breach%20of%20Contract=25vTVAPqxCU"],
["B9M8ne1WTPI","Y2QtmjS","XX44dp7=B9M8ne1WTPI&Little Things=B9M8ne1WTPI"]
]

// full list...........
var shows = [
["wwdJSvRl1ro","pd6GPm6","pd6GPm6=wwdJSvRl1ro&The%20Reunion=wwdJSvRl1ro&An%20Invite%20To%20The%20Past=20_2Q7hoKPk&Bourbon%20High%20Class%20of%202008=hc_NdTREyLs&Back%20To%20School=6i_sS-cy9Ko&The%20Flashbacks%20Begin=QHWoZ67ygW8&Lets%20Start%20A%20Fire=BMOQ_7go3eY&This%20Changes%20Everything=R2QCZ3Bk1Cs&Dont%20Panic=pmPd-AK-gWY&Talk%20To%20Me=Sb9p0YfQafo&We%20Got%20This=FSieNNItbw0&Keep%20Moving=knvwsd31zu4"],
["UTQbqJsx7EI","3Wg50yC","3Wg50yC=UTQbqJsx7EI&The%20Holiday=UTQbqJsx7EI&3%20Guys%20And%20A%20Girl=hw7fDTBj4hk&In%20Da%20Club=lVYV2EVcNIA&Ghast%20From%20The%20Past=1nf2lD0kwLM&Beach%20Please=xP6YBCvY-bU&Bachna%20Ae%20Casino=2jb7US0mbpM&The%20Big%20Bag%20Theory=jEKCEhsbDHc&Love%20Stuck=2MrG2FUsV50&Unfriended=yIEYMQckKBU&The%20Aftermath=TcObZQ73Z0Q&Four%20Two%20Ka%20One=zOdO4_qBz3g"],
["QYiyAxjChhE","DpdQkBX","DpdQkBX=QYiyAxjChhE&Soulmates=QYiyAxjChhE&Shillong=4GG1FsvKdQ4&3%20a%20m%20Waali%20Batein=WuEg5yvQKeM&Impulsive%20Planning%20Disorder=Z8_pBYItlpo&Finding%20Tripti=D5ojl5p8f48&A%20Walk%20Down%20Memory%20Lane=2HEmM3Hj_CM&Garys%20Island=iMkcbu8p7gM&Fishing%20Off=Kpt5QB7Tw7E&Hide%20and%20Seek=LP7CH07-r28&Sab%20Cards%20Table%20Pe=yU6cv1zsXRQ&PriyAnshuls%20As%20Soulmates?=br1gEo7nMhc"],
["WL_BdNa4tEU","Qpd173w","Qpd173w=WL_BdNa4tEU&Operation%20MBBS=WL_BdNa4tEU&Infection%20ft%20Ayush%20Mehra=aK-wgYKdBVE&Diagnosis%20ft%20Ayush%20Mehra=i2tZjJ6bxnI&Complications%20ft%20Ayush%20Mehra=lwCU3tuRnuU&Surgery%20ft%20Ayush%20Mehra=mZa-wKePntg&Recovery%20ft.%20Ayush%20Mehra=hr2CCO0qxDo"],
["JCE7XjTzjtU","ZmP3bvy","ZmP3bvy=JCE7XjTzjtU&Home%20Sweet%20Office=JCE7XjTzjtU&Conflict%20Of%20Interest=i8P1ujR1irg&Internal%20Politics=VhxRGA22S9U&Poaching%20The%20Talent=AG6S0682aEU&Business%20Secrets=nwo85POqyeU&Breach%20of%20Contract=25vTVAPqxCU"]
];

var movies = [
["NpJ6lnbgi_s","bvWz472"],
["0UBNqmKHgGM","WWssSnX"],
["MRoSmvxuo1c","wCMbKv8"],
["-Dys7E2TFRc","pnFtkvg"],
["ewtF1OBY0tI","LCQH49m"],
["lJ-fBdXSbhY","JRjQrFn"],
["U7vBj2AGG3c","zXLjX30"],
["bmla4w17Flo","NWfWfHN"],
["5vAmkhO-wAQ","P9dc8Zv"],
["lji630IAUxQ","Byt3Qv6"],
["cx4Xwae513g","Rv0D8Vx"],
["P5B0KVl3xa8","XyqW2cP"],
["XjuCjiiXNNs","qp2fvvZ"],
["y9cgtRYI6jM","cxhh1ZN"],
["xHW6Dq6Pgp8","XJx29NH"],
["gKizDojsdvs","L5pBw7m"]
];

var films = [
["0krwKbsQscw","Vv47pbS"],
["AQR6cB1DXzY","hyzbPcC"],
["2KP0aDTVtFI","NpszLJh"],
["deMCcGkJsjc","xHf6HCj"],
["zMVpwc1nO2k","KxmzGg8"],
["WiXHY4kX4SQ","mB9Lspn"]
];
var musics = [
["ZIvNNe2FwHo","vdV2Ztt"],
["PuCQPmNo-aY","pWxwkC5"],
["FcFbQmJv7fU","NsZ5RmC"],
["Q4PPAU6F4Cc","JKQKDCD"],
["qCYby9dc480","Dz5HMyS"],
["BTRtfW-CjXU","h2LMWCw"]
];
var kids = [
["kvJIr7L-8h0","d7KsbZc"],
["DJ-88wH--xM","9wVLs5j"],
["hz4Jz1fiu-Y","94VHjwy"],
["vee6hLgh3VQ","GHNwND8"],
["wzoPFHghs-0","2cc16Wp"],
["fFHZoqns1ho","bKgvPPd"],
["u21cCilpW04","NppSXWL"],
["X6WOxY4FGmo","R4cyWrF"],
["V0QA-Y3_Ojw","vVKPSd0"],
["FyJqWC2CYwo","cxJR2fD"],
["zvu_htzr6Y0","25TtYHn"]
];
