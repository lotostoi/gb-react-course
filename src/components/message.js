import style from '../assets/scss/message/message.module.scss';

console.log(style)
export const Message = ({myContent}) => {
    return (
        <div className={style.messageWrapper}>
            <p className={style.messageBody}>{myContent}</p>
        </div>
    )
}