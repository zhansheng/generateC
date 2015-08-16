var controlList = ["flowchart_start_item",
                   "flowchart_tjfz_item",
                   "flowchart_tjxh_item",
                   "flowchart_yyxh_item",
                   "flowchart_jsxh_item"];
var controlTypePoint = {
  "flowchart_start_item":{"head":"TopCenter","body":null,"foot":["BottomCenter"]},
  "flowchart_tjfz_item":{"head":"TopCenter","body":null,"foot":["LeftMiddle","RightMiddle"]},
  "flowchart_tjxh_item":{"head":"TopCenter","body":"BottomCenter","foot":["RightMiddle"]},
  "flowchart_yyxh_item":{"head":"TopCenter","body":"BottomCenter","foot":["RightMiddle"]},
  "flowchart_jsxh_item":{"head":"TopCenter","body":"BottomCenter","foot":["RightMiddle"]},
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
            "target_id": "flowchart_end_1439564127554_TopCenter"
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
            "target_id": "flowchart_end_1439564127554_TopCenter"
        },
        {
            "source_id": "flowchart_tjfz_1439565281599_RightMiddle",
            "target_id": "flowchart_dshs_1439565351663_TopCenter"
        },
        {
            "source_id": "flowchart_dshs_1439565351663_BottomCenter",
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

function convertDataToC(){
  var node = getIDByPrefix("flowchart_start",data.nodes);
  if(node == null){
    return;
  }
  console.log(typeof(controlTypePoint.id)=="undefined");
}

function getTypeByID(ID){
  var type = ID.split("_");
  type = type[0]+"_"+type[1]+"_item";
  return type;
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

function createStruct(startID,links,end){
  console.log(startID);
  var targetID = getTargetIDBySourceID(startID,links).target_id;
  if(targetID.indexOf(end)!=-1){
    return;
  }
  var type = getTypeByID(targetID);
  var body = getBodyByType(type).body;
  if(body!=null){
    var startID = targetID.replace("TopCenter",body);
    createStruct(startID,links,targetID.replace("TopCenter","LeftMiddle"));
  }
  var foot = getFootByType(type).foot;
  for (var i = 0; i < foot.length; i++) {
    var startID = targetID.replace("TopCenter",foot[i]);
    createStruct(startID,links,end);
  };
}

createStruct("flowchart_start_1439564127545_BottomCenter",data.links,"flowchart_end")