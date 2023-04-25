const UserDetails = (props) => {
  return (
      <li style={{margin: "5px" }}>
        {`${props.name} (${props.age} years old) `}
      </li>
  );
};

export default UserDetails;
