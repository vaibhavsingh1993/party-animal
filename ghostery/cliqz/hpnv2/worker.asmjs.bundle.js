!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["11"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('d', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = {
    initModule(makeModule) {
      return new Promise((resolve, reject) => {
        try {
          makeModule().then(({ GroupSigner }) => resolve(GroupSigner));
        } catch (e) {
          reject(e);
        }
      });
    }
  };
});

var ModuleAsmjs = function () {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return function (ModuleAsmjs) {
    ModuleAsmjs = ModuleAsmjs || {};

    var Module = typeof ModuleAsmjs !== "undefined" ? ModuleAsmjs : {};

    var BUFFER_SIZE = 10 * 1024;

    function _arrayToPtr(data, ptr) {
      if (data.length > BUFFER_SIZE) {
        throw new Error("Data size exceeded");
      }
      writeArrayToMemory(data, ptr);
      return ptr;
    }

    function GroupSigner() {
      this.buffers = [];
      this._makeBindings();
      this.stateSize = Module._GS_getStateSize();
      var state = _malloc(this.stateSize);
      Module._GS_initState(state);
      this._updateState(state);
      _free(state);
    }

    function initStaticMembers() {
      GroupSigner._version = UTF8ToString(Module._GS_version());
      GroupSigner._curve = UTF8ToString(Module._GS_curve());
    }

    if (Module["calledRun"]) {
      initStaticMembers();
    } else {
      var old = Module["onRuntimeInitialized"];
      Module["onRuntimeInitialized"] = function () {
        if (old) old();
        initStaticMembers();
      };
    }

    GroupSigner.prototype._getBuffer = function () {
      const buffer = _malloc(BUFFER_SIZE);
      this.buffers.push(buffer);
      return buffer;
    };

    GroupSigner.prototype._freeBuffers = function () {
      this.buffers.forEach(function (buffer) {
        _free(buffer);
      });
      this.buffers = [];
    };

    GroupSigner.prototype._updateState = function (state) {
      this.state = new Uint8Array(HEAPU8.buffer, state, this.stateSize).slice();
    };

    GroupSigner.prototype._makeBindings = function () {
      var self = this;
      function _(func, inputs, output, context) {
        inputs = inputs === undefined ? 0 : inputs;
        output = output === undefined ? false : output;
        context = context === undefined ? true : context;
        return function () {
          try {
            var state = _arrayToPtr(self.state, self._getBuffer());
            var args = Array.prototype.slice.call(arguments);
            if (args.length !== inputs) {
              throw new Error("expected " + inputs + " arguments");
            }
            if (!args.every(function (arg) {
              return arg instanceof Uint8Array;
            })) {
              throw new Error("input data must be uint8array");
            }
            var funcArgs = [];
            if (context) {
              funcArgs.push(state);
            }
            for (var i = 0; i < inputs; ++i) {
              var ptr = _arrayToPtr(args[i], self._getBuffer());
              funcArgs.push(ptr);
              funcArgs.push(args[i].length);
            }
            if (output === "array") {
              var ptr = self._getBuffer();
              setValue(ptr, BUFFER_SIZE - 4, "i32");
              funcArgs.push(ptr + 4);
              funcArgs.push(ptr);
            } else if (output === "joinstatic") {
              var ptr = self._getBuffer();
              setValue(ptr, BUFFER_SIZE - 4, "i32");
              funcArgs.push(ptr + 4);
              funcArgs.push(ptr);
              var ptr2 = self._getBuffer();
              setValue(ptr2, BUFFER_SIZE - 4, "i32");
              funcArgs.push(ptr2 + 4);
              funcArgs.push(ptr2);
            }
            var res = Module[func].apply(Module, funcArgs);
            this._updateState(state);
            if (output === "boolean") {
              if (res === Module._GS_success()) {
                return true;
              } else if (res === Module._GS_failure()) {
                return false;
              }
            }
            if (res !== Module._GS_success()) {
              throw new Error(UTF8ToString(Module._GS_error(res)));
            }
            if (output === "joinstatic") {
              var ptrjoinmsg = funcArgs[funcArgs.length - 1];
              var ptrgsk = funcArgs[funcArgs.length - 3];
              var gsk = new Uint8Array(HEAPU8.buffer, ptrgsk + 4, getValue(ptrgsk, "i32")).slice();
              var joinmsg = new Uint8Array(HEAPU8.buffer, ptrjoinmsg + 4, getValue(ptrjoinmsg, "i32")).slice();
              return {
                gsk: gsk,
                joinmsg: joinmsg
              };
            } else if (output) {
              var ptr = funcArgs[funcArgs.length - 1];
              return new Uint8Array(HEAPU8.buffer, ptr + 4, getValue(ptr, "i32")).slice();
            }
          } finally {
            this._freeBuffers();
          }
        };
      }
      this.seed = _("_GS_seed", 1);
      this.setupGroup = _("_GS_setupGroup");
      this.getGroupPubKey = _("_GS_exportGroupPubKey", 0, "array");
      this.getGroupPrivKey = _("_GS_exportGroupPrivKey", 0, "array");
      this.getUserCredentials = _("_GS_exportUserCredentials", 0, "array");
      this.setGroupPubKey = _("_GS_loadGroupPubKey", 1);
      this.setGroupPrivKey = _("_GS_loadGroupPrivKey", 1);
      this.setUserCredentials = _("_GS_loadUserCredentials", 1);
      this.processJoin = _("_GS_processJoin", 2, "array");
      this.sign = _("_GS_sign", 2, "array");
      this.verify = _("_GS_verify", 3, "boolean");
      this.getSignatureTag = _("_GS_getSignatureTag", 1, "array", false);
      this.startJoin = _("_GS_startJoin", 1, "joinstatic");
      this.finishJoin = _("_GS_finishJoin", 3, "array", false);
    };

    Module.GroupSigner = GroupSigner;

    var moduleOverrides = {};

    var key;

    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }

    Module["arguments"] = [];

    Module["thisProgram"] = "./this.program";

    Module["quit"] = function (status, toThrow) {
      throw toThrow;
    };

    Module["preRun"] = [];

    Module["postRun"] = [];

    var ENVIRONMENT_IS_WEB = false;

    var ENVIRONMENT_IS_WORKER = false;

    var ENVIRONMENT_IS_NODE = false;

    var ENVIRONMENT_IS_SHELL = false;

    ENVIRONMENT_IS_WEB = typeof window === "object";

    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";

    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof require === "function" && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;

    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

    var scriptDirectory = "";

    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      } else {
        return scriptDirectory + path;
      }
    }

    if (ENVIRONMENT_IS_NODE) {
      scriptDirectory = __dirname + "/";
      var nodeFS;
      var nodePath;
      Module["read"] = function shell_read(filename, binary) {
        var ret;
        ret = tryParseAsDataURI(filename);
        if (!ret) {
          if (!nodeFS) nodeFS = require("fs");
          if (!nodePath) nodePath = require("path");
          filename = nodePath["normalize"](filename);
          ret = nodeFS["readFileSync"](filename);
        }
        return binary ? ret : ret.toString();
      };
      Module["readBinary"] = function readBinary(filename) {
        var ret = Module["read"](filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process["argv"].length > 1) {
        Module["thisProgram"] = process["argv"][1].replace(/\\/g, "/");
      }
      Module["arguments"] = process["argv"].slice(2);
      process["on"]("uncaughtException", function (ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", abort);
      Module["quit"] = function (status) {
        process["exit"](status);
      };
      Module["inspect"] = function () {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        Module["read"] = function shell_read(f) {
          var data = tryParseAsDataURI(f);
          if (data) {
            return intArrayToString(data);
          }
          return read(f);
        };
      }
      Module["readBinary"] = function readBinary(f) {
        var data;
        data = tryParseAsDataURI(f);
        if (data) {
          return data;
        }
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };
      if (typeof scriptArgs != "undefined") {
        Module["arguments"] = scriptArgs;
      } else if (typeof arguments != "undefined") {
        Module["arguments"] = arguments;
      }
      if (typeof quit === "function") {
        Module["quit"] = function (status) {
          quit(status);
        };
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      Module["read"] = function shell_read(url) {
        try {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        } catch (err) {
          var data = tryParseAsDataURI(url);
          if (data) {
            return intArrayToString(data);
          }
          throw err;
        }
      };
      if (ENVIRONMENT_IS_WORKER) {
        Module["readBinary"] = function readBinary(url) {
          try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          } catch (err) {
            var data = tryParseAsDataURI(url);
            if (data) {
              return data;
            }
            throw err;
          }
        };
      }
      Module["readAsync"] = function readAsync(url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
            onload(xhr.response);
            return;
          }
          var data = tryParseAsDataURI(url);
          if (data) {
            onload(data.buffer);
            return;
          }
          onerror();
        };
        xhr.onerror = onerror;
        xhr.send(null);
      };
      Module["setWindowTitle"] = function (title) {
        document.title = title;
      };
    } else {}

    var out = Module["print"] || (typeof console !== "undefined" ? console.log.bind(console) : typeof print !== "undefined" ? print : null);

    var err = Module["printErr"] || (typeof printErr !== "undefined" ? printErr : typeof console !== "undefined" && console.warn.bind(console) || out);

    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }

    moduleOverrides = undefined;

    var STACK_ALIGN = 16;

    function dynamicAlloc(size) {
      var ret = HEAP32[DYNAMICTOP_PTR >> 2];
      var end = ret + size + 15 & -16;
      if (end <= _emscripten_get_heap_size()) {
        HEAP32[DYNAMICTOP_PTR >> 2] = end;
      } else {
        return 0;
      }
      return ret;
    }

    function getNativeTypeSize(type) {
      switch (type) {
        case "i1":
        case "i8":
          return 1;

        case "i16":
          return 2;

        case "i32":
          return 4;

        case "i64":
          return 8;

        case "float":
          return 4;

        case "double":
          return 8;

        default:
          {
            if (type[type.length - 1] === "*") {
              return 4;
            } else if (type[0] === "i") {
              var bits = parseInt(type.substr(1));
              assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
              return bits / 8;
            } else {
              return 0;
            }
          }
      }
    }

    function warnOnce(text) {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    }

    var jsCallStartIndex = 1;

    var functionPointers = new Array(0);

    var funcWrappers = {};

    function dynCall(sig, ptr, args) {
      if (args && args.length) {
        return Module["dynCall_" + sig].apply(null, [ptr].concat(args));
      } else {
        return Module["dynCall_" + sig].call(null, ptr);
      }
    }

    var tempRet0 = 0;

    var setTempRet0 = function (value) {
      tempRet0 = value;
    };

    var getTempRet0 = function () {
      return tempRet0;
    };

    var GLOBAL_BASE = 8;

    function getValue(ptr, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*") type = "i32";
      switch (type) {
        case "i1":
          return HEAP8[ptr >> 0];

        case "i8":
          return HEAP8[ptr >> 0];

        case "i16":
          return HEAP16[ptr >> 1];

        case "i32":
          return HEAP32[ptr >> 2];

        case "i64":
          return HEAP32[ptr >> 2];

        case "float":
          return HEAPF32[ptr >> 2];

        case "double":
          return HEAPF64[ptr >> 3];

        default:
          abort("invalid type for getValue: " + type);
      }
      return null;
    }

    var ABORT = false;

    var EXITSTATUS = 0;

    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }

    function getCFunc(ident) {
      var func = Module["_" + ident];
      assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
      return func;
    }

    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = {
        "string": function (str) {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) {
            var len = (str.length << 2) + 1;
            ret = stackAlloc(len);
            stringToUTF8(str, ret, len);
          }
          return ret;
        },
        "array": function (arr) {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };
      function convertReturnValue(ret) {
        if (returnType === "string") return UTF8ToString(ret);
        if (returnType === "boolean") return Boolean(ret);
        return ret;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0) stackRestore(stack);
      return ret;
    }

    function setValue(ptr, value, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*") type = "i32";
      switch (type) {
        case "i1":
          HEAP8[ptr >> 0] = value;
          break;

        case "i8":
          HEAP8[ptr >> 0] = value;
          break;

        case "i16":
          HEAP16[ptr >> 1] = value;
          break;

        case "i32":
          HEAP32[ptr >> 2] = value;
          break;

        case "i64":
          tempI64 = [value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
          break;

        case "float":
          HEAPF32[ptr >> 2] = value;
          break;

        case "double":
          HEAPF64[ptr >> 3] = value;
          break;

        default:
          abort("invalid type for setValue: " + type);
      }
    }

    var ALLOC_NONE = 3;

    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

    function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (u8Array[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = u8Array[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          var u1 = u8Array[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }
          var u2 = u8Array[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }
      return str;
    }

    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }

    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0)) return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx) break;
          outU8Array[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          outU8Array[outIdx++] = 192 | u >> 6;
          outU8Array[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          outU8Array[outIdx++] = 224 | u >> 12;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) break;
          outU8Array[outIdx++] = 240 | u >> 18;
          outU8Array[outIdx++] = 128 | u >> 12 & 63;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        }
      }
      outU8Array[outIdx] = 0;
      return outIdx - startIdx;
    }

    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }

    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127) ++len;else if (u <= 2047) len += 2;else if (u <= 65535) len += 3;else len += 4;
      }
      return len;
    }

    var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;

    function writeArrayToMemory(array, buffer) {
      HEAP8.set(array, buffer);
    }

    function writeAsciiToMemory(str, buffer, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull) HEAP8[buffer >> 0] = 0;
    }

    function demangle(func) {
      return func;
    }

    function demangleAll(text) {
      var regex = /__Z[\w\d_]+/g;
      return text.replace(regex, function (x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]";
      });
    }

    function jsStackTrace() {
      var err = new Error();
      if (!err.stack) {
        try {
          throw new Error(0);
        } catch (e) {
          err = e;
        }
        if (!err.stack) {
          return "(no stack trace available)";
        }
      }
      return err.stack.toString();
    }

    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

    function updateGlobalBufferViews() {
      Module["HEAP8"] = HEAP8 = new Int8Array(buffer);
      Module["HEAP16"] = HEAP16 = new Int16Array(buffer);
      Module["HEAP32"] = HEAP32 = new Int32Array(buffer);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buffer);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buffer);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buffer);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buffer);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buffer);
    }

    var STACK_BASE = 2704,
        DYNAMIC_BASE = 5245584,
        DYNAMICTOP_PTR = 2448;

    var TOTAL_STACK = 5242880;

    var TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 16777216;

    if (TOTAL_MEMORY < TOTAL_STACK) err("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + TOTAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");

    if (Module["buffer"]) {
      buffer = Module["buffer"];
    } else {
      {
        buffer = new ArrayBuffer(TOTAL_MEMORY);
      }
      Module["buffer"] = buffer;
    }

    updateGlobalBufferViews();

    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;

    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
          callback();
          continue;
        }
        var func = callback.func;
        if (typeof func === "number") {
          if (callback.arg === undefined) {
            Module["dynCall_v"](func);
          } else {
            Module["dynCall_vi"](func, callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

    var __ATPRERUN__ = [];

    var __ATINIT__ = [];

    var __ATMAIN__ = [];

    var __ATEXIT__ = [];

    var __ATPOSTRUN__ = [];

    var runtimeInitialized = false;

    var runtimeExited = false;

    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }

    function ensureInitRuntime() {
      if (runtimeInitialized) return;
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }

    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }

    function exitRuntime() {
      callRuntimeCallbacks(__ATEXIT__);
      runtimeExited = true;
    }

    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }

    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }

    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }

    var Math_abs = Math.abs;

    var Math_ceil = Math.ceil;

    var Math_floor = Math.floor;

    var Math_min = Math.min;

    var runDependencies = 0;

    var runDependencyWatcher = null;

    var dependenciesFulfilled = null;

    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }

    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }

    Module["preloadedImages"] = {};

    Module["preloadedAudios"] = {};

    var memoryInitializer = null;

    var dataURIPrefix = "data:application/octet-stream;base64,";

    function isDataURI(filename) {
      return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
    }

    memoryInitializer = "data:application/octet-stream;base64,AAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAKEQAAAAAIAAn/8HAAAAgABNNLoBAABAAIJkIyUAAAAAAAAAAAAAAAASAAAAAAAAAKcTAAAAAAAAIWEIAAAAgABNNLoBAABAAIJkIyUAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAACAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr+wPIJELuAJENv5hIu4sAZKS27WGMfgCMjesvtp5RALsQGgYAAAAAAAAAAAAAAADzTNXnwTSMAA23hDeua3QATR9bqoJZjACnCjEzeHO6APmqFgUAAAAAAAAAAAAAAACaK82ReODwABm9Cb695goAvSkjgoxplgDgkJpDk69rAKCXGAIAAAAAAAAAAAAAAACbzjpr7BotAIpXyTnX/wYAkLA3jfP1VgBEbY8mFYt8AA4ruw4AAAAAAAAAAAAAAAATAAAAAAAAAKcTAAAAAAAAIWEIAAAAgABNNLoBAABAAIJkIyUAAAAAAAAAAAAAAAA5fl7/liovADzxlitk6GQARnEMsPcmmQAkzdq05yGDAC56Eh0AAAAAAAAAAAAAAADpbSpvwOZ9AOHCdz9NknQACYU/lUaoUACbSbaMfC4hABl2NxsAAAAAAAAAAAAAAAAqktWQPxmCAMVQiMCybYsAF9zIarlXLwCy6gN1g9EeAGnu6wkAAAAAAAAAAAAAAACYL4pCkUQ3cc/7wLWl27XpW8JWOfER8Vmkgj+S1V4cq5iqB9gBW4MSvoUxJMN9DFV0Xb5y/rHegKcG3Jt08ZvBwWmb5IZHvu/GncEPzKEMJG8s6S2qhHRK3KmwXNqI+XZSUT6YbcYxqMgnA7DHf1m/8wvgxkeRp9VRY8oGZykpFIUKtyc4IRsu/G0sTRMNOFNUcwpluwpqdi7JwoGFLHKSoei/oktmGqhwi0vCo1FsxxnoktEkBpnWhTUO9HCgahAWwaQZCGw3Hkx3SCe1vLA0swwcOUqq2E5Pypxb828uaO6Cj3RvY6V4FHjIhAgCx4z6/76Q62xQpPej+b7yeHHGIq4o15gvikLNZe8jkUQ3cS87TezP+8C1vNuJgaXbtek4tUjzW8JWORnQBbbxEfFZm08Zr6SCP5IYgW3a1V4cq0ICA6OYqgfYvm9wRQFbgxKMsuROvoUxJOK0/9XDfQxVb4l78nRdvnKxlhY7/rHegDUSxyWnBtyblCZpz3Txm8HSSvGewWmb5OMlTziGR77vtdWMi8adwQ9lnKx3zKEMJHUCK1lvLOktg+SmbqqEdErU+0G93KmwXLVTEYPaiPl2q99m7lJRPpgQMrQtbcYxqD8h+5jIJwOw5A7vvsd/Wb/Cj6g98wvgxiWnCpNHkafVb4ID4FFjygZwbg4KZykpFPwv0kaFCrcnJskmXDghGy7tKsRa/G0sTd+zlZ0TDThT3mOvi1RzCmWosnc8uwpqduau7UcuycKBOzWCFIUscpJkA/FMoei/ogEwQrxLZhqokZf40HCLS8IwvlQGo1FsxxhS79YZ6JLREKllVSQGmdYqIHFXhTUO9LjRuzJwoGoQyNDSuBbBpBlTq0FRCGw3Hpnrjt9Md0gnqEib4bW8sDRjWsnFswwcOcuKQeNKqthOc+Njd0/KnFujuLLW828uaPyy713ugo90YC8XQ29jpXhyq/ChFHjIhOw5ZBoIAseMKB5jI/r/vpDpvYLe62xQpBV5xrL3o/m+K1Ny4/J4ccacYSbqzj4nygfCwCHHuIbRHuvgzdZ92up40W7uf0999bpvF3KqZ/AGppjIosV9YwquDfm+BJg/ERtHHBM1C3EbhH0EI/V32yiTJMdAe6vKMry+yRUKvp48TA0QnMRnHUO2Qj7LvtTFTCp+ZfycKX9Z7PrWOqtvy18XWEdKjBlEbOU1lNdQXkMAAQAAAAIAAAAxLjAAQk4yNTQAa28Ab2sAc2VlZCB0b28gc21hbGwAbm90IHNlZWRlZABpbnZhbGlkIGdyb3VwIHByaXZhdGUga2V5AGludmFsaWQgZ3JvdXAgcHVibGljIGtleQBvdXRwdXQgYnVmZmVyIHRvbyBzbWFsbABpbnZhbGlkIHVzZXIgcHJpdmF0ZSBrZXkAaW52YWxpZCBqb2luIHJlc3BvbnNlAGludmFsaWQgdXNlciBjcmVkZW50aWFscwBncm91cCBwcml2YXRlIGtleSBub3Qgc2V0AGdyb3VwIHB1YmxpYyBrZXkgbm90IHNldAB1c2VyIGNyZWRlbnRpYWxzIG5vdCBzZXQAaW52YWxpZCBqb2luIG1lc3NhZ2UAaW52YWxpZCBzaWduYXR1cmUAdW5rbm93biBtZXNzYWdl";

    var tempDoublePtr = 2688;

    function _emscripten_get_heap_size() {
      return TOTAL_MEMORY;
    }

    function abortOnCannotGrowMemory(requestedSize) {
      abort("Cannot enlarge memory arrays to size " + requestedSize + " bytes. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + TOTAL_MEMORY + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
    }

    function _emscripten_resize_heap(requestedSize) {
      abortOnCannotGrowMemory(requestedSize);
    }

    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
    }

    function ___setErrNo(value) {
      if (Module["___errno_location"]) HEAP32[Module["___errno_location"]() >> 2] = value;
      return value;
    }

    var ASSERTIONS = false;

    function intArrayToString(array) {
      var ret = [];
      for (var i = 0; i < array.length; i++) {
        var chr = array[i];
        if (chr > 255) {
          if (ASSERTIONS) {
            assert(false, "Character code " + chr + " (" + String.fromCharCode(chr) + ")  at offset " + i + " not in 0x00-0xFF.");
          }
          chr &= 255;
        }
        ret.push(String.fromCharCode(chr));
      }
      return ret.join("");
    }

    var decodeBase64 = typeof atob === "function" ? atob : function (input) {
      var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }
      } while (i < input.length);
      return output;
    };

    function intArrayFromBase64(s) {
      if (typeof ENVIRONMENT_IS_NODE === "boolean" && ENVIRONMENT_IS_NODE) {
        var buf;
        try {
          buf = Buffer.from(s, "base64");
        } catch (_) {
          buf = new Buffer(s, "base64");
        }
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      }
      try {
        var decoded = decodeBase64(s);
        var bytes = new Uint8Array(decoded.length);
        for (var i = 0; i < decoded.length; ++i) {
          bytes[i] = decoded.charCodeAt(i);
        }
        return bytes;
      } catch (_) {
        throw new Error("Converting base64 string to bytes failed.");
      }
    }

    function tryParseAsDataURI(filename) {
      if (!isDataURI(filename)) {
        return;
      }
      return intArrayFromBase64(filename.slice(dataURIPrefix.length));
    }

    var asmGlobalArg = {
      "Math": Math,
      "Int8Array": Int8Array,
      "Int32Array": Int32Array,
      "Uint8Array": Uint8Array
    };

    var asmLibraryArg = {
      "a": abort,
      "b": setTempRet0,
      "c": getTempRet0,
      "d": ___setErrNo,
      "e": _emscripten_get_heap_size,
      "f": _emscripten_memcpy_big,
      "g": _emscripten_resize_heap,
      "h": abortOnCannotGrowMemory,
      "i": tempDoublePtr,
      "j": DYNAMICTOP_PTR
    };

    // EMSCRIPTEN_START_ASM


    var asm = /** @suppress {uselessCode} */function (global, env, buffer) {
      "use asm";
      var a = new global.Int8Array(buffer),
          b = new global.Int32Array(buffer),
          c = new global.Uint8Array(buffer),
          d = env.i | 0,
          e = env.j | 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0.0,
          n = global.Math.imul,
          o = global.Math.clz32,
          p = env.a,
          q = env.b,
          r = env.c,
          s = env.d,
          t = env.e,
          u = env.f,
          v = env.g,
          w = env.h,
          x = 2704,
          y = 5245584,
          z = 0.0;
      // EMSCRIPTEN_START_FUNCS
      function A(a) {
        a = a | 0;var b = 0;b = x;x = x + a | 0;x = x + 15 & -16;return b | 0;
      }function B() {
        return x | 0;
      }function C(a) {
        a = a | 0;x = a;
      }function D(a, b) {
        a = a | 0;b = b | 0;x = a;y = b;
      }function E(a) {
        a = a | 0;b[a + 1560 >> 2] = 0;return;
      }function F(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;if ((d | 0) < 128) {
          d = 2;return d | 0;
        }Wc(a, d, c);d = a + 1560 | 0;b[d >> 2] = b[d >> 2] | 1;d = 1;return d | 0;
      }function G(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0;m = x;x = x + 1280 | 0;c = m + 512 | 0;e = m + 1184 | 0;f = m + 480 | 0;g = m + 96 | 0;h = m + 896 | 0;i = m + 48 | 0;j = m;k = m + 608 | 0;l = a + 1560 | 0;d = b[l >> 2] & 1;if (!d) {
          l = 3;x = m;return l | 0;
        }b[l >> 2] = d;r = a + 128 | 0;xc(c, 304);xc(c + 48 | 0, 352);xc(e, 400);xc(e + 48 | 0, 448);Wa(k, c, e) | 0;Qa(r, k);p = a + 416 | 0;Qa(p, k);d = a + 864 | 0;qa(c, 64);Ma(d, c, a);n = a + 904 | 0;qa(c, 64);Ma(n, c, a);Uc(r, d);Uc(p, n);q = a + 704 | 0;o = a + 744 | 0;qa(j, 64);qa(c, 64);Ma(i, c, a);Qa(h, k);Uc(h, i);b[c >> 2] = 0;b[c + 4 >> 2] = 384;b[c + 8 >> 2] = g;Ua(c, r);b[c >> 2] = 0;b[c + 4 >> 2] = 256;b[c + 8 >> 2] = g + 128;Ua(c, k);b[c >> 2] = 0;b[c + 4 >> 2] = 128;b[c + 8 >> 2] = g + 256;Ua(c, h);b[c >> 2] = 384;b[c + 4 >> 2] = 384;b[c + 8 >> 2] = g;b[e >> 2] = 0;b[e + 4 >> 2] = 32;b[e + 8 >> 2] = f;Vc(32, -1, c, e);ma(q, f);qa(c, 64);Ha(q, c);Na(o, q, d, j);va(o, o, i);Ha(o, j);o = a + 784 | 0;d = a + 824 | 0;qa(j, 64);qa(c, 64);Ma(i, c, a);Qa(h, k);Uc(h, i);b[c >> 2] = 0;b[c + 4 >> 2] = 384;b[c + 8 >> 2] = g;Ua(c, p);b[c >> 2] = 0;b[c + 4 >> 2] = 256;b[c + 8 >> 2] = g + 128;Ua(c, k);b[c >> 2] = 0;b[c + 4 >> 2] = 128;b[c + 8 >> 2] = g + 256;Ua(c, h);b[c >> 2] = 384;b[c + 4 >> 2] = 384;b[c + 8 >> 2] = g;b[e >> 2] = 0;b[e + 4 >> 2] = 32;b[e + 8 >> 2] = f;Vc(32, -1, c, e);ma(o, f);qa(c, 64);Ha(o, c);Na(d, o, n, j);va(d, d, i);Ha(d, j);b[l >> 2] = b[l >> 2] | 6;l = 1;x = m;return l | 0;
      }function H(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;o = x;x = x + 784 | 0;i = o + 672 | 0;j = o + 576 | 0;k = o + 288 | 0;l = o;m = o + 768 | 0;n = a + 1560 | 0;b[n >> 2] = b[n >> 2] & 1;b[m >> 2] = 0;e = m + 4 | 0;b[e >> 2] = d;d = m + 8 | 0;b[d >> 2] = c;f = a + 128 | 0;if (!(J(m, f) | 0)) {
          n = 4;x = o;return n | 0;
        }g = b[m >> 2] | 0;h = g + 32 | 0;b[m >> 2] = h;c = b[e >> 2] | 0;if ((h | 0) > (c | 0)) {
          n = 4;x = o;return n | 0;
        }e = a + 864 | 0;d = b[d >> 2] | 0;ma(e, d + g | 0);g = g + 64 | 0;b[m >> 2] = g;if ((g | 0) > (c | 0)) {
          n = 4;x = o;return n | 0;
        }m = a + 904 | 0;ma(m, d + h | 0);xc(i, 304);xc(i + 48 | 0, 352);xc(j, 400);xc(j + 48 | 0, 448);Wa(k, i, j) | 0;xc(i, 304);xc(i + 48 | 0, 352);xc(j, 400);xc(j + 48 | 0, 448);Wa(l, i, j) | 0;Uc(k, e);Uc(l, m);if (!(Ra(k, f) | 0)) {
          n = 4;x = o;return n | 0;
        }if (!(Ra(l, a + 416 | 0) | 0)) {
          n = 4;x = o;return n | 0;
        }b[n >> 2] = b[n >> 2] | 6;n = 1;x = o;return n | 0;
      }function I(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0;f = x;x = x + 16 | 0;g = f;e = a + 1560 | 0;b[e >> 2] = b[e >> 2] & 1;b[g >> 2] = 0;b[g + 4 >> 2] = d;b[g + 8 >> 2] = c;if (!(J(g, a + 128 | 0) | 0)) {
          g = 5;x = f;return g | 0;
        }b[e >> 2] = b[e >> 2] | 4;g = 1;x = f;return g | 0;
      }function J(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;o = x;x = x + 480 | 0;l = o + 384 | 0;m = o + 288 | 0;n = o;e = b[a >> 2] | 0;j = e + 128 | 0;b[a >> 2] = j;k = a + 4 | 0;d = b[k >> 2] | 0;if ((j | 0) > (d | 0)) {
          n = 0;x = o;return n | 0;
        }b[l >> 2] = 0;b[l + 4 >> 2] = d - e;j = a + 8 | 0;b[l + 8 >> 2] = (b[j >> 2] | 0) + e;if (!(Va(c, l) | 0)) {
          n = 0;x = o;return n | 0;
        }i = c + 288 | 0;d = b[a >> 2] | 0;h = d + 128 | 0;b[a >> 2] = h;e = b[k >> 2] | 0;if ((h | 0) > (e | 0)) {
          n = 0;x = o;return n | 0;
        }b[l >> 2] = 0;b[l + 4 >> 2] = e - d;b[l + 8 >> 2] = (b[j >> 2] | 0) + d;if (!(Va(i, l) | 0)) {
          n = 0;x = o;return n | 0;
        }d = b[a >> 2] | 0;h = d + 32 | 0;b[a >> 2] = h;if ((h | 0) > (b[k >> 2] | 0)) {
          n = 0;x = o;return n | 0;
        }h = c + 576 | 0;ma(h, (b[j >> 2] | 0) + d | 0);d = b[a >> 2] | 0;g = d + 32 | 0;b[a >> 2] = g;if ((g | 0) > (b[k >> 2] | 0)) {
          n = 0;x = o;return n | 0;
        }g = c + 616 | 0;ma(g, (b[j >> 2] | 0) + d | 0);d = b[a >> 2] | 0;f = d + 32 | 0;b[a >> 2] = f;if ((f | 0) > (b[k >> 2] | 0)) {
          n = 0;x = o;return n | 0;
        }f = c + 656 | 0;ma(f, (b[j >> 2] | 0) + d | 0);e = b[a >> 2] | 0;d = e + 32 | 0;b[a >> 2] = d;if ((d | 0) > (b[k >> 2] | 0)) {
          n = 0;x = o;return n | 0;
        }d = c + 696 | 0;ma(d, (b[j >> 2] | 0) + e | 0);xc(l, 304);xc(l + 48 | 0, 352);xc(m, 400);xc(m + 48 | 0, 448);Wa(n, l, m) | 0;if (!(aa(n, c, h, g) | 0)) d = 0;else d = (aa(n, i, f, d) | 0) != 0 & 1;n = d;x = o;return n | 0;
      }function K(a, c, d, e, f, g, h) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;var i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0;u = x;x = x + 1584 | 0;t = u + 400 | 0;p = u + 1568 | 0;q = u + 368 | 0;j = u + 128 | 0;k = u + 80 | 0;l = u + 32 | 0;m = u + 1424 | 0;n = u + 1280 | 0;o = u;r = u + 1056 | 0;if (!(b[a + 1560 >> 2] & 1)) {
          t = 3;x = u;return t | 0;
        }qa(t, 112);qa(k, 160);gb(n, t, k) | 0;cb(r, n);s = u + 440 + 576 | 0;qa(t, 64);Ma(s, t, a);Tc(r, s);b[t >> 2] = d;b[t + 4 >> 2] = d;b[t + 8 >> 2] = c;b[p >> 2] = 0;b[p + 4 >> 2] = 32;b[p + 8 >> 2] = o;Vc(32, -1, t, p);d = r + 144 | 0;i = r + 184 | 0;qa(l, 64);qa(t, 64);Ma(k, t, a);cb(m, n);Tc(m, k);b[j >> 2] = b[o >> 2];b[j + 4 >> 2] = b[o + 4 >> 2];b[j + 8 >> 2] = b[o + 8 >> 2];b[j + 12 >> 2] = b[o + 12 >> 2];b[j + 16 >> 2] = b[o + 16 >> 2];b[j + 20 >> 2] = b[o + 20 >> 2];b[j + 24 >> 2] = b[o + 24 >> 2];b[j + 28 >> 2] = b[o + 28 >> 2];b[t >> 2] = 0;b[t + 4 >> 2] = 195;b[t + 8 >> 2] = j + 32;ob(t, r, 0);b[t >> 2] = 0;b[t + 4 >> 2] = 130;b[t + 8 >> 2] = j + 97;ob(t, n, 0);b[t >> 2] = 0;b[t + 4 >> 2] = 65;b[t + 8 >> 2] = j + 162;ob(t, m, 0);b[t >> 2] = 227;b[t + 4 >> 2] = 227;b[t + 8 >> 2] = j;b[p >> 2] = 0;b[p + 4 >> 2] = 32;b[p + 8 >> 2] = q;Vc(32, -1, t, p);ma(d, q);qa(t, 64);Ha(d, t);Na(i, d, s, l);va(i, i, k);Ha(i, l);c = b[h >> 2] | 0;if ((((c | 0) >= 65 ? (b[t >> 2] = 0, b[t + 4 >> 2] = c, b[t + 8 >> 2] = g, ob(t, r, 0), (c | 0) >= 97) : 0) ? (ja(g + 65 | 0, d), (c | 0) >= 129) : 0) ? (ja(g + 97 | 0, i), b[h >> 2] = 129, (b[f >> 2] | 0) >= 32) : 0) {
          ja(e, s);b[f >> 2] = 32;c = 1;
        } else c = 6;t = c;x = u;return t | 0;
      }function L(a, c, d, e, f, g, h, i) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;i = i | 0;var j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0;w = x;x = x + 2528 | 0;v = w + 48 | 0;p = w;j = w + 2240 | 0;k = w + 2096 | 0;l = w + 1360 | 0;r = w + 2512 | 0;u = w + 744 | 0;m = w + 2384 | 0;n = w + 88 | 0;b[r >> 2] = 0;b[r + 4 >> 2] = c;b[r + 8 >> 2] = a;if (!(J(r, l) | 0)) {
          v = 5;x = w;return v | 0;
        }if ((e | 0) < 32) a = 7;else {
          r = u + 576 | 0;ma(r, d);Wc(m, e, d);do if ((((((g | 0) >= 65 ? (b[v >> 2] = 0, b[v + 4 >> 2] = g, b[v + 8 >> 2] = f, !((g | 0) < 130 | (pb(n, v) | 0) == 0)) : 0) ? (q = n + 144 | 0, b[v >> 2] = 0, b[v + 4 >> 2] = g + -65, b[v + 8 >> 2] = f + 65, !((g | 0) < 195 | (pb(q, v) | 0) == 0)) : 0) ? (s = n + 288 | 0, b[v >> 2] = 0, b[v + 4 >> 2] = g + -130, b[v + 8 >> 2] = f + 130, !((g | 0) < 260 | (pb(s, v) | 0) == 0)) : 0) ? (t = n + 432 | 0, b[v >> 2] = 0, b[v + 4 >> 2] = g + -195, b[v + 8 >> 2] = f + 195, !((g | 0) < 292 | (pb(t, v) | 0) == 0)) : 0) ? (o = n + 576 | 0, ma(o, f + 260 | 0), (g | 0) >= 324) : 0) {
            g = n + 616 | 0;ma(g, f + 292 | 0);qa(v, 112);qa(p, 160);gb(j, v, p) | 0;cb(k, j);Tc(k, r);if (ba(j, k, q, t, 0, o, g) | 0 ? ca(n, q, s, t, l, l + 288 | 0, m) | 0 : 0) {
              cb(u, n);k = u + 144 | 0;cb(k, q);j = u + 288 | 0;cb(j, s);c = u + 432 | 0;cb(c, t);a = b[i >> 2] | 0;if ((a | 0) < 65) {
                a = 6;break;
              }b[v >> 2] = 0;b[v + 4 >> 2] = a;b[v + 8 >> 2] = h;ob(v, u, 0);if ((a | 0) < 130) {
                a = 6;break;
              }b[v >> 2] = 0;b[v + 4 >> 2] = a + -65;b[v + 8 >> 2] = h + 65;ob(v, k, 0);if ((a | 0) < 195) {
                a = 6;break;
              }b[v >> 2] = 0;b[v + 4 >> 2] = a + -130;b[v + 8 >> 2] = h + 130;ob(v, j, 0);if ((a | 0) < 260) {
                a = 6;break;
              }b[v >> 2] = 0;b[v + 4 >> 2] = a + -195;b[v + 8 >> 2] = h + 195;ob(v, c, 0);if ((a | 0) < 292) {
                a = 6;break;
              }ja(h + 260 | 0, r);b[i >> 2] = 292;a = 1;break;
            }a = 8;
          } else a = 8; while (0);
        }v = a;x = w;return v | 0;
      }function M(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0;g = x;x = x + 16 | 0;e = g;f = a + 1560 | 0;b[f >> 2] = b[f >> 2] & -9;if ((d | 0) < 65) {
          f = 9;x = g;return f | 0;
        }b[e >> 2] = 0;b[e + 4 >> 2] = d;b[e + 8 >> 2] = c;if ((d | 0) < 130 | (pb(a + 944 | 0, e) | 0) == 0) {
          f = 9;x = g;return f | 0;
        }b[e >> 2] = 0;b[e + 4 >> 2] = d + -65;b[e + 8 >> 2] = c + 65;if ((d | 0) < 195 | (pb(a + 1088 | 0, e) | 0) == 0) {
          f = 9;x = g;return f | 0;
        }b[e >> 2] = 0;b[e + 4 >> 2] = d + -130;b[e + 8 >> 2] = c + 130;if ((d | 0) < 260 | (pb(a + 1232 | 0, e) | 0) == 0) {
          f = 9;x = g;return f | 0;
        }b[e >> 2] = 0;b[e + 4 >> 2] = d + -195;b[e + 8 >> 2] = c + 195;if ((d | 0) < 292 | (pb(a + 1376 | 0, e) | 0) == 0) {
          f = 9;x = g;return f | 0;
        }ma(a + 1520 | 0, c + 260 | 0);b[f >> 2] = b[f >> 2] | 8;f = 1;x = g;return f | 0;
      }function N(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;m = x;x = x + 16 | 0;k = m;if (!(b[a + 1560 >> 2] & 2)) {
          l = 10;x = m;return l | 0;
        }b[k >> 2] = 0;l = k + 4 | 0;b[l >> 2] = b[d >> 2];e = k + 8 | 0;b[e >> 2] = c;if (((P(a + 128 | 0, k) | 0) != 0 ? (f = b[k >> 2] | 0, g = f + 32 | 0, b[k >> 2] = g, h = b[l >> 2] | 0, (g | 0) <= (h | 0)) : 0) ? (i = b[e >> 2] | 0, ja(i + f | 0, a + 864 | 0), j = f + 64 | 0, b[k >> 2] = j, (j | 0) <= (h | 0)) : 0) {
          ja(i + g | 0, a + 904 | 0);b[d >> 2] = j;a = 1;
        } else a = 6;l = a;x = m;return l | 0;
      }function O(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0;f = x;x = x + 16 | 0;e = f;if (!(b[a + 1560 >> 2] & 4)) {
          e = 11;x = f;return e | 0;
        }b[e >> 2] = 0;b[e + 4 >> 2] = b[d >> 2];b[e + 8 >> 2] = c;if (!(P(a + 128 | 0, e) | 0)) a = 6;else {
          b[d >> 2] = b[e >> 2];a = 1;
        }e = a;x = f;return e | 0;
      }function P(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;i = x;x = x + 16 | 0;f = i;e = b[c >> 2] | 0;g = e + 128 | 0;b[c >> 2] = g;h = c + 4 | 0;d = b[h >> 2] | 0;if ((g | 0) > (d | 0)) {
          h = 0;x = i;return h | 0;
        }b[f >> 2] = 0;b[f + 4 >> 2] = d - e;g = c + 8 | 0;b[f + 8 >> 2] = (b[g >> 2] | 0) + e;Ua(f, a);d = b[c >> 2] | 0;j = d + 128 | 0;b[c >> 2] = j;e = b[h >> 2] | 0;if ((j | 0) > (e | 0)) {
          j = 0;x = i;return j | 0;
        }b[f >> 2] = 0;b[f + 4 >> 2] = e - d;b[f + 8 >> 2] = (b[g >> 2] | 0) + d;Ua(f, a + 288 | 0);d = b[c >> 2] | 0;j = d + 32 | 0;b[c >> 2] = j;if ((j | 0) > (b[h >> 2] | 0)) {
          j = 0;x = i;return j | 0;
        }ja((b[g >> 2] | 0) + d | 0, a + 576 | 0);d = b[c >> 2] | 0;j = d + 32 | 0;b[c >> 2] = j;if ((j | 0) > (b[h >> 2] | 0)) {
          j = 0;x = i;return j | 0;
        }ja((b[g >> 2] | 0) + d | 0, a + 616 | 0);d = b[c >> 2] | 0;j = d + 32 | 0;b[c >> 2] = j;if ((j | 0) > (b[h >> 2] | 0)) {
          j = 0;x = i;return j | 0;
        }ja((b[g >> 2] | 0) + d | 0, a + 656 | 0);d = b[c >> 2] | 0;j = d + 32 | 0;b[c >> 2] = j;if ((j | 0) > (b[h >> 2] | 0)) {
          j = 0;x = i;return j | 0;
        }ja((b[g >> 2] | 0) + d | 0, a + 696 | 0);j = 1;x = i;return j | 0;
      }function Q(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0;g = x;x = x + 16 | 0;e = g;if (!(b[a + 1560 >> 2] & 8)) {
          f = 12;x = g;return f | 0;
        }f = b[d >> 2] | 0;if ((f | 0) < 65) {
          f = 6;x = g;return f | 0;
        }b[e >> 2] = 0;b[e + 4 >> 2] = f;b[e + 8 >> 2] = c;ob(e, a + 944 | 0, 0);if ((f | 0) < 130) {
          f = 6;x = g;return f | 0;
        }b[e >> 2] = 0;b[e + 4 >> 2] = f + -65;b[e + 8 >> 2] = c + 65;ob(e, a + 1088 | 0, 0);if ((f | 0) < 195) {
          f = 6;x = g;return f | 0;
        }b[e >> 2] = 0;b[e + 4 >> 2] = f + -130;b[e + 8 >> 2] = c + 130;ob(e, a + 1232 | 0, 0);if ((f | 0) < 260) {
          f = 6;x = g;return f | 0;
        }b[e >> 2] = 0;b[e + 4 >> 2] = f + -195;b[e + 8 >> 2] = c + 195;ob(e, a + 1376 | 0, 0);if ((f | 0) < 292) {
          f = 6;x = g;return f | 0;
        }ja(c + 260 | 0, a + 1520 | 0);b[d >> 2] = 292;f = 1;x = g;return f | 0;
      }function R(a, c, d, e, f, g, h) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;var i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            y = 0,
            z = 0,
            A = 0;A = x;x = x + 1904 | 0;z = A + 544 | 0;t = A + 496 | 0;r = A + 464 | 0;j = A + 224 | 0;k = A + 176 | 0;l = A + 1752 | 0;m = A + 1608 | 0;n = A + 128 | 0;o = A + 80 | 0;s = A + 32 | 0;v = A + 1464 | 0;p = A;w = A + 1240 | 0;y = A + 584 | 0;i = b[a + 1560 >> 2] | 0;if (!(i & 1)) {
          z = 3;x = A;return z | 0;
        }if (!(i & 2)) {
          z = 10;x = A;return z | 0;
        }u = b[h >> 2] | 0;do if (((d | 0) >= 65 ? (b[z >> 2] = 0, b[z + 4 >> 2] = d, b[z + 8 >> 2] = c, !((d | 0) < 97 | (pb(w, z) | 0) == 0)) : 0) ? (q = w + 144 | 0, ma(q, c + 65 | 0), (d | 0) >= 129) : 0) {
          d = w + 184 | 0;ma(d, c + 97 | 0);qa(s, 64);qa(z, 112);qa(o, 160);gb(v, z, o) | 0;b[z >> 2] = f;b[z + 4 >> 2] = f;b[z + 8 >> 2] = e;b[t >> 2] = 0;b[t + 4 >> 2] = 32;b[t + 8 >> 2] = p;Vc(32, -1, z, t);qa(k, 64);Oa(o, q, k);cb(l, v);cb(m, w);Tc(l, d);Tc(m, o);lb(l, m);b[j >> 2] = b[p >> 2];b[j + 4 >> 2] = b[p + 4 >> 2];b[j + 8 >> 2] = b[p + 8 >> 2];b[j + 12 >> 2] = b[p + 12 >> 2];b[j + 16 >> 2] = b[p + 16 >> 2];b[j + 20 >> 2] = b[p + 20 >> 2];b[j + 24 >> 2] = b[p + 24 >> 2];b[j + 28 >> 2] = b[p + 28 >> 2];b[z >> 2] = 0;b[z + 4 >> 2] = 195;b[z + 8 >> 2] = j + 32;ob(z, w, 0);b[z >> 2] = 0;b[z + 4 >> 2] = 130;b[z + 8 >> 2] = j + 97;ob(z, v, 0);b[z >> 2] = 0;b[z + 4 >> 2] = 65;b[z + 8 >> 2] = j + 162;ob(z, l, 0);b[z >> 2] = 227;b[z + 4 >> 2] = 227;b[z + 8 >> 2] = j;b[t >> 2] = 0;b[t + 4 >> 2] = 32;b[t + 8 >> 2] = r;Vc(32, -1, z, t);ma(n, r);qa(z, 64);Ha(n, z);if (Ga(q, n) | 0) {
            i = 13;break;
          }j = y + 144 | 0;k = y + 288 | 0;l = y + 432 | 0;qa(z, 64);Ma(t, z, a);cb(y, v);Tc(y, t);cb(j, y);i = a + 904 | 0;Tc(j, i);cb(l, w);Na(z, t, i, s);Tc(l, z);cb(k, y);lb(k, l);Tc(k, a + 864 | 0);i = y + 576 | 0;c = y + 616 | 0;ea(a, v, w, j, l, z, 0, i, c);if ((((((u | 0) >= 65 ? (b[z >> 2] = 0, b[z + 4 >> 2] = u, b[z + 8 >> 2] = g, ob(z, y, 0), (u | 0) >= 130) : 0) ? (b[z >> 2] = 0, b[z + 4 >> 2] = u + -65, b[z + 8 >> 2] = g + 65, ob(z, j, 0), (u | 0) >= 195) : 0) ? (b[z >> 2] = 0, b[z + 4 >> 2] = u + -130, b[z + 8 >> 2] = g + 130, ob(z, k, 0), (u | 0) >= 260) : 0) ? (b[z >> 2] = 0, b[z + 4 >> 2] = u + -195, b[z + 8 >> 2] = g + 195, ob(z, l, 0), (u | 0) >= 292) : 0) ? (ja(g + 260 | 0, i), (u | 0) >= 324) : 0) {
            ja(g + 292 | 0, c);b[h >> 2] = 324;i = 1;
          } else i = 6;
        } else i = 13; while (0);z = i;x = A;return z | 0;
      }function S(a, c, d, e, f, g, h) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;var i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0;u = x;x = x + 1152 | 0;t = u + 144 | 0;k = u + 1128 | 0;l = u + 80 | 0;n = u + 48 | 0;j = u;o = u + 984 | 0;s = u + 184 | 0;i = b[a + 1560 >> 2] | 0;if (!(i & 1)) {
          t = 3;x = u;return t | 0;
        }if (!(i & 8)) {
          t = 12;x = u;return t | 0;
        }cb(s, a + 944 | 0);p = s + 144 | 0;cb(p, a + 1088 | 0);q = s + 288 | 0;cb(q, a + 1232 | 0);r = s + 432 | 0;cb(r, a + 1376 | 0);qa(t, 64);Ma(j, t, a);Tc(s, j);Tc(p, j);Tc(q, j);Tc(r, j);b[t >> 2] = f;b[t + 4 >> 2] = f;b[t + 8 >> 2] = e;b[k >> 2] = 0;b[k + 4 >> 2] = 32;b[k + 8 >> 2] = n;Vc(32, -1, t, k);b[t >> 2] = 32;b[t + 4 >> 2] = 32;b[t + 8 >> 2] = n;nb(o, t);m = s + 576 | 0;cb(m, o);i = a + 1520 | 0;Tc(m, i);b[t >> 2] = d;b[t + 4 >> 2] = d;b[t + 8 >> 2] = c;b[k >> 2] = 0;b[k + 4 >> 2] = 32;b[k + 8 >> 2] = l;Vc(32, -1, t, k);b[t >> 2] = f;b[t + 4 >> 2] = f;b[t + 8 >> 2] = e;b[k >> 2] = 0;b[k + 4 >> 2] = 32;b[k + 8 >> 2] = l + 32;Vc(32, -1, t, k);b[t >> 2] = 64;b[t + 4 >> 2] = 64;b[t + 8 >> 2] = l;b[k >> 2] = 0;b[k + 4 >> 2] = 32;b[k + 8 >> 2] = n;Vc(32, -1, t, k);j = s + 720 | 0;c = s + 760 | 0;ea(a, p, o, r, m, i, n, j, c);i = b[h >> 2] | 0;if (((((((i | 0) >= 65 ? (b[t >> 2] = 0, b[t + 4 >> 2] = i, b[t + 8 >> 2] = g, ob(t, s, 0), (i | 0) >= 130) : 0) ? (b[t >> 2] = 0, b[t + 4 >> 2] = i + -65, b[t + 8 >> 2] = g + 65, ob(t, p, 0), (i | 0) >= 195) : 0) ? (b[t >> 2] = 0, b[t + 4 >> 2] = i + -130, b[t + 8 >> 2] = g + 130, ob(t, q, 0), (i | 0) >= 260) : 0) ? (b[t >> 2] = 0, b[t + 4 >> 2] = i + -195, b[t + 8 >> 2] = g + 195, ob(t, r, 0), (i | 0) >= 325) : 0) ? (b[t >> 2] = 0, b[t + 4 >> 2] = i + -260, b[t + 8 >> 2] = g + 260, ob(t, m, 0), (i | 0) >= 357) : 0) ? (ja(g + 325 | 0, j), (i | 0) >= 389) : 0) {
          ja(g + 357 | 0, c);b[h >> 2] = 389;i = 1;
        } else i = 6;t = i;x = u;return t | 0;
      }function T(a, c, d, e, f, g, h) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;var i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;p = x;x = x + 1088 | 0;j = p + 1064 | 0;k = p + 1052 | 0;l = p + 32 | 0;m = p;n = p + 896 | 0;o = p + 96 | 0;i = p + 1040 | 0;if (!(b[a + 1560 >> 2] & 4)) {
          o = 11;x = p;return o | 0;
        }b[i >> 2] = 0;b[i + 4 >> 2] = h;b[i + 8 >> 2] = g;if (!(U(i, o) | 0)) i = 14;else {
          h = a + 128 | 0;b[j >> 2] = f;b[j + 4 >> 2] = f;b[j + 8 >> 2] = e;b[k >> 2] = 0;b[k + 4 >> 2] = 32;b[k + 8 >> 2] = m;Vc(32, -1, j, k);b[j >> 2] = 32;b[j + 4 >> 2] = 32;b[j + 8 >> 2] = m;nb(n, j);b[j >> 2] = d;b[j + 4 >> 2] = d;b[j + 8 >> 2] = c;b[k >> 2] = 0;b[k + 4 >> 2] = 32;b[k + 8 >> 2] = l;Vc(32, -1, j, k);b[j >> 2] = f;b[j + 4 >> 2] = f;b[j + 8 >> 2] = e;b[k >> 2] = 0;b[k + 4 >> 2] = 32;b[k + 8 >> 2] = l + 32;Vc(32, -1, j, k);b[j >> 2] = 64;b[j + 4 >> 2] = 64;b[j + 8 >> 2] = l;b[k >> 2] = 0;b[k + 4 >> 2] = 32;b[k + 8 >> 2] = m;Vc(32, -1, j, k);i = o + 144 | 0;g = o + 432 | 0;if (((ba(i, n, g, o + 576 | 0, m, o + 720 | 0, o + 760 | 0) | 0) != 0 ? (bb(o) | 0) == 0 : 0) ? (bb(i) | 0) == 0 : 0) i = (ca(o, i, o + 288 | 0, g, h, a + 416 | 0, a) | 0) != 0 & 1;else i = 0;
        }o = i;x = p;return o | 0;
      }function U(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;i = x;x = x + 16 | 0;f = i;e = b[a >> 2] | 0;g = e + 65 | 0;b[a >> 2] = g;h = a + 4 | 0;d = b[h >> 2] | 0;if ((g | 0) > (d | 0)) {
          h = 0;x = i;return h | 0;
        }b[f >> 2] = 0;b[f + 4 >> 2] = d - e;g = a + 8 | 0;b[f + 8 >> 2] = (b[g >> 2] | 0) + e;if (!(pb(c, f) | 0)) {
          h = 0;x = i;return h | 0;
        }d = b[a >> 2] | 0;j = d + 65 | 0;b[a >> 2] = j;e = b[h >> 2] | 0;if ((j | 0) > (e | 0)) {
          j = 0;x = i;return j | 0;
        }b[f >> 2] = 0;b[f + 4 >> 2] = e - d;b[f + 8 >> 2] = (b[g >> 2] | 0) + d;if (!(pb(c + 144 | 0, f) | 0)) {
          j = 0;x = i;return j | 0;
        }d = b[a >> 2] | 0;j = d + 65 | 0;b[a >> 2] = j;e = b[h >> 2] | 0;if ((j | 0) > (e | 0)) {
          j = 0;x = i;return j | 0;
        }b[f >> 2] = 0;b[f + 4 >> 2] = e - d;b[f + 8 >> 2] = (b[g >> 2] | 0) + d;if (!(pb(c + 288 | 0, f) | 0)) {
          j = 0;x = i;return j | 0;
        }d = b[a >> 2] | 0;j = d + 65 | 0;b[a >> 2] = j;e = b[h >> 2] | 0;if ((j | 0) > (e | 0)) {
          j = 0;x = i;return j | 0;
        }b[f >> 2] = 0;b[f + 4 >> 2] = e - d;b[f + 8 >> 2] = (b[g >> 2] | 0) + d;if (!(pb(c + 432 | 0, f) | 0)) {
          j = 0;x = i;return j | 0;
        }d = b[a >> 2] | 0;j = d + 65 | 0;b[a >> 2] = j;e = b[h >> 2] | 0;if ((j | 0) > (e | 0)) {
          j = 0;x = i;return j | 0;
        }b[f >> 2] = 0;b[f + 4 >> 2] = e - d;b[f + 8 >> 2] = (b[g >> 2] | 0) + d;if (!(pb(c + 576 | 0, f) | 0)) {
          j = 0;x = i;return j | 0;
        }d = b[a >> 2] | 0;j = d + 32 | 0;b[a >> 2] = j;if ((j | 0) > (b[h >> 2] | 0)) {
          j = 0;x = i;return j | 0;
        }ma(c + 720 | 0, (b[g >> 2] | 0) + d | 0);d = b[a >> 2] | 0;j = d + 32 | 0;b[a >> 2] = j;if ((j | 0) > (b[h >> 2] | 0)) {
          j = 0;x = i;return j | 0;
        }ma(c + 760 | 0, (b[g >> 2] | 0) + d | 0);j = 1;x = i;return j | 0;
      }function V(a, c, d, e) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0,
            i = 0;h = x;x = x + 832 | 0;f = h + 812 | 0;g = h;i = h + 800 | 0;b[i >> 2] = 0;b[i + 4 >> 2] = c;b[i + 8 >> 2] = a;a = b[e >> 2] | 0;if (!(U(i, g) | 0)) {
          i = 14;x = h;return i | 0;
        }if ((a | 0) < 65) {
          i = 6;x = h;return i | 0;
        }b[f >> 2] = 0;b[f + 4 >> 2] = a;b[f + 8 >> 2] = d;ob(f, g + 576 | 0, 0);b[e >> 2] = 65;i = 1;x = h;return i | 0;
      }function W() {
        return 1568;
      }function X() {
        return 1600;
      }function Y() {
        return 1604;
      }function Z() {
        return 1;
      }function _() {
        return 0;
      }function $(a) {
        a = a | 0;do switch (a | 0) {case 0:
            {
              a = 1610;break;
            }case 1:
            {
              a = 1613;break;
            }case 2:
            {
              a = 1616;break;
            }case 3:
            {
              a = 1631;break;
            }case 4:
            {
              a = 1642;break;
            }case 5:
            {
              a = 1668;break;
            }case 6:
            {
              a = 1693;break;
            }case 7:
            {
              a = 1717;break;
            }case 8:
            {
              a = 1742;break;
            }case 9:
            {
              a = 1764;break;
            }case 10:
            {
              a = 1789;break;
            }case 11:
            {
              a = 1815;break;
            }case 12:
            {
              a = 1840;break;
            }case 13:
            {
              a = 1865;break;
            }case 14:
            {
              a = 1886;break;
            }default:
            a = 1904;} while (0);return a | 0;
      }function aa(a, c, d, e) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;f = x;x = x + 1200 | 0;h = f + 560 | 0;j = f + 1176 | 0;i = f + 528 | 0;k = f + 144 | 0;n = f + 96 | 0;o = f + 48 | 0;l = f + 888 | 0;m = f + 600 | 0;g = f;qa(o, 64);Oa(n, d, o);Qa(l, a);Qa(m, c);Uc(l, e);Uc(m, n);Za(l, m) | 0;b[h >> 2] = 0;b[h + 4 >> 2] = 384;b[h + 8 >> 2] = k;Ua(h, c);b[h >> 2] = 0;b[h + 4 >> 2] = 256;b[h + 8 >> 2] = k + 128;Ua(h, a);b[h >> 2] = 0;b[h + 4 >> 2] = 128;b[h + 8 >> 2] = k + 256;Ua(h, l);b[h >> 2] = 384;b[h + 4 >> 2] = 384;b[h + 8 >> 2] = k;b[j >> 2] = 0;b[j + 4 >> 2] = 32;b[j + 8 >> 2] = i;Vc(32, -1, h, j);ma(g, i);qa(h, 64);Ha(g, h);e = (Ga(d, g) | 0) == 0 & 1;x = f;return e | 0;
      }function ba(a, b, c, d, e, f, g) {
        a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;h = x;x = x + 720 | 0;n = h + 96 | 0;o = h + 48 | 0;k = h + 568 | 0;m = h + 424 | 0;j = h + 280 | 0;l = h + 136 | 0;i = h;qa(o, 64);Oa(n, f, o);cb(k, a);cb(m, c);cb(j, b);cb(l, d);Tc(k, g);Tc(m, n);Tc(j, g);Tc(l, n);lb(k, m);lb(j, l);da(e, c, d, a, b, k, j, i);g = (Ga(f, i) | 0) == 0 & 1;x = h;return g | 0;
      }function ca(a, b, c, d, e, f, g) {
        a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0;u = x;x = x + 40768 | 0;r = u + 240 | 0;s = u + 40672 | 0;t = u + 40528 | 0;h = u + 40384 | 0;i = u + 40240 | 0;j = u + 39952 | 0;k = u + 192 | 0;l = u + 144 | 0;m = u + 96 | 0;n = u + 48 | 0;o = u;p = u + 39368 | 0;q = u + 38784 | 0;if (bb(a) | 0) {
          t = 0;x = u;return t | 0;
        }qa(o, 64);xc(r, 304);xc(r + 48 | 0, 352);xc(s, 400);xc(s + 48 | 0, 448);Wa(j, r, s) | 0;qa(r, 64);Ma(k, r, g);qa(r, 64);Ma(l, r, g);Oa(m, k, o);Oa(n, l, o);cb(t, a);Tc(t, k);cb(h, b);Tc(h, m);cb(i, c);Tc(i, n);lb(h, i);cb(i, a);lb(i, d);Tc(i, l);Oc(r);Qc(r, f, t);Qc(r, j, h);Qc(r, e, i);Pc(p, r);Sc(p);rb(q);t = (sb(p, q) | 0) != 0 & 1;x = u;return t | 0;
      }function da(c, d, e, f, g, h, i, j) {
        c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;i = i | 0;j = j | 0;var k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0;q = x;x = x + 528 | 0;o = q + 464 | 0;p = q + 504 | 0;m = q + 432 | 0;n = q;if (!c) c = 0;else {
          l = n;k = l + 32 | 0;do {
            a[l >> 0] = a[c >> 0] | 0;l = l + 1 | 0;c = c + 1 | 0;
          } while ((l | 0) < (k | 0));c = 32;
        }l = c | 65;b[o >> 2] = 0;b[o + 4 >> 2] = 422 - c;b[o + 8 >> 2] = n + c;ob(o, d, 0);b[o >> 2] = 0;b[o + 4 >> 2] = 422 - l;b[o + 8 >> 2] = n + l;ob(o, e, 0);e = c | 195;b[o >> 2] = 0;b[o + 4 >> 2] = 357 - l;b[o + 8 >> 2] = n + (l + 65);ob(o, f, 0);b[o >> 2] = 0;b[o + 4 >> 2] = 422 - e;b[o + 8 >> 2] = n + e;ob(o, g, 0);b[o >> 2] = 0;b[o + 4 >> 2] = 357 - e;b[o + 8 >> 2] = n + (e + 65);ob(o, h, 0);h = e + 195 | 0;b[o >> 2] = 0;b[o + 4 >> 2] = 292 - e;b[o + 8 >> 2] = n + (e + 130);ob(o, i, 0);b[o >> 2] = h;b[o + 4 >> 2] = h;b[o + 8 >> 2] = n;b[p >> 2] = 0;b[p + 4 >> 2] = 32;b[p + 8 >> 2] = m;Vc(32, -1, o, p);ma(j, m);qa(o, 64);Ha(j, o);x = q;return;
      }function ea(a, b, c, d, e, f, g, h, i) {
        a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;i = i | 0;var j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0;j = x;x = x + 384 | 0;n = j + 96 | 0;l = j + 48 | 0;k = j;m = j + 240 | 0;qa(k, 64);qa(n, 64);Ma(l, n, a);cb(n, b);cb(m, c);Tc(n, l);Tc(m, l);da(g, d, e, b, c, n, m, h);Na(i, h, f, k);va(i, i, l);Ha(i, k);x = j;return;
      }function fa(a) {
        a = a | 0;var c = 0;c = a;if (!((b[c >> 2] | 0) == 0 & (b[c + 4 >> 2] | 0) == 0)) return 0;c = a + 8 | 0;if (!((b[c >> 2] | 0) == 0 & (b[c + 4 >> 2] | 0) == 0)) return 0;c = a + 16 | 0;if (!((b[c >> 2] | 0) == 0 & (b[c + 4 >> 2] | 0) == 0)) return 0;c = a + 24 | 0;if ((b[c >> 2] | 0) == 0 & (b[c + 4 >> 2] | 0) == 0) {
          c = a + 32 | 0;return (b[c >> 2] | 0) == 0 & (b[c + 4 >> 2] | 0) == 0 & 1 | 0;
        } else return 0;return 0;
      }function ga(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0;p = x;x = x + 48 | 0;c = p;e = a;k = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;g = a + 8 | 0;f = b[g >> 2] | 0;g = b[g + 4 >> 2] | 0;m = c + 8 | 0;i = a + 16 | 0;h = b[i >> 2] | 0;i = b[i + 4 >> 2] | 0;n = c + 16 | 0;l = a + 24 | 0;j = b[l >> 2] | 0;l = b[l + 4 >> 2] | 0;o = c + 24 | 0;d = a + 32 | 0;q = b[d >> 2] | 0;d = b[d + 4 >> 2] | 0;a = e & 16777215;s = c;b[s >> 2] = k;b[s + 4 >> 2] = a;e = vd(k | 0, e | 0, 56) | 0;e = nd(f | 0, g | 0, e | 0, r() | 0) | 0;g = r() | 0;f = g & 16777215;s = m;b[s >> 2] = e;b[s + 4 >> 2] = f;g = vd(e | 0, g | 0, 56) | 0;g = nd(h | 0, i | 0, g | 0, r() | 0) | 0;i = r() | 0;h = i & 16777215;s = n;b[s >> 2] = g;b[s + 4 >> 2] = h;i = vd(g | 0, i | 0, 56) | 0;i = nd(j | 0, l | 0, i | 0, r() | 0) | 0;l = r() | 0;j = l & 16777215;s = o;b[s >> 2] = i;b[s + 4 >> 2] = j;l = vd(i | 0, l | 0, 56) | 0;l = nd(q | 0, d | 0, l | 0, r() | 0) | 0;d = r() | 0;q = c + 32 | 0;b[q >> 2] = l;b[q + 4 >> 2] = d;if ((l | 0) == 0 & (d | 0) == 0) {
          if ((i | 0) == 0 & (j | 0) == 0) {
            if ((g | 0) == 0 & (h | 0) == 0) {
              if ((e | 0) == 0 & (f | 0) == 0) {
                if ((k | 0) == 0 & (a | 0) == 0) {
                  s = 0;x = p;return s | 0;
                } else a = 0;
              } else {
                a = 56;c = m;
              }
            } else {
              a = 112;c = n;
            }
          } else {
            a = 168;c = o;
          }d = c;c = b[d >> 2] | 0;d = b[d + 4 >> 2] | 0;if ((c | 0) == 0 & (d | 0) == 0) {
            s = a;x = p;return s | 0;
          }
        } else {
          a = 224;c = l;
        }do {
          q = c;c = rd(c | 0, d | 0, 2, 0) | 0;s = d;d = r() | 0;a = a + 1 | 0;s = nd(q | 0, s | 0, 1, 0) | 0;q = r() | 0;
        } while (!(q >>> 0 < 0 | (q | 0) == 0 & s >>> 0 < 3));x = p;return a | 0;
      }function ha(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;e = c;d = b[e + 4 >> 2] | 0;f = a;b[f >> 2] = b[e >> 2];b[f + 4 >> 2] = d;f = c + 8 | 0;d = b[f + 4 >> 2] | 0;e = a + 8 | 0;b[e >> 2] = b[f >> 2];b[e + 4 >> 2] = d;e = c + 16 | 0;d = b[e + 4 >> 2] | 0;f = a + 16 | 0;b[f >> 2] = b[e >> 2];b[f + 4 >> 2] = d;f = c + 24 | 0;d = b[f + 4 >> 2] | 0;e = a + 24 | 0;b[e >> 2] = b[f >> 2];b[e + 4 >> 2] = d;e = c + 32 | 0;d = b[e + 4 >> 2] | 0;c = a + 32 | 0;b[c >> 2] = b[e >> 2];b[c + 4 >> 2] = d;return;
      }function ia(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;e = 0 - d | 0;h = ((e | 0) < 0) << 31 >> 31;g = a;f = b[g >> 2] | 0;g = b[g + 4 >> 2] | 0;i = c;g = (b[i + 4 >> 2] ^ g) & h ^ g;d = a;b[d >> 2] = (b[i >> 2] ^ f) & e ^ f;b[d + 4 >> 2] = g;d = a + 8 | 0;g = d;f = b[g >> 2] | 0;g = b[g + 4 >> 2] | 0;i = c + 8 | 0;g = (b[i + 4 >> 2] ^ g) & h ^ g;b[d >> 2] = (b[i >> 2] ^ f) & e ^ f;b[d + 4 >> 2] = g;d = a + 16 | 0;g = d;f = b[g >> 2] | 0;g = b[g + 4 >> 2] | 0;i = c + 16 | 0;g = (b[i + 4 >> 2] ^ g) & h ^ g;b[d >> 2] = (b[i >> 2] ^ f) & e ^ f;b[d + 4 >> 2] = g;d = a + 24 | 0;g = d;f = b[g >> 2] | 0;g = b[g + 4 >> 2] | 0;i = c + 24 | 0;g = (b[i + 4 >> 2] ^ g) & h ^ g;b[d >> 2] = (b[i >> 2] ^ f) & e ^ f;b[d + 4 >> 2] = g;d = a + 32 | 0;g = d;a = b[g >> 2] | 0;g = b[g + 4 >> 2] | 0;f = c + 32 | 0;c = (b[f + 4 >> 2] ^ g) & h ^ g;b[d >> 2] = (b[f >> 2] ^ a) & e ^ a;b[d + 4 >> 2] = c;return;
      }function ja(c, d) {
        c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;f = d;e = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;h = d + 8 | 0;n = b[h >> 2] | 0;h = b[h + 4 >> 2] | 0;i = d + 16 | 0;j = b[i >> 2] | 0;i = b[i + 4 >> 2] | 0;k = d + 24 | 0;l = b[k >> 2] | 0;k = b[k + 4 >> 2] | 0;m = d + 32 | 0;d = b[m >> 2] | 0;m = b[m + 4 >> 2] | 0;g = vd(e | 0, f | 0, 56) | 0;g = nd(n | 0, h | 0, g | 0, r() | 0) | 0;h = r() | 0;n = vd(g | 0, h | 0, 56) | 0;i = nd(n | 0, r() | 0, j | 0, i | 0) | 0;j = r() | 0;n = vd(i | 0, j | 0, 56) | 0;k = nd(n | 0, r() | 0, l | 0, k | 0) | 0;l = r() | 0;n = vd(k | 0, l | 0, 56) | 0;m = nd(n | 0, r() | 0, d | 0, m | 0) | 0;d = 31;f = f & 16777215;h = h & 16777215;j = j & 16777215;l = l & 16777215;n = r() | 0;while (1) {
          a[c + d >> 0] = e;e = vd(e | 0, f | 0, 8) | 0;o = r() | 0;xd(g | 0, h | 0, 48) | 0;f = (r() | 0) & 16711680 | o;g = vd(g | 0, h | 0, 8) | 0;o = r() | 0;xd(i | 0, j | 0, 48) | 0;h = (r() | 0) & 16711680 | o;i = vd(i | 0, j | 0, 8) | 0;o = r() | 0;xd(k | 0, l | 0, 48) | 0;j = (r() | 0) & 16711680 | o;k = vd(k | 0, l | 0, 8) | 0;o = r() | 0;xd(m | 0, n | 0, 48) | 0;l = (r() | 0) & 16711680 | o;m = vd(m | 0, n | 0, 8) | 0;n = r() | 0;if (!d) break;else d = d + -1 | 0;
        }return;
      }function ka(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0;e = a;c = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;d = a;b[d >> 2] = c;b[d + 4 >> 2] = e & 16777215;e = vd(c | 0, e | 0, 56) | 0;c = r() | 0;d = a + 8 | 0;f = d;c = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, e | 0, c | 0) | 0;e = r() | 0;b[d >> 2] = c;b[d + 4 >> 2] = e & 16777215;e = vd(c | 0, e | 0, 56) | 0;c = r() | 0;d = a + 16 | 0;f = d;c = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, e | 0, c | 0) | 0;e = r() | 0;b[d >> 2] = c;b[d + 4 >> 2] = e & 16777215;e = vd(c | 0, e | 0, 56) | 0;c = r() | 0;d = a + 24 | 0;f = d;c = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, e | 0, c | 0) | 0;e = r() | 0;b[d >> 2] = c;b[d + 4 >> 2] = e & 16777215;e = vd(c | 0, e | 0, 56) | 0;c = r() | 0;d = a + 32 | 0;a = d;c = nd(b[a >> 2] | 0, b[a + 4 >> 2] | 0, e | 0, c | 0) | 0;a = r() | 0;b[d >> 2] = c;b[d + 4 >> 2] = a;a = vd(c | 0, a | 0, 32) | 0;q(r() | 0);return a | 0;
      }function la(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;i = a;e = b[i >> 2] | 0;i = b[i + 4 >> 2] | 0;d = xd(1, 0, c | 0) | 0;d = nd(d | 0, r() | 0, -1, 0) | 0;h = r() | 0;m = 56 - c | 0;f = vd(e | 0, i | 0, c | 0) | 0;n = r() | 0;j = a + 8 | 0;k = j;l = b[k >> 2] | 0;k = b[k + 4 >> 2] | 0;o = xd(l | 0, k | 0, m | 0) | 0;n = (r() | 0) & 16777215 | n;g = a;b[g >> 2] = o | f;b[g + 4 >> 2] = n;k = vd(l | 0, k | 0, c | 0) | 0;l = r() | 0;g = a + 16 | 0;n = g;f = b[n >> 2] | 0;n = b[n + 4 >> 2] | 0;o = xd(f | 0, n | 0, m | 0) | 0;l = (r() | 0) & 16777215 | l;b[j >> 2] = o | k;b[j + 4 >> 2] = l;n = vd(f | 0, n | 0, c | 0) | 0;f = r() | 0;j = a + 24 | 0;l = j;k = b[l >> 2] | 0;l = b[l + 4 >> 2] | 0;o = xd(k | 0, l | 0, m | 0) | 0;f = (r() | 0) & 16777215 | f;b[g >> 2] = o | n;b[g + 4 >> 2] = f;l = vd(k | 0, l | 0, c | 0) | 0;k = r() | 0;g = a + 32 | 0;f = g;a = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;m = xd(a | 0, f | 0, m | 0) | 0;k = (r() | 0) & 16777215 | k;b[j >> 2] = m | l;b[j + 4 >> 2] = k;f = vd(a | 0, f | 0, c | 0) | 0;a = r() | 0;c = g;b[c >> 2] = f;b[c + 4 >> 2] = a;return e & d | 0;
      }function ma(a, d) {
        a = a | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0;e = a;f = e + 40 | 0;do {
          b[e >> 2] = 0;e = e + 4 | 0;
        } while ((e | 0) < (f | 0));h = a + 32 | 0;k = a + 24 | 0;n = a + 16 | 0;o = a + 8 | 0;e = 0;f = 0;g = 0;i = 0;j = 0;l = 0;m = 0;p = 0;q = 0;s = 0;t = 0;do {
          u = xd(s | 0, t | 0, 8) | 0;v = r() | 0;w = vd(f | 0, g | 0, 48) | 0;s = w | u;t = r() | 0 | v;v = h;b[v >> 2] = s;b[v + 4 >> 2] = t;v = xd(f | 0, g | 0, 8) | 0;u = (r() | 0) & 16777215;w = vd(i | 0, j | 0, 48) | 0;f = w | v & -256;g = r() | 0 | u;u = k;b[u >> 2] = f;b[u + 4 >> 2] = g;u = xd(i | 0, j | 0, 8) | 0;v = (r() | 0) & 16777215;w = vd(l | 0, m | 0, 48) | 0;i = w | u & -256;j = r() | 0 | v;v = n;b[v >> 2] = i;b[v + 4 >> 2] = j;v = xd(l | 0, m | 0, 8) | 0;u = (r() | 0) & 16777215;w = vd(p | 0, q | 0, 48) | 0;l = w | v & -256;m = r() | 0 | u;u = o;b[u >> 2] = l;b[u + 4 >> 2] = m;u = xd(p | 0, q | 0, 8) | 0;u = u & -256;q = (r() | 0) & 16777215;v = a;b[v >> 2] = u;b[v + 4 >> 2] = q;p = u | (c[d + e >> 0] | 0);u = a;b[u >> 2] = p;b[u + 4 >> 2] = q;e = e + 1 | 0;
        } while ((e | 0) != 32);return;
      }function na(a) {
        a = a | 0;var c = 0;c = a + 40 | 0;do {
          b[a >> 2] = 0;a = a + 4 | 0;
        } while ((a | 0) < (c | 0));return;
      }function oa(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;f = a + 32 | 0;l = f;l = xd(b[l >> 2] | 0, b[l + 4 >> 2] | 0, c | 0) | 0;d = r() | 0;g = a + 24 | 0;k = g;j = b[k >> 2] | 0;k = b[k + 4 >> 2] | 0;i = 56 - c | 0;e = vd(j | 0, k | 0, i | 0) | 0;d = r() | 0 | d;b[f >> 2] = e | l;b[f + 4 >> 2] = d;k = xd(j | 0, k | 0, c | 0) | 0;j = (r() | 0) & 16777215;f = a + 16 | 0;l = f;e = b[l >> 2] | 0;l = b[l + 4 >> 2] | 0;h = vd(e | 0, l | 0, i | 0) | 0;j = j | (r() | 0);b[g >> 2] = k | h;b[g + 4 >> 2] = j;l = xd(e | 0, l | 0, c | 0) | 0;e = (r() | 0) & 16777215;g = a + 8 | 0;j = g;h = b[j >> 2] | 0;j = b[j + 4 >> 2] | 0;k = vd(h | 0, j | 0, i | 0) | 0;e = e | (r() | 0);b[f >> 2] = l | k;b[f + 4 >> 2] = e;j = xd(h | 0, j | 0, c | 0) | 0;h = (r() | 0) & 16777215;f = a;e = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;i = vd(e | 0, f | 0, i | 0) | 0;h = h | (r() | 0);b[g >> 2] = j | i;b[g + 4 >> 2] = h;f = xd(e | 0, f | 0, c | 0) | 0;e = (r() | 0) & 16777215;c = a;b[c >> 2] = f;b[c + 4 >> 2] = e;return d | 0;
      }function pa(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0;c = a;d = b[c >> 2] | 0;c = b[c + 4 >> 2] | 0;e = a;b[e >> 2] = d;b[e + 4 >> 2] = c & 16777215;c = vd(d | 0, c | 0, 56) | 0;d = r() | 0;e = a + 8 | 0;f = e;d = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;b[e >> 2] = d;b[e + 4 >> 2] = c & 16777215;c = vd(d | 0, c | 0, 56) | 0;d = r() | 0;e = a + 16 | 0;f = e;d = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;b[e >> 2] = d;b[e + 4 >> 2] = c & 16777215;c = vd(d | 0, c | 0, 56) | 0;d = r() | 0;e = a + 24 | 0;f = e;d = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;b[e >> 2] = d;b[e + 4 >> 2] = c & 16777215;c = vd(d | 0, c | 0, 56) | 0;d = r() | 0;e = a + 32 | 0;f = e;d = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;b[e >> 2] = d;b[e + 4 >> 2] = c & 16777215;c = vd(d | 0, c | 0, 56) | 0;d = r() | 0;e = a + 40 | 0;f = e;d = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;b[e >> 2] = d;b[e + 4 >> 2] = c & 16777215;c = vd(d | 0, c | 0, 56) | 0;d = r() | 0;e = a + 48 | 0;f = e;d = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;b[e >> 2] = d;b[e + 4 >> 2] = c & 16777215;c = vd(d | 0, c | 0, 56) | 0;d = r() | 0;e = a + 56 | 0;f = e;d = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;b[e >> 2] = d;b[e + 4 >> 2] = c & 16777215;c = vd(d | 0, c | 0, 56) | 0;d = r() | 0;e = a + 64 | 0;f = e;d = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;b[e >> 2] = d;b[e + 4 >> 2] = c & 16777215;c = vd(d | 0, c | 0, 56) | 0;d = r() | 0;a = a + 72 | 0;e = a;d = nd(b[e >> 2] | 0, b[e + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;b[a >> 2] = d;b[a + 4 >> 2] = c;return;
      }function qa(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;e = c;d = b[e + 4 >> 2] | 0;f = a;b[f >> 2] = b[e >> 2];b[f + 4 >> 2] = d;f = c + 8 | 0;d = b[f + 4 >> 2] | 0;e = a + 8 | 0;b[e >> 2] = b[f >> 2];b[e + 4 >> 2] = d;e = c + 16 | 0;d = b[e + 4 >> 2] | 0;f = a + 16 | 0;b[f >> 2] = b[e >> 2];b[f + 4 >> 2] = d;f = c + 24 | 0;d = b[f + 4 >> 2] | 0;e = a + 24 | 0;b[e >> 2] = b[f >> 2];b[e + 4 >> 2] = d;e = c + 32 | 0;d = b[e + 4 >> 2] | 0;c = a + 32 | 0;b[c >> 2] = b[e >> 2];b[c + 4 >> 2] = d;return;
      }function ra(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;e = c;f = b[e + 4 >> 2] | 0;d = a;b[d >> 2] = b[e >> 2];b[d + 4 >> 2] = f;d = c + 8 | 0;f = b[d + 4 >> 2] | 0;e = a + 8 | 0;b[e >> 2] = b[d >> 2];b[e + 4 >> 2] = f;e = c + 16 | 0;f = b[e + 4 >> 2] | 0;d = a + 16 | 0;b[d >> 2] = b[e >> 2];b[d + 4 >> 2] = f;d = c + 24 | 0;f = b[d + 4 >> 2] | 0;e = a + 24 | 0;b[e >> 2] = b[d >> 2];b[e + 4 >> 2] = f;e = c + 32 | 0;f = e;c = b[f + 4 >> 2] & 16777215;d = a + 32 | 0;b[d >> 2] = b[f >> 2];b[d + 4 >> 2] = c;e = vd(b[e >> 2] | 0, b[e + 4 >> 2] | 0, 56) | 0;d = r() | 0;c = a + 40 | 0;b[c >> 2] = e;b[c + 4 >> 2] = d;c = a + 48 | 0;b[c >> 2] = 0;b[c + 4 >> 2] = 0;b[c + 8 >> 2] = 0;b[c + 12 >> 2] = 0;b[c + 16 >> 2] = 0;b[c + 20 >> 2] = 0;b[c + 24 >> 2] = 0;b[c + 28 >> 2] = 0;return;
      }function sa(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;d = a;e = d + 40 | 0;do {
          b[d >> 2] = 0;d = d + 4 | 0;
        } while ((d | 0) < (e | 0));d = c;e = b[d + 4 >> 2] | 0;f = a + 40 | 0;b[f >> 2] = b[d >> 2];b[f + 4 >> 2] = e;f = c + 8 | 0;e = b[f + 4 >> 2] | 0;d = a + 48 | 0;b[d >> 2] = b[f >> 2];b[d + 4 >> 2] = e;d = c + 16 | 0;e = b[d + 4 >> 2] | 0;f = a + 56 | 0;b[f >> 2] = b[d >> 2];b[f + 4 >> 2] = e;f = c + 24 | 0;e = b[f + 4 >> 2] | 0;d = a + 64 | 0;b[d >> 2] = b[f >> 2];b[d + 4 >> 2] = e;c = c + 32 | 0;d = b[c + 4 >> 2] | 0;e = a + 72 | 0;b[e >> 2] = b[c >> 2];b[e + 4 >> 2] = d;return;
      }function ta(a) {
        a = a | 0;var c = 0;c = a + 80 | 0;do {
          b[a >> 2] = 0;a = a + 4 | 0;
        } while ((a | 0) < (c | 0));return;
      }function ua(a) {
        a = a | 0;var c = 0;c = a;b[c >> 2] = 1;b[c + 4 >> 2] = 0;a = a + 8 | 0;b[a >> 2] = 0;b[a + 4 >> 2] = 0;b[a + 8 >> 2] = 0;b[a + 12 >> 2] = 0;b[a + 16 >> 2] = 0;b[a + 20 >> 2] = 0;b[a + 24 >> 2] = 0;b[a + 28 >> 2] = 0;return;
      }function va(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0;e = c;f = d;e = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;f = r() | 0;g = a;b[g >> 2] = e;b[g + 4 >> 2] = f;g = c + 8 | 0;f = d + 8 | 0;g = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 8 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 16 | 0;f = d + 16 | 0;e = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;f = r() | 0;g = a + 16 | 0;b[g >> 2] = e;b[g + 4 >> 2] = f;g = c + 24 | 0;f = d + 24 | 0;g = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 24 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 32 | 0;c = d + 32 | 0;e = nd(b[c >> 2] | 0, b[c + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;c = r() | 0;d = a + 32 | 0;b[d >> 2] = e;b[d + 4 >> 2] = c;return;
      }function wa(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;e = a;d = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;g = vd(d | 0, e | 0, 56) | 0;h = r() | 0;f = a + 8 | 0;i = f;h = nd(b[i >> 2] | 0, b[i + 4 >> 2] | 0, g | 0, h | 0) | 0;g = r() | 0;b[f >> 2] = h;b[f + 4 >> 2] = g & 16777215;g = vd(h | 0, g | 0, 56) | 0;h = r() | 0;f = a + 16 | 0;i = f;h = nd(b[i >> 2] | 0, b[i + 4 >> 2] | 0, g | 0, h | 0) | 0;g = r() | 0;b[f >> 2] = h;b[f + 4 >> 2] = g & 16777215;g = vd(h | 0, g | 0, 56) | 0;h = r() | 0;f = a + 24 | 0;i = f;h = nd(b[i >> 2] | 0, b[i + 4 >> 2] | 0, g | 0, h | 0) | 0;g = r() | 0;b[f >> 2] = h;b[f + 4 >> 2] = g & 16777215;g = vd(h | 0, g | 0, 56) | 0;h = r() | 0;f = a + 32 | 0;i = f;h = nd(b[i >> 2] | 0, b[i + 4 >> 2] | 0, g | 0, h | 0) | 0;g = r() | 0;b[f >> 2] = h;b[f + 4 >> 2] = g;e = nd(d | 0, e & 16777215 | 0, c | 0, ((c | 0) < 0) << 31 >> 31 | 0) | 0;d = r() | 0;c = a;b[c >> 2] = e;b[c + 4 >> 2] = d;return;
      }function xa(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0;f = c;g = d;g = od(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 8 | 0;f = d + 8 | 0;f = od(b[e >> 2] | 0, b[e + 4 >> 2] | 0, b[f >> 2] | 0, b[f + 4 >> 2] | 0) | 0;e = r() | 0;g = a + 8 | 0;b[g >> 2] = f;b[g + 4 >> 2] = e;g = c + 16 | 0;e = d + 16 | 0;e = od(b[g >> 2] | 0, b[g + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;g = r() | 0;f = a + 16 | 0;b[f >> 2] = e;b[f + 4 >> 2] = g;f = c + 24 | 0;g = d + 24 | 0;g = od(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 24 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;c = c + 32 | 0;e = d + 32 | 0;e = od(b[c >> 2] | 0, b[c + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;c = r() | 0;d = a + 32 | 0;b[d >> 2] = e;b[d + 4 >> 2] = c;return;
      }function ya(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0;e = c;f = d;f = od(b[e >> 2] | 0, b[e + 4 >> 2] | 0, b[f >> 2] | 0, b[f + 4 >> 2] | 0) | 0;e = r() | 0;g = a;b[g >> 2] = f;b[g + 4 >> 2] = e;g = c + 8 | 0;e = d + 8 | 0;e = od(b[g >> 2] | 0, b[g + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;g = r() | 0;f = a + 8 | 0;b[f >> 2] = e;b[f + 4 >> 2] = g;f = c + 16 | 0;g = d + 16 | 0;g = od(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 16 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 24 | 0;f = d + 24 | 0;f = od(b[e >> 2] | 0, b[e + 4 >> 2] | 0, b[f >> 2] | 0, b[f + 4 >> 2] | 0) | 0;e = r() | 0;g = a + 24 | 0;b[g >> 2] = f;b[g + 4 >> 2] = e;g = c + 32 | 0;e = d + 32 | 0;e = od(b[g >> 2] | 0, b[g + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;g = r() | 0;f = a + 32 | 0;b[f >> 2] = e;b[f + 4 >> 2] = g;f = c + 40 | 0;g = d + 40 | 0;g = od(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 40 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 48 | 0;f = d + 48 | 0;f = od(b[e >> 2] | 0, b[e + 4 >> 2] | 0, b[f >> 2] | 0, b[f + 4 >> 2] | 0) | 0;e = r() | 0;g = a + 48 | 0;b[g >> 2] = f;b[g + 4 >> 2] = e;g = c + 56 | 0;e = d + 56 | 0;e = od(b[g >> 2] | 0, b[g + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;g = r() | 0;f = a + 56 | 0;b[f >> 2] = e;b[f + 4 >> 2] = g;f = c + 64 | 0;g = d + 64 | 0;g = od(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 64 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;c = c + 72 | 0;e = d + 72 | 0;e = od(b[c >> 2] | 0, b[c + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;c = r() | 0;d = a + 72 | 0;b[d >> 2] = e;b[d + 4 >> 2] = c;return;
      }function za(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0;g = c;f = d;g = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 8 | 0;f = d + 8 | 0;e = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;f = r() | 0;g = a + 8 | 0;b[g >> 2] = e;b[g + 4 >> 2] = f;g = c + 16 | 0;f = d + 16 | 0;g = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 16 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 24 | 0;f = d + 24 | 0;e = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;f = r() | 0;g = a + 24 | 0;b[g >> 2] = e;b[g + 4 >> 2] = f;g = c + 32 | 0;f = d + 32 | 0;g = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 32 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 40 | 0;f = d + 40 | 0;e = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;f = r() | 0;g = a + 40 | 0;b[g >> 2] = e;b[g + 4 >> 2] = f;g = c + 48 | 0;f = d + 48 | 0;g = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 48 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 56 | 0;f = d + 56 | 0;e = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;f = r() | 0;g = a + 56 | 0;b[g >> 2] = e;b[g + 4 >> 2] = f;g = c + 64 | 0;f = d + 64 | 0;g = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0;f = r() | 0;e = a + 64 | 0;b[e >> 2] = g;b[e + 4 >> 2] = f;e = c + 72 | 0;c = d + 72 | 0;e = nd(b[c >> 2] | 0, b[c + 4 >> 2] | 0, b[e >> 2] | 0, b[e + 4 >> 2] | 0) | 0;c = r() | 0;d = a + 72 | 0;b[d >> 2] = e;b[d + 4 >> 2] = c;return;
      }function Aa(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;e = a;d = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;g = vd(d | 0, e | 0, 56) | 0;h = r() | 0;f = a + 8 | 0;i = f;h = nd(b[i >> 2] | 0, b[i + 4 >> 2] | 0, g | 0, h | 0) | 0;g = r() | 0;b[f >> 2] = h;b[f + 4 >> 2] = g & 16777215;g = vd(h | 0, g | 0, 56) | 0;h = r() | 0;f = a + 16 | 0;i = f;h = nd(b[i >> 2] | 0, b[i + 4 >> 2] | 0, g | 0, h | 0) | 0;g = r() | 0;b[f >> 2] = h;b[f + 4 >> 2] = g & 16777215;g = vd(h | 0, g | 0, 56) | 0;h = r() | 0;f = a + 24 | 0;i = f;h = nd(b[i >> 2] | 0, b[i + 4 >> 2] | 0, g | 0, h | 0) | 0;g = r() | 0;b[f >> 2] = h;b[f + 4 >> 2] = g & 16777215;g = vd(h | 0, g | 0, 56) | 0;h = r() | 0;f = a + 32 | 0;i = f;h = nd(b[i >> 2] | 0, b[i + 4 >> 2] | 0, g | 0, h | 0) | 0;g = r() | 0;b[f >> 2] = h;b[f + 4 >> 2] = g;e = od(d | 0, e & 16777215 | 0, c | 0, ((c | 0) < 0) << 31 >> 31 | 0) | 0;d = r() | 0;c = a;b[c >> 2] = e;b[c + 4 >> 2] = d;return;
      }function Ba(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;f = d & 268435455;e = vd(d | 0, ((d | 0) < 0) << 31 >> 31 | 0, 28) | 0;h = r() | 0;k = c;o = b[k >> 2] | 0;n = o & 268435455;k = vd(o | 0, b[k + 4 >> 2] | 0, 28) | 0;o = r() | 0;j = td(n | 0, 0, f | 0, 0) | 0;p = r() | 0;m = td(k | 0, o | 0, e | 0, h | 0) | 0;i = r() | 0;n = td(n | 0, 0, e | 0, h | 0) | 0;d = r() | 0;o = td(k | 0, o | 0, f | 0, 0) | 0;o = nd(n | 0, d | 0, o | 0, r() | 0) | 0;d = r() | 0;n = vd(o | 0, d | 0, 28) | 0;k = r() | 0;d = xd(o | 0, d | 0, 28) | 0;d = nd(j | 0, p | 0, d & -268435456 | 0, (r() | 0) & 16777215 | 0) | 0;p = r() | 0;i = nd(n | 0, k | 0, m | 0, i | 0) | 0;m = r() | 0;k = wd(d | 0, p | 0, 56) | 0;k = nd(i | 0, m | 0, k | 0, r() | 0) | 0;m = r() | 0;i = a;b[i >> 2] = d;b[i + 4 >> 2] = p & 16777215;i = c + 8 | 0;p = b[i >> 2] | 0;d = p & 268435455;i = vd(p | 0, b[i + 4 >> 2] | 0, 28) | 0;p = r() | 0;n = td(d | 0, 0, f | 0, 0) | 0;j = r() | 0;o = td(i | 0, p | 0, e | 0, h | 0) | 0;g = r() | 0;d = td(d | 0, 0, e | 0, h | 0) | 0;l = r() | 0;p = td(i | 0, p | 0, f | 0, 0) | 0;p = nd(d | 0, l | 0, p | 0, r() | 0) | 0;l = r() | 0;d = vd(p | 0, l | 0, 28) | 0;i = r() | 0;l = xd(p | 0, l | 0, 28) | 0;p = (r() | 0) & 16777215;m = nd(n | 0, j | 0, k | 0, m | 0) | 0;p = nd(m | 0, r() | 0, l & -268435456 | 0, p | 0) | 0;l = r() | 0;g = nd(d | 0, i | 0, o | 0, g | 0) | 0;o = r() | 0;i = vd(p | 0, l | 0, 56) | 0;i = nd(g | 0, o | 0, i | 0, r() | 0) | 0;o = r() | 0;g = a + 8 | 0;b[g >> 2] = p;b[g + 4 >> 2] = l & 16777215;g = c + 16 | 0;l = b[g >> 2] | 0;p = l & 268435455;g = vd(l | 0, b[g + 4 >> 2] | 0, 28) | 0;l = r() | 0;d = td(p | 0, 0, f | 0, 0) | 0;m = r() | 0;k = td(g | 0, l | 0, e | 0, h | 0) | 0;j = r() | 0;p = td(p | 0, 0, e | 0, h | 0) | 0;n = r() | 0;l = td(g | 0, l | 0, f | 0, 0) | 0;l = nd(p | 0, n | 0, l | 0, r() | 0) | 0;n = r() | 0;p = vd(l | 0, n | 0, 28) | 0;g = r() | 0;n = xd(l | 0, n | 0, 28) | 0;l = (r() | 0) & 16777215;o = nd(d | 0, m | 0, i | 0, o | 0) | 0;l = nd(o | 0, r() | 0, n & -268435456 | 0, l | 0) | 0;n = r() | 0;j = nd(p | 0, g | 0, k | 0, j | 0) | 0;k = r() | 0;g = vd(l | 0, n | 0, 56) | 0;g = nd(j | 0, k | 0, g | 0, r() | 0) | 0;k = r() | 0;j = a + 16 | 0;b[j >> 2] = l;b[j + 4 >> 2] = n & 16777215;j = c + 24 | 0;n = b[j >> 2] | 0;l = n & 268435455;j = vd(n | 0, b[j + 4 >> 2] | 0, 28) | 0;n = r() | 0;p = td(l | 0, 0, f | 0, 0) | 0;o = r() | 0;i = td(j | 0, n | 0, e | 0, h | 0) | 0;m = r() | 0;l = td(l | 0, 0, e | 0, h | 0) | 0;d = r() | 0;n = td(j | 0, n | 0, f | 0, 0) | 0;n = nd(l | 0, d | 0, n | 0, r() | 0) | 0;d = r() | 0;l = vd(n | 0, d | 0, 28) | 0;j = r() | 0;d = xd(n | 0, d | 0, 28) | 0;n = (r() | 0) & 16777215;k = nd(p | 0, o | 0, g | 0, k | 0) | 0;n = nd(k | 0, r() | 0, d & -268435456 | 0, n | 0) | 0;d = r() | 0;m = nd(l | 0, j | 0, i | 0, m | 0) | 0;i = r() | 0;j = vd(n | 0, d | 0, 56) | 0;j = nd(m | 0, i | 0, j | 0, r() | 0) | 0;i = r() | 0;m = a + 24 | 0;b[m >> 2] = n;b[m + 4 >> 2] = d & 16777215;m = c + 32 | 0;d = b[m >> 2] | 0;n = d & 268435455;m = vd(d | 0, b[m + 4 >> 2] | 0, 28) | 0;d = r() | 0;l = td(n | 0, 0, f | 0, 0) | 0;k = r() | 0;c = td(m | 0, d | 0, e | 0, h | 0) | 0;g = r() | 0;h = td(n | 0, 0, e | 0, h | 0) | 0;e = r() | 0;f = td(m | 0, d | 0, f | 0, 0) | 0;f = nd(h | 0, e | 0, f | 0, r() | 0) | 0;e = r() | 0;h = vd(f | 0, e | 0, 28) | 0;d = r() | 0;e = xd(f | 0, e | 0, 28) | 0;f = (r() | 0) & 16777215;i = nd(l | 0, k | 0, j | 0, i | 0) | 0;f = nd(i | 0, r() | 0, e & -268435456 | 0, f | 0) | 0;e = r() | 0;g = nd(h | 0, d | 0, c | 0, g | 0) | 0;c = r() | 0;d = vd(f | 0, e | 0, 56) | 0;d = nd(g | 0, c | 0, d | 0, r() | 0) | 0;c = r() | 0;a = a + 32 | 0;b[a >> 2] = f;b[a + 4 >> 2] = e & 16777215;q(c | 0);return d | 0;
      }function Ca(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0;e = a;f = e + 80 | 0;do {
          b[e >> 2] = 0;e = e + 4 | 0;
        } while ((e | 0) < (f | 0));h = d + 8 | 0;i = d + 16 | 0;j = d + 24 | 0;k = d + 32 | 0;g = 0;e = 0;f = 0;while (1) {
          m = c + (g << 3) | 0;q = m;t = b[q >> 2] | 0;w = d;n = b[w >> 2] | 0;w = b[w + 4 >> 2] | 0;z = t & 268435455;q = vd(t | 0, b[q + 4 >> 2] | 0, 28) | 0;t = r() | 0;p = n & 268435455;w = vd(n | 0, w | 0, 28) | 0;n = r() | 0;s = td(p | 0, 0, z | 0, 0) | 0;o = r() | 0;v = td(w | 0, n | 0, q | 0, t | 0) | 0;x = r() | 0;z = td(w | 0, n | 0, z | 0, 0) | 0;n = r() | 0;t = td(p | 0, 0, q | 0, t | 0) | 0;t = nd(z | 0, n | 0, t | 0, r() | 0) | 0;n = r() | 0;z = vd(t | 0, n | 0, 28) | 0;q = r() | 0;n = xd(t | 0, n | 0, 28) | 0;t = (r() | 0) & 16777215;e = nd(e | 0, f | 0, s | 0, o | 0) | 0;t = nd(e | 0, r() | 0, n & -268435456 | 0, t | 0) | 0;n = r() | 0;x = nd(z | 0, q | 0, v | 0, x | 0) | 0;v = r() | 0;q = vd(t | 0, n | 0, 56) | 0;q = nd(x | 0, v | 0, q | 0, r() | 0) | 0;v = r() | 0;x = a + (g << 3) | 0;b[x >> 2] = t;b[x + 4 >> 2] = n & 16777215;x = m;n = b[x >> 2] | 0;t = h;z = b[t >> 2] | 0;t = b[t + 4 >> 2] | 0;e = g + 1 | 0;f = a + (e << 3) | 0;o = n & 268435455;x = vd(n | 0, b[x + 4 >> 2] | 0, 28) | 0;n = r() | 0;s = z & 268435455;t = vd(z | 0, t | 0, 28) | 0;z = r() | 0;p = td(s | 0, 0, o | 0, 0) | 0;w = r() | 0;u = td(t | 0, z | 0, x | 0, n | 0) | 0;l = r() | 0;o = td(t | 0, z | 0, o | 0, 0) | 0;z = r() | 0;n = td(s | 0, 0, x | 0, n | 0) | 0;n = nd(o | 0, z | 0, n | 0, r() | 0) | 0;z = r() | 0;o = vd(n | 0, z | 0, 28) | 0;x = r() | 0;z = xd(n | 0, z | 0, 28) | 0;n = (r() | 0) & 16777215;s = f;v = nd(b[s >> 2] | 0, b[s + 4 >> 2] | 0, q | 0, v | 0) | 0;w = nd(v | 0, r() | 0, p | 0, w | 0) | 0;n = nd(w | 0, r() | 0, z & -268435456 | 0, n | 0) | 0;z = r() | 0;l = nd(o | 0, x | 0, u | 0, l | 0) | 0;u = r() | 0;x = vd(n | 0, z | 0, 56) | 0;x = nd(l | 0, u | 0, x | 0, r() | 0) | 0;u = r() | 0;l = f;b[l >> 2] = n;b[l + 4 >> 2] = z & 16777215;l = m;z = b[l >> 2] | 0;n = i;o = b[n >> 2] | 0;n = b[n + 4 >> 2] | 0;w = a + (g + 2 << 3) | 0;p = z & 268435455;l = vd(z | 0, b[l + 4 >> 2] | 0, 28) | 0;z = r() | 0;v = o & 268435455;n = vd(o | 0, n | 0, 28) | 0;o = r() | 0;q = td(v | 0, 0, p | 0, 0) | 0;s = r() | 0;t = td(n | 0, o | 0, l | 0, z | 0) | 0;y = r() | 0;p = td(n | 0, o | 0, p | 0, 0) | 0;o = r() | 0;z = td(v | 0, 0, l | 0, z | 0) | 0;z = nd(p | 0, o | 0, z | 0, r() | 0) | 0;o = r() | 0;p = vd(z | 0, o | 0, 28) | 0;l = r() | 0;o = xd(z | 0, o | 0, 28) | 0;z = (r() | 0) & 16777215;v = w;u = nd(b[v >> 2] | 0, b[v + 4 >> 2] | 0, x | 0, u | 0) | 0;s = nd(u | 0, r() | 0, q | 0, s | 0) | 0;z = nd(s | 0, r() | 0, o & -268435456 | 0, z | 0) | 0;o = r() | 0;y = nd(p | 0, l | 0, t | 0, y | 0) | 0;t = r() | 0;l = vd(z | 0, o | 0, 56) | 0;l = nd(y | 0, t | 0, l | 0, r() | 0) | 0;t = r() | 0;b[w >> 2] = z;b[w + 4 >> 2] = o & 16777215;w = m;o = b[w >> 2] | 0;z = j;y = b[z >> 2] | 0;z = b[z + 4 >> 2] | 0;p = a + (g + 3 << 3) | 0;s = o & 268435455;w = vd(o | 0, b[w + 4 >> 2] | 0, 28) | 0;o = r() | 0;q = y & 268435455;z = vd(y | 0, z | 0, 28) | 0;y = r() | 0;u = td(q | 0, 0, s | 0, 0) | 0;x = r() | 0;v = td(z | 0, y | 0, w | 0, o | 0) | 0;n = r() | 0;s = td(z | 0, y | 0, s | 0, 0) | 0;y = r() | 0;o = td(q | 0, 0, w | 0, o | 0) | 0;o = nd(s | 0, y | 0, o | 0, r() | 0) | 0;y = r() | 0;s = vd(o | 0, y | 0, 28) | 0;w = r() | 0;y = xd(o | 0, y | 0, 28) | 0;o = (r() | 0) & 16777215;q = p;t = nd(b[q >> 2] | 0, b[q + 4 >> 2] | 0, l | 0, t | 0) | 0;x = nd(t | 0, r() | 0, u | 0, x | 0) | 0;o = nd(x | 0, r() | 0, y & -268435456 | 0, o | 0) | 0;y = r() | 0;n = nd(s | 0, w | 0, v | 0, n | 0) | 0;v = r() | 0;w = vd(o | 0, y | 0, 56) | 0;w = nd(n | 0, v | 0, w | 0, r() | 0) | 0;v = r() | 0;b[p >> 2] = o;b[p + 4 >> 2] = y & 16777215;p = b[m >> 2] | 0;y = k;o = b[y >> 2] | 0;y = b[y + 4 >> 2] | 0;n = a + (g + 4 << 3) | 0;s = p & 268435455;m = vd(p | 0, b[m + 4 >> 2] | 0, 28) | 0;p = r() | 0;x = o & 268435455;y = vd(o | 0, y | 0, 28) | 0;o = r() | 0;u = td(x | 0, 0, s | 0, 0) | 0;t = r() | 0;l = td(y | 0, o | 0, m | 0, p | 0) | 0;q = r() | 0;s = td(y | 0, o | 0, s | 0, 0) | 0;o = r() | 0;p = td(x | 0, 0, m | 0, p | 0) | 0;p = nd(s | 0, o | 0, p | 0, r() | 0) | 0;o = r() | 0;s = vd(p | 0, o | 0, 28) | 0;m = r() | 0;o = xd(p | 0, o | 0, 28) | 0;p = (r() | 0) & 16777215;x = n;v = nd(b[x >> 2] | 0, b[x + 4 >> 2] | 0, w | 0, v | 0) | 0;t = nd(v | 0, r() | 0, u | 0, t | 0) | 0;p = nd(t | 0, r() | 0, o & -268435456 | 0, p | 0) | 0;o = r() | 0;q = nd(s | 0, m | 0, l | 0, q | 0) | 0;l = r() | 0;m = vd(p | 0, o | 0, 56) | 0;m = nd(q | 0, l | 0, m | 0, r() | 0) | 0;l = r() | 0;b[n >> 2] = p;b[n + 4 >> 2] = o & 16777215;g = a + (g + 5 << 3) | 0;b[g >> 2] = m;b[g + 4 >> 2] = l;if ((e | 0) == 5) break;g = e;e = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;
        }return;
      }function Da(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = 0,
            K = 0,
            L = 0,
            M = 0;d = a;e = d + 80 | 0;do {
          b[d >> 2] = 0;d = d + 4 | 0;
        } while ((d | 0) < (e | 0));i = 1;f = 0;g = 0;e = 0;d = 0;while (1) {
          k = c;m = b[k >> 2] | 0;s = c + (i << 3) | 0;n = b[s >> 2] | 0;s = b[s + 4 >> 2] | 0;l = m & 268435455;k = vd(m | 0, b[k + 4 >> 2] | 0, 28) | 0;m = r() | 0;q = n & 268435455;s = vd(n | 0, s | 0, 28) | 0;n = r() | 0;p = td(q | 0, 0, l | 0, 0) | 0;o = r() | 0;j = td(s | 0, n | 0, k | 0, m | 0) | 0;h = r() | 0;l = td(s | 0, n | 0, l | 0, 0) | 0;n = r() | 0;m = td(q | 0, 0, k | 0, m | 0) | 0;m = nd(l | 0, n | 0, m | 0, r() | 0) | 0;n = r() | 0;l = vd(m | 0, n | 0, 28) | 0;k = r() | 0;n = xd(m | 0, n | 0, 28) | 0;m = (r() | 0) & 16777215;f = nd(f | 0, g | 0, e | 0, d | 0) | 0;f = nd(f | 0, r() | 0, p | 0, o | 0) | 0;f = nd(f | 0, r() | 0, n & -268435456 | 0, m | 0) | 0;g = r() | 0;d = nd(l | 0, k | 0, j | 0, h | 0) | 0;h = r() | 0;e = vd(f | 0, g | 0, 56) | 0;e = nd(d | 0, h | 0, e | 0, r() | 0) | 0;h = r() | 0;d = a + (i << 3) | 0;b[d >> 2] = f;b[d + 4 >> 2] = g & 16777215;d = i + 1 | 0;if (i >>> 0 >= 4) break;g = a + (d << 3) | 0;i = d;f = b[g >> 2] | 0;g = b[g + 4 >> 2] | 0;d = h;
        }f = a + 40 | 0;i = f;b[i >> 2] = e;b[i + 4 >> 2] = h;i = c + 8 | 0;o = i;K = b[o >> 2] | 0;H = c + 16 | 0;q = b[H >> 2] | 0;H = b[H + 4 >> 2] | 0;t = a + 24 | 0;m = K & 268435455;o = vd(K | 0, b[o + 4 >> 2] | 0, 28) | 0;K = r() | 0;J = q & 268435455;H = vd(q | 0, H | 0, 28) | 0;q = r() | 0;l = td(J | 0, 0, m | 0, 0) | 0;k = r() | 0;I = td(H | 0, q | 0, o | 0, K | 0) | 0;j = r() | 0;m = td(H | 0, q | 0, m | 0, 0) | 0;q = r() | 0;K = td(J | 0, 0, o | 0, K | 0) | 0;K = nd(m | 0, q | 0, K | 0, r() | 0) | 0;q = r() | 0;m = vd(K | 0, q | 0, 28) | 0;o = r() | 0;q = xd(K | 0, q | 0, 28) | 0;K = (r() | 0) & 16777215;J = t;k = nd(b[J >> 2] | 0, b[J + 4 >> 2] | 0, l | 0, k | 0) | 0;K = nd(k | 0, r() | 0, q & -268435456 | 0, K | 0) | 0;q = r() | 0;j = nd(m | 0, o | 0, I | 0, j | 0) | 0;I = r() | 0;o = vd(K | 0, q | 0, 56) | 0;o = nd(j | 0, I | 0, o | 0, r() | 0) | 0;I = r() | 0;b[t >> 2] = K;b[t + 4 >> 2] = q & 16777215;t = i;q = b[t >> 2] | 0;K = c + 24 | 0;j = b[K >> 2] | 0;K = b[K + 4 >> 2] | 0;m = a + 32 | 0;k = q & 268435455;t = vd(q | 0, b[t + 4 >> 2] | 0, 28) | 0;q = r() | 0;l = j & 268435455;K = vd(j | 0, K | 0, 28) | 0;j = r() | 0;J = td(l | 0, 0, k | 0, 0) | 0;H = r() | 0;p = td(K | 0, j | 0, t | 0, q | 0) | 0;h = r() | 0;k = td(K | 0, j | 0, k | 0, 0) | 0;j = r() | 0;q = td(l | 0, 0, t | 0, q | 0) | 0;q = nd(k | 0, j | 0, q | 0, r() | 0) | 0;j = r() | 0;k = vd(q | 0, j | 0, 28) | 0;t = r() | 0;j = xd(q | 0, j | 0, 28) | 0;q = (r() | 0) & 16777215;l = m;I = nd(b[l >> 2] | 0, b[l + 4 >> 2] | 0, o | 0, I | 0) | 0;H = nd(I | 0, r() | 0, J | 0, H | 0) | 0;q = nd(H | 0, r() | 0, j & -268435456 | 0, q | 0) | 0;j = r() | 0;h = nd(k | 0, t | 0, p | 0, h | 0) | 0;p = r() | 0;t = vd(q | 0, j | 0, 56) | 0;t = nd(h | 0, p | 0, t | 0, r() | 0) | 0;p = r() | 0;b[m >> 2] = q;b[m + 4 >> 2] = j & 16777215;m = b[i >> 2] | 0;j = c + 32 | 0;q = b[j >> 2] | 0;j = b[j + 4 >> 2] | 0;h = a + 40 | 0;k = m & 268435455;i = vd(m | 0, b[i + 4 >> 2] | 0, 28) | 0;m = r() | 0;H = q & 268435455;j = vd(q | 0, j | 0, 28) | 0;q = r() | 0;J = td(H | 0, 0, k | 0, 0) | 0;I = r() | 0;o = td(j | 0, q | 0, i | 0, m | 0) | 0;l = r() | 0;k = td(j | 0, q | 0, k | 0, 0) | 0;q = r() | 0;m = td(H | 0, 0, i | 0, m | 0) | 0;m = nd(k | 0, q | 0, m | 0, r() | 0) | 0;q = r() | 0;k = vd(m | 0, q | 0, 28) | 0;i = r() | 0;q = xd(m | 0, q | 0, 28) | 0;m = (r() | 0) & 16777215;H = h;p = nd(b[H >> 2] | 0, b[H + 4 >> 2] | 0, t | 0, p | 0) | 0;I = nd(p | 0, r() | 0, J | 0, I | 0) | 0;m = nd(I | 0, r() | 0, q & -268435456 | 0, m | 0) | 0;q = r() | 0;l = nd(k | 0, i | 0, o | 0, l | 0) | 0;o = r() | 0;i = vd(m | 0, q | 0, 56) | 0;i = nd(l | 0, o | 0, i | 0, r() | 0) | 0;o = r() | 0;b[h >> 2] = m;b[h + 4 >> 2] = q & 16777215;h = a + 48 | 0;q = h;b[q >> 2] = i;b[q + 4 >> 2] = o;q = c + 16 | 0;o = q;i = b[o >> 2] | 0;m = c + 24 | 0;l = b[m >> 2] | 0;m = b[m + 4 >> 2] | 0;k = a + 40 | 0;I = i & 268435455;o = vd(i | 0, b[o + 4 >> 2] | 0, 28) | 0;i = r() | 0;J = l & 268435455;m = vd(l | 0, m | 0, 28) | 0;l = r() | 0;p = td(J | 0, 0, I | 0, 0) | 0;t = r() | 0;H = td(m | 0, l | 0, o | 0, i | 0) | 0;j = r() | 0;I = td(m | 0, l | 0, I | 0, 0) | 0;l = r() | 0;i = td(J | 0, 0, o | 0, i | 0) | 0;i = nd(I | 0, l | 0, i | 0, r() | 0) | 0;l = r() | 0;I = vd(i | 0, l | 0, 28) | 0;o = r() | 0;l = xd(i | 0, l | 0, 28) | 0;i = (r() | 0) & 16777215;J = k;t = nd(b[J >> 2] | 0, b[J + 4 >> 2] | 0, p | 0, t | 0) | 0;i = nd(t | 0, r() | 0, l & -268435456 | 0, i | 0) | 0;l = r() | 0;j = nd(I | 0, o | 0, H | 0, j | 0) | 0;H = r() | 0;o = vd(i | 0, l | 0, 56) | 0;o = nd(j | 0, H | 0, o | 0, r() | 0) | 0;H = r() | 0;b[k >> 2] = i;b[k + 4 >> 2] = l & 16777215;k = b[q >> 2] | 0;l = c + 32 | 0;i = b[l >> 2] | 0;l = b[l + 4 >> 2] | 0;j = a + 48 | 0;I = k & 268435455;q = vd(k | 0, b[q + 4 >> 2] | 0, 28) | 0;k = r() | 0;t = i & 268435455;l = vd(i | 0, l | 0, 28) | 0;i = r() | 0;p = td(t | 0, 0, I | 0, 0) | 0;J = r() | 0;m = td(l | 0, i | 0, q | 0, k | 0) | 0;K = r() | 0;I = td(l | 0, i | 0, I | 0, 0) | 0;i = r() | 0;k = td(t | 0, 0, q | 0, k | 0) | 0;k = nd(I | 0, i | 0, k | 0, r() | 0) | 0;i = r() | 0;I = vd(k | 0, i | 0, 28) | 0;q = r() | 0;i = xd(k | 0, i | 0, 28) | 0;k = (r() | 0) & 16777215;t = j;H = nd(b[t >> 2] | 0, b[t + 4 >> 2] | 0, o | 0, H | 0) | 0;J = nd(H | 0, r() | 0, p | 0, J | 0) | 0;k = nd(J | 0, r() | 0, i & -268435456 | 0, k | 0) | 0;i = r() | 0;K = nd(I | 0, q | 0, m | 0, K | 0) | 0;m = r() | 0;q = vd(k | 0, i | 0, 56) | 0;q = nd(K | 0, m | 0, q | 0, r() | 0) | 0;m = r() | 0;b[j >> 2] = k;b[j + 4 >> 2] = i & 16777215;j = a + 56 | 0;i = j;b[i >> 2] = q;b[i + 4 >> 2] = m;i = c + 24 | 0;m = b[i >> 2] | 0;q = c + 32 | 0;k = b[q >> 2] | 0;q = b[q + 4 >> 2] | 0;K = a + 56 | 0;I = m & 268435455;i = vd(m | 0, b[i + 4 >> 2] | 0, 28) | 0;m = r() | 0;J = k & 268435455;q = vd(k | 0, q | 0, 28) | 0;k = r() | 0;p = td(J | 0, 0, I | 0, 0) | 0;H = r() | 0;I = td(q | 0, k | 0, I | 0, 0) | 0;o = r() | 0;J = td(J | 0, 0, i | 0, m | 0) | 0;J = nd(I | 0, o | 0, J | 0, r() | 0) | 0;o = r() | 0;I = xd(J | 0, o | 0, 28) | 0;t = (r() | 0) & 16777215;l = K;H = nd(b[l >> 2] | 0, b[l + 4 >> 2] | 0, p | 0, H | 0) | 0;t = nd(H | 0, r() | 0, I & -268435456 | 0, t | 0) | 0;I = r() | 0;b[K >> 2] = t;b[K + 4 >> 2] = I & 16777215;o = vd(J | 0, o | 0, 28) | 0;J = r() | 0;m = td(q | 0, k | 0, i | 0, m | 0) | 0;m = nd(o | 0, J | 0, m | 0, r() | 0) | 0;J = r() | 0;I = vd(t | 0, I | 0, 56) | 0;I = nd(m | 0, J | 0, I | 0, r() | 0) | 0;J = r() | 0;m = a + 64 | 0;t = a + 32 | 0;o = t;i = f;k = b[i >> 2] | 0;i = b[i + 4 >> 2] | 0;q = h;K = b[q >> 2] | 0;q = b[q + 4 >> 2] | 0;H = j;p = b[H >> 2] | 0;H = b[H + 4 >> 2] | 0;o = xd(b[o >> 2] | 0, b[o + 4 >> 2] | 0, 1) | 0;l = r() | 0;i = xd(k | 0, i | 0, 1) | 0;k = r() | 0;q = xd(K | 0, q | 0, 1) | 0;K = r() | 0;H = xd(p | 0, H | 0, 1) | 0;p = r() | 0;s = a + 72 | 0;e = a;e = xd(b[e >> 2] | 0, b[e + 4 >> 2] | 0, 1) | 0;M = r() | 0;E = a;b[E >> 2] = e;b[E + 4 >> 2] = M;E = a + 8 | 0;y = E;y = xd(b[y >> 2] | 0, b[y + 4 >> 2] | 0, 1) | 0;A = r() | 0;z = E;b[z >> 2] = y;b[z + 4 >> 2] = A;z = a + 16 | 0;n = z;n = xd(b[n >> 2] | 0, b[n + 4 >> 2] | 0, 1) | 0;L = r() | 0;w = z;b[w >> 2] = n;b[w + 4 >> 2] = L;w = a + 24 | 0;d = w;d = xd(b[d >> 2] | 0, b[d + 4 >> 2] | 0, 1) | 0;u = r() | 0;F = w;b[F >> 2] = d;b[F + 4 >> 2] = u;F = t;b[F >> 2] = o;b[F + 4 >> 2] = l;F = f;b[F >> 2] = i;b[F + 4 >> 2] = k;F = h;b[F >> 2] = q;b[F + 4 >> 2] = K;F = j;b[F >> 2] = H;b[F + 4 >> 2] = p;J = xd(I | 0, J | 0, 1) | 0;I = r() | 0;F = m;b[F >> 2] = J;b[F + 4 >> 2] = I;F = s;b[F >> 2] = 0;b[F + 4 >> 2] = 0;F = c;D = b[F >> 2] | 0;C = D & 268435455;F = vd(D | 0, b[F + 4 >> 2] | 0, 28) | 0;D = r() | 0;B = td(C | 0, 0, C | 0, 0) | 0;g = r() | 0;x = td(F | 0, D | 0, F | 0, D | 0) | 0;v = r() | 0;C = td(F | 0, D | 0, C | 0, 0) | 0;D = r() | 0;F = xd(C | 0, D | 0, 29) | 0;G = r() | 0;D = vd(C | 0, D | 0, 27) | 0;C = r() | 0;M = nd(B | 0, g | 0, e | 0, M | 0) | 0;G = nd(M | 0, r() | 0, F & -536870912 | 0, G & 16777215 | 0) | 0;F = r() | 0;v = nd(D | 0, C | 0, x | 0, v | 0) | 0;x = r() | 0;C = vd(G | 0, F | 0, 56) | 0;D = r() | 0;F = F & 16777215;M = a;b[M >> 2] = G;b[M + 4 >> 2] = F;A = nd(v | 0, x | 0, y | 0, A | 0) | 0;D = nd(A | 0, r() | 0, C | 0, D | 0) | 0;C = r() | 0;A = E;b[A >> 2] = D;b[A + 4 >> 2] = C;A = c + 8 | 0;y = b[A >> 2] | 0;x = y & 268435455;A = vd(y | 0, b[A + 4 >> 2] | 0, 28) | 0;y = r() | 0;v = td(x | 0, 0, x | 0, 0) | 0;M = r() | 0;e = td(A | 0, y | 0, A | 0, y | 0) | 0;g = r() | 0;x = td(A | 0, y | 0, x | 0, 0) | 0;y = r() | 0;A = xd(x | 0, y | 0, 29) | 0;B = r() | 0;y = vd(x | 0, y | 0, 27) | 0;x = r() | 0;L = nd(v | 0, M | 0, n | 0, L | 0) | 0;B = nd(L | 0, r() | 0, A & -536870912 | 0, B & 16777215 | 0) | 0;A = r() | 0;g = nd(y | 0, x | 0, e | 0, g | 0) | 0;e = r() | 0;x = vd(B | 0, A | 0, 56) | 0;y = r() | 0;A = A & 16777215;L = z;b[L >> 2] = B;b[L + 4 >> 2] = A;u = nd(g | 0, e | 0, d | 0, u | 0) | 0;y = nd(u | 0, r() | 0, x | 0, y | 0) | 0;x = r() | 0;u = w;b[u >> 2] = y;b[u + 4 >> 2] = x;u = c + 16 | 0;d = b[u >> 2] | 0;e = d & 268435455;u = vd(d | 0, b[u + 4 >> 2] | 0, 28) | 0;d = r() | 0;g = td(e | 0, 0, e | 0, 0) | 0;L = r() | 0;n = td(u | 0, d | 0, u | 0, d | 0) | 0;M = r() | 0;e = td(u | 0, d | 0, e | 0, 0) | 0;d = r() | 0;u = xd(e | 0, d | 0, 29) | 0;v = r() | 0;d = vd(e | 0, d | 0, 27) | 0;e = r() | 0;l = nd(g | 0, L | 0, o | 0, l | 0) | 0;v = nd(l | 0, r() | 0, u & -536870912 | 0, v & 16777215 | 0) | 0;u = r() | 0;M = nd(d | 0, e | 0, n | 0, M | 0) | 0;n = r() | 0;e = vd(v | 0, u | 0, 56) | 0;d = r() | 0;u = u & 16777215;l = t;b[l >> 2] = v;b[l + 4 >> 2] = u;k = nd(M | 0, n | 0, i | 0, k | 0) | 0;d = nd(k | 0, r() | 0, e | 0, d | 0) | 0;e = r() | 0;k = f;b[k >> 2] = d;b[k + 4 >> 2] = e;k = c + 24 | 0;i = b[k >> 2] | 0;n = i & 268435455;k = vd(i | 0, b[k + 4 >> 2] | 0, 28) | 0;i = r() | 0;M = td(n | 0, 0, n | 0, 0) | 0;l = r() | 0;o = td(k | 0, i | 0, k | 0, i | 0) | 0;L = r() | 0;n = td(k | 0, i | 0, n | 0, 0) | 0;i = r() | 0;k = xd(n | 0, i | 0, 29) | 0;g = r() | 0;i = vd(n | 0, i | 0, 27) | 0;n = r() | 0;K = nd(M | 0, l | 0, q | 0, K | 0) | 0;g = nd(K | 0, r() | 0, k & -536870912 | 0, g & 16777215 | 0) | 0;k = r() | 0;L = nd(i | 0, n | 0, o | 0, L | 0) | 0;o = r() | 0;n = vd(g | 0, k | 0, 56) | 0;i = r() | 0;k = k & 16777215;K = h;b[K >> 2] = g;b[K + 4 >> 2] = k;p = nd(L | 0, o | 0, H | 0, p | 0) | 0;i = nd(p | 0, r() | 0, n | 0, i | 0) | 0;n = r() | 0;p = j;b[p >> 2] = i;b[p + 4 >> 2] = n;p = c + 32 | 0;H = b[p >> 2] | 0;o = H & 268435455;p = vd(H | 0, b[p + 4 >> 2] | 0, 28) | 0;H = r() | 0;L = td(o | 0, 0, o | 0, 0) | 0;K = r() | 0;q = td(p | 0, H | 0, p | 0, H | 0) | 0;c = r() | 0;o = td(p | 0, H | 0, o | 0, 0) | 0;H = r() | 0;p = xd(o | 0, H | 0, 29) | 0;l = r() | 0;H = vd(o | 0, H | 0, 27) | 0;o = r() | 0;I = nd(L | 0, K | 0, J | 0, I | 0) | 0;l = nd(I | 0, r() | 0, p & -536870912 | 0, l & 16777215 | 0) | 0;p = r() | 0;c = nd(H | 0, o | 0, q | 0, c | 0) | 0;q = r() | 0;o = vd(l | 0, p | 0, 56) | 0;o = nd(c | 0, q | 0, o | 0, r() | 0) | 0;q = r() | 0;c = a;b[c >> 2] = G;b[c + 4 >> 2] = F;c = E;b[c >> 2] = D;b[c + 4 >> 2] = C & 16777215;c = vd(D | 0, C | 0, 56) | 0;c = nd(B | 0, A | 0, c | 0, r() | 0) | 0;a = r() | 0;b[z >> 2] = c;b[z + 4 >> 2] = a & 16777215;a = vd(c | 0, a | 0, 56) | 0;a = nd(y | 0, x | 0, a | 0, r() | 0) | 0;c = r() | 0;b[w >> 2] = a;b[w + 4 >> 2] = c & 16777215;c = vd(a | 0, c | 0, 56) | 0;c = nd(v | 0, u | 0, c | 0, r() | 0) | 0;a = r() | 0;b[t >> 2] = c;b[t + 4 >> 2] = a & 16777215;a = vd(c | 0, a | 0, 56) | 0;a = nd(d | 0, e | 0, a | 0, r() | 0) | 0;c = r() | 0;b[f >> 2] = a;b[f + 4 >> 2] = c & 16777215;c = vd(a | 0, c | 0, 56) | 0;c = nd(g | 0, k | 0, c | 0, r() | 0) | 0;k = r() | 0;a = h;b[a >> 2] = c;b[a + 4 >> 2] = k & 16777215;k = vd(c | 0, k | 0, 56) | 0;k = nd(i | 0, n | 0, k | 0, r() | 0) | 0;n = r() | 0;b[j >> 2] = k;b[j + 4 >> 2] = n & 16777215;n = vd(k | 0, n | 0, 56) | 0;n = nd(l | 0, p & 16777215 | 0, n | 0, r() | 0) | 0;p = r() | 0;b[m >> 2] = n;b[m + 4 >> 2] = p & 16777215;p = vd(n | 0, p | 0, 56) | 0;p = nd(o | 0, q | 0, p | 0, r() | 0) | 0;q = r() | 0;b[s >> 2] = p;b[s + 4 >> 2] = q;return;
      }function Ea(a, c, d, e, f) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0;if ((d | 0) == -1 & (e | 0) == -1) {
          k = c + 8 | 0;l = c + 16 | 0;d = c + 24 | 0;h = c + 32 | 0;j = f + 32 | 0;g = 0;i = b[j >> 2] | 0;j = b[j + 4 >> 2] | 0;do {
            o = f + (g << 3) | 0;u = o;x = b[u >> 2] | 0;u = b[u + 4 >> 2] | 0;q = od(0, 0, x | 0, u | 0) | 0;s = q & 268435455;q = wd(q | 0, r() | 0, 28) | 0;r() | 0;q = q & 268435455;v = c;p = b[v >> 2] | 0;n = p & 268435455;v = vd(p | 0, b[v + 4 >> 2] | 0, 28) | 0;p = r() | 0;m = td(n | 0, 0, s | 0, 0) | 0;y = r() | 0;e = td(v | 0, p | 0, q | 0, 0) | 0;t = r() | 0;p = td(v | 0, p | 0, s | 0, 0) | 0;v = r() | 0;n = td(n | 0, 0, q | 0, 0) | 0;n = nd(p | 0, v | 0, n | 0, r() | 0) | 0;v = r() | 0;p = vd(n | 0, v | 0, 28) | 0;z = r() | 0;v = xd(n | 0, v | 0, 28) | 0;n = (r() | 0) & 16777215;y = nd(x | 0, u | 0, m | 0, y | 0) | 0;n = nd(y | 0, r() | 0, v & -268435456 | 0, n | 0) | 0;v = r() | 0;t = nd(p | 0, z | 0, e | 0, t | 0) | 0;e = r() | 0;z = vd(n | 0, v | 0, 56) | 0;z = nd(t | 0, e | 0, z | 0, r() | 0) | 0;e = r() | 0;b[o >> 2] = n;b[o + 4 >> 2] = v & 16777215;o = k;v = b[o >> 2] | 0;n = g;g = g + 1 | 0;t = f + (g << 3) | 0;p = v & 268435455;o = vd(v | 0, b[o + 4 >> 2] | 0, 28) | 0;v = r() | 0;y = td(p | 0, 0, s | 0, 0) | 0;m = r() | 0;u = td(o | 0, v | 0, q | 0, 0) | 0;x = r() | 0;v = td(o | 0, v | 0, s | 0, 0) | 0;o = r() | 0;p = td(p | 0, 0, q | 0, 0) | 0;p = nd(v | 0, o | 0, p | 0, r() | 0) | 0;o = r() | 0;v = vd(p | 0, o | 0, 28) | 0;w = r() | 0;o = xd(p | 0, o | 0, 28) | 0;p = (r() | 0) & 16777215;A = t;e = nd(b[A >> 2] | 0, b[A + 4 >> 2] | 0, z | 0, e | 0) | 0;m = nd(e | 0, r() | 0, y | 0, m | 0) | 0;p = nd(m | 0, r() | 0, o & -268435456 | 0, p | 0) | 0;o = r() | 0;x = nd(v | 0, w | 0, u | 0, x | 0) | 0;u = r() | 0;w = vd(p | 0, o | 0, 56) | 0;w = nd(x | 0, u | 0, w | 0, r() | 0) | 0;u = r() | 0;b[t >> 2] = p;b[t + 4 >> 2] = o & 16777215;t = l;o = b[t >> 2] | 0;p = f + (n + 2 << 3) | 0;x = o & 268435455;t = vd(o | 0, b[t + 4 >> 2] | 0, 28) | 0;o = r() | 0;v = td(x | 0, 0, s | 0, 0) | 0;m = r() | 0;y = td(t | 0, o | 0, q | 0, 0) | 0;e = r() | 0;o = td(t | 0, o | 0, s | 0, 0) | 0;t = r() | 0;x = td(x | 0, 0, q | 0, 0) | 0;x = nd(o | 0, t | 0, x | 0, r() | 0) | 0;t = r() | 0;o = vd(x | 0, t | 0, 28) | 0;z = r() | 0;t = xd(x | 0, t | 0, 28) | 0;x = (r() | 0) & 16777215;A = p;u = nd(b[A >> 2] | 0, b[A + 4 >> 2] | 0, w | 0, u | 0) | 0;m = nd(u | 0, r() | 0, v | 0, m | 0) | 0;x = nd(m | 0, r() | 0, t & -268435456 | 0, x | 0) | 0;t = r() | 0;e = nd(o | 0, z | 0, y | 0, e | 0) | 0;y = r() | 0;z = vd(x | 0, t | 0, 56) | 0;z = nd(e | 0, y | 0, z | 0, r() | 0) | 0;y = r() | 0;b[p >> 2] = x;b[p + 4 >> 2] = t & 16777215;p = d;t = b[p >> 2] | 0;x = f + (n + 3 << 3) | 0;e = t & 268435455;p = vd(t | 0, b[p + 4 >> 2] | 0, 28) | 0;t = r() | 0;o = td(e | 0, 0, s | 0, 0) | 0;m = r() | 0;v = td(p | 0, t | 0, q | 0, 0) | 0;u = r() | 0;t = td(p | 0, t | 0, s | 0, 0) | 0;p = r() | 0;e = td(e | 0, 0, q | 0, 0) | 0;e = nd(t | 0, p | 0, e | 0, r() | 0) | 0;p = r() | 0;t = vd(e | 0, p | 0, 28) | 0;w = r() | 0;p = xd(e | 0, p | 0, 28) | 0;e = (r() | 0) & 16777215;A = x;y = nd(b[A >> 2] | 0, b[A + 4 >> 2] | 0, z | 0, y | 0) | 0;m = nd(y | 0, r() | 0, o | 0, m | 0) | 0;e = nd(m | 0, r() | 0, p & -268435456 | 0, e | 0) | 0;p = r() | 0;u = nd(t | 0, w | 0, v | 0, u | 0) | 0;v = r() | 0;w = vd(e | 0, p | 0, 56) | 0;w = nd(u | 0, v | 0, w | 0, r() | 0) | 0;v = r() | 0;b[x >> 2] = e;b[x + 4 >> 2] = p & 16777215;x = h;p = b[x >> 2] | 0;e = p & 268435455;x = vd(p | 0, b[x + 4 >> 2] | 0, 28) | 0;p = r() | 0;u = td(e | 0, 0, s | 0, 0) | 0;t = r() | 0;m = td(x | 0, p | 0, q | 0, 0) | 0;o = r() | 0;s = td(x | 0, p | 0, s | 0, 0) | 0;p = r() | 0;q = td(e | 0, 0, q | 0, 0) | 0;q = nd(s | 0, p | 0, q | 0, r() | 0) | 0;p = r() | 0;s = vd(q | 0, p | 0, 28) | 0;e = r() | 0;p = xd(q | 0, p | 0, 28) | 0;q = (r() | 0) & 16777215;v = nd(i | 0, j | 0, w | 0, v | 0) | 0;t = nd(v | 0, r() | 0, u | 0, t | 0) | 0;q = nd(t | 0, r() | 0, p & -268435456 | 0, q | 0) | 0;p = r() | 0;o = nd(s | 0, e | 0, m | 0, o | 0) | 0;m = r() | 0;e = vd(q | 0, p | 0, 56) | 0;e = nd(o | 0, m | 0, e | 0, r() | 0) | 0;m = r() | 0;o = f + (n + 4 << 3) | 0;b[o >> 2] = q;b[o + 4 >> 2] = p & 16777215;n = f + (n + 5 << 3) | 0;o = n;i = nd(b[o >> 2] | 0, b[o + 4 >> 2] | 0, e | 0, m | 0) | 0;j = r() | 0;b[n >> 2] = i;b[n + 4 >> 2] = j;
          } while ((g | 0) != 5);z = f + 40 | 0;x = z;x = b[x >> 2] | 0;z = z + 4 | 0;z = b[z >> 2] | 0;c = a;n = c;b[n >> 2] = x;c = c + 4 | 0;b[c >> 2] = z;c = f + 48 | 0;n = c;n = b[n >> 2] | 0;c = c + 4 | 0;c = b[c >> 2] | 0;o = a + 8 | 0;q = o;p = q;b[p >> 2] = n;q = q + 4 | 0;b[q >> 2] = c;q = f + 56 | 0;p = q;p = b[p >> 2] | 0;q = q + 4 | 0;q = b[q >> 2] | 0;s = a + 16 | 0;u = s;t = u;b[t >> 2] = p;u = u + 4 | 0;b[u >> 2] = q;u = f + 64 | 0;t = u;t = b[t >> 2] | 0;u = u + 4 | 0;u = b[u >> 2] | 0;v = a + 24 | 0;y = v;w = y;b[w >> 2] = t;y = y + 4 | 0;b[y >> 2] = u;y = f + 72 | 0;w = y;w = b[w >> 2] | 0;y = y + 4 | 0;y = b[y >> 2] | 0;A = a + 32 | 0;m = z & 16777215;f = a;a = f;b[a >> 2] = x;f = f + 4 | 0;b[f >> 2] = m;z = vd(x | 0, z | 0, 56) | 0;x = r() | 0;x = nd(n | 0, c | 0, z | 0, x | 0) | 0;z = r() | 0;f = z & 16777215;c = o;b[c >> 2] = x;o = o + 4 | 0;b[o >> 2] = f;z = vd(x | 0, z | 0, 56) | 0;x = r() | 0;x = nd(p | 0, q | 0, z | 0, x | 0) | 0;z = r() | 0;q = z & 16777215;p = s;b[p >> 2] = x;s = s + 4 | 0;b[s >> 2] = q;z = vd(x | 0, z | 0, 56) | 0;x = r() | 0;x = nd(t | 0, u | 0, z | 0, x | 0) | 0;z = r() | 0;u = z & 16777215;t = v;b[t >> 2] = x;v = v + 4 | 0;b[v >> 2] = u;z = vd(x | 0, z | 0, 56) | 0;x = r() | 0;x = nd(w | 0, y | 0, z | 0, x | 0) | 0;z = r() | 0;y = A;b[y >> 2] = x;A = A + 4 | 0;b[A >> 2] = z;return;
        } else {
          h = (d | 0) == 1 & (e | 0) == 0;i = c + 8 | 0;j = c + 16 | 0;k = c + 24 | 0;l = c + 32 | 0;n = f + 32 | 0;g = 0;m = b[n >> 2] | 0;n = b[n + 4 >> 2] | 0;do {
            x = f + (g << 3) | 0;s = x;B = b[s >> 2] | 0;s = b[s + 4 >> 2] | 0;v = td(B | 0, s | 0, d | 0, e | 0) | 0;y = (r() | 0) & 16777215;v = h ? B : v;u = v & 268435455;y = vd(v | 0, (h ? s : y) | 0, 28) | 0;v = r() | 0;q = c;w = b[q >> 2] | 0;A = w & 268435455;q = vd(w | 0, b[q + 4 >> 2] | 0, 28) | 0;w = r() | 0;z = td(A | 0, 0, u | 0, 0) | 0;C = r() | 0;o = td(q | 0, w | 0, y | 0, v | 0) | 0;t = r() | 0;w = td(q | 0, w | 0, u | 0, 0) | 0;q = r() | 0;A = td(A | 0, 0, y | 0, v | 0) | 0;A = nd(w | 0, q | 0, A | 0, r() | 0) | 0;q = r() | 0;w = vd(A | 0, q | 0, 28) | 0;D = r() | 0;q = xd(A | 0, q | 0, 28) | 0;A = (r() | 0) & 16777215;C = nd(B | 0, s | 0, z | 0, C | 0) | 0;A = nd(C | 0, r() | 0, q & -268435456 | 0, A | 0) | 0;q = r() | 0;t = nd(w | 0, D | 0, o | 0, t | 0) | 0;o = r() | 0;D = vd(A | 0, q | 0, 56) | 0;D = nd(t | 0, o | 0, D | 0, r() | 0) | 0;o = r() | 0;b[x >> 2] = A;b[x + 4 >> 2] = q & 16777215;x = i;q = b[x >> 2] | 0;A = g;g = g + 1 | 0;t = f + (g << 3) | 0;w = q & 268435455;x = vd(q | 0, b[x + 4 >> 2] | 0, 28) | 0;q = r() | 0;C = td(w | 0, 0, u | 0, 0) | 0;z = r() | 0;s = td(x | 0, q | 0, y | 0, v | 0) | 0;B = r() | 0;q = td(x | 0, q | 0, u | 0, 0) | 0;x = r() | 0;w = td(w | 0, 0, y | 0, v | 0) | 0;w = nd(q | 0, x | 0, w | 0, r() | 0) | 0;x = r() | 0;q = vd(w | 0, x | 0, 28) | 0;p = r() | 0;x = xd(w | 0, x | 0, 28) | 0;w = (r() | 0) & 16777215;E = t;o = nd(b[E >> 2] | 0, b[E + 4 >> 2] | 0, D | 0, o | 0) | 0;z = nd(o | 0, r() | 0, C | 0, z | 0) | 0;w = nd(z | 0, r() | 0, x & -268435456 | 0, w | 0) | 0;x = r() | 0;B = nd(q | 0, p | 0, s | 0, B | 0) | 0;s = r() | 0;p = vd(w | 0, x | 0, 56) | 0;p = nd(B | 0, s | 0, p | 0, r() | 0) | 0;s = r() | 0;b[t >> 2] = w;b[t + 4 >> 2] = x & 16777215;t = j;x = b[t >> 2] | 0;w = f + (A + 2 << 3) | 0;B = x & 268435455;t = vd(x | 0, b[t + 4 >> 2] | 0, 28) | 0;x = r() | 0;q = td(B | 0, 0, u | 0, 0) | 0;z = r() | 0;C = td(t | 0, x | 0, y | 0, v | 0) | 0;o = r() | 0;x = td(t | 0, x | 0, u | 0, 0) | 0;t = r() | 0;B = td(B | 0, 0, y | 0, v | 0) | 0;B = nd(x | 0, t | 0, B | 0, r() | 0) | 0;t = r() | 0;x = vd(B | 0, t | 0, 28) | 0;D = r() | 0;t = xd(B | 0, t | 0, 28) | 0;B = (r() | 0) & 16777215;E = w;s = nd(b[E >> 2] | 0, b[E + 4 >> 2] | 0, p | 0, s | 0) | 0;z = nd(s | 0, r() | 0, q | 0, z | 0) | 0;B = nd(z | 0, r() | 0, t & -268435456 | 0, B | 0) | 0;t = r() | 0;o = nd(x | 0, D | 0, C | 0, o | 0) | 0;C = r() | 0;D = vd(B | 0, t | 0, 56) | 0;D = nd(o | 0, C | 0, D | 0, r() | 0) | 0;C = r() | 0;b[w >> 2] = B;b[w + 4 >> 2] = t & 16777215;w = k;t = b[w >> 2] | 0;B = f + (A + 3 << 3) | 0;o = t & 268435455;w = vd(t | 0, b[w + 4 >> 2] | 0, 28) | 0;t = r() | 0;x = td(o | 0, 0, u | 0, 0) | 0;z = r() | 0;q = td(w | 0, t | 0, y | 0, v | 0) | 0;s = r() | 0;t = td(w | 0, t | 0, u | 0, 0) | 0;w = r() | 0;o = td(o | 0, 0, y | 0, v | 0) | 0;o = nd(t | 0, w | 0, o | 0, r() | 0) | 0;w = r() | 0;t = vd(o | 0, w | 0, 28) | 0;p = r() | 0;w = xd(o | 0, w | 0, 28) | 0;o = (r() | 0) & 16777215;E = B;C = nd(b[E >> 2] | 0, b[E + 4 >> 2] | 0, D | 0, C | 0) | 0;z = nd(C | 0, r() | 0, x | 0, z | 0) | 0;o = nd(z | 0, r() | 0, w & -268435456 | 0, o | 0) | 0;w = r() | 0;s = nd(t | 0, p | 0, q | 0, s | 0) | 0;q = r() | 0;p = vd(o | 0, w | 0, 56) | 0;p = nd(s | 0, q | 0, p | 0, r() | 0) | 0;q = r() | 0;b[B >> 2] = o;b[B + 4 >> 2] = w & 16777215;B = l;w = b[B >> 2] | 0;o = w & 268435455;B = vd(w | 0, b[B + 4 >> 2] | 0, 28) | 0;w = r() | 0;s = td(o | 0, 0, u | 0, 0) | 0;t = r() | 0;z = td(B | 0, w | 0, y | 0, v | 0) | 0;x = r() | 0;u = td(B | 0, w | 0, u | 0, 0) | 0;w = r() | 0;v = td(o | 0, 0, y | 0, v | 0) | 0;v = nd(u | 0, w | 0, v | 0, r() | 0) | 0;w = r() | 0;u = vd(v | 0, w | 0, 28) | 0;y = r() | 0;w = xd(v | 0, w | 0, 28) | 0;v = (r() | 0) & 16777215;q = nd(m | 0, n | 0, p | 0, q | 0) | 0;t = nd(q | 0, r() | 0, s | 0, t | 0) | 0;v = nd(t | 0, r() | 0, w & -268435456 | 0, v | 0) | 0;w = r() | 0;x = nd(u | 0, y | 0, z | 0, x | 0) | 0;z = r() | 0;y = vd(v | 0, w | 0, 56) | 0;y = nd(x | 0, z | 0, y | 0, r() | 0) | 0;z = r() | 0;x = f + (A + 4 << 3) | 0;b[x >> 2] = v;b[x + 4 >> 2] = w & 16777215;A = f + (A + 5 << 3) | 0;x = A;m = nd(b[x >> 2] | 0, b[x + 4 >> 2] | 0, y | 0, z | 0) | 0;n = r() | 0;b[A >> 2] = m;b[A + 4 >> 2] = n;
          } while ((g | 0) != 5);D = f + 40 | 0;B = D;B = b[B >> 2] | 0;D = D + 4 | 0;D = b[D >> 2] | 0;s = a;q = s;b[q >> 2] = B;s = s + 4 | 0;b[s >> 2] = D;s = f + 48 | 0;q = s;q = b[q >> 2] | 0;s = s + 4 | 0;s = b[s >> 2] | 0;t = a + 8 | 0;v = t;u = v;b[u >> 2] = q;v = v + 4 | 0;b[v >> 2] = s;v = f + 56 | 0;u = v;u = b[u >> 2] | 0;v = v + 4 | 0;v = b[v >> 2] | 0;w = a + 16 | 0;y = w;x = y;b[x >> 2] = u;y = y + 4 | 0;b[y >> 2] = v;y = f + 64 | 0;x = y;x = b[x >> 2] | 0;y = y + 4 | 0;y = b[y >> 2] | 0;z = a + 24 | 0;C = z;A = C;b[A >> 2] = x;C = C + 4 | 0;b[C >> 2] = y;C = f + 72 | 0;A = C;A = b[A >> 2] | 0;C = C + 4 | 0;C = b[C >> 2] | 0;E = a + 32 | 0;o = D & 16777215;p = a;f = p;b[f >> 2] = B;p = p + 4 | 0;b[p >> 2] = o;D = vd(B | 0, D | 0, 56) | 0;B = r() | 0;B = nd(q | 0, s | 0, D | 0, B | 0) | 0;D = r() | 0;s = D & 16777215;q = t;b[q >> 2] = B;t = t + 4 | 0;b[t >> 2] = s;D = vd(B | 0, D | 0, 56) | 0;B = r() | 0;B = nd(u | 0, v | 0, D | 0, B | 0) | 0;D = r() | 0;v = D & 16777215;u = w;b[u >> 2] = B;w = w + 4 | 0;b[w >> 2] = v;D = vd(B | 0, D | 0, 56) | 0;B = r() | 0;B = nd(x | 0, y | 0, D | 0, B | 0) | 0;D = r() | 0;y = D & 16777215;x = z;b[x >> 2] = B;z = z + 4 | 0;b[z >> 2] = y;D = vd(B | 0, D | 0, 56) | 0;B = r() | 0;B = nd(A | 0, C | 0, D | 0, B | 0) | 0;D = r() | 0;C = E;b[C >> 2] = B;E = E + 4 | 0;b[E >> 2] = D;return;
        }
      }function Fa(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0;g = d;g = vd(b[g >> 2] | 0, b[g + 4 >> 2] | 0, 1) | 0;e = r() | 0;i = d + 8 | 0;f = i;xd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, 55) | 0;e = (r() | 0) & 8388608 | e;f = d;b[f >> 2] = g;b[f + 4 >> 2] = e;f = c;e = od(b[f >> 2] | 0, b[f + 4 >> 2] | 0, g | 0, e | 0) | 0;g = r() | 0;f = a;b[f >> 2] = e;b[f + 4 >> 2] = g & 16777215;g = vd(e | 0, g | 0, 56) | 0;e = r() | 0;f = i;f = vd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, 1) | 0;j = r() | 0;h = d + 16 | 0;k = h;xd(b[k >> 2] | 0, b[k + 4 >> 2] | 0, 55) | 0;j = (r() | 0) & 8388608 | j;b[i >> 2] = f;b[i + 4 >> 2] = j;i = c + 8 | 0;j = od(b[i >> 2] | 0, b[i + 4 >> 2] | 0, f | 0, j | 0) | 0;e = nd(j | 0, r() | 0, g | 0, e | 0) | 0;g = r() | 0;j = a + 8 | 0;b[j >> 2] = e;b[j + 4 >> 2] = g & 16777215;g = vd(e | 0, g | 0, 56) | 0;e = r() | 0;j = h;j = vd(b[j >> 2] | 0, b[j + 4 >> 2] | 0, 1) | 0;f = r() | 0;i = d + 24 | 0;k = i;xd(b[k >> 2] | 0, b[k + 4 >> 2] | 0, 55) | 0;f = (r() | 0) & 8388608 | f;b[h >> 2] = j;b[h + 4 >> 2] = f;h = c + 16 | 0;f = od(b[h >> 2] | 0, b[h + 4 >> 2] | 0, j | 0, f | 0) | 0;e = nd(f | 0, r() | 0, g | 0, e | 0) | 0;g = r() | 0;f = a + 16 | 0;b[f >> 2] = e;b[f + 4 >> 2] = g & 16777215;g = vd(e | 0, g | 0, 56) | 0;e = r() | 0;f = i;f = vd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, 1) | 0;j = r() | 0;h = d + 32 | 0;d = h;xd(b[d >> 2] | 0, b[d + 4 >> 2] | 0, 55) | 0;d = (r() | 0) & 8388608 | j;b[i >> 2] = f;b[i + 4 >> 2] = d;i = c + 24 | 0;d = od(b[i >> 2] | 0, b[i + 4 >> 2] | 0, f | 0, d | 0) | 0;d = nd(d | 0, r() | 0, g | 0, e | 0) | 0;e = r() | 0;g = a + 24 | 0;b[g >> 2] = d;b[g + 4 >> 2] = e & 16777215;e = vd(d | 0, e | 0, 56) | 0;d = r() | 0;g = h;g = vd(b[g >> 2] | 0, b[g + 4 >> 2] | 0, 1) | 0;f = r() | 0;b[h >> 2] = g;b[h + 4 >> 2] = f;c = c + 32 | 0;c = od(b[c >> 2] | 0, b[c + 4 >> 2] | 0, g | 0, f | 0) | 0;c = nd(c | 0, r() | 0, e | 0, d | 0) | 0;d = r() | 0;a = a + 32 | 0;b[a >> 2] = c;b[a + 4 >> 2] = d;d = wd(c | 0, d | 0, 63) | 0;r() | 0;return d | 0;
      }function Ga(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0;e = a + 32 | 0;g = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;f = c + 32 | 0;d = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;if ((g | 0) == (d | 0) & (e | 0) == (f | 0)) {
          e = a + 24 | 0;g = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;f = c + 24 | 0;d = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;if ((g | 0) == (d | 0) & (e | 0) == (f | 0)) {
            e = a + 16 | 0;g = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;f = c + 16 | 0;d = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;if ((g | 0) == (d | 0) & (e | 0) == (f | 0)) {
              e = a + 8 | 0;g = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;f = c + 8 | 0;d = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;if ((g | 0) == (d | 0) & (e | 0) == (f | 0)) {
                e = a;g = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;f = c;d = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;if ((g | 0) == (d | 0) & (e | 0) == (f | 0)) {
                  c = 0;return c | 0;
                }
              }
            }
          }
        }c = (e | 0) > (f | 0) | (e | 0) == (f | 0) & g >>> 0 > d >>> 0 ? 1 : -1;return c | 0;
      }function Ha(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = 0,
            K = 0,
            L = 0,
            M = 0,
            N = 0;n = c;m = b[n >> 2] | 0;n = b[n + 4 >> 2] | 0;w = c + 8 | 0;v = b[w >> 2] | 0;w = b[w + 4 >> 2] | 0;u = c + 16 | 0;t = b[u >> 2] | 0;u = b[u + 4 >> 2] | 0;s = c + 24 | 0;p = b[s >> 2] | 0;s = b[s + 4 >> 2] | 0;l = c + 32 | 0;k = b[l >> 2] | 0;l = b[l + 4 >> 2] | 0;c = a;q = b[c >> 2] | 0;c = b[c + 4 >> 2] | 0;o = c & 16777215;z = a;b[z >> 2] = q;b[z + 4 >> 2] = o;c = vd(q | 0, c | 0, 56) | 0;z = r() | 0;D = a + 8 | 0;A = D;z = nd(b[A >> 2] | 0, b[A + 4 >> 2] | 0, c | 0, z | 0) | 0;c = r() | 0;A = c & 16777215;B = D;b[B >> 2] = z;b[B + 4 >> 2] = A;c = vd(z | 0, c | 0, 56) | 0;B = r() | 0;E = a + 16 | 0;g = E;B = nd(b[g >> 2] | 0, b[g + 4 >> 2] | 0, c | 0, B | 0) | 0;c = r() | 0;g = c & 16777215;f = E;b[f >> 2] = B;b[f + 4 >> 2] = g;c = vd(B | 0, c | 0, 56) | 0;f = r() | 0;F = a + 24 | 0;C = F;f = nd(b[C >> 2] | 0, b[C + 4 >> 2] | 0, c | 0, f | 0) | 0;c = r() | 0;C = c & 16777215;d = F;b[d >> 2] = f;b[d + 4 >> 2] = C;c = vd(f | 0, c | 0, 56) | 0;d = r() | 0;G = a + 32 | 0;x = G;d = nd(b[x >> 2] | 0, b[x + 4 >> 2] | 0, c | 0, d | 0) | 0;c = r() | 0;x = G;b[x >> 2] = d;b[x + 4 >> 2] = c;if ((d | 0) == (k | 0) & (c | 0) == (l | 0)) {
          if ((f | 0) == (p | 0) & (C | 0) == (s | 0)) {
            if ((B | 0) == (t | 0) & (g | 0) == (u | 0)) {
              if ((z | 0) == (v | 0) & (A | 0) == (w | 0)) {
                if (!((q | 0) == (m | 0) & (o | 0) == (n | 0))) {
                  e = o;h = n;i = q;j = m;y = 3;
                }
              } else {
                e = A;h = w;i = z;j = v;y = 3;
              }
            } else {
              e = g;h = u;i = B;j = t;y = 3;
            }
          } else {
            e = C;h = s;i = f;j = p;y = 3;
          }
        } else {
          e = c;h = l;i = d;j = k;y = 3;
        }if ((y | 0) == 3 ? !((e | 0) > (h | 0) | (e | 0) == (h | 0) & i >>> 0 > j >>> 0) : 0) return;x = 0;do {
          i = xd(k | 0, l | 0, 1) | 0;j = r() | 0;h = vd(p | 0, s | 0, 55) | 0;k = h | i;l = r() | 0 | j;j = xd(p | 0, s | 0, 1) | 0;i = (r() | 0) & 16777215;h = vd(t | 0, u | 0, 55) | 0;p = j & -2 | h;s = i | (r() | 0);i = xd(t | 0, u | 0, 1) | 0;h = (r() | 0) & 16777215;j = vd(v | 0, w | 0, 55) | 0;t = i & -2 | j;u = h | (r() | 0);h = xd(v | 0, w | 0, 1) | 0;j = (r() | 0) & 16777215;i = vd(m | 0, n | 0, 55) | 0;v = h & -2 | i;w = j | (r() | 0);j = xd(m | 0, n | 0, 1) | 0;m = j & -2;n = (r() | 0) & 16777215;x = x + 1 | 0;if ((d | 0) == (k | 0) & (c | 0) == (l | 0)) {
            if ((f | 0) == (p | 0) & (C | 0) == (s | 0)) {
              if ((B | 0) == (t | 0) & (g | 0) == (u | 0)) {
                if ((z | 0) == (v | 0) & (A | 0) == (w | 0)) {
                  if ((q | 0) == (m | 0) & (o | 0) == (n | 0)) e = 0;else {
                    e = o;h = n;i = q;j = m;y = 10;
                  }
                } else {
                  e = A;h = w;i = z;j = v;y = 10;
                }
              } else {
                e = g;h = u;i = B;j = t;y = 10;
              }
            } else {
              e = C;h = s;i = f;j = p;y = 10;
            }
          } else {
            e = c;h = l;i = d;j = k;y = 10;
          }if ((y | 0) == 10) {
            y = 0;e = (e | 0) > (h | 0) | (e | 0) == (h | 0) & i >>> 0 > j >>> 0 ? 1 : -1;
          }
        } while ((e | 0) > -1);j = z;i = A;h = B;e = C;while (1) {
          m = vd(m | 0, n | 0, 1) | 0;N = r() | 0;xd(v | 0, w | 0, 55) | 0;n = (r() | 0) & 8388608 | N;v = vd(v | 0, w | 0, 1) | 0;N = r() | 0;xd(t | 0, u | 0, 55) | 0;w = (r() | 0) & 8388608 | N;t = vd(t | 0, u | 0, 1) | 0;N = r() | 0;xd(p | 0, s | 0, 55) | 0;u = (r() | 0) & 8388608 | N;p = vd(p | 0, s | 0, 1) | 0;N = r() | 0;xd(k | 0, l | 0, 55) | 0;s = (r() | 0) & 8388608 | N;k = vd(k | 0, l | 0, 1) | 0;l = r() | 0;N = od(q | 0, o | 0, m | 0, n | 0) | 0;M = r() | 0;A = od(j | 0, i | 0, v | 0, w | 0) | 0;K = r() | 0;I = od(h | 0, g | 0, t | 0, u | 0) | 0;J = r() | 0;y = od(f | 0, e | 0, p | 0, s | 0) | 0;H = r() | 0;B = od(d | 0, c | 0, k | 0, l | 0) | 0;z = r() | 0;L = vd(N | 0, M | 0, 56) | 0;L = nd(A | 0, K | 0, L | 0, r() | 0) | 0;K = r() | 0;A = vd(L | 0, K | 0, 56) | 0;J = nd(A | 0, r() | 0, I | 0, J | 0) | 0;I = r() | 0;A = vd(J | 0, I | 0, 56) | 0;H = nd(A | 0, r() | 0, y | 0, H | 0) | 0;y = r() | 0;A = vd(H | 0, y | 0, 56) | 0;z = nd(A | 0, r() | 0, B | 0, z | 0) | 0;B = r() | 0;A = wd(z | 0, B | 0, 63) | 0;r() | 0;A = 0 - (A ^ 1) | 0;C = ((A | 0) < 0) << 31 >> 31;q = (N ^ q) & A ^ q;o = (M & 16777215 ^ o) & C ^ o;j = (L ^ j) & A ^ j;i = (K & 16777215 ^ i) & C ^ i;h = (J ^ h) & A ^ h;g = (I & 16777215 ^ g) & C ^ g;f = (H ^ f) & A ^ f;e = (y & 16777215 ^ e) & C ^ e;d = (z ^ d) & A ^ d;c = (B ^ c) & C ^ c;if ((x | 0) <= 1) break;else x = x + -1 | 0;
        }N = a;b[N >> 2] = q;b[N + 4 >> 2] = o;N = D;b[N >> 2] = j;b[N + 4 >> 2] = i;N = E;b[N >> 2] = h;b[N + 4 >> 2] = g;N = F;b[N >> 2] = f;b[N + 4 >> 2] = e;N = G;b[N >> 2] = d;b[N + 4 >> 2] = c;return;
      }function Ia(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = 0,
            K = 0,
            L = 0,
            M = 0,
            N = 0,
            O = 0,
            P = 0,
            Q = 0,
            R = 0,
            S = 0,
            T = 0,
            U = 0,
            V = 0,
            W = 0,
            X = 0,
            Y = 0,
            Z = 0,
            _ = 0,
            $ = 0,
            aa = 0,
            ba = 0,
            ca = 0,
            da = 0,
            ea = 0,
            fa = 0,
            ga = 0,
            ha = 0,
            ia = 0,
            ja = 0,
            ka = 0,
            la = 0,
            ma = 0,
            na = 0,
            oa = 0,
            pa = 0,
            qa = 0,
            ra = 0,
            sa = 0,
            ta = 0,
            ua = 0,
            va = 0,
            wa = 0,
            xa = 0,
            ya = 0,
            za = 0,
            Aa = 0,
            Ba = 0,
            Ca = 0,
            Da = 0,
            Ea = 0,
            Fa = 0,
            Ga = 0,
            Ha = 0;Ga = x;x = x + 80 | 0;Aa = Ga;e = c;da = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;ea = e & 16777215;fa = c;b[fa >> 2] = da;b[fa + 4 >> 2] = ea;e = vd(da | 0, e | 0, 56) | 0;fa = r() | 0;wa = c + 8 | 0;ga = wa;fa = nd(b[ga >> 2] | 0, b[ga + 4 >> 2] | 0, e | 0, fa | 0) | 0;e = r() | 0;ga = e & 16777215;ha = wa;b[ha >> 2] = fa;b[ha + 4 >> 2] = ga;e = vd(fa | 0, e | 0, 56) | 0;ha = r() | 0;Ba = c + 16 | 0;ia = Ba;ha = nd(b[ia >> 2] | 0, b[ia + 4 >> 2] | 0, e | 0, ha | 0) | 0;e = r() | 0;ia = e & 16777215;t = Ba;b[t >> 2] = ha;b[t + 4 >> 2] = ia;e = vd(ha | 0, e | 0, 56) | 0;t = r() | 0;Ca = c + 24 | 0;ja = Ca;t = nd(b[ja >> 2] | 0, b[ja + 4 >> 2] | 0, e | 0, t | 0) | 0;e = r() | 0;ja = e & 16777215;ka = Ca;b[ka >> 2] = t;b[ka + 4 >> 2] = ja;e = vd(t | 0, e | 0, 56) | 0;ka = r() | 0;Da = c + 32 | 0;la = Da;ka = nd(b[la >> 2] | 0, b[la + 4 >> 2] | 0, e | 0, ka | 0) | 0;e = r() | 0;la = e & 16777215;ma = Da;b[ma >> 2] = ka;b[ma + 4 >> 2] = la;e = vd(ka | 0, e | 0, 56) | 0;ma = r() | 0;Ea = c + 40 | 0;n = Ea;ma = nd(b[n >> 2] | 0, b[n + 4 >> 2] | 0, e | 0, ma | 0) | 0;e = r() | 0;n = e & 16777215;m = Ea;b[m >> 2] = ma;b[m + 4 >> 2] = n;e = vd(ma | 0, e | 0, 56) | 0;m = r() | 0;Fa = c + 48 | 0;l = Fa;m = nd(b[l >> 2] | 0, b[l + 4 >> 2] | 0, e | 0, m | 0) | 0;e = r() | 0;l = e & 16777215;f = Fa;b[f >> 2] = m;b[f + 4 >> 2] = l;f = vd(m | 0, e | 0, 56) | 0;k = r() | 0;ta = c + 56 | 0;j = ta;k = nd(b[j >> 2] | 0, b[j + 4 >> 2] | 0, f | 0, k | 0) | 0;f = r() | 0;j = f & 16777215;oa = ta;b[oa >> 2] = k;b[oa + 4 >> 2] = j;oa = vd(k | 0, f | 0, 56) | 0;i = r() | 0;ua = c + 64 | 0;h = ua;i = nd(b[h >> 2] | 0, b[h + 4 >> 2] | 0, oa | 0, i | 0) | 0;oa = r() | 0;h = oa & 16777215;na = ua;b[na >> 2] = i;b[na + 4 >> 2] = h;oa = vd(i | 0, oa | 0, 56) | 0;na = r() | 0;va = c + 72 | 0;D = va;na = nd(b[D >> 2] | 0, b[D + 4 >> 2] | 0, oa | 0, na | 0) | 0;oa = r() | 0;D = va;b[D >> 2] = na;b[D + 4 >> 2] = oa;D = d;B = b[D >> 2] | 0;D = b[D + 4 >> 2] | 0;A = Aa;b[A >> 2] = B;b[A + 4 >> 2] = D;A = d + 8 | 0;z = b[A >> 2] | 0;A = b[A + 4 >> 2] | 0;xa = Aa + 8 | 0;y = xa;b[y >> 2] = z;b[y + 4 >> 2] = A;y = d + 16 | 0;w = b[y >> 2] | 0;y = b[y + 4 >> 2] | 0;ya = Aa + 16 | 0;v = ya;b[v >> 2] = w;b[v + 4 >> 2] = y;v = d + 24 | 0;u = b[v >> 2] | 0;v = b[v + 4 >> 2] | 0;za = Aa + 24 | 0;o = za;b[o >> 2] = u;b[o + 4 >> 2] = v;o = d + 32 | 0;q = b[o >> 2] | 0;o = b[o + 4 >> 2] | 0;s = o & 16777215;pa = Aa + 32 | 0;p = pa;b[p >> 2] = q;b[p + 4 >> 2] = s;o = vd(q | 0, o | 0, 56) | 0;p = r() | 0;qa = Aa + 40 | 0;sa = qa;b[sa >> 2] = o;b[sa + 4 >> 2] = p;sa = Aa + 48 | 0;b[sa >> 2] = 0;b[sa + 4 >> 2] = 0;b[sa + 8 >> 2] = 0;b[sa + 12 >> 2] = 0;b[sa + 16 >> 2] = 0;b[sa + 20 >> 2] = 0;b[sa + 24 >> 2] = 0;b[sa + 28 >> 2] = 0;ra = Aa + 72 | 0;if ((na | 0) == 0 & (oa | 0) == 0) {
          d = Aa + 64 | 0;if ((i | 0) == 0 & (h | 0) == 0 ? (g = Aa + 56 | 0, (k | m | 0) == 0 & ((f | e) & 16777215 | 0) == 0) : 0) {
            if ((ma | 0) == (o | 0) & (n | 0) == (p | 0)) {
              if ((ka | 0) == (q | 0) & (la | 0) == (s | 0)) {
                if ((t | 0) == (u | 0) & (ja | 0) == (v | 0)) {
                  if ((ha | 0) == (w | 0) & (ia | 0) == (y | 0)) {
                    if ((fa | 0) == (z | 0) & (ga | 0) == (A | 0)) {
                      if (!((da | 0) == (B | 0) & (ea | 0) == (D | 0))) {
                        d = ea;e = D;f = da;g = B;ba = 3;
                      }
                    } else {
                      d = ga;e = A;f = fa;g = z;ba = 3;
                    }
                  } else {
                    d = ia;e = y;f = ha;g = w;ba = 3;
                  }
                } else {
                  d = ja;e = v;f = t;g = u;ba = 3;
                }
              } else {
                d = la;e = s;f = ka;g = q;ba = 3;
              }
            } else {
              d = n;e = p;f = ma;g = o;ba = 3;
            }
          } else ba = 4;
        } else {
          d = oa;e = 0;f = na;g = 0;ba = 3;
        }if ((ba | 0) == 3) if ((d | 0) > (e | 0) | (d | 0) == (e | 0) & f >>> 0 > g >>> 0) ba = 4;else {
          Fa = da;za = ea;Aa = a;Ea = Aa;b[Ea >> 2] = Fa;Aa = Aa + 4 | 0;b[Aa >> 2] = za;Aa = wa;za = Aa;za = b[za >> 2] | 0;Aa = Aa + 4 | 0;Aa = b[Aa >> 2] | 0;Ea = a + 8 | 0;Fa = Ea;b[Fa >> 2] = za;Ea = Ea + 4 | 0;b[Ea >> 2] = Aa;Ea = Ba;Aa = Ea;Aa = b[Aa >> 2] | 0;Ea = Ea + 4 | 0;Ea = b[Ea >> 2] | 0;Ba = a + 16 | 0;Fa = Ba;b[Fa >> 2] = Aa;Ba = Ba + 4 | 0;b[Ba >> 2] = Ea;Ba = Ca;Ba = b[Ba >> 2] | 0;Ca = Ca + 4 | 0;Ca = b[Ca >> 2] | 0;Ea = a + 24 | 0;Fa = Ea;b[Fa >> 2] = Ba;Ea = Ea + 4 | 0;b[Ea >> 2] = Ca;Ea = Da;Ca = Ea;Ca = b[Ca >> 2] | 0;Ea = Ea + 4 | 0;Ea = b[Ea >> 2] | 0;Fa = a + 32 | 0;Da = Fa;b[Da >> 2] = Ca;Fa = Fa + 4 | 0;b[Fa >> 2] = Ea;x = Ga;return;
        }if ((ba | 0) == 4) {
          g = Aa + 56 | 0;d = Aa + 64 | 0;
        }V = 0;ca = 0;C = 0;f = 0;G = 0;E = 0;F = 0;L = 0;H = 0;e = A;while (1) {
          aa = xd(ca | 0, C | 0, 1) | 0;T = r() | 0;$ = vd(f | 0, G | 0, 55) | 0;ca = $ | aa;C = r() | 0 | T;T = xd(f | 0, G | 0, 1) | 0;aa = (r() | 0) & 16777215;$ = vd(E | 0, F | 0, 55) | 0;$ = T & -2 | $;aa = aa | (r() | 0);T = xd(E | 0, F | 0, 1) | 0;_ = (r() | 0) & 16777215;I = vd(L | 0, H | 0, 55) | 0;I = T & -2 | I;_ = _ | (r() | 0);T = xd(L | 0, H | 0, 1) | 0;J = (r() | 0) & 16777215;K = vd(o | 0, p | 0, 55) | 0;K = T & -2 | K;J = J | (r() | 0);T = xd(o | 0, p | 0, 1) | 0;Z = (r() | 0) & 16777215;M = vd(q | 0, s | 0, 55) | 0;M = T & -2 | M;Z = Z | (r() | 0);T = xd(q | 0, s | 0, 1) | 0;N = (r() | 0) & 16777215;O = vd(u | 0, v | 0, 55) | 0;O = T & -2 | O;N = N | (r() | 0);T = xd(u | 0, v | 0, 1) | 0;P = (r() | 0) & 16777215;Q = vd(w | 0, y | 0, 55) | 0;Q = T & -2 | Q;P = P | (r() | 0);T = xd(w | 0, y | 0, 1) | 0;Y = (r() | 0) & 16777215;X = vd(z | 0, e | 0, 55) | 0;X = T & -2 | X;Y = Y | (r() | 0);T = xd(z | 0, e | 0, 1) | 0;W = (r() | 0) & 16777215;U = vd(B | 0, D | 0, 55) | 0;U = T & -2 | U;W = W | (r() | 0);T = xd(B | 0, D | 0, 1) | 0;B = T & -2;D = (r() | 0) & 16777215;V = V + 1 | 0;if ((na | 0) == (ca | 0) & (oa | 0) == (C | 0)) {
            if ((i | 0) == ($ | 0) & (h | 0) == (aa | 0)) {
              if ((k | 0) == (I | 0) & (j | 0) == (_ | 0)) {
                if ((m | 0) == (K | 0) & (l | 0) == (J | 0)) {
                  if ((ma | 0) == (M | 0) & (n | 0) == (Z | 0)) {
                    if ((ka | 0) == (O | 0) & (la | 0) == (N | 0)) {
                      if ((t | 0) == (Q | 0) & (ja | 0) == (P | 0)) {
                        if ((ha | 0) == (X | 0) & (ia | 0) == (Y | 0)) {
                          if ((fa | 0) == (U | 0) & (ga | 0) == (W | 0)) {
                            if ((da | 0) == (B | 0) & (ea | 0) == (D | 0)) {
                              G = 0;z = fa;e = ga;w = ha;y = ia;u = t;v = ja;q = ka;s = la;o = ma;p = n;L = m;H = l;E = k;F = j;f = i;A = h;
                            } else {
                              E = ea;F = D;G = da;H = B;z = fa;e = ga;w = ha;y = ia;u = t;v = ja;q = ka;s = la;o = ma;p = n;L = m;R = l;S = k;T = j;f = i;A = h;ba = 15;
                            }
                          } else {
                            E = ga;F = W;G = fa;H = U;z = U;e = W;w = ha;y = ia;u = t;v = ja;q = ka;s = la;o = ma;p = n;L = m;R = l;S = k;T = j;f = i;A = h;ba = 15;
                          }
                        } else {
                          E = ia;F = Y;G = ha;H = X;z = U;e = W;w = X;y = Y;u = t;v = ja;q = ka;s = la;o = ma;p = n;L = m;R = l;S = k;T = j;f = i;A = h;ba = 15;
                        }
                      } else {
                        E = ja;F = P;G = t;H = Q;z = U;e = W;w = X;y = Y;u = Q;v = P;q = ka;s = la;o = ma;p = n;L = m;R = l;S = k;T = j;f = i;A = h;ba = 15;
                      }
                    } else {
                      E = la;F = N;G = ka;H = O;z = U;e = W;w = X;y = Y;u = Q;v = P;q = O;s = N;o = ma;p = n;L = m;R = l;S = k;T = j;f = i;A = h;ba = 15;
                    }
                  } else {
                    E = n;F = Z;G = ma;H = M;z = U;e = W;w = X;y = Y;u = Q;v = P;q = O;s = N;o = M;p = Z;L = m;R = l;S = k;T = j;f = i;A = h;ba = 15;
                  }
                } else {
                  E = l;F = J;G = m;H = K;z = U;e = W;w = X;y = Y;u = Q;v = P;q = O;s = N;o = M;p = Z;L = K;R = J;S = k;T = j;f = i;A = h;ba = 15;
                }
              } else {
                E = j;F = _;G = k;H = I;z = U;e = W;w = X;y = Y;u = Q;v = P;q = O;s = N;o = M;p = Z;L = K;R = J;S = I;T = _;f = i;A = h;ba = 15;
              }
            } else {
              E = h;F = aa;G = i;H = $;z = U;e = W;w = X;y = Y;u = Q;v = P;q = O;s = N;o = M;p = Z;L = K;R = J;S = I;T = _;f = $;A = aa;ba = 15;
            }
          } else {
            E = oa;F = C;G = na;H = ca;z = U;e = W;w = X;y = Y;u = Q;v = P;q = O;s = N;o = M;p = Z;L = K;R = J;S = I;T = _;f = $;A = aa;ba = 15;
          }if ((ba | 0) == 15) {
            ba = 0;G = (E | 0) > (F | 0) | (E | 0) == (F | 0) & G >>> 0 > H >>> 0 ? 1 : -1;H = R;E = S;F = T;
          }if ((G | 0) <= -1) break;else G = A;
        }T = ra;b[T >> 2] = ca;b[T + 4 >> 2] = C;T = d;b[T >> 2] = $;b[T + 4 >> 2] = aa;T = g;b[T >> 2] = I;b[T + 4 >> 2] = _;T = sa;b[T >> 2] = K;b[T + 4 >> 2] = J;T = qa;b[T >> 2] = M;b[T + 4 >> 2] = Z;T = pa;b[T >> 2] = O;b[T + 4 >> 2] = N;T = za;b[T >> 2] = Q;b[T + 4 >> 2] = P;T = ya;b[T >> 2] = X;b[T + 4 >> 2] = Y;T = xa;b[T >> 2] = U;b[T + 4 >> 2] = W;T = Aa;b[T >> 2] = B;b[T + 4 >> 2] = D;T = W;S = X;R = Y;L = Z;H = _;G = $;F = aa;E = ca;A = da;z = ea;y = fa;w = ga;v = ha;u = ia;s = ja;q = ka;p = la;o = ma;f = na;e = oa;while (1) {
          B = vd(B | 0, D | 0, 1) | 0;Ha = r() | 0;xd(U | 0, T | 0, 55) | 0;D = (r() | 0) & 8388608 | Ha;U = vd(U | 0, T | 0, 1) | 0;Ha = r() | 0;xd(S | 0, R | 0, 55) | 0;T = (r() | 0) & 8388608 | Ha;S = vd(S | 0, R | 0, 1) | 0;Ha = r() | 0;xd(Q | 0, P | 0, 55) | 0;R = (r() | 0) & 8388608 | Ha;Q = vd(Q | 0, P | 0, 1) | 0;Ha = r() | 0;xd(O | 0, N | 0, 55) | 0;P = (r() | 0) & 8388608 | Ha;O = vd(O | 0, N | 0, 1) | 0;Ha = r() | 0;xd(M | 0, L | 0, 55) | 0;N = (r() | 0) & 8388608 | Ha;M = vd(M | 0, L | 0, 1) | 0;Ha = r() | 0;xd(K | 0, J | 0, 55) | 0;L = (r() | 0) & 8388608 | Ha;K = vd(K | 0, J | 0, 1) | 0;Ha = r() | 0;xd(I | 0, H | 0, 55) | 0;J = (r() | 0) & 8388608 | Ha;I = vd(I | 0, H | 0, 1) | 0;Ha = r() | 0;xd(G | 0, F | 0, 55) | 0;H = (r() | 0) & 8388608 | Ha;G = vd(G | 0, F | 0, 1) | 0;Ha = r() | 0;xd(E | 0, C | 0, 55) | 0;F = (r() | 0) & 8388608 | Ha;E = vd(E | 0, C | 0, 1) | 0;C = r() | 0;Ha = od(A | 0, z | 0, B | 0, D | 0) | 0;W = r() | 0;Z = od(y | 0, w | 0, U | 0, T | 0) | 0;Y = r() | 0;$ = od(v | 0, u | 0, S | 0, R | 0) | 0;_ = r() | 0;ba = od(t | 0, s | 0, Q | 0, P | 0) | 0;aa = r() | 0;da = od(q | 0, p | 0, O | 0, N | 0) | 0;ca = r() | 0;fa = od(o | 0, n | 0, M | 0, L | 0) | 0;ea = r() | 0;ha = od(m | 0, l | 0, K | 0, J | 0) | 0;ga = r() | 0;ja = od(k | 0, j | 0, I | 0, H | 0) | 0;ia = r() | 0;ma = od(i | 0, h | 0, G | 0, F | 0) | 0;ka = r() | 0;na = od(f | 0, e | 0, E | 0, C | 0) | 0;la = r() | 0;X = vd(Ha | 0, W | 0, 56) | 0;X = nd(Z | 0, Y | 0, X | 0, r() | 0) | 0;Y = r() | 0;Z = vd(X | 0, Y | 0, 56) | 0;Z = nd($ | 0, _ | 0, Z | 0, r() | 0) | 0;_ = r() | 0;$ = vd(Z | 0, _ | 0, 56) | 0;$ = nd(ba | 0, aa | 0, $ | 0, r() | 0) | 0;aa = r() | 0;ba = vd($ | 0, aa | 0, 56) | 0;ba = nd(da | 0, ca | 0, ba | 0, r() | 0) | 0;ca = r() | 0;da = vd(ba | 0, ca | 0, 56) | 0;da = nd(fa | 0, ea | 0, da | 0, r() | 0) | 0;ea = r() | 0;fa = vd(da | 0, ea | 0, 56) | 0;fa = nd(ha | 0, ga | 0, fa | 0, r() | 0) | 0;ga = r() | 0;ha = vd(fa | 0, ga | 0, 56) | 0;ha = nd(ja | 0, ia | 0, ha | 0, r() | 0) | 0;ia = r() | 0;ja = vd(ha | 0, ia | 0, 56) | 0;ja = nd(ma | 0, ka | 0, ja | 0, r() | 0) | 0;ka = r() | 0;ma = vd(ja | 0, ka | 0, 56) | 0;la = nd(ma | 0, r() | 0, na | 0, la | 0) | 0;na = r() | 0;ma = wd(la | 0, na | 0, 63) | 0;r() | 0;ma = 0 - (ma ^ 1) | 0;oa = ((ma | 0) < 0) << 31 >> 31;A = (Ha ^ A) & ma ^ A;z = (W & 16777215 ^ z) & oa ^ z;y = (X ^ y) & ma ^ y;w = (Y & 16777215 ^ w) & oa ^ w;v = (Z ^ v) & ma ^ v;u = (_ & 16777215 ^ u) & oa ^ u;t = ($ ^ t) & ma ^ t;s = (aa & 16777215 ^ s) & oa ^ s;q = (ba ^ q) & ma ^ q;p = (ca & 16777215 ^ p) & oa ^ p;o = (da ^ o) & ma ^ o;n = (ea & 16777215 ^ n) & oa ^ n;m = (fa ^ m) & ma ^ m;l = (ga & 16777215 ^ l) & oa ^ l;k = (ha ^ k) & ma ^ k;j = (ia & 16777215 ^ j) & oa ^ j;i = (ja ^ i) & ma ^ i;h = (ka & 16777215 ^ h) & oa ^ h;f = (la ^ f) & ma ^ f;e = (na ^ e) & oa ^ e;if ((V | 0) <= 1) break;else V = V + -1 | 0;
        }b[Aa >> 2] = B;b[Aa + 4 >> 2] = D;Aa = xa;b[Aa >> 2] = U;b[Aa + 4 >> 2] = T;Aa = ya;b[Aa >> 2] = S;b[Aa + 4 >> 2] = R;Aa = za;b[Aa >> 2] = Q;b[Aa + 4 >> 2] = P;Aa = pa;b[Aa >> 2] = O;b[Aa + 4 >> 2] = N;Aa = qa;b[Aa >> 2] = M;b[Aa + 4 >> 2] = L;Aa = sa;b[Aa >> 2] = K;b[Aa + 4 >> 2] = J;Aa = g;b[Aa >> 2] = I;b[Aa + 4 >> 2] = H;Aa = d;b[Aa >> 2] = G;b[Aa + 4 >> 2] = F;Aa = ra;b[Aa >> 2] = E;b[Aa + 4 >> 2] = C;Aa = c;b[Aa >> 2] = A;b[Aa + 4 >> 2] = z;Aa = wa;b[Aa >> 2] = y;b[Aa + 4 >> 2] = w;Aa = Ba;b[Aa >> 2] = v;b[Aa + 4 >> 2] = u;Aa = Ca;b[Aa >> 2] = t;b[Aa + 4 >> 2] = s;Aa = Da;b[Aa >> 2] = q;b[Aa + 4 >> 2] = p;b[Ea >> 2] = o;b[Ea + 4 >> 2] = n;Ea = Fa;b[Ea >> 2] = m;b[Ea + 4 >> 2] = l;Ea = ta;b[Ea >> 2] = k;b[Ea + 4 >> 2] = j;Ea = ua;b[Ea >> 2] = i;b[Ea + 4 >> 2] = h;Ea = va;b[Ea >> 2] = f;b[Ea + 4 >> 2] = e;Ea = A;Aa = z;Ha = a;Fa = Ha;b[Fa >> 2] = Ea;Ha = Ha + 4 | 0;b[Ha >> 2] = Aa;Ha = wa;Aa = Ha;Aa = b[Aa >> 2] | 0;Ha = Ha + 4 | 0;Ha = b[Ha >> 2] | 0;Fa = a + 8 | 0;Ea = Fa;b[Ea >> 2] = Aa;Fa = Fa + 4 | 0;b[Fa >> 2] = Ha;Fa = Ba;Ba = Fa;Ba = b[Ba >> 2] | 0;Fa = Fa + 4 | 0;Fa = b[Fa >> 2] | 0;Ha = a + 16 | 0;Ea = Ha;b[Ea >> 2] = Ba;Ha = Ha + 4 | 0;b[Ha >> 2] = Fa;Ha = Ca;Ca = Ha;Ca = b[Ca >> 2] | 0;Ha = Ha + 4 | 0;Ha = b[Ha >> 2] | 0;Fa = a + 24 | 0;Ea = Fa;b[Ea >> 2] = Ca;Fa = Fa + 4 | 0;b[Fa >> 2] = Ha;Fa = Da;Da = Fa;Da = b[Da >> 2] | 0;Fa = Fa + 4 | 0;Fa = b[Fa >> 2] | 0;Ha = a + 32 | 0;Ea = Ha;b[Ea >> 2] = Da;Ha = Ha + 4 | 0;b[Ha >> 2] = Fa;x = Ga;return;
      }function Ja(a) {
        a = a | 0;a = ud(b[a >> 2] | 0, b[a + 4 >> 2] | 0, 2, 0) | 0;r() | 0;return a | 0;
      }function Ka(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0;e = (c | 0) / 56 | 0;a = a + (e << 3) | 0;d = b[a >> 2] | 0;a = b[a + 4 >> 2] | 0;c = xd(1, 0, c - (e * 56 | 0) | 0) | 0;return ((d & c | 0) != 0 | (a & (r() | 0) | 0) != 0) & 1 | 0;
      }function La(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;e = a;d = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;f = a;b[f >> 2] = d;b[f + 4 >> 2] = e & 16777215;e = vd(d | 0, e | 0, 56) | 0;f = r() | 0;g = a + 8 | 0;h = g;f = nd(b[h >> 2] | 0, b[h + 4 >> 2] | 0, e | 0, f | 0) | 0;e = r() | 0;b[g >> 2] = f;b[g + 4 >> 2] = e & 16777215;e = vd(f | 0, e | 0, 56) | 0;f = r() | 0;g = a + 16 | 0;h = g;f = nd(b[h >> 2] | 0, b[h + 4 >> 2] | 0, e | 0, f | 0) | 0;e = r() | 0;b[g >> 2] = f;b[g + 4 >> 2] = e & 16777215;e = vd(f | 0, e | 0, 56) | 0;f = r() | 0;g = a + 24 | 0;h = g;f = nd(b[h >> 2] | 0, b[h + 4 >> 2] | 0, e | 0, f | 0) | 0;e = r() | 0;b[g >> 2] = f;b[g + 4 >> 2] = e & 16777215;e = vd(f | 0, e | 0, 56) | 0;f = r() | 0;a = a + 32 | 0;g = a;f = nd(b[g >> 2] | 0, b[g + 4 >> 2] | 0, e | 0, f | 0) | 0;e = r() | 0;b[a >> 2] = f;b[a + 4 >> 2] = e;return (1 << c) + -1 & d | 0;
      }function Ma(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = 0,
            K = 0,
            L = 0,
            M = 0,
            N = 0,
            O = 0,
            P = 0,
            Q = 0,
            R = 0,
            S = 0,
            T = 0,
            U = 0,
            V = 0,
            W = 0,
            X = 0,
            Y = 0,
            Z = 0,
            _ = 0,
            $ = 0,
            aa = 0,
            ba = 0,
            ca = 0,
            da = 0,
            ea = 0,
            fa = 0,
            ga = 0,
            ha = 0,
            ia = 0,
            ja = 0,
            ka = 0,
            la = 0;ba = x;x = x + 80 | 0;$ = ba;e = $;f = e + 80 | 0;do {
          b[e >> 2] = 0;e = e + 4 | 0;
        } while ((e | 0) < (f | 0));U = c + 8 | 0;V = c + 16 | 0;W = c + 24 | 0;X = c + 32 | 0;Y = $ + 72 | 0;Z = $ + 64 | 0;t = $ + 56 | 0;y = $ + 48 | 0;B = $ + 40 | 0;C = $ + 32 | 0;F = $ + 24 | 0;I = $ + 16 | 0;K = $ + 8 | 0;e = 0;q = 0;s = 0;u = 0;v = 0;w = 0;z = 0;A = 0;D = 0;E = 0;G = 0;H = 0;J = 0;L = 0;M = 0;N = 0;O = 0;P = 0;Q = 0;R = 0;S = 0;T = 0;_ = 0;while (1) {
          i = c;h = b[i >> 2] | 0;i = b[i + 4 >> 2] | 0;n = U;m = b[n >> 2] | 0;n = b[n + 4 >> 2] | 0;j = V;o = b[j >> 2] | 0;j = b[j + 4 >> 2] | 0;k = W;f = b[k >> 2] | 0;k = b[k + 4 >> 2] | 0;l = X;p = b[l >> 2] | 0;l = b[l + 4 >> 2] | 0;g = i & 16777215;i = vd(h | 0, i | 0, 56) | 0;i = nd(m | 0, n | 0, i | 0, r() | 0) | 0;n = r() | 0;m = n & 16777215;n = vd(i | 0, n | 0, 56) | 0;j = nd(n | 0, r() | 0, o | 0, j | 0) | 0;o = r() | 0;n = o & 16777215;o = vd(j | 0, o | 0, 56) | 0;k = nd(o | 0, r() | 0, f | 0, k | 0) | 0;f = r() | 0;o = f & 16777215;f = vd(k | 0, f | 0, 56) | 0;l = nd(f | 0, r() | 0, p | 0, l | 0) | 0;p = r() | 0;if ((l | 0) == 0 & (p | 0) == 0) {
            if ((k | 0) == 0 & (o | 0) == 0) {
              if ((j | 0) == 0 & (n | 0) == 0) {
                if ((i | 0) == 0 & (m | 0) == 0) {
                  if ((h | 0) == 0 & (g | 0) == 0) f = 0;else {
                    f = 0;aa = 4;
                  }
                } else {
                  f = 56;h = i;g = m;aa = 4;
                }
              } else {
                f = 112;h = j;g = n;aa = 4;
              }
            } else {
              f = 168;h = k;g = o;aa = 4;
            }
          } else {
            f = 224;h = l;g = p;aa = 4;
          }if ((aa | 0) == 4) {
            aa = 0;do {
              o = h;h = rd(h | 0, g | 0, 2, 0) | 0;p = g;g = r() | 0;f = f + 1 | 0;p = nd(o | 0, p | 0, 1, 0) | 0;o = r() | 0;
            } while (!(o >>> 0 < 0 | (o | 0) == 0 & p >>> 0 < 3));
          }if ((s | 0) >= (f << 1 | 0)) break;if (!q) e = Xc(d) | 0;else e = e >> 1;p = xd(_ | 0, u | 0, 1) | 0;ka = r() | 0;n = vd(v | 0, w | 0, 55) | 0;p = n | p;ka = r() | 0 | ka;n = Y;b[n >> 2] = p;b[n + 4 >> 2] = ka;n = xd(v | 0, w | 0, 1) | 0;ia = (r() | 0) & 16777215;ja = vd(z | 0, A | 0, 55) | 0;ja = n & -2 | ja;ia = ia | (r() | 0);n = Z;b[n >> 2] = ja;b[n + 4 >> 2] = ia;n = xd(z | 0, A | 0, 1) | 0;ga = (r() | 0) & 16777215;ha = vd(D | 0, E | 0, 55) | 0;ha = n & -2 | ha;ga = ga | (r() | 0);n = t;b[n >> 2] = ha;b[n + 4 >> 2] = ga;n = xd(D | 0, E | 0, 1) | 0;ea = (r() | 0) & 16777215;fa = vd(G | 0, H | 0, 55) | 0;fa = n & -2 | fa;ea = ea | (r() | 0);n = y;b[n >> 2] = fa;b[n + 4 >> 2] = ea;n = xd(G | 0, H | 0, 1) | 0;ca = (r() | 0) & 16777215;da = vd(J | 0, L | 0, 55) | 0;da = n & -2 | da;ca = ca | (r() | 0);n = B;b[n >> 2] = da;b[n + 4 >> 2] = ca;n = xd(J | 0, L | 0, 1) | 0;g = (r() | 0) & 16777215;f = vd(M | 0, N | 0, 55) | 0;f = n & -2 | f;g = g | (r() | 0);n = C;b[n >> 2] = f;b[n + 4 >> 2] = g;n = xd(M | 0, N | 0, 1) | 0;i = (r() | 0) & 16777215;h = vd(O | 0, P | 0, 55) | 0;h = n & -2 | h;i = i | (r() | 0);n = F;b[n >> 2] = h;b[n + 4 >> 2] = i;n = xd(O | 0, P | 0, 1) | 0;k = (r() | 0) & 16777215;j = vd(Q | 0, R | 0, 55) | 0;j = n & -2 | j;k = k | (r() | 0);n = I;b[n >> 2] = j;b[n + 4 >> 2] = k;n = xd(Q | 0, R | 0, 1) | 0;m = (r() | 0) & 16777215;l = vd(S | 0, T | 0, 55) | 0;l = n & -2 | l;m = m | (r() | 0);n = K;b[n >> 2] = l;b[n + 4 >> 2] = m;n = xd(S | 0, T | 0, 1) | 0;o = (r() | 0) & 16777215;n = n & -2 | e & 1;la = $;b[la >> 2] = n;b[la + 4 >> 2] = o;q = q + 1 & 7;s = s + 1 | 0;u = ka;v = ja;w = ia;z = ha;A = ga;D = fa;E = ea;G = da;H = ca;J = f;L = g;M = h;N = i;O = j;P = k;Q = l;R = m;S = n;T = o;_ = p;
        }Ia(a, $, c);x = ba;return;
      }function Na(a, c, d, e) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;f = x;x = x + 176 | 0;g = f + 96 | 0;i = f + 48 | 0;h = f;k = c;j = b[k + 4 >> 2] | 0;l = i;b[l >> 2] = b[k >> 2];b[l + 4 >> 2] = j;l = c + 8 | 0;j = b[l + 4 >> 2] | 0;k = i + 8 | 0;b[k >> 2] = b[l >> 2];b[k + 4 >> 2] = j;k = c + 16 | 0;j = b[k + 4 >> 2] | 0;l = i + 16 | 0;b[l >> 2] = b[k >> 2];b[l + 4 >> 2] = j;l = c + 24 | 0;j = b[l + 4 >> 2] | 0;k = i + 24 | 0;b[k >> 2] = b[l >> 2];b[k + 4 >> 2] = j;k = c + 32 | 0;c = b[k + 4 >> 2] | 0;j = i + 32 | 0;b[j >> 2] = b[k >> 2];b[j + 4 >> 2] = c;j = d;c = b[j + 4 >> 2] | 0;k = h;b[k >> 2] = b[j >> 2];b[k + 4 >> 2] = c;k = d + 8 | 0;c = b[k + 4 >> 2] | 0;j = h + 8 | 0;b[j >> 2] = b[k >> 2];b[j + 4 >> 2] = c;j = d + 16 | 0;c = b[j + 4 >> 2] | 0;k = h + 16 | 0;b[k >> 2] = b[j >> 2];b[k + 4 >> 2] = c;k = d + 24 | 0;c = b[k + 4 >> 2] | 0;j = h + 24 | 0;b[j >> 2] = b[k >> 2];b[j + 4 >> 2] = c;j = d + 32 | 0;c = b[j + 4 >> 2] | 0;d = h + 32 | 0;b[d >> 2] = b[j >> 2];b[d + 4 >> 2] = c;Ha(i, e);Ha(h, e);Ca(g, i, h);Ia(a, g, e);x = f;return;
      }function Oa(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;e = x;x = x + 48 | 0;k = e;j = c;g = b[j + 4 >> 2] | 0;i = k;b[i >> 2] = b[j >> 2];b[i + 4 >> 2] = g;i = c + 8 | 0;g = b[i + 4 >> 2] | 0;j = k + 8 | 0;h = j;b[h >> 2] = b[i >> 2];b[h + 4 >> 2] = g;h = c + 16 | 0;g = b[h + 4 >> 2] | 0;i = k + 16 | 0;f = i;b[f >> 2] = b[h >> 2];b[f + 4 >> 2] = g;f = c + 24 | 0;g = b[f + 4 >> 2] | 0;h = k + 24 | 0;l = h;b[l >> 2] = b[f >> 2];b[l + 4 >> 2] = g;l = c + 32 | 0;g = b[l + 4 >> 2] | 0;f = k + 32 | 0;c = f;b[c >> 2] = b[l >> 2];b[c + 4 >> 2] = g;Ha(k, d);c = d;k = od(b[c >> 2] | 0, b[c + 4 >> 2] | 0, b[k >> 2] | 0, b[k + 4 >> 2] | 0) | 0;c = r() | 0;g = a;b[g >> 2] = k;b[g + 4 >> 2] = c;g = d + 8 | 0;j = od(b[g >> 2] | 0, b[g + 4 >> 2] | 0, b[j >> 2] | 0, b[j + 4 >> 2] | 0) | 0;g = r() | 0;c = a + 8 | 0;b[c >> 2] = j;b[c + 4 >> 2] = g;c = d + 16 | 0;i = od(b[c >> 2] | 0, b[c + 4 >> 2] | 0, b[i >> 2] | 0, b[i + 4 >> 2] | 0) | 0;c = r() | 0;g = a + 16 | 0;b[g >> 2] = i;b[g + 4 >> 2] = c;g = d + 24 | 0;h = od(b[g >> 2] | 0, b[g + 4 >> 2] | 0, b[h >> 2] | 0, b[h + 4 >> 2] | 0) | 0;g = r() | 0;c = a + 24 | 0;b[c >> 2] = h;b[c + 4 >> 2] = g;c = d + 32 | 0;f = od(b[c >> 2] | 0, b[c + 4 >> 2] | 0, b[f >> 2] | 0, b[f + 4 >> 2] | 0) | 0;c = r() | 0;d = a + 32 | 0;b[d >> 2] = f;b[d + 4 >> 2] = c;x = e;return;
      }function Pa(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = 0,
            K = 0,
            L = 0,
            M = 0,
            N = 0,
            O = 0,
            P = 0,
            Q = 0,
            R = 0;R = x;x = x + 96 | 0;O = R + 48 | 0;P = R;f = c;h = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;N = ud(h | 0, f | 0, 2, 0) | 0;r() | 0;if (!N) {
          Q = 0;x = R;return Q | 0;
        }i = a + 32 | 0;k = i;j = b[k >> 2] | 0;k = b[k + 4 >> 2] | 0;if (((((j | 0) == 0 & (k | 0) == 0 ? (N = a + 24 | 0, (b[N >> 2] | 0) == 0 & (b[N + 4 >> 2] | 0) == 0) : 0) ? (N = a + 16 | 0, (b[N >> 2] | 0) == 0 & (b[N + 4 >> 2] | 0) == 0) : 0) ? (N = a + 8 | 0, (b[N >> 2] | 0) == 0 & (b[N + 4 >> 2] | 0) == 0) : 0) ? (N = a, (b[N >> 2] | 0) == 0 & (b[N + 4 >> 2] | 0) == 0) : 0) {
          Q = 0;x = R;return Q | 0;
        }l = c + 32 | 0;d = l;e = b[d >> 2] | 0;d = b[d + 4 >> 2] | 0;if ((e | 0) == 0 & (d | 0) == 0) {
          d = c + 24 | 0;e = b[d >> 2] | 0;d = b[d + 4 >> 2] | 0;if ((e | 0) == 0 & (d | 0) == 0) {
            d = c + 16 | 0;e = b[d >> 2] | 0;d = b[d + 4 >> 2] | 0;if ((e | 0) == 0 & (d | 0) == 0) {
              d = c + 8 | 0;e = b[d >> 2] | 0;d = b[d + 4 >> 2] | 0;if ((e | 0) == 0 & (d | 0) == 0) {
                if ((h | 0) == 1 & (f | 0) == 0) {
                  Q = 0;x = R;return Q | 0;
                } else {
                  d = f;g = 0;e = h;f = 1;
                }
              } else {
                g = 0;f = 0;
              }
            } else {
              g = 0;f = 0;
            }
          } else {
            g = 0;f = 0;
          }
        } else {
          g = 0;f = 0;
        }if (!((d | 0) > (g | 0) | (d | 0) == (g | 0) & e >>> 0 > f >>> 0)) {
          Q = 0;x = R;return Q | 0;
        }h = a;m = b[h >> 2] | 0;h = b[h + 4 >> 2] | 0;L = h & 16777215;o = a;b[o >> 2] = m;b[o + 4 >> 2] = L;h = vd(m | 0, h | 0, 56) | 0;o = r() | 0;D = a + 8 | 0;M = D;o = nd(b[M >> 2] | 0, b[M + 4 >> 2] | 0, h | 0, o | 0) | 0;h = r() | 0;M = h & 16777215;b[D >> 2] = o;b[D + 4 >> 2] = M;h = vd(o | 0, h | 0, 56) | 0;D = r() | 0;E = a + 16 | 0;N = E;D = nd(b[N >> 2] | 0, b[N + 4 >> 2] | 0, h | 0, D | 0) | 0;h = r() | 0;N = h & 16777215;b[E >> 2] = D;b[E + 4 >> 2] = N;h = vd(D | 0, h | 0, 56) | 0;E = r() | 0;J = a + 24 | 0;a = J;E = nd(b[a >> 2] | 0, b[a + 4 >> 2] | 0, h | 0, E | 0) | 0;a = r() | 0;h = a & 16777215;b[J >> 2] = E;b[J + 4 >> 2] = h;a = vd(E | 0, a | 0, 56) | 0;a = nd(a | 0, r() | 0, j | 0, k | 0) | 0;J = r() | 0;K = i;b[K >> 2] = a;b[K + 4 >> 2] = J;K = P;b[K >> 2] = m;b[K + 4 >> 2] = L;K = P + 8 | 0;L = K;b[L >> 2] = o;b[L + 4 >> 2] = M;L = P + 16 | 0;M = L;b[M >> 2] = D;b[M + 4 >> 2] = N;M = P + 24 | 0;N = M;b[N >> 2] = E;b[N + 4 >> 2] = h;N = P + 32 | 0;i = N;b[i >> 2] = a;b[i + 4 >> 2] = J;i = c;J = b[i >> 2] | 0;i = b[i + 4 >> 2] | 0;a = c + 8 | 0;h = b[a >> 2] | 0;a = b[a + 4 >> 2] | 0;k = c + 16 | 0;j = b[k >> 2] | 0;k = b[k + 4 >> 2] | 0;E = c + 24 | 0;D = b[E >> 2] | 0;E = b[E + 4 >> 2] | 0;o = l;m = b[o >> 2] | 0;o = b[o + 4 >> 2] | 0;Ha(P, c);F = O + 8 | 0;G = O + 16 | 0;H = O + 24 | 0;I = O + 32 | 0;w = 0;c = D;l = E;while (1) {
          if ((m | 0) == 0 & (o | 0) == 0) {
            if ((c | 0) == 0 & (l | 0) == 0) {
              if ((j | 0) == 0 & (k | 0) == 0) {
                if ((h | 0) == 0 & (a | 0) == 0) {
                  if ((J | 0) == 1 & (i | 0) == 0) break;else {
                    d = i;e = 0;f = J;g = 1;
                  }
                } else {
                  d = a;e = 0;f = h;g = 0;
                }
              } else {
                d = k;e = 0;f = j;g = 0;
              }
            } else {
              d = l;e = 0;f = c;g = 0;
            }
          } else {
            d = o;e = 0;f = m;g = 0;
          }if (!((d | 0) > (e | 0) | (d | 0) == (e | 0) & f >>> 0 > g >>> 0)) break;d = N;e = b[d >> 2] | 0;d = b[d + 4 >> 2] | 0;f = M;g = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;v = L;u = b[v >> 2] | 0;v = b[v + 4 >> 2] | 0;t = K;s = b[t >> 2] | 0;t = b[t + 4 >> 2] | 0;q = P;p = b[q >> 2] | 0;q = b[q + 4 >> 2] | 0;if ((e | g | u | s | p | 0) == 0 ? (d | f | v | t | q | 0) == 0 : 0) {
            d = 0;Q = 28;break;
          }E = i & 16777215;C = vd(J | 0, i | 0, 56) | 0;C = nd(h | 0, a | 0, C | 0, r() | 0) | 0;A = r() | 0;D = A & 16777215;A = vd(C | 0, A | 0, 56) | 0;A = nd(A | 0, r() | 0, j | 0, k | 0) | 0;y = r() | 0;B = y & 16777215;y = vd(A | 0, y | 0, 56) | 0;y = nd(y | 0, r() | 0, c | 0, l | 0) | 0;l = r() | 0;z = l & 16777215;l = vd(y | 0, l | 0, 56) | 0;l = nd(l | 0, r() | 0, m | 0, o | 0) | 0;m = r() | 0;o = J & 7;c = ud(p | 0, q | 0, 2, 0) | 0;r() | 0;if (!c) {
            j = 0;a = q;k = s;c = t;i = u;h = v;do {
              p = vd(p | 0, a | 0, 1) | 0;v = r() | 0;xd(k | 0, c | 0, 55) | 0;a = (r() | 0) & 8388608 | v;k = vd(k | 0, c | 0, 1) | 0;u = r() | 0;xd(i | 0, h | 0, 55) | 0;c = (r() | 0) & 8388608 | u;i = vd(i | 0, h | 0, 1) | 0;u = r() | 0;xd(g | 0, f | 0, 55) | 0;h = (r() | 0) & 8388608 | u;g = vd(g | 0, f | 0, 1) | 0;u = r() | 0;xd(e | 0, d | 0, 55) | 0;f = (r() | 0) & 8388608 | u;j = j + 1 | 0;e = vd(e | 0, d | 0, 1) | 0;d = r() | 0;v = ud(p | 0, v | 0, 2, 0) | 0;r() | 0;
            } while (!(v | 0));v = P;b[v >> 2] = p;b[v + 4 >> 2] = a;v = K;b[v >> 2] = k;b[v + 4 >> 2] = c;v = L;b[v >> 2] = i;b[v + 4 >> 2] = h;v = M;b[v >> 2] = g;b[v + 4 >> 2] = f;v = N;b[v >> 2] = e;b[v + 4 >> 2] = d;if (!(j & 1)) j = w;else j = w + (((n(o, o) | 0) + -1 | 0) / 8 | 0) | 0;
          } else {
            j = w;a = q;k = s;c = t;i = u;h = v;
          }w = P;b[w >> 2] = p;b[w + 4 >> 2] = a & 16777215;w = vd(p | 0, a | 0, 56) | 0;w = nd(k | 0, c | 0, w | 0, r() | 0) | 0;a = r() | 0;k = K;b[k >> 2] = w;b[k + 4 >> 2] = a & 16777215;a = vd(w | 0, a | 0, 56) | 0;a = nd(i | 0, h | 0, a | 0, r() | 0) | 0;i = r() | 0;w = L;b[w >> 2] = a;b[w + 4 >> 2] = i & 16777215;i = vd(a | 0, i | 0, 56) | 0;i = nd(g | 0, f | 0, i | 0, r() | 0) | 0;a = r() | 0;w = M;b[w >> 2] = i;b[w + 4 >> 2] = a & 16777215;a = vd(i | 0, a | 0, 56) | 0;a = nd(e | 0, d | 0, a | 0, r() | 0) | 0;i = r() | 0;w = N;b[w >> 2] = a;b[w + 4 >> 2] = i;w = j + ((n((p & 3) + -1 | 0, o + -1 | 0) | 0) / 4 | 0) | 0;i = O;b[i >> 2] = J;b[i + 4 >> 2] = E;i = F;b[i >> 2] = C;b[i + 4 >> 2] = D;i = G;b[i >> 2] = A;b[i + 4 >> 2] = B;i = H;b[i >> 2] = y;b[i + 4 >> 2] = z;i = I;b[i >> 2] = l;b[i + 4 >> 2] = m;Ha(O, P);i = P;E = b[i >> 2] | 0;i = b[i + 4 >> 2] | 0;a = K;h = b[a >> 2] | 0;a = b[a + 4 >> 2] | 0;k = L;j = b[k >> 2] | 0;k = b[k + 4 >> 2] | 0;l = M;c = b[l >> 2] | 0;l = b[l + 4 >> 2] | 0;o = N;m = b[o >> 2] | 0;o = b[o + 4 >> 2] | 0;B = O;C = b[B + 4 >> 2] | 0;D = P;b[D >> 2] = b[B >> 2];b[D + 4 >> 2] = C;D = F;C = b[D + 4 >> 2] | 0;B = K;b[B >> 2] = b[D >> 2];b[B + 4 >> 2] = C;B = G;C = b[B + 4 >> 2] | 0;D = L;b[D >> 2] = b[B >> 2];b[D + 4 >> 2] = C;D = H;C = b[D + 4 >> 2] | 0;B = M;b[B >> 2] = b[D >> 2];b[B + 4 >> 2] = C;B = I;C = b[B + 4 >> 2] | 0;D = N;b[D >> 2] = b[B >> 2];b[D + 4 >> 2] = C;w = (w | 0) % 2 | 0;J = E;
        }if ((Q | 0) == 28) {
          x = R;return d | 0;
        }Q = (w | 0) == 0 ? 1 : -1;x = R;return Q | 0;
      }function Qa(a, b) {
        a = a | 0;b = b | 0;Lb(a, b);Lb(a + 96 | 0, b + 96 | 0);Lb(a + 192 | 0, b + 192 | 0);return;
      }function Ra(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;g = x;x = x + 192 | 0;c = g + 96 | 0;d = g;e = b + 192 | 0;Vb(c, a, e);f = a + 192 | 0;Vb(d, b, f);if (!(Ib(c, d) | 0)) {
          f = 0;x = g;return f | 0;
        }Vb(c, a + 96 | 0, e);Vb(d, b + 96 | 0, f);f = (Ib(c, d) | 0) != 0 & 1;x = g;return f | 0;
      }function Sa(a) {
        a = a | 0;var b = 0,
            c = 0,
            d = 0,
            e = 0,
            f = 0;e = x;x = x + 192 | 0;b = e + 96 | 0;c = e;f = Eb(a) | 0;d = a + 192 | 0;if ((Eb(d) | 0) & f | 0) {
          x = e;return;
        }Nb(b);if (!(Gb(d) | 0)) {
          Wb(c, d);Vb(a, a, c);f = a + 96 | 0;Vb(f, f, c);Hb(a);Hb(f);Lb(d, b);x = e;return;
        } else {
          Hb(a);Hb(a + 96 | 0);x = e;return;
        }
      }function Ta(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0;f = x;x = x + 288 | 0;d = f;Lb(d, c);e = d + 96 | 0;Lb(e, c + 96 | 0);g = d + 192 | 0;Lb(g, c + 192 | 0);Sa(d);c = Eb(d) | 0;if ((Eb(g) | 0) & c | 0) {
          g = -1;x = f;return g | 0;
        }Lb(b, e);Lb(a, d);g = 0;x = f;return g | 0;
      }function Ua(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0;d = x;x = x + 240 | 0;e = d;g = d + 136 | 0;f = d + 40 | 0;Ta(g, f, c) | 0;uc(e, g);c = a + 8 | 0;ja(b[c >> 2] | 0, e);uc(e, g + 48 | 0);ja((b[c >> 2] | 0) + 32 | 0, e);uc(e, f);ja((b[c >> 2] | 0) + 64 | 0, e);uc(e, f + 48 | 0);ja((b[c >> 2] | 0) + 96 | 0, e);b[a >> 2] = 128;x = d;return;
      }function Va(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0;d = x;x = x + 240 | 0;g = d;f = d + 136 | 0;e = d + 40 | 0;c = c + 8 | 0;ma(g, b[c >> 2] | 0);sc(f, g);ma(g, (b[c >> 2] | 0) + 32 | 0);sc(f + 48 | 0, g);ma(g, (b[c >> 2] | 0) + 64 | 0);sc(e, g);ma(g, (b[c >> 2] | 0) + 96 | 0);sc(e + 48 | 0, g);c = (Wa(a, f, e) | 0) != 0 & 1;x = d;return c | 0;
      }function Wa(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;d = x;x = x + 336 | 0;g = d + 232 | 0;h = d;e = d + 136 | 0;f = d + 40 | 0;Ub(f, c);Ub(g, b);Vb(e, g, b);qa(h, 16);Kb(g, h);_b(g);Qb(e, g, e);Hb(e);if (!(Ib(f, e) | 0)) {
          Mb(a);Nb(a + 96 | 0);Mb(a + 192 | 0);h = 0;x = d;return h | 0;
        } else {
          Lb(a, b);Lb(a + 96 | 0, c);Nb(a + 192 | 0);h = 1;x = d;return h | 0;
        }return 0;
      }function Xa(a) {
        a = a | 0;a = a + 96 | 0;Xb(a);Ob(a, a);Xb(a);return;
      }function Ya(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0;c = x;x = x + 576 | 0;f = c + 480 | 0;e = c + 384 | 0;j = c + 288 | 0;g = c + 192 | 0;h = c + 96 | 0;i = c;d = a + 96 | 0;Lb(g, d);Yb(g);Xb(g);Ub(f, d);Yb(f);k = a + 192 | 0;Vb(e, g, k);Ub(j, k);Qb(k, f, f);Xb(k);Qb(k, k, k);Qb(k, k, k);Xb(k);Tb(j, j, (b[399] | 0) * 3 | 0);Vb(h, j, k);Qb(i, f, j);Xb(i);Vb(k, k, e);Qb(e, j, j);Qb(j, j, e);Xb(j);Rb(f, f, j);Xb(f);Vb(i, i, f);Qb(d, i, h);Vb(e, a, g);Xb(f);Vb(a, f, e);Qb(a, a, a);Xb(a);Xb(d);x = c;return 1;
      }function Za(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0;d = x;x = x + 768 | 0;g = d + 672 | 0;k = d + 576 | 0;n = d + 480 | 0;j = d + 384 | 0;i = d + 288 | 0;m = d + 192 | 0;l = d + 96 | 0;h = d;o = (b[399] | 0) * 3 | 0;Vb(g, a, c);f = a + 96 | 0;q = c + 96 | 0;Vb(k, f, q);e = a + 192 | 0;p = c + 192 | 0;Vb(n, e, p);Qb(j, a, f);Xb(j);Qb(i, c, q);Xb(i);Vb(j, j, i);Qb(i, g, k);Rb(j, j, i);Xb(j);Yb(j);Xb(j);Qb(i, f, e);Xb(i);Qb(m, q, p);Xb(m);Vb(i, i, m);Qb(m, k, n);Rb(i, i, m);Xb(i);Yb(i);Xb(i);Qb(m, a, e);Xb(m);Qb(l, c, p);Xb(l);Vb(m, m, l);Qb(l, g, n);Rb(l, m, l);Xb(l);Yb(g);Xb(g);Yb(k);Xb(k);Qb(m, g, g);Qb(g, g, m);Xb(g);Tb(n, n, o);Qb(h, k, n);Xb(h);Rb(k, k, n);Xb(k);Tb(l, l, o);Vb(m, l, i);Vb(n, j, k);Rb(a, n, m);Vb(l, l, g);Vb(k, k, h);Qb(f, l, k);Vb(g, g, j);Vb(h, h, i);Qb(e, h, g);Xb(a);Xb(f);Xb(e);x = d;return 0;
      }function _a(b, c) {
        b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0;s = x;x = x + 3344 | 0;m = s + 3048 | 0;d = s + 2432 | 0;h = s + 2384 | 0;n = s + 2760 | 0;o = s + 80 | 0;p = s + 2472 | 0;q = s;l = Eb(b) | 0;k = b + 192 | 0;if ((Eb(k) | 0) & l | 0) {
          x = s;return;
        }Lb(n, b);j = n + 96 | 0;l = b + 96 | 0;Lb(j, l);f = n + 192 | 0;Lb(f, k);Ya(n) | 0;Lb(o, b);e = o + 96 | 0;Lb(e, l);g = o + 192 | 0;Lb(g, k);i = o + 288 | 0;Lb(i, o);t = o + 384 | 0;Lb(t, e);e = o + 480 | 0;Lb(e, g);Za(i, n) | 0;i = o + 576 | 0;Lb(i, o + 288 | 0);g = o + 672 | 0;Lb(g, t);t = o + 768 | 0;Lb(t, e);Za(i, n) | 0;i = o + 864 | 0;Lb(i, o + 576 | 0);e = o + 960 | 0;Lb(e, g);g = o + 1056 | 0;Lb(g, t);Za(i, n) | 0;i = o + 1152 | 0;Lb(i, o + 864 | 0);t = o + 1248 | 0;Lb(t, e);e = o + 1344 | 0;Lb(e, g);Za(i, n) | 0;i = o + 1440 | 0;Lb(i, o + 1152 | 0);g = o + 1536 | 0;Lb(g, t);t = o + 1632 | 0;Lb(t, e);Za(i, n) | 0;i = o + 1728 | 0;Lb(i, o + 1440 | 0);e = o + 1824 | 0;Lb(e, g);g = o + 1920 | 0;Lb(g, t);Za(i, n) | 0;i = o + 2016 | 0;Lb(i, o + 1728 | 0);Lb(o + 2112 | 0, e);Lb(o + 2208 | 0, g);Za(i, n) | 0;ha(h, c);c = Ja(h) | 0;wa(h, 1);ka(h) | 0;r() | 0;i = Ja(h) | 0;ha(d, h);wa(d, 1);ka(d) | 0;r() | 0;ia(h, d, c);Fb(n, b, i);Fb(j, l, i);Fb(f, k, i);Lb(p, n);i = p + 96 | 0;Lb(i, j);j = p + 192 | 0;Lb(j, f);f = ga(h) | 0;c = (f + 3 | 0) / 4 | 0;g = c + 1 | 0;d = La(h, 5) | 0;if ((f | 0) >= -6) {
          e = 0;while (1) {
            d = d + 240 | 0;a[q + e >> 0] = d;Aa(h, d << 24 >> 24);ka(h) | 0;r() | 0;la(h, 4) | 0;d = La(h, 5) | 0;if ((e | 0) < (c | 0)) e = e + 1 | 0;else break;
          }
        }a[q + g >> 0] = d;t = ((d << 24 >> 24) + -1 | 0) / 2 | 0;Lb(b, o + (t * 288 | 0) | 0);Lb(l, o + (t * 288 | 0) + 96 | 0);Lb(k, o + (t * 288 | 0) + 192 | 0);if ((f | 0) > -7) while (1) {
          $a(n, o, a[q + c >> 0] | 0);Ya(b) | 0;Ya(b) | 0;Ya(b) | 0;Ya(b) | 0;Za(b, n) | 0;if ((c | 0) > 0) c = c + -1 | 0;else break;
        }Lb(m, p);t = m + 96 | 0;Lb(t, i);Lb(m + 192 | 0, j);Xb(t);Ob(t, t);Xb(t);Za(b, m) | 0;Sa(b);x = s;return;
      }function $a(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;d = x;x = x + 288 | 0;h = d;i = c >> 31;f = ((c >>> 31) + -1 + (i ^ c) | 0) / 2 | 0;c = (f + -1 | 0) >>> 31;Fb(a, b, c);g = a + 96 | 0;Fb(g, b + 96 | 0, c);e = a + 192 | 0;Fb(e, b + 192 | 0, c);c = ((f ^ 1) + -1 | 0) >>> 31;Fb(a, b + 288 | 0, c);Fb(g, b + 384 | 0, c);Fb(e, b + 480 | 0, c);c = ((f ^ 2) + -1 | 0) >>> 31;Fb(a, b + 576 | 0, c);Fb(g, b + 672 | 0, c);Fb(e, b + 768 | 0, c);c = ((f ^ 3) + -1 | 0) >>> 31;Fb(a, b + 864 | 0, c);Fb(g, b + 960 | 0, c);Fb(e, b + 1056 | 0, c);c = ((f ^ 4) + -1 | 0) >>> 31;Fb(a, b + 1152 | 0, c);Fb(g, b + 1248 | 0, c);Fb(e, b + 1344 | 0, c);c = ((f ^ 5) + -1 | 0) >>> 31;Fb(a, b + 1440 | 0, c);Fb(g, b + 1536 | 0, c);Fb(e, b + 1632 | 0, c);c = ((f ^ 6) + -1 | 0) >>> 31;Fb(a, b + 1728 | 0, c);Fb(g, b + 1824 | 0, c);Fb(e, b + 1920 | 0, c);f = ((f ^ 7) + -1 | 0) >>> 31;Fb(a, b + 2016 | 0, f);Fb(g, b + 2112 | 0, f);Fb(e, b + 2208 | 0, f);Lb(h, a);f = h + 96 | 0;Lb(f, g);b = h + 192 | 0;Lb(b, e);Xb(f);Ob(f, f);Xb(f);c = i & 1;Fb(a, h, c);Fb(g, f, c);Fb(e, b, c);x = d;return;
      }function ab(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0;c = x;x = x + 96 | 0;e = c;Ub(e, b);Pb(a, a);d = a + 96 | 0;Pb(d, d);f = a + 192 | 0;Pb(f, f);Hb(f);Vb(a, e, a);Vb(d, e, d);Vb(d, b, d);x = c;return;
      }function bb(a) {
        a = a | 0;if (!(vc(a) | 0)) {
          a = 0;return a | 0;
        }a = (vc(a + 96 | 0) | 0) != 0 & 1;return a | 0;
      }function cb(a, b) {
        a = a | 0;b = b | 0;wc(a, b);wc(a + 48 | 0, b + 48 | 0);wc(a + 96 | 0, b + 96 | 0);return;
      }function db(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0;e = x;x = x + 48 | 0;d = e;Gc(d, c);Cc(d, d, c);if ((b[480] | 0) == -3) {
          Ec(a, c);Fc(a);Dc(a, a, 3);Fc(a);Hc(a, d, a);
        } else wc(a, d);xc(d, 16);Hc(a, d, a);Bc(a);x = e;return;
      }function eb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0;g = x;x = x + 144 | 0;d = g;wc(d, c);e = d + 48 | 0;wc(e, c + 48 | 0);f = d + 96 | 0;wc(f, c + 96 | 0);fb(d);if (vc(d) | 0 ? vc(f) | 0 : 0) {
          f = -1;x = g;return f | 0;
        }uc(b, e);f = Ja(b) | 0;uc(a, d);x = g;return f | 0;
      }function fb(a) {
        a = a | 0;var b = 0,
            c = 0,
            d = 0,
            e = 0,
            f = 0;e = x;x = x + 96 | 0;c = e + 48 | 0;d = e;b = a + 96 | 0;if (vc(a) | 0 ? vc(b) | 0 : 0) {
          x = e;return;
        }Lc(c);if (Ac(b, c) | 0) {
          x = e;return;
        }Mc(d, b);Cc(a, a, d);f = a + 48 | 0;Cc(f, f, d);Bc(f);Bc(a);wc(b, c);x = e;return;
      }function gb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;d = x;x = x + 96 | 0;e = d + 48 | 0;f = d;sc(f, c);Gc(f, f);Bc(f);sc(e, b);db(e, e);if (!(Ac(f, e) | 0)) {
          zc(a);Lc(a + 48 | 0);zc(a + 96 | 0);f = 0;x = d;return f | 0;
        } else {
          sc(a, b);sc(a + 48 | 0, c);Lc(a + 96 | 0);f = 1;x = d;return f | 0;
        }return 0;
      }function hb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0;f = x;x = x + 144 | 0;d = f + 88 | 0;e = f + 48 | 0;g = f;qa(g, 496);sc(d, b);db(d, d);uc(e, d);if ((Pa(e, g) | 0) != 1) {
          zc(a);Lc(a + 48 | 0);zc(a + 96 | 0);g = 0;x = f;return g | 0;
        }sc(a, b);b = a + 48 | 0;Nc(b, d);uc(e, b);if ((Ja(e) | 0) != (c | 0)) Ec(b, b);Bc(b);Lc(a + 96 | 0);g = 1;x = f;return g | 0;
      }function ib(a) {
        a = a | 0;var c = 0,
            d = 0;d = x;x = x + 48 | 0;c = d;switch (b[398] | 0) {case 1:
            break;case 4:
            {
              jb(a);jb(a);break;
            }case 8:
            {
              jb(a);jb(a);jb(a);break;
            }default:
            {
              qa(c, 256);kb(a, c);
            }}x = d;return;
      }function jb(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;o = x;x = x + 384 | 0;c = o + 336 | 0;h = o + 288 | 0;i = o + 240 | 0;j = o + 192 | 0;k = o + 144 | 0;l = o + 96 | 0;m = o + 48 | 0;n = o;if (!(b[480] | 0)) {
          n = a + 48 | 0;Gc(c, n);m = a + 96 | 0;Cc(h, n, m);Gc(i, m);Hc(m, c, c);Fc(m);Hc(m, m, m);Hc(m, m, m);Fc(m);Dc(i, i, (b[399] | 0) * 3 | 0);Cc(k, i, m);Hc(l, c, i);Fc(l);Cc(m, m, h);Hc(h, i, i);Hc(i, i, h);Ic(c, c, i);Fc(c);Cc(l, l, c);Hc(l, l, k);Cc(h, a, n);Fc(c);Cc(a, c, h);Hc(a, a, a);Fc(a);wc(n, l);Fc(n);x = o;return;
        }d = b[399] | 0;e = (d | 0) == 0;if (e) xc(n, 16);Gc(c, a);f = a + 48 | 0;Gc(h, f);g = a + 96 | 0;Gc(i, g);Cc(j, a, f);Hc(j, j, j);Fc(j);Cc(m, g, a);Hc(m, m, m);Fc(m);if (e) Cc(l, i, n);else Dc(l, i, d);Ic(l, l, m);Hc(k, l, l);Fc(k);Hc(l, l, k);Ic(k, h, l);Fc(k);Hc(l, l, h);Fc(l);Cc(l, l, k);Cc(k, k, j);Hc(j, i, i);Hc(i, i, j);if (e) Cc(m, m, n);else Dc(m, m, d);Ic(m, m, i);Ic(m, m, c);Fc(m);Hc(j, m, m);Hc(m, m, j);Fc(m);Hc(j, c, c);Hc(c, c, j);Ic(c, c, i);Fc(c);Cc(c, c, m);Hc(l, l, c);Cc(c, f, g);Hc(c, c, c);Fc(c);Cc(m, m, c);Ic(a, k, m);Hc(c, c, c);Fc(c);Hc(h, h, h);Fc(h);Cc(g, c, h);Fc(a);wc(f, l);Fc(f);Fc(g);x = o;return;
      }function kb(b, c) {
        b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0;s = x;x = x + 1760 | 0;m = s + 1608 | 0;d = s + 1280 | 0;h = s + 1232 | 0;n = s + 1464 | 0;o = s + 80 | 0;p = s + 1320 | 0;q = s;if (vc(b) | 0 ? vc(b + 96 | 0) | 0 : 0) {
          x = s;return;
        }if (fa(c) | 0) {
          zc(b);Lc(b + 48 | 0);zc(b + 96 | 0);x = s;return;
        }fb(b);wc(n, b);j = n + 48 | 0;k = b + 48 | 0;wc(j, k);f = n + 96 | 0;l = b + 96 | 0;wc(f, l);jb(n);wc(o, b);e = o + 48 | 0;wc(e, k);g = o + 96 | 0;wc(g, l);i = o + 144 | 0;wc(i, o);t = o + 192 | 0;wc(t, e);e = o + 240 | 0;wc(e, g);lb(i, n);i = o + 288 | 0;wc(i, o + 144 | 0);g = o + 336 | 0;wc(g, t);t = o + 384 | 0;wc(t, e);lb(i, n);i = o + 432 | 0;wc(i, o + 288 | 0);e = o + 480 | 0;wc(e, g);g = o + 528 | 0;wc(g, t);lb(i, n);i = o + 576 | 0;wc(i, o + 432 | 0);t = o + 624 | 0;wc(t, e);e = o + 672 | 0;wc(e, g);lb(i, n);i = o + 720 | 0;wc(i, o + 576 | 0);g = o + 768 | 0;wc(g, t);t = o + 816 | 0;wc(t, e);lb(i, n);i = o + 864 | 0;wc(i, o + 720 | 0);e = o + 912 | 0;wc(e, g);g = o + 960 | 0;wc(g, t);lb(i, n);i = o + 1008 | 0;wc(i, o + 864 | 0);wc(o + 1056 | 0, e);wc(o + 1104 | 0, g);lb(i, n);ha(h, c);c = Ja(h) | 0;wa(h, 1);ka(h) | 0;r() | 0;i = Ja(h) | 0;ha(d, h);wa(d, 1);ka(d) | 0;r() | 0;ia(h, d, c);yc(n, b, i);yc(j, k, i);yc(f, l, i);wc(p, n);i = p + 48 | 0;wc(i, j);j = p + 96 | 0;wc(j, f);f = ga(h) | 0;c = (f + 3 | 0) / 4 | 0;g = c + 1 | 0;d = La(h, 5) | 0;if ((f | 0) >= -6) {
          e = 0;while (1) {
            d = d + 240 | 0;a[q + e >> 0] = d;Aa(h, d << 24 >> 24);ka(h) | 0;r() | 0;la(h, 4) | 0;d = La(h, 5) | 0;if ((e | 0) < (c | 0)) e = e + 1 | 0;else break;
          }
        }a[q + g >> 0] = d;t = ((d << 24 >> 24) + -1 | 0) / 2 | 0;wc(b, o + (t * 144 | 0) | 0);wc(k, o + (t * 144 | 0) + 48 | 0);wc(l, o + (t * 144 | 0) + 96 | 0);if ((f | 0) > -7) while (1) {
          mb(n, o, a[q + c >> 0] | 0);jb(b);jb(b);jb(b);jb(b);lb(b, n);if ((c | 0) > 0) c = c + -1 | 0;else break;
        }wc(m, p);t = m + 48 | 0;wc(t, i);wc(m + 96 | 0, j);Ec(t, t);Fc(t);lb(b, m);fb(b);x = s;return;
      }function lb(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0;q = x;x = x + 432 | 0;g = q + 384 | 0;j = q + 336 | 0;k = q + 288 | 0;l = q + 240 | 0;m = q + 192 | 0;n = q + 144 | 0;o = q + 96 | 0;p = q + 48 | 0;d = q;e = b[399] | 0;if (!(b[480] | 0)) {
          f = e * 3 | 0;Cc(g, a, c);h = a + 48 | 0;d = c + 48 | 0;Cc(j, h, d);i = a + 96 | 0;e = c + 96 | 0;Cc(k, i, e);Hc(l, a, h);Fc(l);Hc(m, c, d);Fc(m);Cc(l, l, m);Hc(m, g, j);Ic(l, l, m);Fc(l);Hc(m, h, i);Fc(m);Hc(n, d, e);Fc(n);Cc(m, m, n);Hc(n, j, k);Ic(m, m, n);Fc(m);Hc(n, a, i);Fc(n);Hc(o, c, e);Fc(o);Cc(n, n, o);Hc(o, g, k);Ic(o, n, o);Fc(o);Hc(n, g, g);Hc(g, g, n);Fc(g);Dc(k, k, f);Hc(p, j, k);Fc(p);Ic(j, j, k);Fc(j);Dc(o, o, f);Cc(n, o, m);Cc(k, l, j);Ic(a, k, n);Cc(o, o, g);Cc(j, j, p);Hc(h, o, j);Cc(g, g, l);Cc(p, p, m);Hc(i, p, g);Fc(a);Fc(h);Fc(i);x = q;return;
        }f = (e | 0) == 0;if (f) xc(d, 16);Cc(g, a, c);h = a + 48 | 0;s = c + 48 | 0;Cc(j, h, s);i = a + 96 | 0;r = c + 96 | 0;Cc(k, i, r);Hc(l, a, h);Fc(l);Hc(m, c, s);Fc(m);Cc(l, l, m);Hc(m, g, j);Ic(l, l, m);Fc(l);Hc(m, h, i);Fc(m);Hc(n, s, r);Fc(n);Cc(m, m, n);Hc(n, j, k);Ic(m, m, n);Fc(m);Hc(n, a, i);Fc(n);Hc(o, c, r);Fc(o);Cc(n, n, o);Hc(o, g, k);Ic(o, n, o);Fc(o);if (f) Cc(p, k, d);else Dc(p, k, e);Ic(n, o, p);Fc(n);Hc(p, n, n);Hc(n, n, p);Ic(p, j, n);Fc(p);Hc(n, n, j);Fc(n);if (f) Cc(o, o, d);else Dc(o, o, e);Hc(j, k, k);Hc(k, k, j);Ic(o, o, k);Ic(o, o, g);Fc(o);Hc(j, o, o);Hc(o, o, j);Fc(o);Hc(j, g, g);Hc(g, g, j);Ic(g, g, k);Fc(g);Cc(j, m, o);Cc(k, g, o);Cc(o, n, p);Hc(h, o, k);Cc(n, n, l);Ic(a, n, j);Cc(p, p, m);Cc(j, l, g);Hc(i, p, j);Fc(a);Fc(h);Fc(i);x = q;return;
      }function mb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;d = x;x = x + 144 | 0;h = d;i = c >> 31;f = ((c >>> 31) + -1 + (i ^ c) | 0) / 2 | 0;c = (f + -1 | 0) >>> 31;yc(a, b, c);g = a + 48 | 0;yc(g, b + 48 | 0, c);e = a + 96 | 0;yc(e, b + 96 | 0, c);c = ((f ^ 1) + -1 | 0) >>> 31;yc(a, b + 144 | 0, c);yc(g, b + 192 | 0, c);yc(e, b + 240 | 0, c);c = ((f ^ 2) + -1 | 0) >>> 31;yc(a, b + 288 | 0, c);yc(g, b + 336 | 0, c);yc(e, b + 384 | 0, c);c = ((f ^ 3) + -1 | 0) >>> 31;yc(a, b + 432 | 0, c);yc(g, b + 480 | 0, c);yc(e, b + 528 | 0, c);c = ((f ^ 4) + -1 | 0) >>> 31;yc(a, b + 576 | 0, c);yc(g, b + 624 | 0, c);yc(e, b + 672 | 0, c);c = ((f ^ 5) + -1 | 0) >>> 31;yc(a, b + 720 | 0, c);yc(g, b + 768 | 0, c);yc(e, b + 816 | 0, c);c = ((f ^ 6) + -1 | 0) >>> 31;yc(a, b + 864 | 0, c);yc(g, b + 912 | 0, c);yc(e, b + 960 | 0, c);f = ((f ^ 7) + -1 | 0) >>> 31;yc(a, b + 1008 | 0, f);yc(g, b + 1056 | 0, f);yc(e, b + 1104 | 0, f);wc(h, a);f = h + 48 | 0;wc(f, g);b = h + 96 | 0;wc(b, e);Ec(f, f);Fc(f);c = i & 1;yc(a, h, c);yc(g, f, c);yc(e, b, c);x = d;return;
      }function nb(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;e = x;x = x + 96 | 0;f = e + 48 | 0;d = e;ma(d, b[c + 8 >> 2] | 0);qa(f, 496);Ha(d, f);c = a + 96 | 0;while (1) {
          hb(a, d, 0) | 0;wa(d, 1);ka(d) | 0;r() | 0;a: do if (vc(a) | 0) do {
            if (!(vc(c) | 0)) break a;hb(a, d, 0) | 0;wa(d, 1);ka(d) | 0;r() | 0;
          } while ((vc(a) | 0) != 0); while (0);ib(a);if (!(vc(a) | 0)) {
            c = 8;break;
          }if (!(vc(c) | 0)) {
            c = 8;break;
          }
        }if ((c | 0) == 8) {
          x = e;return;
        }
      }function ob(c, d, e) {
        c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0,
            i = 0;i = x;x = x + 96 | 0;g = i + 48 | 0;h = i;eb(g, h, d) | 0;d = c + 8 | 0;f = b[d >> 2] | 0;if (!e) {
          a[f >> 0] = 4;b[c >> 2] = 65;ja((b[d >> 2] | 0) + 1 | 0, g);ja((b[d >> 2] | 0) + 33 | 0, h);x = i;return;
        }a[f >> 0] = 2;if ((Ja(h) | 0) == 1) a[b[d >> 2] >> 0] = 3;b[c >> 2] = 33;ja((b[d >> 2] | 0) + 1 | 0, g);x = i;return;
      }function pb(c, d) {
        c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;h = x;x = x + 96 | 0;f = h + 48 | 0;g = h;d = d + 8 | 0;i = b[d >> 2] | 0;e = a[i >> 0] | 0;ma(f, i + 1 | 0);if (e << 24 >> 24 == 4) {
          ma(g, (b[d >> 2] | 0) + 33 | 0);if (gb(c, f, g) | 0) {
            i = 1;x = h;return i | 0;
          }
        } else if ((e | 1) << 24 >> 24 == 3 ? hb(c, f, e & 1) | 0 : 0) {
          i = 1;x = h;return i | 0;
        }i = 0;x = h;return i | 0;
      }function qb(a, c) {
        a = a | 0;c = c | 0;if ((c | 0) == (a | 0)) return;cc(a, c);cc(a + 192 | 0, c + 192 | 0);cc(a + 384 | 0, c + 384 | 0);b[a + 576 >> 2] = b[c + 576 >> 2];return;
      }function rb(a) {
        a = a | 0;ec(a);dc(a + 192 | 0);dc(a + 384 | 0);b[a + 576 >> 2] = 1;return;
      }function sb(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0;if (($b(a, b) | 0 ? (c = a + 192 | 0, d = b + 192 | 0, $b(c, d) | 0) : 0) ? $b(c, d) | 0 : 0) {
          d = 1;return d | 0;
        }d = 0;return d | 0;
      }function tb(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0;if ((c | 0) == (a | 0)) {
          c = a + 384 | 0;d = a + 192 | 0;
        } else {
          cc(a, c);d = a + 192 | 0;cc(d, c + 192 | 0);e = a + 384 | 0;cc(e, c + 384 | 0);b[a + 576 >> 2] = b[c + 576 >> 2];c = e;
        }hc(a, a);ic(d, d);hc(c, c);return;
      }function ub(a, c, d, e) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;cc(a, c);cc(a + 192 | 0, d);cc(a + 384 | 0, e);b[a + 576 >> 2] = 4;return;
      }function vb(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;d = x;x = x + 768 | 0;h = d + 576 | 0;g = d + 384 | 0;f = d + 192 | 0;e = d;cc(h, c);nc(a, c);jc(e, a, a);jc(a, e, a);gc(a);ic(h, h);jc(h, h, h);jc(a, a, h);h = c + 384 | 0;nc(g, h);qc(g);jc(e, g, g);jc(g, g, e);gc(g);c = c + 192 | 0;nc(f, c);jc(e, f, f);jc(f, f, e);gc(f);e = a + 192 | 0;hc(e, c);jc(e, e, e);c = a + 384 | 0;ic(c, h);jc(c, c, c);jc(e, g, e);jc(c, f, c);b[a + 576 >> 2] = 4;lc(a);lc(e);lc(c);x = d;return;
      }function wb(a) {
        a = a | 0;lc(a);lc(a + 192 | 0);lc(a + 384 | 0);return;
      }function xb(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;i = x;x = x + 768 | 0;d = i + 576 | 0;e = i + 384 | 0;f = i + 192 | 0;g = i;h = c + 576 | 0;if ((b[h >> 2] | 0) >= 2) {
          nc(d, c);k = c + 192 | 0;l = c + 384 | 0;oc(e, k, l);jc(e, e, e);gc(e);nc(f, l);oc(g, c, k);jc(g, g, g);j = a + 384 | 0;jc(j, c, l);jc(j, k, j);gc(j);nc(j, j);cc(a, d);jc(d, d, e);gc(d);jc(d, d, f);jc(d, d, g);gc(d);fc(d, d);qc(e);qc(f);jc(a, a, e);e = a + 192 | 0;jc(e, f, g);jc(j, j, d);b[a + 576 >> 2] = (b[h >> 2] | 0) == 2 ? 3 : 4;gc(a);gc(e);gc(j);x = i;return;
        }if ((c | 0) == (a | 0)) {
          x = i;return;
        }cc(a, c);cc(a + 192 | 0, c + 192 | 0);cc(a + 384 | 0, c + 384 | 0);b[a + 576 >> 2] = b[h >> 2];x = i;return;
      }function yb(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0;d = x;x = x + 1152 | 0;h = d + 960 | 0;m = d + 768 | 0;k = d + 576 | 0;g = d + 384 | 0;i = d + 192 | 0;j = d;oc(h, a, c);f = a + 192 | 0;n = c + 192 | 0;oc(k, f, n);jc(i, a, f);jc(j, c, n);gc(i);gc(j);oc(m, i, j);e = a + 384 | 0;jc(i, f, e);l = c + 384 | 0;jc(j, n, l);gc(i);gc(j);oc(g, i, j);fc(i, h);fc(j, k);jc(m, m, i);jc(f, m, j);jc(g, g, j);jc(k, k, i);jc(i, a, e);jc(j, c, l);gc(i);gc(j);oc(i, j, i);jc(k, k, i);oc(i, e, l);fc(j, i);jc(e, k, j);jc(g, g, j);qc(i);jc(f, f, i);gc(g);qc(g);jc(a, h, g);b[a + 576 >> 2] = 4;gc(a);gc(f);gc(e);x = d;return;
      }function zb(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;o = x;x = x + 1152 | 0;i = o + 960 | 0;f = o + 768 | 0;j = o + 576 | 0;k = o + 384 | 0;l = o + 192 | 0;m = o;n = a + 576 | 0;e = b[n >> 2] | 0;if ((e | 0) == 1) {
          if ((c | 0) == (a | 0)) {
            x = o;return;
          }cc(a, c);cc(a + 192 | 0, c + 192 | 0);cc(a + 384 | 0, c + 384 | 0);b[n >> 2] = b[c + 576 >> 2];x = o;return;
        }h = c + 576 | 0;d = b[h >> 2] | 0;if ((d | 0) == 1) {
          x = o;return;
        }do if ((d | 0) > 2) {
          oc(i, a, c);e = a + 192 | 0;p = c + 192 | 0;oc(j, e, p);jc(l, a, e);jc(m, c, p);gc(l);gc(m);oc(f, l, m);d = a + 384 | 0;jc(l, e, d);g = c + 384 | 0;jc(m, p, g);gc(l);gc(m);oc(k, l, m);fc(l, i);fc(m, j);jc(f, f, l);jc(e, f, m);jc(k, k, m);jc(j, j, l);jc(l, a, d);jc(m, c, g);gc(l);gc(m);oc(l, m, l);jc(j, j, l);if ((b[h >> 2] | 0) != 3 ? (b[n >> 2] | 0) != 3 : 0) oc(l, d, g);else {
            Vb(l, d, g);f = l + 96 | 0;Mb(f);if ((b[h >> 2] | 0) != 3) Vb(f, d, c + 480 | 0);if ((b[n >> 2] | 0) != 3) Vb(f, a + 480 | 0, g);
          }fc(m, l);jc(d, j, m);jc(k, k, m);qc(l);jc(e, e, l);gc(k);qc(k);jc(a, i, k);
        } else {
          if ((e | 0) != 2) {
            e = a + 192 | 0;cc(k, e);oc(i, a, c);p = c + 192 | 0;mc(j, e, p);jc(e, a, e);cc(m, c);Qb(m, m, p);gc(m);gc(e);oc(e, e, m);d = a + 384 | 0;jc(k, k, d);gc(k);mc(k, k, p);fc(l, i);fc(m, j);jc(e, e, l);jc(e, e, m);jc(k, k, m);jc(j, j, l);jc(l, a, d);gc(l);gc(k);oc(l, c, l);jc(d, j, l);qc(k);jc(a, i, k);break;
          }Ab(a, c);x = o;return;
        } while (0);b[n >> 2] = 4;gc(a);gc(e);gc(d);x = o;return;
      }function Ab(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0;d = x;x = x + 864 | 0;j = d + 768 | 0;k = d + 672 | 0;f = d + 576 | 0;n = d + 480 | 0;m = d + 384 | 0;i = d + 288 | 0;h = d + 192 | 0;g = d + 96 | 0;l = d;Vb(j, a, c);q = a + 96 | 0;p = c + 96 | 0;Vb(k, q, p);e = a + 192 | 0;o = c + 192 | 0;Vb(f, e, o);Qb(n, a, q);Qb(m, c, p);Xb(n);Xb(m);Vb(i, n, m);Qb(l, j, k);Ob(l, l);Qb(i, i, l);Qb(n, a, e);Qb(m, c, o);Xb(n);Xb(m);Vb(h, n, m);Qb(l, j, f);Ob(l, l);Qb(h, h, l);Qb(n, q, e);Qb(m, p, o);Xb(n);Xb(m);Vb(g, n, m);Qb(l, k, f);Ob(l, l);Qb(g, g, l);Yb(k);Qb(j, j, k);ac(a, j, i);ac(e, h, g);bc(a + 384 | 0, f);gc(a);gc(e);b[a + 576 >> 2] = 3;x = d;return;
      }function Bb(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;d = x;x = x + 768 | 0;h = d + 576 | 0;g = d + 384 | 0;f = d + 192 | 0;e = d;nc(h, c);j = c + 192 | 0;i = c + 384 | 0;oc(g, j, i);qc(g);kc(h, h, g);gc(h);nc(g, i);qc(g);oc(f, c, j);kc(g, g, f);gc(g);nc(f, j);oc(e, c, i);kc(f, f, e);gc(f);oc(e, j, f);qc(e);oc(a, h, c);jc(e, a, e);c = a + 384 | 0;oc(c, g, i);qc(c);jc(e, c, e);gc(e);pc(e, e);oc(a, h, e);oc(a + 192 | 0, g, e);oc(c, f, e);b[a + 576 >> 2] = 4;x = d;return;
      }function Cb(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;d = x;x = x + 192 | 0;e = d + 96 | 0;h = d;Ub(e, c);Vb(h, e, c);rc(a, h);g = a + 192 | 0;rc(g, h);f = a + 384 | 0;rc(f, h);mc(g, g, c);mc(f, f, e);b[a + 576 >> 2] = 4;x = d;return;
      }function Db(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0;m = x;x = x + 1264 | 0;i = m + 672 | 0;j = m + 88 | 0;k = m + 48 | 0;l = m;ha(k, d);ka(k) | 0;r() | 0;Ba(l, k, 3) | 0;r() | 0;ka(l) | 0;r() | 0;if ((j | 0) == (c | 0)) {
          d = j + 192 | 0;e = j + 384 | 0;c = j + 576 | 0;
        } else {
          cc(j, c);d = j + 192 | 0;cc(d, c + 192 | 0);e = j + 384 | 0;cc(e, c + 384 | 0);h = j + 576 | 0;b[h >> 2] = b[c + 576 >> 2];c = h;
        }gc(j);gc(d);gc(e);cc(i, j);f = i + 192 | 0;cc(f, d);g = i + 384 | 0;cc(g, e);h = i + 576 | 0;b[h >> 2] = b[c >> 2];c = ga(l) | 0;a: do if ((c | 0) > 2) {
          c = c + -2 | 0;while (1) {
            vb(i, i);n = Ka(l, c) | 0;switch (n - (Ka(k, c) | 0) | 0) {case 1:
                {
                  yb(i, j);break;
                }case -1:
                {
                  hc(j, j);ic(d, d);hc(e, e);yb(i, j);hc(j, j);ic(d, d);hc(e, e);break;
                }default:
                {}}if ((c | 0) > 1) c = c + -1 | 0;else break a;
          }
        } while (0);if ((i | 0) == (a | 0)) {
          l = a + 192 | 0;n = a + 384 | 0;lc(a);lc(l);lc(n);x = m;return;
        } else {
          cc(a, i);l = a + 192 | 0;cc(l, f);n = a + 384 | 0;cc(n, g);b[a + 576 >> 2] = b[h >> 2];lc(a);lc(l);lc(n);x = m;return;
        }
      }function Eb(a) {
        a = a | 0;if (vc(a) | 0 ? vc(a + 48 | 0) | 0 : 0) {
          a = 1;return a | 0;
        }a = 0;return a | 0;
      }function Fb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;yc(a, b, c);yc(a + 48 | 0, b + 48 | 0, c);return;
      }function Gb(a) {
        a = a | 0;var b = 0,
            c = 0;b = x;x = x + 48 | 0;c = b;Lc(c);if (Ac(a, c) | 0 ? vc(a + 48 | 0) | 0 : 0) {
          c = 1;x = b;return c | 0;
        }c = 0;x = b;return c | 0;
      }function Hb(a) {
        a = a | 0;Bc(a);Bc(a + 48 | 0);return;
      }function Ib(a, b) {
        a = a | 0;b = b | 0;if (Ac(a, b) | 0 ? Ac(a + 48 | 0, b + 48 | 0) | 0 : 0) {
          b = 1;return b | 0;
        }b = 0;return b | 0;
      }function Jb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;wc(a, b);wc(a + 48 | 0, c);return;
      }function Kb(a, b) {
        a = a | 0;b = b | 0;sc(a, b);zc(a + 48 | 0);return;
      }function Lb(a, b) {
        a = a | 0;b = b | 0;if ((a | 0) == (b | 0)) return;wc(a, b);wc(a + 48 | 0, b + 48 | 0);return;
      }function Mb(a) {
        a = a | 0;zc(a);zc(a + 48 | 0);return;
      }function Nb(a) {
        a = a | 0;var b = 0,
            c = 0;b = x;x = x + 48 | 0;c = b;Lc(c);wc(a, c);zc(a + 48 | 0);x = b;return;
      }function Ob(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0;c = x;x = x + 96 | 0;e = c + 48 | 0;d = c;f = b + 48 | 0;Hc(e, b, f);Ec(e, e);Hc(d, e, f);Hc(a + 48 | 0, e, b);wc(a, d);x = c;return;
      }function Pb(a, b) {
        a = a | 0;b = b | 0;wc(a, b);a = a + 48 | 0;Ec(a, b + 48 | 0);Fc(a);return;
      }function Qb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;Hc(a, b, c);Hc(a + 48 | 0, b + 48 | 0, c + 48 | 0);return;
      }function Rb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;d = x;x = x + 192 | 0;h = d + 144 | 0;g = d + 96 | 0;f = d;e = c + 48 | 0;Hc(h, c, e);Ec(h, h);Hc(g, h, e);e = f + 48 | 0;Hc(e, h, c);wc(f, g);Hc(a, b, f);Hc(a + 48 | 0, b + 48 | 0, e);x = d;return;
      }function Sb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;Cc(a, b, c);Cc(a + 48 | 0, b + 48 | 0, c);return;
      }function Tb(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;Dc(a, b, c);Dc(a + 48 | 0, b + 48 | 0, c);return;
      }function Ub(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;c = x;x = x + 144 | 0;d = c + 96 | 0;g = c + 48 | 0;e = c;f = b + 48 | 0;Hc(d, b, f);Ec(e, f);Hc(g, b, b);Fc(g);Cc(a + 48 | 0, g, f);Hc(a, b, e);Fc(d);Fc(a);Cc(a, d, a);x = c;return;
      }function Vb(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0;p = x;x = x + 544 | 0;i = p + 464 | 0;j = p + 384 | 0;k = p + 304 | 0;l = p + 224 | 0;m = p + 144 | 0;n = p + 96 | 0;o = p + 48 | 0;f = p;qa(f, 496);sa(m, f);f = b[c + 40 >> 2] | 0;h = c + 48 | 0;g = c + 88 | 0;e = b[g >> 2] | 0;q = e + f | 0;s = (b[d + 88 >> 2] | 0) + (b[d + 40 >> 2] | 0) | 0;q = td(s | 0, ((s | 0) < 0) << 31 >> 31 | 0, q | 0, ((q | 0) < 0) << 31 >> 31 | 0) | 0;s = r() | 0;if ((s | 0) > 0 | (s | 0) == 0 & q >>> 0 > 67108863) {
          if ((f | 0) > 1) {
            Bc(c);e = b[g >> 2] | 0;
          }if ((e | 0) > 1) Bc(h);
        }Ca(i, c, d);s = d + 48 | 0;Ca(j, h, s);va(n, c, h);ka(n) | 0;r() | 0;va(o, d, s);ka(o) | 0;r() | 0;Ca(k, n, o);za(l, i, j);ya(j, m, j);za(i, i, j);ya(k, k, l);pa(i);tc(a, i);b[a + 40 >> 2] = 3;pa(k);tc(a + 48 | 0, k);b[a + 88 >> 2] = 2;x = p;return;
      }function Wb(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0;c = x;x = x + 96 | 0;d = c + 48 | 0;f = c;Fc(b);e = b + 48 | 0;Fc(e);Gc(d, b);Gc(f, e);Hc(d, d, f);Mc(d, d);Cc(a, b, d);Ec(d, d);Fc(d);Cc(a + 48 | 0, e, d);x = c;return;
      }function Xb(a) {
        a = a | 0;Fc(a);Fc(a + 48 | 0);return;
      }function Yb(a) {
        a = a | 0;var b = 0,
            c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;g = x;x = x + 144 | 0;f = g + 96 | 0;b = g;if ((b | 0) == (a | 0)) {
          e = b;c = b + 48 | 0;d = a + 48 | 0;b = a;
        } else {
          wc(b, a);c = b + 48 | 0;d = a + 48 | 0;wc(c, d);e = b;b = a;
        }wc(f, b);Ec(b, d);wc(d, f);Hc(b, e, b);Hc(d, c, d);x = g;return;
      }function Zb(a) {
        a = a | 0;var b = 0,
            c = 0,
            d = 0,
            e = 0;e = x;x = x + 96 | 0;b = e;Fc(a);c = a + 48 | 0;Fc(c);Hc(b, a, c);d = b + 48 | 0;Ic(d, c, a);Fc(b);Fc(d);if ((b | 0) == (a | 0)) {
          x = e;return;
        }wc(a, b);wc(c, d);x = e;return;
      }function _b(a) {
        a = a | 0;var b = 0,
            c = 0,
            d = 0,
            e = 0;b = x;x = x + 96 | 0;e = b;Fc(a);d = a + 48 | 0;Fc(d);Hc(e, a, d);c = e + 48 | 0;Ic(c, d, a);Fc(e);Fc(c);Jc(a, e);Jc(d, c);x = b;return;
      }function $b(a, b) {
        a = a | 0;b = b | 0;if (Ib(a, b) | 0 ? Ib(a + 96 | 0, b + 96 | 0) | 0 : 0) {
          b = 1;return b | 0;
        }b = 0;return b | 0;
      }function ac(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;Lb(a, b);Lb(a + 96 | 0, c);return;
      }function bc(a, b) {
        a = a | 0;b = b | 0;Lb(a, b);Mb(a + 96 | 0);return;
      }function cc(a, b) {
        a = a | 0;b = b | 0;if ((a | 0) == (b | 0)) return;Lb(a, b);Lb(a + 96 | 0, b + 96 | 0);return;
      }function dc(a) {
        a = a | 0;Mb(a);Mb(a + 96 | 0);return;
      }function ec(a) {
        a = a | 0;Nb(a);Mb(a + 96 | 0);return;
      }function fc(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0;c = x;x = x + 192 | 0;f = c + 96 | 0;e = c;Xb(b);d = b + 96 | 0;Xb(d);Qb(f, b, d);Ob(f, f);Qb(e, f, d);d = a + 96 | 0;Qb(d, f, b);Lb(a, e);Xb(a);Xb(d);x = c;return;
      }function gc(a) {
        a = a | 0;Xb(a);Xb(a + 96 | 0);return;
      }function hc(a, b) {
        a = a | 0;b = b | 0;var c = 0;Lb(a, b);c = a + 96 | 0;Ob(c, b + 96 | 0);Xb(a);Xb(c);return;
      }function ic(a, b) {
        a = a | 0;b = b | 0;var c = 0;c = a + 96 | 0;Lb(c, b + 96 | 0);Ob(a, b);Xb(a);Xb(c);return;
      }function jc(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;Qb(a, b, c);Qb(a + 96 | 0, b + 96 | 0, c + 96 | 0);return;
      }function kc(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;d = x;x = x + 384 | 0;h = d + 288 | 0;g = d + 192 | 0;f = d;Xb(c);e = c + 96 | 0;Xb(e);Qb(h, c, e);Ob(h, h);Qb(g, h, e);e = f + 96 | 0;Qb(e, h, c);Lb(f, g);Xb(f);Xb(e);Qb(a, b, f);Qb(a + 96 | 0, b + 96 | 0, e);x = d;return;
      }function lc(a) {
        a = a | 0;Hb(a);Hb(a + 96 | 0);return;
      }function mc(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;Vb(a, b, c);Vb(a + 96 | 0, b + 96 | 0, c);return;
      }function nc(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;c = x;x = x + 288 | 0;f = c + 192 | 0;e = c + 96 | 0;d = c;g = b + 96 | 0;Vb(d, b, g);Lb(e, g);Qb(f, b, g);Yb(e);Qb(e, b, e);Xb(f);Xb(e);Vb(a, f, e);Lb(e, d);Yb(e);Qb(e, e, d);Xb(e);Ob(e, e);Qb(a, a, e);b = a + 96 | 0;Qb(b, d, d);Xb(a);Xb(b);x = c;return;
      }function oc(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;d = x;x = x + 384 | 0;e = d + 288 | 0;f = d + 192 | 0;g = d + 96 | 0;h = d;Vb(e, b, c);i = b + 96 | 0;j = c + 96 | 0;Vb(f, i, j);Qb(g, j, c);Qb(h, i, b);Xb(h);Xb(g);Vb(h, h, g);Ob(g, e);Qb(h, h, g);Xb(h);Ob(g, f);c = a + 96 | 0;Qb(c, h, g);Yb(f);Qb(a, f, e);Xb(a);Xb(c);x = d;return;
      }function pc(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0;c = x;x = x + 192 | 0;e = c + 96 | 0;f = c;Ub(e, b);d = b + 96 | 0;Ub(f, d);Yb(f);Xb(f);Rb(e, e, f);Wb(e, e);Vb(a, e, b);Ob(e, e);Xb(e);Vb(a + 96 | 0, e, d);x = c;return;
      }function qc(a) {
        a = a | 0;var b = 0,
            c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;b = x;x = x + 240 | 0;f = b + 192 | 0;e = b + 96 | 0;d = b;c = a + 96 | 0;Lb(d, c);Lb(e, d);wc(f, e);g = e + 48 | 0;Ec(e, g);wc(g, f);Qb(d, d, e);Lb(c, a);Lb(a, d);Xb(a);Xb(c);x = b;return;
      }function rc(a, b) {
        a = a | 0;b = b | 0;Pb(a, a);a = a + 96 | 0;Pb(a, a);Vb(a, b, a);return;
      }function sc(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0;d = x;x = x + 176 | 0;f = d + 128 | 0;e = d + 48 | 0;g = d;qa(g, 544);Ca(e, c, g);qa(f, 496);c = 1584;Ea(a, f, b[c >> 2] | 0, b[c + 4 >> 2] | 0, e);b[a + 40 >> 2] = 2;x = d;return;
      }function tc(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;d = x;x = x + 48 | 0;f = d;qa(f, 496);e = 1584;Ea(a, f, b[e >> 2] | 0, b[e + 4 >> 2] | 0, c);x = d;return;
      }function uc(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;d = x;x = x + 128 | 0;f = d + 80 | 0;e = d;ta(e);ra(e, c);qa(f, 496);c = 1584;Ea(a, f, b[c >> 2] | 0, b[c + 4 >> 2] | 0, e);x = d;return;
      }function vc(a) {
        a = a | 0;var b = 0,
            c = 0,
            d = 0;b = x;x = x + 96 | 0;d = b + 48 | 0;c = b;qa(d, 496);ha(c, a);Ha(c, d);a = fa(c) | 0;x = b;return a | 0;
      }function wc(a, c) {
        a = a | 0;c = c | 0;ha(a, c);b[a + 40 >> 2] = b[c + 40 >> 2];return;
      }function xc(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;d = x;x = x + 224 | 0;f = d + 176 | 0;e = d + 96 | 0;g = d + 48 | 0;h = d;qa(h, c);qa(g, 544);Ca(e, h, g);qa(f, 496);c = 1584;Ea(a, f, b[c >> 2] | 0, b[c + 4 >> 2] | 0, e);b[a + 40 >> 2] = 2;x = d;return;
      }function yc(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0;ia(a, c, d);a = a + 40 | 0;e = b[a >> 2] | 0;b[a >> 2] = (b[c + 40 >> 2] ^ e) & 0 - d ^ e;return;
      }function zc(a) {
        a = a | 0;na(a);b[a + 40 >> 2] = 1;return;
      }function Ac(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;d = x;x = x + 96 | 0;f = d + 48 | 0;e = d;ha(f, a);b[f + 40 >> 2] = b[a + 40 >> 2];ha(e, c);b[e + 40 >> 2] = b[c + 40 >> 2];Bc(f);Bc(e);c = (Ga(f, e) | 0) == 0 & 1;x = d;return c | 0;
      }function Bc(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            o = 0;g = x;x = x + 96 | 0;d = g + 48 | 0;e = g;qa(d, 496);ka(a) | 0;r() | 0;f = a + 40 | 0;c = b[f >> 2] | 0;if ((c | 0) <= 16) {
          c = c + -1 | 0;c = c >>> 1 | c;c = c >>> 2 | c;c = c >>> 4 | c;c = c >>> 8 | c;c = c >>> 16 | c;c = c - (c >>> 1 & 1431655765) | 0;c = (c >>> 2 & 858993459) + (c & 858993459) | 0;c = (n((c >>> 4) + c & 252645135, 16843009) | 0) >>> 24;oa(d, c) | 0;if (!c) {
            b[f >> 2] = 1;x = g;return;
          }
        } else {
          c = a + 24 | 0;m = b[c >> 2] | 0;c = b[c + 4 >> 2] | 0;j = a + 32 | 0;i = b[j >> 2] | 0;j = b[j + 4 >> 2] | 0;k = d + 24 | 0;o = b[k >> 2] | 0;k = b[k + 4 >> 2] | 0;l = d + 32 | 0;l = xd(b[l >> 2] | 0, b[l + 4 >> 2] | 0, 2) | 0;h = r() | 0;k = vd(o | 0, k | 0, 54) | 0;h = h | (r() | 0);j = xd(i | 0, j | 0, 2) | 0;i = r() | 0;c = vd(m | 0, c | 0, 54) | 0;i = i | (r() | 0);h = nd(l | k | 0, h | 0, 1, 0) | 0;h = rd(j | c | 0, i | 0, h | 0, r() | 0) | 0;r() | 0;h = Ba(e, d, h) | 0;h = xd(h | 0, r() | 0, 56) | 0;i = r() | 0;c = e + 32 | 0;j = c;i = nd(b[j >> 2] | 0, b[j + 4 >> 2] | 0, h | 0, i | 0) | 0;h = r() | 0;b[c >> 2] = i;b[c + 4 >> 2] = h;xa(a, a, e);ka(a) | 0;r() | 0;oa(d, 2) | 0;c = 2;
        }while (1) {
          ia(a, e, 1 - (Fa(e, a, d) | 0) | 0);if ((c | 0) > 1) c = c + -1 | 0;else break;
        }b[f >> 2] = 1;x = g;return;
      }function Cc(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;g = x;x = x + 128 | 0;e = g + 80 | 0;f = g;h = b[c + 40 >> 2] | 0;i = b[d + 40 >> 2] | 0;h = td(i | 0, ((i | 0) < 0) << 31 >> 31 | 0, h | 0, ((h | 0) < 0) << 31 >> 31 | 0) | 0;i = r() | 0;if ((i | 0) > 0 | (i | 0) == 0 & h >>> 0 > 67108863) Bc(c);Ca(f, c, d);qa(e, 496);i = 1584;Ea(a, e, b[i >> 2] | 0, b[i + 4 >> 2] | 0, f);b[a + 40 >> 2] = 2;x = g;return;
      }function Dc(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;l = x;x = x + 272 | 0;i = l + 176 | 0;j = l + 96 | 0;e = l + 48 | 0;f = l;k = l + 216 | 0;g = (d | 0) < 0 ? 0 - d | 0 : d;h = c + 40 | 0;if ((n(b[h >> 2] | 0, g) | 0) < 67108864) {
          Ba(a, c, g) | 0;r() | 0;b[a + 40 >> 2] = n(b[h >> 2] | 0, g) | 0;
        } else {
          na(f);wa(f, g);ka(f) | 0;r() | 0;qa(e, 544);Ca(j, f, e);qa(i, 496);f = 1584;e = b[f >> 2] | 0;f = b[f + 4 >> 2] | 0;Ea(k, i, e, f, j);b[k + 40 >> 2] = 2;if ((b[h >> 2] | 0) > 33554431) Bc(c);Ca(j, c, k);qa(i, 496);Ea(a, i, e, f, j);b[a + 40 >> 2] = 2;
        }if ((d | 0) > -1) {
          x = l;return;
        }Ec(a, a);ka(a) | 0;r() | 0;x = l;return;
      }function Ec(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0;d = x;x = x + 48 | 0;f = d;qa(f, 496);e = (b[c + 40 >> 2] | 0) + -1 | 0;e = e >>> 1 | e;e = e >>> 2 | e;e = e >>> 4 | e;e = e >>> 8 | e;e = e >>> 16 | e;e = e - (e >>> 1 & 1431655765) | 0;e = (e >>> 2 & 858993459) + (e & 858993459) | 0;e = (n((e >>> 4) + e & 252645135, 16843009) | 0) >>> 24;oa(f, e) | 0;xa(a, f, c);c = 1 << e;b[a + 40 >> 2] = c + 1;if ((c | 0) <= 67108862) {
          x = d;return;
        }Bc(a);x = d;return;
      }function Fc(a) {
        a = a | 0;ka(a) | 0;r() | 0;return;
      }function Gc(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;f = x;x = x + 128 | 0;d = f + 80 | 0;e = f;h = b[c + 40 >> 2] | 0;g = ((h | 0) < 0) << 31 >> 31;g = td(h | 0, g | 0, h | 0, g | 0) | 0;h = r() | 0;if (h >>> 0 > 0 | (h | 0) == 0 & g >>> 0 > 67108863) Bc(c);Da(e, c);qa(d, 496);h = 1584;Ea(a, d, b[h >> 2] | 0, b[h + 4 >> 2] | 0, e);b[a + 40 >> 2] = 2;x = f;return;
      }function Hc(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;va(a, c, d);d = (b[d + 40 >> 2] | 0) + (b[c + 40 >> 2] | 0) | 0;b[a + 40 >> 2] = d;if ((d | 0) <= 67108863) return;Bc(a);return;
      }function Ic(a, c, d) {
        a = a | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0;e = x;x = x + 48 | 0;f = e;Ec(f, d);va(a, c, f);d = (b[f + 40 >> 2] | 0) + (b[c + 40 >> 2] | 0) | 0;b[a + 40 >> 2] = d;if ((d | 0) <= 67108863) {
          x = e;return;
        }Bc(a);x = e;return;
      }function Jc(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0;e = x;x = x + 48 | 0;d = e;qa(d, 496);ha(a, c);b[a + 40 >> 2] = b[c + 40 >> 2];if (!(Ja(c) | 0)) {
          la(a, 1) | 0;x = e;return;
        } else {
          va(a, a, d);ka(a) | 0;r() | 0;la(a, 1) | 0;x = e;return;
        }
      }function Kc(c, d, e) {
        c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0;t = x;x = x + 1120 | 0;o = t + 1072 | 0;p = t + 992 | 0;f = t + 944 | 0;g = t + 896 | 0;q = t + 816 | 0;s = t + 48 | 0;h = t;ka(d) | 0;r() | 0;ka(e) | 0;r() | 0;ha(h, e);n = ga(h) | 0;k = (n + 3 | 0) / 4 | 0;if ((n | 0) >= -6) {
          e = 0;while (1) {
            m = La(h, 4) | 0;a[q + e >> 0] = m;Aa(h, m << 24 >> 24);ka(h) | 0;r() | 0;la(h, 4) | 0;if ((e | 0) < (k | 0)) e = e + 1 | 0;else break;
          }
        }ua(g);qa(f, 544);Ca(p, g, f);qa(o, 496);m = 1584;l = b[m >> 2] | 0;m = b[m + 4 >> 2] | 0;Ea(s, o, l, m, p);b[s + 40 >> 2] = 2;ha(s + 48 | 0, d);j = d + 40 | 0;i = b[j >> 2] | 0;b[s + 88 >> 2] = i;e = 2;g = i;h = i;i = ((i | 0) < 0) << 31 >> 31;while (1) {
          f = s + ((e + -1 | 0) * 48 | 0) | 0;i = td(h | 0, i | 0, g | 0, ((g | 0) < 0) << 31 >> 31 | 0) | 0;h = r() | 0;if ((h | 0) > 0 | (h | 0) == 0 & i >>> 0 > 67108863) Bc(f);Ca(p, f, d);qa(o, 496);Ea(s + (e * 48 | 0) | 0, o, l, m, p);b[s + (e * 48 | 0) + 40 >> 2] = 2;e = e + 1 | 0;if ((e | 0) == 16) break;g = b[j >> 2] | 0;h = 2;i = 0;
        }f = a[q + k >> 0] | 0;ha(c, s + (f * 48 | 0) | 0);f = b[s + (f * 48 | 0) + 40 >> 2] | 0;h = c + 40 | 0;b[h >> 2] = f;if ((n | 0) <= 0) {
          Bc(c);x = t;return;
        }d = ((f | 0) < 0) << 31 >> 31;e = k + -1 | 0;k = td(f | 0, d | 0, f | 0, d | 0) | 0;d = r() | 0;if (d >>> 0 > 0 | (d | 0) == 0 & k >>> 0 > 67108863) Bc(c);Da(p, c);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;Da(p, c);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;Da(p, c);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;Da(p, c);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;f = a[q + e >> 0] | 0;if ((b[s + (f * 48 | 0) + 40 >> 2] | 0) > 33554431) Bc(c);Ca(p, c, s + (f * 48 | 0) | 0);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;if ((n | 0) <= 4) {
          Bc(c);x = t;return;
        }do {
          f = e;e = e + -1 | 0;Da(p, c);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;Da(p, c);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;Da(p, c);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;Da(p, c);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;g = a[q + e >> 0] | 0;if ((b[s + (g * 48 | 0) + 40 >> 2] | 0) > 33554431) Bc(c);Ca(p, c, s + (g * 48 | 0) | 0);qa(o, 496);Ea(c, o, l, m, p);b[h >> 2] = 2;
        } while ((f | 0) > 1);Bc(c);x = t;return;
      }function Lc(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;c = x;x = x + 224 | 0;f = c + 176 | 0;d = c + 96 | 0;e = c + 48 | 0;g = c;ua(g);qa(e, 544);Ca(d, g, e);qa(f, 496);e = 1584;Ea(a, f, b[e >> 2] | 0, b[e + 4 >> 2] | 0, d);b[a + 40 >> 2] = 2;x = c;return;
      }function Mc(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0;c = x;x = x + 48 | 0;d = c;qa(d, 496);Aa(d, 2);ka(d) | 0;r() | 0;Kc(a, b, d);x = c;return;
      }function Nc(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0;c = x;x = x + 96 | 0;d = c + 48 | 0;e = c;qa(e, 496);Ha(b, e);ha(d, e);wa(d, 1);ka(d) | 0;r() | 0;la(d, 2) | 0;Kc(a, b, d);x = c;return;
      }function Oc(a) {
        a = a | 0;rb(a + 37960 | 0);rb(a + 37376 | 0);rb(a + 36792 | 0);rb(a + 36208 | 0);rb(a + 35624 | 0);rb(a + 35040 | 0);rb(a + 34456 | 0);rb(a + 33872 | 0);rb(a + 33288 | 0);rb(a + 32704 | 0);rb(a + 32120 | 0);rb(a + 31536 | 0);rb(a + 30952 | 0);rb(a + 30368 | 0);rb(a + 29784 | 0);rb(a + 29200 | 0);rb(a + 28616 | 0);rb(a + 28032 | 0);rb(a + 27448 | 0);rb(a + 26864 | 0);rb(a + 26280 | 0);rb(a + 25696 | 0);rb(a + 25112 | 0);rb(a + 24528 | 0);rb(a + 23944 | 0);rb(a + 23360 | 0);rb(a + 22776 | 0);rb(a + 22192 | 0);rb(a + 21608 | 0);rb(a + 21024 | 0);rb(a + 20440 | 0);rb(a + 19856 | 0);rb(a + 19272 | 0);rb(a + 18688 | 0);rb(a + 18104 | 0);rb(a + 17520 | 0);rb(a + 16936 | 0);rb(a + 16352 | 0);rb(a + 15768 | 0);rb(a + 15184 | 0);rb(a + 14600 | 0);rb(a + 14016 | 0);rb(a + 13432 | 0);rb(a + 12848 | 0);rb(a + 12264 | 0);rb(a + 11680 | 0);rb(a + 11096 | 0);rb(a + 10512 | 0);rb(a + 9928 | 0);rb(a + 9344 | 0);rb(a + 8760 | 0);rb(a + 8176 | 0);rb(a + 7592 | 0);rb(a + 7008 | 0);rb(a + 6424 | 0);rb(a + 5840 | 0);rb(a + 5256 | 0);rb(a + 4672 | 0);rb(a + 4088 | 0);rb(a + 3504 | 0);rb(a + 2920 | 0);rb(a + 2336 | 0);rb(a + 1752 | 0);rb(a + 1168 | 0);rb(a + 584 | 0);rb(a);return;
      }function Pc(a, b) {
        a = a | 0;b = b | 0;var c = 0;rb(a);c = 65;while (1) {
          xb(a, a);zb(a, b + (c * 584 | 0) | 0);if (c >>> 0 > 1) c = c + -1 | 0;else break;
        }tb(a, a);zb(a, b);return;
      }function Qc(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0;p = x;x = x + 2800 | 0;d = p + 96 | 0;j = p + 48 | 0;k = p;l = p + 2208 | 0;m = p + 1624 | 0;n = p + 1336 | 0;o = p + 1048 | 0;e = p + 760 | 0;q = p + 616 | 0;f = p + 568 | 0;g = p + 520 | 0;h = p + 232 | 0;i = p + 136 | 0;xc(f, 592);xc(g, 640);Jb(i, f, g);qa(d, 208);Ba(j, d, 6) | 0;r() | 0;Aa(j, 2);ka(j) | 0;r() | 0;Ba(k, j, 3) | 0;r() | 0;ka(k) | 0;r() | 0;d = ga(k) | 0;Qa(e, b);cb(q, c);Sa(e);fb(q);wc(f, q);wc(g, q + 48 | 0);Qa(n, e);Qa(o, e);Xa(o);if ((d | 0) <= 2) {
          Xa(n);Qa(h, e);ab(h, i);Rc(l, n, h, f, g);ab(h, i);Xa(h);Rc(m, n, h, f, g);Ab(l, m);zb(a, l);x = p;return;
        }b = d + -2 | 0;while (1) {
          Rc(l, n, n, f, g);q = Ka(k, b) | 0;switch (q - (Ka(j, b) | 0) | 0) {case 1:
              {
                Rc(m, n, e, f, g);Ab(l, m);break;
              }case -1:
              {
                Rc(m, n, o, f, g);Ab(l, m);break;
              }default:
              {}}zb(a + (b * 584 | 0) | 0, l);if ((b | 0) > 1) b = b + -1 | 0;else break;
        }Xa(n);Qa(h, e);ab(h, i);Rc(l, n, h, f, g);ab(h, i);Xa(h);Rc(m, n, h, f, g);Ab(l, m);zb(a, l);x = p;return;
      }function Rc(a, c, d, e, f) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0;r = x;x = x + 1344 | 0;m = r + 1248 | 0;n = r + 1152 | 0;o = r + 1056 | 0;p = r + 960 | 0;q = r + 864 | 0;g = r + 768 | 0;h = r + 672 | 0;i = r + 576 | 0;j = r + 384 | 0;k = r + 192 | 0;l = r;if ((c | 0) == (d | 0)) {
          Lb(q, c);Lb(g, c + 96 | 0);Lb(h, c + 192 | 0);Lb(i, g);Vb(i, i, h);Ub(q, q);Ub(g, g);Ub(h, h);Tb(i, i, 4);Ob(i, i);Xb(i);Tb(q, q, 6);Sb(q, q, e);Tb(h, h, (b[399] | 0) * 3 | 0);Sb(i, i, f);Zb(h);Xb(h);Qb(g, g, g);Rb(h, h, g);Xb(h);ac(j, i, h);bc(k, q);dc(l);Ya(c) | 0;ub(a, j, k, l);q = a + 576 | 0;b[q >> 2] = 2;x = r;return;
        } else {
          Lb(m, c);Lb(n, c + 96 | 0);Lb(o, c + 192 | 0);Lb(p, o);q = d + 96 | 0;Vb(o, o, q);Vb(p, p, d);Rb(m, m, p);Xb(m);Rb(n, n, o);Xb(n);Lb(o, m);Sb(m, m, f);Vb(o, o, q);Lb(p, n);Vb(p, p, d);Rb(p, p, o);Xb(p);Sb(n, n, e);Ob(n, n);Xb(n);ac(j, m, p);bc(k, n);dc(l);Za(c, d) | 0;ub(a, j, k, l);q = a + 576 | 0;b[q >> 2] = 2;x = r;return;
        }
      }function Sc(a) {
        a = a | 0;var b = 0,
            c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0;b = x;x = x + 3152 | 0;g = b + 3056 | 0;i = b;k = b + 3008 | 0;j = b + 2960 | 0;h = b + 2376 | 0;e = b + 1792 | 0;d = b + 1208 | 0;f = b + 624 | 0;c = b + 40 | 0;qa(i, 208);xc(k, 592);xc(j, 640);Jb(g, k, j);Bb(h, a);tb(a, a);yb(a, h);qb(h, a);Cb(a, g);Cb(a, g);yb(a, h);Db(h, a, i);vb(c, h);qb(e, h);yb(e, c);qb(f, c);Cb(f, g);yb(f, c);vb(f, f);yb(f, c);Db(h, e, i);tb(e, a);qb(d, h);Cb(d, g);Cb(d, g);yb(d, e);tb(h, h);qb(c, h);Cb(c, g);yb(c, h);vb(h, h);yb(d, h);Db(h, c, i);vb(h, h);tb(h, h);yb(c, h);Cb(a, g);qb(e, a);Cb(a, g);yb(e, a);Cb(a, g);yb(e, a);vb(a, c);yb(a, f);qb(c, a);yb(c, e);yb(a, d);vb(a, a);yb(a, c);wb(a);x = b;return;
      }function Tc(a, b) {
        a = a | 0;b = b | 0;kb(a, b);return;
      }function Uc(a, b) {
        a = a | 0;b = b | 0;_a(a, b);return;
      }function Vc(c, d, e, f) {
        c = c | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;m = x;x = x + 1168 | 0;j = m + 792 | 0;k = m + 64 | 0;l = m;switch (c | 0) {case 32:
            {
              Yc(j);break;
            }case 48:
            {
              ad(k);break;
            }case 64:
            {
              gd(k);break;
            }default:
            {}}a: do if ((d | 0) > 0) {
          i = d >>> 24;g = d >>> 16 & 255;h = d >>> 8 & 255;d = d & 255;switch (c | 0) {case 32:
              {
                Zc(j, i);Zc(j, g);Zc(j, h);Zc(j, d);break a;
              }case 48:
              {
                bd(k, i);bd(k, g);bd(k, h);bd(k, d);break a;
              }case 64:
              {
                dd(k, i);dd(k, g);dd(k, h);dd(k, d);break a;
              }default:
              break a;}
        } while (0);b: do if (e | 0 ? (b[e >> 2] | 0) > 0 : 0) {
          g = e + 8 | 0;switch (c | 0) {case 32:
              {
                d = 0;do {
                  Zc(j, a[(b[g >> 2] | 0) + d >> 0] | 0);d = d + 1 | 0;
                } while ((d | 0) < (b[e >> 2] | 0));break;
              }case 48:
              {
                d = 0;do {
                  bd(k, a[(b[g >> 2] | 0) + d >> 0] | 0);d = d + 1 | 0;
                } while ((d | 0) < (b[e >> 2] | 0));break;
              }case 64:
              {
                d = 0;do {
                  dd(k, a[(b[g >> 2] | 0) + d >> 0] | 0);d = d + 1 | 0;
                } while ((d | 0) < (b[e >> 2] | 0));break;
              }default:
              break b;}
        } while (0);if ((c | 0) > 0) zd(l | 0, 0, c | 0) | 0;switch (c | 0) {case 32:
            {
              $c(j, l);break;
            }case 48:
            {
              ed(k, l);break;
            }case 64:
            {
              fd(k, l);break;
            }default:
            {}}jd(f);d = b[f + 4 >> 2] | 0;if ((d | 0) > (c | 0)) {
          id(f, 0, d - c | 0);hd(f, l, c);x = m;return;
        } else {
          hd(f, l, d);x = m;return;
        }
      }function Wc(d, e, f) {
        d = d | 0;e = e | 0;f = f | 0;var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = 0,
            K = 0,
            L = 0;L = x;x = x + 768 | 0;J = L + 396 | 0;I = L;i = L + 32 | 0;K = d + 92 | 0;b[K >> 2] = 0;g = d;h = g + 84 | 0;do {
          b[g >> 2] = 0;g = g + 4 | 0;
        } while ((g | 0) < (h | 0));if ((e | 0) > 0) {
          Yc(i);g = 0;do {
            Zc(i, a[f + g >> 0] | 0);g = g + 1 | 0;
          } while ((g | 0) != (e | 0));$c(i, I);l = d + 88 | 0;k = d + 84 | 0;n = d + 32 | 0;o = d + 64 | 0;p = d + 12 | 0;q = d + 44 | 0;r = d + 76 | 0;s = d + 24 | 0;t = d + 56 | 0;u = d + 4 | 0;v = d + 36 | 0;w = d + 68 | 0;y = d + 16 | 0;z = d + 48 | 0;A = d + 80 | 0;B = d + 28 | 0;C = d + 60 | 0;D = d + 8 | 0;E = d + 40 | 0;F = d + 72 | 0;G = d + 20 | 0;H = d + 52 | 0;m = 0;do {
            g = m << 2;g = c[I + (g | 1) >> 0] << 8 | c[I + g >> 0] | c[I + (g | 2) >> 0] << 16 | c[I + (g | 3) >> 0] << 24;b[l >> 2] = 0;b[k >> 2] = 0;b[d >> 2] = g ^ b[d >> 2];b[n >> 2] = b[n >> 2] ^ 1;h = g + -1 | 0;b[o >> 2] = b[o >> 2] ^ h;g = 2 - g | 0;b[p >> 2] = b[p >> 2] ^ g;h = h - g | 0;b[q >> 2] = b[q >> 2] ^ h;g = g - h | 0;b[r >> 2] = b[r >> 2] ^ g;h = h - g | 0;b[s >> 2] = b[s >> 2] ^ h;g = g - h | 0;b[t >> 2] = b[t >> 2] ^ g;h = h - g | 0;b[u >> 2] = b[u >> 2] ^ h;g = g - h | 0;b[v >> 2] = b[v >> 2] ^ g;h = h - g | 0;b[w >> 2] = b[w >> 2] ^ h;g = g - h | 0;b[y >> 2] = b[y >> 2] ^ g;h = h - g | 0;b[z >> 2] = b[z >> 2] ^ h;g = g - h | 0;b[A >> 2] = b[A >> 2] ^ g;h = h - g | 0;b[B >> 2] = b[B >> 2] ^ h;g = g - h | 0;b[C >> 2] = b[C >> 2] ^ g;h = h - g | 0;b[D >> 2] = b[D >> 2] ^ h;g = g - h | 0;b[E >> 2] = b[E >> 2] ^ g;h = h - g | 0;b[F >> 2] = b[F >> 2] ^ h;g = g - h | 0;b[G >> 2] = b[G >> 2] ^ g;b[H >> 2] = b[H >> 2] ^ h - g;g = 0;h = 0;while (1) {
              b[k >> 2] = h + 1;if ((h | 0) >= 20) {
                b[k >> 2] = 0;j = 0;h = 15;while (1) {
                  i = (h | 0) == 21 ? 0 : h;h = b[d + (i << 2) >> 2] | 0;e = d + (j << 2) | 0;f = h - (b[e >> 2] | 0) - (b[l >> 2] | 0) | 0;if ((f | 0) != (h | 0)) b[l >> 2] = f >>> 0 > h >>> 0 & 1;b[e >> 2] = f;j = j + 1 | 0;if ((j | 0) == 21) break;else h = i + 1 | 0;
                }
              }g = g + 1 | 0;if ((g | 0) == 1e4) break;h = b[k >> 2] | 0;
            }m = m + 1 | 0;
          } while ((m | 0) != 8);m = d;
        } else {
          l = d + 88 | 0;m = d;k = d + 84 | 0;
        }Yc(J);j = 0;do {
          I = b[k >> 2] | 0;g = I + 1 | 0;b[k >> 2] = g;if ((I | 0) < 20) g = d + (g << 2) | 0;else {
            b[k >> 2] = 0;i = 0;g = 15;while (1) {
              f = (g | 0) == 21 ? 0 : g;g = b[d + (f << 2) >> 2] | 0;h = d + (i << 2) | 0;e = g - (b[h >> 2] | 0) - (b[l >> 2] | 0) | 0;if ((e | 0) != (g | 0)) b[l >> 2] = e >>> 0 > g >>> 0 & 1;b[h >> 2] = e;i = i + 1 | 0;if ((i | 0) == 21) {
                g = m;break;
              } else g = f + 1 | 0;
            }
          }Zc(J, b[g >> 2] | 0);j = j + 1 | 0;
        } while ((j | 0) != 128);$c(J, d + 96 | 0);b[K >> 2] = 0;x = L;return;
      }function Xc(a) {
        a = a | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;o = x;x = x + 368 | 0;j = o;l = a + 92 | 0;n = b[l >> 2] | 0;b[l >> 2] = n + 1;m = c[a + 96 + n >> 0] | 0;if ((n | 0) <= 30) {
          x = o;return m | 0;
        }Yc(j);n = a + 84 | 0;k = a + 88 | 0;i = 0;do {
          h = b[n >> 2] | 0;d = h + 1 | 0;b[n >> 2] = d;if ((h | 0) < 20) d = a + (d << 2) | 0;else {
            b[n >> 2] = 0;h = 0;d = 15;while (1) {
              g = (d | 0) == 21 ? 0 : d;d = b[a + (g << 2) >> 2] | 0;e = a + (h << 2) | 0;f = d - (b[e >> 2] | 0) - (b[k >> 2] | 0) | 0;if ((f | 0) != (d | 0)) b[k >> 2] = f >>> 0 > d >>> 0 & 1;b[e >> 2] = f;h = h + 1 | 0;if ((h | 0) == 21) {
                d = a;break;
              } else d = g + 1 | 0;
            }
          }Zc(j, b[d >> 2] | 0);i = i + 1 | 0;
        } while ((i | 0) != 128);$c(j, a + 96 | 0);b[l >> 2] = 0;x = o;return m | 0;
      }function Yc(a) {
        a = a | 0;zd(a + 40 | 0, 0, 256) | 0;b[a + 4 >> 2] = 0;b[a >> 2] = 0;b[a + 8 >> 2] = 1779033703;b[a + 12 >> 2] = -1150833019;b[a + 16 >> 2] = 1013904242;b[a + 20 >> 2] = -1521486534;b[a + 24 >> 2] = 1359893119;b[a + 28 >> 2] = -1694144372;b[a + 32 >> 2] = 528734635;b[a + 36 >> 2] = 1541459225;b[a + 360 >> 2] = 32;return;
      }function Zc(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0;d = b[a >> 2] | 0;e = a + 40 + ((d >>> 5 & 15) << 2) | 0;b[e >> 2] = b[e >> 2] << 8 | c & 255;c = d + 8 | 0;b[a >> 2] = c;if (c) {
          if (c & 511 | 0) return;
        } else {
          e = a + 4 | 0;b[e >> 2] = (b[e >> 2] | 0) + 1;b[a >> 2] = 0;
        }_c(a);return;
      }function _c(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0;c = 16;d = b[a + 40 >> 2] | 0;do {
          A = b[a + 40 + (c + -2 << 2) >> 2] | 0;z = d;d = b[a + 40 + (c + -15 << 2) >> 2] | 0;b[a + 40 + (c << 2) >> 2] = z + (b[a + 40 + (c + -7 << 2) >> 2] | 0) + ((A >>> 19 | A << 13) ^ A >>> 10 ^ (A >>> 17 | A << 15)) + ((d >>> 18 | d << 14) ^ d >>> 3 ^ (d >>> 7 | d << 25));c = c + 1 | 0;
        } while ((c | 0) != 64);l = a + 8 | 0;m = b[l >> 2] | 0;n = a + 12 | 0;o = b[n >> 2] | 0;p = a + 16 | 0;q = b[p >> 2] | 0;r = a + 20 | 0;s = b[r >> 2] | 0;t = a + 24 | 0;u = b[t >> 2] | 0;v = a + 28 | 0;w = b[v >> 2] | 0;x = a + 32 | 0;y = b[x >> 2] | 0;z = a + 36 | 0;A = b[z >> 2] | 0;e = m;f = o;c = A;g = y;h = w;i = u;d = s;j = q;k = 0;while (1) {
          B = ((i >>> 6 | i << 26) ^ (i >>> 11 | i << 21) ^ (i >>> 25 | i << 7)) + c + (g & ~i ^ h & i) + (b[688 + (k << 2) >> 2] | 0) + (b[a + 40 + (k << 2) >> 2] | 0) | 0;c = B + d | 0;d = ((e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)) + (e & (f ^ j) ^ f & j) + B | 0;k = k + 1 | 0;if ((k | 0) == 64) break;else {
            F = j;E = i;D = h;C = g;B = e;e = d;i = c;j = f;d = F;h = E;g = D;c = C;f = B;
          }
        }b[l >> 2] = d + m;b[n >> 2] = e + o;b[p >> 2] = f + q;b[r >> 2] = j + s;b[t >> 2] = c + u;b[v >> 2] = i + w;b[x >> 2] = h + y;b[z >> 2] = g + A;return;
      }function $c(c, d) {
        c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;g = b[c >> 2] | 0;j = c + 4 | 0;h = b[j >> 2] | 0;e = c + 40 + ((g >>> 5 & 15) << 2) | 0;b[e >> 2] = b[e >> 2] << 8 | 128;e = g + 8 | 0;b[c >> 2] = e;if (e) {
          f = e & 511;if (!f) i = 4;
        } else {
          b[j >> 2] = h + 1;b[c >> 2] = 0;i = 4;
        }if ((i | 0) == 4) {
          _c(c);e = b[c >> 2] | 0;f = e & 511;
        }if ((f | 0) != 448) do {
          f = c + 40 + ((e >>> 5 & 15) << 2) | 0;b[f >> 2] = b[f >> 2] << 8;e = e + 8 | 0;b[c >> 2] = e;if (e) {
            if (!(e & 511)) i = 10;
          } else {
            b[j >> 2] = (b[j >> 2] | 0) + 1;b[c >> 2] = 0;i = 10;
          }if ((i | 0) == 10) {
            i = 0;_c(c);e = b[c >> 2] | 0;
          }
        } while ((e & 511 | 0) != 448);b[c + 96 >> 2] = h;b[c + 100 >> 2] = g;_c(c);f = c + 360 | 0;if ((b[f >> 2] | 0) > 0) {
          e = 0;do {
            a[d + e >> 0] = (b[c + 8 + (e >>> 2 << 2) >> 2] | 0) >>> (e << 3 & 24 ^ 24);e = e + 1 | 0;
          } while ((e | 0) < (b[f >> 2] | 0));
        }zd(c + 40 | 0, 0, 256) | 0;b[j >> 2] = 0;b[c >> 2] = 0;b[c + 8 >> 2] = 1779033703;b[c + 12 >> 2] = -1150833019;b[c + 16 >> 2] = 1013904242;b[c + 20 >> 2] = -1521486534;b[c + 24 >> 2] = 1359893119;b[c + 28 >> 2] = -1694144372;b[c + 32 >> 2] = 528734635;b[c + 36 >> 2] = 1541459225;b[f >> 2] = 32;return;
      }function ad(a) {
        a = a | 0;var c = 0;zd(a + 80 | 0, 0, 640) | 0;b[a >> 2] = 0;b[a + 4 >> 2] = 0;b[a + 8 >> 2] = 0;b[a + 12 >> 2] = 0;c = a + 16 | 0;b[c >> 2] = -1056596264;b[c + 4 >> 2] = -876896931;c = a + 24 | 0;b[c >> 2] = 914150663;b[c + 4 >> 2] = 1654270250;c = a + 32 | 0;b[c >> 2] = 812702999;b[c + 4 >> 2] = -1856437926;c = a + 40 | 0;b[c >> 2] = -150054599;b[c + 4 >> 2] = 355462360;c = a + 48 | 0;b[c >> 2] = -4191439;b[c + 4 >> 2] = 1731405415;c = a + 56 | 0;b[c >> 2] = 1750603025;b[c + 4 >> 2] = -1900787065;c = a + 64 | 0;b[c >> 2] = 1694076839;b[c + 4 >> 2] = -619958771;c = a + 72 | 0;b[c >> 2] = -1090891868;b[c + 4 >> 2] = 1203062813;b[a + 720 >> 2] = 48;return;
      }function bd(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;d = a;e = b[d >> 2] | 0;d = b[d + 4 >> 2] | 0;f = wd(e | 0, d | 0, 6) | 0;r() | 0;f = a + 80 + ((f & 15) << 3) | 0;h = f;h = xd(b[h >> 2] | 0, b[h + 4 >> 2] | 0, 8) | 0;g = r() | 0;b[f >> 2] = h | c & 255;b[f + 4 >> 2] = g;c = nd(e | 0, d | 0, 8, 0) | 0;d = r() | 0;e = a;b[e >> 2] = c;b[e + 4 >> 2] = d;if (!((c | 0) == 0 & (d | 0) == 0)) {
          if (!((c & 1023 | 0) == 0 & 0 == 0)) return;
        } else {
          h = a + 8 | 0;f = h;f = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, 1, 0) | 0;g = r() | 0;b[h >> 2] = f;b[h + 4 >> 2] = g;h = a;b[h >> 2] = 0;b[h + 4 >> 2] = 0;
        }cd(a);return;
      }function cd(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = 0,
            K = 0,
            L = 0,
            M = 0,
            N = 0,
            O = 0,
            P = 0,
            Q = 0,
            R = 0,
            S = 0,
            T = 0,
            U = 0,
            V = 0,
            W = 0,
            X = 0,
            Y = 0,
            Z = 0;e = a + 80 | 0;c = 16;d = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;do {
          I = a + 80 + (c + -2 << 3) | 0;E = b[I >> 2] | 0;I = b[I + 4 >> 2] | 0;J = wd(E | 0, I | 0, 19) | 0;L = r() | 0;K = xd(E | 0, I | 0, 45) | 0;L = L | (r() | 0);G = wd(E | 0, I | 0, 61) | 0;F = r() | 0;H = xd(E | 0, I | 0, 3) | 0;F = F | (r() | 0);I = wd(E | 0, I | 0, 6) | 0;L = F ^ (r() | 0) ^ L;F = a + 80 + (c + -7 << 3) | 0;E = b[F >> 2] | 0;F = b[F + 4 >> 2] | 0;R = a + 80 + (c + -15 << 3) | 0;C = d;d = b[R >> 2] | 0;D = e;e = b[R + 4 >> 2] | 0;R = wd(d | 0, e | 0, 1) | 0;P = r() | 0;Q = xd(d | 0, e | 0, 63) | 0;P = P | (r() | 0);M = wd(d | 0, e | 0, 8) | 0;B = r() | 0;N = xd(d | 0, e | 0, 56) | 0;B = B | (r() | 0);O = wd(d | 0, e | 0, 7) | 0;P = B ^ (r() | 0) ^ P;F = nd(C | 0, D | 0, E | 0, F | 0) | 0;L = nd(F | 0, r() | 0, (G | H) ^ I ^ (J | K) | 0, L | 0) | 0;P = nd(L | 0, r() | 0, (M | N) ^ O ^ (R | Q) | 0, P | 0) | 0;Q = r() | 0;R = a + 80 + (c << 3) | 0;b[R >> 2] = P;b[R + 4 >> 2] = Q;c = c + 1 | 0;
        } while ((c | 0) != 80);K = a + 16 | 0;M = K;L = b[M >> 2] | 0;M = b[M + 4 >> 2] | 0;N = a + 24 | 0;P = N;O = b[P >> 2] | 0;P = b[P + 4 >> 2] | 0;Q = a + 32 | 0;h = Q;R = b[h >> 2] | 0;h = b[h + 4 >> 2] | 0;i = a + 40 | 0;k = i;j = b[k >> 2] | 0;k = b[k + 4 >> 2] | 0;l = a + 48 | 0;n = l;m = b[n >> 2] | 0;n = b[n + 4 >> 2] | 0;o = a + 56 | 0;q = o;p = b[q >> 2] | 0;q = b[q + 4 >> 2] | 0;s = a + 64 | 0;u = s;t = b[u >> 2] | 0;u = b[u + 4 >> 2] | 0;v = a + 72 | 0;x = v;w = b[x >> 2] | 0;x = b[x + 4 >> 2] | 0;g = 0;y = m;z = n;c = w;d = x;A = p;B = q;C = t;D = u;E = L;F = M;G = R;H = O;I = h;J = P;e = j;f = k;while (1) {
          V = wd(y | 0, z | 0, 14) | 0;Y = r() | 0;W = xd(y | 0, z | 0, 50) | 0;Y = Y | (r() | 0);U = wd(y | 0, z | 0, 18) | 0;S = r() | 0;X = xd(y | 0, z | 0, 46) | 0;S = Y ^ (S | (r() | 0));Y = wd(y | 0, z | 0, 41) | 0;T = r() | 0;Z = xd(y | 0, z | 0, 23) | 0;T = nd((V | W) ^ (U | X) ^ (Y | Z) | 0, S ^ (T | (r() | 0)) | 0, c | 0, d | 0) | 0;T = nd(T | 0, r() | 0, C & ~y ^ A & y | 0, D & ~z ^ B & z | 0) | 0;S = r() | 0;Z = 944 + (g << 3) | 0;Z = nd(T | 0, S | 0, b[Z >> 2] | 0, b[Z + 4 >> 2] | 0) | 0;S = r() | 0;T = a + 80 + (g << 3) | 0;T = nd(Z | 0, S | 0, b[T >> 2] | 0, b[T + 4 >> 2] | 0) | 0;S = r() | 0;Z = wd(E | 0, F | 0, 28) | 0;d = r() | 0;Y = xd(E | 0, F | 0, 36) | 0;d = d | (r() | 0);X = wd(E | 0, F | 0, 34) | 0;U = r() | 0;W = xd(E | 0, F | 0, 30) | 0;U = d ^ (U | (r() | 0));d = wd(E | 0, F | 0, 39) | 0;V = r() | 0;c = xd(E | 0, F | 0, 25) | 0;V = nd((Z | Y) ^ (X | W) ^ (d | c) | 0, U ^ (V | (r() | 0)) | 0, E & (H ^ G) ^ H & G | 0, F & (J ^ I) ^ J & I | 0) | 0;U = r() | 0;c = nd(T | 0, S | 0, e | 0, f | 0) | 0;d = r() | 0;e = nd(V | 0, U | 0, T | 0, S | 0) | 0;f = r() | 0;g = g + 1 | 0;if ((g | 0) == 80) break;else {
            S = F;T = J;U = E;V = H;W = z;X = y;Y = D;Z = C;y = c;z = d;E = e;F = f;f = I;e = G;J = S;I = T;H = U;G = V;D = B;C = A;B = W;A = X;d = Y;c = Z;
          }
        }Z = nd(e | 0, f | 0, L | 0, M | 0) | 0;Y = r() | 0;X = K;b[X >> 2] = Z;b[X + 4 >> 2] = Y;X = nd(E | 0, F | 0, O | 0, P | 0) | 0;Y = r() | 0;Z = N;b[Z >> 2] = X;b[Z + 4 >> 2] = Y;Z = nd(H | 0, J | 0, R | 0, h | 0) | 0;Y = r() | 0;X = Q;b[X >> 2] = Z;b[X + 4 >> 2] = Y;X = nd(G | 0, I | 0, j | 0, k | 0) | 0;Y = r() | 0;Z = i;b[Z >> 2] = X;b[Z + 4 >> 2] = Y;Z = nd(c | 0, d | 0, m | 0, n | 0) | 0;Y = r() | 0;X = l;b[X >> 2] = Z;b[X + 4 >> 2] = Y;X = nd(y | 0, z | 0, p | 0, q | 0) | 0;Y = r() | 0;Z = o;b[Z >> 2] = X;b[Z + 4 >> 2] = Y;Z = nd(A | 0, B | 0, t | 0, u | 0) | 0;Y = r() | 0;X = s;b[X >> 2] = Z;b[X + 4 >> 2] = Y;X = nd(C | 0, D | 0, w | 0, x | 0) | 0;Y = r() | 0;Z = v;b[Z >> 2] = X;b[Z + 4 >> 2] = Y;return;
      }function dd(a, c) {
        a = a | 0;c = c | 0;var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;d = a;e = b[d >> 2] | 0;d = b[d + 4 >> 2] | 0;f = wd(e | 0, d | 0, 6) | 0;r() | 0;f = a + 80 + ((f & 15) << 3) | 0;h = f;h = xd(b[h >> 2] | 0, b[h + 4 >> 2] | 0, 8) | 0;g = r() | 0;b[f >> 2] = h | c & 255;b[f + 4 >> 2] = g;c = nd(e | 0, d | 0, 8, 0) | 0;d = r() | 0;e = a;b[e >> 2] = c;b[e + 4 >> 2] = d;if (!((c | 0) == 0 & (d | 0) == 0)) {
          if (!((c & 1023 | 0) == 0 & 0 == 0)) return;
        } else {
          h = a + 8 | 0;f = h;f = nd(b[f >> 2] | 0, b[f + 4 >> 2] | 0, 1, 0) | 0;g = r() | 0;b[h >> 2] = f;b[h + 4 >> 2] = g;h = a;b[h >> 2] = 0;b[h + 4 >> 2] = 0;
        }cd(a);return;
      }function ed(a, b) {
        a = a | 0;b = b | 0;fd(a, b);return;
      }function fd(c, d) {
        c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;l = c;k = b[l >> 2] | 0;l = b[l + 4 >> 2] | 0;m = c + 8 | 0;j = m;i = b[j >> 2] | 0;j = b[j + 4 >> 2] | 0;f = wd(k | 0, l | 0, 6) | 0;r() | 0;f = c + 80 + ((f & 15) << 3) | 0;h = f;h = xd(b[h >> 2] | 0, b[h + 4 >> 2] | 0, 8) | 0;e = r() | 0;b[f >> 2] = h | 128;b[f + 4 >> 2] = e;f = nd(k | 0, l | 0, 8, 0) | 0;e = r() | 0;h = c;b[h >> 2] = f;b[h + 4 >> 2] = e;if (!((f | 0) == 0 & (e | 0) == 0)) {
          g = f & 1023;if ((g | 0) == 0 & 0 == 0) n = 4;else h = 0;
        } else {
          g = nd(i | 0, j | 0, 1, 0) | 0;h = r() | 0;n = m;b[n >> 2] = g;b[n + 4 >> 2] = h;n = c;b[n >> 2] = 0;b[n + 4 >> 2] = 0;n = 4;
        }if ((n | 0) == 4) {
          cd(c);e = c;g = b[e >> 2] | 0;f = g;e = b[e + 4 >> 2] | 0;g = g & 1023;h = 0;
        }if (!((g | 0) == 896 & (h | 0) == 0)) do {
          h = wd(f | 0, e | 0, 6) | 0;r() | 0;h = c + 80 + ((h & 15) << 3) | 0;o = h;o = xd(b[o >> 2] | 0, b[o + 4 >> 2] | 0, 8) | 0;g = r() | 0;b[h >> 2] = o;b[h + 4 >> 2] = g;f = nd(f | 0, e | 0, 8, 0) | 0;e = r() | 0;h = c;b[h >> 2] = f;b[h + 4 >> 2] = e;if (!((f | 0) == 0 & (e | 0) == 0)) {
            if ((f & 1023 | 0) == 0 & 0 == 0) n = 10;
          } else {
            h = m;h = nd(b[h >> 2] | 0, b[h + 4 >> 2] | 0, 1, 0) | 0;o = r() | 0;n = m;b[n >> 2] = h;b[n + 4 >> 2] = o;n = c;b[n >> 2] = 0;b[n + 4 >> 2] = 0;n = 10;
          }if ((n | 0) == 10) {
            n = 0;cd(c);e = c;f = b[e >> 2] | 0;e = b[e + 4 >> 2] | 0;
          }
        } while (!((f & 1023 | 0) == 896 & 0 == 0));f = c + 192 | 0;b[f >> 2] = i;b[f + 4 >> 2] = j;f = c + 200 | 0;b[f >> 2] = k;b[f + 4 >> 2] = l;cd(c);f = c + 720 | 0;if ((b[f >> 2] | 0) > 0) {
          e = 0;do {
            o = c + 16 + (e >>> 3 << 3) | 0;o = wd(b[o >> 2] | 0, b[o + 4 >> 2] | 0, e << 3 & 56 ^ 56 | 0) | 0;r() | 0;a[d + e >> 0] = o;e = e + 1 | 0;
          } while ((e | 0) < (b[f >> 2] | 0));
        }zd(c + 80 | 0, 0, 640) | 0;b[c >> 2] = 0;b[c + 4 >> 2] = 0;b[c + 8 >> 2] = 0;b[c + 12 >> 2] = 0;o = c + 16 | 0;b[o >> 2] = -205731576;b[o + 4 >> 2] = 1779033703;o = c + 24 | 0;b[o >> 2] = -2067093701;b[o + 4 >> 2] = -1150833019;o = c + 32 | 0;b[o >> 2] = -23791573;b[o + 4 >> 2] = 1013904242;o = c + 40 | 0;b[o >> 2] = 1595750129;b[o + 4 >> 2] = -1521486534;o = c + 48 | 0;b[o >> 2] = -1377402159;b[o + 4 >> 2] = 1359893119;o = c + 56 | 0;b[o >> 2] = 725511199;b[o + 4 >> 2] = -1694144372;o = c + 64 | 0;b[o >> 2] = -79577749;b[o + 4 >> 2] = 528734635;o = c + 72 | 0;b[o >> 2] = 327033209;b[o + 4 >> 2] = 1541459225;b[f >> 2] = 64;return;
      }function gd(a) {
        a = a | 0;var c = 0;zd(a + 80 | 0, 0, 640) | 0;b[a >> 2] = 0;b[a + 4 >> 2] = 0;b[a + 8 >> 2] = 0;b[a + 12 >> 2] = 0;c = a + 16 | 0;b[c >> 2] = -205731576;b[c + 4 >> 2] = 1779033703;c = a + 24 | 0;b[c >> 2] = -2067093701;b[c + 4 >> 2] = -1150833019;c = a + 32 | 0;b[c >> 2] = -23791573;b[c + 4 >> 2] = 1013904242;c = a + 40 | 0;b[c >> 2] = 1595750129;b[c + 4 >> 2] = -1521486534;c = a + 48 | 0;b[c >> 2] = -1377402159;b[c + 4 >> 2] = 1359893119;c = a + 56 | 0;b[c >> 2] = 725511199;b[c + 4 >> 2] = -1694144372;c = a + 64 | 0;b[c >> 2] = -79577749;b[c + 4 >> 2] = 528734635;c = a + 72 | 0;b[c >> 2] = 327033209;b[c + 4 >> 2] = 1541459225;b[a + 720 >> 2] = 64;return;
      }function hd(c, d, e) {
        c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0,
            i = 0;h = c + 4 | 0;if ((e | 0) <= 0) return;i = c + 8 | 0;f = b[c >> 2] | 0;g = 0;while (1) {
          if ((f | 0) >= (b[h >> 2] | 0)) {
            f = 5;break;
          }a[(b[i >> 2] | 0) + f >> 0] = a[d + g >> 0] | 0;b[c >> 2] = (b[c >> 2] | 0) + 1;g = g + 1 | 0;if ((g | 0) >= (e | 0)) {
            f = 5;break;
          } else f = f + 1 | 0;
        }if ((f | 0) == 5) return;
      }function id(c, d, e) {
        c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0,
            i = 0;i = c + 4 | 0;if ((e | 0) <= 0) return;g = d & 255;h = c + 8 | 0;d = b[c >> 2] | 0;f = 0;while (1) {
          if ((d | 0) >= (b[i >> 2] | 0)) {
            d = 5;break;
          }a[(b[h >> 2] | 0) + d >> 0] = g;b[c >> 2] = (b[c >> 2] | 0) + 1;f = f + 1 | 0;if ((f | 0) >= (e | 0)) {
            d = 5;break;
          } else d = d + 1 | 0;
        }if ((d | 0) == 5) return;
      }function jd(a) {
        a = a | 0;b[a >> 2] = 0;return;
      }
      function kd(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0;w = x;x = x + 16 | 0;n = w;do if (a >>> 0 < 245) {
          k = a >>> 0 < 11 ? 16 : a + 11 & -8;a = k >>> 3;m = b[481] | 0;d = m >>> a;if (d & 3 | 0) {
            c = (d & 1 ^ 1) + a | 0;a = 1964 + (c << 1 << 2) | 0;d = a + 8 | 0;e = b[d >> 2] | 0;f = e + 8 | 0;g = b[f >> 2] | 0;if ((g | 0) == (a | 0)) b[481] = m & ~(1 << c);else {
              b[g + 12 >> 2] = a;b[d >> 2] = g;
            }v = c << 3;b[e + 4 >> 2] = v | 3;v = e + v + 4 | 0;b[v >> 2] = b[v >> 2] | 1;v = f;x = w;return v | 0;
          }l = b[483] | 0;if (k >>> 0 > l >>> 0) {
            if (d | 0) {
              c = 2 << a;c = d << a & (c | 0 - c);c = (c & 0 - c) + -1 | 0;i = c >>> 12 & 16;c = c >>> i;d = c >>> 5 & 8;c = c >>> d;g = c >>> 2 & 4;c = c >>> g;a = c >>> 1 & 2;c = c >>> a;e = c >>> 1 & 1;e = (d | i | g | a | e) + (c >>> e) | 0;c = 1964 + (e << 1 << 2) | 0;a = c + 8 | 0;g = b[a >> 2] | 0;i = g + 8 | 0;d = b[i >> 2] | 0;if ((d | 0) == (c | 0)) {
                a = m & ~(1 << e);b[481] = a;
              } else {
                b[d + 12 >> 2] = c;b[a >> 2] = d;a = m;
              }v = e << 3;h = v - k | 0;b[g + 4 >> 2] = k | 3;f = g + k | 0;b[f + 4 >> 2] = h | 1;b[g + v >> 2] = h;if (l | 0) {
                e = b[486] | 0;c = l >>> 3;d = 1964 + (c << 1 << 2) | 0;c = 1 << c;if (!(a & c)) {
                  b[481] = a | c;c = d;a = d + 8 | 0;
                } else {
                  a = d + 8 | 0;c = b[a >> 2] | 0;
                }b[a >> 2] = e;b[c + 12 >> 2] = e;b[e + 8 >> 2] = c;b[e + 12 >> 2] = d;
              }b[483] = h;b[486] = f;v = i;x = w;return v | 0;
            }g = b[482] | 0;if (g) {
              d = (g & 0 - g) + -1 | 0;f = d >>> 12 & 16;d = d >>> f;e = d >>> 5 & 8;d = d >>> e;h = d >>> 2 & 4;d = d >>> h;i = d >>> 1 & 2;d = d >>> i;j = d >>> 1 & 1;j = b[2228 + ((e | f | h | i | j) + (d >>> j) << 2) >> 2] | 0;d = j;i = j;j = (b[j + 4 >> 2] & -8) - k | 0;while (1) {
                a = b[d + 16 >> 2] | 0;if (!a) {
                  a = b[d + 20 >> 2] | 0;if (!a) break;
                }h = (b[a + 4 >> 2] & -8) - k | 0;f = h >>> 0 < j >>> 0;d = a;i = f ? a : i;j = f ? h : j;
              }h = i + k | 0;if (h >>> 0 > i >>> 0) {
                f = b[i + 24 >> 2] | 0;c = b[i + 12 >> 2] | 0;do if ((c | 0) == (i | 0)) {
                  a = i + 20 | 0;c = b[a >> 2] | 0;if (!c) {
                    a = i + 16 | 0;c = b[a >> 2] | 0;if (!c) {
                      d = 0;break;
                    }
                  }while (1) {
                    e = c + 20 | 0;d = b[e >> 2] | 0;if (!d) {
                      e = c + 16 | 0;d = b[e >> 2] | 0;if (!d) break;else {
                        c = d;a = e;
                      }
                    } else {
                      c = d;a = e;
                    }
                  }b[a >> 2] = 0;d = c;
                } else {
                  d = b[i + 8 >> 2] | 0;b[d + 12 >> 2] = c;b[c + 8 >> 2] = d;d = c;
                } while (0);do if (f | 0) {
                  c = b[i + 28 >> 2] | 0;a = 2228 + (c << 2) | 0;if ((i | 0) == (b[a >> 2] | 0)) {
                    b[a >> 2] = d;if (!d) {
                      b[482] = g & ~(1 << c);break;
                    }
                  } else {
                    v = f + 16 | 0;b[((b[v >> 2] | 0) == (i | 0) ? v : f + 20 | 0) >> 2] = d;if (!d) break;
                  }b[d + 24 >> 2] = f;c = b[i + 16 >> 2] | 0;if (c | 0) {
                    b[d + 16 >> 2] = c;b[c + 24 >> 2] = d;
                  }c = b[i + 20 >> 2] | 0;if (c | 0) {
                    b[d + 20 >> 2] = c;b[c + 24 >> 2] = d;
                  }
                } while (0);if (j >>> 0 < 16) {
                  v = j + k | 0;b[i + 4 >> 2] = v | 3;v = i + v + 4 | 0;b[v >> 2] = b[v >> 2] | 1;
                } else {
                  b[i + 4 >> 2] = k | 3;b[h + 4 >> 2] = j | 1;b[h + j >> 2] = j;if (l | 0) {
                    e = b[486] | 0;c = l >>> 3;d = 1964 + (c << 1 << 2) | 0;c = 1 << c;if (!(c & m)) {
                      b[481] = c | m;c = d;a = d + 8 | 0;
                    } else {
                      a = d + 8 | 0;c = b[a >> 2] | 0;
                    }b[a >> 2] = e;b[c + 12 >> 2] = e;b[e + 8 >> 2] = c;b[e + 12 >> 2] = d;
                  }b[483] = j;b[486] = h;
                }v = i + 8 | 0;x = w;return v | 0;
              } else m = k;
            } else m = k;
          } else m = k;
        } else if (a >>> 0 <= 4294967231) {
          a = a + 11 | 0;k = a & -8;e = b[482] | 0;if (e) {
            f = 0 - k | 0;a = a >>> 8;if (a) {
              if (k >>> 0 > 16777215) j = 31;else {
                m = (a + 1048320 | 0) >>> 16 & 8;q = a << m;i = (q + 520192 | 0) >>> 16 & 4;q = q << i;j = (q + 245760 | 0) >>> 16 & 2;j = 14 - (i | m | j) + (q << j >>> 15) | 0;j = k >>> (j + 7 | 0) & 1 | j << 1;
              }
            } else j = 0;d = b[2228 + (j << 2) >> 2] | 0;a: do if (!d) {
              d = 0;a = 0;q = 61;
            } else {
              a = 0;i = k << ((j | 0) == 31 ? 0 : 25 - (j >>> 1) | 0);g = 0;while (1) {
                h = (b[d + 4 >> 2] & -8) - k | 0;if (h >>> 0 < f >>> 0) if (!h) {
                  a = d;f = 0;q = 65;break a;
                } else {
                  a = d;f = h;
                }q = b[d + 20 >> 2] | 0;d = b[d + 16 + (i >>> 31 << 2) >> 2] | 0;g = (q | 0) == 0 | (q | 0) == (d | 0) ? g : q;if (!d) {
                  d = g;q = 61;break;
                } else i = i << 1;
              }
            } while (0);if ((q | 0) == 61) {
              if ((d | 0) == 0 & (a | 0) == 0) {
                a = 2 << j;a = (a | 0 - a) & e;if (!a) {
                  m = k;break;
                }m = (a & 0 - a) + -1 | 0;h = m >>> 12 & 16;m = m >>> h;g = m >>> 5 & 8;m = m >>> g;i = m >>> 2 & 4;m = m >>> i;j = m >>> 1 & 2;m = m >>> j;d = m >>> 1 & 1;a = 0;d = b[2228 + ((g | h | i | j | d) + (m >>> d) << 2) >> 2] | 0;
              }if (!d) {
                i = a;h = f;
              } else q = 65;
            }if ((q | 0) == 65) {
              g = d;while (1) {
                m = (b[g + 4 >> 2] & -8) - k | 0;d = m >>> 0 < f >>> 0;f = d ? m : f;a = d ? g : a;d = b[g + 16 >> 2] | 0;if (!d) d = b[g + 20 >> 2] | 0;if (!d) {
                  i = a;h = f;break;
                } else g = d;
              }
            }if (((i | 0) != 0 ? h >>> 0 < ((b[483] | 0) - k | 0) >>> 0 : 0) ? (l = i + k | 0, l >>> 0 > i >>> 0) : 0) {
              g = b[i + 24 >> 2] | 0;c = b[i + 12 >> 2] | 0;do if ((c | 0) == (i | 0)) {
                a = i + 20 | 0;c = b[a >> 2] | 0;if (!c) {
                  a = i + 16 | 0;c = b[a >> 2] | 0;if (!c) {
                    c = 0;break;
                  }
                }while (1) {
                  f = c + 20 | 0;d = b[f >> 2] | 0;if (!d) {
                    f = c + 16 | 0;d = b[f >> 2] | 0;if (!d) break;else {
                      c = d;a = f;
                    }
                  } else {
                    c = d;a = f;
                  }
                }b[a >> 2] = 0;
              } else {
                v = b[i + 8 >> 2] | 0;b[v + 12 >> 2] = c;b[c + 8 >> 2] = v;
              } while (0);do if (g) {
                a = b[i + 28 >> 2] | 0;d = 2228 + (a << 2) | 0;if ((i | 0) == (b[d >> 2] | 0)) {
                  b[d >> 2] = c;if (!c) {
                    e = e & ~(1 << a);b[482] = e;break;
                  }
                } else {
                  v = g + 16 | 0;b[((b[v >> 2] | 0) == (i | 0) ? v : g + 20 | 0) >> 2] = c;if (!c) break;
                }b[c + 24 >> 2] = g;a = b[i + 16 >> 2] | 0;if (a | 0) {
                  b[c + 16 >> 2] = a;b[a + 24 >> 2] = c;
                }a = b[i + 20 >> 2] | 0;if (a) {
                  b[c + 20 >> 2] = a;b[a + 24 >> 2] = c;
                }
              } while (0);b: do if (h >>> 0 < 16) {
                v = h + k | 0;b[i + 4 >> 2] = v | 3;v = i + v + 4 | 0;b[v >> 2] = b[v >> 2] | 1;
              } else {
                b[i + 4 >> 2] = k | 3;b[l + 4 >> 2] = h | 1;b[l + h >> 2] = h;c = h >>> 3;if (h >>> 0 < 256) {
                  d = 1964 + (c << 1 << 2) | 0;a = b[481] | 0;c = 1 << c;if (!(a & c)) {
                    b[481] = a | c;c = d;a = d + 8 | 0;
                  } else {
                    a = d + 8 | 0;c = b[a >> 2] | 0;
                  }b[a >> 2] = l;b[c + 12 >> 2] = l;b[l + 8 >> 2] = c;b[l + 12 >> 2] = d;break;
                }c = h >>> 8;if (c) {
                  if (h >>> 0 > 16777215) d = 31;else {
                    u = (c + 1048320 | 0) >>> 16 & 8;v = c << u;t = (v + 520192 | 0) >>> 16 & 4;v = v << t;d = (v + 245760 | 0) >>> 16 & 2;d = 14 - (t | u | d) + (v << d >>> 15) | 0;d = h >>> (d + 7 | 0) & 1 | d << 1;
                  }
                } else d = 0;c = 2228 + (d << 2) | 0;b[l + 28 >> 2] = d;a = l + 16 | 0;b[a + 4 >> 2] = 0;b[a >> 2] = 0;a = 1 << d;if (!(e & a)) {
                  b[482] = e | a;b[c >> 2] = l;b[l + 24 >> 2] = c;b[l + 12 >> 2] = l;b[l + 8 >> 2] = l;break;
                }c = b[c >> 2] | 0;c: do if ((b[c + 4 >> 2] & -8 | 0) != (h | 0)) {
                  e = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);while (1) {
                    d = c + 16 + (e >>> 31 << 2) | 0;a = b[d >> 2] | 0;if (!a) break;if ((b[a + 4 >> 2] & -8 | 0) == (h | 0)) {
                      c = a;break c;
                    } else {
                      e = e << 1;c = a;
                    }
                  }b[d >> 2] = l;b[l + 24 >> 2] = c;b[l + 12 >> 2] = l;b[l + 8 >> 2] = l;break b;
                } while (0);u = c + 8 | 0;v = b[u >> 2] | 0;b[v + 12 >> 2] = l;b[u >> 2] = l;b[l + 8 >> 2] = v;b[l + 12 >> 2] = c;b[l + 24 >> 2] = 0;
              } while (0);v = i + 8 | 0;x = w;return v | 0;
            } else m = k;
          } else m = k;
        } else m = -1; while (0);d = b[483] | 0;if (d >>> 0 >= m >>> 0) {
          c = d - m | 0;a = b[486] | 0;if (c >>> 0 > 15) {
            v = a + m | 0;b[486] = v;b[483] = c;b[v + 4 >> 2] = c | 1;b[a + d >> 2] = c;b[a + 4 >> 2] = m | 3;
          } else {
            b[483] = 0;b[486] = 0;b[a + 4 >> 2] = d | 3;v = a + d + 4 | 0;b[v >> 2] = b[v >> 2] | 1;
          }v = a + 8 | 0;x = w;return v | 0;
        }h = b[484] | 0;if (h >>> 0 > m >>> 0) {
          t = h - m | 0;b[484] = t;v = b[487] | 0;u = v + m | 0;b[487] = u;b[u + 4 >> 2] = t | 1;b[v + 4 >> 2] = m | 3;v = v + 8 | 0;x = w;return v | 0;
        }if (!(b[599] | 0)) {
          b[601] = 4096;b[600] = 4096;b[602] = -1;b[603] = -1;b[604] = 0;b[592] = 0;b[599] = n & -16 ^ 1431655768;a = 4096;
        } else a = b[601] | 0;i = m + 48 | 0;j = m + 47 | 0;g = a + j | 0;f = 0 - a | 0;k = g & f;if (k >>> 0 <= m >>> 0) {
          v = 0;x = w;return v | 0;
        }a = b[591] | 0;if (a | 0 ? (l = b[589] | 0, n = l + k | 0, n >>> 0 <= l >>> 0 | n >>> 0 > a >>> 0) : 0) {
          v = 0;x = w;return v | 0;
        }d: do if (!(b[592] & 4)) {
          d = b[487] | 0;e: do if (d) {
            e = 2372;while (1) {
              n = b[e >> 2] | 0;if (n >>> 0 <= d >>> 0 ? (n + (b[e + 4 >> 2] | 0) | 0) >>> 0 > d >>> 0 : 0) break;a = b[e + 8 >> 2] | 0;if (!a) {
                q = 128;break e;
              } else e = a;
            }c = g - h & f;if (c >>> 0 < 2147483647) {
              a = Ad(c | 0) | 0;if ((a | 0) == ((b[e >> 2] | 0) + (b[e + 4 >> 2] | 0) | 0)) {
                if ((a | 0) != (-1 | 0)) {
                  h = c;g = a;q = 145;break d;
                }
              } else {
                e = a;q = 136;
              }
            } else c = 0;
          } else q = 128; while (0);do if ((q | 0) == 128) {
            d = Ad(0) | 0;if ((d | 0) != (-1 | 0) ? (c = d, o = b[600] | 0, p = o + -1 | 0, c = ((p & c | 0) == 0 ? 0 : (p + c & 0 - o) - c | 0) + k | 0, o = b[589] | 0, p = c + o | 0, c >>> 0 > m >>> 0 & c >>> 0 < 2147483647) : 0) {
              n = b[591] | 0;if (n | 0 ? p >>> 0 <= o >>> 0 | p >>> 0 > n >>> 0 : 0) {
                c = 0;break;
              }a = Ad(c | 0) | 0;if ((a | 0) == (d | 0)) {
                h = c;g = d;q = 145;break d;
              } else {
                e = a;q = 136;
              }
            } else c = 0;
          } while (0);do if ((q | 0) == 136) {
            d = 0 - c | 0;if (!(i >>> 0 > c >>> 0 & (c >>> 0 < 2147483647 & (e | 0) != (-1 | 0)))) if ((e | 0) == (-1 | 0)) {
              c = 0;break;
            } else {
              h = c;g = e;q = 145;break d;
            }a = b[601] | 0;a = j - c + a & 0 - a;if (a >>> 0 >= 2147483647) {
              h = c;g = e;q = 145;break d;
            }if ((Ad(a | 0) | 0) == (-1 | 0)) {
              Ad(d | 0) | 0;c = 0;break;
            } else {
              h = a + c | 0;g = e;q = 145;break d;
            }
          } while (0);b[592] = b[592] | 4;q = 143;
        } else {
          c = 0;q = 143;
        } while (0);if (((q | 0) == 143 ? k >>> 0 < 2147483647 : 0) ? (t = Ad(k | 0) | 0, p = Ad(0) | 0, r = p - t | 0, s = r >>> 0 > (m + 40 | 0) >>> 0, !((t | 0) == (-1 | 0) | s ^ 1 | t >>> 0 < p >>> 0 & ((t | 0) != (-1 | 0) & (p | 0) != (-1 | 0)) ^ 1)) : 0) {
          h = s ? r : c;g = t;q = 145;
        }if ((q | 0) == 145) {
          c = (b[589] | 0) + h | 0;b[589] = c;if (c >>> 0 > (b[590] | 0) >>> 0) b[590] = c;j = b[487] | 0;f: do if (j) {
            c = 2372;while (1) {
              a = b[c >> 2] | 0;d = b[c + 4 >> 2] | 0;if ((g | 0) == (a + d | 0)) {
                q = 154;break;
              }e = b[c + 8 >> 2] | 0;if (!e) break;else c = e;
            }if (((q | 0) == 154 ? (u = c + 4 | 0, (b[c + 12 >> 2] & 8 | 0) == 0) : 0) ? g >>> 0 > j >>> 0 & a >>> 0 <= j >>> 0 : 0) {
              b[u >> 2] = d + h;v = (b[484] | 0) + h | 0;t = j + 8 | 0;t = (t & 7 | 0) == 0 ? 0 : 0 - t & 7;u = j + t | 0;t = v - t | 0;b[487] = u;b[484] = t;b[u + 4 >> 2] = t | 1;b[j + v + 4 >> 2] = 40;b[488] = b[603];break;
            }if (g >>> 0 < (b[485] | 0) >>> 0) b[485] = g;d = g + h | 0;c = 2372;while (1) {
              if ((b[c >> 2] | 0) == (d | 0)) {
                q = 162;break;
              }a = b[c + 8 >> 2] | 0;if (!a) break;else c = a;
            }if ((q | 0) == 162 ? (b[c + 12 >> 2] & 8 | 0) == 0 : 0) {
              b[c >> 2] = g;l = c + 4 | 0;b[l >> 2] = (b[l >> 2] | 0) + h;l = g + 8 | 0;l = g + ((l & 7 | 0) == 0 ? 0 : 0 - l & 7) | 0;c = d + 8 | 0;c = d + ((c & 7 | 0) == 0 ? 0 : 0 - c & 7) | 0;k = l + m | 0;i = c - l - m | 0;b[l + 4 >> 2] = m | 3;g: do if ((j | 0) == (c | 0)) {
                v = (b[484] | 0) + i | 0;b[484] = v;b[487] = k;b[k + 4 >> 2] = v | 1;
              } else {
                if ((b[486] | 0) == (c | 0)) {
                  v = (b[483] | 0) + i | 0;b[483] = v;b[486] = k;b[k + 4 >> 2] = v | 1;b[k + v >> 2] = v;break;
                }a = b[c + 4 >> 2] | 0;if ((a & 3 | 0) == 1) {
                  h = a & -8;e = a >>> 3;h: do if (a >>> 0 < 256) {
                    a = b[c + 8 >> 2] | 0;d = b[c + 12 >> 2] | 0;if ((d | 0) == (a | 0)) {
                      b[481] = b[481] & ~(1 << e);break;
                    } else {
                      b[a + 12 >> 2] = d;b[d + 8 >> 2] = a;break;
                    }
                  } else {
                    g = b[c + 24 >> 2] | 0;a = b[c + 12 >> 2] | 0;do if ((a | 0) == (c | 0)) {
                      d = c + 16 | 0;e = d + 4 | 0;a = b[e >> 2] | 0;if (!a) {
                        a = b[d >> 2] | 0;if (!a) {
                          a = 0;break;
                        }
                      } else d = e;while (1) {
                        f = a + 20 | 0;e = b[f >> 2] | 0;if (!e) {
                          f = a + 16 | 0;e = b[f >> 2] | 0;if (!e) break;else {
                            a = e;d = f;
                          }
                        } else {
                          a = e;d = f;
                        }
                      }b[d >> 2] = 0;
                    } else {
                      v = b[c + 8 >> 2] | 0;b[v + 12 >> 2] = a;b[a + 8 >> 2] = v;
                    } while (0);if (!g) break;d = b[c + 28 >> 2] | 0;e = 2228 + (d << 2) | 0;do if ((b[e >> 2] | 0) != (c | 0)) {
                      v = g + 16 | 0;b[((b[v >> 2] | 0) == (c | 0) ? v : g + 20 | 0) >> 2] = a;if (!a) break h;
                    } else {
                      b[e >> 2] = a;if (a | 0) break;b[482] = b[482] & ~(1 << d);break h;
                    } while (0);b[a + 24 >> 2] = g;d = c + 16 | 0;e = b[d >> 2] | 0;if (e | 0) {
                      b[a + 16 >> 2] = e;b[e + 24 >> 2] = a;
                    }d = b[d + 4 >> 2] | 0;if (!d) break;b[a + 20 >> 2] = d;b[d + 24 >> 2] = a;
                  } while (0);c = c + h | 0;f = h + i | 0;
                } else f = i;c = c + 4 | 0;b[c >> 2] = b[c >> 2] & -2;b[k + 4 >> 2] = f | 1;b[k + f >> 2] = f;c = f >>> 3;if (f >>> 0 < 256) {
                  d = 1964 + (c << 1 << 2) | 0;a = b[481] | 0;c = 1 << c;if (!(a & c)) {
                    b[481] = a | c;c = d;a = d + 8 | 0;
                  } else {
                    a = d + 8 | 0;c = b[a >> 2] | 0;
                  }b[a >> 2] = k;b[c + 12 >> 2] = k;b[k + 8 >> 2] = c;b[k + 12 >> 2] = d;break;
                }c = f >>> 8;do if (!c) e = 0;else {
                  if (f >>> 0 > 16777215) {
                    e = 31;break;
                  }u = (c + 1048320 | 0) >>> 16 & 8;v = c << u;t = (v + 520192 | 0) >>> 16 & 4;v = v << t;e = (v + 245760 | 0) >>> 16 & 2;e = 14 - (t | u | e) + (v << e >>> 15) | 0;e = f >>> (e + 7 | 0) & 1 | e << 1;
                } while (0);c = 2228 + (e << 2) | 0;b[k + 28 >> 2] = e;a = k + 16 | 0;b[a + 4 >> 2] = 0;b[a >> 2] = 0;a = b[482] | 0;d = 1 << e;if (!(a & d)) {
                  b[482] = a | d;b[c >> 2] = k;b[k + 24 >> 2] = c;b[k + 12 >> 2] = k;b[k + 8 >> 2] = k;break;
                }c = b[c >> 2] | 0;i: do if ((b[c + 4 >> 2] & -8 | 0) != (f | 0)) {
                  e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);while (1) {
                    d = c + 16 + (e >>> 31 << 2) | 0;a = b[d >> 2] | 0;if (!a) break;if ((b[a + 4 >> 2] & -8 | 0) == (f | 0)) {
                      c = a;break i;
                    } else {
                      e = e << 1;c = a;
                    }
                  }b[d >> 2] = k;b[k + 24 >> 2] = c;b[k + 12 >> 2] = k;b[k + 8 >> 2] = k;break g;
                } while (0);u = c + 8 | 0;v = b[u >> 2] | 0;b[v + 12 >> 2] = k;b[u >> 2] = k;b[k + 8 >> 2] = v;b[k + 12 >> 2] = c;b[k + 24 >> 2] = 0;
              } while (0);v = l + 8 | 0;x = w;return v | 0;
            }c = 2372;while (1) {
              a = b[c >> 2] | 0;if (a >>> 0 <= j >>> 0 ? (v = a + (b[c + 4 >> 2] | 0) | 0, v >>> 0 > j >>> 0) : 0) break;c = b[c + 8 >> 2] | 0;
            }f = v + -47 | 0;a = f + 8 | 0;a = f + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;f = j + 16 | 0;a = a >>> 0 < f >>> 0 ? j : a;c = a + 8 | 0;d = h + -40 | 0;t = g + 8 | 0;t = (t & 7 | 0) == 0 ? 0 : 0 - t & 7;u = g + t | 0;t = d - t | 0;b[487] = u;b[484] = t;b[u + 4 >> 2] = t | 1;b[g + d + 4 >> 2] = 40;b[488] = b[603];d = a + 4 | 0;b[d >> 2] = 27;b[c >> 2] = b[593];b[c + 4 >> 2] = b[594];b[c + 8 >> 2] = b[595];b[c + 12 >> 2] = b[596];b[593] = g;b[594] = h;b[596] = 0;b[595] = c;c = a + 24 | 0;do {
              u = c;c = c + 4 | 0;b[c >> 2] = 7;
            } while ((u + 8 | 0) >>> 0 < v >>> 0);if ((a | 0) != (j | 0)) {
              g = a - j | 0;b[d >> 2] = b[d >> 2] & -2;b[j + 4 >> 2] = g | 1;b[a >> 2] = g;c = g >>> 3;if (g >>> 0 < 256) {
                d = 1964 + (c << 1 << 2) | 0;a = b[481] | 0;c = 1 << c;if (!(a & c)) {
                  b[481] = a | c;c = d;a = d + 8 | 0;
                } else {
                  a = d + 8 | 0;c = b[a >> 2] | 0;
                }b[a >> 2] = j;b[c + 12 >> 2] = j;b[j + 8 >> 2] = c;b[j + 12 >> 2] = d;break;
              }c = g >>> 8;if (c) {
                if (g >>> 0 > 16777215) e = 31;else {
                  u = (c + 1048320 | 0) >>> 16 & 8;v = c << u;t = (v + 520192 | 0) >>> 16 & 4;v = v << t;e = (v + 245760 | 0) >>> 16 & 2;e = 14 - (t | u | e) + (v << e >>> 15) | 0;e = g >>> (e + 7 | 0) & 1 | e << 1;
                }
              } else e = 0;d = 2228 + (e << 2) | 0;b[j + 28 >> 2] = e;b[j + 20 >> 2] = 0;b[f >> 2] = 0;c = b[482] | 0;a = 1 << e;if (!(c & a)) {
                b[482] = c | a;b[d >> 2] = j;b[j + 24 >> 2] = d;b[j + 12 >> 2] = j;b[j + 8 >> 2] = j;break;
              }c = b[d >> 2] | 0;j: do if ((b[c + 4 >> 2] & -8 | 0) != (g | 0)) {
                e = g << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);while (1) {
                  d = c + 16 + (e >>> 31 << 2) | 0;a = b[d >> 2] | 0;if (!a) break;if ((b[a + 4 >> 2] & -8 | 0) == (g | 0)) {
                    c = a;break j;
                  } else {
                    e = e << 1;c = a;
                  }
                }b[d >> 2] = j;b[j + 24 >> 2] = c;b[j + 12 >> 2] = j;b[j + 8 >> 2] = j;break f;
              } while (0);u = c + 8 | 0;v = b[u >> 2] | 0;b[v + 12 >> 2] = j;b[u >> 2] = j;b[j + 8 >> 2] = v;b[j + 12 >> 2] = c;b[j + 24 >> 2] = 0;
            }
          } else {
            v = b[485] | 0;if ((v | 0) == 0 | g >>> 0 < v >>> 0) b[485] = g;b[593] = g;b[594] = h;b[596] = 0;b[490] = b[599];b[489] = -1;b[494] = 1964;b[493] = 1964;b[496] = 1972;b[495] = 1972;b[498] = 1980;b[497] = 1980;b[500] = 1988;b[499] = 1988;b[502] = 1996;b[501] = 1996;b[504] = 2004;b[503] = 2004;b[506] = 2012;b[505] = 2012;b[508] = 2020;b[507] = 2020;b[510] = 2028;b[509] = 2028;b[512] = 2036;b[511] = 2036;b[514] = 2044;b[513] = 2044;b[516] = 2052;b[515] = 2052;b[518] = 2060;b[517] = 2060;b[520] = 2068;b[519] = 2068;b[522] = 2076;b[521] = 2076;b[524] = 2084;b[523] = 2084;b[526] = 2092;b[525] = 2092;b[528] = 2100;b[527] = 2100;b[530] = 2108;b[529] = 2108;b[532] = 2116;b[531] = 2116;b[534] = 2124;b[533] = 2124;b[536] = 2132;b[535] = 2132;b[538] = 2140;b[537] = 2140;b[540] = 2148;b[539] = 2148;b[542] = 2156;b[541] = 2156;b[544] = 2164;b[543] = 2164;b[546] = 2172;b[545] = 2172;b[548] = 2180;b[547] = 2180;b[550] = 2188;b[549] = 2188;b[552] = 2196;b[551] = 2196;b[554] = 2204;b[553] = 2204;b[556] = 2212;b[555] = 2212;v = h + -40 | 0;t = g + 8 | 0;t = (t & 7 | 0) == 0 ? 0 : 0 - t & 7;u = g + t | 0;t = v - t | 0;b[487] = u;b[484] = t;b[u + 4 >> 2] = t | 1;b[g + v + 4 >> 2] = 40;b[488] = b[603];
          } while (0);c = b[484] | 0;if (c >>> 0 > m >>> 0) {
            t = c - m | 0;b[484] = t;v = b[487] | 0;u = v + m | 0;b[487] = u;b[u + 4 >> 2] = t | 1;b[v + 4 >> 2] = m | 3;v = v + 8 | 0;x = w;return v | 0;
          }
        }b[(md() | 0) >> 2] = 12;v = 0;x = w;return v | 0;
      }function ld(a) {
        a = a | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;if (!a) return;d = a + -8 | 0;f = b[485] | 0;a = b[a + -4 >> 2] | 0;c = a & -8;j = d + c | 0;do if (!(a & 1)) {
          e = b[d >> 2] | 0;if (!(a & 3)) return;h = d + (0 - e) | 0;g = e + c | 0;if (h >>> 0 < f >>> 0) return;if ((b[486] | 0) == (h | 0)) {
            a = j + 4 | 0;c = b[a >> 2] | 0;if ((c & 3 | 0) != 3) {
              i = h;c = g;break;
            }b[483] = g;b[a >> 2] = c & -2;b[h + 4 >> 2] = g | 1;b[h + g >> 2] = g;return;
          }d = e >>> 3;if (e >>> 0 < 256) {
            a = b[h + 8 >> 2] | 0;c = b[h + 12 >> 2] | 0;if ((c | 0) == (a | 0)) {
              b[481] = b[481] & ~(1 << d);i = h;c = g;break;
            } else {
              b[a + 12 >> 2] = c;b[c + 8 >> 2] = a;i = h;c = g;break;
            }
          }f = b[h + 24 >> 2] | 0;a = b[h + 12 >> 2] | 0;do if ((a | 0) == (h | 0)) {
            c = h + 16 | 0;d = c + 4 | 0;a = b[d >> 2] | 0;if (!a) {
              a = b[c >> 2] | 0;if (!a) {
                a = 0;break;
              }
            } else c = d;while (1) {
              e = a + 20 | 0;d = b[e >> 2] | 0;if (!d) {
                e = a + 16 | 0;d = b[e >> 2] | 0;if (!d) break;else {
                  a = d;c = e;
                }
              } else {
                a = d;c = e;
              }
            }b[c >> 2] = 0;
          } else {
            i = b[h + 8 >> 2] | 0;b[i + 12 >> 2] = a;b[a + 8 >> 2] = i;
          } while (0);if (f) {
            c = b[h + 28 >> 2] | 0;d = 2228 + (c << 2) | 0;if ((b[d >> 2] | 0) == (h | 0)) {
              b[d >> 2] = a;if (!a) {
                b[482] = b[482] & ~(1 << c);i = h;c = g;break;
              }
            } else {
              i = f + 16 | 0;b[((b[i >> 2] | 0) == (h | 0) ? i : f + 20 | 0) >> 2] = a;if (!a) {
                i = h;c = g;break;
              }
            }b[a + 24 >> 2] = f;c = h + 16 | 0;d = b[c >> 2] | 0;if (d | 0) {
              b[a + 16 >> 2] = d;b[d + 24 >> 2] = a;
            }c = b[c + 4 >> 2] | 0;if (c) {
              b[a + 20 >> 2] = c;b[c + 24 >> 2] = a;i = h;c = g;
            } else {
              i = h;c = g;
            }
          } else {
            i = h;c = g;
          }
        } else {
          i = d;h = d;
        } while (0);if (h >>> 0 >= j >>> 0) return;a = j + 4 | 0;e = b[a >> 2] | 0;if (!(e & 1)) return;if (!(e & 2)) {
          if ((b[487] | 0) == (j | 0)) {
            j = (b[484] | 0) + c | 0;b[484] = j;b[487] = i;b[i + 4 >> 2] = j | 1;if ((i | 0) != (b[486] | 0)) return;b[486] = 0;b[483] = 0;return;
          }if ((b[486] | 0) == (j | 0)) {
            j = (b[483] | 0) + c | 0;b[483] = j;b[486] = h;b[i + 4 >> 2] = j | 1;b[h + j >> 2] = j;return;
          }f = (e & -8) + c | 0;d = e >>> 3;do if (e >>> 0 < 256) {
            c = b[j + 8 >> 2] | 0;a = b[j + 12 >> 2] | 0;if ((a | 0) == (c | 0)) {
              b[481] = b[481] & ~(1 << d);break;
            } else {
              b[c + 12 >> 2] = a;b[a + 8 >> 2] = c;break;
            }
          } else {
            g = b[j + 24 >> 2] | 0;a = b[j + 12 >> 2] | 0;do if ((a | 0) == (j | 0)) {
              c = j + 16 | 0;d = c + 4 | 0;a = b[d >> 2] | 0;if (!a) {
                a = b[c >> 2] | 0;if (!a) {
                  d = 0;break;
                }
              } else c = d;while (1) {
                e = a + 20 | 0;d = b[e >> 2] | 0;if (!d) {
                  e = a + 16 | 0;d = b[e >> 2] | 0;if (!d) break;else {
                    a = d;c = e;
                  }
                } else {
                  a = d;c = e;
                }
              }b[c >> 2] = 0;d = a;
            } else {
              d = b[j + 8 >> 2] | 0;b[d + 12 >> 2] = a;b[a + 8 >> 2] = d;d = a;
            } while (0);if (g | 0) {
              a = b[j + 28 >> 2] | 0;c = 2228 + (a << 2) | 0;if ((b[c >> 2] | 0) == (j | 0)) {
                b[c >> 2] = d;if (!d) {
                  b[482] = b[482] & ~(1 << a);break;
                }
              } else {
                e = g + 16 | 0;b[((b[e >> 2] | 0) == (j | 0) ? e : g + 20 | 0) >> 2] = d;if (!d) break;
              }b[d + 24 >> 2] = g;a = j + 16 | 0;c = b[a >> 2] | 0;if (c | 0) {
                b[d + 16 >> 2] = c;b[c + 24 >> 2] = d;
              }a = b[a + 4 >> 2] | 0;if (a | 0) {
                b[d + 20 >> 2] = a;b[a + 24 >> 2] = d;
              }
            }
          } while (0);b[i + 4 >> 2] = f | 1;b[h + f >> 2] = f;if ((i | 0) == (b[486] | 0)) {
            b[483] = f;return;
          }
        } else {
          b[a >> 2] = e & -2;b[i + 4 >> 2] = c | 1;b[h + c >> 2] = c;f = c;
        }a = f >>> 3;if (f >>> 0 < 256) {
          d = 1964 + (a << 1 << 2) | 0;c = b[481] | 0;a = 1 << a;if (!(c & a)) {
            b[481] = c | a;a = d;c = d + 8 | 0;
          } else {
            c = d + 8 | 0;a = b[c >> 2] | 0;
          }b[c >> 2] = i;b[a + 12 >> 2] = i;b[i + 8 >> 2] = a;b[i + 12 >> 2] = d;return;
        }a = f >>> 8;if (a) {
          if (f >>> 0 > 16777215) e = 31;else {
            h = (a + 1048320 | 0) >>> 16 & 8;j = a << h;g = (j + 520192 | 0) >>> 16 & 4;j = j << g;e = (j + 245760 | 0) >>> 16 & 2;e = 14 - (g | h | e) + (j << e >>> 15) | 0;e = f >>> (e + 7 | 0) & 1 | e << 1;
          }
        } else e = 0;a = 2228 + (e << 2) | 0;b[i + 28 >> 2] = e;b[i + 20 >> 2] = 0;b[i + 16 >> 2] = 0;c = b[482] | 0;d = 1 << e;a: do if (!(c & d)) {
          b[482] = c | d;b[a >> 2] = i;b[i + 24 >> 2] = a;b[i + 12 >> 2] = i;b[i + 8 >> 2] = i;
        } else {
          a = b[a >> 2] | 0;b: do if ((b[a + 4 >> 2] & -8 | 0) != (f | 0)) {
            e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);while (1) {
              d = a + 16 + (e >>> 31 << 2) | 0;c = b[d >> 2] | 0;if (!c) break;if ((b[c + 4 >> 2] & -8 | 0) == (f | 0)) {
                a = c;break b;
              } else {
                e = e << 1;a = c;
              }
            }b[d >> 2] = i;b[i + 24 >> 2] = a;b[i + 12 >> 2] = i;b[i + 8 >> 2] = i;break a;
          } while (0);h = a + 8 | 0;j = b[h >> 2] | 0;b[j + 12 >> 2] = i;b[h >> 2] = i;b[i + 8 >> 2] = j;b[i + 12 >> 2] = a;b[i + 24 >> 2] = 0;
        } while (0);j = (b[489] | 0) + -1 | 0;b[489] = j;if (j | 0) return;a = 2380;while (1) {
          a = b[a >> 2] | 0;if (!a) break;else a = a + 8 | 0;
        }b[489] = -1;return;
      }function md() {
        return 2420;
      }function nd(a, b, c, d) {
        a = a | 0;b = b | 0;c = c | 0;d = d | 0;c = a + c >>> 0;return (q(b + d + (c >>> 0 < a >>> 0 | 0) >>> 0 | 0), c | 0) | 0;
      }function od(a, b, c, d) {
        a = a | 0;b = b | 0;c = c | 0;d = d | 0;d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;return (q(d | 0), a - c >>> 0 | 0) | 0;
      }function pd(a) {
        a = a | 0;return (a ? 31 - (o(a ^ a - 1) | 0) | 0 : 32) | 0;
      }function qd(a, c, d, e, f) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            p = 0,
            s = 0;l = a;j = c;k = j;h = d;n = e;i = n;if (!k) {
          g = (f | 0) != 0;if (!i) {
            if (g) {
              b[f >> 2] = (l >>> 0) % (h >>> 0);b[f + 4 >> 2] = 0;
            }n = 0;f = (l >>> 0) / (h >>> 0) >>> 0;return (q(n | 0), f) | 0;
          } else {
            if (!g) {
              n = 0;f = 0;return (q(n | 0), f) | 0;
            }b[f >> 2] = a | 0;b[f + 4 >> 2] = c & 0;n = 0;f = 0;return (q(n | 0), f) | 0;
          }
        }g = (i | 0) == 0;do if (h) {
          if (!g) {
            g = (o(i | 0) | 0) - (o(k | 0) | 0) | 0;if (g >>> 0 <= 31) {
              m = g + 1 | 0;i = 31 - g | 0;c = g - 31 >> 31;h = m;a = l >>> (m >>> 0) & c | k << i;c = k >>> (m >>> 0) & c;g = 0;i = l << i;break;
            }if (!f) {
              n = 0;f = 0;return (q(n | 0), f) | 0;
            }b[f >> 2] = a | 0;b[f + 4 >> 2] = j | c & 0;n = 0;f = 0;return (q(n | 0), f) | 0;
          }g = h - 1 | 0;if (g & h | 0) {
            i = (o(h | 0) | 0) + 33 - (o(k | 0) | 0) | 0;s = 64 - i | 0;m = 32 - i | 0;j = m >> 31;p = i - 32 | 0;c = p >> 31;h = i;a = m - 1 >> 31 & k >>> (p >>> 0) | (k << m | l >>> (i >>> 0)) & c;c = c & k >>> (i >>> 0);g = l << s & j;i = (k << s | l >>> (p >>> 0)) & j | l << m & i - 33 >> 31;break;
          }if (f | 0) {
            b[f >> 2] = g & l;b[f + 4 >> 2] = 0;
          }if ((h | 0) == 1) {
            p = j | c & 0;s = a | 0 | 0;return (q(p | 0), s) | 0;
          } else {
            s = pd(h | 0) | 0;p = k >>> (s >>> 0) | 0;s = k << 32 - s | l >>> (s >>> 0) | 0;return (q(p | 0), s) | 0;
          }
        } else {
          if (g) {
            if (f | 0) {
              b[f >> 2] = (k >>> 0) % (h >>> 0);b[f + 4 >> 2] = 0;
            }p = 0;s = (k >>> 0) / (h >>> 0) >>> 0;return (q(p | 0), s) | 0;
          }if (!l) {
            if (f | 0) {
              b[f >> 2] = 0;b[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
            }p = 0;s = (k >>> 0) / (i >>> 0) >>> 0;return (q(p | 0), s) | 0;
          }g = i - 1 | 0;if (!(g & i)) {
            if (f | 0) {
              b[f >> 2] = a | 0;b[f + 4 >> 2] = g & k | c & 0;
            }p = 0;s = k >>> ((pd(i | 0) | 0) >>> 0);return (q(p | 0), s) | 0;
          }g = (o(i | 0) | 0) - (o(k | 0) | 0) | 0;if (g >>> 0 <= 30) {
            c = g + 1 | 0;i = 31 - g | 0;h = c;a = k << i | l >>> (c >>> 0);c = k >>> (c >>> 0);g = 0;i = l << i;break;
          }if (!f) {
            p = 0;s = 0;return (q(p | 0), s) | 0;
          }b[f >> 2] = a | 0;b[f + 4 >> 2] = j | c & 0;p = 0;s = 0;return (q(p | 0), s) | 0;
        } while (0);if (!h) {
          k = i;j = 0;i = 0;
        } else {
          m = d | 0 | 0;l = n | e & 0;k = nd(m | 0, l | 0, -1, -1) | 0;d = r() | 0;j = i;i = 0;do {
            e = j;j = g >>> 31 | j << 1;g = i | g << 1;e = a << 1 | e >>> 31 | 0;n = a >>> 31 | c << 1 | 0;od(k | 0, d | 0, e | 0, n | 0) | 0;s = r() | 0;p = s >> 31 | ((s | 0) < 0 ? -1 : 0) << 1;i = p & 1;a = od(e | 0, n | 0, p & m | 0, (((s | 0) < 0 ? -1 : 0) >> 31 | ((s | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;c = r() | 0;h = h - 1 | 0;
          } while ((h | 0) != 0);k = j;j = 0;
        }h = 0;if (f | 0) {
          b[f >> 2] = a;b[f + 4 >> 2] = c;
        }p = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;s = (g << 1 | 0 >>> 31) & -2 | i;return (q(p | 0), s) | 0;
      }function rd(a, b, c, d) {
        a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;h = od(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;g = r() | 0;a = f ^ j;b = e ^ i;return od((qd(h, g, od(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, r() | 0, 0) | 0) ^ a | 0, (r() | 0) ^ b | 0, a | 0, b | 0) | 0;
      }function sd(a, b) {
        a = a | 0;b = b | 0;var c = 0,
            d = 0,
            e = 0,
            f = 0;f = a & 65535;e = b & 65535;c = n(e, f) | 0;d = a >>> 16;a = (c >>> 16) + (n(e, d) | 0) | 0;e = b >>> 16;b = n(e, f) | 0;return (q((a >>> 16) + (n(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0), a + b << 16 | c & 65535 | 0) | 0;
      }function td(a, b, c, d) {
        a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
            f = 0;e = a;f = c;c = sd(e, f) | 0;a = r() | 0;return (q((n(b, f) | 0) + (n(d, e) | 0) + a | a & 0 | 0), c | 0 | 0) | 0;
      }function ud(a, c, d, e) {
        a = a | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0;f = x;x = x + 16 | 0;i = f | 0;h = c >> 31 | ((c | 0) < 0 ? -1 : 0) << 1;g = ((c | 0) < 0 ? -1 : 0) >> 31 | ((c | 0) < 0 ? -1 : 0) << 1;k = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;j = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;a = od(h ^ a | 0, g ^ c | 0, h | 0, g | 0) | 0;c = r() | 0;qd(a, c, od(k ^ d | 0, j ^ e | 0, k | 0, j | 0) | 0, r() | 0, i) | 0;e = od(b[i >> 2] ^ h | 0, b[i + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;d = r() | 0;x = f;return (q(d | 0), e) | 0;
      }function vd(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
          q(b >> c | 0);return a >>> c | (b & (1 << c) - 1) << 32 - c;
        }q(((b | 0) < 0 ? -1 : 0) | 0);return b >> c - 32 | 0;
      }function wd(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
          q(b >>> c | 0);return a >>> c | (b & (1 << c) - 1) << 32 - c;
        }q(0);return b >>> c - 32 | 0;
      }function xd(a, b, c) {
        a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
          q(b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c | 0);return a << c;
        }q(a << c - 32 | 0);return 0;
      }function yd(c, d, e) {
        c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0;if ((e | 0) >= 8192) {
          u(c | 0, d | 0, e | 0) | 0;return c | 0;
        }h = c | 0;g = c + e | 0;if ((c & 3) == (d & 3)) {
          while (c & 3) {
            if (!e) return h | 0;a[c >> 0] = a[d >> 0] | 0;c = c + 1 | 0;d = d + 1 | 0;e = e - 1 | 0;
          }e = g & -4 | 0;f = e - 64 | 0;while ((c | 0) <= (f | 0)) {
            b[c >> 2] = b[d >> 2];b[c + 4 >> 2] = b[d + 4 >> 2];b[c + 8 >> 2] = b[d + 8 >> 2];b[c + 12 >> 2] = b[d + 12 >> 2];b[c + 16 >> 2] = b[d + 16 >> 2];b[c + 20 >> 2] = b[d + 20 >> 2];b[c + 24 >> 2] = b[d + 24 >> 2];b[c + 28 >> 2] = b[d + 28 >> 2];b[c + 32 >> 2] = b[d + 32 >> 2];b[c + 36 >> 2] = b[d + 36 >> 2];b[c + 40 >> 2] = b[d + 40 >> 2];b[c + 44 >> 2] = b[d + 44 >> 2];b[c + 48 >> 2] = b[d + 48 >> 2];b[c + 52 >> 2] = b[d + 52 >> 2];b[c + 56 >> 2] = b[d + 56 >> 2];b[c + 60 >> 2] = b[d + 60 >> 2];c = c + 64 | 0;d = d + 64 | 0;
          }while ((c | 0) < (e | 0)) {
            b[c >> 2] = b[d >> 2];c = c + 4 | 0;d = d + 4 | 0;
          }
        } else {
          e = g - 4 | 0;while ((c | 0) < (e | 0)) {
            a[c >> 0] = a[d >> 0] | 0;a[c + 1 >> 0] = a[d + 1 >> 0] | 0;a[c + 2 >> 0] = a[d + 2 >> 0] | 0;a[c + 3 >> 0] = a[d + 3 >> 0] | 0;c = c + 4 | 0;d = d + 4 | 0;
          }
        }while ((c | 0) < (g | 0)) {
          a[c >> 0] = a[d >> 0] | 0;c = c + 1 | 0;d = d + 1 | 0;
        }return h | 0;
      }function zd(c, d, e) {
        c = c | 0;d = d | 0;e = e | 0;var f = 0,
            g = 0,
            h = 0,
            i = 0;h = c + e | 0;d = d & 255;if ((e | 0) >= 67) {
          while (c & 3) {
            a[c >> 0] = d;c = c + 1 | 0;
          }f = h & -4 | 0;i = d | d << 8 | d << 16 | d << 24;g = f - 64 | 0;while ((c | 0) <= (g | 0)) {
            b[c >> 2] = i;b[c + 4 >> 2] = i;b[c + 8 >> 2] = i;b[c + 12 >> 2] = i;b[c + 16 >> 2] = i;b[c + 20 >> 2] = i;b[c + 24 >> 2] = i;b[c + 28 >> 2] = i;b[c + 32 >> 2] = i;b[c + 36 >> 2] = i;b[c + 40 >> 2] = i;b[c + 44 >> 2] = i;b[c + 48 >> 2] = i;b[c + 52 >> 2] = i;b[c + 56 >> 2] = i;b[c + 60 >> 2] = i;c = c + 64 | 0;
          }while ((c | 0) < (f | 0)) {
            b[c >> 2] = i;c = c + 4 | 0;
          }
        }while ((c | 0) < (h | 0)) {
          a[c >> 0] = d;c = c + 1 | 0;
        }return h - e | 0;
      }function Ad(a) {
        a = a | 0;var c = 0,
            d = 0;d = b[e >> 2] | 0;c = d + a | 0;if ((a | 0) > 0 & (c | 0) < (d | 0) | (c | 0) < 0) {
          w(c | 0) | 0;s(12);return -1;
        }if ((c | 0) > (t() | 0)) {
          if (!(v(c | 0) | 0)) {
            s(12);return -1;
          }
        } else b[e >> 2] = c;return d | 0;
      }

      // EMSCRIPTEN_END_FUNCS
      return { _GS_curve: Y, _GS_error: $, _GS_exportGroupPrivKey: N, _GS_exportGroupPubKey: O, _GS_exportUserCredentials: Q, _GS_failure: _, _GS_finishJoin: L, _GS_getSignatureTag: V, _GS_getStateSize: W, _GS_initState: E, _GS_loadGroupPrivKey: H, _GS_loadGroupPubKey: I, _GS_loadUserCredentials: M, _GS_processJoin: R, _GS_seed: F, _GS_setupGroup: G, _GS_sign: S, _GS_startJoin: K, _GS_success: Z, _GS_verify: T, _GS_version: X, ___divdi3: rd, ___errno_location: md, ___muldi3: td, ___remdi3: ud, _bitshift64Ashr: vd, _bitshift64Lshr: wd, _bitshift64Shl: xd, _free: ld, _i64Add: nd, _i64Subtract: od, _malloc: kd, _memcpy: yd, _memset: zd, _sbrk: Ad, establishStackSpace: D, stackAlloc: A, stackRestore: C, stackSave: B };
    }(

    // EMSCRIPTEN_END_ASM
    asmGlobalArg, asmLibraryArg, buffer);

    var _GS_curve = Module["_GS_curve"] = asm["_GS_curve"];

    var _GS_error = Module["_GS_error"] = asm["_GS_error"];

    var _GS_exportGroupPrivKey = Module["_GS_exportGroupPrivKey"] = asm["_GS_exportGroupPrivKey"];

    var _GS_exportGroupPubKey = Module["_GS_exportGroupPubKey"] = asm["_GS_exportGroupPubKey"];

    var _GS_exportUserCredentials = Module["_GS_exportUserCredentials"] = asm["_GS_exportUserCredentials"];

    var _GS_failure = Module["_GS_failure"] = asm["_GS_failure"];

    var _GS_finishJoin = Module["_GS_finishJoin"] = asm["_GS_finishJoin"];

    var _GS_getSignatureTag = Module["_GS_getSignatureTag"] = asm["_GS_getSignatureTag"];

    var _GS_getStateSize = Module["_GS_getStateSize"] = asm["_GS_getStateSize"];

    var _GS_initState = Module["_GS_initState"] = asm["_GS_initState"];

    var _GS_loadGroupPrivKey = Module["_GS_loadGroupPrivKey"] = asm["_GS_loadGroupPrivKey"];

    var _GS_loadGroupPubKey = Module["_GS_loadGroupPubKey"] = asm["_GS_loadGroupPubKey"];

    var _GS_loadUserCredentials = Module["_GS_loadUserCredentials"] = asm["_GS_loadUserCredentials"];

    var _GS_processJoin = Module["_GS_processJoin"] = asm["_GS_processJoin"];

    var _GS_seed = Module["_GS_seed"] = asm["_GS_seed"];

    var _GS_setupGroup = Module["_GS_setupGroup"] = asm["_GS_setupGroup"];

    var _GS_sign = Module["_GS_sign"] = asm["_GS_sign"];

    var _GS_startJoin = Module["_GS_startJoin"] = asm["_GS_startJoin"];

    var _GS_success = Module["_GS_success"] = asm["_GS_success"];

    var _GS_verify = Module["_GS_verify"] = asm["_GS_verify"];

    var _GS_version = Module["_GS_version"] = asm["_GS_version"];

    var ___divdi3 = Module["___divdi3"] = asm["___divdi3"];

    var ___errno_location = Module["___errno_location"] = asm["___errno_location"];

    var ___muldi3 = Module["___muldi3"] = asm["___muldi3"];

    var ___remdi3 = Module["___remdi3"] = asm["___remdi3"];

    var _bitshift64Ashr = Module["_bitshift64Ashr"] = asm["_bitshift64Ashr"];

    var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];

    var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];

    var _free = Module["_free"] = asm["_free"];

    var _i64Add = Module["_i64Add"] = asm["_i64Add"];

    var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];

    var _malloc = Module["_malloc"] = asm["_malloc"];

    var _memcpy = Module["_memcpy"] = asm["_memcpy"];

    var _memset = Module["_memset"] = asm["_memset"];

    var _sbrk = Module["_sbrk"] = asm["_sbrk"];

    var establishStackSpace = Module["establishStackSpace"] = asm["establishStackSpace"];

    var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];

    var stackRestore = Module["stackRestore"] = asm["stackRestore"];

    var stackSave = Module["stackSave"] = asm["stackSave"];

    Module["asm"] = asm;

    if (memoryInitializer) {
      if (!isDataURI(memoryInitializer)) {
        memoryInitializer = locateFile(memoryInitializer);
      }
      if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
        var data = Module["readBinary"](memoryInitializer);
        HEAPU8.set(data, GLOBAL_BASE);
      } else {
        addRunDependency("memory initializer");
        var applyMemoryInitializer = function (data) {
          if (data.byteLength) data = new Uint8Array(data);
          HEAPU8.set(data, GLOBAL_BASE);
          if (Module["memoryInitializerRequest"]) delete Module["memoryInitializerRequest"].response;
          removeRunDependency("memory initializer");
        };
        var doBrowserLoad = function () {
          Module["readAsync"](memoryInitializer, applyMemoryInitializer, function () {
            throw "could not load memory initializer " + memoryInitializer;
          });
        };
        var memoryInitializerBytes = tryParseAsDataURI(memoryInitializer);
        if (memoryInitializerBytes) {
          applyMemoryInitializer(memoryInitializerBytes.buffer);
        } else if (Module["memoryInitializerRequest"]) {
          var useRequest = function () {
            var request = Module["memoryInitializerRequest"];
            var response = request.response;
            if (request.status !== 200 && request.status !== 0) {
              var data = tryParseAsDataURI(Module["memoryInitializerRequestURL"]);
              if (data) {
                response = data.buffer;
              } else {
                console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + request.status + ", retrying " + memoryInitializer);
                doBrowserLoad();
                return;
              }
            }
            applyMemoryInitializer(response);
          };
          if (Module["memoryInitializerRequest"].response) {
            setTimeout(useRequest, 0);
          } else {
            Module["memoryInitializerRequest"].addEventListener("load", useRequest);
          }
        } else {
          doBrowserLoad();
        }
      }
    }

    Module["then"] = function (func) {
      if (Module["calledRun"]) {
        func(Module);
      } else {
        var old = Module["onRuntimeInitialized"];
        Module["onRuntimeInitialized"] = function () {
          if (old) old();
          func(Module);
        };
      }
      return Module;
    };

    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }

    ExitStatus.prototype = new Error();

    ExitStatus.prototype.constructor = ExitStatus;

    dependenciesFulfilled = function runCaller() {
      if (!Module["calledRun"]) run();
      if (!Module["calledRun"]) dependenciesFulfilled = runCaller;
    };

    function run(args) {
      args = args || Module["arguments"];
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) return;
      if (Module["calledRun"]) return;
      function doRun() {
        if (Module["calledRun"]) return;
        Module["calledRun"] = true;
        if (ABORT) return;
        ensureInitRuntime();
        preMain();
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }

    Module["run"] = run;

    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      if (what !== undefined) {
        out(what);
        err(what);
        what = JSON.stringify(what);
      } else {
        what = "";
      }
      ABORT = true;
      EXITSTATUS = 1;
      throw "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
    }

    Module["abort"] = abort;

    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }

    Module["noExitRuntime"] = true;

    run();

    return ModuleAsmjs;
  };
}();
if (typeof exports === 'object' && typeof module === 'object') module.exports = ModuleAsmjs;else if ("function" === 'function' && true) $__System.registerDynamic("12", [], false, function ($__require, $__exports, $__module) {
  return (function () {
    return ModuleAsmjs;
  }).call(this);
});else if (typeof exports === 'object') exports["ModuleAsmjs"] = ModuleAsmjs;
$__System.registerDynamic('13', ['d', '12'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  const { initModule } = $__require('d');

  let initPromise;
  module.exports = () => {
    if (!initPromise) {
      initPromise = initModule($__require('12'));
    }
    return initPromise;
  };
});
$__System.registerDynamic("10", [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = makeWorker;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);var value = info.value;
          } catch (error) {
            reject(error);return;
          }if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }return step("next");
      });
    };
  }

  function makeWorker(_self, getCredentialManager) {
    const self = _self;
    const console = {
      log: function log() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return self.postMessage({ logMessage: { type: 'log', args } });
      },
      error: function error() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return self.postMessage({ logMessage: { type: 'error', args } });
      }
    };

    function wrapError(e) {
      return `Worker error: '${e && e.message}', stack: <<< ${e && e.stack} >>>`;
    }

    // Assuming there are no two concurrent messages being handled (caller
    // waits for response before sending another message)
    let signer;
    self.onmessage = (() => {
      var _ref = _asyncToGenerator(function* (_ref2) {
        var _ref2$data = _ref2.data;
        let id = _ref2$data.id,
            fn = _ref2$data.fn,
            args = _ref2$data.args;

        if (!signer) {
          const CredentialManager = yield getCredentialManager();
          signer = new CredentialManager();
        }
        const now = performance.now();
        try {
          const data = signer[fn](...args);
          console.log('[hpnv2-worker]', fn, performance.now() - now, 'ms');
          self.postMessage({ id, data });
        } catch (e) {
          const error = wrapError(e);
          console.error('[hpnv2-worker]', error);
          self.postMessage({ id, error });
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })();
  }
});
$__System.registerDynamic('11', ['13', '10'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _asmjs = $__require('13');

  var _asmjs2 = _interopRequireDefault(_asmjs);

  var _workerCommon = $__require('10');

  var _workerCommon2 = _interopRequireDefault(_workerCommon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  (0, _workerCommon2.default)(self, _asmjs2.default);
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    CliqzGlobal = factory();
});