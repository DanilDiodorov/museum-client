import { Button } from "@/components/ui/button";
import { Calendar, Home, Inbox } from "lucide-react";
import { FaLongArrowAltLeft } from "react-icons/fa";

import Link from "next/link";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Главная",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Статьи",
    url: "/admin/articles",
    icon: Inbox,
  },
  {
    title: "Новости",
    url: "/admin/news",
    icon: Calendar,
  },
];

export function AdminSidebar() {
  const router = useRouter();

  return (
    <div className="w-[200px] h-full bg-gray-200 p-3">
      <div className="flex flex-col gap-3">
        <Button onClick={() => router.push("/")}>
          <FaLongArrowAltLeft />
          Сайт
        </Button>
        {items.map((el) => (
          <Link href={el.url} key={el.url}>
            <div className="flex items-center gap-3">
              <el.icon size={20} />
              {el.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
