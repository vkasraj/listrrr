webpackJsonp([2],{6406:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),l=n.n(c),i=n(194),u=n(1034),s=n(1052),p=n(6407),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=function(e){function t(){var e,n,a,c;o(this,t);for(var l=arguments.length,i=Array(l),u=0;u<l;u++)i[u]=arguments[u];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={anchorEl:null,reminderDialog:!1,selectedTodoId:null,selectedTodoReminder:null},a.openMenu=function(e,t){return function(n){a.setState({selectedTodoId:e,selectedTodoReminder:t,anchorEl:n.currentTarget})}},a.closeMenu=function(){a.setState({anchorEl:null})},a.openReminder=function(){a.closeMenu(),a.setState({reminderDialog:!0})},a.closeReminder=function(){a.setState({reminderDialog:!1})},a.clickEdit=function(){var e=a,t=e.closeMenu,n=e.state.selectedTodoId;(0,e.props.onEdit)(n)(),t()},a.clickDelete=function(){var e=a,t=e.closeMenu,n=e.state.selectedTodoId;(0,e.props.onDelete)(n),t()},c=n,r(a,c)}return a(t,e),f(t,[{key:"render",value:function(){var e=this.openMenu,t=this.closeMenu,n=this.openReminder,o=this.closeReminder,r=this.clickEdit,a=this.clickDelete,f=this.state,d=f.anchorEl,m=f.selectedTodoReminder,h=f.reminderDialog,y=this.props,b=y.onCheck,E=y.todoList,v=E.map(function(t){return l.a.createElement(p.a,{todo:t,onCheck:b,openMenu:e,key:t._id})});return l.a.createElement(c.Fragment,null,l.a.createElement(i.n,{style:{paddingBottom:"5rem"},component:"nav",subheader:l.a.createElement(i.r,{component:"div"},"Your Todos")},v),l.a.createElement(i.s,{anchorEl:d,open:Boolean(d),onClose:t},l.a.createElement(i.t,{onClick:n},l.a.createElement(u.c,null)),l.a.createElement(i.t,{onClick:r},l.a.createElement(u.g,null)),l.a.createElement(i.t,{onClick:a},l.a.createElement(u.f,{style:{color:"red"}}))),l.a.createElement(i.f,{open:h,onClose:o},l.a.createElement(i.j,null,"Reminder at"),l.a.createElement(i.h,null,l.a.createElement(i.i,{variant:"subheading"},Object(s.a)(new Date(m),"ddd MMM D YYYY h:mm a")))))}}]),t}(c.Component);t.default=d},6407:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(1),l=n.n(c),i=n(194),u=n(1034),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.todo,n=t._id,o=t.title,r=t.description,a=t.checked,s=t.reminder,p=e.openMenu,f=e.onCheck;return l.a.createElement(c.Fragment,null,l.a.createElement(i.o,null,l.a.createElement(i.c,{color:"primary",checked:a,onChange:f(n,!a),icon:l.a.createElement(u.l,null),checkedIcon:l.a.createElement(u.d,null),disableRipple:!0}),l.a.createElement(i.q,{primary:o,secondary:r}),l.a.createElement(i.p,null,l.a.createElement(i.m,{onClick:p(n,s)},l.a.createElement(u.j,null)))))}}]),t}(c.PureComponent);t.a=p}});
//# sourceMappingURL=2.1b23fa4d.chunk.js.map