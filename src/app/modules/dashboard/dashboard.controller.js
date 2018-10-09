class DashboardCtrl {
  /*@ngInject*/
  constructor(dashboardService) {
    //initialize dependency injections
    this.dashboardService = dashboardService;
    //initialize controller variables
    this.input = {};
    this.columns = ['column1', 'column2', 'column3', 'column4',]
    this.items = [{
      column1: 1,
      column2: 2,
    },
    {
      column1: 2,
      column2: 3,
    }];

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
}

export default DashboardCtrl;