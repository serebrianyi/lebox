// Compiled by ClojureScript 1.7.170 {}
goog.provide('test.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
test.core.jquery = $;
test.core.openProposalDialog = (function test$core$openProposalDialog(){
return test.core.jquery.call(null,(function (){
return cljs.core.println.call(null,test.core.jquery.call(null,".modal").openModal());
}));
});
test.core.quote_url = (function test$core$quote_url(stock_symbol){
return [cljs.core.str("https://query.yahooapis.com/v1/public/yql?q=select%20LastTradePriceOnly%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"),cljs.core.str(stock_symbol),cljs.core.str("%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")].join('');
});
test.core.get_quote = (function test$core$get_quote(stocks_symbol){
var c__19058__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19058__auto__){
return (function (){
var f__19059__auto__ = (function (){var switch__19037__auto__ = ((function (c__19058__auto__){
return (function (state_43559){
var state_val_43560 = (state_43559[(1)]);
if((state_val_43560 === (1))){
var inst_43546 = test.core.quote_url.call(null,stocks_symbol);
var inst_43547 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_43548 = [false];
var inst_43549 = cljs.core.PersistentHashMap.fromArrays(inst_43547,inst_43548);
var inst_43550 = cljs_http.client.get.call(null,inst_43546,inst_43549);
var state_43559__$1 = state_43559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43559__$1,(2),inst_43550);
} else {
if((state_val_43560 === (2))){
var inst_43552 = (state_43559[(2)]);
var inst_43553 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_43552);
var inst_43554 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(inst_43553);
var inst_43555 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(inst_43554);
var inst_43556 = new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(inst_43555);
var inst_43557 = new cljs.core.Keyword(null,"LastTradePriceOnly","LastTradePriceOnly",-40654953).cljs$core$IFn$_invoke$arity$1(inst_43556);
var state_43559__$1 = state_43559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43559__$1,inst_43557);
} else {
return null;
}
}
});})(c__19058__auto__))
;
return ((function (switch__19037__auto__,c__19058__auto__){
return (function() {
var test$core$get_quote_$_state_machine__19038__auto__ = null;
var test$core$get_quote_$_state_machine__19038__auto____0 = (function (){
var statearr_43564 = [null,null,null,null,null,null,null];
(statearr_43564[(0)] = test$core$get_quote_$_state_machine__19038__auto__);

(statearr_43564[(1)] = (1));

return statearr_43564;
});
var test$core$get_quote_$_state_machine__19038__auto____1 = (function (state_43559){
while(true){
var ret_value__19039__auto__ = (function (){try{while(true){
var result__19040__auto__ = switch__19037__auto__.call(null,state_43559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19040__auto__;
}
break;
}
}catch (e43565){if((e43565 instanceof Object)){
var ex__19041__auto__ = e43565;
var statearr_43566_43568 = state_43559;
(statearr_43566_43568[(5)] = ex__19041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43569 = state_43559;
state_43559 = G__43569;
continue;
} else {
return ret_value__19039__auto__;
}
break;
}
});
test$core$get_quote_$_state_machine__19038__auto__ = function(state_43559){
switch(arguments.length){
case 0:
return test$core$get_quote_$_state_machine__19038__auto____0.call(this);
case 1:
return test$core$get_quote_$_state_machine__19038__auto____1.call(this,state_43559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test$core$get_quote_$_state_machine__19038__auto__.cljs$core$IFn$_invoke$arity$0 = test$core$get_quote_$_state_machine__19038__auto____0;
test$core$get_quote_$_state_machine__19038__auto__.cljs$core$IFn$_invoke$arity$1 = test$core$get_quote_$_state_machine__19038__auto____1;
return test$core$get_quote_$_state_machine__19038__auto__;
})()
;})(switch__19037__auto__,c__19058__auto__))
})();
var state__19060__auto__ = (function (){var statearr_43567 = f__19059__auto__.call(null);
(statearr_43567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19058__auto__);

return statearr_43567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19060__auto__);
});})(c__19058__auto__))
);

return c__19058__auto__;
});
if(typeof test.core.app_state !== 'undefined'){
} else {
test.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stocks","stocks",-617352902),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"MSFT",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(50)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"AAPL",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(50)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"GOOG",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(50)], null)], null)], null));
}
test.core.indices_of = (function test$core$indices_of(f,coll){
return cljs.core.keep_indexed.call(null,(function (p1__43571_SHARP_,p2__43570_SHARP_){
if(cljs.core.truth_(f.call(null,p2__43570_SHARP_))){
return p1__43571_SHARP_;
} else {
return null;
}
}),coll);
});
test.core.first_index_of = (function test$core$first_index_of(f,coll){
return cljs.core.first.call(null,test.core.indices_of.call(null,f,coll));
});
test.core.get_stock_index_by_symbol = (function test$core$get_stock_index_by_symbol(stock_symbol){
return test.core.first_index_of.call(null,(function (p1__43572_SHARP_){
return cljs.core._EQ_.call(null,stock_symbol,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__43572_SHARP_));
}),new cljs.core.Keyword(null,"stocks","stocks",-617352902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test.core.app_state)));
});
test.core.select_a_stock_BANG_ = (function test$core$select_a_stock_BANG_(stock_symbol){
cljs.core.swap_BANG_.call(null,test.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256)], null),cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.call(null,test.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"stock","stock",-877288674)], null),stock_symbol);

return cljs.core.println.call(null,cljs.core.deref.call(null,test.core.app_state));
});
test.core.select_a_duration_BANG_ = (function test$core$select_a_duration_BANG_(duration){
cljs.core.swap_BANG_.call(null,test.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),duration);

return cljs.core.println.call(null,cljs.core.deref.call(null,test.core.app_state));
});
test.core.portfolio_entry = (function test$core$portfolio_entry(data,owner){
if(typeof test.core.t_test$core43578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
test.core.t_test$core43578 = (function (portfolio_entry,data,owner,meta43579){
this.portfolio_entry = portfolio_entry;
this.data = data;
this.owner = owner;
this.meta43579 = meta43579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
test.core.t_test$core43578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43580,meta43579__$1){
var self__ = this;
var _43580__$1 = this;
return (new test.core.t_test$core43578(self__.portfolio_entry,self__.data,self__.owner,meta43579__$1));
});

test.core.t_test$core43578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43580){
var self__ = this;
var _43580__$1 = this;
return self__.meta43579;
});

test.core.t_test$core43578.prototype.om$core$IRenderState$ = true;

test.core.t_test$core43578.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var map__43581 = self__.data;
var map__43581__$1 = ((((!((map__43581 == null)))?((((map__43581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43581):map__43581);
var stock = cljs.core.get.call(null,map__43581__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var is_selected = cljs.core.get.call(null,map__43581__$1,new cljs.core.Keyword(null,"is-selected","is-selected",-334199992));
return React.DOM.div({"className": (cljs.core.truth_(is_selected)?"col s12 m6 l3 selected-stock":"col s12 m6 l3"), "onClick": ((function (map__43581,map__43581__$1,stock,is_selected,this$__$1){
return (function (){
return test.core.select_a_stock_BANG_.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock));
});})(map__43581,map__43581__$1,stock,is_selected,this$__$1))
},om.util.force_children.call(null,React.DOM.div({"className": "card"},om.util.force_children.call(null,React.DOM.div({"className": "card-content black-text"},om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,React.DOM.i({"className": "mdi-social-group-add"},om.util.force_children.call(null,React.DOM.span({"className": "deep-orange-text text-lighten-2"},om.util.force_children.call(null,[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(stock))].join('')))),om.util.force_children.call(null," shares"))))),om.util.force_children.call(null,React.DOM.div({"className": "card-symbol"},om.util.force_children.call(null,React.DOM.img({"className": "stock-icon", "src": [cljs.core.str("img/"),cljs.core.str(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock)),cljs.core.str(".png")].join('')})),om.util.force_children.call(null,React.DOM.h4({"className": "card-stats-number"},om.util.force_children.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(stock)))))),om.util.force_children.call(null,React.DOM.p({"className": "card-stats-compare"},om.util.force_children.call(null,React.DOM.i({"className": "mdi-hardware-keyboard-arrow-up"})),om.util.force_children.call(null,"Price: "),om.util.force_children.call(null,React.DOM.span({"className": "deep-orange-text text-lighten-2"},om.util.force_children.call(null,[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(stock)),cljs.core.str(" $")].join('')))))))))));
});

test.core.t_test$core43578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"portfolio-entry","portfolio-entry",737376229,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43579","meta43579",-131524364,null)], null);
});

test.core.t_test$core43578.cljs$lang$type = true;

test.core.t_test$core43578.cljs$lang$ctorStr = "test.core/t_test$core43578";

test.core.t_test$core43578.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"test.core/t_test$core43578");
});

test.core.__GT_t_test$core43578 = (function test$core$portfolio_entry_$___GT_t_test$core43578(portfolio_entry__$1,data__$1,owner__$1,meta43579){
return (new test.core.t_test$core43578(portfolio_entry__$1,data__$1,owner__$1,meta43579));
});

}

return (new test.core.t_test$core43578(test$core$portfolio_entry,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
test.core.get_lending_days = (function test$core$get_lending_days(duration){
var G__43584 = (((duration instanceof cljs.core.Keyword))?duration.fqn:null);
switch (G__43584) {
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
test.core.get_interest_rate = (function test$core$get_interest_rate(duration){
var G__43587 = (((duration instanceof cljs.core.Keyword))?duration.fqn:null);
switch (G__43587) {
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
test.core.get_return_date = (function test$core$get_return_date(lending_days){
var now = (new Date());
var return_date = (new Date(now.setDate((now.getDate() + lending_days))));
return return_date.toLocaleDateString("de-CH");
});
test.core.create_business_proposal = (function test$core$create_business_proposal(duration){
var lending_days = test.core.get_lending_days.call(null,duration);
var interest_rate = test.core.get_interest_rate.call(null,duration);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return-date","return-date",520965446),test.core.get_return_date.call(null,lending_days),new cljs.core.Keyword(null,"effective-interest-rate","effective-interest-rate",1237695577),((interest_rate * lending_days) / (36000)),new cljs.core.Keyword(null,"annualized-interest-rate","annualized-interest-rate",781068563),interest_rate], null);
});
test.core.proposal_dialog = (function test$core$proposal_dialog(app,owner){
if(typeof test.core.t_test$core43597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
test.core.t_test$core43597 = (function (proposal_dialog,app,owner,meta43598){
this.proposal_dialog = proposal_dialog;
this.app = app;
this.owner = owner;
this.meta43598 = meta43598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
test.core.t_test$core43597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43599,meta43598__$1){
var self__ = this;
var _43599__$1 = this;
return (new test.core.t_test$core43597(self__.proposal_dialog,self__.app,self__.owner,meta43598__$1));
});

test.core.t_test$core43597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43599){
var self__ = this;
var _43599__$1 = this;
return self__.meta43598;
});

test.core.t_test$core43597.prototype.om$core$IRenderState$ = true;

test.core.t_test$core43597.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var map__43600 = self__.app;
var map__43600__$1 = ((((!((map__43600 == null)))?((((map__43600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43600):map__43600);
var order = cljs.core.get.call(null,map__43600__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var stock = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__43600,map__43600__$1,order,this$__$1){
return (function (p1__43589_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__43589_SHARP_),new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(order));
});})(map__43600,map__43600__$1,order,this$__$1))
,new cljs.core.Keyword(null,"stocks","stocks",-617352902).cljs$core$IFn$_invoke$arity$1(self__.app)));
var capital_involved = (new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(stock) * new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(stock));
var map__43601 = test.core.create_business_proposal.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(order));
var map__43601__$1 = ((((!((map__43601 == null)))?((((map__43601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43601):map__43601);
var return_date = cljs.core.get.call(null,map__43601__$1,new cljs.core.Keyword(null,"return-date","return-date",520965446));
var effective_interest_rate = cljs.core.get.call(null,map__43601__$1,new cljs.core.Keyword(null,"effective-interest-rate","effective-interest-rate",1237695577));
var annualized_interest_rate = cljs.core.get.call(null,map__43601__$1,new cljs.core.Keyword(null,"annualized-interest-rate","annualized-interest-rate",781068563));
var capital_gain = (capital_involved * effective_interest_rate);
return React.DOM.div({"className": "modal"},om.util.force_children.call(null,React.DOM.div({"className": "modal-content"},om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,[cljs.core.str("Proposal for "),cljs.core.str(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(order))].join('')))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("You will gain "),cljs.core.str(capital_gain.toFixed((2))),cljs.core.str(" until "),cljs.core.str(return_date),cljs.core.str(" ("),cljs.core.str(annualized_interest_rate.toFixed((2))),cljs.core.str("% p.a)")].join('')))))),om.util.force_children.call(null,React.DOM.div({"className": "modal-footer"},om.util.force_children.call(null,React.DOM.a({"href": "#!", "className": "modal-action modal-close waves-effect waves-green btn-flat"},om.util.force_children.call(null,"Agree"))),om.util.force_children.call(null,React.DOM.a({"href": "#!", "className": "modal-action modal-close waves-effect waves-green btn-flat"},om.util.force_children.call(null,"Disagree"))))));
});

test.core.t_test$core43597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"proposal-dialog","proposal-dialog",962558503,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43598","meta43598",1072595215,null)], null);
});

test.core.t_test$core43597.cljs$lang$type = true;

test.core.t_test$core43597.cljs$lang$ctorStr = "test.core/t_test$core43597";

test.core.t_test$core43597.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"test.core/t_test$core43597");
});

test.core.__GT_t_test$core43597 = (function test$core$proposal_dialog_$___GT_t_test$core43597(proposal_dialog__$1,app__$1,owner__$1,meta43598){
return (new test.core.t_test$core43597(proposal_dialog__$1,app__$1,owner__$1,meta43598));
});

}

return (new test.core.t_test$core43597(test$core$proposal_dialog,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
test.core.get_portfolio_entry_data = (function test$core$get_portfolio_entry_data(stock,is_selected){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stock","stock",-877288674),stock,new cljs.core.Keyword(null,"is-selected","is-selected",-334199992),is_selected], null);
});
test.core.root_component = (function test$core$root_component(app,owner){
if(typeof test.core.t_test$core43609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
test.core.t_test$core43609 = (function (root_component,app,owner,meta43610){
this.root_component = root_component;
this.app = app;
this.owner = owner;
this.meta43610 = meta43610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
test.core.t_test$core43609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43611,meta43610__$1){
var self__ = this;
var _43611__$1 = this;
return (new test.core.t_test$core43609(self__.root_component,self__.app,self__.owner,meta43610__$1));
});

test.core.t_test$core43609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43611){
var self__ = this;
var _43611__$1 = this;
return self__.meta43610;
});

test.core.t_test$core43609.prototype.om$core$IRender$ = true;

test.core.t_test$core43609.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.util.force_children.call(null,om.core.build.call(null,test.core.proposal_dialog,self__.app)),om.util.force_children.call(null,React.DOM.div({"className": "row"},om.util.force_children.call(null,om.core.build_all.call(null,test.core.portfolio_entry,cljs.core.map.call(null,((function (___$1){
return (function (p1__43604_SHARP_){
return test.core.get_portfolio_entry_data.call(null,p1__43604_SHARP_,cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__43604_SHARP_)));
});})(___$1))
,cljs.core.filter.call(null,((function (___$1){
return (function (p1__43605_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"is-lent","is-lent",633422592).cljs$core$IFn$_invoke$arity$1(p1__43605_SHARP_));
});})(___$1))
,new cljs.core.Keyword(null,"stocks","stocks",-617352902).cljs$core$IFn$_invoke$arity$1(self__.app))))))),om.util.force_children.call(null,React.DOM.form({"action": "#", "className": (cljs.core.truth_(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)))?"visible":"invisible")},om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "less-than-a-month", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"less-than-a-month","less-than-a-month",-1270059257))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "less-than-a-month", "onClick": ((function (___$1){
return (function (){
return test.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"less-than-a-month","less-than-a-month",-1270059257));
});})(___$1))
},om.util.force_children.call(null,"Less than a month"))))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "one-to-six-months", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"one-to-six-months","one-to-six-months",-1488583101))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "one-to-six-months", "onClick": ((function (___$1){
return (function (){
return test.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"one-to-six-months","one-to-six-months",-1488583101));
});})(___$1))
},om.util.force_children.call(null,"One to six months"))))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "up-to-an-year", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"up-to-an-year","up-to-an-year",360583358))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "up-to-an-year", "onClick": ((function (___$1){
return (function (){
return test.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"up-to-an-year","up-to-an-year",360583358));
});})(___$1))
},om.util.force_children.call(null,"Up to an year"))))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,om.dom.input.call(null,{"name": "duration", "type": "radio", "id": "sky-is-the-limit", "checked": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.Keyword(null,"sky-is-the-limit","sky-is-the-limit",-1924262355))})),om.util.force_children.call(null,React.DOM.label({"htmlFor": "sky-is-the-limit", "onClick": ((function (___$1){
return (function (){
return test.core.select_a_duration_BANG_.call(null,new cljs.core.Keyword(null,"sky-is-the-limit","sky-is-the-limit",-1924262355));
});})(___$1))
},om.util.force_children.call(null,"Sky is the limit"))))))),om.util.force_children.call(null,React.DOM.div({"className": "row"},om.util.force_children.call(null,React.DOM.button({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(self__.app)))?"btn ok-button visible":"btn ok-button invisible"), "onClick": ((function (___$1){
return (function (){
return test.core.openProposalDialog.call(null);
});})(___$1))
},om.util.force_children.call(null,"OK"))))));
});

test.core.t_test$core43609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43610","meta43610",56679371,null)], null);
});

test.core.t_test$core43609.cljs$lang$type = true;

test.core.t_test$core43609.cljs$lang$ctorStr = "test.core/t_test$core43609";

test.core.t_test$core43609.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"test.core/t_test$core43609");
});

test.core.__GT_t_test$core43609 = (function test$core$root_component_$___GT_t_test$core43609(root_component__$1,app__$1,owner__$1,meta43610){
return (new test.core.t_test$core43609(root_component__$1,app__$1,owner__$1,meta43610));
});

}

return (new test.core.t_test$core43609(test$core$root_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,test.core.root_component,test.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=core.js.map