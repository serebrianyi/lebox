// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24504_24518 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24505_24519 = null;
var count__24506_24520 = (0);
var i__24507_24521 = (0);
while(true){
if((i__24507_24521 < count__24506_24520)){
var f_24522 = cljs.core._nth.call(null,chunk__24505_24519,i__24507_24521);
cljs.core.println.call(null,"  ",f_24522);

var G__24523 = seq__24504_24518;
var G__24524 = chunk__24505_24519;
var G__24525 = count__24506_24520;
var G__24526 = (i__24507_24521 + (1));
seq__24504_24518 = G__24523;
chunk__24505_24519 = G__24524;
count__24506_24520 = G__24525;
i__24507_24521 = G__24526;
continue;
} else {
var temp__4425__auto___24527 = cljs.core.seq.call(null,seq__24504_24518);
if(temp__4425__auto___24527){
var seq__24504_24528__$1 = temp__4425__auto___24527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24504_24528__$1)){
var c__17608__auto___24529 = cljs.core.chunk_first.call(null,seq__24504_24528__$1);
var G__24530 = cljs.core.chunk_rest.call(null,seq__24504_24528__$1);
var G__24531 = c__17608__auto___24529;
var G__24532 = cljs.core.count.call(null,c__17608__auto___24529);
var G__24533 = (0);
seq__24504_24518 = G__24530;
chunk__24505_24519 = G__24531;
count__24506_24520 = G__24532;
i__24507_24521 = G__24533;
continue;
} else {
var f_24534 = cljs.core.first.call(null,seq__24504_24528__$1);
cljs.core.println.call(null,"  ",f_24534);

var G__24535 = cljs.core.next.call(null,seq__24504_24528__$1);
var G__24536 = null;
var G__24537 = (0);
var G__24538 = (0);
seq__24504_24518 = G__24535;
chunk__24505_24519 = G__24536;
count__24506_24520 = G__24537;
i__24507_24521 = G__24538;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24539 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24539);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24539)))?cljs.core.second.call(null,arglists_24539):arglists_24539));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24508 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24509 = null;
var count__24510 = (0);
var i__24511 = (0);
while(true){
if((i__24511 < count__24510)){
var vec__24512 = cljs.core._nth.call(null,chunk__24509,i__24511);
var name = cljs.core.nth.call(null,vec__24512,(0),null);
var map__24513 = cljs.core.nth.call(null,vec__24512,(1),null);
var map__24513__$1 = ((((!((map__24513 == null)))?((((map__24513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24513):map__24513);
var doc = cljs.core.get.call(null,map__24513__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24513__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24540 = seq__24508;
var G__24541 = chunk__24509;
var G__24542 = count__24510;
var G__24543 = (i__24511 + (1));
seq__24508 = G__24540;
chunk__24509 = G__24541;
count__24510 = G__24542;
i__24511 = G__24543;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24508);
if(temp__4425__auto__){
var seq__24508__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24508__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__24508__$1);
var G__24544 = cljs.core.chunk_rest.call(null,seq__24508__$1);
var G__24545 = c__17608__auto__;
var G__24546 = cljs.core.count.call(null,c__17608__auto__);
var G__24547 = (0);
seq__24508 = G__24544;
chunk__24509 = G__24545;
count__24510 = G__24546;
i__24511 = G__24547;
continue;
} else {
var vec__24515 = cljs.core.first.call(null,seq__24508__$1);
var name = cljs.core.nth.call(null,vec__24515,(0),null);
var map__24516 = cljs.core.nth.call(null,vec__24515,(1),null);
var map__24516__$1 = ((((!((map__24516 == null)))?((((map__24516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24516):map__24516);
var doc = cljs.core.get.call(null,map__24516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24548 = cljs.core.next.call(null,seq__24508__$1);
var G__24549 = null;
var G__24550 = (0);
var G__24551 = (0);
seq__24508 = G__24548;
chunk__24509 = G__24549;
count__24510 = G__24550;
i__24511 = G__24551;
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
}
});

//# sourceMappingURL=repl.js.map