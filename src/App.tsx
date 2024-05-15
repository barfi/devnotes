import { Video } from './Video'
import { List } from './List'
import styles from './App.module.css'
import { useState } from 'react'

const LIST = [
  { n: 8, l: 'https://radium.cloud.kodik-storage.com/useruploads/7070e4b9-4ae0-4530-beb0-ac0945dd7c0b/15c342ebec54416258748c63c3d26c4b:2024051607/720.mp4' },
  { n: 9, l: 'https://meteor.cloud.kodik-storage.com/useruploads/1e57de4d-061c-4143-9272-2801d01d6298/5a114c939c2ca54a8eea28c9ec3cc555:2024051607/720.mp4' },
  { n: 10, l: 'https://pulse.cloud.kodik-storage.com/useruploads/798ed4e2-a758-4aa3-bc3b-e13c1912cd28/3ca7746c57d37875e936b30599402196:2024051607/720.mp4' },
  { n: 11, l: 'https://scorpius.cloud.kodik-storage.com/useruploads/5e53940a-969b-496e-8baa-c88b84ab4999/0d3463f11e20ff1863949549984867ed:2024051607/720.mp4' },
  { n: 12, l: 'https://pe.cloud.kodik-storage.com/useruploads/de4a5d59-5e7e-4740-a214-89cc68724b4e/09304c8dac997942125adf6cd555accd:2024051607/720.mp4' },
  { n: 13, l: 'https://acheron.cloud.kodik-storage.com/useruploads/7421aca8-643c-4efe-baa1-079c73743788/c32bcd9abac768d36ff3814d5747c15c:2024051607/720.mp4' },
  { n: 14, l: 'https://monoceros.cloud.kodik-storage.com/useruploads/bc0596ee-6fc9-40d2-92f3-3967bcf0163a/17761c69d4a152bf811678cb6b48d8e1:2024051607/720.mp4' },
  { n: 15, l: 'https://aurum.cloud.kodik-storage.com/useruploads/b14b7bca-cd62-4c95-aca2-58d28b1c49a0/50ea1610a190ab5c69de893679944a12:2024051607/720.mp4' },
  { n: 16, l: 'https://flerovium.cloud.kodik-storage.com/useruploads/c1c72a28-bf94-445c-83c7-d57338d3d9e9/27ad4708c8a602d73989919391fe39e2:2024051607/720.mp4' },
  { n: 17, l: 'https://turbo.cloud.kodik-storage.com/useruploads/8968948b-e3a5-4369-aee4-7b6f2e35b3b7/1c9e1279a4b46e88cca518acecb4410c:2024051608/720.mp4' },
  { n: 18, l: 'https://mystic.cloud.kodik-storage.com/useruploads/259b8d51-af5c-4aa9-bbf2-5475a57f5ac2/3d873a147d67562beac1483bfc3355ab:2024051608/720.mp4' },
  { n: 19, l: 'https://tornado.cloud.kodik-storage.com/useruploads/30cc2202-0971-4bd7-ae09-ecf2133f9ff1/7ca64aa3d4231c319af0fee2aae21d0d:2024051608/720.mp4' },
  { n: 20, l: 'https://glory.cloud.kodik-storage.com/useruploads/440c0461-02f0-4200-877b-47e382803b97/e6a36051f1f52193f33c7f6d16b799cd:2024051608/720.mp4' },
  { n: 21, l: 'https://pegasus.cloud.kodik-storage.com/useruploads/c4b378fb-94e2-4e82-aced-f00600f831ac/5db8a09da449e8180b79842746c6c563:2024051608/720.mp4' },
  { n: 22, l: 'https://turbo.cloud.kodik-storage.com/useruploads/03ccebf8-43bf-4e78-bc1a-c06590d498ee/86cdfb8b245c66a4b4cd70b9b46112af:2024051608/720.mp4' },
  { n: 23, l: 'https://apollo.cloud.kodik-storage.com/useruploads/539ec482-4bd1-4686-93e2-e46b95ceb692/464eb45a720a1e838f520e33e7819806:2024051608/720.mp4' },
  { n: 24, l: 'https://monoceros.cloud.kodik-storage.com/useruploads/f2c701f2-b99c-4b59-bd27-eaac5bcb317b/d3049d5b045a1dd9711ef086a4624a63:2024051608/720.mp4' },
  { n: 25, l: 'https://olympus.cloud.kodik-storage.com/useruploads/114e2334-10b8-48a0-ba44-0b8d8b68597a/dfdab8330dcd426c924263b53deb7d35:2024051608/720.mp4' },
  { n: 26, l: 'https://matrix.cloud.kodik-storage.com/useruploads/84aed2d2-5184-45d3-8c3b-caec5b5f45d0/18659704d56a1aa1f1de4dd380473599:2024051608/720.mp4' },
] as const

export const App = () => {
  const [idx, setIdx] = useState(0)

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Video link={LIST[idx].l}/>
      </div>
      <div className={styles.right}>
        <List
          items={LIST}
          cur={idx}
          onClick={idx => setIdx(idx)}
        />
      </div>
    </div>
  )
}