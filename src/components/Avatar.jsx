import styles from './Avatar.module.css'

export function Avatar({ src, hasBorder = false }) {
  const avatar = hasBorder ? styles.avatarWithBorder : styles.avatar

  return <img className={avatar} src={src} />
}