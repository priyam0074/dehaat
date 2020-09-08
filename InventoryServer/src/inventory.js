const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here

  router.get('/inventory', function (req, res, next) {
    db.query(
      'SELECT InventoryDetails.categoryName, Inventory_productDetails.name, Inventory_productDetails.id, Inventory_productDetails.description, Inventory_productDetails.quality, Inventory_productDetails.mrp FROM  InventoryDetails INNER JOIN Inventory_productDetails ON InventoryDetails.id=Inventory_productDetails.detailId ?',
      [owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
  return router;
}

module.exports = createRouter;