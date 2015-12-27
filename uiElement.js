/**
 * Created by maciejpaprocki on 26/12/2015.
 */

/**
 * Help classes used across the project
 * @type {{map: helper.map, forEach: helper.forEach}}
 */
var helper = {
    /**
     *
     * @param nodeList
     * @param callable
     * @param thisArg
     * @return array
     */
    map: function (nodeList, callable, thisArg) {
        if (!thisArg) {
            thisArg = {};
        }
        var res = [];
        for (var i = 0, l = nodeList.length; i < l; i++) {
            res.push(callable.call(thisArg, nodeList[i], i, nodeList));
        }
        return res;
    },
    /**
     *
     * @param nodeList
     * @param callable
     * @param thisArg
     * @return array
     */
    forEach: function (nodeList, callable, thisArg) {
        helper.map.apply(null,arguments);
        return nodeList;
    }

}
/**
 * Global iterator used for assigning id's to use functions find;
 * @type {number}
 */
globalSelectorIterator = 0;
/**
 *
 * @node scope NodeElement
 * @constructor
 */
var Selector = function (scope) {
    this.scope = scope;

    if (scope.id) {
        this.id = scope.id;
    } else {
        this.id = 'uniqueUiElementId_' + globalSelectorIterator++;
        scope.id = this.id;
    }
};
/**
 * Function responsible for finding nodes by string in scope of Node
 * @param selector
 * @returns {NodeList}
 */
Selector.prototype.find = function (selector) {
    return document.querySelectorAll(this.id + ' ' + selector);
};
/**
 * Function responsible for kid nodes of node
 * @param selector
 * @returns {NodeList}
 */
Selector.prototype.children = function () {
    return document.querySelectorAll(this.id + ' > ' + selector);
};
/**
 * Extendable Class for uiElement
 * @param selector String
 * @param options
 * @constructor
 */
var UiElement = function (el, options) {
    this.el = el;
    this.$el = new Selector(el);
    this.options = options;
};

UiElement.prototype.bind = function () {

};
/**
 * Static classes for UiELement
 */
/**
 * The most important class for extending uiElement.
 * All the SubClasses will use this function
 * @param object object object to be extended
 */
UiElement.extend = function (object) {

};
UiElement.attach = function (selector) {

    var objectsArray = [];
    var els = document.querySelectorAll(selector);
    objectsArray = helper.map(els,function(){

    })
};
module.exports.Selector = Selector;
module.exports.UiElement = UiElement;
module.exports.helper = helper;

