'use client'
import { styled } from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'

import KeenSlider from './KeenSlider'

import FloorPlan6, { floorplan6Points } from '@/_floorplan/FloorPlan6'
import FloorPlan7, { floorplan7Points } from '@/_floorplan/FloorPlan7'

const MainStyle = createMainStyled()

export default function Home({ params }) {
  const [target, setTarget] = useState(null),

        projects = createProjectList(setTarget),
        project = projects[params.project] ? projects[params.project] : {},
        { name = '', jsx = '', points = [] } = project,
        imageSrc = points.map((point, inx) => (
          `/portfolio/${name}/${inx+1}.jpg`
        ))

  function closeDialog(e) {
    if (e.target === document.querySelector('.dialog')) {
      setTarget(null)
    }
  }

  return (
    <MainStyle className='container'>
      <h1 onClick={() => history.back()}><FaArrowLeft/>{name || 'project not found'}</h1>
      {target && (
        <div className='dialog' onMouseDown={closeDialog}>
          <div className="dialog__content">
            <KeenSlider images={imageSrc} target={target}/>
          </div>
        </div>
      )}
      <div className='main'>{jsx}</div>
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
      width: 40vw;
      
     
      @media (orientation: portrait) {
        width: 80vw;

        & > div {
          width: 100%;
        }
      }

      
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