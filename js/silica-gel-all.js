var titles = [["Blue Silica Gel",
               "Color Variable Silica Gel"],
              ["Alumina Silica Gel",
               "Desiccant for Packaging",
               "Fine Pored Silica Gel",
               "FNG Silica Gel",
               "Type B Silica Gel",
               "Type C Silica Gel"],
              ["Activated Silica Gel",
               "Silica Gel for Beer",
               "Cat Litter Silica Gel",
               "High Efficient Drier",
               "Macro Pored Silica Gel"]];
var params = [["Shape: glass-like pellets or lumps. Color: blue or light blue. Including blue gel indicator, chromotropic silica gel and blue silica gel. Turning from blue to red after absorbing moistures.",
               "In the form of spherical or irregularly-shaped grains, the gel is currently presented either purple, orange or yellow. With silicon dioxide as the chief ingredient, the product performs all the functions of blue silica gel but does not contain cobalt chloride and is therefore innocuous and pollution-free, and its color varies as humidity changes."],
              ["Color: faint yellow. Chemical formula: SiO2.nAl203.xH20. Color: Chemically stable, flame-resisting. Insoluble in any solvent. Ideally used as adsorbent and variable-temperature adsorbent. In high humidity, the adsorption capacity is 6-10% higher than that of fine-pored silica gel. But in low relative humidity like 10-20% it is quite the same as fine-pored silica gel. Its thermal stability is over 150°C higher than that of fine-pored silica gel (200°C).",
               "Fine-pored, Type B, Macro-pored",
               "Transparent or translucent glass-like pellet or lump. Average pore diameter: 2.0-3.0mm. Specific surface area: 650-800 m2/g. Pore volume: 0.35 0.45ml/g. Specific heat: 0.92 KJ/kg. °C. Thermal conductivity:0.63 KJ/m. hr. °C",               
               "Shape: pellets. Color: white or light gray. Processed and formed from powders. It possesses better water-tolerant property, lower break-down rate of reclamation and longer service life than ordinary silica gel.",
               "Shape: pellets or lumps. Color: milky white, transparent or translucent. Pore volume: 0.60-0.85ml/g. Average pore diameter: 4.5-7.0mm. Specific surface area: 450-650 m2/g. Structure lying between macro-pored and fine-pored silica gels.",
               "Shape: pellets. Color: cream, translucent. Micro-pored structure."],
              ["Shape: grain. Color: pure white. A kind of high pure, highly activated silica gel.",
               "Mainly used in beer industry. Non-crystalline micro-porous solid powder. Pore diameter is 8-16mm. Chemical molecular formula is mSiO2.nH20, insoluble in water or any other solvent (except for caustic alkali and hydrofluoric acid). Does not react with any acid, alkali or salt. Nontoxic, tasteless, flame-resisting and non-explosive. High stability under hot or cold atmosphere and harmless to human body.",
               "<ul><li>Great Capacity and Quick Speed of Absorption. Silica gel cat sands can absorb all excrement and urine of pets and peculiar smell given off from them. They can also control the growth of bacterium and keep the surface of the sands dry and cleen, so the pets may live in a safe and sanitary environment. At the same time, silica gel cat sands can be used as an air-fresh agent, which absorbs some easy-volatile gas and moisture in the air and make the room fresh and clean for us all. Because silica gel cat sands have their unique performance, that is only small amount of waste was produced, the pets'owners will become happy and relaxed.<li>Small Amount and Long Term of Usage. A bag(3.8L) of cat sands can be used for one cat, one month.<li>Various Colours and Different Scents Pleasing pets.</ul>",
               "Shape: pellets. Color: white. High efficient drying. Strong adsorption of moisture. Decreases the dew point to below -77 °C. High mechanical strength.",
               "Shape: pellets or lumps. Color: white. Average pore diameter: 8-10mm. Specific surfave area: 300-400 m2/g. Pore volume: 0.8-1.0 ml/g. Specific heat: 0.92KJ/kg.°C. Thermal conductivity: 0.167 KJ/m.hr.°C."]];
var apps   = [["<ul><li>Mainly used for absorbing moisture, anti-rusting of instruments, gauges and equipment in the enclosed conditions. After absorbing moisture, it turns from blue to red, visually indicating the relative humidity of the given environments. <li>When being used with ordinary silica gel or drier, it indicates to which extent the drier absorbs the moisture and judges the relative humidity of a given environment. It is widely used as silica gel drier for the packing of precision instruments, leathers, shoes, clothes, foodstuffs, medicines and household electric appliances,etc.</ul>",
               "Mainly for drying and indicating humidity of precision instruments, medicine, petrol chemicals, foodstuff, clothing, leather, electric appliances, other industrial gases, etc. Put proper amounts in a suitable container or package and set the container or package where drying or humidity indication is needed. This gel can be used independently or in combination with other types of silica gel. After changing color as a result of absorbing dampness, the gel can be reused after heating to change back to its pre-use color. Heating is most suitable between 100-120 °C."],
              ["Mainly used for the dewatering of natural gas, adsorption and separation of light hydrocarbon at variable temperatures. It may also be used as catalyst and catalyst carrier in petrochemical industry, industrial drier, liquid adsorbent and gas separator.",
               "Silica gel for packing has many different packing sizes. It can be conveniently put into the packing of various articles (for examples, instruments and gauges, electronic products, leathers, shoes, foodstuffs, medicines and household electric appliances, etc) in order to keep the articles from damp, mildew or rust corrosion.",
               "Mainly used for drying and moisture proof. May also be used as catalyst carriers, adsorbents, separators and variable-pressure adsorbents, etc.",                              
               "Mainly used for air drying in the air separating process, the adsorption of acetylene in preparation of liquidified are and liquidified oxygen. Also used for drying compressed air and various industrial gases. Inpetrochemical industry, electric power industry, brewing industry and other industries. Used as liquid adsorbent, catalyst carrier, buffer drier, or silica sand for oridinary silica protective bed.",
               "Mainly used as liquid adsorbents, drier and perfume carriers. Also be used as catatyst carriers, silica sands, etc.",
               "Used as the raw material for preparation of silica sand. After being further dried and screened, it forms macro-pored silica gel which is used as drier, adsorbent and catalyst carrier."],
              ["Used as the carrier of identifier for many poisnous and harmful gases in atmospheric monitoring. Also used for the monitoring of inflammable and explosive gases in mining industry. Also widely used for separating and purifying complex organic compounds.",
               "<ul><li>It has large specific surface area and numerous fine-pored structure. It adsorbs the proteins which cause beer turbid and removes them through filtering in several minutes. Prolong beer storage period by 180-240 days and keep beer from being cold muddy. <li>Does not affect the beer foam or taste. Does not have any adverse effect on the beer foam or taste. <li> Improve the filter promotion. Chemically stable. No beer soluble substances. Surface area and porous structure are superior to diatomite. Ideal filter promotion.</ul>",
               "<ul><li>Spread out a Iayer of cat sands with thickness 1.5 inch in a cat sand box.<li>Clean the waste regularly to keep the box clean.<li>If you have several cats, you may shorten the replace period and mustn't put too many cat sands. A bag (3.8L) for one cat one month; two cats, 15days; three cats, about 10 days.<li>Cat sands saturated by the pet feces must be moved with the spoon. <li>The method for prolonging the use period:<ul><li>As using them, we should put the box in a ventilating and dry place. <li>After use, put them in a dry place.</ul>",
               "Mainly used for drying and storage of precision instruments, gauges, as well as dewatering and purifying of high purity gases.",
               "Used for moisture-proof packing, hehydration and purification of industrial gases. Used for removing organic acids and hight polymers in the insulation oils. Used for adsorbing high molecular proteins in fermented products. Used as catalysts and catalest carriers."]];
var sizes  = [["1-3mm, <a href='blue-gel-order.html'>2-5mm</a>, 4-8mm.",""],
              ["2-4mm, 1-3mm","",
               "0.5-1.5 mm, 0.5-1 mm, 2-4 mm, 2-5 mm, 4-8 mm.",
               "2-5mm, 4-8mm",
               "0.5-1.5mm, 2-5mm, 3-5.5mm, 4-8mm",
               "1-8mm"],
              ["","","","2-5mm",""]];
var pack   = [["<a href='blue-gel-order.html'>25kg</a> or 170kg per drum.",""],
              ["25kg per compound bag or 500kg per container bag",
               "1g 2g <a href='desiccant-packaging-order.html'>3g</a> 5g 10g 30g 50g 100g 250g 1000g.",
               "25kg per bag or 500 kg per bag, net.",
               "20kg or 25kg per compound bag, 500kg per container bag",
               "15kg per compound bag or 300kg per compound bag.",
               "15kg per compund bag."],
              ["","","","20 bottles in a box of 500g net per bottle.","15kg per compound bag."]];
var notes  = [["Packing and size may be customized per customer'sspecific requirements.",""],
              ["Packing and size may be customized per customer's specific requirements.",
               "Polyethylene compound paper, OPP plastic film, nonwoven fabric, cloth.",
               "The moisture content, packing and size may be customized per customer's specific requirements.",
               "Packing and size may be customized per customer's specific requirements.",
               "The moisture content, packing and size may be customized per your specific requirements.",
               "Packing and size may be customized per customer's specific requirements."],
              ["Packing and size may be customized per customer's specific requirements.","","",
               "Packing and size may be customized per customer's specific requirements.",
               "Packing and size may be customized per customer's specific requirements."]];



function bl_data()
{
  document.write("      <table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent9 align='center'> Item </td>");
  document.write("          <td class=clsContent9 align='center'>Blue gel<br>indicator </td>");
  document.write("          <td class=clsContent9 align='center'>Discoloring<br>silica gel</td>");
  document.write("          <td class=clsContent9 align='center'>Blue<br>silica gel</td>");
  document.write("          <td class=clsContent9 align='center'>Typical<br>values</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td rowspan='4' class=clsContent5>Adsorption<br>capacity, %</td>");
  document.write("          <td class=clsContent5>RH=20 % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>8.0 </td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>8.5</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=35 % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>13.0</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>13.6</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=50 % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>20.0</td>");
  document.write("          <td class=clsContent8 align='center'>20.0</td>");
  document.write("          <td class=clsContent8 align='center'>18.0</td>");
  document.write("          <td class=clsContent8 align='center'>22.5</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=90 % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>28.0</td>");
  document.write("          <td class=clsContent8 align='center'>31.4</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Rattler loss, % &#8804</td>");
  document.write("          <td class=clsContent8 align='center'>10.0</td>");
  document.write("          <td class=clsContent8 align='center'>10.0</td>");
  document.write("          <td class=clsContent8 align='center'>10.0 </td>");
  document.write("          <td class=clsContent8 align='center'>0.5</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Qualified size ratio, % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>96</td>");
  document.write("          <td class=clsContent8 align='center'>90</td>");
  document.write("          <td class=clsContent8 align='center'>90</td>");
  document.write("          <td class=clsContent8 align='center'>97</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Loss on heating, % &#8804;</td>");
  document.write("          <td class=clsContent8 align='center'>5.0</td>");
  document.write("          <td class=clsContent8 align='center'>5.0</td>");
  document.write("          <td class=clsContent8 align='center'>5.0</td>");
  document.write("          <td class=clsContent8 align='center'>0.9</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td rowspan='3' class=clsContent5>Color</td>");
  document.write("          <td class=clsContent5>RH=20%</td>");
  document.write("          <td class=clsContent8 align='center'>Blue or light blue</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>&nbsp;</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=35%</td>");
  document.write("          <td class=clsContent8 align='center'>Purple or purplish red</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>&nbsp;</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=90%</td>");
  document.write("          <td class=clsContent8 align='center'>Light red</td>");
  document.write("          <td class=clsContent8 align='center'>Light red light</td>");
  document.write("          <td class=clsContent8 align='center'>Purple or light red</td>");
  document.write("          <td class=clsContent8 align='center'>&nbsp;</td>");
  document.write("        </tr>");
  document.write("      </table>");
}

function cv_data()
{
  document.write("      <table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent9 align='center' rowspan='2'> Item </td>");
  document.write("          <td class=clsContent9 align='center' colspan='3'>Index </td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent9 align='center'>WG-1</td>");
  document.write("          <td class=clsContent9 align='center'>WG-2</td>");
  document.write("          <td class=clsContent9 align='center'>WG-3</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td rowspan='2' class=clsContent5>Adsorption (%)</td>");
  document.write("          <td class=clsContent5>RH=20% &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>9.0 </td>");
  document.write("          <td class=clsContent8 align='center'>9.0</td>");
  document.write("          <td class=clsContent8 align='center'>9.0</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=50% &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>22.0</td>");
  document.write("          <td class=clsContent8 align='center'>22.0</td>");
  document.write("          <td class=clsContent8 align='center'>22.0</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Rate of wearing, % &#8804</td>");
  document.write("          <td class=clsContent8 align='center'>10.0</td>");
  document.write("          <td class=clsContent8 align='center'>10.0</td>");
  document.write("          <td class=clsContent8 align='center'>10.0 </td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Granularity eligibility, % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>90.0</td>");
  document.write("          <td class=clsContent8 align='center'>90.0</td>");
  document.write("          <td class=clsContent8 align='center'>90.0</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Loss after heating, % &#8804;</td>");
  document.write("          <td class=clsContent8 align='center'>2.0</td>");
  document.write("          <td class=clsContent8 align='center'>2.0</td>");
  document.write("          <td class=clsContent8 align='center'>2.0</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td rowspan='3' class=clsContent5>Color variation</td>");
  document.write("          <td class=clsContent5>RH=20% &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>Orange-red</td>");
  document.write("          <td class=clsContent8 align='center'>Light brown-yellow</td>");
  document.write("          <td class=clsContent8 align='center'>Yellowish green</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=35% &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>Light orange-red</td>");
  document.write("          <td class=clsContent8 align='center'>Light brown-green</td>");
  document.write("          <td class=clsContent8 align='center'>Greenish yellow</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=50% &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>Light orange</td>");
  document.write("          <td class=clsContent8 align='center'>Light blackish-green</td>");
  document.write("          <td class=clsContent8 align='center'>Light blue</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Original color</td>");
  document.write("          <td class=clsContent8 align='center'>Purple</td>");
  document.write("          <td class=clsContent8 align='center'>Orange</td>");
  document.write("          <td class=clsContent8 align='center'>Light yellow</td>");
  document.write("        </tr>");
  document.write("      </table>");
}            

function al_data()
{
  document.write("<table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent9 align='center'>Item</td>");
  document.write("    <td class=clsContent9 align='center'>Spec</td>");
  document.write("    <td class=clsContent9 align='center'>Typical Values (2-5mm)</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td rowspan='3' class=clsContent5>Adsorption Capacity %</td>");
  document.write("    <td class=clsContent8 align='center'>RH=20% &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>8.5</td>");
  document.write("    <td class=clsContent8 align='center'>RH=10%, 6.9</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent8 align='center'>RH=40% &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>18.0</td>");
  document.write("    <td class=clsContent8 align='center'>--</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent8 align='center'>RH=80% &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>36.0</td>");
  document.write("    <td class=clsContent8 align='center'>43.7</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Pore Volumes, ml/g</td>");
  document.write("    <td class=clsContent8 align='center'>0.4-0.7</td>");
  document.write("    <td class=clsContent8 align='center'>--</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Specific Surface Area, m<sup>2</sup>/g</td>");
  document.write("    <td class=clsContent8 align='center'>600-800</td>");
  document.write("    <td class=clsContent8 align='center'>--</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Bulk density, g/L &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>650</td>");
  document.write("    <td class=clsContent8 align='center'>719</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>pH</td>");
  document.write("    <td class=clsContent8 align='center'>4-8</td>");
  document.write("    <td class=clsContent8 align='center'>--</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Qualified ratio of spherical granules % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>80</td>");
  document.write("    <td class=clsContent8 align='center'>--</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Loss on heating % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>3.0</td>");
  document.write("    <td class=clsContent8 align='center'>2.1</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Al<sub>2</sub>O<sub>3</sub> content %</td>");
  document.write("    <td class=clsContent8 align='center'>0.5-8.0</td>");
  document.write("    <td class=clsContent8 align='center'>--</td>");
  document.write("  </tr>");
  document.write("</table>");
}
function fp_data()
{
  document.write("      <table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' rowspan='2' class=clsContent9 align='center'>");
  document.write("            Item");
  document.write("          </td>");
  document.write("          <td colspan='3' class=clsContent9 align='center'>");
  document.write("            Specifications");
  document.write("          </td>");
  document.write("          <td rowspan='2' class=clsContent9 align='center'> ");
  document.write("            Typical<br>values");
  document.write("          </td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent9 align='center'>");
  document.write("            Superior class");
  document.write("          </td>");
  document.write("          <td class=clsContent9 align='center'>");
  document.write("            First class");
  document.write("          </td>");
  document.write("          <td class=clsContent9 align='center'>");
  document.write("            Qualified class");
  document.write("          </td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td rowspan='3' class=clsContent5>Adsorption<br>Capacity </td>");
  document.write("          <td class=clsContent5>RH=20%, % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>8.0 </td>");
  document.write("          <td class=clsContent8 align='center'>7.0</td>");
  document.write("          <td class=clsContent8 align='center'>6.0</td>");
  document.write("          <td class=clsContent8 align='center'>11.2</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=50%, % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>20.0</td>");
  document.write("          <td class=clsContent8 align='center'>19.0</td>");
  document.write("          <td class=clsContent8 align='center'>18.0</td>");
  document.write("          <td class=clsContent8 align='center'>29.2</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent5>RH=90%, % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>30.0</td>");
  document.write("          <td class=clsContent8 align='center'>29.0</td>");
  document.write("          <td class=clsContent8 align='center'>28.0</td>");
  document.write("          <td class=clsContent8 align='center'>37.6</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Loss on heating, % &#8804;</td>");
  document.write("          <td class=clsContent8 align='center'>2.0</td>");
  document.write("          <td class=clsContent8 align='center'>4.0</td>");
  document.write("          <td class=clsContent8 align='center'>6.0 </td>");
  document.write("          <td class=clsContent8 align='center'>1.0</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>pH value </td>");
  document.write("          <td class=clsContent8 align='center'>4-8</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>4</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Specific resistance, &#937;.cm &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>3000</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>5630</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Silica, % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>98</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>98.5</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Qualified ratio of spherical granules, % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>82</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>90</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Size </td>");
  document.write("          <td class=clsContent8 align='center'>*</td>");
  document.write("          <td class=clsContent8 align='center'>*</td>");
  document.write("          <td class=clsContent8 align='center'>*</td>");
  document.write("          <td class=clsContent8 align='center'>2-5<br>mm </td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Bulk density, g/L</td>");
  document.write("          <td class=clsContent8 align='center'>*</td>");
  document.write("          <td class=clsContent8 align='center'>*</td>");
  document.write("          <td class=clsContent8 align='center'>*</td>");
  document.write("          <td class=clsContent8 align='center'>784</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='6' class=clsContent5>* Negotiable </td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='6' class=clsContent5>Note: qualified ratio of spherical granules is only ");
  document.write("            applicable to fine-pored silica gel </td>");
  document.write("        </tr>");
  document.write("      </table>");
}

function fn_data()
{
  document.write("<table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("  <tr> ");
  document.write("    <td rowspan='3' class=clsContent9 align='center'>Item</td>");
  document.write("    <td colspan='4' class=clsContent9 align='center'>Specifications</td>");
  document.write("    <td rowspan='2' class=clsContent9 align='center'>Typical values</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent9 align='center'>FNG-I</td>");
  document.write("    <td colspan='2' class=clsContent9 align='center'>FNG-II</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent9 align='center'>First class</td>");
  document.write("    <td class=clsContent9 align='center'>Qualified</td>");
  document.write("    <td class=clsContent9 align='center'>First class</td>");
  document.write("    <td class=clsContent9 align='center'>Qualified</td>");
  document.write("    <td class=clsContent9 align='center'>FNG-II</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Qualified size ratio, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>90</td>");
  document.write("    <td class=clsContent8 align='center'>85</td>");
  document.write("    <td class=clsContent8 align='center'>90</td>");
  document.write("    <td class=clsContent8 align='center'>85</td>");
  document.write("    <td class=clsContent8 align='center'>91</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Compressive strength, N &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>98</td>");
  document.write("    <td class=clsContent8 align='center'>68</td>");
  document.write("    <td class=clsContent8 align='center'>98</td>");
  document.write("    <td class=clsContent8 align='center'>68</td>");
  document.write("    <td class=clsContent8 align='center'>99</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Wear and tear ratio, % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>2.0</td>");
  document.write("    <td class=clsContent8 align='center'>5.0</td>");
  document.write("    <td class=clsContent8 align='center'>2.0</td>");
  document.write("    <td class=clsContent8 align='center'>5.0</td>");
  document.write("    <td class=clsContent8 align='center'>1.5</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Adsorption capacity, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>36</td>");
  document.write("    <td class=clsContent8 align='center'>35</td>");
  document.write("    <td class=clsContent8 align='center'>72</td>");
  document.write("    <td class=clsContent8 align='center'>70</td>");
  document.write("    <td class=clsContent8 align='center'>72</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Bulk density, g/L</td>");
  document.write("    <td class=clsContent8 align='center'>600-700</td>");
  document.write("    <td class=clsContent8 align='center'>600-700</td>");
  document.write("    <td class=clsContent8 align='center'>400-500</td>");
  document.write("    <td class=clsContent8 align='center'>400-500</td>");
  document.write("    <td class=clsContent8 align='center'>480</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Qualified ratio of spherical granules, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>95</td>");
  document.write("    <td class=clsContent8 align='center'>90</td>");
  document.write("    <td class=clsContent8 align='center'>95</td>");
  document.write("    <td class=clsContent8 align='center'>90</td>");
  document.write("    <td class=clsContent8 align='center'>96.5</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Loss on heating, 170 2hr, % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>3</td>");
  document.write("    <td class=clsContent8 align='center'>5</td>");
  document.write("    <td class=clsContent8 align='center'>3</td>");
  document.write("    <td class=clsContent8 align='center'>5</td>");
  document.write("    <td class=clsContent8 align='center'>3.6</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Non-breaking ratio in water, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>95</td>");
  document.write("    <td class=clsContent8 align='center'>90</td>");
  document.write("    <td class=clsContent8 align='center'>95</td>");
  document.write("    <td class=clsContent8 align='center'>90</td>");
  document.write("    <td class=clsContent8 align='center'>98</td>");
  document.write("  </tr>");
  document.write("</table>");
}

function tb_data()
{
  document.write("<table width='350' border='1' cellspacing='1' cellpadding='1'> ");
  document.write("  <tr> ");
  document.write("    <td rowspan='2' colspan='2' class=clsContent9 align='center'>Item</td>");
  document.write("    <td colspan='2' class=clsContent9 align='center'>Specifications</td>");
  document.write("    <td rowspan='2' class=clsContent9 align='center'>Typical values (2-5mm)</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent9 align='center'>Superior class</td>");
  document.write("    <td class=clsContent9 align='center'>First class</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td rowspan='3' class=clsContent5>Adsorption capacity %</td>");
  document.write("    <td class=clsContent8 align='center'>RH=20% &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>4.0</td>");
  document.write("    <td class=clsContent8 align='center'>3.0</td>");
  document.write("    <td class=clsContent8 align='center'>6.2</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent8 align='center'>RH=50% &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>11.0</td>");
  document.write("    <td class=clsContent8 align='center'>10.0</td>");
  document.write("    <td class=clsContent8 align='center'>16.2</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent8 align='center'>RH=90% &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>70.0</td>");
  document.write("    <td class=clsContent8 align='center'>50.0</td>");
  document.write("    <td class=clsContent8 align='center'>73.9</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Loss on heating, % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>2.0</td>");
  document.write("    <td class=clsContent8 align='center'>2.0</td>");
  document.write("    <td class=clsContent8 align='center'>1.0</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Specific resistance (&#937; .cm) &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>5000</td>");
  document.write("    <td class=clsContent8 align='center'>3000</td>");
  document.write("    <td class=clsContent8 align='center'>12500</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>pH</td>");
  document.write("    <td class=clsContent8 align='center'>5.5-7.5</td>");
  document.write("    <td class=clsContent8 align='center'>4-8</td>");
  document.write("    <td class=clsContent8 align='center'>6.7</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Bulk density, g/L</td>");
  document.write("    <td class=clsContent8 align='center'>500-600</td>");
  document.write("    <td class=clsContent8 align='center'>500-600</td>");
  document.write("    <td class=clsContent8 align='center'>518</td>");
  document.write("  </tr>");
  document.write("</table>");
}

function tc_data()
{
  document.write("      <table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent9 align='center' rowspan='3'> Item </td>");
  document.write("          <td class=clsContent9 align='center' colspan='4'>Specifications</td>");
  document.write("          <td class=clsContent9 align='center' rowspan='3'>Typical values</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent9 align='center' colspan='2'>C-I Type</td>");
  document.write("          <td class=clsContent9 align='center' colspan='2'>C-II Type</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td class=clsContent9 align='center'>Superior class</td>");
  document.write("          <td class=clsContent9 align='center'>First class</td>");
  document.write("          <td class=clsContent9 align='center'>0.5-3 mm</td>");
  document.write("          <td class=clsContent9 align='center'>1.5-5 mm</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Loss on heating % &#8804;</td>");
  document.write("          <td class=clsContent8 align='center'>6.5</td>");
  document.write("          <td class=clsContent8 align='center'>7.0 </td>");
  document.write("          <td class=clsContent8 align='center'>6.5</td>");
  document.write("          <td class=clsContent8 align='center'>6.5</td>");
  document.write("          <td class=clsContent8 align='center'>3.2</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Low size limit, % &#8804;</td>");
  document.write("          <td class=clsContent8 align='center'>5.0</td>");
  document.write("          <td class=clsContent8 align='center'>5.0</td>");
  document.write("          <td class=clsContent8 align='center'>5.0</td>");
  document.write("          <td class=clsContent8 align='center'>5.0</td>");
  document.write("          <td class=clsContent8 align='center'>0.2</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Pore volume, ml/g &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>0.78</td>");
  document.write("          <td class=clsContent8 align='center'>0.76</td>");
  document.write("          <td class=clsContent8 align='center'>0.65</td>");
  document.write("          <td class=clsContent8 align='center'>0.65</td>");
  document.write("          <td class=clsContent8 align='center'>0.92</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Qualified ratio of spherical granular, % &#8805;</td>");
  document.write("          <td class=clsContent8 align='center'>60</td>");
  document.write("          <td class=clsContent8 align='center'>60</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>87</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Ratio of spherical granular, % &#8804;</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>10.0</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Bulk density, g/l</td>");
  document.write("          <td class=clsContent8 align='center'>400-480</td>");
  document.write("          <td class=clsContent8 align='center'>480-520</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>--</td>");
  document.write("          <td class=clsContent8 align='center'>451</td>");
  document.write("        </tr>");
  document.write("      </table>");
}

function ac_data()
{
  document.write("<table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("  <tr>");
  document.write("    <td class=clsContent9 align='center'>Item</td>");
  document.write("    <td class=clsContent9 align='center'>Specifications</td>");
  document.write("    <td class=clsContent9 align='center'>Typical values</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Size (um)</td>");
  document.write("    <td class=clsContent8 align='center'>280-600</td>");
  document.write("    <td class=clsContent8 align='center'>300</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Qualified size ratio, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>94</td>");
  document.write("    <td class=clsContent8 align='center'>96</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Free acid (hydrochloric acid) &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>0.05</td>");
  document.write("    <td class=clsContent8 align='center'>&lt;0.05</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Pore volume, ml/g &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>0.5</td>");
  document.write("    <td class=clsContent8 align='center'>0.8</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Ignition loss, % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>3.0</td>");
  document.write("    <td class=clsContent8 align='center'>1.2</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Iron (Fe) % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>0.015</td>");
  document.write("    <td class=clsContent8 align='center'>&lt; 0.015</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Fuming sulphuric acid test</td>");
  document.write("    <td class=clsContent8 align='center'>white</td>");
  document.write("    <td class=clsContent8 align='center'>white</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Specific surface area, m<sup>2</sup>/g</td>");
  document.write("    <td class=clsContent8 align='center'>300-400</td>");
  document.write("    <td class=clsContent8 align='center'>300</td>");
  document.write("  </tr>");
  document.write("</table>");
}

function be_data()
{
  document.write("<table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("  <tr>");
  document.write("    <td class=clsContent9 align='center'>Item</td>");
  document.write("    <td class=clsContent9 align='center'>Specifications</td>");
  document.write("    <td class=clsContent9 align='center'>Typical values</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Pore volume, ml/g</td>");
  document.write("    <td class=clsContent8 align='center'>0.9-1.05</td>");
  document.write("    <td class=clsContent8 align='center'>1.1</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Specific surface area, m<sup>2</sup>/g</td>");
  document.write("    <td class=clsContent8 align='center'>300-600</td>");
  document.write("    <td class=clsContent8 align='center'>435</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Size (um)</td>");
  document.write("    <td class=clsContent8 align='center'>7-15</td>");
  document.write("    <td class=clsContent8 align='center'>9.4</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>pH</td>");
  document.write("    <td class=clsContent8 align='center'>3-6</td>");
  document.write("    <td class=clsContent8 align='center'>5.6</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Moisture % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>8.0</td>");
  document.write("    <td class=clsContent8 align='center'>1.7</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Heavy metal (by Pb) % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>0.003</td>");
  document.write("    <td class=clsContent8 align='center'> &lt; 0.003</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Lead (Pb) % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>0.001</td>");
  document.write("    <td class=clsContent8 align='center'>&lt; 0.001</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td class=clsContent5>Arsenic (As) % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>0.0003</td>");
  document.write("    <td class=clsContent8 align='center'>&lt; 0.0003</td>");
  document.write("  </tr>");
  document.write("</table>");
}

function cs_data()
{
  document.write("      <table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent9 align='center'> Varieties</td>");
  document.write("          <td class=clsContent9 align='center' colspan='4'>Specifications</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Type C spherical cat sands </td>");
  document.write("          <td class=clsContent8 align='center' colspan='4'>1-8 mm</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Type C Lump cat sands </td>");
  document.write("          <td class=clsContent8 align='center' colspan='4'>1-8 mm</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Water-tolerant spherical cat sands </td>");
  document.write("          <td class=clsContent8 align='center' colspan='4'>1-8 mm</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Large pore Lump cat sands </td>");
  document.write("          <td class=clsContent8 align='center' colspan='4'>1-6 mm</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Type B silica gel cat sands </td>");
  document.write("          <td class=clsContent8 align='center' colspan='4'>1-8 mm</td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' class=clsContent5>Alusil cat sands </td>");
  document.write("          <td class=clsContent8 align='center' colspan='4'>1-8 mm</td>");
  document.write("        </tr>");
  document.write("      </table>");
}

function he_data()
{
  document.write("<table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent9 align='center'>Item</td>");
  document.write("    <td class=clsContent9 align='center'>Specifications</td>");
  document.write("    <td class=clsContent9 align='center'>Typical values</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Qualified ratio of spherical granules, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>90</td>");
  document.write("    <td class=clsContent8 align='center'>92</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td rowspan='5' class=clsContent5 width=20>Adsorption capacity</td>");
  document.write("    <td class=clsContent8 align='center'>RH= 3%, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>10.0</td>");
  document.write("    <td class=clsContent8 align='center'>10.5</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent8 align='center'>RH=10%, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>11.5</td>");
  document.write("    <td class=clsContent8 align='center'>12.5</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent8 align='center'>RH=20%, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>13.5</td>");
  document.write("    <td class=clsContent8 align='center'>14.5</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent8 align='center'>RH=35%, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>24.5</td>");
  document.write("    <td class=clsContent8 align='center'>25.0</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent8 align='center'>RH=50%, % &#8805;</td>");
  document.write("    <td class=clsContent8 align='center'>30.0</td>");
  document.write("    <td class=clsContent8 align='center'>31.0</td>");
  document.write("  </tr>");
  document.write("</table>");
}

function mp_data()
{
  document.write("<table width='350' border='1' cellspacing='1' cellpadding='1'>");
  document.write("  <tr> ");
  document.write("    <td rowspan='4' class=clsContent9 align='center'>Item</td>");
  document.write("    <td colspan='10' class=clsContent9 align='center'>Specifications</td>");
  document.write("    <td rowspan='4' class=clsContent9 align='center'>Typical values</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='6' class=clsContent5>Macro-pored spherical silica gel</td>");
  document.write("    <td colspan='4' rowspan='2' class=clsContent5>Macro-pored lump silica gel</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class=clsContent5>Superior class</td>");
  document.write("    <td colspan='2' class=clsContent5>First class</td>");
  document.write("    <td colspan='2' class=clsContent5>Qualified class</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>4.0-8.0 mm</td>");
  document.write("    <td class=clsContent5>2.0-5.6 mm</td>");
  document.write("    <td class=clsContent5>4.0-8.0 mm</td>");
  document.write("    <td class=clsContent5>2.0-5.6 mm</td>");
  document.write("    <td class=clsContent5>4.0-8.0 mm</td>");
  document.write("    <td class=clsContent5>2.0-5.6 mm</td>");
  document.write("    <td class=clsContent5>&#8805; 5.6mm</td>");
  document.write("    <td class=clsContent5>2.8-8.0 mm</td>");
  document.write("    <td class=clsContent5>1.4-4.0 mm</td>");
  document.write("    <td class=clsContent5>0.25-2.0 mm</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Qualified size ratio, % &#8805;</td>");
  document.write("    <td colspan='4' class=clsContent8 align='center'>94</td>");
  document.write("    <td colspan='2' class=clsContent8 align='center'>90</td>");
  document.write("    <td colspan='4' class=clsContent8 align='center'>90</td>");
  document.write("    <td class=clsContent8 align='center'>100</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Rattler loss % &#8804;</td>");
  document.write("    <td class=clsContent8 align='center'>4</td>");
  document.write("    <td class=clsContent8 align='center'>6</td>");
  document.write("    <td class=clsContent8 align='center'>6</td>");
  document.write("    <td class=clsContent8 align='center'>8</td>");
  document.write("    <td class=clsContent8 align='center'>8</td>");
  document.write("    <td class=clsContent8 align='center'>10</td>");
  document.write("    <td colspan='2' class=clsContent8 align='center'>10</td>");
  document.write("    <td class=clsContent8 align='center'>80</td>");
  document.write("    <td class=clsContent8 align='center'>--</td>");
  document.write("    <td class=clsContent8 align='center'>0.5</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Bulk density, g/L &#8805;</td>");
  document.write("    <td colspan='6' class=clsContent8 align='center'>400</td>");
  document.write("    <td colspan='4' class=clsContent8 align='center'>400</td>");
  document.write("    <td class=clsContent8 align='center'>440</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Pore volume, mL/g &#8805;</td>");
  document.write("    <td colspan='2' class=clsContent8 align='center'>0.85</td>");
  document.write("    <td colspan='2' class=clsContent8 align='center'>0.75</td>");
  document.write("    <td colspan='2' class=clsContent8 align='center'>0.72</td>");
  document.write("    <td colspan='4' class=clsContent8 align='center'>0.76</td>");
  document.write("    <td class=clsContent8 align='center'>0.91</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Qualified ratio of spherical granules, %</td>");
  document.write("    <td colspan='2' class=clsContent8 align='center'>78</td>");
  document.write("    <td colspan='2' class=clsContent8 align='center'>75</td>");
  document.write("    <td colspan='2' class=clsContent8 align='center'>--</td>");
  document.write("    <td colspan='4' class=clsContent8 align='center'>--</td>");
  document.write("    <td class=clsContent8 align='center'>0.3</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td class=clsContent5>Loss on heating, % &#8804;</td>");
  document.write("    <td colspan='6' class=clsContent8 align='center'>5</td>");
  document.write("    <td colspan='4' class=clsContent8 align='center'>5</td>");
  document.write("    <td class=clsContent8 align='center'>2.4</td>");
  document.write("  </tr>");
  document.write("</table>");
}

function sg_all(eid, pid)
{
  document.write("<table border='0' cellspacing='0' cellpadding='0'>");
  document.write("  <tr> ");
  if (eid == 1 && pid == 1)
    document.write("    <td width='96'><img src='images/blue-silica-gel.gif' width='135' height='101' alt='Blue Silica Gel'></td>");
  else if (eid == 2 && pid == 2)
    document.write("    <td width='96'><img src='images/desiccant-packaging.gif' width='80' height='107' alt='Desiccant Packaging'></td>");
  else if (eid == 3 && pid == 3)
    document.write("    <td width='96'><img src='images/cat-litter.gif' width='80' height='106' alt='Cat Litter'></td>");
  else
    document.write("    <td width='96'><img src='images/silica-gel.gif' width='96' height='70' alt='Silica Gel'></td>");
  document.write("    <td width='20'>&nbsp;</td>");
  document.write("    <td class='clsTitle'>" + titles[eid-1][pid-1] + "<hr color='darkgreen'></td>");
  document.write("  </tr>");
  document.write("</table><br><br>");

  document.write("<table width='460' border='0' cellspacing='0' cellpadding='0'>");
  if (eid == 1 && pid == 1 || eid == 2 && pid == 2 || eid == 3 && pid == 3)
  {
    document.write("  <tr> ");
    document.write("    <td width='96'>&nbsp;</td>");
    document.write("    <td width='20'>&nbsp;</td>");
    if (eid == 1 && pid == 1)
      document.write("    <td align=right class=clsContent2>$" + priceFormat(blueUnitPrice) + "/25kg drum<br><a href='blue-gel-order.html'><img src='images/order_btn.gif' width='60' height='26' border='0'></a></td>");
    else if (eid == 2 && pid == 2)
      document.write("    <td align=right class=clsContent2>$" + priceFormat(desiccantUnitPrice) + "/packet<br><a href='desiccant-packaging-order.html'><img src='images/order_btn.gif' width='60' height='26' border='0'></a></td>");
    document.write("  </tr>");
    document.write("  <tr> ");
    document.write("    <td width='96'>&nbsp;</td>");
    document.write("    <td width='20'>&nbsp;</td>");
    document.write("    <td>&nbsp;</td>");
    document.write("  </tr>");
  }
  
  document.write("  <tr>");
  document.write("    <td width='100' valign='top' class=clsContent7>&nbsp;&nbsp;");
  if (pid == 3 && pid == 3)
    document.write("Features</td>");
  else if (pid == 2 && pid == 2)
    document.write("Types</td>");
  else
    document.write("Parameters</td>");
  document.write("    <td width='360' class=clsContent>" + params[eid-1][pid-1] + "</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='100' valign='top' class=clsContent7>&nbsp;&nbsp;Applications </td>");
  document.write("    <td width='360' class=clsContent>" + apps[eid-1][pid-1] + "</td>");
  document.write("  </tr>");
  if (eid == 2 && pid == 2)
    ;
  else
  {
    document.write("<tr>");
    document.write("  <td width='100' valign='top' class=clsContent7>&nbsp;&nbsp;Technical<br>&nbsp;&nbsp;Data </td>");
    document.write("  <td width='360' class=clsContent>");
    if (eid == 1)
    {
      if (pid == 1)
        bl_data();
      else if (pid == 2)
        cv_data();
    }
    else if (eid == 2)
    {
      if (pid == 1)
        al_data();
      else if (pid == 3)
        fp_data();
      else if (pid == 4)
        fn_data();
      else if (pid == 5)
        tb_data();
      else if (pid == 6)
        tc_data();
    }
    else if (eid == 3)
    {
      if (pid == 1)
        ac_data();
      else if (pid == 2)
        be_data();
      else if (pid == 3)
        cs_data();
      else if (pid == 4)
        he_data();
      else if (pid == 5)
        mp_data();
    }
    document.write("  </td>");
    document.write("</tr>");
  }
  if (sizes[eid-1][pid-1].length*1 > 0)
  {
    document.write("<tr>");
    document.write("  <td width='100' class=clsContent7>&nbsp;&nbsp;Sizes </td>");
    document.write("  <td width='360' class=clsContent>" + sizes[eid-1][pid-1] + "</td>");
    document.write("</tr>");
  }
  if (pack[eid-1][pid-1].length*1 > 0)
  {
    document.write("<tr>");
    document.write("  <td width='100' class=clsContent7>&nbsp;&nbsp;Packing </td>");
    document.write("  <td width='360' class=clsContent>" + pack[eid-1][pid-1] + "</td>");
    document.write("</tr>");
  }
  if (notes[eid-1][pid-1].length*1 > 0)
  {
    document.write("<tr>");
    document.write("  <td width='100' valign='top' class=clsContent7>&nbsp;&nbsp;");
    if (eid == 2 && pid == 2)
      document.write("Packing &nbsp;&nbsp;Materials</td>");
    else
      document.write("Note </td>");
    document.write("  <td width='360' class=clsContent>" + notes[eid-1][pid-1] + "</td>");
    document.write("</tr>");
  }
  if (eid == 1 && pid == 1 || eid == 2 && pid == 2 || eid == 3 && pid == 3)
  {
    document.write("  <tr> ");
    document.write("    <td width='96'>&nbsp;</td>");
    document.write("    <td width='20'>&nbsp;</td>");
    document.write("    <td>&nbsp;</td>");
    document.write("  </tr>");
    document.write("  <tr> ");
    document.write("    <td width='96'>&nbsp;</td>");
    document.write("    <td width='20'>&nbsp;</td>");
    if (eid == 1 && pid == 1)
      document.write("    <td align=right class=clsContent2>$" + priceFormat(blueUnitPrice) + "/25kg drum<br><a href='blue-gel-order.html'><img src='images/order_btn.gif' width='60' height='26' border='0'></a></td>");
    else if (eid == 2 && pid == 2)
      document.write("    <td align=right class=clsContent2>$" + priceFormat(desiccantUnitPrice) + "/packet<br><a href='desiccant-packaging-order.html'><img src='images/order_btn.gif' width='60' height='26' border='0'></a></td>");
    document.write("  </tr>");
  }
  document.write("</table></center><br><br><br><br><hr color='darkgreen' width='350'>");

  document.write("<div class='clsContent11'>[<a href='rare-earth.html'>Rare Earth Products</a>] ");
  document.write("[<a href='plastics.html'>Plastic Products</a>]</div><br>");
}
