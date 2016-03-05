(defproject todomvc "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :jvm-opts ^:replace ["-Xms4g" "-Xmx4g" "-server"]

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [lein-figwheel "0.5.0-6"]
                 [org.omcljs/om "1.0.0-alpha30"]
                 [cljs-http "0.1.39"]]

  :plugins [[lein-cljsbuild "1.1.2"] [lein-figwheel "0.5.0-6"]]

  :source-paths ["src"]

  :clean-targets ["out" "out-adv" "app.js"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :main test.core
                :output-to "app.js"
                :output-dir "out"
                :optimizations :none
                :figwheel true
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :output-to "app.js"
                :output-dir "out-adv"
                :optimizations :advanced
                :elide-asserts true
                :pretty-print false
                :output-wrapper false}}]})
