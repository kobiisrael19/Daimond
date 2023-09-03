function CarouselComp() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide  d-none d-md-block "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/6563393/pexels-photo-6563393.jpeg?auto=compress&cs=tinysrgb&"
            className="d-block w-100 boxsCarousel"
            alt="..."
          />
        </div>
        <div className="carousel-item " data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&"
            className="d-block w-100 boxsCarousel"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="src/imgs/img2.jpg"
            className="d-block w-100 boxsCarousel"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselComp;
