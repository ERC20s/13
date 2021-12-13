const box = new Entity();
box.addComponent(new GLTFShape("models/banker.glb"));
box.addComponent(new Transform({ position: new Vector3(4, 0, 8), scale: new Vector3(1, 1, 1) }));

box.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://dashboard.getblockcard.com/i/sDVaVe29")

  },
    { distance: 1000, hoverText: "Sign up here for a $10 bonus when you deposit $100!<br><br>We provide crypto debit/credit cards to the USA.<br>(Coming soon in EU/APAC/LATAM)<br><br>Many thanks,<br>Unbanked.com"
   }
)
)
engine.addEntity(box);


const tele = new Entity();
engine.addEntity(tele);
tele.addComponent(new GLTFShape("models/tele.gltf"));
tele.addComponent(new Transform({ position: new Vector3(14, 0, 14), scale: new Vector3(2, 2, 2) }));

tele.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://t.me/ternio_token")
  },
    { hoverText: "Join the Telegram!" }
)
)

const tele2 = new Entity();
engine.addEntity(tele2);
tele2.addComponent(new GLTFShape("models/teleg.gltf"));
tele2.addComponent(new Transform({ position: new Vector3(14, 0, 2), scale: new Vector3(2, 2, 2) }));

tele2.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://t.me/TERNunofficial")
  },
    { hoverText: "Join the TERN unofficial Moonboys!" }
)
)

const cg = new Entity();
engine.addEntity(cg);
cg.addComponent(new GLTFShape("models/cg.gltf"));
cg.addComponent(new Transform({ position: new Vector3(2, 0, 14), scale: new Vector3(2, 2, 2) }));

cg.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://www.coingecko.com/en/coins/ternio")
  },
    { hoverText: "CoinGecko!" }
)
)

const discord = new Entity();
engine.addEntity(discord);
discord.addComponent(new GLTFShape("models/disc.gltf"));
discord.addComponent(new Transform({ position: new Vector3(2, 0, 2), scale: new Vector3(2, 2, 2) }));

discord.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://discord.gg/g4dE8MpRrV")
  },
    { hoverText: "Join the discord!" }
)
)

const visa = new Entity();
engine.addEntity(visa);
visa.addComponent(new GLTFShape("models/visa.glb"));
visa.addComponent(new Transform({ position: new Vector3(7, 1, 1), scale: new Vector3(1, 1, 1), rotation: Quaternion.Euler(0, 0, 0), }));

visa.addComponent(
  new OnPointerDown(() => {
    teleportTo('-140,-23')
  },
    { hoverText: "Learn more here!" }
)
)

const myVideoClip = new VideoClip("unbank.mp4")

const myVideoTexture = new VideoTexture(myVideoClip)
myVideoTexture.playing = true
// #3
const myMaterial = new BasicMaterial()
myMaterial.texture = myVideoTexture

// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(15, 3, 8), scale: new Vector3(8, 5, 1), rotation: Quaternion.Euler(0, 270, 0) ,
  })
)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(
    (_e) => {
      myVideoTexture.playing = !myVideoTexture.playing
    },
    { hoverText: "Click to play/pause. 'U' to close the UI.",
    distance: 80,  }
  )
)
engine.addEntity(screen)

class SimpleRotate2 implements ISystem {
  update() {
    let transform = tele.getComponent(Transform)
    transform.rotate(Vector3.Up(), 0.5)
  }
}
class SimpleRotate3 implements ISystem {
  update() {
    let transform = tele2.getComponent(Transform)
    transform.rotate(Vector3.Up(), 0.5)
  }
}
class SimpleRotate4 implements ISystem {
  update() {
    let transform = cg.getComponent(Transform)
    transform.rotate(Vector3.Up(), 0.5)
  }
}
class SimpleRotate5 implements ISystem {
  update() {
    let transform = discord.getComponent(Transform)
    transform.rotate(Vector3.Up(), 0.5)
  }
}
engine.addSystem(new SimpleRotate2())
engine.addSystem(new SimpleRotate3())
engine.addSystem(new SimpleRotate4())
engine.addSystem(new SimpleRotate5())

const entity = new Entity('entity')
engine.addEntity(entity)
const gltfShape = new GLTFShape(
  'models/grass/FloorBaseGrass_01.glb'
)
entity.addComponent(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
})
entity.addComponentOrReplace(transform2)
