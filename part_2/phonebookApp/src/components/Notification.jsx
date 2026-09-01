const Notification = ({ message, classNameString }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={classNameString}>
      {message}
    </div>
  )
}

export default Notification