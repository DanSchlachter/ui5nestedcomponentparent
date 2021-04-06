/*global QUnit*/

sap.ui.define([
	"nsparentComp./parentcomp/controller/parentComp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("parentComp Controller");

	QUnit.test("I should test the parentComp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
