"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6],{"./src/apollo/cache.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>cache});const cache=new(__webpack_require__("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js").D)({typePolicies:{User:{fields:{notes:{merge:!0}}}}})},"./src/chunks/(authenticated)/Header/MenuTrigger/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MenuTrigger});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_MdMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("__barrel_optimize__?names=MdSearch!=!./node_modules/react-icons/md/index.mjs"),_components_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/IconButton/index.tsx"),_data_menu_extended__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/data/menu-extended.ts");function MenuTrigger(){const toggleMenu=(0,_data_menu_extended__WEBPACK_IMPORTED_MODULE_2__.zk)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{title:"Main menu",onClick:toggleMenu,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_MdMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.vIB,{size:24})})}MenuTrigger.__docgenInfo={description:"",methods:[],displayName:"MenuTrigger"}},"./src/chunks/(authenticated)/Header/MenuTrigger/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/chunks/(authenticated)/Header/MenuTrigger/index.tsx");const Primary={},__WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{layout:"centered"},tags:["autodocs"]}},"./src/data/menu-extended.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$g:()=>useExtendMenu,St:()=>useIsMenuExtended,zk:()=>useToggleMenu});var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@swc/helpers/esm/_tagged_template_literal.js"),_apollo_client__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/graphql-tag/lib/index.js"),_apollo_client__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@apollo/client/react/hooks/useQuery.js"),_apollo_cache__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/apollo/cache.ts");function _templateObject(){const data=(0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)(["\n  query GetMenuExtended {\n    menuExtended @client\n  }\n"]);return _templateObject=function(){return data},data}const GetMenuExtendedQuery=(0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.J1)(_templateObject());function useIsMenuExtended(){var _res_data;const res=(0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.I)(GetMenuExtendedQuery);return Boolean(null===(_res_data=res.data)||void 0===_res_data?void 0:_res_data.menuExtended)}function useExtendMenu(){return menuExtended=>{_apollo_cache__WEBPACK_IMPORTED_MODULE_1__.P.writeQuery({query:GetMenuExtendedQuery,data:{menuExtended}})}}function useToggleMenu(){const isExtended=useIsMenuExtended();return()=>_apollo_cache__WEBPACK_IMPORTED_MODULE_1__.P.writeQuery({query:GetMenuExtendedQuery,data:{menuExtended:!isExtended}})}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k5:()=>GenIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}}}]);