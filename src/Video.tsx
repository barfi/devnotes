import styles from './Video.module.css'

type Props = {
  link: string
}

export const Video: React.FC<Props> = ({ link }) => {
  const src = `https://onelineplayer.com/player.html?autoplay=false&autopause=false&muted=false&loop=false&url=${link}&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true&buttonColor=%23ffffff&buttonSize=90`
  return (
    <div className={styles.root}>
      <iframe
        frameBorder={0}
        allowFullScreen
        scrolling="no"
        allow="autoplay;fullscreen"
        src={src}
        style={{ height: '100%', width: '100%', aspectRatio: '1280 / 720' }}
      />
    </div>
  )
}