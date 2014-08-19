var search=function(tofind){
	var out=[];
	for(var i=0;i<idioms.length;i++){
		if(idioms[i].key.indexOf(tofind)>-1){
			out.push(idioms[i]);
		}
	}
	return out;
}