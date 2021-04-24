<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="assets/img/favicon.png">
  <title>
    LIVE MARKET DATA
  </title>
  <!-- <script src="node_modules/eruda/eruda.js"></script>
  <script>
    eruda.init();
  </script> --> 
 <!-- Extra details for Live View on GitHub Pages -->
  <!-- Canonical SEO -->
  <link rel="canonical" href="external.html?link=https://www.creative-tim.com/product/soft-ui-design-system-pro" />
  
  <!--     Fonts and icons     -->
  <link href="external.html?link=https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/@fontawesome/css/all.min.css" type="text/css" media="all" />
  <!-- Nucleo Icons -->
  <link href="assets/css/nucleo-icons.css" rel="stylesheet" />
  
  <link href="assets/css/nucleo-svg.css" rel="stylesheet" />
  <!-- Font Awesome Icons -->
  <script src="kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
  <link href="assets/css/nucleo-svg.css" rel="stylesheet" />
  <!-- CSS Files -->
  <link id="pagestyle" href="assets/css/soft-design-system-pro.min0ff5.css" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <!-- <link href="assets/demo/demo.css" rel="stylesheet" /> -->
  <!-- Anti-flicker snippet (recommended)  -->
  <link rel="stylesheet" href="assets/js/sweetalert2/dist/sweetalert2.min.css" type="text/css" media="all" />

  <style type="text/css" media="all">

    .loader04 {
      width: 56px;
      height: 56px;
      border: 2px solid rgba(0, 82, 236, 0.5);
      border-radius: 50%;
      position: relative;
      animation: loader-rotate 1s ease-in-out infinite;
      top: 50%;
      margin: 0 auto 0; }
      .loader04::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #0052ec;
        position: absolute;
        top: -6px;
        left: 50%;
        margin-left: -5px; 
      }

    @keyframes loader-rotate {
      0% {
        transform: rotate(0); }
      100% {
        transform: rotate(360deg); }
    }
    
   .pre-box{
     margin: auto; 
     width: 100%;
     height: 100%;
     text-align: center;
     position: relative;
     top: 0;
     z-index: 2000;
     background-color: #fff;
   }
   
  .card{
    min-height: 100% !important;
  }
  
  body, #app{
    height: 100vh;
  }
  </style>
  
</head>

<body class="bg-gradient-dark ">
  <div id="app">
  <div class="modal modal-danger fade" id="modal-offline" data-bs-keyboard="false" data-bs-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="modal-delete-account" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <form class="form-danger">
        <div class="modal-content">
          <div class="modal-body shadow-lg text-center">
            <h4>Connection Lost</h4>
            <small>Please check your connection. This will close automatically when online</small>
          </div>
        </div>
      </form>
    </div>
  </div>
 
  <div class="modal modal-danger fade" id="order-book" data-bs-keyboard="false" data-bs-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="order-book" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        
        <div class="modal-content border border-dark bg-dark shadow-lg">
          <div class="modal-body text-white px-0">
            <h5 class="text-white text-center">Orders</h5>
            <h5 class="text-white text-center text-lg" v-if="orderBook.length <= 0">Your trades will appear here</h5>
            <order-component v-for="record in orderBook" :record="record" :key="record.id"></order-component>
          </div>
          <div class="modal-footer border-dark bg-gradient-dark">
            <button data-bs-dismiss="modal" class="btn btn-link mb-0 ml-auto">
              close
            </button>
          </div>
        </div>
        
    </div>
  </div>
    
  <section class="pt-0 h-100 px-0 bg-transparent ">
        <div class="card h-100 shadow border-right-radius-0" style="border-radius: 0;">
          
          <div style="border-radius: 0;" class="card-header h-25 bg-gradient-dark pt-3 p-5 position-relative">
            <h3 class="text-white mb-0">Live Market Data</h3>
            <p class="text-secondary opacity-8 mb-2">from Binance</p>
            <div class="nav-wrapper position-relative end-0">
              <ul class="nav nav-pills justify-content-end nav-fill p-1" role="tablist">
                <li class="nav-item">
                  <a class="nav-link font-weight-bold mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-icons" role="tab" aria-controls="preview" aria-selected="true">
                    <i class="ni ni-chart-bar-32 text-sm me-2"></i> {{this.symbol}} 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-icons" role="tab" aria-controls="preview" aria-selected="true">
                    <i class="ni ni-money-coins text-sm me-2"></i> {{balance}} 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="modal" href="#order-book" role="tab" aria-controls="code" aria-selected="false">
                    <i class="ni ni-books text-sm me-2"></i> Order book
                  </a>
                </li>
              </ul>
            </div> 
            
            
            <div class="position-absolute w-100 z-index-1 bottom-0 ms-n5">
              <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto" style="height:7vh;min-height:50px;">
                <defs>
                  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                </defs>
                <g class="moving-waves">
                  <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40"></use>
                  <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
                  <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
                  <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
                  <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
                  <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95"></use>
                </g>
              </svg>
            </div>
          </div>
         
          <div class="card-body h-50 pt-2 p-0">
            <div id="chart" class="h-100 w-100 ">
              <div id="spin" class="pre-box bg-dark">
                <div class="loader04"></div>
              </div> 
            </div>
            
          </div>
          <div class="card-footer py-2 px-2 align-items-center  bg-gradient-dark shadow-lg border-top border-primary h-25" style="border-radius: 0;" >
            
            <form class="price" action="" method="get" accept-charset="utf-8">
               <div class="row text-white ">
                <div class="col-6">
                  <div class="form-group text-white ">
                    <label for="" class="text-white">Lot</label>
                      <div class="input-group mb-3">
                        <button @click="minusLot" class="btn p-2 price btn-outline-secondary mb-0" type="button">
                          <i class="fas fa-minus"></i>
                        </button>
                        <input type="text" :value="lot" class="form-control price text-white font-weight-bold text-center bg-gradient-dark">
                        <button @click="addLot" class="btn p-2 btn-outline-secondary price mb-0" type="button" >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group text-white">
                    <label class="text-white">Strike rate</label>
                      <div class="input-group mb-3">
                        <button @click="minusPrice" class="btn p-2 price  btn-outline-secondary mb-0" type="button" >
                          <i class="fas fa-angle-down "></i>
                        </button>
                        <input id="price" :value="price" type="text"  class="form-control price text-white text-center bg-gradient-dark">
                        <button @click="addPrice" class="btn p-2 price  btn-outline-secondary mb-0" type="button">
                          <i class="fas fa-angle-up"></i>
                        </button>
                      </div>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-6">
                  <button @click="placeOrder('SELL')" type="button" class="btn btn-block btn-outline-danger btn-block">
                    Sell
                  </button>
                </div>
                <div class="col-6">
                  <button @click="placeOrder('BUY')" type="button" class="btn btn-outline-info btn-block btn-block">
                    Buy
                  </button> 
                </div>
              </div>
            </form>
            
          </div>
        </div>
  </section>
  <div>
  <!--   Core JS Files   -->
  <script src="assets/js/core/jquery.min.js" type="text/javascript" charset="utf-8"></script>
  <script src="assets/js/core/popper.min.js" type="text/javascript"></script>
  <script src="assets/js/core/bootstrap.min.js" type="text/javascript"></script>
  <script src="assets/js/plugins/perfect-scrollbar.min.js"></script>
  <script src="https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"></script>
  <script src="assets/js/core/vue.min.js" type="text/javascript" charset="utf-8"></script>
  <script src="assets/js/sweetalert2/dist/sweetalert2.min.js" type="text/javascript" charset="utf-8"></script>
  <script src="assets/js/demo.js" type="text/javascript" charset="utf-8"></script>
  <script src="assets/js/chart-data.js" type="text/javascript" charset="utf-8"></script>
</body>


</html>