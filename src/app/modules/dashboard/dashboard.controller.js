class DashboardCtrl {
  /*@ngInject*/
  constructor(dashboardService) {
    //initialize dependency injections
    this.dashboardService = dashboardService;
    //initialize controller variables
    this.columns = [{ 
      name: 'ingredient',
      desc: 'Ingrediente',
      type: 'text'
    }, { 
      name: 'quantityTotal',
      desc: 'Quantidade total',
      type: 'number' 
    }, { 
      name: 'price',
      desc: 'Preço',
      type: 'number' 
    }, { 
      name: 'quantityUsed',
      desc: 'Quantidade usada',
      type: 'number'
    }]
    this.items = [{}]
    this.results = 0

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
    this.results = this.items.map(x => x.price * x.quantityUsed).reduce((a,b) => a + b, 0)
  }

  addLine() {
    this.items.push({})
  }
}

export default DashboardCtrl;