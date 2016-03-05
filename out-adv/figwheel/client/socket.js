// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('figwheel.client.socket');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('cljs.reader');
figwheel.client.socket.get_websocket_imp = (function figwheel$client$socket$get_websocket_imp(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
return (window["WebSocket"]);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())){
try{return require("ws");
}catch (e18171){if((e18171 instanceof Error)){
var e = e18171;
return null;
} else {
throw e18171;

}
}} else {
return null;

}
}
});
if(typeof figwheel.client.socket.message_history_atom !== 'undefined'){
} else {
figwheel.client.socket.message_history_atom = (function (){var G__18172 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18172) : cljs.core.atom.call(null,G__18172));
})();
}
if(typeof figwheel.client.socket.socket_atom !== 'undefined'){
} else {
figwheel.client.socket.socket_atom = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
}
/**
 * Send a end message to the server.
 */
figwheel.client.socket.send_BANG_ = (function figwheel$client$socket$send_BANG_(msg){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.socket.socket_atom) : cljs.core.deref.call(null,figwheel.client.socket.socket_atom)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.socket.socket_atom) : cljs.core.deref.call(null,figwheel.client.socket.socket_atom)).send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0)));
} else {
return null;
}
});
figwheel.client.socket.close_BANG_ = (function figwheel$client$socket$close_BANG_(){
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.socket.socket_atom) : cljs.core.deref.call(null,figwheel.client.socket.socket_atom)).onclose = cljs.core.identity;

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.socket.socket_atom) : cljs.core.deref.call(null,figwheel.client.socket.socket_atom)).close();
});
figwheel.client.socket.open = (function figwheel$client$socket$open(p__18173){
var map__18180 = p__18173;
var map__18180__$1 = ((((!((map__18180 == null)))?((((map__18180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18180):map__18180);
var opts = map__18180__$1;
var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18180__$1,cljs.core.cst$kw$retry_DASH_count);
var retried_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18180__$1,cljs.core.cst$kw$retried_DASH_count);
var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18180__$1,cljs.core.cst$kw$websocket_DASH_url);
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18180__$1,cljs.core.cst$kw$build_DASH_id);
var temp__4423__auto__ = figwheel.client.socket.get_websocket_imp();
if(cljs.core.truth_(temp__4423__auto__)){
var WebSocket = temp__4423__auto__;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: trying to open cljs reload socket");

var url = [cljs.core.str(websocket_url),cljs.core.str((cljs.core.truth_(build_id)?[cljs.core.str("/"),cljs.core.str(build_id)].join(''):""))].join('');
var socket = (new WebSocket(url));
socket.onmessage = ((function (url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (msg_str){
var temp__4425__auto__ = cljs.reader.read_string(msg_str.data);
if(cljs.core.truth_(temp__4425__auto__)){
var msg = temp__4425__auto__;
figwheel.client.utils.debug_prn(msg);

var and__4659__auto__ = cljs.core.map_QMARK_(msg);
if(and__4659__auto__){
var and__4659__auto____$1 = cljs.core.cst$kw$msg_DASH_name.cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(and__4659__auto____$1)){
var and__4659__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$msg_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$ping);
if(and__4659__auto____$2){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(figwheel.client.socket.message_history_atom,cljs.core.conj,msg);
} else {
return and__4659__auto____$2;
}
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
} else {
return null;
}
});})(url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

socket.onopen = ((function (url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (x){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.socket.socket_atom,socket) : cljs.core.reset_BANG_.call(null,figwheel.client.socket.socket_atom,socket));

if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
window.addEventListener("beforeunload",figwheel.client.socket.close_BANG_);
} else {
}

return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: socket connection established");
});})(url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

socket.onclose = ((function (url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (x){
var retried_count__$1 = (function (){var or__4671__auto__ = retried_count;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (0);
}
})();
figwheel.client.utils.debug_prn("Figwheel: socket closed or failed to open");

if((retry_count > retried_count__$1)){
var G__18182 = ((function (retried_count__$1,url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (){
return figwheel$client$socket$open(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$retried_DASH_count,(retried_count__$1 + (1))));
});})(retried_count__$1,url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id))
;
var G__18183 = (function (){var x__5009__auto__ = (10000);
var y__5010__auto__ = ((2000) + ((500) * retried_count__$1));
return ((x__5009__auto__ < y__5010__auto__) ? x__5009__auto__ : y__5010__auto__);
})();
return setTimeout(G__18182,G__18183);
} else {
return null;
}
});})(url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

socket.onerror = ((function (url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (x){
return figwheel.client.utils.debug_prn("Figwheel: socket error ");
});})(url,socket,WebSocket,temp__4423__auto__,map__18180,map__18180__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

return socket;
} else {
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())?"Figwheel: Can't start Figwheel!! Please make sure ws is installed\n do -> 'npm install ws'":"Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets"));
}
});
