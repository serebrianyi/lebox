// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__5732__auto__ = [];
var len__5725__auto___18197 = arguments.length;
var i__5726__auto___18198 = (0);
while(true){
if((i__5726__auto___18198 < len__5725__auto___18197)){
args__5732__auto__.push((arguments[i__5726__auto___18198]));

var G__18199 = (i__5726__auto___18198 + (1));
i__5726__auto___18198 = G__18199;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name(t));
var seq__18189_18200 = cljs.core.seq(cljs.core.keys(attrs));
var chunk__18190_18201 = null;
var count__18191_18202 = (0);
var i__18192_18203 = (0);
while(true){
if((i__18192_18203 < count__18191_18202)){
var k_18204 = chunk__18190_18201.cljs$core$IIndexed$_nth$arity$2(null,i__18192_18203);
e.setAttribute(cljs.core.name(k_18204),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_18204));

var G__18205 = seq__18189_18200;
var G__18206 = chunk__18190_18201;
var G__18207 = count__18191_18202;
var G__18208 = (i__18192_18203 + (1));
seq__18189_18200 = G__18205;
chunk__18190_18201 = G__18206;
count__18191_18202 = G__18207;
i__18192_18203 = G__18208;
continue;
} else {
var temp__4425__auto___18209 = cljs.core.seq(seq__18189_18200);
if(temp__4425__auto___18209){
var seq__18189_18210__$1 = temp__4425__auto___18209;
if(cljs.core.chunked_seq_QMARK_(seq__18189_18210__$1)){
var c__5474__auto___18211 = cljs.core.chunk_first(seq__18189_18210__$1);
var G__18212 = cljs.core.chunk_rest(seq__18189_18210__$1);
var G__18213 = c__5474__auto___18211;
var G__18214 = cljs.core.count(c__5474__auto___18211);
var G__18215 = (0);
seq__18189_18200 = G__18212;
chunk__18190_18201 = G__18213;
count__18191_18202 = G__18214;
i__18192_18203 = G__18215;
continue;
} else {
var k_18216 = cljs.core.first(seq__18189_18210__$1);
e.setAttribute(cljs.core.name(k_18216),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_18216));

var G__18217 = cljs.core.next(seq__18189_18210__$1);
var G__18218 = null;
var G__18219 = (0);
var G__18220 = (0);
seq__18189_18200 = G__18217;
chunk__18190_18201 = G__18218;
count__18191_18202 = G__18219;
i__18192_18203 = G__18220;
continue;
}
} else {
}
}
break;
}

var seq__18193_18221 = cljs.core.seq(children);
var chunk__18194_18222 = null;
var count__18195_18223 = (0);
var i__18196_18224 = (0);
while(true){
if((i__18196_18224 < count__18195_18223)){
var ch_18225 = chunk__18194_18222.cljs$core$IIndexed$_nth$arity$2(null,i__18196_18224);
e.appendChild(ch_18225);

var G__18226 = seq__18193_18221;
var G__18227 = chunk__18194_18222;
var G__18228 = count__18195_18223;
var G__18229 = (i__18196_18224 + (1));
seq__18193_18221 = G__18226;
chunk__18194_18222 = G__18227;
count__18195_18223 = G__18228;
i__18196_18224 = G__18229;
continue;
} else {
var temp__4425__auto___18230 = cljs.core.seq(seq__18193_18221);
if(temp__4425__auto___18230){
var seq__18193_18231__$1 = temp__4425__auto___18230;
if(cljs.core.chunked_seq_QMARK_(seq__18193_18231__$1)){
var c__5474__auto___18232 = cljs.core.chunk_first(seq__18193_18231__$1);
var G__18233 = cljs.core.chunk_rest(seq__18193_18231__$1);
var G__18234 = c__5474__auto___18232;
var G__18235 = cljs.core.count(c__5474__auto___18232);
var G__18236 = (0);
seq__18193_18221 = G__18233;
chunk__18194_18222 = G__18234;
count__18195_18223 = G__18235;
i__18196_18224 = G__18236;
continue;
} else {
var ch_18237 = cljs.core.first(seq__18193_18231__$1);
e.appendChild(ch_18237);

var G__18238 = cljs.core.next(seq__18193_18231__$1);
var G__18239 = null;
var G__18240 = (0);
var G__18241 = (0);
seq__18193_18221 = G__18238;
chunk__18194_18222 = G__18239;
count__18195_18223 = G__18240;
i__18196_18224 = G__18241;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq18186){
var G__18187 = cljs.core.first(seq18186);
var seq18186__$1 = cljs.core.next(seq18186);
var G__18188 = cljs.core.first(seq18186__$1);
var seq18186__$2 = cljs.core.next(seq18186__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__18187,G__18188,seq18186__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5584__auto__ = (function (){var G__18242 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18242) : cljs.core.atom.call(null,G__18242));
})();
var prefer_table__5585__auto__ = (function (){var G__18243 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18243) : cljs.core.atom.call(null,G__18243));
})();
var method_cache__5586__auto__ = (function (){var G__18244 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18244) : cljs.core.atom.call(null,G__18244));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__18245 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18245) : cljs.core.atom.call(null,G__18245));
})();
var hierarchy__5588__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__))
,cljs.core.cst$kw$default,hierarchy__5588__auto__,method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__));
})();
}
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"file-selected",cljs.core.cst$kw$file_DASH_name,dataset.fileName,cljs.core.cst$kw$file_DASH_line,dataset.fileLine], null));
}));
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,"close-heads-up",(function (dataset){
return (figwheel.client.heads_up.clear.cljs$core$IFn$_invoke$arity$0 ? figwheel.client.heads_up.clear.cljs$core$IFn$_invoke$arity$0() : figwheel.client.heads_up.clear.call(null));
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate((function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),figwheel.client.heads_up.ancestor_nodes(el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset(event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return (figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IFn$_invoke$arity$1(dataset) : figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset));
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not(document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_18246 = figwheel.client.heads_up.node(cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cont_id,cljs.core.cst$kw$style,[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_18246.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_18246.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_18246.appendChild(figwheel.client.heads_up.node(cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,content_id], null)));

document.body.appendChild(el_18246);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$container_DASH_el,document.getElementById(cont_id),cljs.core.cst$kw$content_DASH_area_DASH_el,document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__18247,st_map){
var map__18252 = p__18247;
var map__18252__$1 = ((((!((map__18252 == null)))?((((map__18252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18252):map__18252);
var container_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$container_DASH_el);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__18252,map__18252__$1,container_el){
return (function (p__18254){
var vec__18255 = p__18254;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18255,(1),null);
return (container_el.style[cljs.core.name(k)] = v);
});})(map__18252,map__18252__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__18256,dom_str){
var map__18259 = p__18256;
var map__18259__$1 = ((((!((map__18259 == null)))?((((map__18259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18259):map__18259);
var c = map__18259__$1;
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18259__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__18261){
var map__18264 = p__18261;
var map__18264__$1 = ((((!((map__18264 == null)))?((((map__18264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18264):map__18264);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18264__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_18307){
var state_val_18308 = (state_18307[(1)]);
if((state_val_18308 === (1))){
var inst_18292 = (state_18307[(7)]);
var inst_18292__$1 = figwheel.client.heads_up.ensure_container();
var inst_18293 = [cljs.core.cst$kw$paddingTop,cljs.core.cst$kw$paddingBottom,cljs.core.cst$kw$width,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$opacity];
var inst_18294 = ["10px","10px","100%","68px","1.0"];
var inst_18295 = cljs.core.PersistentHashMap.fromArrays(inst_18293,inst_18294);
var inst_18296 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_18295,style], 0));
var inst_18297 = figwheel.client.heads_up.set_style_BANG_(inst_18292__$1,inst_18296);
var inst_18298 = figwheel.client.heads_up.set_content_BANG_(inst_18292__$1,msg);
var inst_18299 = cljs.core.async.timeout((300));
var state_18307__$1 = (function (){var statearr_18309 = state_18307;
(statearr_18309[(8)] = inst_18298);

(statearr_18309[(7)] = inst_18292__$1);

(statearr_18309[(9)] = inst_18297);

return statearr_18309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18307__$1,(2),inst_18299);
} else {
if((state_val_18308 === (2))){
var inst_18292 = (state_18307[(7)]);
var inst_18301 = (state_18307[(2)]);
var inst_18302 = [cljs.core.cst$kw$height];
var inst_18303 = ["auto"];
var inst_18304 = cljs.core.PersistentHashMap.fromArrays(inst_18302,inst_18303);
var inst_18305 = figwheel.client.heads_up.set_style_BANG_(inst_18292,inst_18304);
var state_18307__$1 = (function (){var statearr_18310 = state_18307;
(statearr_18310[(10)] = inst_18301);

return statearr_18310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18307__$1,inst_18305);
} else {
return null;
}
}
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto____0 = (function (){
var statearr_18314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18314[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto__);

(statearr_18314[(1)] = (1));

return statearr_18314;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto____1 = (function (state_18307){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_18307);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e18315){if((e18315 instanceof Object)){
var ex__13113__auto__ = e18315;
var statearr_18316_18318 = state_18307;
(statearr_18316_18318[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18307);

return cljs.core.cst$kw$recur;
} else {
throw e18315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__18319 = state_18307;
state_18307 = G__18319;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto__ = function(state_18307){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto____1.call(this,state_18307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_18317 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_18317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_18317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches(/.*at\sline.*/,msg))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number(msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__18321 = temp__4423__auto__;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18321,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18321,(1),null);
return figwheel.client.heads_up.file_selector_div(f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__18325 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(cause),cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cause),cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(0),null);
var file_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(1),null);
var file_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(2),null);
var msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__18325,file_name,file_line,file_column){
return (function (p1__18322_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__18322_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__18325,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link()),cljs.core.str(figwheel.client.heads_up.heading("Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div(file_name,(function (){var or__4671__auto__ = file_line;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
var and__4659__auto__ = cause;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__4659__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str((function (){var G__18326 = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(cause);
return goog.string.htmlEscape(G__18326);
})()),cljs.core.str(", line "),cljs.core.str(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link()),cljs.core.str(figwheel.client.heads_up.heading(header)),cljs.core.str(figwheel.client.heads_up.format_line(msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning("Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__18329 = figwheel.client.heads_up.ensure_container();
var map__18329__$1 = ((((!((map__18329 == null)))?((((map__18329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18329):map__18329);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18329__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line(message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_18377){
var state_val_18378 = (state_18377[(1)]);
if((state_val_18378 === (1))){
var inst_18360 = (state_18377[(7)]);
var inst_18360__$1 = figwheel.client.heads_up.ensure_container();
var inst_18361 = [cljs.core.cst$kw$opacity];
var inst_18362 = ["0.0"];
var inst_18363 = cljs.core.PersistentHashMap.fromArrays(inst_18361,inst_18362);
var inst_18364 = figwheel.client.heads_up.set_style_BANG_(inst_18360__$1,inst_18363);
var inst_18365 = cljs.core.async.timeout((300));
var state_18377__$1 = (function (){var statearr_18379 = state_18377;
(statearr_18379[(8)] = inst_18364);

(statearr_18379[(7)] = inst_18360__$1);

return statearr_18379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18377__$1,(2),inst_18365);
} else {
if((state_val_18378 === (2))){
var inst_18360 = (state_18377[(7)]);
var inst_18367 = (state_18377[(2)]);
var inst_18368 = [cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$padding,cljs.core.cst$kw$borderRadius,cljs.core.cst$kw$backgroundColor];
var inst_18369 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_18370 = cljs.core.PersistentHashMap.fromArrays(inst_18368,inst_18369);
var inst_18371 = figwheel.client.heads_up.set_style_BANG_(inst_18360,inst_18370);
var inst_18372 = cljs.core.async.timeout((200));
var state_18377__$1 = (function (){var statearr_18380 = state_18377;
(statearr_18380[(9)] = inst_18367);

(statearr_18380[(10)] = inst_18371);

return statearr_18380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18377__$1,(3),inst_18372);
} else {
if((state_val_18378 === (3))){
var inst_18360 = (state_18377[(7)]);
var inst_18374 = (state_18377[(2)]);
var inst_18375 = figwheel.client.heads_up.set_content_BANG_(inst_18360,"");
var state_18377__$1 = (function (){var statearr_18381 = state_18377;
(statearr_18381[(11)] = inst_18374);

return statearr_18381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18377__$1,inst_18375);
} else {
return null;
}
}
}
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__13110__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__13110__auto____0 = (function (){
var statearr_18385 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18385[(0)] = figwheel$client$heads_up$clear_$_state_machine__13110__auto__);

(statearr_18385[(1)] = (1));

return statearr_18385;
});
var figwheel$client$heads_up$clear_$_state_machine__13110__auto____1 = (function (state_18377){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_18377);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e18386){if((e18386 instanceof Object)){
var ex__13113__auto__ = e18386;
var statearr_18387_18389 = state_18377;
(statearr_18387_18389[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18377);

return cljs.core.cst$kw$recur;
} else {
throw e18386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__18390 = state_18377;
state_18377 = G__18390;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__13110__auto__ = function(state_18377){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__13110__auto____1.call(this,state_18377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__13110__auto____0;
figwheel$client$heads_up$clear_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__13110__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_18388 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_18388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_18388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$backgroundColor,"rgba(211,234,172,1.0)",cljs.core.cst$kw$width,"68px",cljs.core.cst$kw$height,"68px",cljs.core.cst$kw$paddingLeft,"0px",cljs.core.cst$kw$paddingRight,"0px",cljs.core.cst$kw$borderRadius,"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_18422){
var state_val_18423 = (state_18422[(1)]);
if((state_val_18423 === (1))){
var inst_18412 = figwheel.client.heads_up.display_loaded_start();
var state_18422__$1 = state_18422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18422__$1,(2),inst_18412);
} else {
if((state_val_18423 === (2))){
var inst_18414 = (state_18422[(2)]);
var inst_18415 = cljs.core.async.timeout((400));
var state_18422__$1 = (function (){var statearr_18424 = state_18422;
(statearr_18424[(7)] = inst_18414);

return statearr_18424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18422__$1,(3),inst_18415);
} else {
if((state_val_18423 === (3))){
var inst_18417 = (state_18422[(2)]);
var inst_18418 = figwheel.client.heads_up.clear();
var state_18422__$1 = (function (){var statearr_18425 = state_18422;
(statearr_18425[(8)] = inst_18417);

return statearr_18425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18422__$1,(4),inst_18418);
} else {
if((state_val_18423 === (4))){
var inst_18420 = (state_18422[(2)]);
var state_18422__$1 = state_18422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18422__$1,inst_18420);
} else {
return null;
}
}
}
}
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto____0 = (function (){
var statearr_18429 = [null,null,null,null,null,null,null,null,null];
(statearr_18429[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto__);

(statearr_18429[(1)] = (1));

return statearr_18429;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto____1 = (function (state_18422){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_18422);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e18430){if((e18430 instanceof Object)){
var ex__13113__auto__ = e18430;
var statearr_18431_18433 = state_18422;
(statearr_18431_18433[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18422);

return cljs.core.cst$kw$recur;
} else {
throw e18430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__18434 = state_18422;
state_18422 = G__18434;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto__ = function(state_18422){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto____1.call(this,state_18422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_18432 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_18432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_18432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
