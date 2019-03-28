document.addEventListener("DOMContentLoaded", function() {

// Destructuring
// let med = [1,2,3];
//
// let [m, ...n] = med;
//
// console.log(m, n);

axios.get('https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss', { crossdomain: true })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

});
