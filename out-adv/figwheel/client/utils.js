// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())){
return cljs.core.cst$kw$node;
} else {
return cljs.core.cst$kw$html;
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace(goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__4659__auto__ = figwheel.client.utils.html_env_QMARK_();
if(cljs.core.truth_(and__4659__auto__)){
return (window["CustomEvent"]);
} else {
return and__4659__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj16143 = {"detail":data};
return obj16143;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))?cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([o], 0)):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args16148 = [];
var len__5725__auto___16154 = arguments.length;
var i__5726__auto___16155 = (0);
while(true){
if((i__5726__auto___16155 < len__5725__auto___16154)){
args16148.push((arguments[i__5726__auto___16155]));

var G__16156 = (i__5726__auto___16155 + (1));
i__5726__auto___16155 = G__16156;
continue;
} else {
}
break;
}

var G__16150 = args16148.length;
switch (G__16150) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16148.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__16151 = cljs.core._EQ_;
var expr__16152 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())?level:cljs.core.cst$kw$info);
if(cljs.core.truth_((pred__16151.cljs$core$IFn$_invoke$arity$2 ? pred__16151.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,expr__16152) : pred__16151.call(null,cljs.core.cst$kw$warn,expr__16152)))){
return ((function (pred__16151,expr__16152){
return (function (p1__16144_SHARP_){
return console.warn(p1__16144_SHARP_);
});
;})(pred__16151,expr__16152))
} else {
if(cljs.core.truth_((pred__16151.cljs$core$IFn$_invoke$arity$2 ? pred__16151.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,expr__16152) : pred__16151.call(null,cljs.core.cst$kw$debug,expr__16152)))){
return ((function (pred__16151,expr__16152){
return (function (p1__16145_SHARP_){
return console.debug(p1__16145_SHARP_);
});
;})(pred__16151,expr__16152))
} else {
if(cljs.core.truth_((pred__16151.cljs$core$IFn$_invoke$arity$2 ? pred__16151.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,expr__16152) : pred__16151.call(null,cljs.core.cst$kw$error,expr__16152)))){
return ((function (pred__16151,expr__16152){
return (function (p1__16146_SHARP_){
return console.error(p1__16146_SHARP_);
});
;})(pred__16151,expr__16152))
} else {
return ((function (pred__16151,expr__16152){
return (function (p1__16147_SHARP_){
return console.log(p1__16147_SHARP_);
});
;})(pred__16151,expr__16152))
}
}
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__16158){
var map__16161 = p__16158;
var map__16161__$1 = ((((!((map__16161 == null)))?((((map__16161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16161):map__16161);
var opts = map__16161__$1;
var eval_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16161__$1,cljs.core.cst$kw$eval_DASH_fn);
if(cljs.core.truth_(eval_fn)){
return (eval_fn.cljs$core$IFn$_invoke$arity$2 ? eval_fn.cljs$core$IFn$_invoke$arity$2(code,opts) : eval_fn.call(null,code,opts));
} else {
return eval(code);
}
});
