

const Switch = ({ isChecked, setIsChecked }) => {
  return (
    <div>
        <input id='dark-mode'type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)}></input>
        <label for="dark-mode">dark mode</label>
    </div>
  )
}

export default Switch