// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,"figwheel-repl-print",cljs.core.cst$kw$content,args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())?(function (){
var pred__18437 = cljs.core._EQ_;
var expr__18438 = (function (){var or__4671__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e18441){if((e18441 instanceof Error)){
var e = e18441;
return false;
} else {
throw e18441;

}
}})();
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_((pred__18437.cljs$core$IFn$_invoke$arity$2 ? pred__18437.cljs$core$IFn$_invoke$arity$2("true",expr__18438) : pred__18437.call(null,"true",expr__18438)))){
return true;
} else {
if(cljs.core.truth_((pred__18437.cljs$core$IFn$_invoke$arity$2 ? pred__18437.cljs$core$IFn$_invoke$arity$2("false",expr__18438) : pred__18437.call(null,"false",expr__18438)))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__18438)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
try{localStorage.setItem("figwheel_autoload",cljs.core.not((figwheel.client.autoload_QMARK_.cljs$core$IFn$_invoke$arity$0 ? figwheel.client.autoload_QMARK_.cljs$core$IFn$_invoke$arity$0() : figwheel.client.autoload_QMARK_.call(null))));

return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_((figwheel.client.autoload_QMARK_.cljs$core$IFn$_invoke$arity$0 ? figwheel.client.autoload_QMARK_.cljs$core$IFn$_invoke$arity$0() : figwheel.client.autoload_QMARK_.call(null)))?"ON":"OFF"))].join(''));
}catch (e18443){if((e18443 instanceof Error)){
var e = e18443;
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e18443;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__5732__auto__ = [];
var len__5725__auto___18445 = arguments.length;
var i__5726__auto___18446 = (0);
while(true){
if((i__5726__auto___18446 < len__5725__auto___18445)){
args__5732__auto__.push((arguments[i__5726__auto___18446]));

var G__18447 = (i__5726__auto___18446 + (1));
i__5726__auto___18446 = G__18447;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print(figwheel.client.console_print(args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq18444){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18444));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message,cljs.core.cst$kw$class], null)),figwheel$client$get_essential_messages(cljs.core.cst$kw$cause.cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__18449){
var map__18452 = p__18449;
var map__18452__$1 = ((((!((map__18452 == null)))?((((map__18452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18452):map__18452);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18452__$1,cljs.core.cst$kw$message);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18452__$1,cljs.core.cst$kw$class);
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons(cljs.core.first(msg_hist),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(name_set,cljs.core.cst$kw$msg_DASH_name),cljs.core.rest(msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4671__auto__ = cljs.core.cst$kw$load_DASH_warninged_DASH_code.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.cst$kw$compile_DASH_warning);
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(msg_names),cljs.core.cst$kw$files_DASH_changed);
if(and__4659__auto__){
return figwheel.client.reload_file_QMARK__STAR_(cljs.core.second(msg_names),opts);
} else {
return and__4659__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(msg_names),cljs.core.cst$kw$files_DASH_changed)) && (cljs.core.not(figwheel.client.reload_file_QMARK__STAR_(cljs.core.second(msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compile_DASH_warning,cljs.core.cst$kw$compile_DASH_warning], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$compile_DASH_warning,cljs.core.first(msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compile_DASH_warning,cljs.core.cst$kw$files_DASH_changed,cljs.core.cst$kw$compile_DASH_warning], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$compile_DASH_failed,cljs.core.first(msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compile_DASH_failed,cljs.core.cst$kw$compile_DASH_failed], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$css_DASH_files_DASH_changed,cljs.core.first(msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__13223__auto___18614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___18614,ch){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___18614,ch){
return (function (state_18583){
var state_val_18584 = (state_18583[(1)]);
if((state_val_18584 === (7))){
var inst_18579 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
var statearr_18585_18615 = state_18583__$1;
(statearr_18585_18615[(2)] = inst_18579);

(statearr_18585_18615[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (1))){
var state_18583__$1 = state_18583;
var statearr_18586_18616 = state_18583__$1;
(statearr_18586_18616[(2)] = null);

(statearr_18586_18616[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (4))){
var inst_18536 = (state_18583[(7)]);
var inst_18536__$1 = (state_18583[(2)]);
var state_18583__$1 = (function (){var statearr_18587 = state_18583;
(statearr_18587[(7)] = inst_18536__$1);

return statearr_18587;
})();
if(cljs.core.truth_(inst_18536__$1)){
var statearr_18588_18617 = state_18583__$1;
(statearr_18588_18617[(1)] = (5));

} else {
var statearr_18589_18618 = state_18583__$1;
(statearr_18589_18618[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (15))){
var inst_18543 = (state_18583[(8)]);
var inst_18558 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_18543);
var inst_18559 = cljs.core.first(inst_18558);
var inst_18560 = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(inst_18559);
var inst_18561 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_18560)].join('');
var inst_18562 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,inst_18561);
var state_18583__$1 = state_18583;
var statearr_18590_18619 = state_18583__$1;
(statearr_18590_18619[(2)] = inst_18562);

(statearr_18590_18619[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (13))){
var inst_18567 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
var statearr_18591_18620 = state_18583__$1;
(statearr_18591_18620[(2)] = inst_18567);

(statearr_18591_18620[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (6))){
var state_18583__$1 = state_18583;
var statearr_18592_18621 = state_18583__$1;
(statearr_18592_18621[(2)] = null);

(statearr_18592_18621[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (17))){
var inst_18565 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
var statearr_18593_18622 = state_18583__$1;
(statearr_18593_18622[(2)] = inst_18565);

(statearr_18593_18622[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (3))){
var inst_18581 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18583__$1,inst_18581);
} else {
if((state_val_18584 === (12))){
var inst_18542 = (state_18583[(9)]);
var inst_18556 = figwheel.client.block_reload_file_state_QMARK_(inst_18542,opts);
var state_18583__$1 = state_18583;
if(cljs.core.truth_(inst_18556)){
var statearr_18594_18623 = state_18583__$1;
(statearr_18594_18623[(1)] = (15));

} else {
var statearr_18595_18624 = state_18583__$1;
(statearr_18595_18624[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (2))){
var state_18583__$1 = state_18583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18583__$1,(4),ch);
} else {
if((state_val_18584 === (11))){
var inst_18543 = (state_18583[(8)]);
var inst_18548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18549 = figwheel.client.file_reloading.reload_js_files(opts,inst_18543);
var inst_18550 = cljs.core.async.timeout((1000));
var inst_18551 = [inst_18549,inst_18550];
var inst_18552 = (new cljs.core.PersistentVector(null,2,(5),inst_18548,inst_18551,null));
var state_18583__$1 = state_18583;
return cljs.core.async.ioc_alts_BANG_(state_18583__$1,(14),inst_18552);
} else {
if((state_val_18584 === (9))){
var inst_18543 = (state_18583[(8)]);
var inst_18569 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,"Figwheel: code autoloading is OFF");
var inst_18570 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_18543);
var inst_18571 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file,inst_18570);
var inst_18572 = [cljs.core.str("Not loading: "),cljs.core.str(inst_18571)].join('');
var inst_18573 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,inst_18572);
var state_18583__$1 = (function (){var statearr_18596 = state_18583;
(statearr_18596[(10)] = inst_18569);

return statearr_18596;
})();
var statearr_18597_18625 = state_18583__$1;
(statearr_18597_18625[(2)] = inst_18573);

(statearr_18597_18625[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (5))){
var inst_18536 = (state_18583[(7)]);
var inst_18538 = [cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null];
var inst_18539 = (new cljs.core.PersistentArrayMap(null,2,inst_18538,null));
var inst_18540 = (new cljs.core.PersistentHashSet(null,inst_18539,null));
var inst_18541 = figwheel.client.focus_msgs(inst_18540,inst_18536);
var inst_18542 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$msg_DASH_name,inst_18541);
var inst_18543 = cljs.core.first(inst_18541);
var inst_18544 = (figwheel.client.autoload_QMARK_.cljs$core$IFn$_invoke$arity$0 ? figwheel.client.autoload_QMARK_.cljs$core$IFn$_invoke$arity$0() : figwheel.client.autoload_QMARK_.call(null));
var state_18583__$1 = (function (){var statearr_18598 = state_18583;
(statearr_18598[(8)] = inst_18543);

(statearr_18598[(9)] = inst_18542);

return statearr_18598;
})();
if(cljs.core.truth_(inst_18544)){
var statearr_18599_18626 = state_18583__$1;
(statearr_18599_18626[(1)] = (8));

} else {
var statearr_18600_18627 = state_18583__$1;
(statearr_18600_18627[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (14))){
var inst_18554 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
var statearr_18601_18628 = state_18583__$1;
(statearr_18601_18628[(2)] = inst_18554);

(statearr_18601_18628[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (16))){
var state_18583__$1 = state_18583;
var statearr_18602_18629 = state_18583__$1;
(statearr_18602_18629[(2)] = null);

(statearr_18602_18629[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (10))){
var inst_18575 = (state_18583[(2)]);
var state_18583__$1 = (function (){var statearr_18603 = state_18583;
(statearr_18603[(11)] = inst_18575);

return statearr_18603;
})();
var statearr_18604_18630 = state_18583__$1;
(statearr_18604_18630[(2)] = null);

(statearr_18604_18630[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (8))){
var inst_18542 = (state_18583[(9)]);
var inst_18546 = figwheel.client.reload_file_state_QMARK_(inst_18542,opts);
var state_18583__$1 = state_18583;
if(cljs.core.truth_(inst_18546)){
var statearr_18605_18631 = state_18583__$1;
(statearr_18605_18631[(1)] = (11));

} else {
var statearr_18606_18632 = state_18583__$1;
(statearr_18606_18632[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13223__auto___18614,ch))
;
return ((function (switch__13109__auto__,c__13223__auto___18614,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__13110__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__13110__auto____0 = (function (){
var statearr_18610 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18610[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__13110__auto__);

(statearr_18610[(1)] = (1));

return statearr_18610;
});
var figwheel$client$file_reloader_plugin_$_state_machine__13110__auto____1 = (function (state_18583){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_18583);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e18611){if((e18611 instanceof Object)){
var ex__13113__auto__ = e18611;
var statearr_18612_18633 = state_18583;
(statearr_18612_18633[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18583);

return cljs.core.cst$kw$recur;
} else {
throw e18611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__18634 = state_18583;
state_18583 = G__18634;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__13110__auto__ = function(state_18583){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__13110__auto____1.call(this,state_18583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__13110__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__13110__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___18614,ch))
})();
var state__13225__auto__ = (function (){var statearr_18613 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_18613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___18614);

return statearr_18613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___18614,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18635_SHARP_){
return cljs.core.not(cljs.core.re_matches(/.*eval_javascript_STAR__STAR_.*/,p1__18635_SHARP_));
}),clojure.string.split_lines(stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return cljs.core.cst$kw$safari;
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return cljs.core.cst$kw$firefox;
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return cljs.core.cst$kw$ie;
} else {
return null;
}
}
}
}
}
});
var base_path_18648 = figwheel.client.utils.base_url_path();
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_18648){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_18645 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_18646 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{var G__18647 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product(),cljs.core.cst$kw$value,figwheel.client.utils.eval_helper(code,opts)], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__18647) : result_handler.call(null,G__18647));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18646;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18645;
}}catch (e18642){if((e18642 instanceof Error)){
var e = e18642;
var G__18643 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product(),cljs.core.cst$kw$stacktrace,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",figwheel.client.truncate_stack_trace(e.stack)),cljs.core.cst$kw$base_DASH_path,base_path_18648], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__18643) : result_handler.call(null,G__18643));
} else {
var e = e18642;
var G__18644 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product(),cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__18644) : result_handler.call(null,G__18644));

}
}});})(base_path_18648))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__18649){
var map__18656 = p__18649;
var map__18656__$1 = ((((!((map__18656 == null)))?((((map__18656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18656):map__18656);
var opts = map__18656__$1;
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18656__$1,cljs.core.cst$kw$build_DASH_id);
return ((function (map__18656,map__18656__$1,opts,build_id){
return (function (p__18658){
var vec__18659 = p__18658;
var map__18660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18659,(0),null);
var map__18660__$1 = ((((!((map__18660 == null)))?((((map__18660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18660):map__18660);
var msg = map__18660__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18660__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = cljs.core.nthnext(vec__18659,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user();

return figwheel.client.eval_javascript_STAR__STAR_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__18659,map__18660,map__18660__$1,msg,msg_name,_,map__18656,map__18656__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,cljs.core.cst$kw$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$content,res], null));
});})(vec__18659,map__18660,map__18660__$1,msg,msg_name,_,map__18656,map__18656__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__18656,map__18656__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__18666){
var vec__18667 = p__18666;
var map__18668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18667,(0),null);
var map__18668__$1 = ((((!((map__18668 == null)))?((((map__18668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18668):map__18668);
var msg = map__18668__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18668__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = cljs.core.nthnext(vec__18667,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.cst$kw$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files(opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__18670){
var map__18680 = p__18670;
var map__18680__$1 = ((((!((map__18680 == null)))?((((map__18680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18680):map__18680);
var on_compile_warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18680__$1,cljs.core.cst$kw$on_DASH_compile_DASH_warning);
var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18680__$1,cljs.core.cst$kw$on_DASH_compile_DASH_fail);
return ((function (map__18680,map__18680__$1,on_compile_warning,on_compile_fail){
return (function (p__18682){
var vec__18683 = p__18682;
var map__18684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18683,(0),null);
var map__18684__$1 = ((((!((map__18684 == null)))?((((map__18684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18684):map__18684);
var msg = map__18684__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = cljs.core.nthnext(vec__18683,(1));
var pred__18686 = cljs.core._EQ_;
var expr__18687 = msg_name;
if(cljs.core.truth_((pred__18686.cljs$core$IFn$_invoke$arity$2 ? pred__18686.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$compile_DASH_warning,expr__18687) : pred__18686.call(null,cljs.core.cst$kw$compile_DASH_warning,expr__18687)))){
return (on_compile_warning.cljs$core$IFn$_invoke$arity$1 ? on_compile_warning.cljs$core$IFn$_invoke$arity$1(msg) : on_compile_warning.call(null,msg));
} else {
if(cljs.core.truth_((pred__18686.cljs$core$IFn$_invoke$arity$2 ? pred__18686.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$compile_DASH_failed,expr__18687) : pred__18686.call(null,cljs.core.cst$kw$compile_DASH_failed,expr__18687)))){
return (on_compile_fail.cljs$core$IFn$_invoke$arity$1 ? on_compile_fail.cljs$core$IFn$_invoke$arity$1(msg) : on_compile_fail.call(null,msg));
} else {
return null;
}
}
});
;})(map__18680,map__18680__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$compile_DASH_failed,null,cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$msg_DASH_name,msg_hist);
var msg = cljs.core.first(msg_hist);
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__,msg_hist,msg_names,msg){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__,msg_hist,msg_names,msg){
return (function (state_18903){
var state_val_18904 = (state_18903[(1)]);
if((state_val_18904 === (7))){
var inst_18827 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18827)){
var statearr_18905_18951 = state_18903__$1;
(statearr_18905_18951[(1)] = (8));

} else {
var statearr_18906_18952 = state_18903__$1;
(statearr_18906_18952[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (20))){
var inst_18897 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18907_18953 = state_18903__$1;
(statearr_18907_18953[(2)] = inst_18897);

(statearr_18907_18953[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (27))){
var inst_18893 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18908_18954 = state_18903__$1;
(statearr_18908_18954[(2)] = inst_18893);

(statearr_18908_18954[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (1))){
var inst_18820 = figwheel.client.reload_file_state_QMARK_(msg_names,opts);
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18820)){
var statearr_18909_18955 = state_18903__$1;
(statearr_18909_18955[(1)] = (2));

} else {
var statearr_18910_18956 = state_18903__$1;
(statearr_18910_18956[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (24))){
var inst_18895 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18911_18957 = state_18903__$1;
(statearr_18911_18957[(2)] = inst_18895);

(statearr_18911_18957[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (4))){
var inst_18901 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18903__$1,inst_18901);
} else {
if((state_val_18904 === (15))){
var inst_18899 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18912_18958 = state_18903__$1;
(statearr_18912_18958[(2)] = inst_18899);

(statearr_18912_18958[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (21))){
var inst_18858 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18913_18959 = state_18903__$1;
(statearr_18913_18959[(2)] = inst_18858);

(statearr_18913_18959[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (31))){
var inst_18882 = figwheel.client.css_loaded_state_QMARK_(msg_names);
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18882)){
var statearr_18914_18960 = state_18903__$1;
(statearr_18914_18960[(1)] = (34));

} else {
var statearr_18915_18961 = state_18903__$1;
(statearr_18915_18961[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (32))){
var inst_18891 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18916_18962 = state_18903__$1;
(statearr_18916_18962[(2)] = inst_18891);

(statearr_18916_18962[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (33))){
var inst_18880 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18917_18963 = state_18903__$1;
(statearr_18917_18963[(2)] = inst_18880);

(statearr_18917_18963[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (13))){
var inst_18841 = figwheel.client.heads_up.clear();
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(16),inst_18841);
} else {
if((state_val_18904 === (22))){
var inst_18862 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18863 = figwheel.client.heads_up.append_message(inst_18862);
var state_18903__$1 = state_18903;
var statearr_18918_18964 = state_18903__$1;
(statearr_18918_18964[(2)] = inst_18863);

(statearr_18918_18964[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (36))){
var inst_18889 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18919_18965 = state_18903__$1;
(statearr_18919_18965[(2)] = inst_18889);

(statearr_18919_18965[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (29))){
var inst_18873 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18920_18966 = state_18903__$1;
(statearr_18920_18966[(2)] = inst_18873);

(statearr_18920_18966[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (6))){
var inst_18822 = (state_18903[(7)]);
var state_18903__$1 = state_18903;
var statearr_18921_18967 = state_18903__$1;
(statearr_18921_18967[(2)] = inst_18822);

(statearr_18921_18967[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (28))){
var inst_18869 = (state_18903[(2)]);
var inst_18870 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18871 = figwheel.client.heads_up.display_warning(inst_18870);
var state_18903__$1 = (function (){var statearr_18922 = state_18903;
(statearr_18922[(8)] = inst_18869);

return statearr_18922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(29),inst_18871);
} else {
if((state_val_18904 === (25))){
var inst_18867 = figwheel.client.heads_up.clear();
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(28),inst_18867);
} else {
if((state_val_18904 === (34))){
var inst_18884 = figwheel.client.heads_up.flash_loaded();
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(37),inst_18884);
} else {
if((state_val_18904 === (17))){
var inst_18849 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18923_18968 = state_18903__$1;
(statearr_18923_18968[(2)] = inst_18849);

(statearr_18923_18968[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (3))){
var inst_18839 = figwheel.client.compile_refail_state_QMARK_(msg_names);
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18839)){
var statearr_18924_18969 = state_18903__$1;
(statearr_18924_18969[(1)] = (13));

} else {
var statearr_18925_18970 = state_18903__$1;
(statearr_18925_18970[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (12))){
var inst_18835 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18926_18971 = state_18903__$1;
(statearr_18926_18971[(2)] = inst_18835);

(statearr_18926_18971[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (2))){
var inst_18822 = (state_18903[(7)]);
var inst_18822__$1 = (figwheel.client.autoload_QMARK_.cljs$core$IFn$_invoke$arity$0 ? figwheel.client.autoload_QMARK_.cljs$core$IFn$_invoke$arity$0() : figwheel.client.autoload_QMARK_.call(null));
var state_18903__$1 = (function (){var statearr_18927 = state_18903;
(statearr_18927[(7)] = inst_18822__$1);

return statearr_18927;
})();
if(cljs.core.truth_(inst_18822__$1)){
var statearr_18928_18972 = state_18903__$1;
(statearr_18928_18972[(1)] = (5));

} else {
var statearr_18929_18973 = state_18903__$1;
(statearr_18929_18973[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (23))){
var inst_18865 = figwheel.client.rewarning_state_QMARK_(msg_names);
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18865)){
var statearr_18930_18974 = state_18903__$1;
(statearr_18930_18974[(1)] = (25));

} else {
var statearr_18931_18975 = state_18903__$1;
(statearr_18931_18975[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (35))){
var state_18903__$1 = state_18903;
var statearr_18932_18976 = state_18903__$1;
(statearr_18932_18976[(2)] = null);

(statearr_18932_18976[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (19))){
var inst_18860 = figwheel.client.warning_append_state_QMARK_(msg_names);
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18860)){
var statearr_18933_18977 = state_18903__$1;
(statearr_18933_18977[(1)] = (22));

} else {
var statearr_18934_18978 = state_18903__$1;
(statearr_18934_18978[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (11))){
var inst_18831 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18935_18979 = state_18903__$1;
(statearr_18935_18979[(2)] = inst_18831);

(statearr_18935_18979[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (9))){
var inst_18833 = figwheel.client.heads_up.clear();
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(12),inst_18833);
} else {
if((state_val_18904 === (5))){
var inst_18824 = cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_18903__$1 = state_18903;
var statearr_18936_18980 = state_18903__$1;
(statearr_18936_18980[(2)] = inst_18824);

(statearr_18936_18980[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (14))){
var inst_18851 = figwheel.client.compile_fail_state_QMARK_(msg_names);
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18851)){
var statearr_18937_18981 = state_18903__$1;
(statearr_18937_18981[(1)] = (18));

} else {
var statearr_18938_18982 = state_18903__$1;
(statearr_18938_18982[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (26))){
var inst_18875 = figwheel.client.warning_state_QMARK_(msg_names);
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18875)){
var statearr_18939_18983 = state_18903__$1;
(statearr_18939_18983[(1)] = (30));

} else {
var statearr_18940_18984 = state_18903__$1;
(statearr_18940_18984[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (16))){
var inst_18843 = (state_18903[(2)]);
var inst_18844 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18845 = (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(inst_18844) : figwheel.client.format_messages.call(null,inst_18844));
var inst_18846 = cljs.core.cst$kw$cause.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18847 = figwheel.client.heads_up.display_error(inst_18845,inst_18846);
var state_18903__$1 = (function (){var statearr_18941 = state_18903;
(statearr_18941[(9)] = inst_18843);

return statearr_18941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(17),inst_18847);
} else {
if((state_val_18904 === (30))){
var inst_18877 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18878 = figwheel.client.heads_up.display_warning(inst_18877);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(33),inst_18878);
} else {
if((state_val_18904 === (10))){
var inst_18837 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18942_18985 = state_18903__$1;
(statearr_18942_18985[(2)] = inst_18837);

(statearr_18942_18985[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (18))){
var inst_18853 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18854 = (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(inst_18853) : figwheel.client.format_messages.call(null,inst_18853));
var inst_18855 = cljs.core.cst$kw$cause.cljs$core$IFn$_invoke$arity$1(msg);
var inst_18856 = figwheel.client.heads_up.display_error(inst_18854,inst_18855);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(21),inst_18856);
} else {
if((state_val_18904 === (37))){
var inst_18886 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18943_18986 = state_18903__$1;
(statearr_18943_18986[(2)] = inst_18886);

(statearr_18943_18986[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (8))){
var inst_18829 = figwheel.client.heads_up.flash_loaded();
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(11),inst_18829);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13223__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__13109__auto__,c__13223__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto____0 = (function (){
var statearr_18947 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18947[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto__);

(statearr_18947[(1)] = (1));

return statearr_18947;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto____1 = (function (state_18903){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_18903);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e18948){if((e18948 instanceof Object)){
var ex__13113__auto__ = e18948;
var statearr_18949_18987 = state_18903;
(statearr_18949_18987[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18903);

return cljs.core.cst$kw$recur;
} else {
throw e18948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__18988 = state_18903;
state_18903 = G__18988;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto__ = function(state_18903){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto____1.call(this,state_18903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__,msg_hist,msg_names,msg))
})();
var state__13225__auto__ = (function (){var statearr_18950 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_18950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_18950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__,msg_hist,msg_names,msg))
);

return c__13223__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__13223__auto___19051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___19051,ch){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___19051,ch){
return (function (state_19034){
var state_val_19035 = (state_19034[(1)]);
if((state_val_19035 === (1))){
var state_19034__$1 = state_19034;
var statearr_19036_19052 = state_19034__$1;
(statearr_19036_19052[(2)] = null);

(statearr_19036_19052[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (2))){
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19034__$1,(4),ch);
} else {
if((state_val_19035 === (3))){
var inst_19032 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19034__$1,inst_19032);
} else {
if((state_val_19035 === (4))){
var inst_19022 = (state_19034[(7)]);
var inst_19022__$1 = (state_19034[(2)]);
var state_19034__$1 = (function (){var statearr_19037 = state_19034;
(statearr_19037[(7)] = inst_19022__$1);

return statearr_19037;
})();
if(cljs.core.truth_(inst_19022__$1)){
var statearr_19038_19053 = state_19034__$1;
(statearr_19038_19053[(1)] = (5));

} else {
var statearr_19039_19054 = state_19034__$1;
(statearr_19039_19054[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (5))){
var inst_19022 = (state_19034[(7)]);
var inst_19024 = figwheel.client.heads_up_plugin_msg_handler(opts,inst_19022);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19034__$1,(8),inst_19024);
} else {
if((state_val_19035 === (6))){
var state_19034__$1 = state_19034;
var statearr_19040_19055 = state_19034__$1;
(statearr_19040_19055[(2)] = null);

(statearr_19040_19055[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (7))){
var inst_19030 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19041_19056 = state_19034__$1;
(statearr_19041_19056[(2)] = inst_19030);

(statearr_19041_19056[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (8))){
var inst_19026 = (state_19034[(2)]);
var state_19034__$1 = (function (){var statearr_19042 = state_19034;
(statearr_19042[(8)] = inst_19026);

return statearr_19042;
})();
var statearr_19043_19057 = state_19034__$1;
(statearr_19043_19057[(2)] = null);

(statearr_19043_19057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__13223__auto___19051,ch))
;
return ((function (switch__13109__auto__,c__13223__auto___19051,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__13110__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__13110__auto____0 = (function (){
var statearr_19047 = [null,null,null,null,null,null,null,null,null];
(statearr_19047[(0)] = figwheel$client$heads_up_plugin_$_state_machine__13110__auto__);

(statearr_19047[(1)] = (1));

return statearr_19047;
});
var figwheel$client$heads_up_plugin_$_state_machine__13110__auto____1 = (function (state_19034){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_19034);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e19048){if((e19048 instanceof Object)){
var ex__13113__auto__ = e19048;
var statearr_19049_19058 = state_19034;
(statearr_19049_19058[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19034);

return cljs.core.cst$kw$recur;
} else {
throw e19048;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__19059 = state_19034;
state_19034 = G__19059;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__13110__auto__ = function(state_19034){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__13110__auto____1.call(this,state_19034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__13110__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__13110__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___19051,ch))
})();
var state__13225__auto__ = (function (){var statearr_19050 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_19050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___19051);

return statearr_19050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___19051,ch))
);


figwheel.client.heads_up.ensure_container();

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count(cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$project_DASH_id,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),msg_hist)))))){
figwheel.client.socket.close_BANG_();

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(opts))){
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_19080){
var state_val_19081 = (state_19080[(1)]);
if((state_val_19081 === (1))){
var inst_19075 = cljs.core.async.timeout((3000));
var state_19080__$1 = state_19080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19080__$1,(2),inst_19075);
} else {
if((state_val_19081 === (2))){
var inst_19077 = (state_19080[(2)]);
var inst_19078 = figwheel.client.heads_up.display_system_warning("Connection from different project","Shutting connection down!!!!!");
var state_19080__$1 = (function (){var statearr_19082 = state_19080;
(statearr_19082[(7)] = inst_19077);

return statearr_19082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19080__$1,inst_19078);
} else {
return null;
}
}
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__13110__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__13110__auto____0 = (function (){
var statearr_19086 = [null,null,null,null,null,null,null,null];
(statearr_19086[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__13110__auto__);

(statearr_19086[(1)] = (1));

return statearr_19086;
});
var figwheel$client$enforce_project_plugin_$_state_machine__13110__auto____1 = (function (state_19080){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_19080);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e19087){if((e19087 instanceof Object)){
var ex__13113__auto__ = e19087;
var statearr_19088_19090 = state_19080;
(statearr_19088_19090[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19080);

return cljs.core.cst$kw$recur;
} else {
throw e19087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__19091 = state_19080;
state_19080 = G__19091;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__13110__auto__ = function(state_19080){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__13110__auto____1.call(this,state_19080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__13110__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__13110__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_19089 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_19089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_19089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__19092){
var map__19099 = p__19092;
var map__19099__$1 = ((((!((map__19099 == null)))?((((map__19099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19099):map__19099);
var ed = map__19099__$1;
var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19099__$1,cljs.core.cst$kw$formatted_DASH_exception);
var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19099__$1,cljs.core.cst$kw$exception_DASH_data);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19099__$1,cljs.core.cst$kw$cause);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: Compile Exception");

var seq__19101_19105 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));
var chunk__19102_19106 = null;
var count__19103_19107 = (0);
var i__19104_19108 = (0);
while(true){
if((i__19104_19108 < count__19103_19107)){
var msg_19109 = chunk__19102_19106.cljs$core$IIndexed$_nth$arity$2(null,i__19104_19108);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,msg_19109);

var G__19110 = seq__19101_19105;
var G__19111 = chunk__19102_19106;
var G__19112 = count__19103_19107;
var G__19113 = (i__19104_19108 + (1));
seq__19101_19105 = G__19110;
chunk__19102_19106 = G__19111;
count__19103_19107 = G__19112;
i__19104_19108 = G__19113;
continue;
} else {
var temp__4425__auto___19114 = cljs.core.seq(seq__19101_19105);
if(temp__4425__auto___19114){
var seq__19101_19115__$1 = temp__4425__auto___19114;
if(cljs.core.chunked_seq_QMARK_(seq__19101_19115__$1)){
var c__5474__auto___19116 = cljs.core.chunk_first(seq__19101_19115__$1);
var G__19117 = cljs.core.chunk_rest(seq__19101_19115__$1);
var G__19118 = c__5474__auto___19116;
var G__19119 = cljs.core.count(c__5474__auto___19116);
var G__19120 = (0);
seq__19101_19105 = G__19117;
chunk__19102_19106 = G__19118;
count__19103_19107 = G__19119;
i__19104_19108 = G__19120;
continue;
} else {
var msg_19121 = cljs.core.first(seq__19101_19115__$1);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,msg_19121);

var G__19122 = cljs.core.next(seq__19101_19115__$1);
var G__19123 = null;
var G__19124 = (0);
var G__19125 = (0);
seq__19101_19105 = G__19122;
chunk__19102_19106 = G__19123;
count__19103_19107 = G__19124;
i__19104_19108 = G__19125;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,[cljs.core.str("Error on file "),cljs.core.str(cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__19126){
var map__19129 = p__19126;
var map__19129__$1 = ((((!((map__19129 == null)))?((((map__19129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19129):map__19129);
var w = map__19129__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,cljs.core.cst$kw$message);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: loaded CSS files");

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file,files)], 0)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_compile_DASH_warning,cljs.core.cst$kw$on_DASH_jsload,cljs.core.cst$kw$reload_DASH_dependents,cljs.core.cst$kw$on_DASH_compile_DASH_fail,cljs.core.cst$kw$debug,cljs.core.cst$kw$heads_DASH_up_DASH_display,cljs.core.cst$kw$websocket_DASH_url,cljs.core.cst$kw$before_DASH_jsload,cljs.core.cst$kw$load_DASH_warninged_DASH_code,cljs.core.cst$kw$eval_DASH_fn,cljs.core.cst$kw$retry_DASH_count,cljs.core.cst$kw$autoload,cljs.core.cst$kw$on_DASH_cssload],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(cljs.core.cst$kw$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$on_DASH_jsload,cljs.core.cst$kw$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config)),cljs.core.cst$kw$jsload_DASH_callback);
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$enforce_DASH_project_DASH_plugin,figwheel.client.enforce_project_plugin,cljs.core.cst$kw$file_DASH_reloader_DASH_plugin,figwheel.client.file_reloader_plugin,cljs.core.cst$kw$comp_DASH_fail_DASH_warning_DASH_plugin,figwheel.client.compile_fail_warning_plugin,cljs.core.cst$kw$css_DASH_reloader_DASH_plugin,figwheel.client.css_reloader_plugin,cljs.core.cst$kw$repl_DASH_plugin,figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not(figwheel.client.utils.html_env_QMARK_()))?cljs.core.select_keys(base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_reloader_DASH_plugin,cljs.core.cst$kw$comp_DASH_fail_DASH_warning_DASH_plugin,cljs.core.cst$kw$repl_DASH_plugin], null)):base);
var base__$2 = ((cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base__$1,cljs.core.cst$kw$file_DASH_reloader_DASH_plugin):base__$1);
if(cljs.core.truth_((function (){var and__4659__auto__ = cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4659__auto__)){
return figwheel.client.utils.html_env_QMARK_();
} else {
return and__4659__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base__$2,cljs.core.cst$kw$heads_DASH_up_DASH_display_DASH_plugin,figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch(figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
var G__19132 = cljs.core.first(msg_hist);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__19132) : callback.call(null,G__19132));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__19139 = cljs.core.seq(plugins);
var chunk__19140 = null;
var count__19141 = (0);
var i__19142 = (0);
while(true){
if((i__19142 < count__19141)){
var vec__19143 = chunk__19140.cljs$core$IIndexed$_nth$arity$2(null,i__19142);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19145 = (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(system_options) : plugin.call(null,system_options));
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__19139,chunk__19140,count__19141,i__19142,pl_19145,vec__19143,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return (pl_19145.cljs$core$IFn$_invoke$arity$1 ? pl_19145.cljs$core$IFn$_invoke$arity$1(msg_hist) : pl_19145.call(null,msg_hist));
});})(seq__19139,chunk__19140,count__19141,i__19142,pl_19145,vec__19143,k,plugin))
);
} else {
}

var G__19146 = seq__19139;
var G__19147 = chunk__19140;
var G__19148 = count__19141;
var G__19149 = (i__19142 + (1));
seq__19139 = G__19146;
chunk__19140 = G__19147;
count__19141 = G__19148;
i__19142 = G__19149;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__19139);
if(temp__4425__auto__){
var seq__19139__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19139__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__19139__$1);
var G__19150 = cljs.core.chunk_rest(seq__19139__$1);
var G__19151 = c__5474__auto__;
var G__19152 = cljs.core.count(c__5474__auto__);
var G__19153 = (0);
seq__19139 = G__19150;
chunk__19140 = G__19151;
count__19141 = G__19152;
i__19142 = G__19153;
continue;
} else {
var vec__19144 = cljs.core.first(seq__19139__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19144,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19144,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19154 = (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(system_options) : plugin.call(null,system_options));
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__19139,chunk__19140,count__19141,i__19142,pl_19154,vec__19144,k,plugin,seq__19139__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return (pl_19154.cljs$core$IFn$_invoke$arity$1 ? pl_19154.cljs$core$IFn$_invoke$arity$1(msg_hist) : pl_19154.call(null,msg_hist));
});})(seq__19139,chunk__19140,count__19141,i__19142,pl_19154,vec__19144,k,plugin,seq__19139__$1,temp__4425__auto__))
);
} else {
}

var G__19155 = cljs.core.next(seq__19139__$1);
var G__19156 = null;
var G__19157 = (0);
var G__19158 = (0);
seq__19139 = G__19155;
chunk__19140 = G__19156;
count__19141 = G__19157;
i__19142 = G__19158;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args19159 = [];
var len__5725__auto___19163 = arguments.length;
var i__5726__auto___19164 = (0);
while(true){
if((i__5726__auto___19164 < len__5725__auto___19163)){
args19159.push((arguments[i__5726__auto___19164]));

var G__19165 = (i__5726__auto___19164 + (1));
i__5726__auto___19164 = G__19165;
continue;
} else {
}
break;
}

var G__19161 = args19159.length;
switch (G__19161) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19159.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var G__19162 = (function (){
var plugins_SINGLEQUOTE_ = cljs.core.cst$kw$plugins.cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = cljs.core.cst$kw$merge_DASH_plugins.cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.config_defaults,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$plugins,cljs.core.array_seq([cljs.core.cst$kw$merge_DASH_plugins], 0))], 0)));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.base_plugins(system_options),merge_plugins], 0)));
figwheel.client.utils._STAR_print_debug_STAR_ = cljs.core.cst$kw$debug.cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins(plugins,system_options);

figwheel.client.file_reloading.patch_goog_base();

return figwheel.client.socket.open(system_options);
});
return setTimeout(G__19162);
})();
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__5732__auto__ = [];
var len__5725__auto___19171 = arguments.length;
var i__5726__auto___19172 = (0);
while(true){
if((i__5726__auto___19172 < len__5725__auto___19171)){
args__5732__auto__.push((arguments[i__5726__auto___19172]));

var G__19173 = (i__5726__auto___19172 + (1));
i__5726__auto___19172 = G__19173;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__19168){
var map__19169 = p__19168;
var map__19169__$1 = ((((!((map__19169 == null)))?((((map__19169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19169):map__19169);
var opts = map__19169__$1;
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq19167){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19167));
});
