!function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t){if(Array.isArray(t))return e(t)}function n(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(i,s){var o=e.apply(t,r);function a(e){n(o,i,s,a,u,"next",e)}function u(e){n(o,i,s,a,u,"throw",e)}a(void 0)}))}}function i(e,t,n){return t=l(t),function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,v()?Reflect.construct(t,n||[],l(e).constructor):t.apply(e,n))}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function d(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function b(e){return function(e){if(Array.isArray(e))return e}(e)||d(e)||y(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){return t(e)||d(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function y(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function w(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return u([e,t])}}function u(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}System.register(["./index-legacy-B8J5x6Rq.js","./index-legacy-hDdexsri.js"],(function(e,t){"use strict";var n,o;return{setters:[function(e){n=e.t,o=e.m},null],execute:function(){var t;e({flattenDiagnosticMessageText:_,getJavaScriptWorker:function(){return new Promise((function(e,t){if(!M)return t("JavaScript not registered!");e(M)}))},getTypeScriptWorker:function(){return new Promise((function(e,t){if(!R)return t("TypeScript not registered!");e(R)}))},setupJavaScript:function(e){M=z(e,"javascript")},setupTypeScript:function(e){R=z(e,"typescript")}});var u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,y={};!function(e,t){(function(e,t,n,r){if(t&&"object"===(void 0===t?"undefined":h(t))||"function"==typeof t){var i=!0,s=!1,o=void 0;try{for(var a,c=function(){var i=a.value;p.call(e,i)||i===n||u(e,i,{get:function(){return t[i]},enumerable:!(r=l(t,i))||r.enumerable})},f=d(t)[Symbol.iterator]();!(i=(a=f.next()).done);i=!0)c()}catch(e){s=!0,o=e}finally{try{i||null==f.return||f.return()}finally{if(s)throw o}}}})(e,t,"default")}(y,o);var v=e("WorkerManager",function(){function e(t,n){var r=this;s(this,e),this._modeId=t,this._defaults=n,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return r._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return r._updateExtraLibs()}))}return a(e,[{key:"dispose",value:function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}},{key:"_stopWorker",value:function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}},{key:"_updateExtraLibs",value:function(){var e=this;return r((function(){var t,n;return w(this,(function(r){switch(r.label){case 0:return e._worker?(t=++e._updateExtraLibsToken,[4,e._worker.getProxy()]):[2];case 1:return n=r.sent(),e._updateExtraLibsToken!==t?[2]:(n.updateExtraLibs(e._defaults.getExtraLibs()),[2])}}))}))()}},{key:"_getClient",value:function(){if(!this._client){var e=this;this._client=r((function(){return w(this,(function(t){switch(t.label){case 0:return e._worker=y.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:e._modeId,keepIdleModels:!0,createData:{compilerOptions:e._defaults.getCompilerOptions(),extraLibs:e._defaults.getExtraLibs(),customWorkerPath:e._defaults.workerOptions.customWorkerPath,inlayHintsOptions:e._defaults.inlayHintsOptions}}),e._defaults.getEagerModelSync()?[4,e._worker.withSyncedResources(y.editor.getModels().filter((function(t){return t.getLanguageId()===e._modeId})).map((function(e){return e.uri})))]:[3,2];case 1:case 3:return[2,t.sent()];case 2:return[4,e._worker.getProxy()]}}))}))()}return this._client}},{key:"getLanguageServiceWorker",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=this;return r((function(){var e;return w(this,(function(n){switch(n.label){case 0:return[4,i._getClient()];case 1:return e=n.sent(),i._worker?[4,i._worker.withSyncedResources(t)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,e]}}))}))()}}]),e}()),S={};function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next){var s=!0,o=!1,a=void 0;try{for(var u,l=e.next[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){r+=_(u.value,t,n)}}catch(e){o=!0,a=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw a}}}return r}function k(e){return e?e.map((function(e){return e.text})).join(""):""}S["lib.d.ts"]=!0,S["lib.decorators.d.ts"]=!0,S["lib.decorators.legacy.d.ts"]=!0,S["lib.dom.asynciterable.d.ts"]=!0,S["lib.dom.d.ts"]=!0,S["lib.dom.iterable.d.ts"]=!0,S["lib.es2015.collection.d.ts"]=!0,S["lib.es2015.core.d.ts"]=!0,S["lib.es2015.d.ts"]=!0,S["lib.es2015.generator.d.ts"]=!0,S["lib.es2015.iterable.d.ts"]=!0,S["lib.es2015.promise.d.ts"]=!0,S["lib.es2015.proxy.d.ts"]=!0,S["lib.es2015.reflect.d.ts"]=!0,S["lib.es2015.symbol.d.ts"]=!0,S["lib.es2015.symbol.wellknown.d.ts"]=!0,S["lib.es2016.array.include.d.ts"]=!0,S["lib.es2016.d.ts"]=!0,S["lib.es2016.full.d.ts"]=!0,S["lib.es2016.intl.d.ts"]=!0,S["lib.es2017.d.ts"]=!0,S["lib.es2017.date.d.ts"]=!0,S["lib.es2017.full.d.ts"]=!0,S["lib.es2017.intl.d.ts"]=!0,S["lib.es2017.object.d.ts"]=!0,S["lib.es2017.sharedmemory.d.ts"]=!0,S["lib.es2017.string.d.ts"]=!0,S["lib.es2017.typedarrays.d.ts"]=!0,S["lib.es2018.asyncgenerator.d.ts"]=!0,S["lib.es2018.asynciterable.d.ts"]=!0,S["lib.es2018.d.ts"]=!0,S["lib.es2018.full.d.ts"]=!0,S["lib.es2018.intl.d.ts"]=!0,S["lib.es2018.promise.d.ts"]=!0,S["lib.es2018.regexp.d.ts"]=!0,S["lib.es2019.array.d.ts"]=!0,S["lib.es2019.d.ts"]=!0,S["lib.es2019.full.d.ts"]=!0,S["lib.es2019.intl.d.ts"]=!0,S["lib.es2019.object.d.ts"]=!0,S["lib.es2019.string.d.ts"]=!0,S["lib.es2019.symbol.d.ts"]=!0,S["lib.es2020.bigint.d.ts"]=!0,S["lib.es2020.d.ts"]=!0,S["lib.es2020.date.d.ts"]=!0,S["lib.es2020.full.d.ts"]=!0,S["lib.es2020.intl.d.ts"]=!0,S["lib.es2020.number.d.ts"]=!0,S["lib.es2020.promise.d.ts"]=!0,S["lib.es2020.sharedmemory.d.ts"]=!0,S["lib.es2020.string.d.ts"]=!0,S["lib.es2020.symbol.wellknown.d.ts"]=!0,S["lib.es2021.d.ts"]=!0,S["lib.es2021.full.d.ts"]=!0,S["lib.es2021.intl.d.ts"]=!0,S["lib.es2021.promise.d.ts"]=!0,S["lib.es2021.string.d.ts"]=!0,S["lib.es2021.weakref.d.ts"]=!0,S["lib.es2022.array.d.ts"]=!0,S["lib.es2022.d.ts"]=!0,S["lib.es2022.error.d.ts"]=!0,S["lib.es2022.full.d.ts"]=!0,S["lib.es2022.intl.d.ts"]=!0,S["lib.es2022.object.d.ts"]=!0,S["lib.es2022.regexp.d.ts"]=!0,S["lib.es2022.sharedmemory.d.ts"]=!0,S["lib.es2022.string.d.ts"]=!0,S["lib.es2023.array.d.ts"]=!0,S["lib.es2023.collection.d.ts"]=!0,S["lib.es2023.d.ts"]=!0,S["lib.es2023.full.d.ts"]=!0,S["lib.es5.d.ts"]=!0,S["lib.es6.d.ts"]=!0,S["lib.esnext.collection.d.ts"]=!0,S["lib.esnext.d.ts"]=!0,S["lib.esnext.decorators.d.ts"]=!0,S["lib.esnext.disposable.d.ts"]=!0,S["lib.esnext.full.d.ts"]=!0,S["lib.esnext.intl.d.ts"]=!0,S["lib.esnext.object.d.ts"]=!0,S["lib.esnext.promise.d.ts"]=!0,S["lib.scripthost.d.ts"]=!0,S["lib.webworker.asynciterable.d.ts"]=!0,S["lib.webworker.d.ts"]=!0,S["lib.webworker.importscripts.d.ts"]=!0,S["lib.webworker.iterable.d.ts"]=!0;var x=e("Adapter",function(){function e(t){s(this,e),this._worker=t}return a(e,[{key:"_textSpanToRange",value:function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}}}]),e}()),O=e("LibFiles",function(){function e(t){s(this,e),this._worker=t,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return a(e,[{key:"isLibFile",value:function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!S[e.path.slice(1)])}},{key:"getOrCreateModel",value:function(e){var t=y.Uri.parse(e),r=y.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return y.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);var i=n.getExtraLibs()[e];return i?y.editor.createModel(i.content,"typescript",t):null}},{key:"_containsLibFile",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var o=i.value;if(this.isLibFile(o))return!0}}catch(e){n=!0,r=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}return!1}},{key:"fetchLibFilesIfNecessary",value:function(e){var t=this;return r((function(){return w(this,(function(n){switch(n.label){case 0:return t._containsLibFile(e)?[4,t._fetchLibFiles()]:[2];case 1:return n.sent(),[2]}}))}))()}},{key:"_fetchLibFiles",value:function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise}}]),e}()),C=e("DiagnosticsAdapter",function(e){function t(e,n,r,o){var a;s(this,t),(a=i(this,t,[o]))._libFiles=e,a._defaults=n,a._selector=r,a._disposables=[],a._listener=Object.create(null);var u=function(e){if(e.getLanguageId()===r){var t,n=function(){a._defaults.getDiagnosticsOptions().onlyVisible?e.isAttachedToEditor()&&a._doValidate(e):a._doValidate(e)},i=e.onDidChangeContent((function(){clearTimeout(t),t=window.setTimeout(n,500)})),s=e.onDidChangeAttached((function(){a._defaults.getDiagnosticsOptions().onlyVisible&&(e.isAttachedToEditor()?n():y.editor.setModelMarkers(e,a._selector,[]))}));a._listener[e.uri.toString()]={dispose:function(){i.dispose(),s.dispose(),clearTimeout(t)}},n()}},l=function(e){y.editor.setModelMarkers(e,a._selector,[]);var t=e.uri.toString();a._listener[t]&&(a._listener[t].dispose(),delete a._listener[t])};a._disposables.push(y.editor.onDidCreateModel((function(e){return u(e)}))),a._disposables.push(y.editor.onWillDisposeModel(l)),a._disposables.push(y.editor.onDidChangeModelLanguage((function(e){l(e.model),u(e.model)}))),a._disposables.push({dispose:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=y.editor.getModels()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var s=r.value;l(s)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}});var c=function(){var e=!0,t=!1,n=void 0;try{for(var r,i=y.editor.getModels()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var s=r.value;l(s),u(s)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}};return a._disposables.push(a._defaults.onDidChange(c)),a._disposables.push(a._defaults.onDidExtraLibsChange(c)),y.editor.getModels().forEach((function(e){return u(e)})),a}return c(t,e),a(t,[{key:"dispose",value:function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]}},{key:"_doValidate",value:function(e){var t=this;return r((function(){var n,r,i,s,o,a,u,l,c;return w(this,(function(d){switch(d.label){case 0:return[4,t._worker(e.uri)];case 1:return n=d.sent(),e.isDisposed()?[2]:(r=[],i=t._defaults.getDiagnosticsOptions(),s=i.noSyntaxValidation,o=i.noSemanticValidation,a=i.noSuggestionDiagnostics,s||r.push(n.getSyntacticDiagnostics(e.uri.toString())),o||r.push(n.getSemanticDiagnostics(e.uri.toString())),a||r.push(n.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(r)]);case 2:return!(u=d.sent())||e.isDisposed()?[2]:(l=u.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(t._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),c=l.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?y.Uri.parse(e.file.fileName):null})),[4,t._libFiles.fetchLibFilesIfNecessary(c)]);case 3:return d.sent(),e.isDisposed()?[2]:(y.editor.setModelMarkers(e,t._selector,l.map((function(n){return t._convertDiagnostics(e,n)}))),[2])}}))}))()}},{key:"_convertDiagnostics",value:function(e,t){var n=t.start||0,r=t.length||1,i=e.getPositionAt(n),s=i.lineNumber,o=i.column,a=e.getPositionAt(n+r),u=a.lineNumber,l=a.column,c=[];return t.reportsUnnecessary&&c.push(y.MarkerTag.Unnecessary),t.reportsDeprecated&&c.push(y.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:s,startColumn:o,endLineNumber:u,endColumn:l,message:_(t.messageText,"\n"),code:t.code.toString(),tags:c,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}},{key:"_convertRelatedInformation",value:function(e,t){var n=this;if(!t)return[];var r=[];return t.forEach((function(t){var i=e;if(t.file&&(i=n._libFiles.getOrCreateModel(t.file.fileName)),i){var s=t.start||0,o=t.length||1,a=i.getPositionAt(s),u=a.lineNumber,l=a.column,c=i.getPositionAt(s+o),d=c.lineNumber,f=c.column;r.push({resource:i.uri,startLineNumber:u,startColumn:l,endLineNumber:d,endColumn:f,message:_(t.messageText,"\n")})}})),r}},{key:"_tsDiagnosticCategoryToMarkerSeverity",value:function(e){switch(e){case 1:return y.MarkerSeverity.Error;case 3:return y.MarkerSeverity.Info;case 0:return y.MarkerSeverity.Warning;case 2:return y.MarkerSeverity.Hint}return y.MarkerSeverity.Info}}]),t}(x)),A=e("SuggestAdapter",function(e){function t(){return s(this,t),i(this,t,arguments)}return c(t,e),a(t,[{key:"triggerCharacters",get:function(){return["."]}},{key:"provideCompletionItems",value:function(e,n,i,s){var o=this;return r((function(){var r,i,s,a,u,l,c;return w(this,(function(d){switch(d.label){case 0:return r=e.getWordUntilPosition(n),i=new y.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),s=e.uri,a=e.getOffsetAt(n),[4,o._worker(s)];case 1:return u=d.sent(),e.isDisposed()?[2]:[4,u.getCompletionsAtPosition(s.toString(),a)];case 2:return!(l=d.sent())||e.isDisposed()?[2]:(c=l.entries.map((function(r){var o=i;if(r.replacementSpan){var u=e.getPositionAt(r.replacementSpan.start),l=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);o=new y.Range(u.lineNumber,u.column,l.lineNumber,l.column)}var c=[];return void 0!==r.kindModifiers&&-1!==r.kindModifiers.indexOf("deprecated")&&c.push(y.languages.CompletionItemTag.Deprecated),{uri:s,position:n,offset:a,range:o,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:c}})),[2,{suggestions:c}])}}))}))()}},{key:"resolveCompletionItem",value:function(e,n){var i=this;return r((function(){var n,r,s,o,a;return w(this,(function(u){switch(u.label){case 0:return r=(n=e).uri,s=n.position,o=n.offset,[4,i._worker(r)];case 1:return[4,u.sent().getCompletionEntryDetails(r.toString(),o,n.label)];case 2:return(a=u.sent())?[2,{uri:r,position:s,label:a.name,kind:t.convertKind(a.kind),detail:k(a.displayParts),documentation:{value:t.createDocumentationString(a)}}]:[2,n]}}))}))()}}],[{key:"convertKind",value:function(e){switch(e){case j.primitiveType:case j.keyword:return y.languages.CompletionItemKind.Keyword;case j.variable:case j.localVariable:return y.languages.CompletionItemKind.Variable;case j.memberVariable:case j.memberGetAccessor:case j.memberSetAccessor:return y.languages.CompletionItemKind.Field;case j.function:case j.memberFunction:case j.constructSignature:case j.callSignature:case j.indexSignature:return y.languages.CompletionItemKind.Function;case j.enum:return y.languages.CompletionItemKind.Enum;case j.module:return y.languages.CompletionItemKind.Module;case j.class:return y.languages.CompletionItemKind.Class;case j.interface:return y.languages.CompletionItemKind.Interface;case j.warning:return y.languages.CompletionItemKind.File}return y.languages.CompletionItemKind.Property}},{key:"createDocumentationString",value:function(e){var t=k(e.documentation);if(e.tags){var n=!0,r=!1,i=void 0;try{for(var s,o=e.tags[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var a=s.value;t+="\n\n".concat(D(a))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}return t}}]),t}(x));function D(e){var t="*@".concat(e.name,"*");if("param"===e.name&&e.text){var n=b(e.text),r=n[0],i=n.slice(1);t+="`".concat(r.text,"`"),i.length>0&&(t+=" — ".concat(i.map((function(e){return e.text})).join(" ")))}else Array.isArray(e.text)?t+=" — ".concat(e.text.map((function(e){return e.text})).join(" ")):e.text&&(t+=" — ".concat(e.text));return t}var P=e("SignatureHelpAdapter",function(e){function t(){var e;return s(this,t),(e=i(this,t,arguments)).signatureHelpTriggerCharacters=["(",","],e}return c(t,e),a(t,[{key:"provideSignatureHelp",value:function(e,n,i,s){var o=this;return r((function(){var r,i,a,u,l;return w(this,(function(c){switch(c.label){case 0:return r=e.uri,i=e.getOffsetAt(n),[4,o._worker(r)];case 1:return a=c.sent(),e.isDisposed()?[2]:[4,a.getSignatureHelpItems(r.toString(),i,{triggerReason:t._toSignatureHelpTriggerReason(s)})];case 2:return!(u=c.sent())||e.isDisposed()?[2]:(l={activeSignature:u.selectedItemIndex,activeParameter:u.argumentIndex,signatures:[]},u.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:k(e.documentation)},t.label+=k(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var s=k(n.displayParts),o={label:s,documentation:{value:k(n.documentation)}};t.label+=s,t.parameters.push(o),r<i.length-1&&(t.label+=k(e.separatorDisplayParts))})),t.label+=k(e.suffixDisplayParts),l.signatures.push(t)})),[2,{value:l,dispose:function(){}}])}}))}))()}}],[{key:"_toSignatureHelpTriggerReason",value:function(e){switch(e.triggerKind){case y.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case y.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case y.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}}]),t}(x)),I=e("QuickInfoAdapter",function(e){function t(){return s(this,t),i(this,t,arguments)}return c(t,e),a(t,[{key:"provideHover",value:function(e,t,n){var i=this;return r((function(){var n,r,s,o,a,u,l;return w(this,(function(c){switch(c.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,i._worker(n)];case 1:return s=c.sent(),e.isDisposed()?[2]:[4,s.getQuickInfoAtPosition(n.toString(),r)];case 2:return!(o=c.sent())||e.isDisposed()?[2]:(a=k(o.documentation),u=o.tags?o.tags.map((function(e){return D(e)})).join("  \n\n"):"",l=k(o.displayParts),[2,{range:i._textSpanToRange(e,o.textSpan),contents:[{value:"```typescript\n"+l+"\n```\n"},{value:a+(u?"\n\n"+u:"")}]}])}}))}))()}}]),t}(x)),F=e("DocumentHighlightAdapter",function(e){function t(){return s(this,t),i(this,t,arguments)}return c(t,e),a(t,[{key:"provideDocumentHighlights",value:function(e,t,n){var i=this;return r((function(){var n,r,s,o;return w(this,(function(a){switch(a.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,i._worker(n)];case 1:return s=a.sent(),e.isDisposed()?[2]:[4,s.getDocumentHighlights(n.toString(),r,[n.toString()])];case 2:return!(o=a.sent())||e.isDisposed()?[2]:[2,o.flatMap((function(t){return t.highlightSpans.map((function(t){return{range:i._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?y.languages.DocumentHighlightKind.Write:y.languages.DocumentHighlightKind.Text}}))}))]}}))}))()}}]),t}(x)),T=e("DefinitionAdapter",function(e){function t(e,n){var r;return s(this,t),(r=i(this,t,[n]))._libFiles=e,r}return c(t,e),a(t,[{key:"provideDefinition",value:function(e,t,n){var i=this;return r((function(){var n,r,s,o,a,u,l,c,d,f,g,p;return w(this,(function(b){switch(b.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,i._worker(n)];case 1:return s=b.sent(),e.isDisposed()?[2]:[4,s.getDefinitionAtPosition(n.toString(),r)];case 2:return!(o=b.sent())||e.isDisposed()?[2]:[4,i._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return y.Uri.parse(e.fileName)})))];case 3:if(b.sent(),e.isDisposed())return[2];a=[],u=!0,l=!1,c=void 0;try{for(d=o[Symbol.iterator]();!(u=(f=d.next()).done);u=!0)g=f.value,(p=i._libFiles.getOrCreateModel(g.fileName))&&a.push({uri:p.uri,range:i._textSpanToRange(p,g.textSpan)})}catch(e){l=!0,c=e}finally{try{u||null==d.return||d.return()}finally{if(l)throw c}}return[2,a]}}))}))()}}]),t}(x)),L=e("ReferenceAdapter",function(e){function t(e,n){var r;return s(this,t),(r=i(this,t,[n]))._libFiles=e,r}return c(t,e),a(t,[{key:"provideReferences",value:function(e,t,n,i){var s=this;return r((function(){var n,r,i,o,a,u,l,c,d,f,g,p;return w(this,(function(b){switch(b.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,s._worker(n)];case 1:return i=b.sent(),e.isDisposed()?[2]:[4,i.getReferencesAtPosition(n.toString(),r)];case 2:return!(o=b.sent())||e.isDisposed()?[2]:[4,s._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return y.Uri.parse(e.fileName)})))];case 3:if(b.sent(),e.isDisposed())return[2];a=[],u=!0,l=!1,c=void 0;try{for(d=o[Symbol.iterator]();!(u=(f=d.next()).done);u=!0)g=f.value,(p=s._libFiles.getOrCreateModel(g.fileName))&&a.push({uri:p.uri,range:s._textSpanToRange(p,g.textSpan)})}catch(e){l=!0,c=e}finally{try{u||null==d.return||d.return()}finally{if(l)throw c}}return[2,a]}}))}))()}}]),t}(x)),N=e("OutlineAdapter",function(e){function t(){return s(this,t),i(this,t,arguments)}return c(t,e),a(t,[{key:"provideDocumentSymbols",value:function(e,t){var n=this;return r((function(){var t,r,i,s,o;return w(this,(function(a){switch(a.label){case 0:return t=e.uri,[4,n._worker(t)];case 1:return r=a.sent(),e.isDisposed()?[2]:[4,r.getNavigationTree(t.toString())];case 2:return!(i=a.sent())||e.isDisposed()?[2]:(s=function(t,r){var i,o={name:t.text,detail:"",kind:E[t.kind]||y.languages.SymbolKind.Variable,range:n._textSpanToRange(e,t.spans[0]),selectionRange:n._textSpanToRange(e,t.spans[0]),tags:[],children:null===(i=t.childItems)||void 0===i?void 0:i.map((function(e){return s(e,t.text)})),containerName:r};return o},o=i.childItems?i.childItems.map((function(e){return s(e)})):[],[2,o])}}))}))()}}]),t}(x)),j=e("Kind",(t=function e(){s(this,e)},t.unknown="",t.keyword="keyword",t.script="script",t.module="module",t.class="class",t.interface="interface",t.type="type",t.enum="enum",t.variable="var",t.localVariable="local var",t.function="function",t.localFunction="local function",t.memberFunction="method",t.memberGetAccessor="getter",t.memberSetAccessor="setter",t.memberVariable="property",t.constructorImplementation="constructor",t.callSignature="call",t.indexSignature="index",t.constructSignature="construct",t.parameter="parameter",t.typeParameter="type parameter",t.primitiveType="primitive type",t.label="label",t.alias="alias",t.const="const",t.let="let",t.warning="warning",t)),E=Object.create(null);E[j.module]=y.languages.SymbolKind.Module,E[j.class]=y.languages.SymbolKind.Class,E[j.enum]=y.languages.SymbolKind.Enum,E[j.interface]=y.languages.SymbolKind.Interface,E[j.memberFunction]=y.languages.SymbolKind.Method,E[j.memberVariable]=y.languages.SymbolKind.Property,E[j.memberGetAccessor]=y.languages.SymbolKind.Property,E[j.memberSetAccessor]=y.languages.SymbolKind.Property,E[j.variable]=y.languages.SymbolKind.Variable,E[j.const]=y.languages.SymbolKind.Variable,E[j.localVariable]=y.languages.SymbolKind.Variable,E[j.variable]=y.languages.SymbolKind.Variable,E[j.function]=y.languages.SymbolKind.Function,E[j.localFunction]=y.languages.SymbolKind.Function;var M,R,K=e("FormatHelper",function(e){function t(){return s(this,t),i(this,t,arguments)}return c(t,e),a(t,[{key:"_convertTextChanges",value:function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}}],[{key:"_convertOptions",value:function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}}]),t}(x)),H=e("FormatAdapter",function(e){function t(){var e;return s(this,t),(e=i(this,t,arguments)).canFormatMultipleRanges=!1,e}return c(t,e),a(t,[{key:"provideDocumentRangeFormattingEdits",value:function(e,t,n,i){var s=this;return r((function(){var r,i,o,a,u;return w(this,(function(l){switch(l.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,s._worker(r)];case 1:return a=l.sent(),e.isDisposed()?[2]:[4,a.getFormattingEditsForRange(r.toString(),i,o,K._convertOptions(n))];case 2:return!(u=l.sent())||e.isDisposed()?[2]:[2,u.map((function(t){return s._convertTextChanges(e,t)}))]}}))}))()}}]),t}(K)),V=e("FormatOnTypeAdapter",function(e){function t(){return s(this,t),i(this,t,arguments)}return c(t,e),a(t,[{key:"autoFormatTriggerCharacters",get:function(){return[";","}","\n"]}},{key:"provideOnTypeFormattingEdits",value:function(e,t,n,i,s){var o=this;return r((function(){var r,s,a,u;return w(this,(function(l){switch(l.label){case 0:return r=e.uri,s=e.getOffsetAt(t),[4,o._worker(r)];case 1:return a=l.sent(),e.isDisposed()?[2]:[4,a.getFormattingEditsAfterKeystroke(r.toString(),s,n,K._convertOptions(i))];case 2:return!(u=l.sent())||e.isDisposed()?[2]:[2,u.map((function(t){return o._convertTextChanges(e,t)}))]}}))}))()}}]),t}(K)),W=e("CodeActionAdaptor",function(e){function t(){return s(this,t),i(this,t,arguments)}return c(t,e),a(t,[{key:"provideCodeActions",value:function(e,t,n,i){var s=this;return r((function(){var r,i,o,a,u,l,c,d;return w(this,(function(f){switch(f.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=K._convertOptions(e.getOptions()),u=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,s._worker(r)];case 1:return l=f.sent(),e.isDisposed()?[2]:[4,l.getCodeFixesAtPosition(r.toString(),i,o,u,a)];case 2:return!(c=f.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:(d=c.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return s._tsCodeFixActionToMonacoCodeAction(e,n,t)})),[2,{actions:d,dispose:function(){}}])}}))}))()}},{key:"_tsCodeFixActionToMonacoCodeAction",value:function(e,t,n){var r=[],i=!0,s=!1,o=void 0;try{for(var a,u=n.changes[Symbol.iterator]();!(i=(a=u.next()).done);i=!0){var l=a.value,c=!0,d=!1,f=void 0;try{for(var g,p=l.textChanges[Symbol.iterator]();!(c=(g=p.next()).done);c=!0){var b=g.value;r.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,b.span),text:b.newText}})}}catch(e){d=!0,f=e}finally{try{c||null==p.return||p.return()}finally{if(d)throw f}}}}catch(e){s=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(s)throw o}}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}}}]),t}(K)),B=e("RenameAdapter",function(e){function t(e,n){var r;return s(this,t),(r=i(this,t,[n]))._libFiles=e,r}return c(t,e),a(t,[{key:"provideRenameEdits",value:function(e,t,n,i){var s=this;return r((function(){var r,i,o,a,u,l,c,d,f,g,p,b,m,h;return w(this,(function(y){switch(y.label){case 0:return r=e.uri,i=r.toString(),o=e.getOffsetAt(t),[4,s._worker(r)];case 1:return a=y.sent(),e.isDisposed()?[2]:[4,a.getRenameInfo(i,o,{allowRenameOfImportPath:!1})];case 2:if(!1===(u=y.sent()).canRename)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(void 0!==u.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(i,o,!1,!1,!1)];case 3:if(!(l=y.sent())||e.isDisposed())return[2];c=[],d=!0,f=!1,g=void 0;try{for(p=l[Symbol.iterator]();!(d=(b=p.next()).done);d=!0){if(m=b.value,!(h=s._libFiles.getOrCreateModel(m.fileName)))throw new Error("Unknown file ".concat(m.fileName,"."));c.push({resource:h.uri,versionId:void 0,textEdit:{range:s._textSpanToRange(h,m.textSpan),text:n}})}}catch(e){f=!0,g=e}finally{try{d||null==p.return||p.return()}finally{if(f)throw g}}return[2,{edits:c}]}}))}))()}}]),t}(x)),U=e("InlayHintsAdapter",function(e){function t(){return s(this,t),i(this,t,arguments)}return c(t,e),a(t,[{key:"provideInlayHints",value:function(e,t,n){var i=this;return r((function(){var n,r,s,o,a,u,l;return w(this,(function(c){switch(c.label){case 0:return n=e.uri,r=n.toString(),s=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,i._worker(n)];case 1:return a=c.sent(),e.isDisposed()?[2,null]:[4,a.provideInlayHints(r,s,o)];case 2:return u=c.sent(),l=u.map((function(t){return g(f({},t),{label:t.text,position:e.getPositionAt(t.position),kind:i._convertHintKind(t.kind)})})),[2,{hints:l,dispose:function(){}}]}}))}))()}},{key:"_convertHintKind",value:function(e){return"Parameter"===e?y.languages.InlayHintKind.Parameter:y.languages.InlayHintKind.Type}}]),t}(x));function z(e,t){var n=[],r=new v(t,e),i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i;return(i=r).getLanguageServiceWorker.apply(i,m(t))},s=new O(i);return function(){var r=e.modeConfiguration;!function(e){for(;e.length;)e.pop().dispose()}(n),r.completionItems&&n.push(y.languages.registerCompletionItemProvider(t,new A(i))),r.signatureHelp&&n.push(y.languages.registerSignatureHelpProvider(t,new P(i))),r.hovers&&n.push(y.languages.registerHoverProvider(t,new I(i))),r.documentHighlights&&n.push(y.languages.registerDocumentHighlightProvider(t,new F(i))),r.definitions&&n.push(y.languages.registerDefinitionProvider(t,new T(s,i))),r.references&&n.push(y.languages.registerReferenceProvider(t,new L(s,i))),r.documentSymbols&&n.push(y.languages.registerDocumentSymbolProvider(t,new N(i))),r.rename&&n.push(y.languages.registerRenameProvider(t,new B(s,i))),r.documentRangeFormattingEdits&&n.push(y.languages.registerDocumentRangeFormattingEditProvider(t,new H(i))),r.onTypeFormattingEdits&&n.push(y.languages.registerOnTypeFormattingEditProvider(t,new V(i))),r.codeActions&&n.push(y.languages.registerCodeActionProvider(t,new W(i))),r.inlayHints&&n.push(y.languages.registerInlayHintsProvider(t,new U(i))),r.diagnostics&&n.push(new C(s,e,t,i))}(),i}}}}))}();