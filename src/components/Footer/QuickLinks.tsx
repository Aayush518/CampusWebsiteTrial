interface QuickLinkProps {
  title: string;
  links: string[];
}

export function QuickLinks({ title, links }: QuickLinkProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-6">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}