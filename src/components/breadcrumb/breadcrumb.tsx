import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

type Props = {
    homepath: string
}

const BreadCrumb = (props: Props) => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    
    return (
      <div>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item className="b1 breadcrumb-link">
              <Link to="/">{props.homepath}</Link>
            </Breadcrumb.Item>
          ) : (
              <Breadcrumb.Item className="b1 breadcrumb-link">{props.homepath}</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item key={index} className="b2">{name}</Breadcrumb.Item>
            ) : (
                <Breadcrumb.Item key={index} className="b1 breadcrumb-link">
                  <Link to={`${routeTo}`}>{name}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;