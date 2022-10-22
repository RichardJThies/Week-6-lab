let usBridgeCoor = [39.8283, -98.5795] // array sets the latitude/longitude
let zoomLevel = 4 // 1 = whole world, 20 = city blocks

//creates the map
let map = L.map('bridges-map').setView(usBridgeCoor, zoomLevel) 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //creates actual tile layers for visable map
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

bridges =  [
    {"name": "Verrazano-Narrows Bridge", "Span": "1298.4", "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "Span": "1280.2", "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "Span": "1158.0", "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "Span": "1067.0", "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "Span": "853.44", "coordinates": [47.2690, -122.5517] }
]

bridges.forEach(function(bridge) { //loop to add markers and text for above array^^
    let markerText = `<b>${bridge.name}</b><br>${bridge.Span} meters</a>`
    L.marker(bridge.coordinates).bindPopup(markerText).addTo(map) 
})

let usAreaCircle = L.circle(usBridgeCoor, {//creates circle that all five bridges are within
    color: 'red',
    radius: 2200000,
    fillOpacity: 0.1
})
    .bindPopup('Continental US')
    .addTo(map)













