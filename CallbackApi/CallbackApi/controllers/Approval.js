'use strict';

var utils = require('../utils/writer.js');
var Approval = require('../service/ApprovalService');

module.exports.approval = function approval (req, res, next, body, serviceRequestId) {
  Approval.approval(body, serviceRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
