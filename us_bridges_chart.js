let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

bridges =  [
    {"name": "Verrazano-Narrows Bridge", "Span": "1298.4", "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "Span": "1280.2", "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "Span": "1158.0", "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "Span": "1067.0", "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "Span": "853.44", "coordinates": [47.2690, -122.5517] }
]

//bridges.forEach(function(bridge)
let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge", "Golden Gate Bridge", "Mackinac Bridge", "George Washington Bridge", "Tacoma Narrows Bridge"],
        datasets: [{
            label: 'Span',
            data: [1298.4, 1280.2, 1158, 1067, 853.44],
            backgroundColor: ['red', 
            'blue', 
            'green', 
            'yellow', 
            'indigo'] //colors are matched with the columnns
        
        }]
    }
})

