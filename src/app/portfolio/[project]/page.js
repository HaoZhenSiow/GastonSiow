'use client'
import { styled } from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'

import FloorPlan6, { floorplan6Points } from '@/_floorplan/FloorPlan6'
import FloorPlan7, { floorplan7Points } from '@/_floorplan/FloorPlan7'

const MainStyle = createMainStyled()

export default function Home({ params }) {
  const [target, setTarget] = useState(null),

        prevBtnAttrs = { className: 'clickable', onClick: handleClickPrevious },
        nextBTNAttrs = { className: 'clickable', onClick: handleClickNext },

        projects = createProjectList(setTarget),
        project = projects[params.project] ? projects[params.project] : {},
        { name = '', jsx = '', points = [] } = project,
        pointCount = points.length

  return (
    <MainStyle className='container'>
      <h1 onClick={() => history.back()}><FaArrowLeft/>{name || 'project not found'}</h1>
      {target && (
        <div className='dialog'>
          <div className="dialog__content">
            <ImCross className='cross clickable' onClick={() => setTarget(null)}/>
            <img src={`/portfolio/${name}/${target}.jpg`} alt={points[target]}/>
            <div className='controll'>
              <div {...prevBtnAttrs}><IoIosArrowBack/> Previous</div>
              <div {...nextBTNAttrs}>Next <IoIosArrowForward/></div>
            </div>
          </div>
        </div>
      )}
      <div className='main'>{jsx}</div>
    </MainStyle>
  )

  function handleClickPrevious() {
    if (target === 1) {
      setTarget(pointCount)
      return
    }
    setTarget(target-1)
  }

  function handleClickNext() {
    if (target === pointCount) {
      setTarget(1)
      return
    }
    setTarget(target+1)
  }
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

function createProjectList(setTarget) {
  return {
    '157CRivervalveCres': {
      name: '157C Rivervalve Cres',
      jsx: <FloorPlan6 className='main-svg' setTarget={setTarget}/>,
      points: floorplan6Points
    },
    'VerdaleCondo': {
      name: 'Verdale Condo',
      jsx: <FloorPlan7 className='main-svg' setTarget={setTarget}/>,
      points: floorplan7Points
    }
  }
}