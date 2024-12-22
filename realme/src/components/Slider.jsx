const Slider = ()=> {
    return (
        <main> 
        <div id="carouselExampleAutoplaying " className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner ">
              <div className="carousel-item active mt-5 ">
                <img src="https://image01.realme.net/general/20241212/17339677184375522816ea05448759b75ff71ccb7f35a.jpg.webp" className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="https://image01.realme.net/general/20241125/1732502822846997d10f6e07b4df484c81b3f21b49b0e.jpg.webp" className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="https://image01.realme.net/general/20241016/1729049579915e7f3d499d6754dd89a30480e54ed937d.jpg.webp" className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="https://image01.realme.net/general/20241012/1728700235469216bd1dea87245869ce9ad5fa2566b8e.jpg.webp" className="d-block w-100" alt="..."></img>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> 
    </main>

    )
    }

    export default Slider 