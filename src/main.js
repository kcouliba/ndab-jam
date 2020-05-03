import Phaser from 'phaser'
import Level1Scene from './scenes/level-1.scene'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {},
  },
  scene: [Level1Scene],
}

export default new Phaser.Game(config)
