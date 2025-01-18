"use client";

import { categoryControllerFindAll, CategoryDto } from "@/services/generated";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { CategoryForm } from "./CategoryForm";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { CategoryItem } from "./CategoryItem";
import { Accordion } from "@/components/ui/accordion";
import { useCategoryUpdateIndex } from "../../_hooks/use-category-update";

export const CategoryList = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryControllerFindAll(),
  });
  const { mutate: updateIndexMutate } = useCategoryUpdateIndex();

  const [categories, updateCategories] = useState<CategoryDto[] | null>(null);

  useEffect(() => {
    if (data) {
      updateCategories(data);
    }
  }, [data]);

  const handleDragEnd = async (result: any) => {
    if (!result.destination || !categories) {
      return;
    }
    const updatedCategories = Array.from(categories);
    const [movedCategory] = updatedCategories.splice(result.source.index, 1);
    updatedCategories.splice(result.destination.index, 0, movedCategory);
    updateCategories(updatedCategories);

    const ids = updatedCategories.map((el) => ({ id: el.id }));

    updateIndexMutate(ids);
  };

  return (
    <div>
      <CategoryForm
        openButtonText={<Button>Добавить категорию</Button>}
        okButtonText="Добавить"
        modalTitle="Добавить"
        className="mt-3"
      />
      <Accordion type="single" collapsible>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="categories">
            {(droppableProvider) => (
              <div
                ref={droppableProvider.innerRef}
                {...droppableProvider.droppableProps}
              >
                {categories?.map((el, index) => (
                  <CategoryItem key={el.id} category={el} index={index} />
                ))}
                {droppableProvider.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Accordion>
    </div>
  );
};
