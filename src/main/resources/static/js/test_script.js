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

const currency = "USD";
const cmc_url = `http://localhost:3232/test/${project_ticker}/${currency}`;

 const getData = async () => {
   const resp = await fetch(f_url);
   const data = await resp.json();

   //log(data);
   return data;
 };

// add comma to string
function addCommasToString(string) {
  // convert the string to a number by using the "+" unary operator
  var number = +string;

  // check if the conversion was successful
  if (!isNaN(number)) {
    // convert the number back to a string with commas
    var stringWithCommas = number.toLocaleString();

    return stringWithCommas;
  }

  // return the original string if it couldn't be converted to a number
  return string;
}

// usd
  fetch(cmc_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("pr_rank").innerHTML = "#"+data.project_rank;
      document.getElementById("price_usd").innerHTML = "$"+data.price;
      document.getElementById("volume_usd").innerHTML = "$"+addCommasToString(data.volume);
      document.getElementById("marketcap_usd").innerHTML = "$"+addCommasToString(data.marketcap);
      document.getElementById("fully_diluted_market_usd").innerHTML = "$"+addCommasToString(data.fully_diluted_market_cap);

      // coin/token (total and circulating) supply
      document.getElementById("c_supply").innerHTML = addCommasToString(data.cir_supply) + " " + project_ticker_element.textContent;
      document.getElementById("t_supply").innerHTML = addCommasToString(data.tot_supply)+ " " + project_ticker_element.textContent;
      //console.log(data.cir_supply);
      document.getElementById("market_cap_dominance").innerHTML = data.m_cap_dominance;
      // type check of the data
      //console.log(typeof data.cir_supply);
      // add comma to string
      //console.log(addCommasToString(data.cir_supply));
      if (data.percent_change >= 0) {
        document.getElementById("percent_change").style.color = "green";
        document.getElementById("percent_change").innerHTML = data.percent_change+"% ▲";
      } else {
        document.getElementById("percent_change").style.color = "red";
        document.getElementById("percent_change").innerHTML = data.percent_change+"% ▼";
      }
    })
    .catch(function(error) {
        console.log(error);
    });
// btc
const b_currency = "BTC";
const c_cmc_url = `http://localhost:3232/test/${project_ticker}/${b_currency}`;
  fetch(c_cmc_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("pr_rank").innerHTML = "#"+data.project_rank;
      document.getElementById("price_btc").innerHTML = data.price + " BTC";
      document.getElementById("volume_btc").innerHTML = addCommasToString(data.volume) + " BTC";
      document.getElementById("marketcap_btc").innerHTML = addCommasToString(data.marketcap) + " BTC";
      document.getElementById("fully_diluted_market_btc").innerHTML = addCommasToString(data.fully_diluted_market_cap) + " BTC";

      document.getElementById("market_cap_dominance").innerHTML = data.m_cap_dominance;
    })
    .catch(function(error) {
        console.log(error);
    });

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