'use client'
import { styled } from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'

import Vijay, { vijayPoints } from '@/_floorplan/Vijay'

const MainStyle = createMainStyled()

export default function Home({ params }) {
  const [target, setTarget] = useState(null),
        projects = {
          VIJAYCondo: {
            name: 'Vijay Condo',
            jsx: <Vijay className='main-svg' setTarget={setTarget}/>,
            points: vijayPoints
          }
        },
        name = projects[params.project] ? projects[params.project].name : '',
        floorplan = projects[params.project] ? projects[params.project].jsx : '',
        points = projects[params.project] ? projects[params.project].points : [],
        pointCount = projects[params.project] ? projects[params.project].points.length : 0

  return (
    <MainStyle className='container'>
      <h1 onClick={() => history.back()}><FaArrowLeft/>{name || 'project not found'}</h1>
      {target && (
        <div className='dialog'>
          <div className="dialog__content">
            <ImCross className='cross clickable' onClick={() => setTarget(null)}/>
            <img src={`/portfolio/vijay/${target}.jpg`} alt={points[target]}/>
            <div className='controll'>
              <div className='clickable' onClick={() => {
                if (target === 1) {
                  setTarget(pointCount)
                  return
                }
                setTarget(target-1)
              }}>
                <IoIosArrowBack/> Previous
              </div>
              <div className='clickable' onClick={() => {
                if (target === pointCount) {
                  setTarget(1)
                  return
                }
                setTarget(target+1)
              }}>
                Next <IoIosArrowForward/>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='main'>
        {name && floorplan}
      </div>
    </MainStyle>
  )
}

function createMainStyled() {
  return styled.main`
    padding-top: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    h1 {
      display: flex;
      align-items: center;
      column-gap: 10px;
      cursor: pointer;
    }
    background-color: var(--mn-bg-color);
    .main {
      display: flex;
      justify-content: center;
      margin-block: auto;
      @media (orientation: portrait) {
        flex-grow: 1;
        flex-direction: column;
        margin: 0;
      }

    }

    .main-svg {
      height: 80vh;
      @media (orientation: portrait) {
        height: auto;
        rotate: 270deg;
        scale: 1.2;
      }
    }

    .dialog {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      z-index: 99;
    }

    .dialog__content {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: end;
      row-gap: 10px;

      img {
        height: 70vh;
      }

      @media (orientation: portrait) {
        width: 80vw;

        img {
          width: 100%;
          height: auto;
        }      
      }

      .controll {
        display: flex;
        align-self: stretch;
        justify-content: space-between;
      }
    }

    .clickable {
      cursor: pointer;
    }
  `
}