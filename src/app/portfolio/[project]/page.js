'use client'
import { styled } from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'
import useImgMapArea from 'react-img-map-area'

import KeenSlider from './KeenSlider'

const MainStyle = createMainStyled()

export default function Home({ params }) {
  const [target, setTarget] = useState(1),
        projects = createProjectList(setTarget),
        project = projects[params.project] ? projects[params.project] : {},
        { name = '', markers = [] } = project,
        imageSrc = markers.map((marker, inx) => ({
          hd: `/portfolio/${name}/${inx+1}.jpg`,
          blur: `/portfolio/${name}/${inx+1}-small.jpg`
        }))

  function closeDialog(e) {
    if (e.target === document.querySelector('.dialog')) {
      setTarget(null)
    }
  }

  useImgMapArea()

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
      <div className="main">
        <img src={`/portfolio/${name}/layout.png`} alt='2d drawing' useMap='#image-map' className='floorPlan'/>
        <map name="image-map">
          {markers.map(({ coords, name }, idx) => (
             <area key={idx} alt={name} title={name} href="#" coords={coords} shape="circle" onClick={e => {
              e.preventDefault()
              setTarget(idx+1)
             }}/>
          ))}
        </map>
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
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .floorPlan {
      width: 100%;
      -webkit-tap-highlight-color: transparent;

      @media (orientation: landscape) {
        rotate: 90deg;
        width: 60cqmin;
        scale: 1.2;
        align-self: center;
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
    '654BPunggol': {
      name: '654B Punggol'
    },
    '189AMarsilingRoad': {
      name: '189A Marsiling Road'
    },
    '788EWoodlandsCrescent': {
      name: '788E Woodlands Crescent',
      markers: [
        { coords: '438,233,36', name: 'Dinning Area 1' },
        { coords: '823,227,32', name: 'Dinning Area 2' },
        { coords: '1135,434,34', name: 'Living Room 1' },
        { coords: '1124,263,34', name: 'Living Room 2' },
        { coords: '1314,172,33', name: 'Living Room 3' },
        { coords: '999,554,28', name: 'Kitchen 1' },
        { coords: '1008,735,32', name: 'Kitchen 2' },
        { coords: '1077,760,37', name: 'Kitchen 3' },
        { coords: '1134,668,34', name: 'Common Bathroom' },
        { coords: '398,553,31', name: 'Guest Room' },
        { coords: '1267,1647,36', name: 'Master Bedroom 1' },
        { coords: '975,1558,32', name: 'Master Bedroom 2' },
        { coords: '1429,1550,33', name: 'Master Bedroom 3' },
        { coords: '987,1787,34', name: 'Master Bathroom 1' },
        { coords: '922,1828,32', name: 'Master Bathroom 2' },
        { coords: '290,1883,40', name: 'Entertainment Room 1' },
        { coords: '469,1769,38', name: 'Entertainment Room 2' },
        { coords: '678,1891,36', name: 'Entertainment Room 3' },
      ]
    },
    'DaintreeResidence': {
      name: 'Daintree Residence',
      markers: [
        { coords: '483,853,31', name: 'Dinning Area 1' },
        { coords: '626,589,27', name: 'Dinning Area 2' },
        { coords: '470,575,26', name: 'Living Room 1' },
        { coords: '541,382,27', name: 'Living Room 2' },
        { coords: '288,318,31', name: 'Master Bedroom 1' },
        { coords: '204,180,32', name: 'Master Bedroom 2' },
        { coords: '676,519,26', name: 'Study Room 1' },
        { coords: '775,550,31', name: 'Study Room 2' },
      ]
    },
    'FloraDriveResidential': {
      name: 'Flora Drive Residential'
    },
    '157CRivervalveCres': {
      name: '157C Rivervalve Cres',
      markers: [
        { coords: '756,529,35', name: 'Foyer Area' },
        { coords: '1218,983,32', name: 'Kitchen 1' },
        { coords: '1111,832,37', name: 'Kitchen 2' },
        { coords: '633,582,34', name: 'Dinning Area' },
        { coords: '749,737,32', name: 'Living Room 1' },
        { coords: '384,888,31', name: 'Living Room 2' },
        { coords: '348,1368,30', name: 'kid Room 1' },
        { coords: '531,1427,34', name: 'Kid Room 2' },
        { coords: '334,1296,35', name: 'Bedroom 1' },
        { coords: '501,1204,30', name: 'Bedroom 2' },
        { coords: '880,1522,31', name: 'Master Bedroom 1' },
        { coords: '767,1444,31', name: 'Master Bedroom 2' },
        { coords: '975,1313,34', name: 'Master Bathroom' },
        { coords: '889,1020,32', name: 'Common Bathroom' },
      ]
    },
    'VerdaleCondo': {
      name: 'Verdale Condo',
      markers: [
        { coords: '721,299,32', name: 'Living Room 1' },
        { coords: '251,310,34', name: 'Dinning Area' },
        { coords: '588,485,34', name: 'Living Room 2' },
        { coords: '818,1299,32', name: 'Master Bedroom' }
      ]
    },
  }
}