// Set up the API endpoint and parameters
const api_url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/historical";
const api_key = "e5ad51b9-f67c-4254-8d72-17693c17ee80"; // Replace with your actual API key
const crypto_symbol = "BTC"; // Replace with the symbol of the cryptocurrency you want to plot
const time_interval = "1d"; // Time interval for the data (valid values: "1d", "7d", "30d", "90d", "365d", "max")

// Set up the request headers with the API key
const headers = {
    "Accepts": "application/json",
    "X-CMC_PRO_API_KEY": api_key,
};

// Set up the request parameters
const params = new URLSearchParams();
params.append("symbol", crypto_symbol);
params.append("time_period", time_interval);

// Send the request to the API and retrieve the response
fetch(`${api_url}?${params}`, { headers })
    .then(response => response.json())
    .then(data => {
        // Convert the response data to an array of objects
        const quotes = data.data.quotes.map(q => ({
            t: new Date(q.time_close * 1000),
            o: q.quote_open,
            h: q.quote_high,
            l: q.quote_low,
            c: q.quote_close,
        }));

        // Set up the Chart.js chart options
        const options = {
            type: "candlestick",
            data: {
                datasets: [{
                    label: crypto_symbol,
                    data: quotes,
                    borderColor: "blue",
                    backgroundColor: "rgba(0, 0, 255, 0.5)",
                }],
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: `${crypto_symbol} Price Chart`,
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [{
                        type: "time",
                        time: {
                            unit: "day",
                        },
                        ticks: {
                            source: "auto",
                        },
                    }],
                    yAxes: [{
                        ticks: {
                            callback: function(value, index, values) {
                                return "$" + value;
                            },
                        },
                    }],
                },
            },
        };

        // Create the Chart.js chart
        const ctx = document.getElementById("c_chart").getContext("2d");
        new Chart(ctx, options);
    })
    .catch(error => console.error(error));
