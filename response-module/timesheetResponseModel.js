var exports = module.exports= {};

exports.timesheetResponseModel = function(){
    this.startDate = '';
    this.endDate = '';
    this.statuses = ["SUBMITTED, UNSUBMITTED, APPROVED, REJECTED, PROCESSED"];
    this.groupNames = [];
}
