/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/functions/changeDegree.js":
/*!**************************************************!*\
  !*** ./src/components/functions/changeDegree.js ***!
  \**************************************************/
/*! exports provided: changeDegree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeDegree\", function() { return changeDegree; });\nfunction fToC(temp) {\n  return Math.round(5 / 9 * (temp - 32));\n}\n\nfunction cToF(temp) {\n  return Math.round(9 / 5 * temp + 32);\n}\n\nfunction changeDegree() {\n  const fDeg = document.querySelector('#F');\n  const cDeg = document.querySelector('#C');\n  const nextDay1TempSpan = document.querySelector('#nextDay1>div>span');\n  const nextDay2TempSpan = document.querySelector('#nextDay2>div>span');\n  const nextDay3TempSpan = document.querySelector('#nextDay3>div>span');\n  const appTempSpan = document.querySelectorAll('.today-weather__other>span')[0];\n  const tempSpan = document.querySelector('.today-weather__forecast>span');\n  fDeg.addEventListener('click', () => {\n    if (fDeg.className === 'inactive') {\n      cDeg.className = 'inactive';\n      fDeg.className = 'active';\n      nextDay1TempSpan.innerHTML = cToF(parseInt(nextDay1TempSpan.innerHTML)) + 'F';\n      nextDay2TempSpan.innerHTML = cToF(parseInt(nextDay2TempSpan.innerHTML)) + 'F';\n      nextDay3TempSpan.innerHTML = cToF(parseInt(nextDay3TempSpan.innerHTML)) + 'F';\n      appTempSpan.innerHTML = cToF(parseInt(appTempSpan.innerHTML)) + 'F';\n      tempSpan.innerHTML = cToF(parseInt(tempSpan.innerHTML)) + 'F';\n    }\n  });\n  cDeg.addEventListener('click', () => {\n    if (cDeg.className === 'inactive') {\n      fDeg.className = 'inactive';\n      cDeg.className = 'active';\n      nextDay1TempSpan.innerHTML = fToC(parseInt(nextDay1TempSpan.innerHTML)) + '&#176;';\n      nextDay2TempSpan.innerHTML = fToC(parseInt(nextDay2TempSpan.innerHTML)) + '&#176;';\n      nextDay3TempSpan.innerHTML = fToC(parseInt(nextDay3TempSpan.innerHTML)) + '&#176;';\n      appTempSpan.innerHTML = fToC(parseInt(appTempSpan.innerHTML)) + '&#176;';\n      tempSpan.innerHTML = fToC(parseInt(tempSpan.innerHTML)) + '&#176;';\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/components/functions/changeDegree.js?");

/***/ }),

/***/ "./src/components/functions/createMap.js":
/*!***********************************************!*\
  !*** ./src/components/functions/createMap.js ***!
  \***********************************************/
/*! exports provided: createMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMap\", function() { return createMap; });\nfunction createMap(center1, center2) {\n  mapboxgl.accessToken = 'pk.eyJ1IjoidmlraW5nc3BiIiwiYSI6ImNrM2tqNGQ3dTAzaTMzbXBoc3M2b2F1M24ifQ.Bp3PDP-MfQIRDxkvbivaIA';\n  const map = new mapboxgl.Map({\n    container: 'map',\n    style: 'mapbox://styles/mapbox/streets-v11',\n    center: [center1, center2],\n    zoom: 9\n  });\n}\n\n//# sourceURL=webpack:///./src/components/functions/createMap.js?");

/***/ }),

/***/ "./src/components/functions/getLinkToImage.js":
/*!****************************************************!*\
  !*** ./src/components/functions/getLinkToImage.js ***!
  \****************************************************/
/*! exports provided: getLinkToImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLinkToImage\", function() { return getLinkToImage; });\nconst width = screen.width.toString();\nconst height = screen.height.toString();\nconst body = document.querySelector('body');\nasync function getLinkToImage() {\n  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature+night+snow+winter' + '&client_id=a2840b831d7df553cc4c7c1492e8602cbd21b24a89cb2050aaf67407e892be30';\n\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    const image = document.createElement('img');\n    image.crossOrigin = 'Anonymous';\n    const link = `${data.urls.raw}&w=${width}&h=${height}`;\n    image.setAttribute('src', link);\n\n    image.onload = () => {\n      body.style.background = `url(${link}) no-repeat`;\n      body.style.backgroundSize = 'cover';\n    };\n\n    image.onerror = () => {\n      throw new Error('Data Error');\n    };\n  } catch (e) {\n    console.error(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/functions/getLinkToImage.js?");

/***/ }),

/***/ "./src/components/functions/getLocation.js":
/*!*************************************************!*\
  !*** ./src/components/functions/getLocation.js ***!
  \*************************************************/
/*! exports provided: getLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocation\", function() { return getLocation; });\nconst locationCoord1 = document.querySelector('.location__coord>span:first-child');\nconst locationCoord2 = document.querySelector('.location__coord>span:last-child');\nconst placeP = document.querySelector('.today-weather__place');\n\nfunction degToDegMin(deg) {\n  return `${Math.floor(Number(deg))}&#176;${Math.floor(Math.round((Number(deg) - Math.floor(Number(deg))) * 3600) / 60)}'`;\n}\n/* f1 parameters - long, lat; other functions - lat, long */\n\n\nasync function getLocation(f1, ...args) {\n  const url = 'https://ipinfo.io/geo?token=a4c83857cf016c';\n\n  try {\n    const response = await fetch(url);\n    const location = await response.json();\n    const loc = await location.loc.split(',');\n    const place = location.city;\n    placeP.innerHTML = place;\n    locationCoord1.innerHTML = degToDegMin(loc[0]);\n    locationCoord2.innerHTML = degToDegMin(loc[1]);\n    f1(Number(loc[1]), Number(loc[0]));\n    args.forEach(func => {\n      func(Number(loc[0]), Number(loc[1]));\n    });\n  } catch (e) {\n    console.error(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/functions/getLocation.js?");

/***/ }),

/***/ "./src/components/functions/getWeather.js":
/*!************************************************!*\
  !*** ./src/components/functions/getWeather.js ***!
  \************************************************/
/*! exports provided: getWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\nconst tempSpan = document.querySelector('.today-weather__forecast>span');\nconst summaryWeather = document.querySelectorAll('.today-weather__other>span');\nconst appTempSpan = summaryWeather[0];\nconst windSpan = summaryWeather[1];\nconst humiditySpan = summaryWeather[2];\nconst todayWeatherDate = document.querySelector('.today-weather__date');\nconst nextDay1Span = document.querySelector('#nextDay1>span');\nconst nextDay2Span = document.querySelector('#nextDay2>span');\nconst nextDay3Span = document.querySelector('#nextDay3>span');\nconst nextDay1TempSpan = document.querySelector('#nextDay1>div>span');\nconst nextDay2TempSpan = document.querySelector('#nextDay2>div>span');\nconst nextDay3TempSpan = document.querySelector('#nextDay3>div>span');\nconst todayWeatherIconElement = document.querySelector('.today-weather__icon');\nconst nextDay1WeatherIconElement = document.querySelector('#nextDay1>div>div');\nconst nextDay2WeatherIconElement = document.querySelector('#nextDay2>div>div');\nconst nextDay3WeatherIconElement = document.querySelector('#nextDay3>div>div');\n\nfunction fToC(temp) {\n  return Math.round(5 / 9 * (temp - 32));\n}\n\nasync function getWeather(lat, long) {\n  const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a8aa053288d0f79e11f6a65e33c19366/' + `${lat},${long}`;\n\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    const tempF = Math.round(data.currently.temperature);\n    const tempC = fToC(tempF);\n    const appTempF = Math.round(data.currently.apparentTemperature);\n    const appTempC = fToC(appTempF);\n    const windSpeed = data.currently.windSpeed.toFixed(1);\n    const humidity = Math.round(data.currently.humidity * 100);\n    const todayWeatherIcon = data.currently.icon;\n    const nextDay1WeatherIcon = data.daily.data[0].icon;\n    const nextDay2WeatherIcon = data.daily.data[1].icon;\n    const nextDay3WeatherIcon = data.daily.data[2].icon;\n    todayWeatherIconElement.style.background = `url(./assets/img/${todayWeatherIcon}.svg) no-repeat rgba(255, 255, 0, 0.1) 50% 50%`;\n    todayWeatherIconElement.style.backgroundSize = '100%';\n    nextDay1WeatherIconElement.style.background = `url(./assets/img/${nextDay1WeatherIcon}.svg) no-repeat rgba(255, 255, 0, 0.1) 50% 50%`;\n    nextDay1WeatherIconElement.style.backgroundSize = '100%';\n    nextDay2WeatherIconElement.style.background = `url(./assets/img/${nextDay2WeatherIcon}.svg) no-repeat rgba(255, 255, 0, 0.1) 50% 50%`;\n    nextDay2WeatherIconElement.style.backgroundSize = '100%';\n    nextDay3WeatherIconElement.style.background = `url(./assets/img/${nextDay3WeatherIcon}.svg) no-repeat rgba(255, 255, 0, 0.1) 50% 50%`;\n    nextDay3WeatherIconElement.style.backgroundSize = '100%';\n    const nextDay1Temp = fToC((data.daily.data[0].temperatureHigh + data.daily.data[0].temperatureLow) / 2);\n    const nextDay2Temp = fToC((data.daily.data[1].temperatureHigh + data.daily.data[1].temperatureLow) / 2);\n    const nextDay3Temp = fToC((data.daily.data[2].temperatureHigh + data.daily.data[2].temperatureLow) / 2);\n    const today = new Date(data.currently.time * 1000);\n    const nextDay1 = new Date((data.currently.time + 86400) * 1000);\n    const nextDay2 = new Date((data.currently.time + 172800) * 1000);\n    const nextDay3 = new Date((data.currently.time + 259200) * 1000);\n    const currTimeStr = today.toLocaleString('en-US', {\n      weekday: 'short',\n      day: 'numeric',\n      month: 'long',\n      hour: 'numeric',\n      minute: 'numeric',\n      hour12: false,\n      timeZone: data.timezone\n    });\n    const currTime = currTimeStr.replace(/\\,/g, '');\n    const nextWeekDay1 = nextDay1.toLocaleString('en-US', {\n      weekday: 'long',\n      timeZone: data.timezone\n    });\n    const nextWeekDay2 = nextDay2.toLocaleString('en-US', {\n      weekday: 'long',\n      timeZone: data.timezone\n    });\n    const nextWeekDay3 = nextDay3.toLocaleString('en-US', {\n      weekday: 'long',\n      timeZone: data.timezone\n    });\n    tempSpan.innerHTML = tempC + '&#176;';\n    appTempSpan.innerHTML = appTempC + '&#176;';\n    windSpan.innerHTML = windSpeed;\n    humiditySpan.innerHTML = humidity;\n    todayWeatherDate.innerHTML = currTime;\n    nextDay1Span.innerHTML = nextWeekDay1;\n    nextDay2Span.innerHTML = nextWeekDay2;\n    nextDay3Span.innerHTML = nextWeekDay3;\n    nextDay1TempSpan.innerHTML = nextDay1Temp + '&#176;';\n    nextDay2TempSpan.innerHTML = nextDay2Temp + '&#176;';\n    nextDay3TempSpan.innerHTML = nextDay3Temp + '&#176;';\n  } catch (e) {\n    console.error(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/functions/getWeather.js?");

/***/ }),

/***/ "./src/components/functions/search.js":
/*!********************************************!*\
  !*** ./src/components/functions/search.js ***!
  \********************************************/
/*! exports provided: getCoordinatesFromSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCoordinatesFromSearch\", function() { return getCoordinatesFromSearch; });\nconst KEY = '170c2c7305f64259838058f18894a876';\nconst locationCoord1 = document.querySelector('.location__coord>span:first-child');\nconst locationCoord2 = document.querySelector('.location__coord>span:last-child');\nconst placeP = document.querySelector('.today-weather__place');\nasync function getCoordinatesFromSearch(f1, ...args) {\n  const City = document.querySelector('#search').value;\n  if (!City && City.length < 3) return;\n  const url = `https://api.opencagedata.com/geocode/v1/json?q=${City}&key=${KEY}&pretty=1&no_annotations=1`;\n\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    const lat = ((data.results[0].bounds.northeast.lat + data.results[0].bounds.southwest.lat) / 2).toFixed(2);\n    const lng = ((data.results[0].bounds.northeast.lng + data.results[0].bounds.southwest.lng) / 2).toFixed(2);\n    console.log(lat, lng);\n    placeP.innerHTML = City;\n    locationCoord1.innerHTML = lat;\n    locationCoord2.innerHTML = lng;\n    f1(Number(lng), Number(lat));\n    args.forEach(func => {\n      func(Number(lat), Number(lng));\n    });\n  } catch (e) {\n    console.error(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/functions/search.js?");

/***/ }),

/***/ "./src/components/functions/voiceSearch.js":
/*!*************************************************!*\
  !*** ./src/components/functions/voiceSearch.js ***!
  \*************************************************/
/*! exports provided: voiceSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"voiceSearch\", function() { return voiceSearch; });\nconst cityInput = document.querySelector('#search');\nconst microButton = document.querySelector('#micro');\nfunction voiceSearch() {\n  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\n  const recognition = new SpeechRecognition();\n  recognition.lang = 'en-US';\n  recognition.addEventListener('result', e => {\n    const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');\n    cityInput.value = transcript;\n  });\n  microButton.addEventListener('click', () => {\n    recognition.start();\n  });\n}\n\n//# sourceURL=webpack:///./src/components/functions/voiceSearch.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_functions_getLinkToImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/functions/getLinkToImage */ \"./src/components/functions/getLinkToImage.js\");\n/* harmony import */ var _components_functions_getLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/functions/getLocation */ \"./src/components/functions/getLocation.js\");\n/* harmony import */ var _components_functions_createMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/functions/createMap */ \"./src/components/functions/createMap.js\");\n/* harmony import */ var _components_functions_getWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/functions/getWeather */ \"./src/components/functions/getWeather.js\");\n/* harmony import */ var _components_functions_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/functions/search */ \"./src/components/functions/search.js\");\n/* harmony import */ var _components_functions_voiceSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/functions/voiceSearch */ \"./src/components/functions/voiceSearch.js\");\n/* harmony import */ var _components_functions_changeDegree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/functions/changeDegree */ \"./src/components/functions/changeDegree.js\");\n\n\n\n\n\n\n\n\nconst refresh = document.querySelector('#refresh');\nconst searchButton = document.querySelector('#searchButton');\nsearchButton.addEventListener('click', () => {\n  Object(_components_functions_search__WEBPACK_IMPORTED_MODULE_5__[\"getCoordinatesFromSearch\"])(_components_functions_createMap__WEBPACK_IMPORTED_MODULE_3__[\"createMap\"], _components_functions_getWeather__WEBPACK_IMPORTED_MODULE_4__[\"getWeather\"], _components_functions_getLinkToImage__WEBPACK_IMPORTED_MODULE_1__[\"getLinkToImage\"]);\n});\nObject(_components_functions_getLinkToImage__WEBPACK_IMPORTED_MODULE_1__[\"getLinkToImage\"])();\nrefresh.addEventListener('click', _components_functions_getLinkToImage__WEBPACK_IMPORTED_MODULE_1__[\"getLinkToImage\"]);\nObject(_components_functions_getLocation__WEBPACK_IMPORTED_MODULE_2__[\"getLocation\"])(_components_functions_createMap__WEBPACK_IMPORTED_MODULE_3__[\"createMap\"], _components_functions_getWeather__WEBPACK_IMPORTED_MODULE_4__[\"getWeather\"]);\nObject(_components_functions_voiceSearch__WEBPACK_IMPORTED_MODULE_6__[\"voiceSearch\"])();\nObject(_components_functions_changeDegree__WEBPACK_IMPORTED_MODULE_7__[\"changeDegree\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });