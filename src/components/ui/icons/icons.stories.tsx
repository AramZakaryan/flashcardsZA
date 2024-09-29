import * as icons from './index'

export default {
  title: 'Icons',
}

export const Icons = () => {
  return (
    <>
      {Object.keys(icons).map((iconKey) => {
        const IconComponent = icons[iconKey as keyof typeof icons]
        return (
          <div key={iconKey} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <IconComponent width={24} height={24} />
            <p style={{ margin: '0.25rem 0 0.25rem 0.5rem' }}>{iconKey}</p>
          </div>
        )
      })}
    </>
  )
}
