"use client";

import { categoryControllerFindAll } from "@/services/generated";
import { CategoryList } from "./CategoryList";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

export default function Page() {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryControllerFindAll,
  });

  return (
    <div className="container">
      <CategoryList categories={categories || []} />
    </div>
  );
}
