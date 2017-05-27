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