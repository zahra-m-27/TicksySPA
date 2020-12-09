import React from 'react'
import styles from './styles.module.scss'

interface Props {
    title: string;
    description: string;
    pic: string;
    badge: string;
}

export default function Topic({
    title,
    description,
    pic,
    badge

}: Props) {

    return (
        <div className={styles.topic}>
            <div className={styles.topic_badge}><img src={badge} /></div>
            <div className={styles.topic_content}>
                <h3>{title}</h3>
                <h4>{description}</h4>
            </div>
            <div className={styles.topic_pic}><img src={pic} /></div>
        </div>
    )
}