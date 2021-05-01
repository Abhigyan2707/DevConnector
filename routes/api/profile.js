const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
//@route    GET api/profile/me
//@desc     Test Route
//@access   Private

router.get('/me', auth, async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.user.id}).populate('user', ['name', 'avatar']);
        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user'});
        }
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//@route    POST api/profile
//@desc     Create or update user profile
//@access   Private



module.exports = router;