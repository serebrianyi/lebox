// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13268 = [];
var len__5725__auto___13274 = arguments.length;
var i__5726__auto___13275 = (0);
while(true){
if((i__5726__auto___13275 < len__5725__auto___13274)){
args13268.push((arguments[i__5726__auto___13275]));

var G__13276 = (i__5726__auto___13275 + (1));
i__5726__auto___13275 = G__13276;
continue;
} else {
}
break;
}

var G__13270 = args13268.length;
switch (G__13270) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13268.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13271 = (function (f,blockable,meta13272){
this.f = f;
this.blockable = blockable;
this.meta13272 = meta13272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13273,meta13272__$1){
var self__ = this;
var _13273__$1 = this;
return (new cljs.core.async.t_cljs$core$async13271(self__.f,self__.blockable,meta13272__$1));
});

cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13273){
var self__ = this;
var _13273__$1 = this;
return self__.meta13272;
});

cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta13272], null);
});

cljs.core.async.t_cljs$core$async13271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13271";

cljs.core.async.t_cljs$core$async13271.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13271");
});

cljs.core.async.__GT_t_cljs$core$async13271 = (function cljs$core$async$__GT_t_cljs$core$async13271(f__$1,blockable__$1,meta13272){
return (new cljs.core.async.t_cljs$core$async13271(f__$1,blockable__$1,meta13272));
});

}

return (new cljs.core.async.t_cljs$core$async13271(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13280 = [];
var len__5725__auto___13283 = arguments.length;
var i__5726__auto___13284 = (0);
while(true){
if((i__5726__auto___13284 < len__5725__auto___13283)){
args13280.push((arguments[i__5726__auto___13284]));

var G__13285 = (i__5726__auto___13284 + (1));
i__5726__auto___13284 = G__13285;
continue;
} else {
}
break;
}

var G__13282 = args13280.length;
switch (G__13282) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13280.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13287 = [];
var len__5725__auto___13290 = arguments.length;
var i__5726__auto___13291 = (0);
while(true){
if((i__5726__auto___13291 < len__5725__auto___13290)){
args13287.push((arguments[i__5726__auto___13291]));

var G__13292 = (i__5726__auto___13291 + (1));
i__5726__auto___13291 = G__13292;
continue;
} else {
}
break;
}

var G__13289 = args13287.length;
switch (G__13289) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13287.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13294 = [];
var len__5725__auto___13297 = arguments.length;
var i__5726__auto___13298 = (0);
while(true){
if((i__5726__auto___13298 < len__5725__auto___13297)){
args13294.push((arguments[i__5726__auto___13298]));

var G__13299 = (i__5726__auto___13298 + (1));
i__5726__auto___13298 = G__13299;
continue;
} else {
}
break;
}

var G__13296 = args13294.length;
switch (G__13296) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13294.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13301 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13301) : fn1.call(null,val_13301));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13301,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13301) : fn1.call(null,val_13301));
});})(val_13301,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13302 = [];
var len__5725__auto___13305 = arguments.length;
var i__5726__auto___13306 = (0);
while(true){
if((i__5726__auto___13306 < len__5725__auto___13305)){
args13302.push((arguments[i__5726__auto___13306]));

var G__13307 = (i__5726__auto___13306 + (1));
i__5726__auto___13306 = G__13307;
continue;
} else {
}
break;
}

var G__13304 = args13302.length;
switch (G__13304) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13302.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5574__auto___13309 = n;
var x_13310 = (0);
while(true){
if((x_13310 < n__5574__auto___13309)){
(a[x_13310] = (0));

var G__13311 = (x_13310 + (1));
x_13310 = G__13311;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__13312 = (i + (1));
i = G__13312;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async13316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13316 = (function (alt_flag,flag,meta13317){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13317 = meta13317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13318,meta13317__$1){
var self__ = this;
var _13318__$1 = this;
return (new cljs.core.async.t_cljs$core$async13316(self__.alt_flag,self__.flag,meta13317__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13318){
var self__ = this;
var _13318__$1 = this;
return self__.meta13317;
});})(flag))
;

cljs.core.async.t_cljs$core$async13316.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async13316.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13316.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13317], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13316";

cljs.core.async.t_cljs$core$async13316.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13316");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13316 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13316(alt_flag__$1,flag__$1,meta13317){
return (new cljs.core.async.t_cljs$core$async13316(alt_flag__$1,flag__$1,meta13317));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13316(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13322 = (function (alt_handler,flag,cb,meta13323){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13323 = meta13323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13324,meta13323__$1){
var self__ = this;
var _13324__$1 = this;
return (new cljs.core.async.t_cljs$core$async13322(self__.alt_handler,self__.flag,self__.cb,meta13323__$1));
});

cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13324){
var self__ = this;
var _13324__$1 = this;
return self__.meta13323;
});

cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13323], null);
});

cljs.core.async.t_cljs$core$async13322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13322";

cljs.core.async.t_cljs$core$async13322.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13322");
});

cljs.core.async.__GT_t_cljs$core$async13322 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13322(alt_handler__$1,flag__$1,cb__$1,meta13323){
return (new cljs.core.async.t_cljs$core$async13322(alt_handler__$1,flag__$1,cb__$1,meta13323));
});

}

return (new cljs.core.async.t_cljs$core$async13322(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13325_SHARP_){
var G__13329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13325_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13329) : fret.call(null,G__13329));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13326_SHARP_){
var G__13330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13326_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13330) : fret.call(null,G__13330));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__4671__auto__ = wport;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13331 = (i + (1));
i = G__13331;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4671__auto__ = ret;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__4659__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5725__auto___13337 = arguments.length;
var i__5726__auto___13338 = (0);
while(true){
if((i__5726__auto___13338 < len__5725__auto___13337)){
args__5732__auto__.push((arguments[i__5726__auto___13338]));

var G__13339 = (i__5726__auto___13338 + (1));
i__5726__auto___13338 = G__13339;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13334){
var map__13335 = p__13334;
var map__13335__$1 = ((((!((map__13335 == null)))?((((map__13335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13335):map__13335);
var opts = map__13335__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13332){
var G__13333 = cljs.core.first(seq13332);
var seq13332__$1 = cljs.core.next(seq13332);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13333,seq13332__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13340 = [];
var len__5725__auto___13390 = arguments.length;
var i__5726__auto___13391 = (0);
while(true){
if((i__5726__auto___13391 < len__5725__auto___13390)){
args13340.push((arguments[i__5726__auto___13391]));

var G__13392 = (i__5726__auto___13391 + (1));
i__5726__auto___13391 = G__13392;
continue;
} else {
}
break;
}

var G__13342 = args13340.length;
switch (G__13342) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13340.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13223__auto___13394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___13394){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___13394){
return (function (state_13366){
var state_val_13367 = (state_13366[(1)]);
if((state_val_13367 === (7))){
var inst_13362 = (state_13366[(2)]);
var state_13366__$1 = state_13366;
var statearr_13368_13395 = state_13366__$1;
(statearr_13368_13395[(2)] = inst_13362);

(statearr_13368_13395[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (1))){
var state_13366__$1 = state_13366;
var statearr_13369_13396 = state_13366__$1;
(statearr_13369_13396[(2)] = null);

(statearr_13369_13396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (4))){
var inst_13345 = (state_13366[(7)]);
var inst_13345__$1 = (state_13366[(2)]);
var inst_13346 = (inst_13345__$1 == null);
var state_13366__$1 = (function (){var statearr_13370 = state_13366;
(statearr_13370[(7)] = inst_13345__$1);

return statearr_13370;
})();
if(cljs.core.truth_(inst_13346)){
var statearr_13371_13397 = state_13366__$1;
(statearr_13371_13397[(1)] = (5));

} else {
var statearr_13372_13398 = state_13366__$1;
(statearr_13372_13398[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (13))){
var state_13366__$1 = state_13366;
var statearr_13373_13399 = state_13366__$1;
(statearr_13373_13399[(2)] = null);

(statearr_13373_13399[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (6))){
var inst_13345 = (state_13366[(7)]);
var state_13366__$1 = state_13366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13366__$1,(11),to,inst_13345);
} else {
if((state_val_13367 === (3))){
var inst_13364 = (state_13366[(2)]);
var state_13366__$1 = state_13366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13366__$1,inst_13364);
} else {
if((state_val_13367 === (12))){
var state_13366__$1 = state_13366;
var statearr_13374_13400 = state_13366__$1;
(statearr_13374_13400[(2)] = null);

(statearr_13374_13400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (2))){
var state_13366__$1 = state_13366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13366__$1,(4),from);
} else {
if((state_val_13367 === (11))){
var inst_13355 = (state_13366[(2)]);
var state_13366__$1 = state_13366;
if(cljs.core.truth_(inst_13355)){
var statearr_13375_13401 = state_13366__$1;
(statearr_13375_13401[(1)] = (12));

} else {
var statearr_13376_13402 = state_13366__$1;
(statearr_13376_13402[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (9))){
var state_13366__$1 = state_13366;
var statearr_13377_13403 = state_13366__$1;
(statearr_13377_13403[(2)] = null);

(statearr_13377_13403[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (5))){
var state_13366__$1 = state_13366;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13378_13404 = state_13366__$1;
(statearr_13378_13404[(1)] = (8));

} else {
var statearr_13379_13405 = state_13366__$1;
(statearr_13379_13405[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (14))){
var inst_13360 = (state_13366[(2)]);
var state_13366__$1 = state_13366;
var statearr_13380_13406 = state_13366__$1;
(statearr_13380_13406[(2)] = inst_13360);

(statearr_13380_13406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (10))){
var inst_13352 = (state_13366[(2)]);
var state_13366__$1 = state_13366;
var statearr_13381_13407 = state_13366__$1;
(statearr_13381_13407[(2)] = inst_13352);

(statearr_13381_13407[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13367 === (8))){
var inst_13349 = cljs.core.async.close_BANG_(to);
var state_13366__$1 = state_13366;
var statearr_13382_13408 = state_13366__$1;
(statearr_13382_13408[(2)] = inst_13349);

(statearr_13382_13408[(1)] = (10));


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
});})(c__13223__auto___13394))
;
return ((function (switch__13109__auto__,c__13223__auto___13394){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_13386 = [null,null,null,null,null,null,null,null];
(statearr_13386[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_13386[(1)] = (1));

return statearr_13386;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_13366){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13366);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13387){if((e13387 instanceof Object)){
var ex__13113__auto__ = e13387;
var statearr_13388_13409 = state_13366;
(statearr_13388_13409[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13366);

return cljs.core.cst$kw$recur;
} else {
throw e13387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13410 = state_13366;
state_13366 = G__13410;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_13366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_13366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___13394))
})();
var state__13225__auto__ = (function (){var statearr_13389 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13394);

return statearr_13389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___13394))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__13594){
var vec__13595 = p__13594;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13595,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13595,(1),null);
var job = vec__13595;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13223__auto___13777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___13777,res,vec__13595,v,p,job,jobs,results){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___13777,res,vec__13595,v,p,job,jobs,results){
return (function (state_13600){
var state_val_13601 = (state_13600[(1)]);
if((state_val_13601 === (1))){
var state_13600__$1 = state_13600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13600__$1,(2),res,v);
} else {
if((state_val_13601 === (2))){
var inst_13597 = (state_13600[(2)]);
var inst_13598 = cljs.core.async.close_BANG_(res);
var state_13600__$1 = (function (){var statearr_13602 = state_13600;
(statearr_13602[(7)] = inst_13597);

return statearr_13602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13600__$1,inst_13598);
} else {
return null;
}
}
});})(c__13223__auto___13777,res,vec__13595,v,p,job,jobs,results))
;
return ((function (switch__13109__auto__,c__13223__auto___13777,res,vec__13595,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13606 = [null,null,null,null,null,null,null,null];
(statearr_13606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13606[(1)] = (1));

return statearr_13606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13600){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13600);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13607){if((e13607 instanceof Object)){
var ex__13113__auto__ = e13607;
var statearr_13608_13778 = state_13600;
(statearr_13608_13778[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13600);

return cljs.core.cst$kw$recur;
} else {
throw e13607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13779 = state_13600;
state_13600 = G__13779;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___13777,res,vec__13595,v,p,job,jobs,results))
})();
var state__13225__auto__ = (function (){var statearr_13609 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13777);

return statearr_13609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___13777,res,vec__13595,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13610){
var vec__13611 = p__13610;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(1),null);
var job = vec__13611;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5574__auto___13780 = n;
var __13781 = (0);
while(true){
if((__13781 < n__5574__auto___13780)){
var G__13612_13782 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13612_13782) {
case "compute":
var c__13223__auto___13784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13781,c__13223__auto___13784,G__13612_13782,n__5574__auto___13780,jobs,results,process,async){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (__13781,c__13223__auto___13784,G__13612_13782,n__5574__auto___13780,jobs,results,process,async){
return (function (state_13625){
var state_val_13626 = (state_13625[(1)]);
if((state_val_13626 === (1))){
var state_13625__$1 = state_13625;
var statearr_13627_13785 = state_13625__$1;
(statearr_13627_13785[(2)] = null);

(statearr_13627_13785[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13626 === (2))){
var state_13625__$1 = state_13625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13625__$1,(4),jobs);
} else {
if((state_val_13626 === (3))){
var inst_13623 = (state_13625[(2)]);
var state_13625__$1 = state_13625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13625__$1,inst_13623);
} else {
if((state_val_13626 === (4))){
var inst_13615 = (state_13625[(2)]);
var inst_13616 = process(inst_13615);
var state_13625__$1 = state_13625;
if(cljs.core.truth_(inst_13616)){
var statearr_13628_13786 = state_13625__$1;
(statearr_13628_13786[(1)] = (5));

} else {
var statearr_13629_13787 = state_13625__$1;
(statearr_13629_13787[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13626 === (5))){
var state_13625__$1 = state_13625;
var statearr_13630_13788 = state_13625__$1;
(statearr_13630_13788[(2)] = null);

(statearr_13630_13788[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13626 === (6))){
var state_13625__$1 = state_13625;
var statearr_13631_13789 = state_13625__$1;
(statearr_13631_13789[(2)] = null);

(statearr_13631_13789[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13626 === (7))){
var inst_13621 = (state_13625[(2)]);
var state_13625__$1 = state_13625;
var statearr_13632_13790 = state_13625__$1;
(statearr_13632_13790[(2)] = inst_13621);

(statearr_13632_13790[(1)] = (3));


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
});})(__13781,c__13223__auto___13784,G__13612_13782,n__5574__auto___13780,jobs,results,process,async))
;
return ((function (__13781,switch__13109__auto__,c__13223__auto___13784,G__13612_13782,n__5574__auto___13780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13636 = [null,null,null,null,null,null,null];
(statearr_13636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13636[(1)] = (1));

return statearr_13636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13625){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13625);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13637){if((e13637 instanceof Object)){
var ex__13113__auto__ = e13637;
var statearr_13638_13791 = state_13625;
(statearr_13638_13791[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13625);

return cljs.core.cst$kw$recur;
} else {
throw e13637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13792 = state_13625;
state_13625 = G__13792;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(__13781,switch__13109__auto__,c__13223__auto___13784,G__13612_13782,n__5574__auto___13780,jobs,results,process,async))
})();
var state__13225__auto__ = (function (){var statearr_13639 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13784);

return statearr_13639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(__13781,c__13223__auto___13784,G__13612_13782,n__5574__auto___13780,jobs,results,process,async))
);


break;
case "async":
var c__13223__auto___13793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13781,c__13223__auto___13793,G__13612_13782,n__5574__auto___13780,jobs,results,process,async){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (__13781,c__13223__auto___13793,G__13612_13782,n__5574__auto___13780,jobs,results,process,async){
return (function (state_13652){
var state_val_13653 = (state_13652[(1)]);
if((state_val_13653 === (1))){
var state_13652__$1 = state_13652;
var statearr_13654_13794 = state_13652__$1;
(statearr_13654_13794[(2)] = null);

(statearr_13654_13794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13653 === (2))){
var state_13652__$1 = state_13652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13652__$1,(4),jobs);
} else {
if((state_val_13653 === (3))){
var inst_13650 = (state_13652[(2)]);
var state_13652__$1 = state_13652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13652__$1,inst_13650);
} else {
if((state_val_13653 === (4))){
var inst_13642 = (state_13652[(2)]);
var inst_13643 = async(inst_13642);
var state_13652__$1 = state_13652;
if(cljs.core.truth_(inst_13643)){
var statearr_13655_13795 = state_13652__$1;
(statearr_13655_13795[(1)] = (5));

} else {
var statearr_13656_13796 = state_13652__$1;
(statearr_13656_13796[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13653 === (5))){
var state_13652__$1 = state_13652;
var statearr_13657_13797 = state_13652__$1;
(statearr_13657_13797[(2)] = null);

(statearr_13657_13797[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13653 === (6))){
var state_13652__$1 = state_13652;
var statearr_13658_13798 = state_13652__$1;
(statearr_13658_13798[(2)] = null);

(statearr_13658_13798[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13653 === (7))){
var inst_13648 = (state_13652[(2)]);
var state_13652__$1 = state_13652;
var statearr_13659_13799 = state_13652__$1;
(statearr_13659_13799[(2)] = inst_13648);

(statearr_13659_13799[(1)] = (3));


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
});})(__13781,c__13223__auto___13793,G__13612_13782,n__5574__auto___13780,jobs,results,process,async))
;
return ((function (__13781,switch__13109__auto__,c__13223__auto___13793,G__13612_13782,n__5574__auto___13780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13663 = [null,null,null,null,null,null,null];
(statearr_13663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13663[(1)] = (1));

return statearr_13663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13652){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13652);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13664){if((e13664 instanceof Object)){
var ex__13113__auto__ = e13664;
var statearr_13665_13800 = state_13652;
(statearr_13665_13800[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13652);

return cljs.core.cst$kw$recur;
} else {
throw e13664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13801 = state_13652;
state_13652 = G__13801;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(__13781,switch__13109__auto__,c__13223__auto___13793,G__13612_13782,n__5574__auto___13780,jobs,results,process,async))
})();
var state__13225__auto__ = (function (){var statearr_13666 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13793);

return statearr_13666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(__13781,c__13223__auto___13793,G__13612_13782,n__5574__auto___13780,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13802 = (__13781 + (1));
__13781 = G__13802;
continue;
} else {
}
break;
}

var c__13223__auto___13803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___13803,jobs,results,process,async){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___13803,jobs,results,process,async){
return (function (state_13688){
var state_val_13689 = (state_13688[(1)]);
if((state_val_13689 === (1))){
var state_13688__$1 = state_13688;
var statearr_13690_13804 = state_13688__$1;
(statearr_13690_13804[(2)] = null);

(statearr_13690_13804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13689 === (2))){
var state_13688__$1 = state_13688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13688__$1,(4),from);
} else {
if((state_val_13689 === (3))){
var inst_13686 = (state_13688[(2)]);
var state_13688__$1 = state_13688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13688__$1,inst_13686);
} else {
if((state_val_13689 === (4))){
var inst_13669 = (state_13688[(7)]);
var inst_13669__$1 = (state_13688[(2)]);
var inst_13670 = (inst_13669__$1 == null);
var state_13688__$1 = (function (){var statearr_13691 = state_13688;
(statearr_13691[(7)] = inst_13669__$1);

return statearr_13691;
})();
if(cljs.core.truth_(inst_13670)){
var statearr_13692_13805 = state_13688__$1;
(statearr_13692_13805[(1)] = (5));

} else {
var statearr_13693_13806 = state_13688__$1;
(statearr_13693_13806[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13689 === (5))){
var inst_13672 = cljs.core.async.close_BANG_(jobs);
var state_13688__$1 = state_13688;
var statearr_13694_13807 = state_13688__$1;
(statearr_13694_13807[(2)] = inst_13672);

(statearr_13694_13807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13689 === (6))){
var inst_13674 = (state_13688[(8)]);
var inst_13669 = (state_13688[(7)]);
var inst_13674__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13676 = [inst_13669,inst_13674__$1];
var inst_13677 = (new cljs.core.PersistentVector(null,2,(5),inst_13675,inst_13676,null));
var state_13688__$1 = (function (){var statearr_13695 = state_13688;
(statearr_13695[(8)] = inst_13674__$1);

return statearr_13695;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13688__$1,(8),jobs,inst_13677);
} else {
if((state_val_13689 === (7))){
var inst_13684 = (state_13688[(2)]);
var state_13688__$1 = state_13688;
var statearr_13696_13808 = state_13688__$1;
(statearr_13696_13808[(2)] = inst_13684);

(statearr_13696_13808[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13689 === (8))){
var inst_13674 = (state_13688[(8)]);
var inst_13679 = (state_13688[(2)]);
var state_13688__$1 = (function (){var statearr_13697 = state_13688;
(statearr_13697[(9)] = inst_13679);

return statearr_13697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13688__$1,(9),results,inst_13674);
} else {
if((state_val_13689 === (9))){
var inst_13681 = (state_13688[(2)]);
var state_13688__$1 = (function (){var statearr_13698 = state_13688;
(statearr_13698[(10)] = inst_13681);

return statearr_13698;
})();
var statearr_13699_13809 = state_13688__$1;
(statearr_13699_13809[(2)] = null);

(statearr_13699_13809[(1)] = (2));


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
});})(c__13223__auto___13803,jobs,results,process,async))
;
return ((function (switch__13109__auto__,c__13223__auto___13803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13703[(1)] = (1));

return statearr_13703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13688){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13688);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13704){if((e13704 instanceof Object)){
var ex__13113__auto__ = e13704;
var statearr_13705_13810 = state_13688;
(statearr_13705_13810[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13688);

return cljs.core.cst$kw$recur;
} else {
throw e13704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13811 = state_13688;
state_13688 = G__13811;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___13803,jobs,results,process,async))
})();
var state__13225__auto__ = (function (){var statearr_13706 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13803);

return statearr_13706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___13803,jobs,results,process,async))
);


var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__,jobs,results,process,async){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__,jobs,results,process,async){
return (function (state_13744){
var state_val_13745 = (state_13744[(1)]);
if((state_val_13745 === (7))){
var inst_13740 = (state_13744[(2)]);
var state_13744__$1 = state_13744;
var statearr_13746_13812 = state_13744__$1;
(statearr_13746_13812[(2)] = inst_13740);

(statearr_13746_13812[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (20))){
var state_13744__$1 = state_13744;
var statearr_13747_13813 = state_13744__$1;
(statearr_13747_13813[(2)] = null);

(statearr_13747_13813[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (1))){
var state_13744__$1 = state_13744;
var statearr_13748_13814 = state_13744__$1;
(statearr_13748_13814[(2)] = null);

(statearr_13748_13814[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (4))){
var inst_13709 = (state_13744[(7)]);
var inst_13709__$1 = (state_13744[(2)]);
var inst_13710 = (inst_13709__$1 == null);
var state_13744__$1 = (function (){var statearr_13749 = state_13744;
(statearr_13749[(7)] = inst_13709__$1);

return statearr_13749;
})();
if(cljs.core.truth_(inst_13710)){
var statearr_13750_13815 = state_13744__$1;
(statearr_13750_13815[(1)] = (5));

} else {
var statearr_13751_13816 = state_13744__$1;
(statearr_13751_13816[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (15))){
var inst_13722 = (state_13744[(8)]);
var state_13744__$1 = state_13744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13744__$1,(18),to,inst_13722);
} else {
if((state_val_13745 === (21))){
var inst_13735 = (state_13744[(2)]);
var state_13744__$1 = state_13744;
var statearr_13752_13817 = state_13744__$1;
(statearr_13752_13817[(2)] = inst_13735);

(statearr_13752_13817[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (13))){
var inst_13737 = (state_13744[(2)]);
var state_13744__$1 = (function (){var statearr_13753 = state_13744;
(statearr_13753[(9)] = inst_13737);

return statearr_13753;
})();
var statearr_13754_13818 = state_13744__$1;
(statearr_13754_13818[(2)] = null);

(statearr_13754_13818[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (6))){
var inst_13709 = (state_13744[(7)]);
var state_13744__$1 = state_13744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13744__$1,(11),inst_13709);
} else {
if((state_val_13745 === (17))){
var inst_13730 = (state_13744[(2)]);
var state_13744__$1 = state_13744;
if(cljs.core.truth_(inst_13730)){
var statearr_13755_13819 = state_13744__$1;
(statearr_13755_13819[(1)] = (19));

} else {
var statearr_13756_13820 = state_13744__$1;
(statearr_13756_13820[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (3))){
var inst_13742 = (state_13744[(2)]);
var state_13744__$1 = state_13744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13744__$1,inst_13742);
} else {
if((state_val_13745 === (12))){
var inst_13719 = (state_13744[(10)]);
var state_13744__$1 = state_13744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13744__$1,(14),inst_13719);
} else {
if((state_val_13745 === (2))){
var state_13744__$1 = state_13744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13744__$1,(4),results);
} else {
if((state_val_13745 === (19))){
var state_13744__$1 = state_13744;
var statearr_13757_13821 = state_13744__$1;
(statearr_13757_13821[(2)] = null);

(statearr_13757_13821[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (11))){
var inst_13719 = (state_13744[(2)]);
var state_13744__$1 = (function (){var statearr_13758 = state_13744;
(statearr_13758[(10)] = inst_13719);

return statearr_13758;
})();
var statearr_13759_13822 = state_13744__$1;
(statearr_13759_13822[(2)] = null);

(statearr_13759_13822[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (9))){
var state_13744__$1 = state_13744;
var statearr_13760_13823 = state_13744__$1;
(statearr_13760_13823[(2)] = null);

(statearr_13760_13823[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (5))){
var state_13744__$1 = state_13744;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13761_13824 = state_13744__$1;
(statearr_13761_13824[(1)] = (8));

} else {
var statearr_13762_13825 = state_13744__$1;
(statearr_13762_13825[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (14))){
var inst_13722 = (state_13744[(8)]);
var inst_13724 = (state_13744[(11)]);
var inst_13722__$1 = (state_13744[(2)]);
var inst_13723 = (inst_13722__$1 == null);
var inst_13724__$1 = cljs.core.not(inst_13723);
var state_13744__$1 = (function (){var statearr_13763 = state_13744;
(statearr_13763[(8)] = inst_13722__$1);

(statearr_13763[(11)] = inst_13724__$1);

return statearr_13763;
})();
if(inst_13724__$1){
var statearr_13764_13826 = state_13744__$1;
(statearr_13764_13826[(1)] = (15));

} else {
var statearr_13765_13827 = state_13744__$1;
(statearr_13765_13827[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (16))){
var inst_13724 = (state_13744[(11)]);
var state_13744__$1 = state_13744;
var statearr_13766_13828 = state_13744__$1;
(statearr_13766_13828[(2)] = inst_13724);

(statearr_13766_13828[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (10))){
var inst_13716 = (state_13744[(2)]);
var state_13744__$1 = state_13744;
var statearr_13767_13829 = state_13744__$1;
(statearr_13767_13829[(2)] = inst_13716);

(statearr_13767_13829[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (18))){
var inst_13727 = (state_13744[(2)]);
var state_13744__$1 = state_13744;
var statearr_13768_13830 = state_13744__$1;
(statearr_13768_13830[(2)] = inst_13727);

(statearr_13768_13830[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13745 === (8))){
var inst_13713 = cljs.core.async.close_BANG_(to);
var state_13744__$1 = state_13744;
var statearr_13769_13831 = state_13744__$1;
(statearr_13769_13831[(2)] = inst_13713);

(statearr_13769_13831[(1)] = (10));


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
});})(c__13223__auto__,jobs,results,process,async))
;
return ((function (switch__13109__auto__,c__13223__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_13773 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__);

(statearr_13773[(1)] = (1));

return statearr_13773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1 = (function (state_13744){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13744);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13774){if((e13774 instanceof Object)){
var ex__13113__auto__ = e13774;
var statearr_13775_13832 = state_13744;
(statearr_13775_13832[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13744);

return cljs.core.cst$kw$recur;
} else {
throw e13774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13833 = state_13744;
state_13744 = G__13833;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__ = function(state_13744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1.call(this,state_13744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__,jobs,results,process,async))
})();
var state__13225__auto__ = (function (){var statearr_13776 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_13776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__,jobs,results,process,async))
);

return c__13223__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13834 = [];
var len__5725__auto___13837 = arguments.length;
var i__5726__auto___13838 = (0);
while(true){
if((i__5726__auto___13838 < len__5725__auto___13837)){
args13834.push((arguments[i__5726__auto___13838]));

var G__13839 = (i__5726__auto___13838 + (1));
i__5726__auto___13838 = G__13839;
continue;
} else {
}
break;
}

var G__13836 = args13834.length;
switch (G__13836) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13834.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13841 = [];
var len__5725__auto___13844 = arguments.length;
var i__5726__auto___13845 = (0);
while(true){
if((i__5726__auto___13845 < len__5725__auto___13844)){
args13841.push((arguments[i__5726__auto___13845]));

var G__13846 = (i__5726__auto___13845 + (1));
i__5726__auto___13845 = G__13846;
continue;
} else {
}
break;
}

var G__13843 = args13841.length;
switch (G__13843) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13841.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13848 = [];
var len__5725__auto___13901 = arguments.length;
var i__5726__auto___13902 = (0);
while(true){
if((i__5726__auto___13902 < len__5725__auto___13901)){
args13848.push((arguments[i__5726__auto___13902]));

var G__13903 = (i__5726__auto___13902 + (1));
i__5726__auto___13902 = G__13903;
continue;
} else {
}
break;
}

var G__13850 = args13848.length;
switch (G__13850) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13848.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13223__auto___13905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___13905,tc,fc){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___13905,tc,fc){
return (function (state_13876){
var state_val_13877 = (state_13876[(1)]);
if((state_val_13877 === (7))){
var inst_13872 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
var statearr_13878_13906 = state_13876__$1;
(statearr_13878_13906[(2)] = inst_13872);

(statearr_13878_13906[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (1))){
var state_13876__$1 = state_13876;
var statearr_13879_13907 = state_13876__$1;
(statearr_13879_13907[(2)] = null);

(statearr_13879_13907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (4))){
var inst_13853 = (state_13876[(7)]);
var inst_13853__$1 = (state_13876[(2)]);
var inst_13854 = (inst_13853__$1 == null);
var state_13876__$1 = (function (){var statearr_13880 = state_13876;
(statearr_13880[(7)] = inst_13853__$1);

return statearr_13880;
})();
if(cljs.core.truth_(inst_13854)){
var statearr_13881_13908 = state_13876__$1;
(statearr_13881_13908[(1)] = (5));

} else {
var statearr_13882_13909 = state_13876__$1;
(statearr_13882_13909[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (13))){
var state_13876__$1 = state_13876;
var statearr_13883_13910 = state_13876__$1;
(statearr_13883_13910[(2)] = null);

(statearr_13883_13910[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (6))){
var inst_13853 = (state_13876[(7)]);
var inst_13859 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13853) : p.call(null,inst_13853));
var state_13876__$1 = state_13876;
if(cljs.core.truth_(inst_13859)){
var statearr_13884_13911 = state_13876__$1;
(statearr_13884_13911[(1)] = (9));

} else {
var statearr_13885_13912 = state_13876__$1;
(statearr_13885_13912[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (3))){
var inst_13874 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13876__$1,inst_13874);
} else {
if((state_val_13877 === (12))){
var state_13876__$1 = state_13876;
var statearr_13886_13913 = state_13876__$1;
(statearr_13886_13913[(2)] = null);

(statearr_13886_13913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (2))){
var state_13876__$1 = state_13876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13876__$1,(4),ch);
} else {
if((state_val_13877 === (11))){
var inst_13853 = (state_13876[(7)]);
var inst_13863 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13876__$1,(8),inst_13863,inst_13853);
} else {
if((state_val_13877 === (9))){
var state_13876__$1 = state_13876;
var statearr_13887_13914 = state_13876__$1;
(statearr_13887_13914[(2)] = tc);

(statearr_13887_13914[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (5))){
var inst_13856 = cljs.core.async.close_BANG_(tc);
var inst_13857 = cljs.core.async.close_BANG_(fc);
var state_13876__$1 = (function (){var statearr_13888 = state_13876;
(statearr_13888[(8)] = inst_13856);

return statearr_13888;
})();
var statearr_13889_13915 = state_13876__$1;
(statearr_13889_13915[(2)] = inst_13857);

(statearr_13889_13915[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (14))){
var inst_13870 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
var statearr_13890_13916 = state_13876__$1;
(statearr_13890_13916[(2)] = inst_13870);

(statearr_13890_13916[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (10))){
var state_13876__$1 = state_13876;
var statearr_13891_13917 = state_13876__$1;
(statearr_13891_13917[(2)] = fc);

(statearr_13891_13917[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13877 === (8))){
var inst_13865 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
if(cljs.core.truth_(inst_13865)){
var statearr_13892_13918 = state_13876__$1;
(statearr_13892_13918[(1)] = (12));

} else {
var statearr_13893_13919 = state_13876__$1;
(statearr_13893_13919[(1)] = (13));

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
});})(c__13223__auto___13905,tc,fc))
;
return ((function (switch__13109__auto__,c__13223__auto___13905,tc,fc){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_13897 = [null,null,null,null,null,null,null,null,null];
(statearr_13897[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_13897[(1)] = (1));

return statearr_13897;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_13876){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13876);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e13898){if((e13898 instanceof Object)){
var ex__13113__auto__ = e13898;
var statearr_13899_13920 = state_13876;
(statearr_13899_13920[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13876);

return cljs.core.cst$kw$recur;
} else {
throw e13898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__13921 = state_13876;
state_13876 = G__13921;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_13876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_13876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___13905,tc,fc))
})();
var state__13225__auto__ = (function (){var statearr_13900 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_13900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___13905);

return statearr_13900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___13905,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_13985){
var state_val_13986 = (state_13985[(1)]);
if((state_val_13986 === (7))){
var inst_13981 = (state_13985[(2)]);
var state_13985__$1 = state_13985;
var statearr_13987_14008 = state_13985__$1;
(statearr_13987_14008[(2)] = inst_13981);

(statearr_13987_14008[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13986 === (1))){
var inst_13965 = init;
var state_13985__$1 = (function (){var statearr_13988 = state_13985;
(statearr_13988[(7)] = inst_13965);

return statearr_13988;
})();
var statearr_13989_14009 = state_13985__$1;
(statearr_13989_14009[(2)] = null);

(statearr_13989_14009[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13986 === (4))){
var inst_13968 = (state_13985[(8)]);
var inst_13968__$1 = (state_13985[(2)]);
var inst_13969 = (inst_13968__$1 == null);
var state_13985__$1 = (function (){var statearr_13990 = state_13985;
(statearr_13990[(8)] = inst_13968__$1);

return statearr_13990;
})();
if(cljs.core.truth_(inst_13969)){
var statearr_13991_14010 = state_13985__$1;
(statearr_13991_14010[(1)] = (5));

} else {
var statearr_13992_14011 = state_13985__$1;
(statearr_13992_14011[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13986 === (6))){
var inst_13965 = (state_13985[(7)]);
var inst_13972 = (state_13985[(9)]);
var inst_13968 = (state_13985[(8)]);
var inst_13972__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13965,inst_13968) : f.call(null,inst_13965,inst_13968));
var inst_13973 = cljs.core.reduced_QMARK_(inst_13972__$1);
var state_13985__$1 = (function (){var statearr_13993 = state_13985;
(statearr_13993[(9)] = inst_13972__$1);

return statearr_13993;
})();
if(inst_13973){
var statearr_13994_14012 = state_13985__$1;
(statearr_13994_14012[(1)] = (8));

} else {
var statearr_13995_14013 = state_13985__$1;
(statearr_13995_14013[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13986 === (3))){
var inst_13983 = (state_13985[(2)]);
var state_13985__$1 = state_13985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13985__$1,inst_13983);
} else {
if((state_val_13986 === (2))){
var state_13985__$1 = state_13985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13985__$1,(4),ch);
} else {
if((state_val_13986 === (9))){
var inst_13972 = (state_13985[(9)]);
var inst_13965 = inst_13972;
var state_13985__$1 = (function (){var statearr_13996 = state_13985;
(statearr_13996[(7)] = inst_13965);

return statearr_13996;
})();
var statearr_13997_14014 = state_13985__$1;
(statearr_13997_14014[(2)] = null);

(statearr_13997_14014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13986 === (5))){
var inst_13965 = (state_13985[(7)]);
var state_13985__$1 = state_13985;
var statearr_13998_14015 = state_13985__$1;
(statearr_13998_14015[(2)] = inst_13965);

(statearr_13998_14015[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13986 === (10))){
var inst_13979 = (state_13985[(2)]);
var state_13985__$1 = state_13985;
var statearr_13999_14016 = state_13985__$1;
(statearr_13999_14016[(2)] = inst_13979);

(statearr_13999_14016[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13986 === (8))){
var inst_13972 = (state_13985[(9)]);
var inst_13975 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_13972) : cljs.core.deref.call(null,inst_13972));
var state_13985__$1 = state_13985;
var statearr_14000_14017 = state_13985__$1;
(statearr_14000_14017[(2)] = inst_13975);

(statearr_14000_14017[(1)] = (10));


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
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13110__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13110__auto____0 = (function (){
var statearr_14004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14004[(0)] = cljs$core$async$reduce_$_state_machine__13110__auto__);

(statearr_14004[(1)] = (1));

return statearr_14004;
});
var cljs$core$async$reduce_$_state_machine__13110__auto____1 = (function (state_13985){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_13985);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e14005){if((e14005 instanceof Object)){
var ex__13113__auto__ = e14005;
var statearr_14006_14018 = state_13985;
(statearr_14006_14018[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13985);

return cljs.core.cst$kw$recur;
} else {
throw e14005;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__14019 = state_13985;
state_13985 = G__14019;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13110__auto__ = function(state_13985){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13110__auto____1.call(this,state_13985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13110__auto____0;
cljs$core$async$reduce_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13110__auto____1;
return cljs$core$async$reduce_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_14007 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_14007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_14007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14020 = [];
var len__5725__auto___14072 = arguments.length;
var i__5726__auto___14073 = (0);
while(true){
if((i__5726__auto___14073 < len__5725__auto___14072)){
args14020.push((arguments[i__5726__auto___14073]));

var G__14074 = (i__5726__auto___14073 + (1));
i__5726__auto___14073 = G__14074;
continue;
} else {
}
break;
}

var G__14022 = args14020.length;
switch (G__14022) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14020.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_14047){
var state_val_14048 = (state_14047[(1)]);
if((state_val_14048 === (7))){
var inst_14029 = (state_14047[(2)]);
var state_14047__$1 = state_14047;
var statearr_14049_14076 = state_14047__$1;
(statearr_14049_14076[(2)] = inst_14029);

(statearr_14049_14076[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (1))){
var inst_14023 = cljs.core.seq(coll);
var inst_14024 = inst_14023;
var state_14047__$1 = (function (){var statearr_14050 = state_14047;
(statearr_14050[(7)] = inst_14024);

return statearr_14050;
})();
var statearr_14051_14077 = state_14047__$1;
(statearr_14051_14077[(2)] = null);

(statearr_14051_14077[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (4))){
var inst_14024 = (state_14047[(7)]);
var inst_14027 = cljs.core.first(inst_14024);
var state_14047__$1 = state_14047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14047__$1,(7),ch,inst_14027);
} else {
if((state_val_14048 === (13))){
var inst_14041 = (state_14047[(2)]);
var state_14047__$1 = state_14047;
var statearr_14052_14078 = state_14047__$1;
(statearr_14052_14078[(2)] = inst_14041);

(statearr_14052_14078[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (6))){
var inst_14032 = (state_14047[(2)]);
var state_14047__$1 = state_14047;
if(cljs.core.truth_(inst_14032)){
var statearr_14053_14079 = state_14047__$1;
(statearr_14053_14079[(1)] = (8));

} else {
var statearr_14054_14080 = state_14047__$1;
(statearr_14054_14080[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (3))){
var inst_14045 = (state_14047[(2)]);
var state_14047__$1 = state_14047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14047__$1,inst_14045);
} else {
if((state_val_14048 === (12))){
var state_14047__$1 = state_14047;
var statearr_14055_14081 = state_14047__$1;
(statearr_14055_14081[(2)] = null);

(statearr_14055_14081[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (2))){
var inst_14024 = (state_14047[(7)]);
var state_14047__$1 = state_14047;
if(cljs.core.truth_(inst_14024)){
var statearr_14056_14082 = state_14047__$1;
(statearr_14056_14082[(1)] = (4));

} else {
var statearr_14057_14083 = state_14047__$1;
(statearr_14057_14083[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (11))){
var inst_14038 = cljs.core.async.close_BANG_(ch);
var state_14047__$1 = state_14047;
var statearr_14058_14084 = state_14047__$1;
(statearr_14058_14084[(2)] = inst_14038);

(statearr_14058_14084[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (9))){
var state_14047__$1 = state_14047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14059_14085 = state_14047__$1;
(statearr_14059_14085[(1)] = (11));

} else {
var statearr_14060_14086 = state_14047__$1;
(statearr_14060_14086[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (5))){
var inst_14024 = (state_14047[(7)]);
var state_14047__$1 = state_14047;
var statearr_14061_14087 = state_14047__$1;
(statearr_14061_14087[(2)] = inst_14024);

(statearr_14061_14087[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (10))){
var inst_14043 = (state_14047[(2)]);
var state_14047__$1 = state_14047;
var statearr_14062_14088 = state_14047__$1;
(statearr_14062_14088[(2)] = inst_14043);

(statearr_14062_14088[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14048 === (8))){
var inst_14024 = (state_14047[(7)]);
var inst_14034 = cljs.core.next(inst_14024);
var inst_14024__$1 = inst_14034;
var state_14047__$1 = (function (){var statearr_14063 = state_14047;
(statearr_14063[(7)] = inst_14024__$1);

return statearr_14063;
})();
var statearr_14064_14089 = state_14047__$1;
(statearr_14064_14089[(2)] = null);

(statearr_14064_14089[(1)] = (2));


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
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_14068 = [null,null,null,null,null,null,null,null];
(statearr_14068[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_14068[(1)] = (1));

return statearr_14068;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_14047){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_14047);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e14069){if((e14069 instanceof Object)){
var ex__13113__auto__ = e14069;
var statearr_14070_14090 = state_14047;
(statearr_14070_14090[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14047);

return cljs.core.cst$kw$recur;
} else {
throw e14069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__14091 = state_14047;
state_14047 = G__14091;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_14047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_14047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_14071 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_14071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_14071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5326__auto__ = (((_ == null))?null:_);
var m__5327__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5327__auto__.call(null,_));
} else {
var m__5327__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5327__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5327__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5327__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5327__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto__.call(null,m,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto__.call(null,m));
} else {
var m__5327__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__14316 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14316) : cljs.core.atom.call(null,G__14316));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14317 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14317 = (function (mult,ch,cs,meta14318){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14318 = meta14318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14319,meta14318__$1){
var self__ = this;
var _14319__$1 = this;
return (new cljs.core.async.t_cljs$core$async14317(self__.mult,self__.ch,self__.cs,meta14318__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14319){
var self__ = this;
var _14319__$1 = this;
return self__.meta14318;
});})(cs))
;

cljs.core.async.t_cljs$core$async14317.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14317.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14317.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14317.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14317.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14320_14540 = self__.cs;
var G__14321_14541 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14320_14540,G__14321_14541) : cljs.core.reset_BANG_.call(null,G__14320_14540,G__14321_14541));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14317.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14318], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14317.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14317";

cljs.core.async.t_cljs$core$async14317.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async14317");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14317 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14317(mult__$1,ch__$1,cs__$1,meta14318){
return (new cljs.core.async.t_cljs$core$async14317(mult__$1,ch__$1,cs__$1,meta14318));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14317(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13223__auto___14542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___14542,cs,m,dchan,dctr,done){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___14542,cs,m,dchan,dctr,done){
return (function (state_14452){
var state_val_14453 = (state_14452[(1)]);
if((state_val_14453 === (7))){
var inst_14448 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14454_14543 = state_14452__$1;
(statearr_14454_14543[(2)] = inst_14448);

(statearr_14454_14543[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (20))){
var inst_14353 = (state_14452[(7)]);
var inst_14363 = cljs.core.first(inst_14353);
var inst_14364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14363,(0),null);
var inst_14365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14363,(1),null);
var state_14452__$1 = (function (){var statearr_14455 = state_14452;
(statearr_14455[(8)] = inst_14364);

return statearr_14455;
})();
if(cljs.core.truth_(inst_14365)){
var statearr_14456_14544 = state_14452__$1;
(statearr_14456_14544[(1)] = (22));

} else {
var statearr_14457_14545 = state_14452__$1;
(statearr_14457_14545[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (27))){
var inst_14393 = (state_14452[(9)]);
var inst_14395 = (state_14452[(10)]);
var inst_14324 = (state_14452[(11)]);
var inst_14400 = (state_14452[(12)]);
var inst_14400__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14393,inst_14395);
var inst_14401 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14400__$1,inst_14324,done);
var state_14452__$1 = (function (){var statearr_14458 = state_14452;
(statearr_14458[(12)] = inst_14400__$1);

return statearr_14458;
})();
if(cljs.core.truth_(inst_14401)){
var statearr_14459_14546 = state_14452__$1;
(statearr_14459_14546[(1)] = (30));

} else {
var statearr_14460_14547 = state_14452__$1;
(statearr_14460_14547[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (1))){
var state_14452__$1 = state_14452;
var statearr_14461_14548 = state_14452__$1;
(statearr_14461_14548[(2)] = null);

(statearr_14461_14548[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (24))){
var inst_14353 = (state_14452[(7)]);
var inst_14370 = (state_14452[(2)]);
var inst_14371 = cljs.core.next(inst_14353);
var inst_14333 = inst_14371;
var inst_14334 = null;
var inst_14335 = (0);
var inst_14336 = (0);
var state_14452__$1 = (function (){var statearr_14462 = state_14452;
(statearr_14462[(13)] = inst_14333);

(statearr_14462[(14)] = inst_14370);

(statearr_14462[(15)] = inst_14336);

(statearr_14462[(16)] = inst_14334);

(statearr_14462[(17)] = inst_14335);

return statearr_14462;
})();
var statearr_14463_14549 = state_14452__$1;
(statearr_14463_14549[(2)] = null);

(statearr_14463_14549[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (39))){
var state_14452__$1 = state_14452;
var statearr_14467_14550 = state_14452__$1;
(statearr_14467_14550[(2)] = null);

(statearr_14467_14550[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (4))){
var inst_14324 = (state_14452[(11)]);
var inst_14324__$1 = (state_14452[(2)]);
var inst_14325 = (inst_14324__$1 == null);
var state_14452__$1 = (function (){var statearr_14468 = state_14452;
(statearr_14468[(11)] = inst_14324__$1);

return statearr_14468;
})();
if(cljs.core.truth_(inst_14325)){
var statearr_14469_14551 = state_14452__$1;
(statearr_14469_14551[(1)] = (5));

} else {
var statearr_14470_14552 = state_14452__$1;
(statearr_14470_14552[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (15))){
var inst_14333 = (state_14452[(13)]);
var inst_14336 = (state_14452[(15)]);
var inst_14334 = (state_14452[(16)]);
var inst_14335 = (state_14452[(17)]);
var inst_14349 = (state_14452[(2)]);
var inst_14350 = (inst_14336 + (1));
var tmp14464 = inst_14333;
var tmp14465 = inst_14334;
var tmp14466 = inst_14335;
var inst_14333__$1 = tmp14464;
var inst_14334__$1 = tmp14465;
var inst_14335__$1 = tmp14466;
var inst_14336__$1 = inst_14350;
var state_14452__$1 = (function (){var statearr_14471 = state_14452;
(statearr_14471[(13)] = inst_14333__$1);

(statearr_14471[(18)] = inst_14349);

(statearr_14471[(15)] = inst_14336__$1);

(statearr_14471[(16)] = inst_14334__$1);

(statearr_14471[(17)] = inst_14335__$1);

return statearr_14471;
})();
var statearr_14472_14553 = state_14452__$1;
(statearr_14472_14553[(2)] = null);

(statearr_14472_14553[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (21))){
var inst_14374 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14476_14554 = state_14452__$1;
(statearr_14476_14554[(2)] = inst_14374);

(statearr_14476_14554[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (31))){
var inst_14400 = (state_14452[(12)]);
var inst_14404 = done(null);
var inst_14405 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14400);
var state_14452__$1 = (function (){var statearr_14477 = state_14452;
(statearr_14477[(19)] = inst_14404);

return statearr_14477;
})();
var statearr_14478_14555 = state_14452__$1;
(statearr_14478_14555[(2)] = inst_14405);

(statearr_14478_14555[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (32))){
var inst_14392 = (state_14452[(20)]);
var inst_14394 = (state_14452[(21)]);
var inst_14393 = (state_14452[(9)]);
var inst_14395 = (state_14452[(10)]);
var inst_14407 = (state_14452[(2)]);
var inst_14408 = (inst_14395 + (1));
var tmp14473 = inst_14392;
var tmp14474 = inst_14394;
var tmp14475 = inst_14393;
var inst_14392__$1 = tmp14473;
var inst_14393__$1 = tmp14475;
var inst_14394__$1 = tmp14474;
var inst_14395__$1 = inst_14408;
var state_14452__$1 = (function (){var statearr_14479 = state_14452;
(statearr_14479[(20)] = inst_14392__$1);

(statearr_14479[(21)] = inst_14394__$1);

(statearr_14479[(9)] = inst_14393__$1);

(statearr_14479[(10)] = inst_14395__$1);

(statearr_14479[(22)] = inst_14407);

return statearr_14479;
})();
var statearr_14480_14556 = state_14452__$1;
(statearr_14480_14556[(2)] = null);

(statearr_14480_14556[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (40))){
var inst_14420 = (state_14452[(23)]);
var inst_14424 = done(null);
var inst_14425 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14420);
var state_14452__$1 = (function (){var statearr_14481 = state_14452;
(statearr_14481[(24)] = inst_14424);

return statearr_14481;
})();
var statearr_14482_14557 = state_14452__$1;
(statearr_14482_14557[(2)] = inst_14425);

(statearr_14482_14557[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (33))){
var inst_14411 = (state_14452[(25)]);
var inst_14413 = cljs.core.chunked_seq_QMARK_(inst_14411);
var state_14452__$1 = state_14452;
if(inst_14413){
var statearr_14483_14558 = state_14452__$1;
(statearr_14483_14558[(1)] = (36));

} else {
var statearr_14484_14559 = state_14452__$1;
(statearr_14484_14559[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (13))){
var inst_14343 = (state_14452[(26)]);
var inst_14346 = cljs.core.async.close_BANG_(inst_14343);
var state_14452__$1 = state_14452;
var statearr_14485_14560 = state_14452__$1;
(statearr_14485_14560[(2)] = inst_14346);

(statearr_14485_14560[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (22))){
var inst_14364 = (state_14452[(8)]);
var inst_14367 = cljs.core.async.close_BANG_(inst_14364);
var state_14452__$1 = state_14452;
var statearr_14486_14561 = state_14452__$1;
(statearr_14486_14561[(2)] = inst_14367);

(statearr_14486_14561[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (36))){
var inst_14411 = (state_14452[(25)]);
var inst_14415 = cljs.core.chunk_first(inst_14411);
var inst_14416 = cljs.core.chunk_rest(inst_14411);
var inst_14417 = cljs.core.count(inst_14415);
var inst_14392 = inst_14416;
var inst_14393 = inst_14415;
var inst_14394 = inst_14417;
var inst_14395 = (0);
var state_14452__$1 = (function (){var statearr_14487 = state_14452;
(statearr_14487[(20)] = inst_14392);

(statearr_14487[(21)] = inst_14394);

(statearr_14487[(9)] = inst_14393);

(statearr_14487[(10)] = inst_14395);

return statearr_14487;
})();
var statearr_14488_14562 = state_14452__$1;
(statearr_14488_14562[(2)] = null);

(statearr_14488_14562[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (41))){
var inst_14411 = (state_14452[(25)]);
var inst_14427 = (state_14452[(2)]);
var inst_14428 = cljs.core.next(inst_14411);
var inst_14392 = inst_14428;
var inst_14393 = null;
var inst_14394 = (0);
var inst_14395 = (0);
var state_14452__$1 = (function (){var statearr_14489 = state_14452;
(statearr_14489[(20)] = inst_14392);

(statearr_14489[(21)] = inst_14394);

(statearr_14489[(27)] = inst_14427);

(statearr_14489[(9)] = inst_14393);

(statearr_14489[(10)] = inst_14395);

return statearr_14489;
})();
var statearr_14490_14563 = state_14452__$1;
(statearr_14490_14563[(2)] = null);

(statearr_14490_14563[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (43))){
var state_14452__$1 = state_14452;
var statearr_14491_14564 = state_14452__$1;
(statearr_14491_14564[(2)] = null);

(statearr_14491_14564[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (29))){
var inst_14436 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14492_14565 = state_14452__$1;
(statearr_14492_14565[(2)] = inst_14436);

(statearr_14492_14565[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (44))){
var inst_14445 = (state_14452[(2)]);
var state_14452__$1 = (function (){var statearr_14493 = state_14452;
(statearr_14493[(28)] = inst_14445);

return statearr_14493;
})();
var statearr_14494_14566 = state_14452__$1;
(statearr_14494_14566[(2)] = null);

(statearr_14494_14566[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (6))){
var inst_14384 = (state_14452[(29)]);
var inst_14383 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14384__$1 = cljs.core.keys(inst_14383);
var inst_14385 = cljs.core.count(inst_14384__$1);
var inst_14386 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14385) : cljs.core.reset_BANG_.call(null,dctr,inst_14385));
var inst_14391 = cljs.core.seq(inst_14384__$1);
var inst_14392 = inst_14391;
var inst_14393 = null;
var inst_14394 = (0);
var inst_14395 = (0);
var state_14452__$1 = (function (){var statearr_14495 = state_14452;
(statearr_14495[(20)] = inst_14392);

(statearr_14495[(21)] = inst_14394);

(statearr_14495[(9)] = inst_14393);

(statearr_14495[(10)] = inst_14395);

(statearr_14495[(30)] = inst_14386);

(statearr_14495[(29)] = inst_14384__$1);

return statearr_14495;
})();
var statearr_14496_14567 = state_14452__$1;
(statearr_14496_14567[(2)] = null);

(statearr_14496_14567[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (28))){
var inst_14392 = (state_14452[(20)]);
var inst_14411 = (state_14452[(25)]);
var inst_14411__$1 = cljs.core.seq(inst_14392);
var state_14452__$1 = (function (){var statearr_14497 = state_14452;
(statearr_14497[(25)] = inst_14411__$1);

return statearr_14497;
})();
if(inst_14411__$1){
var statearr_14498_14568 = state_14452__$1;
(statearr_14498_14568[(1)] = (33));

} else {
var statearr_14499_14569 = state_14452__$1;
(statearr_14499_14569[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (25))){
var inst_14394 = (state_14452[(21)]);
var inst_14395 = (state_14452[(10)]);
var inst_14397 = (inst_14395 < inst_14394);
var inst_14398 = inst_14397;
var state_14452__$1 = state_14452;
if(cljs.core.truth_(inst_14398)){
var statearr_14500_14570 = state_14452__$1;
(statearr_14500_14570[(1)] = (27));

} else {
var statearr_14501_14571 = state_14452__$1;
(statearr_14501_14571[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (34))){
var state_14452__$1 = state_14452;
var statearr_14502_14572 = state_14452__$1;
(statearr_14502_14572[(2)] = null);

(statearr_14502_14572[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (17))){
var state_14452__$1 = state_14452;
var statearr_14503_14573 = state_14452__$1;
(statearr_14503_14573[(2)] = null);

(statearr_14503_14573[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (3))){
var inst_14450 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14452__$1,inst_14450);
} else {
if((state_val_14453 === (12))){
var inst_14379 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14504_14574 = state_14452__$1;
(statearr_14504_14574[(2)] = inst_14379);

(statearr_14504_14574[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (2))){
var state_14452__$1 = state_14452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14452__$1,(4),ch);
} else {
if((state_val_14453 === (23))){
var state_14452__$1 = state_14452;
var statearr_14505_14575 = state_14452__$1;
(statearr_14505_14575[(2)] = null);

(statearr_14505_14575[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (35))){
var inst_14434 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14506_14576 = state_14452__$1;
(statearr_14506_14576[(2)] = inst_14434);

(statearr_14506_14576[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (19))){
var inst_14353 = (state_14452[(7)]);
var inst_14357 = cljs.core.chunk_first(inst_14353);
var inst_14358 = cljs.core.chunk_rest(inst_14353);
var inst_14359 = cljs.core.count(inst_14357);
var inst_14333 = inst_14358;
var inst_14334 = inst_14357;
var inst_14335 = inst_14359;
var inst_14336 = (0);
var state_14452__$1 = (function (){var statearr_14507 = state_14452;
(statearr_14507[(13)] = inst_14333);

(statearr_14507[(15)] = inst_14336);

(statearr_14507[(16)] = inst_14334);

(statearr_14507[(17)] = inst_14335);

return statearr_14507;
})();
var statearr_14508_14577 = state_14452__$1;
(statearr_14508_14577[(2)] = null);

(statearr_14508_14577[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (11))){
var inst_14333 = (state_14452[(13)]);
var inst_14353 = (state_14452[(7)]);
var inst_14353__$1 = cljs.core.seq(inst_14333);
var state_14452__$1 = (function (){var statearr_14509 = state_14452;
(statearr_14509[(7)] = inst_14353__$1);

return statearr_14509;
})();
if(inst_14353__$1){
var statearr_14510_14578 = state_14452__$1;
(statearr_14510_14578[(1)] = (16));

} else {
var statearr_14511_14579 = state_14452__$1;
(statearr_14511_14579[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (9))){
var inst_14381 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14512_14580 = state_14452__$1;
(statearr_14512_14580[(2)] = inst_14381);

(statearr_14512_14580[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (5))){
var inst_14331 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14332 = cljs.core.seq(inst_14331);
var inst_14333 = inst_14332;
var inst_14334 = null;
var inst_14335 = (0);
var inst_14336 = (0);
var state_14452__$1 = (function (){var statearr_14513 = state_14452;
(statearr_14513[(13)] = inst_14333);

(statearr_14513[(15)] = inst_14336);

(statearr_14513[(16)] = inst_14334);

(statearr_14513[(17)] = inst_14335);

return statearr_14513;
})();
var statearr_14514_14581 = state_14452__$1;
(statearr_14514_14581[(2)] = null);

(statearr_14514_14581[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (14))){
var state_14452__$1 = state_14452;
var statearr_14515_14582 = state_14452__$1;
(statearr_14515_14582[(2)] = null);

(statearr_14515_14582[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (45))){
var inst_14442 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14516_14583 = state_14452__$1;
(statearr_14516_14583[(2)] = inst_14442);

(statearr_14516_14583[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (26))){
var inst_14384 = (state_14452[(29)]);
var inst_14438 = (state_14452[(2)]);
var inst_14439 = cljs.core.seq(inst_14384);
var state_14452__$1 = (function (){var statearr_14517 = state_14452;
(statearr_14517[(31)] = inst_14438);

return statearr_14517;
})();
if(inst_14439){
var statearr_14518_14584 = state_14452__$1;
(statearr_14518_14584[(1)] = (42));

} else {
var statearr_14519_14585 = state_14452__$1;
(statearr_14519_14585[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (16))){
var inst_14353 = (state_14452[(7)]);
var inst_14355 = cljs.core.chunked_seq_QMARK_(inst_14353);
var state_14452__$1 = state_14452;
if(inst_14355){
var statearr_14520_14586 = state_14452__$1;
(statearr_14520_14586[(1)] = (19));

} else {
var statearr_14521_14587 = state_14452__$1;
(statearr_14521_14587[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (38))){
var inst_14431 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14522_14588 = state_14452__$1;
(statearr_14522_14588[(2)] = inst_14431);

(statearr_14522_14588[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (30))){
var state_14452__$1 = state_14452;
var statearr_14523_14589 = state_14452__$1;
(statearr_14523_14589[(2)] = null);

(statearr_14523_14589[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (10))){
var inst_14336 = (state_14452[(15)]);
var inst_14334 = (state_14452[(16)]);
var inst_14342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14334,inst_14336);
var inst_14343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14342,(0),null);
var inst_14344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14342,(1),null);
var state_14452__$1 = (function (){var statearr_14524 = state_14452;
(statearr_14524[(26)] = inst_14343);

return statearr_14524;
})();
if(cljs.core.truth_(inst_14344)){
var statearr_14525_14590 = state_14452__$1;
(statearr_14525_14590[(1)] = (13));

} else {
var statearr_14526_14591 = state_14452__$1;
(statearr_14526_14591[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (18))){
var inst_14377 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14527_14592 = state_14452__$1;
(statearr_14527_14592[(2)] = inst_14377);

(statearr_14527_14592[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (42))){
var state_14452__$1 = state_14452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14452__$1,(45),dchan);
} else {
if((state_val_14453 === (37))){
var inst_14420 = (state_14452[(23)]);
var inst_14324 = (state_14452[(11)]);
var inst_14411 = (state_14452[(25)]);
var inst_14420__$1 = cljs.core.first(inst_14411);
var inst_14421 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14420__$1,inst_14324,done);
var state_14452__$1 = (function (){var statearr_14528 = state_14452;
(statearr_14528[(23)] = inst_14420__$1);

return statearr_14528;
})();
if(cljs.core.truth_(inst_14421)){
var statearr_14529_14593 = state_14452__$1;
(statearr_14529_14593[(1)] = (39));

} else {
var statearr_14530_14594 = state_14452__$1;
(statearr_14530_14594[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14453 === (8))){
var inst_14336 = (state_14452[(15)]);
var inst_14335 = (state_14452[(17)]);
var inst_14338 = (inst_14336 < inst_14335);
var inst_14339 = inst_14338;
var state_14452__$1 = state_14452;
if(cljs.core.truth_(inst_14339)){
var statearr_14531_14595 = state_14452__$1;
(statearr_14531_14595[(1)] = (10));

} else {
var statearr_14532_14596 = state_14452__$1;
(statearr_14532_14596[(1)] = (11));

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
});})(c__13223__auto___14542,cs,m,dchan,dctr,done))
;
return ((function (switch__13109__auto__,c__13223__auto___14542,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13110__auto__ = null;
var cljs$core$async$mult_$_state_machine__13110__auto____0 = (function (){
var statearr_14536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14536[(0)] = cljs$core$async$mult_$_state_machine__13110__auto__);

(statearr_14536[(1)] = (1));

return statearr_14536;
});
var cljs$core$async$mult_$_state_machine__13110__auto____1 = (function (state_14452){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_14452);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e14537){if((e14537 instanceof Object)){
var ex__13113__auto__ = e14537;
var statearr_14538_14597 = state_14452;
(statearr_14538_14597[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14452);

return cljs.core.cst$kw$recur;
} else {
throw e14537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__14598 = state_14452;
state_14452 = G__14598;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13110__auto__ = function(state_14452){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13110__auto____1.call(this,state_14452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13110__auto____0;
cljs$core$async$mult_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13110__auto____1;
return cljs$core$async$mult_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___14542,cs,m,dchan,dctr,done))
})();
var state__13225__auto__ = (function (){var statearr_14539 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_14539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___14542);

return statearr_14539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___14542,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14599 = [];
var len__5725__auto___14602 = arguments.length;
var i__5726__auto___14603 = (0);
while(true){
if((i__5726__auto___14603 < len__5725__auto___14602)){
args14599.push((arguments[i__5726__auto___14603]));

var G__14604 = (i__5726__auto___14603 + (1));
i__5726__auto___14603 = G__14604;
continue;
} else {
}
break;
}

var G__14601 = args14599.length;
switch (G__14601) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14599.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto__.call(null,m,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto__.call(null,m,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto__.call(null,m));
} else {
var m__5327__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5327__auto__.call(null,m,state_map));
} else {
var m__5327__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5327__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5327__auto__.call(null,m,mode));
} else {
var m__5327__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5327__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5725__auto___14616 = arguments.length;
var i__5726__auto___14617 = (0);
while(true){
if((i__5726__auto___14617 < len__5725__auto___14616)){
args__5732__auto__.push((arguments[i__5726__auto___14617]));

var G__14618 = (i__5726__auto___14617 + (1));
i__5726__auto___14617 = G__14618;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14610){
var map__14611 = p__14610;
var map__14611__$1 = ((((!((map__14611 == null)))?((((map__14611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14611):map__14611);
var opts = map__14611__$1;
var statearr_14613_14619 = state;
(statearr_14613_14619[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__14611,map__14611__$1,opts){
return (function (val){
var statearr_14614_14620 = state;
(statearr_14614_14620[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__14611,map__14611__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14615_14621 = state;
(statearr_14615_14621[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14606){
var G__14607 = cljs.core.first(seq14606);
var seq14606__$1 = cljs.core.next(seq14606);
var G__14608 = cljs.core.first(seq14606__$1);
var seq14606__$2 = cljs.core.next(seq14606__$1);
var G__14609 = cljs.core.first(seq14606__$2);
var seq14606__$3 = cljs.core.next(seq14606__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14607,G__14608,G__14609,seq14606__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__14788 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14788) : cljs.core.atom.call(null,G__14788));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14789 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14790){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14790 = meta14790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14791,meta14790__$1){
var self__ = this;
var _14791__$1 = this;
return (new cljs.core.async.t_cljs$core$async14789(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14790__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14791){
var self__ = this;
var _14791__$1 = this;
return self__.meta14790;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14792_14954 = self__.cs;
var G__14793_14955 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14792_14954,G__14793_14955) : cljs.core.reset_BANG_.call(null,G__14792_14954,G__14793_14955));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14789.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14789.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta14790], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14789";

cljs.core.async.t_cljs$core$async14789.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async14789");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14789 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14789(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14790){
return (new cljs.core.async.t_cljs$core$async14789(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14790));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14789(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13223__auto___14956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___14956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___14956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14891){
var state_val_14892 = (state_14891[(1)]);
if((state_val_14892 === (7))){
var inst_14809 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14893_14957 = state_14891__$1;
(statearr_14893_14957[(2)] = inst_14809);

(statearr_14893_14957[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (20))){
var inst_14821 = (state_14891[(7)]);
var state_14891__$1 = state_14891;
var statearr_14894_14958 = state_14891__$1;
(statearr_14894_14958[(2)] = inst_14821);

(statearr_14894_14958[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (27))){
var state_14891__$1 = state_14891;
var statearr_14895_14959 = state_14891__$1;
(statearr_14895_14959[(2)] = null);

(statearr_14895_14959[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (1))){
var inst_14797 = (state_14891[(8)]);
var inst_14797__$1 = calc_state();
var inst_14799 = (inst_14797__$1 == null);
var inst_14800 = cljs.core.not(inst_14799);
var state_14891__$1 = (function (){var statearr_14896 = state_14891;
(statearr_14896[(8)] = inst_14797__$1);

return statearr_14896;
})();
if(inst_14800){
var statearr_14897_14960 = state_14891__$1;
(statearr_14897_14960[(1)] = (2));

} else {
var statearr_14898_14961 = state_14891__$1;
(statearr_14898_14961[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (24))){
var inst_14844 = (state_14891[(9)]);
var inst_14865 = (state_14891[(10)]);
var inst_14851 = (state_14891[(11)]);
var inst_14865__$1 = (inst_14844.cljs$core$IFn$_invoke$arity$1 ? inst_14844.cljs$core$IFn$_invoke$arity$1(inst_14851) : inst_14844.call(null,inst_14851));
var state_14891__$1 = (function (){var statearr_14899 = state_14891;
(statearr_14899[(10)] = inst_14865__$1);

return statearr_14899;
})();
if(cljs.core.truth_(inst_14865__$1)){
var statearr_14900_14962 = state_14891__$1;
(statearr_14900_14962[(1)] = (29));

} else {
var statearr_14901_14963 = state_14891__$1;
(statearr_14901_14963[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (4))){
var inst_14812 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14812)){
var statearr_14902_14964 = state_14891__$1;
(statearr_14902_14964[(1)] = (8));

} else {
var statearr_14903_14965 = state_14891__$1;
(statearr_14903_14965[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (15))){
var inst_14838 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14838)){
var statearr_14904_14966 = state_14891__$1;
(statearr_14904_14966[(1)] = (19));

} else {
var statearr_14905_14967 = state_14891__$1;
(statearr_14905_14967[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (21))){
var inst_14843 = (state_14891[(12)]);
var inst_14843__$1 = (state_14891[(2)]);
var inst_14844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14843__$1,cljs.core.cst$kw$solos);
var inst_14845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14843__$1,cljs.core.cst$kw$mutes);
var inst_14846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14843__$1,cljs.core.cst$kw$reads);
var state_14891__$1 = (function (){var statearr_14906 = state_14891;
(statearr_14906[(9)] = inst_14844);

(statearr_14906[(12)] = inst_14843__$1);

(statearr_14906[(13)] = inst_14845);

return statearr_14906;
})();
return cljs.core.async.ioc_alts_BANG_(state_14891__$1,(22),inst_14846);
} else {
if((state_val_14892 === (31))){
var inst_14873 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14873)){
var statearr_14907_14968 = state_14891__$1;
(statearr_14907_14968[(1)] = (32));

} else {
var statearr_14908_14969 = state_14891__$1;
(statearr_14908_14969[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (32))){
var inst_14850 = (state_14891[(14)]);
var state_14891__$1 = state_14891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14891__$1,(35),out,inst_14850);
} else {
if((state_val_14892 === (33))){
var inst_14843 = (state_14891[(12)]);
var inst_14821 = inst_14843;
var state_14891__$1 = (function (){var statearr_14909 = state_14891;
(statearr_14909[(7)] = inst_14821);

return statearr_14909;
})();
var statearr_14910_14970 = state_14891__$1;
(statearr_14910_14970[(2)] = null);

(statearr_14910_14970[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (13))){
var inst_14821 = (state_14891[(7)]);
var inst_14828 = inst_14821.cljs$lang$protocol_mask$partition0$;
var inst_14829 = (inst_14828 & (64));
var inst_14830 = inst_14821.cljs$core$ISeq$;
var inst_14831 = (inst_14829) || (inst_14830);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14831)){
var statearr_14911_14971 = state_14891__$1;
(statearr_14911_14971[(1)] = (16));

} else {
var statearr_14912_14972 = state_14891__$1;
(statearr_14912_14972[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (22))){
var inst_14851 = (state_14891[(11)]);
var inst_14850 = (state_14891[(14)]);
var inst_14849 = (state_14891[(2)]);
var inst_14850__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14849,(0),null);
var inst_14851__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14849,(1),null);
var inst_14852 = (inst_14850__$1 == null);
var inst_14853 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14851__$1,change);
var inst_14854 = (inst_14852) || (inst_14853);
var state_14891__$1 = (function (){var statearr_14913 = state_14891;
(statearr_14913[(11)] = inst_14851__$1);

(statearr_14913[(14)] = inst_14850__$1);

return statearr_14913;
})();
if(cljs.core.truth_(inst_14854)){
var statearr_14914_14973 = state_14891__$1;
(statearr_14914_14973[(1)] = (23));

} else {
var statearr_14915_14974 = state_14891__$1;
(statearr_14915_14974[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (36))){
var inst_14843 = (state_14891[(12)]);
var inst_14821 = inst_14843;
var state_14891__$1 = (function (){var statearr_14916 = state_14891;
(statearr_14916[(7)] = inst_14821);

return statearr_14916;
})();
var statearr_14917_14975 = state_14891__$1;
(statearr_14917_14975[(2)] = null);

(statearr_14917_14975[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (29))){
var inst_14865 = (state_14891[(10)]);
var state_14891__$1 = state_14891;
var statearr_14918_14976 = state_14891__$1;
(statearr_14918_14976[(2)] = inst_14865);

(statearr_14918_14976[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (6))){
var state_14891__$1 = state_14891;
var statearr_14919_14977 = state_14891__$1;
(statearr_14919_14977[(2)] = false);

(statearr_14919_14977[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (28))){
var inst_14861 = (state_14891[(2)]);
var inst_14862 = calc_state();
var inst_14821 = inst_14862;
var state_14891__$1 = (function (){var statearr_14920 = state_14891;
(statearr_14920[(15)] = inst_14861);

(statearr_14920[(7)] = inst_14821);

return statearr_14920;
})();
var statearr_14921_14978 = state_14891__$1;
(statearr_14921_14978[(2)] = null);

(statearr_14921_14978[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (25))){
var inst_14887 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14922_14979 = state_14891__$1;
(statearr_14922_14979[(2)] = inst_14887);

(statearr_14922_14979[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (34))){
var inst_14885 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14923_14980 = state_14891__$1;
(statearr_14923_14980[(2)] = inst_14885);

(statearr_14923_14980[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (17))){
var state_14891__$1 = state_14891;
var statearr_14924_14981 = state_14891__$1;
(statearr_14924_14981[(2)] = false);

(statearr_14924_14981[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (3))){
var state_14891__$1 = state_14891;
var statearr_14925_14982 = state_14891__$1;
(statearr_14925_14982[(2)] = false);

(statearr_14925_14982[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (12))){
var inst_14889 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14891__$1,inst_14889);
} else {
if((state_val_14892 === (2))){
var inst_14797 = (state_14891[(8)]);
var inst_14802 = inst_14797.cljs$lang$protocol_mask$partition0$;
var inst_14803 = (inst_14802 & (64));
var inst_14804 = inst_14797.cljs$core$ISeq$;
var inst_14805 = (inst_14803) || (inst_14804);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14805)){
var statearr_14926_14983 = state_14891__$1;
(statearr_14926_14983[(1)] = (5));

} else {
var statearr_14927_14984 = state_14891__$1;
(statearr_14927_14984[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (23))){
var inst_14850 = (state_14891[(14)]);
var inst_14856 = (inst_14850 == null);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14856)){
var statearr_14928_14985 = state_14891__$1;
(statearr_14928_14985[(1)] = (26));

} else {
var statearr_14929_14986 = state_14891__$1;
(statearr_14929_14986[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (35))){
var inst_14876 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14876)){
var statearr_14930_14987 = state_14891__$1;
(statearr_14930_14987[(1)] = (36));

} else {
var statearr_14931_14988 = state_14891__$1;
(statearr_14931_14988[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (19))){
var inst_14821 = (state_14891[(7)]);
var inst_14840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14821);
var state_14891__$1 = state_14891;
var statearr_14932_14989 = state_14891__$1;
(statearr_14932_14989[(2)] = inst_14840);

(statearr_14932_14989[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (11))){
var inst_14821 = (state_14891[(7)]);
var inst_14825 = (inst_14821 == null);
var inst_14826 = cljs.core.not(inst_14825);
var state_14891__$1 = state_14891;
if(inst_14826){
var statearr_14933_14990 = state_14891__$1;
(statearr_14933_14990[(1)] = (13));

} else {
var statearr_14934_14991 = state_14891__$1;
(statearr_14934_14991[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (9))){
var inst_14797 = (state_14891[(8)]);
var state_14891__$1 = state_14891;
var statearr_14935_14992 = state_14891__$1;
(statearr_14935_14992[(2)] = inst_14797);

(statearr_14935_14992[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (5))){
var state_14891__$1 = state_14891;
var statearr_14936_14993 = state_14891__$1;
(statearr_14936_14993[(2)] = true);

(statearr_14936_14993[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (14))){
var state_14891__$1 = state_14891;
var statearr_14937_14994 = state_14891__$1;
(statearr_14937_14994[(2)] = false);

(statearr_14937_14994[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (26))){
var inst_14851 = (state_14891[(11)]);
var inst_14858 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14851);
var state_14891__$1 = state_14891;
var statearr_14938_14995 = state_14891__$1;
(statearr_14938_14995[(2)] = inst_14858);

(statearr_14938_14995[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (16))){
var state_14891__$1 = state_14891;
var statearr_14939_14996 = state_14891__$1;
(statearr_14939_14996[(2)] = true);

(statearr_14939_14996[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (38))){
var inst_14881 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14940_14997 = state_14891__$1;
(statearr_14940_14997[(2)] = inst_14881);

(statearr_14940_14997[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (30))){
var inst_14844 = (state_14891[(9)]);
var inst_14845 = (state_14891[(13)]);
var inst_14851 = (state_14891[(11)]);
var inst_14868 = cljs.core.empty_QMARK_(inst_14844);
var inst_14869 = (inst_14845.cljs$core$IFn$_invoke$arity$1 ? inst_14845.cljs$core$IFn$_invoke$arity$1(inst_14851) : inst_14845.call(null,inst_14851));
var inst_14870 = cljs.core.not(inst_14869);
var inst_14871 = (inst_14868) && (inst_14870);
var state_14891__$1 = state_14891;
var statearr_14941_14998 = state_14891__$1;
(statearr_14941_14998[(2)] = inst_14871);

(statearr_14941_14998[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (10))){
var inst_14797 = (state_14891[(8)]);
var inst_14817 = (state_14891[(2)]);
var inst_14818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14817,cljs.core.cst$kw$solos);
var inst_14819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14817,cljs.core.cst$kw$mutes);
var inst_14820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14817,cljs.core.cst$kw$reads);
var inst_14821 = inst_14797;
var state_14891__$1 = (function (){var statearr_14942 = state_14891;
(statearr_14942[(16)] = inst_14820);

(statearr_14942[(17)] = inst_14819);

(statearr_14942[(7)] = inst_14821);

(statearr_14942[(18)] = inst_14818);

return statearr_14942;
})();
var statearr_14943_14999 = state_14891__$1;
(statearr_14943_14999[(2)] = null);

(statearr_14943_14999[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (18))){
var inst_14835 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14944_15000 = state_14891__$1;
(statearr_14944_15000[(2)] = inst_14835);

(statearr_14944_15000[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (37))){
var state_14891__$1 = state_14891;
var statearr_14945_15001 = state_14891__$1;
(statearr_14945_15001[(2)] = null);

(statearr_14945_15001[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14892 === (8))){
var inst_14797 = (state_14891[(8)]);
var inst_14814 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14797);
var state_14891__$1 = state_14891;
var statearr_14946_15002 = state_14891__$1;
(statearr_14946_15002[(2)] = inst_14814);

(statearr_14946_15002[(1)] = (10));


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
});})(c__13223__auto___14956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13109__auto__,c__13223__auto___14956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13110__auto__ = null;
var cljs$core$async$mix_$_state_machine__13110__auto____0 = (function (){
var statearr_14950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14950[(0)] = cljs$core$async$mix_$_state_machine__13110__auto__);

(statearr_14950[(1)] = (1));

return statearr_14950;
});
var cljs$core$async$mix_$_state_machine__13110__auto____1 = (function (state_14891){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_14891);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e14951){if((e14951 instanceof Object)){
var ex__13113__auto__ = e14951;
var statearr_14952_15003 = state_14891;
(statearr_14952_15003[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14891);

return cljs.core.cst$kw$recur;
} else {
throw e14951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15004 = state_14891;
state_14891 = G__15004;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13110__auto__ = function(state_14891){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13110__auto____1.call(this,state_14891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13110__auto____0;
cljs$core$async$mix_$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13110__auto____1;
return cljs$core$async$mix_$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___14956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13225__auto__ = (function (){var statearr_14953 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_14953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___14956);

return statearr_14953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___14956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5327__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5327__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5327__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5327__auto__.call(null,p,v,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5327__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15005 = [];
var len__5725__auto___15008 = arguments.length;
var i__5726__auto___15009 = (0);
while(true){
if((i__5726__auto___15009 < len__5725__auto___15008)){
args15005.push((arguments[i__5726__auto___15009]));

var G__15010 = (i__5726__auto___15009 + (1));
i__5726__auto___15009 = G__15010;
continue;
} else {
}
break;
}

var G__15007 = args15005.length;
switch (G__15007) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15005.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5327__auto__.call(null,p));
} else {
var m__5327__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5327__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5327__auto__.call(null,p,v));
} else {
var m__5327__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5327__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15013 = [];
var len__5725__auto___15141 = arguments.length;
var i__5726__auto___15142 = (0);
while(true){
if((i__5726__auto___15142 < len__5725__auto___15141)){
args15013.push((arguments[i__5726__auto___15142]));

var G__15143 = (i__5726__auto___15142 + (1));
i__5726__auto___15142 = G__15143;
continue;
} else {
}
break;
}

var G__15015 = args15013.length;
switch (G__15015) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15013.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15016 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15016) : cljs.core.atom.call(null,G__15016));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4671__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4671__auto__,mults){
return (function (p1__15012_SHARP_){
if(cljs.core.truth_((p1__15012_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15012_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15012_SHARP_.call(null,topic)))){
return p1__15012_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15012_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4671__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15017 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15018){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15018 = meta15018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15019,meta15018__$1){
var self__ = this;
var _15019__$1 = this;
return (new cljs.core.async.t_cljs$core$async15017(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15018__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15019){
var self__ = this;
var _15019__$1 = this;
return self__.meta15018;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15017.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15017.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15017.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15017.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15017.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15020 = self__.mults;
var G__15021 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15020,G__15021) : cljs.core.reset_BANG_.call(null,G__15020,G__15021));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15017.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15018], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15017";

cljs.core.async.t_cljs$core$async15017.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15017");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15017 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15017(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15018){
return (new cljs.core.async.t_cljs$core$async15017(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15018));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15017(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13223__auto___15145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15145,mults,ensure_mult,p){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15145,mults,ensure_mult,p){
return (function (state_15093){
var state_val_15094 = (state_15093[(1)]);
if((state_val_15094 === (7))){
var inst_15089 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
var statearr_15095_15146 = state_15093__$1;
(statearr_15095_15146[(2)] = inst_15089);

(statearr_15095_15146[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (20))){
var state_15093__$1 = state_15093;
var statearr_15096_15147 = state_15093__$1;
(statearr_15096_15147[(2)] = null);

(statearr_15096_15147[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (1))){
var state_15093__$1 = state_15093;
var statearr_15097_15148 = state_15093__$1;
(statearr_15097_15148[(2)] = null);

(statearr_15097_15148[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (24))){
var inst_15072 = (state_15093[(7)]);
var inst_15081 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15072);
var state_15093__$1 = state_15093;
var statearr_15098_15149 = state_15093__$1;
(statearr_15098_15149[(2)] = inst_15081);

(statearr_15098_15149[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (4))){
var inst_15024 = (state_15093[(8)]);
var inst_15024__$1 = (state_15093[(2)]);
var inst_15025 = (inst_15024__$1 == null);
var state_15093__$1 = (function (){var statearr_15099 = state_15093;
(statearr_15099[(8)] = inst_15024__$1);

return statearr_15099;
})();
if(cljs.core.truth_(inst_15025)){
var statearr_15100_15150 = state_15093__$1;
(statearr_15100_15150[(1)] = (5));

} else {
var statearr_15101_15151 = state_15093__$1;
(statearr_15101_15151[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (15))){
var inst_15066 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
var statearr_15102_15152 = state_15093__$1;
(statearr_15102_15152[(2)] = inst_15066);

(statearr_15102_15152[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (21))){
var inst_15086 = (state_15093[(2)]);
var state_15093__$1 = (function (){var statearr_15103 = state_15093;
(statearr_15103[(9)] = inst_15086);

return statearr_15103;
})();
var statearr_15104_15153 = state_15093__$1;
(statearr_15104_15153[(2)] = null);

(statearr_15104_15153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (13))){
var inst_15048 = (state_15093[(10)]);
var inst_15050 = cljs.core.chunked_seq_QMARK_(inst_15048);
var state_15093__$1 = state_15093;
if(inst_15050){
var statearr_15105_15154 = state_15093__$1;
(statearr_15105_15154[(1)] = (16));

} else {
var statearr_15106_15155 = state_15093__$1;
(statearr_15106_15155[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (22))){
var inst_15078 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
if(cljs.core.truth_(inst_15078)){
var statearr_15107_15156 = state_15093__$1;
(statearr_15107_15156[(1)] = (23));

} else {
var statearr_15108_15157 = state_15093__$1;
(statearr_15108_15157[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (6))){
var inst_15072 = (state_15093[(7)]);
var inst_15024 = (state_15093[(8)]);
var inst_15074 = (state_15093[(11)]);
var inst_15072__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15024) : topic_fn.call(null,inst_15024));
var inst_15073 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15074__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15073,inst_15072__$1);
var state_15093__$1 = (function (){var statearr_15109 = state_15093;
(statearr_15109[(7)] = inst_15072__$1);

(statearr_15109[(11)] = inst_15074__$1);

return statearr_15109;
})();
if(cljs.core.truth_(inst_15074__$1)){
var statearr_15110_15158 = state_15093__$1;
(statearr_15110_15158[(1)] = (19));

} else {
var statearr_15111_15159 = state_15093__$1;
(statearr_15111_15159[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (25))){
var inst_15083 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
var statearr_15112_15160 = state_15093__$1;
(statearr_15112_15160[(2)] = inst_15083);

(statearr_15112_15160[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (17))){
var inst_15048 = (state_15093[(10)]);
var inst_15057 = cljs.core.first(inst_15048);
var inst_15058 = cljs.core.async.muxch_STAR_(inst_15057);
var inst_15059 = cljs.core.async.close_BANG_(inst_15058);
var inst_15060 = cljs.core.next(inst_15048);
var inst_15034 = inst_15060;
var inst_15035 = null;
var inst_15036 = (0);
var inst_15037 = (0);
var state_15093__$1 = (function (){var statearr_15113 = state_15093;
(statearr_15113[(12)] = inst_15059);

(statearr_15113[(13)] = inst_15037);

(statearr_15113[(14)] = inst_15036);

(statearr_15113[(15)] = inst_15035);

(statearr_15113[(16)] = inst_15034);

return statearr_15113;
})();
var statearr_15114_15161 = state_15093__$1;
(statearr_15114_15161[(2)] = null);

(statearr_15114_15161[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (3))){
var inst_15091 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15093__$1,inst_15091);
} else {
if((state_val_15094 === (12))){
var inst_15068 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
var statearr_15115_15162 = state_15093__$1;
(statearr_15115_15162[(2)] = inst_15068);

(statearr_15115_15162[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (2))){
var state_15093__$1 = state_15093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15093__$1,(4),ch);
} else {
if((state_val_15094 === (23))){
var state_15093__$1 = state_15093;
var statearr_15116_15163 = state_15093__$1;
(statearr_15116_15163[(2)] = null);

(statearr_15116_15163[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (19))){
var inst_15024 = (state_15093[(8)]);
var inst_15074 = (state_15093[(11)]);
var inst_15076 = cljs.core.async.muxch_STAR_(inst_15074);
var state_15093__$1 = state_15093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15093__$1,(22),inst_15076,inst_15024);
} else {
if((state_val_15094 === (11))){
var inst_15048 = (state_15093[(10)]);
var inst_15034 = (state_15093[(16)]);
var inst_15048__$1 = cljs.core.seq(inst_15034);
var state_15093__$1 = (function (){var statearr_15117 = state_15093;
(statearr_15117[(10)] = inst_15048__$1);

return statearr_15117;
})();
if(inst_15048__$1){
var statearr_15118_15164 = state_15093__$1;
(statearr_15118_15164[(1)] = (13));

} else {
var statearr_15119_15165 = state_15093__$1;
(statearr_15119_15165[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (9))){
var inst_15070 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
var statearr_15120_15166 = state_15093__$1;
(statearr_15120_15166[(2)] = inst_15070);

(statearr_15120_15166[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (5))){
var inst_15031 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15032 = cljs.core.vals(inst_15031);
var inst_15033 = cljs.core.seq(inst_15032);
var inst_15034 = inst_15033;
var inst_15035 = null;
var inst_15036 = (0);
var inst_15037 = (0);
var state_15093__$1 = (function (){var statearr_15121 = state_15093;
(statearr_15121[(13)] = inst_15037);

(statearr_15121[(14)] = inst_15036);

(statearr_15121[(15)] = inst_15035);

(statearr_15121[(16)] = inst_15034);

return statearr_15121;
})();
var statearr_15122_15167 = state_15093__$1;
(statearr_15122_15167[(2)] = null);

(statearr_15122_15167[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (14))){
var state_15093__$1 = state_15093;
var statearr_15126_15168 = state_15093__$1;
(statearr_15126_15168[(2)] = null);

(statearr_15126_15168[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (16))){
var inst_15048 = (state_15093[(10)]);
var inst_15052 = cljs.core.chunk_first(inst_15048);
var inst_15053 = cljs.core.chunk_rest(inst_15048);
var inst_15054 = cljs.core.count(inst_15052);
var inst_15034 = inst_15053;
var inst_15035 = inst_15052;
var inst_15036 = inst_15054;
var inst_15037 = (0);
var state_15093__$1 = (function (){var statearr_15127 = state_15093;
(statearr_15127[(13)] = inst_15037);

(statearr_15127[(14)] = inst_15036);

(statearr_15127[(15)] = inst_15035);

(statearr_15127[(16)] = inst_15034);

return statearr_15127;
})();
var statearr_15128_15169 = state_15093__$1;
(statearr_15128_15169[(2)] = null);

(statearr_15128_15169[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (10))){
var inst_15037 = (state_15093[(13)]);
var inst_15036 = (state_15093[(14)]);
var inst_15035 = (state_15093[(15)]);
var inst_15034 = (state_15093[(16)]);
var inst_15042 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15035,inst_15037);
var inst_15043 = cljs.core.async.muxch_STAR_(inst_15042);
var inst_15044 = cljs.core.async.close_BANG_(inst_15043);
var inst_15045 = (inst_15037 + (1));
var tmp15123 = inst_15036;
var tmp15124 = inst_15035;
var tmp15125 = inst_15034;
var inst_15034__$1 = tmp15125;
var inst_15035__$1 = tmp15124;
var inst_15036__$1 = tmp15123;
var inst_15037__$1 = inst_15045;
var state_15093__$1 = (function (){var statearr_15129 = state_15093;
(statearr_15129[(13)] = inst_15037__$1);

(statearr_15129[(14)] = inst_15036__$1);

(statearr_15129[(15)] = inst_15035__$1);

(statearr_15129[(16)] = inst_15034__$1);

(statearr_15129[(17)] = inst_15044);

return statearr_15129;
})();
var statearr_15130_15170 = state_15093__$1;
(statearr_15130_15170[(2)] = null);

(statearr_15130_15170[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (18))){
var inst_15063 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
var statearr_15131_15171 = state_15093__$1;
(statearr_15131_15171[(2)] = inst_15063);

(statearr_15131_15171[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15094 === (8))){
var inst_15037 = (state_15093[(13)]);
var inst_15036 = (state_15093[(14)]);
var inst_15039 = (inst_15037 < inst_15036);
var inst_15040 = inst_15039;
var state_15093__$1 = state_15093;
if(cljs.core.truth_(inst_15040)){
var statearr_15132_15172 = state_15093__$1;
(statearr_15132_15172[(1)] = (10));

} else {
var statearr_15133_15173 = state_15093__$1;
(statearr_15133_15173[(1)] = (11));

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
});})(c__13223__auto___15145,mults,ensure_mult,p))
;
return ((function (switch__13109__auto__,c__13223__auto___15145,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15137[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15137[(1)] = (1));

return statearr_15137;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15093){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15093);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15138){if((e15138 instanceof Object)){
var ex__13113__auto__ = e15138;
var statearr_15139_15174 = state_15093;
(statearr_15139_15174[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15093);

return cljs.core.cst$kw$recur;
} else {
throw e15138;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15175 = state_15093;
state_15093 = G__15175;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15145,mults,ensure_mult,p))
})();
var state__13225__auto__ = (function (){var statearr_15140 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15145);

return statearr_15140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15145,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15176 = [];
var len__5725__auto___15179 = arguments.length;
var i__5726__auto___15180 = (0);
while(true){
if((i__5726__auto___15180 < len__5725__auto___15179)){
args15176.push((arguments[i__5726__auto___15180]));

var G__15181 = (i__5726__auto___15180 + (1));
i__5726__auto___15180 = G__15181;
continue;
} else {
}
break;
}

var G__15178 = args15176.length;
switch (G__15178) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15176.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15183 = [];
var len__5725__auto___15186 = arguments.length;
var i__5726__auto___15187 = (0);
while(true){
if((i__5726__auto___15187 < len__5725__auto___15186)){
args15183.push((arguments[i__5726__auto___15187]));

var G__15188 = (i__5726__auto___15187 + (1));
i__5726__auto___15187 = G__15188;
continue;
} else {
}
break;
}

var G__15185 = args15183.length;
switch (G__15185) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15183.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15190 = [];
var len__5725__auto___15261 = arguments.length;
var i__5726__auto___15262 = (0);
while(true){
if((i__5726__auto___15262 < len__5725__auto___15261)){
args15190.push((arguments[i__5726__auto___15262]));

var G__15263 = (i__5726__auto___15262 + (1));
i__5726__auto___15262 = G__15263;
continue;
} else {
}
break;
}

var G__15192 = args15190.length;
switch (G__15192) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15190.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13223__auto___15265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15265,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15265,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15231){
var state_val_15232 = (state_15231[(1)]);
if((state_val_15232 === (7))){
var state_15231__$1 = state_15231;
var statearr_15233_15266 = state_15231__$1;
(statearr_15233_15266[(2)] = null);

(statearr_15233_15266[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (1))){
var state_15231__$1 = state_15231;
var statearr_15234_15267 = state_15231__$1;
(statearr_15234_15267[(2)] = null);

(statearr_15234_15267[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (4))){
var inst_15195 = (state_15231[(7)]);
var inst_15197 = (inst_15195 < cnt);
var state_15231__$1 = state_15231;
if(cljs.core.truth_(inst_15197)){
var statearr_15235_15268 = state_15231__$1;
(statearr_15235_15268[(1)] = (6));

} else {
var statearr_15236_15269 = state_15231__$1;
(statearr_15236_15269[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (15))){
var inst_15227 = (state_15231[(2)]);
var state_15231__$1 = state_15231;
var statearr_15237_15270 = state_15231__$1;
(statearr_15237_15270[(2)] = inst_15227);

(statearr_15237_15270[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (13))){
var inst_15220 = cljs.core.async.close_BANG_(out);
var state_15231__$1 = state_15231;
var statearr_15238_15271 = state_15231__$1;
(statearr_15238_15271[(2)] = inst_15220);

(statearr_15238_15271[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (6))){
var state_15231__$1 = state_15231;
var statearr_15239_15272 = state_15231__$1;
(statearr_15239_15272[(2)] = null);

(statearr_15239_15272[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (3))){
var inst_15229 = (state_15231[(2)]);
var state_15231__$1 = state_15231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15231__$1,inst_15229);
} else {
if((state_val_15232 === (12))){
var inst_15217 = (state_15231[(8)]);
var inst_15217__$1 = (state_15231[(2)]);
var inst_15218 = cljs.core.some(cljs.core.nil_QMARK_,inst_15217__$1);
var state_15231__$1 = (function (){var statearr_15240 = state_15231;
(statearr_15240[(8)] = inst_15217__$1);

return statearr_15240;
})();
if(cljs.core.truth_(inst_15218)){
var statearr_15241_15273 = state_15231__$1;
(statearr_15241_15273[(1)] = (13));

} else {
var statearr_15242_15274 = state_15231__$1;
(statearr_15242_15274[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (2))){
var inst_15194 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15195 = (0);
var state_15231__$1 = (function (){var statearr_15243 = state_15231;
(statearr_15243[(7)] = inst_15195);

(statearr_15243[(9)] = inst_15194);

return statearr_15243;
})();
var statearr_15244_15275 = state_15231__$1;
(statearr_15244_15275[(2)] = null);

(statearr_15244_15275[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (11))){
var inst_15195 = (state_15231[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15231,(10),Object,null,(9));
var inst_15204 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15195) : chs__$1.call(null,inst_15195));
var inst_15205 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15195) : done.call(null,inst_15195));
var inst_15206 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15204,inst_15205);
var state_15231__$1 = state_15231;
var statearr_15245_15276 = state_15231__$1;
(statearr_15245_15276[(2)] = inst_15206);


cljs.core.async.impl.ioc_helpers.process_exception(state_15231__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (9))){
var inst_15195 = (state_15231[(7)]);
var inst_15208 = (state_15231[(2)]);
var inst_15209 = (inst_15195 + (1));
var inst_15195__$1 = inst_15209;
var state_15231__$1 = (function (){var statearr_15246 = state_15231;
(statearr_15246[(7)] = inst_15195__$1);

(statearr_15246[(10)] = inst_15208);

return statearr_15246;
})();
var statearr_15247_15277 = state_15231__$1;
(statearr_15247_15277[(2)] = null);

(statearr_15247_15277[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (5))){
var inst_15215 = (state_15231[(2)]);
var state_15231__$1 = (function (){var statearr_15248 = state_15231;
(statearr_15248[(11)] = inst_15215);

return statearr_15248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15231__$1,(12),dchan);
} else {
if((state_val_15232 === (14))){
var inst_15217 = (state_15231[(8)]);
var inst_15222 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15217);
var state_15231__$1 = state_15231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15231__$1,(16),out,inst_15222);
} else {
if((state_val_15232 === (16))){
var inst_15224 = (state_15231[(2)]);
var state_15231__$1 = (function (){var statearr_15249 = state_15231;
(statearr_15249[(12)] = inst_15224);

return statearr_15249;
})();
var statearr_15250_15278 = state_15231__$1;
(statearr_15250_15278[(2)] = null);

(statearr_15250_15278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (10))){
var inst_15199 = (state_15231[(2)]);
var inst_15200 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15231__$1 = (function (){var statearr_15251 = state_15231;
(statearr_15251[(13)] = inst_15199);

return statearr_15251;
})();
var statearr_15252_15279 = state_15231__$1;
(statearr_15252_15279[(2)] = inst_15200);


cljs.core.async.impl.ioc_helpers.process_exception(state_15231__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15232 === (8))){
var inst_15213 = (state_15231[(2)]);
var state_15231__$1 = state_15231;
var statearr_15253_15280 = state_15231__$1;
(statearr_15253_15280[(2)] = inst_15213);

(statearr_15253_15280[(1)] = (5));


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
});})(c__13223__auto___15265,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13109__auto__,c__13223__auto___15265,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15257[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15257[(1)] = (1));

return statearr_15257;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15231){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15231);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15258){if((e15258 instanceof Object)){
var ex__13113__auto__ = e15258;
var statearr_15259_15281 = state_15231;
(statearr_15259_15281[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15231);

return cljs.core.cst$kw$recur;
} else {
throw e15258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15282 = state_15231;
state_15231 = G__15282;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15265,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13225__auto__ = (function (){var statearr_15260 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15265);

return statearr_15260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15265,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15284 = [];
var len__5725__auto___15340 = arguments.length;
var i__5726__auto___15341 = (0);
while(true){
if((i__5726__auto___15341 < len__5725__auto___15340)){
args15284.push((arguments[i__5726__auto___15341]));

var G__15342 = (i__5726__auto___15341 + (1));
i__5726__auto___15341 = G__15342;
continue;
} else {
}
break;
}

var G__15286 = args15284.length;
switch (G__15286) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15284.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15344,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15344,out){
return (function (state_15316){
var state_val_15317 = (state_15316[(1)]);
if((state_val_15317 === (7))){
var inst_15295 = (state_15316[(7)]);
var inst_15296 = (state_15316[(8)]);
var inst_15295__$1 = (state_15316[(2)]);
var inst_15296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15295__$1,(0),null);
var inst_15297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15295__$1,(1),null);
var inst_15298 = (inst_15296__$1 == null);
var state_15316__$1 = (function (){var statearr_15318 = state_15316;
(statearr_15318[(9)] = inst_15297);

(statearr_15318[(7)] = inst_15295__$1);

(statearr_15318[(8)] = inst_15296__$1);

return statearr_15318;
})();
if(cljs.core.truth_(inst_15298)){
var statearr_15319_15345 = state_15316__$1;
(statearr_15319_15345[(1)] = (8));

} else {
var statearr_15320_15346 = state_15316__$1;
(statearr_15320_15346[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15317 === (1))){
var inst_15287 = cljs.core.vec(chs);
var inst_15288 = inst_15287;
var state_15316__$1 = (function (){var statearr_15321 = state_15316;
(statearr_15321[(10)] = inst_15288);

return statearr_15321;
})();
var statearr_15322_15347 = state_15316__$1;
(statearr_15322_15347[(2)] = null);

(statearr_15322_15347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15317 === (4))){
var inst_15288 = (state_15316[(10)]);
var state_15316__$1 = state_15316;
return cljs.core.async.ioc_alts_BANG_(state_15316__$1,(7),inst_15288);
} else {
if((state_val_15317 === (6))){
var inst_15312 = (state_15316[(2)]);
var state_15316__$1 = state_15316;
var statearr_15323_15348 = state_15316__$1;
(statearr_15323_15348[(2)] = inst_15312);

(statearr_15323_15348[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15317 === (3))){
var inst_15314 = (state_15316[(2)]);
var state_15316__$1 = state_15316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15316__$1,inst_15314);
} else {
if((state_val_15317 === (2))){
var inst_15288 = (state_15316[(10)]);
var inst_15290 = cljs.core.count(inst_15288);
var inst_15291 = (inst_15290 > (0));
var state_15316__$1 = state_15316;
if(cljs.core.truth_(inst_15291)){
var statearr_15325_15349 = state_15316__$1;
(statearr_15325_15349[(1)] = (4));

} else {
var statearr_15326_15350 = state_15316__$1;
(statearr_15326_15350[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15317 === (11))){
var inst_15288 = (state_15316[(10)]);
var inst_15305 = (state_15316[(2)]);
var tmp15324 = inst_15288;
var inst_15288__$1 = tmp15324;
var state_15316__$1 = (function (){var statearr_15327 = state_15316;
(statearr_15327[(10)] = inst_15288__$1);

(statearr_15327[(11)] = inst_15305);

return statearr_15327;
})();
var statearr_15328_15351 = state_15316__$1;
(statearr_15328_15351[(2)] = null);

(statearr_15328_15351[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15317 === (9))){
var inst_15296 = (state_15316[(8)]);
var state_15316__$1 = state_15316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15316__$1,(11),out,inst_15296);
} else {
if((state_val_15317 === (5))){
var inst_15310 = cljs.core.async.close_BANG_(out);
var state_15316__$1 = state_15316;
var statearr_15329_15352 = state_15316__$1;
(statearr_15329_15352[(2)] = inst_15310);

(statearr_15329_15352[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15317 === (10))){
var inst_15308 = (state_15316[(2)]);
var state_15316__$1 = state_15316;
var statearr_15330_15353 = state_15316__$1;
(statearr_15330_15353[(2)] = inst_15308);

(statearr_15330_15353[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15317 === (8))){
var inst_15288 = (state_15316[(10)]);
var inst_15297 = (state_15316[(9)]);
var inst_15295 = (state_15316[(7)]);
var inst_15296 = (state_15316[(8)]);
var inst_15300 = (function (){var cs = inst_15288;
var vec__15293 = inst_15295;
var v = inst_15296;
var c = inst_15297;
return ((function (cs,vec__15293,v,c,inst_15288,inst_15297,inst_15295,inst_15296,state_val_15317,c__13223__auto___15344,out){
return (function (p1__15283_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15283_SHARP_);
});
;})(cs,vec__15293,v,c,inst_15288,inst_15297,inst_15295,inst_15296,state_val_15317,c__13223__auto___15344,out))
})();
var inst_15301 = cljs.core.filterv(inst_15300,inst_15288);
var inst_15288__$1 = inst_15301;
var state_15316__$1 = (function (){var statearr_15331 = state_15316;
(statearr_15331[(10)] = inst_15288__$1);

return statearr_15331;
})();
var statearr_15332_15354 = state_15316__$1;
(statearr_15332_15354[(2)] = null);

(statearr_15332_15354[(1)] = (2));


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
});})(c__13223__auto___15344,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15344,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15336 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15336[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15336[(1)] = (1));

return statearr_15336;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15316){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15316);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15337){if((e15337 instanceof Object)){
var ex__13113__auto__ = e15337;
var statearr_15338_15355 = state_15316;
(statearr_15338_15355[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15316);

return cljs.core.cst$kw$recur;
} else {
throw e15337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15356 = state_15316;
state_15316 = G__15356;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15344,out))
})();
var state__13225__auto__ = (function (){var statearr_15339 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15344);

return statearr_15339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15344,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15357 = [];
var len__5725__auto___15406 = arguments.length;
var i__5726__auto___15407 = (0);
while(true){
if((i__5726__auto___15407 < len__5725__auto___15406)){
args15357.push((arguments[i__5726__auto___15407]));

var G__15408 = (i__5726__auto___15407 + (1));
i__5726__auto___15407 = G__15408;
continue;
} else {
}
break;
}

var G__15359 = args15357.length;
switch (G__15359) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15357.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15410,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15410,out){
return (function (state_15383){
var state_val_15384 = (state_15383[(1)]);
if((state_val_15384 === (7))){
var inst_15365 = (state_15383[(7)]);
var inst_15365__$1 = (state_15383[(2)]);
var inst_15366 = (inst_15365__$1 == null);
var inst_15367 = cljs.core.not(inst_15366);
var state_15383__$1 = (function (){var statearr_15385 = state_15383;
(statearr_15385[(7)] = inst_15365__$1);

return statearr_15385;
})();
if(inst_15367){
var statearr_15386_15411 = state_15383__$1;
(statearr_15386_15411[(1)] = (8));

} else {
var statearr_15387_15412 = state_15383__$1;
(statearr_15387_15412[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15384 === (1))){
var inst_15360 = (0);
var state_15383__$1 = (function (){var statearr_15388 = state_15383;
(statearr_15388[(8)] = inst_15360);

return statearr_15388;
})();
var statearr_15389_15413 = state_15383__$1;
(statearr_15389_15413[(2)] = null);

(statearr_15389_15413[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15384 === (4))){
var state_15383__$1 = state_15383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15383__$1,(7),ch);
} else {
if((state_val_15384 === (6))){
var inst_15378 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
var statearr_15390_15414 = state_15383__$1;
(statearr_15390_15414[(2)] = inst_15378);

(statearr_15390_15414[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15384 === (3))){
var inst_15380 = (state_15383[(2)]);
var inst_15381 = cljs.core.async.close_BANG_(out);
var state_15383__$1 = (function (){var statearr_15391 = state_15383;
(statearr_15391[(9)] = inst_15380);

return statearr_15391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15383__$1,inst_15381);
} else {
if((state_val_15384 === (2))){
var inst_15360 = (state_15383[(8)]);
var inst_15362 = (inst_15360 < n);
var state_15383__$1 = state_15383;
if(cljs.core.truth_(inst_15362)){
var statearr_15392_15415 = state_15383__$1;
(statearr_15392_15415[(1)] = (4));

} else {
var statearr_15393_15416 = state_15383__$1;
(statearr_15393_15416[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15384 === (11))){
var inst_15360 = (state_15383[(8)]);
var inst_15370 = (state_15383[(2)]);
var inst_15371 = (inst_15360 + (1));
var inst_15360__$1 = inst_15371;
var state_15383__$1 = (function (){var statearr_15394 = state_15383;
(statearr_15394[(8)] = inst_15360__$1);

(statearr_15394[(10)] = inst_15370);

return statearr_15394;
})();
var statearr_15395_15417 = state_15383__$1;
(statearr_15395_15417[(2)] = null);

(statearr_15395_15417[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15384 === (9))){
var state_15383__$1 = state_15383;
var statearr_15396_15418 = state_15383__$1;
(statearr_15396_15418[(2)] = null);

(statearr_15396_15418[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15384 === (5))){
var state_15383__$1 = state_15383;
var statearr_15397_15419 = state_15383__$1;
(statearr_15397_15419[(2)] = null);

(statearr_15397_15419[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15384 === (10))){
var inst_15375 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
var statearr_15398_15420 = state_15383__$1;
(statearr_15398_15420[(2)] = inst_15375);

(statearr_15398_15420[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15384 === (8))){
var inst_15365 = (state_15383[(7)]);
var state_15383__$1 = state_15383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15383__$1,(11),out,inst_15365);
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
});})(c__13223__auto___15410,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15410,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15402 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15402[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15402[(1)] = (1));

return statearr_15402;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15383){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15383);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15403){if((e15403 instanceof Object)){
var ex__13113__auto__ = e15403;
var statearr_15404_15421 = state_15383;
(statearr_15404_15421[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15383);

return cljs.core.cst$kw$recur;
} else {
throw e15403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15422 = state_15383;
state_15383 = G__15422;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15410,out))
})();
var state__13225__auto__ = (function (){var statearr_15405 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15410);

return statearr_15405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15410,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15432 = (function (map_LT_,f,ch,meta15433){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15433 = meta15433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15434,meta15433__$1){
var self__ = this;
var _15434__$1 = this;
return (new cljs.core.async.t_cljs$core$async15432(self__.map_LT_,self__.f,self__.ch,meta15433__$1));
});

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15434){
var self__ = this;
var _15434__$1 = this;
return self__.meta15433;
});

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15435 = (function (map_LT_,f,ch,meta15433,_,fn1,meta15436){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15433 = meta15433;
this._ = _;
this.fn1 = fn1;
this.meta15436 = meta15436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15437,meta15436__$1){
var self__ = this;
var _15437__$1 = this;
return (new cljs.core.async.t_cljs$core$async15435(self__.map_LT_,self__.f,self__.ch,self__.meta15433,self__._,self__.fn1,meta15436__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15437){
var self__ = this;
var _15437__$1 = this;
return self__.meta15436;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15423_SHARP_){
var G__15438 = (((p1__15423_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15423_SHARP_) : self__.f.call(null,p1__15423_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15438) : f1.call(null,G__15438));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15435.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15433,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15432], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15436], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15435";

cljs.core.async.t_cljs$core$async15435.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15435");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15435 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15435(map_LT___$1,f__$1,ch__$1,meta15433__$1,___$2,fn1__$1,meta15436){
return (new cljs.core.async.t_cljs$core$async15435(map_LT___$1,f__$1,ch__$1,meta15433__$1,___$2,fn1__$1,meta15436));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15435(self__.map_LT_,self__.f,self__.ch,self__.meta15433,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4659__auto__ = ret;
if(cljs.core.truth_(and__4659__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4659__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15439 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15439) : self__.f.call(null,G__15439));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15433], null);
});

cljs.core.async.t_cljs$core$async15432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15432";

cljs.core.async.t_cljs$core$async15432.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15432");
});

cljs.core.async.__GT_t_cljs$core$async15432 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15432(map_LT___$1,f__$1,ch__$1,meta15433){
return (new cljs.core.async.t_cljs$core$async15432(map_LT___$1,f__$1,ch__$1,meta15433));
});

}

return (new cljs.core.async.t_cljs$core$async15432(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15443 = (function (map_GT_,f,ch,meta15444){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15444 = meta15444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15445,meta15444__$1){
var self__ = this;
var _15445__$1 = this;
return (new cljs.core.async.t_cljs$core$async15443(self__.map_GT_,self__.f,self__.ch,meta15444__$1));
});

cljs.core.async.t_cljs$core$async15443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15445){
var self__ = this;
var _15445__$1 = this;
return self__.meta15444;
});

cljs.core.async.t_cljs$core$async15443.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15443.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15443.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async15443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15444], null);
});

cljs.core.async.t_cljs$core$async15443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15443";

cljs.core.async.t_cljs$core$async15443.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15443");
});

cljs.core.async.__GT_t_cljs$core$async15443 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15443(map_GT___$1,f__$1,ch__$1,meta15444){
return (new cljs.core.async.t_cljs$core$async15443(map_GT___$1,f__$1,ch__$1,meta15444));
});

}

return (new cljs.core.async.t_cljs$core$async15443(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15449 = (function (filter_GT_,p,ch,meta15450){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15450 = meta15450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15451,meta15450__$1){
var self__ = this;
var _15451__$1 = this;
return (new cljs.core.async.t_cljs$core$async15449(self__.filter_GT_,self__.p,self__.ch,meta15450__$1));
});

cljs.core.async.t_cljs$core$async15449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15451){
var self__ = this;
var _15451__$1 = this;
return self__.meta15450;
});

cljs.core.async.t_cljs$core$async15449.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15449.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15449.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15449.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15450], null);
});

cljs.core.async.t_cljs$core$async15449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15449";

cljs.core.async.t_cljs$core$async15449.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15449");
});

cljs.core.async.__GT_t_cljs$core$async15449 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15449(filter_GT___$1,p__$1,ch__$1,meta15450){
return (new cljs.core.async.t_cljs$core$async15449(filter_GT___$1,p__$1,ch__$1,meta15450));
});

}

return (new cljs.core.async.t_cljs$core$async15449(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15452 = [];
var len__5725__auto___15496 = arguments.length;
var i__5726__auto___15497 = (0);
while(true){
if((i__5726__auto___15497 < len__5725__auto___15496)){
args15452.push((arguments[i__5726__auto___15497]));

var G__15498 = (i__5726__auto___15497 + (1));
i__5726__auto___15497 = G__15498;
continue;
} else {
}
break;
}

var G__15454 = args15452.length;
switch (G__15454) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15452.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15500,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15500,out){
return (function (state_15475){
var state_val_15476 = (state_15475[(1)]);
if((state_val_15476 === (7))){
var inst_15471 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
var statearr_15477_15501 = state_15475__$1;
(statearr_15477_15501[(2)] = inst_15471);

(statearr_15477_15501[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (1))){
var state_15475__$1 = state_15475;
var statearr_15478_15502 = state_15475__$1;
(statearr_15478_15502[(2)] = null);

(statearr_15478_15502[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (4))){
var inst_15457 = (state_15475[(7)]);
var inst_15457__$1 = (state_15475[(2)]);
var inst_15458 = (inst_15457__$1 == null);
var state_15475__$1 = (function (){var statearr_15479 = state_15475;
(statearr_15479[(7)] = inst_15457__$1);

return statearr_15479;
})();
if(cljs.core.truth_(inst_15458)){
var statearr_15480_15503 = state_15475__$1;
(statearr_15480_15503[(1)] = (5));

} else {
var statearr_15481_15504 = state_15475__$1;
(statearr_15481_15504[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (6))){
var inst_15457 = (state_15475[(7)]);
var inst_15462 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15457) : p.call(null,inst_15457));
var state_15475__$1 = state_15475;
if(cljs.core.truth_(inst_15462)){
var statearr_15482_15505 = state_15475__$1;
(statearr_15482_15505[(1)] = (8));

} else {
var statearr_15483_15506 = state_15475__$1;
(statearr_15483_15506[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (3))){
var inst_15473 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15475__$1,inst_15473);
} else {
if((state_val_15476 === (2))){
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15475__$1,(4),ch);
} else {
if((state_val_15476 === (11))){
var inst_15465 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
var statearr_15484_15507 = state_15475__$1;
(statearr_15484_15507[(2)] = inst_15465);

(statearr_15484_15507[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (9))){
var state_15475__$1 = state_15475;
var statearr_15485_15508 = state_15475__$1;
(statearr_15485_15508[(2)] = null);

(statearr_15485_15508[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (5))){
var inst_15460 = cljs.core.async.close_BANG_(out);
var state_15475__$1 = state_15475;
var statearr_15486_15509 = state_15475__$1;
(statearr_15486_15509[(2)] = inst_15460);

(statearr_15486_15509[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (10))){
var inst_15468 = (state_15475[(2)]);
var state_15475__$1 = (function (){var statearr_15487 = state_15475;
(statearr_15487[(8)] = inst_15468);

return statearr_15487;
})();
var statearr_15488_15510 = state_15475__$1;
(statearr_15488_15510[(2)] = null);

(statearr_15488_15510[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (8))){
var inst_15457 = (state_15475[(7)]);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15475__$1,(11),out,inst_15457);
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
});})(c__13223__auto___15500,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15500,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15492 = [null,null,null,null,null,null,null,null,null];
(statearr_15492[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15492[(1)] = (1));

return statearr_15492;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15475){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15475);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15493){if((e15493 instanceof Object)){
var ex__13113__auto__ = e15493;
var statearr_15494_15511 = state_15475;
(statearr_15494_15511[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15475);

return cljs.core.cst$kw$recur;
} else {
throw e15493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15512 = state_15475;
state_15475 = G__15512;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15500,out))
})();
var state__13225__auto__ = (function (){var statearr_15495 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15500);

return statearr_15495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15500,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15513 = [];
var len__5725__auto___15516 = arguments.length;
var i__5726__auto___15517 = (0);
while(true){
if((i__5726__auto___15517 < len__5725__auto___15516)){
args15513.push((arguments[i__5726__auto___15517]));

var G__15518 = (i__5726__auto___15517 + (1));
i__5726__auto___15517 = G__15518;
continue;
} else {
}
break;
}

var G__15515 = args15513.length;
switch (G__15515) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15513.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto__){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto__){
return (function (state_15685){
var state_val_15686 = (state_15685[(1)]);
if((state_val_15686 === (7))){
var inst_15681 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15687_15728 = state_15685__$1;
(statearr_15687_15728[(2)] = inst_15681);

(statearr_15687_15728[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (20))){
var inst_15651 = (state_15685[(7)]);
var inst_15662 = (state_15685[(2)]);
var inst_15663 = cljs.core.next(inst_15651);
var inst_15637 = inst_15663;
var inst_15638 = null;
var inst_15639 = (0);
var inst_15640 = (0);
var state_15685__$1 = (function (){var statearr_15688 = state_15685;
(statearr_15688[(8)] = inst_15662);

(statearr_15688[(9)] = inst_15637);

(statearr_15688[(10)] = inst_15639);

(statearr_15688[(11)] = inst_15640);

(statearr_15688[(12)] = inst_15638);

return statearr_15688;
})();
var statearr_15689_15729 = state_15685__$1;
(statearr_15689_15729[(2)] = null);

(statearr_15689_15729[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (1))){
var state_15685__$1 = state_15685;
var statearr_15690_15730 = state_15685__$1;
(statearr_15690_15730[(2)] = null);

(statearr_15690_15730[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (4))){
var inst_15626 = (state_15685[(13)]);
var inst_15626__$1 = (state_15685[(2)]);
var inst_15627 = (inst_15626__$1 == null);
var state_15685__$1 = (function (){var statearr_15691 = state_15685;
(statearr_15691[(13)] = inst_15626__$1);

return statearr_15691;
})();
if(cljs.core.truth_(inst_15627)){
var statearr_15692_15731 = state_15685__$1;
(statearr_15692_15731[(1)] = (5));

} else {
var statearr_15693_15732 = state_15685__$1;
(statearr_15693_15732[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (15))){
var state_15685__$1 = state_15685;
var statearr_15697_15733 = state_15685__$1;
(statearr_15697_15733[(2)] = null);

(statearr_15697_15733[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (21))){
var state_15685__$1 = state_15685;
var statearr_15698_15734 = state_15685__$1;
(statearr_15698_15734[(2)] = null);

(statearr_15698_15734[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (13))){
var inst_15637 = (state_15685[(9)]);
var inst_15639 = (state_15685[(10)]);
var inst_15640 = (state_15685[(11)]);
var inst_15638 = (state_15685[(12)]);
var inst_15647 = (state_15685[(2)]);
var inst_15648 = (inst_15640 + (1));
var tmp15694 = inst_15637;
var tmp15695 = inst_15639;
var tmp15696 = inst_15638;
var inst_15637__$1 = tmp15694;
var inst_15638__$1 = tmp15696;
var inst_15639__$1 = tmp15695;
var inst_15640__$1 = inst_15648;
var state_15685__$1 = (function (){var statearr_15699 = state_15685;
(statearr_15699[(14)] = inst_15647);

(statearr_15699[(9)] = inst_15637__$1);

(statearr_15699[(10)] = inst_15639__$1);

(statearr_15699[(11)] = inst_15640__$1);

(statearr_15699[(12)] = inst_15638__$1);

return statearr_15699;
})();
var statearr_15700_15735 = state_15685__$1;
(statearr_15700_15735[(2)] = null);

(statearr_15700_15735[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (22))){
var state_15685__$1 = state_15685;
var statearr_15701_15736 = state_15685__$1;
(statearr_15701_15736[(2)] = null);

(statearr_15701_15736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (6))){
var inst_15626 = (state_15685[(13)]);
var inst_15635 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15626) : f.call(null,inst_15626));
var inst_15636 = cljs.core.seq(inst_15635);
var inst_15637 = inst_15636;
var inst_15638 = null;
var inst_15639 = (0);
var inst_15640 = (0);
var state_15685__$1 = (function (){var statearr_15702 = state_15685;
(statearr_15702[(9)] = inst_15637);

(statearr_15702[(10)] = inst_15639);

(statearr_15702[(11)] = inst_15640);

(statearr_15702[(12)] = inst_15638);

return statearr_15702;
})();
var statearr_15703_15737 = state_15685__$1;
(statearr_15703_15737[(2)] = null);

(statearr_15703_15737[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (17))){
var inst_15651 = (state_15685[(7)]);
var inst_15655 = cljs.core.chunk_first(inst_15651);
var inst_15656 = cljs.core.chunk_rest(inst_15651);
var inst_15657 = cljs.core.count(inst_15655);
var inst_15637 = inst_15656;
var inst_15638 = inst_15655;
var inst_15639 = inst_15657;
var inst_15640 = (0);
var state_15685__$1 = (function (){var statearr_15704 = state_15685;
(statearr_15704[(9)] = inst_15637);

(statearr_15704[(10)] = inst_15639);

(statearr_15704[(11)] = inst_15640);

(statearr_15704[(12)] = inst_15638);

return statearr_15704;
})();
var statearr_15705_15738 = state_15685__$1;
(statearr_15705_15738[(2)] = null);

(statearr_15705_15738[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (3))){
var inst_15683 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15685__$1,inst_15683);
} else {
if((state_val_15686 === (12))){
var inst_15671 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15706_15739 = state_15685__$1;
(statearr_15706_15739[(2)] = inst_15671);

(statearr_15706_15739[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (2))){
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15685__$1,(4),in$);
} else {
if((state_val_15686 === (23))){
var inst_15679 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15707_15740 = state_15685__$1;
(statearr_15707_15740[(2)] = inst_15679);

(statearr_15707_15740[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (19))){
var inst_15666 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15708_15741 = state_15685__$1;
(statearr_15708_15741[(2)] = inst_15666);

(statearr_15708_15741[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (11))){
var inst_15637 = (state_15685[(9)]);
var inst_15651 = (state_15685[(7)]);
var inst_15651__$1 = cljs.core.seq(inst_15637);
var state_15685__$1 = (function (){var statearr_15709 = state_15685;
(statearr_15709[(7)] = inst_15651__$1);

return statearr_15709;
})();
if(inst_15651__$1){
var statearr_15710_15742 = state_15685__$1;
(statearr_15710_15742[(1)] = (14));

} else {
var statearr_15711_15743 = state_15685__$1;
(statearr_15711_15743[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (9))){
var inst_15673 = (state_15685[(2)]);
var inst_15674 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15685__$1 = (function (){var statearr_15712 = state_15685;
(statearr_15712[(15)] = inst_15673);

return statearr_15712;
})();
if(cljs.core.truth_(inst_15674)){
var statearr_15713_15744 = state_15685__$1;
(statearr_15713_15744[(1)] = (21));

} else {
var statearr_15714_15745 = state_15685__$1;
(statearr_15714_15745[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (5))){
var inst_15629 = cljs.core.async.close_BANG_(out);
var state_15685__$1 = state_15685;
var statearr_15715_15746 = state_15685__$1;
(statearr_15715_15746[(2)] = inst_15629);

(statearr_15715_15746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (14))){
var inst_15651 = (state_15685[(7)]);
var inst_15653 = cljs.core.chunked_seq_QMARK_(inst_15651);
var state_15685__$1 = state_15685;
if(inst_15653){
var statearr_15716_15747 = state_15685__$1;
(statearr_15716_15747[(1)] = (17));

} else {
var statearr_15717_15748 = state_15685__$1;
(statearr_15717_15748[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (16))){
var inst_15669 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15718_15749 = state_15685__$1;
(statearr_15718_15749[(2)] = inst_15669);

(statearr_15718_15749[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (10))){
var inst_15640 = (state_15685[(11)]);
var inst_15638 = (state_15685[(12)]);
var inst_15645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15638,inst_15640);
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15685__$1,(13),out,inst_15645);
} else {
if((state_val_15686 === (18))){
var inst_15651 = (state_15685[(7)]);
var inst_15660 = cljs.core.first(inst_15651);
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15685__$1,(20),out,inst_15660);
} else {
if((state_val_15686 === (8))){
var inst_15639 = (state_15685[(10)]);
var inst_15640 = (state_15685[(11)]);
var inst_15642 = (inst_15640 < inst_15639);
var inst_15643 = inst_15642;
var state_15685__$1 = state_15685;
if(cljs.core.truth_(inst_15643)){
var statearr_15719_15750 = state_15685__$1;
(statearr_15719_15750[(1)] = (10));

} else {
var statearr_15720_15751 = state_15685__$1;
(statearr_15720_15751[(1)] = (11));

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
});})(c__13223__auto__))
;
return ((function (switch__13109__auto__,c__13223__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____0 = (function (){
var statearr_15724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15724[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__);

(statearr_15724[(1)] = (1));

return statearr_15724;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____1 = (function (state_15685){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15685);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15725){if((e15725 instanceof Object)){
var ex__13113__auto__ = e15725;
var statearr_15726_15752 = state_15685;
(statearr_15726_15752[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15685);

return cljs.core.cst$kw$recur;
} else {
throw e15725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15753 = state_15685;
state_15685 = G__15753;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__ = function(state_15685){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____1.call(this,state_15685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13110__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto__))
})();
var state__13225__auto__ = (function (){var statearr_15727 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto__);

return statearr_15727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto__))
);

return c__13223__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15754 = [];
var len__5725__auto___15757 = arguments.length;
var i__5726__auto___15758 = (0);
while(true){
if((i__5726__auto___15758 < len__5725__auto___15757)){
args15754.push((arguments[i__5726__auto___15758]));

var G__15759 = (i__5726__auto___15758 + (1));
i__5726__auto___15758 = G__15759;
continue;
} else {
}
break;
}

var G__15756 = args15754.length;
switch (G__15756) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15754.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15761 = [];
var len__5725__auto___15764 = arguments.length;
var i__5726__auto___15765 = (0);
while(true){
if((i__5726__auto___15765 < len__5725__auto___15764)){
args15761.push((arguments[i__5726__auto___15765]));

var G__15766 = (i__5726__auto___15765 + (1));
i__5726__auto___15765 = G__15766;
continue;
} else {
}
break;
}

var G__15763 = args15761.length;
switch (G__15763) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15761.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15768 = [];
var len__5725__auto___15819 = arguments.length;
var i__5726__auto___15820 = (0);
while(true){
if((i__5726__auto___15820 < len__5725__auto___15819)){
args15768.push((arguments[i__5726__auto___15820]));

var G__15821 = (i__5726__auto___15820 + (1));
i__5726__auto___15820 = G__15821;
continue;
} else {
}
break;
}

var G__15770 = args15768.length;
switch (G__15770) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15768.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15823,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15823,out){
return (function (state_15794){
var state_val_15795 = (state_15794[(1)]);
if((state_val_15795 === (7))){
var inst_15789 = (state_15794[(2)]);
var state_15794__$1 = state_15794;
var statearr_15796_15824 = state_15794__$1;
(statearr_15796_15824[(2)] = inst_15789);

(statearr_15796_15824[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15795 === (1))){
var inst_15771 = null;
var state_15794__$1 = (function (){var statearr_15797 = state_15794;
(statearr_15797[(7)] = inst_15771);

return statearr_15797;
})();
var statearr_15798_15825 = state_15794__$1;
(statearr_15798_15825[(2)] = null);

(statearr_15798_15825[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15795 === (4))){
var inst_15774 = (state_15794[(8)]);
var inst_15774__$1 = (state_15794[(2)]);
var inst_15775 = (inst_15774__$1 == null);
var inst_15776 = cljs.core.not(inst_15775);
var state_15794__$1 = (function (){var statearr_15799 = state_15794;
(statearr_15799[(8)] = inst_15774__$1);

return statearr_15799;
})();
if(inst_15776){
var statearr_15800_15826 = state_15794__$1;
(statearr_15800_15826[(1)] = (5));

} else {
var statearr_15801_15827 = state_15794__$1;
(statearr_15801_15827[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15795 === (6))){
var state_15794__$1 = state_15794;
var statearr_15802_15828 = state_15794__$1;
(statearr_15802_15828[(2)] = null);

(statearr_15802_15828[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15795 === (3))){
var inst_15791 = (state_15794[(2)]);
var inst_15792 = cljs.core.async.close_BANG_(out);
var state_15794__$1 = (function (){var statearr_15803 = state_15794;
(statearr_15803[(9)] = inst_15791);

return statearr_15803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15794__$1,inst_15792);
} else {
if((state_val_15795 === (2))){
var state_15794__$1 = state_15794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15794__$1,(4),ch);
} else {
if((state_val_15795 === (11))){
var inst_15774 = (state_15794[(8)]);
var inst_15783 = (state_15794[(2)]);
var inst_15771 = inst_15774;
var state_15794__$1 = (function (){var statearr_15804 = state_15794;
(statearr_15804[(7)] = inst_15771);

(statearr_15804[(10)] = inst_15783);

return statearr_15804;
})();
var statearr_15805_15829 = state_15794__$1;
(statearr_15805_15829[(2)] = null);

(statearr_15805_15829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15795 === (9))){
var inst_15774 = (state_15794[(8)]);
var state_15794__$1 = state_15794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15794__$1,(11),out,inst_15774);
} else {
if((state_val_15795 === (5))){
var inst_15774 = (state_15794[(8)]);
var inst_15771 = (state_15794[(7)]);
var inst_15778 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15774,inst_15771);
var state_15794__$1 = state_15794;
if(inst_15778){
var statearr_15807_15830 = state_15794__$1;
(statearr_15807_15830[(1)] = (8));

} else {
var statearr_15808_15831 = state_15794__$1;
(statearr_15808_15831[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15795 === (10))){
var inst_15786 = (state_15794[(2)]);
var state_15794__$1 = state_15794;
var statearr_15809_15832 = state_15794__$1;
(statearr_15809_15832[(2)] = inst_15786);

(statearr_15809_15832[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15795 === (8))){
var inst_15771 = (state_15794[(7)]);
var tmp15806 = inst_15771;
var inst_15771__$1 = tmp15806;
var state_15794__$1 = (function (){var statearr_15810 = state_15794;
(statearr_15810[(7)] = inst_15771__$1);

return statearr_15810;
})();
var statearr_15811_15833 = state_15794__$1;
(statearr_15811_15833[(2)] = null);

(statearr_15811_15833[(1)] = (2));


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
});})(c__13223__auto___15823,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15823,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15815[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15815[(1)] = (1));

return statearr_15815;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15794){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15794);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15816){if((e15816 instanceof Object)){
var ex__13113__auto__ = e15816;
var statearr_15817_15834 = state_15794;
(statearr_15817_15834[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15794);

return cljs.core.cst$kw$recur;
} else {
throw e15816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15835 = state_15794;
state_15794 = G__15835;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15823,out))
})();
var state__13225__auto__ = (function (){var statearr_15818 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15823);

return statearr_15818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15823,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15836 = [];
var len__5725__auto___15906 = arguments.length;
var i__5726__auto___15907 = (0);
while(true){
if((i__5726__auto___15907 < len__5725__auto___15906)){
args15836.push((arguments[i__5726__auto___15907]));

var G__15908 = (i__5726__auto___15907 + (1));
i__5726__auto___15907 = G__15908;
continue;
} else {
}
break;
}

var G__15838 = args15836.length;
switch (G__15838) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15836.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___15910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___15910,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___15910,out){
return (function (state_15876){
var state_val_15877 = (state_15876[(1)]);
if((state_val_15877 === (7))){
var inst_15872 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
var statearr_15878_15911 = state_15876__$1;
(statearr_15878_15911[(2)] = inst_15872);

(statearr_15878_15911[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (1))){
var inst_15839 = (new Array(n));
var inst_15840 = inst_15839;
var inst_15841 = (0);
var state_15876__$1 = (function (){var statearr_15879 = state_15876;
(statearr_15879[(7)] = inst_15841);

(statearr_15879[(8)] = inst_15840);

return statearr_15879;
})();
var statearr_15880_15912 = state_15876__$1;
(statearr_15880_15912[(2)] = null);

(statearr_15880_15912[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (4))){
var inst_15844 = (state_15876[(9)]);
var inst_15844__$1 = (state_15876[(2)]);
var inst_15845 = (inst_15844__$1 == null);
var inst_15846 = cljs.core.not(inst_15845);
var state_15876__$1 = (function (){var statearr_15881 = state_15876;
(statearr_15881[(9)] = inst_15844__$1);

return statearr_15881;
})();
if(inst_15846){
var statearr_15882_15913 = state_15876__$1;
(statearr_15882_15913[(1)] = (5));

} else {
var statearr_15883_15914 = state_15876__$1;
(statearr_15883_15914[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (15))){
var inst_15866 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
var statearr_15884_15915 = state_15876__$1;
(statearr_15884_15915[(2)] = inst_15866);

(statearr_15884_15915[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (13))){
var state_15876__$1 = state_15876;
var statearr_15885_15916 = state_15876__$1;
(statearr_15885_15916[(2)] = null);

(statearr_15885_15916[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (6))){
var inst_15841 = (state_15876[(7)]);
var inst_15862 = (inst_15841 > (0));
var state_15876__$1 = state_15876;
if(cljs.core.truth_(inst_15862)){
var statearr_15886_15917 = state_15876__$1;
(statearr_15886_15917[(1)] = (12));

} else {
var statearr_15887_15918 = state_15876__$1;
(statearr_15887_15918[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (3))){
var inst_15874 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15876__$1,inst_15874);
} else {
if((state_val_15877 === (12))){
var inst_15840 = (state_15876[(8)]);
var inst_15864 = cljs.core.vec(inst_15840);
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15876__$1,(15),out,inst_15864);
} else {
if((state_val_15877 === (2))){
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15876__$1,(4),ch);
} else {
if((state_val_15877 === (11))){
var inst_15856 = (state_15876[(2)]);
var inst_15857 = (new Array(n));
var inst_15840 = inst_15857;
var inst_15841 = (0);
var state_15876__$1 = (function (){var statearr_15888 = state_15876;
(statearr_15888[(7)] = inst_15841);

(statearr_15888[(8)] = inst_15840);

(statearr_15888[(10)] = inst_15856);

return statearr_15888;
})();
var statearr_15889_15919 = state_15876__$1;
(statearr_15889_15919[(2)] = null);

(statearr_15889_15919[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (9))){
var inst_15840 = (state_15876[(8)]);
var inst_15854 = cljs.core.vec(inst_15840);
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15876__$1,(11),out,inst_15854);
} else {
if((state_val_15877 === (5))){
var inst_15849 = (state_15876[(11)]);
var inst_15841 = (state_15876[(7)]);
var inst_15844 = (state_15876[(9)]);
var inst_15840 = (state_15876[(8)]);
var inst_15848 = (inst_15840[inst_15841] = inst_15844);
var inst_15849__$1 = (inst_15841 + (1));
var inst_15850 = (inst_15849__$1 < n);
var state_15876__$1 = (function (){var statearr_15890 = state_15876;
(statearr_15890[(11)] = inst_15849__$1);

(statearr_15890[(12)] = inst_15848);

return statearr_15890;
})();
if(cljs.core.truth_(inst_15850)){
var statearr_15891_15920 = state_15876__$1;
(statearr_15891_15920[(1)] = (8));

} else {
var statearr_15892_15921 = state_15876__$1;
(statearr_15892_15921[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (14))){
var inst_15869 = (state_15876[(2)]);
var inst_15870 = cljs.core.async.close_BANG_(out);
var state_15876__$1 = (function (){var statearr_15894 = state_15876;
(statearr_15894[(13)] = inst_15869);

return statearr_15894;
})();
var statearr_15895_15922 = state_15876__$1;
(statearr_15895_15922[(2)] = inst_15870);

(statearr_15895_15922[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (10))){
var inst_15860 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
var statearr_15896_15923 = state_15876__$1;
(statearr_15896_15923[(2)] = inst_15860);

(statearr_15896_15923[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (8))){
var inst_15849 = (state_15876[(11)]);
var inst_15840 = (state_15876[(8)]);
var tmp15893 = inst_15840;
var inst_15840__$1 = tmp15893;
var inst_15841 = inst_15849;
var state_15876__$1 = (function (){var statearr_15897 = state_15876;
(statearr_15897[(7)] = inst_15841);

(statearr_15897[(8)] = inst_15840__$1);

return statearr_15897;
})();
var statearr_15898_15924 = state_15876__$1;
(statearr_15898_15924[(2)] = null);

(statearr_15898_15924[(1)] = (2));


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
});})(c__13223__auto___15910,out))
;
return ((function (switch__13109__auto__,c__13223__auto___15910,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15902[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15902[(1)] = (1));

return statearr_15902;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15876){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15876);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15903){if((e15903 instanceof Object)){
var ex__13113__auto__ = e15903;
var statearr_15904_15925 = state_15876;
(statearr_15904_15925[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15876);

return cljs.core.cst$kw$recur;
} else {
throw e15903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__15926 = state_15876;
state_15876 = G__15926;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___15910,out))
})();
var state__13225__auto__ = (function (){var statearr_15905 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_15905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___15910);

return statearr_15905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___15910,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15927 = [];
var len__5725__auto___16001 = arguments.length;
var i__5726__auto___16002 = (0);
while(true){
if((i__5726__auto___16002 < len__5725__auto___16001)){
args15927.push((arguments[i__5726__auto___16002]));

var G__16003 = (i__5726__auto___16002 + (1));
i__5726__auto___16002 = G__16003;
continue;
} else {
}
break;
}

var G__15929 = args15927.length;
switch (G__15929) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15927.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13223__auto___16005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13223__auto___16005,out){
return (function (){
var f__13224__auto__ = (function (){var switch__13109__auto__ = ((function (c__13223__auto___16005,out){
return (function (state_15971){
var state_val_15972 = (state_15971[(1)]);
if((state_val_15972 === (7))){
var inst_15967 = (state_15971[(2)]);
var state_15971__$1 = state_15971;
var statearr_15973_16006 = state_15971__$1;
(statearr_15973_16006[(2)] = inst_15967);

(statearr_15973_16006[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (1))){
var inst_15930 = [];
var inst_15931 = inst_15930;
var inst_15932 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_15971__$1 = (function (){var statearr_15974 = state_15971;
(statearr_15974[(7)] = inst_15931);

(statearr_15974[(8)] = inst_15932);

return statearr_15974;
})();
var statearr_15975_16007 = state_15971__$1;
(statearr_15975_16007[(2)] = null);

(statearr_15975_16007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (4))){
var inst_15935 = (state_15971[(9)]);
var inst_15935__$1 = (state_15971[(2)]);
var inst_15936 = (inst_15935__$1 == null);
var inst_15937 = cljs.core.not(inst_15936);
var state_15971__$1 = (function (){var statearr_15976 = state_15971;
(statearr_15976[(9)] = inst_15935__$1);

return statearr_15976;
})();
if(inst_15937){
var statearr_15977_16008 = state_15971__$1;
(statearr_15977_16008[(1)] = (5));

} else {
var statearr_15978_16009 = state_15971__$1;
(statearr_15978_16009[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (15))){
var inst_15961 = (state_15971[(2)]);
var state_15971__$1 = state_15971;
var statearr_15979_16010 = state_15971__$1;
(statearr_15979_16010[(2)] = inst_15961);

(statearr_15979_16010[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (13))){
var state_15971__$1 = state_15971;
var statearr_15980_16011 = state_15971__$1;
(statearr_15980_16011[(2)] = null);

(statearr_15980_16011[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (6))){
var inst_15931 = (state_15971[(7)]);
var inst_15956 = inst_15931.length;
var inst_15957 = (inst_15956 > (0));
var state_15971__$1 = state_15971;
if(cljs.core.truth_(inst_15957)){
var statearr_15981_16012 = state_15971__$1;
(statearr_15981_16012[(1)] = (12));

} else {
var statearr_15982_16013 = state_15971__$1;
(statearr_15982_16013[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (3))){
var inst_15969 = (state_15971[(2)]);
var state_15971__$1 = state_15971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15971__$1,inst_15969);
} else {
if((state_val_15972 === (12))){
var inst_15931 = (state_15971[(7)]);
var inst_15959 = cljs.core.vec(inst_15931);
var state_15971__$1 = state_15971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15971__$1,(15),out,inst_15959);
} else {
if((state_val_15972 === (2))){
var state_15971__$1 = state_15971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15971__$1,(4),ch);
} else {
if((state_val_15972 === (11))){
var inst_15935 = (state_15971[(9)]);
var inst_15939 = (state_15971[(10)]);
var inst_15949 = (state_15971[(2)]);
var inst_15950 = [];
var inst_15951 = inst_15950.push(inst_15935);
var inst_15931 = inst_15950;
var inst_15932 = inst_15939;
var state_15971__$1 = (function (){var statearr_15983 = state_15971;
(statearr_15983[(11)] = inst_15951);

(statearr_15983[(7)] = inst_15931);

(statearr_15983[(8)] = inst_15932);

(statearr_15983[(12)] = inst_15949);

return statearr_15983;
})();
var statearr_15984_16014 = state_15971__$1;
(statearr_15984_16014[(2)] = null);

(statearr_15984_16014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (9))){
var inst_15931 = (state_15971[(7)]);
var inst_15947 = cljs.core.vec(inst_15931);
var state_15971__$1 = state_15971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15971__$1,(11),out,inst_15947);
} else {
if((state_val_15972 === (5))){
var inst_15935 = (state_15971[(9)]);
var inst_15939 = (state_15971[(10)]);
var inst_15932 = (state_15971[(8)]);
var inst_15939__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15935) : f.call(null,inst_15935));
var inst_15940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15939__$1,inst_15932);
var inst_15941 = cljs.core.keyword_identical_QMARK_(inst_15932,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_15942 = (inst_15940) || (inst_15941);
var state_15971__$1 = (function (){var statearr_15985 = state_15971;
(statearr_15985[(10)] = inst_15939__$1);

return statearr_15985;
})();
if(cljs.core.truth_(inst_15942)){
var statearr_15986_16015 = state_15971__$1;
(statearr_15986_16015[(1)] = (8));

} else {
var statearr_15987_16016 = state_15971__$1;
(statearr_15987_16016[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (14))){
var inst_15964 = (state_15971[(2)]);
var inst_15965 = cljs.core.async.close_BANG_(out);
var state_15971__$1 = (function (){var statearr_15989 = state_15971;
(statearr_15989[(13)] = inst_15964);

return statearr_15989;
})();
var statearr_15990_16017 = state_15971__$1;
(statearr_15990_16017[(2)] = inst_15965);

(statearr_15990_16017[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (10))){
var inst_15954 = (state_15971[(2)]);
var state_15971__$1 = state_15971;
var statearr_15991_16018 = state_15971__$1;
(statearr_15991_16018[(2)] = inst_15954);

(statearr_15991_16018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15972 === (8))){
var inst_15935 = (state_15971[(9)]);
var inst_15931 = (state_15971[(7)]);
var inst_15939 = (state_15971[(10)]);
var inst_15944 = inst_15931.push(inst_15935);
var tmp15988 = inst_15931;
var inst_15931__$1 = tmp15988;
var inst_15932 = inst_15939;
var state_15971__$1 = (function (){var statearr_15992 = state_15971;
(statearr_15992[(7)] = inst_15931__$1);

(statearr_15992[(14)] = inst_15944);

(statearr_15992[(8)] = inst_15932);

return statearr_15992;
})();
var statearr_15993_16019 = state_15971__$1;
(statearr_15993_16019[(2)] = null);

(statearr_15993_16019[(1)] = (2));


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
});})(c__13223__auto___16005,out))
;
return ((function (switch__13109__auto__,c__13223__auto___16005,out){
return (function() {
var cljs$core$async$state_machine__13110__auto__ = null;
var cljs$core$async$state_machine__13110__auto____0 = (function (){
var statearr_15997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15997[(0)] = cljs$core$async$state_machine__13110__auto__);

(statearr_15997[(1)] = (1));

return statearr_15997;
});
var cljs$core$async$state_machine__13110__auto____1 = (function (state_15971){
while(true){
var ret_value__13111__auto__ = (function (){try{while(true){
var result__13112__auto__ = switch__13109__auto__(state_15971);
if(cljs.core.keyword_identical_QMARK_(result__13112__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13112__auto__;
}
break;
}
}catch (e15998){if((e15998 instanceof Object)){
var ex__13113__auto__ = e15998;
var statearr_15999_16020 = state_15971;
(statearr_15999_16020[(5)] = ex__13113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15971);

return cljs.core.cst$kw$recur;
} else {
throw e15998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13111__auto__,cljs.core.cst$kw$recur)){
var G__16021 = state_15971;
state_15971 = G__16021;
continue;
} else {
return ret_value__13111__auto__;
}
break;
}
});
cljs$core$async$state_machine__13110__auto__ = function(state_15971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13110__auto____1.call(this,state_15971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13110__auto____0;
cljs$core$async$state_machine__13110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13110__auto____1;
return cljs$core$async$state_machine__13110__auto__;
})()
;})(switch__13109__auto__,c__13223__auto___16005,out))
})();
var state__13225__auto__ = (function (){var statearr_16000 = (f__13224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13224__auto__.cljs$core$IFn$_invoke$arity$0() : f__13224__auto__.call(null));
(statearr_16000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13223__auto___16005);

return statearr_16000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13225__auto__);
});})(c__13223__auto___16005,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
