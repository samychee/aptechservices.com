var taxRate = 0.0825;
var wnd	= null;
var minBlueQty = 1;
var maxBlueQty = 9;
var blueUnitPrice = 45;
var blueShipForeign = 650.00;
var blueShipNonCon  = 50.00;
var blueShipCon     = 36.00;
var blueShipCanada  = 55.00;
var minDesiccantQty = 200;
var maxDesiccantQty = 10000;
var desiccantUnitPrice = 0.15;
var desiccantShipForeign = 0.35;
var desiccantShipNonCon  = 0.02;
var desiccantShipCon     = 0.01;
var desiccantShipCanada  = 0.08;
var minCatQty = 8;
var maxCatQty = 10000;
var catUnitPrice = 3.5;
var catShipForeign = 30;
var catShipNonCon  = 4.9;
var catShipCon     = 3.5;
var catShipCanada  = 4.9;

function openSSL()
{
  if ( wnd != null && wnd.closed == false )
    wnd.close();
  wnd = window.open("ssl.html", "SSL",
	"height=200,width=300,top=100,left=100,menubar=no,scrollbar=no,resizable=no,titlebar=no");
}

function getArgs()
{
  var args = new Object();
  var query = location.search.substring(1);
  var pairs = query.split("&");

  for (var i = 0; i < pairs.length; i++)
  {
    var	pos = pairs[i].indexOf('=');
    if (pos != -1)
    {
      var argname = pairs[i].substring(0, pos);
      var value	= pairs[i].substring(pos+1);
      args[argname] = unescape(value);
    }
  }

  return args;
}

function parseSpace(str)
{
  var s=str, s1=str;
  while (1)
  {
    s = s.replace("+", " ");
    if (s == s1) break;
    s1 = s;
  }
  return s;
}

function getElement(element)
{
  var docObj = ( isNS ?	"document.billInfo." : "document.all." ) + element;

  return eval(docObj);
}

function priceFormat(price)
{
  price = Math.round(price * 100) / 100;
  price = price.toString();

  var pos = price.indexOf(".");

  if (pos < 0)
    return price + ".00";

  var p = price;
  for (i = price.length; i < pos + 3; i++ )
    p += "0";

  return p;
}

function getSubtotal(uprice)
{
  var price = getElement("theQty").value * uprice;

  getElement("theSubTotal").value = priceFormat(price);

  return getElement("theSubTotal").value;
}

function updatePrice(minQty, shipForeign, shipNonCon, shipCon, shipCanada)
{
  var obj1, obj2, obj3;
  var state;
  var sub, tax,	ship;

  obj1 = getElement("country");
  obj3 = getElement("continental");
  if (isNS)
  {
    state = getElement("state").value;
    getElement("theState").value = obj3.checked	?  state.toUpperCase() : state;
    if (obj1.selectedIndex<=1 &&
       (state.substr(0,2).toUpperCase() == "TX"	||
	  state.substr(0,3).toUpperCase() == "TEX"))
      getElement("theTax").value = priceFormat(getElement("theSubTotal").value * taxRate);
    else
      getElement("theTax").value = priceFormat(0);
  }
  else
  {
    obj2 = getElement("constate");
    if (getElement("constate").selectedIndex ==	49)
    {
      getElement("statetext").style.display = "block";
      getElement("constateselect").style.display = "none";
      getElement("continental").checked	= 0;
      getElement("constate").selectedIndex = 0;
      getElement("country").selectedIndex = 1;
    }
    if (getElement("statetext").style.display == "block")
      getElement("theState").value = getElement("state").value;
    else
      getElement("theState").value = abvnames[getElement("constate").selectedIndex];
    if (obj1.selectedIndex <= 1 && obj2.selectedIndex == 40) //	texas
      getElement("theTax").value = priceFormat(getElement("theSubTotal").value * taxRate);
    else
      getElement("theTax").value = priceFormat(0);
  }
  getElement("theCountry").value = obj1.selectedIndex;

  if (obj1.selectedIndex == 0)
  {
    if ( !isNS || isNS &&
	 state.substr(0,2).toUpperCase() != "HI" && state.substr(0,6).toUpperCase() != "HAWAII"	&&
	 state.substr(0,2).toUpperCase() != "AK" && state.substr(0,6).toUpperCase() != "ALASKA")
      getElement("theShipping").value = priceFormat(getElement("theQty").value * shipCon);
    else
      getElement("theShipping").value = priceFormat(getElement("theQty").value * shipNonCon);
  }
  else if (obj1.selectedIndex == 1)
    getElement("theShipping").value = priceFormat(getElement("theQty").value * shipNonCon);
  else if (obj1.selectedIndex == 36)
    getElement("theShipping").value = priceFormat(getElement("theQty").value * shipCanada);
  else
    getElement("theShipping").value = priceFormat(getElement("theQty").value * shipForeign);
  sub = getElement("theSubTotal").value * 1;
  tax = getElement("theTax").value * 1;
  ship = getElement("theShipping").value * 1;
  getElement("theTotal").value = priceFormat(sub + tax + ship);
}

function setQtySubtotal(qty, uprice)
{
  getElement("theQty").value = qty;
  var obj = ( isNS ? document.billInfo.subtotal	: getElement("subtotal") );
  obj.value = "US$" + getSubtotal(uprice);
}

function qtyChange(minQty, maxQty, uprice, shipForeign, shipNonCan, shipCon, shipCanada)
{
  var obj = getElement("qtySelect");

  if (obj.selectedIndex	> maxQty - 1)
  {
    getElement("smallQty").style.display = "none";
    getElement("bigQty").style.display = "block";
    getElement("bigQtyText").value = (maxQty + 1);
    getElement("theQty").value = (maxQty + 1);
  }
  else
  {
    getElement("smallQty").style.display = "block";
    getElement("bigQty").style.display = "none";
  }
  var obj = getElement("qtySelect");

  if (obj.selectedIndex	>= 0)
    setQtySubtotal(obj.options[obj.selectedIndex].value, uprice);
  updatePrice(minQty, shipForeign, shipNonCan, shipCon, shipCanada);
}

function bigQtyChange(obj, minQty, maxQty, uprice, shipForeign, shipNonCon, shipCon, shipCanada)
{
  if (obj.value*1 < minQty || isNaN(obj.value*1) )
  {
    alert("The minimum order is " + minQty + ".");
    obj.value = document.billInfo.theQty.value;
    return;
  }
  getElement("theQty").value = obj.value;
  updateQty(minQty, maxQty, uprice, shipForeign, shipNonCon, shipCon, shipCanada);
  updatePrice(minQty, shipForeign, shipNonCon, shipCon, shipCanada);
}

function subtotalChange(obj)
{
  if ( isNS )
    obj.value = "US$" + priceFormat(getElement("theSubTotal").value);
}

function init(minQty, maxQty, uprice, shipForeign, shipCon, shipNonCon, shipCanada)
{
  var obj;
  if ( isNS )
  {
    var qty = getElement("bigQtyText").value;
    getElement("theQty").value = qty;
    getElement("theSubTotal").value = qty * uprice;
    if (getElement("continental").checked == 1)
      getElement("country").selectedIndex = 0;
//    else
//      getElement("country").selectedIndex = 1;
    if (getElement("firstname").value == "")
      getElement("firstname").focus();
  }
  else
  {
    obj = getElement("firstName");
    if (obj.value == "")
      obj.focus();
  }

  updateQty(minQty, maxQty, uprice, shipForeign, shipNonCon, shipCon, shipCanada);
  updatePrice(minQty, shipForeign, shipNonCon, shipCon, shipCanada);
}

function updateQty(minQty, maxQty, uprice, shipForeign, shipNonCon, shipCon, shipCanada)
{
  if (isNS || minQty > 1)
  {
    if (document.billInfo.subtotal != null)
      document.billInfo.subtotal.value = "US$" + getSubtotal(uprice);
  }
  else
  {
    var value = getElement("theQty").value;

    if (value * 1 < minQty || isNaN(value * 1))
    {
      alert("The minimum order is " + minQty + ".");
      value = (maxQty +	1);
      getElement("bigQtyText").value = value;
      getElement("qtySelect").selectedIndex = value;
    }

    if ( value > maxQty	)
    {
      getElement("smallQty").style.display = "none";
      getElement("bigQty").style.display = "block";
      getElement("bigQtyText").value = value;
      setQtySubtotal(getElement("bigQtyText").value, uprice);
    }
    else
    {
      getElement("qtySelect").selectedIndex = (value - 1);
      qtyChange(minQty, maxQty, uprice, shipForeign, shipNonCon, shipCon, shipCanada);
    }
    if (getElement("continental").checked)
    {
      getElement("statetext").style.display = "none";
      getElement("constateselect").style.display = "block";
      getElement("country").selectedIndex = 0;
    }
    else
    {
      getElement("statetext").style.display = "block";
      getElement("constateselect").style.display = "none";
    }
  }
}

function checkEMail(str)
{
  return (str.indexOf("@") > 0 && str.indexOf(".") > 0);
}

function checkall(theForm, minQty, shipForeign, shipNonCon, shipCon, shipCanada)
{
  if (theForm.firstName.value == "")
  {
    alert("Please enter your first name.");
    theForm.firstName.focus();
    return (false);
  }
  if (theForm.lastName.value == "")
  {
    alert("Please enter your last name.");
    theForm.lastName.focus();
    return (false);
  }
  if (theForm.address1.value == "")
  {
    alert("Please enter your address.");
    theForm.address1.focus();
    return (false);
  }
  if (theForm.city.value == "")
  {
    alert("Please enter your city.");
    theForm.city.focus();
    return (false);
  }
  if ((isNS || !isNS && getElement("statetext").style.display == "block") &&
theForm.state.value == "")
  {
    alert("Please enter your state/province/region.");
    theForm.state.focus();
    return (false);
  }
  if (theForm.country.selectedIndex == 0 && theForm.zip.value == "")
  {
    alert("Please enter your Zip/Postal code.");
    theForm.zip.focus();
    return (false);
  }
  if (theForm.phonea.value == "")
  {
    alert("Please enter your phone number.");
    theForm.phonea.focus();
    return (false);
  }
  if (theForm.eMail.value == "")
  {
    alert("Please enter your e-mail address.");
    theForm.eMail.focus();
    return (false);
  }
  if ( !checkEMail(theForm.eMail.value))
  {
    alert("Please enter	a correct e-mail address.");
    theForm.eMail.focus();
    return (false);
  }
  updatePrice(minQty, shipForeign, shipNonCon, shipCon, shipCanada);

  return (true);
}

function onContinental(minQty, shipForeign, shipNonCan, shipCon, shipCanada)
{
  var obj = getElement("continental");

  if (obj.checked)
  {
    if ( !isNS )
    {
      getElement("statetext").style.display = "none";
      getElement("constateselect").style.display = "block";
    }
    getElement("country").selectedIndex = 0;
  }
  else
  {
    if ( !isNS )
    {
      getElement("statetext").style.display = "block";
      getElement("constateselect").style.display = "none";
    }
    if (getElement("country").selectedIndex == 0)
      getElement("country").selectedIndex = 1;
  }
  updatePrice(minQty, shipForeign, shipNonCon, shipCon, shipCanada);
}

function onReset()
{
  if ( !isNS )
  {
    getElement("statetext").style.display = "none";
    getElement("constateselect").style.display = "block";
  }
  getElement("country").selectedIndex = 0;
}

function onCountry(minQty, shipForeign, shipNonCan, shipCon, shipCanada)
{
  if (getElement("country").selectedIndex > 0)
  {
    if ( !isNS )
    {
      getElement("statetext").style.display = "block";
      getElement("constateselect").style.display = "none";
    }
    getElement("continental").checked =	0;
  }
  else
  {
    if ( !isNS )
    {
      getElement("statetext").style.display = "none";
      getElement("constateselect").style.display = "block";
    }
    getElement("continental").checked =	1;
  }
  updatePrice(minQty, shipForeign, shipNonCon, shipCon, shipCanada);
}
