import { clsx } from 'clsx'
import s from './grade.module.scss'
import { Star, StarOutline } from '@/components'

type GradeProps = {
  grade?: number
  className?: string
}

export const Grade = ({ grade = 0, className }: GradeProps) => {
  return (
    <div className={clsx(s.gradeContainer, className)}>
      {Array.from({ length: 5 }, (_, i) =>
        i < grade ? <Star key={i} width={16} /> : <StarOutline key={i} width={16} />
      )}
    </div>
  )
}
