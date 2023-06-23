var BOW={};
BOW.address="";
BOW.os="BOWINC";

BOW.start = function(){
	BOW.host = document.location;
}
BOW.arena = function(){
	var r = {};
	r.show = function(){
		var cmd={};
		cmd.widget=function(name){
			var _app=[];
			return _app[name];
		}
		return cmd;
	}
	return r;
}
BOW.init = function(){
	BOW.start();
}
BOW.init();
