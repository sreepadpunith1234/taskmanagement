"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { useStore } from "@/lib/store"
import { motion } from "framer-motion"
import { format } from "date-fns"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const tasks = useStore((state) => state.tasks)

  const tasksForSelectedDate = date
    ? tasks.filter(
        (task) =>
          format(new Date(task.dueDate), "yyyy-MM-dd") ===
          format(date, "yyyy-MM-dd")
      )
    : []

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>

      <div className="grid gap-6 md:grid-cols-[400px,1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Tasks for {date ? format(date, "MMMM d, yyyy") : "Selected Date"}
            </h3>
            {tasksForSelectedDate.length === 0 ? (
              <p className="text-muted-foreground">No tasks for this date</p>
            ) : (
              <div className="space-y-4">
                {tasksForSelectedDate.map((task) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="rounded-lg border p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {task.description}
                        </p>
                      </div>
                      <div
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          task.status === "completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : task.status === "in-progress"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
                        }`}
                      >
                        {task.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}