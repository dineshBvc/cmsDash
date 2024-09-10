import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexGrid, ApexLegend, ApexTitleSubtitle, ApexNonAxisChartSeries, ApexResponsive } from "ng-apexcharts";


export class ChartOptions {

  series: ApexAxisChartSeries = [];
  chart: ApexChart = { type: "bar" };
  dataLabels: ApexDataLabels = {};
  plotOptions: ApexPlotOptions = {};
  public yaxis: ApexYAxis = {};
  public xaxis: ApexXAxis = {};
  public grid: ApexGrid = { show: false };
  public colors: String[] = [];
  public legend: ApexLegend = {};
  public title: ApexTitleSubtitle = {};
}

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export class ChartGenerator {

  GetDailySalesChartOptions(sales: number[], labels: string[]) {
    var options = {
      series: [{ name: 'Amount(₹) ', data: sales }],
      chart: {
        type: 'bar', height: 310, events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          }
        }
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26A69A'],
      dataLabels: { enabled: false },
      grid: { show: false },
      legend: { show: false },
      plotOptions: { bar: { horizontal: false, distributed: true } },
      title: { align: 'left', text: 'Last 7 days sales' },
      xaxis: {
        categories: labels, labels: { style: { colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a',], fontSize: '12px', } },
      },
      yaxis: {}
    } as ChartOptions;
    return options;
  }

  GetMonthlySalesChartOptions(sales: number[], labels: string[]) {
    var options = {
      series: [{ name: 'Amount(₹) ', data: sales }],
      chart: {
        type: 'area', height: 310,
        events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          }
        }
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26A69A', '#D10CE8', '#CE6868', '#FF8000', '#400000', '#279E39'],
      dataLabels: { enabled: false },
      grid: { show: false },
      legend: { show: false },
      plotOptions: {},
      title: { align: 'left', text: 'Monthly Sales' },
      xaxis: {
        categories: labels, labels: { style: { colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#ce6868', '#ff8000', '#400000', '#279e39'], fontSize: '12px', } },
      },
      yaxis: {}
    } as ChartOptions;
    return options;
  }


  GetProductSalesChart(values: number[], products: string[]) {
    var options = {
      chart: {
        height: 320,
        type: "pie",
        events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          }
        }
      },
      series: values,
      labels: products,
      title: { align: 'left', text: 'Product Sales' },
      legend: {
        position: "right",
        show: true,
        width: 200,
        fontSize: '10px'
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',             
            },
            legend: {
              width: 100,

            }
          }
        }
      ]
    } as PieChartOptions;
    return options;
  }

}




