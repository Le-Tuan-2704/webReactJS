import React from 'react'
import './Slide.css'
function Slide() {
    return (
        <div class="header">
            <div class="container-fluid last">
                <div id="demo" class="carousel slide" data-ride="carousel">


                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>


                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://cdn.tgdd.vn/Files/2016/04/23/819804/anhpanorama6.jpg" alt="Los Angeles" width="1100" height="500" />
                        </div>

                        <div class="carousel-item">
                            <img src="https://cdn.tgdd.vn/Files/2016/04/23/819804/anhpanorama2.jpg" alt="Chicago" width="1100" height="500" />
                        </div>

                        <div class="carousel-item">
                            <img src="https://vanquyengallery.com/wp-content/uploads/2019/11/Tranh-paronama-Buoi-toi-Sai-Gon-5-6001.jpg" alt="New York" width="1100" height="500" />
                        </div>
                    </div>


                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Slide;