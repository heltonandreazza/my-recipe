class DashboardCtrl {
  /*@ngInject*/
  constructor(dashboardService, $timeout) {
    this.$timeout = $timeout
    //initialize dependency injections
    this.dashboardService = dashboardService
    //initialize controller variables
    this.columns = [{
      name: 'ingredient',
      desc: 'Ingrediente',
      type: 'text'
    }, {
      name: 'quantityTotal',
      desc: 'Quantidade Total',
      type: 'number'
    }, {
      name: 'price',
      desc: 'Preço',
      type: 'number'
    }, {
      name: 'quantityUsed',
      desc: 'Quantidade Usada',
      type: 'number'
    }]

    this.units = [{
      id: 1,
      label: 'GR',
    }, {
      id: 2,
      label: 'KG',
    }, {
      id: 3,
      label: 'UN',
    }]

    this.defaultItem = {
      selected: {
        id: 1,
        label: 'GR',
      }
    }
    this.items = [Object.assign({}, this.defaultItem)]

    this.totalPriceCost = 0
    this.costByItem = 0
    this.costByKg = 0
    this.itemSellPrice = 0
    this.totalProfit = 0
    this.profitByItem = 0

    this.profitPercentage = 0
    this.itemQuantity = 0

    this.activate()
  }

  /**
   * Initialize controller
   */
  activate() {
  }

  /**
   * Canculate table results 
   */
  getResults() {
    // TODO
    this.totalPriceCost = this.items.map(x => (x.price / x.quantityTotal) * x.quantityUsed).reduce((a, b) => a + b, 0)
    const totalPriceCostAndProfit = this.totalPriceCost * (1 + (this.profitPercentage / 100))
    this.totalProfit = totalPriceCostAndProfit - this.totalPriceCost
    this.costByItem = this.itemQuantity && this.totalPriceCost / this.itemQuantity
    this.profitByItem = this.itemQuantity && this.totalProfit / this.itemQuantity
    this.itemSellPrice = this.itemQuantity && totalPriceCostAndProfit / this.itemQuantity
  }

  addLine() {
    this.items.push(Object.assign({}, this.defaultItem))
  }

  removeLine(index) {
    this.items.splice(index, 1)
  }

  exportToExcel(tableId) {
    var exportHref = this.tableToExcel(tableId, 'WireWorkbenchDataExport');
    this.$timeout(function () { location.href = exportHref; }, 100); // trigger download
  }

  tableToExcel(tableId, worksheetName) {
    var uri = 'data:application/vnd.ms-excel;base64,',
      template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))); },
      format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) };

    var table = $(tableId),
      ctx = { worksheet: worksheetName, table: table.html() },
      href = uri + base64(format(template, ctx));
    return href;
  }
}

export default DashboardCtrl