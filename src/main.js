import Phaser from 'phaser'
import { GAME_CONFIG } from './constants'
import Level1Scene from './scenes/level-1.scene'

const config = {
  ...GAME_CONFIG,
  type: Phaser.AUTO,
  scene: [Level1Scene],
}

export default new Phaser.Game(config)
