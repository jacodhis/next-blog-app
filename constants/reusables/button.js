import classes from './button.module.css'
const Button = (props) => {
    const { onClick , children } = props
    
    return <button type="submit" onClick={onClick} className={classes.button}>{ children}</button>
}

export default Button;