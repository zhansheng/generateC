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
               "cond":""}];

function generate(obj){
	var str = ""
	if(obj.length > 1)
	  str += "{\n";
	for (var i = 0; i < obj.length; i++) {
		if(keyworkds.indexOf(obj[i]["name"]) != -1){
			str += obj[i]["name"] + obj[i]["cond"] + "\n";
			str += generate(obj[i]["value"]);
		}else{
			str += obj[i]["value"];
			str += "\n";
		} 
	}
	if(obj.length > 1)
	  str += "}\n";
	return str;
}

alert(generate(struct));