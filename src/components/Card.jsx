const Card = (props) => {
  return (
    <div>
      <img src={props.picture} alt="profile picture" />
      <h1>
        {props.firstName} {props.lastName}
      </h1>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.country}</p>
    </div>
  )
}
export default Card
