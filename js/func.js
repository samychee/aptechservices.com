var yObj = new Date();
var theYear = yObj.getFullYear();
var isNS = (navigator.appName.indexOf("Netscape") != -1);

function theMouseOver(obj)
{
  if (obj.style.color == "#000000") return;
  obj.style.color="#990033";
}

function theMouseOut(obj)
{
  if (obj.style.color == "#000000") return;
  obj.style.color="darkgreen";
}

function getArgs()
{
  var args = new Object();
  var query = location.search.substring(1);
  var pairs = query.split("&");

  for (var i = 0; i < pairs.length; i++)
  {
    var pos = pairs[i].indexOf('=');
    if (pos != -1)
    {
      var argname = pairs[i].substring(0, pos);
      var value = pairs[i].substring(pos+1);
      args[argname] = unescape(value);
    }
  }

  return args;
}

function mouseHere(bid, oid, state)
{
  if (bid == 0)
  {
    if (oid == 1)
      document.images[5].src = (state==1 ? "images/btn1-2.png" : "images/btn1.png");
    else if (oid == 2)
      document.images[5].src = (state==1 ? "images/btn1-3.png" : "images/btn1.png");
    else if (oid == 3)
      document.images[5].src = (state==1 ? "images/btn1-4.png" : "images/btn1.png");
  }
  else if (bid == 1)
  {
    if (oid == 0)
      document.images[5].src = (state==1 ? "images/btn2-1.png" : "images/btn2.png");
    else if (oid == 2)
      document.images[5].src = (state==1 ? "images/btn2-3.png" : "images/btn2.png");
    else if (oid == 3)
      document.images[5].src = (state==1 ? "images/btn2-4.png" : "images/btn2.png");
  }
  else if (bid == 2)
  {
    if (oid == 0)
      document.images[5].src = (state==1 ? "images/btn3-1.png" : "images/btn3.png");
    else if (oid == 1)
      document.images[5].src = (state==1 ? "images/btn3-2.png" : "images/btn3.png");
    else if (oid == 3)
      document.images[5].src = (state==1 ? "images/btn3-4.png" : "images/btn3.png");
  }
  else if (bid == 3)
  {
    if (oid == 0)
      document.images[5].src = (state==1 ? "images/btn4-1.png" : "images/btn4.png");
    else if (oid == 1)
      document.images[5].src = (state==1 ? "images/btn4-2.png" : "images/btn4.png");
    else if (oid == 2)
      document.images[5].src = (state==1 ? "images/btn4-3.png" : "images/btn4.png");
  }
}

function header(id)
{
  var pid = Math.floor((Math.random()*101)) % 23;
  var pics = new Array();
  pics[0] = "images/title4.gif";
  pics[1] = "images/title4-2.gif";
  pics[2] = "images/title4-3.gif";
  pics[3] = "images/title4-4.gif";
  pics[4] = "images/title4-5.gif";
  pics[5] = "images/title4-6.gif";
  pics[6] = "images/title4-7.gif";
  pics[7] = "images/title4-8.gif";
  pics[8] = "images/title4-9.gif";
  pics[9] = "images/title4-10.gif";
  pics[10] = "images/title4-11.gif";
  pics[11] = "images/title4-12.gif";
  pics[12] = "images/title4-13.gif";
  pics[13] = "images/title4-14.gif";
  pics[14] = "images/title4-15.gif";
  pics[15] = "images/title4-16.gif";
  pics[16] = "images/title4-17.gif";
  pics[17] = "images/title4-18.gif";
  pics[18] = "images/title4-19.gif";
  pics[19] = "images/title4-20.gif";
  pics[20] = "images/title4-21.gif";
  pics[21] = "images/title4-22.gif";
  pics[22] = "images/title4-23.gif";

  document.write("<center>");
  document.write("<map name='top'>");
  document.write("<area coords='0,4,105,25' href='index.html' onMouseOver='mouseHere("+id+",\"0\",\"1\")' onMouseOut='mouseHere("+id+",\"0\",\"0\")'>");
  document.write("<area coords='107,4,207,25' href='flow-through-cassette.html' onMouseOver='mouseHere("+id+",\"1\",\"1\")' onMouseOut='mouseHere("+id+",\"1\",\"0\")'>");
  document.write("<area coords='209,4,305,25' href='molding.html' onMouseOver='mouseHere("+id+",\"2\",\"1\")' onMouseOut='mouseHere("+id+",\"2\",\"0\")'>");
  document.write("<area coords='307,4,406,25' href='contact.html' onMouseOver='mouseHere("+id+",\"3\",\"1\")' onMouseOut='mouseHere("+id+",\"3\",\"0\")'>");
  document.write("</map>");
  document.write("<map name='sm'>");
  document.write("<area coords='24,62,82,80' href='sitemap.html'>");
  document.write("</map>");
  document.write("<table width='800' border='0' cellspacing='0' cellpadding='0'>");
  document.write("  <tr> ");
  document.write("    <td rowspan='4'>&nbsp;</td> ");
  document.write("    <td rowspan='2' width='87'><img src='images/as_logo.gif' width='87' height='85' border='0'></td>");
  document.write("    <td colspan='2' width='455'><img src='images/title00.png' width='455' height='60' border='0'></td>");
  document.write("    <td rowspan='2' width='63'><img src='images/title2.png' width='63' height='85' border='0' usemap='#sm'></td>");
  document.write("    <td rowspan='2' width='195'><img src='" + pics[pid] +"' width='195' height='85' border='0'></td>");
  document.write("    <td rowspan='4'>&nbsp;</td> ");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td width='45'><img src='images/title1.png' width='45' height='25' border='0'></td>");
  document.write("    <td width='410'><img src='images/");
  if (id==0)
    document.write("btn1.png");
  else if (id==1)
    document.write("btn2.png");
  else if (id==2)
    document.write("btn3.png");
  else if (id==3)
    document.write("btn4.png");
  document.write("' width=410' height='25' border='0' usemap='#top'></td>");
  document.write("  </tr>");
  document.write("  <tr> ");
  document.write("    <td colspan='5' bgcolor='#eeeee0'><br>");
  document.write("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
  document.write("<tr>");
  document.write("  <td width='20'>&nbsp;</td>");
  document.write("  <td class='clsCont'>");

}

function tail()
{
  document.write("  </td>");
  document.write("  <td width='20'>&nbsp;</td>");
  document.write("</tr>");
  document.write("</table>");
  document.write("<br></td>");
  document.write("  <tr> ");
  document.write("    <td colspan='5' bgcolor='#5f6530' align='center' class='clsContB'>");
  document.write("      <p><a href='index.html' style='color:#cccc99'>Home</a> | <a href='flow-through-cassette.html' style='color:#cccc99'>Products</a> | <a href='molding.html' style='color:#cccc99'>Services</a> | <a href='contact.html' style='color:#cccc99'>Contact Us</a></p>");
  document.write("      <p>Copyright &copy " + theYear + " Aptech Services, LLC</p>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("</table>");
  document.write("</center>");
}

function plist(str)
{
  document.write("<br>&nbsp;&nbsp;&nbsp;<span class='clsCont1'>"+str+"</span><br>");
}

function bullet_img(str, ref, curr)
{
  if (curr)
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='images/bb.gif' width='8' height='8' border='0'>&nbsp;&nbsp;<span class='clsCont6'>"+str+"</span><br>");
  else
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='images/bb.gif' width='8' height='8' border='0'>&nbsp;&nbsp;<a href='"+ref+"' onMouseOver='theMouseOver(this)' onMouseOut='theMouseOut(this)' class='clsCont2'>"+str+"</a><br>");
}

