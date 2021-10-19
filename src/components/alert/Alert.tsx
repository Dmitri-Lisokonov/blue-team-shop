import './Alert.css';

const Alert = (props: { type: string, message: string }) => {

    return (
        <div className={props.type}>
            {props.message}
        </div>
    )
}

export default Alert;