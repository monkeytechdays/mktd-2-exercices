import React from 'react'
import {StaggeredMotion, spring} from 'react-motion'

const maxWidth = 200
const maxHeight = 200
const heightSecurity = 40

export default (props) => {
  const maxValue = props.data.reduce((maxValue, {value}) => Math.max(maxValue, value), 0)
  const sliceWidth = maxWidth / props.data.length
  const margin = sliceWidth / 8
  const barWidth = sliceWidth / 4 * 3

  return <svg width='100%' height={`${200}px`} viewBox={`0 0 ${maxWidth} ${maxHeight}`} className='reversed'>
    <StaggeredMotion
      defaultStyles={
        props.data.map(({value}, index) => ({
          ratio: 0,
        }))
      }
      styles={(prevInterpolatedStyles) => prevInterpolatedStyles.map((style, i) => {
        return i === 0
          ? {ratio: spring(1, {stiffness: 150, damping: 12})}
          : {ratio: spring(prevInterpolatedStyles[i - 1].ratio, {stiffness: 120, damping: 10})}
      })}
    >
      {(interpolatingStyles) => (
        <g className='scoreBar'>
          {interpolatingStyles.map((style, index) => <g key={index}>
            <rect
              x={(barWidth + margin * 2) * index + margin}
              y={maxHeight - style.ratio * (maxHeight - heightSecurity) / maxValue * props.data[index].value}
              width={barWidth}
              height={style.ratio * (maxHeight - heightSecurity) / maxValue * props.data[index].value}
              className='scoreBar-value'
            />
            <text
              textAnchor='middle'
              x={(barWidth + margin * 2) * index + margin + barWidth / 2}
              y={maxHeight - style.ratio * (maxHeight - heightSecurity) / maxValue * props.data[index].value - 8}
              className='scoreBar-label'
            >
              {props.data[index].label}
            </text>
            <text
              textAnchor='middle'
              x={(barWidth + margin * 2) * index + margin + barWidth / 2}
              y={maxHeight - style.ratio * (maxHeight - heightSecurity) / maxValue * props.data[index].value + 22}
              className='scoreBar-score'
            >
              {props.data[index].value}
            </text>
          </g>)}
        </g>
      )}
    </StaggeredMotion>
  </svg>
}
//
// To rotate use transform="rotate(deg, cx, cy)", where deg is the degree you want to rotate and (cx, cy) define the centre of rotation.
//
// For scaling/resizing, you have to translate by (-cx, -cy), then scale and then translate back to (cx, cy). You can so this with a matrix transform:
//
// transform="matrix(sx, 0, 0, sy, cx-sx*cx, cy-sy*cy)"
// Where sx is the scaling factor in the x-axis, sy in the y-axis.
