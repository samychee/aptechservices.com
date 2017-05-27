function prod_list(id)
{
  document.write("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
  document.write("  <tr>");
  document.write("    <td width='190' bgcolor='#eaca5b' valign='top'>");
  document.write("<br><center><span class='clsCont5'>Product List</span>");
  document.write("<hr color='darkgreen' width='190'></center>");

  plist("Cassettes");
  bullet_img("Flow Through Cassettes", "flow-through-cassette.html", (id==0?1:0));
  bullet_img("Lateral Flow Cassette A", "lateral-flow-cassette-1.html", (id==1?1:0));
  bullet_img("Lateral Flow Cassette B", "lateral-flow-cassette-2.html", (id==2?1:0));
  bullet_img("Pen-style Cassettes", "pen-style-cassette.html", (id==3?1:0));

  plist("Microwells");
  bullet_img("Microwell Strips", "microwell-strip.html", (id==4?1:0));
  bullet_img("Microwell Racks", "microwell-rack.html", (id==5?1:0));

  plist("Others");
  bullet_img("Blue Silica Gel *", "blue-gel.html", (id==6?1:0));
  bullet_img("Desiccants *", "desiccant.html", (id==7?1:0));
  bullet_img("Pipettes", "pipette.html", (id==8?1:0));
  bullet_img("Pouches", "pouch.html", (id==9?1:0));

  document.write("<br><br><br>");
  document.write("&nbsp;&nbsp;&nbsp;<span class='clsCont2'>* - online order available</span>");
  document.write("    </td>");
  document.write("    <td align='center' valign='top'>");
}

function serv_list(id)
{
  document.write("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
  document.write("  <tr>");
  document.write("    <td width='190' bgcolor='#eaca5b' valign='top'>");
  document.write("<br><center><span class='clsCont5'>Services</span><br>");
  document.write("<hr color='darkgreen' width='190'></center>");
  bullet_img("Custom Molding", "molding.html", (id==0?1:0));
  bullet_img("Outsourcing", "outsourcing.html", (id==1?1:0));
  bullet_img("Printing", "printing.html", (id==2?1:0));

  document.write("<br><br><br>");
  document.write("    </td>");
  document.write("    <td align='center' valign='top'>");
}

function prod_tail()
{
  document.write("</td></tr></table>");
}
