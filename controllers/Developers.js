'use strict';

var utils = require('../utils/writer.js');
var Developers = require('../service/DevelopersService');

module.exports.internship_offers = function internship_offers (req, res, next, body) {
  Developers.internship_offers(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.internship_offers_delete = function internship_offers_delete (req, res, next, remote_id) {
  Developers.internship_offers_delete(remote_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.internship_offers_updatte = function internship_offers_updatte (req, res, next, body, remote_id) {
  Developers.internship_offers_updatte(body, remote_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sectors = function sectors (req, res, next) {
  Developers.sectors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
