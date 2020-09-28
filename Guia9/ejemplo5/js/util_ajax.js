function xml_text_node(elem,nam){
	try{
		return elem.getElementsByTagName(nam)[0].firstChild.nodeValue;
	}
	catch(e){
		return "";
	}
}
var AJAX = {
	XMLHttpFactories : [
	function () {return new XMLHttpRequest()},
	function () {return new ActiveXObject("Msxml2.XMLHTTP")},
	function () {return new ActiveXObject("Msxml3.XMLHTTP")},
	function () {return new ActiveXObject("Microsoft.XMLHTTP")}
	],
	createXMLHTTPObject : function (){
		xmlhttp = null;
		for (var i=0;i<AJAX.XMLHttpFactories.length;i++) {
			try {
				xmlhttp = AJAX.XMLHttpFactories[i]();
			}
			catch (e) {
				continue;
			}
			break;
		}
		return xmlhttp;
	},
	objectToURL : function (url,query_str_obj){
		url_str=url + '?';
		for(property in query_str_obj)
			url_str += property + "=" + encodeURIComponent(query_str_obj[property]) + "&";
		return url_str;
	},
	execute : function (url, functionCallBack){
		request = new Object();
		request.ajaxRequest = AJAX.createXMLHTTPObject();
		request.sendRequest = function(){
//Never happen, cause we create a new request each time
if(request.ajaxRequest.readyState == 1){   
	alert('error: still processing previous request');
	return;
}
request.ajaxRequest.open('get', url);
request.ajaxRequest.onreadystatechange = function(){
	if(request.ajaxRequest.readyState == 4 && request.ajaxRequest.status == 200){
//alert(request.ajaxobj.responseText);
functionCallBack(request.ajaxRequest);
}
}
request.ajaxRequest.send(null);
}
request.sendRequest();
return request;
}
};