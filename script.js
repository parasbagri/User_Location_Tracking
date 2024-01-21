// console.log(navigator.geolocation.getCurrentPosition);

const latiShow = document.getElementById('latiShow');
document.querySelector("#get").addEventListener('click', () =>{
      if(navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                // console.log(position.coords.latitude);
                const {latitude, longitude} = position.coords;
                // console.log(latitude);
                // console.log(longitude)
                // latiShow.innerText = `The latitude ${position.coords.latitude} and langitude ${position.coords.longitude}`
                latiShow.innerText = `The latitude ${latitude} and langitude ${longitude}`
            },
            (error) => {
                // console.log(error.message);
                 latiShow.innerText = error.message;
            }
        )
      }
})
 
