import React from "react";

export default function JsonFetch() {
    const jsonData = require('../data/seminars.json')

    console.log('Запрошен джейсон')
    console.log(jsonData)
    
    return jsonData
}