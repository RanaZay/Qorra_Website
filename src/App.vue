<template>
    
    <html lang="ar" dir="rtl" data-bs-theme="auto">
  
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
      <meta name="generator" content="Hugo 0.115.4">
      <title>قالب المدونة · Bootstrap v5.3</title>
  
      <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/blog-rtl/">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
  
      <link href="../assets/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
      <!-- Custom styles for this template -->
      <link href="https://fonts.googleapis.com/css?family=Amiri:wght@400;700&amp;display=swap" rel="stylesheet">
      <!-- Custom styles for this template -->
      <link href="../blog/blog.rtl.css" rel="stylesheet">
  
    </head>
  <body>
    
    <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary" dir="ltr">
      <div class=" container-fluid">
        <img class="jaredaImage" src="./assets/jareeda.svg" alt="" style="margin-left: 70px;">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
              <ul class="bar navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item" style="margin-right: 77px;">
                      <router-link to="/" class="nav-element nav-link ">راسلنا</router-link> 
                    </li>
                    <li class="item nav-item">
                      <router-link to="/about" class="nav-element nav-link ">من نحن</router-link> 
                  </li>

                  <li class="item nav-item">
                      <router-link to="/" class="nav-element nav-link ">الرئيسية</router-link> 
                  </li>

              </ul>


              <form class="d-flex" role="search">
                  <label for="search" dir="rtl">

                      <input class="search " id="search" type="search" placeholder="بحث" aria-label="Search">

                  </label>
                  <div class="button">

                      <button class="searchButton" type="submit">
                          <span class="tatawa3">
                            <router-link to="/Search">تطوع معنا</router-link>
                          </span>
                      </button>
                  </div>
              </form>
            </div>
          </div>
        </nav>
        <router-view/> 
        <Footer></Footer>
      </body>
      </html>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
  Footer,
  }
}
</script>

<style scoped>
.navbar {
  height: 85px;
  border: 0px, 0px, 0.5px, 0px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px 0px #00000026;
  

}
.button{
width:155px;
}
.searchButton {
  width: 100%;
  height: 43px;
  top: 21px;
  left: 1215px;
  border-radius: 2px;
  background: #5165FD;
  border-style: none;

}

.tatawa3 {

  font-family: Cairo;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: right;
  color: #FFFFFF;


}

.search {
  width: 237px;
  height: 43px;
  top: 21px;
  left: 958px;
  border-radius: 2px;
  background: #EEEEEE;
  margin-right: 20px;
  border: none;
}

.jaredaImage {
  width: 80px;
  height: 68px;
  top: 8px;
  left: 70px;
}

label {
  position: relative;
}

label:before {

  content: "";
position: absolute;
right: 30px;
margin-top:12px;
top: 0;
bottom: 0;
width: 20px;
  background: url(./assets/Search.svg );
  background-repeat: no-repeat;
}
input {
padding: 10px 30px;
}

::placeholder {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: right;
  margin-right: 10px;

}

.navitems {
  width: 329px;
  height: 14px;
  top: 35px;
  left: 456px;

}

.nav-element {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;

}

.bar {
  /* display: inline-block; */
  /* margin-right:173px; */
  top: 35px;
  /* display: flex;
  justify-content: center;
  align-items: center; */

}
</style>