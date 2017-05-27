var menuItemWidth = 110;
var menuItemHeight = 15;

var menuArrays = new Array();
menuArrays = [[["Company","index.html"],["Employment","employment.html"]],
              [["Rare Earth","periodic.html"],["Silica Gel","silica-gel.html"],["Plastics","plastics.html"]],
              [["Rare Earth","rare-earth-service.html"],["Outsourcing","pad-install.html"],["Mold Prototyping","prototype.html"]]];

var i,j;
var menuURLs = new Array(menuArrays.length);
for (i=0;i<menuArrays.length;i++)
{
  menuURLs[i] = new Array(menuArrays[i].length);
  for (j=0; j<menuArrays[i].length; j++)
    menuURLs[i][j] = menuArrays[i][j][1];
}


var menuTimers = new Array(menuArrays.length);


function getStyleObj(id) 
{
  if (document.getElementById || // DOM-compliant browsers (MSIE5, NSN6, O5)
      document.all)              // or MSIE 4
    return getObj(id).style;
  else                           // NSN4
    return getObj(id);      
}

function getObj(id) 
{
  if (document.getElementById)
    return document.getElementById(id);
  else if (document.all)
    return document.all[id];
  else if (document.layers)
    return document.layers[id];
  else  // Trap DHTML-impaired browsers 
    return false;
}

function showMenu(index) 
{
  if (menuTimers[index-1]) clearTimeout(menuTimers[index-1]);

  for (i=1;i<=menuArrays.length;i++)
    if (i!=index) closeMenu(i);

  var menu = getStyleObj("menu"+index);

  if (menu) menu.visibility = "visible";
}


function hideMenu(index) 
{
  if (menuTimers[index-1]) clearTimeout(menuTimers[index-1]);

  menuTimers[index-1] = setTimeout("closeMenu('"+index+"');",500);
}


function closeMenu(index) 
{
  var menu = getStyleObj("menu"+index);

  if (menu) menu.visibility = "hidden";
}


function overMenuItem() 
{
  this.hilightitem.visibility='visible';
  showMenu(this.menuid);
}


function outMenuItem() 
{
  this.hilightitem.visibility='hidden';
  hideMenu(this.menuid);
}

function clickMenuItem() 
{
  if (this.url)
    window.location = this.url;
}

window.onload=setupMenus;

function setupMenus() 
{
  if (document.layers)  //  Netscape 4 only
  {
    for (menuid=1;menuid<=menuArrays.length;menuid++) 
    {
      var menu = getObj("menu"+menuid);

      menu.clip.width = menuItemWidth + 2;
      menu.clip.height = (menuItemHeight+1) * menuArrays[menuid-1].length + 1;

      menu.document.bgColor="#000000";

      for (i=1;i<=menuArrays[menuid-1].length;i++) 
      {
        var item = eval("menu.document.menu"+menuid+"item"+i);
        var onitem = eval("menu.document.menu"+menuid+"item"+i+"on");
        item.top = (menuItemHeight + 1) * (i-1) + 1;
        onitem.top = (menuItemHeight + 1) * (i-1) + 1;

        item.clip.width = menuItemWidth;
        item.clip.height = menuItemHeight;
        item.document.bgColor="#FFFF99";
        onitem.clip.width = menuItemWidth;
        onitem.clip.height = menuItemHeight;
        onitem.document.bgColor="#007700";

        item.hilightitem = onitem;
        onitem.hilightitem = onitem;

        item.menuid = menuid;
        onitem.menuid = menuid;

        var url = menuURLs[menuid-1][i-1];
        item.url = url;
        onitem.url = url;

        var eTypes = Event.MOUSEOVER | Event.MOUSEOUT | Event.CLICK;
        item.captureEvents(eTypes);
        onitem.captureEvents(eTypes);
        item.onmouseover = overMenuItem;
        onitem.onmouseover = overMenuItem;
        item.onmouseout = outMenuItem;
        onitem.onmouseout = outMenuItem;
        item.onclick = clickMenuItem;
        onitem.onclick = clickMenuItem;
      }
    }
  } 
  else  // for all other browsers
  {
    for (menuid=1;menuid<=menuArrays.length;menuid++) 
    {
      for (i=1;i<=menuArrays[menuid-1].length;i++) 
      { 
        var item = getObj("menu"+menuid+"item"+i);
        var onitem = getObj("menu"+menuid+"item"+i+"on");
        var itemstyle = getStyleObj("menu"+menuid+"item"+i);
        var onitemstyle = getStyleObj("menu"+menuid+"item"+i+"on");

        itemstyle.top = ((menuItemHeight + 1) * (i-1) + 1) + "px";
        onitemstyle.top = ((menuItemHeight + 1) * (i-1) + 1) + "px";
                
        if (navigator.appName=="Microsoft Internet Explorer") 
        {
          itemstyle.cursor = "hand";
          onitemstyle.cursor = "hand";
        }

        item.hilightitem = onitemstyle;
        onitem.hilightitem = onitemstyle;

        item.menuid = menuid;
        onitem.menuid = menuid;

        var url = menuURLs[menuid-1][i-1];
        item.url = url;
        onitem.url = url;

        item.onmouseover = overMenuItem;
        onitem.onmouseover = overMenuItem;
        item.onmouseout = outMenuItem;
        onitem.onmouseout = outMenuItem;
        item.onclick = clickMenuItem;
        onitem.onclick = clickMenuItem;
      }
    }
  }
}

function handleResize() 
{
  location.reload();
  return false;
}
if (document.layers) {
  window.onresize = handleResize;
}
