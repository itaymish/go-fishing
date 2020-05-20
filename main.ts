sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    info.changeLifeBy(1)
    if (info.life() > 10) {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        otherSprite.setVelocity(0, 0)
        otherSprite.destroy(effects.disintegrate, 500)
        info.changeScoreBy(1)
        info.changeLifeBy(-1)
    }
})
info.onLifeZero(function () {
    game.over(false, effects.bubbles)
})
let fish: Sprite = null
let worms: Sprite = null
scene.setBackgroundColor(6)
let rod = sprites.create(img`
. f . 
2 2 2 
1 1 1 
2 2 2 
. 1 . 
. 1 . 
. 1 . 
. 1 . 
. 1 . 
. 1 . 
. 1 . 
. 1 . 
. 1 . 
. 1 . 
. 1 . 
. 1 . 
`, SpriteKind.Player)
controller.moveSprite(rod)
rod.setFlag(SpriteFlag.StayInScreen, true)
let line = sprites.create(img`
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
6 
`, SpriteKind.Enemy)
line.setPosition(0, 60)
info.setScore(0)
info.setLife(10)
game.onUpdateInterval(100, function () {
    effects.bubbles.startScreenEffect(5000)
})
game.onUpdateInterval(3000, function () {
    worms = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . d d . . . . . . 
. . . . . . . d d 1 d . . . . . 
. . . . . . d f d d 1 d . . . . 
. . . . . d d d f d d 1 d . . . 
. . . . d d d d d f d d 1 d . . 
. . . d d f f d d d f d d d . . 
. . d d f 2 2 f d d d f d . . . 
. d d d f 2 2 2 d d d d . . . . 
d f d d f 2 2 2 d d d . . . . . 
d d f d d d d d d d . . . . . . 
. d d f d d d d d . . . . . . . 
. . d d f d d d . . . . . . . . 
. . . d d f d . . . . . . . . . 
. . . . d d . . . . . . . . . . 
`, -50, 0)
    worms.setPosition(160, Math.randomRange(0, 120))
    worms.setKind(SpriteKind.Food)
})
game.onUpdateInterval(1000, function () {
    fish = sprites.createProjectileFromSide(img`
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . c c 
. . . c 4 d 4 4 4 4 4 1 c c 4 c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
. c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
. f 4 4 4 4 1 c c 4 4 d f f . . 
. . f f 4 d 4 4 4 4 4 c f . . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0)
    fish.setPosition(160, Math.randomRange(0, 120))
})
