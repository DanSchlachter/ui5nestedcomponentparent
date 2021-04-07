sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("ns.parentComp.parentcomp.controller.parentComp", {
			 onInit: function () {
	        // // get the child container
			// var oChildContainer = this.byId("myChildContainer");
			// this.getOwnerComponent().runAsOwner(function () {
			// 	sap.ui.component({
			// 		name: "ns.child.childcomp", //Our child component
			// 		id: "childcomp",
			// 		manifestFirst: true,
			// 		async: true
			// 	}).then(function (component) {
			// 		// set the component when it is successfully loaded
			// 		oChildContainer.setComponent(component);
			// 	}.bind(this));
			// }.bind(this));
			}
		});
	});
