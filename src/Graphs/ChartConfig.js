export const CHART_CONFIG_DEFAULTS = {

    label: undefined,
    backgroundColor: 'white',
    color: 'white',
    borderColor: 'white',
    fillColor: "rgba(220,220,220,0.5)",
    strokeColor: "rgba(220,220,220,0.8)",
    highlightFill: "rgba(220,220,220,0.75)",
    highlightStroke: "rgba(220,220,220,1)",
    data: null,
};

export const OPTIONS = Object.freeze({
    scales: {
        yAxes: {
            grid: {
                drawBorder: true,
                color: '#FFFFFF',
            },
            ticks: {
                beginAtZero: true,
                color: 'white',
                fontSize: 12,
            }
        },
        xAxes: {
            grid: {
                drawBorder: true,
                color: '#FFFFFF',

            },
            ticks: {
                beginAtZero: true,
                color: 'white',
                fontSize: 12,
            }
        },
    }
});