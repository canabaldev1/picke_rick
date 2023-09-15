import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
    console.log(props.characters);
    return (
        <div className={styles.container}>
            {props.characters.map((character) => {
                return (
                    <Card
                        key={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin}
                        image={character.image}
                        onClose={() =>
                            window.alert("Emulamos que se cierra la card")
                        }
                    />
                );
            })}
        </div>
    );
}
