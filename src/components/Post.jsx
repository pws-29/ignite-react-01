import { useState } from 'react';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/wspietro.png " alt="avatar" />
          <div className={styles.authorInfo}>
            <strong>Pietro Weg Sera</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 8h13" dateTime="2022-05-11 08:13:08">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>Link: <a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário...'
          onChange={e => setTextareaValue(e.target.value)}
          value={textareaValue}
        />

        {textareaValue && <button type='submit'>Publicar</button>}

      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};