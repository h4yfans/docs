webpackJsonp([139],{1028:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",{attrs:{id:"example-2"}},[e("v-navigation-drawer",{attrs:{persistent:"",light:"","mini-variant":t.mini},on:{"update:miniVariant":function(i){t.mini=i}},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list",{staticClass:"pa-0"},[e("v-list-item",[e("v-list-tile",{attrs:{avatar:"",tag:"div"}},[e("v-list-tile-avatar",[e("img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})]),e("v-list-tile-content",[e("v-list-tile-title",[t._v("John Leider")])],1),e("v-list-tile-action",[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(i){i.stopPropagation(),t.mini=!t.mini}}},[e("v-icon",[t._v("chevron_left")])],1)],1)],1)],1)],1),e("v-list",{staticClass:"pt-0",attrs:{dense:""}},[e("v-divider"),t._l(t.items,function(i){return e("v-list-item",{key:i},[e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v(t._s(i.icon))])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v(t._s(i.title))])],1)],1)],1)})],2)],1),e("v-toolbar",{staticClass:"indigo darken-4",attrs:{fixed:""}},[e("v-toolbar-side-icon",{attrs:{light:""},nativeOn:{click:function(i){i.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("Toolbar")])],1),e("main",[e("v-container",{attrs:{fluid:""}},[e("div",{staticClass:"title"},[t._v("Click on sidebar to re-open.")])])],1)],1)},staticRenderFns:[]}},530:function(t,i,e){var n=e(9)(e(742),e(1028),null,null,null);t.exports=n.exports},742:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{drawer:!0,items:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}],mini:!1,right:null}}}}});