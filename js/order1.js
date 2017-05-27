function order1(item_name, cancel_file, unit, shipCon)
{
  var args = getArgs();
  var theQty      = args.theQty;
  var theSubTotal = args.theSubTotal;
  var theTax      = args.theTax;
  var theShipping = args.theShipping;
  var theTotal    = args.theTotal;
  var theState    = args.theState;
  var theCountry  = args.theCountry;
  var firstName   = args.firstName;
  var lastName    = args.lastName;
  var address1    = args.address1;
  var address2    = args.address2;
  var city        = args.city;
  var state       = args.state;
  var country     = args.country;
  var zip         = args.zip;
  var phonea      = args.phonea;
  var phoneb      = args.phoneb;
  var phonec      = args.phonec;
  var eMail       = args.eMail;

  document.write("<br>");
  document.write("<table border='0' cellpadding='2' cellspacing='0' width='540'>");
  document.write("  <tr>");
  document.write("    <td width='100%' class='clsHead' align='center'>Thank you " +parseSpace(firstName)+ "&nbsp;" 
	+parseSpace(lastName)+". Please verify your order</td>");
  document.write("  </tr>");
  document.write("</table>");
  document.write("<br>");
  if (isNS)
    document.write("<table border='1' cellpadding='1' cellspacing='1' width='550'>");
  else
    document.write("<table border='1' cellpadding='1' cellspacing='1' width='100%'>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Your name</td>");

  document.write("    <td width='65%' class='clsCont' align='left'><b>"+parseSpace(firstName)+"&nbsp;"+
		parseSpace(lastName)+"</b></td> ");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Address</td>");
  document.write("    <td width='65%' class='clsCont' align='left'><b>"+parseSpace(address1)+"<br>");
  if (address2 != undefined && address2 != "")
    document.write(parseSpace(address2) + "<br>");
  document.write(parseSpace(city)+",&nbsp;"+parseSpace(theState));
  if (zip != undefined)
    document.write("&nbsp;" + zip + ",&nbsp;");
  else
    document.write(",&nbsp;");
  if (theCountry < 2)
    document.write(abvcountry[theCountry]);
  else
    document.write(countrynames[theCountry]);
  document.write("    </b></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Phone number</td>");
  document.write("    <td width='65%' class='clsCont' align='left'><b>"+parseSpace(phonea)+"-"+parseSpace(phoneb)+
		"-"+parseSpace(phonec)+"</b></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Your e-mail address</td>");
  document.write("    <td width='65%' class='clsCont' align='left'><b>"+parseSpace(eMail)+"</b></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Ordered item</td>");
  document.write("    <td width='65%' class='clsCont' align='left'><b>"+item_name+"</b></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Ordered quantity</td>");
  document.write("    <td width='65%' class='clsCont' align='left'><b>"+parseSpace(theQty)+"&nbsp;"+(parseSpace(theQty)*1 > 1 ? (unit+"s") : unit)+"</b></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Subtotal</td>");
  document.write("    <td width='65%' class='clsCont' align='left'><b>US$"+priceFormat(parseSpace(theSubTotal))+"</b></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Tax</td>");
  document.write("    <td width='65%' class='clsCont' align='left'><b>US$"+priceFormat(parseSpace(theTax))+"</b></td>");
  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Shipping & Handling</td>");
  document.write("    <td width='65%' class='clsCont' align='left'><b>US$"+priceFormat(parseSpace(theShipping))+"</b></td>");

  document.write("  </tr>");
  document.write("  <tr>");
  document.write("    <td width='35%' class='clsCont4' align='right'>Total</td>");
  document.write("    <td width='65%' class='clsCont' align='left'><b>US$"+priceFormat(parseSpace(theTotal))+"</b></td>");
  document.write("  </tr>");
  document.write("</table>");
  document.write("<br>");

  document.write("<div class='clsCont' style='position: relative; left:0px; width:540px;'>We use PayPal to process your credit card order. It is simple, fast and secure. Your Infomation will be encrypted by <a href='javascript:openSSL()'>SSL</a> after you click \"Submit to PayPal\".");
  document.write("<br><br>");
  document.write("<form name='form2' method='post' action='https://www.paypal.com/cgi-bin/webscr'>");
  document.write("    <INPUT TYPE='hidden' NAME='cmd' VALUE='_ext-enter'>");
  document.write("    <INPUT TYPE='hidden' NAME='redirect_cmd' VALUE='_xclick'>");
  document.write("    <INPUT TYPE='hidden' NAME='business' VALUE='sales@aptechservices.com'>");
  document.write("    <INPUT TYPE='hidden' NAME='item_name' VALUE='"+item_name+"'>");
  document.write("    <INPUT TYPE='hidden' NAME='quantity' VALUE='"+parseSpace(theQty)+"'>");
  document.write("    <INPUT TYPE='hidden' NAME='amount' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='tax' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='handling' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='email' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='first_name' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='last_name' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='address1' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='address2' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='city' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='state' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='zip' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='country' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='citizenship' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='night_phone_a' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='night_phone_b' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='night_phone_c' VALUE=''>");
  document.write("    <INPUT TYPE='hidden' NAME='return' VALUE='http://www.aptechservices.com/thankyou.html'>");
  document.write("    <INPUT TYPE='hidden' NAME='cancel_return' VALUE='http://www.aptechservices.com/"+cancel_file+"'>");
  document.write("    <INPUT TYPE='hidden' NAME='currency_code' VALUE='USD'>");
  var pp = (theSubTotal*1)/parseSpace(theQty);
  document.form2.amount.value = priceFormat(pp);
  document.form2.tax.value = theTax;
  document.form2.handling.value = priceFormat(parseSpace(theShipping));
  document.form2.email.value = parseSpace(eMail);
  document.form2.first_name.value = parseSpace(firstName);
  document.form2.last_name.value = parseSpace(lastName);
  document.form2.address1.value = parseSpace(address1);
  document.form2.address2.value = parseSpace(address2);
  document.form2.city.value = parseSpace(city);
  document.form2.state.value = parseSpace(theState);
  document.form2.zip.value = parseSpace(zip);
  document.form2.country.value = parseSpace(country);
  document.form2.citizenship.value = parseSpace(country);
  document.form2.night_phone_a.value = parseSpace(phonea);
  document.form2.night_phone_b.value = parseSpace(phoneb);
  document.form2.night_phone_c.value = parseSpace(phonec);

  if ( isNS )
    document.write("<table width='550'>");
  else
    document.write("<table width='100%'>");
  document.write("<tr>");
  document.write("  <td width='35%' class='clsCont' align='right'>");
  document.write("    <input type='button' class='clsCont3' value='&lt&lt Back' onClick='history.back()'>");
  document.write("  </td>");
  document.write("  <td width='65%' class='clsCont' align='left'>");
  document.write("    <input type='submit' class='clsCont3' value='Submit to PayPal'>");
  document.write("  </td>");
  document.write("</tr>");
  document.write("</table>");
  document.write("</form>");

  document.write("<div class='clsCont'><p>We will deliver your order to above address. If you want to deliver it to different address");
  if (theCountry < 2)
      document.write(" inside the US,");
  else if (theCountry == 36)
      document.write(" inside Canada or US,");
  else
    document.write(",");
  document.write(" please send your instruction to sales@aptechservices.com.");
  document.write("</p><br>");
  document.write("</div>");
  document.write("</div>");
}
