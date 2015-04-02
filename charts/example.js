'use strict';

angular.module('google-chart-example', ['googlechart']).controller("MainCtrl", function ($scope) {

    $scope.chartObject = {};

    $scope.onions = [
        {v: "Onions"},
        {v: 3},
    ];

    $scope.chartObject.data = {"cols": [
        {id: "t", label: "Topping", type: "string"},
        {id: "s", label: "Slices", type: "number"}
    ], "rows": [
        {c: [
            {v: "Mushrooms"},
            {v: 3},
        ]},
        {c: $scope.onions},
        {c: [
            {v: "Olives"},
            {v: 31}
        ]},
        {c: [
            {v: "Zucchini"},
            {v: 1},
        ]},
        {c: [
            {v: "Pepperoni"},
            {v: 2},
        ]}
    ]};


    // $routeParams.chartType == BarChart or PieChart or ColumnChart...
    $scope.chartObject.type = "PieChart";
    $scope.chartObject.options = {
        'title': 'How Much Pizza I Ate Last Night'
    }

    // var chart1 = {};
    // chart1.type = "ColumnChart";
    // chart1.cssStyle = "height:200px; width:300px;";
    // chart1.data = {"cols": [
    //     {id: "month", label: "Month", type: "string"},
    //     {id: "laptop-id", label: "Laptop", type: "number"},
    //     {id: "desktop-id", label: "Desktop", type: "number"},
    //     {id: "server-id", label: "Server", type: "number"},
    //     {id: "cost-id", label: "Shipping", type: "number"}
    // ], "rows": [
    //     {c: [
    //         {v: "January"},
    //         {v: 19, f: "42 items"},
    //         {v: 12, f: "Ony 12 items"},
    //         {v: 7, f: "7 servers"},
    //         {v: 4}
    //     ]},
    //     {c: [
    //         {v: "February"},
    //         {v: 13},
    //         {v: 1, f: "1 unit (Out of stock this month)"},
    //         {v: 12},
    //         {v: 2}
    //     ]},
    //     {c: [
    //         {v: "March"},
    //         {v: 24},
    //         {v: 0},
    //         {v: 11},
    //         {v: 6}

    //     ]}
    // ]};

    // chart1.options = {
    //     "title": "Sales per month",
    //     "isStacked": "true",
    //     "fill": 20,
    //     "displayExactValues": true,
    //     "vAxis": {
    //         "title": "Sales unit", "gridlines": {"count": 6}
    //     },
    //     "hAxis": {
    //         "title": "Date"
    //     }
    // };

    // chart1.formatters = {};

    // $scope.chart = chart1;

});


