function order0(action_file, uprice, minQty, maxQty, item_name,
shipForeign, shipNonCon, shipCon, shipCanada)
{
  document.write("<form name='billInfo' method='get', action='" + action_file + "' onSubmit='return checkall(this,"+minQty+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")'>");
  document.write("<input type='hidden' name='theQty' value='" + minQty + "'>");
  document.write("<input type='hidden' name='theState' value='Alabama'>");
  document.write("<input type='hidden' name='theCountry' value='0'>");
  document.write("<input type='hidden' name='theSubTotal' value='"+(uprice*minQty)+"'>");
  document.write("<input type='hidden' name='theTotal' value='"+(uprice*minQty)+"'>");
  document.write("<input type='hidden' name='theTax' value='0.00'>");
  document.write("<input type='hidden' name='theShipping' value='0.00'>");
  document.write("<table border='0' cellpadding='2' cellspacing='0' width='540'>");
  document.write("  <tr>");
  document.write("    <td width='25%' class='clsHead'>Item</td>");
  document.write("    <td width='25%' class='clsHead'>Qty</td>");
  document.write("    <td width='25%' class='clsHead'>Unit Price</td>");
  document.write("    <td width='25%' class='clsHead'>Subtotal</td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='25%' class='clsCont'>" + item_name + "</td>");
  if (isNS || minQty > 1)
  {
    document.write("  <td width='25%' align='left' id='bigQty'>");
    document.write("    <input type='text' name='bigQtyText' value='" + document.billInfo.theQty.value + 
	"' size=5 onBlur='bigQtyChange(this,"+minQty+","+maxQty+","+uprice+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")' class='clsCont'></td>");
  }
  else
  {
    document.write("  <td width='25%' class='clsCont' id='smallQty'>");
    document.write("    <select name='qtySelect' class='clsCont' onchange='qtyChange("+minQty+","+maxQty+","+uprice+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")'>");
    for (var i = minQty; i <= maxQty; i++)
    {
      if ( getElement('theQty').value - i == 0 )
        document.write("<option value=" + i + " selected>" + i);
      else
        document.write("<option value=" + i + ">" + i);
    }
    document.write("    </select>");
    document.write("  </td>");

    document.write("  <td width='15%' align='left' id='bigQty' style='display:none'>");
    document.write("    <input type='text' name='bigQtyText' value='" + (maxQty + 1)
	+ "' size=6 onBlur='bigQtyChange(this,"+minQty+","+maxQty+","+uprice
	+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")' class='clsCont'></td>");
  }
  document.write("    <td width='25%' class='clsCont'>");
  document.write("      <a class='clsCont'>US$" + priceFormat(uprice) + "</a>");
  document.write("    </td>");
  document.write("    <td width='25%' class='clsCont'>");
  if (isNS)
  {
    var price = document.billInfo.theQty.value * uprice;
    var subtl = priceFormat(price)
    document.billInfo.theSubTotal.value = subtl;
    document.write("    <input type='text' name='subtotal' class='clsCont' value='US$"
	+ subtl	+ "' size=10 onBlur='this.value	= \"US$\" + priceFormat(document.billInfo.theSubTotal.value)'>");
  }
  else
  {
    document.write("    <input type='text' name='subtotal' readonly value='US$"
	+ getSubtotal(uprice) + "' style='border:none' class='clsCont'>");
  }
  document.write("    </td>");
  document.write("  </tr>");
  document.write("</table><br>");
  document.write("<table>");
  document.write("  <tr>");
  document.write("    <td class='clsCont'><b>Do you live in the USA Continental?</b></td>");
  document.write("    <td class='clsCont'>");
  document.write("      <input type='checkbox' name='continental' checked onClick='onContinental("+minQty+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")'> Yes");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("</table>");
  document.write("<table border='0' cellpadding='2' cellspacing='0' width='540'>");
  document.write("  <tr>");
  document.write("    <td width='100%' class='clsHead' align='center'>Billing & Delivery Information</td>");
  document.write("  </tr>");
  document.write("</table>");
  document.write("<br>");
  document.write("<div class='clsCont'> <font color=darkgreen>&nbsp;Your name and address should match with your credit card billing information.</font></div>");
  document.write("<br>");
  if (isNS)
    document.write("<table border='0' cellpadding='2' cellspacing='3' width='550'>");
  else
    document.write("<table border='0' cellpadding='2' cellspacing='3' width='100%'>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Your first name <font color=red>*</font></td>");
  document.write("    <td width='65%' align='left'>");
  if (isNS)
    document.write("    <input type='text' name='firstName' class='clsCont' size=40>");
  else
    document.write("    <input type='text' name='firstName' class='clsCont' style='width:320px'>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Last name <font color=red>*</font></td>");
  document.write("    <td width='65%' align='left'>");
  if (isNS)
    document.write("    <input type='text' name='lastName' class='clsCont' size=40>");
  else
    document.write("    <input type='text' name='lastName' class='clsCont' style='width:320px'>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Address line 1 <font color=red>*</font></td>");
  document.write("    <td width='65%' align='left'>");
  if (isNS)
    document.write("    <input type='text' name='address1' class='clsCont' size=40>");
  else
    document.write("    <input type='text' name='address1' class='clsCont' style='width:320px'>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Address line 2 &nbsp;&nbsp;</td>");
  document.write("    <td width='65%' align='left'>");
  if (isNS)
    document.write("    <input type='text' name='address2' class='clsCont' size=40>");
  else
    document.write("    <input type='text' name='address2' class='clsCont' style='width:320px'>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>City <font color=red>*</font></td>");
  document.write("    <td width='65%' align='left'>");
  if (isNS)
    document.write("    <input type='text' name='city' class='clsCont' size=40>");
  else
    document.write("    <input type='text' name='city' class='clsCont' style='width:320px'>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>State/Province/Region <font color=red>*</font></td>");
  if (isNS)
  {
    document.write("  <td width='65%' align='left' id='statetext'>");
    document.write("    <input type='text' name='state' class='clsCont' size=40 onBlur='updatePrice("+minQty+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")'></td>");
  }
  else
  {
    document.write("  <td width='65%' align='left' id='statetext' style='display:none'>");
    document.write("    <input type='text' name='state' class='clsCont' style='width:320px' onBlur='updatePrice("+minQty+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")'></td>");
    document.write("  <td width='65%' align='left' id='constateselect'>");
    document.write("    <select name='constate' class='clsCont' style='width:320px' onChange='updatePrice("+minQty+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")'>");
    for (var i=0; i<50;	i++)
    {
      if (i==0)
        document.write("<option selected value=" + abvnames[i] + ">" + statenames[i] +	"</option>");
      else
        document.write("<option value=" + abvnames[i] + ">" + statenames[i] + "</option>");
    }
    document.write("    </select></td>");
  }
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Zip/Postal code <font color=red>*</font></td>");
  document.write("    <td width='65%' align='left'>");
  if (isNS)
    document.write("    <input type='text' name='zip' class='clsCont' size=40>");
  else
    document.write("    <input type='text' name='zip' class='clsCont' style='width:320px'>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Country <font color=red>*</font></td>");
  document.write("    <td width='65%' align='left' class='clsCont'>");
  if (isNS)
    document.write("    <select name='country' class='clsCont' onChange='onCountry("+minQty+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")'>");
  else
    document.write("    <select name='country' class='clsCont' style='width:320px' onChange='onCountry("+minQty+","+shipForeign+","+shipNonCon+","+shipCon+","+shipCanada+")'>");

  for (var i=0; i<num_countries; i++)
  {
    if (i==0)
      document.write("  <option selected	value=" + abvcountry[i]	+ ">" + countrynames[i] + "</option>");
    else
      document.write("  <option value=" + abvcountry[i] + ">" + countrynames[i] + "</option>");
  }

  document.write("      </select>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Phone number <font color=red>*</font></td>");
  document.write("    <td width='65%' align='left'>");
  document.write("      <input type='text' name='phonea' class='clsCont' size=3>");
  document.write("      <input type='text' name='phoneb' class='clsCont' size=3>");
  document.write("      <input type='text' name='phonec' class='clsCont' size=28>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Your e-mail address <font color=red>*</font></td>");
  document.write("    <td width='65%' align='left'>");
  if (isNS)
    document.write("    <input type='text' name='eMail' class='clsCont' size=40>");
  else
    document.write("    <input type='text' name='eMail' class='clsCont' style='width:320px'>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("</table>");
  document.write("<table width='540'>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont' align='left'>");
  document.write("      <input type='reset' class='clsCont3' value='&lt&lt Back' onClick='history.back()'>");
  document.write("    </td>");
  document.write("    <td width='35%' class='clsCont' align='right'>");
  document.write("      <input type='reset' class='clsCont3' value='Reset' onClick='onReset()'>");
  document.write("    </td>");
  document.write("    <td width='65%' class='clsCont' align='left'>");
  document.write("      <input type='submit' class='clsCont3' value='Check Out &gt&gt'>");
  document.write("    </td>");
  document.write("  </tr>");
  document.write("</table><br>");

  document.write("</form>");
}
