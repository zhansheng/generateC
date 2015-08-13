var keyworkds = ["main","if","else","for","while"];

var struct = [{"value":[{"value":"int a = 0;","name":"func"},
                        {"value":"int b = 1;","name":"func"},
                        {"value":[
                             {"value":'a=a+10;',"name":"func"},
                             {"value":'printf("%d",a);',"name":"func"}
                            ],
                         "name":"if",
                         "cond":"(a>b)"
                        },
                        {"value":[
                             {"value":'printf("%d",b);',"name":"func"}
                            ],
                         "name":"else",
                         "cond":""
                        }],
               "name":"main",
               "cond":"()"}];

function getSpace(index){
	var space = "";
	for (var i = 1; i < index; i++) {
		space += "    ";
	};
	return space;
}
function generate(obj,index){
	var str = ""
	if(obj.length > 1)
	  str += getSpace(index) + "{\n";
	for (var i = 0; i < obj.length; i++) {
		if(keyworkds.indexOf(obj[i]["name"]) != -1){
			str += getSpace(index+1) + obj[i]["name"] + obj[i]["cond"] + "\n";
			str += generate(obj[i]["value"],index+1);
		}else{
			str += getSpace(index+1) + obj[i]["value"];
			str += "\n";
		} 
	}
	if(obj.length > 1)
	  str += getSpace(index) + "}\n";
	return str;
}

alert("void "+generate(struct,0));