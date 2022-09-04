const Carrousel = () => {
  return (
    <div>
<div class="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ryzen_4000.jpg" class="w-full" alt="El logo de la marca PelidaMax"/>
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://www.rabinsxp.com/medias/AMD-Ryzen-7000-Processors-Price-Launch-Date.jpg" class="w-full" alt="El logo de la marca PelidaMax"/>
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://cdn.eteknix.com/wp-content/uploads/2020/11/ryzen-cpu-1.jpg" class="w-full" alt="El logo de la marca PelidaMax"/>
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://pcpla.net/wp-content/uploads/2021/03/69904/intel-raptor-lake-cpus-spotted-likely-to-be-alder-lakes-successor-1536x864.jpg" class="w-full" alt="El logo de la marca PelidaMax"/>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
</div>
  )
}
export default Carrousel