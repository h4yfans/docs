webpackJsonp([30],{1058:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"415px"}},[n("v-navigation-drawer",{staticClass:"pb-0",attrs:{permanent:"",absolute:"",height:"100%",light:""}},[n("v-list",{attrs:{dense:""}},[t._l(t.items,function(e,i){return[e.heading?n("v-layout",{key:i,attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs6:""}},[e.heading?n("v-subheader",[t._v("\n              "+t._s(e.heading)+"\n            ")]):t._e()],1),n("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[n("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?n("v-list-group",{attrs:{"no-action":""},model:{value:e.model,callback:function(t){e.model=t},expression:"item.model"}},[n("v-list-item",{slot:"item"},[n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.model?e.icon:e["icon-alt"]))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n                  "+t._s(e.text)+"\n                ")])],1)],1)],1),t._l(e.children,function(e,i){return n("v-list-item",{key:i},[n("v-list-tile",[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n                  "+t._s(e.text)+"\n                ")])],1)],1)],1)})],2):n("v-list-item",[n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n                "+t._s(e.text)+"\n              ")])],1)],1)],1)]})],2)],1)],1)},staticRenderFns:[]}},547:function(t,e,n){function i(t){n(939)}var o=n(9)(n(758),n(1058),i,null,null);t.exports=o.exports},758:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:[{icon:"contacts",text:"Contacts"},{icon:"history",text:"Frequently contacted"},{icon:"content_copy",text:"Duplicates"},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Labels",model:!0,children:[{icon:"add",text:"Create label"}]},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"More",model:!1,children:[{text:"Import"},{text:"Export"},{text:"Print"},{text:"Undo changes"},{text:"Other contacts"}]},{icon:"settings",text:"Settings"},{icon:"chat_bubble",text:"Send feedback"},{icon:"help",text:"Help"},{icon:"phonelink",text:"App downloads"},{icon:"keyboard",text:"Got to the old version"}]}}}},894:function(t,e,n){e=t.exports=n(452)(void 0),e.push([t.i,"#navigation-1 a{text-decoration:none}",""])},939:function(t,e,n){var i=n(894);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(453)("7029c898",i,!0)}});