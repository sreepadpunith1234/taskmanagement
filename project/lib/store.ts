import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Task = {
  id: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  status: 'todo' | 'in-progress' | 'completed'
  dueDate: string
  createdAt: string
}

type TaskStore = {
  tasks: Task[]
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void
  updateTask: (id: string, task: Partial<Task>) => void
  deleteTask: (id: string) => void
  user: {
    isAuthenticated: boolean
    email: string | null
  }
  setUser: (email: string | null) => void
  logout: () => void
}

export const useStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      user: {
        isAuthenticated: false,
        email: null,
      },
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      updateTask: (id, updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      setUser: (email) =>
        set(() => ({
          user: {
            isAuthenticated: !!email,
            email,
          },
        })),
      logout: () =>
        set(() => ({
          user: {
            isAuthenticated: false,
            email: null,
          },
        })),
    }),
    {
      name: 'task-store',
    }
  )
)