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
leboX.core.indices_of = (function leboX$core$indices_of(f,coll){
return cljs.core.keep_indexed.call(null,(function (p1__20633_SHARP_,p2__20632_SHARP_){
if(cljs.core.truth_(f.call(null,p2__20632_SHARP_))){
return p1__20633_SHARP_;
} else {
return null;
}
}),coll);
});
leboX.core.first_index_of = (function leboX$core$first_index_of(f,coll){
return cljs.core.first.call(null,leboX.core.indices_of.call(null,f,coll));
});
if(typeof leboX.core.app_state !== 'undefined'){
} else {
leboX.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stocks","stocks",-617352902),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"MSFT",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(112)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"AAPL",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(73)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"GOOG",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(31)], null)], null)], null));
}
leboX.core.quote_url = (function leboX$core$quote_url(stock_symbol){
return [cljs.core.str("https://query.yahooapis.com/v1/public/yql?q=select%20LastTradePriceOnly%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"),cljs.core.str(stock_symbol),cljs.core.str("%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")].join('');
});
leboX.core.get_quote = (function leboX$core$get_quote(stocks_symbol){
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18909__auto__ = ((function (c__18930__auto__){
return (function (state_20669){
var state_val_20670 = (state_20669[(1)]);
if((state_val_20670 === (1))){
var inst_20656 = leboX.core.quote_url.call(null,stocks_symbol);
var inst_20657 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20658 = [false];
var inst_20659 = cljs.core.PersistentHashMap.fromArrays(inst_20657,inst_20658);
var inst_20660 = cljs_http.client.get.call(null,inst_20656,inst_20659);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20669__$1,(2),inst_20660);
} else {
if((state_val_20670 === (2))){
var inst_20662 = (state_20669[(2)]);
var inst_20663 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20662);
var inst_20664 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(inst_20663);
var inst_20665 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(inst_20664);
var inst_20666 = new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(inst_20665);
var inst_20667 = new cljs.core.Keyword(null,"LastTradePriceOnly","LastTradePriceOnly",-40654953).cljs$core$IFn$_invoke$arity$1(inst_20666);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20669__$1,inst_20667);
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
var statearr_20674 = [null,null,null,null,null,null,null];
(statearr_20674[(0)] = leboX$core$get_quote_$_state_machine__18910__auto__);

(statearr_20674[(1)] = (1));

return statearr_20674;
});
var leboX$core$get_quote_$_state_machine__18910__auto____1 = (function (state_20669){
while(true){
var ret_value__18911__auto__ = (function (){try{while(true){
var result__18912__auto__ = switch__18909__auto__.call(null,state_20669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18912__auto__;
}
break;
}
}catch (e20675){if((e20675 instanceof Object)){
var ex__18913__auto__ = e20675;
var statearr_20676_20678 = state_20669;
(statearr_20676_20678[(5)] = ex__18913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20679 = state_20669;
state_20669 = G__20679;
continue;
} else {
return ret_value__18911__auto__;
}
break;
}
});
leboX$core$get_quote_$_state_machine__18910__auto__ = function(state_20669){
switch(arguments.length){
case 0:
return leboX$core$get_quote_$_state_machine__18910__auto____0.call(this);
case 1:
return leboX$core$get_quote_$_state_machine__18910__auto____1.call(this,state_20669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
leboX$core$get_quote_$_state_machine__18910__auto__.cljs$core$IFn$_invoke$arity$0 = leboX$core$get_quote_$_state_machine__18910__auto____0;
leboX$core$get_quote_$_state_machine__18910__auto__.cljs$core$IFn$_invoke$arity$1 = leboX$core$get_quote_$_state_machine__18910__auto____1;
return leboX$core$get_quote_$_state_machine__18910__auto__;
})()
;})(switch__18909__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_20677 = f__18931__auto__.call(null);
(statearr_20677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_20677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
});
leboX.core.get_lending_days = (function leboX$core$get_lending_days(duration){
var G__20681 = (((duration instanceof cljs.core.Keyword))?duration.fqn:null);
switch (G__20681) {
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
var G__20684 = (((duration instanceof cljs.core.Keyword))?duration.fqn:null);
switch (G__20684) {
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
leboX.core.get_stock_index_by_symbol = (function leboX$core$get_stock_index_by_symbol(stock_symbol){
return leboX.core.first_index_of.call(null,(function (p1__20686_SHARP_){
return cljs.core._EQ_.call(null,stock_symbol,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__20686_SHARP_));
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
if(typeof leboX.core.t_leboX$core20714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
leboX.core.t_leboX$core20714 = (function (portfolio_entry,data,owner,meta20715){
this.portfolio_entry = portfolio_entry;
this.data = data;
this.owner = owner;
this.meta20715 = meta20715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
leboX.core.t_leboX$core20714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20716,meta20715__$1){
var self__ = this;
var _20716__$1 = this;
return (new leboX.core.t_leboX$core20714(self__.portfolio_entry,self__.data,self__.owner,meta20715__$1));
});

leboX.core.t_leboX$core20714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20716){
var self__ = this;
var _20716__$1 = this;
return self__.meta20715;
});

leboX.core.t_leboX$core20714.prototype.om$core$IWillMount$ = true;

leboX.core.t_leboX$core20714.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__20717 = self__.data;
var map__20717__$1 = ((((!((map__20717 == null)))?((((map__20717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20717):map__20717);
var stock = cljs.core.get.call(null,map__20717__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var is_selected = cljs.core.get.call(null,map__20717__$1,new cljs.core.Keyword(null,"is-selected","is-selected",-334199992));
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__,map__20717,map__20717__$1,stock,is_selected,___$1){
return (function (){
var f__18931__auto__ = (function (){var switch__18909__auto__ = ((function (c__18930__auto__,map__20717,map__20717__$1,stock,is_selected,___$1){
return (function (state_20730){
var state_val_20731 = (state_20730[(1)]);
if((state_val_20731 === (1))){
var inst_20719 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock);
var inst_20720 = leboX.core.get_quote.call(null,inst_20719);
var state_20730__$1 = state_20730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20730__$1,(2),inst_20720);
} else {
if((state_val_20731 === (2))){
var inst_20722 = (state_20730[(2)]);
var inst_20723 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20724 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock);
var inst_20725 = leboX.core.get_stock_index_by_symbol.call(null,inst_20724);
var inst_20726 = [new cljs.core.Keyword(null,"stocks","stocks",-617352902),inst_20725];
var inst_20727 = (new cljs.core.PersistentVector(null,2,(5),inst_20723,inst_20726,null));
var inst_20728 = cljs.core.swap_BANG_.call(null,leboX.core.app_state,cljs.core.update_in,inst_20727,cljs.core.assoc,new cljs.core.Keyword(null,"quote","quote",-262615245),inst_20722);
var state_20730__$1 = state_20730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20730__$1,inst_20728);
} else {
return null;
}
}
});})(c__18930__auto__,map__20717,map__20717__$1,stock,is_selected,___$1))
;
return ((function (switch__18909__auto__,c__18930__auto__,map__20717,map__20717__$1,stock,is_selected,___$1){
return (function() {
var leboX$core$portfolio_entry_$_state_machine__18910__auto__ = null;
var leboX$core$portfolio_entry_$_state_machine__18910__auto____0 = (function (){
var statearr_20735 = [null,null,null,null,null,null,null];
(statearr_20735[(0)] = leboX$core$portfolio_entry_$_state_machine__18910__auto__);

(statearr_20735[(1)] = (1));

return statearr_20735;
});
var leboX$core$portfolio_entry_$_state_machine__18910__auto____1 = (function (state_20730){
while(true){
var ret_value__18911__auto__ = (function (){try{while(true){
var result__18912__auto__ = switch__18909__auto__.call(null,state_20730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18912__auto__;
}
break;
}
}catch (e20736){if((e20736 instanceof Object)){
var ex__18913__auto__ = e20736;
var statearr_20737_20741 = state_20730;
(statearr_20737_20741[(5)] = ex__18913__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20742 = state_20730;
state_20730 = G__20742;
continue;
} else {
return ret_value__18911__auto__;
}
break;
}
});
leboX$core$portfolio_entry_$_state_machine__18910__auto__ = function(state_20730){
switch(arguments.length){
case 0:
return leboX$core$portfolio_entry_$_state_machine__18910__auto____0.call(this);
case 1:
return leboX$core$portfolio_entry_$_state_machine__18910__auto____1.call(this,state_20730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
leboX$core$portfolio_entry_$_state_machine__18910__auto__.cljs$core$IFn$_invoke$arity$0 = leboX$core$portfolio_entry_$_state_machine__18910__auto____0;
leboX$core$portfolio_entry_$_state_machine__18910__auto__.cljs$core$IFn$_invoke$arity$1 = leboX$core$portfolio_entry_$_state_machine__18910__auto____1;
return leboX$core$portfolio_entry_$_state_machine__18910__auto__;
})()
;})(switch__18909__auto__,c__18930__auto__,map__20717,map__20717__$1,stock,is_selected,___$1))
})();
var state__18932__auto__ = (function (){var statearr_20738 = f__18931__auto__.call(null);
(statearr_20738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_20738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__,map__20717,map__20717__$1,stock,is_selected,___$1))
);

return c__18930__auto__;
});

leboX.core.t_leboX$core20714.prototype.om$core$IRenderState$ = true;

leboX.core.t_leboX$core20714.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var map__20739 = self__.data;
var map__20739__$1 = ((((!((map__20739 == null)))?((((map__20739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20739):map__20739);
var stock = cljs.core.get.call(null,map__20739__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var is_selected = cljs.core.get.call(null,map__20739__$1,new cljs.core.Keyword(null,"is-selected","is-selected",-334199992));
return React.DOM.div({"className": (cljs.core.truth_(is_selected)?"col s12 m6 l3 selected-stock":"col s12 m6 l3"), "onClick": ((function (map__20739,map__20739__$1,stock,is_selected,this$__$1){
return (function (){
return leboX.core.select_a_stock_BANG_.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock));
});})(map__20739,map__20739__$1,stock,is_selected,this$__$1))
},om.util.force_children.call(null,React.DOM.div({"className": "card"},om.util.force_children.call(null,React.DOM.div({"className": "card-content black-text"},om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,React.DOM.i({"className": "mdi-social-group-add"},om.util.force_children.call(null,React.DOM.span({"className": "deep-orange-text text-lighten-2"},om.util.force_children.call(null,[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(stock))].join('')))),om.util.force_children.call(null," shares"))))),om.util.force_children.call(null,React.DOM.div({"className": "card-symbol"},om.util.force_children.call(null,React.DOM.img({"className": "stock-icon", "src": [cljs.core.str("img/"),cljs.core.str(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock)),cljs.core.str(".png")].join('')})),om.util.force_children.call(null,React.DOM.h4({"className": "card-stats-number"},om.util.force_children.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock)))))),om.util.force_children.call(null,React.DOM.p({"className": "card-stats-compare"},om.util.force_children.call(null,React.DOM.i({"className": "mdi-hardware-keyboard-arrow-up"})),om.util.force_children.call(null,"Price: "),om.util.force_children.call(null,React.DOM.span({"className": "deep-orange-text text-lighten-2"},om.util.force_children.call(null,[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(stock)),cljs.core.str(" $")].join('')))))))))));
});

leboX.core.t_leboX$core20714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"portfolio-entry","portfolio-entry",737376229,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20715","meta20715",1411769164,null)], null);
});

leboX.core.t_leboX$core20714.cljs$lang$type = true;

leboX.core.t_leboX$core20714.cljs$lang$ctorStr = "leboX.core/t_leboX$core20714";

leboX.core.t_leboX$core20714.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"leboX.core/t_leboX$core20714");
});

leboX.core.__GT_t_leboX$core20714 = (function leboX$core$portfolio_entry_$___GT_t_leboX$core20714(portfolio_entry__$1,data__$1,owner__$1,meta20715){
return (new leboX.core.t_leboX$core20714(portfolio_entry__$1,data__$1,owner__$1,meta20715));
});

}

return (new leboX.core.t_leboX$core20714(leboX$core$portfolio_entry,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
leboX.core.lend_a_stock_BANG_ = (function leboX$core$lend_a_stock_BANG_(stock_symbol){
Materialize.toast([cljs.core.str("Transaction successfully commited")].join(''),(6000));

cljs.core.swap_BANG_.call(null,leboX.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stocks","stocks",-617352902),leboX.core.get_stock_index_by_symbol.call(null,stock_symbol)], null),cljs.core.assoc,new cljs.core.Keyword(null,"is-lent","is-lent",633422592),true);

return cljs.core.swap_BANG_.call(null,leboX.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256)], null),cljs.core.PersistentArrayMap.EMPTY);
});
leboX.core.proposal_dialog = (function leboX$core$proposal_dialog(data,owner){
if(typeof leboX.core.t_leboX$core20751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
leboX.core.t_leboX$core20751 = (function (proposal_dialog,data,owner,meta20752){
this.proposal_dialog = proposal_dialog;
this.data = data;
this.owner = owner;
this.meta20752 = meta20752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
leboX.core.t_leboX$core20751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20753,meta20752__$1){
var self__ = this;
var _20753__$1 = this;
return (new leboX.core.t_leboX$core20751(self__.proposal_dialog,self__.data,self__.owner,meta20752__$1));
});

leboX.core.t_leboX$core20751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20753){
var self__ = this;
var _20753__$1 = this;
return self__.meta20752;
});

leboX.core.t_leboX$core20751.prototype.om$core$IRenderState$ = true;

leboX.core.t_leboX$core20751.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var map__20754 = self__.data;
var map__20754__$1 = ((((!((map__20754 == null)))?((((map__20754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20754):map__20754);
var order = cljs.core.get.call(null,map__20754__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var stock = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__20754,map__20754__$1,order,this$__$1){
return (function (p1__20743_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__20743_SHARP_),new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(order));
});})(map__20754,map__20754__$1,order,this$__$1))
,new cljs.core.Keyword(null,"stocks","stocks",-617352902).cljs$core$IFn$_invoke$arity$1(self__.data)));
var capital_involved = (new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(stock) * new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(stock));
var map__20755 = leboX.core.create_business_proposal.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(order));
var map__20755__$1 = ((((!((map__20755 == null)))?((((map__20755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20755):map__20755);
var return_date = cljs.core.get.call(null,map__20755__$1,new cljs.core.Keyword(null,"return-date","return-date",520965446));
var effective_interest_rate = cljs.core.get.call(null,map__20755__$1,new cljs.core.Keyword(null,"effective-interest-rate","effective-interest-rate",1237695577));
var annualized_interest_rate = cljs.core.get.call(null,map__20755__$1,new cljs.core.Keyword(null,"annualized-interest-rate","annualized-interest-rate",781068563));
var capital_gain = (capital_involved * effective_interest_rate);
return React.DOM.div({"className": "modal"},om.util.force_children.call(null,React.DOM.div({"className": "modal-content proposal"},om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,[cljs.core.str("Proposal for "),cljs.core.str(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(order))].join('')))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Capital gain: "),cljs.core.str(capital_gain.toFixed((2)))].join('')))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Return data: "),cljs.core.str(return_date)].join('')))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Interest rate: "),cljs.core.str(annualized_interest_rate.toFixed((2))),cljs.core.str("% p.a)")].join('')))))),om.util.force_children.call(null,React.DOM.div({"className": "modal-footer"},om.util.force_children.call(null,React.DOM.a({"href": "#!", "className": "modal-action modal-close waves-effect waves-green btn-flat", "onClick": ((function (map__20754,map__20754__$1,order,stock,capital_involved,map__20755,map__20755__$1,return_date,effective_interest_rate,annualized_interest_rate,capital_gain,this$__$1){
return (function (){
return leboX.core.lend_a_stock_BANG_.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(order));
});})(map__20754,map__20754__$1,order,stock,capital_involved,map__20755,map__20755__$1,return_date,effective_interest_rate,annualized_interest_rate,capital_gain,this$__$1))
},om.util.force_children.call(null,"Agree"))),om.util.force_children.call(null,React.DOM.a({"href": "#!", "className": "modal-action modal-close waves-effect waves-green btn-flat"},om.util.force_children.call(null,"Disagree"))))));
});

leboX.core.t_leboX$core20751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"proposal-dialog","proposal-dialog",962558503,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20752","meta20752",1802780452,null)], null);
});

leboX.core.t_leboX$core20751.cljs$lang$type = true;

leboX.core.t_leboX$core20751.cljs$lang$ctorStr = "leboX.core/t_leboX$core20751";

leboX.core.t_leboX$core20751.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"leboX.core/t_leboX$core20751");
});

leboX.core.__GT_t_leboX$core20751 = (function leboX$core$proposal_dialog_$___GT_t_leboX$core20751(proposal_dialog__$1,data__$1,owner__$1,meta20752){
return (new leboX.core.t_leboX$core20751(proposal_dialog__$1,data__$1,owner__$1,meta20752));
});

}

return (new leboX.core.t_leboX$core20751(leboX$core$proposal_dialog,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
leboX.core.get_portfolio_entry_data = (function leboX$core$get_portfolio_entry_data(stock,is_selected){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stock","stock",-877288674),stock,new cljs.core.Keyword(null,"is-selected","is-selected",-334199992),is_selected], null);
});
leboX.core.root_component = (function leboX$core$root_component(data,owner){
if(typeof leboX.core.t_leboX$core20763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
leboX.core.t_leboX$core20763 = (function (root_component,data,owner,meta20764){
this.root_component = root_component;
this.data = data;
this.owner = owner;
this.meta20764 = meta20764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
leboX.core.t_leboX$core20763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20765,meta20764__$1){
var self__ = this;
var _20765__$1 = this;
return (new leboX.core.t_leboX$core20763(self__.root_component,self__.data,self__.owner,meta20764__$1));
});

leboX.core.t_leboX$core20763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20765){
var self__ = this;
var _20765__$1 = this;
return self__.meta20764;
});

leboX.core.t_leboX$core20763.prototype.om$core$IRender$ = true;

leboX.core.t_leboX$core20763.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.util.force_children.call(null,om.core.build.call(null,leboX.core.proposal_dialog,self__.data)),om.util.force_children.call(null,React.DOM.div({"className": "row"},om.util.force_children.call(null,om.core.build_all.call(null,leboX.core.portfolio_entry,cljs.core.map.call(null,((function (___$1){
return (function (p1__20758_SHARP_){
return leboX.core.get_portfolio_entry_data.call(null,p1__20758_SHARP_,cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__20758_SHARP_)));
});})(___$1))
,cljs.core.filter.call(null,((function (___$1){
return (function (p1__20759_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"is-lent","is-lent",633422592).cljs$core$IFn$_invoke$arity$1(p1__20759_SHARP_));
});})(___$1))
,new cljs.core.Keyword(null,"stocks","stocks",-617352902).cljs$core$IFn$_invoke$arity$1(self__.data))))))),om.util.force_children.call(null,React.DOM.form({"action": "#", "className": (cljs.core.truth_(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.data)))?"visible":"invisible")},om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "less-than-a-month", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"less-than-a-month","less-than-a-month",-1270059257))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "less-than-a-month", "onClick": ((function (___$1){
return (function (){
return leboX.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"less-than-a-month","less-than-a-month",-1270059257));
});})(___$1))
},om.util.force_children.call(null,"Less than a month"))))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "one-to-six-months", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"one-to-six-months","one-to-six-months",-1488583101))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "one-to-six-months", "onClick": ((function (___$1){
return (function (){
return leboX.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"one-to-six-months","one-to-six-months",-1488583101));
});})(___$1))
},om.util.force_children.call(null,"One to six months"))))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "up-to-an-year", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"up-to-an-year","up-to-an-year",360583358))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "up-to-an-year", "onClick": ((function (___$1){
return (function (){
return leboX.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"up-to-an-year","up-to-an-year",360583358));
});})(___$1))
},om.util.force_children.call(null,"Up to an year"))))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "sky-is-the-limit", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"sky-is-the-limit","sky-is-the-limit",-1924262355))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "sky-is-the-limit", "onClick": ((function (___$1){
return (function (){
return leboX.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"sky-is-the-limit","sky-is-the-limit",-1924262355));
});})(___$1))
},om.util.force_children.call(null,"Sky is the limit"))))))),om.util.force_children.call(null,React.DOM.div({"className": "row"},om.util.force_children.call(null,React.DOM.button({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.data)))?"btn ok-button visible":"btn ok-button invisible"), "onClick": ((function (___$1){
return (function (){
return leboX.core.openProposalDialog.call(null);
});})(___$1))
},om.util.force_children.call(null,"OK"))))));
});

leboX.core.t_leboX$core20763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20764","meta20764",-29163905,null)], null);
});

leboX.core.t_leboX$core20763.cljs$lang$type = true;

leboX.core.t_leboX$core20763.cljs$lang$ctorStr = "leboX.core/t_leboX$core20763";

leboX.core.t_leboX$core20763.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"leboX.core/t_leboX$core20763");
});

leboX.core.__GT_t_leboX$core20763 = (function leboX$core$root_component_$___GT_t_leboX$core20763(root_component__$1,data__$1,owner__$1,meta20764){
return (new leboX.core.t_leboX$core20763(root_component__$1,data__$1,owner__$1,meta20764));
});

}

return (new leboX.core.t_leboX$core20763(leboX$core$root_component,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,leboX.core.root_component,leboX.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=core.js.map