import React from 'react'
import {StaggeredMotion, spring} from 'react-motion'

const maxWidth = 400
const maxHeight = 200
const heightSecurity = 40

const BarChart = (props) => {
  // Vous pouvez vous débarasser de ces initialisation si cela vous perturbe.
  // Le but est juste de faire un graphique avec une barre par personne qui est
  // plus ou moins haute selon le score
  const maxValue = props.data.reduce((maxValue, {value}) => Math.max(maxValue, value), 0)
  const sliceWidth = maxWidth / props.data.length
  const margin = sliceWidth / 8 // margin between each bar
  const barWidth = sliceWidth / 4 * 3

  // Remplacer le composant <TODO />
  return <svg>
    <TODO />
  </svg>
}

BarChart.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default BarChart
