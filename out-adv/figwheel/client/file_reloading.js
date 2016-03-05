// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = (function (){var G__16197 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16197) : cljs.core.atom.call(null,G__16197));
})();
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event("figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event("figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4671__auto__ = (cljs.core.map_QMARK_(m)) && (typeof cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$namespace));
if(or__4671__auto__){
return or__4671__auto__;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Error not namespace-file-map",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0))], 0));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path(ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace(url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4671__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16200_SHARP_){
return cljs.core.not(figwheel.client.file_reloading.immutable_ns_QMARK_(p1__16200_SHARP_));
}),(function (){var G__16202 = (goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path(ns)]);
return goog.object.getKeys(G__16202);
})()));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = (function (){var G__16203 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pathToName,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$dependents,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16203) : cljs.core.atom.call(null,G__16203));
})();
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pathToName,path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([cljs.core.PersistentHashSet.fromArray([name], true)], 0));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = (function (){var G__16208 = goog.dependencies_.nameToPath;
var G__16209 = ((function (G__16208){
return (function (v,k,o){
return goog.string.startsWith(v,"../");
});})(G__16208))
;
return goog.object.filter(G__16208,G__16209);
})();
var G__16210 = nameToPath;
var G__16211 = ((function (G__16210,nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_(v,k);
});})(G__16210,nameToPath))
;
return goog.object.forEach(G__16210,G__16211);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.dependency_data) : cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pathToName,path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dependents,ns], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([cljs.core.PersistentHashSet.fromArray([parent_ns], true)], 0));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = (function (){var G__16236 = goog.dependencies_.requires;
var G__16237 = ((function (G__16236){
return (function (v,k,o){
return goog.string.startsWith(k,"../");
});})(G__16236))
;
return goog.object.filter(G__16236,G__16237);
})();
var G__16248 = requires;
var G__16249 = ((function (G__16248,requires){
return (function (v,k,_){
var G__16254 = v;
var G__16255 = ((function (G__16254,G__16248,requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__16256 = cljs.core.seq(figwheel.client.file_reloading.path__GT_name(k));
var chunk__16257 = null;
var count__16258 = (0);
var i__16259 = (0);
while(true){
if((i__16259 < count__16258)){
var n = chunk__16257.cljs$core$IIndexed$_nth$arity$2(null,i__16259);
figwheel.client.file_reloading.name_to_parent_BANG_(k_SINGLEQUOTE_,n);

var G__16260 = seq__16256;
var G__16261 = chunk__16257;
var G__16262 = count__16258;
var G__16263 = (i__16259 + (1));
seq__16256 = G__16260;
chunk__16257 = G__16261;
count__16258 = G__16262;
i__16259 = G__16263;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16256);
if(temp__4425__auto__){
var seq__16256__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16256__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__16256__$1);
var G__16264 = cljs.core.chunk_rest(seq__16256__$1);
var G__16265 = c__5474__auto__;
var G__16266 = cljs.core.count(c__5474__auto__);
var G__16267 = (0);
seq__16256 = G__16264;
chunk__16257 = G__16265;
count__16258 = G__16266;
i__16259 = G__16267;
continue;
} else {
var n = cljs.core.first(seq__16256__$1);
figwheel.client.file_reloading.name_to_parent_BANG_(k_SINGLEQUOTE_,n);

var G__16268 = cljs.core.next(seq__16256__$1);
var G__16269 = null;
var G__16270 = (0);
var G__16271 = (0);
seq__16256 = G__16268;
chunk__16257 = G__16269;
count__16258 = G__16270;
i__16259 = G__16271;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__16254,G__16248,requires))
;
return goog.object.forEach(G__16254,G__16255);
});})(G__16248,requires))
;
return goog.object.forEach(G__16248,G__16249);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.dependency_data) : cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dependents,ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize(get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = (get_deps__$1.cljs$core$IFn$_invoke$arity$1 ? get_deps__$1.cljs$core$IFn$_invoke$arity$1(x) : get_deps__$1.call(null,x));
if(cljs.core.empty_QMARK_(deps)){
return null;
} else {
return topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3(deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3(deps,(0),(function (){var G__16340 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16340) : cljs.core.atom.call(null,G__16340));
})());
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([deps], 0));

var seq__16341_16349 = cljs.core.seq(deps);
var chunk__16342_16350 = null;
var count__16343_16351 = (0);
var i__16344_16352 = (0);
while(true){
if((i__16344_16352 < count__16343_16351)){
var dep_16353 = chunk__16342_16350.cljs$core$IIndexed$_nth$arity$2(null,i__16344_16352);
topo_sort_helper_STAR_(dep_16353,(depth + (1)),state);

var G__16354 = seq__16341_16349;
var G__16355 = chunk__16342_16350;
var G__16356 = count__16343_16351;
var G__16357 = (i__16344_16352 + (1));
seq__16341_16349 = G__16354;
chunk__16342_16350 = G__16355;
count__16343_16351 = G__16356;
i__16344_16352 = G__16357;
continue;
} else {
var temp__4425__auto___16358 = cljs.core.seq(seq__16341_16349);
if(temp__4425__auto___16358){
var seq__16341_16359__$1 = temp__4425__auto___16358;
if(cljs.core.chunked_seq_QMARK_(seq__16341_16359__$1)){
var c__5474__auto___16360 = cljs.core.chunk_first(seq__16341_16359__$1);
var G__16361 = cljs.core.chunk_rest(seq__16341_16359__$1);
var G__16362 = c__5474__auto___16360;
var G__16363 = cljs.core.count(c__5474__auto___16360);
var G__16364 = (0);
seq__16341_16349 = G__16361;
chunk__16342_16350 = G__16362;
count__16343_16351 = G__16363;
i__16344_16352 = G__16364;
continue;
} else {
var dep_16365 = cljs.core.first(seq__16341_16359__$1);
topo_sort_helper_STAR_(dep_16365,(depth + (1)),state);

var G__16366 = cljs.core.next(seq__16341_16359__$1);
var G__16367 = null;
var G__16368 = (0);
var G__16369 = (0);
seq__16341_16349 = G__16366;
chunk__16342_16350 = G__16367;
count__16343_16351 = G__16368;
i__16344_16352 = G__16369;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0))){
return elim_dups_STAR_(cljs.core.reverse(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__16345){
var vec__16348 = p__16345;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16348,(0),null);
var xs = cljs.core.nthnext(vec__16348,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons(x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__16348,x,xs,get_deps__$1){
return (function (p1__16272_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(p1__16272_SHARP_,x);
});})(vec__16348,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort(figwheel.client.file_reloading.get_requires);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__16371 = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null));
return (topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__16371) : topo_sort_SINGLEQUOTE_.call(null,G__16371));
})());
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort(figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__16373 = cljs.core.set(nss);
return (topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__16373) : topo_sort_SINGLEQUOTE_.call(null,G__16373));
})()));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path(ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

var G__16376 = goog.dependencies_.written;
var G__16377 = [cljs.core.str(goog.basePath),cljs.core.str(path)].join('');
return goog.object.remove(G__16376,G__16377);
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path(ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__16390 = cljs.core.seq(provides);
var chunk__16391 = null;
var count__16392 = (0);
var i__16393 = (0);
while(true){
if((i__16393 < count__16392)){
var prov = chunk__16391.cljs$core$IIndexed$_nth$arity$2(null,i__16393);
figwheel.client.file_reloading.path_to_name_BANG_(path,prov);

var seq__16394_16402 = cljs.core.seq(requires);
var chunk__16395_16403 = null;
var count__16396_16404 = (0);
var i__16397_16405 = (0);
while(true){
if((i__16397_16405 < count__16396_16404)){
var req_16406 = chunk__16395_16403.cljs$core$IIndexed$_nth$arity$2(null,i__16397_16405);
figwheel.client.file_reloading.name_to_parent_BANG_(req_16406,prov);

var G__16407 = seq__16394_16402;
var G__16408 = chunk__16395_16403;
var G__16409 = count__16396_16404;
var G__16410 = (i__16397_16405 + (1));
seq__16394_16402 = G__16407;
chunk__16395_16403 = G__16408;
count__16396_16404 = G__16409;
i__16397_16405 = G__16410;
continue;
} else {
var temp__4425__auto___16411 = cljs.core.seq(seq__16394_16402);
if(temp__4425__auto___16411){
var seq__16394_16412__$1 = temp__4425__auto___16411;
if(cljs.core.chunked_seq_QMARK_(seq__16394_16412__$1)){
var c__5474__auto___16413 = cljs.core.chunk_first(seq__16394_16412__$1);
var G__16414 = cljs.core.chunk_rest(seq__16394_16412__$1);
var G__16415 = c__5474__auto___16413;
var G__16416 = cljs.core.count(c__5474__auto___16413);
var G__16417 = (0);
seq__16394_16402 = G__16414;
chunk__16395_16403 = G__16415;
count__16396_16404 = G__16416;
i__16397_16405 = G__16417;
continue;
} else {
var req_16418 = cljs.core.first(seq__16394_16412__$1);
figwheel.client.file_reloading.name_to_parent_BANG_(req_16418,prov);

var G__16419 = cljs.core.next(seq__16394_16412__$1);
var G__16420 = null;
var G__16421 = (0);
var G__16422 = (0);
seq__16394_16402 = G__16419;
chunk__16395_16403 = G__16420;
count__16396_16404 = G__16421;
i__16397_16405 = G__16422;
continue;
}
} else {
}
}
break;
}

var G__16423 = seq__16390;
var G__16424 = chunk__16391;
var G__16425 = count__16392;
var G__16426 = (i__16393 + (1));
seq__16390 = G__16423;
chunk__16391 = G__16424;
count__16392 = G__16425;
i__16393 = G__16426;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16390);
if(temp__4425__auto__){
var seq__16390__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16390__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__16390__$1);
var G__16427 = cljs.core.chunk_rest(seq__16390__$1);
var G__16428 = c__5474__auto__;
var G__16429 = cljs.core.count(c__5474__auto__);
var G__16430 = (0);
seq__16390 = G__16427;
chunk__16391 = G__16428;
count__16392 = G__16429;
i__16393 = G__16430;
continue;
} else {
var prov = cljs.core.first(seq__16390__$1);
figwheel.client.file_reloading.path_to_name_BANG_(path,prov);

var seq__16398_16431 = cljs.core.seq(requires);
var chunk__16399_16432 = null;
var count__16400_16433 = (0);
var i__16401_16434 = (0);
while(true){
if((i__16401_16434 < count__16400_16433)){
var req_16435 = chunk__16399_16432.cljs$core$IIndexed$_nth$arity$2(null,i__16401_16434);
figwheel.client.file_reloading.name_to_parent_BANG_(req_16435,prov);

var G__16436 = seq__16398_16431;
var G__16437 = chunk__16399_16432;
var G__16438 = count__16400_16433;
var G__16439 = (i__16401_16434 + (1));
seq__16398_16431 = G__16436;
chunk__16399_16432 = G__16437;
count__16400_16433 = G__16438;
i__16401_16434 = G__16439;
continue;
} else {
var temp__4425__auto___16440__$1 = cljs.core.seq(seq__16398_16431);
if(temp__4425__auto___16440__$1){
var seq__16398_16441__$1 = temp__4425__auto___16440__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16398_16441__$1)){
var c__5474__auto___16442 = cljs.core.chunk_first(seq__16398_16441__$1);
var G__16443 = cljs.core.chunk_rest(seq__16398_16441__$1);
var G__16444 = c__5474__auto___16442;
var G__16445 = cljs.core.count(c__5474__auto___16442);
var G__16446 = (0);
seq__16398_16431 = G__16443;
chunk__16399_16432 = G__16444;
count__16400_16433 = G__16445;
i__16401_16434 = G__16446;
continue;
} else {
var req_16447 = cljs.core.first(seq__16398_16441__$1);
figwheel.client.file_reloading.name_to_parent_BANG_(req_16447,prov);

var G__16448 = cljs.core.next(seq__16398_16441__$1);
var G__16449 = null;
var G__16450 = (0);
var G__16451 = (0);
seq__16398_16431 = G__16448;
chunk__16399_16432 = G__16449;
count__16400_16433 = G__16450;
i__16401_16434 = G__16451;
continue;
}
} else {
}
}
break;
}

var G__16452 = cljs.core.next(seq__16390__$1);
var G__16453 = null;
var G__16454 = (0);
var G__16455 = (0);
seq__16390 = G__16452;
chunk__16391 = G__16453;
count__16392 = G__16454;
i__16393 = G__16455;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
var seq__16460_16464 = cljs.core.seq(figwheel.client.file_reloading.get_all_dependencies(src));
var chunk__16461_16465 = null;
var count__16462_16466 = (0);
var i__16463_16467 = (0);
while(true){
if((i__16463_16467 < count__16462_16466)){
var ns_16468 = chunk__16461_16465.cljs$core$IIndexed$_nth$arity$2(null,i__16463_16467);
figwheel.client.file_reloading.unprovide_BANG_(ns_16468);

var G__16469 = seq__16460_16464;
var G__16470 = chunk__16461_16465;
var G__16471 = count__16462_16466;
var G__16472 = (i__16463_16467 + (1));
seq__16460_16464 = G__16469;
chunk__16461_16465 = G__16470;
count__16462_16466 = G__16471;
i__16463_16467 = G__16472;
continue;
} else {
var temp__4425__auto___16473 = cljs.core.seq(seq__16460_16464);
if(temp__4425__auto___16473){
var seq__16460_16474__$1 = temp__4425__auto___16473;
if(cljs.core.chunked_seq_QMARK_(seq__16460_16474__$1)){
var c__5474__auto___16475 = cljs.core.chunk_first(seq__16460_16474__$1);
var G__16476 = cljs.core.chunk_rest(seq__16460_16474__$1);
var G__16477 = c__5474__auto___16475;
var G__16478 = cljs.core.count(c__5474__auto___16475);
var G__16479 = (0);
seq__16460_16464 = G__16476;
chunk__16461_16465 = G__16477;
count__16462_16466 = G__16478;
i__16463_16467 = G__16479;
continue;
} else {
var ns_16480 = cljs.core.first(seq__16460_16474__$1);
figwheel.client.file_reloading.unprovide_BANG_(ns_16480);

var G__16481 = cljs.core.next(seq__16460_16474__$1);
var G__16482 = null;
var G__16483 = (0);
var G__16484 = (0);
seq__16460_16464 = G__16481;
chunk__16461_16465 = G__16482;
count__16462_16466 = G__16483;
i__16463_16467 = G__16484;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_(src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4671__auto__ = goog.require__;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_();

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_();

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__16485__delegate = function (args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.addDependency_figwheel_backup_,args);
};
var G__16485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16486__i = 0, G__16486__a = new Array(arguments.length -  0);
while (G__16486__i < G__16486__a.length) {G__16486__a[G__16486__i] = arguments[G__16486__i + 0]; ++G__16486__i;}
  args = new cljs.core.IndexedSeq(G__16486__a,0);
} 
return G__16485__delegate.call(this,args);};
G__16485.cljs$lang$maxFixedArity = 0;
G__16485.cljs$lang$applyTo = (function (arglist__16487){
var args = cljs.core.seq(arglist__16487);
return G__16485__delegate(args);
});
G__16485.cljs$core$IFn$_invoke$arity$variadic = G__16485__delegate;
return G__16485;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base();

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__16489 = cljs.core._EQ_;
var expr__16490 = figwheel.client.utils.host_env_QMARK_();
if(cljs.core.truth_((pred__16489.cljs$core$IFn$_invoke$arity$2 ? pred__16489.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$node,expr__16490) : pred__16489.call(null,cljs.core.cst$kw$node,expr__16490)))){
var path_parts = ((function (pred__16489,expr__16490){
return (function (p1__16488_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__16488_SHARP_,/[\/\\]/);
});})(pred__16489,expr__16490))
;
var sep = (cljs.core.truth_(cljs.core.re_matches(/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.pop(cljs.core.pop(path_parts(__dirname))));
return ((function (path_parts,sep,root,pred__16489,expr__16490){
return (function (request_url,callback){

var cache_path = clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons(root,path_parts(figwheel.client.file_reloading.fix_node_request_url(request_url))));
(require.cache[cache_path] = null);

var G__16493 = (function (){try{return require(cache_path);
}catch (e16494){if((e16494 instanceof Error)){
var e = e16494;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e16494;

}
}})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__16493) : callback.call(null,G__16493));
});
;})(path_parts,sep,root,pred__16489,expr__16490))
} else {
if(cljs.core.truth_((pred__16489.cljs$core$IFn$_invoke$arity$2 ? pred__16489.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$html,expr__16490) : pred__16489.call(null,cljs.core.cst$kw$html,expr__16490)))){
return ((function (pred__16489,expr__16490){
return (function (request_url,callback){

var deferred = (function (){var G__16495 = figwheel.client.file_reloading.add_cache_buster(request_url);
var G__16496 = {"cleanupWhenDone": true};
return goog.net.jsloader.load(G__16495,G__16496);
})();
deferred.addCallback(((function (deferred,pred__16489,expr__16490){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__16489,expr__16490))
);

return deferred.addErrback(((function (deferred,pred__16489,expr__16490){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__16489,expr__16490))
);
});
;})(pred__16489,expr__16490))
} else {
return ((function (pred__16489,expr__16490){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__16489,expr__16490))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__16497,callback){
var map__16502 = p__16497;
var map__16502__$1 = ((((!((map__16502 == null)))?((((map__16502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16502):map__16502);
var file_msg = map__16502__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16502__$1,cljs.core.cst$kw$request_DASH_url);

figwheel.client.utils.debug_prn([cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

var G__16504 = request_url;
var G__16505 = ((function (G__16504,map__16502,map__16502__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn([cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file_msg,cljs.core.cst$kw$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(G__16504,map__16502,map__16502__$1,file_msg,request_url))
;
return (figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 ? figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2(G__16504,G__16505) : figwheel.client.file_reloading.reload_file_STAR_.call(null,G__16504,G__16505));
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = (function (){var G__16506 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16506) : cljs.core.atom.call(null,G__16506));
})();
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = (function (){var G__16507 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16507) : cljs.core.atom.call(null,G__16507));
})();
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
figwheel.client.file_reloading.reload_file(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request_DASH_url,url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,file_msg);

return cljs.core.async.close_BANG_(out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_16530){
var state_val_16531 = (state_16530[(1)]);
if((state_val_16531 === (7))){
var inst_16526 = (state_16530[(2)]);
var state_16530__$1 = state_16530;
var statearr_16532_16552 = state_16530__$1;
(statearr_16532_16552[(2)] = inst_16526);

(statearr_16532_16552[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16531 === (1))){
var state_16530__$1 = state_16530;
var statearr_16533_16553 = state_16530__$1;
(statearr_16533_16553[(2)] = null);

(statearr_16533_16553[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16531 === (4))){
var inst_16510 = (state_16530[(7)]);
var inst_16510__$1 = (state_16530[(2)]);
var state_16530__$1 = (function (){var statearr_16534 = state_16530;
(statearr_16534[(7)] = inst_16510__$1);

return statearr_16534;
})();
if(cljs.core.truth_(inst_16510__$1)){
var statearr_16535_16554 = state_16530__$1;
(statearr_16535_16554[(1)] = (5));

} else {
var statearr_16536_16555 = state_16530__$1;
(statearr_16536_16555[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16531 === (6))){
var state_16530__$1 = state_16530;
var statearr_16537_16556 = state_16530__$1;
(statearr_16537_16556[(2)] = null);

(statearr_16537_16556[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16531 === (3))){
var inst_16528 = (state_16530[(2)]);
var state_16530__$1 = state_16530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16530__$1,inst_16528);
} else {
if((state_val_16531 === (2))){
var state_16530__$1 = state_16530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16530__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_16531 === (11))){
var inst_16522 = (state_16530[(2)]);
var state_16530__$1 = (function (){var statearr_16538 = state_16530;
(statearr_16538[(8)] = inst_16522);

return statearr_16538;
})();
var statearr_16539_16557 = state_16530__$1;
(statearr_16539_16557[(2)] = null);

(statearr_16539_16557[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16531 === (9))){
var inst_16514 = (state_16530[(9)]);
var inst_16516 = (state_16530[(10)]);
var inst_16518 = (inst_16516.cljs$core$IFn$_invoke$arity$1 ? inst_16516.cljs$core$IFn$_invoke$arity$1(inst_16514) : inst_16516.call(null,inst_16514));
var state_16530__$1 = state_16530;
var statearr_16540_16558 = state_16530__$1;
(statearr_16540_16558[(2)] = inst_16518);

(statearr_16540_16558[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16531 === (5))){
var inst_16510 = (state_16530[(7)]);
var inst_16512 = figwheel.client.file_reloading.blocking_load(inst_16510);
var state_16530__$1 = state_16530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16530__$1,(8),inst_16512);
} else {
if((state_val_16531 === (10))){
var inst_16514 = (state_16530[(9)]);
var inst_16520 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_16514);
var state_16530__$1 = state_16530;
var statearr_16541_16559 = state_16530__$1;
(statearr_16541_16559[(2)] = inst_16520);

(statearr_16541_16559[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16531 === (8))){
var inst_16510 = (state_16530[(7)]);
var inst_16516 = (state_16530[(10)]);
var inst_16514 = (state_16530[(2)]);
var inst_16515 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.on_load_callbacks) : cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks));
var inst_16516__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16515,inst_16510);
var state_16530__$1 = (function (){var statearr_16542 = state_16530;
(statearr_16542[(9)] = inst_16514);

(statearr_16542[(10)] = inst_16516__$1);

return statearr_16542;
})();
if(cljs.core.truth_(inst_16516__$1)){
var statearr_16543_16560 = state_16530__$1;
(statearr_16543_16560[(1)] = (9));

} else {
var statearr_16544_16561 = state_16530__$1;
(statearr_16544_16561[(1)] = (10));

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
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__13110__auto__ = null;
var figwheel$client$file_reloading$state_machine__13110__auto____0 = (function (){
var statearr_16548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16548[(0)] = figwheel$client$file_reloading$state_machine__13110__auto__);

(statearr_16548[(1)] = (1));

return statearr_16548;
});
var figwheel$client$file_reloading$state_machine__13110__auto____1 = (function (state_16530){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_16530);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e16549){if((e16549 instanceof Object)){
var ex__13113__auto__ = e16549;
var statearr_16550_16562 = state_16530;
(statearr_16550_16562[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16530);

return cljs.core.cst$kw$recur;
} else {
throw e16549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__16563 = state_16530;
state_16530 = G__16563;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__13110__auto__ = function(state_16530){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__13110__auto____1.call(this,state_16530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__13110__auto____0;
figwheel$client$file_reloading$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__13110__auto____1;
return figwheel$client$file_reloading$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_16551 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_16551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_16551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__16564,callback){
var map__16567 = p__16564;
var map__16567__$1 = ((((!((map__16567 == null)))?((((map__16567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16567):map__16567);
var file_msg = map__16567__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16567__$1,cljs.core.cst$kw$namespace);
var request_url = figwheel.client.file_reloading.resolve_ns(namespace);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__16567,map__16567__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([file_msg,cljs.core.select_keys(file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loaded_DASH_file], null))], 0))], null));
});})(request_url,map__16567,map__16567__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require(cljs.core.name(namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__16569){
var map__16572 = p__16569;
var map__16572__$1 = ((((!((map__16572 == null)))?((((map__16572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16572):map__16572);
var file_msg = map__16572__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16572__$1,cljs.core.cst$kw$namespace);

var meta_pragmas = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)),cljs.core.name(namespace));
var and__4659__auto__ = cljs.core.not(cljs.core.cst$kw$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__4659__auto__){
var or__4671__auto__ = cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = cljs.core.cst$kw$figwheel_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_(cljs.core.name(namespace));
}
}
} else {
return and__4659__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__16574,callback){
var map__16577 = p__16574;
var map__16577__$1 = ((((!((map__16577 == null)))?((((map__16577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16577):map__16577);
var file_msg = map__16577__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16577__$1,cljs.core.cst$kw$request_DASH_url);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16577__$1,cljs.core.cst$kw$namespace);

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_(file_msg))){
return figwheel.client.file_reloading.require_with_callback(file_msg,callback);
} else {
figwheel.client.utils.debug_prn([cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
figwheel.client.file_reloading.js_reload(file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);

return cljs.core.async.close_BANG_(out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__13223__auto___16665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___16665,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___16665,out){
return (function (state_16647){
var state_val_16648 = (state_16647[(1)]);
if((state_val_16648 === (1))){
var inst_16625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(files,(0),null);
var inst_16626 = cljs.core.nthnext(files,(1));
var inst_16627 = files;
var state_16647__$1 = (function (){var statearr_16649 = state_16647;
(statearr_16649[(7)] = inst_16625);

(statearr_16649[(8)] = inst_16627);

(statearr_16649[(9)] = inst_16626);

return statearr_16649;
})();
var statearr_16650_16666 = state_16647__$1;
(statearr_16650_16666[(2)] = null);

(statearr_16650_16666[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16648 === (2))){
var inst_16627 = (state_16647[(8)]);
var inst_16630 = (state_16647[(10)]);
var inst_16630__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16627,(0),null);
var inst_16631 = cljs.core.nthnext(inst_16627,(1));
var inst_16632 = (inst_16630__$1 == null);
var inst_16633 = cljs.core.not(inst_16632);
var state_16647__$1 = (function (){var statearr_16651 = state_16647;
(statearr_16651[(11)] = inst_16631);

(statearr_16651[(10)] = inst_16630__$1);

return statearr_16651;
})();
if(inst_16633){
var statearr_16652_16667 = state_16647__$1;
(statearr_16652_16667[(1)] = (4));

} else {
var statearr_16653_16668 = state_16647__$1;
(statearr_16653_16668[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16648 === (3))){
var inst_16645 = (state_16647[(2)]);
var state_16647__$1 = state_16647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16647__$1,inst_16645);
} else {
if((state_val_16648 === (4))){
var inst_16630 = (state_16647[(10)]);
var inst_16635 = figwheel.client.file_reloading.reload_js_file(inst_16630);
var state_16647__$1 = state_16647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16647__$1,(7),inst_16635);
} else {
if((state_val_16648 === (5))){
var inst_16641 = cljs.core.async.close_BANG_(out);
var state_16647__$1 = state_16647;
var statearr_16654_16669 = state_16647__$1;
(statearr_16654_16669[(2)] = inst_16641);

(statearr_16654_16669[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16648 === (6))){
var inst_16643 = (state_16647[(2)]);
var state_16647__$1 = state_16647;
var statearr_16655_16670 = state_16647__$1;
(statearr_16655_16670[(2)] = inst_16643);

(statearr_16655_16670[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16648 === (7))){
var inst_16631 = (state_16647[(11)]);
var inst_16637 = (state_16647[(2)]);
var inst_16638 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,inst_16637);
var inst_16627 = inst_16631;
var state_16647__$1 = (function (){var statearr_16656 = state_16647;
(statearr_16656[(12)] = inst_16638);

(statearr_16656[(8)] = inst_16627);

return statearr_16656;
})();
var statearr_16657_16671 = state_16647__$1;
(statearr_16657_16671[(2)] = null);

(statearr_16657_16671[(1)] = (2));


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
});})(c__13223__auto___16665,out))
;
return ((function (switch__13109__auto__,c__13223__auto___16665,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto____0 = (function (){
var statearr_16661 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16661[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto__);

(statearr_16661[(1)] = (1));

return statearr_16661;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto____1 = (function (state_16647){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_16647);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e16662){if((e16662 instanceof Object)){
var ex__13113__auto__ = e16662;
var statearr_16663_16672 = state_16647;
(statearr_16663_16672[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16647);

return cljs.core.cst$kw$recur;
} else {
throw e16662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__16673 = state_16647;
state_16647 = G__16673;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto__ = function(state_16647){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto____1.call(this,state_16647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___16665,out))
})();
var state__13225__auto__ = (function (){var statearr_16664 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_16664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___16665);

return statearr_16664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___16665,out))
);


return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__16674,opts){
var map__16678 = p__16674;
var map__16678__$1 = ((((!((map__16678 == null)))?((((map__16678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16678):map__16678);
var eval_body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16678__$1,cljs.core.cst$kw$eval_DASH_body);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16678__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_((function (){var and__4659__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4659__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4659__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn([cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper(code,opts);
}catch (e16680){var e = e16680;
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$namespace,files));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),cljs.core.cst$kw$namespace),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps){
return (function (p1__16681_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__16681_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$namespace,cljs.core.cst$kw$namespace,n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count(files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$namespace,files));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(keep_files,cljs.core.cst$kw$namespace),figwheel.client.file_reloading.expand_files(files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16686){
var vec__16687 = p__16686;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16687,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,k,cljs.core.cst$kw$type,cljs.core.cst$kw$namespace], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__16688){
var vec__16689 = p__16688;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16689,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16689,(1),null);
return cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(v);
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas))));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__16693,p__16694){
var map__16941 = p__16693;
var map__16941__$1 = ((((!((map__16941 == null)))?((((map__16941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16941):map__16941);
var opts = map__16941__$1;
var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16941__$1,cljs.core.cst$kw$before_DASH_jsload);
var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16941__$1,cljs.core.cst$kw$on_DASH_jsload);
var reload_dependents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16941__$1,cljs.core.cst$kw$reload_DASH_dependents);
var map__16942 = p__16694;
var map__16942__$1 = ((((!((map__16942 == null)))?((((map__16942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16942):map__16942);
var msg = map__16942__$1;
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16942__$1,cljs.core.cst$kw$files);
var figwheel_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16942__$1,cljs.core.cst$kw$figwheel_DASH_meta);
var recompile_dependents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16942__$1,cljs.core.cst$kw$recompile_DASH_dependents);
if(cljs.core.empty_QMARK_(figwheel_meta)){
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta) : cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta));
}

var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_17095){
var state_val_17096 = (state_17095[(1)]);
if((state_val_17096 === (7))){
var inst_16959 = (state_17095[(7)]);
var inst_16958 = (state_17095[(8)]);
var inst_16956 = (state_17095[(9)]);
var inst_16957 = (state_17095[(10)]);
var inst_16964 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16957,inst_16959);
var inst_16965 = figwheel.client.file_reloading.eval_body(inst_16964,opts);
var inst_16966 = (inst_16959 + (1));
var tmp17097 = inst_16958;
var tmp17098 = inst_16956;
var tmp17099 = inst_16957;
var inst_16956__$1 = tmp17098;
var inst_16957__$1 = tmp17099;
var inst_16958__$1 = tmp17097;
var inst_16959__$1 = inst_16966;
var state_17095__$1 = (function (){var statearr_17100 = state_17095;
(statearr_17100[(11)] = inst_16965);

(statearr_17100[(7)] = inst_16959__$1);

(statearr_17100[(8)] = inst_16958__$1);

(statearr_17100[(9)] = inst_16956__$1);

(statearr_17100[(10)] = inst_16957__$1);

return statearr_17100;
})();
var statearr_17101_17187 = state_17095__$1;
(statearr_17101_17187[(2)] = null);

(statearr_17101_17187[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (20))){
var inst_16999 = (state_17095[(12)]);
var inst_17007 = figwheel.client.file_reloading.sort_files(inst_16999);
var state_17095__$1 = state_17095;
var statearr_17102_17188 = state_17095__$1;
(statearr_17102_17188[(2)] = inst_17007);

(statearr_17102_17188[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (27))){
var state_17095__$1 = state_17095;
var statearr_17103_17189 = state_17095__$1;
(statearr_17103_17189[(2)] = null);

(statearr_17103_17189[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (1))){
var inst_16948 = (state_17095[(13)]);
var inst_16945 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));
var inst_16946 = figwheel.client.file_reloading.before_jsload_custom_event(files);
var inst_16947 = (function (){return ((function (inst_16948,inst_16945,inst_16946,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__16690_SHARP_){
return cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__16690_SHARP_);
});
;})(inst_16948,inst_16945,inst_16946,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_16948__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_16947,files);
var inst_16949 = cljs.core.not_empty(inst_16948__$1);
var state_17095__$1 = (function (){var statearr_17104 = state_17095;
(statearr_17104[(14)] = inst_16946);

(statearr_17104[(13)] = inst_16948__$1);

(statearr_17104[(15)] = inst_16945);

return statearr_17104;
})();
if(cljs.core.truth_(inst_16949)){
var statearr_17105_17190 = state_17095__$1;
(statearr_17105_17190[(1)] = (2));

} else {
var statearr_17106_17191 = state_17095__$1;
(statearr_17106_17191[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (24))){
var state_17095__$1 = state_17095;
var statearr_17107_17192 = state_17095__$1;
(statearr_17107_17192[(2)] = null);

(statearr_17107_17192[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (39))){
var inst_17049 = (state_17095[(16)]);
var state_17095__$1 = state_17095;
var statearr_17108_17193 = state_17095__$1;
(statearr_17108_17193[(2)] = inst_17049);

(statearr_17108_17193[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (46))){
var inst_17090 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17109_17194 = state_17095__$1;
(statearr_17109_17194[(2)] = inst_17090);

(statearr_17109_17194[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (4))){
var inst_16993 = (state_17095[(2)]);
var inst_16994 = cljs.core.List.EMPTY;
var inst_16995 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.dependencies_loaded,inst_16994) : cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_16994));
var inst_16996 = (function (){return ((function (inst_16993,inst_16994,inst_16995,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__16691_SHARP_){
var and__4659__auto__ = cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__16691_SHARP_);
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not(cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__16691_SHARP_));
} else {
return and__4659__auto__;
}
});
;})(inst_16993,inst_16994,inst_16995,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_16997 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_16996,files);
var inst_16998 = figwheel.client.file_reloading.get_figwheel_always();
var inst_16999 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_16997,inst_16998);
var state_17095__$1 = (function (){var statearr_17110 = state_17095;
(statearr_17110[(17)] = inst_16993);

(statearr_17110[(12)] = inst_16999);

(statearr_17110[(18)] = inst_16995);

return statearr_17110;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_17111_17195 = state_17095__$1;
(statearr_17111_17195[(1)] = (16));

} else {
var statearr_17112_17196 = state_17095__$1;
(statearr_17112_17196[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (15))){
var inst_16983 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17113_17197 = state_17095__$1;
(statearr_17113_17197[(2)] = inst_16983);

(statearr_17113_17197[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (21))){
var inst_17009 = (state_17095[(19)]);
var inst_17009__$1 = (state_17095[(2)]);
var inst_17010 = figwheel.client.file_reloading.load_all_js_files(inst_17009__$1);
var state_17095__$1 = (function (){var statearr_17114 = state_17095;
(statearr_17114[(19)] = inst_17009__$1);

return statearr_17114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17095__$1,(22),inst_17010);
} else {
if((state_val_17096 === (31))){
var inst_17093 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17095__$1,inst_17093);
} else {
if((state_val_17096 === (32))){
var inst_17049 = (state_17095[(16)]);
var inst_17054 = inst_17049.cljs$lang$protocol_mask$partition0$;
var inst_17055 = (inst_17054 & (64));
var inst_17056 = inst_17049.cljs$core$ISeq$;
var inst_17057 = (inst_17055) || (inst_17056);
var state_17095__$1 = state_17095;
if(cljs.core.truth_(inst_17057)){
var statearr_17115_17198 = state_17095__$1;
(statearr_17115_17198[(1)] = (35));

} else {
var statearr_17116_17199 = state_17095__$1;
(statearr_17116_17199[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (40))){
var inst_17070 = (state_17095[(20)]);
var inst_17069 = (state_17095[(2)]);
var inst_17070__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17069,cljs.core.cst$kw$figwheel_DASH_no_DASH_load);
var inst_17071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17069,cljs.core.cst$kw$not_DASH_required);
var inst_17072 = cljs.core.not_empty(inst_17070__$1);
var state_17095__$1 = (function (){var statearr_17117 = state_17095;
(statearr_17117[(21)] = inst_17071);

(statearr_17117[(20)] = inst_17070__$1);

return statearr_17117;
})();
if(cljs.core.truth_(inst_17072)){
var statearr_17118_17200 = state_17095__$1;
(statearr_17118_17200[(1)] = (41));

} else {
var statearr_17119_17201 = state_17095__$1;
(statearr_17119_17201[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (33))){
var state_17095__$1 = state_17095;
var statearr_17120_17202 = state_17095__$1;
(statearr_17120_17202[(2)] = false);

(statearr_17120_17202[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (13))){
var inst_16969 = (state_17095[(22)]);
var inst_16973 = cljs.core.chunk_first(inst_16969);
var inst_16974 = cljs.core.chunk_rest(inst_16969);
var inst_16975 = cljs.core.count(inst_16973);
var inst_16956 = inst_16974;
var inst_16957 = inst_16973;
var inst_16958 = inst_16975;
var inst_16959 = (0);
var state_17095__$1 = (function (){var statearr_17121 = state_17095;
(statearr_17121[(7)] = inst_16959);

(statearr_17121[(8)] = inst_16958);

(statearr_17121[(9)] = inst_16956);

(statearr_17121[(10)] = inst_16957);

return statearr_17121;
})();
var statearr_17122_17203 = state_17095__$1;
(statearr_17122_17203[(2)] = null);

(statearr_17122_17203[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (22))){
var inst_17017 = (state_17095[(23)]);
var inst_17009 = (state_17095[(19)]);
var inst_17012 = (state_17095[(24)]);
var inst_17013 = (state_17095[(25)]);
var inst_17012__$1 = (state_17095[(2)]);
var inst_17013__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loaded_DASH_file,inst_17012__$1);
var inst_17014 = (function (){var all_files = inst_17009;
var res_SINGLEQUOTE_ = inst_17012__$1;
var res = inst_17013__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_17017,inst_17009,inst_17012,inst_17013,inst_17012__$1,inst_17013__$1,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__16692_SHARP_){
return cljs.core.not(cljs.core.cst$kw$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__16692_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_17017,inst_17009,inst_17012,inst_17013,inst_17012__$1,inst_17013__$1,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_17015 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_17014,inst_17012__$1);
var inst_17016 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.dependencies_loaded) : cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded));
var inst_17017__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loaded_DASH_file,inst_17016);
var inst_17018 = cljs.core.not_empty(inst_17017__$1);
var state_17095__$1 = (function (){var statearr_17123 = state_17095;
(statearr_17123[(26)] = inst_17015);

(statearr_17123[(23)] = inst_17017__$1);

(statearr_17123[(24)] = inst_17012__$1);

(statearr_17123[(25)] = inst_17013__$1);

return statearr_17123;
})();
if(cljs.core.truth_(inst_17018)){
var statearr_17124_17204 = state_17095__$1;
(statearr_17124_17204[(1)] = (23));

} else {
var statearr_17125_17205 = state_17095__$1;
(statearr_17125_17205[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (36))){
var state_17095__$1 = state_17095;
var statearr_17126_17206 = state_17095__$1;
(statearr_17126_17206[(2)] = false);

(statearr_17126_17206[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (41))){
var inst_17070 = (state_17095[(20)]);
var inst_17074 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.name__GT_path,cljs.core.cst$kw$namespace);
var inst_17075 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_17074,inst_17070);
var inst_17076 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_17075], 0));
var inst_17077 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_17076)].join('');
var inst_17078 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_17077);
var state_17095__$1 = state_17095;
var statearr_17127_17207 = state_17095__$1;
(statearr_17127_17207[(2)] = inst_17078);

(statearr_17127_17207[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (43))){
var inst_17071 = (state_17095[(21)]);
var inst_17081 = (state_17095[(2)]);
var inst_17082 = cljs.core.not_empty(inst_17071);
var state_17095__$1 = (function (){var statearr_17128 = state_17095;
(statearr_17128[(27)] = inst_17081);

return statearr_17128;
})();
if(cljs.core.truth_(inst_17082)){
var statearr_17129_17208 = state_17095__$1;
(statearr_17129_17208[(1)] = (44));

} else {
var statearr_17130_17209 = state_17095__$1;
(statearr_17130_17209[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (29))){
var inst_17015 = (state_17095[(26)]);
var inst_17049 = (state_17095[(16)]);
var inst_17017 = (state_17095[(23)]);
var inst_17009 = (state_17095[(19)]);
var inst_17012 = (state_17095[(24)]);
var inst_17013 = (state_17095[(25)]);
var inst_17045 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: NOT loading these files ");
var inst_17048 = (function (){var all_files = inst_17009;
var res_SINGLEQUOTE_ = inst_17012;
var res = inst_17013;
var files_not_loaded = inst_17015;
var dependencies_that_loaded = inst_17017;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_17015,inst_17049,inst_17017,inst_17009,inst_17012,inst_17013,inst_17045,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__17047){
var map__17131 = p__17047;
var map__17131__$1 = ((((!((map__17131 == null)))?((((map__17131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17131):map__17131);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17131__$1,cljs.core.cst$kw$namespace);
var meta_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)),cljs.core.name(namespace));
if((meta_data == null)){
return cljs.core.cst$kw$not_DASH_required;
} else {
if(cljs.core.truth_((meta_data.cljs$core$IFn$_invoke$arity$1 ? meta_data.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$figwheel_DASH_no_DASH_load) : meta_data.call(null,cljs.core.cst$kw$figwheel_DASH_no_DASH_load)))){
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load;
} else {
return cljs.core.cst$kw$not_DASH_required;

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_17015,inst_17049,inst_17017,inst_17009,inst_17012,inst_17013,inst_17045,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_17049__$1 = cljs.core.group_by(inst_17048,inst_17015);
var inst_17051 = (inst_17049__$1 == null);
var inst_17052 = cljs.core.not(inst_17051);
var state_17095__$1 = (function (){var statearr_17133 = state_17095;
(statearr_17133[(16)] = inst_17049__$1);

(statearr_17133[(28)] = inst_17045);

return statearr_17133;
})();
if(inst_17052){
var statearr_17134_17210 = state_17095__$1;
(statearr_17134_17210[(1)] = (32));

} else {
var statearr_17135_17211 = state_17095__$1;
(statearr_17135_17211[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (44))){
var inst_17071 = (state_17095[(21)]);
var inst_17084 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file,inst_17071);
var inst_17085 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_17084], 0));
var inst_17086 = [cljs.core.str("not required: "),cljs.core.str(inst_17085)].join('');
var inst_17087 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_17086);
var state_17095__$1 = state_17095;
var statearr_17136_17212 = state_17095__$1;
(statearr_17136_17212[(2)] = inst_17087);

(statearr_17136_17212[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (6))){
var inst_16990 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17137_17213 = state_17095__$1;
(statearr_17137_17213[(2)] = inst_16990);

(statearr_17137_17213[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (28))){
var inst_17015 = (state_17095[(26)]);
var inst_17042 = (state_17095[(2)]);
var inst_17043 = cljs.core.not_empty(inst_17015);
var state_17095__$1 = (function (){var statearr_17138 = state_17095;
(statearr_17138[(29)] = inst_17042);

return statearr_17138;
})();
if(cljs.core.truth_(inst_17043)){
var statearr_17139_17214 = state_17095__$1;
(statearr_17139_17214[(1)] = (29));

} else {
var statearr_17140_17215 = state_17095__$1;
(statearr_17140_17215[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (25))){
var inst_17013 = (state_17095[(25)]);
var inst_17029 = (state_17095[(2)]);
var inst_17030 = cljs.core.not_empty(inst_17013);
var state_17095__$1 = (function (){var statearr_17141 = state_17095;
(statearr_17141[(30)] = inst_17029);

return statearr_17141;
})();
if(cljs.core.truth_(inst_17030)){
var statearr_17142_17216 = state_17095__$1;
(statearr_17142_17216[(1)] = (26));

} else {
var statearr_17143_17217 = state_17095__$1;
(statearr_17143_17217[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (34))){
var inst_17064 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
if(cljs.core.truth_(inst_17064)){
var statearr_17144_17218 = state_17095__$1;
(statearr_17144_17218[(1)] = (38));

} else {
var statearr_17145_17219 = state_17095__$1;
(statearr_17145_17219[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (17))){
var state_17095__$1 = state_17095;
var statearr_17146_17220 = state_17095__$1;
(statearr_17146_17220[(2)] = recompile_dependents);

(statearr_17146_17220[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (3))){
var state_17095__$1 = state_17095;
var statearr_17147_17221 = state_17095__$1;
(statearr_17147_17221[(2)] = null);

(statearr_17147_17221[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (12))){
var inst_16986 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17148_17222 = state_17095__$1;
(statearr_17148_17222[(2)] = inst_16986);

(statearr_17148_17222[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (2))){
var inst_16948 = (state_17095[(13)]);
var inst_16955 = cljs.core.seq(inst_16948);
var inst_16956 = inst_16955;
var inst_16957 = null;
var inst_16958 = (0);
var inst_16959 = (0);
var state_17095__$1 = (function (){var statearr_17149 = state_17095;
(statearr_17149[(7)] = inst_16959);

(statearr_17149[(8)] = inst_16958);

(statearr_17149[(9)] = inst_16956);

(statearr_17149[(10)] = inst_16957);

return statearr_17149;
})();
var statearr_17150_17223 = state_17095__$1;
(statearr_17150_17223[(2)] = null);

(statearr_17150_17223[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (23))){
var inst_17015 = (state_17095[(26)]);
var inst_17017 = (state_17095[(23)]);
var inst_17009 = (state_17095[(19)]);
var inst_17012 = (state_17095[(24)]);
var inst_17013 = (state_17095[(25)]);
var inst_17020 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: loaded these dependencies");
var inst_17022 = (function (){var all_files = inst_17009;
var res_SINGLEQUOTE_ = inst_17012;
var res = inst_17013;
var files_not_loaded = inst_17015;
var dependencies_that_loaded = inst_17017;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_17015,inst_17017,inst_17009,inst_17012,inst_17013,inst_17020,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__17021){
var map__17151 = p__17021;
var map__17151__$1 = ((((!((map__17151 == null)))?((((map__17151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17151):map__17151);
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17151__$1,cljs.core.cst$kw$request_DASH_url);
return clojure.string.replace(request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_17015,inst_17017,inst_17009,inst_17012,inst_17013,inst_17020,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_17023 = cljs.core.reverse(inst_17017);
var inst_17024 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_17022,inst_17023);
var inst_17025 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_17024], 0));
var inst_17026 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_17025);
var state_17095__$1 = (function (){var statearr_17153 = state_17095;
(statearr_17153[(31)] = inst_17020);

return statearr_17153;
})();
var statearr_17154_17224 = state_17095__$1;
(statearr_17154_17224[(2)] = inst_17026);

(statearr_17154_17224[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (35))){
var state_17095__$1 = state_17095;
var statearr_17155_17225 = state_17095__$1;
(statearr_17155_17225[(2)] = true);

(statearr_17155_17225[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (19))){
var inst_16999 = (state_17095[(12)]);
var inst_17005 = figwheel.client.file_reloading.expand_files(inst_16999);
var state_17095__$1 = state_17095;
var statearr_17156_17226 = state_17095__$1;
(statearr_17156_17226[(2)] = inst_17005);

(statearr_17156_17226[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (11))){
var state_17095__$1 = state_17095;
var statearr_17157_17227 = state_17095__$1;
(statearr_17157_17227[(2)] = null);

(statearr_17157_17227[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (9))){
var inst_16988 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17158_17228 = state_17095__$1;
(statearr_17158_17228[(2)] = inst_16988);

(statearr_17158_17228[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (5))){
var inst_16959 = (state_17095[(7)]);
var inst_16958 = (state_17095[(8)]);
var inst_16961 = (inst_16959 < inst_16958);
var inst_16962 = inst_16961;
var state_17095__$1 = state_17095;
if(cljs.core.truth_(inst_16962)){
var statearr_17159_17229 = state_17095__$1;
(statearr_17159_17229[(1)] = (7));

} else {
var statearr_17160_17230 = state_17095__$1;
(statearr_17160_17230[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (14))){
var inst_16969 = (state_17095[(22)]);
var inst_16978 = cljs.core.first(inst_16969);
var inst_16979 = figwheel.client.file_reloading.eval_body(inst_16978,opts);
var inst_16980 = cljs.core.next(inst_16969);
var inst_16956 = inst_16980;
var inst_16957 = null;
var inst_16958 = (0);
var inst_16959 = (0);
var state_17095__$1 = (function (){var statearr_17161 = state_17095;
(statearr_17161[(7)] = inst_16959);

(statearr_17161[(8)] = inst_16958);

(statearr_17161[(32)] = inst_16979);

(statearr_17161[(9)] = inst_16956);

(statearr_17161[(10)] = inst_16957);

return statearr_17161;
})();
var statearr_17162_17231 = state_17095__$1;
(statearr_17162_17231[(2)] = null);

(statearr_17162_17231[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (45))){
var state_17095__$1 = state_17095;
var statearr_17163_17232 = state_17095__$1;
(statearr_17163_17232[(2)] = null);

(statearr_17163_17232[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (26))){
var inst_17015 = (state_17095[(26)]);
var inst_17017 = (state_17095[(23)]);
var inst_17009 = (state_17095[(19)]);
var inst_17012 = (state_17095[(24)]);
var inst_17013 = (state_17095[(25)]);
var inst_17032 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: loaded these files");
var inst_17034 = (function (){var all_files = inst_17009;
var res_SINGLEQUOTE_ = inst_17012;
var res = inst_17013;
var files_not_loaded = inst_17015;
var dependencies_that_loaded = inst_17017;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_17015,inst_17017,inst_17009,inst_17012,inst_17013,inst_17032,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__17033){
var map__17164 = p__17033;
var map__17164__$1 = ((((!((map__17164 == null)))?((((map__17164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17164):map__17164);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17164__$1,cljs.core.cst$kw$namespace);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17164__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path(cljs.core.name(namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_17015,inst_17017,inst_17009,inst_17012,inst_17013,inst_17032,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_17035 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_17034,inst_17013);
var inst_17036 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_17035], 0));
var inst_17037 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_17036);
var inst_17038 = (function (){var all_files = inst_17009;
var res_SINGLEQUOTE_ = inst_17012;
var res = inst_17013;
var files_not_loaded = inst_17015;
var dependencies_that_loaded = inst_17017;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_17015,inst_17017,inst_17009,inst_17012,inst_17013,inst_17032,inst_17034,inst_17035,inst_17036,inst_17037,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event(res);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_17015,inst_17017,inst_17009,inst_17012,inst_17013,inst_17032,inst_17034,inst_17035,inst_17036,inst_17037,state_val_17096,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_17039 = setTimeout(inst_17038,(10));
var state_17095__$1 = (function (){var statearr_17166 = state_17095;
(statearr_17166[(33)] = inst_17032);

(statearr_17166[(34)] = inst_17037);

return statearr_17166;
})();
var statearr_17167_17233 = state_17095__$1;
(statearr_17167_17233[(2)] = inst_17039);

(statearr_17167_17233[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (16))){
var state_17095__$1 = state_17095;
var statearr_17168_17234 = state_17095__$1;
(statearr_17168_17234[(2)] = reload_dependents);

(statearr_17168_17234[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (38))){
var inst_17049 = (state_17095[(16)]);
var inst_17066 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17049);
var state_17095__$1 = state_17095;
var statearr_17169_17235 = state_17095__$1;
(statearr_17169_17235[(2)] = inst_17066);

(statearr_17169_17235[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (30))){
var state_17095__$1 = state_17095;
var statearr_17170_17236 = state_17095__$1;
(statearr_17170_17236[(2)] = null);

(statearr_17170_17236[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (10))){
var inst_16969 = (state_17095[(22)]);
var inst_16971 = cljs.core.chunked_seq_QMARK_(inst_16969);
var state_17095__$1 = state_17095;
if(inst_16971){
var statearr_17171_17237 = state_17095__$1;
(statearr_17171_17237[(1)] = (13));

} else {
var statearr_17172_17238 = state_17095__$1;
(statearr_17172_17238[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (18))){
var inst_17003 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
if(cljs.core.truth_(inst_17003)){
var statearr_17173_17239 = state_17095__$1;
(statearr_17173_17239[(1)] = (19));

} else {
var statearr_17174_17240 = state_17095__$1;
(statearr_17174_17240[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (42))){
var state_17095__$1 = state_17095;
var statearr_17175_17241 = state_17095__$1;
(statearr_17175_17241[(2)] = null);

(statearr_17175_17241[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (37))){
var inst_17061 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17176_17242 = state_17095__$1;
(statearr_17176_17242[(2)] = inst_17061);

(statearr_17176_17242[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17096 === (8))){
var inst_16969 = (state_17095[(22)]);
var inst_16956 = (state_17095[(9)]);
var inst_16969__$1 = cljs.core.seq(inst_16956);
var state_17095__$1 = (function (){var statearr_17177 = state_17095;
(statearr_17177[(22)] = inst_16969__$1);

return statearr_17177;
})();
if(inst_16969__$1){
var statearr_17178_17243 = state_17095__$1;
(statearr_17178_17243[(1)] = (10));

} else {
var statearr_17179_17244 = state_17095__$1;
(statearr_17179_17244[(1)] = (11));

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
});})(c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__13109__auto__,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto____0 = (function (){
var statearr_17183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17183[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto__);

(statearr_17183[(1)] = (1));

return statearr_17183;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto____1 = (function (state_17095){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_17095);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e17184){if((e17184 instanceof Object)){
var ex__13113__auto__ = e17184;
var statearr_17185_17245 = state_17095;
(statearr_17185_17245[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17095);

return cljs.core.cst$kw$recur;
} else {
throw e17184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__17246 = state_17095;
state_17095 = G__17246;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto__ = function(state_17095){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto____1.call(this,state_17095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__13225__auto__ = (function (){var statearr_17186 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_17186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_17186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__,map__16941,map__16941__$1,opts,before_jsload,on_jsload,reload_dependents,map__16942,map__16942__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__13223__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__17249,link){
var map__17252 = p__17249;
var map__17252__$1 = ((((!((map__17252 == null)))?((((map__17252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17252):map__17252);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17252__$1,cljs.core.cst$kw$file);
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (link_href,temp__4425__auto__,map__17252,map__17252__$1,file){
return (function (p1__17247_SHARP_,p2__17248_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17247_SHARP_,p2__17248_SHARP_)){
return p1__17247_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__17252,map__17252__$1,file))
,cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,"/")),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.truncate_url(link_href),"/")))));
var match_length = cljs.core.count(match);
var file_name_length = cljs.core.count(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$link,link,cljs.core.cst$kw$link_DASH_href,link_href,cljs.core.cst$kw$match_DASH_length,match_length,cljs.core.cst$kw$current_DASH_url_DASH_length,cljs.core.count(figwheel.client.file_reloading.truncate_url(link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__17258){
var map__17259 = p__17258;
var map__17259__$1 = ((((!((map__17259 == null)))?((((map__17259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17259):map__17259);
var match_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17259__$1,cljs.core.cst$kw$match_DASH_length);
var current_url_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17259__$1,cljs.core.cst$kw$current_DASH_url_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__17254_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_(f_data,p1__17254_SHARP_);
}),figwheel.client.file_reloading.current_links())));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster(url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster(url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args17261 = [];
var len__5725__auto___17266 = arguments.length;
var i__5726__auto___17267 = (0);
while(true){
if((i__5726__auto___17267 < len__5725__auto___17266)){
args17261.push((arguments[i__5726__auto___17267]));

var G__17268 = (i__5726__auto___17267 + (1));
i__5726__auto___17267 = G__17268;
continue;
} else {
}
break;
}

var G__17263 = args17261.length;
switch (G__17263) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17261.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var G__17264 = ((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
;
var G__17265 = (300);
return setTimeout(G__17264,G__17265);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17270_SHARP_,p2__17271_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17270_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__17271_SHARP_,key),p2__17271_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__17272){
var map__17275 = p__17272;
var map__17275__$1 = ((((!((map__17275 == null)))?((((map__17275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17275):map__17275);
var f_data = map__17275__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17275__$1,cljs.core.cst$kw$file);
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link(f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.file_reloading.clone_link(link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__17277,files_msg){
var map__17288 = p__17277;
var map__17288__$1 = ((((!((map__17288 == null)))?((((map__17288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17288):map__17288);
var opts = map__17288__$1;
var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17288__$1,cljs.core.cst$kw$on_DASH_cssload);
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
var seq__17290_17298 = cljs.core.seq(figwheel.client.file_reloading.distictify(cljs.core.cst$kw$file,cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__17291_17299 = null;
var count__17292_17300 = (0);
var i__17293_17301 = (0);
while(true){
if((i__17293_17301 < count__17292_17300)){
var f_17302 = chunk__17291_17299.cljs$core$IIndexed$_nth$arity$2(null,i__17293_17301);
figwheel.client.file_reloading.reload_css_file(f_17302);

var G__17303 = seq__17290_17298;
var G__17304 = chunk__17291_17299;
var G__17305 = count__17292_17300;
var G__17306 = (i__17293_17301 + (1));
seq__17290_17298 = G__17303;
chunk__17291_17299 = G__17304;
count__17292_17300 = G__17305;
i__17293_17301 = G__17306;
continue;
} else {
var temp__4425__auto___17307 = cljs.core.seq(seq__17290_17298);
if(temp__4425__auto___17307){
var seq__17290_17308__$1 = temp__4425__auto___17307;
if(cljs.core.chunked_seq_QMARK_(seq__17290_17308__$1)){
var c__5474__auto___17309 = cljs.core.chunk_first(seq__17290_17308__$1);
var G__17310 = cljs.core.chunk_rest(seq__17290_17308__$1);
var G__17311 = c__5474__auto___17309;
var G__17312 = cljs.core.count(c__5474__auto___17309);
var G__17313 = (0);
seq__17290_17298 = G__17310;
chunk__17291_17299 = G__17311;
count__17292_17300 = G__17312;
i__17293_17301 = G__17313;
continue;
} else {
var f_17314 = cljs.core.first(seq__17290_17308__$1);
figwheel.client.file_reloading.reload_css_file(f_17314);

var G__17315 = cljs.core.next(seq__17290_17308__$1);
var G__17316 = null;
var G__17317 = (0);
var G__17318 = (0);
seq__17290_17298 = G__17315;
chunk__17291_17299 = G__17316;
count__17292_17300 = G__17317;
i__17293_17301 = G__17318;
continue;
}
} else {
}
}
break;
}

var G__17295 = ((function (map__17288,map__17288__$1,opts,on_cssload){
return (function (){
var G__17297 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(files_msg);
return (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(G__17297) : on_cssload.call(null,G__17297));
});})(map__17288,map__17288__$1,opts,on_cssload))
;
var G__17296 = (100);
return setTimeout(G__17295,G__17296);
} else {
return null;
}
});
