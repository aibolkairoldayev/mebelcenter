new Vue({
  el: '#app',
  data() {
    return {
      isSliderShow: 1,
      interval: null
    }
  },
  methods: {
    slider1() {
      clearInterval(this.interval)
      this.isSliderShow = 1
      this.setTime()
    },
    slider2() {
      clearInterval(this.interval)
      this.isSliderShow = 2
      this.setTime()
    },
    slider3() {
      clearInterval(this.interval)
      this.isSliderShow = 3
      this.setTime()
    },
    slider4() {
      clearInterval(this.interval)
      this.isSliderShow = 4
      this.setTime()
    },
    slider5() {
      clearInterval(this.interval)
      this.isSliderShow = 5
      this.setTime()
    },
    slider6() {
      clearInterval(this.interval)
      this.isSliderShow = 6
      this.setTime()
    },
    slider7() {
      clearInterval(this.interval)
      this.isSliderShow = 7
      this.setTime()
    },
    slider8() {
      clearInterval(this.interval)
      this.isSliderShow = 8
      this.setTime()
    },
    sliderSwipeLeft() {
      if (this.isSliderShow > 0 && this.isSliderShow < 8) {
        clearInterval(this.interval)
        this.isSliderShow = this.isSliderShow + 1
        this.setTime()
      } else {
        this.isSliderShow = 1
      }
    },
    sliderSwipeRight() {
      if (this.isSliderShow > 1 && this.isSliderShow < 9) {
        clearInterval(this.interval)
        this.isSliderShow = this.isSliderShow - 1
        this.setTime()
      } else {
        this.isSliderShow = 8
      }
    },
    setTime() {
      this.interval = setInterval(() => {
        if (this.isSliderShow !== 8) {
          this.isSliderShow ++
        } else {
          this.isSliderShow = 1
        }
      }, 3000);
    }
  },
  watch: {
    
  },
  mounted() {
    this.setTime()
  }
})


$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay:true,
    autoplaySpeed:3000,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    infinity: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });
});