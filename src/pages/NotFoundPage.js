import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      Страница не найдена. Перейти на <Link to="/">главную</Link>
    </div>
  );
}
