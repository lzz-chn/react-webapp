import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactSwiper from 'reactjs-swiper';
// import './sass/example.scss'; // 自定义 css

const ReactSwiperExample = data => {
    const items = [];
    data.datas.forEach((v, i) => {
        items.push({ image: v.img, title: v.title, link: `/TxtNav/${v.id}` });
    });

    const swiperOptions = {
        preloadImages: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
    };
    return (
        <ReactSwiper
            swiperOptions={swiperOptions}
            showPagination
            items={items}
            className="swiper-example"
        />
    );
};

export default ReactSwiperExample;
