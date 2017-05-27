var plid = [["B020","B030","B040","B090"],["B010","B011"],["B200","B210"]];

var plsp = [["Lateral flow cassette for test insert with size of W6.3 x L63 mm; Cassette size: W27 x L67 x H6 mm.",
             "Lateral flow cassette for test insert with size of W4 x L80 mm; Cassette size: W20 x L83 x H6 mm.",
             "Rapid flow through cassette for dual spot tests; Central hole diameter: 15 mm; Cassette size: W20 x L30 x H10 mm.",
             "Pen-style rapid test cassette. Cassette size: W14 x L140 x H7 mm."],
            ["8 well strip, flat bottom, and individual well breakable for coating immunological reagents.",
             "Used for 96 well breakable strips. "],
            ["50 ul.",
             "Size: (1) 117 x 63 mm; (2) 122 x 50 mm."]];
var plpc = [["Carton size: L62 x W35 x H32 cm; Top: 9,000 pieces/carton; 27kg/carton; Bottom: 7,200 pieces/carton; 23.6kg/carton",
             "Carton size: L52 x W31 x H34 cm; Top: 6,000 pieces/carton; 17.3kg/carton; Bottom: 7,000 pieces/carton; 20kg/carton",
             "Carton size: L51.5 x W45 x H36.5 cm; Top: 10,800 pieces/carton; 21.7kg/carton; Bottom: 10,800 pieces/carton; 24.2kg/carton",
             "&nbsp;"],
            ["Carton size: L51.5 x W45 x H36.5 cm; 7,200 pieces/carton; 23kg/carton",
             "Carton size: L78 x W35 x H37 cm; 600 pieces/carton; 15.2kg/carton"],
            ["Carton size: L52 x W31 x H34 cm; 20,000 pieces/carton; 7.4kg/carton",
             "Carton size: L27 x W27 x H35 cm for size (1); 10,000 pieces/carton; 16kg/carton. Carton size: L32 x W32 x H35 cm for size (2); 10,000 pieces/carton; 18kg/carton."]];

var plpi = [["B020thum.gif", "B030thum.gif", "B040thum.gif", "B090thum.gif"],
            ["B010thum.gif", "B011thum.gif"], 
            ["B200thum.gif", "B210thum.gif"]];


function pl_all(eid, pid)
{
  document.write("<table border='0' cellspacing='0' cellpadding='0'>");
  document.write("  <tr> ");
  document.write("    <td width='96'><img src='images/plastics.gif' width='96' height='70' alt='Plastics'></td>");
  document.write("    <td width='20'>&nbsp;</td>");
  document.write("    <td class='clsTitle'>" + pl_sitems[eid-1][pid-1] + "<hr color='darkgreen'></td>");
  document.write("  </tr>");
  document.write("</table><br><br>");

  document.write("<table width='358' border='2' cellspacing='2' cellpadding='2'>");
  document.write("  <tr> ");
  document.write("    <td width='130' class='clsHead1'> ");
  document.write("      <div align='center'>Product No.</div>");
  document.write("    </td>");
  document.write("    <td width='213' class='clsHead1'> ");
  document.write("      <div align='center'>Product Name</div>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td width='130' class='clsContent5'>" + plid[eid-1][pid-1] + "</td>");
  document.write("    <td width='213' class='clsContent5'>" + pl_sitems[eid-1][pid-1] + "</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class='clsHead1'>");
  document.write("      <div align='center'>Specifications</div>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class='clsContent5'>" + plsp[eid-1][pid-1] + "</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class='clsHead1'>");
  document.write("      <div align='center'>Packing</div>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class='clsContent5'>" + plpc[eid-1][pid-1] + "</td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class='clsHead1'>");
  document.write("      <div align='center'>Picture</div>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='2' class='clsContent5' align='center'><a href='big_prod.html?eid=" + eid + "&pid=" +  pid + "'><img src='images/" + plpi[eid-1][pid-1] + "' width='145' height='108' border='0'><br>Click on the picture for full size</a></td>");
  document.write("  </tr>");
  document.write("</table><br>");
 
  document.write("<a href='contact.html?pid=3' class='clsContent10'>Request Samples &gt&gt</a><br><br>");

  document.write("<br><br><br><hr color='darkgreen' width='350'>");

  document.write("<div class='clsContent11'>[<a href='pad-install.html'>Pad Service</a>] [<a href='prototype.html'>Mold Service</a>]</div>");
  document.write("<div class='clsContent11'>[<a href='rare-earth.html'>Rare Earth Products</a>] ");
  document.write("[<a href='silica-gel.html'>Silica Gel Products</a>]</div><br>");
}
