// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20582 = [];
var len__17863__auto___20588 = arguments.length;
var i__17864__auto___20589 = (0);
while(true){
if((i__17864__auto___20589 < len__17863__auto___20588)){
args20582.push((arguments[i__17864__auto___20589]));

var G__20590 = (i__17864__auto___20589 + (1));
i__17864__auto___20589 = G__20590;
continue;
} else {
}
break;
}

var G__20584 = args20582.length;
switch (G__20584) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20582.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20585 = (function (f,blockable,meta20586){
this.f = f;
this.blockable = blockable;
this.meta20586 = meta20586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20587,meta20586__$1){
var self__ = this;
var _20587__$1 = this;
return (new cljs.core.async.t_cljs$core$async20585(self__.f,self__.blockable,meta20586__$1));
});

cljs.core.async.t_cljs$core$async20585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20587){
var self__ = this;
var _20587__$1 = this;
return self__.meta20586;
});

cljs.core.async.t_cljs$core$async20585.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20586","meta20586",-885357440,null)], null);
});

cljs.core.async.t_cljs$core$async20585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20585";

cljs.core.async.t_cljs$core$async20585.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20585");
});

cljs.core.async.__GT_t_cljs$core$async20585 = (function cljs$core$async$__GT_t_cljs$core$async20585(f__$1,blockable__$1,meta20586){
return (new cljs.core.async.t_cljs$core$async20585(f__$1,blockable__$1,meta20586));
});

}

return (new cljs.core.async.t_cljs$core$async20585(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args20594 = [];
var len__17863__auto___20597 = arguments.length;
var i__17864__auto___20598 = (0);
while(true){
if((i__17864__auto___20598 < len__17863__auto___20597)){
args20594.push((arguments[i__17864__auto___20598]));

var G__20599 = (i__17864__auto___20598 + (1));
i__17864__auto___20598 = G__20599;
continue;
} else {
}
break;
}

var G__20596 = args20594.length;
switch (G__20596) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20594.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args20601 = [];
var len__17863__auto___20604 = arguments.length;
var i__17864__auto___20605 = (0);
while(true){
if((i__17864__auto___20605 < len__17863__auto___20604)){
args20601.push((arguments[i__17864__auto___20605]));

var G__20606 = (i__17864__auto___20605 + (1));
i__17864__auto___20605 = G__20606;
continue;
} else {
}
break;
}

var G__20603 = args20601.length;
switch (G__20603) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20601.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args20608 = [];
var len__17863__auto___20611 = arguments.length;
var i__17864__auto___20612 = (0);
while(true){
if((i__17864__auto___20612 < len__17863__auto___20611)){
args20608.push((arguments[i__17864__auto___20612]));

var G__20613 = (i__17864__auto___20612 + (1));
i__17864__auto___20612 = G__20613;
continue;
} else {
}
break;
}

var G__20610 = args20608.length;
switch (G__20610) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20608.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20615 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20615);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20615,ret){
return (function (){
return fn1.call(null,val_20615);
});})(val_20615,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args20616 = [];
var len__17863__auto___20619 = arguments.length;
var i__17864__auto___20620 = (0);
while(true){
if((i__17864__auto___20620 < len__17863__auto___20619)){
args20616.push((arguments[i__17864__auto___20620]));

var G__20621 = (i__17864__auto___20620 + (1));
i__17864__auto___20620 = G__20621;
continue;
} else {
}
break;
}

var G__20618 = args20616.length;
switch (G__20618) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20616.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17708__auto___20623 = n;
var x_20624 = (0);
while(true){
if((x_20624 < n__17708__auto___20623)){
(a[x_20624] = (0));

var G__20625 = (x_20624 + (1));
x_20624 = G__20625;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20626 = (i + (1));
i = G__20626;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20630 = (function (alt_flag,flag,meta20631){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20631 = meta20631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20632,meta20631__$1){
var self__ = this;
var _20632__$1 = this;
return (new cljs.core.async.t_cljs$core$async20630(self__.alt_flag,self__.flag,meta20631__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20632){
var self__ = this;
var _20632__$1 = this;
return self__.meta20631;
});})(flag))
;

cljs.core.async.t_cljs$core$async20630.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20630.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20630.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20631","meta20631",991870426,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20630";

cljs.core.async.t_cljs$core$async20630.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20630");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20630 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20630(alt_flag__$1,flag__$1,meta20631){
return (new cljs.core.async.t_cljs$core$async20630(alt_flag__$1,flag__$1,meta20631));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20630(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20636 = (function (alt_handler,flag,cb,meta20637){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20637 = meta20637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20638,meta20637__$1){
var self__ = this;
var _20638__$1 = this;
return (new cljs.core.async.t_cljs$core$async20636(self__.alt_handler,self__.flag,self__.cb,meta20637__$1));
});

cljs.core.async.t_cljs$core$async20636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20638){
var self__ = this;
var _20638__$1 = this;
return self__.meta20637;
});

cljs.core.async.t_cljs$core$async20636.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20637","meta20637",397096562,null)], null);
});

cljs.core.async.t_cljs$core$async20636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20636";

cljs.core.async.t_cljs$core$async20636.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20636");
});

cljs.core.async.__GT_t_cljs$core$async20636 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20636(alt_handler__$1,flag__$1,cb__$1,meta20637){
return (new cljs.core.async.t_cljs$core$async20636(alt_handler__$1,flag__$1,cb__$1,meta20637));
});

}

return (new cljs.core.async.t_cljs$core$async20636(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20639_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20639_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20640_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20640_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16805__auto__ = wport;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20641 = (i + (1));
i = G__20641;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16805__auto__ = ret;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__17870__auto__ = [];
var len__17863__auto___20647 = arguments.length;
var i__17864__auto___20648 = (0);
while(true){
if((i__17864__auto___20648 < len__17863__auto___20647)){
args__17870__auto__.push((arguments[i__17864__auto___20648]));

var G__20649 = (i__17864__auto___20648 + (1));
i__17864__auto___20648 = G__20649;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20644){
var map__20645 = p__20644;
var map__20645__$1 = ((((!((map__20645 == null)))?((((map__20645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20645):map__20645);
var opts = map__20645__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20642){
var G__20643 = cljs.core.first.call(null,seq20642);
var seq20642__$1 = cljs.core.next.call(null,seq20642);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20643,seq20642__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args20650 = [];
var len__17863__auto___20700 = arguments.length;
var i__17864__auto___20701 = (0);
while(true){
if((i__17864__auto___20701 < len__17863__auto___20700)){
args20650.push((arguments[i__17864__auto___20701]));

var G__20702 = (i__17864__auto___20701 + (1));
i__17864__auto___20701 = G__20702;
continue;
} else {
}
break;
}

var G__20652 = args20650.length;
switch (G__20652) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20650.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20537__auto___20704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___20704){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___20704){
return (function (state_20676){
var state_val_20677 = (state_20676[(1)]);
if((state_val_20677 === (7))){
var inst_20672 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20678_20705 = state_20676__$1;
(statearr_20678_20705[(2)] = inst_20672);

(statearr_20678_20705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (1))){
var state_20676__$1 = state_20676;
var statearr_20679_20706 = state_20676__$1;
(statearr_20679_20706[(2)] = null);

(statearr_20679_20706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (4))){
var inst_20655 = (state_20676[(7)]);
var inst_20655__$1 = (state_20676[(2)]);
var inst_20656 = (inst_20655__$1 == null);
var state_20676__$1 = (function (){var statearr_20680 = state_20676;
(statearr_20680[(7)] = inst_20655__$1);

return statearr_20680;
})();
if(cljs.core.truth_(inst_20656)){
var statearr_20681_20707 = state_20676__$1;
(statearr_20681_20707[(1)] = (5));

} else {
var statearr_20682_20708 = state_20676__$1;
(statearr_20682_20708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (13))){
var state_20676__$1 = state_20676;
var statearr_20683_20709 = state_20676__$1;
(statearr_20683_20709[(2)] = null);

(statearr_20683_20709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (6))){
var inst_20655 = (state_20676[(7)]);
var state_20676__$1 = state_20676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20676__$1,(11),to,inst_20655);
} else {
if((state_val_20677 === (3))){
var inst_20674 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20676__$1,inst_20674);
} else {
if((state_val_20677 === (12))){
var state_20676__$1 = state_20676;
var statearr_20684_20710 = state_20676__$1;
(statearr_20684_20710[(2)] = null);

(statearr_20684_20710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (2))){
var state_20676__$1 = state_20676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20676__$1,(4),from);
} else {
if((state_val_20677 === (11))){
var inst_20665 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
if(cljs.core.truth_(inst_20665)){
var statearr_20685_20711 = state_20676__$1;
(statearr_20685_20711[(1)] = (12));

} else {
var statearr_20686_20712 = state_20676__$1;
(statearr_20686_20712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (9))){
var state_20676__$1 = state_20676;
var statearr_20687_20713 = state_20676__$1;
(statearr_20687_20713[(2)] = null);

(statearr_20687_20713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (5))){
var state_20676__$1 = state_20676;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20688_20714 = state_20676__$1;
(statearr_20688_20714[(1)] = (8));

} else {
var statearr_20689_20715 = state_20676__$1;
(statearr_20689_20715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (14))){
var inst_20670 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20690_20716 = state_20676__$1;
(statearr_20690_20716[(2)] = inst_20670);

(statearr_20690_20716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (10))){
var inst_20662 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20691_20717 = state_20676__$1;
(statearr_20691_20717[(2)] = inst_20662);

(statearr_20691_20717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (8))){
var inst_20659 = cljs.core.async.close_BANG_.call(null,to);
var state_20676__$1 = state_20676;
var statearr_20692_20718 = state_20676__$1;
(statearr_20692_20718[(2)] = inst_20659);

(statearr_20692_20718[(1)] = (10));


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
});})(c__20537__auto___20704))
;
return ((function (switch__20425__auto__,c__20537__auto___20704){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_20696 = [null,null,null,null,null,null,null,null];
(statearr_20696[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_20696[(1)] = (1));

return statearr_20696;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_20676){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_20676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e20697){if((e20697 instanceof Object)){
var ex__20429__auto__ = e20697;
var statearr_20698_20719 = state_20676;
(statearr_20698_20719[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20720 = state_20676;
state_20676 = G__20720;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_20676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_20676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___20704))
})();
var state__20539__auto__ = (function (){var statearr_20699 = f__20538__auto__.call(null);
(statearr_20699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___20704);

return statearr_20699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___20704))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20904){
var vec__20905 = p__20904;
var v = cljs.core.nth.call(null,vec__20905,(0),null);
var p = cljs.core.nth.call(null,vec__20905,(1),null);
var job = vec__20905;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20537__auto___21087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___21087,res,vec__20905,v,p,job,jobs,results){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___21087,res,vec__20905,v,p,job,jobs,results){
return (function (state_20910){
var state_val_20911 = (state_20910[(1)]);
if((state_val_20911 === (1))){
var state_20910__$1 = state_20910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20910__$1,(2),res,v);
} else {
if((state_val_20911 === (2))){
var inst_20907 = (state_20910[(2)]);
var inst_20908 = cljs.core.async.close_BANG_.call(null,res);
var state_20910__$1 = (function (){var statearr_20912 = state_20910;
(statearr_20912[(7)] = inst_20907);

return statearr_20912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20910__$1,inst_20908);
} else {
return null;
}
}
});})(c__20537__auto___21087,res,vec__20905,v,p,job,jobs,results))
;
return ((function (switch__20425__auto__,c__20537__auto___21087,res,vec__20905,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0 = (function (){
var statearr_20916 = [null,null,null,null,null,null,null,null];
(statearr_20916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__);

(statearr_20916[(1)] = (1));

return statearr_20916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1 = (function (state_20910){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_20910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e20917){if((e20917 instanceof Object)){
var ex__20429__auto__ = e20917;
var statearr_20918_21088 = state_20910;
(statearr_20918_21088[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21089 = state_20910;
state_20910 = G__21089;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = function(state_20910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1.call(this,state_20910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___21087,res,vec__20905,v,p,job,jobs,results))
})();
var state__20539__auto__ = (function (){var statearr_20919 = f__20538__auto__.call(null);
(statearr_20919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___21087);

return statearr_20919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___21087,res,vec__20905,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20920){
var vec__20921 = p__20920;
var v = cljs.core.nth.call(null,vec__20921,(0),null);
var p = cljs.core.nth.call(null,vec__20921,(1),null);
var job = vec__20921;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17708__auto___21090 = n;
var __21091 = (0);
while(true){
if((__21091 < n__17708__auto___21090)){
var G__20922_21092 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20922_21092) {
case "compute":
var c__20537__auto___21094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21091,c__20537__auto___21094,G__20922_21092,n__17708__auto___21090,jobs,results,process,async){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (__21091,c__20537__auto___21094,G__20922_21092,n__17708__auto___21090,jobs,results,process,async){
return (function (state_20935){
var state_val_20936 = (state_20935[(1)]);
if((state_val_20936 === (1))){
var state_20935__$1 = state_20935;
var statearr_20937_21095 = state_20935__$1;
(statearr_20937_21095[(2)] = null);

(statearr_20937_21095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20936 === (2))){
var state_20935__$1 = state_20935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20935__$1,(4),jobs);
} else {
if((state_val_20936 === (3))){
var inst_20933 = (state_20935[(2)]);
var state_20935__$1 = state_20935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20935__$1,inst_20933);
} else {
if((state_val_20936 === (4))){
var inst_20925 = (state_20935[(2)]);
var inst_20926 = process.call(null,inst_20925);
var state_20935__$1 = state_20935;
if(cljs.core.truth_(inst_20926)){
var statearr_20938_21096 = state_20935__$1;
(statearr_20938_21096[(1)] = (5));

} else {
var statearr_20939_21097 = state_20935__$1;
(statearr_20939_21097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20936 === (5))){
var state_20935__$1 = state_20935;
var statearr_20940_21098 = state_20935__$1;
(statearr_20940_21098[(2)] = null);

(statearr_20940_21098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20936 === (6))){
var state_20935__$1 = state_20935;
var statearr_20941_21099 = state_20935__$1;
(statearr_20941_21099[(2)] = null);

(statearr_20941_21099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20936 === (7))){
var inst_20931 = (state_20935[(2)]);
var state_20935__$1 = state_20935;
var statearr_20942_21100 = state_20935__$1;
(statearr_20942_21100[(2)] = inst_20931);

(statearr_20942_21100[(1)] = (3));


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
});})(__21091,c__20537__auto___21094,G__20922_21092,n__17708__auto___21090,jobs,results,process,async))
;
return ((function (__21091,switch__20425__auto__,c__20537__auto___21094,G__20922_21092,n__17708__auto___21090,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0 = (function (){
var statearr_20946 = [null,null,null,null,null,null,null];
(statearr_20946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__);

(statearr_20946[(1)] = (1));

return statearr_20946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1 = (function (state_20935){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_20935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e20947){if((e20947 instanceof Object)){
var ex__20429__auto__ = e20947;
var statearr_20948_21101 = state_20935;
(statearr_20948_21101[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21102 = state_20935;
state_20935 = G__21102;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = function(state_20935){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1.call(this,state_20935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__;
})()
;})(__21091,switch__20425__auto__,c__20537__auto___21094,G__20922_21092,n__17708__auto___21090,jobs,results,process,async))
})();
var state__20539__auto__ = (function (){var statearr_20949 = f__20538__auto__.call(null);
(statearr_20949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___21094);

return statearr_20949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(__21091,c__20537__auto___21094,G__20922_21092,n__17708__auto___21090,jobs,results,process,async))
);


break;
case "async":
var c__20537__auto___21103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21091,c__20537__auto___21103,G__20922_21092,n__17708__auto___21090,jobs,results,process,async){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (__21091,c__20537__auto___21103,G__20922_21092,n__17708__auto___21090,jobs,results,process,async){
return (function (state_20962){
var state_val_20963 = (state_20962[(1)]);
if((state_val_20963 === (1))){
var state_20962__$1 = state_20962;
var statearr_20964_21104 = state_20962__$1;
(statearr_20964_21104[(2)] = null);

(statearr_20964_21104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (2))){
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(4),jobs);
} else {
if((state_val_20963 === (3))){
var inst_20960 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20962__$1,inst_20960);
} else {
if((state_val_20963 === (4))){
var inst_20952 = (state_20962[(2)]);
var inst_20953 = async.call(null,inst_20952);
var state_20962__$1 = state_20962;
if(cljs.core.truth_(inst_20953)){
var statearr_20965_21105 = state_20962__$1;
(statearr_20965_21105[(1)] = (5));

} else {
var statearr_20966_21106 = state_20962__$1;
(statearr_20966_21106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (5))){
var state_20962__$1 = state_20962;
var statearr_20967_21107 = state_20962__$1;
(statearr_20967_21107[(2)] = null);

(statearr_20967_21107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (6))){
var state_20962__$1 = state_20962;
var statearr_20968_21108 = state_20962__$1;
(statearr_20968_21108[(2)] = null);

(statearr_20968_21108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (7))){
var inst_20958 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20969_21109 = state_20962__$1;
(statearr_20969_21109[(2)] = inst_20958);

(statearr_20969_21109[(1)] = (3));


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
});})(__21091,c__20537__auto___21103,G__20922_21092,n__17708__auto___21090,jobs,results,process,async))
;
return ((function (__21091,switch__20425__auto__,c__20537__auto___21103,G__20922_21092,n__17708__auto___21090,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0 = (function (){
var statearr_20973 = [null,null,null,null,null,null,null];
(statearr_20973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__);

(statearr_20973[(1)] = (1));

return statearr_20973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1 = (function (state_20962){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_20962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e20974){if((e20974 instanceof Object)){
var ex__20429__auto__ = e20974;
var statearr_20975_21110 = state_20962;
(statearr_20975_21110[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21111 = state_20962;
state_20962 = G__21111;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = function(state_20962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1.call(this,state_20962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__;
})()
;})(__21091,switch__20425__auto__,c__20537__auto___21103,G__20922_21092,n__17708__auto___21090,jobs,results,process,async))
})();
var state__20539__auto__ = (function (){var statearr_20976 = f__20538__auto__.call(null);
(statearr_20976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___21103);

return statearr_20976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(__21091,c__20537__auto___21103,G__20922_21092,n__17708__auto___21090,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21112 = (__21091 + (1));
__21091 = G__21112;
continue;
} else {
}
break;
}

var c__20537__auto___21113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___21113,jobs,results,process,async){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___21113,jobs,results,process,async){
return (function (state_20998){
var state_val_20999 = (state_20998[(1)]);
if((state_val_20999 === (1))){
var state_20998__$1 = state_20998;
var statearr_21000_21114 = state_20998__$1;
(statearr_21000_21114[(2)] = null);

(statearr_21000_21114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20999 === (2))){
var state_20998__$1 = state_20998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20998__$1,(4),from);
} else {
if((state_val_20999 === (3))){
var inst_20996 = (state_20998[(2)]);
var state_20998__$1 = state_20998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20998__$1,inst_20996);
} else {
if((state_val_20999 === (4))){
var inst_20979 = (state_20998[(7)]);
var inst_20979__$1 = (state_20998[(2)]);
var inst_20980 = (inst_20979__$1 == null);
var state_20998__$1 = (function (){var statearr_21001 = state_20998;
(statearr_21001[(7)] = inst_20979__$1);

return statearr_21001;
})();
if(cljs.core.truth_(inst_20980)){
var statearr_21002_21115 = state_20998__$1;
(statearr_21002_21115[(1)] = (5));

} else {
var statearr_21003_21116 = state_20998__$1;
(statearr_21003_21116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20999 === (5))){
var inst_20982 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20998__$1 = state_20998;
var statearr_21004_21117 = state_20998__$1;
(statearr_21004_21117[(2)] = inst_20982);

(statearr_21004_21117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20999 === (6))){
var inst_20984 = (state_20998[(8)]);
var inst_20979 = (state_20998[(7)]);
var inst_20984__$1 = cljs.core.async.chan.call(null,(1));
var inst_20985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20986 = [inst_20979,inst_20984__$1];
var inst_20987 = (new cljs.core.PersistentVector(null,2,(5),inst_20985,inst_20986,null));
var state_20998__$1 = (function (){var statearr_21005 = state_20998;
(statearr_21005[(8)] = inst_20984__$1);

return statearr_21005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20998__$1,(8),jobs,inst_20987);
} else {
if((state_val_20999 === (7))){
var inst_20994 = (state_20998[(2)]);
var state_20998__$1 = state_20998;
var statearr_21006_21118 = state_20998__$1;
(statearr_21006_21118[(2)] = inst_20994);

(statearr_21006_21118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20999 === (8))){
var inst_20984 = (state_20998[(8)]);
var inst_20989 = (state_20998[(2)]);
var state_20998__$1 = (function (){var statearr_21007 = state_20998;
(statearr_21007[(9)] = inst_20989);

return statearr_21007;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20998__$1,(9),results,inst_20984);
} else {
if((state_val_20999 === (9))){
var inst_20991 = (state_20998[(2)]);
var state_20998__$1 = (function (){var statearr_21008 = state_20998;
(statearr_21008[(10)] = inst_20991);

return statearr_21008;
})();
var statearr_21009_21119 = state_20998__$1;
(statearr_21009_21119[(2)] = null);

(statearr_21009_21119[(1)] = (2));


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
});})(c__20537__auto___21113,jobs,results,process,async))
;
return ((function (switch__20425__auto__,c__20537__auto___21113,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0 = (function (){
var statearr_21013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__);

(statearr_21013[(1)] = (1));

return statearr_21013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1 = (function (state_20998){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_20998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e21014){if((e21014 instanceof Object)){
var ex__20429__auto__ = e21014;
var statearr_21015_21120 = state_20998;
(statearr_21015_21120[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21121 = state_20998;
state_20998 = G__21121;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = function(state_20998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1.call(this,state_20998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___21113,jobs,results,process,async))
})();
var state__20539__auto__ = (function (){var statearr_21016 = f__20538__auto__.call(null);
(statearr_21016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___21113);

return statearr_21016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___21113,jobs,results,process,async))
);


var c__20537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto__,jobs,results,process,async){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto__,jobs,results,process,async){
return (function (state_21054){
var state_val_21055 = (state_21054[(1)]);
if((state_val_21055 === (7))){
var inst_21050 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
var statearr_21056_21122 = state_21054__$1;
(statearr_21056_21122[(2)] = inst_21050);

(statearr_21056_21122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (20))){
var state_21054__$1 = state_21054;
var statearr_21057_21123 = state_21054__$1;
(statearr_21057_21123[(2)] = null);

(statearr_21057_21123[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (1))){
var state_21054__$1 = state_21054;
var statearr_21058_21124 = state_21054__$1;
(statearr_21058_21124[(2)] = null);

(statearr_21058_21124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (4))){
var inst_21019 = (state_21054[(7)]);
var inst_21019__$1 = (state_21054[(2)]);
var inst_21020 = (inst_21019__$1 == null);
var state_21054__$1 = (function (){var statearr_21059 = state_21054;
(statearr_21059[(7)] = inst_21019__$1);

return statearr_21059;
})();
if(cljs.core.truth_(inst_21020)){
var statearr_21060_21125 = state_21054__$1;
(statearr_21060_21125[(1)] = (5));

} else {
var statearr_21061_21126 = state_21054__$1;
(statearr_21061_21126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (15))){
var inst_21032 = (state_21054[(8)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21054__$1,(18),to,inst_21032);
} else {
if((state_val_21055 === (21))){
var inst_21045 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
var statearr_21062_21127 = state_21054__$1;
(statearr_21062_21127[(2)] = inst_21045);

(statearr_21062_21127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (13))){
var inst_21047 = (state_21054[(2)]);
var state_21054__$1 = (function (){var statearr_21063 = state_21054;
(statearr_21063[(9)] = inst_21047);

return statearr_21063;
})();
var statearr_21064_21128 = state_21054__$1;
(statearr_21064_21128[(2)] = null);

(statearr_21064_21128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (6))){
var inst_21019 = (state_21054[(7)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21054__$1,(11),inst_21019);
} else {
if((state_val_21055 === (17))){
var inst_21040 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
if(cljs.core.truth_(inst_21040)){
var statearr_21065_21129 = state_21054__$1;
(statearr_21065_21129[(1)] = (19));

} else {
var statearr_21066_21130 = state_21054__$1;
(statearr_21066_21130[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (3))){
var inst_21052 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21054__$1,inst_21052);
} else {
if((state_val_21055 === (12))){
var inst_21029 = (state_21054[(10)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21054__$1,(14),inst_21029);
} else {
if((state_val_21055 === (2))){
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21054__$1,(4),results);
} else {
if((state_val_21055 === (19))){
var state_21054__$1 = state_21054;
var statearr_21067_21131 = state_21054__$1;
(statearr_21067_21131[(2)] = null);

(statearr_21067_21131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (11))){
var inst_21029 = (state_21054[(2)]);
var state_21054__$1 = (function (){var statearr_21068 = state_21054;
(statearr_21068[(10)] = inst_21029);

return statearr_21068;
})();
var statearr_21069_21132 = state_21054__$1;
(statearr_21069_21132[(2)] = null);

(statearr_21069_21132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (9))){
var state_21054__$1 = state_21054;
var statearr_21070_21133 = state_21054__$1;
(statearr_21070_21133[(2)] = null);

(statearr_21070_21133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (5))){
var state_21054__$1 = state_21054;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21071_21134 = state_21054__$1;
(statearr_21071_21134[(1)] = (8));

} else {
var statearr_21072_21135 = state_21054__$1;
(statearr_21072_21135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (14))){
var inst_21032 = (state_21054[(8)]);
var inst_21034 = (state_21054[(11)]);
var inst_21032__$1 = (state_21054[(2)]);
var inst_21033 = (inst_21032__$1 == null);
var inst_21034__$1 = cljs.core.not.call(null,inst_21033);
var state_21054__$1 = (function (){var statearr_21073 = state_21054;
(statearr_21073[(8)] = inst_21032__$1);

(statearr_21073[(11)] = inst_21034__$1);

return statearr_21073;
})();
if(inst_21034__$1){
var statearr_21074_21136 = state_21054__$1;
(statearr_21074_21136[(1)] = (15));

} else {
var statearr_21075_21137 = state_21054__$1;
(statearr_21075_21137[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (16))){
var inst_21034 = (state_21054[(11)]);
var state_21054__$1 = state_21054;
var statearr_21076_21138 = state_21054__$1;
(statearr_21076_21138[(2)] = inst_21034);

(statearr_21076_21138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (10))){
var inst_21026 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
var statearr_21077_21139 = state_21054__$1;
(statearr_21077_21139[(2)] = inst_21026);

(statearr_21077_21139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (18))){
var inst_21037 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
var statearr_21078_21140 = state_21054__$1;
(statearr_21078_21140[(2)] = inst_21037);

(statearr_21078_21140[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (8))){
var inst_21023 = cljs.core.async.close_BANG_.call(null,to);
var state_21054__$1 = state_21054;
var statearr_21079_21141 = state_21054__$1;
(statearr_21079_21141[(2)] = inst_21023);

(statearr_21079_21141[(1)] = (10));


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
});})(c__20537__auto__,jobs,results,process,async))
;
return ((function (switch__20425__auto__,c__20537__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0 = (function (){
var statearr_21083 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__);

(statearr_21083[(1)] = (1));

return statearr_21083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1 = (function (state_21054){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_21054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e21084){if((e21084 instanceof Object)){
var ex__20429__auto__ = e21084;
var statearr_21085_21142 = state_21054;
(statearr_21085_21142[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21143 = state_21054;
state_21054 = G__21143;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__ = function(state_21054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1.call(this,state_21054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto__,jobs,results,process,async))
})();
var state__20539__auto__ = (function (){var statearr_21086 = f__20538__auto__.call(null);
(statearr_21086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto__);

return statearr_21086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto__,jobs,results,process,async))
);

return c__20537__auto__;
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
var args21144 = [];
var len__17863__auto___21147 = arguments.length;
var i__17864__auto___21148 = (0);
while(true){
if((i__17864__auto___21148 < len__17863__auto___21147)){
args21144.push((arguments[i__17864__auto___21148]));

var G__21149 = (i__17864__auto___21148 + (1));
i__17864__auto___21148 = G__21149;
continue;
} else {
}
break;
}

var G__21146 = args21144.length;
switch (G__21146) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21144.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args21151 = [];
var len__17863__auto___21154 = arguments.length;
var i__17864__auto___21155 = (0);
while(true){
if((i__17864__auto___21155 < len__17863__auto___21154)){
args21151.push((arguments[i__17864__auto___21155]));

var G__21156 = (i__17864__auto___21155 + (1));
i__17864__auto___21155 = G__21156;
continue;
} else {
}
break;
}

var G__21153 = args21151.length;
switch (G__21153) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21151.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args21158 = [];
var len__17863__auto___21211 = arguments.length;
var i__17864__auto___21212 = (0);
while(true){
if((i__17864__auto___21212 < len__17863__auto___21211)){
args21158.push((arguments[i__17864__auto___21212]));

var G__21213 = (i__17864__auto___21212 + (1));
i__17864__auto___21212 = G__21213;
continue;
} else {
}
break;
}

var G__21160 = args21158.length;
switch (G__21160) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21158.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20537__auto___21215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___21215,tc,fc){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___21215,tc,fc){
return (function (state_21186){
var state_val_21187 = (state_21186[(1)]);
if((state_val_21187 === (7))){
var inst_21182 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21188_21216 = state_21186__$1;
(statearr_21188_21216[(2)] = inst_21182);

(statearr_21188_21216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (1))){
var state_21186__$1 = state_21186;
var statearr_21189_21217 = state_21186__$1;
(statearr_21189_21217[(2)] = null);

(statearr_21189_21217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (4))){
var inst_21163 = (state_21186[(7)]);
var inst_21163__$1 = (state_21186[(2)]);
var inst_21164 = (inst_21163__$1 == null);
var state_21186__$1 = (function (){var statearr_21190 = state_21186;
(statearr_21190[(7)] = inst_21163__$1);

return statearr_21190;
})();
if(cljs.core.truth_(inst_21164)){
var statearr_21191_21218 = state_21186__$1;
(statearr_21191_21218[(1)] = (5));

} else {
var statearr_21192_21219 = state_21186__$1;
(statearr_21192_21219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (13))){
var state_21186__$1 = state_21186;
var statearr_21193_21220 = state_21186__$1;
(statearr_21193_21220[(2)] = null);

(statearr_21193_21220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (6))){
var inst_21163 = (state_21186[(7)]);
var inst_21169 = p.call(null,inst_21163);
var state_21186__$1 = state_21186;
if(cljs.core.truth_(inst_21169)){
var statearr_21194_21221 = state_21186__$1;
(statearr_21194_21221[(1)] = (9));

} else {
var statearr_21195_21222 = state_21186__$1;
(statearr_21195_21222[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (3))){
var inst_21184 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21186__$1,inst_21184);
} else {
if((state_val_21187 === (12))){
var state_21186__$1 = state_21186;
var statearr_21196_21223 = state_21186__$1;
(statearr_21196_21223[(2)] = null);

(statearr_21196_21223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (2))){
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21186__$1,(4),ch);
} else {
if((state_val_21187 === (11))){
var inst_21163 = (state_21186[(7)]);
var inst_21173 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21186__$1,(8),inst_21173,inst_21163);
} else {
if((state_val_21187 === (9))){
var state_21186__$1 = state_21186;
var statearr_21197_21224 = state_21186__$1;
(statearr_21197_21224[(2)] = tc);

(statearr_21197_21224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (5))){
var inst_21166 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21167 = cljs.core.async.close_BANG_.call(null,fc);
var state_21186__$1 = (function (){var statearr_21198 = state_21186;
(statearr_21198[(8)] = inst_21166);

return statearr_21198;
})();
var statearr_21199_21225 = state_21186__$1;
(statearr_21199_21225[(2)] = inst_21167);

(statearr_21199_21225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (14))){
var inst_21180 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21200_21226 = state_21186__$1;
(statearr_21200_21226[(2)] = inst_21180);

(statearr_21200_21226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (10))){
var state_21186__$1 = state_21186;
var statearr_21201_21227 = state_21186__$1;
(statearr_21201_21227[(2)] = fc);

(statearr_21201_21227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (8))){
var inst_21175 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
if(cljs.core.truth_(inst_21175)){
var statearr_21202_21228 = state_21186__$1;
(statearr_21202_21228[(1)] = (12));

} else {
var statearr_21203_21229 = state_21186__$1;
(statearr_21203_21229[(1)] = (13));

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
});})(c__20537__auto___21215,tc,fc))
;
return ((function (switch__20425__auto__,c__20537__auto___21215,tc,fc){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_21207 = [null,null,null,null,null,null,null,null,null];
(statearr_21207[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_21207[(1)] = (1));

return statearr_21207;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_21186){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_21186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e21208){if((e21208 instanceof Object)){
var ex__20429__auto__ = e21208;
var statearr_21209_21230 = state_21186;
(statearr_21209_21230[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21231 = state_21186;
state_21186 = G__21231;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_21186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_21186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___21215,tc,fc))
})();
var state__20539__auto__ = (function (){var statearr_21210 = f__20538__auto__.call(null);
(statearr_21210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___21215);

return statearr_21210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___21215,tc,fc))
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
var c__20537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto__){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto__){
return (function (state_21295){
var state_val_21296 = (state_21295[(1)]);
if((state_val_21296 === (7))){
var inst_21291 = (state_21295[(2)]);
var state_21295__$1 = state_21295;
var statearr_21297_21318 = state_21295__$1;
(statearr_21297_21318[(2)] = inst_21291);

(statearr_21297_21318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (1))){
var inst_21275 = init;
var state_21295__$1 = (function (){var statearr_21298 = state_21295;
(statearr_21298[(7)] = inst_21275);

return statearr_21298;
})();
var statearr_21299_21319 = state_21295__$1;
(statearr_21299_21319[(2)] = null);

(statearr_21299_21319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (4))){
var inst_21278 = (state_21295[(8)]);
var inst_21278__$1 = (state_21295[(2)]);
var inst_21279 = (inst_21278__$1 == null);
var state_21295__$1 = (function (){var statearr_21300 = state_21295;
(statearr_21300[(8)] = inst_21278__$1);

return statearr_21300;
})();
if(cljs.core.truth_(inst_21279)){
var statearr_21301_21320 = state_21295__$1;
(statearr_21301_21320[(1)] = (5));

} else {
var statearr_21302_21321 = state_21295__$1;
(statearr_21302_21321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (6))){
var inst_21275 = (state_21295[(7)]);
var inst_21282 = (state_21295[(9)]);
var inst_21278 = (state_21295[(8)]);
var inst_21282__$1 = f.call(null,inst_21275,inst_21278);
var inst_21283 = cljs.core.reduced_QMARK_.call(null,inst_21282__$1);
var state_21295__$1 = (function (){var statearr_21303 = state_21295;
(statearr_21303[(9)] = inst_21282__$1);

return statearr_21303;
})();
if(inst_21283){
var statearr_21304_21322 = state_21295__$1;
(statearr_21304_21322[(1)] = (8));

} else {
var statearr_21305_21323 = state_21295__$1;
(statearr_21305_21323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (3))){
var inst_21293 = (state_21295[(2)]);
var state_21295__$1 = state_21295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21295__$1,inst_21293);
} else {
if((state_val_21296 === (2))){
var state_21295__$1 = state_21295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21295__$1,(4),ch);
} else {
if((state_val_21296 === (9))){
var inst_21282 = (state_21295[(9)]);
var inst_21275 = inst_21282;
var state_21295__$1 = (function (){var statearr_21306 = state_21295;
(statearr_21306[(7)] = inst_21275);

return statearr_21306;
})();
var statearr_21307_21324 = state_21295__$1;
(statearr_21307_21324[(2)] = null);

(statearr_21307_21324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (5))){
var inst_21275 = (state_21295[(7)]);
var state_21295__$1 = state_21295;
var statearr_21308_21325 = state_21295__$1;
(statearr_21308_21325[(2)] = inst_21275);

(statearr_21308_21325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (10))){
var inst_21289 = (state_21295[(2)]);
var state_21295__$1 = state_21295;
var statearr_21309_21326 = state_21295__$1;
(statearr_21309_21326[(2)] = inst_21289);

(statearr_21309_21326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (8))){
var inst_21282 = (state_21295[(9)]);
var inst_21285 = cljs.core.deref.call(null,inst_21282);
var state_21295__$1 = state_21295;
var statearr_21310_21327 = state_21295__$1;
(statearr_21310_21327[(2)] = inst_21285);

(statearr_21310_21327[(1)] = (10));


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
});})(c__20537__auto__))
;
return ((function (switch__20425__auto__,c__20537__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20426__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20426__auto____0 = (function (){
var statearr_21314 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21314[(0)] = cljs$core$async$reduce_$_state_machine__20426__auto__);

(statearr_21314[(1)] = (1));

return statearr_21314;
});
var cljs$core$async$reduce_$_state_machine__20426__auto____1 = (function (state_21295){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_21295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e21315){if((e21315 instanceof Object)){
var ex__20429__auto__ = e21315;
var statearr_21316_21328 = state_21295;
(statearr_21316_21328[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21329 = state_21295;
state_21295 = G__21329;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20426__auto__ = function(state_21295){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20426__auto____1.call(this,state_21295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20426__auto____0;
cljs$core$async$reduce_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20426__auto____1;
return cljs$core$async$reduce_$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto__))
})();
var state__20539__auto__ = (function (){var statearr_21317 = f__20538__auto__.call(null);
(statearr_21317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto__);

return statearr_21317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto__))
);

return c__20537__auto__;
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
var args21330 = [];
var len__17863__auto___21382 = arguments.length;
var i__17864__auto___21383 = (0);
while(true){
if((i__17864__auto___21383 < len__17863__auto___21382)){
args21330.push((arguments[i__17864__auto___21383]));

var G__21384 = (i__17864__auto___21383 + (1));
i__17864__auto___21383 = G__21384;
continue;
} else {
}
break;
}

var G__21332 = args21330.length;
switch (G__21332) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21330.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto__){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto__){
return (function (state_21357){
var state_val_21358 = (state_21357[(1)]);
if((state_val_21358 === (7))){
var inst_21339 = (state_21357[(2)]);
var state_21357__$1 = state_21357;
var statearr_21359_21386 = state_21357__$1;
(statearr_21359_21386[(2)] = inst_21339);

(statearr_21359_21386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (1))){
var inst_21333 = cljs.core.seq.call(null,coll);
var inst_21334 = inst_21333;
var state_21357__$1 = (function (){var statearr_21360 = state_21357;
(statearr_21360[(7)] = inst_21334);

return statearr_21360;
})();
var statearr_21361_21387 = state_21357__$1;
(statearr_21361_21387[(2)] = null);

(statearr_21361_21387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (4))){
var inst_21334 = (state_21357[(7)]);
var inst_21337 = cljs.core.first.call(null,inst_21334);
var state_21357__$1 = state_21357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21357__$1,(7),ch,inst_21337);
} else {
if((state_val_21358 === (13))){
var inst_21351 = (state_21357[(2)]);
var state_21357__$1 = state_21357;
var statearr_21362_21388 = state_21357__$1;
(statearr_21362_21388[(2)] = inst_21351);

(statearr_21362_21388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (6))){
var inst_21342 = (state_21357[(2)]);
var state_21357__$1 = state_21357;
if(cljs.core.truth_(inst_21342)){
var statearr_21363_21389 = state_21357__$1;
(statearr_21363_21389[(1)] = (8));

} else {
var statearr_21364_21390 = state_21357__$1;
(statearr_21364_21390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (3))){
var inst_21355 = (state_21357[(2)]);
var state_21357__$1 = state_21357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21357__$1,inst_21355);
} else {
if((state_val_21358 === (12))){
var state_21357__$1 = state_21357;
var statearr_21365_21391 = state_21357__$1;
(statearr_21365_21391[(2)] = null);

(statearr_21365_21391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (2))){
var inst_21334 = (state_21357[(7)]);
var state_21357__$1 = state_21357;
if(cljs.core.truth_(inst_21334)){
var statearr_21366_21392 = state_21357__$1;
(statearr_21366_21392[(1)] = (4));

} else {
var statearr_21367_21393 = state_21357__$1;
(statearr_21367_21393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (11))){
var inst_21348 = cljs.core.async.close_BANG_.call(null,ch);
var state_21357__$1 = state_21357;
var statearr_21368_21394 = state_21357__$1;
(statearr_21368_21394[(2)] = inst_21348);

(statearr_21368_21394[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (9))){
var state_21357__$1 = state_21357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21369_21395 = state_21357__$1;
(statearr_21369_21395[(1)] = (11));

} else {
var statearr_21370_21396 = state_21357__$1;
(statearr_21370_21396[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (5))){
var inst_21334 = (state_21357[(7)]);
var state_21357__$1 = state_21357;
var statearr_21371_21397 = state_21357__$1;
(statearr_21371_21397[(2)] = inst_21334);

(statearr_21371_21397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (10))){
var inst_21353 = (state_21357[(2)]);
var state_21357__$1 = state_21357;
var statearr_21372_21398 = state_21357__$1;
(statearr_21372_21398[(2)] = inst_21353);

(statearr_21372_21398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (8))){
var inst_21334 = (state_21357[(7)]);
var inst_21344 = cljs.core.next.call(null,inst_21334);
var inst_21334__$1 = inst_21344;
var state_21357__$1 = (function (){var statearr_21373 = state_21357;
(statearr_21373[(7)] = inst_21334__$1);

return statearr_21373;
})();
var statearr_21374_21399 = state_21357__$1;
(statearr_21374_21399[(2)] = null);

(statearr_21374_21399[(1)] = (2));


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
});})(c__20537__auto__))
;
return ((function (switch__20425__auto__,c__20537__auto__){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_21378 = [null,null,null,null,null,null,null,null];
(statearr_21378[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_21378[(1)] = (1));

return statearr_21378;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_21357){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_21357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e21379){if((e21379 instanceof Object)){
var ex__20429__auto__ = e21379;
var statearr_21380_21400 = state_21357;
(statearr_21380_21400[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21401 = state_21357;
state_21357 = G__21401;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_21357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_21357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto__))
})();
var state__20539__auto__ = (function (){var statearr_21381 = f__20538__auto__.call(null);
(statearr_21381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto__);

return statearr_21381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto__))
);

return c__20537__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21623 = (function (mult,ch,cs,meta21624){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21624 = meta21624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21625,meta21624__$1){
var self__ = this;
var _21625__$1 = this;
return (new cljs.core.async.t_cljs$core$async21623(self__.mult,self__.ch,self__.cs,meta21624__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21625){
var self__ = this;
var _21625__$1 = this;
return self__.meta21624;
});})(cs))
;

cljs.core.async.t_cljs$core$async21623.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21623.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21623.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21623.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21623.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21623.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21624","meta21624",-527458540,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21623";

cljs.core.async.t_cljs$core$async21623.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21623");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21623 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21623(mult__$1,ch__$1,cs__$1,meta21624){
return (new cljs.core.async.t_cljs$core$async21623(mult__$1,ch__$1,cs__$1,meta21624));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21623(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20537__auto___21844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___21844,cs,m,dchan,dctr,done){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___21844,cs,m,dchan,dctr,done){
return (function (state_21756){
var state_val_21757 = (state_21756[(1)]);
if((state_val_21757 === (7))){
var inst_21752 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
var statearr_21758_21845 = state_21756__$1;
(statearr_21758_21845[(2)] = inst_21752);

(statearr_21758_21845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (20))){
var inst_21657 = (state_21756[(7)]);
var inst_21667 = cljs.core.first.call(null,inst_21657);
var inst_21668 = cljs.core.nth.call(null,inst_21667,(0),null);
var inst_21669 = cljs.core.nth.call(null,inst_21667,(1),null);
var state_21756__$1 = (function (){var statearr_21759 = state_21756;
(statearr_21759[(8)] = inst_21668);

return statearr_21759;
})();
if(cljs.core.truth_(inst_21669)){
var statearr_21760_21846 = state_21756__$1;
(statearr_21760_21846[(1)] = (22));

} else {
var statearr_21761_21847 = state_21756__$1;
(statearr_21761_21847[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (27))){
var inst_21697 = (state_21756[(9)]);
var inst_21628 = (state_21756[(10)]);
var inst_21699 = (state_21756[(11)]);
var inst_21704 = (state_21756[(12)]);
var inst_21704__$1 = cljs.core._nth.call(null,inst_21697,inst_21699);
var inst_21705 = cljs.core.async.put_BANG_.call(null,inst_21704__$1,inst_21628,done);
var state_21756__$1 = (function (){var statearr_21762 = state_21756;
(statearr_21762[(12)] = inst_21704__$1);

return statearr_21762;
})();
if(cljs.core.truth_(inst_21705)){
var statearr_21763_21848 = state_21756__$1;
(statearr_21763_21848[(1)] = (30));

} else {
var statearr_21764_21849 = state_21756__$1;
(statearr_21764_21849[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (1))){
var state_21756__$1 = state_21756;
var statearr_21765_21850 = state_21756__$1;
(statearr_21765_21850[(2)] = null);

(statearr_21765_21850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (24))){
var inst_21657 = (state_21756[(7)]);
var inst_21674 = (state_21756[(2)]);
var inst_21675 = cljs.core.next.call(null,inst_21657);
var inst_21637 = inst_21675;
var inst_21638 = null;
var inst_21639 = (0);
var inst_21640 = (0);
var state_21756__$1 = (function (){var statearr_21766 = state_21756;
(statearr_21766[(13)] = inst_21640);

(statearr_21766[(14)] = inst_21638);

(statearr_21766[(15)] = inst_21639);

(statearr_21766[(16)] = inst_21637);

(statearr_21766[(17)] = inst_21674);

return statearr_21766;
})();
var statearr_21767_21851 = state_21756__$1;
(statearr_21767_21851[(2)] = null);

(statearr_21767_21851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (39))){
var state_21756__$1 = state_21756;
var statearr_21771_21852 = state_21756__$1;
(statearr_21771_21852[(2)] = null);

(statearr_21771_21852[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (4))){
var inst_21628 = (state_21756[(10)]);
var inst_21628__$1 = (state_21756[(2)]);
var inst_21629 = (inst_21628__$1 == null);
var state_21756__$1 = (function (){var statearr_21772 = state_21756;
(statearr_21772[(10)] = inst_21628__$1);

return statearr_21772;
})();
if(cljs.core.truth_(inst_21629)){
var statearr_21773_21853 = state_21756__$1;
(statearr_21773_21853[(1)] = (5));

} else {
var statearr_21774_21854 = state_21756__$1;
(statearr_21774_21854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (15))){
var inst_21640 = (state_21756[(13)]);
var inst_21638 = (state_21756[(14)]);
var inst_21639 = (state_21756[(15)]);
var inst_21637 = (state_21756[(16)]);
var inst_21653 = (state_21756[(2)]);
var inst_21654 = (inst_21640 + (1));
var tmp21768 = inst_21638;
var tmp21769 = inst_21639;
var tmp21770 = inst_21637;
var inst_21637__$1 = tmp21770;
var inst_21638__$1 = tmp21768;
var inst_21639__$1 = tmp21769;
var inst_21640__$1 = inst_21654;
var state_21756__$1 = (function (){var statearr_21775 = state_21756;
(statearr_21775[(13)] = inst_21640__$1);

(statearr_21775[(14)] = inst_21638__$1);

(statearr_21775[(15)] = inst_21639__$1);

(statearr_21775[(16)] = inst_21637__$1);

(statearr_21775[(18)] = inst_21653);

return statearr_21775;
})();
var statearr_21776_21855 = state_21756__$1;
(statearr_21776_21855[(2)] = null);

(statearr_21776_21855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (21))){
var inst_21678 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
var statearr_21780_21856 = state_21756__$1;
(statearr_21780_21856[(2)] = inst_21678);

(statearr_21780_21856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (31))){
var inst_21704 = (state_21756[(12)]);
var inst_21708 = done.call(null,null);
var inst_21709 = cljs.core.async.untap_STAR_.call(null,m,inst_21704);
var state_21756__$1 = (function (){var statearr_21781 = state_21756;
(statearr_21781[(19)] = inst_21708);

return statearr_21781;
})();
var statearr_21782_21857 = state_21756__$1;
(statearr_21782_21857[(2)] = inst_21709);

(statearr_21782_21857[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (32))){
var inst_21697 = (state_21756[(9)]);
var inst_21696 = (state_21756[(20)]);
var inst_21699 = (state_21756[(11)]);
var inst_21698 = (state_21756[(21)]);
var inst_21711 = (state_21756[(2)]);
var inst_21712 = (inst_21699 + (1));
var tmp21777 = inst_21697;
var tmp21778 = inst_21696;
var tmp21779 = inst_21698;
var inst_21696__$1 = tmp21778;
var inst_21697__$1 = tmp21777;
var inst_21698__$1 = tmp21779;
var inst_21699__$1 = inst_21712;
var state_21756__$1 = (function (){var statearr_21783 = state_21756;
(statearr_21783[(9)] = inst_21697__$1);

(statearr_21783[(20)] = inst_21696__$1);

(statearr_21783[(11)] = inst_21699__$1);

(statearr_21783[(21)] = inst_21698__$1);

(statearr_21783[(22)] = inst_21711);

return statearr_21783;
})();
var statearr_21784_21858 = state_21756__$1;
(statearr_21784_21858[(2)] = null);

(statearr_21784_21858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (40))){
var inst_21724 = (state_21756[(23)]);
var inst_21728 = done.call(null,null);
var inst_21729 = cljs.core.async.untap_STAR_.call(null,m,inst_21724);
var state_21756__$1 = (function (){var statearr_21785 = state_21756;
(statearr_21785[(24)] = inst_21728);

return statearr_21785;
})();
var statearr_21786_21859 = state_21756__$1;
(statearr_21786_21859[(2)] = inst_21729);

(statearr_21786_21859[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (33))){
var inst_21715 = (state_21756[(25)]);
var inst_21717 = cljs.core.chunked_seq_QMARK_.call(null,inst_21715);
var state_21756__$1 = state_21756;
if(inst_21717){
var statearr_21787_21860 = state_21756__$1;
(statearr_21787_21860[(1)] = (36));

} else {
var statearr_21788_21861 = state_21756__$1;
(statearr_21788_21861[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (13))){
var inst_21647 = (state_21756[(26)]);
var inst_21650 = cljs.core.async.close_BANG_.call(null,inst_21647);
var state_21756__$1 = state_21756;
var statearr_21789_21862 = state_21756__$1;
(statearr_21789_21862[(2)] = inst_21650);

(statearr_21789_21862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (22))){
var inst_21668 = (state_21756[(8)]);
var inst_21671 = cljs.core.async.close_BANG_.call(null,inst_21668);
var state_21756__$1 = state_21756;
var statearr_21790_21863 = state_21756__$1;
(statearr_21790_21863[(2)] = inst_21671);

(statearr_21790_21863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (36))){
var inst_21715 = (state_21756[(25)]);
var inst_21719 = cljs.core.chunk_first.call(null,inst_21715);
var inst_21720 = cljs.core.chunk_rest.call(null,inst_21715);
var inst_21721 = cljs.core.count.call(null,inst_21719);
var inst_21696 = inst_21720;
var inst_21697 = inst_21719;
var inst_21698 = inst_21721;
var inst_21699 = (0);
var state_21756__$1 = (function (){var statearr_21791 = state_21756;
(statearr_21791[(9)] = inst_21697);

(statearr_21791[(20)] = inst_21696);

(statearr_21791[(11)] = inst_21699);

(statearr_21791[(21)] = inst_21698);

return statearr_21791;
})();
var statearr_21792_21864 = state_21756__$1;
(statearr_21792_21864[(2)] = null);

(statearr_21792_21864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (41))){
var inst_21715 = (state_21756[(25)]);
var inst_21731 = (state_21756[(2)]);
var inst_21732 = cljs.core.next.call(null,inst_21715);
var inst_21696 = inst_21732;
var inst_21697 = null;
var inst_21698 = (0);
var inst_21699 = (0);
var state_21756__$1 = (function (){var statearr_21793 = state_21756;
(statearr_21793[(9)] = inst_21697);

(statearr_21793[(20)] = inst_21696);

(statearr_21793[(27)] = inst_21731);

(statearr_21793[(11)] = inst_21699);

(statearr_21793[(21)] = inst_21698);

return statearr_21793;
})();
var statearr_21794_21865 = state_21756__$1;
(statearr_21794_21865[(2)] = null);

(statearr_21794_21865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (43))){
var state_21756__$1 = state_21756;
var statearr_21795_21866 = state_21756__$1;
(statearr_21795_21866[(2)] = null);

(statearr_21795_21866[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (29))){
var inst_21740 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
var statearr_21796_21867 = state_21756__$1;
(statearr_21796_21867[(2)] = inst_21740);

(statearr_21796_21867[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (44))){
var inst_21749 = (state_21756[(2)]);
var state_21756__$1 = (function (){var statearr_21797 = state_21756;
(statearr_21797[(28)] = inst_21749);

return statearr_21797;
})();
var statearr_21798_21868 = state_21756__$1;
(statearr_21798_21868[(2)] = null);

(statearr_21798_21868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (6))){
var inst_21688 = (state_21756[(29)]);
var inst_21687 = cljs.core.deref.call(null,cs);
var inst_21688__$1 = cljs.core.keys.call(null,inst_21687);
var inst_21689 = cljs.core.count.call(null,inst_21688__$1);
var inst_21690 = cljs.core.reset_BANG_.call(null,dctr,inst_21689);
var inst_21695 = cljs.core.seq.call(null,inst_21688__$1);
var inst_21696 = inst_21695;
var inst_21697 = null;
var inst_21698 = (0);
var inst_21699 = (0);
var state_21756__$1 = (function (){var statearr_21799 = state_21756;
(statearr_21799[(30)] = inst_21690);

(statearr_21799[(9)] = inst_21697);

(statearr_21799[(20)] = inst_21696);

(statearr_21799[(29)] = inst_21688__$1);

(statearr_21799[(11)] = inst_21699);

(statearr_21799[(21)] = inst_21698);

return statearr_21799;
})();
var statearr_21800_21869 = state_21756__$1;
(statearr_21800_21869[(2)] = null);

(statearr_21800_21869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (28))){
var inst_21715 = (state_21756[(25)]);
var inst_21696 = (state_21756[(20)]);
var inst_21715__$1 = cljs.core.seq.call(null,inst_21696);
var state_21756__$1 = (function (){var statearr_21801 = state_21756;
(statearr_21801[(25)] = inst_21715__$1);

return statearr_21801;
})();
if(inst_21715__$1){
var statearr_21802_21870 = state_21756__$1;
(statearr_21802_21870[(1)] = (33));

} else {
var statearr_21803_21871 = state_21756__$1;
(statearr_21803_21871[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (25))){
var inst_21699 = (state_21756[(11)]);
var inst_21698 = (state_21756[(21)]);
var inst_21701 = (inst_21699 < inst_21698);
var inst_21702 = inst_21701;
var state_21756__$1 = state_21756;
if(cljs.core.truth_(inst_21702)){
var statearr_21804_21872 = state_21756__$1;
(statearr_21804_21872[(1)] = (27));

} else {
var statearr_21805_21873 = state_21756__$1;
(statearr_21805_21873[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (34))){
var state_21756__$1 = state_21756;
var statearr_21806_21874 = state_21756__$1;
(statearr_21806_21874[(2)] = null);

(statearr_21806_21874[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (17))){
var state_21756__$1 = state_21756;
var statearr_21807_21875 = state_21756__$1;
(statearr_21807_21875[(2)] = null);

(statearr_21807_21875[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (3))){
var inst_21754 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21756__$1,inst_21754);
} else {
if((state_val_21757 === (12))){
var inst_21683 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
var statearr_21808_21876 = state_21756__$1;
(statearr_21808_21876[(2)] = inst_21683);

(statearr_21808_21876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (2))){
var state_21756__$1 = state_21756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21756__$1,(4),ch);
} else {
if((state_val_21757 === (23))){
var state_21756__$1 = state_21756;
var statearr_21809_21877 = state_21756__$1;
(statearr_21809_21877[(2)] = null);

(statearr_21809_21877[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (35))){
var inst_21738 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
var statearr_21810_21878 = state_21756__$1;
(statearr_21810_21878[(2)] = inst_21738);

(statearr_21810_21878[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (19))){
var inst_21657 = (state_21756[(7)]);
var inst_21661 = cljs.core.chunk_first.call(null,inst_21657);
var inst_21662 = cljs.core.chunk_rest.call(null,inst_21657);
var inst_21663 = cljs.core.count.call(null,inst_21661);
var inst_21637 = inst_21662;
var inst_21638 = inst_21661;
var inst_21639 = inst_21663;
var inst_21640 = (0);
var state_21756__$1 = (function (){var statearr_21811 = state_21756;
(statearr_21811[(13)] = inst_21640);

(statearr_21811[(14)] = inst_21638);

(statearr_21811[(15)] = inst_21639);

(statearr_21811[(16)] = inst_21637);

return statearr_21811;
})();
var statearr_21812_21879 = state_21756__$1;
(statearr_21812_21879[(2)] = null);

(statearr_21812_21879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (11))){
var inst_21657 = (state_21756[(7)]);
var inst_21637 = (state_21756[(16)]);
var inst_21657__$1 = cljs.core.seq.call(null,inst_21637);
var state_21756__$1 = (function (){var statearr_21813 = state_21756;
(statearr_21813[(7)] = inst_21657__$1);

return statearr_21813;
})();
if(inst_21657__$1){
var statearr_21814_21880 = state_21756__$1;
(statearr_21814_21880[(1)] = (16));

} else {
var statearr_21815_21881 = state_21756__$1;
(statearr_21815_21881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (9))){
var inst_21685 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
var statearr_21816_21882 = state_21756__$1;
(statearr_21816_21882[(2)] = inst_21685);

(statearr_21816_21882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (5))){
var inst_21635 = cljs.core.deref.call(null,cs);
var inst_21636 = cljs.core.seq.call(null,inst_21635);
var inst_21637 = inst_21636;
var inst_21638 = null;
var inst_21639 = (0);
var inst_21640 = (0);
var state_21756__$1 = (function (){var statearr_21817 = state_21756;
(statearr_21817[(13)] = inst_21640);

(statearr_21817[(14)] = inst_21638);

(statearr_21817[(15)] = inst_21639);

(statearr_21817[(16)] = inst_21637);

return statearr_21817;
})();
var statearr_21818_21883 = state_21756__$1;
(statearr_21818_21883[(2)] = null);

(statearr_21818_21883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (14))){
var state_21756__$1 = state_21756;
var statearr_21819_21884 = state_21756__$1;
(statearr_21819_21884[(2)] = null);

(statearr_21819_21884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (45))){
var inst_21746 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
var statearr_21820_21885 = state_21756__$1;
(statearr_21820_21885[(2)] = inst_21746);

(statearr_21820_21885[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (26))){
var inst_21688 = (state_21756[(29)]);
var inst_21742 = (state_21756[(2)]);
var inst_21743 = cljs.core.seq.call(null,inst_21688);
var state_21756__$1 = (function (){var statearr_21821 = state_21756;
(statearr_21821[(31)] = inst_21742);

return statearr_21821;
})();
if(inst_21743){
var statearr_21822_21886 = state_21756__$1;
(statearr_21822_21886[(1)] = (42));

} else {
var statearr_21823_21887 = state_21756__$1;
(statearr_21823_21887[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (16))){
var inst_21657 = (state_21756[(7)]);
var inst_21659 = cljs.core.chunked_seq_QMARK_.call(null,inst_21657);
var state_21756__$1 = state_21756;
if(inst_21659){
var statearr_21824_21888 = state_21756__$1;
(statearr_21824_21888[(1)] = (19));

} else {
var statearr_21825_21889 = state_21756__$1;
(statearr_21825_21889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (38))){
var inst_21735 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
var statearr_21826_21890 = state_21756__$1;
(statearr_21826_21890[(2)] = inst_21735);

(statearr_21826_21890[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (30))){
var state_21756__$1 = state_21756;
var statearr_21827_21891 = state_21756__$1;
(statearr_21827_21891[(2)] = null);

(statearr_21827_21891[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (10))){
var inst_21640 = (state_21756[(13)]);
var inst_21638 = (state_21756[(14)]);
var inst_21646 = cljs.core._nth.call(null,inst_21638,inst_21640);
var inst_21647 = cljs.core.nth.call(null,inst_21646,(0),null);
var inst_21648 = cljs.core.nth.call(null,inst_21646,(1),null);
var state_21756__$1 = (function (){var statearr_21828 = state_21756;
(statearr_21828[(26)] = inst_21647);

return statearr_21828;
})();
if(cljs.core.truth_(inst_21648)){
var statearr_21829_21892 = state_21756__$1;
(statearr_21829_21892[(1)] = (13));

} else {
var statearr_21830_21893 = state_21756__$1;
(statearr_21830_21893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (18))){
var inst_21681 = (state_21756[(2)]);
var state_21756__$1 = state_21756;
var statearr_21831_21894 = state_21756__$1;
(statearr_21831_21894[(2)] = inst_21681);

(statearr_21831_21894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (42))){
var state_21756__$1 = state_21756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21756__$1,(45),dchan);
} else {
if((state_val_21757 === (37))){
var inst_21715 = (state_21756[(25)]);
var inst_21724 = (state_21756[(23)]);
var inst_21628 = (state_21756[(10)]);
var inst_21724__$1 = cljs.core.first.call(null,inst_21715);
var inst_21725 = cljs.core.async.put_BANG_.call(null,inst_21724__$1,inst_21628,done);
var state_21756__$1 = (function (){var statearr_21832 = state_21756;
(statearr_21832[(23)] = inst_21724__$1);

return statearr_21832;
})();
if(cljs.core.truth_(inst_21725)){
var statearr_21833_21895 = state_21756__$1;
(statearr_21833_21895[(1)] = (39));

} else {
var statearr_21834_21896 = state_21756__$1;
(statearr_21834_21896[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21757 === (8))){
var inst_21640 = (state_21756[(13)]);
var inst_21639 = (state_21756[(15)]);
var inst_21642 = (inst_21640 < inst_21639);
var inst_21643 = inst_21642;
var state_21756__$1 = state_21756;
if(cljs.core.truth_(inst_21643)){
var statearr_21835_21897 = state_21756__$1;
(statearr_21835_21897[(1)] = (10));

} else {
var statearr_21836_21898 = state_21756__$1;
(statearr_21836_21898[(1)] = (11));

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
});})(c__20537__auto___21844,cs,m,dchan,dctr,done))
;
return ((function (switch__20425__auto__,c__20537__auto___21844,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20426__auto__ = null;
var cljs$core$async$mult_$_state_machine__20426__auto____0 = (function (){
var statearr_21840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21840[(0)] = cljs$core$async$mult_$_state_machine__20426__auto__);

(statearr_21840[(1)] = (1));

return statearr_21840;
});
var cljs$core$async$mult_$_state_machine__20426__auto____1 = (function (state_21756){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_21756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e21841){if((e21841 instanceof Object)){
var ex__20429__auto__ = e21841;
var statearr_21842_21899 = state_21756;
(statearr_21842_21899[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21900 = state_21756;
state_21756 = G__21900;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20426__auto__ = function(state_21756){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20426__auto____1.call(this,state_21756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20426__auto____0;
cljs$core$async$mult_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20426__auto____1;
return cljs$core$async$mult_$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___21844,cs,m,dchan,dctr,done))
})();
var state__20539__auto__ = (function (){var statearr_21843 = f__20538__auto__.call(null);
(statearr_21843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___21844);

return statearr_21843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___21844,cs,m,dchan,dctr,done))
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
var args21901 = [];
var len__17863__auto___21904 = arguments.length;
var i__17864__auto___21905 = (0);
while(true){
if((i__17864__auto___21905 < len__17863__auto___21904)){
args21901.push((arguments[i__17864__auto___21905]));

var G__21906 = (i__17864__auto___21905 + (1));
i__17864__auto___21905 = G__21906;
continue;
} else {
}
break;
}

var G__21903 = args21901.length;
switch (G__21903) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21901.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,state_map);
} else {
var m__17461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,mode);
} else {
var m__17461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___21918 = arguments.length;
var i__17864__auto___21919 = (0);
while(true){
if((i__17864__auto___21919 < len__17863__auto___21918)){
args__17870__auto__.push((arguments[i__17864__auto___21919]));

var G__21920 = (i__17864__auto___21919 + (1));
i__17864__auto___21919 = G__21920;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21912){
var map__21913 = p__21912;
var map__21913__$1 = ((((!((map__21913 == null)))?((((map__21913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21913):map__21913);
var opts = map__21913__$1;
var statearr_21915_21921 = state;
(statearr_21915_21921[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21913,map__21913__$1,opts){
return (function (val){
var statearr_21916_21922 = state;
(statearr_21916_21922[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21913,map__21913__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21917_21923 = state;
(statearr_21917_21923[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21908){
var G__21909 = cljs.core.first.call(null,seq21908);
var seq21908__$1 = cljs.core.next.call(null,seq21908);
var G__21910 = cljs.core.first.call(null,seq21908__$1);
var seq21908__$2 = cljs.core.next.call(null,seq21908__$1);
var G__21911 = cljs.core.first.call(null,seq21908__$2);
var seq21908__$3 = cljs.core.next.call(null,seq21908__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21909,G__21910,G__21911,seq21908__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22087 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22088){
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
this.meta22088 = meta22088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22089,meta22088__$1){
var self__ = this;
var _22089__$1 = this;
return (new cljs.core.async.t_cljs$core$async22087(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22088__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22089){
var self__ = this;
var _22089__$1 = this;
return self__.meta22088;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22087.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22088","meta22088",-115697404,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22087";

cljs.core.async.t_cljs$core$async22087.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22087");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22087 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22087(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22088){
return (new cljs.core.async.t_cljs$core$async22087(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22088));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22087(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20537__auto___22250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___22250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___22250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22187){
var state_val_22188 = (state_22187[(1)]);
if((state_val_22188 === (7))){
var inst_22105 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
var statearr_22189_22251 = state_22187__$1;
(statearr_22189_22251[(2)] = inst_22105);

(statearr_22189_22251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (20))){
var inst_22117 = (state_22187[(7)]);
var state_22187__$1 = state_22187;
var statearr_22190_22252 = state_22187__$1;
(statearr_22190_22252[(2)] = inst_22117);

(statearr_22190_22252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (27))){
var state_22187__$1 = state_22187;
var statearr_22191_22253 = state_22187__$1;
(statearr_22191_22253[(2)] = null);

(statearr_22191_22253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (1))){
var inst_22093 = (state_22187[(8)]);
var inst_22093__$1 = calc_state.call(null);
var inst_22095 = (inst_22093__$1 == null);
var inst_22096 = cljs.core.not.call(null,inst_22095);
var state_22187__$1 = (function (){var statearr_22192 = state_22187;
(statearr_22192[(8)] = inst_22093__$1);

return statearr_22192;
})();
if(inst_22096){
var statearr_22193_22254 = state_22187__$1;
(statearr_22193_22254[(1)] = (2));

} else {
var statearr_22194_22255 = state_22187__$1;
(statearr_22194_22255[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (24))){
var inst_22147 = (state_22187[(9)]);
var inst_22140 = (state_22187[(10)]);
var inst_22161 = (state_22187[(11)]);
var inst_22161__$1 = inst_22140.call(null,inst_22147);
var state_22187__$1 = (function (){var statearr_22195 = state_22187;
(statearr_22195[(11)] = inst_22161__$1);

return statearr_22195;
})();
if(cljs.core.truth_(inst_22161__$1)){
var statearr_22196_22256 = state_22187__$1;
(statearr_22196_22256[(1)] = (29));

} else {
var statearr_22197_22257 = state_22187__$1;
(statearr_22197_22257[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (4))){
var inst_22108 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
if(cljs.core.truth_(inst_22108)){
var statearr_22198_22258 = state_22187__$1;
(statearr_22198_22258[(1)] = (8));

} else {
var statearr_22199_22259 = state_22187__$1;
(statearr_22199_22259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (15))){
var inst_22134 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
if(cljs.core.truth_(inst_22134)){
var statearr_22200_22260 = state_22187__$1;
(statearr_22200_22260[(1)] = (19));

} else {
var statearr_22201_22261 = state_22187__$1;
(statearr_22201_22261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (21))){
var inst_22139 = (state_22187[(12)]);
var inst_22139__$1 = (state_22187[(2)]);
var inst_22140 = cljs.core.get.call(null,inst_22139__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22141 = cljs.core.get.call(null,inst_22139__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22142 = cljs.core.get.call(null,inst_22139__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22187__$1 = (function (){var statearr_22202 = state_22187;
(statearr_22202[(10)] = inst_22140);

(statearr_22202[(12)] = inst_22139__$1);

(statearr_22202[(13)] = inst_22141);

return statearr_22202;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22187__$1,(22),inst_22142);
} else {
if((state_val_22188 === (31))){
var inst_22169 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
if(cljs.core.truth_(inst_22169)){
var statearr_22203_22262 = state_22187__$1;
(statearr_22203_22262[(1)] = (32));

} else {
var statearr_22204_22263 = state_22187__$1;
(statearr_22204_22263[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (32))){
var inst_22146 = (state_22187[(14)]);
var state_22187__$1 = state_22187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22187__$1,(35),out,inst_22146);
} else {
if((state_val_22188 === (33))){
var inst_22139 = (state_22187[(12)]);
var inst_22117 = inst_22139;
var state_22187__$1 = (function (){var statearr_22205 = state_22187;
(statearr_22205[(7)] = inst_22117);

return statearr_22205;
})();
var statearr_22206_22264 = state_22187__$1;
(statearr_22206_22264[(2)] = null);

(statearr_22206_22264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (13))){
var inst_22117 = (state_22187[(7)]);
var inst_22124 = inst_22117.cljs$lang$protocol_mask$partition0$;
var inst_22125 = (inst_22124 & (64));
var inst_22126 = inst_22117.cljs$core$ISeq$;
var inst_22127 = (inst_22125) || (inst_22126);
var state_22187__$1 = state_22187;
if(cljs.core.truth_(inst_22127)){
var statearr_22207_22265 = state_22187__$1;
(statearr_22207_22265[(1)] = (16));

} else {
var statearr_22208_22266 = state_22187__$1;
(statearr_22208_22266[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (22))){
var inst_22147 = (state_22187[(9)]);
var inst_22146 = (state_22187[(14)]);
var inst_22145 = (state_22187[(2)]);
var inst_22146__$1 = cljs.core.nth.call(null,inst_22145,(0),null);
var inst_22147__$1 = cljs.core.nth.call(null,inst_22145,(1),null);
var inst_22148 = (inst_22146__$1 == null);
var inst_22149 = cljs.core._EQ_.call(null,inst_22147__$1,change);
var inst_22150 = (inst_22148) || (inst_22149);
var state_22187__$1 = (function (){var statearr_22209 = state_22187;
(statearr_22209[(9)] = inst_22147__$1);

(statearr_22209[(14)] = inst_22146__$1);

return statearr_22209;
})();
if(cljs.core.truth_(inst_22150)){
var statearr_22210_22267 = state_22187__$1;
(statearr_22210_22267[(1)] = (23));

} else {
var statearr_22211_22268 = state_22187__$1;
(statearr_22211_22268[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (36))){
var inst_22139 = (state_22187[(12)]);
var inst_22117 = inst_22139;
var state_22187__$1 = (function (){var statearr_22212 = state_22187;
(statearr_22212[(7)] = inst_22117);

return statearr_22212;
})();
var statearr_22213_22269 = state_22187__$1;
(statearr_22213_22269[(2)] = null);

(statearr_22213_22269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (29))){
var inst_22161 = (state_22187[(11)]);
var state_22187__$1 = state_22187;
var statearr_22214_22270 = state_22187__$1;
(statearr_22214_22270[(2)] = inst_22161);

(statearr_22214_22270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (6))){
var state_22187__$1 = state_22187;
var statearr_22215_22271 = state_22187__$1;
(statearr_22215_22271[(2)] = false);

(statearr_22215_22271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (28))){
var inst_22157 = (state_22187[(2)]);
var inst_22158 = calc_state.call(null);
var inst_22117 = inst_22158;
var state_22187__$1 = (function (){var statearr_22216 = state_22187;
(statearr_22216[(15)] = inst_22157);

(statearr_22216[(7)] = inst_22117);

return statearr_22216;
})();
var statearr_22217_22272 = state_22187__$1;
(statearr_22217_22272[(2)] = null);

(statearr_22217_22272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (25))){
var inst_22183 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
var statearr_22218_22273 = state_22187__$1;
(statearr_22218_22273[(2)] = inst_22183);

(statearr_22218_22273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (34))){
var inst_22181 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
var statearr_22219_22274 = state_22187__$1;
(statearr_22219_22274[(2)] = inst_22181);

(statearr_22219_22274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (17))){
var state_22187__$1 = state_22187;
var statearr_22220_22275 = state_22187__$1;
(statearr_22220_22275[(2)] = false);

(statearr_22220_22275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (3))){
var state_22187__$1 = state_22187;
var statearr_22221_22276 = state_22187__$1;
(statearr_22221_22276[(2)] = false);

(statearr_22221_22276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (12))){
var inst_22185 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22187__$1,inst_22185);
} else {
if((state_val_22188 === (2))){
var inst_22093 = (state_22187[(8)]);
var inst_22098 = inst_22093.cljs$lang$protocol_mask$partition0$;
var inst_22099 = (inst_22098 & (64));
var inst_22100 = inst_22093.cljs$core$ISeq$;
var inst_22101 = (inst_22099) || (inst_22100);
var state_22187__$1 = state_22187;
if(cljs.core.truth_(inst_22101)){
var statearr_22222_22277 = state_22187__$1;
(statearr_22222_22277[(1)] = (5));

} else {
var statearr_22223_22278 = state_22187__$1;
(statearr_22223_22278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (23))){
var inst_22146 = (state_22187[(14)]);
var inst_22152 = (inst_22146 == null);
var state_22187__$1 = state_22187;
if(cljs.core.truth_(inst_22152)){
var statearr_22224_22279 = state_22187__$1;
(statearr_22224_22279[(1)] = (26));

} else {
var statearr_22225_22280 = state_22187__$1;
(statearr_22225_22280[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (35))){
var inst_22172 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
if(cljs.core.truth_(inst_22172)){
var statearr_22226_22281 = state_22187__$1;
(statearr_22226_22281[(1)] = (36));

} else {
var statearr_22227_22282 = state_22187__$1;
(statearr_22227_22282[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (19))){
var inst_22117 = (state_22187[(7)]);
var inst_22136 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22117);
var state_22187__$1 = state_22187;
var statearr_22228_22283 = state_22187__$1;
(statearr_22228_22283[(2)] = inst_22136);

(statearr_22228_22283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (11))){
var inst_22117 = (state_22187[(7)]);
var inst_22121 = (inst_22117 == null);
var inst_22122 = cljs.core.not.call(null,inst_22121);
var state_22187__$1 = state_22187;
if(inst_22122){
var statearr_22229_22284 = state_22187__$1;
(statearr_22229_22284[(1)] = (13));

} else {
var statearr_22230_22285 = state_22187__$1;
(statearr_22230_22285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (9))){
var inst_22093 = (state_22187[(8)]);
var state_22187__$1 = state_22187;
var statearr_22231_22286 = state_22187__$1;
(statearr_22231_22286[(2)] = inst_22093);

(statearr_22231_22286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (5))){
var state_22187__$1 = state_22187;
var statearr_22232_22287 = state_22187__$1;
(statearr_22232_22287[(2)] = true);

(statearr_22232_22287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (14))){
var state_22187__$1 = state_22187;
var statearr_22233_22288 = state_22187__$1;
(statearr_22233_22288[(2)] = false);

(statearr_22233_22288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (26))){
var inst_22147 = (state_22187[(9)]);
var inst_22154 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22147);
var state_22187__$1 = state_22187;
var statearr_22234_22289 = state_22187__$1;
(statearr_22234_22289[(2)] = inst_22154);

(statearr_22234_22289[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (16))){
var state_22187__$1 = state_22187;
var statearr_22235_22290 = state_22187__$1;
(statearr_22235_22290[(2)] = true);

(statearr_22235_22290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (38))){
var inst_22177 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
var statearr_22236_22291 = state_22187__$1;
(statearr_22236_22291[(2)] = inst_22177);

(statearr_22236_22291[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (30))){
var inst_22147 = (state_22187[(9)]);
var inst_22140 = (state_22187[(10)]);
var inst_22141 = (state_22187[(13)]);
var inst_22164 = cljs.core.empty_QMARK_.call(null,inst_22140);
var inst_22165 = inst_22141.call(null,inst_22147);
var inst_22166 = cljs.core.not.call(null,inst_22165);
var inst_22167 = (inst_22164) && (inst_22166);
var state_22187__$1 = state_22187;
var statearr_22237_22292 = state_22187__$1;
(statearr_22237_22292[(2)] = inst_22167);

(statearr_22237_22292[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (10))){
var inst_22093 = (state_22187[(8)]);
var inst_22113 = (state_22187[(2)]);
var inst_22114 = cljs.core.get.call(null,inst_22113,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22115 = cljs.core.get.call(null,inst_22113,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22116 = cljs.core.get.call(null,inst_22113,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22117 = inst_22093;
var state_22187__$1 = (function (){var statearr_22238 = state_22187;
(statearr_22238[(16)] = inst_22116);

(statearr_22238[(17)] = inst_22115);

(statearr_22238[(7)] = inst_22117);

(statearr_22238[(18)] = inst_22114);

return statearr_22238;
})();
var statearr_22239_22293 = state_22187__$1;
(statearr_22239_22293[(2)] = null);

(statearr_22239_22293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (18))){
var inst_22131 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
var statearr_22240_22294 = state_22187__$1;
(statearr_22240_22294[(2)] = inst_22131);

(statearr_22240_22294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (37))){
var state_22187__$1 = state_22187;
var statearr_22241_22295 = state_22187__$1;
(statearr_22241_22295[(2)] = null);

(statearr_22241_22295[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (8))){
var inst_22093 = (state_22187[(8)]);
var inst_22110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22093);
var state_22187__$1 = state_22187;
var statearr_22242_22296 = state_22187__$1;
(statearr_22242_22296[(2)] = inst_22110);

(statearr_22242_22296[(1)] = (10));


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
});})(c__20537__auto___22250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20425__auto__,c__20537__auto___22250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20426__auto__ = null;
var cljs$core$async$mix_$_state_machine__20426__auto____0 = (function (){
var statearr_22246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22246[(0)] = cljs$core$async$mix_$_state_machine__20426__auto__);

(statearr_22246[(1)] = (1));

return statearr_22246;
});
var cljs$core$async$mix_$_state_machine__20426__auto____1 = (function (state_22187){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_22187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e22247){if((e22247 instanceof Object)){
var ex__20429__auto__ = e22247;
var statearr_22248_22297 = state_22187;
(statearr_22248_22297[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22298 = state_22187;
state_22187 = G__22298;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20426__auto__ = function(state_22187){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20426__auto____1.call(this,state_22187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20426__auto____0;
cljs$core$async$mix_$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20426__auto____1;
return cljs$core$async$mix_$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___22250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20539__auto__ = (function (){var statearr_22249 = f__20538__auto__.call(null);
(statearr_22249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___22250);

return statearr_22249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___22250,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22299 = [];
var len__17863__auto___22302 = arguments.length;
var i__17864__auto___22303 = (0);
while(true){
if((i__17864__auto___22303 < len__17863__auto___22302)){
args22299.push((arguments[i__17864__auto___22303]));

var G__22304 = (i__17864__auto___22303 + (1));
i__17864__auto___22303 = G__22304;
continue;
} else {
}
break;
}

var G__22301 = args22299.length;
switch (G__22301) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22299.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args22307 = [];
var len__17863__auto___22432 = arguments.length;
var i__17864__auto___22433 = (0);
while(true){
if((i__17864__auto___22433 < len__17863__auto___22432)){
args22307.push((arguments[i__17864__auto___22433]));

var G__22434 = (i__17864__auto___22433 + (1));
i__17864__auto___22433 = G__22434;
continue;
} else {
}
break;
}

var G__22309 = args22307.length;
switch (G__22309) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22307.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16805__auto__,mults){
return (function (p1__22306_SHARP_){
if(cljs.core.truth_(p1__22306_SHARP_.call(null,topic))){
return p1__22306_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22306_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22310 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22311){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22311 = meta22311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22312,meta22311__$1){
var self__ = this;
var _22312__$1 = this;
return (new cljs.core.async.t_cljs$core$async22310(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22311__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22312){
var self__ = this;
var _22312__$1 = this;
return self__.meta22311;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22310.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22310.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22310.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22310.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22310.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22310.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22310.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22311","meta22311",-1105927605,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22310";

cljs.core.async.t_cljs$core$async22310.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22310");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22310 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22310(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22311){
return (new cljs.core.async.t_cljs$core$async22310(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22311));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22310(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20537__auto___22436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___22436,mults,ensure_mult,p){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___22436,mults,ensure_mult,p){
return (function (state_22384){
var state_val_22385 = (state_22384[(1)]);
if((state_val_22385 === (7))){
var inst_22380 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22386_22437 = state_22384__$1;
(statearr_22386_22437[(2)] = inst_22380);

(statearr_22386_22437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (20))){
var state_22384__$1 = state_22384;
var statearr_22387_22438 = state_22384__$1;
(statearr_22387_22438[(2)] = null);

(statearr_22387_22438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (1))){
var state_22384__$1 = state_22384;
var statearr_22388_22439 = state_22384__$1;
(statearr_22388_22439[(2)] = null);

(statearr_22388_22439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (24))){
var inst_22363 = (state_22384[(7)]);
var inst_22372 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22363);
var state_22384__$1 = state_22384;
var statearr_22389_22440 = state_22384__$1;
(statearr_22389_22440[(2)] = inst_22372);

(statearr_22389_22440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (4))){
var inst_22315 = (state_22384[(8)]);
var inst_22315__$1 = (state_22384[(2)]);
var inst_22316 = (inst_22315__$1 == null);
var state_22384__$1 = (function (){var statearr_22390 = state_22384;
(statearr_22390[(8)] = inst_22315__$1);

return statearr_22390;
})();
if(cljs.core.truth_(inst_22316)){
var statearr_22391_22441 = state_22384__$1;
(statearr_22391_22441[(1)] = (5));

} else {
var statearr_22392_22442 = state_22384__$1;
(statearr_22392_22442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (15))){
var inst_22357 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22393_22443 = state_22384__$1;
(statearr_22393_22443[(2)] = inst_22357);

(statearr_22393_22443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (21))){
var inst_22377 = (state_22384[(2)]);
var state_22384__$1 = (function (){var statearr_22394 = state_22384;
(statearr_22394[(9)] = inst_22377);

return statearr_22394;
})();
var statearr_22395_22444 = state_22384__$1;
(statearr_22395_22444[(2)] = null);

(statearr_22395_22444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (13))){
var inst_22339 = (state_22384[(10)]);
var inst_22341 = cljs.core.chunked_seq_QMARK_.call(null,inst_22339);
var state_22384__$1 = state_22384;
if(inst_22341){
var statearr_22396_22445 = state_22384__$1;
(statearr_22396_22445[(1)] = (16));

} else {
var statearr_22397_22446 = state_22384__$1;
(statearr_22397_22446[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (22))){
var inst_22369 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
if(cljs.core.truth_(inst_22369)){
var statearr_22398_22447 = state_22384__$1;
(statearr_22398_22447[(1)] = (23));

} else {
var statearr_22399_22448 = state_22384__$1;
(statearr_22399_22448[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (6))){
var inst_22363 = (state_22384[(7)]);
var inst_22365 = (state_22384[(11)]);
var inst_22315 = (state_22384[(8)]);
var inst_22363__$1 = topic_fn.call(null,inst_22315);
var inst_22364 = cljs.core.deref.call(null,mults);
var inst_22365__$1 = cljs.core.get.call(null,inst_22364,inst_22363__$1);
var state_22384__$1 = (function (){var statearr_22400 = state_22384;
(statearr_22400[(7)] = inst_22363__$1);

(statearr_22400[(11)] = inst_22365__$1);

return statearr_22400;
})();
if(cljs.core.truth_(inst_22365__$1)){
var statearr_22401_22449 = state_22384__$1;
(statearr_22401_22449[(1)] = (19));

} else {
var statearr_22402_22450 = state_22384__$1;
(statearr_22402_22450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (25))){
var inst_22374 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22403_22451 = state_22384__$1;
(statearr_22403_22451[(2)] = inst_22374);

(statearr_22403_22451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (17))){
var inst_22339 = (state_22384[(10)]);
var inst_22348 = cljs.core.first.call(null,inst_22339);
var inst_22349 = cljs.core.async.muxch_STAR_.call(null,inst_22348);
var inst_22350 = cljs.core.async.close_BANG_.call(null,inst_22349);
var inst_22351 = cljs.core.next.call(null,inst_22339);
var inst_22325 = inst_22351;
var inst_22326 = null;
var inst_22327 = (0);
var inst_22328 = (0);
var state_22384__$1 = (function (){var statearr_22404 = state_22384;
(statearr_22404[(12)] = inst_22327);

(statearr_22404[(13)] = inst_22326);

(statearr_22404[(14)] = inst_22350);

(statearr_22404[(15)] = inst_22325);

(statearr_22404[(16)] = inst_22328);

return statearr_22404;
})();
var statearr_22405_22452 = state_22384__$1;
(statearr_22405_22452[(2)] = null);

(statearr_22405_22452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (3))){
var inst_22382 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22384__$1,inst_22382);
} else {
if((state_val_22385 === (12))){
var inst_22359 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22406_22453 = state_22384__$1;
(statearr_22406_22453[(2)] = inst_22359);

(statearr_22406_22453[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (2))){
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22384__$1,(4),ch);
} else {
if((state_val_22385 === (23))){
var state_22384__$1 = state_22384;
var statearr_22407_22454 = state_22384__$1;
(statearr_22407_22454[(2)] = null);

(statearr_22407_22454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (19))){
var inst_22365 = (state_22384[(11)]);
var inst_22315 = (state_22384[(8)]);
var inst_22367 = cljs.core.async.muxch_STAR_.call(null,inst_22365);
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22384__$1,(22),inst_22367,inst_22315);
} else {
if((state_val_22385 === (11))){
var inst_22339 = (state_22384[(10)]);
var inst_22325 = (state_22384[(15)]);
var inst_22339__$1 = cljs.core.seq.call(null,inst_22325);
var state_22384__$1 = (function (){var statearr_22408 = state_22384;
(statearr_22408[(10)] = inst_22339__$1);

return statearr_22408;
})();
if(inst_22339__$1){
var statearr_22409_22455 = state_22384__$1;
(statearr_22409_22455[(1)] = (13));

} else {
var statearr_22410_22456 = state_22384__$1;
(statearr_22410_22456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (9))){
var inst_22361 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22411_22457 = state_22384__$1;
(statearr_22411_22457[(2)] = inst_22361);

(statearr_22411_22457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (5))){
var inst_22322 = cljs.core.deref.call(null,mults);
var inst_22323 = cljs.core.vals.call(null,inst_22322);
var inst_22324 = cljs.core.seq.call(null,inst_22323);
var inst_22325 = inst_22324;
var inst_22326 = null;
var inst_22327 = (0);
var inst_22328 = (0);
var state_22384__$1 = (function (){var statearr_22412 = state_22384;
(statearr_22412[(12)] = inst_22327);

(statearr_22412[(13)] = inst_22326);

(statearr_22412[(15)] = inst_22325);

(statearr_22412[(16)] = inst_22328);

return statearr_22412;
})();
var statearr_22413_22458 = state_22384__$1;
(statearr_22413_22458[(2)] = null);

(statearr_22413_22458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (14))){
var state_22384__$1 = state_22384;
var statearr_22417_22459 = state_22384__$1;
(statearr_22417_22459[(2)] = null);

(statearr_22417_22459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (16))){
var inst_22339 = (state_22384[(10)]);
var inst_22343 = cljs.core.chunk_first.call(null,inst_22339);
var inst_22344 = cljs.core.chunk_rest.call(null,inst_22339);
var inst_22345 = cljs.core.count.call(null,inst_22343);
var inst_22325 = inst_22344;
var inst_22326 = inst_22343;
var inst_22327 = inst_22345;
var inst_22328 = (0);
var state_22384__$1 = (function (){var statearr_22418 = state_22384;
(statearr_22418[(12)] = inst_22327);

(statearr_22418[(13)] = inst_22326);

(statearr_22418[(15)] = inst_22325);

(statearr_22418[(16)] = inst_22328);

return statearr_22418;
})();
var statearr_22419_22460 = state_22384__$1;
(statearr_22419_22460[(2)] = null);

(statearr_22419_22460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (10))){
var inst_22327 = (state_22384[(12)]);
var inst_22326 = (state_22384[(13)]);
var inst_22325 = (state_22384[(15)]);
var inst_22328 = (state_22384[(16)]);
var inst_22333 = cljs.core._nth.call(null,inst_22326,inst_22328);
var inst_22334 = cljs.core.async.muxch_STAR_.call(null,inst_22333);
var inst_22335 = cljs.core.async.close_BANG_.call(null,inst_22334);
var inst_22336 = (inst_22328 + (1));
var tmp22414 = inst_22327;
var tmp22415 = inst_22326;
var tmp22416 = inst_22325;
var inst_22325__$1 = tmp22416;
var inst_22326__$1 = tmp22415;
var inst_22327__$1 = tmp22414;
var inst_22328__$1 = inst_22336;
var state_22384__$1 = (function (){var statearr_22420 = state_22384;
(statearr_22420[(17)] = inst_22335);

(statearr_22420[(12)] = inst_22327__$1);

(statearr_22420[(13)] = inst_22326__$1);

(statearr_22420[(15)] = inst_22325__$1);

(statearr_22420[(16)] = inst_22328__$1);

return statearr_22420;
})();
var statearr_22421_22461 = state_22384__$1;
(statearr_22421_22461[(2)] = null);

(statearr_22421_22461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (18))){
var inst_22354 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22422_22462 = state_22384__$1;
(statearr_22422_22462[(2)] = inst_22354);

(statearr_22422_22462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (8))){
var inst_22327 = (state_22384[(12)]);
var inst_22328 = (state_22384[(16)]);
var inst_22330 = (inst_22328 < inst_22327);
var inst_22331 = inst_22330;
var state_22384__$1 = state_22384;
if(cljs.core.truth_(inst_22331)){
var statearr_22423_22463 = state_22384__$1;
(statearr_22423_22463[(1)] = (10));

} else {
var statearr_22424_22464 = state_22384__$1;
(statearr_22424_22464[(1)] = (11));

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
});})(c__20537__auto___22436,mults,ensure_mult,p))
;
return ((function (switch__20425__auto__,c__20537__auto___22436,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_22428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22428[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_22428[(1)] = (1));

return statearr_22428;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_22384){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_22384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e22429){if((e22429 instanceof Object)){
var ex__20429__auto__ = e22429;
var statearr_22430_22465 = state_22384;
(statearr_22430_22465[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22466 = state_22384;
state_22384 = G__22466;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_22384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_22384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___22436,mults,ensure_mult,p))
})();
var state__20539__auto__ = (function (){var statearr_22431 = f__20538__auto__.call(null);
(statearr_22431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___22436);

return statearr_22431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___22436,mults,ensure_mult,p))
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
var args22467 = [];
var len__17863__auto___22470 = arguments.length;
var i__17864__auto___22471 = (0);
while(true){
if((i__17864__auto___22471 < len__17863__auto___22470)){
args22467.push((arguments[i__17864__auto___22471]));

var G__22472 = (i__17864__auto___22471 + (1));
i__17864__auto___22471 = G__22472;
continue;
} else {
}
break;
}

var G__22469 = args22467.length;
switch (G__22469) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22467.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22474 = [];
var len__17863__auto___22477 = arguments.length;
var i__17864__auto___22478 = (0);
while(true){
if((i__17864__auto___22478 < len__17863__auto___22477)){
args22474.push((arguments[i__17864__auto___22478]));

var G__22479 = (i__17864__auto___22478 + (1));
i__17864__auto___22478 = G__22479;
continue;
} else {
}
break;
}

var G__22476 = args22474.length;
switch (G__22476) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22474.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args22481 = [];
var len__17863__auto___22552 = arguments.length;
var i__17864__auto___22553 = (0);
while(true){
if((i__17864__auto___22553 < len__17863__auto___22552)){
args22481.push((arguments[i__17864__auto___22553]));

var G__22554 = (i__17864__auto___22553 + (1));
i__17864__auto___22553 = G__22554;
continue;
} else {
}
break;
}

var G__22483 = args22481.length;
switch (G__22483) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22481.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20537__auto___22556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___22556,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___22556,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22522){
var state_val_22523 = (state_22522[(1)]);
if((state_val_22523 === (7))){
var state_22522__$1 = state_22522;
var statearr_22524_22557 = state_22522__$1;
(statearr_22524_22557[(2)] = null);

(statearr_22524_22557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (1))){
var state_22522__$1 = state_22522;
var statearr_22525_22558 = state_22522__$1;
(statearr_22525_22558[(2)] = null);

(statearr_22525_22558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (4))){
var inst_22486 = (state_22522[(7)]);
var inst_22488 = (inst_22486 < cnt);
var state_22522__$1 = state_22522;
if(cljs.core.truth_(inst_22488)){
var statearr_22526_22559 = state_22522__$1;
(statearr_22526_22559[(1)] = (6));

} else {
var statearr_22527_22560 = state_22522__$1;
(statearr_22527_22560[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (15))){
var inst_22518 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22528_22561 = state_22522__$1;
(statearr_22528_22561[(2)] = inst_22518);

(statearr_22528_22561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (13))){
var inst_22511 = cljs.core.async.close_BANG_.call(null,out);
var state_22522__$1 = state_22522;
var statearr_22529_22562 = state_22522__$1;
(statearr_22529_22562[(2)] = inst_22511);

(statearr_22529_22562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (6))){
var state_22522__$1 = state_22522;
var statearr_22530_22563 = state_22522__$1;
(statearr_22530_22563[(2)] = null);

(statearr_22530_22563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (3))){
var inst_22520 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22522__$1,inst_22520);
} else {
if((state_val_22523 === (12))){
var inst_22508 = (state_22522[(8)]);
var inst_22508__$1 = (state_22522[(2)]);
var inst_22509 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22508__$1);
var state_22522__$1 = (function (){var statearr_22531 = state_22522;
(statearr_22531[(8)] = inst_22508__$1);

return statearr_22531;
})();
if(cljs.core.truth_(inst_22509)){
var statearr_22532_22564 = state_22522__$1;
(statearr_22532_22564[(1)] = (13));

} else {
var statearr_22533_22565 = state_22522__$1;
(statearr_22533_22565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (2))){
var inst_22485 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22486 = (0);
var state_22522__$1 = (function (){var statearr_22534 = state_22522;
(statearr_22534[(9)] = inst_22485);

(statearr_22534[(7)] = inst_22486);

return statearr_22534;
})();
var statearr_22535_22566 = state_22522__$1;
(statearr_22535_22566[(2)] = null);

(statearr_22535_22566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (11))){
var inst_22486 = (state_22522[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22522,(10),Object,null,(9));
var inst_22495 = chs__$1.call(null,inst_22486);
var inst_22496 = done.call(null,inst_22486);
var inst_22497 = cljs.core.async.take_BANG_.call(null,inst_22495,inst_22496);
var state_22522__$1 = state_22522;
var statearr_22536_22567 = state_22522__$1;
(statearr_22536_22567[(2)] = inst_22497);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22522__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (9))){
var inst_22486 = (state_22522[(7)]);
var inst_22499 = (state_22522[(2)]);
var inst_22500 = (inst_22486 + (1));
var inst_22486__$1 = inst_22500;
var state_22522__$1 = (function (){var statearr_22537 = state_22522;
(statearr_22537[(10)] = inst_22499);

(statearr_22537[(7)] = inst_22486__$1);

return statearr_22537;
})();
var statearr_22538_22568 = state_22522__$1;
(statearr_22538_22568[(2)] = null);

(statearr_22538_22568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (5))){
var inst_22506 = (state_22522[(2)]);
var state_22522__$1 = (function (){var statearr_22539 = state_22522;
(statearr_22539[(11)] = inst_22506);

return statearr_22539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22522__$1,(12),dchan);
} else {
if((state_val_22523 === (14))){
var inst_22508 = (state_22522[(8)]);
var inst_22513 = cljs.core.apply.call(null,f,inst_22508);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22522__$1,(16),out,inst_22513);
} else {
if((state_val_22523 === (16))){
var inst_22515 = (state_22522[(2)]);
var state_22522__$1 = (function (){var statearr_22540 = state_22522;
(statearr_22540[(12)] = inst_22515);

return statearr_22540;
})();
var statearr_22541_22569 = state_22522__$1;
(statearr_22541_22569[(2)] = null);

(statearr_22541_22569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (10))){
var inst_22490 = (state_22522[(2)]);
var inst_22491 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22522__$1 = (function (){var statearr_22542 = state_22522;
(statearr_22542[(13)] = inst_22490);

return statearr_22542;
})();
var statearr_22543_22570 = state_22522__$1;
(statearr_22543_22570[(2)] = inst_22491);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22522__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (8))){
var inst_22504 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22544_22571 = state_22522__$1;
(statearr_22544_22571[(2)] = inst_22504);

(statearr_22544_22571[(1)] = (5));


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
});})(c__20537__auto___22556,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20425__auto__,c__20537__auto___22556,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_22548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22548[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_22548[(1)] = (1));

return statearr_22548;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_22522){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_22522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e22549){if((e22549 instanceof Object)){
var ex__20429__auto__ = e22549;
var statearr_22550_22572 = state_22522;
(statearr_22550_22572[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22573 = state_22522;
state_22522 = G__22573;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_22522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_22522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___22556,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20539__auto__ = (function (){var statearr_22551 = f__20538__auto__.call(null);
(statearr_22551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___22556);

return statearr_22551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___22556,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22575 = [];
var len__17863__auto___22631 = arguments.length;
var i__17864__auto___22632 = (0);
while(true){
if((i__17864__auto___22632 < len__17863__auto___22631)){
args22575.push((arguments[i__17864__auto___22632]));

var G__22633 = (i__17864__auto___22632 + (1));
i__17864__auto___22632 = G__22633;
continue;
} else {
}
break;
}

var G__22577 = args22575.length;
switch (G__22577) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22575.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20537__auto___22635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___22635,out){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___22635,out){
return (function (state_22607){
var state_val_22608 = (state_22607[(1)]);
if((state_val_22608 === (7))){
var inst_22586 = (state_22607[(7)]);
var inst_22587 = (state_22607[(8)]);
var inst_22586__$1 = (state_22607[(2)]);
var inst_22587__$1 = cljs.core.nth.call(null,inst_22586__$1,(0),null);
var inst_22588 = cljs.core.nth.call(null,inst_22586__$1,(1),null);
var inst_22589 = (inst_22587__$1 == null);
var state_22607__$1 = (function (){var statearr_22609 = state_22607;
(statearr_22609[(7)] = inst_22586__$1);

(statearr_22609[(9)] = inst_22588);

(statearr_22609[(8)] = inst_22587__$1);

return statearr_22609;
})();
if(cljs.core.truth_(inst_22589)){
var statearr_22610_22636 = state_22607__$1;
(statearr_22610_22636[(1)] = (8));

} else {
var statearr_22611_22637 = state_22607__$1;
(statearr_22611_22637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (1))){
var inst_22578 = cljs.core.vec.call(null,chs);
var inst_22579 = inst_22578;
var state_22607__$1 = (function (){var statearr_22612 = state_22607;
(statearr_22612[(10)] = inst_22579);

return statearr_22612;
})();
var statearr_22613_22638 = state_22607__$1;
(statearr_22613_22638[(2)] = null);

(statearr_22613_22638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (4))){
var inst_22579 = (state_22607[(10)]);
var state_22607__$1 = state_22607;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22607__$1,(7),inst_22579);
} else {
if((state_val_22608 === (6))){
var inst_22603 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22614_22639 = state_22607__$1;
(statearr_22614_22639[(2)] = inst_22603);

(statearr_22614_22639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (3))){
var inst_22605 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22607__$1,inst_22605);
} else {
if((state_val_22608 === (2))){
var inst_22579 = (state_22607[(10)]);
var inst_22581 = cljs.core.count.call(null,inst_22579);
var inst_22582 = (inst_22581 > (0));
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22582)){
var statearr_22616_22640 = state_22607__$1;
(statearr_22616_22640[(1)] = (4));

} else {
var statearr_22617_22641 = state_22607__$1;
(statearr_22617_22641[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (11))){
var inst_22579 = (state_22607[(10)]);
var inst_22596 = (state_22607[(2)]);
var tmp22615 = inst_22579;
var inst_22579__$1 = tmp22615;
var state_22607__$1 = (function (){var statearr_22618 = state_22607;
(statearr_22618[(10)] = inst_22579__$1);

(statearr_22618[(11)] = inst_22596);

return statearr_22618;
})();
var statearr_22619_22642 = state_22607__$1;
(statearr_22619_22642[(2)] = null);

(statearr_22619_22642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (9))){
var inst_22587 = (state_22607[(8)]);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22607__$1,(11),out,inst_22587);
} else {
if((state_val_22608 === (5))){
var inst_22601 = cljs.core.async.close_BANG_.call(null,out);
var state_22607__$1 = state_22607;
var statearr_22620_22643 = state_22607__$1;
(statearr_22620_22643[(2)] = inst_22601);

(statearr_22620_22643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (10))){
var inst_22599 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22621_22644 = state_22607__$1;
(statearr_22621_22644[(2)] = inst_22599);

(statearr_22621_22644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (8))){
var inst_22579 = (state_22607[(10)]);
var inst_22586 = (state_22607[(7)]);
var inst_22588 = (state_22607[(9)]);
var inst_22587 = (state_22607[(8)]);
var inst_22591 = (function (){var cs = inst_22579;
var vec__22584 = inst_22586;
var v = inst_22587;
var c = inst_22588;
return ((function (cs,vec__22584,v,c,inst_22579,inst_22586,inst_22588,inst_22587,state_val_22608,c__20537__auto___22635,out){
return (function (p1__22574_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22574_SHARP_);
});
;})(cs,vec__22584,v,c,inst_22579,inst_22586,inst_22588,inst_22587,state_val_22608,c__20537__auto___22635,out))
})();
var inst_22592 = cljs.core.filterv.call(null,inst_22591,inst_22579);
var inst_22579__$1 = inst_22592;
var state_22607__$1 = (function (){var statearr_22622 = state_22607;
(statearr_22622[(10)] = inst_22579__$1);

return statearr_22622;
})();
var statearr_22623_22645 = state_22607__$1;
(statearr_22623_22645[(2)] = null);

(statearr_22623_22645[(1)] = (2));


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
});})(c__20537__auto___22635,out))
;
return ((function (switch__20425__auto__,c__20537__auto___22635,out){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_22627 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22627[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_22627[(1)] = (1));

return statearr_22627;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_22607){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_22607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e22628){if((e22628 instanceof Object)){
var ex__20429__auto__ = e22628;
var statearr_22629_22646 = state_22607;
(statearr_22629_22646[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22647 = state_22607;
state_22607 = G__22647;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_22607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_22607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___22635,out))
})();
var state__20539__auto__ = (function (){var statearr_22630 = f__20538__auto__.call(null);
(statearr_22630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___22635);

return statearr_22630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___22635,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22648 = [];
var len__17863__auto___22697 = arguments.length;
var i__17864__auto___22698 = (0);
while(true){
if((i__17864__auto___22698 < len__17863__auto___22697)){
args22648.push((arguments[i__17864__auto___22698]));

var G__22699 = (i__17864__auto___22698 + (1));
i__17864__auto___22698 = G__22699;
continue;
} else {
}
break;
}

var G__22650 = args22648.length;
switch (G__22650) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22648.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20537__auto___22701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___22701,out){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___22701,out){
return (function (state_22674){
var state_val_22675 = (state_22674[(1)]);
if((state_val_22675 === (7))){
var inst_22656 = (state_22674[(7)]);
var inst_22656__$1 = (state_22674[(2)]);
var inst_22657 = (inst_22656__$1 == null);
var inst_22658 = cljs.core.not.call(null,inst_22657);
var state_22674__$1 = (function (){var statearr_22676 = state_22674;
(statearr_22676[(7)] = inst_22656__$1);

return statearr_22676;
})();
if(inst_22658){
var statearr_22677_22702 = state_22674__$1;
(statearr_22677_22702[(1)] = (8));

} else {
var statearr_22678_22703 = state_22674__$1;
(statearr_22678_22703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (1))){
var inst_22651 = (0);
var state_22674__$1 = (function (){var statearr_22679 = state_22674;
(statearr_22679[(8)] = inst_22651);

return statearr_22679;
})();
var statearr_22680_22704 = state_22674__$1;
(statearr_22680_22704[(2)] = null);

(statearr_22680_22704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (4))){
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22674__$1,(7),ch);
} else {
if((state_val_22675 === (6))){
var inst_22669 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22681_22705 = state_22674__$1;
(statearr_22681_22705[(2)] = inst_22669);

(statearr_22681_22705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (3))){
var inst_22671 = (state_22674[(2)]);
var inst_22672 = cljs.core.async.close_BANG_.call(null,out);
var state_22674__$1 = (function (){var statearr_22682 = state_22674;
(statearr_22682[(9)] = inst_22671);

return statearr_22682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22674__$1,inst_22672);
} else {
if((state_val_22675 === (2))){
var inst_22651 = (state_22674[(8)]);
var inst_22653 = (inst_22651 < n);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22653)){
var statearr_22683_22706 = state_22674__$1;
(statearr_22683_22706[(1)] = (4));

} else {
var statearr_22684_22707 = state_22674__$1;
(statearr_22684_22707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (11))){
var inst_22651 = (state_22674[(8)]);
var inst_22661 = (state_22674[(2)]);
var inst_22662 = (inst_22651 + (1));
var inst_22651__$1 = inst_22662;
var state_22674__$1 = (function (){var statearr_22685 = state_22674;
(statearr_22685[(10)] = inst_22661);

(statearr_22685[(8)] = inst_22651__$1);

return statearr_22685;
})();
var statearr_22686_22708 = state_22674__$1;
(statearr_22686_22708[(2)] = null);

(statearr_22686_22708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (9))){
var state_22674__$1 = state_22674;
var statearr_22687_22709 = state_22674__$1;
(statearr_22687_22709[(2)] = null);

(statearr_22687_22709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (5))){
var state_22674__$1 = state_22674;
var statearr_22688_22710 = state_22674__$1;
(statearr_22688_22710[(2)] = null);

(statearr_22688_22710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (10))){
var inst_22666 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22689_22711 = state_22674__$1;
(statearr_22689_22711[(2)] = inst_22666);

(statearr_22689_22711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (8))){
var inst_22656 = (state_22674[(7)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22674__$1,(11),out,inst_22656);
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
});})(c__20537__auto___22701,out))
;
return ((function (switch__20425__auto__,c__20537__auto___22701,out){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_22693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22693[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_22693[(1)] = (1));

return statearr_22693;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_22674){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_22674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e22694){if((e22694 instanceof Object)){
var ex__20429__auto__ = e22694;
var statearr_22695_22712 = state_22674;
(statearr_22695_22712[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22713 = state_22674;
state_22674 = G__22713;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_22674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_22674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___22701,out))
})();
var state__20539__auto__ = (function (){var statearr_22696 = f__20538__auto__.call(null);
(statearr_22696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___22701);

return statearr_22696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___22701,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22721 = (function (map_LT_,f,ch,meta22722){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22722 = meta22722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22723,meta22722__$1){
var self__ = this;
var _22723__$1 = this;
return (new cljs.core.async.t_cljs$core$async22721(self__.map_LT_,self__.f,self__.ch,meta22722__$1));
});

cljs.core.async.t_cljs$core$async22721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22723){
var self__ = this;
var _22723__$1 = this;
return self__.meta22722;
});

cljs.core.async.t_cljs$core$async22721.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22721.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22721.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22724 = (function (map_LT_,f,ch,meta22722,_,fn1,meta22725){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22722 = meta22722;
this._ = _;
this.fn1 = fn1;
this.meta22725 = meta22725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22726,meta22725__$1){
var self__ = this;
var _22726__$1 = this;
return (new cljs.core.async.t_cljs$core$async22724(self__.map_LT_,self__.f,self__.ch,self__.meta22722,self__._,self__.fn1,meta22725__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22726){
var self__ = this;
var _22726__$1 = this;
return self__.meta22725;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22724.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22724.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22714_SHARP_){
return f1.call(null,(((p1__22714_SHARP_ == null))?null:self__.f.call(null,p1__22714_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22724.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22722","meta22722",1141511964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22721","cljs.core.async/t_cljs$core$async22721",560214699,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22725","meta22725",570795464,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22724";

cljs.core.async.t_cljs$core$async22724.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22724");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22724 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22724(map_LT___$1,f__$1,ch__$1,meta22722__$1,___$2,fn1__$1,meta22725){
return (new cljs.core.async.t_cljs$core$async22724(map_LT___$1,f__$1,ch__$1,meta22722__$1,___$2,fn1__$1,meta22725));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22724(self__.map_LT_,self__.f,self__.ch,self__.meta22722,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16793__auto__ = ret;
if(cljs.core.truth_(and__16793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22721.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22722","meta22722",1141511964,null)], null);
});

cljs.core.async.t_cljs$core$async22721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22721";

cljs.core.async.t_cljs$core$async22721.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22721");
});

cljs.core.async.__GT_t_cljs$core$async22721 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22721(map_LT___$1,f__$1,ch__$1,meta22722){
return (new cljs.core.async.t_cljs$core$async22721(map_LT___$1,f__$1,ch__$1,meta22722));
});

}

return (new cljs.core.async.t_cljs$core$async22721(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22730 = (function (map_GT_,f,ch,meta22731){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22731 = meta22731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22732,meta22731__$1){
var self__ = this;
var _22732__$1 = this;
return (new cljs.core.async.t_cljs$core$async22730(self__.map_GT_,self__.f,self__.ch,meta22731__$1));
});

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22732){
var self__ = this;
var _22732__$1 = this;
return self__.meta22731;
});

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22731","meta22731",2130243436,null)], null);
});

cljs.core.async.t_cljs$core$async22730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22730";

cljs.core.async.t_cljs$core$async22730.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22730");
});

cljs.core.async.__GT_t_cljs$core$async22730 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22730(map_GT___$1,f__$1,ch__$1,meta22731){
return (new cljs.core.async.t_cljs$core$async22730(map_GT___$1,f__$1,ch__$1,meta22731));
});

}

return (new cljs.core.async.t_cljs$core$async22730(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22736 = (function (filter_GT_,p,ch,meta22737){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22737 = meta22737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22738,meta22737__$1){
var self__ = this;
var _22738__$1 = this;
return (new cljs.core.async.t_cljs$core$async22736(self__.filter_GT_,self__.p,self__.ch,meta22737__$1));
});

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22738){
var self__ = this;
var _22738__$1 = this;
return self__.meta22737;
});

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22737","meta22737",-1929417123,null)], null);
});

cljs.core.async.t_cljs$core$async22736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22736";

cljs.core.async.t_cljs$core$async22736.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22736");
});

cljs.core.async.__GT_t_cljs$core$async22736 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22736(filter_GT___$1,p__$1,ch__$1,meta22737){
return (new cljs.core.async.t_cljs$core$async22736(filter_GT___$1,p__$1,ch__$1,meta22737));
});

}

return (new cljs.core.async.t_cljs$core$async22736(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22739 = [];
var len__17863__auto___22783 = arguments.length;
var i__17864__auto___22784 = (0);
while(true){
if((i__17864__auto___22784 < len__17863__auto___22783)){
args22739.push((arguments[i__17864__auto___22784]));

var G__22785 = (i__17864__auto___22784 + (1));
i__17864__auto___22784 = G__22785;
continue;
} else {
}
break;
}

var G__22741 = args22739.length;
switch (G__22741) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22739.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20537__auto___22787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___22787,out){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___22787,out){
return (function (state_22762){
var state_val_22763 = (state_22762[(1)]);
if((state_val_22763 === (7))){
var inst_22758 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22764_22788 = state_22762__$1;
(statearr_22764_22788[(2)] = inst_22758);

(statearr_22764_22788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (1))){
var state_22762__$1 = state_22762;
var statearr_22765_22789 = state_22762__$1;
(statearr_22765_22789[(2)] = null);

(statearr_22765_22789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (4))){
var inst_22744 = (state_22762[(7)]);
var inst_22744__$1 = (state_22762[(2)]);
var inst_22745 = (inst_22744__$1 == null);
var state_22762__$1 = (function (){var statearr_22766 = state_22762;
(statearr_22766[(7)] = inst_22744__$1);

return statearr_22766;
})();
if(cljs.core.truth_(inst_22745)){
var statearr_22767_22790 = state_22762__$1;
(statearr_22767_22790[(1)] = (5));

} else {
var statearr_22768_22791 = state_22762__$1;
(statearr_22768_22791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (6))){
var inst_22744 = (state_22762[(7)]);
var inst_22749 = p.call(null,inst_22744);
var state_22762__$1 = state_22762;
if(cljs.core.truth_(inst_22749)){
var statearr_22769_22792 = state_22762__$1;
(statearr_22769_22792[(1)] = (8));

} else {
var statearr_22770_22793 = state_22762__$1;
(statearr_22770_22793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (3))){
var inst_22760 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22762__$1,inst_22760);
} else {
if((state_val_22763 === (2))){
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22762__$1,(4),ch);
} else {
if((state_val_22763 === (11))){
var inst_22752 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22771_22794 = state_22762__$1;
(statearr_22771_22794[(2)] = inst_22752);

(statearr_22771_22794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (9))){
var state_22762__$1 = state_22762;
var statearr_22772_22795 = state_22762__$1;
(statearr_22772_22795[(2)] = null);

(statearr_22772_22795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (5))){
var inst_22747 = cljs.core.async.close_BANG_.call(null,out);
var state_22762__$1 = state_22762;
var statearr_22773_22796 = state_22762__$1;
(statearr_22773_22796[(2)] = inst_22747);

(statearr_22773_22796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (10))){
var inst_22755 = (state_22762[(2)]);
var state_22762__$1 = (function (){var statearr_22774 = state_22762;
(statearr_22774[(8)] = inst_22755);

return statearr_22774;
})();
var statearr_22775_22797 = state_22762__$1;
(statearr_22775_22797[(2)] = null);

(statearr_22775_22797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (8))){
var inst_22744 = (state_22762[(7)]);
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22762__$1,(11),out,inst_22744);
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
});})(c__20537__auto___22787,out))
;
return ((function (switch__20425__auto__,c__20537__auto___22787,out){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_22779 = [null,null,null,null,null,null,null,null,null];
(statearr_22779[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_22779[(1)] = (1));

return statearr_22779;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_22762){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_22762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e22780){if((e22780 instanceof Object)){
var ex__20429__auto__ = e22780;
var statearr_22781_22798 = state_22762;
(statearr_22781_22798[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22799 = state_22762;
state_22762 = G__22799;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_22762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_22762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___22787,out))
})();
var state__20539__auto__ = (function (){var statearr_22782 = f__20538__auto__.call(null);
(statearr_22782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___22787);

return statearr_22782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___22787,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22800 = [];
var len__17863__auto___22803 = arguments.length;
var i__17864__auto___22804 = (0);
while(true){
if((i__17864__auto___22804 < len__17863__auto___22803)){
args22800.push((arguments[i__17864__auto___22804]));

var G__22805 = (i__17864__auto___22804 + (1));
i__17864__auto___22804 = G__22805;
continue;
} else {
}
break;
}

var G__22802 = args22800.length;
switch (G__22802) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22800.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto__){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto__){
return (function (state_22972){
var state_val_22973 = (state_22972[(1)]);
if((state_val_22973 === (7))){
var inst_22968 = (state_22972[(2)]);
var state_22972__$1 = state_22972;
var statearr_22974_23015 = state_22972__$1;
(statearr_22974_23015[(2)] = inst_22968);

(statearr_22974_23015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (20))){
var inst_22938 = (state_22972[(7)]);
var inst_22949 = (state_22972[(2)]);
var inst_22950 = cljs.core.next.call(null,inst_22938);
var inst_22924 = inst_22950;
var inst_22925 = null;
var inst_22926 = (0);
var inst_22927 = (0);
var state_22972__$1 = (function (){var statearr_22975 = state_22972;
(statearr_22975[(8)] = inst_22925);

(statearr_22975[(9)] = inst_22926);

(statearr_22975[(10)] = inst_22927);

(statearr_22975[(11)] = inst_22924);

(statearr_22975[(12)] = inst_22949);

return statearr_22975;
})();
var statearr_22976_23016 = state_22972__$1;
(statearr_22976_23016[(2)] = null);

(statearr_22976_23016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (1))){
var state_22972__$1 = state_22972;
var statearr_22977_23017 = state_22972__$1;
(statearr_22977_23017[(2)] = null);

(statearr_22977_23017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (4))){
var inst_22913 = (state_22972[(13)]);
var inst_22913__$1 = (state_22972[(2)]);
var inst_22914 = (inst_22913__$1 == null);
var state_22972__$1 = (function (){var statearr_22978 = state_22972;
(statearr_22978[(13)] = inst_22913__$1);

return statearr_22978;
})();
if(cljs.core.truth_(inst_22914)){
var statearr_22979_23018 = state_22972__$1;
(statearr_22979_23018[(1)] = (5));

} else {
var statearr_22980_23019 = state_22972__$1;
(statearr_22980_23019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (15))){
var state_22972__$1 = state_22972;
var statearr_22984_23020 = state_22972__$1;
(statearr_22984_23020[(2)] = null);

(statearr_22984_23020[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (21))){
var state_22972__$1 = state_22972;
var statearr_22985_23021 = state_22972__$1;
(statearr_22985_23021[(2)] = null);

(statearr_22985_23021[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (13))){
var inst_22925 = (state_22972[(8)]);
var inst_22926 = (state_22972[(9)]);
var inst_22927 = (state_22972[(10)]);
var inst_22924 = (state_22972[(11)]);
var inst_22934 = (state_22972[(2)]);
var inst_22935 = (inst_22927 + (1));
var tmp22981 = inst_22925;
var tmp22982 = inst_22926;
var tmp22983 = inst_22924;
var inst_22924__$1 = tmp22983;
var inst_22925__$1 = tmp22981;
var inst_22926__$1 = tmp22982;
var inst_22927__$1 = inst_22935;
var state_22972__$1 = (function (){var statearr_22986 = state_22972;
(statearr_22986[(14)] = inst_22934);

(statearr_22986[(8)] = inst_22925__$1);

(statearr_22986[(9)] = inst_22926__$1);

(statearr_22986[(10)] = inst_22927__$1);

(statearr_22986[(11)] = inst_22924__$1);

return statearr_22986;
})();
var statearr_22987_23022 = state_22972__$1;
(statearr_22987_23022[(2)] = null);

(statearr_22987_23022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (22))){
var state_22972__$1 = state_22972;
var statearr_22988_23023 = state_22972__$1;
(statearr_22988_23023[(2)] = null);

(statearr_22988_23023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (6))){
var inst_22913 = (state_22972[(13)]);
var inst_22922 = f.call(null,inst_22913);
var inst_22923 = cljs.core.seq.call(null,inst_22922);
var inst_22924 = inst_22923;
var inst_22925 = null;
var inst_22926 = (0);
var inst_22927 = (0);
var state_22972__$1 = (function (){var statearr_22989 = state_22972;
(statearr_22989[(8)] = inst_22925);

(statearr_22989[(9)] = inst_22926);

(statearr_22989[(10)] = inst_22927);

(statearr_22989[(11)] = inst_22924);

return statearr_22989;
})();
var statearr_22990_23024 = state_22972__$1;
(statearr_22990_23024[(2)] = null);

(statearr_22990_23024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (17))){
var inst_22938 = (state_22972[(7)]);
var inst_22942 = cljs.core.chunk_first.call(null,inst_22938);
var inst_22943 = cljs.core.chunk_rest.call(null,inst_22938);
var inst_22944 = cljs.core.count.call(null,inst_22942);
var inst_22924 = inst_22943;
var inst_22925 = inst_22942;
var inst_22926 = inst_22944;
var inst_22927 = (0);
var state_22972__$1 = (function (){var statearr_22991 = state_22972;
(statearr_22991[(8)] = inst_22925);

(statearr_22991[(9)] = inst_22926);

(statearr_22991[(10)] = inst_22927);

(statearr_22991[(11)] = inst_22924);

return statearr_22991;
})();
var statearr_22992_23025 = state_22972__$1;
(statearr_22992_23025[(2)] = null);

(statearr_22992_23025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (3))){
var inst_22970 = (state_22972[(2)]);
var state_22972__$1 = state_22972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22972__$1,inst_22970);
} else {
if((state_val_22973 === (12))){
var inst_22958 = (state_22972[(2)]);
var state_22972__$1 = state_22972;
var statearr_22993_23026 = state_22972__$1;
(statearr_22993_23026[(2)] = inst_22958);

(statearr_22993_23026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (2))){
var state_22972__$1 = state_22972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22972__$1,(4),in$);
} else {
if((state_val_22973 === (23))){
var inst_22966 = (state_22972[(2)]);
var state_22972__$1 = state_22972;
var statearr_22994_23027 = state_22972__$1;
(statearr_22994_23027[(2)] = inst_22966);

(statearr_22994_23027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (19))){
var inst_22953 = (state_22972[(2)]);
var state_22972__$1 = state_22972;
var statearr_22995_23028 = state_22972__$1;
(statearr_22995_23028[(2)] = inst_22953);

(statearr_22995_23028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (11))){
var inst_22938 = (state_22972[(7)]);
var inst_22924 = (state_22972[(11)]);
var inst_22938__$1 = cljs.core.seq.call(null,inst_22924);
var state_22972__$1 = (function (){var statearr_22996 = state_22972;
(statearr_22996[(7)] = inst_22938__$1);

return statearr_22996;
})();
if(inst_22938__$1){
var statearr_22997_23029 = state_22972__$1;
(statearr_22997_23029[(1)] = (14));

} else {
var statearr_22998_23030 = state_22972__$1;
(statearr_22998_23030[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (9))){
var inst_22960 = (state_22972[(2)]);
var inst_22961 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22972__$1 = (function (){var statearr_22999 = state_22972;
(statearr_22999[(15)] = inst_22960);

return statearr_22999;
})();
if(cljs.core.truth_(inst_22961)){
var statearr_23000_23031 = state_22972__$1;
(statearr_23000_23031[(1)] = (21));

} else {
var statearr_23001_23032 = state_22972__$1;
(statearr_23001_23032[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (5))){
var inst_22916 = cljs.core.async.close_BANG_.call(null,out);
var state_22972__$1 = state_22972;
var statearr_23002_23033 = state_22972__$1;
(statearr_23002_23033[(2)] = inst_22916);

(statearr_23002_23033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (14))){
var inst_22938 = (state_22972[(7)]);
var inst_22940 = cljs.core.chunked_seq_QMARK_.call(null,inst_22938);
var state_22972__$1 = state_22972;
if(inst_22940){
var statearr_23003_23034 = state_22972__$1;
(statearr_23003_23034[(1)] = (17));

} else {
var statearr_23004_23035 = state_22972__$1;
(statearr_23004_23035[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (16))){
var inst_22956 = (state_22972[(2)]);
var state_22972__$1 = state_22972;
var statearr_23005_23036 = state_22972__$1;
(statearr_23005_23036[(2)] = inst_22956);

(statearr_23005_23036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (10))){
var inst_22925 = (state_22972[(8)]);
var inst_22927 = (state_22972[(10)]);
var inst_22932 = cljs.core._nth.call(null,inst_22925,inst_22927);
var state_22972__$1 = state_22972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22972__$1,(13),out,inst_22932);
} else {
if((state_val_22973 === (18))){
var inst_22938 = (state_22972[(7)]);
var inst_22947 = cljs.core.first.call(null,inst_22938);
var state_22972__$1 = state_22972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22972__$1,(20),out,inst_22947);
} else {
if((state_val_22973 === (8))){
var inst_22926 = (state_22972[(9)]);
var inst_22927 = (state_22972[(10)]);
var inst_22929 = (inst_22927 < inst_22926);
var inst_22930 = inst_22929;
var state_22972__$1 = state_22972;
if(cljs.core.truth_(inst_22930)){
var statearr_23006_23037 = state_22972__$1;
(statearr_23006_23037[(1)] = (10));

} else {
var statearr_23007_23038 = state_22972__$1;
(statearr_23007_23038[(1)] = (11));

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
});})(c__20537__auto__))
;
return ((function (switch__20425__auto__,c__20537__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20426__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20426__auto____0 = (function (){
var statearr_23011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23011[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20426__auto__);

(statearr_23011[(1)] = (1));

return statearr_23011;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20426__auto____1 = (function (state_22972){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_22972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e23012){if((e23012 instanceof Object)){
var ex__20429__auto__ = e23012;
var statearr_23013_23039 = state_22972;
(statearr_23013_23039[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23040 = state_22972;
state_22972 = G__23040;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20426__auto__ = function(state_22972){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20426__auto____1.call(this,state_22972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20426__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20426__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto__))
})();
var state__20539__auto__ = (function (){var statearr_23014 = f__20538__auto__.call(null);
(statearr_23014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto__);

return statearr_23014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto__))
);

return c__20537__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23041 = [];
var len__17863__auto___23044 = arguments.length;
var i__17864__auto___23045 = (0);
while(true){
if((i__17864__auto___23045 < len__17863__auto___23044)){
args23041.push((arguments[i__17864__auto___23045]));

var G__23046 = (i__17864__auto___23045 + (1));
i__17864__auto___23045 = G__23046;
continue;
} else {
}
break;
}

var G__23043 = args23041.length;
switch (G__23043) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23041.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23048 = [];
var len__17863__auto___23051 = arguments.length;
var i__17864__auto___23052 = (0);
while(true){
if((i__17864__auto___23052 < len__17863__auto___23051)){
args23048.push((arguments[i__17864__auto___23052]));

var G__23053 = (i__17864__auto___23052 + (1));
i__17864__auto___23052 = G__23053;
continue;
} else {
}
break;
}

var G__23050 = args23048.length;
switch (G__23050) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23048.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23055 = [];
var len__17863__auto___23106 = arguments.length;
var i__17864__auto___23107 = (0);
while(true){
if((i__17864__auto___23107 < len__17863__auto___23106)){
args23055.push((arguments[i__17864__auto___23107]));

var G__23108 = (i__17864__auto___23107 + (1));
i__17864__auto___23107 = G__23108;
continue;
} else {
}
break;
}

var G__23057 = args23055.length;
switch (G__23057) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23055.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20537__auto___23110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___23110,out){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___23110,out){
return (function (state_23081){
var state_val_23082 = (state_23081[(1)]);
if((state_val_23082 === (7))){
var inst_23076 = (state_23081[(2)]);
var state_23081__$1 = state_23081;
var statearr_23083_23111 = state_23081__$1;
(statearr_23083_23111[(2)] = inst_23076);

(statearr_23083_23111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (1))){
var inst_23058 = null;
var state_23081__$1 = (function (){var statearr_23084 = state_23081;
(statearr_23084[(7)] = inst_23058);

return statearr_23084;
})();
var statearr_23085_23112 = state_23081__$1;
(statearr_23085_23112[(2)] = null);

(statearr_23085_23112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (4))){
var inst_23061 = (state_23081[(8)]);
var inst_23061__$1 = (state_23081[(2)]);
var inst_23062 = (inst_23061__$1 == null);
var inst_23063 = cljs.core.not.call(null,inst_23062);
var state_23081__$1 = (function (){var statearr_23086 = state_23081;
(statearr_23086[(8)] = inst_23061__$1);

return statearr_23086;
})();
if(inst_23063){
var statearr_23087_23113 = state_23081__$1;
(statearr_23087_23113[(1)] = (5));

} else {
var statearr_23088_23114 = state_23081__$1;
(statearr_23088_23114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (6))){
var state_23081__$1 = state_23081;
var statearr_23089_23115 = state_23081__$1;
(statearr_23089_23115[(2)] = null);

(statearr_23089_23115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (3))){
var inst_23078 = (state_23081[(2)]);
var inst_23079 = cljs.core.async.close_BANG_.call(null,out);
var state_23081__$1 = (function (){var statearr_23090 = state_23081;
(statearr_23090[(9)] = inst_23078);

return statearr_23090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23081__$1,inst_23079);
} else {
if((state_val_23082 === (2))){
var state_23081__$1 = state_23081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23081__$1,(4),ch);
} else {
if((state_val_23082 === (11))){
var inst_23061 = (state_23081[(8)]);
var inst_23070 = (state_23081[(2)]);
var inst_23058 = inst_23061;
var state_23081__$1 = (function (){var statearr_23091 = state_23081;
(statearr_23091[(10)] = inst_23070);

(statearr_23091[(7)] = inst_23058);

return statearr_23091;
})();
var statearr_23092_23116 = state_23081__$1;
(statearr_23092_23116[(2)] = null);

(statearr_23092_23116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (9))){
var inst_23061 = (state_23081[(8)]);
var state_23081__$1 = state_23081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23081__$1,(11),out,inst_23061);
} else {
if((state_val_23082 === (5))){
var inst_23061 = (state_23081[(8)]);
var inst_23058 = (state_23081[(7)]);
var inst_23065 = cljs.core._EQ_.call(null,inst_23061,inst_23058);
var state_23081__$1 = state_23081;
if(inst_23065){
var statearr_23094_23117 = state_23081__$1;
(statearr_23094_23117[(1)] = (8));

} else {
var statearr_23095_23118 = state_23081__$1;
(statearr_23095_23118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (10))){
var inst_23073 = (state_23081[(2)]);
var state_23081__$1 = state_23081;
var statearr_23096_23119 = state_23081__$1;
(statearr_23096_23119[(2)] = inst_23073);

(statearr_23096_23119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (8))){
var inst_23058 = (state_23081[(7)]);
var tmp23093 = inst_23058;
var inst_23058__$1 = tmp23093;
var state_23081__$1 = (function (){var statearr_23097 = state_23081;
(statearr_23097[(7)] = inst_23058__$1);

return statearr_23097;
})();
var statearr_23098_23120 = state_23081__$1;
(statearr_23098_23120[(2)] = null);

(statearr_23098_23120[(1)] = (2));


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
});})(c__20537__auto___23110,out))
;
return ((function (switch__20425__auto__,c__20537__auto___23110,out){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_23102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23102[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_23102[(1)] = (1));

return statearr_23102;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_23081){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_23081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e23103){if((e23103 instanceof Object)){
var ex__20429__auto__ = e23103;
var statearr_23104_23121 = state_23081;
(statearr_23104_23121[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23122 = state_23081;
state_23081 = G__23122;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_23081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_23081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___23110,out))
})();
var state__20539__auto__ = (function (){var statearr_23105 = f__20538__auto__.call(null);
(statearr_23105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___23110);

return statearr_23105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___23110,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23123 = [];
var len__17863__auto___23193 = arguments.length;
var i__17864__auto___23194 = (0);
while(true){
if((i__17864__auto___23194 < len__17863__auto___23193)){
args23123.push((arguments[i__17864__auto___23194]));

var G__23195 = (i__17864__auto___23194 + (1));
i__17864__auto___23194 = G__23195;
continue;
} else {
}
break;
}

var G__23125 = args23123.length;
switch (G__23125) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23123.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20537__auto___23197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___23197,out){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___23197,out){
return (function (state_23163){
var state_val_23164 = (state_23163[(1)]);
if((state_val_23164 === (7))){
var inst_23159 = (state_23163[(2)]);
var state_23163__$1 = state_23163;
var statearr_23165_23198 = state_23163__$1;
(statearr_23165_23198[(2)] = inst_23159);

(statearr_23165_23198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (1))){
var inst_23126 = (new Array(n));
var inst_23127 = inst_23126;
var inst_23128 = (0);
var state_23163__$1 = (function (){var statearr_23166 = state_23163;
(statearr_23166[(7)] = inst_23128);

(statearr_23166[(8)] = inst_23127);

return statearr_23166;
})();
var statearr_23167_23199 = state_23163__$1;
(statearr_23167_23199[(2)] = null);

(statearr_23167_23199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (4))){
var inst_23131 = (state_23163[(9)]);
var inst_23131__$1 = (state_23163[(2)]);
var inst_23132 = (inst_23131__$1 == null);
var inst_23133 = cljs.core.not.call(null,inst_23132);
var state_23163__$1 = (function (){var statearr_23168 = state_23163;
(statearr_23168[(9)] = inst_23131__$1);

return statearr_23168;
})();
if(inst_23133){
var statearr_23169_23200 = state_23163__$1;
(statearr_23169_23200[(1)] = (5));

} else {
var statearr_23170_23201 = state_23163__$1;
(statearr_23170_23201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (15))){
var inst_23153 = (state_23163[(2)]);
var state_23163__$1 = state_23163;
var statearr_23171_23202 = state_23163__$1;
(statearr_23171_23202[(2)] = inst_23153);

(statearr_23171_23202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (13))){
var state_23163__$1 = state_23163;
var statearr_23172_23203 = state_23163__$1;
(statearr_23172_23203[(2)] = null);

(statearr_23172_23203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (6))){
var inst_23128 = (state_23163[(7)]);
var inst_23149 = (inst_23128 > (0));
var state_23163__$1 = state_23163;
if(cljs.core.truth_(inst_23149)){
var statearr_23173_23204 = state_23163__$1;
(statearr_23173_23204[(1)] = (12));

} else {
var statearr_23174_23205 = state_23163__$1;
(statearr_23174_23205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (3))){
var inst_23161 = (state_23163[(2)]);
var state_23163__$1 = state_23163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23163__$1,inst_23161);
} else {
if((state_val_23164 === (12))){
var inst_23127 = (state_23163[(8)]);
var inst_23151 = cljs.core.vec.call(null,inst_23127);
var state_23163__$1 = state_23163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23163__$1,(15),out,inst_23151);
} else {
if((state_val_23164 === (2))){
var state_23163__$1 = state_23163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23163__$1,(4),ch);
} else {
if((state_val_23164 === (11))){
var inst_23143 = (state_23163[(2)]);
var inst_23144 = (new Array(n));
var inst_23127 = inst_23144;
var inst_23128 = (0);
var state_23163__$1 = (function (){var statearr_23175 = state_23163;
(statearr_23175[(7)] = inst_23128);

(statearr_23175[(10)] = inst_23143);

(statearr_23175[(8)] = inst_23127);

return statearr_23175;
})();
var statearr_23176_23206 = state_23163__$1;
(statearr_23176_23206[(2)] = null);

(statearr_23176_23206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (9))){
var inst_23127 = (state_23163[(8)]);
var inst_23141 = cljs.core.vec.call(null,inst_23127);
var state_23163__$1 = state_23163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23163__$1,(11),out,inst_23141);
} else {
if((state_val_23164 === (5))){
var inst_23128 = (state_23163[(7)]);
var inst_23136 = (state_23163[(11)]);
var inst_23131 = (state_23163[(9)]);
var inst_23127 = (state_23163[(8)]);
var inst_23135 = (inst_23127[inst_23128] = inst_23131);
var inst_23136__$1 = (inst_23128 + (1));
var inst_23137 = (inst_23136__$1 < n);
var state_23163__$1 = (function (){var statearr_23177 = state_23163;
(statearr_23177[(11)] = inst_23136__$1);

(statearr_23177[(12)] = inst_23135);

return statearr_23177;
})();
if(cljs.core.truth_(inst_23137)){
var statearr_23178_23207 = state_23163__$1;
(statearr_23178_23207[(1)] = (8));

} else {
var statearr_23179_23208 = state_23163__$1;
(statearr_23179_23208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (14))){
var inst_23156 = (state_23163[(2)]);
var inst_23157 = cljs.core.async.close_BANG_.call(null,out);
var state_23163__$1 = (function (){var statearr_23181 = state_23163;
(statearr_23181[(13)] = inst_23156);

return statearr_23181;
})();
var statearr_23182_23209 = state_23163__$1;
(statearr_23182_23209[(2)] = inst_23157);

(statearr_23182_23209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (10))){
var inst_23147 = (state_23163[(2)]);
var state_23163__$1 = state_23163;
var statearr_23183_23210 = state_23163__$1;
(statearr_23183_23210[(2)] = inst_23147);

(statearr_23183_23210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23164 === (8))){
var inst_23136 = (state_23163[(11)]);
var inst_23127 = (state_23163[(8)]);
var tmp23180 = inst_23127;
var inst_23127__$1 = tmp23180;
var inst_23128 = inst_23136;
var state_23163__$1 = (function (){var statearr_23184 = state_23163;
(statearr_23184[(7)] = inst_23128);

(statearr_23184[(8)] = inst_23127__$1);

return statearr_23184;
})();
var statearr_23185_23211 = state_23163__$1;
(statearr_23185_23211[(2)] = null);

(statearr_23185_23211[(1)] = (2));


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
});})(c__20537__auto___23197,out))
;
return ((function (switch__20425__auto__,c__20537__auto___23197,out){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_23189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23189[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_23189[(1)] = (1));

return statearr_23189;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_23163){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_23163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e23190){if((e23190 instanceof Object)){
var ex__20429__auto__ = e23190;
var statearr_23191_23212 = state_23163;
(statearr_23191_23212[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23213 = state_23163;
state_23163 = G__23213;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_23163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_23163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___23197,out))
})();
var state__20539__auto__ = (function (){var statearr_23192 = f__20538__auto__.call(null);
(statearr_23192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___23197);

return statearr_23192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___23197,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23214 = [];
var len__17863__auto___23288 = arguments.length;
var i__17864__auto___23289 = (0);
while(true){
if((i__17864__auto___23289 < len__17863__auto___23288)){
args23214.push((arguments[i__17864__auto___23289]));

var G__23290 = (i__17864__auto___23289 + (1));
i__17864__auto___23289 = G__23290;
continue;
} else {
}
break;
}

var G__23216 = args23214.length;
switch (G__23216) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23214.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20537__auto___23292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20537__auto___23292,out){
return (function (){
var f__20538__auto__ = (function (){var switch__20425__auto__ = ((function (c__20537__auto___23292,out){
return (function (state_23258){
var state_val_23259 = (state_23258[(1)]);
if((state_val_23259 === (7))){
var inst_23254 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23260_23293 = state_23258__$1;
(statearr_23260_23293[(2)] = inst_23254);

(statearr_23260_23293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (1))){
var inst_23217 = [];
var inst_23218 = inst_23217;
var inst_23219 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23258__$1 = (function (){var statearr_23261 = state_23258;
(statearr_23261[(7)] = inst_23219);

(statearr_23261[(8)] = inst_23218);

return statearr_23261;
})();
var statearr_23262_23294 = state_23258__$1;
(statearr_23262_23294[(2)] = null);

(statearr_23262_23294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (4))){
var inst_23222 = (state_23258[(9)]);
var inst_23222__$1 = (state_23258[(2)]);
var inst_23223 = (inst_23222__$1 == null);
var inst_23224 = cljs.core.not.call(null,inst_23223);
var state_23258__$1 = (function (){var statearr_23263 = state_23258;
(statearr_23263[(9)] = inst_23222__$1);

return statearr_23263;
})();
if(inst_23224){
var statearr_23264_23295 = state_23258__$1;
(statearr_23264_23295[(1)] = (5));

} else {
var statearr_23265_23296 = state_23258__$1;
(statearr_23265_23296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (15))){
var inst_23248 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23266_23297 = state_23258__$1;
(statearr_23266_23297[(2)] = inst_23248);

(statearr_23266_23297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (13))){
var state_23258__$1 = state_23258;
var statearr_23267_23298 = state_23258__$1;
(statearr_23267_23298[(2)] = null);

(statearr_23267_23298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (6))){
var inst_23218 = (state_23258[(8)]);
var inst_23243 = inst_23218.length;
var inst_23244 = (inst_23243 > (0));
var state_23258__$1 = state_23258;
if(cljs.core.truth_(inst_23244)){
var statearr_23268_23299 = state_23258__$1;
(statearr_23268_23299[(1)] = (12));

} else {
var statearr_23269_23300 = state_23258__$1;
(statearr_23269_23300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (3))){
var inst_23256 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23258__$1,inst_23256);
} else {
if((state_val_23259 === (12))){
var inst_23218 = (state_23258[(8)]);
var inst_23246 = cljs.core.vec.call(null,inst_23218);
var state_23258__$1 = state_23258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23258__$1,(15),out,inst_23246);
} else {
if((state_val_23259 === (2))){
var state_23258__$1 = state_23258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23258__$1,(4),ch);
} else {
if((state_val_23259 === (11))){
var inst_23226 = (state_23258[(10)]);
var inst_23222 = (state_23258[(9)]);
var inst_23236 = (state_23258[(2)]);
var inst_23237 = [];
var inst_23238 = inst_23237.push(inst_23222);
var inst_23218 = inst_23237;
var inst_23219 = inst_23226;
var state_23258__$1 = (function (){var statearr_23270 = state_23258;
(statearr_23270[(7)] = inst_23219);

(statearr_23270[(11)] = inst_23238);

(statearr_23270[(12)] = inst_23236);

(statearr_23270[(8)] = inst_23218);

return statearr_23270;
})();
var statearr_23271_23301 = state_23258__$1;
(statearr_23271_23301[(2)] = null);

(statearr_23271_23301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (9))){
var inst_23218 = (state_23258[(8)]);
var inst_23234 = cljs.core.vec.call(null,inst_23218);
var state_23258__$1 = state_23258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23258__$1,(11),out,inst_23234);
} else {
if((state_val_23259 === (5))){
var inst_23226 = (state_23258[(10)]);
var inst_23219 = (state_23258[(7)]);
var inst_23222 = (state_23258[(9)]);
var inst_23226__$1 = f.call(null,inst_23222);
var inst_23227 = cljs.core._EQ_.call(null,inst_23226__$1,inst_23219);
var inst_23228 = cljs.core.keyword_identical_QMARK_.call(null,inst_23219,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23229 = (inst_23227) || (inst_23228);
var state_23258__$1 = (function (){var statearr_23272 = state_23258;
(statearr_23272[(10)] = inst_23226__$1);

return statearr_23272;
})();
if(cljs.core.truth_(inst_23229)){
var statearr_23273_23302 = state_23258__$1;
(statearr_23273_23302[(1)] = (8));

} else {
var statearr_23274_23303 = state_23258__$1;
(statearr_23274_23303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (14))){
var inst_23251 = (state_23258[(2)]);
var inst_23252 = cljs.core.async.close_BANG_.call(null,out);
var state_23258__$1 = (function (){var statearr_23276 = state_23258;
(statearr_23276[(13)] = inst_23251);

return statearr_23276;
})();
var statearr_23277_23304 = state_23258__$1;
(statearr_23277_23304[(2)] = inst_23252);

(statearr_23277_23304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (10))){
var inst_23241 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23278_23305 = state_23258__$1;
(statearr_23278_23305[(2)] = inst_23241);

(statearr_23278_23305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (8))){
var inst_23226 = (state_23258[(10)]);
var inst_23222 = (state_23258[(9)]);
var inst_23218 = (state_23258[(8)]);
var inst_23231 = inst_23218.push(inst_23222);
var tmp23275 = inst_23218;
var inst_23218__$1 = tmp23275;
var inst_23219 = inst_23226;
var state_23258__$1 = (function (){var statearr_23279 = state_23258;
(statearr_23279[(14)] = inst_23231);

(statearr_23279[(7)] = inst_23219);

(statearr_23279[(8)] = inst_23218__$1);

return statearr_23279;
})();
var statearr_23280_23306 = state_23258__$1;
(statearr_23280_23306[(2)] = null);

(statearr_23280_23306[(1)] = (2));


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
});})(c__20537__auto___23292,out))
;
return ((function (switch__20425__auto__,c__20537__auto___23292,out){
return (function() {
var cljs$core$async$state_machine__20426__auto__ = null;
var cljs$core$async$state_machine__20426__auto____0 = (function (){
var statearr_23284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23284[(0)] = cljs$core$async$state_machine__20426__auto__);

(statearr_23284[(1)] = (1));

return statearr_23284;
});
var cljs$core$async$state_machine__20426__auto____1 = (function (state_23258){
while(true){
var ret_value__20427__auto__ = (function (){try{while(true){
var result__20428__auto__ = switch__20425__auto__.call(null,state_23258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20428__auto__;
}
break;
}
}catch (e23285){if((e23285 instanceof Object)){
var ex__20429__auto__ = e23285;
var statearr_23286_23307 = state_23258;
(statearr_23286_23307[(5)] = ex__20429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23308 = state_23258;
state_23258 = G__23308;
continue;
} else {
return ret_value__20427__auto__;
}
break;
}
});
cljs$core$async$state_machine__20426__auto__ = function(state_23258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20426__auto____1.call(this,state_23258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20426__auto____0;
cljs$core$async$state_machine__20426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20426__auto____1;
return cljs$core$async$state_machine__20426__auto__;
})()
;})(switch__20425__auto__,c__20537__auto___23292,out))
})();
var state__20539__auto__ = (function (){var statearr_23287 = f__20538__auto__.call(null);
(statearr_23287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20537__auto___23292);

return statearr_23287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20539__auto__);
});})(c__20537__auto___23292,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map