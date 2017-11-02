import jss from './jss'
import * as theme from './theme'
import { createRotateAnimation } from './animation'


const rotateDegrees = [0.5, -1, 1.5, -2.3, 2.4, -1.5, 1, -1, 0.5]

const styles = {
  catLowerLegPaw: {
    position: 'absolute',
    height: 20,
    width: 20,
    ...createRotateAnimation(theme.durationSeconds, 0.3, undefined, rotateDegrees),
    zIndex: 1,
    transformOrigin: 'top center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundImage: `linear-gradient(to right, #fff, ${theme.colorFurLight}, ${theme.colorFurDark})`
  },
  catLegFirstNested: {
    bottom: 20
  },
  catLegNested: {
    top: '25%'
  },
  catLegSecond: {
    right: 0
  },
  catLowerPaw: {
    top: '50%',
    borderRadius: '50%',
    backgroundColor: '#fff'
  }
}

const {classes} = jss.createStyleSheet(styles, {link: true}).attach()

export default (isFirstLeg) => {
  let leg = ''
  if (isFirstLeg) {
    leg = `<div class="${classes.catLowerLegPaw} ${classes.catLegFirstNested}">`
  } else {
    leg = `<div class="${classes.catLowerLegPaw} ${classes.catLegFirstNested} ${classes.catLegSecond}">`
  }
  for (let t = 0; t <= 15; t++) {
    leg += `<div class="${classes.catLowerLegPaw} ${classes.catLegNested}">`
  }
  leg += `<div class="${classes.catLowerLegPaw} ${classes.catLowerPaw}"></div>`
  for (let t = 0; t <= 15; t++) {
    leg += '</div>'
  }
  leg += '</div>'
  return leg
}
