import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CourseItem from '../../Molecules/Courses/CourseItem';
import { images } from '../../../Assets/AssetHelper';

function CoursesSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
              }
            }
        ]
    };
    const CoursesData = [
        {
            img: images.course1,
            text: 'Online Microsoft Excel Certification Bundle',
            badge1: 4.8,
            badge2: 50
        },
        {
            img: images.course2,
            text: 'Digital Marketing & SEO Diploma',
            badge1: 4.1,
            badge2: 25
        },
        {
            img: images.course3,
            text: 'Native Speaking English & Learing Masterclass',
            badge1: 3.8,
            badge2: 32
        }
    ];

    return (
        <div className='CoursesSlider'>
        <Slider {...settings}>
            {
                [...CoursesData, ...CoursesData, ...CoursesData].map( (course, index) => {
                    return(
                        <div key={index}>
                            <CourseItem img={course.img} text={course.text} badge1={course.badge1} badge2={course.badge2} index={index} />
                        </div>
                    )
                } )
            }
        </Slider>
        </div>
    );      
}

export default CoursesSlider