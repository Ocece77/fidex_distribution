const stats = [
    { id: 1, name: 'Pays avec nos collaborateurs', value: '22 +' },
    { id: 2, name: 'Clients satisfaits', value: '4 000 +' },
    { id: 3, name: 'Projets réalisés', value: '120 +' },
  ]
  
const Stats = () => {
    return (
      <div className="bg-primary py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid md:grid-cols-3 gap-x-8 gap-y-16 text-center ">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="lg:text-lg/7 ">{stat.name}</dt>
                <dd className="order-first text-4xl lg:text-[3em] font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

export default Stats;