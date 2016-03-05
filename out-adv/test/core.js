// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('test.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_();
if(typeof test.core.app_state !== 'undefined'){
} else {
test.core.app_state = (function (){var G__19835 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Hello Chestnut!"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19835) : cljs.core.atom.call(null,G__19835));
})();
}
test.core.root_component = (function test$core$root_component(app,owner){
if(typeof test.core.t_test$core19845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
test.core.t_test$core19845 = (function (root_component,app,owner,meta19846){
this.root_component = root_component;
this.app = app;
this.owner = owner;
this.meta19846 = meta19846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
test.core.t_test$core19845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19847,meta19846__$1){
var self__ = this;
var _19847__$1 = this;
return (new test.core.t_test$core19845(self__.root_component,self__.app,self__.owner,meta19846__$1));
});

test.core.t_test$core19845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19847){
var self__ = this;
var _19847__$1 = this;
return self__.meta19846;
});

test.core.t_test$core19845.prototype.om$core$IRender$ = true;

test.core.t_test$core19845.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__19850 = null;
var G__19851 = om.util.force_children((function (){var G__19852 = null;
var G__19853 = om.util.force_children(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(self__.app));
return React.DOM.h2(G__19852,G__19853);
})());
return React.DOM.div(G__19850,G__19851);
});

test.core.t_test$core19845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$root_DASH_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$app,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$app,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta19846], null);
});

test.core.t_test$core19845.cljs$lang$type = true;

test.core.t_test$core19845.cljs$lang$ctorStr = "test.core/t_test$core19845";

test.core.t_test$core19845.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"test.core/t_test$core19845");
});

test.core.__GT_t_test$core19845 = (function test$core$root_component_$___GT_t_test$core19845(root_component__$1,app__$1,owner__$1,meta19846){
return (new test.core.t_test$core19845(root_component__$1,app__$1,owner__$1,meta19846));
});

}

return (new test.core.t_test$core19845(test$core$root_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(test.core.root_component,test.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));
figwheel.client.start.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$websocket_DASH_url,"ws://localhost:3449/figwheel-ws"], null));
