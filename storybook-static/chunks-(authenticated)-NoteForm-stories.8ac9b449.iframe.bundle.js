"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15],{"./src/chunks/(authenticated)/NoteForm/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),notistack_esm=__webpack_require__("./node_modules/notistack/notistack.esm.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),md=__webpack_require__("__barrel_optimize__?names=MdSearch!=!./node_modules/react-icons/md/index.mjs"),notes=__webpack_require__("./src/data/notes.ts"),local=__webpack_require__("./src/data/local.ts"),auth=__webpack_require__("./src/data/auth.ts");let typingTimer;function useNoteForm(){const[draft,setDraft]=(0,react.useState)(void 0),[expanded,setExpanded]=(0,react.useState)(!1),[history,setHistory]=(0,react.useState)([]),[redoStack,setRedoStack]=(0,react.useState)([]),[values,setValues]=(0,react.useState)({title:"",content:""}),container=(0,react.useRef)(null),{enqueueSnackbar}=(0,notistack_esm.dh)();var _useAuthUser;const{_id:userId}=null!==(_useAuthUser=(0,auth.ZY)())&&void 0!==_useAuthUser?_useAuthUser:{},{addNote,state}=(0,notes.tV)();(0,react.useEffect)((()=>{history.length&&setValues(history[history.length-1])}),[history]),(0,react.useEffect)((()=>{state.loading&&enqueueSnackbar("Saving..."),state.error&&enqueueSnackbar("Could not save. Please try again",{variant:"error"})}),[enqueueSnackbar,state]),(0,react.useEffect)((()=>{(0,local.nR)("draft").then(setDraft)}),[]),(0,react.useEffect)((()=>{draft&&setValues({title:draft.title,content:draft.content})}),[draft]);const saveHistory=()=>setHistory([...history,values].slice(-10)),saveDraft=async()=>{await updateDraft(values),saveHistory()},updateDraft=async values=>{await(0,local.NE)("draft",values),setDraft(values)},events={async blur(event){var _container_current;const related=event.relatedTarget,contentIsEmpty=Object.values(values).every((v=>0===v.trim().length)),focusIsOutside=!related||!(null===(_container_current=container.current)||void 0===_container_current?void 0:_container_current.contains(related));if(contentIsEmpty&&focusIsOutside)setValues({title:"",content:""}),setExpanded(!1);else if(focusIsOutside){(await addNote({...values,userId})).data.addNote&&(await(async()=>{const values={title:"",content:""};setExpanded(!1),setValues(values),setHistory([]),setRedoStack([]),clearTimeout(typingTimer),await updateDraft(values)})(),enqueueSnackbar("Success!",{variant:"success"}))}},focus:()=>setExpanded(!0),close:()=>setExpanded(!1)};return{actions:[{title:"Undo",Icon:md.omt,action:()=>{setRedoStack([history[history.length-1],...redoStack]),setHistory(history.slice(0,-1))},disabled:(0,react.useCallback)((()=>0===history.length),[history])},{title:"Redo",Icon:md.uC7,action:()=>{setHistory([...history,redoStack[0]]),setRedoStack(redoStack.slice(1))},disabled:(0,react.useCallback)((()=>0===redoStack.length),[redoStack])}],events,expanded,container,typingEvents:field=>({onChange(event){setValues({...values,[field]:event.target.value})},onKeyUp(){clearTimeout(typingTimer),typingTimer=setTimeout(saveDraft,2e3)},onKeyDown(event){[" ","Enter"].includes(event.key)&&saveHistory(),clearTimeout(typingTimer)}}),values}}var Button=__webpack_require__("./src/components/Button/index.tsx"),IconButton=__webpack_require__("./src/components/IconButton/index.tsx"),TextArea=__webpack_require__("./src/components/TextArea/index.tsx"),TextBox=__webpack_require__("./src/components/TextBox/index.tsx");function NoteForm(){const h=useNoteForm();return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{ref:h.container,className:"mx-auto my-4 flex max-h-[80vh] max-w-2xl flex-col gap-4 overflow-hidden rounded-lg border-2 border-light shadow-xl",onBlur:h.events.blur,children:h.expanded?(0,jsx_runtime.jsxs)("div",{className:"py-1",children:[(0,jsx_runtime.jsx)(TextBox.A,{variant:"ghost",placeholder:"Title",className:"mx-2",...h.typingEvents("title")}),(0,jsx_runtime.jsx)("div",{className:"flex-1 overflow-y-auto p-2",children:(0,jsx_runtime.jsx)(TextArea.A,{value:h.values.content,variant:"ghost",placeholder:"Take a note...",autoFocus:!0,...h.typingEvents("content")})}),(0,jsx_runtime.jsxs)("footer",{className:"flex justify-between px-2",children:[(0,jsx_runtime.jsx)("div",{className:"flex items-center gap-4",children:h.actions.map(((btn,index)=>(0,jsx_runtime.jsx)(IconButton.A,{title:btn.title,onClick:btn.action,disabled:btn.disabled&&btn.disabled(),children:(0,jsx_runtime.jsx)(btn.Icon,{size:20})},index)))}),(0,jsx_runtime.jsx)(Button.A,{onClick:h.events.close,children:"Close"})]})]}):(0,jsx_runtime.jsx)("div",{className:"cursor-text p-3 font-bold text-neutral-400",onClick:h.events.focus,children:"Take a note..."})})})}NoteForm.__docgenInfo={description:"",methods:[],displayName:"NoteForm"};const Primary={},stories={component:NoteForm,parameters:{layout:"fullscreen"},tags:["autodocs"]}},"./src/data/auth.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CR:()=>useRegisterUser,ZY:()=>useAuthUser,vz:()=>useLogin});var _apollo_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@apollo/client/react/hooks/useQuery.js"),_apollo_client__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@apollo/client/react/hooks/useMutation.js"),_data_gql_auth__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/data/gql/auth.ts");function useAuthUser(){var _res_data;return null===(_res_data=(0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.I)(_data_gql_auth__WEBPACK_IMPORTED_MODULE_0__.Jd).data)||void 0===_res_data?void 0:_res_data.authUser}function useLogin(){const[mutation]=(0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.n)(_data_gql_auth__WEBPACK_IMPORTED_MODULE_0__.bd);return async credentials=>mutation({variables:{credentials}})}function useRegisterUser(){const[mutation]=(0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.n)(_data_gql_auth__WEBPACK_IMPORTED_MODULE_0__.V5);return async user=>mutation({variables:{user}})}},"./src/data/local.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NE:()=>setLocalItem,Z5:()=>clearLocalItems,nR:()=>getLocalItem});var idb_keyval__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/idb-keyval/dist/index.js");async function getLocalItem(key){return idb_keyval__WEBPACK_IMPORTED_MODULE_0__.Jt(key)}async function setLocalItem(key,val){return idb_keyval__WEBPACK_IMPORTED_MODULE_0__.hZ(key,val)}async function clearLocalItems(){return idb_keyval__WEBPACK_IMPORTED_MODULE_0__.IU()}},"./node_modules/idb-keyval/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function promisifyRequest(request){return new Promise(((resolve,reject)=>{request.oncomplete=request.onsuccess=()=>resolve(request.result),request.onabort=request.onerror=()=>reject(request.error)}))}let defaultGetStoreFunc;function defaultGetStore(){return defaultGetStoreFunc||(defaultGetStoreFunc=function createStore(dbName,storeName){const request=indexedDB.open(dbName);request.onupgradeneeded=()=>request.result.createObjectStore(storeName);const dbp=promisifyRequest(request);return(txMode,callback)=>dbp.then((db=>callback(db.transaction(storeName,txMode).objectStore(storeName))))}("keyval-store","keyval")),defaultGetStoreFunc}function get(key,customStore=defaultGetStore()){return customStore("readonly",(store=>promisifyRequest(store.get(key))))}function set(key,value,customStore=defaultGetStore()){return customStore("readwrite",(store=>(store.put(value,key),promisifyRequest(store.transaction))))}function clear(customStore=defaultGetStore()){return customStore("readwrite",(store=>(store.clear(),promisifyRequest(store.transaction))))}__webpack_require__.d(__webpack_exports__,{IU:()=>clear,Jt:()=>get,hZ:()=>set})}}]);