import { useContext } from 'react'
import { SidebarContext, sidebarContext } from '../context/sidebarContext'

import { useGetLessonsQuery } from "../graphql/generated";

import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  const { isSidebarOpen } = useContext(sidebarContext) as SidebarContext

  return (
    <aside className={`transition-all w-[348px] lg:visible ${!isSidebarOpen ? 'lg:block hidden' : 'visible absolute z-50 min-w-full min-h-screen'} bg-gray-700 p-6 border-l border-gray-600`}>
      <span className="font-bold text-[1.5rem] lg:text-[2rem] pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>
      <div className="flex flex-col gap-8 text-[1.15rem]">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}