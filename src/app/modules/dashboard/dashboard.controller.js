class DashboardCtrl {
  /*@ngInject*/
  constructor(dashboardService) {
    //initialize dependency injections
    this.dashboardService = dashboardService;
    //initialize controller variables
    this.columns = ['column1', 'column2', 'column3', 'column4']
    this.items = [{}];

    this.activate();
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
    console.log(this.items)
  }

  addLine() {
    this.items.push({})
  }
}

export default DashboardCtrl;