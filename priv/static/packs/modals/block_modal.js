(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{830:function(o,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var c,e=t(0),a=t(2),i=(t(9),t(6),t(8)),r=t(1),l=t(3),s=t.n(l),b=t(15),d=t(7),u=t(210),f=t(110),p=t(48),j=t(26),m=t(105);var O=Object(b.connect)((function(){var o=Object(u.d)();return function(n){return{account:o(n,n.getIn(["blocks","new","account_id"]))}}}),(function(o){return{onConfirm:function(n){o(Object(j.w)(n.get("id")))},onBlockAndReport:function(n){o(Object(j.w)(n.get("id"))),o(Object(m.k)(n))},onClose:function(){o(Object(p.c)())}}}))(c=Object(d.g)(c=function(o){Object(i.a)(t,o);var n;n=t;function t(){for(var n,t=arguments.length,c=new Array(t),e=0;e<t;e++)c[e]=arguments[e];return n=o.call.apply(o,[this].concat(c))||this,Object(r.a)(Object(a.a)(n),"handleClick",(function(){n.props.onClose(),n.props.onConfirm(n.props.account)})),Object(r.a)(Object(a.a)(n),"handleSecondary",(function(){n.props.onClose(),n.props.onBlockAndReport(n.props.account)})),Object(r.a)(Object(a.a)(n),"handleCancel",(function(){n.props.onClose()})),Object(r.a)(Object(a.a)(n),"setRef",(function(o){n.button=o})),n}var c=t.prototype;return c.componentDidMount=function(){this.button.focus()},c.render=function(){var o=this.props.account;return(Object(e.a)("div",{className:"modal-root__modal block-modal"},void 0,Object(e.a)("div",{className:"block-modal__container"},void 0,Object(e.a)("p",{},void 0,Object(e.a)(d.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:Object(e.a)("strong",{},void 0,"@",o.get("acct"))}}))),Object(e.a)("div",{className:"block-modal__action-bar"},void 0,Object(e.a)(f.a,{onClick:this.handleCancel,className:"block-modal__cancel-button"},void 0,Object(e.a)(d.b,{id:"confirmation_modal.cancel",defaultMessage:"Cancel"})),Object(e.a)(f.a,{onClick:this.handleSecondary,className:"confirmation-modal__secondary-button"},void 0,Object(e.a)(d.b,{id:"confirmations.block.block_and_report",defaultMessage:"Block & Report"})),s.a.createElement(f.a,{onClick:this.handleClick,ref:this.setRef},Object(e.a)(d.b,{id:"confirmations.block.confirm",defaultMessage:"Block"})))))},t}(s.a.PureComponent))||c)||c}}]);
//# sourceMappingURL=block_modal.js.map