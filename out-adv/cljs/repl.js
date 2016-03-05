// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4425__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__17990_18004 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17991_18005 = null;
var count__17992_18006 = (0);
var i__17993_18007 = (0);
while(true){
if((i__17993_18007 < count__17992_18006)){
var f_18008 = chunk__17991_18005.cljs$core$IIndexed$_nth$arity$2(null,i__17993_18007);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_18008], 0));

var G__18009 = seq__17990_18004;
var G__18010 = chunk__17991_18005;
var G__18011 = count__17992_18006;
var G__18012 = (i__17993_18007 + (1));
seq__17990_18004 = G__18009;
chunk__17991_18005 = G__18010;
count__17992_18006 = G__18011;
i__17993_18007 = G__18012;
continue;
} else {
var temp__4425__auto___18013 = cljs.core.seq(seq__17990_18004);
if(temp__4425__auto___18013){
var seq__17990_18014__$1 = temp__4425__auto___18013;
if(cljs.core.chunked_seq_QMARK_(seq__17990_18014__$1)){
var c__5474__auto___18015 = cljs.core.chunk_first(seq__17990_18014__$1);
var G__18016 = cljs.core.chunk_rest(seq__17990_18014__$1);
var G__18017 = c__5474__auto___18015;
var G__18018 = cljs.core.count(c__5474__auto___18015);
var G__18019 = (0);
seq__17990_18004 = G__18016;
chunk__17991_18005 = G__18017;
count__17992_18006 = G__18018;
i__17993_18007 = G__18019;
continue;
} else {
var f_18020 = cljs.core.first(seq__17990_18014__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_18020], 0));

var G__18021 = cljs.core.next(seq__17990_18014__$1);
var G__18022 = null;
var G__18023 = (0);
var G__18024 = (0);
seq__17990_18004 = G__18021;
chunk__17991_18005 = G__18022;
count__17992_18006 = G__18023;
i__17993_18007 = G__18024;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18025 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_18025], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18025)))?cljs.core.second(arglists_18025):arglists_18025)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__17994 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17995 = null;
var count__17996 = (0);
var i__17997 = (0);
while(true){
if((i__17997 < count__17996)){
var vec__17998 = chunk__17995.cljs$core$IIndexed$_nth$arity$2(null,i__17997);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17998,(0),null);
var map__17999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17998,(1),null);
var map__17999__$1 = ((((!((map__17999 == null)))?((((map__17999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17999):map__17999);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17999__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17999__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__18026 = seq__17994;
var G__18027 = chunk__17995;
var G__18028 = count__17996;
var G__18029 = (i__17997 + (1));
seq__17994 = G__18026;
chunk__17995 = G__18027;
count__17996 = G__18028;
i__17997 = G__18029;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__17994);
if(temp__4425__auto__){
var seq__17994__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17994__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__17994__$1);
var G__18030 = cljs.core.chunk_rest(seq__17994__$1);
var G__18031 = c__5474__auto__;
var G__18032 = cljs.core.count(c__5474__auto__);
var G__18033 = (0);
seq__17994 = G__18030;
chunk__17995 = G__18031;
count__17996 = G__18032;
i__17997 = G__18033;
continue;
} else {
var vec__18001 = cljs.core.first(seq__17994__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18001,(0),null);
var map__18002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18001,(1),null);
var map__18002__$1 = ((((!((map__18002 == null)))?((((map__18002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18002):map__18002);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18002__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18002__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__18034 = cljs.core.next(seq__17994__$1);
var G__18035 = null;
var G__18036 = (0);
var G__18037 = (0);
seq__17994 = G__18034;
chunk__17995 = G__18035;
count__17996 = G__18036;
i__17997 = G__18037;
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
