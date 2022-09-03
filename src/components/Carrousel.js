const Carrousel = () => {
  return (
    <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://live.staticflickr.com/65535/48047838153_e3eb647208_k.jpg" class="w-full" alt="El logo de la marca PelidaMax"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://clongeek.com/wp-content/uploads/2020/01/Vengeance-6100-1.jpg" alt="cyberbros" border="0" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ryzen_4000.jpg" class="w-full" alt="El logo de la marca PelidaMax"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://cdn.wccftech.com/wp-content/uploads/2018/06/Cyberpunk-2077_2018_06-12-18_006-2060x1159.jpg" alt="Que arrecho" border="0" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}
export default Carrousel