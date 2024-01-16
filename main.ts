scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field0, function (sprite, location) {
    tiles.setTileAt(location, sprites.builtin.field1)
    power_up = randint(0, 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.B.isPressed()) {
        level = next_lvl
        next_lvl += 1
        spawn_control = 0
    }
})
function hurt_time () {
    timer.background(function () {
        if (hurt == 0) {
            info.changeLifeBy(-1)
            hurt = 1
            pause(1000)
            hurt = 0
        }
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        sprites.destroy(otherSprite, effects.ashes, 200)
    } else {
        hurt_time()
    }
})
let mySprite2: Sprite = null
let power_up = 0
let next_lvl = 0
let level = 0
let spawn_control = 0
let hurt = 0
let punch = 0
hurt = 0
spawn_control = 0
level = 0
next_lvl = 1
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbb777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffbbbbbb777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffbbbbbbb777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffbbbbbb7777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffbbbbbb7777777777777777777777777777777777777777777777777777777777777
    7777777fffffff7777777777777777777777777777777777777777777777777777777777777777777777777777fffbbbbbb7777777777777777777777777777777777777777777777777777777777777
    7777777ffbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777ffbbbbbb77777777777777777777777777777777777777777777777777777777777777
    7777777ffbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777777777777777777ffbbbbbb77777777777777777777777777777777777777777777777777777777777777
    7777777ffbbbbbbbbbbbbbbbbbbb777777777fffff77777777777777777777777777777777777777777777777ffbbbbbbb77777777777777777777777777777777777777777777777777777777777777
    7777777ffbbbbbbbbbbbbbbbbbbbf77777777ffbbbbb777777777777777777777777777777777777777777777ffbbbbbbb77777777777777777777777777777777777777777777777777777777777777
    7777777ffbbbbbbbbbbbbbbbbbbbf7777777fffbbbbb777777777777777777777777777777777777777777777ffbbbbbb777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbbbbbb7fffbbbbbbbbf7777777fffbbbbb77777777777777777777777777777777777777777777fffbbbbbb777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbbbbbbbbbbbbbbbbbbf7777777ffbbbbbb77777777777777777777777777777777777777777777ffbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbbbbbbbbbbbbbbbbbbf7777777ffbbbbbb77777777777777777777777777777777777777777777ffbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbbbbbbbbbbbbbbbbbbf777777fffbbbbbb77777777777777777777777777777777777777777777ffbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbbbbbbbbbbbbbbbbbbf777777ffbbbbbbb77777777777777777777777777777777777777777777fbbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    7777777bbbbbbbbbbbbbbbbbbbfff777777ffbbbbbb777777ffffffffff77777777777777777777777777777fbbbbbb77777777777777777777777777777777777777777777777777777777777777777
    777777fbbbbbbbfffffffffffffff777777ffbbbbbb777bbbbbbbbbfffffff77777777777777777bbbbbbbbbbbbbbbb77777777777bbbbb7777777777777777777777777777777777777777777777777
    777777ffbbbbbbfffffffffffff77777777ffbbbbbb77bbbbbbbbbbbbbbffff7777777777777777bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbb7777777777777777777777777777777777777777777777777
    777777fffbbbbbfffffff77777777777777ffbbbbb777bbbbbbbbbbbbbbbbbfff77777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777777
    777777fffbbbbbfff777777777777777777fbbbbbb77bbbbbbbbbbbbbbbbbbbbfff777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777fffffffffffffffffffff77777777777777
    777777ffbbbbbb777777777777777777777fbbbbbb77bbbbbbbbbbbbbbbbbbbbbbf777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffbbbbbbbbbbbbffffffffffffff77777777777777
    777777ffbbbbbb777777777777777777777fbbbbbb7bbbbbbbbbbbbbbbbbbbbbbbfff77777777777777ffffffbbbbbbbbbbbbbbbbbbbbbb777ffbbbbbbbbbbbbbbbbbbbbbbbfffffff77777777777777
    777777fbbbbbbb777777777777777777777fbbbbbb7bbbbbbbf222bbbbbbbbbbbbbbbf777777777777777777ffbbbbbffffbbbbbbbbb777777ffbbbbbbbbbbbbbbbbbbbbbbbfffffff77777777777777
    777777fbbbbbbb777777777777777777777bbbbbbb7bbbbbbbf22222fbbbbbbbbbbbbbff7777777777777777fbbbbbb7777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbfffffff77777777777777
    777777fbbbbbb7777777777777777777777bbbbbb7bbbbbbbf22222222fbbbbbbbbbbbbbb777777777777777fbbbbbb7777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbb777777777777777777777
    777777bbbbbbb777777777777777777777bbbbbbb7bbbbbbbf222222222ffbbbbbbbbbbbbbb7777777777777fbbbbbb777777777777777777777bbbbbbbb777bbbbbbbbbbbb777777777777777777777
    777777bbbbbbb777777777777777777777bbbbbbb7bbbbbbf2222222222222bbbbbbbbbbbbbbb77777777777fbbbbbb77777777777777777777777777777777777777777777777777777777777777777
    777777bbbbbb7777777777777777777777bbbbbb77bbbbbbb222222222222222bbbbbbbbbbbbbb7777777777fbbbbb777777777777777777777777777777777777777777777777777777777777777777
    777777bbbbbb7777777777777777777777bbbbbb77bbbbbbbb222222222222222fbbbbbbbbbbbbb777777777fbbbbbb77777777777777777777777777777777777777777777777777777777777777777
    777777bbbbbb7777777777777777777777bbbbbb77bbbbbbbbbb222222222222222bbbbbbbbbbbbb77777777fbbbbbb77777777777777777777777777777777777777777777777777777777777777777
    77777bbbbbbf777777777777777777777bbbbbbb77bbbbbbbbbbbbbb222222222bbbbbbbbbbbbbbb77777777fbbbbbb77777777777777777777777777777777777777777777777777777777777777777
    77777bbbbbbf77777777777777777777bbbbbbbb777bbbbbbbbbbbbbbbbbbb2bbbbbbbbbbbbbbbbbff777777fbbbbbb77777777777777777777777777777777777777777777777777777777777777777
    77777bbbbbbf77777777777777777777bbbbbbbb7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbff7777777bbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    77777bbbbbbf77777777777777777777bbbbbbbf77777bbbbbffffbbbbbbbbbbbbbbbbbbb22bbbbbff7777777fbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    77777bbbbbff77777777777777777777bbbbbbbf777777fbbbfffffffffbbbbbbbbbbbbb222bbbbbff7777777fbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    77777bbbbbff77777777777777777777bbbbbbff7777777fffffffbffffffffffbbbbf2222222ddddd7777777fbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    7777bbbbbbff7777777777777777777777ffffff77777777ff222222fbbbffffffbb222222222dddddd777777fbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    7777bbbbbbff7777777777777777777777fffff777777777ffff2222222222ff22f2222222222dddddd777777fbbbbbb7777777777777777777777777777777777777777777777777777777777777777
    7777bbbbbbff7777777777777777777777fffff777777777fffffff2222222222222222222222dddddd77777777777777777777777777777777777777777777777777777777777777777777777777777
    7777bbbbbbf7777777777777777777777776666666666677fffffffffff2222222222222222dddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777
    7777bbbbbbf77777777777777777777666666666666666666ffffffffffffff2222222222dddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777
    7777bbbbbff777777777777777777766666666666666666666ffffffffffffffff2dddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777
    7777bbbbbf777777777777777776666666666666666666666666777ffffffffffffdddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777
    77777fffff7777777777777777666666666666666666666666666677777ffffffffddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777fffff77777777777777666666666666666777666666666666677777777ffffddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777666666666666666667777777776666666666667777777777ddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777776666666666666666666666666667777777777777666666666677777777777776dddddd77777776666677777777777777777777777777777777777777776666666777777777777777777777777
    7777777666666666666666666666666677777777777777776666666667777777766666666666677777776666666777777777777777777777777777766666666666666666666777777666666667777777
    7777777666666666666666666666667777777777777777777666666667777766666666666666666777776666666677777777777777777777777777666666666666666666666667776666666666667777
    7777777666666666666666666666777777777777777777777776666667666666666666666666666677776666666667777777777777777777777777666666666666666666666667776666666666666677
    7777777666666666666666666777777777777777777777777776666666666666666666666666666667776666666666677777777777777666666777666666666666666666666667776666666666666677
    7777777777777777776666667777777777777777777777777766666666666666666666666666666666777666666666666777777777776666666777666666666666666666666667776666666666666677
    7777777777777777776666677777777777777777777777776666666666666666666666666666666666677766666666666677777777766666666777666667777777777776666667766666666666666667
    7777777777777777776666677777777777777777777777766666666666666666667777777766666666666776666666666667777777766666666777666667777777777777777777766666677666666667
    7777777777777777776666677777777777777777777777666666666666666667777777777777666666666677766666666666777777666666666776666667777777777777777777766666677776666667
    7777777777777777776666677777777777777777777776666666666666666776677777776667766666666666776666666666677777666666667776666667777777777777777777766666677776666667
    7777777777777777776666677777777777777777777766666666666666666776677777776667776666666666677766666666667766666666777776666667777777777777777777766666677777666667
    7777777777777777766666677777777777777777777666666666666666677776677777776667777666666666667776666666666766666666777776666667777777777777777777766666777777666667
    7777777777777777766666677777777777777777766666666666666666677776677777776667777776666666666777766666666666666667777776666677777777777777777777766666777776666667
    7777777777777777766666677777777777777777666666666666666666777776677777776667777777666666666667776666666666666667777776666677777777777777777777766666777776666667
    7777777777777777666666677777777777777776666666666666666667777777666777766677777777776666666667777666666666666677777776666677777777777777777777766666777776666667
    7777777777777777666666777777777777777666666666667666666667777777766777766677777777777666666666777766666666666777777776666677777777777777777777766666777766666667
    7777777777777776666666777777777777766666666666677666666677666667766666666676666677777766666666777766666666667777777776666677777777777777777777766666777666666667
    7777777777777776666666777777777776666666666667776666666777666667776666666776666677777776666666777766666666677777777776666667777777777777777777766666666666666677
    7777777777777776666667777777777766666666666667776666666777666667777777777776666677777777666666777666666666677777777776666667777766666666777777766666666666666677
    7777777777777776666667777777766666666666666777776666667777666667777777777776666677777777766666776666666666667777777776666667666666666666777777766666666666666677
    7777777777777776666677777666666666666666677777766666667777666667777777777776666677777777766666776666666666666777777776666666666666666666777777766666666666666777
    7777777777777776666666666666666666666667777777766666677777777777777777777777777777777777666666776666666666666777777777666666666666666666777777766666666666677777
    7777777777777776666666666666666666666677777777666666677777777777777777777777777777777777666666776666666666666677777777666666666666666666777777766666666677777777
    7777777777777776666666666666666666667777777776666666677777777777777777777777777777777777666666776666677666666677777777666666666666666777777777766666666677777777
    7777777777777776666666666666666666666777777776666666777777777777777777777777777777777776666666776666677666666677777777666666666677777777777777766666666677777777
    7777777777777776666666666666666666666667777776666666777777777777777666666677777777777766666667776666677766666667777777666666777777777777777777766666666667777777
    7777777777777776666677766666666666666666677776666667777777777766666666666666777777777766666667766666677766666667777777666666777777777777777777766666666667777777
    7777777777777776666667777777666666666666666776666677777777766666666666666666677777777666666667766666677776666667777777666666777777777777777777766666666666777777
    7777777777777776666667777777776666666666666666666677777777766666666666666666667777776666666677666666677776666666777777666666677777777777777777766666666666677777
    7777777777777776666667777777777776666666666666666677777777766666666666666666667777776666666776666666677776666666677777766666677777777777777777766666666666667777
    7777777777777776666667777777777777766666666666666667777777666666666666666666667777776666666776666666777777666666677777766666667777777777777777766666666666667777
    7777777777777777666667777777777777776666666666666667777776666666667777766666667777766666667776666666777777666666677777766666667777777777777777766666666666666777
    7777777777777777666667777777777777777766666666666667777776666666777777777666667777766666677766666666777777766666677777776666667777777777777777766666666666666667
    7777777777777777666667777777777777777777666666666666777776666666777777777666667777666666677766666667777777766666677777776666667777777777777777766666677666666666
    7777777777777777666667777777777777777777766666666666777776666666777777777666667777666666677666666677777777776666667777777666667777777777777777766666667666666666
    7777777777777777666667777777777777777777776666666666777776666667777777777777777776666666776666666677777777776666667777777666667777777777777777776666667766666666
    7777777777777777666667777777777777777777776666666666677776666677777777777777777766666666776666666677777777776666667777777666667777777777777777776666667776666666
    7777777777777777666667777777777777777777766666666666677777777777777777777777777666666667776666666777777777776666667777777666667777777777777777776666667777766666
    7777777777777777666667777777777777777777766666666666667777777777777777777777776666666667766666667777777777777666667777776666667777777777777777777666667777776666
    7777777777777777666666777777777777777777666666666666666677777777777777777777666666666677766666667777777777777666667777776666667777777777777777777666667777776666
    7777777777777777666666777777777777777777666666666666666667777777777777777766666666666777666666677777777777777666667777766666667777777777777777777666667777776666
    7777777777777777666666777777777777777777666666676666666666667777777777776666666666667777666666677777777777777666667777766666667777777777777777777666667777776666
    7777777777777777666666777777777777777777666666777666666666666667777777766666666666677777666666777777777777777666667777766666677777777777777777776666667777776666
    7777777777777777766666777777777777777776666667777766666666666666667766666666666666777777666666777777777777777666666777766666666677776666677777776666667777776666
    7777777777777777766666777777777777777776666667777777666666666666666666666666666677777777666667777777777777777666666677766666666666666666677777776666667777776666
    7777777777777777766666777777777777777766666667777777766666666666666666666666667777777777666667777777777777777666666677766666666666666666677777776666667777776666
    7777777777777777666666777777777777777666666667777777777766666666666666666666777777777777666667777777777777777666666677766644444444444444477777776666677777776666
    7777777777777777666666777777777777766666666677777777777777766666666666666667777777777777666667777777777777777766666677764444444444444444444444446666677777776666
    7777777777777777666666777777776666666666666677777777777777777766666666667777777777777777666667777777777777777776666677744444444444444444444444446666677777776666
    7777777777777777666666666666666666666666666677777777777777777777777777777777777777777777666667777777777777777777777777744444444444444444444444446666677777776666
    4444444444777777666666666666666666666666666777777777444444444444444444447777777777777777666667777777777777777777777777744444444444444444444444446666677777776666
    4444444444444444444466666666666666666666677777777744444444444444444444444444444444447777777777777777744444444444444444444444444444777444444444447777777777777666
    4444444444444444444444444444444444444444477777777744444444444444444444444444444444444447777777774444444444444444444444444444444444447777744444447777777777777666
    4444444444444444444444444444444444444444444777777744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444777777777777666
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444777777777777
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444447777777777
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444447777777777444444444444444444444444444444444444444777777
    7444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444447777777777777774444444444744444444444444444444444444447777
    7744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444447777777777777777444444444444444444444444444444444444444444444477
    7774444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444477744444444444444444444444444444444444444444444444444
    7777444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    7777774444444444444444444444444444444444444444444444444444447777444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    7777777444444444444444444444444444444444444444444444444444444477774444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    7777777777444444444444444444444444444444444444444444444444444444444444444444444444444444444744444444444444444444444444444444444444444444444444444444444444444444
    7777777777774444444444444444444444444444444444444444444444444444444444444444444444444444444444777774444444444444444444444444444444444444444444444444444444444444
    7777777777777444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    7777777777777744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444447777777777744444444
    7777777777777744444444444444444444477744444444444444444744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444477
    7777777777777744444444444444444444777777774444444444444777777744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    7777777777777744444444444444777777777777777774444444444777777744444444477777777774444444444444444444444444444444444444444444444444444444444444444444444444444444
    7777777777777744444774444444777777777777777777777777777777777744444447777777777774444444444444444444444444444444444444444444444444444444444444444444444444444444
    7777777777777744444774444447777777777777777777777777777777777777777777777777777774444444444444444444444444444444444444444444444444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444777777777744444444444444444447777777777777777777777777777744444444444
    `)
music.play(music.createSong(hex`0078000408040404001c00100500640000041e000004000000000000000000000000000a04000430002c003000010530003400010534003800010538003c00010854005800010558005c0001055c006000010560006400010806001c00010a006400f401640000040000000000000000000000000000000002300018001c0001181c002000010520002400011124002800010a40004400011844004800010548004c0001114c005000010a07001c00020a006400f4016400000400000000000000000000000000000000031e0068006c00012c6c007000012570007800011e78007c00011d7c008000011908001c000e050046006603320000040a002d0000006400140001320002010002340004000800010508000c0001050c00100001051000140001085400580002051958005c000205195c0060000205196000640002081b`), music.PlaybackMode.UntilDone)
let text_list = ["far away is a dungeon", "which the evilest ", "LIVES"]
for (let value of text_list) {
    game.showLongText(value, DialogLayout.Full)
}
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 26))
controller.moveSprite(mySprite)
mySprite.setScale(0.6, ScaleAnchor.Middle)
music.play(music.createSong(hex`0078000408020504001c00100500640000041e000004000000000000000000000000000a04000419000c00100003191b1d340038000c0506080a0c0d0f111214161805001c000f0a006400f4010a00000400000000000000000000000000000000020c0004000800012c2c003000012907001c00020a006400f401640000040000000000000000000000000000000003120014001800011918001c00011d1c002000012008001c000e050046006603320000040a002d0000006400140001320002010002060024002800012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80008000c000d0003000102`), music.PlaybackMode.LoopingInBackground)
info.setLife(3)
forever(function () {
    power_up = 5
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setImage(assets.image`myImage`)
    }
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        mySprite.setImage(img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ......................dddbb...
            ..ddbb.........e..ee.ddddddd..
            .ddddd.......eeecceeeedddddd..
            dddddd.....eeccceeee..9ddddd..
            dddddd....eeceeeeeeec99666d...
            dddddd....eeeeeeccc..966666...
            .ddddd..eeeebddddd...966666...
            .dddd66.eebddffdff...966666...
            .d666688ebdddffdff...966666...
            .dd66688ddddddddddd.9966666...
            ..66668fddddddddddd.966668....
            ..66668fbddddfffff..966668....
            ..69666ffbbbdfffff.9666668....
            ...96668999686686666666668....
            ...9966869668668666666668.....
            ....996869668668666866668.....
            .....96869668668686866688.....
            .....968996986698668668.......
            .....99866688666666868........
            ......986966666666688.........
            .......8696688886668..........
            ........966866668668..........
            .......9968666666868..........
            ........968666666866..........
            ........968888888869..........
            ........77777777777...........
            ........77777777777...........
            ........7776...77777..........
            .......77776...77776..........
            .......7776.....7776..........
            ........ddd.....ddd...........
            ........ddd.....ddd...........
            ........ddd.....ddd...........
            ........ddd.....ddd...........
            ........eee.....eee...........
            ......eeeee.....eeeee.........
            .....eeeeee.....eeeeee........
            .....ffffff.....ffffff........
            `)
    }
    if (0 < level) {
        mySprite.ay = 1000
        if (power_up == 5) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            controller.moveSprite(mySprite, 150, 0)
            if (controller.A.isPressed()) {
                if (mySprite.vy == 0) {
                    mySprite.vy = -652
                }
            }
        } else {
            controller.moveSprite(mySprite, 69, 0)
            if (controller.A.isPressed()) {
                if (mySprite.vy == 0) {
                    mySprite.vy = -300
                }
            }
        }
        if (controller.B.isPressed()) {
            if (punch == 0) {
                timer.background(function () {
                    mySprite.setImage(assets.image`myImage0`)
                    pause(5000)
                    punch = 1
                    mySprite.setImage(assets.image`myImage`)
                    punch = 0
                })
            } else {
                if (!(power_up == 5)) {
                    mySprite.setImage(assets.image`myImage`)
                }
            }
        }
    }
    if (level == 1) {
        if (spawn_control == 0) {
            tiles.setCurrentTilemap(tilemap`level0`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 43))
            mySprite2 = sprites.create(img`
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ........d555555...............
                .......d555544555dd...........
                .....dd55ddddddd45............
                .......dffdffddd444...........
                .......dffdffdddddd...........
                ........ddddddddddd...........
                ........fffffdddddd...........
                ........fffffffdddd...........
                ........42222ff2222...........
                ........4222222222222.........
                ......44422222222222244.......
                .....4422222222222222244......
                ....44222422222222222224......
                ...4422224222222222222222.....
                ...4222224422222222222222.....
                ...d222222442222222222222.....
                ..dd2222222422222224.222d.....
                ..ddddd4422422222224.222dd....
                ..ddddd.422222222222.ddddd....
                ...ddbb.444222222222.ddddd....
                ........88888888888..ddbb.....
                ........88888888888...........
                ........8886...88888..........
                .......88886...88886..........
                .......8886.....8886..........
                ........ddd.....ddd...........
                ........ddd.....ddd...........
                ........ddd.....ddd...........
                ........ddd.....ddd...........
                ........777.....777...........
                ......77776.....77776.........
                .....777766.....777666........
                .....ffffff.....ffffff........
                `, SpriteKind.Enemy)
            mySprite2.ay = 1000
            mySprite2.setScale(0.6, ScaleAnchor.Middle)
            tiles.placeOnTile(mySprite2, tiles.getTileLocation(19, 42))
            mySprite2.follow(mySprite, 30)
            spawn_control = 1
        }
    }
})
