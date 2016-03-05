// Compiled by ClojureScript 1.7.170 {}
goog.provide('leboX.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
leboX.core.jquery = $;
leboX.core.openProposalDialog = (function leboX$core$openProposalDialog(){
return leboX.core.jquery.call(null,(function (){
return cljs.core.println.call(null,leboX.core.jquery.call(null,".modal").openModal());
}));
});
leboX.core.quote_url = (function leboX$core$quote_url(stock_symbol){
return [cljs.core.str("https://query.yahooapis.com/v1/public/yql?q=select%20LastTradePriceOnly%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"),cljs.core.str(stock_symbol),cljs.core.str("%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")].join('');
});
leboX.core.get_quote = (function leboX$core$get_quote(stocks_symbol){
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18909__auto__ = ((function (c__18930__auto__){
return (function (state_20110){
var state_val_20111 = (state_20110[(1)]);
if((state_val_20111 === (1))){
var inst_20097 = leboX.core.quote_url.call(null,stocks_symbol);
var inst_20098 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20099 = [false];
var inst_20100 = cljs.core.PersistentHashMap.fromArrays(inst_20098,inst_20099);
var inst_20101 = cljs_http.client.get.call(null,inst_20097,inst_20100);
var state_20110__$1 = state_20110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20110__$1,(2),inst_20101);
} else {
if((state_val_20111 === (2))){
var inst_20103 = (state_20110[(2)]);
var inst_20104 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20103);
var inst_20105 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(inst_20104);
var inst_20106 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(inst_20105);
var inst_20107 = new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(inst_20106);
var inst_20108 = new cljs.core.Keyword(null,"LastTradePriceOnly","LastTradePriceOnly",-40654953).cljs$core$IFn$_invoke$arity$1(inst_20107);
var state_20110__$1 = state_20110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20110__$1,inst_20108);
} else {
return null;
}
}
});})(c__18930__auto__))
;
return ((function (switch__18909__auto__,c__18930__auto__){
return (function() {
var leboX$core$get_quote_$_state_machine__18910__auto__ = null;
var leboX$core$get_quote_$_state_machine__18910__auto____0 = (function (){
var statearr_20115 = [null,null,null,null,null,null,null];
(statearr_20115[(0)] = leboX$core$get_quote_$_state_machine__18910__auto__);

(statearr_20115[(1)] = (1));

return statearr_20115;
});
var leboX$core$get_quote_$_state_machine__18910__auto____1 = (function (state_20110){
while(true){
var ret_value__18911__auto__ = (function (){try{while(true){
var result__18912__auto__ = switch__18909__auto__.call(null,state_20110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18912__auto__;
}
break;
}
}catch (e20116){if((e20116 instanceof Object)){
var ex__18913__auto__ = e20116;
var statearr_20117_20119 = state_20110;
(statearr_20117_20119[(5)] = ex__18913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20120 = state_20110;
state_20110 = G__20120;
continue;
} else {
return ret_value__18911__auto__;
}
break;
}
});
leboX$core$get_quote_$_state_machine__18910__auto__ = function(state_20110){
switch(arguments.length){
case 0:
return leboX$core$get_quote_$_state_machine__18910__auto____0.call(this);
case 1:
return leboX$core$get_quote_$_state_machine__18910__auto____1.call(this,state_20110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
leboX$core$get_quote_$_state_machine__18910__auto__.cljs$core$IFn$_invoke$arity$0 = leboX$core$get_quote_$_state_machine__18910__auto____0;
leboX$core$get_quote_$_state_machine__18910__auto__.cljs$core$IFn$_invoke$arity$1 = leboX$core$get_quote_$_state_machine__18910__auto____1;
return leboX$core$get_quote_$_state_machine__18910__auto__;
})()
;})(switch__18909__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_20118 = f__18931__auto__.call(null);
(statearr_20118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_20118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
});
if(typeof leboX.core.app_state !== 'undefined'){
} else {
leboX.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stocks","stocks",-617352902),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"MSFT",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(50)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"AAPL",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(50)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"GOOG",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(50)], null)], null)], null));
}
leboX.core.indices_of = (function leboX$core$indices_of(f,coll){
return cljs.core.keep_indexed.call(null,(function (p1__20122_SHARP_,p2__20121_SHARP_){
if(cljs.core.truth_(f.call(null,p2__20121_SHARP_))){
return p1__20122_SHARP_;
} else {
return null;
}
}),coll);
});
leboX.core.first_index_of = (function leboX$core$first_index_of(f,coll){
return cljs.core.first.call(null,leboX.core.indices_of.call(null,f,coll));
});
leboX.core.get_stock_index_by_symbol = (function leboX$core$get_stock_index_by_symbol(stock_symbol){
return leboX.core.first_index_of.call(null,(function (p1__20123_SHARP_){
return cljs.core._EQ_.call(null,stock_symbol,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__20123_SHARP_));
}),new cljs.core.Keyword(null,"stocks","stocks",-617352902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,leboX.core.app_state)));
});
leboX.core.select_a_stock_BANG_ = (function leboX$core$select_a_stock_BANG_(stock_symbol){
cljs.core.swap_BANG_.call(null,leboX.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256)], null),cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.call(null,leboX.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"stock","stock",-877288674)], null),stock_symbol);

return cljs.core.println.call(null,cljs.core.deref.call(null,leboX.core.app_state));
});
leboX.core.select_a_duration_BANG_ = (function leboX$core$select_a_duration_BANG_(duration){
cljs.core.swap_BANG_.call(null,leboX.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),duration);

return cljs.core.println.call(null,cljs.core.deref.call(null,leboX.core.app_state));
});
leboX.core.portfolio_entry = (function leboX$core$portfolio_entry(data,owner){
if(typeof leboX.core.t_leboX$core20151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
leboX.core.t_leboX$core20151 = (function (portfolio_entry,data,owner,meta20152){
this.portfolio_entry = portfolio_entry;
this.data = data;
this.owner = owner;
this.meta20152 = meta20152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
leboX.core.t_leboX$core20151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20153,meta20152__$1){
var self__ = this;
var _20153__$1 = this;
return (new leboX.core.t_leboX$core20151(self__.portfolio_entry,self__.data,self__.owner,meta20152__$1));
});

leboX.core.t_leboX$core20151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20153){
var self__ = this;
var _20153__$1 = this;
return self__.meta20152;
});

leboX.core.t_leboX$core20151.prototype.om$core$IWillMount$ = true;

leboX.core.t_leboX$core20151.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__20154 = self__.data;
var map__20154__$1 = ((((!((map__20154 == null)))?((((map__20154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20154):map__20154);
var stock = cljs.core.get.call(null,map__20154__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var is_selected = cljs.core.get.call(null,map__20154__$1,new cljs.core.Keyword(null,"is-selected","is-selected",-334199992));
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__,map__20154,map__20154__$1,stock,is_selected,___$1){
return (function (){
var f__18931__auto__ = (function (){var switch__18909__auto__ = ((function (c__18930__auto__,map__20154,map__20154__$1,stock,is_selected,___$1){
return (function (state_20167){
var state_val_20168 = (state_20167[(1)]);
if((state_val_20168 === (1))){
var inst_20156 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock);
var inst_20157 = leboX.core.get_quote.call(null,inst_20156);
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20167__$1,(2),inst_20157);
} else {
if((state_val_20168 === (2))){
var inst_20159 = (state_20167[(2)]);
var inst_20160 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20161 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock);
var inst_20162 = leboX.core.get_stock_index_by_symbol.call(null,inst_20161);
var inst_20163 = [new cljs.core.Keyword(null,"stocks","stocks",-617352902),inst_20162];
var inst_20164 = (new cljs.core.PersistentVector(null,2,(5),inst_20160,inst_20163,null));
var inst_20165 = cljs.core.swap_BANG_.call(null,leboX.core.app_state,cljs.core.update_in,inst_20164,cljs.core.assoc,new cljs.core.Keyword(null,"quote","quote",-262615245),inst_20159);
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20167__$1,inst_20165);
} else {
return null;
}
}
});})(c__18930__auto__,map__20154,map__20154__$1,stock,is_selected,___$1))
;
return ((function (switch__18909__auto__,c__18930__auto__,map__20154,map__20154__$1,stock,is_selected,___$1){
return (function() {
var leboX$core$portfolio_entry_$_state_machine__18910__auto__ = null;
var leboX$core$portfolio_entry_$_state_machine__18910__auto____0 = (function (){
var statearr_20172 = [null,null,null,null,null,null,null];
(statearr_20172[(0)] = leboX$core$portfolio_entry_$_state_machine__18910__auto__);

(statearr_20172[(1)] = (1));

return statearr_20172;
});
var leboX$core$portfolio_entry_$_state_machine__18910__auto____1 = (function (state_20167){
while(true){
var ret_value__18911__auto__ = (function (){try{while(true){
var result__18912__auto__ = switch__18909__auto__.call(null,state_20167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18912__auto__;
}
break;
}
}catch (e20173){if((e20173 instanceof Object)){
var ex__18913__auto__ = e20173;
var statearr_20174_20178 = state_20167;
(statearr_20174_20178[(5)] = ex__18913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20179 = state_20167;
state_20167 = G__20179;
continue;
} else {
return ret_value__18911__auto__;
}
break;
}
});
leboX$core$portfolio_entry_$_state_machine__18910__auto__ = function(state_20167){
switch(arguments.length){
case 0:
return leboX$core$portfolio_entry_$_state_machine__18910__auto____0.call(this);
case 1:
return leboX$core$portfolio_entry_$_state_machine__18910__auto____1.call(this,state_20167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
leboX$core$portfolio_entry_$_state_machine__18910__auto__.cljs$core$IFn$_invoke$arity$0 = leboX$core$portfolio_entry_$_state_machine__18910__auto____0;
leboX$core$portfolio_entry_$_state_machine__18910__auto__.cljs$core$IFn$_invoke$arity$1 = leboX$core$portfolio_entry_$_state_machine__18910__auto____1;
return leboX$core$portfolio_entry_$_state_machine__18910__auto__;
})()
;})(switch__18909__auto__,c__18930__auto__,map__20154,map__20154__$1,stock,is_selected,___$1))
})();
var state__18932__auto__ = (function (){var statearr_20175 = f__18931__auto__.call(null);
(statearr_20175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_20175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__,map__20154,map__20154__$1,stock,is_selected,___$1))
);

return c__18930__auto__;
});

leboX.core.t_leboX$core20151.prototype.om$core$IRenderState$ = true;

leboX.core.t_leboX$core20151.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var map__20176 = self__.data;
var map__20176__$1 = ((((!((map__20176 == null)))?((((map__20176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20176):map__20176);
var stock = cljs.core.get.call(null,map__20176__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var is_selected = cljs.core.get.call(null,map__20176__$1,new cljs.core.Keyword(null,"is-selected","is-selected",-334199992));
return React.DOM.div({"className": (cljs.core.truth_(is_selected)?"col s12 m6 l3 selected-stock":"col s12 m6 l3"), "onClick": ((function (map__20176,map__20176__$1,stock,is_selected,this$__$1){
return (function (){
return leboX.core.select_a_stock_BANG_.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock));
});})(map__20176,map__20176__$1,stock,is_selected,this$__$1))
},om.util.force_children.call(null,React.DOM.div({"className": "card"},om.util.force_children.call(null,React.DOM.div({"className": "card-content black-text"},om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,React.DOM.i({"className": "mdi-social-group-add"},om.util.force_children.call(null,React.DOM.span({"className": "deep-orange-text text-lighten-2"},om.util.force_children.call(null,[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(stock))].join('')))),om.util.force_children.call(null," shares"))))),om.util.force_children.call(null,React.DOM.div({"className": "card-symbol"},om.util.force_children.call(null,React.DOM.img({"className": "stock-icon", "src": [cljs.core.str("img/"),cljs.core.str(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock)),cljs.core.str(".png")].join('')})),om.util.force_children.call(null,React.DOM.h4({"className": "card-stats-number"},om.util.force_children.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock)))))),om.util.force_children.call(null,React.DOM.p({"className": "card-stats-compare"},om.util.force_children.call(null,React.DOM.i({"className": "mdi-hardware-keyboard-arrow-up"})),om.util.force_children.call(null,"Price: "),om.util.force_children.call(null,React.DOM.span({"className": "deep-orange-text text-lighten-2"},om.util.force_children.call(null,[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(stock)),cljs.core.str(" $")].join('')))))))))));
});

leboX.core.t_leboX$core20151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"portfolio-entry","portfolio-entry",737376229,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20152","meta20152",-2007033120,null)], null);
});

leboX.core.t_leboX$core20151.cljs$lang$type = true;

leboX.core.t_leboX$core20151.cljs$lang$ctorStr = "leboX.core/t_leboX$core20151";

leboX.core.t_leboX$core20151.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"leboX.core/t_leboX$core20151");
});

leboX.core.__GT_t_leboX$core20151 = (function leboX$core$portfolio_entry_$___GT_t_leboX$core20151(portfolio_entry__$1,data__$1,owner__$1,meta20152){
return (new leboX.core.t_leboX$core20151(portfolio_entry__$1,data__$1,owner__$1,meta20152));
});

}

return (new leboX.core.t_leboX$core20151(leboX$core$portfolio_entry,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
leboX.core.get_lending_days = (function leboX$core$get_lending_days(duration){
var G__20181 = (((duration instanceof cljs.core.Keyword))?duration.fqn:null);
switch (G__20181) {
case "less-than-a-month":
return cljs.core.rand_int.call(null,(30));

break;
case "one-to-six-months":
return ((30) + cljs.core.rand_int.call(null,((5) * (30))));

break;
case "up-to-an-year":
return (((6) * (30)) + cljs.core.rand_int.call(null,((6) * (30))));

break;
case "sky-is-the-limit":
return (((12) * (30)) + cljs.core.rand_int.call(null,(10000000)));

break;
default:
return (0);

}
});
leboX.core.get_interest_rate = (function leboX$core$get_interest_rate(duration){
var G__20184 = (((duration instanceof cljs.core.Keyword))?duration.fqn:null);
switch (G__20184) {
case "less-than-a-month":
return 0.5;

break;
case "one-to-six-months":
return 0.7;

break;
case "up-to-an-year":
return (1);

break;
case "sky-is-the-limit":
return 1.5;

break;
default:
return (0);

}
});
leboX.core.get_return_date = (function leboX$core$get_return_date(lending_days){
var now = (new Date());
var return_date = (new Date(now.setDate((now.getDate() + lending_days))));
return return_date.toLocaleDateString("de-CH");
});
leboX.core.create_business_proposal = (function leboX$core$create_business_proposal(duration){
var lending_days = leboX.core.get_lending_days.call(null,duration);
var interest_rate = leboX.core.get_interest_rate.call(null,duration);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return-date","return-date",520965446),leboX.core.get_return_date.call(null,lending_days),new cljs.core.Keyword(null,"effective-interest-rate","effective-interest-rate",1237695577),((interest_rate * lending_days) / (36000)),new cljs.core.Keyword(null,"annualized-interest-rate","annualized-interest-rate",781068563),interest_rate], null);
});
leboX.core.lend_a_stock_BANG_ = (function leboX$core$lend_a_stock_BANG_(stock_symbol){
Materialize.toast([cljs.core.str("Transaction successfully commited")].join(''),(6000));

cljs.core.swap_BANG_.call(null,leboX.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stocks","stocks",-617352902),leboX.core.get_stock_index_by_symbol.call(null,stock_symbol)], null),cljs.core.assoc,new cljs.core.Keyword(null,"is-lent","is-lent",633422592),true);

return cljs.core.swap_BANG_.call(null,leboX.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256)], null),cljs.core.PersistentArrayMap.EMPTY);
});
leboX.core.proposal_dialog = (function leboX$core$proposal_dialog(app,owner){
if(typeof leboX.core.t_leboX$core20194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
leboX.core.t_leboX$core20194 = (function (proposal_dialog,app,owner,meta20195){
this.proposal_dialog = proposal_dialog;
this.app = app;
this.owner = owner;
this.meta20195 = meta20195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
leboX.core.t_leboX$core20194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20196,meta20195__$1){
var self__ = this;
var _20196__$1 = this;
return (new leboX.core.t_leboX$core20194(self__.proposal_dialog,self__.app,self__.owner,meta20195__$1));
});

leboX.core.t_leboX$core20194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20196){
var self__ = this;
var _20196__$1 = this;
return self__.meta20195;
});

leboX.core.t_leboX$core20194.prototype.om$core$IRenderState$ = true;

leboX.core.t_leboX$core20194.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var map__20197 = self__.app;
var map__20197__$1 = ((((!((map__20197 == null)))?((((map__20197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20197):map__20197);
var order = cljs.core.get.call(null,map__20197__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var stock = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__20197,map__20197__$1,order,this$__$1){
return (function (p1__20186_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__20186_SHARP_),new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(order));
});})(map__20197,map__20197__$1,order,this$__$1))
,new cljs.core.Keyword(null,"stocks","stocks",-617352902).cljs$core$IFn$_invoke$arity$1(self__.app)));
var capital_involved = (new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(stock) * new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(stock));
var map__20198 = leboX.core.create_business_proposal.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(order));
var map__20198__$1 = ((((!((map__20198 == null)))?((((map__20198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20198):map__20198);
var return_date = cljs.core.get.call(null,map__20198__$1,new cljs.core.Keyword(null,"return-date","return-date",520965446));
var effective_interest_rate = cljs.core.get.call(null,map__20198__$1,new cljs.core.Keyword(null,"effective-interest-rate","effective-interest-rate",1237695577));
var annualized_interest_rate = cljs.core.get.call(null,map__20198__$1,new cljs.core.Keyword(null,"annualized-interest-rate","annualized-interest-rate",781068563));
var capital_gain = (capital_involved * effective_interest_rate);
return React.DOM.div({"className": "modal"},om.util.force_children.call(null,React.DOM.div({"className": "modal-content proposal"},om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,[cljs.core.str("Proposal for "),cljs.core.str(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(order))].join('')))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Capital gain: "),cljs.core.str(capital_gain.toFixed((2)))].join('')))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Return data: "),cljs.core.str(return_date)].join('')))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Interest rate: "),cljs.core.str(annualized_interest_rate.toFixed((2))),cljs.core.str("% p.a)")].join('')))))),om.util.force_children.call(null,React.DOM.div({"className": "modal-footer"},om.util.force_children.call(null,React.DOM.a({"href": "#!", "className": "modal-action modal-close waves-effect waves-green btn-flat", "onClick": ((function (map__20197,map__20197__$1,order,stock,capital_involved,map__20198,map__20198__$1,return_date,effective_interest_rate,annualized_interest_rate,capital_gain,this$__$1){
return (function (){
return leboX.core.lend_a_stock_BANG_.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(order));
});})(map__20197,map__20197__$1,order,stock,capital_involved,map__20198,map__20198__$1,return_date,effective_interest_rate,annualized_interest_rate,capital_gain,this$__$1))
},om.util.force_children.call(null,"Agree"))),om.util.force_children.call(null,React.DOM.a({"href": "#!", "className": "modal-action modal-close waves-effect waves-green btn-flat"},om.util.force_children.call(null,"Disagree"))))));
});

leboX.core.t_leboX$core20194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"proposal-dialog","proposal-dialog",962558503,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20195","meta20195",265655893,null)], null);
});

leboX.core.t_leboX$core20194.cljs$lang$type = true;

leboX.core.t_leboX$core20194.cljs$lang$ctorStr = "leboX.core/t_leboX$core20194";

leboX.core.t_leboX$core20194.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"leboX.core/t_leboX$core20194");
});

leboX.core.__GT_t_leboX$core20194 = (function leboX$core$proposal_dialog_$___GT_t_leboX$core20194(proposal_dialog__$1,app__$1,owner__$1,meta20195){
return (new leboX.core.t_leboX$core20194(proposal_dialog__$1,app__$1,owner__$1,meta20195));
});

}

return (new leboX.core.t_leboX$core20194(leboX$core$proposal_dialog,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
leboX.core.get_portfolio_entry_data = (function leboX$core$get_portfolio_entry_data(stock,is_selected){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stock","stock",-877288674),stock,new cljs.core.Keyword(null,"is-selected","is-selected",-334199992),is_selected], null);
});
leboX.core.root_component = (function leboX$core$root_component(app,owner){
if(typeof leboX.core.t_leboX$core20206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
leboX.core.t_leboX$core20206 = (function (root_component,app,owner,meta20207){
this.root_component = root_component;
this.app = app;
this.owner = owner;
this.meta20207 = meta20207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
leboX.core.t_leboX$core20206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20208,meta20207__$1){
var self__ = this;
var _20208__$1 = this;
return (new leboX.core.t_leboX$core20206(self__.root_component,self__.app,self__.owner,meta20207__$1));
});

leboX.core.t_leboX$core20206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20208){
var self__ = this;
var _20208__$1 = this;
return self__.meta20207;
});

leboX.core.t_leboX$core20206.prototype.om$core$IRender$ = true;

leboX.core.t_leboX$core20206.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.util.force_children.call(null,om.core.build.call(null,leboX.core.proposal_dialog,self__.app)),om.util.force_children.call(null,React.DOM.div({"className": "row"},om.util.force_children.call(null,om.core.build_all.call(null,leboX.core.portfolio_entry,cljs.core.map.call(null,((function (___$1){
return (function (p1__20201_SHARP_){
return leboX.core.get_portfolio_entry_data.call(null,p1__20201_SHARP_,cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__20201_SHARP_)));
});})(___$1))
,cljs.core.filter.call(null,((function (___$1){
return (function (p1__20202_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"is-lent","is-lent",633422592).cljs$core$IFn$_invoke$arity$1(p1__20202_SHARP_));
});})(___$1))
,new cljs.core.Keyword(null,"stocks","stocks",-617352902).cljs$core$IFn$_invoke$arity$1(self__.app))))))),om.util.force_children.call(null,React.DOM.form({"action": "#", "className": (cljs.core.truth_(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)))?"visible":"invisible")},om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "less-than-a-month", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"less-than-a-month","less-than-a-month",-1270059257))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "less-than-a-month", "onClick": ((function (___$1){
return (function (){
return leboX.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"less-than-a-month","less-than-a-month",-1270059257));
});})(___$1))
},om.util.force_children.call(null,"Less than a month"))))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "one-to-six-months", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"one-to-six-months","one-to-six-months",-1488583101))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "one-to-six-months", "onClick": ((function (___$1){
return (function (){
return leboX.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"one-to-six-months","one-to-six-months",-1488583101));
});})(___$1))
},om.util.force_children.call(null,"One to six months"))))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "up-to-an-year", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"up-to-an-year","up-to-an-year",360583358))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "up-to-an-year", "onClick": ((function (___$1){
return (function (){
return leboX.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"up-to-an-year","up-to-an-year",360583358));
});})(___$1))
},om.util.force_children.call(null,"Up to an year"))))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "sky-is-the-limit", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"sky-is-the-limit","sky-is-the-limit",-1924262355))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "sky-is-the-limit", "onClick": ((function (___$1){
return (function (){
return leboX.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"sky-is-the-limit","sky-is-the-limit",-1924262355));
});})(___$1))
},om.util.force_children.call(null,"Sky is the limit"))))))),om.util.force_children.call(null,React.DOM.div({"className": "row"},om.util.force_children.call(null,React.DOM.button({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)))?"btn ok-button visible":"btn ok-button invisible"), "onClick": ((function (___$1){
return (function (){
return leboX.core.openProposalDialog.call(null);
});})(___$1))
},om.util.force_children.call(null,"OK"))))));
});

leboX.core.t_leboX$core20206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20207","meta20207",739478353,null)], null);
});

leboX.core.t_leboX$core20206.cljs$lang$type = true;

leboX.core.t_leboX$core20206.cljs$lang$ctorStr = "leboX.core/t_leboX$core20206";

leboX.core.t_leboX$core20206.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"leboX.core/t_leboX$core20206");
});

leboX.core.__GT_t_leboX$core20206 = (function leboX$core$root_component_$___GT_t_leboX$core20206(root_component__$1,app__$1,owner__$1,meta20207){
return (new leboX.core.t_leboX$core20206(root_component__$1,app__$1,owner__$1,meta20207));
});

}

return (new leboX.core.t_leboX$core20206(leboX$core$root_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,leboX.core.root_component,leboX.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=core.js.map