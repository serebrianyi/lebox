// Compiled by ClojureScript 1.7.170 {}
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24923 = cljs.core._EQ_;
var expr__24924 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e24927){if((e24927 instanceof Error)){
var e = e24927;
return false;
} else {
throw e24927;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24923.call(null,"true",expr__24924))){
return true;
} else {
if(cljs.core.truth_(pred__24923.call(null,"false",expr__24924))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24924)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24929){if((e24929 instanceof Error)){
var e = e24929;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24929;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24931 = arguments.length;
var i__17864__auto___24932 = (0);
while(true){
if((i__17864__auto___24932 < len__17863__auto___24931)){
args__17870__auto__.push((arguments[i__17864__auto___24932]));

var G__24933 = (i__17864__auto___24932 + (1));
i__17864__auto___24932 = G__24933;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24930){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24930));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24934){
var map__24937 = p__24934;
var map__24937__$1 = ((((!((map__24937 == null)))?((((map__24937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24937):map__24937);
var message = cljs.core.get.call(null,map__24937__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24937__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16793__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20537__auto___25099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___25099,ch){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___25099,ch){
return (function (state_25068){
var state_val_25069 = (state_25068[(1)]);
if((state_val_25069 === (7))){
var inst_25064 = (state_25068[(2)]);
var state_25068__$1 = state_25068;
var statearr_25070_25100 = state_25068__$1;
(statearr_25070_25100[(2)] = inst_25064);

(statearr_25070_25100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (1))){
var state_25068__$1 = state_25068;
var statearr_25071_25101 = state_25068__$1;
(statearr_25071_25101[(2)] = null);

(statearr_25071_25101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (4))){
var inst_25021 = (state_25068[(7)]);
var inst_25021__$1 = (state_25068[(2)]);
var state_25068__$1 = (function (){var statearr_25072 = state_25068;
(statearr_25072[(7)] = inst_25021__$1);

return statearr_25072;
})();
if(cljs.core.truth_(inst_25021__$1)){
var statearr_25073_25102 = state_25068__$1;
(statearr_25073_25102[(1)] = (5));

} else {
var statearr_25074_25103 = state_25068__$1;
(statearr_25074_25103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (15))){
var inst_25028 = (state_25068[(8)]);
var inst_25043 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25028);
var inst_25044 = cljs.core.first.call(null,inst_25043);
var inst_25045 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25044);
var inst_25046 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25045)].join('');
var inst_25047 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25046);
var state_25068__$1 = state_25068;
var statearr_25075_25104 = state_25068__$1;
(statearr_25075_25104[(2)] = inst_25047);

(statearr_25075_25104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (13))){
var inst_25052 = (state_25068[(2)]);
var state_25068__$1 = state_25068;
var statearr_25076_25105 = state_25068__$1;
(statearr_25076_25105[(2)] = inst_25052);

(statearr_25076_25105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (6))){
var state_25068__$1 = state_25068;
var statearr_25077_25106 = state_25068__$1;
(statearr_25077_25106[(2)] = null);

(statearr_25077_25106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (17))){
var inst_25050 = (state_25068[(2)]);
var state_25068__$1 = state_25068;
var statearr_25078_25107 = state_25068__$1;
(statearr_25078_25107[(2)] = inst_25050);

(statearr_25078_25107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (3))){
var inst_25066 = (state_25068[(2)]);
var state_25068__$1 = state_25068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25068__$1,inst_25066);
} else {
if((state_val_25069 === (12))){
var inst_25027 = (state_25068[(9)]);
var inst_25041 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25027,opts);
var state_25068__$1 = state_25068;
if(cljs.core.truth_(inst_25041)){
var statearr_25079_25108 = state_25068__$1;
(statearr_25079_25108[(1)] = (15));

} else {
var statearr_25080_25109 = state_25068__$1;
(statearr_25080_25109[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (2))){
var state_25068__$1 = state_25068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25068__$1,(4),ch);
} else {
if((state_val_25069 === (11))){
var inst_25028 = (state_25068[(8)]);
var inst_25033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25034 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25028);
var inst_25035 = cljs.core.async.timeout.call(null,(1000));
var inst_25036 = [inst_25034,inst_25035];
var inst_25037 = (new cljs.core.PersistentVector(null,2,(5),inst_25033,inst_25036,null));
var state_25068__$1 = state_25068;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25068__$1,(14),inst_25037);
} else {
if((state_val_25069 === (9))){
var inst_25028 = (state_25068[(8)]);
var inst_25054 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25055 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25028);
var inst_25056 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25055);
var inst_25057 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25056)].join('');
var inst_25058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25057);
var state_25068__$1 = (function (){var statearr_25081 = state_25068;
(statearr_25081[(10)] = inst_25054);

return statearr_25081;
})();
var statearr_25082_25110 = state_25068__$1;
(statearr_25082_25110[(2)] = inst_25058);

(statearr_25082_25110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (5))){
var inst_25021 = (state_25068[(7)]);
var inst_25023 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25024 = (new cljs.core.PersistentArrayMap(null,2,inst_25023,null));
var inst_25025 = (new cljs.core.PersistentHashSet(null,inst_25024,null));
var inst_25026 = figwheel.client.focus_msgs.call(null,inst_25025,inst_25021);
var inst_25027 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25026);
var inst_25028 = cljs.core.first.call(null,inst_25026);
var inst_25029 = figwheel.client.autoload_QMARK_.call(null);
var state_25068__$1 = (function (){var statearr_25083 = state_25068;
(statearr_25083[(8)] = inst_25028);

(statearr_25083[(9)] = inst_25027);

return statearr_25083;
})();
if(cljs.core.truth_(inst_25029)){
var statearr_25084_25111 = state_25068__$1;
(statearr_25084_25111[(1)] = (8));

} else {
var statearr_25085_25112 = state_25068__$1;
(statearr_25085_25112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (14))){
var inst_25039 = (state_25068[(2)]);
var state_25068__$1 = state_25068;
var statearr_25086_25113 = state_25068__$1;
(statearr_25086_25113[(2)] = inst_25039);

(statearr_25086_25113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (16))){
var state_25068__$1 = state_25068;
var statearr_25087_25114 = state_25068__$1;
(statearr_25087_25114[(2)] = null);

(statearr_25087_25114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (10))){
var inst_25060 = (state_25068[(2)]);
var state_25068__$1 = (function (){var statearr_25088 = state_25068;
(statearr_25088[(11)] = inst_25060);

return statearr_25088;
})();
var statearr_25089_25115 = state_25068__$1;
(statearr_25089_25115[(2)] = null);

(statearr_25089_25115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25069 === (8))){
var inst_25027 = (state_25068[(9)]);
var inst_25031 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25027,opts);
var state_25068__$1 = state_25068;
if(cljs.core.truth_(inst_25031)){
var statearr_25090_25116 = state_25068__$1;
(statearr_25090_25116[(1)] = (11));

} else {
var statearr_25091_25117 = state_25068__$1;
(statearr_25091_25117[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20537__auto___25099,ch))
;
return ((function (switch__20425__auto__,c__20537__auto___25099,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20426__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20426__auto____0 = (function (){
var statearr_25095 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25095[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20426__auto__);

(statearr_25095[(1)] = (1));

return statearr_25095;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20426__auto____1 = (function (state_25068){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_25068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e25096){if((e25096 instanceof Object)){
var ex__20429__auto__ = e25096;
var statearr_25097_25118 = state_25068;
(statearr_25097_25118[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25119 = state_25068;
state_25068 = G__25119;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20426__auto__ = function(state_25068){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20426__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20426__auto____1.call(this,state_25068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20426__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20426__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___25099,ch))
})();
var state__20539__auto__ = (function (){var statearr_25098 = f__20538__auto__.call(null);
(statearr_25098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___25099);

return statearr_25098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___25099,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25120_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25120_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25127 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25127){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25125 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25126 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25126;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25125;
}}catch (e25124){if((e25124 instanceof Error)){
var e = e25124;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25127], null));
} else {
var e = e25124;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25127))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25128){
var map__25135 = p__25128;
var map__25135__$1 = ((((!((map__25135 == null)))?((((map__25135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25135):map__25135);
var opts = map__25135__$1;
var build_id = cljs.core.get.call(null,map__25135__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25135,map__25135__$1,opts,build_id){
return (function (p__25137){
var vec__25138 = p__25137;
var map__25139 = cljs.core.nth.call(null,vec__25138,(0),null);
var map__25139__$1 = ((((!((map__25139 == null)))?((((map__25139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25139):map__25139);
var msg = map__25139__$1;
var msg_name = cljs.core.get.call(null,map__25139__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25138,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25138,map__25139,map__25139__$1,msg,msg_name,_,map__25135,map__25135__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25138,map__25139,map__25139__$1,msg,msg_name,_,map__25135,map__25135__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25135,map__25135__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25145){
var vec__25146 = p__25145;
var map__25147 = cljs.core.nth.call(null,vec__25146,(0),null);
var map__25147__$1 = ((((!((map__25147 == null)))?((((map__25147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25147):map__25147);
var msg = map__25147__$1;
var msg_name = cljs.core.get.call(null,map__25147__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25146,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25149){
var map__25159 = p__25149;
var map__25159__$1 = ((((!((map__25159 == null)))?((((map__25159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25159):map__25159);
var on_compile_warning = cljs.core.get.call(null,map__25159__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25159__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25159,map__25159__$1,on_compile_warning,on_compile_fail){
return (function (p__25161){
var vec__25162 = p__25161;
var map__25163 = cljs.core.nth.call(null,vec__25162,(0),null);
var map__25163__$1 = ((((!((map__25163 == null)))?((((map__25163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25163):map__25163);
var msg = map__25163__$1;
var msg_name = cljs.core.get.call(null,map__25163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25162,(1));
var pred__25165 = cljs.core._EQ_;
var expr__25166 = msg_name;
if(cljs.core.truth_(pred__25165.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25166))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25165.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25166))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25159,map__25159__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto__,msg_hist,msg_names,msg){
return (function (state_25382){
var state_val_25383 = (state_25382[(1)]);
if((state_val_25383 === (7))){
var inst_25306 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25306)){
var statearr_25384_25430 = state_25382__$1;
(statearr_25384_25430[(1)] = (8));

} else {
var statearr_25385_25431 = state_25382__$1;
(statearr_25385_25431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (20))){
var inst_25376 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25386_25432 = state_25382__$1;
(statearr_25386_25432[(2)] = inst_25376);

(statearr_25386_25432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (27))){
var inst_25372 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25387_25433 = state_25382__$1;
(statearr_25387_25433[(2)] = inst_25372);

(statearr_25387_25433[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (1))){
var inst_25299 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25299)){
var statearr_25388_25434 = state_25382__$1;
(statearr_25388_25434[(1)] = (2));

} else {
var statearr_25389_25435 = state_25382__$1;
(statearr_25389_25435[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (24))){
var inst_25374 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25390_25436 = state_25382__$1;
(statearr_25390_25436[(2)] = inst_25374);

(statearr_25390_25436[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (4))){
var inst_25380 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25382__$1,inst_25380);
} else {
if((state_val_25383 === (15))){
var inst_25378 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25391_25437 = state_25382__$1;
(statearr_25391_25437[(2)] = inst_25378);

(statearr_25391_25437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (21))){
var inst_25337 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25392_25438 = state_25382__$1;
(statearr_25392_25438[(2)] = inst_25337);

(statearr_25392_25438[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (31))){
var inst_25361 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25361)){
var statearr_25393_25439 = state_25382__$1;
(statearr_25393_25439[(1)] = (34));

} else {
var statearr_25394_25440 = state_25382__$1;
(statearr_25394_25440[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (32))){
var inst_25370 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25395_25441 = state_25382__$1;
(statearr_25395_25441[(2)] = inst_25370);

(statearr_25395_25441[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (33))){
var inst_25359 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25396_25442 = state_25382__$1;
(statearr_25396_25442[(2)] = inst_25359);

(statearr_25396_25442[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (13))){
var inst_25320 = figwheel.client.heads_up.clear.call(null);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(16),inst_25320);
} else {
if((state_val_25383 === (22))){
var inst_25341 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25342 = figwheel.client.heads_up.append_message.call(null,inst_25341);
var state_25382__$1 = state_25382;
var statearr_25397_25443 = state_25382__$1;
(statearr_25397_25443[(2)] = inst_25342);

(statearr_25397_25443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (36))){
var inst_25368 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25398_25444 = state_25382__$1;
(statearr_25398_25444[(2)] = inst_25368);

(statearr_25398_25444[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (29))){
var inst_25352 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25399_25445 = state_25382__$1;
(statearr_25399_25445[(2)] = inst_25352);

(statearr_25399_25445[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (6))){
var inst_25301 = (state_25382[(7)]);
var state_25382__$1 = state_25382;
var statearr_25400_25446 = state_25382__$1;
(statearr_25400_25446[(2)] = inst_25301);

(statearr_25400_25446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (28))){
var inst_25348 = (state_25382[(2)]);
var inst_25349 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25350 = figwheel.client.heads_up.display_warning.call(null,inst_25349);
var state_25382__$1 = (function (){var statearr_25401 = state_25382;
(statearr_25401[(8)] = inst_25348);

return statearr_25401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(29),inst_25350);
} else {
if((state_val_25383 === (25))){
var inst_25346 = figwheel.client.heads_up.clear.call(null);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(28),inst_25346);
} else {
if((state_val_25383 === (34))){
var inst_25363 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(37),inst_25363);
} else {
if((state_val_25383 === (17))){
var inst_25328 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25402_25447 = state_25382__$1;
(statearr_25402_25447[(2)] = inst_25328);

(statearr_25402_25447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (3))){
var inst_25318 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25318)){
var statearr_25403_25448 = state_25382__$1;
(statearr_25403_25448[(1)] = (13));

} else {
var statearr_25404_25449 = state_25382__$1;
(statearr_25404_25449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (12))){
var inst_25314 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25405_25450 = state_25382__$1;
(statearr_25405_25450[(2)] = inst_25314);

(statearr_25405_25450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (2))){
var inst_25301 = (state_25382[(7)]);
var inst_25301__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25382__$1 = (function (){var statearr_25406 = state_25382;
(statearr_25406[(7)] = inst_25301__$1);

return statearr_25406;
})();
if(cljs.core.truth_(inst_25301__$1)){
var statearr_25407_25451 = state_25382__$1;
(statearr_25407_25451[(1)] = (5));

} else {
var statearr_25408_25452 = state_25382__$1;
(statearr_25408_25452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (23))){
var inst_25344 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25344)){
var statearr_25409_25453 = state_25382__$1;
(statearr_25409_25453[(1)] = (25));

} else {
var statearr_25410_25454 = state_25382__$1;
(statearr_25410_25454[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (35))){
var state_25382__$1 = state_25382;
var statearr_25411_25455 = state_25382__$1;
(statearr_25411_25455[(2)] = null);

(statearr_25411_25455[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (19))){
var inst_25339 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25339)){
var statearr_25412_25456 = state_25382__$1;
(statearr_25412_25456[(1)] = (22));

} else {
var statearr_25413_25457 = state_25382__$1;
(statearr_25413_25457[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (11))){
var inst_25310 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25414_25458 = state_25382__$1;
(statearr_25414_25458[(2)] = inst_25310);

(statearr_25414_25458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (9))){
var inst_25312 = figwheel.client.heads_up.clear.call(null);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(12),inst_25312);
} else {
if((state_val_25383 === (5))){
var inst_25303 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25382__$1 = state_25382;
var statearr_25415_25459 = state_25382__$1;
(statearr_25415_25459[(2)] = inst_25303);

(statearr_25415_25459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (14))){
var inst_25330 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25330)){
var statearr_25416_25460 = state_25382__$1;
(statearr_25416_25460[(1)] = (18));

} else {
var statearr_25417_25461 = state_25382__$1;
(statearr_25417_25461[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (26))){
var inst_25354 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25354)){
var statearr_25418_25462 = state_25382__$1;
(statearr_25418_25462[(1)] = (30));

} else {
var statearr_25419_25463 = state_25382__$1;
(statearr_25419_25463[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (16))){
var inst_25322 = (state_25382[(2)]);
var inst_25323 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25324 = figwheel.client.format_messages.call(null,inst_25323);
var inst_25325 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25326 = figwheel.client.heads_up.display_error.call(null,inst_25324,inst_25325);
var state_25382__$1 = (function (){var statearr_25420 = state_25382;
(statearr_25420[(9)] = inst_25322);

return statearr_25420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(17),inst_25326);
} else {
if((state_val_25383 === (30))){
var inst_25356 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25357 = figwheel.client.heads_up.display_warning.call(null,inst_25356);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(33),inst_25357);
} else {
if((state_val_25383 === (10))){
var inst_25316 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25421_25464 = state_25382__$1;
(statearr_25421_25464[(2)] = inst_25316);

(statearr_25421_25464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (18))){
var inst_25332 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25333 = figwheel.client.format_messages.call(null,inst_25332);
var inst_25334 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25335 = figwheel.client.heads_up.display_error.call(null,inst_25333,inst_25334);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(21),inst_25335);
} else {
if((state_val_25383 === (37))){
var inst_25365 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25422_25465 = state_25382__$1;
(statearr_25422_25465[(2)] = inst_25365);

(statearr_25422_25465[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (8))){
var inst_25308 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(11),inst_25308);
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
});})(c__20537__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20425__auto__,c__20537__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto____0 = (function (){
var statearr_25426 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25426[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto__);

(statearr_25426[(1)] = (1));

return statearr_25426;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto____1 = (function (state_25382){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_25382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e25427){if((e25427 instanceof Object)){
var ex__20429__auto__ = e25427;
var statearr_25428_25466 = state_25382;
(statearr_25428_25466[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25467 = state_25382;
state_25382 = G__25467;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto__ = function(state_25382){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto____1.call(this,state_25382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto__,msg_hist,msg_names,msg))
})();
var state__20539__auto__ = (function (){var statearr_25429 = f__20538__auto__.call(null);
(statearr_25429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto__);

return statearr_25429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto__,msg_hist,msg_names,msg))
);

return c__20537__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20537__auto___25530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___25530,ch){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___25530,ch){
return (function (state_25513){
var state_val_25514 = (state_25513[(1)]);
if((state_val_25514 === (1))){
var state_25513__$1 = state_25513;
var statearr_25515_25531 = state_25513__$1;
(statearr_25515_25531[(2)] = null);

(statearr_25515_25531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (2))){
var state_25513__$1 = state_25513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25513__$1,(4),ch);
} else {
if((state_val_25514 === (3))){
var inst_25511 = (state_25513[(2)]);
var state_25513__$1 = state_25513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25513__$1,inst_25511);
} else {
if((state_val_25514 === (4))){
var inst_25501 = (state_25513[(7)]);
var inst_25501__$1 = (state_25513[(2)]);
var state_25513__$1 = (function (){var statearr_25516 = state_25513;
(statearr_25516[(7)] = inst_25501__$1);

return statearr_25516;
})();
if(cljs.core.truth_(inst_25501__$1)){
var statearr_25517_25532 = state_25513__$1;
(statearr_25517_25532[(1)] = (5));

} else {
var statearr_25518_25533 = state_25513__$1;
(statearr_25518_25533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (5))){
var inst_25501 = (state_25513[(7)]);
var inst_25503 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25501);
var state_25513__$1 = state_25513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25513__$1,(8),inst_25503);
} else {
if((state_val_25514 === (6))){
var state_25513__$1 = state_25513;
var statearr_25519_25534 = state_25513__$1;
(statearr_25519_25534[(2)] = null);

(statearr_25519_25534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (7))){
var inst_25509 = (state_25513[(2)]);
var state_25513__$1 = state_25513;
var statearr_25520_25535 = state_25513__$1;
(statearr_25520_25535[(2)] = inst_25509);

(statearr_25520_25535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (8))){
var inst_25505 = (state_25513[(2)]);
var state_25513__$1 = (function (){var statearr_25521 = state_25513;
(statearr_25521[(8)] = inst_25505);

return statearr_25521;
})();
var statearr_25522_25536 = state_25513__$1;
(statearr_25522_25536[(2)] = null);

(statearr_25522_25536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20537__auto___25530,ch))
;
return ((function (switch__20425__auto__,c__20537__auto___25530,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20426__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20426__auto____0 = (function (){
var statearr_25526 = [null,null,null,null,null,null,null,null,null];
(statearr_25526[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20426__auto__);

(statearr_25526[(1)] = (1));

return statearr_25526;
});
var figwheel$client$heads_up_plugin_$_state_machine__20426__auto____1 = (function (state_25513){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_25513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e25527){if((e25527 instanceof Object)){
var ex__20429__auto__ = e25527;
var statearr_25528_25537 = state_25513;
(statearr_25528_25537[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25538 = state_25513;
state_25513 = G__25538;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20426__auto__ = function(state_25513){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20426__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20426__auto____1.call(this,state_25513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20426__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20426__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___25530,ch))
})();
var state__20539__auto__ = (function (){var statearr_25529 = f__20538__auto__.call(null);
(statearr_25529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___25530);

return statearr_25529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___25530,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto__){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto__){
return (function (state_25559){
var state_val_25560 = (state_25559[(1)]);
if((state_val_25560 === (1))){
var inst_25554 = cljs.core.async.timeout.call(null,(3000));
var state_25559__$1 = state_25559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25559__$1,(2),inst_25554);
} else {
if((state_val_25560 === (2))){
var inst_25556 = (state_25559[(2)]);
var inst_25557 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25559__$1 = (function (){var statearr_25561 = state_25559;
(statearr_25561[(7)] = inst_25556);

return statearr_25561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25559__$1,inst_25557);
} else {
return null;
}
}
});})(c__20537__auto__))
;
return ((function (switch__20425__auto__,c__20537__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20426__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20426__auto____0 = (function (){
var statearr_25565 = [null,null,null,null,null,null,null,null];
(statearr_25565[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20426__auto__);

(statearr_25565[(1)] = (1));

return statearr_25565;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20426__auto____1 = (function (state_25559){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_25559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e25566){if((e25566 instanceof Object)){
var ex__20429__auto__ = e25566;
var statearr_25567_25569 = state_25559;
(statearr_25567_25569[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25570 = state_25559;
state_25559 = G__25570;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20426__auto__ = function(state_25559){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20426__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20426__auto____1.call(this,state_25559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20426__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20426__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto__))
})();
var state__20539__auto__ = (function (){var statearr_25568 = f__20538__auto__.call(null);
(statearr_25568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto__);

return statearr_25568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto__))
);

return c__20537__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25571){
var map__25578 = p__25571;
var map__25578__$1 = ((((!((map__25578 == null)))?((((map__25578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25578):map__25578);
var ed = map__25578__$1;
var formatted_exception = cljs.core.get.call(null,map__25578__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25578__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25578__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25580_25584 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25581_25585 = null;
var count__25582_25586 = (0);
var i__25583_25587 = (0);
while(true){
if((i__25583_25587 < count__25582_25586)){
var msg_25588 = cljs.core._nth.call(null,chunk__25581_25585,i__25583_25587);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25588);

var G__25589 = seq__25580_25584;
var G__25590 = chunk__25581_25585;
var G__25591 = count__25582_25586;
var G__25592 = (i__25583_25587 + (1));
seq__25580_25584 = G__25589;
chunk__25581_25585 = G__25590;
count__25582_25586 = G__25591;
i__25583_25587 = G__25592;
continue;
} else {
var temp__4425__auto___25593 = cljs.core.seq.call(null,seq__25580_25584);
if(temp__4425__auto___25593){
var seq__25580_25594__$1 = temp__4425__auto___25593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25580_25594__$1)){
var c__17608__auto___25595 = cljs.core.chunk_first.call(null,seq__25580_25594__$1);
var G__25596 = cljs.core.chunk_rest.call(null,seq__25580_25594__$1);
var G__25597 = c__17608__auto___25595;
var G__25598 = cljs.core.count.call(null,c__17608__auto___25595);
var G__25599 = (0);
seq__25580_25584 = G__25596;
chunk__25581_25585 = G__25597;
count__25582_25586 = G__25598;
i__25583_25587 = G__25599;
continue;
} else {
var msg_25600 = cljs.core.first.call(null,seq__25580_25594__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25600);

var G__25601 = cljs.core.next.call(null,seq__25580_25594__$1);
var G__25602 = null;
var G__25603 = (0);
var G__25604 = (0);
seq__25580_25584 = G__25601;
chunk__25581_25585 = G__25602;
count__25582_25586 = G__25603;
i__25583_25587 = G__25604;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25605){
var map__25608 = p__25605;
var map__25608__$1 = ((((!((map__25608 == null)))?((((map__25608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25608):map__25608);
var w = map__25608__$1;
var message = cljs.core.get.call(null,map__25608__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25616 = cljs.core.seq.call(null,plugins);
var chunk__25617 = null;
var count__25618 = (0);
var i__25619 = (0);
while(true){
if((i__25619 < count__25618)){
var vec__25620 = cljs.core._nth.call(null,chunk__25617,i__25619);
var k = cljs.core.nth.call(null,vec__25620,(0),null);
var plugin = cljs.core.nth.call(null,vec__25620,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25622 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25616,chunk__25617,count__25618,i__25619,pl_25622,vec__25620,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25622.call(null,msg_hist);
});})(seq__25616,chunk__25617,count__25618,i__25619,pl_25622,vec__25620,k,plugin))
);
} else {
}

var G__25623 = seq__25616;
var G__25624 = chunk__25617;
var G__25625 = count__25618;
var G__25626 = (i__25619 + (1));
seq__25616 = G__25623;
chunk__25617 = G__25624;
count__25618 = G__25625;
i__25619 = G__25626;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25616);
if(temp__4425__auto__){
var seq__25616__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25616__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__25616__$1);
var G__25627 = cljs.core.chunk_rest.call(null,seq__25616__$1);
var G__25628 = c__17608__auto__;
var G__25629 = cljs.core.count.call(null,c__17608__auto__);
var G__25630 = (0);
seq__25616 = G__25627;
chunk__25617 = G__25628;
count__25618 = G__25629;
i__25619 = G__25630;
continue;
} else {
var vec__25621 = cljs.core.first.call(null,seq__25616__$1);
var k = cljs.core.nth.call(null,vec__25621,(0),null);
var plugin = cljs.core.nth.call(null,vec__25621,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25631 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25616,chunk__25617,count__25618,i__25619,pl_25631,vec__25621,k,plugin,seq__25616__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25631.call(null,msg_hist);
});})(seq__25616,chunk__25617,count__25618,i__25619,pl_25631,vec__25621,k,plugin,seq__25616__$1,temp__4425__auto__))
);
} else {
}

var G__25632 = cljs.core.next.call(null,seq__25616__$1);
var G__25633 = null;
var G__25634 = (0);
var G__25635 = (0);
seq__25616 = G__25632;
chunk__25617 = G__25633;
count__25618 = G__25634;
i__25619 = G__25635;
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
var args25636 = [];
var len__17863__auto___25639 = arguments.length;
var i__17864__auto___25640 = (0);
while(true){
if((i__17864__auto___25640 < len__17863__auto___25639)){
args25636.push((arguments[i__17864__auto___25640]));

var G__25641 = (i__17864__auto___25640 + (1));
i__17864__auto___25640 = G__25641;
continue;
} else {
}
break;
}

var G__25638 = args25636.length;
switch (G__25638) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25636.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17870__auto__ = [];
var len__17863__auto___25647 = arguments.length;
var i__17864__auto___25648 = (0);
while(true){
if((i__17864__auto___25648 < len__17863__auto___25647)){
args__17870__auto__.push((arguments[i__17864__auto___25648]));

var G__25649 = (i__17864__auto___25648 + (1));
i__17864__auto___25648 = G__25649;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25644){
var map__25645 = p__25644;
var map__25645__$1 = ((((!((map__25645 == null)))?((((map__25645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25645):map__25645);
var opts = map__25645__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25643){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25643));
});

//# sourceMappingURL=client.js.map