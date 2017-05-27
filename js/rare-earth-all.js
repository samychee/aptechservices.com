var reitems = [["Cerium Acetate","Cerium Ammonium Nitrate","Cerium Carbonate","Cerium Chloride","Cerium Hydroxide","Cerium Metal","Cerium Micshmetal","Cerium Nitrate","Cerium Oxalate","Cerium Oxide","Cerium Rich Mischmetal"],
               ["Dysprosium Fluoride","Dysprosium Metal","Dysprosium Oxide"],
               ["Erbium Metal","Erbium Oxide"],
               ["Europium Nitrate","Europium Oxalate","Europium Oxide"],
               ["Gadolinium Metal","Gadolinium Nitrate","Gadolinium Oxide"],
               ["Holmium Oxide"],
               ["Lanthanum Acetate","Lanthanum Carbonate","Lanthanum Chloride","Lanthanum Hydroxide","Lanthanum Metal","Lanthanum Oxide","Lanthanum Rich Mischmetal"],
               ["Lanthanum-Rich RE Carbonate","Lanthanum-Rich RE Chloride","Mixed Rare Earth Carbonate","Mixed Rare Earth Chloride","Mixed Rare Earth Fluoride","Mixed Rare Earth Oxide","Rare Earth Concentrate"],
               ["Neodymium Acetate","Neodymium Aluminum Alloy","Neodymium Carbonate","Neodymium Chloride","Neodymium Fluoride","Neodymium Iron Alloy","Neodymium Metal","Neodymium Nitrate","Neodymium Oxalate","Neodymium Oxide"],
               ["Praseodymium Carbonate","Praseodymium Metal","Praseodymium Oxalate","Praseodymium Oxide"],
               ["Samarium Carbonate","Samarium Metal","Samarium Oxide"],
               ["Terbium Metal","Terbium Nitrate","Terbium Oxide"],
               ["Ytterbium Carbonate","Ytterbium Metal","Ytterbium Oxide"],
               ["Yttrium Carbonate","Yttrium Chloride","Yttrium Metal","Yttrium Nitrate Crystal","Yttrium Oxide"],
               ["Zirconium Carbonate","Zirconium Oxide"]];

var renos = [["R0101","R0102","R0103","R0104","R0105","R0106","R0107","R0108","R0109","R0110","R0111"],
             ["R0201","R0202","R0203"],
             ["R0301","R0302"],
             ["R0401","R0402","R0403"],
             ["R0501","R0502","R0503"],
             ["R0601"],
             ["R0701","R0702","R0703","R0704","R0705","R0706","R0707"],
             ["R0801","R0802","R0803","R0804","R0805","R0806","R0807"],
             ["R0901","R0902","R0903","R0904","R0905","R0906","R0907","R0908","R0909","R0910"],
             ["R1001","R1002","R1003","R1004"],
             ["R1101","R1102","R1103"],
             ["R1201","R1202","R1203"],
             ["R1301","R1302","R1303"],
             ["R1401","R1402","R1403","R1404","R1405"],
             ["R1501","R1502"]];

var recas = [["17829-82-2","17664-21-3","5838-16-7","7790-86-5","12014-56-1","7440-45-1","10294-41-4","Multiple","15750-47-7","1306-38-3","Multiple"],
             ["13569-80-7","7429-91-6","1308-87-8"],
             ["7440-52-0","12061-16-4"],
             ["10031-53-5","24992-60-7","1308-96-9"],
             ["7440-54-2","10168-81-7","12064-62-9"],
             ["12055-62-8"],
             ["100587-90-4","54451-24-0","10099-58-8","14507-19-8","7439-91-0","1312-81-8","Multiple"],
             ["Multiple","Multiple","Multiple","Multiple","Multiple","Multiple","Multiple"],
             ["25721-92-0","Multiple","38245-38-4","13477-89-9","13709-42-7","Multiple","7440-00-8","16454-60-7","13746-96-8","1313-97-9"],
             ["14948-62-0","7440-10-0","24992-60-7","12037-29-5"],
             ["38245-37-3","7440-19-9","12060-58-1"],
             ["7440-27-9","57584-27-7","12738-76-0"],
             ["5895-52-3","7440-65-5","1314-37-0"],
             ["38245-39-5","10025-94-2","7440-65-5","10361-93-0","1314-36-9"],
             ["12671-00-0","1314-23-4"]];

var redis = [["white powder","orange crystal","white powder","white crystal","pale yellow powder","silver solid","silver solid","white crystal","white powder","tan/orange powder","silver solid"],
             ["beige powder","gray solid","yellow powder"],
             ["silver solid","light pink powder"],
             ["white crystal","white powder","white powder"],
             ["silver solid","white crystal ","white powder"],
             ["pale yellow powder"],
             ["white crystal","white powder","crystalline aggregates","white powder","silver solid","white powder","silver solid"],
             ["green to pale yellow powder","pink to tan crystal","white to tan crystal","pink to tan crystal","white to tan powder","orange powder","tan powder"],
             ["purple crystal","silver solid","pink/purple powder","purple crystal","pink powder","silver solid","silver solid","purple crystal","pink/purple powder","gray/blue powder"],
             ["green/yellow powder","silver solid","green/yellow powder","black powder"],
             ["white/pale yellow powder","silver solid","yellow powder"],
             ["silver solid","white powder","brown powder"],
             ["white powder","gray solid","white powder"],
             ["white powder","white crystal","gray solid","white crystal","white powder"],
             ["white powder","white/yellow powder"]];



var recom = [[[["CeO<sub>2</sub>/TREO","> 99.5"]],
              [["TREO","31.5"],["CeO<sub>2</sub>/REO","> 99.5"],["Fe<sub>2</sub>O<sub>3</sub>","< 0.005"],["Cl","< 0.005"]],
              [["TREO","46-65"],["CeO<sub>2</sub>/REO","&#8805; 99"],["Fe<sub>2</sub>O<sub>3</sub>","< 0.0001"],["Na<sub>2</sub>O","< 0.01"],["CaO","< 0.015"],["MnO<sub>2</sub>","< 0.003"],["SO<sup>2-</sup><sub>4</sub>","< 0.05"],["Cl<sup>-</sup>","< 0.06"]],
              [["TREO","> 45"],["CeO<sub>2</sub>/REO","> 99"],["Fe<sub>2</sub>O<sub>3</sub>","< 0.1"],["CaO","< 1.5"]],
              [["TREO","38-82"],["CeO<sub>2</sub>/REO","> 99.5"],["Na<sub>2</sub>O","< 0.5"],["SO<sup>2-</sup>O<sub>4</sub>","< 0.1"],["Fe<sub>2</sub>O<sub>3</sub>","< 0.05"],["Cl<sup>-</sup>","< 0.0325"],["MnO<sub>2</sub>","< 0.00003"],["HNO<sub>3</sub> Insolubles","< 0.05"],["Ce<sup>+4</sup>/Total Ce","> 95"]],
              [["REO/TREO","99.00 - 99.99"]],
              [["CeO/TREM","> 50"]],
              [["CeO<sub>2</sub>/REO","> 99.9"]],
              [["CeO<sub>2</sub>/TREO","> 99.5"]],
              [["TREO","> 99"],["CeO<sub>2</sub>/REO","> 99"],["SiO<sub>2</sub>","< 0.1"],["Cao","< 0.15"],["Fe<sub>2</sub>O<sub>3</sub>","< 0.05"],["L.O.I","< 1"]],
              [["CeO/TREM","> 70"]]],
             [[["Dy<sub>2</sub>O<sub>3</sub>/TREO","> 99.9"]],
              [["Dy/TREM","95.00 - 99.99"]],
              [["Dy<sub>2</sub>O<sub>3</sub>/TREO","99.00 - 99.99"]]],
             [[["Er/TREM","99"]],
              [["Er<sub>2</sub>O<sub>3</sub>/TREO","99.5"]]],
             [[["Crystals","> 99.99"]],
              [["Eu<sub>2</sub>O<sub>3</sub>/TREO","99.99"]],
              [["Eu<sub>2</sub>O<sub>3</sub>/TREO","99.90 - 99.999"]]],
             [[["Gd/TREM","99.00 - 99.95"]],
              [["Gd<sub>2</sub>O<sub>3</sub>/TREO","99.99"]],
              [["Gd<sub>2</sub>O<sub>3</sub>/TREO","99.90 - 99.999"]]],
             [[["Ho<sub>2</sub>O<sub>3</sub>/TREO","99.5"]]],
             [[["La<sub>2</sub>O<sub>3</sub>/TREO","99.5"]],
              [["REO","> 46"],["La<sub>2</sub>O<sub>3</sub>/REO","> 95"],["CeO<sub>2</sub>/REO","< 1"],["CaO","< 0.42"]],
              [["REO","> 45"],["La<sub>2</sub>O<sub>3</sub>/REO","> 99"],["Fe<sub>2</sub>O<sub>3</sub>","< 0.1"],["CaO","< 1.5"]],
              [["La Hydroxide","99"]],
              [["REO/TREO","99.00 - 99.95"]],
              [["REO/TREO","99.00 - 99.99"]],
              [["La Metal","40 - 70"]]],
             [[["La Carbonate","30 - 50"]],
              [["La Chloride","65-85"]],
              [["REO","> 45"],["CeO<sub>2</sub>/REO","> 45"],["Fe<sub>2</sub>O<sub>3</sub>","> 0.05"],["BaO","< 0.6"],["SrO","< 0.6"],["CaO","< 1.5"],["MgO","< 1.5"],["Na<sub>2</sub>O","< 0.4"],["SO<sub>4</sub>","< 0.03"],["PO<sub>4</sub>","< 0.008"],["NH<sub>4</sub>CL","< 3.8"]],
              [["La Chloride","30 - 60"],["Ce Chloride","30 - 60"],["Pr Chloride","0 - 20"],["Nd Chloride","0 - 20"]],
              [["Ce Fluoride","30 - 50"],["La Fluoride","30 - 50"],["Pr Fluoride","0 - 10"],["Nd Fluoride","0 - 10"]],
              [["Ce Oxide","40 - 50"],["La Oxide","20 - 30"],["Nd Oxide","10 - 20"],["Pr Oxide","0 - 10"]],
              [["Sm Oxide","60 - 70"],["Eu Oxide","10 - 15"],["Gd Oxide","10 - 20"]]],
             [[["Nd<sub>2</sub>O<sub>3</sub>/TREO","99.9"]],
              [["Nd/TREM","99"]],
              [["Nd<sub>2</sub>O<sub>3</sub>/TREO","99"]],
              [["Nd Chloride","99.5 - 99.9"]],
              [["REO","> 82"],["Nd<sub>2</sub>O<sub>3</sub>/REO","> 98"],["F","&#8805; 27"],["La<sub>2</sub>O<sub>3</sub>","< 0.005"],["Sm<sub>2</sub>O<sub>3</sub>","< 0.006"],["CeO<sub>2</sub>","< 0.1"],["Pr<sub>6</sub>O<sub>11</sub>","< 1.5"],["Non-RE","< 0.059"]],
              [["Nd/TREM","99"]],
              [["REO/TREO","99.00 - 99.95"]],
              [["Nd<sub>2</sub>O<sub>3</sub>/TREO","99"]],
              [["Nd<sub>2</sub>O<sub>3</sub>/TREO","99"]],
              [["TREO","&#8805; 99"],["Fe<sub>2</sub>O<sub>3</sub>","< 0.01"],["Cl<sup>-</sup>","< 0.05"],["Nd<sub>2</sub>O<sub>3</sub>","&#8805; 99"],["SiO<sub>2</sub>","< 0.02"],["So<sup>2-</sup><sub>4</sub>","< 0.05"],["Sm<sub>2</sub>O<sub>3</sub>/REO","< 0.1"],["CaO","< 0.015"],["L.O.I","< 1"]]],         
             [[["Pr<sub>6</sub>O<sub>11</sub>/TREO","99"]],
              [["REO/TREO","99.00 - 99.99"]],
              [["Pr<sub>6</sub>O<sub>11</sub>/TREO","99.5"]],
              [["REO/TREO","95.00 - 99.99"]]],
             [[["Sm<sub>2</sub>O<sub>3</sub>/TREO","99"]],
              [["REO/TREO","99.00 - 99.99"]],
              [["REO/TREO","99.00 - 99.99"]]],
             [[["REO/TREO","99.00 - 99.99"]],
              [["Tb Nitrate","99.995"]],
              [["REO/TREO","99.00 - 99.99"]]],
             [[["REO/TREO","99.00 - 99.99"]],
              [["REO/TREO","99.00 - 99.99"]],
              [["REO/TREO","99.95 - 99.999"]]],
             [[["Y<sub>2</sub>O<sub>3</sub>","99.9"]],
              [["Y<sub>2</sub>O<sub>3</sub>","99.9"]],
              [["Y/TREM","99 - 99.0"]],
              [["Y Nitrate","99.999"]],
              [["REO/TREO","99.00 - 99.99"]]],
             [[["ZrO<sub>2</sub>","99"]],
              [["ZrO<sub>2</sub>+HfO<sub>2</sub>","99.9 - 99.99"]]]];



var re_nm1 = Array();

re_nm1[0] = "Cerium Carbonate";
re_nm1[1] = "Cerium Chloride";
re_nm1[2] = "Cerium Hydroxide";
re_nm1[3] = "Cerium Ammonium Nitrate";
re_nm1[4] = "Lanthanum Chloride";
re_nm1[5] = "Lanthanum Carbonate";
re_nm1[6] = "Neodymium Fluoride";
re_nm1[7] = "Rare Earth Carbonate";
re_nm1[8] = "Rare Earth Hydrate";
re_nm1[9] = "Mixed Rare Earth Chloride";

var re_nm2 = Array();
re_nm2[0] = "Cerium Oxide";
re_nm2[1] = "Dysprosium Oxide";
re_nm2[2] = "Europium Oxide";
re_nm2[3] = "Gadolinium Oxide";
re_nm2[4] = "Lanthanum Oxide";
re_nm2[5] = "Neodymium Oxide";
re_nm2[6] = "Praseodymium Oxide";
re_nm2[7] = "Samarium Oxide";
re_nm2[8] = "Terbium Oxide";
re_nm2[9] = "Ytterbium Oxide";
re_nm2[10] = "Yttrium Oxide";

var re_nm3 = Array();
re_nm3[0] = "Cerium Metal";
re_nm3[1] = "Dysprosium Metal";
re_nm3[2] = "Gadolinium Metal";
re_nm3[3] = "Lanthanum Metal";
re_nm3[4] = "Neodymium Metal";
re_nm3[5] = "Praseodymium Metal";
re_nm3[6] = "Samarium Metal";
re_nm3[7] = "Terbium Metal";
re_nm3[8] = "Ytterbium Metal";
re_nm3[9] = "Yttrium Metal";

var re_nm4 = Array();
re_nm4[0] = "RE Ferrosilicon Alloy";
re_nm4[1] = "RE-Ca Ferrosilicon Alloy";
re_nm4[2] = "RE-Ca-Mg Ferrosilicon Alloy";
re_nm4[3] = "RE-Cu-Mg Ferrosilocon Alloy";
re_nm4[4] = "RE-Mg Ferrosilicon Alloy";
re_nm4[5] = "RE-Mn-Mg Ferrosilicon Alloy";

var re_fm1 = Array();
re_fm1[0] = "Ce<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub>.xH<sub>2</sub>O";
re_fm1[1] = "CeCl<sub>3</sub>.xH<sub>2</sub>O";
re_fm1[2] = "Ce(OH)<sub>4</sub>";
re_fm1[3] = "(NH<sub>4</sub>)<sub>2</sub>Ce(NO<sub>3</sub>)<sub>6</sub>";
re_fm1[4] = "LaCl<sub>3</sub> xH<sub>2</sub>O";
re_fm1[5] = "La<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub>";
re_fm1[6] = "NdF<sub>3</sub>";
re_fm1[7] = "RE<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub>.xH<sub>2</sub>O";
re_fm1[8] = "RE(OH)<sub>3</sub>";
re_fm1[9] = "RECl<sub>3</sub>.xH<sub>2</sub>O";

var re_fm2 = Array();
re_fm2[0] = "Ce<sub>2</sub>";
re_fm2[1] = "Dy<sub>2</sub>O<sub>3</sub>";
re_fm2[2] = "Eu<sub>2</sub>O<sub>3</sub>";
re_fm2[3] = "Gd<sub>4</sub>)<sub>2</sub>Ce(NO<sub>3</sub>)<sub>6</sub>";
re_fm2[4] = "La<sub>2</sub>O<sub>3</sub>";
re_fm2[5] = "Nd<sub>2</sub>O<sub>3</sub></sub>";
re_fm2[6] = "Pr<sub>6</sub>O<sub>11</sub>";
re_fm2[7] = "Sm<sub>2</sub>O<sub>3</sub>";
re_fm2[8] = "Tb<sub>4</sub>O<sub>7</sub>";
re_fm2[9] = "Yb<sub>2</sub>O<sub>3</sub>";
re_fm2[10] = "Y<sub>2</sub>O<sub>3</sub>";

var re_fm3 = Array();
re_fm3[0] = "Ce";
re_fm3[1] = "Dy";
re_fm3[2] = "Gd";
re_fm3[3] = "La";
re_fm3[4] = "Nd";
re_fm3[5] = "Pr";
re_fm3[6] = "Sm";
re_fm3[7] = "Tb";
re_fm3[8] = "Yb";
re_fm3[9] = "Y";

var re_no1 = Array();
re_no1[0] = "RE-COM-Ce-1";
re_no1[1] = "RE-COM-Ce-2";
re_no1[2] = "RE-COM-Ce-3";
re_no1[3] = "RE-COM-Ce-4";
re_no1[4] = "RE-COM-La-1";
re_no1[5] = "RE-COM-La-2";
re_no1[6] = "RE-COM-Nd-1";
re_no1[7] = "RE-COM-1";
re_no1[8] = "RE-COM-2";
re_no1[9] = "RE-COM-3";

var re_no2 = Array();
re_no2[0] = "RE-OX-Ce-1";
re_no2[1] = "RE-OX-Dy-1";
re_no2[2] = "RE-OX-Eu-1";
re_no2[3] = "RE-OX-Gd-1";
re_no2[4] = "RE-OX-La-1";
re_no2[5] = "RE-OX-Nd-1";
re_no2[6] = "RE-OX-Pr-1";
re_no2[7] = "RE-OX-Sm-1";
re_no2[8] = "RE-OX-Tb-1";
re_no2[9] = "RE-OX-Yb-1";
re_no2[10] = "RE-OX-Y-1";

var re_no3 = Array();
re_no3[0] = "RE-ME-Ce-1";
re_no3[1] = "RE-ME-Dy-1";
re_no3[2] = "RE-ME-Gd-1";
re_no3[3] = "RE-ME-La-1";
re_no3[4] = "RE-ME-Nd-1";
re_no3[5] = "RE-ME-Pr-1";
re_no3[6] = "RE-ME-Sm-1";
re_no3[7] = "RE-ME-Tb-1";
re_no3[8] = "RE-ME-Yb-1";
re_no3[9] = "RE-ME-Eu-1";

var re_no4 = Array();
re_no4[0] = "RE-ALLOY-1";
re_no4[1] = "RE-ALLOY-2";
re_no4[2] = "RE-ALLOY-3";
re_no4[3] = "RE-ALLOY-4";
re_no4[4] = "RE-ALLOY-5";
re_no4[5] = "RE-ALLOY-6";

var re_ca1 = Array();
re_ca1[0] = "5838-16-7";
re_ca1[1] = "7790-86-5";
re_ca1[2] = "12014-56-1";
re_ca1[3] = "16774-21-3";
re_ca1[4] = "10099-58-8";
re_ca1[5] = "6487-39-4";
re_ca1[6] = "13709-42-7";
re_ca1[7] = "&nbsp;";
re_ca1[8] = "&nbsp;";
re_ca1[9] = "&nbsp;";

var re_ca2 = Array();
re_ca2[0] = "1306-38-3";
re_ca2[1] = "1308-97-8";
re_ca2[2] = "1308-96-9";
re_ca2[3] = "12064-62-9";
re_ca2[4] = "1312-81-8";
re_ca2[5] = "1313-07-9";
re_ca2[6] = "12037";
re_ca2[7] = "12060-58-1";
re_ca2[8] = "12738-76-0";
re_ca2[9] = "11314-37-0";
re_ca2[10] = "1314-36-9";

var re_ca3 = Array();
re_ca3[0] = "7440-45-1";
re_ca3[1] = "7429-91-6";
re_ca3[2] = "7440-54-2";
re_ca3[3] = "7440-65-5";
re_ca3[4] = "7440-0033-8";
re_ca3[5] = "7440-10-0";
re_ca3[6] = "7440-19-9";
re_ca3[7] = "7440-27-9";
re_ca3[8] = "7440-64-4";
re_ca3[9] = "7440-65-5";

var re_di1 = Array();
re_di1[0] = "White powder";
re_di1[1] = "Reddish crystalline aggregates";
re_di1[2] = "Yellowish powder";
re_di1[3] = "Granular";
re_di1[4] = "Crystalline aggregates";
re_di1[5] = "White powder";
re_di1[6] = "Light red powder";
re_di1[7] = "White powder";
re_di1[8] = "Light gray brown crystalline aggregates";
re_di1[9] = "Dark-brown powder";

var re_di2 = Array();
re_di2[0] = "Light yellow powder, insoluble in water and difficult to soluble in mineral acids";
re_di2[1] = "Light pink white powder";
re_di2[2] = "Light rose powder";
re_di2[3] = "White powder";
re_di2[4] = "White powder";
re_di2[5] = "Pale violet powder soluble in mineral acids";
re_di2[6] = "Dark-brown powder";
re_di2[7] = "Light yellowish powder";
re_di2[8] = "Dark brown powder";
re_di2[9] = "White powder";
re_di2[10] = "White powder";

var re_di3 = Array();
re_di3[0] = "Silvery-dark gray and lustrous";
re_di3[1] = "Bright-silvery and soft";
re_di3[2] = "Silvery-white and ductile";
re_di3[3] = "Silvery gray, ductile and soft";
re_di3[4] = "Silvery gray, soft, ductile metal, yellowish in air";
re_di3[5] = "Silvery yellow, malleable, ductile metal";
re_di3[6] = "Lustrous, brittle, and relatively hard. Silvery-yellow. Tarnishes in air";
re_di3[7] = "Silvery gray, ductile and soft";
re_di3[8] = "Bright silvery, lustrous and ductile";
re_di3[9] = "Silvery dark gray and lustrous";

var re_di4 = Array();
re_di4[0] = "RE Ferrosilicon Alloy";
re_di4[1] = "RE Calcium Ferrosilicon Alloy";
re_di4[2] = "RE Calcium Magnesium Ferrosilicon Alloy";
re_di4[3] = "RE Copper Magnesium Ferrosilicon Alloy";
re_di4[4] = "RE Magnesium Ferrosilicon Alloy";
re_di4[5] = "RE Manganese Magnesium Ferrosilicon Alloy";














var comp_size18 = 6;
var re_comp181 = Array();
re_comp181[0] = "REO";
re_comp181[1] = "La<sub>2</sub>O<sub>3</sub>/REO";
re_comp181[2] = "Fe<sub>2</sub>O<sub>3</sub>";
re_comp181[3] = "SiO<sub>2</sub>";
re_comp181[4] = "CaO";
re_comp181[5] = "H<sub>2</sub>O";
var re_comp182 = Array();
re_comp182[0] = "> 42";
re_comp182[1] = "> 45";
re_comp182[2] = "> 0.05";
re_comp182[3] = "< 0.05";
re_comp182[4] = "2.5";
re_comp182[5] = "< 3";

var comp_size19 = 5;
var re_comp191 = Array();
re_comp191[0] = "REO";
re_comp191[1] = "CeO<sub>2</sub>/REO";
re_comp191[2] = "ThO<sub>2</sub>";
re_comp191[3] = "Fe<sub>2</sub>O<sub>3</sub>";
re_comp191[4] = "CaO";
var re_comp192 = Array();
re_comp192[0] = "> 75";
re_comp192[1] = "> 50";
re_comp192[2] = "< 0.1";
re_comp192[3] = "< 0.1";
re_comp192[4] = "4";










var comp_size27 = 1;
var re_comp271 = Array();
re_comp271[0] = "REO/TREO";
var re_comp272 = Array();
re_comp272[0] = "95.00 - 99.99";

var comp_size28 = 1;
var re_comp281 = Array();
re_comp281[0] = "REO/TREO";
var re_comp282 = Array();
re_comp282[0] = "99.00 - 99.99";

var comp_size29 = 1;
var re_comp291 = Array();
re_comp291[0] = "REO/TREO";
var re_comp292 = Array();
re_comp292[0] = "99.00 - 99.99";

var comp_size210 = 1;
var re_comp2101 = Array();
re_comp2101[0] = "REO/TREO";
var re_comp2102 = Array();
re_comp2102[0] = "99.95 - 99.999";

var comp_size211 = 1;
var re_comp2111 = Array();
re_comp2111[0] = "REO/TREO";
var re_comp2112 = Array();
re_comp2112[0] = "99.00 - 99.99";

var comp_size31 = 1;
var re_comp311 = Array();
re_comp311[0] = "REO/TREO";
var re_comp312 = Array();
re_comp312[0] = "99.00 - 99.99";

var comp_size32 = 1;
var re_comp321 = Array();
re_comp321[0] = "REO/TREO";
var re_comp322 = Array();
re_comp322[0] = "95.00 - 99.99";

var comp_size33 = 1;
var re_comp331 = Array();
re_comp331[0] = "REO/TREO";
var re_comp332 = Array();
re_comp332[0] = "99.00 - 99.95";

var comp_size34 = 1;
var re_comp341 = Array();
re_comp341[0] = "REO/TREO";
var re_comp342 = Array();
re_comp342[0] = "99.00 - 99.95";

var comp_size35 = 1;
var re_comp351 = Array();
re_comp351[0] = "REO/TREO";
var re_comp352 = Array();
re_comp352[0] = "99.00 - 99.95";

var comp_size36 = 1;
var re_comp361 = Array();
re_comp361[0] = "REO/TREO";
var re_comp362 = Array();
re_comp362[0] = "99.00 - 99.99";

var comp_size37 = 1;
var re_comp371 = Array();
re_comp371[0] = "REO/TREO";
var re_comp372 = Array();
re_comp372[0] = "99.00 - 99.99";

var comp_size38 = 1;
var re_comp381 = Array();
re_comp381[0] = "REO/TREO";
var re_comp382 = Array();
re_comp382[0] = "99.00 - 99.99";

var comp_size39 = 1;
var re_comp391 = Array();
re_comp391[0] = "REO/TREO";
var re_comp392 = Array();
re_comp392[0] = "99.00 - 99.99";

var comp_size310 = 1;
var re_comp3101 = Array();
re_comp3101[0] = "REO/TREO";
var re_comp3102 = Array();
re_comp3102[0] = "99.90 - 99.99";

var comp_size41 = 2;
var re_comp411 = Array();
re_comp411[0] = "RE";
re_comp411[1] = "Si";
var re_comp412 = Array();
re_comp412[0] = "21 - 47";
re_comp412[1] = "35 - 46";

var comp_size42 = 3;
var re_comp421 = Array();
re_comp421[0] = "RE";
re_comp421[1] = "Ca";
re_comp421[2] = "Si";
var re_comp422 = Array();
re_comp422[0] = "2 - 8";
re_comp422[1] = "8 - 14";
re_comp422[2] = "45 - 60";

var comp_size43 = 4;
var re_comp431 = Array();
re_comp431[0] = "RE";
re_comp431[1] = "Mg";
re_comp431[2] = "Ca";
re_comp431[3] = "Si";
var re_comp432 = Array();
re_comp432[0] = "1.0 - 1.5";
re_comp432[1] = "3 - 8";
re_comp432[2] = "5 - 15";
re_comp432[3] = "40 - 50";

var comp_size44 = 4;
var re_comp441 = Array();
re_comp441[0] = "RE";
re_comp441[1] = "Mg";
re_comp441[2] = "Cu";
re_comp441[3] = "Si";
var re_comp442 = Array();
re_comp442[0] = "2 - 8";
re_comp442[1] = "6 - 10";
re_comp442[2] = "5 - 45";
re_comp442[3] = "< 45";

var comp_size45 = 3;
var re_comp451 = Array();
re_comp451[0] = "RE";
re_comp451[1] = "Mg";
re_comp451[2] = "Si";
var re_comp452 = Array();
re_comp452[0] = "0.5 - 23";
re_comp452[1] = "5 - 11";
re_comp452[2] = "42 - 45";

var comp_size46 = 4;
var re_comp461 = Array();
re_comp461[0] = "RE";
re_comp461[1] = "Mg";
re_comp461[2] = "Mn";
re_comp461[3] = "Si";
var re_comp462 = Array();
re_comp462[0] = "5 - 10";
re_comp462[1] = "7 - 10";
re_comp462[2] = "10 - 16";
re_comp462[3] = "44 - 45";


function re_all(eid, pid)
{
  document.write("<table border='0' cellspacing='0' cellpadding='0'>");
  document.write("  <tr> ");
  document.write("    <td width='96'><img src='images/rare-earth.gif' width='96' height='70' alt='Rare Earth Products'></td>");
  document.write("    <td width='20'>&nbsp;</td>");
  document.write("    <td class='clsTitle'>" + reitems[eid-1][pid-1] + "<hr color='darkgreen' align='left'></td>");
  document.write("  </tr>");
  document.write("</table><br><br>");

  document.write("<table width='310' border='2' cellspacing='2' cellpadding='2'>");
  document.write("  <tr> ");
  document.write("    <td width='112' class='clsHead1'>Product No.</td>");
  document.write("    <td width='181' class='clsContent5'>" + renos[eid-1][pid-1] + "</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td width='112' class='clsHead1'>Product Name</td>");
  document.write("    <td width='181' class='clsContent5'>" + reitems[eid-1][pid-1] + "</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td width='112' class='clsHead1'>CAS Number</td>");
  document.write("    <td width='181' class='clsContent5'>" + recas[eid-1][pid-1] + "</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td width='112' class='clsHead1'>Description</td>");
  document.write("    <td width='181' class='clsContent5'>" + redis[eid-1][pid-1] + "</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class='clsHead1'>");
  document.write("      <div align='center'>Chemical Compositions (%)</div>");
  document.write("    </td>");
  document.write("  </tr>");

  for (var k=0; k<recom[eid-1][pid-1].length; k++)
  {
    document.write("  <tr> ");
    document.write("    <td width='112' class='clsContent5'>" + recom[eid-1][pid-1][k][0] + "</td>");
    document.write("    <td width='181' class='clsContent5'>" + recom[eid-1][pid-1][k][1] + "</td>");
    document.write("  </tr>");
  }
  document.write("</table><br><br><br><br><hr color='darkgreen' width='350'>");

  document.write("<div class='clsContent11'>[<a href='rare-earth-service.html'>Rare Earth Service</a>] ");
  document.write("[<a href='manufacturing.html'>Rare Earth Manufacturing</a>] ");
  document.write("[<a href='periodic.html'>Back to the Periodic Table</a>]</div>");
  document.write("<div class='clsContent11'>[<a href='silica-gel.html'>Silica Gel Products</a>] ");
  document.write("[<a href='plastics.html'>Plastic Products</a>]</div><br>");
}
