window.onload = function() {
  var box = document.getElementById("vid");
  box.innerHTML = "I am a box!";
 };

 // tv_chart design test
 const {log, error} = console;

 // get project ticker
 const project_ticker_element = document.getElementById("pr_ticker");
 const project_ticker = project_ticker_element.textContent;

 const f_url = `http://localhost:3232/${project_ticker}USDT/1m`;

 const getData = async () => {
   const resp = await fetch(f_url);
   const data = await resp.json();

   //log(data);
   return data;
 };

 //getData();

 const renderChart = async () => {
   const charProperties = {
     timeScale: {
       timeVisible: true,
       secondVisible: true,
     },
   };
   const domElement = document.getElementById("tv_chart");
   const chart  = LightweightCharts.createChart(domElement, charProperties);
   const candleseries = chart.addCandlestickSeries();
   const klinedata = await getData();
   candleseries.setData(klinedata);

   // SMA
   const sma_series = chart.addLineSeries({ color: 'red', lineWidth: 1 });
   const sma_data = klinedata
       .filter((d) => d.sma)
       .map((d) => ({ time: d.time, value: d.sma }));
   sma_series.setData(sma_data);

    // EMA
    const ema_series = chart.addLineSeries({ color: 'green', lineWidth: 1 });
    const ema_data = klinedata
        .filter((d) => d.ema)
        .map((d) => ({ time: d.time, value: d.ema }));
    ema_series.setData(ema_data);
//
//    //MARKERS
//      candleseries.setMarkers(
//        klinedata
//          .filter((d) => d.long || d.short)
//          .map((d) =>
//            d.long
//              ? {
//                  time: d.time,
//                  position: 'belowBar',
//                  color: 'green',
//                  shape: 'arrowUp',
//                  text: 'LONG',
//                }
//              : {
//                  time: d.time,
//                  position: 'aboveBar',
//                  color: 'red',
//                  shape: 'arrowDown',
//                  text: 'SHORT',
//                }
//          )
//      );
//      //RSI
//      const rsi_series = chart.addLineSeries({
//        color: 'purple',
//        lineWidth: 1,
//        pane: 1,
//      });
//      const rsi_data = klinedata
//        .filter((d) => d.rsi)
//        .map((d) => ({ time: d.time, value: d.rsi }));
//      rsi_series.setData(rsi_data);

//      //MACD FAST
//      const macd_fast_series = chart.addLineSeries({
//        color: 'blue',
//        lineWidth: 1,
//        pane: 2,
//      });
//      const macd_fast_data = klinedata
//        .filter((d) => d.macd_fast)
//        .map((d) => ({ time: d.time, value: d.macd_fast }));
//      macd_fast_series.setData(macd_fast_data);
//      //MACD SLOW
//      const macd_slow_series = chart.addLineSeries({
//        color: 'red',
//        lineWidth: 1,
//        pane: 2,
//      });
//      const macd_slow_data = klinedata
//        .filter((d) => d.macd_slow)
//        .map((d) => ({ time: d.time, value: d.macd_slow }));
//      macd_slow_series.setData(macd_slow_data);
//      //MACD HISTOGRAM
//      const macd_histogram_series = chart.addHistogramSeries({
//        pane: 2,
//      });
//      const macd_histogram_data = klinedata
//        .filter((d) => d.macd_histogram)
//        .map((d) => ({
//          time: d.time,
//          value: d.macd_histogram,
//          color: d.macd_histogram > 0 ? 'green' : 'red',
//        }));
//      macd_histogram_series.setData(macd_histogram_data);
 }

 renderChart();