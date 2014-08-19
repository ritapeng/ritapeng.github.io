var showidiom=function(idiom){
    return "<b>"+idiom.key+"</b>"+idiom.def;
}
var dosearch=function(){
	var tofind=document.getElementById("tofind").value;
	var arr=search(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br>");
}