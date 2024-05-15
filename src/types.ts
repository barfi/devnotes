export type Nullable<T> = T | null

export type VideoEntity = {
  previous: Nullable<VideoEntity>
  next: Nullable<VideoEntity>
  name: string
  src: string
  num: number
  opening: [number, number]
  ending: number
}
