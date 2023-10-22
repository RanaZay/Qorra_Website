<template>

        
    <swiper style="margin-left: 69px; margin-right: 69px;  "
    :slides-per-view="3"
    :space-between="58.5"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
    
    
    <swiper-slide class="slide s1" >
    </swiper-slide>
    
    <swiper-slide class="slide s2">
    </swiper-slide>
    <swiper-slide class="slide s3">
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

.slide{
    width: 394px;
height: 227px;
flex-shrink: 0;
border-radius: 2px;


}
.s1{
background-size: cover;
background-image: 
        url('../assets/Rectangle13.png');
        background-repeat: no-repeat;
        background-size: cover;
            background-repeat: no-repeat;
            background-size: 100% 227px;
}
.s2{
background-size: cover;
background-image: 
        url('../assets/Rectangle14.png');
        background-repeat: no-repeat;
        background-size: cover;
            background-repeat: no-repeat;
            background-size: 100% 227px;
}
.s3{
background-size: cover;
background-image: 
        url('../assets/Rectangle15.png');
        background-repeat: no-repeat;
        background-size: cover;
            background-repeat: no-repeat;
            background-size: 100% 227px;
}

</style>