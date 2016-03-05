// Compiled by ClojureScript 1.7.170 {}
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
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16805__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16805__auto__){
return or__16805__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

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
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16805__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23480_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23480_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23485 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23486 = null;
var count__23487 = (0);
var i__23488 = (0);
while(true){
if((i__23488 < count__23487)){
var n = cljs.core._nth.call(null,chunk__23486,i__23488);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23489 = seq__23485;
var G__23490 = chunk__23486;
var G__23491 = count__23487;
var G__23492 = (i__23488 + (1));
seq__23485 = G__23489;
chunk__23486 = G__23490;
count__23487 = G__23491;
i__23488 = G__23492;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23485);
if(temp__4425__auto__){
var seq__23485__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23485__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__23485__$1);
var G__23493 = cljs.core.chunk_rest.call(null,seq__23485__$1);
var G__23494 = c__17608__auto__;
var G__23495 = cljs.core.count.call(null,c__17608__auto__);
var G__23496 = (0);
seq__23485 = G__23493;
chunk__23486 = G__23494;
count__23487 = G__23495;
i__23488 = G__23496;
continue;
} else {
var n = cljs.core.first.call(null,seq__23485__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23497 = cljs.core.next.call(null,seq__23485__$1);
var G__23498 = null;
var G__23499 = (0);
var G__23500 = (0);
seq__23485 = G__23497;
chunk__23486 = G__23498;
count__23487 = G__23499;
i__23488 = G__23500;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23539_23546 = cljs.core.seq.call(null,deps);
var chunk__23540_23547 = null;
var count__23541_23548 = (0);
var i__23542_23549 = (0);
while(true){
if((i__23542_23549 < count__23541_23548)){
var dep_23550 = cljs.core._nth.call(null,chunk__23540_23547,i__23542_23549);
topo_sort_helper_STAR_.call(null,dep_23550,(depth + (1)),state);

var G__23551 = seq__23539_23546;
var G__23552 = chunk__23540_23547;
var G__23553 = count__23541_23548;
var G__23554 = (i__23542_23549 + (1));
seq__23539_23546 = G__23551;
chunk__23540_23547 = G__23552;
count__23541_23548 = G__23553;
i__23542_23549 = G__23554;
continue;
} else {
var temp__4425__auto___23555 = cljs.core.seq.call(null,seq__23539_23546);
if(temp__4425__auto___23555){
var seq__23539_23556__$1 = temp__4425__auto___23555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23539_23556__$1)){
var c__17608__auto___23557 = cljs.core.chunk_first.call(null,seq__23539_23556__$1);
var G__23558 = cljs.core.chunk_rest.call(null,seq__23539_23556__$1);
var G__23559 = c__17608__auto___23557;
var G__23560 = cljs.core.count.call(null,c__17608__auto___23557);
var G__23561 = (0);
seq__23539_23546 = G__23558;
chunk__23540_23547 = G__23559;
count__23541_23548 = G__23560;
i__23542_23549 = G__23561;
continue;
} else {
var dep_23562 = cljs.core.first.call(null,seq__23539_23556__$1);
topo_sort_helper_STAR_.call(null,dep_23562,(depth + (1)),state);

var G__23563 = cljs.core.next.call(null,seq__23539_23556__$1);
var G__23564 = null;
var G__23565 = (0);
var G__23566 = (0);
seq__23539_23546 = G__23563;
chunk__23540_23547 = G__23564;
count__23541_23548 = G__23565;
i__23542_23549 = G__23566;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23543){
var vec__23545 = p__23543;
var x = cljs.core.nth.call(null,vec__23545,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23545,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23545,x,xs,get_deps__$1){
return (function (p1__23501_SHARP_){
return clojure.set.difference.call(null,p1__23501_SHARP_,x);
});})(vec__23545,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23579 = cljs.core.seq.call(null,provides);
var chunk__23580 = null;
var count__23581 = (0);
var i__23582 = (0);
while(true){
if((i__23582 < count__23581)){
var prov = cljs.core._nth.call(null,chunk__23580,i__23582);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23583_23591 = cljs.core.seq.call(null,requires);
var chunk__23584_23592 = null;
var count__23585_23593 = (0);
var i__23586_23594 = (0);
while(true){
if((i__23586_23594 < count__23585_23593)){
var req_23595 = cljs.core._nth.call(null,chunk__23584_23592,i__23586_23594);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23595,prov);

var G__23596 = seq__23583_23591;
var G__23597 = chunk__23584_23592;
var G__23598 = count__23585_23593;
var G__23599 = (i__23586_23594 + (1));
seq__23583_23591 = G__23596;
chunk__23584_23592 = G__23597;
count__23585_23593 = G__23598;
i__23586_23594 = G__23599;
continue;
} else {
var temp__4425__auto___23600 = cljs.core.seq.call(null,seq__23583_23591);
if(temp__4425__auto___23600){
var seq__23583_23601__$1 = temp__4425__auto___23600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23583_23601__$1)){
var c__17608__auto___23602 = cljs.core.chunk_first.call(null,seq__23583_23601__$1);
var G__23603 = cljs.core.chunk_rest.call(null,seq__23583_23601__$1);
var G__23604 = c__17608__auto___23602;
var G__23605 = cljs.core.count.call(null,c__17608__auto___23602);
var G__23606 = (0);
seq__23583_23591 = G__23603;
chunk__23584_23592 = G__23604;
count__23585_23593 = G__23605;
i__23586_23594 = G__23606;
continue;
} else {
var req_23607 = cljs.core.first.call(null,seq__23583_23601__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23607,prov);

var G__23608 = cljs.core.next.call(null,seq__23583_23601__$1);
var G__23609 = null;
var G__23610 = (0);
var G__23611 = (0);
seq__23583_23591 = G__23608;
chunk__23584_23592 = G__23609;
count__23585_23593 = G__23610;
i__23586_23594 = G__23611;
continue;
}
} else {
}
}
break;
}

var G__23612 = seq__23579;
var G__23613 = chunk__23580;
var G__23614 = count__23581;
var G__23615 = (i__23582 + (1));
seq__23579 = G__23612;
chunk__23580 = G__23613;
count__23581 = G__23614;
i__23582 = G__23615;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23579);
if(temp__4425__auto__){
var seq__23579__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23579__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__23579__$1);
var G__23616 = cljs.core.chunk_rest.call(null,seq__23579__$1);
var G__23617 = c__17608__auto__;
var G__23618 = cljs.core.count.call(null,c__17608__auto__);
var G__23619 = (0);
seq__23579 = G__23616;
chunk__23580 = G__23617;
count__23581 = G__23618;
i__23582 = G__23619;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23579__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23587_23620 = cljs.core.seq.call(null,requires);
var chunk__23588_23621 = null;
var count__23589_23622 = (0);
var i__23590_23623 = (0);
while(true){
if((i__23590_23623 < count__23589_23622)){
var req_23624 = cljs.core._nth.call(null,chunk__23588_23621,i__23590_23623);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23624,prov);

var G__23625 = seq__23587_23620;
var G__23626 = chunk__23588_23621;
var G__23627 = count__23589_23622;
var G__23628 = (i__23590_23623 + (1));
seq__23587_23620 = G__23625;
chunk__23588_23621 = G__23626;
count__23589_23622 = G__23627;
i__23590_23623 = G__23628;
continue;
} else {
var temp__4425__auto___23629__$1 = cljs.core.seq.call(null,seq__23587_23620);
if(temp__4425__auto___23629__$1){
var seq__23587_23630__$1 = temp__4425__auto___23629__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23587_23630__$1)){
var c__17608__auto___23631 = cljs.core.chunk_first.call(null,seq__23587_23630__$1);
var G__23632 = cljs.core.chunk_rest.call(null,seq__23587_23630__$1);
var G__23633 = c__17608__auto___23631;
var G__23634 = cljs.core.count.call(null,c__17608__auto___23631);
var G__23635 = (0);
seq__23587_23620 = G__23632;
chunk__23588_23621 = G__23633;
count__23589_23622 = G__23634;
i__23590_23623 = G__23635;
continue;
} else {
var req_23636 = cljs.core.first.call(null,seq__23587_23630__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23636,prov);

var G__23637 = cljs.core.next.call(null,seq__23587_23630__$1);
var G__23638 = null;
var G__23639 = (0);
var G__23640 = (0);
seq__23587_23620 = G__23637;
chunk__23588_23621 = G__23638;
count__23589_23622 = G__23639;
i__23590_23623 = G__23640;
continue;
}
} else {
}
}
break;
}

var G__23641 = cljs.core.next.call(null,seq__23579__$1);
var G__23642 = null;
var G__23643 = (0);
var G__23644 = (0);
seq__23579 = G__23641;
chunk__23580 = G__23642;
count__23581 = G__23643;
i__23582 = G__23644;
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

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23649_23653 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23650_23654 = null;
var count__23651_23655 = (0);
var i__23652_23656 = (0);
while(true){
if((i__23652_23656 < count__23651_23655)){
var ns_23657 = cljs.core._nth.call(null,chunk__23650_23654,i__23652_23656);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23657);

var G__23658 = seq__23649_23653;
var G__23659 = chunk__23650_23654;
var G__23660 = count__23651_23655;
var G__23661 = (i__23652_23656 + (1));
seq__23649_23653 = G__23658;
chunk__23650_23654 = G__23659;
count__23651_23655 = G__23660;
i__23652_23656 = G__23661;
continue;
} else {
var temp__4425__auto___23662 = cljs.core.seq.call(null,seq__23649_23653);
if(temp__4425__auto___23662){
var seq__23649_23663__$1 = temp__4425__auto___23662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23649_23663__$1)){
var c__17608__auto___23664 = cljs.core.chunk_first.call(null,seq__23649_23663__$1);
var G__23665 = cljs.core.chunk_rest.call(null,seq__23649_23663__$1);
var G__23666 = c__17608__auto___23664;
var G__23667 = cljs.core.count.call(null,c__17608__auto___23664);
var G__23668 = (0);
seq__23649_23653 = G__23665;
chunk__23650_23654 = G__23666;
count__23651_23655 = G__23667;
i__23652_23656 = G__23668;
continue;
} else {
var ns_23669 = cljs.core.first.call(null,seq__23649_23663__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23669);

var G__23670 = cljs.core.next.call(null,seq__23649_23663__$1);
var G__23671 = null;
var G__23672 = (0);
var G__23673 = (0);
seq__23649_23653 = G__23670;
chunk__23650_23654 = G__23671;
count__23651_23655 = G__23672;
i__23652_23656 = G__23673;
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
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
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
goog.require_figwheel_backup_ = (function (){var or__16805__auto__ = goog.require__;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23674__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23675__i = 0, G__23675__a = new Array(arguments.length -  0);
while (G__23675__i < G__23675__a.length) {G__23675__a[G__23675__i] = arguments[G__23675__i + 0]; ++G__23675__i;}
  args = new cljs.core.IndexedSeq(G__23675__a,0);
} 
return G__23674__delegate.call(this,args);};
G__23674.cljs$lang$maxFixedArity = 0;
G__23674.cljs$lang$applyTo = (function (arglist__23676){
var args = cljs.core.seq(arglist__23676);
return G__23674__delegate(args);
});
G__23674.cljs$core$IFn$_invoke$arity$variadic = G__23674__delegate;
return G__23674;
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
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23678 = cljs.core._EQ_;
var expr__23679 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23678.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23679))){
var path_parts = ((function (pred__23678,expr__23679){
return (function (p1__23677_SHARP_){
return clojure.string.split.call(null,p1__23677_SHARP_,/[\/\\]/);
});})(pred__23678,expr__23679))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23678,expr__23679){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23681){if((e23681 instanceof Error)){
var e = e23681;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23681;

}
}})());
});
;})(path_parts,sep,root,pred__23678,expr__23679))
} else {
if(cljs.core.truth_(pred__23678.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23679))){
return ((function (pred__23678,expr__23679){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23678,expr__23679){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23678,expr__23679))
);

return deferred.addErrback(((function (deferred,pred__23678,expr__23679){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23678,expr__23679))
);
});
;})(pred__23678,expr__23679))
} else {
return ((function (pred__23678,expr__23679){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23678,expr__23679))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23682,callback){
var map__23685 = p__23682;
var map__23685__$1 = ((((!((map__23685 == null)))?((((map__23685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23685):map__23685);
var file_msg = map__23685__$1;
var request_url = cljs.core.get.call(null,map__23685__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23685,map__23685__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23685,map__23685__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto__){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto__){
return (function (state_23709){
var state_val_23710 = (state_23709[(1)]);
if((state_val_23710 === (7))){
var inst_23705 = (state_23709[(2)]);
var state_23709__$1 = state_23709;
var statearr_23711_23731 = state_23709__$1;
(statearr_23711_23731[(2)] = inst_23705);

(statearr_23711_23731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (1))){
var state_23709__$1 = state_23709;
var statearr_23712_23732 = state_23709__$1;
(statearr_23712_23732[(2)] = null);

(statearr_23712_23732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (4))){
var inst_23689 = (state_23709[(7)]);
var inst_23689__$1 = (state_23709[(2)]);
var state_23709__$1 = (function (){var statearr_23713 = state_23709;
(statearr_23713[(7)] = inst_23689__$1);

return statearr_23713;
})();
if(cljs.core.truth_(inst_23689__$1)){
var statearr_23714_23733 = state_23709__$1;
(statearr_23714_23733[(1)] = (5));

} else {
var statearr_23715_23734 = state_23709__$1;
(statearr_23715_23734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (6))){
var state_23709__$1 = state_23709;
var statearr_23716_23735 = state_23709__$1;
(statearr_23716_23735[(2)] = null);

(statearr_23716_23735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (3))){
var inst_23707 = (state_23709[(2)]);
var state_23709__$1 = state_23709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23709__$1,inst_23707);
} else {
if((state_val_23710 === (2))){
var state_23709__$1 = state_23709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23709__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23710 === (11))){
var inst_23701 = (state_23709[(2)]);
var state_23709__$1 = (function (){var statearr_23717 = state_23709;
(statearr_23717[(8)] = inst_23701);

return statearr_23717;
})();
var statearr_23718_23736 = state_23709__$1;
(statearr_23718_23736[(2)] = null);

(statearr_23718_23736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (9))){
var inst_23695 = (state_23709[(9)]);
var inst_23693 = (state_23709[(10)]);
var inst_23697 = inst_23695.call(null,inst_23693);
var state_23709__$1 = state_23709;
var statearr_23719_23737 = state_23709__$1;
(statearr_23719_23737[(2)] = inst_23697);

(statearr_23719_23737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (5))){
var inst_23689 = (state_23709[(7)]);
var inst_23691 = figwheel.client.file_reloading.blocking_load.call(null,inst_23689);
var state_23709__$1 = state_23709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23709__$1,(8),inst_23691);
} else {
if((state_val_23710 === (10))){
var inst_23693 = (state_23709[(10)]);
var inst_23699 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23693);
var state_23709__$1 = state_23709;
var statearr_23720_23738 = state_23709__$1;
(statearr_23720_23738[(2)] = inst_23699);

(statearr_23720_23738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (8))){
var inst_23695 = (state_23709[(9)]);
var inst_23689 = (state_23709[(7)]);
var inst_23693 = (state_23709[(2)]);
var inst_23694 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23695__$1 = cljs.core.get.call(null,inst_23694,inst_23689);
var state_23709__$1 = (function (){var statearr_23721 = state_23709;
(statearr_23721[(9)] = inst_23695__$1);

(statearr_23721[(10)] = inst_23693);

return statearr_23721;
})();
if(cljs.core.truth_(inst_23695__$1)){
var statearr_23722_23739 = state_23709__$1;
(statearr_23722_23739[(1)] = (9));

} else {
var statearr_23723_23740 = state_23709__$1;
(statearr_23723_23740[(1)] = (10));

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
});})(c__20537__auto__))
;
return ((function (switch__20425__auto__,c__20537__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20426__auto__ = null;
var figwheel$client$file_reloading$state_machine__20426__auto____0 = (function (){
var statearr_23727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23727[(0)] = figwheel$client$file_reloading$state_machine__20426__auto__);

(statearr_23727[(1)] = (1));

return statearr_23727;
});
var figwheel$client$file_reloading$state_machine__20426__auto____1 = (function (state_23709){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_23709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e23728){if((e23728 instanceof Object)){
var ex__20429__auto__ = e23728;
var statearr_23729_23741 = state_23709;
(statearr_23729_23741[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23742 = state_23709;
state_23709 = G__23742;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20426__auto__ = function(state_23709){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20426__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20426__auto____1.call(this,state_23709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20426__auto____0;
figwheel$client$file_reloading$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20426__auto____1;
return figwheel$client$file_reloading$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto__))
})();
var state__20539__auto__ = (function (){var statearr_23730 = f__20538__auto__.call(null);
(statearr_23730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto__);

return statearr_23730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto__))
);

return c__20537__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23743,callback){
var map__23746 = p__23743;
var map__23746__$1 = ((((!((map__23746 == null)))?((((map__23746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23746):map__23746);
var file_msg = map__23746__$1;
var namespace = cljs.core.get.call(null,map__23746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23746,map__23746__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23746,map__23746__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23748){
var map__23751 = p__23748;
var map__23751__$1 = ((((!((map__23751 == null)))?((((map__23751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23751):map__23751);
var file_msg = map__23751__$1;
var namespace = cljs.core.get.call(null,map__23751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16793__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16793__auto__){
var or__16805__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var or__16805__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto____$1)){
return or__16805__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16793__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23753,callback){
var map__23756 = p__23753;
var map__23756__$1 = ((((!((map__23756 == null)))?((((map__23756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23756):map__23756);
var file_msg = map__23756__$1;
var request_url = cljs.core.get.call(null,map__23756__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23756__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20537__auto___23844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___23844,out){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___23844,out){
return (function (state_23826){
var state_val_23827 = (state_23826[(1)]);
if((state_val_23827 === (1))){
var inst_23804 = cljs.core.nth.call(null,files,(0),null);
var inst_23805 = cljs.core.nthnext.call(null,files,(1));
var inst_23806 = files;
var state_23826__$1 = (function (){var statearr_23828 = state_23826;
(statearr_23828[(7)] = inst_23806);

(statearr_23828[(8)] = inst_23805);

(statearr_23828[(9)] = inst_23804);

return statearr_23828;
})();
var statearr_23829_23845 = state_23826__$1;
(statearr_23829_23845[(2)] = null);

(statearr_23829_23845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23827 === (2))){
var inst_23806 = (state_23826[(7)]);
var inst_23809 = (state_23826[(10)]);
var inst_23809__$1 = cljs.core.nth.call(null,inst_23806,(0),null);
var inst_23810 = cljs.core.nthnext.call(null,inst_23806,(1));
var inst_23811 = (inst_23809__$1 == null);
var inst_23812 = cljs.core.not.call(null,inst_23811);
var state_23826__$1 = (function (){var statearr_23830 = state_23826;
(statearr_23830[(11)] = inst_23810);

(statearr_23830[(10)] = inst_23809__$1);

return statearr_23830;
})();
if(inst_23812){
var statearr_23831_23846 = state_23826__$1;
(statearr_23831_23846[(1)] = (4));

} else {
var statearr_23832_23847 = state_23826__$1;
(statearr_23832_23847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23827 === (3))){
var inst_23824 = (state_23826[(2)]);
var state_23826__$1 = state_23826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23826__$1,inst_23824);
} else {
if((state_val_23827 === (4))){
var inst_23809 = (state_23826[(10)]);
var inst_23814 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23809);
var state_23826__$1 = state_23826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23826__$1,(7),inst_23814);
} else {
if((state_val_23827 === (5))){
var inst_23820 = cljs.core.async.close_BANG_.call(null,out);
var state_23826__$1 = state_23826;
var statearr_23833_23848 = state_23826__$1;
(statearr_23833_23848[(2)] = inst_23820);

(statearr_23833_23848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23827 === (6))){
var inst_23822 = (state_23826[(2)]);
var state_23826__$1 = state_23826;
var statearr_23834_23849 = state_23826__$1;
(statearr_23834_23849[(2)] = inst_23822);

(statearr_23834_23849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23827 === (7))){
var inst_23810 = (state_23826[(11)]);
var inst_23816 = (state_23826[(2)]);
var inst_23817 = cljs.core.async.put_BANG_.call(null,out,inst_23816);
var inst_23806 = inst_23810;
var state_23826__$1 = (function (){var statearr_23835 = state_23826;
(statearr_23835[(7)] = inst_23806);

(statearr_23835[(12)] = inst_23817);

return statearr_23835;
})();
var statearr_23836_23850 = state_23826__$1;
(statearr_23836_23850[(2)] = null);

(statearr_23836_23850[(1)] = (2));


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
});})(c__20537__auto___23844,out))
;
return ((function (switch__20425__auto__,c__20537__auto___23844,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto____0 = (function (){
var statearr_23840 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23840[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto__);

(statearr_23840[(1)] = (1));

return statearr_23840;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto____1 = (function (state_23826){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_23826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e23841){if((e23841 instanceof Object)){
var ex__20429__auto__ = e23841;
var statearr_23842_23851 = state_23826;
(statearr_23842_23851[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23852 = state_23826;
state_23826 = G__23852;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto__ = function(state_23826){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto____1.call(this,state_23826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___23844,out))
})();
var state__20539__auto__ = (function (){var statearr_23843 = f__20538__auto__.call(null);
(statearr_23843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___23844);

return statearr_23843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___23844,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23853,opts){
var map__23857 = p__23853;
var map__23857__$1 = ((((!((map__23857 == null)))?((((map__23857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23857):map__23857);
var eval_body__$1 = cljs.core.get.call(null,map__23857__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16793__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16793__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16793__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23859){var e = e23859;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23860_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23860_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23865){
var vec__23866 = p__23865;
var k = cljs.core.nth.call(null,vec__23866,(0),null);
var v = cljs.core.nth.call(null,vec__23866,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23867){
var vec__23868 = p__23867;
var k = cljs.core.nth.call(null,vec__23868,(0),null);
var v = cljs.core.nth.call(null,vec__23868,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23872,p__23873){
var map__24120 = p__23872;
var map__24120__$1 = ((((!((map__24120 == null)))?((((map__24120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24120):map__24120);
var opts = map__24120__$1;
var before_jsload = cljs.core.get.call(null,map__24120__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24120__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24120__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24121 = p__23873;
var map__24121__$1 = ((((!((map__24121 == null)))?((((map__24121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24121):map__24121);
var msg = map__24121__$1;
var files = cljs.core.get.call(null,map__24121__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24121__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24121__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24274){
var state_val_24275 = (state_24274[(1)]);
if((state_val_24275 === (7))){
var inst_24138 = (state_24274[(7)]);
var inst_24137 = (state_24274[(8)]);
var inst_24135 = (state_24274[(9)]);
var inst_24136 = (state_24274[(10)]);
var inst_24143 = cljs.core._nth.call(null,inst_24136,inst_24138);
var inst_24144 = figwheel.client.file_reloading.eval_body.call(null,inst_24143,opts);
var inst_24145 = (inst_24138 + (1));
var tmp24276 = inst_24137;
var tmp24277 = inst_24135;
var tmp24278 = inst_24136;
var inst_24135__$1 = tmp24277;
var inst_24136__$1 = tmp24278;
var inst_24137__$1 = tmp24276;
var inst_24138__$1 = inst_24145;
var state_24274__$1 = (function (){var statearr_24279 = state_24274;
(statearr_24279[(7)] = inst_24138__$1);

(statearr_24279[(8)] = inst_24137__$1);

(statearr_24279[(9)] = inst_24135__$1);

(statearr_24279[(11)] = inst_24144);

(statearr_24279[(10)] = inst_24136__$1);

return statearr_24279;
})();
var statearr_24280_24366 = state_24274__$1;
(statearr_24280_24366[(2)] = null);

(statearr_24280_24366[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (20))){
var inst_24178 = (state_24274[(12)]);
var inst_24186 = figwheel.client.file_reloading.sort_files.call(null,inst_24178);
var state_24274__$1 = state_24274;
var statearr_24281_24367 = state_24274__$1;
(statearr_24281_24367[(2)] = inst_24186);

(statearr_24281_24367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (27))){
var state_24274__$1 = state_24274;
var statearr_24282_24368 = state_24274__$1;
(statearr_24282_24368[(2)] = null);

(statearr_24282_24368[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (1))){
var inst_24127 = (state_24274[(13)]);
var inst_24124 = before_jsload.call(null,files);
var inst_24125 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24126 = (function (){return ((function (inst_24127,inst_24124,inst_24125,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23869_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23869_SHARP_);
});
;})(inst_24127,inst_24124,inst_24125,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24127__$1 = cljs.core.filter.call(null,inst_24126,files);
var inst_24128 = cljs.core.not_empty.call(null,inst_24127__$1);
var state_24274__$1 = (function (){var statearr_24283 = state_24274;
(statearr_24283[(14)] = inst_24124);

(statearr_24283[(13)] = inst_24127__$1);

(statearr_24283[(15)] = inst_24125);

return statearr_24283;
})();
if(cljs.core.truth_(inst_24128)){
var statearr_24284_24369 = state_24274__$1;
(statearr_24284_24369[(1)] = (2));

} else {
var statearr_24285_24370 = state_24274__$1;
(statearr_24285_24370[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (24))){
var state_24274__$1 = state_24274;
var statearr_24286_24371 = state_24274__$1;
(statearr_24286_24371[(2)] = null);

(statearr_24286_24371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (39))){
var inst_24228 = (state_24274[(16)]);
var state_24274__$1 = state_24274;
var statearr_24287_24372 = state_24274__$1;
(statearr_24287_24372[(2)] = inst_24228);

(statearr_24287_24372[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (46))){
var inst_24269 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
var statearr_24288_24373 = state_24274__$1;
(statearr_24288_24373[(2)] = inst_24269);

(statearr_24288_24373[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (4))){
var inst_24172 = (state_24274[(2)]);
var inst_24173 = cljs.core.List.EMPTY;
var inst_24174 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24173);
var inst_24175 = (function (){return ((function (inst_24172,inst_24173,inst_24174,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23870_SHARP_){
var and__16793__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23870_SHARP_);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23870_SHARP_));
} else {
return and__16793__auto__;
}
});
;})(inst_24172,inst_24173,inst_24174,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24176 = cljs.core.filter.call(null,inst_24175,files);
var inst_24177 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24178 = cljs.core.concat.call(null,inst_24176,inst_24177);
var state_24274__$1 = (function (){var statearr_24289 = state_24274;
(statearr_24289[(17)] = inst_24174);

(statearr_24289[(12)] = inst_24178);

(statearr_24289[(18)] = inst_24172);

return statearr_24289;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24290_24374 = state_24274__$1;
(statearr_24290_24374[(1)] = (16));

} else {
var statearr_24291_24375 = state_24274__$1;
(statearr_24291_24375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (15))){
var inst_24162 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
var statearr_24292_24376 = state_24274__$1;
(statearr_24292_24376[(2)] = inst_24162);

(statearr_24292_24376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (21))){
var inst_24188 = (state_24274[(19)]);
var inst_24188__$1 = (state_24274[(2)]);
var inst_24189 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24188__$1);
var state_24274__$1 = (function (){var statearr_24293 = state_24274;
(statearr_24293[(19)] = inst_24188__$1);

return statearr_24293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24274__$1,(22),inst_24189);
} else {
if((state_val_24275 === (31))){
var inst_24272 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24274__$1,inst_24272);
} else {
if((state_val_24275 === (32))){
var inst_24228 = (state_24274[(16)]);
var inst_24233 = inst_24228.cljs$lang$protocol_mask$partition0$;
var inst_24234 = (inst_24233 & (64));
var inst_24235 = inst_24228.cljs$core$ISeq$;
var inst_24236 = (inst_24234) || (inst_24235);
var state_24274__$1 = state_24274;
if(cljs.core.truth_(inst_24236)){
var statearr_24294_24377 = state_24274__$1;
(statearr_24294_24377[(1)] = (35));

} else {
var statearr_24295_24378 = state_24274__$1;
(statearr_24295_24378[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (40))){
var inst_24249 = (state_24274[(20)]);
var inst_24248 = (state_24274[(2)]);
var inst_24249__$1 = cljs.core.get.call(null,inst_24248,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24250 = cljs.core.get.call(null,inst_24248,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24251 = cljs.core.not_empty.call(null,inst_24249__$1);
var state_24274__$1 = (function (){var statearr_24296 = state_24274;
(statearr_24296[(20)] = inst_24249__$1);

(statearr_24296[(21)] = inst_24250);

return statearr_24296;
})();
if(cljs.core.truth_(inst_24251)){
var statearr_24297_24379 = state_24274__$1;
(statearr_24297_24379[(1)] = (41));

} else {
var statearr_24298_24380 = state_24274__$1;
(statearr_24298_24380[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (33))){
var state_24274__$1 = state_24274;
var statearr_24299_24381 = state_24274__$1;
(statearr_24299_24381[(2)] = false);

(statearr_24299_24381[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (13))){
var inst_24148 = (state_24274[(22)]);
var inst_24152 = cljs.core.chunk_first.call(null,inst_24148);
var inst_24153 = cljs.core.chunk_rest.call(null,inst_24148);
var inst_24154 = cljs.core.count.call(null,inst_24152);
var inst_24135 = inst_24153;
var inst_24136 = inst_24152;
var inst_24137 = inst_24154;
var inst_24138 = (0);
var state_24274__$1 = (function (){var statearr_24300 = state_24274;
(statearr_24300[(7)] = inst_24138);

(statearr_24300[(8)] = inst_24137);

(statearr_24300[(9)] = inst_24135);

(statearr_24300[(10)] = inst_24136);

return statearr_24300;
})();
var statearr_24301_24382 = state_24274__$1;
(statearr_24301_24382[(2)] = null);

(statearr_24301_24382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (22))){
var inst_24196 = (state_24274[(23)]);
var inst_24188 = (state_24274[(19)]);
var inst_24192 = (state_24274[(24)]);
var inst_24191 = (state_24274[(25)]);
var inst_24191__$1 = (state_24274[(2)]);
var inst_24192__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24191__$1);
var inst_24193 = (function (){var all_files = inst_24188;
var res_SINGLEQUOTE_ = inst_24191__$1;
var res = inst_24192__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24196,inst_24188,inst_24192,inst_24191,inst_24191__$1,inst_24192__$1,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23871_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23871_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24196,inst_24188,inst_24192,inst_24191,inst_24191__$1,inst_24192__$1,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24194 = cljs.core.filter.call(null,inst_24193,inst_24191__$1);
var inst_24195 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24196__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24195);
var inst_24197 = cljs.core.not_empty.call(null,inst_24196__$1);
var state_24274__$1 = (function (){var statearr_24302 = state_24274;
(statearr_24302[(26)] = inst_24194);

(statearr_24302[(23)] = inst_24196__$1);

(statearr_24302[(24)] = inst_24192__$1);

(statearr_24302[(25)] = inst_24191__$1);

return statearr_24302;
})();
if(cljs.core.truth_(inst_24197)){
var statearr_24303_24383 = state_24274__$1;
(statearr_24303_24383[(1)] = (23));

} else {
var statearr_24304_24384 = state_24274__$1;
(statearr_24304_24384[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (36))){
var state_24274__$1 = state_24274;
var statearr_24305_24385 = state_24274__$1;
(statearr_24305_24385[(2)] = false);

(statearr_24305_24385[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (41))){
var inst_24249 = (state_24274[(20)]);
var inst_24253 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24254 = cljs.core.map.call(null,inst_24253,inst_24249);
var inst_24255 = cljs.core.pr_str.call(null,inst_24254);
var inst_24256 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24255)].join('');
var inst_24257 = figwheel.client.utils.log.call(null,inst_24256);
var state_24274__$1 = state_24274;
var statearr_24306_24386 = state_24274__$1;
(statearr_24306_24386[(2)] = inst_24257);

(statearr_24306_24386[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (43))){
var inst_24250 = (state_24274[(21)]);
var inst_24260 = (state_24274[(2)]);
var inst_24261 = cljs.core.not_empty.call(null,inst_24250);
var state_24274__$1 = (function (){var statearr_24307 = state_24274;
(statearr_24307[(27)] = inst_24260);

return statearr_24307;
})();
if(cljs.core.truth_(inst_24261)){
var statearr_24308_24387 = state_24274__$1;
(statearr_24308_24387[(1)] = (44));

} else {
var statearr_24309_24388 = state_24274__$1;
(statearr_24309_24388[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (29))){
var inst_24228 = (state_24274[(16)]);
var inst_24194 = (state_24274[(26)]);
var inst_24196 = (state_24274[(23)]);
var inst_24188 = (state_24274[(19)]);
var inst_24192 = (state_24274[(24)]);
var inst_24191 = (state_24274[(25)]);
var inst_24224 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24227 = (function (){var all_files = inst_24188;
var res_SINGLEQUOTE_ = inst_24191;
var res = inst_24192;
var files_not_loaded = inst_24194;
var dependencies_that_loaded = inst_24196;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24228,inst_24194,inst_24196,inst_24188,inst_24192,inst_24191,inst_24224,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24226){
var map__24310 = p__24226;
var map__24310__$1 = ((((!((map__24310 == null)))?((((map__24310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24310):map__24310);
var namespace = cljs.core.get.call(null,map__24310__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24228,inst_24194,inst_24196,inst_24188,inst_24192,inst_24191,inst_24224,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24228__$1 = cljs.core.group_by.call(null,inst_24227,inst_24194);
var inst_24230 = (inst_24228__$1 == null);
var inst_24231 = cljs.core.not.call(null,inst_24230);
var state_24274__$1 = (function (){var statearr_24312 = state_24274;
(statearr_24312[(16)] = inst_24228__$1);

(statearr_24312[(28)] = inst_24224);

return statearr_24312;
})();
if(inst_24231){
var statearr_24313_24389 = state_24274__$1;
(statearr_24313_24389[(1)] = (32));

} else {
var statearr_24314_24390 = state_24274__$1;
(statearr_24314_24390[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (44))){
var inst_24250 = (state_24274[(21)]);
var inst_24263 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24250);
var inst_24264 = cljs.core.pr_str.call(null,inst_24263);
var inst_24265 = [cljs.core.str("not required: "),cljs.core.str(inst_24264)].join('');
var inst_24266 = figwheel.client.utils.log.call(null,inst_24265);
var state_24274__$1 = state_24274;
var statearr_24315_24391 = state_24274__$1;
(statearr_24315_24391[(2)] = inst_24266);

(statearr_24315_24391[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (6))){
var inst_24169 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
var statearr_24316_24392 = state_24274__$1;
(statearr_24316_24392[(2)] = inst_24169);

(statearr_24316_24392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (28))){
var inst_24194 = (state_24274[(26)]);
var inst_24221 = (state_24274[(2)]);
var inst_24222 = cljs.core.not_empty.call(null,inst_24194);
var state_24274__$1 = (function (){var statearr_24317 = state_24274;
(statearr_24317[(29)] = inst_24221);

return statearr_24317;
})();
if(cljs.core.truth_(inst_24222)){
var statearr_24318_24393 = state_24274__$1;
(statearr_24318_24393[(1)] = (29));

} else {
var statearr_24319_24394 = state_24274__$1;
(statearr_24319_24394[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (25))){
var inst_24192 = (state_24274[(24)]);
var inst_24208 = (state_24274[(2)]);
var inst_24209 = cljs.core.not_empty.call(null,inst_24192);
var state_24274__$1 = (function (){var statearr_24320 = state_24274;
(statearr_24320[(30)] = inst_24208);

return statearr_24320;
})();
if(cljs.core.truth_(inst_24209)){
var statearr_24321_24395 = state_24274__$1;
(statearr_24321_24395[(1)] = (26));

} else {
var statearr_24322_24396 = state_24274__$1;
(statearr_24322_24396[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (34))){
var inst_24243 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
if(cljs.core.truth_(inst_24243)){
var statearr_24323_24397 = state_24274__$1;
(statearr_24323_24397[(1)] = (38));

} else {
var statearr_24324_24398 = state_24274__$1;
(statearr_24324_24398[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (17))){
var state_24274__$1 = state_24274;
var statearr_24325_24399 = state_24274__$1;
(statearr_24325_24399[(2)] = recompile_dependents);

(statearr_24325_24399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (3))){
var state_24274__$1 = state_24274;
var statearr_24326_24400 = state_24274__$1;
(statearr_24326_24400[(2)] = null);

(statearr_24326_24400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (12))){
var inst_24165 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
var statearr_24327_24401 = state_24274__$1;
(statearr_24327_24401[(2)] = inst_24165);

(statearr_24327_24401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (2))){
var inst_24127 = (state_24274[(13)]);
var inst_24134 = cljs.core.seq.call(null,inst_24127);
var inst_24135 = inst_24134;
var inst_24136 = null;
var inst_24137 = (0);
var inst_24138 = (0);
var state_24274__$1 = (function (){var statearr_24328 = state_24274;
(statearr_24328[(7)] = inst_24138);

(statearr_24328[(8)] = inst_24137);

(statearr_24328[(9)] = inst_24135);

(statearr_24328[(10)] = inst_24136);

return statearr_24328;
})();
var statearr_24329_24402 = state_24274__$1;
(statearr_24329_24402[(2)] = null);

(statearr_24329_24402[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (23))){
var inst_24194 = (state_24274[(26)]);
var inst_24196 = (state_24274[(23)]);
var inst_24188 = (state_24274[(19)]);
var inst_24192 = (state_24274[(24)]);
var inst_24191 = (state_24274[(25)]);
var inst_24199 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24201 = (function (){var all_files = inst_24188;
var res_SINGLEQUOTE_ = inst_24191;
var res = inst_24192;
var files_not_loaded = inst_24194;
var dependencies_that_loaded = inst_24196;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24194,inst_24196,inst_24188,inst_24192,inst_24191,inst_24199,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24200){
var map__24330 = p__24200;
var map__24330__$1 = ((((!((map__24330 == null)))?((((map__24330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24330):map__24330);
var request_url = cljs.core.get.call(null,map__24330__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24194,inst_24196,inst_24188,inst_24192,inst_24191,inst_24199,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24202 = cljs.core.reverse.call(null,inst_24196);
var inst_24203 = cljs.core.map.call(null,inst_24201,inst_24202);
var inst_24204 = cljs.core.pr_str.call(null,inst_24203);
var inst_24205 = figwheel.client.utils.log.call(null,inst_24204);
var state_24274__$1 = (function (){var statearr_24332 = state_24274;
(statearr_24332[(31)] = inst_24199);

return statearr_24332;
})();
var statearr_24333_24403 = state_24274__$1;
(statearr_24333_24403[(2)] = inst_24205);

(statearr_24333_24403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (35))){
var state_24274__$1 = state_24274;
var statearr_24334_24404 = state_24274__$1;
(statearr_24334_24404[(2)] = true);

(statearr_24334_24404[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (19))){
var inst_24178 = (state_24274[(12)]);
var inst_24184 = figwheel.client.file_reloading.expand_files.call(null,inst_24178);
var state_24274__$1 = state_24274;
var statearr_24335_24405 = state_24274__$1;
(statearr_24335_24405[(2)] = inst_24184);

(statearr_24335_24405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (11))){
var state_24274__$1 = state_24274;
var statearr_24336_24406 = state_24274__$1;
(statearr_24336_24406[(2)] = null);

(statearr_24336_24406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (9))){
var inst_24167 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
var statearr_24337_24407 = state_24274__$1;
(statearr_24337_24407[(2)] = inst_24167);

(statearr_24337_24407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (5))){
var inst_24138 = (state_24274[(7)]);
var inst_24137 = (state_24274[(8)]);
var inst_24140 = (inst_24138 < inst_24137);
var inst_24141 = inst_24140;
var state_24274__$1 = state_24274;
if(cljs.core.truth_(inst_24141)){
var statearr_24338_24408 = state_24274__$1;
(statearr_24338_24408[(1)] = (7));

} else {
var statearr_24339_24409 = state_24274__$1;
(statearr_24339_24409[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (14))){
var inst_24148 = (state_24274[(22)]);
var inst_24157 = cljs.core.first.call(null,inst_24148);
var inst_24158 = figwheel.client.file_reloading.eval_body.call(null,inst_24157,opts);
var inst_24159 = cljs.core.next.call(null,inst_24148);
var inst_24135 = inst_24159;
var inst_24136 = null;
var inst_24137 = (0);
var inst_24138 = (0);
var state_24274__$1 = (function (){var statearr_24340 = state_24274;
(statearr_24340[(7)] = inst_24138);

(statearr_24340[(8)] = inst_24137);

(statearr_24340[(9)] = inst_24135);

(statearr_24340[(32)] = inst_24158);

(statearr_24340[(10)] = inst_24136);

return statearr_24340;
})();
var statearr_24341_24410 = state_24274__$1;
(statearr_24341_24410[(2)] = null);

(statearr_24341_24410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (45))){
var state_24274__$1 = state_24274;
var statearr_24342_24411 = state_24274__$1;
(statearr_24342_24411[(2)] = null);

(statearr_24342_24411[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (26))){
var inst_24194 = (state_24274[(26)]);
var inst_24196 = (state_24274[(23)]);
var inst_24188 = (state_24274[(19)]);
var inst_24192 = (state_24274[(24)]);
var inst_24191 = (state_24274[(25)]);
var inst_24211 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24213 = (function (){var all_files = inst_24188;
var res_SINGLEQUOTE_ = inst_24191;
var res = inst_24192;
var files_not_loaded = inst_24194;
var dependencies_that_loaded = inst_24196;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24194,inst_24196,inst_24188,inst_24192,inst_24191,inst_24211,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24212){
var map__24343 = p__24212;
var map__24343__$1 = ((((!((map__24343 == null)))?((((map__24343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24343):map__24343);
var namespace = cljs.core.get.call(null,map__24343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24343__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24194,inst_24196,inst_24188,inst_24192,inst_24191,inst_24211,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24214 = cljs.core.map.call(null,inst_24213,inst_24192);
var inst_24215 = cljs.core.pr_str.call(null,inst_24214);
var inst_24216 = figwheel.client.utils.log.call(null,inst_24215);
var inst_24217 = (function (){var all_files = inst_24188;
var res_SINGLEQUOTE_ = inst_24191;
var res = inst_24192;
var files_not_loaded = inst_24194;
var dependencies_that_loaded = inst_24196;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24194,inst_24196,inst_24188,inst_24192,inst_24191,inst_24211,inst_24213,inst_24214,inst_24215,inst_24216,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24194,inst_24196,inst_24188,inst_24192,inst_24191,inst_24211,inst_24213,inst_24214,inst_24215,inst_24216,state_val_24275,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24218 = setTimeout(inst_24217,(10));
var state_24274__$1 = (function (){var statearr_24345 = state_24274;
(statearr_24345[(33)] = inst_24216);

(statearr_24345[(34)] = inst_24211);

return statearr_24345;
})();
var statearr_24346_24412 = state_24274__$1;
(statearr_24346_24412[(2)] = inst_24218);

(statearr_24346_24412[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (16))){
var state_24274__$1 = state_24274;
var statearr_24347_24413 = state_24274__$1;
(statearr_24347_24413[(2)] = reload_dependents);

(statearr_24347_24413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (38))){
var inst_24228 = (state_24274[(16)]);
var inst_24245 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24228);
var state_24274__$1 = state_24274;
var statearr_24348_24414 = state_24274__$1;
(statearr_24348_24414[(2)] = inst_24245);

(statearr_24348_24414[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (30))){
var state_24274__$1 = state_24274;
var statearr_24349_24415 = state_24274__$1;
(statearr_24349_24415[(2)] = null);

(statearr_24349_24415[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (10))){
var inst_24148 = (state_24274[(22)]);
var inst_24150 = cljs.core.chunked_seq_QMARK_.call(null,inst_24148);
var state_24274__$1 = state_24274;
if(inst_24150){
var statearr_24350_24416 = state_24274__$1;
(statearr_24350_24416[(1)] = (13));

} else {
var statearr_24351_24417 = state_24274__$1;
(statearr_24351_24417[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (18))){
var inst_24182 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
if(cljs.core.truth_(inst_24182)){
var statearr_24352_24418 = state_24274__$1;
(statearr_24352_24418[(1)] = (19));

} else {
var statearr_24353_24419 = state_24274__$1;
(statearr_24353_24419[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (42))){
var state_24274__$1 = state_24274;
var statearr_24354_24420 = state_24274__$1;
(statearr_24354_24420[(2)] = null);

(statearr_24354_24420[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (37))){
var inst_24240 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
var statearr_24355_24421 = state_24274__$1;
(statearr_24355_24421[(2)] = inst_24240);

(statearr_24355_24421[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (8))){
var inst_24135 = (state_24274[(9)]);
var inst_24148 = (state_24274[(22)]);
var inst_24148__$1 = cljs.core.seq.call(null,inst_24135);
var state_24274__$1 = (function (){var statearr_24356 = state_24274;
(statearr_24356[(22)] = inst_24148__$1);

return statearr_24356;
})();
if(inst_24148__$1){
var statearr_24357_24422 = state_24274__$1;
(statearr_24357_24422[(1)] = (10));

} else {
var statearr_24358_24423 = state_24274__$1;
(statearr_24358_24423[(1)] = (11));

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
});})(c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20425__auto__,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto____0 = (function (){
var statearr_24362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24362[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto__);

(statearr_24362[(1)] = (1));

return statearr_24362;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto____1 = (function (state_24274){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_24274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e24363){if((e24363 instanceof Object)){
var ex__20429__auto__ = e24363;
var statearr_24364_24424 = state_24274;
(statearr_24364_24424[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24425 = state_24274;
state_24274 = G__24425;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto__ = function(state_24274){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto____1.call(this,state_24274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20539__auto__ = (function (){var statearr_24365 = f__20538__auto__.call(null);
(statearr_24365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto__);

return statearr_24365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto__,map__24120,map__24120__$1,opts,before_jsload,on_jsload,reload_dependents,map__24121,map__24121__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20537__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24428,link){
var map__24431 = p__24428;
var map__24431__$1 = ((((!((map__24431 == null)))?((((map__24431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24431):map__24431);
var file = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24431,map__24431__$1,file){
return (function (p1__24426_SHARP_,p2__24427_SHARP_){
if(cljs.core._EQ_.call(null,p1__24426_SHARP_,p2__24427_SHARP_)){
return p1__24426_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24431,map__24431__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24437){
var map__24438 = p__24437;
var map__24438__$1 = ((((!((map__24438 == null)))?((((map__24438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24438):map__24438);
var match_length = cljs.core.get.call(null,map__24438__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24438__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24433_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24433_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24440 = [];
var len__17863__auto___24443 = arguments.length;
var i__17864__auto___24444 = (0);
while(true){
if((i__17864__auto___24444 < len__17863__auto___24443)){
args24440.push((arguments[i__17864__auto___24444]));

var G__24445 = (i__17864__auto___24444 + (1));
i__17864__auto___24444 = G__24445;
continue;
} else {
}
break;
}

var G__24442 = args24440.length;
switch (G__24442) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24440.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24447_SHARP_,p2__24448_SHARP_){
return cljs.core.assoc.call(null,p1__24447_SHARP_,cljs.core.get.call(null,p2__24448_SHARP_,key),p2__24448_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24449){
var map__24452 = p__24449;
var map__24452__$1 = ((((!((map__24452 == null)))?((((map__24452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24452):map__24452);
var f_data = map__24452__$1;
var file = cljs.core.get.call(null,map__24452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24454,files_msg){
var map__24461 = p__24454;
var map__24461__$1 = ((((!((map__24461 == null)))?((((map__24461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24461):map__24461);
var opts = map__24461__$1;
var on_cssload = cljs.core.get.call(null,map__24461__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24463_24467 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24464_24468 = null;
var count__24465_24469 = (0);
var i__24466_24470 = (0);
while(true){
if((i__24466_24470 < count__24465_24469)){
var f_24471 = cljs.core._nth.call(null,chunk__24464_24468,i__24466_24470);
figwheel.client.file_reloading.reload_css_file.call(null,f_24471);

var G__24472 = seq__24463_24467;
var G__24473 = chunk__24464_24468;
var G__24474 = count__24465_24469;
var G__24475 = (i__24466_24470 + (1));
seq__24463_24467 = G__24472;
chunk__24464_24468 = G__24473;
count__24465_24469 = G__24474;
i__24466_24470 = G__24475;
continue;
} else {
var temp__4425__auto___24476 = cljs.core.seq.call(null,seq__24463_24467);
if(temp__4425__auto___24476){
var seq__24463_24477__$1 = temp__4425__auto___24476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24463_24477__$1)){
var c__17608__auto___24478 = cljs.core.chunk_first.call(null,seq__24463_24477__$1);
var G__24479 = cljs.core.chunk_rest.call(null,seq__24463_24477__$1);
var G__24480 = c__17608__auto___24478;
var G__24481 = cljs.core.count.call(null,c__17608__auto___24478);
var G__24482 = (0);
seq__24463_24467 = G__24479;
chunk__24464_24468 = G__24480;
count__24465_24469 = G__24481;
i__24466_24470 = G__24482;
continue;
} else {
var f_24483 = cljs.core.first.call(null,seq__24463_24477__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24483);

var G__24484 = cljs.core.next.call(null,seq__24463_24477__$1);
var G__24485 = null;
var G__24486 = (0);
var G__24487 = (0);
seq__24463_24467 = G__24484;
chunk__24464_24468 = G__24485;
count__24465_24469 = G__24486;
i__24466_24470 = G__24487;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24461,map__24461__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24461,map__24461__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map