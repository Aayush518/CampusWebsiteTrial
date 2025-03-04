interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHeader({ title, subtitle, image = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000" }: PageHeaderProps) {
  return (
    <div className="relative">
      <div className="h-[200px] md:h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/50" />
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-gray-200 max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}