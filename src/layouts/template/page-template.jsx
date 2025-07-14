import { Link } from "react-router-dom";

export default function PageTemplate({ title, children }) {
  return (
    <>
      <div className="w-full h-full overflow-y-auto bg-400">
          <div>
            <h1 className="text-100 text-2xl pl-6">{title}</h1>
          </div>
        {children}
      </div>
    </>
  );
}
