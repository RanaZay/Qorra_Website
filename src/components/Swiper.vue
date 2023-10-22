<template>

        
        <swiper style="margin-left: 69px; margin-right: 69px;  "
        :slides-per-view="5"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
        
        
        <swiper-slide class="slide s1" >
            <p>تاريخ</p>
        </swiper-slide>
        
        <swiper-slide class="slide s2">
            <p>أدب</p>
        </swiper-slide>
        <swiper-slide class="slide s3">
            <p>شعر</p>
        </swiper-slide>
        <swiper-slide class="slide s4">
            <p>فنون</p>
        </swiper-slide>
        <swiper-slide class="slide s5">
            <p>فلسفة</p>
        </swiper-slide>
    </swiper>
    

</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    
    // Import Swiper styles
    import 'swiper/css';
    
    export default {
        components: {
            Swiper,
            SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
        };
      },
    };
  </script>
  <style scoped>
img{
z-index: 1;

}
swiper-slide{

}
.slide{
    display:flex;
    justify-content: center;
    height: 102px;
    border-radius: 3px; 
    min-width: 200px;
    flex-shrink: 0;


}
.s1{
    background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/Rectangle10.png');
    
    background-size: cover;
            background-repeat: no-repeat;
            background-size: 100% 102px;
}
.s2{
    background-size: cover;
    background-image: 
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('../assets/Rectangle9.png');
            background-repeat: no-repeat;
}
.s3{
    background-size: cover;
    background-image: 
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('../assets/Rectangle8.png');
            background-repeat: no-repeat;
}
.s4{
    background-size: cover;
    background-image: 
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('../assets/Rectangle7.png');
            background-repeat: no-repeat;
}
.s5{
    background-size: cover;
    background-image: 
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('../assets/Rectangle6.png');
            background-repeat: no-repeat;
}
.swiperArrow{
position:absolute;
margin-left:69px;
}
p{
    margin: auto;
    color: #FFF;
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Cairo;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
</style>