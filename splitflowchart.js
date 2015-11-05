var controlList = ["flowchart_start_item",
                   "flowchart_tjfz_item",
                   "flowchart_tjxh_item",
                   "flowchart_yyxh_item",
                   "flowchart_jsxh_item"];
var controlTypePoint = {
  "flowchart_start_item":{"name":"mian","head":"TopCenter","body":null,"foot":["BottomCenter"]},
  "flowchart_tjfz_item":{"name":["if","else"],"head":"TopCenter","body":null,"foot":["LeftMiddle","RightMiddle"]},
  "flowchart_tjxh_item":{"name":"while","head":"TopCenter","body":"BottomCenter","foot":["RightMiddle"]},
  "flowchart_yyxh_item":{"name":"while","head":"TopCenter","body":"BottomCenter","foot":["RightMiddle"]},
  "flowchart_jsxh_item":{"name":"while","head":"TopCenter","body":"BottomCenter","foot":["RightMiddle"]},
}
var data = {
    "nodes": [
        {
            "x": "199.5px",
            "y": "20px",
            "id": "flowchart_start_1439564127545",
            "data-item": "flowchart_start_item",
            "text": "开始"
        },
        {
            "x": "199.5px",
            "y": "548px",
            "id": "flowchart_end_1439564127554",
            "data-item": "flowchart_end_item",
            "text": "结束"
        },
        {
            "x": "199.5px",
            "y": "548px",
            "id": "flowchart_yshs_1439564127554",
            "data-item": "flowchart_yshs_item",
            "text": "延时函数"
        },
        {
            "x": "199.5px",
            "y": "548px",
            "id": "flowchart_yshs_1439564127555",
            "data-item": "flowchart_yshs_item",
            "text": "延时函数"
        },
        {
            "x": "199.5px",
            "y": "76px",
            "id": "flowchart_soundSensor_1_1439564136592",
            "data-item": "flowchart_soundSensor_item",
            "text": "声音传感(E0)"
        },
        {
            "x": "199.5px",
            "y": "142px",
            "id": "flowchart_tjfz_1439564142236",
            "data-item": "flowchart_tjfz_item",
            "text": "条件分支"
        },
        {
            "x": "294.5px",
            "y": "188px",
            "id": "flowchart_dshs_1439564153391",
            "data-item": "flowchart_dshs_item",
            "text": "定时函数"
        },
        {
            "x": "104.5px",
            "y": "188px",
            "id": "flowchart_switch_3_1439564413925",
            "data-item": "flowchart_switch_item",
            "text": "开关(G0)"
        },
        {
            "x": "40.5px",
            "y": "266px",
            "id": "flowchart_tjxh_1439564423425",
            "data-item": "flowchart_tjxh_item",
            "text": "条件循环"
        },
        {
            "x": "110.5px",
            "y": "416px",
            "id": "flowchart_fzhs_1439564438103",
            "data-item": "flowchart_fzhs_item",
            "text": "赋值函数"
        },
        {
            "x": "43.5px",
            "y": "329px",
            "id": "flowchart_dshs_1439565243036",
            "data-item": "flowchart_dshs_item",
            "text": "定时函数"
        },
        {
            "x": "352.5px",
            "y": "251px",
            "id": "flowchart_tjfz_1439565281599",
            "data-item": "flowchart_tjfz_item",
            "text": "条件分支"
        },
        {
            "x": "352.5px",
            "y": "251px",
            "id": "flowchart_tjfz_1439565281600",
            "data-item": "flowchart_tjfz_item",
            "text": "条件分支"
        },
        {
            "x": "352.5px",
            "y": "251px",
            "id": "flowchart_tjfz_1439565281601",
            "data-item": "flowchart_tjfz_item",
            "text": "条件分支"
        },
        {
            "x": "447.5px",
            "y": "297px",
            "id": "flowchart_dshs_1439565351663",
            "data-item": "flowchart_dshs_item",
            "text": "定时函数"
        }
    ],
    "links": [
        {
            "source_id": "flowchart_start_1439564127545_BottomCenter",
            "target_id": "flowchart_soundSensor_1_1439564136592_TopCenter"
        },
        {
            "source_id": "flowchart_soundSensor_1_1439564136592_BottomCenter",
            "target_id": "flowchart_tjfz_1439564142236_TopCenter"
        },
        {
            "source_id": "flowchart_tjfz_1439564142236_RightMiddle",
            "target_id": "flowchart_dshs_1439564153391_TopCenter"
        },
        {
            "source_id": "flowchart_tjfz_1439564142236_LeftMiddle",
            "target_id": "flowchart_switch_3_1439564413925_TopCenter"
        },
        {
            "source_id": "flowchart_switch_3_1439564413925_BottomCenter",
            "target_id": "flowchart_tjxh_1439564423425_TopCenter"
        },
        {
            "source_id": "flowchart_tjxh_1439564423425_RightMiddle",
            "target_id": "flowchart_fzhs_1439564438103_TopCenter"
        },
        {
            "source_id": "flowchart_fzhs_1439564438103_BottomCenter",
            "target_id": "flowchart_yshs_1439564127554_TopCenter"
        },
        {
            "source_id": "flowchart_tjxh_1439564423425_BottomCenter",
            "target_id": "flowchart_dshs_1439565243036_TopCenter"
        },
        {
            "source_id": "flowchart_dshs_1439565243036_BottomCenter",
            "target_id": "flowchart_tjxh_1439564423425_LeftMiddle"
        },
        {
            "source_id": "flowchart_dshs_1439564153391_BottomCenter",
            "target_id": "flowchart_tjfz_1439565281599_TopCenter"
        },
        {
            "source_id": "flowchart_tjfz_1439565281599_LeftMiddle",
            "target_id": "flowchart_tjfz_1439565281601_TopCenter"
        },
        {
            "source_id": "flowchart_tjfz_1439565281601_LeftMiddle",
            "target_id": "flowchart_yshs_1439564127554_TopCenter"
        },
        {
            "source_id": "flowchart_tjfz_1439565281601_RightMiddle",
            "target_id": "flowchart_yshs_1439564127554_TopCenter"
        },
        {
            "source_id": "flowchart_tjfz_1439565281599_RightMiddle",
            "target_id": "flowchart_dshs_1439565351663_TopCenter"
        },
        {
            "source_id": "flowchart_dshs_1439565351663_BottomCenter",
            "target_id": "flowchart_yshs_1439564127554_TopCenter"
        },{
            "source_id": "flowchart_yshs_1439564127554_BottomCenter",
            "target_id": "flowchart_yshs_1439564127555_TopCenter"
        },{
            "source_id": "flowchart_yshs_1439564127555_BottomCenter",
            "target_id": "flowchart_tjfz_1439565281600_TopCenter"
        },{
            "source_id": "flowchart_tjfz_1439565281600_LeftMiddle",
            "target_id": "flowchart_end_1439564127554_TopCenter"
        },
        {
            "source_id": "flowchart_tjfz_1439565281600_RightMiddle",
            "target_id": "flowchart_end_1439564127554_TopCenter"
        }
    ]
}


function getIDByPrefix(prefix,nodes){
  for (var i = 0; i < nodes.length; i++) {
    if(nodes[i].id.indexOf(prefix)!=-1){
      return nodes[i];
    }
  };
  return null
}

function getTargetIDBySourceID(sourceID,links){
  for (var i = 0; i < links.length; i++) {
    if(links[i].source_id == sourceID){
      return links[i];
    }
  };
  return null
}

function getIDByID(ID){
  var values = ID.split("_").slice(0, -1);
  return "func";//values.join("_");
}

function getTypeByID(ID){
  var type = ID.split("_");
  type = type[0]+"_"+type[1]+"_item";
  return type;
}

function getNameByType(type){
  var type_info = controlTypePoint[type];
  if(typeof(type_info)=="undefined"){
    return {"name":""};
  }
  return type_info;
}

function getBodyByType(type){
  var type_info = controlTypePoint[type];
  if(typeof(type_info)=="undefined"){
    return {"body":null};
  }
  return type_info;
}

function getFootByType(type){
  var type_info = controlTypePoint[type];
  if(typeof(type_info)=="undefined"){
    return {"foot":["BottomCenter"]};
  }
  return type_info;
}

function getSpace(index){
  var space = "";
  for (var i = 0; i < index; i++) {
    space += "    ";
  };
  return space;
}

var targetList = [];
var targetCountList = []; 
var targetIndexList = []; 

function getCode(startID,links,end,index){
  var str = "";
  if(controlList.indexOf(getTypeByID(startID))==-1){
    //console.log(getSpace(index)+getIDByID(startID));
    str += getSpace(index+1) + getIDByID(startID);
    str += "\n";
  }
  return str;
}

function createStructNode(targetID,str,links,end,index,mark){
  if(targetID.indexOf(end)!=-1){
    return str;
  }
  var type = getTypeByID(targetID);
  var name = getBodyByType(type).name;
  var body = getBodyByType(type).body;
  if(body!=null){
    var startID = targetID.replace("TopCenter",body);
    //console.log(getSpace(index)+name+"{")
    str += getSpace(index+1) + name + "{";
    str += "\n";
    str += createStruct(startID,links,targetID.replace("TopCenter","LeftMiddle"),index+1);
    //console.log(getSpace(index)+"}")
    str += getSpace(index+1) + "}";
    str += "\n";
  }
  var foot = getFootByType(type).foot;
  for (var i = 0; i < foot.length; i++) {
    var startID = targetID.replace("TopCenter",foot[i]);
    if(foot.length==2){
      //console.log(getSpace(index)+name[i]+"{")
      str += getSpace(index+1) + name[i] + "{";
      str += "\n";
      str+=createStruct(startID,links,end,index+1);
      //console.log(getSpace(index)+"}")
      str += getSpace(index+1) + "}";
      str += "\n";
      
      //console.log(targetList)
      //console.log(targetCountList)
      //console.log(targetIndexList)
      if(targetList.length>0 && targetCountList[targetList.length-1] == 0 && index==targetIndexList[targetList.length-1]){
        var targetID = targetList[targetList.length-1];
        //console.log(targetID)
        //console.log(body)
        //console.log(foot)
        //console.log(type)
        targetList.pop();
        targetCountList.pop();
        targetIndexList.pop();
        str += createStructNode(targetID,"",links,end,index,1);
      }
    }else{
      if(mark==1){
        //console.log(startID)
      }
      str+=createStruct(startID,links,end,index,mark);
    }
  };
  return str;
}

function createStruct(startID,links,end,index,mark){
  var str = getCode(startID,links,end,index);
  var targetID = getTargetIDBySourceID(startID,links).target_id;
  var targetCount = getTargetCount(targetID,links);
  if(targetCount > 1 && targetID.indexOf(end)==-1){
    var targetIndex = targetList.indexOf(targetID);
    if(targetIndex==-1){
      targetList.push(targetID);
      targetCountList.push(targetCount-1);
      targetIndexList.push(index-1);
    }else{
      targetCountList[targetIndex] = targetCountList[targetIndex] - 1; 
      if(targetIndexList[targetIndex]>index-1){
        targetIndexList[targetIndex] = index-1;
      }
    }
    return str;
  }
  if(mark==1){
    console.log(targetID)
    console.log(targetList)
    console.log(targetCountList)
    console.log(targetIndexList)
  }
  //console.log(targetList)
  //console.log(targetCountList)
  //console.log(targetIndexList)
  //console.log(startID)
  return createStructNode(targetID,str,links,end,index)
}

function main(){
  //console.log("main(){");
  var str="main(){\n";
  var node = getIDByPrefix("flowchart_start",data.nodes);
  if(node != null){
    var startID = node.id + "_BottomCenter";
    str += createStruct(startID,data.links,"flowchart_end",0); 
  }
  //console.log("}");
  str += "}";
  alert(str);
}

main()

function getTargetCount(targetID,links){
  var count = 0;
  for (var i = 0; i < links.length; i++) {
    if(links[i].target_id == targetID){
      count ++;
    }
  }
  return count;
}