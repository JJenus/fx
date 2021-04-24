
var number_format = function (number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');

  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

var eventBus = new Vue(); 

Vue.component("order-component", {
  props: ['record'], 
  data(){
    return {
      order: this.record,
      currentRate: this.record.strikeRate,
      evenRate: 0, 
      timer: null, 
      outcome: 0, 
      closed: false, 
    }
  },
  
  methods: {
    close(){
      var ls = 'closed'+this.order.id
      var lo = 'outcome'+this.order.id
    
      localStorage.setItem(ls, this.closed)
      localStorage.setItem(lo, this.outcome)
      
      clearInterval(this.timer)
      this.closed = true;
      eventBus.$emit('update_balance', this.outcome)
      var msg = 'Position closed at '+this.outcome+' balance updated';
      showAlert('success', msg, 'Closed')
    }, 
  },
  
  mounted(){
    eventBus.$on(this.order.symbol, rate => {
      this.evenRate = rate;
    })
    
    var ls = 'closed'+this.order.id
    var lo = 'outcome'+this.order.id
    
    if(localStorage.getItem(ls)){
      this.closed = localStorage.getItem(ls)
      this.outcome = localStorage.getItem(lo)
    } 
    
    if(!this.closed){
      this.timer = setInterval(()=>{
        this.currentRate = this.evenRate
        var points = 0;
        if (this.order.type == 'BUY') {
          points = this.currentRate - this.order.strikeRate
        } else if(this.order.type == 'SELL') {
          points = this.order.strikeRate - this.evenRate
        }
        var total = points * this.order.lot * this.order.balance
        this.outcome = number_format(total, 2, '.', '')
      }, 1000)
    }
    
  }, 
  
  template:`
    <div class="shadow px-3 py-2">
      <strong>
        <div class="d-flex mb-0 justify-content-between">
          <div :class="closed ? 'text-secondary':'' " class="card-title mb-0">
            {{order.symbol}} 
            <span :class="(order.type=='BUY') ? 'text-success':'text-danger' " class="float-right mb-0">
              {{order.type}}
            </span>
            <small class="text-xs">{{order.time}}</small>
          </div>
          <div class="">
            <span class="btn-inner--icon d-none text-info p-2"><i class="fas fa-pen"></i></span>
            <span v-if="!closed" @click="close" class="btn-inner--icon p-2 text-danger"><i class="fas fa-times"></i></span>
          </div>
        </div>
      </strong>
      <div :class="closed ? 'text-secondary':'' " class="d-flex justify-content-between align-items-end">
        <div class="pl-2">
          <div class="text-sm mb-0">Strike rate: {{order.strikeRate}} </div>
          <div class="text-sm mb-0">
            <span v-if="closed">Closed at: </span> 
            <span v-else> Current rate: </span>
            {{currentRate}} 
          </div>
        </div>
        <span :class="closed ? 'opacity-5':'' ">
        <strong :class="(outcome >= 0) ? 'text-success':'text-danger' " class="mb-0"> {{ outcome }} </strong>
        </span>
      </div>
    </div>
  ` 
})

let app = new Vue({
  el: "#app", 
  data:{
    symbol: 'XRPUSDT', 
    totalBalance: 1000, 
    lot: 0.02,
    lotRange: 0.01, 
    price: 0.00,
    priceRange: 10,
    lastestSeries: null, 
    timer: null,
    chartLW: null, 
    chart: null, 
    volumeSeries: null, 
    orderBook: [] 
  },
  
  computed :{
    balance(){
      return number_format(this.totalBalance, 2, '.', ',') ;
    }
  }, 
  
  methods:{
    addLot(){
      this.resetAuto()
      if(this.lot < 1){
        let val = this.lot + parseFloat(this.lotRange)
        this.lot =  parseFloat(number_format(val, 3, '.', ))
      }else if (this.lot > 1)
        this.lot = 1
    }, 
    
    minusLot(){
      this.resetAuto()
      if(this.lot > 0.001){
        let val = this.lot - parseFloat(this.lotRange)
        this.lot =  parseFloat(number_format(val, 3, '.', ))
      }else if (this.lot < 0.001)
        this.lot = 0.001
    },
    
    resetAuto(){
      clearInterval(this.timer)
      setTimeout(()=>{
        this.autoSetPrice()
      }, 3000)
    }, 
    
    addPrice(){
      this.resetAuto()
      this.price += parseFloat(this.priceRange) 
    },
    
    minusPrice(){
      this.resetAuto()
      this.price -= parseFloat(this.priceRange)
    },
    
    placeOrder(action){
      if(this.lot > 1){
        showAlert('error', 'lot size must not be more than 1', 'Invalid lot size')
        return false;
      } else if(this.lot < 0.001){
        showAlert('error', 'lot size must not be less than 0.001', 'Invalid lot size')
        return false;
      } 
      
      this.orderBook.push({
        balance: this.totalBalance,
        id: this.orderBook.length, 
        type: action, 
        lot: this.lot,
        symbol: this.symbol,
        time: (new Date()).toLocaleString(), 
        strikeRate: this.price
      })
      
      localStorage.setItem('orders', JSON.stringify(this.orderBook))
      
      var msg = action+' order placed at '+this.lot+', '+this.price
      
      showAlert('success', msg, 'Order successful')
    }, 
    
    ws_server() {
      var wsymb = this.symbol.toLowerCase()
      var url = "wss://stream.binance.com:9443/ws/"+wsymb+"@kline_1m"
    
      var livedata = new WebSocket(url);
      //console.log(livedata)
      
      livedata.onerror = function(e){
        console.error(e);
      }
      
      var count = 0;
      
      livedata.onmessage = (e)=> {
        var d = JSON.parse(e.data);
       this.lastestSeries = d = d['k']
        var ld = {
          time: (d['t']/1000),
          open: parseFloat(d['o']), 
          high: parseFloat (d['h']),
          low: parseFloat (d['l']),
          close: parseFloat (d['c'])
        }
        
        if (count == 0) {
          console.log(d) 
          if(count == 0)
            this.autoSetPrice()
          count++
        }
        var rate = number_format(d['c'], 4, '.', '');
        eventBus.$emit(d['s'], rate)
        
        this.chart.update(ld)
      }
      
    }, 
    
    renderChart(){
      const el = document.getElementById('chart');
      const props = { 
        width: $('#chart').width(), 
        height: $('#chart').height(), 
        layout: {
          backgroundColor: "#252f40", 
          textColor: "#8392ab"
        }, 
        grid: {
          vertLines: "rgba(131, 146, 171, 1)", 
          horzLines: "rgba(131, 146, 171, 1)"
        }
      }
      
      this.chartLW = LightweightCharts.createChart(el, props);
      this.chart = this.chartLW.addCandlestickSeries();
      
      $(window).resize(()=>{
        this.chartLW.resize(
          $('#chart').width(),
          $('#chart').height()
        ) 
      })
  
      $.ajax({
        url: 'https://api.binance.com/api/v3/klines?&limit=500&symbol='+ this.symbol +'&interval=1m', 
        method: 'get', 
        success: (res)=>{
          try {
            var cdata = res.map(d =>{
              return {
                time: d[0]/1000,
                open: parseFloat(d[1]), 
                high: parseFloat (d[2]),
                low: parseFloat (d[3]),
                close: parseFloat (d[4])
              } 
            })
            var vol = res.map(d=>{
              return {
                time: d[0]/1000,
                value: parseFloat(d[5]),
              }
            })
            
            console.log("Start prepping data... ")
            this.chart.setData(cdata);
            
            $("#spin").addClass('d-none')
            
            this.ws_server() 
            console.log("data added")
          } catch (e) {
            console.error(e)
          } 
        }, 
        error: (e)=>{
          console.error(e)
        } 
      })
  
    }, 
    
    autoSetPrice(){
      this.timer = setInterval(()=>{
        var val = this.lastestSeries['c'] 
        this.price = parseFloat(number_format(val, 4, '.', '')) 
      }, 2500)
    }, 
  }, 
  
  mounted(){
    window.addEventListener('online', () => {
      console.log('Became online')
      $("#modal-offline").modal("hide")
      this.ws_server();
    });
    
    window.addEventListener('offline', () => {
      console.log('Became offline')
      $("#modal-offline").modal("show")
    });
    
    this.renderChart();
    
    $('#price, #lotsize').on('focus', ()=>{
      clearInterval(this.timer) 
    })
    
    $('#price, #lotsize').on('blur', ()=>{
      setTimeout(()=>{
        this.autoSetPrice()
      }, 3000)
    })
    
    eventBus.$on("update_balance", bal =>{
      this.totalBalance += parseFloat(bal)
      localStorage.setItem('balance', this.balance)
    })
  }, 
  
  beforeMount(){
    if (localStorage.getItem('orders')) {
      this.balance = localStorage.getItem('balance')
      this.orderBook = JSON.parse(localStorage.getItem('orders'));
    }
  }
})
      