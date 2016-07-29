/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./index.js */1);


/***/ },
/* 1 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	/*import CDropDown from './src/dropdown/index.js';
	exports.CDropDown = CDropDown;*/
	
	'use strict';
	
	module.exports.CDropDown = __webpack_require__(/*! ./src/dropdown/index.js */ 2);

/***/ },
/* 2 */
/*!*******************************!*\
  !*** ./src/dropdown/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by caiw on 7/4/2015.
	 */
	/*
	 how to use:
	 CDropDown.create($("<li></li>")[0], {
	     id: "", //string.
	     defaultKey: "", //string. existed id in options.
	     options: [{
	         id: "",
	         label: "",
	         icon: ""
	     }, {}]
	     prompt: "", //if fail to find item in options by defautlKey, use prompt string.
	     onchange: function(){} //event triggered when selected item change.
	 });
	
	
	
	case 1:
	 $("body").append("<div id='dropdowntest' style='position:absolute; top:0; left:0;z-index:10000'></div>");
	 CDropDown.create($("#dropdowntest")[0], {
	    id: "id", //string.
	    defaultKey: "", //string. existed id in options.
	    options: [{
	        id: "op1Id",
	        label: "op1 label",
	        icon: "res/svgs/private.svg"
	    },{
	        id: "op2Id",
	        label: "op2 label",
	        icon: "res/svgs/private.svg"
	    }],
	    prompt: "drop down test", //if fail to find item in options by defautlKey, use prompt string.
	    onchange: function(){} //event triggered when selected item change.
	 });
	
	 case 2:
	 $("body").append("<div id='dropdowntest' style='position:absolute; top:0; left:0;z-index:10000'></div>");
	 CDropDown.create($("#dropdowntest")[0], {
	 id: "id", //string.
	 defaultKey: "op1Id", //string. existed id in options.
	 options: [{
	 id: "op1Id",
	 icon: "res/svgs/private.svg"
	 },{
	 id: "op2Id",
	 icon: "res/svgs/private.svg"
	 }],
	 prompt: "", //if fail to find item in options by defautlKey, use prompt string.
	 onchange: function(){} //event triggered when selected item change.
	 });
	*/
	"use strict";
	
	__webpack_require__(/*! ./style.less */ 3);
	
	var CDropDown = function CDropDown(container, param) {
	    this.instance = $(container).cdropdown(param);
	    this.container = $(container);
	    this.param = param;
	};
	
	CDropDown.create = function (container, param) {
	    return new CDropDown(container, param);
	};
	
	CDropDown.prototype.instance = undefined;
	CDropDown.prototype.container = undefined;
	CDropDown.prototype.param = undefined;
	
	CDropDown.prototype.toggleOptions = function () {
	    this.instance.cdropdown("toggleOptions");
	};
	CDropDown.prototype.destroy = function () {
	    this.instance.cdropdown("destroy");
	};
	CDropDown.prototype.update = function (param) {
	    this.destroy();
	    $.extend(this.param, param);
	    this.instance = this.container.cdropdown(this.param);
	};
	CDropDown.prototype.getValue = function () {
	    return this.instance.cdropdown("getValue");
	};
	module.exports = CDropDown;
	
	$.widget("custom.cdropdown", {
	    widgetEventPrefix: "cdropdown",
	    options: {
	        id: "",
	        defaultKey: "",
	        options: [],
	        prompt: "",
	        disabled: false,
	        onchange: undefined,
	        onopenpopup: undefined,
	        onclosepopup: undefined
	    },
	    loseFocusHandler: null,
	
	    _create: function _create() {
	        this.update();
	        this.loseFocusHandler = (function (e) {
	            var isHit = function isHit(itm) {
	                var isPosInRect = function isPosInRect(pos, rect) {
	                    return rect.left < pos.x && pos.x < rect.right && rect.top < pos.y && pos.y < rect.bottom;
	                };
	
	                var cursorPos = { x: e.clientX, y: e.clientY };
	
	                var left = itm.offset().left;
	                var top = itm.offset().top;
	                var right = left + itm.outerWidth();
	                var bottom = top + itm.outerHeight();
	
	                var rect = {
	                    left: left,
	                    top: top,
	                    right: right,
	                    bottom: bottom
	                };
	                if (isPosInRect(cursorPos, rect)) {
	                    return true;
	                } else return false;
	            };
	
	            if (!isHit(this.element.find(">button")) && !isHit(this.element.find(">ul"))) {
	                this.close();
	            }
	        }).bind(this);
	    },
	
	    _destroy: function _destroy() {
	        this.close();
	
	        this.element.html('');
	    },
	
	    getOptionByKey: function getOptionByKey(key) {
	        var self = this;
	        var option;
	        $.each(this.options.options, function () {
	            if (this.id == key) {
	                option = this;
	                return false;
	            }
	        });
	        return option;
	    },
	
	    update: function update() {
	        var self = this;
	        self.element.addClass("cdropdown").addClass(self.options.id);
	        self.element.html("");
	
	        var option;
	        var label, icon;
	        if (typeof self.options.defaultKey != "undefined") option = self.getOptionByKey(self.options.defaultKey);
	
	        label = option ? option.label : self.options.prompt;
	        label = label ? label : "";
	        icon = option ? option.icon : icon;
	
	        var html = '<button type="button" ></button>';
	        self.element.append($(html));
	        self.element.find("button").attr("title", label);
	
	        if (icon) {
	            self.element.find("button").append($("<span class='icon'></span>"));
	            self.element.find("button .icon").attr("data-src", icon);
	            if (icon.endsWith("svg")) {
	                ResourceManager.injectSVGImage(self.element.find("button .icon")[0]);
	            }
	        }
	
	        self.element.find("button").append($("<span class='utext'></span>"));
	        self.element.find("button .utext").html(label);
	        self.element.find("button").append($("<span class='caret'></span>"));
	
	        self.element.removeClass('disable');
	        if (self.options.disabled) {
	            this.element.addClass('disable');
	        }
	
	        if (!self.options.disabled) {
	            self.element.find("button").click(function () {
	                var ul = self.element.find("ul");
	                var isopen = !self.element.find("ul").is(":visible");
	
	                if (isopen) {
	                    self.open();
	                } else {
	                    self.close();
	                }
	            });
	        }
	
	        html = '<ul role="menu"></ul>';
	        self.element.append($(html));
	
	        for (var i = 0; i < self.options.options.length; i++) {
	            var option = self.options.options[i];
	            var container = self.element.find(">ul");
	            self.createOptionDom(option, container);
	        }
	    },
	    open: function open() {
	        var ul = this.element.find(">ul");
	        ul.show();
	
	        this.options.onopenpopup && this.options.onopenpopup({
	            id: this.options.id,
	            bound: {
	                left: ul.offset().left,
	                top: ul.offset().top,
	                width: ul.outerWidth(),
	                height: ul.outerHeight()
	            }
	        });
	        $.capture($("body"), "mousedown", this.loseFocusHandler);
	        $.capture($("body"), "mousewheel", this.dropdownOnScroll);
	    },
	    close: function close() {
	        this.element.find(">ul").hide();
	        this.options.onclosepopup && this.options.onclosepopup({ id: this.options.id });
	        $.unbindcapture($("body"), "mousedown", this.loseFocusHandler);
	        $.unbindcapture($("body"), "mousewheel", this.dropdownOnScroll);
	    },
	
	    dropdownOnScroll: function dropdownOnScroll(e) {
	        e.stopPropagation();
	    },
	
	    toggleOptions: function toggleOptions() {
	        if (this.element.find('>ul').is(':visible')) {
	            this.close();
	        } else {
	            this.open();
	        }
	    },
	    createOptionDom: function createOptionDom(option, container) {
	        var self = this;
	
	        var id = option.id;
	        var label = option.label ? option.label : "";
	        var icon = option.icon ? option.icon : "";
	
	        var html = "<li data='#id' role='presentation' title='#label'><span data-src='#icon' class='icon'></span><a role='menuitem' href='javascript:void(0);'>#label</a></li>";
	        html = html.replace(/#id/g, id).replace(/#label/g, label).replace(/#icon/g, icon);
	
	        container.append($(html));
	
	        var selector = "li[data='#id']".replace(/#id/g, id);
	        if (!icon) {
	            container.find(selector).find(".icon").remove();
	        } else if (icon.endsWith("svg")) {
	            ResourceManager.injectSVGImage(container.find(selector).find(".icon")[0]);
	        }
	
	        container.find(selector).bind("mousedown", function (e) {
	            var key = $(this).attr("data");
	            self.options.defaultKey = key;
	            self.update();
	
	            self.close();
	            self.options.onchange && self.options.onchange(key);
	        });
	    },
	
	    getValue: function getValue() {
	        return this.options.defaultKey;
	    }
	});

/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./src/dropdown/style.less ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/.npminstall/css-loader/0.23.1/css-loader!./../../~/.npminstall/less-loader/2.2.3/less-loader!./style.less */ 4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/.npminstall/style-loader/0.13.1/style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/*!****************************************************************************************************************************!*\
  !*** ./~/.npminstall/css-loader/0.23.1/css-loader!./~/.npminstall/less-loader/2.2.3/less-loader!./src/dropdown/style.less ***!
  \****************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/.npminstall/css-loader/0.23.1/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ".cdropdown {\n  float: left;\n  position: relative;\n}\n.cdropdown.disable {\n  opacity: 0.5;\n}\n.cdropdown img,\n.cdropdown svg {\n  margin: 5px 0 0 5px;\n  width: 10px;\n  height: 10px;\n  float: left;\n}\n.cdropdown button {\n  height: 26px;\n  width: 110px;\n  font-size: 13px;\n  text-align: left;\n  padding-left: 0;\n  outline: none;\n  background: none;\n  border: solid 1px #ccc;\n}\n.cdropdown button svg {\n  margin: 5px 0 0 10px;\n  width: 10px;\n  height: 10px;\n  float: left;\n}\n.cdropdown button .utext {\n  margin-left: 10px;\n}\n.cdropdown button .caret {\n  margin-left: 8px;\n}\n.cdropdown > ul {\n  height: auto;\n  max-height: 136px;\n  display: none;\n  width: 100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 0;\n  min-width: 0;\n  bottom: auto;\n  padding: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  box-shadow: none;\n  left: 0;\n  z-index: 1000;\n  position: absolute;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n}\n.cdropdown > ul li {\n  float: none;\n  height: 26px;\n  width: 100%;\n  list-style: none;\n}\n.cdropdown > ul li.option-divider {\n  margin-top: 5px;\n  border-top: 1px solid #ccc ;\n  height: 0px;\n  line-height: 0px;\n}\n.cdropdown > ul li svg {\n  margin: 10px 0 0 10px;\n  width: 10px;\n  height: 10px;\n  float: left;\n}\n.cdropdown > ul li:hover {\n  cursor: pointer;\n  background-color: #f5f5f5;\n}\n.cdropdown > ul li input,\n.cdropdown > ul li a {\n  padding: 0;\n  margin: 5px 0 0 10px;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  clear: none;\n  font-weight: 400;\n  line-height: 1.42857143;\n  color: #333;\n  text-decoration: none;\n}\n", ""]);
	
	// exports


/***/ },
/* 5 */
/*!********************************************************************!*\
  !*** ./~/.npminstall/css-loader/0.23.1/css-loader/lib/css-base.js ***!
  \********************************************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/*!*********************************************************************!*\
  !*** ./~/.npminstall/style-loader/0.13.1/style-loader/addStyles.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map