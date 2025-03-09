import { Link } from "react-router";

const BreadCrumb = ({ path }) => {
  const breadCrumb = path.split("/").filter(Boolean);
  console.log(breadCrumb.slice(0, breadCrumb.length - 1))

  return (
    <div>
      {breadCrumb?.length > 1 ? (
        <>
            {breadCrumb.slice(0, breadCrumb.length - 1).map((item, i) => (
              <Link
                key={i}
                to={`/${breadCrumb.map(item => item.charAt(0).toUpperCase() + item.slice(1)).slice(0, i + 1).join("/")}`}
                className="text-blue-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)} / { " "}
              </Link>
            ))}
           {breadCrumb[breadCrumb.length - 1].split("%20").join(" ")}
        </>
      ) : (
        breadCrumb
      )}
    </div>
  );
};

export default BreadCrumb;
