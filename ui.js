var dosearch=function(){
	var tofind=document.getElementById("tofind").value;
	var arr=search(tofind);
	result.innerHTML=arr.join("<br/>");
}