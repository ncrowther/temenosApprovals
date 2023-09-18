'use strict';


/**
 * Approve or decline a request
 * Approve or decline by Id
 *
 * body ServiceRequest Approval body (optional)
 * serviceRequestId String The service request ID
 * no response value expected for this operation
 **/
exports.approval = function(body,serviceRequestId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

