import Card from "../Home/Card";
import NavBar from "../navbar/NavBar";
import { useUserContext } from "../context/Context";
const Fashion = () => {
  const { data } = useUserContext();
  return (
    <div>
      <NavBar />
      {data?.map((item) => {
        const { category } = item;
        //console.log(category);
        const da = category === "jewelery";

        return (
          <>
            <Card data={da} />
          </>
        );
      })}
    </div>
  );
};

export default Fashion;
