(ns ^:figwheel-always leboX.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [figwheel.client :as fw])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def jquery (js* "$"))

(defn openProposalDialog []
  (jquery
     (fn []
       (-> (println (. (jquery ".modal") openModal))))))


(defn quote-url [stock-symbol]
  (str "https://query.yahooapis.com/v1/public/yql?q=select%20LastTradePriceOnly%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" stock-symbol "%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="))

(defn get-quote [stocks-symbol]
  (go
    (let [response (<! (http/get (quote-url stocks-symbol) {:with-credentials? false}))]
      (:LastTradePriceOnly (:quote (:results (:query (:body response))))))))

(defonce app-state (atom {:stocks [{:symbol "MSFT" :quantity 50} {:symbol "AAPL" :quantity 50} {:symbol "GOOG" :quantity 50} ]}))

(defn indices-of [f coll]
  (keep-indexed #(if (f %2) %1 nil) coll))

(defn first-index-of [f coll]
  (first (indices-of f coll)))

(defn get-stock-index-by-symbol [stock-symbol]
  (first-index-of #(= stock-symbol (:symbol %)) (:stocks @app-state)))

(defn select-a-stock! [stock-symbol]
  (swap! app-state update-in [:order] {})
  (swap! app-state assoc-in [:order :stock] stock-symbol)
  (println @app-state))

(defn select-a-duration! [duration]
  (swap! app-state assoc-in [:order :duration] duration)
  (println @app-state))

(defn portfolio-entry [data owner]
  (reify
    om/IWillMount
      (will-mount [_]
        (let [{:keys [stock is-selected]} data]
          (go (let [quote (<!(get-quote (:symbol stock)))]
            (swap! app-state update-in [:stocks (get-stock-index-by-symbol (:symbol stock))] assoc :quote quote)))))
    om/IRenderState
      (render-state [this state]
        (let [{:keys [stock is-selected]} data]
          (dom/div #js {:className (if is-selected "col s12 m6 l3 selected-stock" "col s12 m6 l3") :onClick #(select-a-stock! (:symbol stock))}
            (dom/div #js {:className "card"}
              (dom/div #js {:className "card-content black-text"}
                (dom/p nil (dom/i #js {:className "mdi-social-group-add"} (dom/span #js {:className "deep-orange-text text-lighten-2"} (str " " (:quantity stock))) " shares"))
                  (dom/div #js {:className "card-symbol"}
                    (dom/img #js {:className "stock-icon" :src (str "img/" (:symbol stock) ".png")})
                    (dom/h4 #js {:className "card-stats-number"} (:symbol stock)))
                (dom/p #js {:className "card-stats-compare"} (dom/i #js {:className "mdi-hardware-keyboard-arrow-up"}) "Price: " (dom/span #js {:className "deep-orange-text text-lighten-2"} (str " " (:quote stock) " $")))
                  )))))))


(defn get-lending-days [duration]
  (case duration
    :less-than-a-month (rand-int 30)
    :one-to-six-months (+ 30 (rand-int (* 5 30)))
    :up-to-an-year (+ (* 6 30) (rand-int (* 6 30)))
    :sky-is-the-limit (+ (* 12 30) (rand-int 10000000))
    0))

(defn get-interest-rate [duration]
  (case duration
    :less-than-a-month 0.5
    :one-to-six-months 0.7
    :up-to-an-year 1
    :sky-is-the-limit 1.5
    0))

(defn get-return-date [lending-days]
  (let [now (js/Date.)
        return-date (js/Date. (.setDate now (+ (.getDate now) lending-days)))]
    (.toLocaleDateString return-date "de-CH")))

(defn create-business-proposal [duration]
  (let [lending-days (get-lending-days duration)
        interest-rate (get-interest-rate duration)]
    {:return-date (get-return-date lending-days)
     :effective-interest-rate (/ (* interest-rate lending-days) 36000)
     :annualized-interest-rate interest-rate}))

(defn lend-a-stock! [stock-symbol]
  (.toast js/Materialize (str "Transaction successfully commited") 6000)
  (swap! app-state update-in [:stocks (get-stock-index-by-symbol stock-symbol)] assoc :is-lent true)
  (swap! app-state update-in [:order] {}))

(defn proposal-dialog [app owner]
  (reify
    om/IRenderState
      (render-state [this state]
        (let [{:keys [order]} app
              stock (first (filter #(= (:symbol %) (:stock order)) (:stocks app)))
              capital-involved (* (:quantity stock) (:quote stock))
              {:keys [return-date effective-interest-rate annualized-interest-rate]} (create-business-proposal (:duration order))
              capital-gain (* capital-involved effective-interest-rate)]
          (dom/div #js {:className "modal"}
            (dom/div #js {:className "modal-content proposal"}
              (dom/h4 nil (str "Proposal for " (:stock order)))
              (dom/p nil (str "Capital gain: " (.toFixed capital-gain 2)))
              (dom/p nil (str "Return data: " return-date))
              (dom/p nil (str "Interest rate: " (.toFixed annualized-interest-rate 2) "% p.a)")))
            (dom/div #js {:className "modal-footer"}
              (dom/a #js {:href "#!" :className "modal-action modal-close waves-effect waves-green btn-flat"
                          :onClick #(lend-a-stock! (:stock order))} "Agree")
              (dom/a #js {:href "#!" :className "modal-action modal-close waves-effect waves-green btn-flat"} "Disagree")))))))

(defn get-portfolio-entry-data [stock is-selected] {:stock stock :is-selected is-selected})

(defn root-component [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (om/build proposal-dialog app)
        (dom/div #js {:className "row"}
          (om/build-all portfolio-entry (map #(get-portfolio-entry-data % (= (:stock (:order app)) (:symbol %))) (filter #(not (:is-lent %)) (:stocks app)))))
        (dom/form  #js {:action "#" :className (if (:stock (:order app)) "visible" "invisible")}
          (dom/p nil
            (dom/input #js {:name "duration" :type "radio" :id "less-than-a-month" :checked (= (:duration (:order app)) :less-than-a-month)})
            (dom/label #js {:htmlFor "less-than-a-month" :onClick #(select-a-duration! :less-than-a-month)}  "Less than a month"))
          (dom/p nil
            (dom/input #js {:name "duration" :type "radio" :id "one-to-six-months" :checked (= (:duration (:order app)) :one-to-six-months)})
            (dom/label #js {:htmlFor "one-to-six-months" :onClick #(select-a-duration! :one-to-six-months)}  "One to six months"))
          (dom/p nil
            (dom/input #js {:name "duration" :type "radio" :id "up-to-an-year" :checked (= (:duration (:order app)) :up-to-an-year)})
            (dom/label #js {:htmlFor "up-to-an-year" :onClick #(select-a-duration! :up-to-an-year)}  "Up to an year"))
          (dom/p nil
            (dom/input #js {:name "duration" :type "radio" :id "sky-is-the-limit" :checked (= (:duration (:order app)) :sky-is-the-limit)})
            (dom/label #js {:htmlFor "sky-is-the-limit" :onClick #(select-a-duration! :sky-is-the-limit)}  "Sky is the limit")))
         (dom/div #js {:className "row"} (dom/button #js
                                                     {:className (if (:duration (:order app)) "btn ok-button visible" "btn ok-button invisible")
                                                      :onClick #(openProposalDialog)} "OK"))
        ))))

(om/root
 root-component
 app-state
 {:target (. js/document (getElementById "app"))})

(fw/start {
  :websocket-url "ws://localhost:3449/figwheel-ws" })
