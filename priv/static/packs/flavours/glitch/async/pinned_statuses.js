(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{794:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var s,a,i,o=n(0),c=n(2),r=(n(9),n(6),n(8)),u=n(1),l=n(3),d=n.n(l),p=n(15),b=n(5),f=n.n(b),h=n(16),m=n.n(h),j=n(433),O=n(756),g=n(761),w=n(1064),M=n(7),v=n(21);var I=Object(M.f)({heading:{id:"column.pins",defaultMessage:"Pinned toot"}}),R=Object(p.connect)((function(t){return{statusIds:t.getIn(["status_lists","pins","items"]),hasMore:!!t.getIn(["status_lists","pins","next"])}}))(s=Object(M.g)((i=a=function(t){Object(r.a)(n,t);var e;e=n;function n(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s))||this,Object(u.a)(Object(c.a)(e),"handleHeaderClick",(function(){e.column.scrollTop()})),Object(u.a)(Object(c.a)(e),"setRef",(function(t){e.column=t})),e}var s=n.prototype;return s.componentWillMount=function(){this.props.dispatch(Object(j.b)())},s.render=function(){var t=this.props,e=t.intl,n=t.statusIds,s=t.hasMore,a=t.multiColumn;return(d.a.createElement(O.a,{bindToDocument:!a,icon:"thumb-tack",heading:e.formatMessage(I.heading),ref:this.setRef},Object(o.a)(g.a,{}),Object(o.a)(w.a,{statusIds:n,scrollKey:"pinned_statuses",hasMore:s,bindToDocument:!a})))},n}(v.a),Object(u.a)(a,"propTypes",{dispatch:f.a.func.isRequired,statusIds:m.a.list.isRequired,intl:f.a.object.isRequired,hasMore:f.a.bool.isRequired,multiColumn:f.a.bool}),s=i))||s)||s}}]);
//# sourceMappingURL=pinned_statuses.js.map