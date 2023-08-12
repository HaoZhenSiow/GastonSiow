import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import styled from 'styled-components';
import "keen-slider/keen-slider.min.css"
import Image from "next/image";

const Wrapper = createWrapper()
const Dots = createDots()

export default ({ images = [], target = 0 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [details, setDetails] = useState(null)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: target,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    detailsChanged(s) {
      setDetails(s.track.details)
    },
    created() {
      setLoaded(true)
    },
  })

  function scaleStyle(idx) {
    if (!details) return {}
    const slide = details.slides[idx]
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  return (
    <>
      <Wrapper>
        <div ref={sliderRef} className="keen-slider">
          {images.map((image, index) => (
            <div key={index} className="keen-slider__slide zoom-out__slide">
              <div style={scaleStyle(index)}>
                <Image src={image} alt="image" width={9763} height={9756} placeholder="blur" blurDataURL="/placeholder.jpg"/>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      {loaded && instanceRef.current && (
        <Dots>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map(idx => (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            ))}
        </Dots>
      )}
      </Wrapper>
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}


function createWrapper() {
  return styled.div`
    position: relative;

    .keen-slider__slide {
      cursor: grab;

      & > div {
        height: 100%;
        display: flex;
      align-items: center;
      }

      &:active {
        cursor: grabbing;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .arrow {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      fill: #fff;
      cursor: pointer;
    }

    .arrow--left {
      left: 5px;
    }

    .arrow--right {
      left: auto;
      right: 5px;
    }

    .arrow--disabled {
      fill: rgba(255, 255, 255, 0.5);
    }

  `
}

function createDots() {
  return styled.div`
    display: flex;
    padding: 10px 0;
    justify-content: center;

    .dot {
      border: none;
      width: 10px;
      height: 10px;
      background: #c5c5c5;
      border-radius: 50%;
      margin: 0 5px;
      padding: 5px;
      cursor: pointer;
    }

    .dot:focus {
      outline: none;
    }

    .dot.active {
      background: #000;
    }
  `
}