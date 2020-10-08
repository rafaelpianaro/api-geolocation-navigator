if('geolocation' in navigator){
    // navigator.geolocation.getCurrentPosition(function(position){
    //     console.log('position', position)        
    // }, function(error){
    //     console.log(error)
    // })
    const watcher = navigator.geolocation.watchPosition(function(position){
        console.log('position', position)
    }, function(error){
        console.log(error)
    }, {enableHighAccuracy: true, maximumAge: 30000, timeout: 60000})
    // navigator.geolocation.clearWatch(watcher)
}else {
    alert('não foi possível')
}