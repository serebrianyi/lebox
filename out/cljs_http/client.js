// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__16793__auto__ = v;
if(cljs.core.truth_(and__16793__auto__)){
return (v > (0));
} else {
return and__16793__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__19221_SHARP_,p2__19220_SHARP_){
var vec__19223 = clojure.string.split.call(null,p2__19220_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__19223,(0),null);
var v = cljs.core.nth.call(null,vec__19223,(1),null);
return cljs.core.assoc.call(null,p1__19221_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__19224_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__19224_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__19225){
var vec__19227 = p__19225;
var k = cljs.core.nth.call(null,vec__19227,(0),null);
var v = cljs.core.nth.call(null,vec__19227,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__19228_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__19228_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__16793__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__16793__auto__){
var and__16793__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__16793__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__19229_SHARP_){
return cljs_http.client.decode_body.call(null,p1__19229_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19234 = arguments.length;
var i__17864__auto___19235 = (0);
while(true){
if((i__17864__auto___19235 < len__17863__auto___19234)){
args__17870__auto__.push((arguments[i__17864__auto___19235]));

var G__19236 = (i__17864__auto___19235 + (1));
i__17864__auto___19235 = G__19236;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19232){
var vec__19233 = p__19232;
var default_headers = cljs.core.nth.call(null,vec__19233,(0),null);
return ((function (vec__19233,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__19233,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq19230){
var G__19231 = cljs.core.first.call(null,seq19230);
var seq19230__$1 = cljs.core.next.call(null,seq19230);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__19231,seq19230__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19241 = arguments.length;
var i__17864__auto___19242 = (0);
while(true){
if((i__17864__auto___19242 < len__17863__auto___19241)){
args__17870__auto__.push((arguments[i__17864__auto___19242]));

var G__19243 = (i__17864__auto___19242 + (1));
i__17864__auto___19242 = G__19243;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19239){
var vec__19240 = p__19239;
var accept = cljs.core.nth.call(null,vec__19240,(0),null);
return ((function (vec__19240,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__19240,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq19237){
var G__19238 = cljs.core.first.call(null,seq19237);
var seq19237__$1 = cljs.core.next.call(null,seq19237);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__19238,seq19237__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19248 = arguments.length;
var i__17864__auto___19249 = (0);
while(true){
if((i__17864__auto___19249 < len__17863__auto___19248)){
args__17870__auto__.push((arguments[i__17864__auto___19249]));

var G__19250 = (i__17864__auto___19249 + (1));
i__17864__auto___19249 = G__19250;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19246){
var vec__19247 = p__19246;
var content_type = cljs.core.nth.call(null,vec__19247,(0),null);
return ((function (vec__19247,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__19247,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq19244){
var G__19245 = cljs.core.first.call(null,seq19244);
var seq19244__$1 = cljs.core.next.call(null,seq19244);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__19245,seq19244__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__19253 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__19253__$1 = ((((!((map__19253 == null)))?((((map__19253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19253):map__19253);
var encoding = cljs.core.get.call(null,map__19253__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__19253__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__19259 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__19259__$1 = ((((!((map__19259 == null)))?((((map__19259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19259):map__19259);
var decoding = cljs.core.get.call(null,map__19259__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__19259__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__19259,map__19259__$1,decoding,decoding_opts){
return (function (p1__19255_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__19255_SHARP_,decoding,decoding_opts);
});})(map__19259,map__19259__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__19259,map__19259__$1,decoding,decoding_opts,transit_decode){
return (function (p1__19256_SHARP_){
return cljs_http.client.decode_body.call(null,p1__19256_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__19259,map__19259__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__19261_SHARP_){
return cljs_http.client.decode_body.call(null,p1__19261_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__19265){
var map__19266 = p__19265;
var map__19266__$1 = ((((!((map__19266 == null)))?((((map__19266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19266):map__19266);
var req = map__19266__$1;
var query_params = cljs.core.get.call(null,map__19266__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__19271){
var map__19272 = p__19271;
var map__19272__$1 = ((((!((map__19272 == null)))?((((map__19272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19272):map__19272);
var request = map__19272__$1;
var form_params = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__16793__auto__ = form_params;
if(cljs.core.truth_(and__16793__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16793__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__19280_19286 = cljs.core.seq.call(null,params);
var chunk__19281_19287 = null;
var count__19282_19288 = (0);
var i__19283_19289 = (0);
while(true){
if((i__19283_19289 < count__19282_19288)){
var vec__19284_19290 = cljs.core._nth.call(null,chunk__19281_19287,i__19283_19289);
var k_19291 = cljs.core.nth.call(null,vec__19284_19290,(0),null);
var v_19292 = cljs.core.nth.call(null,vec__19284_19290,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_19292)){
form_data.append(cljs.core.name.call(null,k_19291),cljs.core.first.call(null,v_19292),cljs.core.second.call(null,v_19292));
} else {
form_data.append(cljs.core.name.call(null,k_19291),v_19292);
}

var G__19293 = seq__19280_19286;
var G__19294 = chunk__19281_19287;
var G__19295 = count__19282_19288;
var G__19296 = (i__19283_19289 + (1));
seq__19280_19286 = G__19293;
chunk__19281_19287 = G__19294;
count__19282_19288 = G__19295;
i__19283_19289 = G__19296;
continue;
} else {
var temp__4425__auto___19297 = cljs.core.seq.call(null,seq__19280_19286);
if(temp__4425__auto___19297){
var seq__19280_19298__$1 = temp__4425__auto___19297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19280_19298__$1)){
var c__17608__auto___19299 = cljs.core.chunk_first.call(null,seq__19280_19298__$1);
var G__19300 = cljs.core.chunk_rest.call(null,seq__19280_19298__$1);
var G__19301 = c__17608__auto___19299;
var G__19302 = cljs.core.count.call(null,c__17608__auto___19299);
var G__19303 = (0);
seq__19280_19286 = G__19300;
chunk__19281_19287 = G__19301;
count__19282_19288 = G__19302;
i__19283_19289 = G__19303;
continue;
} else {
var vec__19285_19304 = cljs.core.first.call(null,seq__19280_19298__$1);
var k_19305 = cljs.core.nth.call(null,vec__19285_19304,(0),null);
var v_19306 = cljs.core.nth.call(null,vec__19285_19304,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_19306)){
form_data.append(cljs.core.name.call(null,k_19305),cljs.core.first.call(null,v_19306),cljs.core.second.call(null,v_19306));
} else {
form_data.append(cljs.core.name.call(null,k_19305),v_19306);
}

var G__19307 = cljs.core.next.call(null,seq__19280_19298__$1);
var G__19308 = null;
var G__19309 = (0);
var G__19310 = (0);
seq__19280_19286 = G__19307;
chunk__19281_19287 = G__19308;
count__19282_19288 = G__19309;
i__19283_19289 = G__19310;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__19314){
var map__19315 = p__19314;
var map__19315__$1 = ((((!((map__19315 == null)))?((((map__19315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19315):map__19315);
var request = map__19315__$1;
var multipart_params = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__16793__auto__ = multipart_params;
if(cljs.core.truth_(and__16793__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16793__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__19317_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__19317_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__19322){
var map__19323 = p__19322;
var map__19323__$1 = ((((!((map__19323 == null)))?((((map__19323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19323):map__19323);
var req = map__19323__$1;
var query_params = cljs.core.get.call(null,map__19323__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__19323,map__19323__$1,req,query_params){
return (function (p1__19318_SHARP_){
return cljs.core.merge.call(null,p1__19318_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__19323,map__19323__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19329 = arguments.length;
var i__17864__auto___19330 = (0);
while(true){
if((i__17864__auto___19330 < len__17863__auto___19329)){
args__17870__auto__.push((arguments[i__17864__auto___19330]));

var G__19331 = (i__17864__auto___19330 + (1));
i__17864__auto___19330 = G__19331;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19327){
var vec__19328 = p__19327;
var credentials = cljs.core.nth.call(null,vec__19328,(0),null);
return ((function (vec__19328,credentials){
return (function (req){
var credentials__$1 = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__19328,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq19325){
var G__19326 = cljs.core.first.call(null,seq19325);
var seq19325__$1 = cljs.core.next.call(null,seq19325);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__19326,seq19325__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19336 = arguments.length;
var i__17864__auto___19337 = (0);
while(true){
if((i__17864__auto___19337 < len__17863__auto___19336)){
args__17870__auto__.push((arguments[i__17864__auto___19337]));

var G__19338 = (i__17864__auto___19337 + (1));
i__17864__auto___19337 = G__19338;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19334){
var vec__19335 = p__19334;
var req = cljs.core.nth.call(null,vec__19335,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq19332){
var G__19333 = cljs.core.first.call(null,seq19332);
var seq19332__$1 = cljs.core.next.call(null,seq19332);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__19333,seq19332__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19343 = arguments.length;
var i__17864__auto___19344 = (0);
while(true){
if((i__17864__auto___19344 < len__17863__auto___19343)){
args__17870__auto__.push((arguments[i__17864__auto___19344]));

var G__19345 = (i__17864__auto___19344 + (1));
i__17864__auto___19344 = G__19345;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19341){
var vec__19342 = p__19341;
var req = cljs.core.nth.call(null,vec__19342,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq19339){
var G__19340 = cljs.core.first.call(null,seq19339);
var seq19339__$1 = cljs.core.next.call(null,seq19339);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__19340,seq19339__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19350 = arguments.length;
var i__17864__auto___19351 = (0);
while(true){
if((i__17864__auto___19351 < len__17863__auto___19350)){
args__17870__auto__.push((arguments[i__17864__auto___19351]));

var G__19352 = (i__17864__auto___19351 + (1));
i__17864__auto___19351 = G__19352;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19348){
var vec__19349 = p__19348;
var req = cljs.core.nth.call(null,vec__19349,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq19346){
var G__19347 = cljs.core.first.call(null,seq19346);
var seq19346__$1 = cljs.core.next.call(null,seq19346);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__19347,seq19346__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19357 = arguments.length;
var i__17864__auto___19358 = (0);
while(true){
if((i__17864__auto___19358 < len__17863__auto___19357)){
args__17870__auto__.push((arguments[i__17864__auto___19358]));

var G__19359 = (i__17864__auto___19358 + (1));
i__17864__auto___19358 = G__19359;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19355){
var vec__19356 = p__19355;
var req = cljs.core.nth.call(null,vec__19356,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq19353){
var G__19354 = cljs.core.first.call(null,seq19353);
var seq19353__$1 = cljs.core.next.call(null,seq19353);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__19354,seq19353__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19364 = arguments.length;
var i__17864__auto___19365 = (0);
while(true){
if((i__17864__auto___19365 < len__17863__auto___19364)){
args__17870__auto__.push((arguments[i__17864__auto___19365]));

var G__19366 = (i__17864__auto___19365 + (1));
i__17864__auto___19365 = G__19366;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19362){
var vec__19363 = p__19362;
var req = cljs.core.nth.call(null,vec__19363,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq19360){
var G__19361 = cljs.core.first.call(null,seq19360);
var seq19360__$1 = cljs.core.next.call(null,seq19360);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__19361,seq19360__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19371 = arguments.length;
var i__17864__auto___19372 = (0);
while(true){
if((i__17864__auto___19372 < len__17863__auto___19371)){
args__17870__auto__.push((arguments[i__17864__auto___19372]));

var G__19373 = (i__17864__auto___19372 + (1));
i__17864__auto___19372 = G__19373;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19369){
var vec__19370 = p__19369;
var req = cljs.core.nth.call(null,vec__19370,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq19367){
var G__19368 = cljs.core.first.call(null,seq19367);
var seq19367__$1 = cljs.core.next.call(null,seq19367);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__19368,seq19367__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19378 = arguments.length;
var i__17864__auto___19379 = (0);
while(true){
if((i__17864__auto___19379 < len__17863__auto___19378)){
args__17870__auto__.push((arguments[i__17864__auto___19379]));

var G__19380 = (i__17864__auto___19379 + (1));
i__17864__auto___19379 = G__19380;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19376){
var vec__19377 = p__19376;
var req = cljs.core.nth.call(null,vec__19377,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq19374){
var G__19375 = cljs.core.first.call(null,seq19374);
var seq19374__$1 = cljs.core.next.call(null,seq19374);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__19375,seq19374__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19385 = arguments.length;
var i__17864__auto___19386 = (0);
while(true){
if((i__17864__auto___19386 < len__17863__auto___19385)){
args__17870__auto__.push((arguments[i__17864__auto___19386]));

var G__19387 = (i__17864__auto___19386 + (1));
i__17864__auto___19386 = G__19387;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19383){
var vec__19384 = p__19383;
var req = cljs.core.nth.call(null,vec__19384,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq19381){
var G__19382 = cljs.core.first.call(null,seq19381);
var seq19381__$1 = cljs.core.next.call(null,seq19381);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__19382,seq19381__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19392 = arguments.length;
var i__17864__auto___19393 = (0);
while(true){
if((i__17864__auto___19393 < len__17863__auto___19392)){
args__17870__auto__.push((arguments[i__17864__auto___19393]));

var G__19394 = (i__17864__auto___19393 + (1));
i__17864__auto___19393 = G__19394;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19390){
var vec__19391 = p__19390;
var req = cljs.core.nth.call(null,vec__19391,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq19388){
var G__19389 = cljs.core.first.call(null,seq19388);
var seq19388__$1 = cljs.core.next.call(null,seq19388);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__19389,seq19388__$1);
});

//# sourceMappingURL=client.js.map