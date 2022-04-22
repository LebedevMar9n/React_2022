import css from'./Button.module.css'

function Button({children}) {
  return (
    <button className={css.button}>{children}</button>
  )
};

export {Button}