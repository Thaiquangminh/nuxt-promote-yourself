(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{470:function(t,e,r){var content=r(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("5380f481",content,!0,{sourceMap:!1})},472:function(t,e,r){"use strict";var o={props:{title:{required:!0,type:String},exitLink:{required:!1,type:String,default:null}},computed:{user:function(){return this.$store.getters["auth/getUser"]||{}}}},n=(r(473),r(18)),component=Object(n.a)(o,(function(){var t=this,e=this,r=e._self._c;return r("div",{staticClass:"full-page-takeover-header"},[r("div",{staticClass:"full-page-takeover-header-logo",staticStyle:{cursor:"pointer"},on:{click:function(){return t.$router.push("/")}}},[r("p",{staticClass:"full-page-takeover-header-logo-title"},[e._v("Promo Yourself")])]),e._v(" "),r("div",{staticClass:"full-page-takeover-header-divider"}),e._v(" "),r("div",{staticClass:"full-page-takeover-header-text"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),r("div",{staticClass:"user-box"},[r("figure",{staticClass:"image is-48x48 m-r-sm"},[r("img",{staticClass:"is-rounded",attrs:{src:e.user.avatar}})]),e._v(" "),r("div",{staticClass:"m-r-sm",staticStyle:{"margin-top":"5px !important"}},[e._v("\n      Welcome "+e._s(e.user.username)+"!\n    ")])]),e._v(" "),e._t("actionMenu"),e._v(" "),e.exitLink?r("div",{staticClass:"full-page-takeover-header-button"},[r("nuxt-link",{staticClass:"button is-danger is-medium is-inverted is-outlined",attrs:{to:e.exitLink}},[e._v("\n      Exit\n    ")])],1):e._e()],2)}),[],!1,null,"61195314",null);e.a=component.exports},473:function(t,e,r){"use strict";r(470)},474:function(t,e,r){var o=r(45)((function(i){return i[1]}));o.push([t.i,".user-box[data-v-61195314]{align-items:center;display:flex;font-size:17px;font-weight:700;justify-content:flex-start;margin-right:10px}",""]),o.locals={},t.exports=o},521:function(t,e,r){var content=r(548);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("461537a1",content,!0,{sourceMap:!1})},522:function(t,e,r){var content=r(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("bbf81acc",content,!0,{sourceMap:!1})},547:function(t,e,r){"use strict";r(521)},548:function(t,e,r){var o=r(45)((function(i){return i[1]}));o.push([t.i,".dropdown-trigger[data-v-a6af508c]:hover{cursor:pointer}i[data-v-a6af508c]{align-self:end;font-size:25px}",""]),o.locals={},t.exports=o},549:function(t,e,r){"use strict";r(522)},550:function(t,e,r){var o=r(45)((function(i){return i[1]}));o.push([t.i,".blog-error[data-v-781e2f6a]{font-size:35px}.blog-card[data-v-781e2f6a]{border-bottom:1px solid rgba(0,0,0,.1);padding:20px 0}.blog-card>h2[data-v-781e2f6a]{font-size:30px;font-weight:700}.blog-card-footer[data-v-781e2f6a]{color:rgba(0,0,0,.54)}.blog-card.featured[data-v-781e2f6a]{border-left:5px solid #3cc314;padding-left:10px;transition:border .2s ease-out}.header-block[data-v-781e2f6a]{align-items:center;display:flex;flex-direction:row}.header-block>h2[data-v-781e2f6a]{font-size:40px;font-weight:700}.header-block .title-menu[data-v-781e2f6a]{margin-left:auto}",""]),o.locals={},t.exports=o},590:function(t,e,r){"use strict";r.r(e);r(47),r(32),r(30),r(12),r(53),r(33),r(54);var o=r(24),n=r(472),c=r(38),l=(r(34),{props:{items:{type:Array,required:!0}},data:function(){return{isActive:!1}},methods:{emitOption:function(t){this.$emit("optionChanged",t)}}}),d=(r(547),r(18)),f=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown",class:{"is-active":t.isActive}},[e("div",{staticClass:"dropdown-trigger"},[e("div",{attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{click:function(e){t.isActive=!t.isActive}}},[e("span"),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu",role:"menu"}},[e("div",{staticClass:"dropdown-content"},t._l(t.items,(function(r){return e("a",{key:r.name,staticClass:"dropdown-item",on:{click:function(e){return e.preventDefault(),t.emitOption(r.command)}}},[t._v("\n        "+t._s(r.name)+"\n      ")])})),0)])])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])}],!1,null,"a6af508c",null).exports,v="DELETE_BLOG",h="EDIT_BLOG",_="TOGGLE_FEATURE",m=function(t,e){return{name:t,command:e}},x=m("Delete Blog",v),y=m("Edit Blog",h),O=m("Feature Blog",_),B=m("Un-Feature Blog",_);m("Delete Draft",v),m("Edit Draft",h);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={data:function(){return{blogsData:[],haveBlog:!1}},layout:"instructor",components:{Dropdown:f,Header:n.a},created:function(){this.$store.dispatch("instructor/instructorBlog/fetchBlogs")},beforeMount:function(){this.$store.dispatch("instructor/instructorBlog/fetchBlogs")},computed:w(w({},Object(c.d)("instructor/instructorBlog",["items"])),{},{blogs:function(){if(0!==this.items.length)return this.haveBlog=!0,this.items;this.haveBlog=!1}}),methods:{handleOption:function(t,e){"EDIT_BLOG"===t&&this.$router.push("/instructor/blog/".concat(e._id)),"DELETE_BLOG"===t&&this.confirmDelete(e._id),"TOGGLE_FEATURE"===t&&this.updateBlog(e)},updateBlog:function(t){var e=this;this.$store.dispatch("instructor/blog/updatePublishedBlog");var r=!t.featured,o=r?"Featured":"Un-Featured";this.$store.dispatch("instructor/instructorBlog/updateFeaturedBlog",{id:t._id,featured:r}).then((function(t){return e.$toasted.success("Blog has been ".concat(o,"!"),{duration:2e3})}))},confirmDelete:function(t){var e=this;confirm("Are you sure you want to delete?")&&this.$store.dispatch("instructor/instructorBlog/deleteBlog",t).then((function(){return e.$store.dispatch("instructor/instructorBlog/fetchBlogs")}))},displayBlogTitle:function(t){return t.title||t.subtitle||"Anonymous Blog"},publicOptions:function(t){return function(t){var e=[y,x];return t?e.push(B):e.push(O),e}(t)}}},E=(r(549),Object(d.a)(k,(function(){var t=this,e=t._self._c;return e("div",[e("Header",{attrs:{title:"Manage your Blogs",exitLink:"/"}}),t._v(" "),e("div",{staticClass:"instructor-blogs"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section"},[e("div",{staticClass:"header-block"},[e("h2",[t._v("Your Stories")]),t._v(" "),e("div",{staticClass:"title-menu"},[e("button",{staticClass:"button",on:{click:function(e){return t.$router.push("/instructor/blog/create")}}},[t._v("Write a story")])])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"blogs-container"},[[e("div",[t._l(t.blogs,(function(r){return e("div",{key:r._id,staticClass:"blog-card",class:{featured:r.featured}},[e("h2",[t._v(t._s(t.displayBlogTitle(r)))]),t._v(" "),e("div",{staticClass:"blog-card-footer"},[e("span",[t._v("\n                    Last Edited: "+t._s(t._f("formatDate")(r.updatedAt,"LLL"))+"\n                  ")]),t._v(" "),e("dropdown",{attrs:{items:t.publicOptions(r.featured)},on:{optionChanged:function(e){return t.handleOption(e,r)}}})],1)])})),t._v(" "),t.haveBlog?t._e():e("div",[t._v("You have no blog yet !!!")])],2)]],2)])])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabs"},[e("ul",[e("li",[e("a",[t._v("Drafts")])]),t._v(" "),e("li",[e("a",[t._v("Published")])])])])}],!1,null,"781e2f6a",null));e.default=E.exports}}]);