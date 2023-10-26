type Props = {
    time: Date
}
const Time = ({ time }: Props) => {
    return (
        <span className={"text-xl"}>
            {time.toLocaleTimeString(undefined, {
                    hour: 'numeric',
                    minute: '2-digit'
                })}
        </span>
    )
}

export default Time