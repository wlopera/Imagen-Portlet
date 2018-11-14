(function(Liferay, angular) {
	
	
   if (angular.portlet)
      return;

	console.log("angular-portlet");

   angular.portlet = {};

   var angularPortlets = {};

   angular.portlet.add = function(pluginName, portletName, angularFunction) {
      //var portletId = "_WAR_" + pluginName.replace(/[_]|[-]/g, "");
      //var portletId = portletName.replace(/[_]|[-]/g, "") + portletId;
	  var portletId = pluginName + '_' + portletName
      angularPortlets[portletId] = angularFunction;
      
      //console.log("angular-portlet --> pluginName: ", pluginName);
      //console.log("angular-portlet --> portletName: ", portletName);
      console.log("angular-portlet --> portletId: ", portletId);
      //console.log("angular-portlet --> angularFunction: ", angularFunction);
   };

   Liferay.Portlet.ready(function(portletInstanceId, node) {
      
	  var portletId = portletInstanceId.replace(/[_]INSTANCE[_].+/g, "");

	  //console.log("angular-portlet ready --> portletInstanceId: ", portletInstanceId);
	  console.log("angular-portlet ready --> portletId: ", portletId);
      //console.log("angular-portlet ready --> node: ", node);
      
      if (angularPortlets[portletId]) {
         angular.bootstrap(node.getDOMNode(), angularPortlets[portletId](
            portletInstanceId, node.getDOMNode()));
      }
   });
})(Liferay, angular);