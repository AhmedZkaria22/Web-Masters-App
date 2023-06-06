import React from 'react'
import Slider from 'react-slick';
import TestimonialItem from '../../Molecules/TestimonialItem/TestimonialItem';

function SliderButton({text, click, onClick}) {
    return(
        <button type="button" data-role="none" className={`slick-arrow slick-${text}`} onClick={() => { onClick(); click();}}> text </button>
    )
}

function TestimonialsSlider() {
    const handleClick = (str) => {
        const nextArrow = document.querySelector('.TestimonialsSlider') !== null && document.querySelector('.TestimonialsSlider .slick-arrow.slick-next'),
        prevArrow = document.querySelector('.TestimonialsSlider') !== null && document.querySelector('.TestimonialsSlider .slick-arrow.slick-prev');
        console.log(nextArrow, prevArrow, str);
        if(str === 'next'){
            prevArrow.classList.remove('slick-arrow-active');
            nextArrow.classList.add('slick-arrow-active');
        }else{
            nextArrow.classList.remove('slick-arrow-active');
            prevArrow.classList.add('slick-arrow-active');
        }
    }
    const handleSwapButton = (swipeDircection) => {
        const nextArrow = document.querySelector('.TestimonialsSlider') !== null && document.querySelector('.TestimonialsSlider .slick-arrow.slick-next'),
        prevArrow = document.querySelector('.TestimonialsSlider') !== null && document.querySelector('.TestimonialsSlider .slick-arrow.slick-prev');
        if(swipeDircection === 'left'){
            prevArrow.classList.remove('slick-arrow-active');
            nextArrow.classList.add('slick-arrow-active');
        }else{
            nextArrow.classList.remove('slick-arrow-active');
            prevArrow.classList.add('slick-arrow-active');
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SliderButton text={'next'} click={() => handleClick('next')} />,
        prevArrow: <SliderButton text={'prev'} click={() => handleClick('prev')} />,
        onSwipe: (swipeDircection) => { handleSwapButton(swipeDircection) }
    };
    const TestimonialsData = [
        {            
            text: "Whenever I think of quality education now, I think of them instantly. I've done so many courses in my free time and learned so much! Thank you, for redefining online education for me!",
            name: 'Ellison Morkel'
        },
        {            
            text: "Whenever I think of quality education now, I think of them instantly. I've done so many courses in my free time and learned so much! Thank you, for redefining online education for me!",
            name: 'Ellison Morkel'
        },
        {            
            text: "Whenever I think of quality education now, I think of them instantly. I've done so many courses in my free time and learned so much! Thank you, for redefining online education for me!",
            name: 'Ellison Morkel'
        }
    ]
    return (
        <div className='TestimonialsSlider'>
        <Slider {...settings}>
            {
                TestimonialsData.map( (testimonial, index) => {
                    return(
                        <div key={index}>
                            <TestimonialItem text={testimonial.text} name={testimonial.name} index={index} />
                        </div>
                    )
                } )
            }
        </Slider>
        </div>
    );      
}

export default TestimonialsSlider