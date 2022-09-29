import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/lucasroseti.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>User</strong>
              <time title="24 de setembro às 15:10" dateTime="2022-09-24">Cerca de 1h atrás</time>
            </div> 

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}