'use strict';


/**
 * ajoute une offre de stage d'un partenaire aux offres proposées en propre par les équipes monstagedetroisieme.fr
 * Les offres de stages décrits ci-dessous décrivent les offres réservées aux classes de **troisiemeen REP  ou REP+**, anciennement nommées troisieme générale 
 *
 * body InternshipOfferPost  (optional)
 * returns InternshipOffer
 **/
exports.internship_offers = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "weeks" : [ "2020-W16", "2020-W17" ],
  "city" : "Paris",
  "remote_id" : 123,
  "coordinates" : {
    "latitude" : 1,
    "longitude" : 1
  },
  "description" : "description",
  "employer_description" : "Créateur de lotions, de parfums et de produits cosmétiques, embaumeur",
  "employer_name" : "BNP Paribas",
  "title" : "Stage d'observation du métier de chef de service",
  "lunch_break" : "12h-14h",
  "zipcode" : "75001",
  "max_candidates" : 1,
  "employer_website" : "http://www.acnee-corporation.fr",
  "sector_id" : {
    "sector_uuid" : "b7564ac4-e184-41c4-a7a9-57233a9d244a",
    "name" : "Mode",
    "id" : 1
  },
  "street" : "16 rue de la paix",
  "is_public" : true,
  "permalink" : "http://www.stagechezemployeur.fr",
  "daily_hours" : {
    "lundi" : [ "9:00", "18:00" ],
    "mardi" : [ "9:00", "18:00" ],
    "mercredi" : [ "9:00", "18:00" ],
    "jeudi" : [ "9:00", "18:00" ],
    "vendredi" : [ "9:00", "18:00" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Supprime une offre de stage d'un partenaire des offres proposées sur le site monstagedetroisieme.fr
 * Suppression des offres 
 *
 * remote_id String id de l'offre de stage
 * returns InternshipOffer
 **/
exports.internship_offers_delete = function(remote_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "weeks" : [ "2020-W16", "2020-W17" ],
  "city" : "Paris",
  "remote_id" : 123,
  "coordinates" : {
    "latitude" : 1,
    "longitude" : 1
  },
  "description" : "description",
  "employer_description" : "Créateur de lotions, de parfums et de produits cosmétiques, embaumeur",
  "employer_name" : "BNP Paribas",
  "title" : "Stage d'observation du métier de chef de service",
  "lunch_break" : "12h-14h",
  "zipcode" : "75001",
  "max_candidates" : 1,
  "employer_website" : "http://www.acnee-corporation.fr",
  "sector_id" : {
    "sector_uuid" : "b7564ac4-e184-41c4-a7a9-57233a9d244a",
    "name" : "Mode",
    "id" : 1
  },
  "street" : "16 rue de la paix",
  "is_public" : true,
  "permalink" : "http://www.stagechezemployeur.fr",
  "daily_hours" : {
    "lundi" : [ "9:00", "18:00" ],
    "mardi" : [ "9:00", "18:00" ],
    "mercredi" : [ "9:00", "18:00" ],
    "jeudi" : [ "9:00", "18:00" ],
    "vendredi" : [ "9:00", "18:00" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * met à jour une offre de stage d'un partenaire aux offres proposées en propre par les équipes monstagedetroisieme.fr
 * Mise à jour des offres . Possibilité de désactiver son offre en passant le paramètre published_at à null 
 *
 * body InternshipOfferPatch  (optional)
 * remote_id String id de l'offre de stage
 * returns InternshipOffer
 **/
exports.internship_offers_updatte = function(body,remote_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "weeks" : [ "2020-W16", "2020-W17" ],
  "city" : "Paris",
  "remote_id" : 123,
  "coordinates" : {
    "latitude" : 1,
    "longitude" : 1
  },
  "description" : "description",
  "employer_description" : "Créateur de lotions, de parfums et de produits cosmétiques, embaumeur",
  "employer_name" : "BNP Paribas",
  "title" : "Stage d'observation du métier de chef de service",
  "lunch_break" : "12h-14h",
  "zipcode" : "75001",
  "max_candidates" : 1,
  "employer_website" : "http://www.acnee-corporation.fr",
  "sector_id" : {
    "sector_uuid" : "b7564ac4-e184-41c4-a7a9-57233a9d244a",
    "name" : "Mode",
    "id" : 1
  },
  "street" : "16 rue de la paix",
  "is_public" : true,
  "permalink" : "http://www.stagechezemployeur.fr",
  "daily_hours" : {
    "lundi" : [ "9:00", "18:00" ],
    "mardi" : [ "9:00", "18:00" ],
    "mercredi" : [ "9:00", "18:00" ],
    "jeudi" : [ "9:00", "18:00" ],
    "vendredi" : [ "9:00", "18:00" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Récupère la liste des secteurs économiques
 * Secteur économique. [https://github.com/betagouv/monstage/blob/staging/doc/README.md](https://github.com/betagouv/monstage/blob/staging/doc/README.md)
 *
 * returns List
 **/
exports.sectors = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "sector_uuid" : "b7564ac4-e184-41c4-a7a9-57233a9d244a",
  "name" : "Mode",
  "id" : 1
}, {
  "sector_uuid" : "b7564ac4-e184-41c4-a7a9-57233a9d244a",
  "name" : "Mode",
  "id" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

