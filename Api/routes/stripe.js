const router = require("express").Router();
const stripe = require("stripe")("sk_test_51Jho9eFyfJPm64624WOKFVOfY0KsZk8HfhRhjOpjPCmv3O8N6BALOOE09gpMIgA257NG5K5ybWTD36QqUpo6dNoY00lcj5Rjog");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
