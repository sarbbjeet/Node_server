const express = require("express");
const route = express.Router();
const config = require("config");
const { default: axios } = require("axios");
const basicWeatherApi = config.get("WEATHER_API_URL");

route.get("/", async(req, res) => {
    const getLocationUrl = config.get("GET_CURRENT_ADDRESS");
    try {
        const { data: addr } = await axios.get(getLocationUrl);

        res.json(addr);
    } catch (ex) {
        res.status(400).json({ message: ex.message });
    }
});

module.exports = route;