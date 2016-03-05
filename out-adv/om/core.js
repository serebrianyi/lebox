// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.display_name[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core.display_name["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.init_state[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core.init_state["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.should_update[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5327__auto__.call(null,this$,next_props,next_state));
} else {
var m__5327__auto____$1 = (om.core.should_update["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5327__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.will_mount[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core.will_mount["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.did_mount[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core.did_mount["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.will_unmount[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.will_update[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5327__auto__.call(null,this$,next_props,next_state));
} else {
var m__5327__auto____$1 = (om.core.will_update["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5327__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.did_update[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__5327__auto__.call(null,this$,prev_props,prev_state));
} else {
var m__5327__auto____$1 = (om.core.did_update["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__5327__auto____$1.call(null,this$,prev_props,prev_state));
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.will_receive_props[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__5327__auto__.call(null,this$,next_props));
} else {
var m__5327__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__5327__auto____$1.call(null,this$,next_props));
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.render[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core.render["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.render_props[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__5327__auto__.call(null,this$,props,state));
} else {
var m__5327__auto____$1 = (om.core.render_props["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__5327__auto____$1.call(null,this$,props,state));
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core.render_state[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5327__auto__.call(null,this$,state));
} else {
var m__5327__auto____$1 = (om.core.render_state["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5327__auto____$1.call(null,this$,state));
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__5327__auto__.call(null,this$,cursor,korks,f,tag));
} else {
var m__5327__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__5327__auto____$1.call(null,this$,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args19192 = [];
var len__5725__auto___19195 = arguments.length;
var i__5726__auto___19196 = (0);
while(true){
if((i__5726__auto___19196 < len__5725__auto___19195)){
args19192.push((arguments[i__5726__auto___19196]));

var G__19197 = (i__5726__auto___19196 + (1));
i__5726__auto___19196 = G__19197;
continue;
} else {
}
break;
}

var G__19194 = args19192.length;
switch (G__19194) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19192.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._get_state[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core._get_state["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._get_state[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5327__auto__.call(null,this$,ks));
} else {
var m__5327__auto____$1 = (om.core._get_state["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5327__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args19199 = [];
var len__5725__auto___19202 = arguments.length;
var i__5726__auto___19203 = (0);
while(true){
if((i__5726__auto___19203 < len__5725__auto___19202)){
args19199.push((arguments[i__5726__auto___19203]));

var G__19204 = (i__5726__auto___19203 + (1));
i__5726__auto___19203 = G__19204;
continue;
} else {
}
break;
}

var G__19201 = args19199.length;
switch (G__19201) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19199.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._get_render_state[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._get_render_state[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5327__auto__.call(null,this$,ks));
} else {
var m__5327__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5327__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args19206 = [];
var len__5725__auto___19209 = arguments.length;
var i__5726__auto___19210 = (0);
while(true){
if((i__5726__auto___19210 < len__5725__auto___19209)){
args19206.push((arguments[i__5726__auto___19210]));

var G__19211 = (i__5726__auto___19210 + (1));
i__5726__auto___19210 = G__19211;
continue;
} else {
}
break;
}

var G__19208 = args19206.length;
switch (G__19208) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19206.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__5327__auto__.call(null,this$,val,render));
} else {
var m__5327__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__5327__auto____$1.call(null,this$,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__5327__auto__.call(null,this$,ks,val,render));
} else {
var m__5327__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__5327__auto____$1.call(null,this$,ks,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._get_queue[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core._get_queue["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5327__auto__.call(null,this$,c));
} else {
var m__5327__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5327__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5326__auto__ = (((x == null))?null:x);
var m__5327__auto__ = (om.core._value[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5327__auto__.call(null,x));
} else {
var m__5327__auto____$1 = (om.core._value["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__5327__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5326__auto__ = (((cursor == null))?null:cursor);
var m__5327__auto__ = (om.core._path[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5327__auto__.call(null,cursor));
} else {
var m__5327__auto____$1 = (om.core._path["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5327__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5326__auto__ = (((cursor == null))?null:cursor);
var m__5327__auto__ = (om.core._state[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5327__auto__.call(null,cursor));
} else {
var m__5327__auto____$1 = (om.core._state["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5327__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args19213 = [];
var len__5725__auto___19216 = arguments.length;
var i__5726__auto___19217 = (0);
while(true){
if((i__5726__auto___19217 < len__5725__auto___19216)){
args19213.push((arguments[i__5726__auto___19217]));

var G__19218 = (i__5726__auto___19217 + (1));
i__5726__auto___19217 = G__19218;
continue;
} else {
}
break;
}

var G__19215 = args19213.length;
switch (G__19215) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19213.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5326__auto__ = (((value == null))?null:value);
var m__5327__auto__ = (om.core._to_cursor[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(value,state) : m__5327__auto__.call(null,value,state));
} else {
var m__5327__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(value,state) : m__5327__auto____$1.call(null,value,state));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5326__auto__ = (((value == null))?null:value);
var m__5327__auto__ = (om.core._to_cursor[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5327__auto__.call(null,value,state,path));
} else {
var m__5327__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5327__auto____$1.call(null,value,state,path));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5326__auto__ = (((cursor == null))?null:cursor);
var m__5327__auto__ = (om.core._derive[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__5327__auto__.call(null,cursor,derived,state,path));
} else {
var m__5327__auto____$1 = (om.core._derive["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__5327__auto____$1.call(null,cursor,derived,state,path));
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path) : om.core.to_cursor.call(null,derived,state,path));
}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5326__auto__ = (((cursor == null))?null:cursor);
var m__5327__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__5327__auto__.call(null,cursor,korks,f,tag));
} else {
var m__5327__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__5327__auto____$1.call(null,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5326__auto__ = (((x == null))?null:x);
var m__5327__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__5327__auto__.call(null,x,key,tx_listen));
} else {
var m__5327__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__5327__auto____$1.call(null,x,key,tx_listen));
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5326__auto__ = (((x == null))?null:x);
var m__5327__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(x,key) : m__5327__auto__.call(null,x,key));
} else {
var m__5327__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(x,key) : m__5327__auto____$1.call(null,x,key));
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5326__auto__ = (((x == null))?null:x);
var m__5327__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__5327__auto__.call(null,x,tx_data,root_cursor));
} else {
var m__5327__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__5327__auto____$1.call(null,x,tx_data,root_cursor));
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__5327__auto__.call(null,this$,id,p,val));
} else {
var m__5327__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__5327__auto____$1.call(null,this$,id,p,val));
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5327__auto__.call(null,this$,id,p));
} else {
var m__5327__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5327__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5327__auto__.call(null,this$,id));
} else {
var m__5327__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5327__auto____$1.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._get_property[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5327__auto__.call(null,this$,id,p));
} else {
var m__5327__auto____$1 = (om.core._get_property["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5327__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5326__auto__ = (((cursor == null))?null:cursor);
var m__5327__auto__ = (om.core._root_key[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5327__auto__.call(null,cursor));
} else {
var m__5327__auto____$1 = (om.core._root_key["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5327__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._adapt[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,other) : m__5327__auto__.call(null,this$,other));
} else {
var m__5327__auto____$1 = (om.core._adapt["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,other) : m__5327__auto____$1.call(null,this$,other));
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5327__auto__.call(null,this$,c));
} else {
var m__5327__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5327__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5327__auto__.call(null,this$,c));
} else {
var m__5327__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5327__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.core._get_deps[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.core._get_deps["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(om.core.path(cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state)))?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$old_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.cst$kw$new_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path),cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))], null);
if(!((tag == null))){
var G__19224 = cursor;
var G__19225 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.cst$kw$tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__19224,G__19225) : om.core.notify_STAR_.call(null,G__19224,G__19225));
} else {
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,tx_data) : om.core.notify_STAR_.call(null,cursor,tx_data));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args19228 = [];
var len__5725__auto___19232 = arguments.length;
var i__5726__auto___19233 = (0);
while(true){
if((i__5726__auto___19233 < len__5725__auto___19232)){
args19228.push((arguments[i__5726__auto___19233]));

var G__19234 = (i__5726__auto___19233 + (1));
i__5726__auto___19233 = G__19234;
continue;
} else {
}
break;
}

var G__19230 = args19228.length;
switch (G__19230) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19228.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__19231 = (x.props["__om_cursor"]);
var G__19231__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__19231,korks__$1):G__19231);
return G__19231__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args19236 = [];
var len__5725__auto___19239 = arguments.length;
var i__5726__auto___19240 = (0);
while(true){
if((i__5726__auto___19240 < len__5725__auto___19239)){
args19236.push((arguments[i__5726__auto___19240]));

var G__19241 = (i__5726__auto___19240 + (1));
i__5726__auto___19240 = G__19241;
continue;
} else {
}
break;
}

var G__19238 = args19236.length;
switch (G__19238) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19236.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args19243 = [];
var len__5725__auto___19246 = arguments.length;
var i__5726__auto___19247 = (0);
while(true){
if((i__5726__auto___19247 < len__5725__auto___19246)){
args19243.push((arguments[i__5726__auto___19247]));

var G__19248 = (i__5726__auto___19247 + (1));
i__5726__auto___19247 = G__19248;
continue;
} else {
}
break;
}

var G__19245 = args19243.length;
switch (G__19245) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19243.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__19251 = state;
(G__19251["__om_prev_state"] = (state["__om_state"]));

(G__19251["__om_state"] = pending_state);

(G__19251["__om_pending_state"] = null);

return G__19251;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args19252 = [];
var len__5725__auto___19255 = arguments.length;
var i__5726__auto___19256 = (0);
while(true){
if((i__5726__auto___19256 < len__5725__auto___19255)){
args19252.push((arguments[i__5726__auto___19256]));

var G__19257 = (i__5726__auto___19256 + (1));
i__5726__auto___19256 = G__19257;
continue;
} else {
}
break;
}

var G__19254 = args19252.length;
switch (G__19254) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19252.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4671__auto__ = props;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__4671__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__19260 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19260) : cljs.core.deref.call(null,G__19260));
})(),om.core.path(ref),cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = om.core.path(ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref_state) : cljs.core.deref.call(null,ref_state)),ref_path,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.cst$kw$om$core_SLASH_not_DASH_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(ref_val_SINGLEQUOTE_,ref_state,ref_path) : om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path)));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$isOmComponent,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$getDisplayName,cljs.core.cst$kw$componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_19283 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__4671__auto__ = (state_19283["__om_prev_state"]);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (state_19283["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

var temp__4425__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__19264 = cljs.core.seq(refs);
var chunk__19265 = null;
var count__19266 = (0);
var i__19267 = (0);
while(true){
if((i__19267 < count__19266)){
var ref = chunk__19265.cljs$core$IIndexed$_nth$arity$2(null,i__19267);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__19284 = seq__19264;
var G__19285 = chunk__19265;
var G__19286 = count__19266;
var G__19287 = (i__19267 + (1));
seq__19264 = G__19284;
chunk__19265 = G__19285;
count__19266 = G__19286;
i__19267 = G__19287;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq(seq__19264);
if(temp__4425__auto____$1){
var seq__19264__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19264__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__19264__$1);
var G__19288 = cljs.core.chunk_rest(seq__19264__$1);
var G__19289 = c__5474__auto__;
var G__19290 = cljs.core.count(c__5474__auto__);
var G__19291 = (0);
seq__19264 = G__19288;
chunk__19265 = G__19289;
count__19266 = G__19290;
i__19267 = G__19291;
continue;
} else {
var ref = cljs.core.first(seq__19264__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__19292 = cljs.core.next(seq__19264__$1);
var G__19293 = null;
var G__19294 = (0);
var G__19295 = (0);
seq__19264 = G__19292;
chunk__19265 = G__19293;
count__19266 = G__19294;
i__19267 = G__19295;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c))){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c))){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4659__auto__ = om.core.cursor_QMARK_(cursor);
if(cljs.core.truth_(and__4659__auto__)){
var and__4659__auto____$1 = om.core.cursor_QMARK_(next_cursor);
if(cljs.core.truth_(and__4659__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor));
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4659__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__4659__auto__){
return cljs.core.some(((function (and__4659__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__19261_SHARP_){
return om.core.ref_changed_QMARK_(p1__19261_SHARP_);
});})(and__4659__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4659__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_19270 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_19271 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_19272 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_19273 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_19274 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,c))){
return om.core.render(c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c))){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c))){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_19274;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_19273;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_19272;

om.core._STAR_state_STAR_ = _STAR_state_STAR_19271;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_19270;
}}),(function (next_props,next_state){
var this$ = this;
var c_19296 = om.core.children(this$);
if(((!((c_19296 == null)))?(((false) || (c_19296.om$core$IWillUpdate$))?true:(((!c_19296.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_19296):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_19296))){
var state_19297 = this$.state;
om.core.will_update(c_19296,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4671__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4671__auto__ = id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id)], 0))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c))){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_19298 = om.core.children(this$);
if(((!((c_19298 == null)))?(((false) || (c_19298.om$core$IWillMount$))?true:(((!c_19298.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_19298):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_19298))){
om.core.will_mount(c_19298);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x19300 = obj;
x19300.om$core$ISetState$ = true;

x19300.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x19300){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4659__auto__ = !((app_state == null));
if(and__4659__auto__){
return render;
} else {
return and__4659__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x19300))
;

x19300.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x19300){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__4659__auto__ = !((app_state == null));
if(and__4659__auto__){
return render;
} else {
return and__4659__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x19300))
;

x19300.om$core$IGetRenderState$ = true;

x19300.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x19300){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x19300))
;

x19300.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x19300){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x19300))
;

x19300.om$core$IGetState$ = true;

x19300.om$core$IGetState$_get_state$arity$1 = ((function (x19300){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4671__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (state["__om_state"]);
}
});})(x19300))
;

x19300.om$core$IGetState$_get_state$arity$2 = ((function (x19300){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x19300))
;

return x19300;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.get_node;
om.core.react_id = (function om$core$react_id(x){
var id = (function (){var G__19303 = (om.core.get_node.cljs$core$IFn$_invoke$arity$1 ? om.core.get_node.cljs$core$IFn$_invoke$arity$1(x) : om.core.get_node.call(null,x));
var G__19304 = "reactid";
return goog.dom.dataset.get(G__19303,G__19304);
})();

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),spath);
if(cljs.core.truth_(cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.cst$kw$previous_DASH_state,cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.cst$kw$render_DASH_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.cst$kw$pending_DASH_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.mounted_QMARK_;
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.cst$kw$getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4671__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4671__auto__ = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null)], 0));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.cst$kw$componentDidMount,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$),cljs.core.cst$kw$render_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_19315 = om.core.children(this$);
if(((!((c_19315 == null)))?(((false) || (c_19315.om$core$IWillMount$))?true:(((!c_19315.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_19315):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_19315))){
om.core.will_mount(c_19315);
} else {
}

if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : om.core.mounted_QMARK_.call(null,this$)))){
return om.core.no_local_merge_pending_state(this$);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4425__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__19309 = cljs.core.seq(refs);
var chunk__19310 = null;
var count__19311 = (0);
var i__19312 = (0);
while(true){
if((i__19312 < count__19311)){
var ref = chunk__19310.cljs$core$IIndexed$_nth$arity$2(null,i__19312);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__19316 = seq__19309;
var G__19317 = chunk__19310;
var G__19318 = count__19311;
var G__19319 = (i__19312 + (1));
seq__19309 = G__19316;
chunk__19310 = G__19317;
count__19311 = G__19318;
i__19312 = G__19319;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq(seq__19309);
if(temp__4425__auto____$1){
var seq__19309__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19309__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__19309__$1);
var G__19320 = cljs.core.chunk_rest(seq__19309__$1);
var G__19321 = c__5474__auto__;
var G__19322 = cljs.core.count(c__5474__auto__);
var G__19323 = (0);
seq__19309 = G__19320;
chunk__19310 = G__19321;
count__19311 = G__19322;
i__19312 = G__19323;
continue;
} else {
var ref = cljs.core.first(seq__19309__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__19324 = cljs.core.next(seq__19309__$1);
var G__19325 = null;
var G__19326 = (0);
var G__19327 = (0);
seq__19309 = G__19324;
chunk__19310 = G__19325;
count__19311 = G__19326;
i__19312 = G__19327;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_19328 = this$.props;
var c_19329 = om.core.children(this$);
if(((!((c_19329 == null)))?(((false) || (c_19329.om$core$IWillUpdate$))?true:(((!c_19329.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_19329):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_19329))){
var state_19330 = this$.state;
om.core.will_update(c_19329,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.cst$kw$componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_19331 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__4671__auto__ = cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.cst$kw$previous_DASH_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x19335 = cljs.core.clj__GT_js(methods$);
x19335.om$core$ISetState$ = true;

x19335.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x19335){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$pending_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4659__auto__ = !((gstate == null));
if(and__4659__auto__){
return render;
} else {
return and__4659__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x19335))
;

x19335.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x19335){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x19335))
;

x19335.om$core$IGetRenderState$ = true;

x19335.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x19335){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$render_DASH_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19336 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19336) : cljs.core.deref.call(null,G__19336));
})(),spath);
});})(x19335))
;

x19335.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x19335){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x19335))
;

x19335.om$core$IGetState$ = true;

x19335.om$core$IGetState$_get_state$arity$1 = ((function (x19335){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : om.core.mounted_QMARK_.call(null,this$__$1)))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19337 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19337) : cljs.core.deref.call(null,G__19337));
})(),spath);
var or__4671__auto__ = cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x19335))
;

x19335.om$core$IGetState$_get_state$arity$2 = ((function (x19335){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x19335))
;

return x19335;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_(om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$om$core_SLASH_not_DASH_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__19341){
var vec__19342 = p__19341;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__19343 = null;
var G__19343__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19343__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19343 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19343__2.call(this,self__,k);
case 3:
return G__19343__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19343.cljs$core$IFn$_invoke$arity$2 = G__19343__2;
G__19343.cljs$core$IFn$_invoke$arity$3 = G__19343__3;
return G__19343;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args19340){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19340)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__19345 = null;
var G__19345__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19345__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19345 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19345__2.call(this,self__,k);
case 3:
return G__19345__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19345.cljs$core$IFn$_invoke$arity$2 = G__19345__2;
G__19345.cljs$core$IFn$_invoke$arity$3 = G__19345__3;
return G__19345;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args19344){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19344)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x19347 = cljs.core.clone(val);
x19347.cljs$core$IDeref$ = true;

x19347.cljs$core$IDeref$_deref$arity$1 = ((function (x19347){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path,cljs.core.cst$kw$om$core_SLASH_invalid);
});})(x19347))
;

x19347.om$core$ICursor$ = true;

x19347.om$core$ICursor$_path$arity$1 = ((function (x19347){
return (function (_){
var ___$1 = this;
return path;
});})(x19347))
;

x19347.om$core$ICursor$_state$arity$1 = ((function (x19347){
return (function (_){
var ___$1 = this;
return state;
});})(x19347))
;

x19347.om$core$ITransact$ = true;

x19347.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x19347){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x19347))
;

x19347.cljs$core$IEquiv$ = true;

x19347.cljs$core$IEquiv$_equiv$arity$2 = ((function (x19347){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x19347))
;

return x19347;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args19348 = [];
var len__5725__auto___19353 = arguments.length;
var i__5726__auto___19354 = (0);
while(true){
if((i__5726__auto___19354 < len__5725__auto___19353)){
args19348.push((arguments[i__5726__auto___19354]));

var G__19355 = (i__5726__auto___19354 + (1));
i__5726__auto___19354 = G__19355;
continue;
} else {
}
break;
}

var G__19350 = args19348.length;
switch (G__19350) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19348.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_(val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val))){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__19357 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19357) : cljs.core.atom.call(null,G__19357));
})();
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x19363 = cljs.core.clone(x);
x19363.cljs$core$ICloneable$ = true;

x19363.cljs$core$ICloneable$_clone$arity$1 = ((function (x19363){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor(cljs.core.clone(x),parent);
});})(x19363))
;

x19363.om$core$IAdapt$ = true;

x19363.om$core$IAdapt$_adapt$arity$2 = ((function (x19363){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x19363))
;

x19363.om$core$ICursorDerive$ = true;

x19363.om$core$ICursorDerive$_derive$arity$4 = ((function (x19363){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x19363))
;

x19363.om$core$ITransact$ = true;

x19363.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x19363){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$1,korks,f) : om.core.commit_BANG_.call(null,cursor__$1,korks,f));

return om.core._refresh_deps_BANG_(parent);
});})(x19363))
;

return x19363;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(cursor))){
return cursor;
} else {
var path = om.core.path(cursor);
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__19372 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19372) : cljs.core.atom.call(null,G__19372));
})())),path);
var x19373 = cljs.core.clone(cursor);
x19373.om$core$ICursorDerive$ = true;

x19373.om$core$ICursorDerive$_derive$arity$4 = ((function (x19373,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x19373,path,storage))
;

x19373.om$core$IOmRef$ = true;

x19373.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x19373,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)),c);
});})(x19373,path,storage))
;

x19373.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x19373,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)));
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x19373,path,storage))
;

x19373.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x19373,path,storage){
return (function (_){
var ___$1 = this;
var seq__19374 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage))));
var chunk__19375 = null;
var count__19376 = (0);
var i__19377 = (0);
while(true){
if((i__19377 < count__19376)){
var c = chunk__19375.cljs$core$IIndexed$_nth$arity$2(null,i__19377);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__19378 = seq__19374;
var G__19379 = chunk__19375;
var G__19380 = count__19376;
var G__19381 = (i__19377 + (1));
seq__19374 = G__19378;
chunk__19375 = G__19379;
count__19376 = G__19380;
i__19377 = G__19381;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__19374);
if(temp__4425__auto__){
var seq__19374__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19374__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__19374__$1);
var G__19382 = cljs.core.chunk_rest(seq__19374__$1);
var G__19383 = c__5474__auto__;
var G__19384 = cljs.core.count(c__5474__auto__);
var G__19385 = (0);
seq__19374 = G__19382;
chunk__19375 = G__19383;
count__19376 = G__19384;
i__19377 = G__19385;
continue;
} else {
var c = cljs.core.first(seq__19374__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__19386 = cljs.core.next(seq__19374__$1);
var G__19387 = null;
var G__19388 = (0);
var G__19389 = (0);
seq__19374 = G__19386;
chunk__19375 = G__19387;
count__19376 = G__19388;
i__19377 = G__19389;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19373,path,storage))
;

x19373.om$core$IOmRef$_get_deps$arity$1 = ((function (x19373,path,storage){
return (function (_){
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage));
});})(x19373,path,storage))
;

x19373.om$core$ITransact$ = true;

x19373.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x19373,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$2,korks,f) : om.core.commit_BANG_.call(null,cursor__$2,korks,f));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x19373,path,storage))
;

return x19373;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4671__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){



om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__19390 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19390) : cljs.core.atom.call(null,G__19390));
})();
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4671__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args19391 = [];
var len__5725__auto___19398 = arguments.length;
var i__5726__auto___19399 = (0);
while(true){
if((i__5726__auto___19399 < len__5725__auto___19398)){
args19391.push((arguments[i__5726__auto___19399]));

var G__19400 = (i__5726__auto___19399 + (1));
i__5726__auto___19399 = G__19400;
continue;
} else {
}
break;
}

var G__19393 = args19391.length;
switch (G__19393) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19391.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__19394_19402 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)));
var chunk__19395_19403 = null;
var count__19396_19404 = (0);
var i__19397_19405 = (0);
while(true){
if((i__19397_19405 < count__19396_19404)){
var f_19406 = chunk__19395_19403.cljs$core$IIndexed$_nth$arity$2(null,i__19397_19405);
(f_19406.cljs$core$IFn$_invoke$arity$0 ? f_19406.cljs$core$IFn$_invoke$arity$0() : f_19406.call(null));

var G__19407 = seq__19394_19402;
var G__19408 = chunk__19395_19403;
var G__19409 = count__19396_19404;
var G__19410 = (i__19397_19405 + (1));
seq__19394_19402 = G__19407;
chunk__19395_19403 = G__19408;
count__19396_19404 = G__19409;
i__19397_19405 = G__19410;
continue;
} else {
var temp__4425__auto___19411 = cljs.core.seq(seq__19394_19402);
if(temp__4425__auto___19411){
var seq__19394_19412__$1 = temp__4425__auto___19411;
if(cljs.core.chunked_seq_QMARK_(seq__19394_19412__$1)){
var c__5474__auto___19413 = cljs.core.chunk_first(seq__19394_19412__$1);
var G__19414 = cljs.core.chunk_rest(seq__19394_19412__$1);
var G__19415 = c__5474__auto___19413;
var G__19416 = cljs.core.count(c__5474__auto___19413);
var G__19417 = (0);
seq__19394_19402 = G__19414;
chunk__19395_19403 = G__19415;
count__19396_19404 = G__19416;
i__19397_19405 = G__19417;
continue;
} else {
var f_19418 = cljs.core.first(seq__19394_19412__$1);
(f_19418.cljs$core$IFn$_invoke$arity$0 ? f_19418.cljs$core$IFn$_invoke$arity$0() : f_19418.call(null));

var G__19419 = cljs.core.next(seq__19394_19412__$1);
var G__19420 = null;
var G__19421 = (0);
var G__19422 = (0);
seq__19394_19402 = G__19419;
chunk__19395_19403 = G__19420;
count__19396_19404 = G__19421;
i__19397_19405 = G__19422;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = (function (){var G__19423 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19423) : cljs.core.atom.call(null,G__19423));
})();
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
return null;
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$descriptor,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$instrument,null,cljs.core.cst$kw$react_DASH_key,null,cljs.core.cst$kw$key,null,cljs.core.cst$kw$init_DASH_state,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$key_DASH_fn,null,cljs.core.cst$kw$opts,null,cljs.core.cst$kw$om$core_SLASH_index,null,cljs.core.cst$kw$shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args19424 = [];
var len__5725__auto___19428 = arguments.length;
var i__5726__auto___19429 = (0);
while(true){
if((i__5726__auto___19429 < len__5725__auto___19428)){
args19424.push((arguments[i__5726__auto___19429]));

var G__19430 = (i__5726__auto___19429 + (1));
i__5726__auto___19429 = G__19430;
continue;
} else {
}
break;
}

var G__19426 = args19424.length;
switch (G__19426) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19424.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_19432 = (function (){var or__4671__auto__ = descriptor;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_19432 === goog.object.get(f,"om$tag"))))){
var factory_19433 = (function (){var G__19427 = React.createClass(rdesc_19432);
return React.createFactory(G__19427);
})();
goog.object.set(f,"om$descriptor",factory_19433);

goog.object.set(f,"om$tag",rdesc_19432);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args19434 = [];
var len__5725__auto___19437 = arguments.length;
var i__5726__auto___19438 = (0);
while(true){
if((i__5726__auto___19438 < len__5725__auto___19437)){
args19434.push((arguments[i__5726__auto___19438]));

var G__19439 = (i__5726__auto___19438 + (1));
i__5726__auto___19438 = G__19439;
continue;
} else {
}
break;
}

var G__19436 = args19434.length;
switch (G__19436) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19434.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args19441 = [];
var len__5725__auto___19448 = arguments.length;
var i__5726__auto___19449 = (0);
while(true){
if((i__5726__auto___19449 < len__5725__auto___19448)){
args19441.push((arguments[i__5726__auto___19449]));

var G__19450 = (i__5726__auto___19449 + (1));
i__5726__auto___19449 = G__19450;
continue;
} else {
}
break;
}

var G__19443 = args19441.length;
switch (G__19443) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19441.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){



if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__19444 = {"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__19444) : ctor.call(null,G__19444));
} else {
var map__19445 = m;
var map__19445__$1 = ((((!((map__19445 == null)))?((((map__19445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19445):map__19445);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19445__$1,cljs.core.cst$kw$key);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19445__$1,cljs.core.cst$kw$key_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19445__$1,cljs.core.cst$kw$state);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19445__$1,cljs.core.cst$kw$init_DASH_state);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19445__$1,cljs.core.cst$kw$opts);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(cursor,i) : dataf.call(null,cursor,i));
} else {
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(cursor_SINGLEQUOTE_) : key_fn.call(null,cursor_SINGLEQUOTE_)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$react_DASH_key)
));
var shared = (function (){var or__4671__auto__ = cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.cst$kw$descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__19447 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__19445,map__19445__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__19445,map__19445__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__19445,map__19445__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__19445,map__19445__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4671__auto__ = rkey;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__19447) : ctor.call(null,G__19447));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args19452 = [];
var len__5725__auto___19455 = arguments.length;
var i__5726__auto___19456 = (0);
while(true){
if((i__5726__auto___19456 < len__5725__auto___19455)){
args19452.push((arguments[i__5726__auto___19456]));

var G__19457 = (i__5726__auto___19456 + (1));
i__5726__auto___19456 = G__19457;
continue;
} else {
}
break;
}

var G__19454 = args19452.length;
switch (G__19454) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19452.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){


if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m) : om.core._STAR_instrument_STAR_.call(null,f,x,m));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args19459 = [];
var len__5725__auto___19462 = arguments.length;
var i__5726__auto___19463 = (0);
while(true){
if((i__5726__auto___19463 < len__5725__auto___19462)){
args19459.push((arguments[i__5726__auto___19463]));

var G__19464 = (i__5726__auto___19463 + (1));
i__5726__auto___19463 = G__19464;
continue;
} else {
}
break;
}

var G__19461 = args19459.length;
switch (G__19461) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19459.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){


return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_(om.core.INotify,state))){
} else {
var properties_19488 = (function (){var G__19478 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19478) : cljs.core.atom.call(null,G__19478));
})();
var listeners_19489 = (function (){var G__19479 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19479) : cljs.core.atom.call(null,G__19479));
})();
var render_queue_19490 = (function (){var G__19480 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19480) : cljs.core.atom.call(null,G__19480));
})();
var x19481_19491 = state;
x19481_19491.om$core$IRootProperties$ = true;

x19481_19491.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_19488,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

x19481_19491.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_19488,cljs.core.dissoc,id,k);
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

x19481_19491.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_19488,cljs.core.dissoc,id);
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

x19481_19491.om$core$IRootProperties$_get_property$arity$3 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(properties_19488) : cljs.core.deref.call(null,properties_19488)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

x19481_19491.om$core$INotify$ = true;

x19481_19491.om$core$INotify$_listen_BANG_$arity$3 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_19489,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

x19481_19491.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_19489,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

x19481_19491.om$core$INotify$_notify_BANG_$arity$3 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__19482_19492 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(listeners_19489) : cljs.core.deref.call(null,listeners_19489)));
var chunk__19483_19493 = null;
var count__19484_19494 = (0);
var i__19485_19495 = (0);
while(true){
if((i__19485_19495 < count__19484_19494)){
var vec__19486_19496 = chunk__19483_19493.cljs$core$IIndexed$_nth$arity$2(null,i__19485_19495);
var __19497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19486_19496,(0),null);
var f_19498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19486_19496,(1),null);
(f_19498.cljs$core$IFn$_invoke$arity$2 ? f_19498.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_19498.call(null,tx_data,root_cursor));

var G__19499 = seq__19482_19492;
var G__19500 = chunk__19483_19493;
var G__19501 = count__19484_19494;
var G__19502 = (i__19485_19495 + (1));
seq__19482_19492 = G__19499;
chunk__19483_19493 = G__19500;
count__19484_19494 = G__19501;
i__19485_19495 = G__19502;
continue;
} else {
var temp__4425__auto___19503 = cljs.core.seq(seq__19482_19492);
if(temp__4425__auto___19503){
var seq__19482_19504__$1 = temp__4425__auto___19503;
if(cljs.core.chunked_seq_QMARK_(seq__19482_19504__$1)){
var c__5474__auto___19505 = cljs.core.chunk_first(seq__19482_19504__$1);
var G__19506 = cljs.core.chunk_rest(seq__19482_19504__$1);
var G__19507 = c__5474__auto___19505;
var G__19508 = cljs.core.count(c__5474__auto___19505);
var G__19509 = (0);
seq__19482_19492 = G__19506;
chunk__19483_19493 = G__19507;
count__19484_19494 = G__19508;
i__19485_19495 = G__19509;
continue;
} else {
var vec__19487_19510 = cljs.core.first(seq__19482_19504__$1);
var __19511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19487_19510,(0),null);
var f_19512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19487_19510,(1),null);
(f_19512.cljs$core$IFn$_invoke$arity$2 ? f_19512.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_19512.call(null,tx_data,root_cursor));

var G__19513 = cljs.core.next(seq__19482_19504__$1);
var G__19514 = null;
var G__19515 = (0);
var G__19516 = (0);
seq__19482_19492 = G__19513;
chunk__19483_19493 = G__19514;
count__19484_19494 = G__19515;
i__19485_19495 = G__19516;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

x19481_19491.om$core$IRenderQueue$ = true;

x19481_19491.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (this$){
var this$__$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_19490) : cljs.core.deref.call(null,render_queue_19490));
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

x19481_19491.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_19490) : cljs.core.deref.call(null,render_queue_19490)),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_19490,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

x19481_19491.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x19481_19491,properties_19488,listeners_19489,render_queue_19490){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_19490,cljs.core.empty);
});})(x19481_19491,properties_19488,listeners_19489,render_queue_19490))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
var x19522 = cljs.core.clone(cursor);
x19522.cljs$core$ICloneable$ = true;

x19522.cljs$core$ICloneable$_clone$arity$1 = ((function (x19522){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key(cljs.core.clone(cursor),root_key);
});})(x19522))
;

x19522.om$core$IAdapt$ = true;

x19522.om$core$IAdapt$_adapt$arity$2 = ((function (x19522){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x19522))
;

x19522.om$core$IRootKey$ = true;

x19522.om$core$IRootKey$_root_key$arity$1 = ((function (x19522){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x19522))
;

return x19522;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__19523){
var map__19592 = p__19523;
var map__19592__$1 = ((((!((map__19592 == null)))?((((map__19592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19592):map__19592);
var options = map__19592__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19592__$1,cljs.core.cst$kw$target);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19592__$1,cljs.core.cst$kw$tx_DASH_listen);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19592__$1,cljs.core.cst$kw$path);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19592__$1,cljs.core.cst$kw$instrument);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19592__$1,cljs.core.cst$kw$descriptor);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19592__$1,cljs.core.cst$kw$adapt);
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19592__$1,cljs.core.cst$kw$raf);


var roots_SINGLEQUOTE__19660 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots));
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__19660,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__19660,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value)))?value:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.atom.call(null,value)));
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4671__auto__ = adapt;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$target,cljs.core.array_seq([cljs.core.cst$kw$tx_DASH_listen,cljs.core.cst$kw$path,cljs.core.cst$kw$adapt,cljs.core.cst$kw$raf], 0));
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state__$1) : cljs.core.deref.call(null,state__$1));
var cursor = (function (){var G__19626 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__19626) : adapt__$1.call(null,G__19626));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root))){
} else {
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,true);

var c_19661 = om.dom.render((function (){var _STAR_descriptor_STAR_19627 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_19628 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_19629 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_19630 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_19630;

om.core._STAR_state_STAR_ = _STAR_state_STAR_19629;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_19628;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_19627;
}})(),target);
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c_19661) : cljs.core.reset_BANG_.call(null,ret,c_19661));
} else {
}
}

var queue_19662 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_19662)){
} else {
var seq__19631_19663 = cljs.core.seq(queue_19662);
var chunk__19632_19664 = null;
var count__19633_19665 = (0);
var i__19634_19666 = (0);
while(true){
if((i__19634_19666 < count__19633_19665)){
var c_19667 = chunk__19632_19664.cljs$core$IIndexed$_nth$arity$2(null,i__19634_19666);
if(cljs.core.truth_(c_19667.isMounted())){
var temp__4425__auto___19668 = (c_19667.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___19668)){
var next_props_19669 = temp__4425__auto___19668;
(c_19667.props["__om_cursor"] = next_props_19669);

(c_19667.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4671__auto__ = !((function (){var G__19636 = om.core.children(c_19667);
if(!((G__19636 == null))){
if((false) || (G__19636.om$core$ICheckState$)){
return true;
} else {
if((!G__19636.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__19636);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__19636);
}
})());
if(or__4671__auto__){
return or__4671__auto__;
} else {
return c_19667.shouldComponentUpdate(c_19667.props,c_19667.state);
}
})())){
c_19667.forceUpdate();
} else {
}
} else {
}

var G__19670 = seq__19631_19663;
var G__19671 = chunk__19632_19664;
var G__19672 = count__19633_19665;
var G__19673 = (i__19634_19666 + (1));
seq__19631_19663 = G__19670;
chunk__19632_19664 = G__19671;
count__19633_19665 = G__19672;
i__19634_19666 = G__19673;
continue;
} else {
var temp__4425__auto___19674 = cljs.core.seq(seq__19631_19663);
if(temp__4425__auto___19674){
var seq__19631_19675__$1 = temp__4425__auto___19674;
if(cljs.core.chunked_seq_QMARK_(seq__19631_19675__$1)){
var c__5474__auto___19676 = cljs.core.chunk_first(seq__19631_19675__$1);
var G__19677 = cljs.core.chunk_rest(seq__19631_19675__$1);
var G__19678 = c__5474__auto___19676;
var G__19679 = cljs.core.count(c__5474__auto___19676);
var G__19680 = (0);
seq__19631_19663 = G__19677;
chunk__19632_19664 = G__19678;
count__19633_19665 = G__19679;
i__19634_19666 = G__19680;
continue;
} else {
var c_19681 = cljs.core.first(seq__19631_19675__$1);
if(cljs.core.truth_(c_19681.isMounted())){
var temp__4425__auto___19682__$1 = (c_19681.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___19682__$1)){
var next_props_19683 = temp__4425__auto___19682__$1;
(c_19681.props["__om_cursor"] = next_props_19683);

(c_19681.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4671__auto__ = !((function (){var G__19638 = om.core.children(c_19681);
if(!((G__19638 == null))){
if((false) || (G__19638.om$core$ICheckState$)){
return true;
} else {
if((!G__19638.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__19638);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__19638);
}
})());
if(or__4671__auto__){
return or__4671__auto__;
} else {
return c_19681.shouldComponentUpdate(c_19681.props,c_19681.state);
}
})())){
c_19681.forceUpdate();
} else {
}
} else {
}

var G__19684 = cljs.core.next(seq__19631_19675__$1);
var G__19685 = null;
var G__19686 = (0);
var G__19687 = (0);
seq__19631_19663 = G__19684;
chunk__19632_19664 = G__19685;
count__19633_19665 = G__19686;
i__19634_19666 = G__19687;
continue;
}
} else {
}
}
break;
}
}

var _refs_19688 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core._refs) : cljs.core.deref.call(null,om.core._refs));
if(cljs.core.empty_QMARK_(_refs_19688)){
} else {
var seq__19639_19689 = cljs.core.seq(_refs_19688);
var chunk__19640_19690 = null;
var count__19641_19691 = (0);
var i__19642_19692 = (0);
while(true){
if((i__19642_19692 < count__19641_19691)){
var vec__19643_19693 = chunk__19640_19690.cljs$core$IIndexed$_nth$arity$2(null,i__19642_19692);
var path_19694__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643_19693,(0),null);
var cs_19695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643_19693,(1),null);
var cs_19696__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_19695) : cljs.core.deref.call(null,cs_19695));
var seq__19644_19697 = cljs.core.seq(cs_19696__$1);
var chunk__19645_19698 = null;
var count__19646_19699 = (0);
var i__19647_19700 = (0);
while(true){
if((i__19647_19700 < count__19646_19699)){
var vec__19648_19701 = chunk__19645_19698.cljs$core$IIndexed$_nth$arity$2(null,i__19647_19700);
var id_19702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19648_19701,(0),null);
var c_19703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19648_19701,(1),null);
if(cljs.core.truth_(c_19703.shouldComponentUpdate(c_19703.props,c_19703.state))){
c_19703.forceUpdate();
} else {
}

var G__19704 = seq__19644_19697;
var G__19705 = chunk__19645_19698;
var G__19706 = count__19646_19699;
var G__19707 = (i__19647_19700 + (1));
seq__19644_19697 = G__19704;
chunk__19645_19698 = G__19705;
count__19646_19699 = G__19706;
i__19647_19700 = G__19707;
continue;
} else {
var temp__4425__auto___19708 = cljs.core.seq(seq__19644_19697);
if(temp__4425__auto___19708){
var seq__19644_19709__$1 = temp__4425__auto___19708;
if(cljs.core.chunked_seq_QMARK_(seq__19644_19709__$1)){
var c__5474__auto___19710 = cljs.core.chunk_first(seq__19644_19709__$1);
var G__19711 = cljs.core.chunk_rest(seq__19644_19709__$1);
var G__19712 = c__5474__auto___19710;
var G__19713 = cljs.core.count(c__5474__auto___19710);
var G__19714 = (0);
seq__19644_19697 = G__19711;
chunk__19645_19698 = G__19712;
count__19646_19699 = G__19713;
i__19647_19700 = G__19714;
continue;
} else {
var vec__19649_19715 = cljs.core.first(seq__19644_19709__$1);
var id_19716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649_19715,(0),null);
var c_19717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649_19715,(1),null);
if(cljs.core.truth_(c_19717.shouldComponentUpdate(c_19717.props,c_19717.state))){
c_19717.forceUpdate();
} else {
}

var G__19718 = cljs.core.next(seq__19644_19709__$1);
var G__19719 = null;
var G__19720 = (0);
var G__19721 = (0);
seq__19644_19697 = G__19718;
chunk__19645_19698 = G__19719;
count__19646_19699 = G__19720;
i__19647_19700 = G__19721;
continue;
}
} else {
}
}
break;
}

var G__19722 = seq__19639_19689;
var G__19723 = chunk__19640_19690;
var G__19724 = count__19641_19691;
var G__19725 = (i__19642_19692 + (1));
seq__19639_19689 = G__19722;
chunk__19640_19690 = G__19723;
count__19641_19691 = G__19724;
i__19642_19692 = G__19725;
continue;
} else {
var temp__4425__auto___19726 = cljs.core.seq(seq__19639_19689);
if(temp__4425__auto___19726){
var seq__19639_19727__$1 = temp__4425__auto___19726;
if(cljs.core.chunked_seq_QMARK_(seq__19639_19727__$1)){
var c__5474__auto___19728 = cljs.core.chunk_first(seq__19639_19727__$1);
var G__19729 = cljs.core.chunk_rest(seq__19639_19727__$1);
var G__19730 = c__5474__auto___19728;
var G__19731 = cljs.core.count(c__5474__auto___19728);
var G__19732 = (0);
seq__19639_19689 = G__19729;
chunk__19640_19690 = G__19730;
count__19641_19691 = G__19731;
i__19642_19692 = G__19732;
continue;
} else {
var vec__19650_19733 = cljs.core.first(seq__19639_19727__$1);
var path_19734__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19650_19733,(0),null);
var cs_19735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19650_19733,(1),null);
var cs_19736__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_19735) : cljs.core.deref.call(null,cs_19735));
var seq__19651_19737 = cljs.core.seq(cs_19736__$1);
var chunk__19652_19738 = null;
var count__19653_19739 = (0);
var i__19654_19740 = (0);
while(true){
if((i__19654_19740 < count__19653_19739)){
var vec__19655_19741 = chunk__19652_19738.cljs$core$IIndexed$_nth$arity$2(null,i__19654_19740);
var id_19742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19655_19741,(0),null);
var c_19743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19655_19741,(1),null);
if(cljs.core.truth_(c_19743.shouldComponentUpdate(c_19743.props,c_19743.state))){
c_19743.forceUpdate();
} else {
}

var G__19744 = seq__19651_19737;
var G__19745 = chunk__19652_19738;
var G__19746 = count__19653_19739;
var G__19747 = (i__19654_19740 + (1));
seq__19651_19737 = G__19744;
chunk__19652_19738 = G__19745;
count__19653_19739 = G__19746;
i__19654_19740 = G__19747;
continue;
} else {
var temp__4425__auto___19748__$1 = cljs.core.seq(seq__19651_19737);
if(temp__4425__auto___19748__$1){
var seq__19651_19749__$1 = temp__4425__auto___19748__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19651_19749__$1)){
var c__5474__auto___19750 = cljs.core.chunk_first(seq__19651_19749__$1);
var G__19751 = cljs.core.chunk_rest(seq__19651_19749__$1);
var G__19752 = c__5474__auto___19750;
var G__19753 = cljs.core.count(c__5474__auto___19750);
var G__19754 = (0);
seq__19651_19737 = G__19751;
chunk__19652_19738 = G__19752;
count__19653_19739 = G__19753;
i__19654_19740 = G__19754;
continue;
} else {
var vec__19656_19755 = cljs.core.first(seq__19651_19749__$1);
var id_19756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19656_19755,(0),null);
var c_19757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19656_19755,(1),null);
if(cljs.core.truth_(c_19757.shouldComponentUpdate(c_19757.props,c_19757.state))){
c_19757.forceUpdate();
} else {
}

var G__19758 = cljs.core.next(seq__19651_19749__$1);
var G__19759 = null;
var G__19760 = (0);
var G__19761 = (0);
seq__19651_19737 = G__19758;
chunk__19652_19738 = G__19759;
count__19653_19739 = G__19760;
i__19654_19740 = G__19761;
continue;
}
} else {
}
}
break;
}

var G__19762 = cljs.core.next(seq__19639_19727__$1);
var G__19763 = null;
var G__19764 = (0);
var G__19765 = (0);
seq__19639_19689 = G__19762;
chunk__19640_19690 = G__19763;
count__19641_19691 = G__19764;
i__19642_19692 = G__19765;
continue;
}
} else {
}
}
break;
}
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$ignore,false);

if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__19657 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
var G__19658 = (16);
return setTimeout(G__19657,G__19658);
} else {
var G__19659 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
return requestAnimationFrame(G__19659);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19592,map__19592__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){

var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots)),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args19768 = [];
var len__5725__auto___19771 = arguments.length;
var i__5726__auto___19772 = (0);
while(true){
if((i__5726__auto___19772 < len__5725__auto___19771)){
args19768.push((arguments[i__5726__auto___19772]));

var G__19773 = (i__5726__auto___19772 + (1));
i__5726__auto___19772 = G__19773;
continue;
} else {
}
break;
}

var G__19770 = args19768.length;
switch (G__19770) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19768.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){


var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args19775 = [];
var len__5725__auto___19778 = arguments.length;
var i__5726__auto___19779 = (0);
while(true){
if((i__5726__auto___19779 < len__5725__auto___19778)){
args19775.push((arguments[i__5726__auto___19779]));

var G__19780 = (i__5726__auto___19779 + (1));
i__5726__auto___19779 = G__19780;
continue;
} else {
}
break;
}

var G__19777 = args19775.length;
switch (G__19777) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19775.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){


var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor)))?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path(cursor);
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.cst$kw$ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args19784 = [];
var len__5725__auto___19788 = arguments.length;
var i__5726__auto___19789 = (0);
while(true){
if((i__5726__auto___19789 < len__5725__auto___19788)){
args19784.push((arguments[i__5726__auto___19789]));

var G__19790 = (i__5726__auto___19789 + (1));
i__5726__auto___19789 = G__19790;
continue;
} else {
}
break;
}

var G__19786 = args19784.length;
switch (G__19786) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19784.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){

var G__19787 = owner.refs;
var G__19787__$1 = (((G__19787 == null))?null:(G__19787[name]));
var G__19787__$2 = (((G__19787__$1 == null))?null:G__19787__$1.getDOMNode());
return G__19787__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){


var G__19793 = owner.refs;
var G__19793__$1 = (((G__19793 == null))?null:goog.object.get(G__19793,name));
return G__19793__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args19794 = [];
var len__5725__auto___19797 = arguments.length;
var i__5726__auto___19798 = (0);
while(true){
if((i__5726__auto___19798 < len__5725__auto___19797)){
args19794.push((arguments[i__5726__auto___19798]));

var G__19799 = (i__5726__auto___19798 + (1));
i__5726__auto___19798 = G__19799;
continue;
} else {
}
break;
}

var G__19796 = args19794.length;
switch (G__19796) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19794.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args19801 = [];
var len__5725__auto___19804 = arguments.length;
var i__5726__auto___19805 = (0);
while(true){
if((i__5726__auto___19805 < len__5725__auto___19804)){
args19801.push((arguments[i__5726__auto___19805]));

var G__19806 = (i__5726__auto___19805 + (1));
i__5726__auto___19805 = G__19806;
continue;
} else {
}
break;
}

var G__19803 = args19801.length;
switch (G__19803) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19801.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args19808 = [];
var len__5725__auto___19813 = arguments.length;
var i__5726__auto___19814 = (0);
while(true){
if((i__5726__auto___19814 < len__5725__auto___19813)){
args19808.push((arguments[i__5726__auto___19814]));

var G__19815 = (i__5726__auto___19814 + (1));
i__5726__auto___19814 = G__19815;
continue;
} else {
}
break;
}

var G__19810 = args19808.length;
switch (G__19810) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19808.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){


return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__19811 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19811) : f.call(null,G__19811));
})());
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){


return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__19812 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19812) : f.call(null,G__19812));
})());
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args19817 = [];
var len__5725__auto___19822 = arguments.length;
var i__5726__auto___19823 = (0);
while(true){
if((i__5726__auto___19823 < len__5725__auto___19822)){
args19817.push((arguments[i__5726__auto___19823]));

var G__19824 = (i__5726__auto___19823 + (1));
i__5726__auto___19823 = G__19824;
continue;
} else {
}
break;
}

var G__19819 = args19817.length;
switch (G__19819) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19817.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){


return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__19820 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19820) : f.call(null,G__19820));
})());
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){


return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__19821 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19821) : f.call(null,G__19821));
})());
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args19826 = [];
var len__5725__auto___19829 = arguments.length;
var i__5726__auto___19830 = (0);
while(true){
if((i__5726__auto___19830 < len__5725__auto___19829)){
args19826.push((arguments[i__5726__auto___19830]));

var G__19831 = (i__5726__auto___19830 + (1));
i__5726__auto___19830 = G__19831;
continue;
} else {
}
break;
}

var G__19828 = args19826.length;
switch (G__19828) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19826.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
