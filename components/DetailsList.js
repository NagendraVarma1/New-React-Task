import UserDetails from "./UserDetails";

const DetailsList = (props) => {
  return (
    <ul style={{backgroundColor: 'green'}}>
      {props.list.map((data) => {
        return <UserDetails key= {data.id} name={data.name} age={data.age} />;
      })}
    </ul>
  );
};
export default DetailsList;
