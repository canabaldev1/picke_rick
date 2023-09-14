import React from "react";
import styles from "./Card.module.css";
import statusImg from "./status.png";
import speciesImg from "./species.png";
import genderImg from "./gender.png";
import originImg from "./origin.png";
import close from "./close.png";

export default function Card(props) {
    return (
        <div className={styles.divContainer}>
            {/* <img src="./origin.png" alt="origin" /> */}
            <div className={styles.divHeader}>
                <img src={props.image} alt={props.name} />
                <button className={styles.closeButton} onClick={props.onClose}>
                    <img src={close} alt="close" />
                </button>

                <div className={styles.info}>
                    <img
                        className={styles.imgStatus}
                        src={statusImg}
                        alt="status"
                    />
                    <div className={styles.divStatus}>
                        <h2 className={styles.h2Status}>{props.status}</h2>
                    </div>

                    <img
                        className={styles.imgSpecies}
                        src={speciesImg}
                        alt="species"
                    />
                    <div className={styles.divSpecies}>
                        <h2 className={styles.h2Species}>{props.species}</h2>
                    </div>

                    <img
                        className={styles.imgGender}
                        src={genderImg}
                        alt="gender"
                    />
                    <div className={styles.divGender}>
                        <h2 className={styles.h2Gender}>{props.gender}</h2>
                    </div>

                    <img
                        className={styles.imgOrigin}
                        src={originImg}
                        alt="origin"
                    />
                    <div className={styles.divOrigin}>
                        <h2 className={styles.h2Origin}>{props.origin.name}</h2>
                    </div>
                </div>
            </div>
            <div className={styles.divFooter}>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}
