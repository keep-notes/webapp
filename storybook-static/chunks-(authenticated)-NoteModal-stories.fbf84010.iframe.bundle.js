"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[460],{"./src/chunks/(authenticated)/NoteModal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>NoteModal});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),md=__webpack_require__("__barrel_optimize__?names=MdSearch!=!./node_modules/react-icons/md/index.mjs"),notistack_esm=__webpack_require__("./node_modules/notistack/notistack.esm.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),notes=__webpack_require__("./src/data/notes.ts");let typingTimer;function useNoteModal(){const note=(0,notes.t2)(),open=(0,notes.eI)(),{enqueueSnackbar}=(0,notistack_esm.dh)();var _note_isPinned;const[isPinned,setIsPinned]=(0,react.useState)(null!==(_note_isPinned=null==note?void 0:note.isPinned)&&void 0!==_note_isPinned&&_note_isPinned);var _note_title,_note_content;const[values,setValues]=(0,react.useState)({title:null!==(_note_title=null==note?void 0:note.title)&&void 0!==_note_title?_note_title:"",content:null!==(_note_content=null==note?void 0:note.content)&&void 0!==_note_content?_note_content:""}),editNote=(0,notes.GE)(),{state:deleteState,deleteNote}=(0,notes.DO)(),[history,setHistory]=(0,react.useState)([]),[redoStack,setRedoStack]=(0,react.useState)([]);(0,react.useEffect)((()=>{if(note){const{title,content,isPinned}=note;setValues({title,content}),setIsPinned(isPinned),function reset(){setHistory([]),setRedoStack([])}()}}),[note]),(0,react.useEffect)((()=>{history.length&&setValues(history[history.length-1])}),[history]),(0,react.useEffect)((()=>{deleteState.loading&&enqueueSnackbar("Deleting..."),deleteState.error&&enqueueSnackbar("Could not delete. Please try again",{variant:"error"})}),[enqueueSnackbar,deleteState]);const saveHistory=()=>setHistory([...history,values].slice(-10));async function save(){note&&await editNote(note._id,{...values}),saveHistory()}async function close(){open(null),await save()}async function pin(){let isPinned=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return setIsPinned(isPinned),editNote(note._id,{isPinned})}return{actions:[{title:"Undo",Icon:md.omt,action(){setRedoStack([history[history.length-1],...redoStack]),setHistory(history.slice(0,-1))},disabled:(0,react.useCallback)((()=>0===history.length),[history])},{title:"Redo",Icon:md.uC7,action(){setHistory([...history,redoStack[0]]),setRedoStack(redoStack.slice(1))},disabled:(0,react.useCallback)((()=>0===redoStack.length),[redoStack])},{title:"Archive",Icon:md.mYI,async action(){editNote(note._id,{isArchived:!0}),await close()},disabled:!1},{title:"Delete",Icon:md.pS_,async action(){(await deleteNote(note._id)).data.deleteNote&&open(null)},disabled:!1}],close,inputExtras:field=>({value:values[field],onChange(event){setValues({...values,[field]:event.target.value})},onKeyUp(){clearTimeout(typingTimer),typingTimer=setTimeout(save,2e3)},onKeyDown(event){" "===event.key&&saveHistory(),clearTimeout(typingTimer)}}),isPinned,note,pin,unpin:()=>pin(!1),values}}var Card=__webpack_require__("./src/components/Card/index.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx"),IconButton=__webpack_require__("./src/components/IconButton/index.tsx"),TextArea=__webpack_require__("./src/components/TextArea/index.tsx"),TextBox=__webpack_require__("./src/components/TextBox/index.tsx");function NoteModal(){const h=useNoteModal();if(h.note)return(0,jsx_runtime.jsxs)("div",{className:"fixed left-0 top-0 z-20 grid h-screen w-screen place-items-center",children:[(0,jsx_runtime.jsx)("div",{className:"absolute h-full w-full bg-[#00000088]",onClick:h.close}),(0,jsx_runtime.jsxs)(Card.A,{className:"z-30 flex max-h-[80vh] w-full flex-col gap-4 bg-dark pb-1 pt-4 shadow-xl md:w-[40em]",children:[(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)(TextBox.A,{variant:"ghost",placeholder:"Title",className:"mx-2 text-lg font-semibold",...h.inputExtras("title")}),h.isPinned?(0,jsx_runtime.jsx)(IconButton.A,{title:"Unpin note",className:"bg-light",onClick:h.unpin,children:(0,jsx_runtime.jsx)(md.RR4,{size:20})}):(0,jsx_runtime.jsx)(IconButton.A,{title:"Pin note",onClick:()=>h.pin(),children:(0,jsx_runtime.jsx)(md.nDj,{size:20})})]}),(0,jsx_runtime.jsx)("div",{className:"flex-1 overflow-y-auto p-2",children:(0,jsx_runtime.jsx)(TextArea.A,{variant:"ghost",placeholder:"Note",...h.inputExtras("content")})}),(0,jsx_runtime.jsxs)("footer",{className:"flex items-center justify-between px-2",children:[(0,jsx_runtime.jsx)("div",{className:"flex items-center gap-4",children:h.actions.map(((btn,index)=>(0,jsx_runtime.jsx)(IconButton.A,{title:btn.title,onClick:btn.action,disabled:btn.disabled&&btn.disabled(),children:(0,jsx_runtime.jsx)(btn.Icon,{size:20})},index)))}),(0,jsx_runtime.jsx)(Button.A,{onClick:h.close,children:"Close"})]})]})]})}NoteModal.__docgenInfo={description:"",methods:[],displayName:"NoteModal"}},"./src/chunks/(authenticated)/NoteModal/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/chunks/(authenticated)/NoteModal/index.tsx");const Primary={},__WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{layout:"fullscreen"},tags:["autodocs"]}},"./src/components/Card/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function Card(param){let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("rounded-lg border border-light p-8",className),...props})}Card.__docgenInfo={description:"",methods:[],displayName:"Card"}}}]);