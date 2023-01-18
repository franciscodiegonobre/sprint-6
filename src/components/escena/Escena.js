/* export default function Escena(props) {
    return <p>"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"</p>
} */

export default function Escena(props) {
    return (
        <div>
            <p>{props.story}</p>
        </div>
    )
}