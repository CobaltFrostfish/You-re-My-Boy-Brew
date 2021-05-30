const router = require('express').Router();
const {Brew} = require('../../models');


router.get('/', async (req, res) => {
  try {
    // const city = req.body.city;
    console.log("Hit this");
    const locationsData = await Brew.findAll({
      where: { city: req.body.city }, 
    });

    const locations = locationsData.map(location => location.get({
      plain: true
    }));
    console.log(locations)
    res.json(JSON.stringify(locations));
    res.render('mappage')
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;






// const router = require('express').Router();

// router.get('/', async (req, res) => {
//     try {

//       res.render('mappage', {
//               loggedIn: req.session.loggedIn
//           });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });


// exports.addMap = async (req, res, next) => {
//     try {
//         const place = await Map.create(req.body);

//         return res.status(200).json({
//             success: true,
//             data: map
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500);
//     }
// };

// exports.getMaps = async (req, res, next) => {
//   try {
//       const maps = await Map.find();

//       return res.status(200).json({
//           succes: true,
//           count: places.length,
//           data: maps
//       })
//   } catch (err) {
//       console.log(err);
//       res.status(500);
//   }
// };