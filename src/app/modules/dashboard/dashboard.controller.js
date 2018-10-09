class DashboardCtrl {
  /*@ngInject*/
  constructor(dashboardService) {
    //initialize dependency injections
    this.dashboardService = dashboardService;
    //initialize controller variables
    this.input = {};
    this.results = null;

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
  }
}

export default DashboardCtrl;