var yObj = new Date();
var theYear = yObj.getFullYear();
var isNS = (navigator.appName.indexOf("Netscape") != -1);

function header(id)
{
  document.write("<map name='top'>");
  document.write("<area coords='152,46,208,55' href='rare-earth.html' alt='Rare Earth'>");
  document.write("<area coords='241,46,291,55' href='silica-gel.html' alt='Silica Gel'>");
  document.write("<area coords='325,46,367,55' href='plastics.html' alt='Plastics'>");
  document.write("<area coords='399,46,442,55' href='rare-earth-service.html' alt='Services'></map>");
  document.write("<map name='menubtns'>");
  if (id == 0)
    document.write("<area coords='18,1,96,1,110,25,5,25' ");
  else if (id == 1)
    document.write("<area coords='17,4,96,4,105,17,97,25,5,25' ");
  else
    document.write("<area coords='17,4,97,4,110,25,5,25' ");
  document.write("shape='polygon' href='index.html' onMouseOver='showMenu(1)' onMouseOut='hideMenu(1)' name='menubutton1'>");
  if (id == 1)
    document.write("<area coords='113,1,193,1,205,25,98,25' ");
  else if (id == 2)
    document.write("<area coords='112,4,193,4,201,17,197,25,111,25,107,17' ");
  else
    document.write("<area coords='112,4,193,4,205,25,111,25,107,17' ");
  document.write("shape='polygon' href='periodic.html' onMouseOver='showMenu(2)' onMouseOut='hideMenu(2)' name='menubutton2'>");
  if (id == 2)
    document.write("<area coords='214,1,294,1,302,25,198,25' ");
  else if (id == 3)
    document.write("<area coords='206,4,291,4,296,17,292,25,208,25,202,17' ");
  else
    document.write("<area coords='206,4,291,4,302,25,208,25,202,17' ");
  document.write("shape='polygon' href='rare-earth-service.html' onMouseOver='showMenu(3)' onMouseOut='hideMenu(3)' name='menubutton3'>");
  if (id==3)
    document.write("<area coords='306,1,388,1,400,25,294,25' ");
  else
    document.write("<area coords='305,4,389,4,400,25,304,25,298,17' ");
  document.write("shape='polygon' href='contact.html'></MAP>");

  for (i=0; i<menuArrays.length; i++)
  {
    document.write("<div id='menu" + (i+1) + "' class='menu'>");
    for (j=0; j<menuArrays[i].length; j++)
    {
      document.write("  <div id='menu" + (i+1) + "item" + (j+1) + "' class='menuitem'>&nbsp;" + menuArrays[i][j][0] + "&nbsp;</div>");
      document.write("  <div id='menu" + (i+1) + "item" + (j+1) + "on' class='menuitemon'>");
      document.write("  <a href='" + menuURLs[i][j] + "'>&nbsp;" + menuArrays[i][j][0] + "&nbsp;</a></div>");
    }
    document.write("</div>");
  }

  document.write("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
  document.write("  <tr>");
  document.write("    <td align='left' width='87' bgcolor='black'><img src='images/aslogo.gif' alt='Apteh Services' width='87' height='85' border='0'></td>");
  document.write("    <td align='left' width='100%' bgcolor='black'>");
  document.write("      <table width='100%' border='0' cellspacing='0' cellpadding='0'>");
  document.write("        <tr> ");
  document.write("          <td colspan='2' width='455'><img src='images/title0.gif' usemap='#top' alt='Rare Earth, Silica Gel, and Plastic Supplier' width='455' height='60' border='0'></td>");
  document.write("          <td rowspan='2' width='100%'><img src='images/t_back.gif' width='100%' height='85' border='0'></td>");
  document.write("          <td rowspan='2' width='195'><img src='images/title4.gif' alt='Rare Earth, Silica Gel, and Plastic Supplier' width='195' height='85' border='0'></td>");
  document.write("        </tr>");
  document.write("        <tr> ");
  document.write("          <td width='45'><img src='images/title1.gif' width='45' height='25' border='0'></td>");
  document.write("          <td width='410'><img src='images/menubtn" + (id+1) + ".gif' usemap='#menubtns' width='410' height='25' border='0'></td>");
  document.write("        </tr>");
  document.write("      </table>");
  document.write("    </td>");
  document.write("    <td bgcolor='black'>&nbsp;</td>");
  document.write("  </tr>");
  document.write("</table>");

  document.write("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
  document.write("  <tr>");
  document.write("    <td bgcolor='#000000' width='5'   height='20'>&nbsp;</td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  height='20'>&nbsp;</td>");
  document.write("    <td bgcolor='#ffd3a8' width='1'   height='20'><img src='images/folder1x1.gif' width=1 height=20 border=0></td>");
  document.write("    <td bgcolor='#ffd3a8' height='20' align='right' class='clsContent11'><a href='sitemap.html'>Sitemap</a>&nbsp;&nbsp;</td>");
  document.write("    <td bgcolor='#ffd3a8' width='1'   height='20'><img src='images/folder1x1.gif' width=1 height=20 border=0></td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  height='20'>&nbsp;</td>");
  document.write("    <td bgcolor='#000000' width='5'   height='20'>&nbsp;</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td bgcolor='#000000' width='5'   height='1'><img src='images/black.gif' width=5 height=1 border=0></td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  height='1'><img src='images/folder1x1.gif' width=20 height=1 border=0></td>");
  document.write("    <td bgcolor='#5b2e00' width='1'   height='1'><img src='images/edge.gif' width=1 height=1 border=0></td>");
  document.write("    <td bgcolor='#5b2e00' height='1'><img src='images/edge.gif' width=615 height=1 border=0></td>");
  document.write("    <td bgcolor='#5b2e00' width='1'   height='1'><img src='images/edge.gif' width=1 height=1 border=0></td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  height='1'><img src='images/folder1x1.gif' width=20 height=1 border=0></td>");
  document.write("    <td bgcolor='#000000' width='5'   height='1'><img src='images/black.gif' width=5 height=1 border=0></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td bgcolor='#000000' width='5'   >&nbsp;</td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  >&nbsp;</td>");
  document.write("    <td bgcolor='#5b2e00' width='1'   ><img src='images/edge.gif' width=1></td>");
  document.write("    <td bgcolor='#fff4e8' valign='top'>");
}

function tailer()
{
  document.write("    </td>");
  document.write("    <td bgcolor='#9f8400' width='1'   ><img src='images/edge.gif' width=1></td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  >&nbsp;</td>");
  document.write("    <td bgcolor='#000000' width='5'   >&nbsp;</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td bgcolor='#000000' width='5'   height='1'><img src='images/black.gif' width=5 height=1></td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  height='1'><img src='images/folder1x1.gif' width=20 height=1></td>");
  document.write("    <td bgcolor='#9f8400' width='1'   height='1'><img src='images/edge.gif' width=1 height=1></td>");
  document.write("    <td bgcolor='#9f8400' height='1'><img src='images/edge1.gif' width=615 height=1></td>");
  document.write("    <td bgcolor='#9f8400' width='1'   height='1'><img src='images/edge1.gif' width=1 height=1></td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  height='1'><img src='images/folder1x1.gif' width=20 height=1></td>");
  document.write("    <td bgcolor='#000000' width='5'   height='1'><img src='images/black.gif' width=5 height=1></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td bgcolor='#000000' width='5'   height='20'><img src='images/black.gif' width=5 height=20 border=0></td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  height='20'><img src='images/folder1x1.gif' width=20 height=20></td>");
  document.write("    <td bgcolor='#ffd3a8' width='1'   height='20'><img src='images/folder1x1.gif' width=1 height=20></td>");
  document.write("    <td bgcolor='#ffd3a8' height='20'>");
  document.write("      <table width='100%'><tr>");
//  document.write("        <td class='clsContent1' width='50%' align=left><a href='sitemap.html'>Sitemap</a></td>");
  document.write("        <td class='clsContent1' width='100%' align=right>Copyright &copy; 1997 - " + theYear + " Aptech Services, LLC</td>");
  document.write("      </tr></table></td>");
  document.write("    <td bgcolor='#ffd3a8' width='1'   height='20'><img src='images/folder1x1.gif' width=1 height=20></td>");
  document.write("    <td bgcolor='#ffd3a8' width='20'  height='20'><img src='images/folder1x1.gif' width=20 height=20></td>");
  document.write("    <td bgcolor='#000000' width='5'   height='20'><img src='images/black.gif' width=5 height=20 border=0></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td bgcolor='#000000' width='5'   height='5'><img src='images/black.gif' width=5 height=5 border=0></td>");
  document.write("    <td bgcolor='#000000' width='20'  height='5'><img src='images/black.gif' width=20 height=5 border=0></td>");
  document.write("    <td bgcolor='#000000' width='1'   height='5'><img src='images/black.gif' width=1 height=5 border=0></td>");
  document.write("    <td bgcolor='#000000' height='5'><img src='images/black.gif' width=615 height=5 border=0></td>");
  document.write("    <td bgcolor='#000000' width='1'   height='5'><img src='images/black.gif' width=1 height=5 border=0></td>");
  document.write("    <td bgcolor='#000000' width='20'  height='5'><img src='images/black.gif' width=20 height=5 border=0></td>");
  document.write("    <td bgcolor='#000000' width='5'   height='5'><img src='images/black.gif' width=5 height=5 border=0></td>");
  document.write("  </tr>");
  document.write("</table>");
}

