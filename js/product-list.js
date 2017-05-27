var re_items = new Array();
re_items = ["Cerium","Dysprosium","Erbium","Europium","Gadolinium","Holmium","Lanthanum","Mixed Rare Earths","Neodymium","Praseodymium","Samarium","Terbium","Ytterbium","Yttrium","Zirconium" ];
var re_sitems = [["Ce Acetate","Ce Ammonium Nitrate","Ce Carbonate","Ce Chloride","Ce Hydroxide","Ce Metal","Ce Mischmetal","Ce Nitrate","Ce Oxalate","Ce Oxide","Ce Rich Mischmetal"],
              ["Dy Fluoride","Dy Metal","Dy Oxide"],
              ["Er Metal","Er Oxide"],
              ["Eu Nitrate","Eu Oxalate","Eu Oxide"],
              ["Gd Metal","Gd Nitrate","Gd Oxide"],
              ["Ho Oxide"],
              ["La Acetate","La Carbonate","La Chloride","La Hydroxide","La Metal","La Oxide","La Rich Mischmetal"],
              ["La-Rich RE Carbonate","La-Rich RE Chloride","Mixed RE Carbonate","Mixed RE Chloride","Mixed RE Fluoride","Mixed RE Oxide","RE Concentrate"],
              ["Nd Acetate","Nd Aluminum Alloy","Nd Carbonate","Nd Chloride","Nd Fluoride","Nd Iron Alloy","Nd Metal","Nd Nitrate","Nd Oxalate","Nd Oxide"],
              ["Pr Carbonate","Pr Metal","Pr Oxalate","Pr Oxide"],
              ["Sm Carbonate","Sm Metal","Sm Oxide"],
              ["Tb Metal","Tb Nitrate","Tb Oxide"],
              ["Yb Carbonate","Yb Metal","Yb Oxide"],
              ["Y Carbonate","Y Chloride","Y Metal","Y Nitrate Crystal","Y Oxide"],
              ["Zr Carbonate","Zr Oxide"]];

var sg_items = new Array();
sg_items = ["Indicators", "Non-indicators", "Specials"];
var sg_sitems = [["Blue","Color Variable"],["Alumina","Desiccant Packaging","Fine Pored","FNG","Type B","Type C"],["Activated","Beer","Cat Litter","High Efficient Drier","Macro Pored"]];

var pl_items = new Array();
pl_items = ["Cassettes","Microwells","Others","Services"];
var pl_sitems = [["Lateral Flow Cassette A","Lateral Flow Cassette B","Flow Through Cassette","Pen-style Cassette"],["Microwell Strip","Microwell Rack"],["Pipette","Pouch","Desiccant"],["Pad Cutting & Installation","New Plastic Molds"]];


function re_href(eid, pid, cont, url, title)
{
  if (eid==3 && pid==3)
  {
    if (title=="Silica Gel")
      document.write("<a href='silica-gel.html?eid=3&pid=3' onMouseOver='theMouseOver(this)' onMouseOut='theMouseOut(this)' class='clsContent2'>");
    else
      document.write("<a href='silica-gel.html?eid=2&pid=2' onMouseOver='theMouseOver(this)' onMouseOut='theMouseOut(this)' class='clsContent2'>");
  }
  else if (title=="Diagnostic Plastics" && eid==4 && pid==1)
    document.write("<a href='pad-install.html' onMouseOver='theMouseOver(this)' onMouseOut='theMouseOut(this)' class='clsContent2'>");
  else if (title=="Diagnostic Plastics" && eid==4 && pid==2)
    document.write("<a href='prototype.html' onMouseOver='theMouseOver(this)' onMouseOut='theMouseOut(this)' class='clsContent2'>");
  else
    document.write("<a href='" + url + ".html?eid=" + eid + "&pid=" + pid + "' onMouseOver='theMouseOver(this)' onMouseOut='theMouseOut(this)' class='clsContent" + cont + "'>");
}

function bullet_img()
{
  document.write("&nbsp;&nbsp;<img src='images/bb.gif' width=8 height=8 border=0>&nbsp;");
}
 
function prod_list(title, item1, item2, eid, pid, url, intop, expend)
{
  document.write("<table width='180'>");
  document.write("  <tr>");
  document.write("    <td width='10'>&nbsp;</td>");
  document.write("    <td width='160' align='center' class='clsHead'><br>" + title + "</td>");
  document.write("    <td width='10'>&nbsp;</td>");
  document.write("  </tr>");
  document.write("</table>");
  document.write("<hr color='darkgreen'>");

  var nid = eid*1+1;
  if (nid > item1.length) nid = 1;

  if (intop)
  {
    document.write("&nbsp;<a href='" + url + ".html?eid=" + nid + "&pid=1'><img src='images/minus.gif' width=9 height=9 border=0></a>&nbsp;<b>");
    re_href(nid, 1, 3, url, title);
    document.write(item1[eid-1] + "</a></b><br>");

    for (var j=0; j<item2[eid-1].length; j++)
    {
      bullet_img();
      if (pid==(j+1))
        document.write("<a class='clsContent2'><b><font color='#000000'>" + item2[eid-1][j] + "</font></b></a><br>");
      else
      {
        re_href(eid, (j+1), 2, url, title);
        document.write(item2[eid-1][j] + "</a><br>");
      }
    }
  }

  for (var i=0; i<item1.length; i++)
  {
    if (!expend)
    {
      if (eid*1 != (i+1))
      {
        document.write("&nbsp;<a href='" + url + ".html?eid=" + (i+1) + "&pid=1'><img src='images/plus.gif' width=9 height=9 border=0></a>&nbsp;<b>");
        re_href((i+1),1,3, url, title);
        document.write(item1[i] + "</a></b><br>");
      }
      else if (!intop && eid*1 == (i+1))
      {
        document.write("&nbsp;<a href='" + url + ".html?eid=" + nid + "&pid=1'><img src='images/minus.gif' width=9 height=9 border=0></a>&nbsp;<b>");
        re_href(nid, 1, 3, url, title);
        document.write(item1[eid-1] + "</a></b><br>");

        for (var j=0; j<item2[eid-1].length; j++)
        {
          bullet_img();
          if (pid==(j+1))
            document.write("<a class='clsContent2'><b><font color='#000000'>" + item2[eid-1][j] + "</font></b></a><br>");
          else
          {
            re_href(eid, (j+1), 2, url, title);
            document.write(item2[eid-1][j] + "</a><br>");
          }
        }
      }
    }
    else
    {
      document.write("&nbsp;<img src='images/minus.gif' width=9 height=9 border=0>&nbsp;<b><a class='clsContent3'>");
      document.write(item1[i] + "</a></b><br>");

      for (var j=0; j<item2[i].length; j++)
      {
        bullet_img();
        if (pid==(j+1) && eid==(i+1))
        {
          if (title=="Silica Gel" && (i==0 && j==0 || i==1 && j==1))
            document.write("<a class='clsContent2'><b><font color='#000000'>" + item2[i][j] + "</font></b></a><font color='red'>*</font><br>");
          else
            document.write("<a class='clsContent2'><b><font color='#000000'>" + item2[i][j] + "</font></b></a><br>");
        }
        else
        {
          re_href((i+1), (j+1), 2, url, title);
          if (title=="Silica Gel" && (i==0 && j==0 || i==1 && j==1))
            document.write(item2[i][j] + "</a><font color='red'>*</font><br>");
          else
            document.write(item2[i][j] + "</a><br>");
        }
      }    
    }
  }
  if (title=="Silica Gel")
    document.write("<br><br><br>&nbsp;<font color=red>*</font><font color=black> - online order available</font>");

  document.write("<br><br>");
}
