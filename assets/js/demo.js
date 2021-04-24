//
// Demo.js
// only for preview purposes - remove it when starting your project
//

var baseURL = "http://"+window.location.hostname+":8080/"


var showAlert = function(type, msg="", title=""){
  switch (type) {
      case 'basic':
          new swal({
              title: '<h5>' +title+ '</h5>',
              html: '<p class="lead">'+msg+'</p>',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-primary'
          })
          break;

      case 'info':
          new swal({
              title: 'Info',
              text: msg,                                             
              type: 'info',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-info'
          })
          break;

      case 'success':
          new swal({
              title: "<h5>"+title+"</h5>",
              html: '<p class="text-lg">'+msg+"</p>",
              timer: 3000,
              type: 'success',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-success'
          })
          break;
      
      case 'error':
          new swal({
              title: "<h5>"+title+"</h5>",
              html: '<p class="text-lg">'+msg+"</p>",
              timer: 3000,
              type: 'error',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-success'
          })
          break;
          
      case 'warning':
          new swal({
              title: 'Warning',
              html: "<p>"+msg+"</p>",
              type: 'warning',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-warning'
          })
          break;

      case 'question':
          new swal({
              title: 'Are you sure?',
              text: 'A few words about this sweet alert ...',
              type: 'question',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-dark'
          })
          break;

      case 'confirm':
          new swal({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              type: 'warning',
              showCancelButton: true,
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-danger',
              confirmButtonText: 'Yes, delete it!',
              cancelButtonClass: 'btn btn-secondary'
          }).then((result) => {
              if (result.value) {
                  // Show confirmation
                  new swal({
                      title: 'Deleted!',
                      text: 'Your file has been deleted.',
                      type: 'success',
                      buttonsStyling: false,
                      confirmButtonClass: 'btn btn-primary'
                  });
              }
          })
          break;

      case 'image':
          new swal({
              title: 'Sweet',
              text: "Modal with a custom image ...",
              imageUrl: '../../assets/img/prv/splash.png',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-primary',
              confirmButtonText: 'Super!'
      });
      break;

      case 'timer':
          new swal({
              title: 'Auto close alert!',
              text: 'I will close in 2 seconds.',
              timer: 2000,
              showConfirmButton: false
          });
      break;
  }
} 
