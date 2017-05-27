var yObj = new Date();
var theYear = yObj.getFullYear();

function copyright()
{
}

function mover(t)
{
  t.style.color="#4444ff";
}
function mout(t)
{
  t.style.color="#000000";
}

function menu(pId)
{
  document.write("<br><center><img src='images/plist.gif' width=110 height=25></center>");
  document.write("<hr width='80%'>");
  document.write("      <P></P>");
  document.write("    <font color='#000000' >");

  document.write("    <ul>");
if (pId - 1 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Bacteria &amp; Viral Infection</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='bacteria.html' ");
  document.write("	onMouseover='mover(this)' onMouseout='mout(this)' >Bacteria &amp; Viral Infection</A></FONT>");
}
if (pId - 2 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Fertility Hormones</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='fertility.html' ");
  document.write("	 onMouseover='mover(this)' onMouseout='mout(this)' >Fertility Hormones</A></FONT>");
}
if (pId - 3 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Cancer Markers</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='cancer.html' ");
  document.write("	onMouseover='mover(this)' onMouseout='mout(this)' >Cancer Markers</A></FONT>");
}
if (pId - 4 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Thyroid Hormones</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='thyroid.html' ");
  document.write("	onMouseover='mover(this)' onMouseout='mout(this)' >Thyroid Hormones</A></FONT>");
}
if (pId - 5 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Autoimmune &amp; Growth Hormones</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='autoimmune.html' ");
  document.write("	onMouseover='mover(this)' onMouseout='mout(this)' >Autoimmune &amp; Growth Hormones</A></FONT>");
}
if (pId - 6 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Sexual Transmitted Diseases</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='sexual.html' ");
  document.write("	onMouseover='mover(this)' onMouseout='mout(this)' >Sexual Transmitted");
  document.write("      Diseases</A></FONT>");
}
if (pId - 7 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Torch Panel</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='torch.html' ");
  document.write("	onMouseover='mover(this)' onMouseout='mout(this)' >Torch Panel</A></FONT>");
}
if (pId - 8 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Drug Abuse</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='drug.html' ");
  document.write("	onMouseover='mover(this)' onMouseout='mout(this)' >Drug Abuse</A></FONT>");
}
if (pId - 9 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Others</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='others.html' ");
  document.write("	onMouseover='mover(this)' onMouseout='mout(this)' >Others</A></FONT>");
}
  document.write("    </ul></font><FONT face=Arial size=1>");
  document.write("    <hr width='80%'><br></FONT><font color='#dad0f5' >");
  document.write("    <ul>");
if (pId - 10 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Contact Us</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='contact.html' ");
  document.write("	onMouseover='mover(this)' onMouseout='mout(this)' >Contact Us</A></FONT>");
}
if (pId - 0 == 0)
  document.write("      <li><FONT size=1 face=Arial color='#888888'>Home</font>");
else
{
  document.write("      <li><FONT size=1 face=Arial color='#000000'><A href='index.html' ");
  document.write("      onMouseover='mover(this)' onMouseout='mout(this)' >Home</A></FONT>");
}

  document.write("    </ul></font>");

  document.write("      <HR width='80%'>");
  document.write("      <P align=center> </P>");
  document.write("      <P align=center>&nbsp;</P>");
  document.write("<script> copyright() </script>");

}

function header()
{
  document.write("<nobr><IMG alt='Welcome to visit Diagnostic Product Source' border=0 height=40 src='images/title.gif' width=410>&nbsp;&nbsp;&nbsp;&nbsp;");
}
